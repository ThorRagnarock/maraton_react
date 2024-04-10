import React from 'react'
import './DownloadPopup.css'
import close from './assets/close1.png'
import not_robot from './assets/not_robot.png'


function DownloadPopup(props) {

	function close_popup() {
		props.show_download_popup_func();
	}
	function dummy_func() {
		console.log('this interaction is working')
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
						<input type='checkbox' id='botcheck' className='checkbox_popup' onChange={dummy_func}/>
						<label for='botcheck' className='not_robot_text '>אני לא רובוט</label>
						<img src={not_robot} alt='robo bot' className='not_robot' />
					</div>

					<div className='approve_button_cont'>
						<button className='approve_btn big_b' onClick={dummy_func}>אישור</button>
						<button className='cancel_btn big_b' onClick={dummy_func}>ביטול</button>

					</div>

				</div>
			</div>



		</>
	)
}

export default DownloadPopup