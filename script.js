// Nav Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
}

// Scroll Animation
const scrollAnimation = () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    hiddenElements.forEach((el) => observer.observe(el));
}

// WhatsApp Form Logic
const handleWhatsAppForm = () => {
    const form = document.getElementById('whatsappForm');
    
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            let course = "استفسار عام";
            const courseInput = document.getElementById('course-name');
            if(courseInput) course = courseInput.value;
            
            const phoneNumber = "201143092375"; 
            
            const message = `مرحباً AAA Hub،%0aأرغب بالاشتراك.%0a%0a📌 *البيانات:*%0a- الاسم: ${name}%0a- السن: ${age}%0a- الكورس: ${course}%0a%0aأرجو إرسال التفاصيل وطريقة الدفع.`;
            
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    scrollAnimation();
    handleWhatsAppForm();
});
