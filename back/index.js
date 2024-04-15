const express = require('express');
const app = express();

const fileupload = require('express-fileupload');
app.use(fileupload());

//cross origin request sharing
const cors = require('cors'); 
app.use(cors());


app.post('/upload_img', function (req, res) {
	console.log(req.files)
})

console.log('server running... ')

app.listen(5100);

