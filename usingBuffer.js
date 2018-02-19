var https = require("https");
var chuncks = [];

function getAndPrintHTMLChunks () {

    var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
    };

    https.get(requestOptions, function(response) {
        // response.setEncoding("utf-8");

        response.on("data", function(dataChunk) {
            chuncks.push(dataChunk);
        });

        response.on("end", function() {
            var msg = Buffer.concat(chuncks).toString("utf-8");
            console.log(msg);
        });
    });
}

getAndPrintHTMLChunks();