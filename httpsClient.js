var https = require("https");

function getAndPrintHTMLChunks () {

    var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
    };

    https.get(requestOptions, function(response) {
        response.setEncoding("utf-8");

        response.on("data", function(dataChunk) {
            console.log(dataChunk, "\n");
        });
    });
}

getAndPrintHTMLChunks();