/*
 * DISCORD REACT SPAMMER
 * Be a nuisance.
 *
 * Last updated: Feb 9 2022
 * author @ridoy
 *
 */

/**************************************************************************************
 * IMPORTANT: CHANGE THIS VARIABLE TO YOUR EMOJI!
 * Make sure the emoji you choose is under "Frequently Used" in the Add Reaction menu.
 **************************************************************************************/
const EMOJI_NAME = "flushed"

// Other constants
const BUTTON_WRAPPER_CLASS = "wrapper-2vIMkT";
const DEBUG_MODE = true;

console.log(`Discord React Spammer has loaded and will attempt to spam ${EMOJI_NAME}.`);
// Wait for messages to load.

function check()  {
    console.log(document.querySelectorAll(`.${BUTTON_WRAPPER_CLASS}`));
    setTimeout(check, 300);
}




chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(request, sender, sendResponse)
  }
);

let messages = new Set();

/*
setInterval(function() {
    let messageElements = document.querySelectorAll("[id^='chat-messages-400411213948780545']");
    let newMessages = [];
    messageElements.forEach(msgEl => {
        let msgId = msgEl.id.replace('chat-messages-400411213948780545-', '');
        if (!messages.has(msgId)) {
            newMessages.push(msgId);
            messages.add(msgId);
        }
    });
    
    if (newMessages.length > 0) {
        console.log(newMessages);
        //sendToQueue(newMessages);
    }

}, 1000);
*/

//check();
/*
document.arrive(`[class^=${BUTTON_WRAPPER_CLASS}]`, {onceOnly: true}, function() {
    let messages = $('[class^="message-"]');
    for (let message of messages) {
        $(message).focus();
    }

    // Open Add Reaction menu for each visible message
    // Apply emoji to each message in reverse chronological order
    let buttonWrappers = document.querySelectorAll(`.${BUTTON_WRAPPER_CLASS}`);
    let reactionButtons = [];
    buttonWrappers.forEach((wrapper) => reactionButtons.push(wrapper.firstChild));
    console.log(buttonWrappers, reactionButtons);
    for (let i = reactionButtons.length - 1; i >= 0; i--) {
        let reactionButton = reactionButtons[i];
        let time = (reactionButtons.length - 1 - i) * 500;

        // We generally want to avoid being rate-limited by Discord.
        // TODO Implement retries for requests that receive a 429 response
        setTimeout(function() {
            debug("Reached timeout");
            reactionButton.click();
            retryClick();
        }, time);
    }
});
*/
function retryClick() {
    setTimeout(function() {
        const emojiSelector = document.querySelector(`[data-name="${EMOJI_NAME}"]`);
        if (!emojiSelector) {
            retryClick();
        } else {
            emojiSelector.click();
        }
        return;
    }, 10);
}


function debug(msg) {
    if (DEBUG_MODE) console.log(msg);
}
