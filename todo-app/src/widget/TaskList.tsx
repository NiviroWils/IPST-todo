import { useSyncExternalStore } from 'react';
import { taskStore, toggleTask, removeTask } from '../shared/store/taskStore';

const TaskList = () => {
    const tasks = useSyncExternalStore(taskStore.subscribe, () => taskStore.state.tasks);

    console.log('📋 Текущие задачи:', tasks); // 🔍 Лог в списке задач

    if (!tasks || tasks.length === 0) {
        return <p className="text-gray-500">Нет задач на сегодня</p>;
    }

    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center p-2 border">
                    <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
                    <div className="flex gap-2">
                        <button onClick={() => toggleTask(task.id)} className="bg-blue-500 text-white px-2 py-1 rounded">
                            {task.completed ? 'Отменить' : 'Выполнить'}
                        </button>
                        <button onClick={() => removeTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                            Удалить
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;