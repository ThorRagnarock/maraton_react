const express = require('express');
const app = express();
const cors = require('cors'); //cross origin request sharing

app.use(cors());
const fileupload = require('express-fileupload');
app.use(fileupload());

app.use(express.static('no_bg_images'));
app.use(express.static('uploaded_img'));

const sent_to_api = require('./send_to_api')


app.post('/upload_img', function (req, res) {

	const d = new Date();
	let time = d.getTime();


	let imageFile = req.files.fileImg;
	let imagePath = `${__dirname}/uploaded_img/${time}${imageFile.name}`;

	imageFile.mv(imagePath, async err => {
		if (err) {
			return res.status(500).send(err);
		}



		await sent_to_api(imagePath, time + req.files.fileImg.name); //here also supposed to go the callback
		res.send(`${time}${req.files.fileImg.name}`)

		console.log("imagePath: ", { file: imagePath });
	});
});
console.log('server running... ')

app.listen(5100);




//that helps to reach directly to the no_bg_images
//means that http://localhost:5000/ takes directly to \no_bg_images\

// clg for console.log(object);
// clo for console.log('object :', object);
// ccl for console.clear(object);
// cer for console.error(object);
// ctr for console.trace(object);
// clt for console.table(object);
// cin for console.info(object);
// cco for console.count(label);
