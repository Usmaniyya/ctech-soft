import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

function Navbar({ handleClick, isSun }) {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className='dark:bg-gray-900 dark:text-text-white'>
			<div className='container'>
				<nav className='flex justify-between items-center py-5 font-Roboto'>
					<div className='text-3xl font-bold'>
						<h1 className='uppercase'>
							C-Tech <span className='text-primary'>Soft</span>
						</h1>
					</div>
					<ul className='hidden md:flex gap-4 justify-between font-medium uppercase'>
						<Link
							to='/'
							className='cursor-pointer text-black text-text-base hover:text-secondary dark:hover:text-secondary'>
							Home
						</Link>
						<Link
							to=''
							className='cursor-pointer text-secondary text-text-base hover:text-text-black dark:hover:text-text-white'>
							Services
						</Link>
						<Link
							to=''
							className='cursor-pointer text-secondary text-text-base hover:text-text-black dark:hover:text-text-white'>
							About Us
						</Link>
						<Link
							to='/contact'
							className='cursor-pointer text-secondary text-text-base hover:text-text-black dark:hover:text-text-white'>
							Contact Us
						</Link>
					</ul>
					<div>
						<button onClick={() => handleClick()}>
							{isSun ? (
								<i className='fa-solid fa-sun fa-2x'></i>
							) : (
								<i className='fa-solid fa-moon fa-2x'></i>
							)}
						</button>
					</div>
					<div className='md:hidden' onClick={handleNav}>
						{!nav ? (
							<MenuIcon className='w-8 dark:text-text-white text-text-black' />
						) : (
							<XIcon className='w-8 dark:text-text-white text-text-black' />
						)}
					</div>
				</nav>
				<ul
					className={
						!nav
							? 'hidden'
							: 'flex flex-col items-center gap-6 justify-end text-2xl p-3'
					}>
					<Link
						to='/'
						className='cursor-pointer text-black text-text-base hover:text-secondary dark:hover:text-secondary'>
						Home
					</Link>
					<Link
						to='services'
						smooth={true}
						offset={-70}
						spy={true}
						className='cursor-pointer text-secondary text-text-base hover:text-text-black dark:hover:text-text-white'>
						Services
					</Link>
					<Link
						to='about'
						smooth={true}
						spy={true}
						className='cursor-pointer text-secondary text-text-base hover:text-text-black dark:hover:text-text-white'>
						About Us
					</Link>
					<Link
						to='/contact'
						className='cursor-pointer text-secondary text-text-base hover:text-text-black dark:hover:text-text-white'>
						Contact Us
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
