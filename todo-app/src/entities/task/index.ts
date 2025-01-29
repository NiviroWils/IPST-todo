export interface Task {
    id: string;
    text: string;
    date: string; // Хранение даты в формате ISO
    completed: boolean;
}

export const createTask = (text: string, date: string): Task => ({
    id: crypto.randomUUID(),
    text,
    date,
    completed: false,
});
