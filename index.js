const app = require('../prueba_2/server');
const dbConnect = require('../prueba_2/db');

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