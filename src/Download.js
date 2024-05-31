import React from 'react'
import './Download.css'
// import Disp__img

import new_icon from './assets/new.png'
import v_bullet from './assets/check.png'

function Download(props) {
	function show_popup() {
		if (props.img_bg_no_bg != '') {		//no pic uploaded ? disable download button
			props.show_download_popup_func();
		}
	}

	return (
		<div className={'download_cont ' + (props.comp_side === 'bottom' ? 'border_comp_top' : '')}>
			<div className='download_title'>
				{props.title}

				{props.comp_side === 'bottom' ?
					<img src={new_icon} alt='new post' className='new_icon' />
					: ""}
			</div>
			<div className='download_desc'>
				{props.desc}
			</div>
			<div className={props.img_bg_no_bg != '' ? 'default_btn download_btn' : 'default_btn disabled_btn'} onClick={show_popup}>
				{props.btn_text}
			</div>

			<div className='small_text_download'>
				{props.small_text}
				<img src={v_bullet} alt="alt prop" className='check_icon' />
			</div>
		</div>
	)
}
export default Download