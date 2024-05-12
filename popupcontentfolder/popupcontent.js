window.onload = function() {
    var myModal = new mdb.Modal(document.getElementById('pageenterModal'));
  
    // Define the start and end dates for the modal display
    var startDate = new Date('May 11, 2024 09:00:00');
    var endDate = new Date('June 15, 2024 17:00:00');
    var currentDate = new Date();
  
    // Check if the current date is within the range
    if (currentDate >= startDate && currentDate <= endDate) {
      myModal.show();
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://bradleyapierce.github.io/Healthcare_Playbook/popupcontentfolder/popupheader.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('popupModalLabel').textContent = text;
        })
        .catch(error => console.error('Error loading the text:', error));
});

