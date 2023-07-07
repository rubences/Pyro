# server.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def get_data():
    # Esto es solo un ejemplo, tus datos serán diferentes.
    data = [{'x': 1, 'y': 2, 'z': 3}, {'x': 4, 'y': 5, 'z': 6}, {'x': 7, 'y': 8, 'z': 9}]
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
