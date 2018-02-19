var https = require("https");
var chuncks = [];

module.exports = function getHTML (options, callback) {

    let reqOptions = {
        host: options.host,
        path: options.path
    };
    
    https.get(options, function(response) {

        response.on("data", function(dataChunk) {
            chuncks.push(dataChunk);
        });

        response.on("end", function() {
            var msg = Buffer.concat(chuncks).toString("utf-8");
            callback(msg);
        });
    });
}