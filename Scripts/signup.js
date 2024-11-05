// FIREBASE JS
// importing
import { getAuth,createUserWithEmailAndPassword } from "./firebase.js"


const auth = getAuth();



let siginUpBtn = document.getElementById("signupBtn")
let signupEmail = document.getElementById("signupEmail")
let signupPassword = document.getElementById("signupPassword")

// you can check the user if the user giving the fields or not (nesting checking)



siginUpBtn.addEventListener("click",()=>{
   if(signupEmail.value.trim() && signupPassword.value.trim()){
       createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
       .then((userCredential) => {
         const user = userCredential.user;
         console.log(user);
         
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorCode);
         console.log(errorMessage);
         switch (errorMessage){
          case "Firebase: Error (auth/email-already-in-use).":
           console.log("use other email");
           break;
           
         }
         
       });

   }
   else{
       console.log("insert your data");
       
   }
   
})






// JavaScript to handle form submission and slide effect
document.getElementById("signUpForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Slide the image container to the left
    document.getElementById("imageContainer").classList.add("slide-left");
    // Display the sign-in form
    document.getElementById("signinForm").classList.add("active");
});

document.getElementById("loginLink").addEventListener("click", function(){
  // Slide the image container to the left
  document.getElementById("imageContainer").classList.add("slide-left");
  // Display the sign-in form
  document.getElementById("signinForm").classList.add("active");
})






// STYLING WITH JS
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Change the border-radius and slide the image
    const slideImage = document.getElementById('bgImg');
    slideImage.style.borderTopLeftRadius = '20px';
    slideImage.style.borderBottomLeftRadius = '20px';
    slideImage.style.borderTopRightRadius = '0px';
    slideImage.style.borderBottomRightRadius = '0px';
    slideImage.style.marginLeft = '-25px'

    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    
    // Adjust flex properties to slide
    leftSide.style.flex = '0.7';
    rightSide.style.flex = '1';

    // Show the signin form after a delay
    setTimeout(() => {
        document.getElementById('signInForm').classList.remove('hidden');
    }, 500); // Delay to allow the sliding effect to complete
});

document.getElementById('loginLink').addEventListener('click', function(){
   // Change the border-radius and slide the image
   const slideImage = document.getElementById('bgImg');
   slideImage.style.borderTopLeftRadius = '20px';
   slideImage.style.borderBottomLeftRadius = '20px';
   slideImage.style.borderTopRightRadius = '0px';
   slideImage.style.borderBottomRightRadius = '0px';
   slideImage.style.marginLeft = '-25px'

   const leftSide = document.querySelector('.left-side');
   const rightSide = document.querySelector('.right-side');
   
   // Adjust flex properties to slide
   leftSide.style.flex = '0.7';
   rightSide.style.flex = '1';

   // Show the signin form after a delay
   setTimeout(() => {
       document.getElementById('signInForm').classList.remove('hidden');
   }, 500); // Delay to allow the sliding effect to complete
})
