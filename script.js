
// JavaScript for the Portfolio Website
// Ensure these variables are accessible globally
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the 'active' class
    });

    // Auto-close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active'); // Remove the 'active' class
        }
    });
});


  // Tab functionality for "About Me" section
  const tabLinks = document.querySelectorAll('.tab-links');
  const tabContents = document.querySelectorAll('.tab-contents');

  tabLinks.forEach((tabLink) => {
      tabLink.addEventListener('click', (event) => {
          // Remove active class from all tab links and contents
          tabLinks.forEach((link) => link.classList.remove('active-link'));
          tabContents.forEach((content) => content.classList.remove('active-tab'));

          // Add active class to the clicked tab link and corresponding content
          const targetTab = event.target.getAttribute('onclick').match(/'([^']+)'/)[1];
          document.getElementById(targetTab).classList.add('active-tab');
          event.target.classList.add('active-link');
      });
  });

  //Icon Animation
  document.addEventListener('DOMContentLoaded', () => {
    const floatingIconsContainer = document.querySelector('.floating-icons');
    const icons = ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js', 'fab fa-python', 'fab fa-java'];

    // Function to create and animate icons
    function createFloatingIcon(iconClass) {
        const icon = document.createElement('i');
        icon.className = iconClass;

        // Randomize position and animation duration
        const size = Math.random() * 30 + 20; // Random size between 20px and 50px
        const positionX = Math.random() * 100; // Random horizontal position
        const duration = Math.random() * 5 + 5; // Random animation duration between 5s and 10s

        icon.style.position = 'absolute';
        icon.style.fontSize = `${size}px`;
        icon.style.color = 'rgba(115, 186, 245, 0.8)'; // Semi-transparent white
        icon.style.left = `${positionX}%`;
        icon.style.animation = `float ${duration}s infinite ease-in-out`;

        floatingIconsContainer.appendChild(icon);

        // Remove the icon after animation ends
        setTimeout(() => {
            floatingIconsContainer.removeChild(icon);
        }, duration * 2000);
    }

    // Generate icons at intervals
    setInterval(() => {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        createFloatingIcon(randomIcon);
    }, 1000); // Create a new icon every second
});


// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
});

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const contactForm = document.getElementById('contactForm');
    const formData = new FormData(contactForm);

    const name = formData.get('NAME');
    const email = formData.get('EMAIL');
    const message = formData.get('MESSAGE');

    // Validation: Check if all fields are filled
    if (!name || !email || !message) {
        alert('Please fill in all the fields before submitting.');
        return; // Stop further execution if validation fails
    }

    const emailParams = {
        NAME: name,
        EMAIL: email,
        MESSAGE: message,
    };

    emailjs.send('service_wtm4qp9', 'template_fqhugfq', emailParams)
        .then((response) => {
            alert('Message sent successfully!');
            contactForm.reset(); // Clear the form after successful submission
        })
        .catch((error) => {
            alert('Failed to send the message. Please try again later.');
            console.error('EmailJS Error:', error);
        });
}
function toggleFooter() {
    const footer = document.getElementById('footer');
    footer.classList.toggle('show');

}
document.addEventListener('DOMContentLoaded', function() {
    // Get all blog items
    const blogItems = document.querySelectorAll('.blog-item');
    
    // Add click event to each blog item
    blogItems.forEach(item => {
        item.addEventListener('click', function() {
            // You can replace this with actual navigation to blog post
            const title = this.querySelector('h2').textContent;
            console.log(`Navigating to blog post: ${title}`);
            alert(`You clicked on: ${title}\nThis would navigate to the full blog post in a real implementation.`);
            
            // In a real implementation, you might do:
            // window.location.href = '/blog/' + encodeURIComponent(title);
        });
    });
    
    // Animation on scroll
    const animateBlogItems = function() {
        blogItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    blogItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check on load
    animateBlogItems();
    
    // Check on scroll
    window.addEventListener('scroll', animateBlogItems);
    
    // Optional: Fetch blog posts from an API
    // fetchBlogPosts();
});

// Smooth Scroll to Social Media Section
document.addEventListener('DOMContentLoaded', function() {
    const socialMediaLink = document.querySelector('a[href="#social-media"]');
    const socialMediaSection = document.querySelector('.social-media');
    
    if (socialMediaLink) {
        socialMediaLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add class to body to hide other sections
            document.body.classList.add('scrolling-to-social');
            
            // Scroll to the section
            socialMediaSection.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Remove the class after scroll completes
            setTimeout(() => {
                document.body.classList.remove('scrolling-to-social');
            }, 1000); // Matches the scroll duration
        });
    }
    
    // Optional: Hide other sections while scrolling to social media
    window.addEventListener('scroll', function() {
        if (window.scrollY >= socialMediaSection.offsetTop - 100) {
            document.body.classList.remove('scrolling-to-social');
        }
    });
});