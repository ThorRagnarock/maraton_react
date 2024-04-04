import React, { useRef, useState } from 'react'

import img_bg from './assets/img.png'
import './DispImg.css'

function DispImg(props) {
	const inputElement = useRef();

	const open_input = () => {
		inputElement.current.click();
	}
	return (
		<>
			<div className='disp_img_cont'>
				{props.comp_type !=='orig_comp' ?
					<>
						<div className='top_text'>זכור להוריד את הקבצים שלך: הם ימחקו אוטומטית כשתצא מהדף</div>
						
						<input type='color' ref={inputElement} className='color_input' />
						<button className='color_btn' onClick={open_input}>צבע רקע</button>
					</>
					: 
					<></>
				}
				<div>
					<img src={img_bg} alt="banana" className='img_bg' />
				</div>
			</div>
		</>
	)
}

export default DispImg