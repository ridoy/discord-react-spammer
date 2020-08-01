# DISCORD REACT SPAMMER

epic chrome extension to spam reactions on every discord message in sight

# install

1. download this repository, unzip
2. go to chrome://extensions in Chrome
3. click "developer mode" (top right) so you can install custom extensions
4. click load unpacked and select the folder u just downloaded

now it'll spam reacts on any discord chat you open up. have fun :)

# HOW DO I CHOOSE AN EMOJI?!?

lower your voice okay. open src/inject/inject.js and change `:heart:` on the second line to your emoji of choice. if u wanna use a custom emoji make sure it's available in the server you're trying to spam.

sometimes emojis have multiple names, like `:slight_smile:` and `:slightly_smiling_face:` are equivalent. so you have to replace `EMOJI_NAME` like `const EMOJI_NAME = ":slight_smile: :slightly_smiling_face:"`. getting all the names of an emoji is easy just look at the add reaction menu:

![alt text](https://github.com/ridoy/discord-react-spammer/blob/master/example.png?raw=true | height=100)


hit me on twitter if it breaks okay http://twitter.com/skitzington
