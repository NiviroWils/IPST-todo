import { useState } from 'react';
import { addTask } from '../shared/store/taskStore';

const AddTaskForm = () => {
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Сегодняшняя дата

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;

        addTask(text, date);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <input
                type="text"
                placeholder="Введите задачу"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border p-2 w-full"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 w-full"
            />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
                Добавить
            </button>
        </form>
    );
};

export default AddTaskForm;
