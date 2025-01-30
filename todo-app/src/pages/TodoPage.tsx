import TaskList from '../../src/widget/TaskList';
// import AddTaskForm from '../../src/features/AddTaskForm';

const TodoPage = () => {
    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Мои задачи</h1>

            <TaskList />
        </div>
    );
};

export default TodoPage;
