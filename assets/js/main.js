/*==================== MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== HEADER BAGGRUNDSFARVE ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




function signUp() {
    if (document.getElementById("password2").value == document.getElementById("cfmpassword2").value) {
        var users = new Object();
        users.firstName = document.getElementById("firstName").value;
        users.lastName = document.getElementById("lastName").value;
        users.username2 = document.getElementById("username2").value;
        users.email = document.getElementById("email").value;
        users.password2 = document.getElementById("password2").value;


        var postUser = new XMLHttpRequest(); // new HttpRequest instance to send user details

        postUser.open("POST", "/users", true); //Use the HTTP POST method to send data to server

        postUser.setRequestHeader("Content-Type", "application/json");

        // Convert the data in "users" object to JSON format before sending to the server.
        postUser.send(JSON.stringify(users));
    }
    else {
        alert("Password og Godkend Password er forskellige!")
    }
}