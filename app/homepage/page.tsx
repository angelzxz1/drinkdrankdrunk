import React from "react";

interface SectionProps {
	children: JSX.Element;
	mt?: string;
}

const Page = (): JSX.Element => {
	return (
		<div className="Section">
			<h1>Page</h1>
		</div>
	);
};
export default Page;
