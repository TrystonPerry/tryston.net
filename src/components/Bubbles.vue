<template>
  <div class="bubbles">
    <div class="bubble bubble-0">
      <img src="/images/html5.svg" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">HTML5</p>
      </span>
    </div>
    <div class="bubble bubble-1">
      <img src="/images/css3.svg" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">CSS3</p>
      </span>
    </div>
    <div class="bubble bubble-2">
      <img src="/images/javascript.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Javascript</p>
      </span>
    </div>
    <div class="bubble bubble-3">
      <img src="/images/angular.svg" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Angular 2+</p>
      </span>
    </div>
    <div class="bubble bubble-4">
      <img src="/images/vuejs.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Vue.js</p>
      </span>
    </div>
    <div class="bubble bubble-5">
      <img src="/images/webrtc.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">WebRTC</p>
      </span>
    </div>
    <div class="bubble bubble-6">
      <img src="/images/nodejs.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Node.js</p>
      </span>
    </div>
    <div class="bubble bubble-7">
      <img src="/images/express.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Express.js</p>
      </span>
    </div>
    <div class="bubble bubble-8">
      <img src="/images/mongodb.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">MongoDB</p>
      </span>
    </div>
    <div class="bubble bubble-9">
      <img src="/images/mysql.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">MySQL</p>
      </span>
    </div>
    <div class="bubble bubble-10">
      <img src="/images/heroku.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Heroku</p>
      </span>
    </div>
    <div class="bubble bubble-11">
      <img src="/images/firebase.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Firebase</p>
      </span>
    </div>
    <div class="bubble bubble-12">
      <img src="/images/socketio.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Socket.io</p>
      </span>
    </div>
    <div class="bubble bubble-13">
      <img src="/images/adobe_ps.png" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Adobe Photoshop</p>
      </span>
    </div>
    <div class="bubble bubble-14">
      <img src="/images/adobe_ai.svg" class="bubble-img" alt />
      <span class="bubble-tooltip">
        <p class="bubble-tooltip-text">Adobe Illustrator</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const bubbles = document.getElementsByClassName("bubble");

    // Position data for each bubble
    // HTML item with class bubble-0 = bubblePos[0]
    const bubblePos = [
      {
        x: 475,
        y: 200,
        minY: 150,
        maxY: 250,
        minMinY: 150,
        maxMinY: 170,
        minMaxY: 230,
        maxMaxY: 250,
        isRising: true
      },
      {
        x: 725,
        y: 125,
        minY: 100,
        maxY: 150,
        minMinY: 100,
        maxMinY: 110,
        minMaxY: 140,
        maxMaxY: 150,
        isRising: false
      },
      {
        x: 825,
        y: 350,
        minY: 325,
        maxY: 375,
        minMinY: 325,
        maxMinY: 340,
        minMaxY: 360,
        maxMaxY: 375,
        isRising: false
      },
      {
        x: 1000,
        y: 125,
        minY: 110,
        maxY: 140,
        minMinY: 110,
        maxMinY: 120,
        minMaxY: 130,
        maxMaxY: 140,
        isRising: true
      },
      {
        x: 1205,
        y: 250,
        minY: 210,
        maxY: 290,
        minMinY: 200,
        maxMinY: 220,
        minMaxY: 280,
        maxMaxY: 300,
        isRising: false
      },
      {
        x: 1475,
        y: 125,
        minY: 115,
        maxY: 135,
        minMinY: 110,
        maxMinY: 120,
        minMaxY: 130,
        maxMaxY: 140,
        isRising: true
      },
      {
        x: 1675,
        y: 150,
        minY: 125,
        maxY: 175,
        minMinY: 125,
        maxMinY: 140,
        minMaxY: 160,
        maxMaxY: 175,
        isRising: false
      },
      {
        x: 1545,
        y: 380,
        minY: 360,
        maxY: 400,
        minMinY: 360,
        maxMinY: 370,
        minMaxY: 390,
        maxMaxY: 400,
        isRising: true
      },
      {
        x: 1900,
        y: 350,
        minY: 310,
        maxY: 390,
        minMinY: 300,
        maxMinY: 320,
        minMaxY: 380,
        maxMaxY: 400,
        isRising: false
      },
      {
        x: 2050,
        y: 160,
        minY: 140,
        maxY: 140,
        minMinY: 130,
        maxMinY: 150,
        minMaxY: 180,
        maxMaxY: 200,
        isRising: true
      },
      {
        x: 2250,
        y: 400,
        minY: 380,
        maxY: 420,
        minMinY: 380,
        maxMinY: 390,
        minMaxY: 410,
        maxMaxY: 420,
        isRising: true
      },
      {
        x: 2375,
        y: 150,
        minY: 140,
        maxY: 160,
        minMinY: 135,
        maxMinY: 145,
        minMaxY: 165,
        maxMaxY: 175,
        isRising: false
      },
      {
        x: 2500,
        y: 400,
        minY: 370,
        maxY: 430,
        minMinY: 360,
        maxMinY: 380,
        minMaxY: 420,
        maxMaxY: 440,
        isRising: true
      },
      {
        x: 2600,
        y: 175,
        minY: 150,
        maxY: 200,
        minMinY: 150,
        maxMinY: 160,
        minMaxY: 190,
        maxMaxY: 200,
        isRising: true
      },
      {
        x: 2850,
        y: 325,
        minY: 300,
        maxY: 350,
        minMinY: 290,
        maxMinY: 310,
        minMaxY: 340,
        maxMaxY: 360,
        isRising: false
      }
    ];

    // How often the bubble position is updated
    const interval = 30;

    // The offset for final Y position change.
    // Use this if you want the bubbles to be lower on the page
    const Y_OFFSET = -100;

    // Configure min and max speeds for Y movement
    let minAvgYSpeed = 0.01; // Minimum average speed
    let maxAvgYSpeed = 0.2; // Maximum average speed
    let minMinYSpeed = 0.025; // Minimum minimum speed
    let maxMinYSpeed = 0.05; // Maximum minimum speed

    // The speed all bubbles move to the left
    const X_SPEED = 1;

    // Loop through all HTML bubbles
    for (let i = 0; i < bubbles.length; i++) {
      moveBubble(bubbles[i], bubblePos[i].x, bubblePos[i].y);

      // Set interval for bubble update code
      setInterval(() => {
        // Move the indexed bubble to new X and Y position
        moveBubble(bubbles[i], bubblePos[i].x, bubblePos[i].y);

        if (bubblePos[i].x <= 450) {
          bubbles[i].style.opacity = (bubbles[i].style.opacity || 1) - 0.02;
        }

        // If bubble is off left side of the screen, place it off screen on the right
        if (bubblePos[i].x <= 400) {
          bubblePos[i].x = 2975;
          setTimeout(() => (bubbles[i].style.opacity = 1), 100);
        }

        // Lower bubble X (to left)
        bubblePos[i].x -= X_SPEED;

        // If bubble Y is lowering (+Y)
        if (!bubblePos[i].isRising) {
          // If bubble position is still far from the maximum Y
          if (bubblePos[i].y <= bubblePos[i].maxY) {
            bubblePos[i].y +=
              Math.random() * (maxAvgYSpeed - minAvgYSpeed) + minAvgYSpeed;
          }

          // If bubble Y position is approaching the maximum Y
          else if (bubblePos[i].y >= bubblePos[i].maxY - 10) {
            bubblePos[i].y +=
              Math.random() * (maxMinYSpeed - minMinYSpeed) + minMinYSpeed;
          }

          // If bubble Y position has just flipped to lowering
          if (bubblePos[i].y <= bubblePos[i].minY + 10) {
            bubblePos[i].y +=
              Math.random() * (maxMinYSpeed - minMinYSpeed) + minMinYSpeed;
          }

          // If bubble Y position is at the maximum Y position
          if (bubblePos[i].y >= bubblePos[i].maxY) {
            // Start rising bubble Y (-Y)
            bubblePos[i].isRising = true;

            // Set the next minimum Y to a slightly random point
            bubblePos[i].minY =
              Math.random() * (bubblePos[i].maxMinY - bubblePos[i].minMinY) +
              bubblePos[i].minMinY;
          }

          // If bubble Y is rising (-Y)
        } else {
          // If bubble Y postion is still far from reaching the minimum Y
          if (bubblePos[i].y >= bubblePos[i].minY) {
            bubblePos[i].y -=
              Math.random() * (maxAvgYSpeed - minAvgYSpeed) + minAvgYSpeed;
          }

          // If bubble position is approaching the minimum Y
          else if (bubblePos[i].y <= bubblePos[i].minY + 10) {
            bubblePos[i].y -=
              Math.random() * (maxMinYSpeed - minMinYSpeed) + minMinYSpeed;
          }

          // If bubble Y postion has just flipped to raising
          if (bubblePos[i].y >= bubblePos[i].maxY - 10) {
            bubblePos[i].y -=
              Math.random() * (maxMinYSpeed - minMinYSpeed) + minMinYSpeed;
          }

          // If bubble Y position has reached the minimum Y position
          if (bubblePos[i].y <= bubblePos[i].minY) {
            // Start lowering bubble Y (+Y)
            bubblePos[i].isRising = false;

            // Set the next maximum Y to a slightly random point
            bubblePos[i].maxY =
              Math.random() * (bubblePos[i].maxMaxY - bubblePos[i].minMaxY) +
              bubblePos[i].minMaxY;
          }
        }
      }, interval);
    }

    // Set the css property of HTML bubble transform to new X Y position
    function moveBubble(bubble, x, y) {
      bubble.style.transform = `translate(${x - 300}px, ${y + Y_OFFSET}px)`;
    }
  }
};
</script>

