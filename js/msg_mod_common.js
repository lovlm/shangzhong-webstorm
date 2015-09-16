/**
 * Created by Administrator on 2015/9/9.
 */

function onload() {
    cancle();
}

function cancle() {
    $("#real_name").attr("readonly","readonly")//将input元素设置为readonly
    $("#g_class").attr("readonly","readonly")//将input元素设置为readonly
    $("#leaveYear").attr("readonly","readonly")//将input元素设置为readonly
    $("#university").attr("readonly","readonly")//将input元素设置为readonly
    $("#area").attr("readonly","readonly")//将input元素设置为readonly
    $("#love_status").attr("readonly","readonly")//将input元素设置为readonly
    $("#qq").attr("readonly","readonly")//将input元素设置为readonly
    $("#sina_blog").attr("readonly","readonly")//将input元素设置为readonly
    $("#signature").attr("readonly","readonly")//将input元素设置为readonly
    $("#live_city").attr("readonly","readonly")//将input元素设置为readonly
    $("#job").attr("readonly","readonly")//将input元素设置为readonly
    $("#submit").hide()//

}

function modify() {
    $("#real_name").removeAttr("readonly");
    $("#g_class").removeAttr("readonly");
    $("#leaveYear").removeAttr("readonly");
    $("#university").removeAttr("readonly");
    $("#area").removeAttr("readonly");
    $("#love_status").removeAttr("readonly");
    $("#qq").removeAttr("readonly");
    $("#sina_blog").removeAttr("readonly");
    $("#signature").removeAttr("readonly");
    $("#live_city").removeAttr("readonly");
    $("#job").removeAttr("readonly");
    $("#submit").show();//将input元素设置为readonly
}

