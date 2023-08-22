/**
 * 
 */

 /*문제 1 */
var i = 1;
 while(i <= 9){
	 document.write("6X" + i + "=" +6*i ,"<br>"); // document.write 넣기
	 i++;
 }
  
 /*문제 2*/
var phone = "010-2457-3674";
var phonesub = phone.substring(0,phone.length-4);
document.write(phonesub + "**** <br>")

var urlex = "http://dead";
var urlexreplace = urlex.replace("dead" , "machine");
document.write(urlexreplace,"<br>");

var lunch = ['국밥','감자','고구마'];

var lunchselecter = Math.floor(Math.random()*(lunch.length));
document.write(lunch[lunchselecter],"<br>");
 /*문제 3 */
 
 $(function(){
	$("#myList1 li").not(":first")
	.css("background-color","yellow");
});

 $(function(){
	$("#myList li").not(":first").css("background-color","yellow");
 });
 
 /*문제 4 */
 
 $(function(){
	 
	 var after = null;//null로 초기화 해야함 
	 
	 $(".gnb >li > a").on("focus mouseover",function(){
		 if(after) after.css({background : "none"});
		 $(this).css({"background-color":"skyblue"});//색깔 정확히 쓰자 안에 css는 검사 안됨!!
		 after=$(this);
	 });
	 
	 $(".gnb").on("mouseleave",function(){
		 if(after) after.css({background : "none"});
	 });
	 
 });