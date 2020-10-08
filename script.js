const net = require("net")
var nodes = [];

const server = net.createServer(function(socket) {

    socket.on("data", function (data) {
        var message = data.toString().split(":")
        var type = message[0];
        var ip = message[1];

        if(type == "node") {
            console.log("Node connected!")

            if(!nodes.includes(ip)) {
                nodes.push(ip)
                console.log("Newly registered!")
            } else {
                console.log("Already registered!")
            }


            console.log(nodes.toString())
        } else if(type == "web") {
            console.log("Web connected!")
        } else {
            console.log("Unknown connected!")
        }

        socket.write("\n hello")
        socket.write("true;helloWorld;corex.technology;12345")

        socket.pipe(socket)
    })

});

server.on("connection", function () {
    console.log("Client connected!")
})



server.listen(2005);