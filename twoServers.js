/**
 * Created by webohweb on 4/18/17.
 */
// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT1 = 7000;

// Here we create a generic function to handle requests and responses
function handleRequest1(request, response) {

    // The below statement is triggered (client-side) when the user visits the PORT URL
    response.end("Say Something Good about themselves " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest1 function to empower it with functionality.
var server = http.createServer(handleRequest1);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT1, function() {

    // The below statement is triggered (server-side) when a user visits the PORT URL
    console.log("Good Server: http://localhost:%s", PORT1);

});
var PORT2 = 7500;
function handleRequest2(request, response) {

    // The below statement is triggered (client-side) when the user visits the PORT URL
    response.end("Say Something Bad about themselves " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest1 function to empower it with functionality.
var serverTwo = http.createServer(handleRequest2);

serverTwo.listen(PORT2, function() {

    // The below statement is triggered (server-side) when a user visits the PORT URL
    console.log("Bad Server: http://localhost:%s", PORT2);

});
