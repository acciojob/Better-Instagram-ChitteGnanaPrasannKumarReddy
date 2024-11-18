//your code here
const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('drop', drop);
  image.addEventListener('dragenter', dragEnter);
  image.addEventListener('dragleave', dragLeave);
});

let draggedItem = null;

function dragStart(e) {
  draggedItem = e.target;
  setTimeout(() => {
    e.target.style.opacity = "0.5";
  }, 0);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  if (e.target.className === 'image') {
    e.target.style.border = "2px dashed rgb(0, 195, 255)";
  }
}

function dragLeave(e) {
  e.target.style.border = "none";
}

function drop(e) {
  e.preventDefault();
  if (e.target.className === 'image' && e.target !== draggedItem) {
    const draggedImageSrc = draggedItem.style.backgroundImage;
    draggedItem.style.backgroundImage = e.target.style.backgroundImage;
    e.target.style.backgroundImage = draggedImageSrc;
  }
  e.target.style.border = "none";
  draggedItem.style.opacity = "1";
}
