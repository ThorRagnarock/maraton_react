// import logo from './logo.svg';
import './Bg.css';
import close from './assets/close.png'
import Download from './Download';
import DispImg from './DispImg';

import banner from './assets/banner.png'
import logo from './assets/logo.png'


import { useState, useRef } from 'react';

function Bg() {

	const [selected_tab, setSelected_tab] = useState(true);
	const [show_eula, setShow_eula]=useState(false)


	function show_popup_eula() {
		setShow_eula(!show_eula);

	}
	function selected() {
		setSelected_tab(!selected_tab);
	}

	return (
		<div>
			<div className="bg_cont">
				<div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
				<img src={close} className="close_top" alt="alt prop" />

				<div className="upload_btn gray_btn">העלאת תמונה</div>

				<div className='content_div'>
					<div className='content_left'>
						<div className='tabs_cont'>
							<div className={'text_bg_no_bg ' + (selected_tab === true ? 'border_bottom_selected' : '')} onClick={selected}>הוסר הרקע</div>
							<div className={'text_bg_orig ' + (selected_tab !== true ? 'border_bottom_selected' : '')} onClick={selected}>מקורי</div>
						</div>

						{/* and if !"text_bg_no_bg border_bottom_selected" than onClick={selected}  */}
						<div className='content_left_middle'>
							{ selected_tab === true ? <DispImg comp_type='no_bg_comp' /> : <DispImg comp_type='orig_comp' /> }
						</div>
						<footer className='footer_left_content'>
							<div className='footer_text'>
								ע״י העלאת תמונה אתה מסכים לתנאים ולהגבלות. אתר זה מוגן וחלים בו הגבלות פרטיות ותנאי השירות
							</div>

							<button className='footer_btn gray_btn' onClick={show_popup_eula}>תקנון החברה</button>
						</footer>

					</div>
					<div className='content_right'>
						<div className='content_right_middle'>
							<Download title="תמונה חינם" desc="תצוגה מלאה של תמונה" btn_text="הורד" small_text="האיכות הטובה ביותר עד 0.25 פיקסל" comp_side="top" ></Download>

							<Download title="Pro" desc="תמונה מלאה" btn_text="HD הורד" small_text="האיכות הטובה ביותר עד 25 פיקסל" comp_side="bottom" ></Download>
						</div>
					</div>

					
				</div>
				<div className='footer'>
						<img src={banner} alt='banner' />
						<img src={logo} alt='banner logo'/>
					</div>
			</div>
			{
				show_eula ?
					<>
						<div className='overlay'></div>
						<div className='show_eula'>
							<img src={close} onClick={show_popup_eula} alt='x for close' />
							<div className='eula_text'>
								blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
								blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
								blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
							</div>

						</div>
					</>
					:
					<></>
			}
		</div>

	);
}

export default Bg;
