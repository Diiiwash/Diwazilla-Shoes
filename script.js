var Menu_Items = document.getElementById("Menu_Items");
Menu_Items.style.maxHeight = "0px";
function menutoggle(){
    if(Menu_Items.style.maxHeight == "0px")
    {
        Menu_Items.style.maxHeight = "200px"
    }else
    {
        Menu_Items.style.maxHeight = "0px"
    }
}

var login_form = document.getElementById("login_form");
var reg_form = document.getElementById("reg_form");
var indicator = document.getElementById("indicator");

    function register(){
        reg_form.style.transform ="translateX(0px)";
        login_form.style.transform ="translateX(0px)";
        indicator.style.transform ="translateX(100px)"
    }
    function login(){
        reg_form.style.transform ="translateX(300px)";
        login_form.style.transform ="translateX(300px)";
        indicator.style.transform ="translateX(0px)";
    }