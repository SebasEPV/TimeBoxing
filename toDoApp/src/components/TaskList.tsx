import React from 'react';
import Task from './Task';
import './../assets/css/taskList.css';

interface Activity {
    id: number;
    title: string;
    startTime: string;
}

interface TaskProps {
    id: number;
    title: string;
    isPriority: boolean;
    activities: Activity[];
}

interface TaskListProps {
    tasks: TaskProps[];
    addActivity: (taskId: number, activityTitle: string, startTime: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, addActivity }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <Task key={task.id} task={task} addActivity={addActivity} />
            ))}
        </div>
    );
};

export default TaskList;
