const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const popup = document.getElementById("popup");

const showError = (field, errorText) => {

    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);

}

const showPopup = () => {

    popup.classList.add("open-slide");

}

const closeSlide = () => {

    popup.classList.remove("open-slide");
    form.reset();

}

const handleFormData = async(e) => {
    e.preventDefault();
   
    const fullnameInput = document.getElementById("fullname");
    const staffIdInput = document.getElementById("staffId");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const fullname = fullnameInput.value.trim();
    const staffId = staffIdInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const phone = phoneInput.value.trim();
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
  
    if (fullname === "") {

        showError(fullnameInput, "Enter your full name*");

    }

    if (staffId === "") {

        showError(staffIdInput, "Enter your staff ID*");

    }

    if (!emailPattern.test(email)) {

        showError(emailInput, "Enter a valid email address*");

    }

    if (password === "") {

        showError(passwordInput, "Enter your password*");

    }

    if (phone === ""){

        showError(phoneInput, "Enter your phone number*");

    }
   
    const errorInputs = document.querySelectorAll(".form-group .error");

    if (errorInputs.length === 0) {        
            try{
                const response = await fetch("", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",      
                    },
                    body: JSON.stringify({
                        username: fullname,
                        staff_id: staffId,
                        email,
                        password,
                        ph_numer: phone,
                    }),
                });

                if (response.ok){
                    console.log(response);
                    // showPopup();
                }

                else {
                    throw new Error("Failed to submit the form");
                }

            } catch (error){
                console.error("Error:", error.message);
            }
        showPopup();
    }
}

form.addEventListener("submit", handleFormData);

// async function getIpAddressAndUserAgent() {
//     try {
//         const response = await fetch('https://api.ipify.org?format=json');
//         const data = await response.json();
//         const user_ip = data.ip;
        // const user_agent = navigator.userAgent;

//         return {user_ip, user_agent};
//     } catch (error) {
//         console.error('Error fetching IP address and user agent:', error);
//         return {user_ip:'Error', user_agent:'Error'};
//     }
// }

// async function getUserAgent(){
    
//     const user_agent = navigator.userAgent;
//     return user_agent;
// }

// async function sendUserInfo(user_agent) {
//     try {
//         const response = await fetch('', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
         
//                 user_agent,
//             }),
//         });

//         if (response.ok) {
//             console.log('User information sent to server successfully');
//         } else {
//             throw new Error('Failed to send user information to server');
//         }
//     } catch (error) {
//         console.error('Error sending user information:', error.message);
//     }
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     try {

//         const user_agent = navigator.userAgent;
//         console.log('User info:', user_agent);
        
//         return user_agent;
        

//         const ipAddress = await getIpAddress();
//         console.log('User IP Address:', ipAddress);

//         await sendUserInfo(user_agent);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// });

// const getUserIP = async () => {
//     try {
//       const response = await fetch('https://ipinfo.io/json');
//       if (response.ok) {
//         const data = await response.json();
//         return data.ip;
//       } else {
//         throw new Error('Failed to get IP address');
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//       return null;
//     }
//   };

// document.addEventListener('DOMContentLoaded', async () => {
//     const userIP = await getUserIP();
//     console.log('User IP:', userIP);
  
//     // Add any other initialization logic here
// });
