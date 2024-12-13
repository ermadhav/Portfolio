function generateOTP(length) {
    let otp = '';
    for(let i=0; i<length; i++) {
        otp += Math.floor(Math.random()*10).toString();
    }
    return otp;
   
}
function displayOTP() {
    let otpButton = document.getElementById("otpgenerate");
    let generatedOTP = generateOTP(4);
    otpDisplay.textContent ="Generated OTP: "+generatedOTP;
}

document.getElementById("otpgenerate").addEventListener("click", displayOTP)
