<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<c:set var="id" value="${id}" scope="page"/>

<%-- 조건문 el 언어 규격안에 넣기 --%>
<c:if test="${id == null}">
	<a href ="loginForm.html">로그인</a>
</c:if>
<c:if test="${id != null}">
	<a href ="logout.html">로그인</a>
</c:if>
</body>
</html>