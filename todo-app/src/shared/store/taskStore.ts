import { Store } from '@tanstack/store';
import {createTask, Task} from "../../entities/task";



const loadTasks = (): Task[] => {
    const tasks = localStorage.getItem('tasks');
    console.log('🔄 Загруженные задачи:', tasks); // 🔍 Лог загрузки
    return tasks ? JSON.parse(tasks) : [];
};

const saveTasks = (tasks: Task[]) => {
    console.log('💾 Сохранение задач:', tasks); // 🔍 Лог сохранения
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const taskStore = new Store({ tasks: loadTasks() });

export const addTask = (text: string, date: string) => {
    taskStore.setState((state) => {
        const newTask = createTask(text, date);
        const updatedTasks = [...state.tasks, newTask];
        console.log('➕ Добавлена задача:', newTask); // 🔍 Лог добавления
        saveTasks(updatedTasks);
        return { tasks: updatedTasks };
    });
};

export const removeTask = (taskId: string) => {
    taskStore.setState((state) => {
        const updatedTasks = state.tasks.filter((task) => task.id !== taskId);
        console.log('❌ Удалена задача:', taskId); // 🔍 Лог удаления
        saveTasks(updatedTasks);
        return { tasks: updatedTasks };
    });
};

export const toggleTask = (taskId: string) => {
    taskStore.setState((state) => {
        const updatedTasks = state.tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        console.log('✅ Изменен статус задачи:', taskId); // 🔍 Лог выполнения
        saveTasks(updatedTasks);
        return { tasks: updatedTasks };
    });
};


// export const toggleTask = (taskId: string) => {
//     taskStore.setState((state) => {
//         const updatedTasks = state.tasks.map((task): Task =>
//             task.id === taskId
//                 ? { ...task, completed: !task.completed } // ✅ Теперь это полный `Task`
//                 : task
//         );
//
//         saveTasks(updatedTasks);
//         return { tasks: updatedTasks };
//     });
// };
