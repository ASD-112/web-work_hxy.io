var web = JSON.parse(localStorage.getItem("web"))
webJson = {}
var url = window.location.href
var id = url.split("id=")[1]
id=id.toString()
console.log(id)
console.log(web)
var flag=0
for(var i=0;i<web.length;i++)
{
    console.log("11111")
    var m = +web[i].id1
    console.log(m)
    if(m==id)
    {
        console.log("222222222")
        webJson = web[i]
        console.log(webJson)
        $.get("sub.tpl", function(result){
            var html = ejs.compile(result)(webJson);
            $("#main").html(html);
        })
        flag=1;
    }
}
if(flag==0)
{
    alert("数据不全");
    document.getElementById("ba").click();
}   
    
var say = $("#say");
function sub(now){
    text1 = say.val();
    if(text1 == '')
        alert("不能为空");
    else{
        tbody=$(now).parent().parent();
        tbody.append(
            '</br>'+
            text1+
            '</br>'+
            '<hr color="black" width="100%" size="20">'
        );
    }
}