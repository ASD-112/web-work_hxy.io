
//  ./static/00.jpg
$(document).ready(function (){
    var num =parseInt(window.localStorage.getItem("num"))  
    for(i=0;i<=num;i++)
    {
        textname = window.localStorage.getItem("textname"+i)
        content = window.localStorage.getItem("content"+i)
        img_url= window.localStorage.getItem("img_url"+i)
        console.log(textname)
        if(textname!=null&&content!=null)
        {
        $("#ds1").append(

            '<span class="item" id="'+ i +'">'+
                    '<a class="fff" href="./yemian.html?id='+ i +'">'+
                            '<div>'+
                                '<img src="'+ img_url + '">'+
                            '</div>'+
                            '<div class="f2">'+
                                '<h1 class="web-font2">'+textname+'</h1>'+
                                  '<p>' +content+ '</p>'+
                            '</div>'+
                        '</a>'+ 
                        '<div class="change">'+
                                '<button class="del" onclick="del(this)">del</button>'+
                                '<button onclick="window.open('+ "'./edit.html?id1='+"+i+')">edit</button>'+
                        '</div>'+
            '</span>'
        )
        }
    }
})

function del1(o){
    $(o).parent().parent().remove();   
}

function del(o){
    item = $(o).parent().parent();
    num = item.attr("id");
    alert(num)
    window.localStorage.removeItem("textname"+num)
    window.localStorage.removeItem("content"+num)
    window.localStorage.removeItem("image"+num)
    window.localStorage.removeItem("img_url"+num)
    var web = localStorage.getItem("web")
        if(web==null || web==='') {
            web = "[]"
        }
    var webJson = JSON.parse(web)
    for(var i=0 ;i<webJson.length;i++)
    {
        if(webJson[i].id1 == num)
        {
            new_arr = webJson.splice(i, 1);
            break
        }
    }
    localStorage.setItem("web", JSON.stringify(webJson))
    item.remove();

}