let $ = (id) => document.querySelector(id)

let shareButton = $('#share-button')
let shareBox = $('#share-box')
let profileBox = $('#profile-box')

let bodyWidth = document.getElementsByTagName('body')[0].clientWidth

shareButton.addEventListener('click', () => {

    if (bodyWidth === 1440) {

        shareBox.classList.remove('inactive')
    } else {
        shareBox.classList.remove('inactive')
        profileBox.classList.add('inactive')
    }
    
})