<style>
body {
  overflow-x: hidden;
}

.bubbles {
  height: 550px;
  width: 100%;
}

.bubble {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 3px 35px rgba(0, 0, 0, 0.07);
  /* visibility: hidden; */
}

.bubble-img {
  width: 70%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.bubble-tooltip {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0%);
}

.bubble-tooltip-text {
  background: #fff;
  font-family: "Roboto";
  font-style: bold;
  font-size: 12px;
  text-align: center;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.15);
  padding: 10px;
  border-radius: 10px;
  z-index: 99;
  margin-top: 5px;
}

.bubble-0 {
  background: #ffb560;
  height: 250px;
  width: 250px;
}

.bubble-1 {
  background: #32c4e9;
  height: 150px;
  width: 150px;
}

.bubble-2 {
  background: #f0db4f;
  height: 200px;
  width: 200px;
}

.bubble-3 {
  background: #e63d45;
  height: 170px;
  width: 170px;
}

.bubble-4 {
  background: #bef8a3;
  height: 200px;
  width: 200px;
}

.bubble-5 {
  background: #fff;
  width: 150px;
  height: 150px;
  padding: 15px;
}

.bubble-6 {
  background: #c2fd75;
  width: 250px;
  height: 250px;
}

.bubble-7 {
  background: white;
  width: 150px;
  height: 150px;
}

.bubble-8 {
  background: #bef8a3;
  height: 200px;
  width: 200px;
}

.bubble-9 {
  background: #3765af;
  height: 250px;
  width: 250px;
}

.bubble-10 {
  background: #681f78;
  height: 200px;
  width: 200px;
}

.bubble-11 {
  background: #cb760c;
  height: 175px;
  width: 175px;
}

.bubble-12 {
  background: #fff;
  height: 150px;
  width: 150px;
}

.bubble-13 {
  background: #81bbfb;
  height: 250px;
  width: 250px;
}

.bubble-14 {
  background: #ffaf3a;
  height: 150px;
  width: 150px;
}
</style>
