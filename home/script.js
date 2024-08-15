
// import {auth, onAuthStateChanged } from "../firebase.js";

// onAuthStateChanged(auth, (user) => {
//     if (user) {
      
//       console.log("user login",user)
//       setTimeout(()=>{
//         window.location.href="home.html"
        

//       },2000)
//     } else {
//       console.log("user not login",user)

//       setTimeout(()=>{
//         window.location.href="./login/login.html"
//       })
//     }
//   });


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 5, 
});



/* Start Profile Popup */


window.addEventListener("scroll",()=>{
    document.querySelector(".profile-popup").style.display = "none"
    //document.querySelector(".add-post-popup").style.display="none"
})

document.querySelectorAll("#my-profile-picture").forEach(allProfile =>{
    allProfile.addEventListener("click",()=>{
        document.querySelector(".profile-popup").style.display = "flex"
    })
})

document.querySelectorAll(".close").forEach(allCloser =>{
    allCloser.addEventListener("click",()=>{
        document.querySelector(".profile-popup").style.display = "none"
        document.querySelector(".add-post-popup").style.display="none"
        document.querySelector(".theme-customize").style.display="none"
    })
})

document.querySelector("#profile-upload").addEventListener("change",()=>{
    document.querySelectorAll("#my-profile-picture img").forEach(allProfileImage =>{
        allProfileImage.src = URL.createObjectURL(document.querySelector("#profile-upload").files[0])
    })
})



// Start Add Post PopUp

document.querySelector("#crate-lg").addEventListener("click",()=>{
    document.querySelector(".add-post-popup").style.display="flex"
})


document.querySelector("#feed-pic-upload").addEventListener("change",()=>{
    document.querySelector("#postImg").src = URL.createObjectURL(document.querySelector("#feed-pic-upload").files[0])

})

// Start Add Story PopUp

document.querySelector("#add-story").addEventListener("change",()=>{
    document.querySelector(".story img").src=URL.createObjectURL(document.querySelector("#add-story").files[0]);
    document.querySelector('.add-story').style.display="none"
})



// HighLight Post Input

document.querySelector(".mini-button").addEventListener("click",()=>{
    document.querySelector(".input-post").classList.add("boxshadow")
    

})


document.querySelector(".mini-button").addEventListener("dblclick",()=>{
    document.querySelector(".add-post-popup").style.display="flex"
    

})


// Liked Button



document.querySelectorAll(".action-button span:first-child i").forEach(liked=>{
    liked.addEventListener("click",()=>{
        liked.classList.toggle('liked')
    })
    
})


