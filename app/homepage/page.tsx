import React from "react";
import Card from "./Card";
interface SectionProps {
	children: JSX.Element;
	mt?: string;
}

const Page = (): JSX.Element => {
	return (
		<section
			className="
			flex
			justify-center
			items-center
		"
		>
			<Card />
		</section>
	);
};
export default Page;
