import React, { useState } from 'react'
import './DownloadPopup.css'
import close from './assets/close1.png'
import not_robot from './assets/not_robot.png'
// import { response } from 'express';


function DownloadPopup(props) {
	const [checkbox_state, setCheckbox_state] = useState(false);
	const [show__error, setShow_error] = useState(false);

	function close_popup() {
		props.show_download_popup_func();
	}
	//function dummy_func() { console.log('this interaction is working') }

	const image_name = props.img_bg_no_bg;

	const shorten_name = image_name.split("/");


	function download_img() {
		if (checkbox_state) {
			fetch(image_name)   //'http://localhost:5100/' + i
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = shorten_name[3];
					a.click();
				})
				//window.location.href = response.url;
			})
		}  else {
			setShow_error(true);
		}
		
	}

	function checkbox_checked() {
		setCheckbox_state(!checkbox_state);
		setShow_error(false);
	}


	return (
		<>
			<div className='overlay_wrapper'>
				<div className='overlay'></div>
				<div className='download_pop_cont'>
					{/* <p>DownloadPopup</p> */}
					<img src={close} alt='thing' className='download_popup_close' onClick={close_popup} />
					<div className='download_popup_top_div'>

					</div>


					<div className='download_popup_title'>אישור להורדת תמונה</div>
					<div className='download_popup_subtitle'>האם להוריד את התמונה?</div>

					<div className='not_robot_cont'>
						<input type='checkbox' id='botcheck' className='checkbox_popup' onChange={checkbox_checked} />

						<label for='botcheck' className='not_robot_text '>אני לא רובוט</label>
						<img src={not_robot} alt='robo bot' className='not_robot' />						{show__error ? <span className='not_robot_error'>נא אשר אנושיותך</span> : <></>}


					</div>

					<div className='approve_button_cont'>
						<button className='approve_btn big_b' onClick={download_img}>אישור</button>
						<button className='cancel_btn big_b' onClick={close_popup}>ביטול</button>

					</div>

				</div>
			</div>



		</>
	)
}

export default DownloadPopup