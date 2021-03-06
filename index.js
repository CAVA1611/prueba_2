const app = require('./server');
const dbConnect = require('./db');

var port = (process.env.PORT || 3030);

console.log("Starting API Server at port " + port);

dbConnect().then(
    () => {
        app.listen(port);
        console.log("Server ready...!!");
    },
    err => {
        console.log("Connection Error: " + err);
    }
)