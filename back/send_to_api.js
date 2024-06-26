const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

module.exports = async function send_to_api(imageName_path, image_name, color, size) {
	//now we look in documantation for the color parameter
	const inputPath = imageName_path;
	const formData = new FormData();

	formData.append('size', 'auto');
	formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
	formData.append('bg_color', color);
	// formData.append('size', )
	
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
			
		})
		.catch((error) => {
			
			return console.error("request failed: ", error)
		});
}

