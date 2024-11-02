import {
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    updateProfile,
    signOut,
  } from "./firebase.js";
  
  const auth = getAuth();
  let profilePage = document.getElementById("profile-page");
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user);
  
      profilePage.innerHTML = `<section class="h-100 gradient-custom-2">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center">
          <div class="col col-lg-9 col-xl-8">
            <div class="card">
              <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
                <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
                  <img src="${user.photoURL}"
                    alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                    style="width: 150px; z-index: 1">
                  <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-dark text-body" id="updateProfile" data-mdb-ripple-color="dark" style="z-index: 1;">
                    Edit profile
                  </button>
                </div>
                <div class="ms-3" style="margin-top: 130px;">
                  <h5>${user.displayName}</h5>
                  <p>${user.email}</p>
                </div>
              </div>
              <div class="p-4 text-black bg-body-tertiary">
                <div class="d-flex justify-content-end text-center py-1 text-body">
                  <div>
                    <p class="mb-1 h5">253</p>
                    <p class="small text-muted mb-0">Photos</p>
                  </div>
                  <div class="px-3">
                    <p class="mb-1 h5">1026</p>
                    <p class="small text-muted mb-0">Followers</p>
                  </div>
                  <div>
                    <p class="mb-1 h5">478</p>
                    <p class="small text-muted mb-0">Following</p>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 text-black">
                <div class="mb-5  text-body">
                  <p class="lead fw-normal mb-1">About</p>
                  <div class="p-4 bg-body-tertiary">
                    <p class="font-italic mb-1">Web Developer</p>
                    <p class="font-italic mb-1">Lives in New York</p>
                    <p class="font-italic mb-0">Photographer</p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`
  
      //   verifyEmail
      document.getElementById("verifyEmail").addEventListener("click", () => {
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("email has been sent");
        });
      });
  
      //   update profile
  
      document.getElementById("updateProfile").addEventListener("click", () => {
        updateProfile(auth.currentUser, {
          displayName: "Saylani",
          photoURL:
            "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png",
        })
          .then(() => {
            console.log("update");
          })
          .catch((error) => {
            console.log(error);
          });
      });
  
  
      // sigh out 
      document.getElementById("signOut").addEventListener("click", () => {
          signOut(auth).then(() => {
              console.log("user has been signed out");
  
              
            }).catch((error) => {
              console.log(error);
              
            });
        });
  
    } else {
      console.log("user is logout out");
    }
  })