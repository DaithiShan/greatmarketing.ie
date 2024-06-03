function bookCall() {
    // Display a modal for booking a discovery call
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="closeModal()">×</span>
            <h2>Book a Discovery Call</h2>
            <p>Please fill in your details below:</p>
            <form>
                <div class="form-group">
                    <label for="modal-name">Name:</label>
                    <input type="text" id="modal-name" class="form-control" name="modal-name">
                </div>
                <div class="form-group">
                    <label for="modal-email">Email:</label>
                    <input type="email" id="modal-email" class="form-control" name="modal-email">
                </div>
                <button type="submit" class="btn btn-warning btn-lg">Submit</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function learnMore() {
    // Display a modal for learning more about events
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="closeModal()">×</span>
            <h2>Learn More About Our Events</h2>
            <p>Here you can find more information about our past and upcoming events.</p>
            <button class="btn btn-warning btn-lg" onclick="closeModal()">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}