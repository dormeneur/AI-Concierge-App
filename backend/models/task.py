from ..config import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200), nullable=False)
    due_date = db.Column(db.DateTime, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'due_date': self.due_date
        }

    def save(self):
        db.session.add(self)
        db.session.commit()