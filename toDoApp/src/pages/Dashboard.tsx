import React, { useState } from 'react';
import './../assets/css/dashboard.css';
import AddTaskModal from './../components/AddTaskModal'; 
import AddActivityModal from './../components/AddActivityModal';

const Dashboard: React.FC = () => {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
    const [tasks, setTasks] = useState<{ id: number; title: string }[]>([]); // Cambia esto con la lógica para obtener tareas

    const handleAddTask = (task: { title: string; description: string; priority: boolean; dueDate: string }) => {
        // Lógica para agregar una tarea (actualizar el estado de tareas)
    };

    const handleAddActivity = (activity: {
        title: string;
        description: string;
        startTime: string;
        endTime: string;
        dueDate: string;
        taskId: number;
    }) => {
        // Lógica para agregar una actividad (puedes enviarla a tu backend aquí)
    };

    return (
        <div className="App">
            <div className='tasks-column'>
                <h2>Tareas prioritarias</h2>
                <p>Las tareas registradas</p>
                <h2>Tareas no prioritarias</h2>
                <p>Las tareas registradas</p>
                <button onClick={() => setIsTaskModalOpen(true)}>Agregar Tareas</button>
                <button onClick={() => setIsActivityModalOpen(true)}>Agregar Actividad</button>
            </div>
            <div className="activities-column">
                <h2>Actividades</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Título de la actividad</th>
                            <th>Descripción</th>
                            <th>Hora de inicio</th>
                            <th>Hora de fin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aquí puedes mapear las actividades y mostrarlas en filas */}
                    </tbody>
                </table>
            </div>

            <AddTaskModal
                isOpen={isTaskModalOpen}
                onRequestClose={() => setIsTaskModalOpen(false)}
                onAddTask={handleAddTask}
            />

            <AddActivityModal
                isOpen={isActivityModalOpen}
                onRequestClose={() => setIsActivityModalOpen(false)}
                onAddActivity={handleAddActivity}
                tasks={tasks} // Pasa la lista de tareas al modal de actividades
            />
        </div>
    );
};

export default Dashboard;
