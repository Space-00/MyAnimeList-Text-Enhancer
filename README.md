# MyAnimeList Text Enhancer

MyAnimeList Text Enhancer is a Tampermonkey script that enhances the readability of text on MyAnimeList by enlarging and bolding Persian and English text. Enjoy a more visually appealing browsing experience with customized font sizes for different languages.

## Features

- Enlarges and bolds Persian and English texts for better readability.
- Automatically processes new content loaded dynamically on the page.

## Installation

1. **Install Tampermonkey** (if you haven't already):
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Tampermonkey for other browsers](https://www.tampermonkey.net/)

2. **Install MyAnimeList Text Enhancer**:
   - Open Tampermonkey dashboard.
   - Click on the `+` icon to create a new script.
   - Go [here](https://raw.githubusercontent.com/Space-00/MyAnimeList-Text-Enhancer/main/MyAnimeList%20Text%20Enhancer.js) and the code (copy everything)
   - Go back to that Tampermonkey new script tab and delete whatever is wrriten then copy and paste the script code that you've copied.
   - Save the script.

## Usage

The script will automatically run on any MyAnimeList page. Persian and English texts will be displayed in a larger and bold font for better readability.

_________________________________________________________________________________
## Customization

To change the font size for English text, modify the following line in the script:

```javascript
span.style.fontSize = '1.2em'; // Font size for English text
```

And to change the font size for Persian text, modify the following line in the script:

```javascript
span.style.fontSize = '1.5em'; // Font size for Persian text
```

Adjust the value to your preferred font size.
_________________________________________________________________________________


## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.
