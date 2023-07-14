const express = require('express');
const app = express();
app.use(express.json());

const port = 5000;

// add a default route
app.get('/', function (req, res) {
  res.send('You have reached the top-level route with a GET');
})

const studentRouter = require("./routes/student.routes")
app.use('/api', studentRouter);


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})