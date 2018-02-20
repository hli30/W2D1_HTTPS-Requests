var https = require("https");
var chuncks = [];

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
    };

function getAndPrintHTMLChunks (options) {

    let reqOptions = {
        host: options.host,
        path: options.path
    };

    https.get(reqOptions, function(response) {

        response.on("data", function(dataChunk) {
            chuncks.push(dataChunk);
        });

        response.on("end", function() {
            var msg = Buffer.concat(chuncks).toString("utf-8");
            console.log(msg);
        });
    });
}

getAndPrintHTMLChunks(requestOptions);