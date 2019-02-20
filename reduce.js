'use strict';

function decode(sentence) {
  const arr = sentence.split(' ');
  const decoded = arr.reduce(function(curTranslated, word) {
    if (word.length === 3) {
      curTranslated += ' ';
    } else {
      curTranslated += word.slice(-1).toUpperCase();
    }
    return curTranslated;
  }, '');
  return decoded;
}

console.log(decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));

