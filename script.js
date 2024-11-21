describe('Drag and Drop Tests', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('should have all draggable elements', () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#drag${index}`).should('have.length', 1);
    }
  });

  it('should drag and drop', () => {
    const drag = (draggableId, droppableId) => {
      const draggable = Cypress.$(`#${draggableId}`)[0];
      const droppable = Cypress.$(`#${droppableId}`)[0];
      const coords = droppable.getBoundingClientRect();
      
      draggable.dispatchEvent(new MouseEvent('mousedown'));
      draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
      draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: coords.x + 10, clientY: coords.y + 10 }));
      draggable.dispatchEvent(new MouseEvent('mouseup'));
    };

    drag('drag1', 'drag5');
    cy.get('#drag5').within(() => {
      cy.get('img').should('have.length', 1);
    });
  });
});
