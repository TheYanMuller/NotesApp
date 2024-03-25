export interface Task {
    id: string;
    title: string;
    completed: boolean;
    category:string;
}

export interface category {
    id: number;
    label: string;
    value: string;
    color: string;
}