const editIcon = document.getElementById('edit-icon');
const editDialog = document.getElementById('edit-dialog');
const userProfile = document.getElementById('username');
const emailProfile = document.getElementById('emailHolder');
const contentDialog = document.getElementById('content');

let username = 'Phen Sovannoch'
let email = 'noch@gmail.com'
userProfile.innerHTML = username;
emailProfile.innerHTML = email
/*listen for click on the edit icon and excute the func */
editIcon.addEventListener('click', function () {
    editDialog.style.display = 'flex'
    contentDialog.style.display = 'none'
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const mainContent = document.getElementById('container')
    nameInput.value =username;
    emailInput.value =email;
    mainContent.style.height='75vh'
    return
}
);
const subbtn = document.getElementById('subProfile')
subbtn.addEventListener('click',() =>{
    const newName = document.getElementById('name').value;
    const newEmail = document.getElementById('email').value;
    if (newName != username || newEmail != email){
        userProfile.innerHTML=newName;
        emailProfile.innerHTML=newEmail;
        editDialog.style.display = 'none'
        contentDialog.style.display = 'flex'
    }
    else{
        alert('What the point of edit if you just use the same info :)')
    }
})
/* not yet fully work still need modify( when user enter the info it still use the old var)*/

/*continue btn function */
function redirectToHome(){
    window.location.href="../../read_panel.html"
}