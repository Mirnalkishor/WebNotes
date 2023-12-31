document.addEventListener('DOMContentLoaded', function() {
    const noteInput = document.getElementById('noteInput');
    const saveButton = document.getElementById('saveButton');
  
    // Load saved note for the current URL
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      const currentUrl = tabs[0].url;
      browser.storage.local.get(currentUrl).then(data => {
        if (data[currentUrl]) {
          noteInput.value = data[currentUrl];
        }
      });
    });
  
    // Save note to local storage for the current URL
    saveButton.addEventListener('click', function() {
      browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        const currentUrl = tabs[0].url;
        const note = noteInput.value;
        const data = {};
        data[currentUrl] = note;
        browser.storage.local.set(data);
      });
    });
  });
  