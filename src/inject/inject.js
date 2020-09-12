// CHANGE THIS VARIABLE TO YOUR EMOJI! e.g. ":heart:" or ":flushed:"
const EMOJI_NAME = ":heart:"
console.log(EMOJI_NAME);

document.arrive('[class^="message-"]', {onceOnly: true}, function() {
    let messages = $('[class^="message-"]');
    for (let message of messages) {
        $(message).focus()
    }
    let reactionButtons = $('[aria-label="Add Reaction"]')
    console.log(reactionButtons)
    for (let i = reactionButtons.length - 1; i >= 0; i--) {
        let reactionButton = reactionButtons[i];
        let time = (reactionButtons.length - 1 - i) * 500;
        setTimeout(function() {
            reactionButton.click();
            console.log('clicking button time ' + time + 'ms');
            /*
            let objectsCategoryButton = $('[aria-label="objects"]')
            objectsCategoryButton.click();
            */

            let emojiSelector = $('[aria-label="' + EMOJI_NAME + '"]')
            emojiSelector.click()
        }, time);
    }
})
