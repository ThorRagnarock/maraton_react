const express = require('express');
const app = express();
const cors = require('cors'); //cross origin request sharing

app.use(cors());

const fileupload = require('express-fileupload');
app.use(fileupload());

app.use('/no_bg_images', express.static('no_bg_images'));
app.use('/uploaded_img', express.static('uploaded_img'));

//that helps to reach directly to the no_bg_images
//means that http://localhost:5000/ takes directly to \no_bg_images\

const send_to_api = require('./send_to_api')

app.post('/upload_img', function (req, res) {
	console.log("posting from back: ", req.files);

	const imageFile = req.files.fileImg;
	// const imageSavePath = `/uploaded_img/${imageFile.name}`
	const imagePath = `${__dirname}/uploaded_img/${imageFile.name}`;

	// console.log("This is the image file...? :", imageFile)

	imageFile.mv(imagePath, err => {
		if (err) {
			return res.status(500).send(err);
		}
		//"(error, resultPath)" is what is sent/revieved as the callback
		send_to_api(imagePath, imageFile.name, (error, resultPath) => {
			if (error) {
				res.status(500).send(error);
			} else {
				res.json({ file: resultPath });
				console.log("back end is working fine..? : ", imageFile.name);
				console.log("imagePath: ", { file: imagePath });
			}
		})		// looks like back is working fine
	})
})
console.log('server running... ')

app.listen(5100);







// clg for console.log(object);
// clo for console.log('object :', object);
// ccl for console.clear(object);
// cer for console.error(object);
// ctr for console.trace(object);
// clt for console.table(object);
// cin for console.info(object);
// cco for console.count(label);



// res.json({file: `uploaded_img/${req.body.fileImg.name}`});
// console.log(res.json);