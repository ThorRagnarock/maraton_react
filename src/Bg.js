// import logo from './logo.svg';
import './Bg.css';
import close from './assets/close.png'
import Download from './Download';

function Bg() {
	return (
		<div>
			<div className="bg_cont">
				<div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
				<img src={close} className="close_top" alt="alt prop" />

				<div className="upload__btn">העלאת תמונה</div>

				<div className='content_div'>
					<div className='content_left'>

						<div className='tabs_cont'>
							<div className='text_bg_no_bg'>הוסר הרקע</div>
							<div className='text_bg_orig'>מקורי</div>
						</div>

					<div className='content_left_middle'>

					</div>
					</div>
					<div className='content_right'>
						<div className='content_right_middle'>
							<Download title="תמונה חינם" desc="תצוגה מלאה של תמונה" btn_text="הורד" small_text="האיכות הטובה ביותר עד 0.25 פיקסל" comp_side="top" ></Download>

							<Download title="Pro" desc="תמונה מלאה" btn_text="HD הורד" small_text="האיכות הטובה ביותר עד 25 פיקסל"  comp_side="bottom" ></Download>



						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Bg;
