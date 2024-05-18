const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

module.exports = async function send_to_api(imageName_path, image_name, callback) {

	const inputPath = imageName_path;
	const formData = new FormData();

	formData.append('size', 'auto');
	formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
	////////////////////////////////////

	await axios({
		method: 'post',
		url: 'https://api.remove.bg/v1.0/removebg',
		data: formData,
		responseType: 'arraybuffer',
		headers: {
			...formData.getHeaders(),
			'X-Api-Key': 'RogeqXgotyk5RNpwG5opGp6y',
		},
		encoding: null
	})
		.then((response) => {
			if (response.status !== 200)
				console.error('Error:', response.status, response.statusText);
			fs.writeFileSync("no_bg_images/no_bg_" + image_name, response.data)
			// callback(`error processing image: ${response.statusText}`);
			// } else {
			// 	fs.writeFileSync(`no_bg_images/${image_name}`, response.data);
			// 	callback(null, `no_bg_images/${image_name}`);
			// }
			////////////
		})
		.catch((error) => {
			// console.error('Request failed:', error);
			// callback(error);
			return console.error("request failed: ", error)
		});
}

