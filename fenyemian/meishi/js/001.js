$(document).ready(function (){
    var afterUrl = window.location.search.substring(1);
    console.log(afterUrl)
    var afterEqual = afterUrl.substring(afterUrl.indexOf('=')+1).toUpperCase();
    console.log(afterEqual)
    var id = afterEqual
    var cname="chat"+id
    var chat = localStorage.getItem(cname)
    if(chat==null || chat==='') {
        console.log("无");
    }
    else
    {
        var cJson = JSON.parse(chat)
        var tbody=$("#d2")
        for(var i=0;i<cJson.length;i++)
        {
        tbody.append(
            '</br>'+
            '<h1 class=chat_1>'+
                cJson[i].name+
            '</h1>'+
            '<p class=chat_2>'+
                cJson[i].word+
            '</p>'+
            '</br>'+
            '<hr color="black" width="100%" size="20">'
        );
        }
    }

})

var say = $("#say");
function sub(now){
        console.log("1");
        text1 = say.val();
        if(text1 == '')
            alert("不能为空");
        else{
            var cookie_user="";
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
                name1=cookie_user
            }
            else
            {
                name1="游客"
            }
            tbody=$(now).parent().parent();
            tbody.append(
                '</br>'+
                '<h1 class=chat_1>'+
                    name1+
                '</h1>'+
                '<p class=chat_2>'+
                    text1+
                '</p>'+
                '</br>'+
                '<hr color="black" width="100%" size="20">'
            );
            var afterUrl = window.location.search.substring(1);
            console.log(afterUrl)
            var afterEqual = afterUrl.substring(afterUrl.indexOf('=')+1).toUpperCase();
            console.log(afterEqual)
            var id = afterEqual
            cname="chat"+id
            console.log("cname:"+cname)
            var chat = localStorage.getItem(cname)
            if(chat==null || chat==='') {
                chat = "[]"
            }
            var cJson = JSON.parse(chat)
            var text = {}
            text.name = name1
            text.word = text1
            cJson.push(text)
            localStorage.setItem(cname, JSON.stringify(cJson))
        }
}
