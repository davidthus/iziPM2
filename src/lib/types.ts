export type UserSchema = {
	id: string;
	username: string;
	email: string;
	avatar: Buffer;
	notes: string;
	projects: IProject[];

	ProjectManagerProjectsId: string[];
	MemberProjectsId: string[];
	assignedTasksIds: string;

	auth_session: SessionSchema[];
	key: KeySchema[];
} & Lucia.DatabaseUserAttributes;

export type SessionSchema = {
	id: string;
	active_expires: number;
	idle_expires: number;
	user_id: string;
} & Lucia.DatabaseSessionAttributes;

export type KeySchema = {
	id: string;
	user_id: string;
	hashed_password: string | null;
};

export interface IProject {
	id: string;
	name: string;
	projectCharter: string;
	completedPercent: number;

	ownerId: string;
	projectManagersId: string[];
	membersId: string[];
	userId: string;
}

export interface ITask {
	id: string;
	name: string;
	description?: string;
	projectId: string;
	dueDate: Date;
	subtasks: ISubtask[];

	assignedToUserIds: string[];
	taskDependenciesId: string[];
}

export interface ISubtask {
	id: string;
	name: string;
	isCompleted: boolean;
	taskId: string;
}
