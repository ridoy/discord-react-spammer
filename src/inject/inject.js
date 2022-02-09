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
console.log(`Discord React Spammer has loaded and will attempt to spam ${EMOJI_NAME}.`);

// Wait for messages to load.
document.arrive('[class^="message-"]', {onceOnly: true}, function() {
    let messages = $('[class^="message-"]');
    for (let message of messages) {
        $(message).focus();
    }

    // Open Add Reaction menu for each visible message
    // Apply emoji to each message in reverse chronological order
    let reactionButtons = $('[aria-label="Add Reaction"]');
    for (let i = reactionButtons.length - 1; i >= 0; i--) {
        let reactionButton = reactionButtons[i];
        let time = (reactionButtons.length - 1 - i) * 500;

        // We generally want to avoid being rate-limited by Discord.
        // TODO Implement retries for requests that receive a 429 response
        setTimeout(function() {
            reactionButton.click();
            let emojiSelector = $('[data-name="' + EMOJI_NAME + '"]');
            emojiSelector.click();
        }, time);
    }
});

