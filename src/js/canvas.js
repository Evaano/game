import platform from "../img/platform.png";
import background from "../img/background.png";
import spriteRunRight from "../img/spriteRunRight.png";
import spriteRunLeft from "../img/spriteRunLeft.png";
import spriteStandRight from "../img/spriteStandRight.png";
import spriteStandLeft from "../img/spriteStandLeft.png";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;

class Player {
  constructor() {
    this.speed = 5;
    this.position = {
      x: 30,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 50;
    this.height = 100;
    this.jumping = false; // Jumping status
    this.image = createImage(spriteStandRight);
    this.frames = 0
    this.sprites = {
        stand: {
            right: createImage(spriteStandRight)
        },
        run: {
            right: createImage(spriteRunRight)
        }
    }
    this.currentSprite = this.sprites.stand.right
  }
  draw() {
    context.drawImage(
      this.currentSprite,
      177 * this.frames, 
      0,
      177,
      400,

      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.frames++
    if (this.frames > 28) this.frames = 0
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y < canvas.height)
      this.velocity.y += gravity;
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width - 20;
    this.height = image.height;
  }
  draw() {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}

class Scenario {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      canvas.width, // Use canvas width as the destination width
      canvas.height // Use canvas height as the destination height
    );
  }
}

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

let platformImage = createImage(platform);

let player = new Player();
let platforms = [];
let scenario = [];

const key = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

// Main Game
function init() {
  platformImage = createImage(platform);

  player = new Player();
  platforms = [
    new Platform({
      x: 0,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width - 2,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 300,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 300,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 5 + 300,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 6 + 300,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 7 + 400,
      y: 380,
      image: platformImage,
    }),
  ];
  scenario = [
    new Scenario({ x: -1, y: -1, image: createImage(background) }),
    new Scenario({ x: 1024 - 2, y: 0, image: createImage(background) }),
  ];

  scrollOffset = 0;
}

// End of Main

function animate() {
  requestAnimationFrame(animate);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  scenario.forEach((scenario) => {
    scenario.draw();
  });
  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();

  if (key.right.pressed && player.position.x < 500) {
    player.velocity.x = player.speed;
  } else if (key.left.pressed && player.position.x > 30) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (key.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      scenario.forEach((scenario) => {
        scenario.position.x -= player.speed * 0.66;
      });
    } else if (key.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
      scenario.forEach((scenario) => {
        scenario.position.x += player.speed * 0.66;
      });
    }
  }

  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
      player.position.y = platform.position.y - player.height; // Align player with the platform
      player.jumping = false; // Reset jumping status
    }
  });

  if (scrollOffset > 2000) {
    console.log("You Win!");
  }

  if (player.position.y > canvas.height) {
    init();
  }
}
init();
animate();

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      key.left.pressed = true;
      break;
    case 68:
      key.right.pressed = true;
      player.currentSprite = player.sprites.run.right
      break;
    case 83:
      break;
    case 87:
      if (!player.jumping) {
        // Check if the player is not already jumping
        player.velocity.y -= 10;
        player.jumping = true; // Set jumping status to true
      }
      break;
  }
});

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      key.left.pressed = false;
      break;
    case 68:
      key.right.pressed = false;
      break;
    case 83:
      break;
  }
});
