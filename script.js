// External JS for portfolio interactions

// Initialize when page loads
window.addEventListener('load', init);

function init() {
  window.alert('Welcome to my portfolio!');
  console.log('init(): page loaded');

  // Change the main heading text
  changeHeading('Welcome to my portfolio(^~^)');

  // Wire up buttons
  const themeBtn = document.getElementById('theme-btn');
  const infoBtn = document.getElementById('info-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (infoBtn) infoBtn.addEventListener('click', showPersonalInfo);

  console.log('init(): event listeners attached');
}

// Reusable function: change the main heading text
function changeHeading(text) {
  const h = document.getElementById('main-heading');
  if (h) h.innerText = text;
  console.log('changeHeading():', text);
}

// Reusable function: modify the About paragraph style
function modifyAboutStyle(styles) {
  const el = document.getElementById('about-text');
  if (!el) return;
  if (styles.color) el.style.color = styles.color;
  if (styles.fontSize) el.style.fontSize = styles.fontSize;
  if (styles.background) el.style.backgroundColor = styles.background;
  console.log('modifyAboutStyle():', styles);
}

// Theme toggle implementation
let darkMode = false;
function toggleTheme() {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.style.backgroundColor = '#222';
    document.body.style.color = '#eee';
  } else {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  }
  const btn = document.getElementById('theme-btn');
  if (btn) btn.innerText = darkMode ? 'Light Mode' : 'Dark Mode';
  console.log('toggleTheme(): darkMode =', darkMode);
}

// Show personal info in an alert popup
function showPersonalInfo() {
  const personalInfo = 
    'Name: Earl Jan P. Francisco\n' +
    'Email: fraciscoejay@gmail.com\n' +
    'Course: IT - 3rd Year\n' +
    'School: HCCCI (Holy Child Central Colleges Inc.)';
  window.alert(personalInfo);
  console.log('showPersonalInfo(): alert displayed');
}

// Example debug-only function
function debugLog(message) {
  console.log('[DEBUG]', message);
}

// Export functions for console access (optional)
window.toggleTheme = toggleTheme;
window.showPersonalInfo = showPersonalInfo;
window.changeHeading = changeHeading;
