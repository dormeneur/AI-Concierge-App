from flask import Flask
from .config import app, db
from .api.auth import auth_bp
from .api.tasks import tasks_bp
from .api.users import users_bp

app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(tasks_bp, url_prefix='/api')
app.register_blueprint(users_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)