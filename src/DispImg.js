import './DispImg.css'; 
import React, { useRef } from 'react'


function DispImg(props) {
	const inputElement = useRef();

	const open_input = () => {
		inputElement.current.click();
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
									<input type='color' ref={inputElement} className='color_input' />


									<button className='color_btn' onClick={open_input}>צבע רקע</button>
								</div>
							</>
							: <></>
					}
				</div>
				{
					props.img_bg !== ''
						?
						<div>
							<img src={props.img_bg} className='img_bg' />
						</div>
						:
						<></>
				}

			</div>
		</>
	)
}

export default DispImg