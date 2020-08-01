// CHANGE THIS VARIABLE TO YOUR EMOJI! e.g. ":heart:" or ":flushed:"
const EMOJI_NAME = ":heart:"
console.log(EMOJI_NAME);

document.arrive('#messages-0', function() {
    let messages = $('[id^=messages]');
    for (let message of messages) {
        $(message).focus()
    }
    let reactionButtons = $('[aria-label="Add Reaction"]')
    for (let i = reactionButtons.length - 1; i >= 0; i--) {
        let reactionButton = reactionButtons[i];
        let time = (reactionButtons.length - 1 - i) * 500;
        setTimeout(function() {
            reactionButton.click();
            console.log('clicking button time ' + time + 'ms');
            let emojiSelector = $('[aria-label="' + EMOJI_NAME + '"]')
            emojiSelector.click()
        }, time);
    }
})
