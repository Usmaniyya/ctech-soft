import React from 'react';

function Footer() {
	return (
		<div>
			<footer className='py-8 md:py-10 bg-icon-bg dark:bg-gray-800 dark:text-text-white'>
				<div className='container'>
					<div className='md:flex md:justify-between items-center'>
						<ul className='mb-8 flex flex-col md:flex-row md:justify-between md:mb-0 gap-8 text-footer-color'>
							<li>Terms</li>
							<li>Privacy</li>
							<li>Security</li>
						</ul>
						<div className='text-footer-color text-center'>
							<p>@Ctechsoft | All Right Reserved 2022</p>
						</div>
						<div className='hidden md:flex gap-6 justify-between'>
							<a
								className='rounded-full bg-text-white dark:bg-gray-900'
								href='gooogle.com'>
								<i className='text-primary p-4 fa-brands fa-facebook'></i>
							</a>
							<a
								className='rounded-full bg-text-white dark:bg-gray-900'
								href='gooogle.com'>
								<i className='text-primary p-4 fa-brands fa-whatsapp'></i>
							</a>
							<a
								className='rounded-full bg-text-white dark:bg-gray-900'
								href='gooogle.com'>
								<i className='text-primary p-4 fa-brands fa-twitter'></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
