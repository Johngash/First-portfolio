let navBar = document.querySelector('nav')

// document.onload = () =>{
    function navShow(){
        if(!navBar.classList.contains("show")){
            navBar.classList.add("show")
            navBar.style.display ="flex"
            console.log(navBar.style.display);
            
        }else{
            navBar.classList.remove("show")
            navBar.style.display ="none"
        }
    }
// }