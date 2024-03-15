export interface Task {
    id: String;
    title: String;
    completed: boolean;
    category:string;
}

export interface category {
    id: number;
    label: string;
    value: string;
    color: string;
}