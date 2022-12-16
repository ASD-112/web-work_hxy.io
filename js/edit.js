//  ./static/00.jpg

var num = 0;
function addr(){
    // num+=1;
    $("#t1").append(
        "<tr class='cl'>"+
        "<td></td>"+
        "<td>"+
        "<textarea cols='12' rows='1' placeholder='请输入材料名' name='t1'></textarea>"+
        "&nbsp;"+
        "<textarea cols='12' rows='1' placeholder='请输入材料量' name='t2'></textarea>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;"+  
        "<button type='button' class='delete' onclick='der(this)'>删除</button>"+
        "</td>"+
        "</tr>"  
    );
}
function der(o){
        // num-=1;
        $(o).parent().parent().remove();
}
function button() {
        var text = {}
        var afterUrl = window.location.search.substring(1);
        console.log(afterUrl)
        var afterEqual = afterUrl.substring(afterUrl.indexOf('=')+1).toUpperCase();
        console.log(afterEqual)
        var num = afterEqual
        text.id1 = afterEqual
        text.name = $(".name").val();
        text.score = $(".score").val();
        text.img_url = $(".img_url").val();
        text.type = $("input[type='radio']:checked").val();
       
        var lab = '';
        for(var i = 0; i < $("input[type='checkbox']:checked").length; i++) {
            lab += $("input[type='checkbox']:checked")[i].value + ',';
        } 
        lab = lab.substring(0, lab.length - 1);
        lab = lab.split(',');
        console.log(lab);
        text.lab = lab;      
        text.intro = $(".intro").val()
        text.his = $(".history").val()
        text.make = $(".make").val().split("。").slice(0,-1)
        console.log(text.make)
        text.make2 = $(".make2").val().split("。").slice(0,-1)
        text.feature = $(".feature").val()
        cailiao = []
        var item = $("#be")
        var number = 0;
        while(item.attr("class")=="cl")
        {
            cailiao[number] = [];
            cailiao[number][0] = item.find('textarea[name="t1"]').val();
            cailiao[number][1] = item.find('textarea[name="t2"]').val();
            number = number+1;
            item=item.next();
        }
        text.cailiao = cailiao
        if(!text.id1||!text.name||!text.score||!text.img_url||!text.type||!text.lab||!text.intro||!text.his||!text.make||!text.make2||!text.feature||!text.cailiao)
        {
            alert("数据不全");
        }
        else
        {
            window.localStorage.setItem("textname"+num, text.name);
            window.localStorage.setItem("content"+num, text.intro);
            window.localStorage.setItem("img_url"+num, text.img_url);
            document.getElementById("back111").click();
       
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
                    break;
                }
            }
            webJson.push(text)
            localStorage.setItem("web", JSON.stringify(webJson))
        }
}
