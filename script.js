
window.addEventListener('load', init);

function init() {
  window.alert('Welcome to my portfolio!');
  console.log('init(): page loaded');

  const themeBtn = document.getElementById('theme-btn');
  const infoBtn = document.getElementById('info-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (infoBtn) infoBtn.addEventListener('click', showPersonalInfo);

  console.log('init(): event listeners attached');
}

function modifyAboutStyle(styles) {
  const el = document.getElementById('about-text');
  if (!el) return;
  if (styles.color) el.style.color = styles.color;
  if (styles.fontSize) el.style.fontSize = styles.fontSize;
  if (styles.background) el.style.backgroundColor = styles.background;
  console.log('modifyAboutStyle():', styles);
}

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

function showPersonalInfo() {
  const personalInfo = 
    'Name: Earl Jan P. Francisco\n' +
    'Email: fraciscoejay@gmail.com\n' +
    'Course: IT - 3rd Year\n' +
    'School: HCCCI (Holy Child Central Colleges Inc.)';
  window.alert(personalInfo);
  console.log('showPersonalInfo(): alert displayed');
}

function debugLog(message) {
  console.log('[DEBUG]', message);
}

window.toggleTheme = toggleTheme;
window.showPersonalInfo = showPersonalInfo;
window.changeHeading = changeHeading;
