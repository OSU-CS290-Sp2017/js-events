window.addEventListener('DOMContentLoaded', function () {
	var box = document.getElementById('box');

	function sanitizeBoxPosition() {

	  var boxContainer = box.parentNode;

	  var newTop = Math.min(box.offsetTop, boxContainer.clientHeight - box.offsetHeight);

	  var newLeft = Math.min(box.offsetLeft, boxContainer.clientWidth - box.offsetWidth);

	  box.style.top = Math.max(newTop, 0) + 'px';
	  box.style.left = Math.max(newLeft, 0) + 'px';

	}

	function handleBoxContentInput(event) {
		box.textContent = boxContentInput.value;
		sanitizeBoxPosition();
	}

	function handleBoxBackgroundSelectChange(event) {
		console.log(boxBackgroundSelect.value);
	}

	var boxContentInput = document.getElementById('box-content-input');
	boxContentInput.addEventListener('input', handleBoxContentInput);

	var boxBackgroundSelect = document.getElementById('box-background-select');
	boxBackgroundSelect.addEventListener('change', handleBoxBackgroundSelectChange);
});
