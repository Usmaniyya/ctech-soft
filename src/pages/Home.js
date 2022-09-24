import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
	const [darkToggle, setDarkToggle] = useState(false);
	const [isSun, setMoon] = useState(false);

	const handleClick = () => {
		setDarkToggle(!darkToggle);
		setMoon((previousSun) => {
			return !previousSun;
		});
	};
	return (
		<div className={`${darkToggle && 'dark'}`}>
			<Navbar handleClick={handleClick} isSun={isSun} />
			<div className='dark:bg-gray-900 dark:text-text-white'>
				<div className='container'>
					<main className='py-5 font-Roboto'>
						<div className='w-full md:flex justify-between py-12'>
							<div className='w-full md:w-1/2 flex flex-col flex-wrap gap-4 font-Roboto mt-10'>
								<h1 className='text-center text-5xl md:text-left text-text-black md:text-4xl font-semibold leading-2 dark:text-text-white'>
									Best tech solution and grow your business easier than ever.
								</h1>
								<p className='text-secondary leading-9 font-normal'>
									To provide you the best value for your money, we charge a
									local competitive pricing while maintaining an international
									standard for our services.
								</p>
								<div className='flex justify-center md:justify-start gap-6 my-7'>
									<Link
										className='text-center px-8 py-2 bg-primary rounded text-text-white hover:bg-text-white border hover:text-primary hover:border-primary hover:border dark:hover:bg-gray-800'
										to='/contact'>
										Contact us
									</Link>
									<a
										className='text-center px-8 py-2 border-y-primary rounded text-primary border-primary border hover:text-text-white hover:bg-primary '
										href='google.com'>
										Read more
									</a>
								</div>
							</div>
							<div className='w-full md:w-1/2 mt-3'>
								<img
									src={require('./../images-ctech/Polygon 3.png')}
									width={550}
									alt='header'
								/>
							</div>
						</div>

						<div className='my-8' id='services'>
							<div className='text-center'>
								<h2 className='font-semibold text-5xl md:text-4xl'>
									What we offer
								</h2>
							</div>
							<div className='my-8 flex flex-col md:flex-row justify-center items-center gap-16'>
								<div className='w-80 md:w-1/3 pt-12 pb-8 px-6 rounded-lg shadow-3xl hover:scale-110 hover:transition-all dark:border-[2px] dark:border-secondary'>
									<i className='fa-solid fa-code bg-icon-bg dark:bg-gray-900 p-3 rounded'></i>
									<p className='pt-3'>
										Web & Mobile <br />
										Development
									</p>
								</div>
								<div className='w-80 md:w-1/3 pt-12 pb-8 px-6 rounded-lg shadow-3xl hover:scale-110 hover:transition-all dark:border-[2px] dark:border-secondary'>
									<i className='fa-solid fa-phone bg-icon-bg dark:bg-gray-900 p-3 rounded'></i>
									<p className='pt-3 w-3'>Software Consultation</p>
								</div>
								<div className='w-80 md:w-1/3 pt-12 pb-8 px-6 rounded-lg shadow-3xl hover:scale-110 hover:transition-all dark:border-[2px] dark:border-secondary'>
									<i className='fa-solid fa-rocket bg-icon-bg dark:bg-gray-900 p-3 rounded'></i>
									<p className='pt-3 w-3'>Software Development</p>
								</div>
							</div>
						</div>
						<div className='my-12' id='about'>
							<div className='w-full md:flex justify-between space-y-6'>
								<div className='md:w-3/5 flex flex-col gap-6 my-14'>
									<h2 className='text-5xl font-bold'>
										Why are we the best from others?
									</h2>
									<p className='text-secondary md:w-11/12'>
										We are a digital agency that creates websites and offers
										software consulting. We act as a strategic partner for a
										brand that requires a future-proof brand identity, a
										scalable website with a modular CMS, and software
										consultancy and development. We shape the goods and services
										that every day improve the lives of thousands of people by
										testing fundamental presumptions.
									</p>
									<Link
										className='w-1/2 md:w-1/4 lg:w-1/3 text-center px-8 py-2 font-bold bg-primary rounded text-text-white border hover:bg-text-white hover:border-primary hover:text-primary dark:hover:bg-gray-800'
										to='/contact'>
										Contact us
									</Link>
									<img
										className='mt-3 lg:w-[550px]'
										src={require('../images-ctech/image1.png')}
										width={600}
										alt='section'
									/>
								</div>
								<div className='md:w-2/5 mt-4'>
									<img
										className='lg:w-[400px] lg:ml-4'
										src={require('../images-ctech/image2.png')}
										width={450}
										alt='section'
									/>
								</div>
							</div>
						</div>
						<div className='my-12'>
							<div className='text-center mb-8'>
								<h2 className='my-4 font-bold text-5xl md:text-4xl'>
									Our Recent works
								</h2>
							</div>
							<div className='w-full md:flex gap-4 mt-4'>
								<div className='flex flex-col gap-3 mb-6'>
									<img
										src={require('../images-ctech/web.png')}
										width={340}
										alt='web'
									/>
									<h3 className='text-2xl font-bold'>Web Development</h3>
									<p className='text-secondary text-1xl'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nunc vulputate dolor sit amet, consectetur adipiscing elit.
										Nunc vulputate
									</p>
								</div>
								<div className='flex flex-col gap-3 mb-6'>
									<img
										src={require('../images-ctech/software.png')}
										width={340}
										alt='web'
									/>
									<h3 className='text-2xl font-bold'>Software Consultation</h3>
									<p className='text-secondary text-1xl'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nunc vulputate dolor sit amet, consectetur adipiscing elit.
										Nunc vulputate
									</p>
								</div>
								<div className='flex flex-col gap-3 mb-6'>
									<img
										src={require('../images-ctech/app.png')}
										width={340}
										alt='web'
									/>
									<h3 className='text-2xl font-bold'>Web Application</h3>
									<p className='text-secondary text-1xl'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nunc vulputate dolor sit amet, consectetur adipiscing elit.
										Nunc vulputate
									</p>
								</div>
							</div>
						</div>
						<div className='flex justify-between items-center'>
							<button className='dark:text-text-white dark:bg-secondary text-gray-800 shadow-2xl rounded-full'>
								<i className='p-5 fa-solid fa-arrow-left'></i>
							</button>
							<div className='flex flex-col items-center gap-2 mt-12'>
								<img
									src={require('../images-ctech/user.png')}
									width={120}
									alt='team'
								/>
								<h3 className='text-3xl font-bold'>Abdullahi Uthman</h3>
								<p className='text-1xl text-footer-color font-semibold'>
									CEO Real Tech Hub
								</p>
								<p className='text-center text-footer-color text-1xl'>
									My website couldn't have been built without C-Tech Soft. They
									work very quickly and are happy to help me with <br /> any
									questions or software-related issues i may have. They provide
									excellent service and are amiable. I suggest
									<br /> Csoft Tech if you're looking for top-notch client
									service.
								</p>
							</div>
							<button className='dark:text-text-white dark:bg-secondary text-gray-800 shadow-2xl rounded-full'>
								<i className='p-5 fa-solid fa-arrow-right'></i>
							</button>
						</div>
						<div className='bg-primary rounded-lg py-12 px-4 my-12 dark:text-text-black'>
							<h1 className='text-center text-5xl md:text-6xl font-bold'>
								Our client's best interests are our first priority.
							</h1>
							<div className='md:flex justify-around items-center pt-6'>
								<div className='mb-4'>
									<p>
										<i className='p-4 mr-3 bg-input-color dark:bg-gray-900 dark:text-text-white rounded fa-solid fa-phone'></i>
										+2349038420435
									</p>
								</div>
								<div className='mb-4'>
									<p>
										<i className='p-4 mr-3 bg-input-color dark:bg-gray-900 dark:text-text-white rounded fa-solid fa-envelope'></i>
										csofttech@gmail.com
									</p>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
