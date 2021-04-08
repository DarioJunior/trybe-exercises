function createElements(el, cl, day, color) {
  let element = document.createElement(el);
  element.innerText = day;
  element.className = cl;

  day == 25 || day == 24 || day == 31 ? element.classList.add('holiday') : '';
  day == 4 || day == 11 || day == 18 || day == 25 ? element.classList.add('friday') : '';

  return element;
}

let daysOfMonth = document.querySelector('#days');

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let day of dezDaysList) {
    daysOfMonth.appendChild(createElements('li', 'day', day));
  }
}
createDaysOfMonth()





function createBtn(typeDay, typeClass) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = buttonContainer.appendChild(document.createElement('button'));
  newButton.id = typeClass;
  newButton.innerText = typeDay;

  return buttonContainer;
}

createBtn('Feriados', 'btn-holiday').addEventListener('click', setAttrs)
createBtn('Sextas-Feiras', 'btn-friday').addEventListener('click', setAttrs)

function setAttrs(event) {
  let target = event.target.attributes[0].value;
  if (target.includes('holiday')) {
    let holidayDays = document.querySelectorAll('.holiday');
    holidayDays.forEach(holiday => holiday.classList.toggle('holidayActive'));
  }
  if (target.includes('friday')) {
    let fridays = document.querySelectorAll('.friday');
    fridays.forEach(friday => friday.classList.toggle('fridayDays'));
  }
}

let buttonAddTask = document.querySelector('#btn-add');
buttonAddTask.addEventListener('click', (event) => {
  let inputValue = event.target.parentNode.children[2].value;

  let newTask = document.querySelector('.my-tasks');
  newTask.appendChild(createElements('p', 'task', inputValue));
  let legend = newTask.lastElementChild.appendChild(createElements('div', 'task', ''));
  legend.addEventListener('click', (event) => {
    legend.classList.toggle('selected');
    legend.className.includes('selected') ? legend.style.backgroundColor = 'green' : legend.style.backgroundColor = 'red';
  })
  // buttonAddTask.appendChild(createElements('span', 'task',))
});

console.log(document)