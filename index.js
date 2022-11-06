let $ = (id) => document.querySelector(id)

let shareButton = $('#share-button')
let shareBox = $('#share-box')
let profileBox = $('#profile-box')

shareButton.addEventListener('click', () => {
    shareBox.classList.remove('inactive')
    profileBox.classList.add('inactive')
})