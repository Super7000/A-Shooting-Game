document.querySelector('.body').addEventListener('mousemove', function (e) {
	document.querySelector('.circle').style.cssText = 'left:' + e.clientX + 'px;' + 'top:' + e.clientY + 'px;';
});
document.querySelector('.vertical_bar').addEventListener('click', function () {
	localStorage.setItem('point', eval(localStorage.getItem('point') + '-1'));
	document.querySelector('.point').innerHTML = localStorage.getItem('point');
});
document.querySelector('.horizontal_bar').addEventListener('click', function () {
	localStorage.setItem('point', eval(localStorage.getItem('point') + '-1'));
	document.querySelector('.point').innerHTML = localStorage.getItem('point');
});
function target_movement() {
	var a = Math.floor(Math.random() * 85) + 10;
	var b = Math.floor(Math.random() * 85) + 10;
	document.querySelector('.target').style.cssText = 'left:' + a + '%;' + 'top:' + b + '%;';
}
var i = setInterval(target_movement, 1500);
document.querySelector('.target').addEventListener('click', function () {
	localStorage.setItem('point', eval(localStorage.getItem('point') + '+1'));
	document.querySelector('.point').innerHTML = localStorage.getItem('point');
	target_movement();
});
document.querySelector('.reset').addEventListener('click',function () {
	localStorage.removeItem('point');
	document.querySelector('.point').innerHTML = 0;
})
document.querySelector('.point').innerHTML = localStorage.getItem('point');