import React, { useState } from 'react';
import TaskList from './../components/TaskList';
import AddTask from './../components/AddTask';
import ActivityList from './../components/ActivityList';
import './../assets/css/dashboard.css';

const Dashboard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string, isPriority: boolean) => {
        const newTask = { id: Date.now(), title, isPriority, activities: [] };
        setTasks([...tasks, newTask]);
    };

    const addActivity = (taskId: number, activityTitle: string, startTime: string) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                const newActivity = { id: Date.now(), title: activityTitle, startTime };
                return { ...task, activities: [...task.activities, newActivity] };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <h1>Todo App</h1>
            <div className="dashboard-container">
                <div className="tasks-column">
                    <AddTask addTask={addTask} />
                    <TaskList tasks={tasks} addActivity={addActivity} />
                </div>
                <div className="activities-column">
                    <ActivityList tasks={tasks} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
