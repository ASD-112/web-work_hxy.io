$(document).ready(function (){
    var num =parseInt(window.localStorage.getItem("num"))  
    textname = window.localStorage.getItem("textname"+num)
    content = window.localStorage.getItem("content"+num)
    image= window.localStorage.getItem("image"+num)
    console.log(textname)
    $("#ds1").append(

        '<span class="item">'+
                   '<a class="fff" href="./fenyemian/meishi/龙井虾仁.html">'+
                        '<div>'+
                            '<img src="static/页面素材/美食/龙井虾仁/00.jpg">'+
                        '</div>'+
                        '<div>'+
                            '<i class="web-font2">'+textname+'</i>'+
                                content+
                        '</div>'+
                    '</a>'+ 
                    '<div class="change">'+
                            '<button>del</button>'+
                            '<button onclick="window.open("./edit.html")">edit</button>'+
                    '</div>'+
        '</span>'
    )
})