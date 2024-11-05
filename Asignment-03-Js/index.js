
/* __________________________ 43rd to 48th  ________________________________________
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
// 1. Show an alert box on click on a link.

/////////////////// in html



// 2. Display some Mobile images in browser. On click on an
//     image Show the message in alert to user.

//////////////////// in html



// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be deleted.
// Before delete
// After click on delete button on “Mark ” row



function deleteRow1(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}

function deleteRow2(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}

function deleteRow3(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}

function deleteRow4(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}


// 4. Display an image in browser. Change the picture on mouseover and set the
//  first picture on mouseout.


///////////////// in html


//  5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

var counter = 0;

function updateCounter() {
    document.getElementById('counter').innerText = counter;
}

function increase() {
    counter++;
    updateCounter();
}

function decrease() {
    //shoud not below zero
    if (counter > 0) {
        counter--;
        updateCounter();
    }
}


/* __________________________ 43rd to 48th  ________________________________________
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/


// 1. Create a signup form and display form data in your web
// page on submission.

const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");

signupBtn.addEventListener("click", () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.addEventListener("click", () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.addEventListener("click", () => {
    signupBtn.click();
    return false;
})

////////////////////////////////////////////////////////form date function
function displayFormData(event) {
    event.preventDefault();


    var form = event.target;
    var email = form.email.value;
    var password = form.password.value;
    // var confirmPassword = form.confirm_password ? form.confirm_password.value : '';
    var username = form.username ? form.username.value : 'N/A';

    document.getElementById('displayUsername').innerHTML = "Username: " + username;
    document.getElementById('displayEmail').innerHTML = "Email: " + email;
    document.getElementById('displayPassword').innerHTML = "Password: " + password;
    // document.getElementById('displayConfirmPassword').innerHTML = "Confirm Password: " + confirmPassword;
}


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

/////////////////////////////////////////////
function toggle() {
    var hidetext = document.getElementById("hidetext");
    var hidebutton = document.getElementById("button");

    if (hidetext.style.display === "none" || hidetext.style.display === "") {
        hidetext.style.display = "block";
        hidebutton.innerHTML = "Read Less";
    }
    else {
        hidetext.style.display = "none";
        hidebutton.innerHTML = "Read Full";
    }
}


function toggle2() {
    var hidetext2 = document.getElementById("hidetext2");
    var hidebutton2 = document.getElementById("button2");

    if (hidetext2.style.display === "none" || hidetext2.style.display === "") {
        hidetext2.style.display = "block";
        hidebutton2.innerHTML = "Read Less";
    }
    else {
        hidetext2.style.display = "none";
        hidebutton2.innerHTML = "Read Full";
    }
}


function toggle3() {
    var hidetext3 = document.getElementById("hidetext3");
    var hidebutton3 = document.getElementById("button3");

    if (hidetext3.style.display === "none" || hidetext.style.display === "") {
        hidetext3.style.display = "block";
        hidebutton3.innerHTML = "Read Less";
    }
    else {
        hidetext3.style.display = "none";
        hidebutton3.innerHTML = "Read Full";
    }
}





// 3. In previous assignment you have created a tabular data
// using javascript. Let's modify that. Create a form which
// takes student's details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.




function deleteRow5(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}

function deleteRow6(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}

function deleteRow7(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}

function deleteRow8(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}
// ------------------------------------------------------------
var currentEditRow;

function deleteRow(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}

function editRow(rowId) {
    currentEditRow = document.getElementById(rowId);
    document.getElementById('editNameInput').value = currentEditRow.querySelector('#editName').innerText;
    document.getElementById('editClassInput').value = currentEditRow.querySelector('#editclass').innerText;
    document.getElementById('editForm').style.display = 'block';
}

function updateRow(event) {
    event.preventDefault();
    currentEditRow.querySelector('#editName').innerText = document.getElementById('editNameInput').value;
    currentEditRow.querySelector('#editclass').innerText = document.getElementById('editClassInput').value;
    hideEditForm();
}

function hideEditForm() {
    document.getElementById('editForm').style.display = 'none';
}


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//__________________________________________________________________________________
//|------  |xxxxxxxxx| ----- |xx|       |xx| ---  |xxxxxxxxx|  --------
//|------  |xx|        ----- |xx|x|     |xx| ---  |xx|    |xx|  --------
//|------  |xxxxxx|    ----- |xx| |x|   |xx| ---  |xx|    |xx|  --------
//|------  |xx|        ----- |xx|   |x| |xx| ---  |xx|    |xx|  --------
//|------  |xxxxxxxxx| ----- |xx|     |x|xx| ---  |xx|xxx|xx|  --------
//_________________________________________________________________________________
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/