// Create a close button
function createCloseButton() {
  var $closeButton = document.createElement('button');
  var txt = document.createTextNode('\u00D7');
  $closeButton.className = 'close';
  $closeButton.appendChild(txt);
  $closeButton.onclick = function () {
    var $div = this.parentElement;
    $div.style.display = 'none';
  }
  return $closeButton;
}