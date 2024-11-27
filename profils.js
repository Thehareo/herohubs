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

 
profile1.addEventListener('click', () => {
  
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  
  const image = document.createElement('img');
  image.src = 'bat.png';
  
  overlay.appendChild(image);
  
  document.body.appendChild(overlay);
  
  overlay.classList.add('show');
  
  
  overlay.classList.add('show');



      
      

      setTimeout(() => {
          window.location.href = 'batman.html';
      }, 700);
  });
 
  profile2.addEventListener('click', () => {
  
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    
    const image = document.createElement('img');
    image.src = 'super2.png';
    
    overlay.appendChild(image);
    
    document.body.appendChild(overlay);
    
  
   
    overlay.classList.add('show');
  
  
  
        
        
  
        setTimeout(() => {
            window.location.href = 'superman.html';
        }, 700);
    });
 
    profile3.addEventListener('click', () => {
  
      const overlay = document.createElement('div');
      overlay.id = 'overlay';
      
      const image = document.createElement('img');
      image.src = 'pool.png';
      
      overlay.appendChild(image);
      
      document.body.appendChild(overlay);
      
    
     
      overlay.classList.add('show');
    
    
    
          
          
    
          setTimeout(() => {
              window.location.href = 'deadpool.html';
          }, 500);
      });
 
      profile4.addEventListener('click', () => {
  
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        
        const image = document.createElement('img');
         image.id ="sup"
        image.src = 'spidermanlgo2.png';
        
        overlay.appendChild(image);
        
        document.body.appendChild(overlay);
        
      
       
        overlay.classList.add('show');
      
      
      
            
            
      
            setTimeout(() => {
                window.location.href = 'spiderman.html';
            }, 500);
        });
 
        profile5.addEventListener('click', () => {
  
          const overlay = document.createElement('div');
          overlay.id = 'overlay';
          
          const image = document.createElement('img');
           image.id ="sup"
          image.src = 'ironlogo.png';
          
          overlay.appendChild(image);
          
          document.body.appendChild(overlay);
          
        
         
          overlay.classList.add('show');
        
        
        
              
              
        
              setTimeout(() => {
                  window.location.href = 'ironman.html';
              }, 500);
          });

          document.addEventListener("DOMContentLoaded", function() {
            const splashScreen = document.getElementById("splash-screen");
        
            
            if (!sessionStorage.getItem("hasVisitedHome")) {
                setTimeout(() => {
                    splashScreen.style.opacity = 0;
        
                    
                    setTimeout(() => {
                        splashScreen.style.display = "none";
                    }, 600); 
                }, 2000); 
        
                
                sessionStorage.setItem("hasVisitedHome", "true");
            } else {
               
                splashScreen.style.display = "none";
            }
        });
        
        const pis1 = document.getElementById('pis1');

        pis1.addEventListener('click', function() {
            
            const overlay = document.createElement('div');
            overlay.classList.add('red-overlay');  
        
            // Optionally add a close button
            const closeButton = document.createElement('button');
            closeButton.innerHTML = 'X';
            overlay.appendChild(closeButton);
        
            // Add the overlay to the body
            document.body.appendChild(overlay);
        
            // Close the red overlay when clicking the 'X'
            closeButton.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
        