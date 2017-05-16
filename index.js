const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}


const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

 
  const personName = document.createElement('li')
  personName.textContent = form.personName.value

  const hairColor = form.hairColor.value

  const color = document.createElement('li')
  color.textContent = 'Color:'

  const age = document.createElement('li')
  age.textContent = form.age.value

  const birthplace = document.createElement('li')
  birthplace.textContent = form.birthplace.value

  const colorDiv = renderColor(hairColor)


  details.appendChild(personName)
  details.appendChild(color)
  details.appendChild(colorDiv)
  details.appendChild(age)
  details.appendChild(birthplace)
  
}

personForm.addEventListener('submit', handleSubmit)