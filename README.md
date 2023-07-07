# Pyro
pruebas para programación paralela y distribuida con pyro

Imaginemos que tienes un programa de Python que genera un conjunto de datos que te gustaría visualizar (por ejemplo, las posiciones de los puntos en un espacio 3D). Puedes enviar estos datos a una página web y usar Three.js para visualizarlos. Aquí te proporciono un ejemplo simplificado.

Servidor Python (con Flask): Este es un servidor Flask muy básico que devuelve un conjunto de datos en formato JSON.

python
Copy code
# server.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/data')
def get_data():
    # Esto es solo un ejemplo, tus datos serán diferentes.
    data = [{'x': 1, 'y': 2, 'z': 3}, {'x': 4, 'y': 5, 'z': 6}, {'x': 7, 'y': 8, 'z': 9}]
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
Para ejecutar el servidor, instala Flask (pip install flask) y luego ejecuta el script (python server.py).

Cliente JavaScript con Three.js: Aquí tienes una página HTML que utiliza Three.js para visualizar los datos proporcionados por el servidor.

html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>Data Visualizer</title>
    <style>
        body { margin: 0; }
        canvas { width: 100%; height: 100% }
    </style>
    <script src="https://threejs.org/build/three.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <script>
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        $.getJSON('http://localhost:5000/data', function(data) {
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
    </script>
</body>
</html>
Este script HTML solicita los datos al servidor Flask y utiliza estos datos para crear esferas en una escena Three.js. Nota que, debido a las restricciones de seguridad del navegador, necesitarás ejecutar este HTML desde un servidor web y no simplemente abrirlo como un archivo.
