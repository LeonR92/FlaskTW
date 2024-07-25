from flask import Flask
from pwgenerator.routes import pwgenerator


app = Flask(__name__)
app.register_blueprint(pwgenerator, url_prefix="/pwgenerator")


if __name__ == "__main__":
    app.run(debug=True)
