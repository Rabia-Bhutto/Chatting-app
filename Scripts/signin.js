import { signInWithEmailAndPassword ,getAuth} from "./firebase.js";


const auth = getAuth();

let signInPassword = document.getElementById("signInPassword")
let  signInEmail = document.getElementById("signInEmail")

let loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click", () => {
  if (signInEmail.value.trim() && signInPassword.value.trim()) {
      signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // Redirect to profile.html only if sign-in is successful
          window.location.href = "Pages/profile.html";
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
      });
  } else {
      console.log("insert your data");
  }
});


// loginBtn.addEventListener("click",()=>{
//     if(signInEmail.value.trim() && signInPassword.value.trim()){
//         signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           console.log(user);
          
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           console.log(errorMessage);
          
//         });
      

//     }
//     else{
//         console.log("insert your data");
        
//     }

//     // location.href = "../Pages/profile.html"

// JavaScript to handle form submission and slide effect
document.getElementById("signinForm").addEventListener("submit", function (event) {
  // event.preventDefault(); // Prevent page reload

  // // Slide the image container to the left
  // document.getElementById("imageContainer").classList.add("slide-left");
  // // Display the sign-in form
  // document.getElementById("signinForm").classList.add("active");
  location.href = "Pages/profile.html"

});


// })