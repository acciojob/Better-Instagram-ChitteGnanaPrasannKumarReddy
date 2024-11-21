//your code here
const dragStart = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
};

const dragOver = (event) => {
  event.preventDefault();
};

const drop = (event) => {
  event.preventDefault();
  const draggedElementId = event.dataTransfer.getData("text");
  const targetElementId = event.target.id;
  
  const draggedElement = document.getElementById(draggedElementId);
  const targetElement = document.getElementById(targetElementId);

  if (draggedElement && targetElement) {
    const draggedElementClone = draggedElement.cloneNode(true);
    const targetElementClone = targetElement.cloneNode(true);

    targetElement.replaceWith(draggedElementClone);
    draggedElement.replaceWith(targetElementClone);

    addDragAndDropListeners(draggedElementClone);
    addDragAndDropListeners(targetElementClone);
  }
};

const addDragAndDropListeners = (element) => {
  element.addEventListener("dragstart", dragStart);
  element.addEventListener("dragover", dragOver);
  element.addEventListener("drop", drop);
};

document.querySelectorAll(".image").forEach((element) => {
  addDragAndDropListeners(element);
});
