// content.js
// Add functionality to retrieve saved notes and display them on the page
const currentUrl = window.location.href;
browser.storage.local.get(currentUrl).then(data => {
  if (data[currentUrl]) {
    // Display the notes on the page as needed
    // For example:
    alert('Saved note for this page: ' + data[currentUrl]);
  }
});

