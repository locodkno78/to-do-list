const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim() === '') {
        return;
    }
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');;
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');

    taskSpan.textContent = input.value.trim();
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete');
    taskSpan.classList.add('task');

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    ul.appendChild(li);

    input.value = '';
});

ul.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const li = target.parentElement;
        const taskSpan = li.querySelector('.task');

        if (target.textContent === 'Delete') {
            ul.removeChild(li);
        } else {
            taskSpan.classList.toggle('complete');
        }
    }
});