"use client";
import React from "react";

interface InputProps {
	type: string;
	placeholder: string;
}
const Input = ({ type, placeholder }: InputProps): JSX.Element => {
	return (
		<input
			type={type}
			className="
				bg-transparent
				border-b
				border-b-white
				px-4
				text-center
				mt-16
			"
			placeholder={placeholder}
		/>
	);
};

interface ButtonProps {
	children: JSX.Element | JSX.Element[] | string;
}
const Button = ({ children }: ButtonProps): JSX.Element => {
	return (
		<button
			className="
				bg-purple-500
				hover:bg-purple-800
				hover:transition-[background]
				ease-out
				duration-100
				px-4 
				py-2
				rounded-md
				min-w-[90px]
			"
			onClick={e => {
				e.preventDefault();
			}}
		>
			{children}
		</button>
	);
};

interface SectionProps {
	children: JSX.Element;
	mt?: string;
}

const Page = (): JSX.Element => {
	return (
		<section className="h-screen w-screen flex justify-center items-center">
			<form
				className="
					rounded-2xl
					border
					border-transparent
					h-3/4 
					w-1/3 
					flex
					justify-center
					items-center
					bg-white/10
					flex-col
					shadow-center
					shadow-[#ffffff55]
				"
			>
				<Input type="text" placeholder="Username" />
				<Input type="password" placeholder="Password" />
				<div className="mt-16 w-full flex justify-evenly">
					<Button>Log in</Button>
					<Button>Register</Button>
				</div>
			</form>
		</section>
	);
};

export default Page;
