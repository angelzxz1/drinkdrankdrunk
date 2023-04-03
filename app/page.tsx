import React from "react";

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
					shadow-2xl
					shadow-white
				"
			>
				<input
					type="text"
					className="
						bg-transparent
						border-b
						border-b-white
						px-4
						text-center
					"
					placeholder="Username"
				/>
				<input
					type="password"
					className="
						bg-transparent
						border-b
						border-b-white
						px-4
						text-center
						mt-16
					"
					placeholder="Password"
				/>
				<button
					className="
						mt-16 
						border 
						border-white 
						px-4 
						py-2
					"
				>
					Log in
				</button>
			</form>
		</section>
	);
};
export default Page;
