// Help
const log = (message) => {
    console.log(message)
}
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/* **************** APP **************** */
// Cards
cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
})

function dragstart({ target }) {
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    target.classList.add('is-dragging')
}

function dragend({ target }) {
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    target.classList.remove('is-dragging')

}

// Dropzone
dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter({ target }) {
    const cardBeingDragged = document.querySelector('.is-dragging')
    if (target != cardBeingDragged) {
        target.appendChild(cardBeingDragged)
    }
}

function dragover({ target }) {

    target.classList.add('over')
    
}

function dragleave({ target }) {
    target.classList.remove('over')

}

function drop({ target }) {
    target.classList.add('over')
}