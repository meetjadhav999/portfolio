
function toggleSideMenu(){
    let bar1 = document.getElementById("bar1");
    let bar2 = document.getElementById("bar2");
    let bar3 = document.getElementById("bar3");
    let menu = document.getElementById("sidemenu");
    let links = document.getElementById("links");
    let socials = document.getElementById("socials");

    if(menu.offsetWidth === 0){

        menu.style.width = '200px';
        bar1.style.rotate = '43deg';
        bar2.style.opacity = 0;
        bar3.style.rotate = '-43deg'

        links.style.opacity = "1";
        socials.style.opacity = "1";

    }
    else{
        links.style.opacity = "0";
        socials.style.opacity = "0";
        menu.style.width = '0px';
        bar1.style.rotate = '0deg';
        bar2.style.opacity = 1;
        bar3.style.rotate = '0deg'
        
        
    }

}