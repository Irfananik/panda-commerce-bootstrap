// 01 all h2 tags under color light blue
const allH2Color = document.querySelectorAll('h1')
for (const color of allH2Color) {
    color.style.color = 'lightBlue';
    color.style.fontWeight = 'bold';
}

// 02 bag-section backgroundColor change
const bagSection = document.getElementById('bag')
bagSection.style.backgroundColor = 'tomato';

// 03 card class style (borderRadius add)
const cards = document.getElementsByClassName("card")
for (let card of cards) {
    console.log(card);
    card.style.borderRadius = '50px'
}

// 04 onclick add with shoe button using id
function firstShoeButton() {
    console.log('Button Clicked')
    const clickShoeBtn1 = document.getElementById('first-shoe')
    clickShoeBtn1.innerText = 'Its expansive!'
}

function secondShoeButton() {
    console.log('Button Clicked')
    const clickShoeBtn2 = document.getElementById('second-shoe')
    clickShoeBtn2.innerText = 'Its semi-expansive!'
}

function thirdShoeButton() {
    console.log('Button Clicked')
    const clickShoeBtn3 = document.getElementById('third-shoe')
    clickShoeBtn3.innerText = 'Its a mid-rage shoe!'
}


// 05 remove button click
function removeButtonClick() {
    console.log('Button Clicked')
    const removeCard = document.getElementById('card')
    removeCard.remove();
}


// 06 button disabled, write spasified letter then button enabled

// focus part
document.getElementById('submit-box').addEventListener('focus', function() {
    document.body.style.backgroundColor = 'lightBlue'
})

// blur part
document.getElementById('submit-box').addEventListener('blur', function() {
    document.body.style.backgroundColor = 'white'
})

// condision part
document.getElementById('submit-box').addEventListener('keyup', function(e) {
    const submittedBtn = document.getElementById('submit-btn')

    if (e.target.value == '@email.com') {
        submittedBtn.removeAttribute('disabled')
    } else {
        submittedBtn.setAttribute('disabled', true)
    }
})