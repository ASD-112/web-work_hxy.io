let login=document.getElementById('login');
let register=document.getElementById('register');
let form_box=document.getElementsByClassName('form-box')[0];
let register_box=document.getElementsByClassName('register-box')[0];
let login_box=document.getElementsByClassName('login-box')[0];
// 去注册按钮点击事件
register.addEventListener('click',()=>{
    form_box.style.transform='translateX(86%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})
// 去登录按钮点击事件
login.addEventListener('click',()=>{
    form_box.style.transform='translateX(0%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
}) 

let log=document.getElementById('log')
let reg=document.getElementById('reg')
//登录按钮
log.addEventListener('click',()=>{
    var user =  $("#user2");
    var password = $("#pw2");
    text_u = user.val();
    text_pw = password.val();
    console.log(window.localStorage.getItem(text_u))
    pw1 = window.localStorage.getItem(text_u);
    if(text_u=="123" && text_pw=="123")
    {
        alert("登录成功");
        //写入cookies
        document.cookie = 'User' +'='+ text_u +";";
        document.getElementById("bo").click();
    }
    else
    {
        if(pw1 == text_pw)
        {
            alert("登录成功");
            //写入cookies
            document.cookie = 'User' +'='+ text_u +";";
            document.getElementById("bo").click();
        }
        else
        {
            alert("用户不存在");
        }
    }
})

//注册按钮
reg.addEventListener('click',()=>{
    var user =  $("#user1");
    var password = $("#pw1");
    text_u = user.val();
    text_pw = password.val();
    if(text_u!=''&&text_pw!='')
    {
        window.localStorage.setItem(text_u, text_pw);
        alert("注册成功");
        window.location.reload();
    }
    else
    {
        alert("请补全信息")
    }
})