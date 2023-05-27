import React, { Component } from 'react';
import Slider from 'react-slick';
import   './servise.scss';
import service from '../../assets/images/astrolab tizim 1.png';

export default class ServiseCarousel extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
      		arrows:false,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			speed: 3000,
			autoplaySpeed: 2000,
			cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
		{
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  },
		  {
			breakpoint: 400,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  },
      ]
		};
		return (
			<div>
				<Slider {...settings}>
					<div className='card_box animate__animated animate__slideInLeft animate__delay-2s'>
						<div className=''>
							<div className='card-wrapper'>
								<div className='card'>
									<div className='main-title'>
										<img src={service} alt='satrolab tizimi' />
									</div>
									<h3>IT loyihalar</h3>
									<p>
										Nazorat tizimi xodimlarning ishga kelish davomati va foydali
										ish koeffitsiyentini hisoblashda juda samarali vosita!
									</p>
									<div className='buttons-wrapper'>
										<button className='btn'>Info</button>
										<button className='btn yellow '>Visit</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='card_box animate__animated animate__slideInUp animate__delay-2s'>
						<div className=''>
							<div className='card-wrapper'>
								<div className='card'>
									<div className='main-title'>
										<img src={service} alt='satrolab tizimi' />
									</div>
									<h3>IT loyihalar</h3>
									<p>
										Nazorat tizimi xodimlarning ishga kelish davomati va foydali
										ish koeffitsiyentini hisoblashda juda samarali vosita!
									</p>
									<div className='buttons-wrapper'>
										<button className='btn'>Info</button>
										<button className='btn yellow '>Visit</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='card_box animate__animated animate__slideInRight animate__delay-2s'>
						<div className=''>
							<div className='card-wrapper'>
								<div className='card'>
									<div className='main-title'>
										<img src={service} alt='satrolab tizimi' />
									</div>
									<h3>IT loyihalar</h3>
									<p>
										Nazorat tizimi xodimlarning ishga kelish davomati va foydali
										ish koeffitsiyentini hisoblashda juda samarali vosita!
									</p>
									<div className='buttons-wrapper'>
										<button className='btn'>Info</button>
										<button className='btn yellow '>Visit</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}
