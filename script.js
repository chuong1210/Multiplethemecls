let colorIcon=document.querySelector(".color-icon");
icons=document.querySelector(".color-icon .icons");

icons.addEventListener('click',()=>
{
    colorIcon.classList.toggle("open");
});


let buttons=document.querySelectorAll(".btn");

for(var button of buttons)
{
    button.addEventListener('click',(e)=>
    {
        let target=e.target;
        let  open=document.querySelector(".open");
        if(open) open.classList.remove('open');
        document.querySelector(".active").classList.remove("active");
        target.classList.add("active");



        let root=document.querySelector(":root"),
        dataColor=target.getAttribute("data-color");
        color=dataColor.split(" ");

        root.style.setProperty("--white",color[0]);
        root.style.setProperty("--black",color[1]);
        root.style.setProperty("--nav-main",color[2]);
        root.style.setProperty("--switchers-main",color[3]);
        root.style.setProperty("--light-bg",color[4]);



        let iconName=target.className.split(" ")[2],
        colorText=document.querySelector(".home-content span");

        if(target.classList.contains("uil-moon"))
        {
target.classList.replace(iconName,"uil-sun");
colorIcon.style.display='none';
colorText.classList.add("darkMode");
        }
       else if(target.classList.contains("uil-sun"))
       {
colorIcon.style.display='block';
target.classList.replace(iconName,"uil-moon");
colorText.classList.remove("darkMode");
document.querySelector(".btn.blue").click();

       }



        console.log(iconName);
    })
}