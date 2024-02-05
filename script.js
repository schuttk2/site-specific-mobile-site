let startTime;
let count = 0;
let playCount = 1;

const button = document.getElementById('challengeButton');
const resultText = document.getElementById('result');

button.addEventListener('click', () => {

   if (!startTime) {

   
      // Add elements based on play count
      switch (playCount) {
         case 2:
            document.body.style.backgroundImage = "url('logs.jpg')";
            break;
         case 3:
            addAudioElement();
            break;
         case 4:
            addImage('feat0.png');
            break;
         case 5:
            addImage('feat1.png');
            break;
         case 6:
            addImage('feat2.png');
            break;
         case 7:
            addImage('feat0.png');
            break;
         case 8:
            addImage('feat1.png');
            break;
         case 9:
            addImage('feat2.png');
            break;
         case 10:
            addImage('feat0.png');
            break;
         case 11:
            addImage('feat1.png');
            break;
         case 12:
            addImage('feat2.png');
            break;
         case 13:
            addImage('feat0.png');
            break;
         case 14:
            addImage('feat1.png');
            break;
         case 15:
            addImage('feat2.png');
            break;
         case 16:
            addImage('feat0.png');
            break;
         case 17:
            addImage('feat1.png');
            break;
         case 18:
            addImage('feat2.png');
            break;
         case 19:
            addImage('feat0.png');
            break;
         case 20:
            addImage('feat1.png');
            break;
         case 21:
            addImage('feat2.png');
            break;
      } 
      startTime = new Date().getTime();
      count = 0;
      resultText.textContent = 'Challenge in progress...';
      button.textContent = 'Press Me!';
      startCountdown();
      playCount++;

   } else {
      count++;
      button.textContent = `Pressed ${count} times`;
   }
});

function startCountdown() {
   setTimeout(() => {
      const endTime = new Date().getTime();
      const elapsedTime = (endTime - startTime) / 1000; // in seconds
      const pressesPerSecond = (count / elapsedTime);

      resultText.innerHTML = `
         <p>Challenge completed!</p>
         <p>You pressed the button ${count} times in 30 seconds.</p>
         <p>Average presses per second: ${pressesPerSecond.toFixed(2)}</p>
      `;

      startTime = null;
   }, 30000); // 1/2 minute
}

function addAudioElement() {
   const audio = document.createElement('audio');
   audio.src = 'outdoors.mp3';
   audio.loop = true;
   audio.play();
   audio.loop = true;

   document.body.appendChild(audio);
}

function addImage(imgPath) {
   const image = document.createElement('img');
   image.src = imgPath; // Replace with the path to your random image
   image.style.position = 'absolute';
   image.style.left = `${getRandomXCoordinate()}px`;
   image.style.top = `${getRandomYCoordinate()}px`;
   image.style.width = '100px'; // Set the desired width
   document.body.appendChild(image);
}

function getRandomXCoordinate() {
   // Returns a random coordinate value (within the screen width)
   return Math.floor(Math.random() * screen.width);
}

function getRandomYCoordinate() {
   // Returns a random coordinate value (within the screen width)
   return Math.floor(Math.random() * screen.height);
}