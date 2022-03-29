const showburger = document.getElementById("burger");
const showbar = document.getElementsByClassName("navbar-menu");
const maindata = document.getElementsByClassName("main");
const pagenum = document.getElementsByClassName("page-num");

// function section
function resizeFunction() {
    if(window.innerWidth > 760) {
        showbar[0].style.display = "flex";
    } else {
        showbar[0].style.display = "none";
    }
}

function showNavbar() {
    if(showbar[0].style.display == "none") {
        showbar[0].style.display = "flex";  
    } else {
        showbar[0].style.display = "none";
    }
}
function showNext(num) {
    let j;
    let plong = pagenum.length;
    let pnum;
    for(j = 0; j <plong; j++) {
        if(pagenum[j].className.endsWith(" active")) {
            pnum = j+1;
        }
    }
    pnum +=num;
    if(pnum > plong){
        pnum = 1;
    }
    if(pnum < 1){
        pnum = plong;
    }
    showMain(pnum);

}

// show main content
function showMain(num) {
    let i;
    const mainlength = maindata.length;
    // hide all main context
    for(i = 0; i <mainlength; i++) {
        maindata[i].style.display = "none";
    }
    // remove active from page number
    for(i = 0; i < pagenum.length; i++){
        pagenum[i].className = pagenum[i].className.replace(" active", "");
    }
    // set active page num and show selected page
    maindata[num - 1].style.display = "block";
    pagenum[num-1].className += " active";

}