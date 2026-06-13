function login(){

    let username =
        document.getElementById("username").value;

    document.getElementById("welcomeText")
        .innerText = "HELLO, " + username.toUpperCase();

    document.getElementById("loginPage")
        .classList.remove("active");

    document.getElementById("homePage")
        .classList.add("active");
}

function openDonation(){

document
.getElementById("homePage")
.classList.remove("active");

document
.getElementById("donationPage")
.classList.add("active");

}

function backHome(){

document
.getElementById("donationPage")
.classList.remove("active");

document
.getElementById("homePage")
.classList.add("active");

}

let selectedAmount = "";

function selectAmount(button){

    document
        .querySelectorAll(".amounts button")
        .forEach(btn => btn.classList.remove("selected"));

    button.classList.add("selected");

    selectedAmount = button.innerText;
}

function continueDonation(){

    document.getElementById("confirmAmount")
        .innerText = selectedAmount;

    document.getElementById("donationPage")
        .classList.remove("active");

    document.getElementById("confirmPage")
        .classList.add("active");
}

function openQRIS(){

    document.getElementById("confirmPage")
        .classList.remove("active");

    document.getElementById("qrisPage")
        .classList.add("active");
}

let donationHistory = [];

function paymentSuccess(){

    let amount =
        document.getElementById("confirmAmount").innerText;

    let program =
        document.getElementById("programTitle").innerText;

    donationHistory.push({
        program: program,
        amount: amount
    });

    document.getElementById("qrisPage")
        .classList.remove("active");

    document.getElementById("successPage")
        .classList.add("active");
}

function openHistory(){

    alert("Jumlah data: " + donationHistory.length);

    document.getElementById("successPage")
        .classList.remove("active");

    document.getElementById("historyPage")
        .classList.add("active");

    let html = "";

    donationHistory.forEach(item => {

        html += `
        <div class="historyCard">
            <h3>${item.program}</h3>
            <p>${item.amount}</p>
            <small>Berhasil</small>
        </div>
        `;
    });

    document.getElementById("historyList").innerHTML = html;
}
function openAll(){

    document.getElementById("homePage")
        .classList.remove("active");

    document.getElementById("allPage")
        .classList.add("active");
}

function openHealth(){

    document.getElementById("homePage")
        .classList.remove("active");

    document.getElementById("healthPage")
        .classList.add("active");
}

function openStudy(){

    document.getElementById("homePage")
        .classList.remove("active");

    document.getElementById("studyPage")
        .classList.add("active");
}

function backHomeFromCategory(){

    document.getElementById("allPage")
        .classList.remove("active");

    document.getElementById("healthPage")
        .classList.remove("active");

    document.getElementById("studyPage")
        .classList.remove("active");

    document.getElementById("homePage")
        .classList.add("active");
}
function openDonationProgram(program){

    alert("Klik: " + program);

    document.getElementById("programTitle").innerText = program;

    document.getElementById("allPage")
        .classList.remove("active");

    document.getElementById("healthPage")
        .classList.remove("active");

    document.getElementById("studyPage")
        .classList.remove("active");

    document.getElementById("donationPage")
        .classList.add("active");
}