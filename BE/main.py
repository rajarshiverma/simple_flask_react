from flask import Flask, jsonify
import os
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
cors = CORS(app, origins="*")

# Secure CORS configuration
# Best Practices for CORS for large scale applications
# cors = CORS(app, resources={
#     r"/api/*": {
#         "origins": ["https://example.com", "https://anotherdomain.com"],
#         "methods": ["GET", "POST", "PUT", "DELETE"],
#         "allow_headers": ["Content-Type", "Authorization"],
#         "supports_credentials": True
#     }
# })


@app.route('/api/users',methods=['GET'])
def users():
    return jsonify({'users': ['Alice', 'Bob', 'Charlie']})

if __name__ == '__main__':
    app.run(debug=True,port=8080)
