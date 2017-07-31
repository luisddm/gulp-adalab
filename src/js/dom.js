// Load list items
var $taskLi = document.querySelectorAll('li');

// Append a close button to each list item
for (var i = 0; i < $taskLi.length; i++) {
  var $closeButton = createCloseButton();
  $taskLi[i].appendChild($closeButton);
}

// Load list
var $listUl = document.querySelector('#list');

// Add a 'checked' symbol when clicking on a list item
$listUl.addEventListener('click', function (ev) {
  ev.target.classList.toggle('checked');
});

// Load add task button
var $taskButton = document.querySelector('#task-button');

// Create and add new task
$taskButton.addEventListener('click', function () {
  var li = document.createElement('li');
  var inputValue = document.querySelector('#task-input').value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (!inputValue) {
    alert('You must write something!');
  } else {
    document.querySelector('#list').appendChild(li);
  }

  document.querySelector('#task-input').value = '';

  var $closeButton = createCloseButton();
  li.appendChild($closeButton);
});
