let modalCounter = 0;

function openModal(title, date, style, colour, area, references, description, imgSrc) {
    const modalId = `modal-${modalCounter++}`;
    const modalsContainer = document.getElementById('modals-container');

    const modalHTML = `
        <div class="modal" id="${modalId}">
            <div class="modal-header">
                <h3 class="gallery-modal-header">${title}</h3>
                <span class="close" onclick="closeModal('${modalId}')">&times;</span>
            </div>
            <div class="modal-content">
                <img class="modal-image" src="${imgSrc}" alt="image popup">
                <div class="modal-caption">
                <a href="${imgSrc}" target="_blank" class="open-full-image">open full image in new tab</a>
                    <div class="modal-properties">
                        <div><p class="p"><i>originally published</i>: ${date} <br><i>art style</i>: ${style} <br><i>colouring style</i>: ${colour} <br><i>area</i>: ${area} <br><i>references</i>: ${references} <br><br>${description}</div>
                </div>
            </div>
        </div>
    `;

    modalsContainer.insertAdjacentHTML('beforeend', modalHTML);
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';

    makeModalDraggable(modal);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.remove();
}

function makeModalDraggable(modal) {
    let isDragging = false;
    let startX, startY, initialMouseX, initialMouseY;

    const modalHeader = modal.querySelector('.modal-header');

    modalHeader.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        startX = modal.offsetLeft;
        startY = modal.offsetTop;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const dx = e.clientX - initialMouseX;
            const dy = e.clientY - initialMouseY;
            modal.style.left = `${startX + dx}px`;
            modal.style.top = `${startY + dy}px`;
        }
    });
}
