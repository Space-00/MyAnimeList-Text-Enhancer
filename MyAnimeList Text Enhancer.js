// ==UserScript==
// @name         MyAnimeList Text Enhancer
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Enlarges and bolds Persian and English texts on webpages with different font sizes for each language
// @author       Reza
// @match        https://myanimelist.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to detect Persian text
    function containsPersian(text) {
        const persianRegex = /[\u0600-\u06FF]/;
        return persianRegex.test(text);
    }

    // Function to detect English text
    function containsEnglish(text) {
        const englishRegex = /[A-Za-z]/;
        return englishRegex.test(text);
    }

    // Function to increase font size and bold Persian and English text with different settings
    function processTextNode(node) {
        if (containsPersian(node.nodeValue)) {
            const span = document.createElement('span');
            span.className = 'enlarged-bold-persian';
            span.style.fontSize = '1.5em'; // Font size for Persian text
            span.style.fontWeight = 'bold';
            span.textContent = node.nodeValue;
            node.parentNode.replaceChild(span, node);
        } else if (containsEnglish(node.nodeValue)) {
            const span = document.createElement('span');
            span.className = 'enlarged-bold-english';
            span.style.fontSize = '1.1em'; // Font size for English text
            span.style.fontWeight = 'bold';
            span.textContent = node.nodeValue;
            node.parentNode.replaceChild(span, node);
        }
    }

    function processNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            processTextNode(node);
        } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('processed')) {
            node.classList.add('processed');
            for (const child of node.childNodes) {
                processNode(child);
            }
        }
    }

    function processNodes(nodes) {
        for (const node of nodes) {
            processNode(node);
        }
    }

    // Initial run on the document body
    processNodes(document.body.childNodes);

    // Throttling function to limit the frequency of execution
    function throttle(callback, limit) {
        let waiting = false;
        return function() {
            if (!waiting) {
                callback.apply(this, arguments);
                waiting = true;
                setTimeout(() => {
                    waiting = false;
                }, limit);
            }
        };
    }

    // Observer callback with throttling
    const observerCallback = throttle((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                processNodes(mutation.addedNodes);
            }
        }
    }, 100);

    // Observe for future changes and apply the script
    const observer = new MutationObserver(observerCallback);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
