import React from 'react';
import {Link} from 'react-router-dom'

function AboutMovie({ selected, closePopup })
{
    
	return (
		<section className="popup">
			<div className="content">
				<div className="plot">
					<img src={selected.Poster} alt="" />
					
				</div>
				<div className='plot2'>
					<h2>{selected.Title} <span>({selected.Year})</span></h2>
					<p className="rating">Rating:⭐️ {selected.imdbRating}</p>
					<p id="rating"><span>Genre: {selected.Genre}</span>	</p>
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>X</button>
			</div>
		</section>
	)
}

export default AboutMovie
