
			feather.replace()
		  

				window.onscroll = function () {
					scrollFunction();
				};

				function scrollFunction() {
					var myBtn = document.getElementById("myBtn");
					if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
						myBtn.style.display = "block";
					} else {
						myBtn.style.display = "none";
					}
				}

				function topFunction() {
					// Use scrollIntoView with smooth behavior
					document.body.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});

					// For older browsers that do not support smooth scrolling
					document.documentElement.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}
							
				document.addEventListener('DOMContentLoaded', function () {
					const menuIcon = document.querySelector('.menu-icon');
					const navLinks = document.querySelector('.nav-links');

					menuIcon.addEventListener('click', function () {
						navLinks.classList.toggle('active');
					});

					// Smooth scrolling for navigation links
					document.querySelectorAll('.nav-links a').forEach(anchor => {
						anchor.addEventListener('click', function (e) {
							e.preventDefault();

							const targetId = this.getAttribute('href').substring(1);
							const targetElement = document.getElementById(targetId);

							if (targetElement) {
								targetElement.scrollIntoView({
									behavior: 'smooth',
									block: 'start'
								});
							}
						});
					});
				});

