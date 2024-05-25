import './DispImg.css'; 
import React, { useRef, useState } from 'react'


function DispImg(props) {
	const inputElement = useRef();

	const [selectedBgColor, setSelectBgColor] = useState('');  //aka choose_color


	const open_input = () => {
		inputElement.current.click();
	}
	function save_color(e) {
		console.log(e.target.value);
		setSelectBgColor(e.target.value);
		props.setChooseBgColor_func(e.target.value)
	}
	return (
		<>
			<div className='disp_img_cont'>
				<div>
					{
						props.comp_type !== 'orig_comp' ?
							<>
								<div className='disp_img_opts'>
									<div className='top_text'>זכור להוריד את הקבצים שלך: הם ימחקו אוטומטית כשתצא מהדף</div>
									<input type='color' ref={inputElement} className='color_input' onChange={save_color} />


									<button className='color_btn' onClick={open_input}>
										<span>צבע רקע</span>
										<span className='color_span' style={{backgroundColor: selectedBgColor}}></span>
									</button>
								</div>
							</>
							: <></>
					}
				</div>
				{
					props.img_bg !== ''
						?
						<div>
							<img src={props.img_bg} alt="" className='img_bg' />
						</div>
						:
						<></>
				}

			</div>
		</>
	)
}

export default DispImg