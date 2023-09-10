//import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  powerPreference: 'low-power',
  canvas: document.querySelector('#bg'),
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Or choose another shadow map type
renderer.toneMapping = THREE.ACESFilmicToneMapping; 

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);
camera.position.setX(0);
camera.position.setY(0);

//scene.background = new THREE.Color( 0xFFC166 );

renderer.render(scene, camera);



//===============================================================



// let object;

// const loader = new GLTFLoader();
// const objurl = 'https://hahaseeb.s3.us-east-2.amazonaws.com/my-tv.glb'

// //Load the file
// loader.load(
//   objurl,
//   function (gltf) {
    
//     object = gltf.scene;

//     object.position.z = -0.5;
//     object.position.x = 0;
//     object.position.y = 0;
//     object.rotation.y = 174.35

    
//     object.scale.set(.17, .17, .17); 

//     scene.add(object);

//     //handleResize();
//   },
//   function (xhr) {
//     //While it is loading, log the progress
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//     var loading = xhr.loaded / xhr.total * 100
//     if (loading == 100) {
//       gsap.to(".animate-pg-1", { y: "-100vh" , duration: 1, delay: 1, ease: "power1.inOut" })
//       // gsap.to(".animate-pg-1", { zIndex: -120})
//     }
//   },
//   function (error) {
//     //If there is an error, log it
//     console.error(error);
//   },

  ////////////////////////////////////////////
//   );


  renderer.setSize(window.innerWidth, window.innerHeight);
  

// Lights

const light = new THREE.PointLight(0x79caff, 1.5, 100 ); //side

const spot = new THREE.SpotLight(0xffc166, 0.5, 100 ) //front

const spot3 = new THREE.SpotLight(0xffc166, 4.5, 100 ) //top


const spot2 = new THREE.SpotLight(0xffc166, 0.5, 100 ) //other side lol


light.position.set(7, 0, 9);
spot.position.set(0, 30, 50)
spot3.position.set(0, 10, -5)
spot2.position.set(-5, 3, -5)






// Background
const imgurl = 'https://hahaseeb.s3.us-east-2.amazonaws.com/web-bg.jpg'

const Texture = new THREE.TextureLoader().load(imgurl);

scene.background = Texture
















function moveCamera() {
  const t = document.querySelector(".main").scrollLeft;
  if (t <= 900) {
    
      camera.position.z = t * 0.003;
      camera.position.x = t * -0.0025;
      camera.position.y = t * 0.0007;

  }
  

}

// function setCamera() {
//   // const t = document.body.getBoundingClientRect().left;
//   const t = document.querySelector(".main").scrollLeft;
//   if (t >= 900) {
//     camera.position.z = 2.7
//     camera.position.x = 2.25
//     camera.position.y = 0.63
//   }
// }

document.querySelector(".main").onscroll = moveCamera;
//document.body.onload = setCamera;
moveCamera();



  
  function anim() {
    requestAnimationFrame(anim);
    



  renderer.render(scene, camera);
}

anim();



// SCREENSIZE

var object;
// var objectLoaded = false;

//Load the file
function loadObject() {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    const objurl = 'https://hahaseeb.s3.us-east-2.amazonaws.com/my-tv.glb'
loader.load(
  objurl,
  function (gltf) {
    
    object = gltf.scene;

    object.position.z = -0.5;
    object.position.x = 0;
    object.position.y = 0;
    object.rotation.y = 174.35

    
    object.scale.set(.17, .17, .17); 

    scene.add(object);
    // objectLoaded = true
    resolve();
    //handleResize();
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    var loading = xhr.loaded / xhr.total * 100
    if (loading == 100) {
      gsap.to(".animate-pg-1", { y: "-100vh" , duration: 1, delay: 1, ease: "power1.inOut" })
      // gsap.to(".animate-pg-1", { zIndex: -120})
    }
  },
  function (error) {
    //If there is an error, log it
    // console.error(error);
    reject(error);
  }
  );
});
}





function toggleObjectsVisibility(isLargeScreen) {
  if (isLargeScreen) {
    console.log(object)
    scene.add(object ,light, spot, spot2, spot3); // Show objects and lights
    scene.background = Texture
  } else {

    scene.remove(object, light, spot, spot2, spot3); // Hide objects and lights
    scene.background = null;
  }
}

function handleResize() {
  
  if (window.innerWidth >= 550) {
    // Other resize handling code

    toggleObjectsVisibility(true); // Show objects and lights
  } else {
    // Other resize handling code

    toggleObjectsVisibility(false); // Hide objects and lights
  }
}


let resizeTimeout;

function debounceResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // Handle the resize event here
    handleResize();
  }, 200); // Adjust the debounce delay as needed
}

window.addEventListener('resize', debounceResize);

let objectLoaded = false;

loadObject()
  .then(() => {
    objectLoaded = true;
    console.log("Object has been loaded");
    handleResize();
  })
  .catch((error) => {
    console.error("Error loading object:", error);
  });

// if (objectLoaded){

//   console.log("object has been loaded")
//   handleResize()
// }



/////////////// EXTRA JS




const navLinks = document.querySelectorAll('.nav-links');
const tvLinks = document.querySelectorAll('.tv-btn-list');
const backbutton = document.querySelector('.back-button');
let navi;

// navvv
const hamburger = document.querySelector('.ham');
navi = document.querySelector('.navi');

hamburger.addEventListener('click', Toggle);
function Toggle() {
  console.log('working');
  navi.classList.toggle('active');
}


// Add a click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior

    console.log("working");
    // Get the target section's ID from the link's href attribute
    const targetId = link.getAttribute('href').substring(1);

    // Find the target section element by its ID
    const targetSection = document.getElementById(targetId);
    // Scroll smoothly to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });

  });
});

tvLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior
    // Get the target section's ID from the link's href attribute
    const targetId = link.getAttribute('value');

    // Find the target section element by its ID
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

backbutton.addEventListener('click', function(e) {
  e.preventDefault();

  const targetId = backbutton.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
});



//popup animation

const popupButton = document.querySelector(".x-icon");

popupButton.addEventListener('click', function(e) {
  e.preventDefault();
  gsap.to(".small", { x: "-100vw" , duration: 0.3, ease: "power1.inOut" })
  gsap.to(".block", { y: "-25rem" , duration: 0.3,delay: 0.3, ease: "power1.inOut" })

  const popup = document.querySelector('.small')
  popup.classList.add('hidden')

}
)









