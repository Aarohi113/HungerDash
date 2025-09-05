document.addEventListener('DOMContentLoaded', () => {
    // Get all the necessary DOM elements
    const requestBtn = document.querySelector('.request-dish-btn');
    const modalContainer = document.getElementById('modal-container');
    const cancelBtn = document.getElementById('cancel-btn');
    const submitBtn = document.getElementById('submit-btn');
    const body = document.body;

    function showModal() {
        modalContainer.classList.add('active');
        body.style.overflow = 'hidden'; 
    }

    // Function to hide the modal and re-enable scrolling
    function hideModal() {
        modalContainer.classList.remove('active');
        body.style.overflow = ''; // Re-enable scrolling
    }

   
    requestBtn.addEventListener('click', showModal);

    // Event listener for the "Cancel" button
    cancelBtn.addEventListener('click', hideModal);

    // Event listener for the "Submit Request" button
    submitBtn.addEventListener('click', () => {
        const dishInput = document.getElementById('dish-input').value;
        if (dishInput.trim() !== '') {
            hideModal(); 
        } else {
            alert('Please enter a dish to request.');
        }
    });

    // Event listener for clicking outside the modal to close it
    modalContainer.addEventListener('click', (e) => {
        if (e.target.id === 'modal-container') {
            hideModal();
        }
    });
});