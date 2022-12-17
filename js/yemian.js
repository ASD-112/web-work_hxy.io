var web = JSON.parse(localStorage.getItem("web"))
webJson = {}
var url = window.location.href
var id = url.split("id=")[1]
id=id.toString()
console.log(id)
console.log(web)
var flag=0
if(id == "z")
{
    flag=1
    text={}
    text.id1 = "z"
    text.cailiao = [["茶叶", "若干"]]
    text.feature = "西湖龙井茶，外形扁平挺秀，色泽绿翠，内质清香味醇，泡在杯中，芽叶色绿。素以“色绿、香郁、味甘、形美”四绝称著。"
    text.his = "西湖龙井茶历史悠久，最早可追溯到中国唐代，当时著名的茶圣陆羽，在所撰写的世界上第一部茶叶专著《茶经》中，就有杭州天竺、灵隐二寺产茶的记载。西湖龙井茶之名始于宋，闻于元，扬于明，盛于清。在这一千多年的历史演变过程，西湖龙井茶从无名到有名，从老百姓饭后的家常饮品到帝王将相的贡品，从中华民族的名茶到走向世界的名品，开始了它的辉煌时期。"
    text.img_url = "./static/页面素材/特产/西湖龙井/00.jpg"
    text.intro = " 特级西湖龙井茶扁平光滑挺直，色泽嫩绿光润，香气鲜嫩清高，滋味鲜爽甘醇，叶底细嫩呈朵。清明节前采制的龙井茶简称明前龙井，美称女儿红，“院外风荷西子笑，明前龙井女儿红。“"
    text.lab= ["饮品"]
    text.make=["采摘。","晾晒:西湖龙井在采摘后要竹筛上进行晾晒，一般需要半天左右时间，这样可以减少茶叶中的青草味道，使水分达到炒制的要求。","揉捻:揉也叫揉捻，是通过外力将茶叶的内部结构揉捻成人们希望的形状，但龙井茶的形状要求青叶保留一部分自然的刚性，以便茶叶成型后还能看到部分青叶的原状。","炒制:西湖龙井的炒制需要手工完成,整个炒茶过程分为青锅、回潮、辉锅三个阶段。"]
    text.make2 = ["十大炒法传统的龙井炒制有十大手法：抛、抖、搭、煽、搨、甩、抓、推、扣和压磨，不同品质的茶叶又有不同的炒制手法,先要抛，再压、推，再搭，然后抓、抖……每一步骤中又可以增加或是分解成若干个动作。"
                    ]
    text.name = "西湖龙井"
    text.score = "5.0"
    text.type = "特产"
    webJson = text
    $.get("sub.tpl", function(result){
        var html = ejs.compile(result)(webJson);
        $("#main").html(html);
    })
}
else
{
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
}
if(flag==0)
{
    alert("数据不全");
    document.getElementById("ba").click();
}
else{
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
            var tbody=$("#cat")
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
                '<hr color="black" width="70%" margin-left="15%" size="5">'
            );
            }
        }
}   
var say = $("#say");
function sub(now){
    console.log("1");
    console.log(say)
    var text1 = say.val();
    console.log("text1:"+text1)
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
        tbody=$("#cat");
        tbody.append(
            '</br>'+
            '<h1 class=chat_1>'+
                name1+
            '</h1>'+
            '<p class=chat_2>'+
                text1+
            '</p>'+
            '</br>'+
            '<hr color="black" margin-left="15%" width="70%" size="5">'
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
