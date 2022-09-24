import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
	const form = useRef();
	const [darkToggle, setDarkToggle] = useState(false);
	const [isSun, setMoon] = useState(false);

	const handleClick = () => {
		setDarkToggle(!darkToggle);
		setMoon((previousSun) => {
			return !previousSun;
		});
	};
	const sendMail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_j34k1om',
				'template_orjk5r1',
				form.current,
				'z8_1TmMGQ3g7rfYPZ'
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		e.target.reset();
	};
	const notify = () => {
		toast.success('Message Sent');
	};
	return (
		<div className={`${darkToggle && 'dark'}`}>
			<Navbar handleClick={handleClick} isSun={isSun} />
			<div className='dark:bg-gray-900 dark:text-text-white bg-contact-bg'>
				<div className='container font-Roboto'>
					<div className='py-8 pb-8'>
						<div className='text-center font-bold'>
							<h1 className='text-5xl md:text-6xl'>Get in Touch</h1>
							<p className='text-2xl text-footer-color'>
								Fill up the form and our team will get back to you as soon as
								possible
							</p>
						</div>
						<div className='px-12 py-12 flex flex-col-reverse md:flex md:flex-row justify-between items-center'>
							<div className='flex flex-col gap-4 p-6'>
								<div>
									<h3 className='font-bold text-2xl'>Phone</h3>
									<p className='text-footer-color text-2xl'>09038420435</p>
								</div>
								<div>
									<h3 className='font-bold text-2xl'>Email</h3>
									<p className='text-footer-color text-2xl'>
										ctechsoft0@gmail.com
									</p>
								</div>
								<div>
									<h3 className='font-bold text-2xl'>Head Office</h3>
									<p className='text-footer-color text-2xl'>
										No, 10 Tukur Plaza Ibrahim Aliyu Byepass, Dutse, jigawa
										State.
									</p>
								</div>
							</div>
							<div className='w-[300px] justify-center md:w-[450px] shadow rounded-lg mb-8 p-6'>
								<form
									ref={form}
									onSubmit={sendMail}
									className='flex flex-col gap-4'>
									<div className='flex flex-col gap-2'>
										<label>Name</label>
										<input
											type='text'
											name='name'
											className='dark:bg-gray-800 dark:text-text-white p-2 outline-none border border-form-input rounded'
										/>
										<label>Email</label>
										<input
											type='email'
											name='email'
											className='dark:bg-gray-800 dark:text-text-white p-2 outline-none border border-form-input rounded'
										/>
									</div>
									<div className='flex flex-col gap-2'>
										<label>Message</label>
										<textarea
											name='message'
											rows={6}
											className='dark:bg-gray-800 dark:text-text-white p-3 h-36 outline-none border border-form-input rounded'></textarea>
									</div>
									<button
										onClick={notify}
										className='md:w-1/3 p-2 bg-primary text-text-white rounded'>
										Send
									</button>
									<ToastContainer />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
