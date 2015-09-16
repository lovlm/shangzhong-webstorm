/**
 * Created by Administrator on 2015/4/21.
 */

function chkName(){
    var ele = document.getElementById("name");
    var val = ele.value;
    var msg_name = document.getElementById("nameRemind");
}

function nameRecovery() {
    var ele = document.getElementById("nameRemind");
//    ele.setAttribute("style","color: black");
    ele.style.color="red";
    ele.innerHTML="请填写您的真实姓名";
}


function chkPassword(){
    var ele = document.getElementById("password");
    var val = ele.value;
    msg = document.getElementById("pwdRemind");
    if(val.length<6 || val.length>16){
//				alert("密码在6-16位之间");

        msg.innerHTML="密码在6-16位之间";
        msg.style.color="red";
        document.getElementById("submit").disabled=true;
        return;
    }else{
        var easy = 0;//用数值来表示密码的复杂度
        //先判断是否是全部相同的字符
        var len = val.length;
        len=len-1;
        p = new RegExp("(.)\\1{"+len+"}");//匹配相同的N个字符
        if(p.test(val)){
            easy=0;//0为非常简
        }else{
            //声明只包含a-z的字符正则
            var p = /[a-z]/ig;//如果只包含字母
            var chars = val.match(p);
            if(chars){
                easy++;//
            }
            p=/[0-9]/g;//如果再包含数字则再加
            chars=val.match(p);
            if(chars){
                easy++;
            }
            //如果再包含
            p = /(_|#|@|!)/;
            chars = val.match(p);
//					alert(chars);
            if(chars){
                easy++;
            }
        }
    }
//			alert(easy);
    if(easy==0){
        msg.innerHTML="0密码太过简单,请重新输入";
//        msg.setAttribute("style","color: red");
        document.getElementById("submit").disabled=true;
        msg.style.color="red";

    }else if(easy==1){
        msg.innerHTML="1密码太过简单，请重新输入";
//        msg.setAttribute("style","color: red");
        msg.style.color="red";
        document.getElementById("submit").disabled=true;

    }else{
        msg.innerHTML="";
        document.getElementById("submit").disabled=false;
    }
    /*else if(easy==2){
        msg.innerHTML="2密码强度很好";
        document.getElementById("submit").disabled=false;
    }else{
        msg.innerHTML="密码强度很好";
        document.getElementById("submit").disabled=false;
    }*/
}

function pwdRecovery() {
    var ele = document.getElementById("pwdRemind");
//    ele.setAttribute("style","color: black");
//    document.form1.select1.style.height+=4+'px';
    document.getElementById("pwdRemind").style.color="black";
    ele.innerHTML="密码在6-16位之间，大小写字母、数字以及“_、#、@、!”组成";
}

function chkEmail() {
    var ele = document.getElementById("Email");
    var val = ele.value;
    var msg = document.getElementById("emailRemind");
    if(val.length<1){
        msg.style.color="red";
        msg.innerHTML="邮箱不能为空";
    }else{
        var p = /@/g;
        var result = p.test(val);
        if(result){
            msg.innerHTML="";
        }else{
            msg.style.color="red";
            msg.innerHTML="请输入正确邮箱地址";
        }
    }

}

function emailRecovery() {
    var ele = document.getElementById("emailRemind");
    ele.style.color="black";
    ele.innerHTML="您的常用邮箱，便于密码找回以及消息通知";
}

function chkPwdRepeat(){
    var ele1 = document.getElementById("password");
    var ele2 = document.getElementById("pwdrepeat");
    var val1 = ele1.value;
    var val2 = ele2.value;
//    alert(val1);
//    alert(val2);
    var ele3 = document.getElementById("feedbackPwdRepeat");
//    alert(val1==val2);
    if(val1==val2){
        document.getElementById("submit").disabled=false;
    }else{
        ele3.innerHTML="两次密码输入不一样，请重新输入";
        ele3.style.color="red";
        document.getElementById("submit").disabled=true;
    }
}

function pwdRepeatRecovery() {
    var ele = document.getElementById("feedbackPwdRepeat");
    ele.style.color="black";
    ele.innerHTML="请重复密码";
}