document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.style.backgroundColor = '#dc3545';
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.style.padding = '5px 10px';

      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });
});
