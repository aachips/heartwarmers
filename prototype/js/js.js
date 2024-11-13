'use strict';

/**
 * Inject Header - Injects the basic default header at the top of the page
 * 
 */

function injectHeader() {
  const headerHTML = `
    <header class="nav-header">
      <nav>
        <a href="menu.html" class="menu-icon">
          <img src="images/icons/more.png" alt="Menu" width="32" height="32">
        </a>
        <a href="feed.html" class="logo">
          <img src="images/logos/favicon-32x32.png" alt="Logo" width="32" height="32">
          <span class="wordmark">Warmers</span>
        </a>
        <a href="navigator.html" class="search-icon">
          <img src="images/Search.png" alt="Search">
        </a>
      </nav>
    </header>
  `;

  const headerContainer = document.createElement('div');
  headerContainer.innerHTML = headerHTML;
  const header = headerContainer.querySelector('header');
  document.body.insertBefore(header, document.body.firstChild);
}

/**
 * includeFooter - Injects a basic Footer at the end of the page with basic information about the project, terms of use, and how to be part of open-source development.
 * 
 */

function includeFooter() {
  const footerHTML = 
    `<footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About this Prototype</h3>
          <p>This is an application prototype for Heartwarmers made for WEB125. It is an open blueprint for others to build on. You can find the source code and root folder on Github</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Heartwarmers. Open Source Creative Commons License No Commercial Use. Made by A. A. Chips</p>
      </div>
    </footer>`;

  const footerContainer = document.createElement('div');
  footerContainer.innerHTML = footerHTML;
  const footer = footerContainer.querySelector('footer');
  document.body.appendChild(footer);
}


/**
 * initModal - Image Pop-up Modal. On feed.html, this function is called to open a pop-up screen when an image is clicked.
 * 
 */

const imageLinks = document.querySelectorAll('.image-link');
const modal = document.getElementById('image-modal');
const modalImage = modal.querySelector('.modal-image');
const modalOverlay = document.querySelector('.modal-overlay');

function initModal() {
  imageLinks.forEach(link => {
    modalImage.src = link.getAttribute('data-image-url');
    link.addEventListener('click', () => {
      modal.style.display = 'block';
      modalOverlay.style.display = 'block';
    });
  });

  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.classList.contains('close')) {
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
    } 
  });
}

/**
 * addBreadcrumbs - Add Breadcrumbs to the page. This helps the user navigate back to the homepage and know where they are.
 * 
 */

function addBreadcrumbs() {
  const currentPage = document.title.replace('Heartwarmers - ', '');
  const breadcrumbsHTML = `
    <div class="breadcrumbs">
      <a href="index.html">Home</a> /
      <h1 class="current-page">${currentPage}</h1>
    </div>
  `;
  const breadcrumbsContainer = document.createElement('div');
  breadcrumbsContainer.innerHTML = breadcrumbsHTML;
  const breadcrumbs = breadcrumbsContainer.querySelector('.breadcrumbs');
  const header = document.querySelector('header');
  document.body.insertBefore(breadcrumbs, header.nextSibling);
}
