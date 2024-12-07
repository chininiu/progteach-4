const body = $("body");
const sidebar = $(".sidebar");
const toggle =$(".toggle");
const modeSwitch = $(".toggle-switch");
const modeText = $(".mode-text");
const magnify = $(".magnify");
const searchBar = $(".input-search")
const user = $("#user-title");
const email = $("#email-title");

email.text(localStorage.getItem('email'));
user.text(localStorage.getItem('username'));
//slidebar functions
toggle.click(function() {
    sidebar.toggleClass("close");
});

modeSwitch.click(function() {
    body.toggleClass("dark");
    if(body.hasClass("dark"))
    {
        modeText.text("Light Mood");
        localStorage.setItem("check", "true");
    }
    else
    {
        modeText.text("Dark Mood");
        localStorage.setItem("check", "false");

    }
});

if (localStorage.getItem("check") == "true")
{
    body.addClass("dark");
}
else 
{
    body.removeClass("dark");
}