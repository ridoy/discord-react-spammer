//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.pageAction.show(sender.tab.id);
        sendResponse();
    });


// Before we can start, we need
// First message id, channel id
// Authorization header and everything else
// Then when ready, hit new messages endpoint, hit reaction endpoint slowly

let authToken = null;
let channelId = ;
let mostRecentMessageId = ;

/*
 * Scan requests until we find one with an auth token.
 */
chrome.webRequest.onSendHeaders.addListener(
    function(request) {
        if (authToken) return;
        let auth = request.requestHeaders.filter((h) => h.name === "Authorization");
        if (auth.length > 0) {
            authToken = auth[0].value;
            startPosting();
        }
    },
    { urls: ["https://discord.com/*"] },
    ['requestHeaders']
);

function startPosting() {
    let messages = getMessages() 
        .then((response) => {
            const reader = response.body.getReader();
            return new ReadableStream({
                start(controller) {
                    function push() {
                        reader.read().then(({ done, value }) => {
                            if (done) {
                                controller.close();
                                return;
                            }
                            controller.enqueue(value);
                            push();
                        });
                    }
                    push();
                },
            });
        })
        .then((stream) =>
            new Response(stream, { headers: { "Content-Type": "application/json" } }).text()
        )
        .then((messages) => {
            const messageIds = JSON.parse(result).map(entry=>entry.id);
            addReactions();
        });
}

function getMessages() {
    return fetch(`https://discord.com/api/v9/channels/${channelId}/messages?before=${mostRecentMessageId}&limit=50`, {
        "headers": {
            "authorization": authToken,
        },
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });
}

function addReactions(ids) {
    if (ids.length <= 0) return;
    let nextId = ids.pop();
    addReaction(nextId);

    console.log(ids.length);

    setTimeout(() => { 
        addReactions(ids) 
    }, 1000);

}

function addReaction(id) {
    return fetch(`https://discord.com/api/v9/channels/${channelId}/messages/${id}/reactions/%F0%9F%98%B3/%40me?location=Message&type=0`, {
        "headers": {
            "authorization": authToken,
        },
        "body": null,
        "method": "PUT",
        "mode": "cors",
        "credentials": "include"
    })
        .then((res) => console.log(res))
        .catch(e => console.log(e, id));
}

