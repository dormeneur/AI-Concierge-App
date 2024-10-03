from flask import Blueprint, request, jsonify
from ..models.task import Task
from ..services.ai import prioritize_tasks

tasks_bp = Blueprint('tasks', __name__)

@tasks_bp.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])

@tasks_bp.route('/tasks', methods=['POST'])
def add_task():
    data = request.json
    new_task = Task(description=data['description'], due_date=data['due_date'])
    new_task.save()
    return jsonify(new_task.to_dict()), 201

@tasks_bp.route('/tasks/prioritize', methods=['POST'])
def prioritize():
    tasks = Task.query.all()
    prioritized_tasks = prioritize_tasks(tasks)
    return jsonify([task.to_dict() for task in prioritized_tasks])