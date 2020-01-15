/**
 * 
 */
	/** 登录实现 登录与注册时的切换与相应的颜色变化*/
	function login(i){
		var login = document.getElementById("login");
		var regist = document.getElementById("regist");
		var h3_1 = document.getElementById("h3_1");
		var h3_2 = document.getElementById("h3_2");
		switch(i){
			case 1: 
				login.style.display="inline";
				regist.style.display="none";
				h3_1.style.color="red";
				h3_2.style.color="black";
				break;
			case 2:	
				login.style.display="none";
				regist.style.display="inline";
				h3_1.style.color="black";
				h3_2.style.color="red";
				break;
		}
	}
	/** 提示登录与注册时的错误信息 */
	function Error(i){
		switch(i){
		case 1: 
			/*var lg_username = document.getElementsByName("lg_username")[0];
			var lg_password = document.getElementsByName("lg_password")[0];
			var lg_tishi1 = document.getElementById("lg_tishi1");
			var lg_tishi2 = document.getElementById("lg_tishi2");
			if(lg_username.value==""){
				lg_tishi1.style.display="inline";
				return false;
			}
			if(lg_password.value==""){
				lg_tishi2.style.display="inline";
				return false;
			}*/
			return true;
			break;
		case 2:	
			var rg_password = document.getElementsByName("rg_password")[0];
			var rg_ackpassword = document.getElementsByName("rg_ackpassword")[0];
			var rg_tishi = document.getElementById("rg_tishi");
			if(rg_password.value!=rg_ackpassword.value){
				rg_tishi.style.display="inline";
				return false;
			}
			if(rg_password.value==""){
				rg_tishi.style.display="inline";
				return false;
			}
			return true;
			break;
		}
	}
	/** 用户名检测 */
	function userCheck(){
		//得到用户输入的用户名
		var user = document.getElementsByName("rg_username")[0];
		//创建正则
		var reg=/^\w{6,10}$/;
		var usermsg = document.getElementById("usermsg");
		if(reg.test(user.value)){
			//修改元素的class值
			usermsg.className="ok";
			return true;
		}else{
			usermsg.className="error";
			return false;
		}
	}
	/** 密码检测 */
	function pwCheck(){
		//得到用户输入的用户名
		var pw = document.getElementsByName("rg_password")[0];
		//创建正则
		var reg=/^\w{8,16}$/;
		var pwmsg = document.getElementById("pwmsg");
		if(reg.test(pw.value)){
			//修改元素的class值
			pwmsg.className="ok";
			return true;
		}else{
			pwmsg.className="error";
			return false;
		}
	}
	/**切换验证码 */
	function changeImg(){
		var caphimg = document.getElementById("caphimg");
		caphimg.src="CheckServ?ts="+new Date().getTime();
	
	}