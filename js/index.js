$(function() {
	var cur, pre, next;
	var imgDoms = $('.imgitem');
	initImg();

	function initImg() {
		pre = 0;
		cur = 1;
		next = 2;
		$(imgDoms[pre]).addClass('pre-img');
		$(imgDoms[cur]).addClass('cur-img');
		$(imgDoms[next]).addClass('next-img');
	}
	$('#pre').click(function() {
		pre = pre - 1;
		cur = cur - 1;
		next = next - 1;
		if (next < 0) {
			next = imgDoms.length - 1;
		}
		if (cur < 0) {
			cur = imgDoms.length - 1;
		}
		if (pre < 0) {
			pre = imgDoms.length - 1;
		}
		$('.cur-img').removeClass('cur-img');
		$(imgDoms[cur]).addClass('cur-img');

		$('.pre-img').removeClass('pre-img');
		$(imgDoms[pre]).addClass('pre-img');

		$('.next-img').removeClass('next-img');
		$(imgDoms[next]).addClass('next-img');
	})
	$('#next').click(function() {
		pre += 1;
		cur += 1;
		next += 1;
		if (next > imgDoms.length - 1) {
			next = 0
		}
		if (cur > imgDoms.length - 1) {
			cur = 0
		}
		if (pre > imgDoms.length - 1) {
			pre = 0
		}
		$('.cur-img').removeClass('cur-img');
		$(imgDoms[cur]).addClass('cur-img');

		$('.pre-img').removeClass('pre-img');
		$(imgDoms[pre]).addClass('pre-img');

		$('.next-img').removeClass('next-img');
		$(imgDoms[next]).addClass('next-img');
	})
})

$(document).ready(function (){
	head = $('header')
	var arrstr = document.cookie.split("; ");
	console.log(arrstr)
	for(var i = 0;i < arrstr.length;i ++){
		var temp = arrstr[i].split("=");
		if(temp[0] == 'User') 
			cookie_user =temp[1]
	}
	console.log(cookie_user);
	if(cookie_user!="")//如果在cookie字符串中找到了这个cookie
	{
		$("#log1").remove();
		head.append(
			'<a href="#" id="log1"><h1 onclick="ex1()">'+ cookie_user +' | 退出</h1></a>'
		);
	}
	else
	{
		$("#log1").remove();
		head.append(
			'<a href="log.html" id="log1"><h1>用户 | 登录</h1></a>'
		);
	}
})



function ex1(){
	console.log("112");
	document.cookie = "User" + "=" + "; " + "-1";
	$("#log1").remove();
		head.append(
			'<a href="log.html" id="log1"><h1>用户 | 登录</h1></a>'
	);
}