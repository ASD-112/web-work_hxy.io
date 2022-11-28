$(document).ready(function (){
    var num =parseInt(window.localStorage.getItem("num"))  
    for(i=0;i<=num;i++)
    {
        textname = window.localStorage.getItem("textname"+i)
        content = window.localStorage.getItem("content"+i)
        image= window.localStorage.getItem("image"+i)
        console.log(textname)
        if(textname!=''&&content!='')
        {
        $("#ds1").append(

            '<span class="item">'+
                    '<a class="fff" href="./fenyemian/meishi/龙井虾仁.html">'+
                            '<div>'+
                                '<img src="static/页面素材/美食/龙井虾仁/00.jpg">'+
                            '</div>'+
                            '<div>'+
                                '<h1 class="web-font2">'+textname+'</h1>'
                                    +content+
                            '</div>'+
                        '</a>'+ 
                        '<div class="change">'+
                                '<button>del</button>'+
                                '<button onclick="window.open('+ "'./edit.html'" + ')">edit</button>'+
                        '</div>'+
            '</span>'
        )
        }
    }
})