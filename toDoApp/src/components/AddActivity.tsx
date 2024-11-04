import React, { useState } from 'react';
import './../assets/css/addActivity.css';

interface AddActivityProps {
    taskId: number;
    addActivity: (taskId: number, activityTitle: string, startTime: string) => void;
}

const AddActivity: React.FC<AddActivityProps> = ({ taskId, addActivity }) => {
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addActivity(taskId, title, startTime);
        setTitle('');
        setStartTime('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Título de la actividad" 
                required 
            />
            <input 
                type="time" 
                value={startTime} 
                onChange={(e) => setStartTime(e.target.value)} 
                required 
            />
            <button type="submit">Agregar Actividad</button>
        </form>
    );
};

export default AddActivity;
