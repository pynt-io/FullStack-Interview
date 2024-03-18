from flask import Flask, jsonify
from mongodb import mongo_client;

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello World'

@app.route('/test')
def test():
    db = mongo_client['threats']
    threats_collection = db.threats
    threats_cursor = threats_collection.find({})
    
    threats_list = []
    for threat in threats_cursor:
        threat['_id'] = str(threat['_id'])
        threats_list.append(threat)
    return jsonify(threats_list)

if __name__ == '__main__':
    app.run(debug=True, port=4001)
