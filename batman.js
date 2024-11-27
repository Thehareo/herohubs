const darkmodeButton = document.getElementById('darkmode');
const body = document.body;

if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  darkmodeButton.classList.add('dark-mode');
}

darkmodeButton.addEventListener('click', () => {
  console.log('Button clicked!');
  body.classList.toggle('dark-mode');
  darkmodeButton.classList.toggle('dark-mode');


  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

 

        const pis1 = document.getElementById('pis1');

        pis1.addEventListener('click', function() {
            // Create the red overlay
            const overlay = document.createElement('div');

            overlay.classList.add('red-overlay');  // Apply the CSS class for the red screen
            body.classList.add('locked');
            const video = document.createElement('video');
            video.id
            video.src = 'batvideo2.mp4';
            video.autoplay = true;
            video.loop = true;
            video.muted = false;
            overlay.appendChild(video);
        
            // Optionally add a close button
            const closeButton = document.createElement('button');
            closeButton.innerHTML = 'X';
            
           
            overlay.appendChild(closeButton);
        
            // Add the overlay to the body
            document.body.appendChild(overlay);
        
            // Close the red overlay when clicking the 'X'
            closeButton.addEventListener('click', function() {
                document.body.removeChild(overlay);
                body.classList.remove('locked');
            });
        });

        



        