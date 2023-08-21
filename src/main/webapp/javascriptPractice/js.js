/**
 * 23일 화면구현 시험
 */

/*84p*/

var i =1;
while(i <= 9){
	document.write("5X"+i+"="+i*5,"<br>");
	i++;
}

/*129p*/

/*문제 1*/

var phoneNum ="010-2345-1234";
var result_1= phoneNum.substring(0,phoneNum.length-4);
document.write(result_1,"**** <br>");


var imgSrc = "images/bnt_out.jpg";
var result_2 = imgSrc.replace("out","over");
document.write(result_2,"<br>");

/*문제 2*/

var menu =["짜장면","돈가스","된장국","김치찌개","회덮밥"];
var menuNum = Math.floor(Math.random()*(menu.length));
var result = menu[menuNum];
document.write(result);
/*243p*/

/*문제 1
제이쿼리not()메서드를 이용하여 첫번째<li>요소만 제외시킨<li>의 배경에 노란색을 적용해보세요*/

$(function(){
	$("#myList1 li").not(":first")
	.css("background-color","yellow");
});
/*문제 2
제이쿼리 위치 탐색자를 이용해 세번째<li> 태그만 선택하여 배경을 노란색으로 적용해 보세요*/

$(function(){
	$("#myList2 li").eq(2)
	.css("background-color","yellow");
});