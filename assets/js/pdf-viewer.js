function toggleFullscreen() {
		const container = document.getElementById('pdfContainer');
		const button = document.querySelector('.fullscreen-btn');
		
		if (!document.fullscreenElement) {
			if (container.requestFullscreen) {
				container.requestFullscreen();
			} else if (container.webkitRequestFullscreen) {
				container.webkitRequestFullscreen();
			} else if (container.msRequestFullscreen) {
				container.msRequestFullscreen();
			}
			button.innerHTML = '⤓ Exit Fullscreen';
			container.classList.add('fullscreen');
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
			button.innerHTML = '⤢ Fullscreen';
			container.classList.remove('fullscreen');
		}
	}

// Listen for fullscreen change events
document.addEventListener('fullscreenchange', function() {
	const button = document.querySelector('.fullscreen-btn');
	const container = document.getElementById('pdfContainer');
	
	if (!document.fullscreenElement) {
		button.innerHTML = '⤢ Fullscreen';
		container.classList.remove('fullscreen');
	}
});