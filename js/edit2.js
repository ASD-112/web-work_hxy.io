function button(e) {
    var textname = $(".textname").val()
    var content = $(".content").val()
    var str1;//全局变量，用于存储base64字符串
    //图片转为base64编码字符串
    function gen_base64() {
        var file = document.getElementById('upload_file').files[0];
        var r = new FileReader();  //本地预览

        r.readAsDataURL(file);    //Base64
        r.onload = function(){
            str1=r.result;
            console.info(str1);
            return 0;
        }
    }

    // document.getElementById("upload_file").onchange = function () {
    //     gen_base64();
    // };
    gen_base64();
    var num0 = window.localStorage.getItem("num") 
    if(num0)
    {
        var num = parseInt(num0)+1;
    }
    else{
        var num=0;
    }
    window.localStorage.setItem("num", num);
    console.log(num)
    window.localStorage.setItem("textname"+num, textname);
    window.localStorage.setItem("content"+num, content);
    window.localStorage.setItem("image"+num, str1);
    document.getElementById("back11").click();
}