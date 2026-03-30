// app.js

// Task Management
class Task {
    constructor(name, isCompleted = false) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}

class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
    }

    loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        return tasks ? tasks.map(task => new Task(task.name, task.isCompleted)) : [];
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask(name) {
        const task = new Task(name);
        this.tasks.push(task);
        this.saveTasks();
    }

    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].isCompleted = true;
            this.saveTasks();
        }
    }

    getTasks() {
        return this.tasks;
    }
}

// Streak Tracking
class StreakTracker {
    constructor() {
        this.streak = this.loadStreak();
    }

    loadStreak() {
        return parseInt(localStorage.getItem('streak')) || 0;
    }

    updateStreak(success) {
        if (success) this.streak++;
        else this.streak = 0;
        localStorage.setItem('streak', this.streak);
    }

    getStreak() {
        return this.streak;
    }
}

// Money Tracking
class MoneyTracker {
    constructor() {
        this.money = this.loadMoney();
    }

    loadMoney() {
        return parseFloat(localStorage.getItem('money')) || 0;
    }

    updateMoney(amount) {
        this.money += amount;
        localStorage.setItem('money', this.money);
    }

    getMoney() {
        return this.money;
    }
}

// Level System
class LevelSystem {
    constructor() {
        this.level = this.loadLevel();
    }

    loadLevel() {
        return parseInt(localStorage.getItem('level')) || 1;
    }

    increaseLevel() {
        this.level++;
        localStorage.setItem('level', this.level);
    }

    getLevel() {
        return this.level;
    }
}

// Chart.js Progress Chart
function drawChart(progressData) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: progressData.map(data => data.date),
            datasets: [{
                label: 'Progress Over Time',
                data: progressData.map(data => data.progress),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Example Usage
const taskManager = new TaskManager();
const streakTracker = new StreakTracker();
const moneyTracker = new MoneyTracker();
const levelSystem = new LevelSystem();

// Add tasks, update streak, money, and level here as needed

// Initialize Chart
const progressData = [
    { date: '2026-03-01', progress: 20 },
    { date: '2026-03-15', progress: 50 },
    { date: '2026-03-30', progress: 80 }
];
drawChart(progressData);