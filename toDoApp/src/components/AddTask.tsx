import React, { useState } from 'react';
import './../assets/css/addTask.css';

interface AddTaskProps {
    addTask: (title: string, isPriority: boolean) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [isPriority, setIsPriority] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTask(title, isPriority);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Título de la tarea" 
                required 
            />
            <label>
                Prioritaria
                <input 
                    type="checkbox" 
                    checked={isPriority} 
                    onChange={(e) => setIsPriority(e.target.checked)} 
                />
            </label>
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default AddTask;
