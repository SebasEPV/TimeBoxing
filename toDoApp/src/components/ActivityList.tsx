import React from 'react';
import './../assets/css/activityList.css'; // Asegúrate de tener este archivo CSS

interface Activity {
    id: number;
    title: string;
    startTime: string;
}

interface Task {
    id: number;
    title: string;
    isPriority: boolean;
    activities: Activity[];
}

interface ActivityListProps {
    tasks: Task[];
}

const ActivityList: React.FC<ActivityListProps> = ({ tasks }) => {
    // Verifica que tasks sea un array antes de usar flatMap
    const activities = Array.isArray(tasks) 
        ? tasks.flatMap(task => task.activities || []) 
        : [];

    const sortedActivities = activities.sort((a, b) => a.startTime.localeCompare(b.startTime));

    return (
        <div className="activity-list">
            <h2 className="activity-list-header">Agenda</h2>
            {sortedActivities.length > 0 ? (
                <ul className="activity-list-items">
                    {sortedActivities.map(activity => (
                        <li key={activity.id} className="activity-list-item">
                            <strong className="activity-title">{activity.title}</strong>
                            <span className="activity-time">{activity.startTime}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-activities">No hay actividades programadas.</p>
            )}
        </div>
    );
};

export default ActivityList;
