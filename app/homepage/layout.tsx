import React from "react";
import NavBar from "../../components/NavBar";
export const metadata = {
	title: "Drink, Drank, Drunk",
	description: "Drinking app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="text-global-text bg-gradient-to-br from-purple-800 to-black bg-no-repeat h-screen w-screen">
				<NavBar />
				<main
					className="
						pt-16
					"
				>
					{children}
				</main>
			</body>
		</html>
	);
}
