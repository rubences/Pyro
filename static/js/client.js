var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

$.getJSON('/data', function(data) {
    for (var i = 0; i < data.length; i++) {
        var geometry = new THREE.SphereGeometry(0.5, 32, 32);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var sphere = new THREE.Mesh(geometry, material);

        sphere.position.set(data[i].x, data[i].y, data[i].z);
        scene.add(sphere);
    }

    camera.position.z = 10;

    var animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
});
