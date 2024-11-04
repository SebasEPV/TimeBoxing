import React from 'react';
import ActivityList from './ActivityList';
import AddActivity from './AddActivity';
import './../assets/css/task.css';

interface TaskProps {
    task: {
        id: number;
        title: string;
        isPriority: boolean;
        activities: Activity[];
    };
    addActivity: (taskId: number, activityTitle: string, startTime: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, addActivity }) => {
    return (
        <div>
            <h2>{task.title} {task.isPriority ? '(Prioritaria)' : '(No Prioritaria)'}</h2>
            <ActivityList activities={task.activities} />
            <AddActivity taskId={task.id} addActivity={addActivity} />
        </div>
    );
};

export default Task;
