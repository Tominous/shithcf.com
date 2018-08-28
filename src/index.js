import 'normalize.css/normalize.css';
import './index.css';

import words from './words.js';
import sleep from './sleep.js';

const nameElement = document.getElementById('name');
let generating = false;
document.getElementById('generate').addEventListener('click', async () => {
    if (!generating) {
        generating = true;
        const word = words[Math.floor(Math.random() * words.length)] + 'HCF';
        for (let i = 0; i <= word.length; i++) {
            for (let j = 0; j < 3; j++) {
                let text = word.slice(0, i);
                for (let k = i; k < word.length; k++) {
                    text += String.fromCharCode(Math.random() * 26 + 97);
                }
                nameElement.textContent = text;
                await sleep(30);
            }
        }
        generating = false;
    }
});