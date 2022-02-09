# DISCORD REACT SPAMMER

epic chrome extension to spam reactions on every discord message in sight

[Demo video](https://www.youtube.com/watch?v=Day6uASjhKE)

# install

1. download this repository, unzip
2. go to chrome://extensions in Chrome
3. click "developer mode" (top right) so you can install custom extensions
4. click load unpacked and select the folder u just downloaded

now it'll spam reacts on any discord channel you open. have fun :)

# HOW DO I CHOOSE AN EMOJI?!?

For now, the emoji you choose has to be under "Frequently used". This will hopefully be fixed in a future version.

1. Open src/inject/inject.js
2. Change `green_square` on line 2 to your emoji of choice


Sometimes emojis have multiple names. In this case you'll want to update line 2 with the first name that appears in the Add Reaction search bar. For instance, in the screenshot below, set line 2 to:

`const EMOJI_NAME = "handshake"`


![alt text](https://github.com/ridoy/discord-react-spammer/blob/master/example.png?raw=true)

