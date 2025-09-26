
const Footer = () => {
	return (
		<footer className="w-full bg-gray-950 py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80">
			<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
				<div className="text-center md:text-left">
					<h1 className="font-bold text-xl sm:text-2xl text-blue-500 tracking-wide select-none uppercase">
						thanhdat
					</h1>
					<p className="max-w-md text-sm text-gray-300 mt-2">
						Building elegant solutions to complex problems with modern technologies.
					</p>
				</div>
				<div className="flex flex-col gap-4 md:items-end">
					<div className="flex items-center gap-4 sm:gap-6 justify-center">
					</div>
					<div className="text-xs text-gray-400 text-center md:text-right mt-2">
						© 2025 thnhdtdev | Built with React & Tailwind
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
