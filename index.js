const personForm = document.querySelector('form')
console.log(personForm)

personForm.onsubmit = () => {
    ev.prefentDefault()
    console.log(ev)
}