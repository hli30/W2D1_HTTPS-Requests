var getHTML = require("../http-functions");

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/1337.html'
};

function printHTML (html) {
    // Will implement leetspeak transformation if time permits
}

getHTML(requestOptions, printHTML);