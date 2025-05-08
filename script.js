
// Simple animation for page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded successfully');
  
  // Add active class to current navigation link
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPage.includes(linkPath) || 
        (currentPage === '/' && linkPath === 'index.html')) {
      link.style.fontWeight = 'bold';
    }
  });
});
