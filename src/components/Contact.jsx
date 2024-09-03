import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/email.png";

export default function Contact() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_9hfmfv2", `template_p2ab9fk`, form.current, {
				publicKey: "FqL0UAOjgQYT-GKCW",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};
	return (
		<div className="bg-bg-grey py-14" id="contact">
			<p className="text-white text-xl text-center p-4">Contact Me</p>
			<p className="text-gray-500">
				Please fill out the form to contact me or call me between 9am to 5pm
				monday through friday
			</p>
			<div className="flex justify-center flex-wrap">
				<div>
					<div className="m-6">
						<div className="flex justify-start items-center">
							<img src={phone} className="w-10 h-8" />
							<div className="flex flex-col items-start m-4">
								<p className="text-white">Phone</p>
								<p className="text-bg-orange font-bold">1-917-536-4525</p>
							</div>
						</div>
						<div className="flex justify-start items-center">
							<img src={email} className="w-10 h-8" />
							<div className="flex flex-col items-start m-4">
								<p className="text-white">Email</p>
								<p className="text-bg-orange font-bold">avachoi12@gmail.com</p>
							</div>
						</div>
					</div>
				</div>

				<form ref={form} onSubmit={sendEmail} className="flex flex-col">
					<input
						type="text"
						name="user_name"
						placeholder="Name"
						className="bg-form-grey p-2 mx-4 my-2 rounded-lg"
					/>

					<input
						type="email"
						name="user_email"
						placeholder="Email"
						className="bg-form-grey p-2 mx-4 my-2 rounded-lg"
					/>

					<textarea
						name="message"
						placeholder="Message"
						className="bg-form-grey p-2 mx-4 my-2 rounded-lg"
					/>
					<button
						type="submit"
						value="Send"
						className=" border-2 border-bg-orange rounded-md text-white w-20 m-4"
					>
						send
					</button>
				</form>
			</div>
		</div>
	);
}
