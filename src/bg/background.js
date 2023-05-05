let authToken = null;

/*
 * Scan requests until we find one with an auth token.
 */
chrome.webRequest.onSendHeaders.addListener(
    function(request) {
        if (authToken) return;
        let auth = request.requestHeaders.filter((h) => h.name === "Authorization");
        if (auth.length > 0) {
            authToken = auth[0].value;
        }
    },
    { urls: ["https://discord.com/*"] },
    ['requestHeaders']
);

/*
 * Listen for a "begin spam" request from the popup.
 */
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "startSpam" && authToken) {
            console.log(request);
            const channelId = request.data.url.split("/")[5];
            startPosting(channelId, request.data.emoji);
        }
    }
)

function startPosting(channelId, emoji) {
    getMessages(channelId) 
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
            const messageIds = JSON.parse(messages).map(entry=>entry.id).reverse(); // React to messages from newest to oldest
            addReactions(channelId, messageIds, emoji);
        });
}

function getMessages(channelId) {
    return fetch(`https://discord.com/api/v9/channels/${channelId}/messages?limit=50`, {
        "headers": {
            "authorization": authToken,
        },
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });
}

function addReactions(channelId, ids, emoji) {
    if (ids.length <= 0) return;
    let nextId = ids.pop();
    addReaction(channelId, nextId, emoji);

    console.log(ids.length);

    setTimeout(() => { 
        addReactions(channelId, ids, emoji) 
    }, 1000);

}

function addReaction(channelId, id, emoji) {
    return fetch(`https://discord.com/api/v9/channels/${channelId}/messages/${id}/reactions/${emoji}/%40me?location=Message&type=0`, {
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

