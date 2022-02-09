# DISCORD REACT SPAMMER

A Google Chrome extension. Automatically spam reactions on every Discord message in sight.

# Demo Video

Clicking this image takes you to YouTube.

[![Watch the demo video](https://img.youtube.com/vi/Day6uASjhKE/maxresdefault.jpg)](https://www.youtube.com/watch?v=Day6uASjhKE)

# Install

1. Click the green "Code" button on this repository. Download ZIP. Unzip folder.
2. Go to `chrome://extensions` in Chrome
3. Click "Developer Mode" (top right) so you can install custom extensions
4. Click "Load Unpacked" and select the unzipped folder from step 1.
5. Open `src/inject/inject.js` and update line 2 with an emoji of your choice (instructions below)

Then, open Discord. Go to a channel. You should see a sea of emojis as soon as the chat loads.

# HOW DO I CHOOSE AN EMOJI?!?

For now, the emoji you choose has to be under "Frequently used". This will hopefully be fixed in a future version.

1. Open src/inject/inject.js
2. Change `green_square` on line 2 to your emoji of choice

Sometimes emojis have multiple names. In that case, update line 2 with the first name that appears in the Add Reaction search bar. For instance, 🤝 is `:handshake: :shaking_hands:`, so we set line 2 to:

`const EMOJI_NAME = "handshake";`

![alt text](https://github.com/ridoy/discord-react-spammer/blob/master/example.png?raw=true)

# Disclaimer

Use at your own risk. I am not responsible if your account gets locked as a result of using this script. 

It's never happened as far as I know, but keep it in mind.
