const inputElement = document.querySelector('.input')
const btnElement = document.querySelector('.btn')
const listElement = document.querySelector('.list-group')

const note = [ {
  title: 'Сделать заметки',
  complited: false,
},
{
  title: 'Лурик Лалка',
  complited: true,
},
]

function render() {
  listElement.innerHTML = ''
  if(note.length === 0) {
    listElement.innerHTML = '<p>Заметок нет</p>'
  }
  for (let index = 0; index < note.length; index++) {
    listElement.insertAdjacentHTML('beforeend', myFunction(note[index], index))
  }
}

render()

btnElement.addEventListener('click', () => {
  if(inputElement.value === '') return
  const newNote = {
    title: inputElement.value,
    complited: false,
  }

  note.push(newNote)
  render()
  inputElement.value = ''
})

listElement.addEventListener('click', (e) => {
  if(e.target.dataset.index)  {
    const index = Number(e.target.dataset.index)
    const type = e.target.dataset.type

    if(type === 'add') {
      note[index].complited = !note[index].complited
    } else if (type === 'remove') {
      note.splice(index, 1)
    }
    render()
  }
})

function myFunction(note, index) {
  return `
  <li class="list-gpoup__item">
    <span class="${note.complited ? 'complited' : ''}">${note.title}</span>
    <span>
      <span class="btn--succes" data-index="${index}" data-type="add"></span>
      <span class="btn--dander" data-index="${index}" data-type="remove"></span>
    </span>
  </li>
  `
}

AOS.init()