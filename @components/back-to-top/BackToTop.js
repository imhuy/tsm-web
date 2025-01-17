import React, { useState, useEffect } from 'react';

const BackToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	// changing the showTopBtn state whenever a scroll event happens
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	// fucntion to help scroll to top smoothly
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="back-to-top">
			{showTopBtn && (
                <span className="material-symbols-sharp" onClick={goToTop}>
arrow_upward
</span>
			)}
		</div>
	);
};

export default BackToTop;