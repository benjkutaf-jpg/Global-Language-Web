// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple Form Alert
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our admissions team will contact you shortly.');
    e.target.reset();
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#fff';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.padding = '20px 0';
    }
});

function openModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('courseModal').style.display = "block";
}

function closeModal() {
    document.getElementById('courseModal').style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    let modal = document.getElementById('courseModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openModal(title, description, duration, price) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalDuration').innerText = duration;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('courseModal').style.display = "block";
}

function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const body = document.getElementById('chatBody');
    
    if (input.value.trim() !== "") {
        // Add User Message
        const userDiv = document.createElement('div');
        userDiv.className = 'user-msg';
        userDiv.textContent = input.value;
        body.appendChild(userDiv);
        
        const currentMsg = input.value;
        input.value = "";
        
        // Auto-reply logic
        setTimeout(() => {
            const botDiv = document.createElement('div');
            botDiv.className = 'bot-msg';
            botDiv.textContent = "Thanks! An advisor will be with you shortly to discuss your interest.";
            body.appendChild(botDiv);
            body.scrollTop = body.scrollHeight;
        }, 1000);
    }
}

// Allow "Enter" key to send message
document.getElementById('chatInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});