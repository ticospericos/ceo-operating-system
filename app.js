const taskManagement = {
    tasks: [],
    addTask(task) {
        this.tasks.push(task);
    },
    completeTask(index) {
        this.tasks.splice(index, 1);
    }
};

const streaks = {
    currentStreak: 0,
    maxStreak: 0,
    incrementStreak() {
        this.currentStreak++;
        if (this.currentStreak > this.maxStreak) {
            this.maxStreak = this.currentStreak;
        }
    },
    resetStreak() {
        this.currentStreak = 0;
    }
};

const moneyTracking = {
    totalMoney: 0,
    addMoney(amount) {
        this.totalMoney += amount;
    }
};

const levels = {
    currentLevel: 1,
    nextLevelThreshold: 100,
    checkLevelUp(points) {
        if (points >= this.nextLevelThreshold) {
            this.currentLevel++;
            this.nextLevelThreshold *= 2; // double the threshold
        }
    }
};