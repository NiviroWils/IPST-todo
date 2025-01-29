import { useTaskStore } from 'entities/task';

const TodoPage = () => {
    const { tasks } = useTaskStore();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Задачи на сегодня</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'line-through' : ''}>
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoPage;
