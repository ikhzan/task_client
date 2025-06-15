export interface Task {
    title: string;
    description: string;
    completed: boolean;
    deadline ?: Date;
    timelineWeeks ?: number;
    tags ?: string[];
    priority: string;
    revisions ?: number;
}