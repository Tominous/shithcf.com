export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function randomLetter() {
    return String.fromCharCode(Math.random() * 26 + 97);
}

export function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
