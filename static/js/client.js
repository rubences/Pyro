// Crear la escena
var scene = new THREE.Scene();

// Crear la cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear el renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('renderCanvas').appendChild(renderer.domElement);

// Crear la geometría
var geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear el material
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// Crear el cubo
var cube = new THREE.Mesh(geometry, material);

// Añadir el cubo a la escena
scene.add(cube);

// Función de animación
function animate() {
    requestAnimationFrame(animate);

    // Rotar el cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Renderizar la escena
    renderer.render(scene, camera);
};

// Llamar a la función de animación
animate();

