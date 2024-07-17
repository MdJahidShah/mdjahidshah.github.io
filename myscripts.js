				// Scroll to Top Button
				var scrollToTopBtn = document.getElementById("scrollToTopBtn");

				window.onscroll = function() {
					scrollFunction();
				};
	
				function scrollFunction() {
					if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
						scrollToTopBtn.style.display = "block";
					} else {
						scrollToTopBtn.style.display = "none";
					}
				}
	
				function topFunction() {
					document.body.scrollTop = 0;
					document.documentElement.scrollTop = 0;
				}
	
				// Open Google Gemini Chatbot
				function openChatbot() {
					window.open("https://your-google-gemini-bot-link", "_blank", "width=400,height=600");
				}