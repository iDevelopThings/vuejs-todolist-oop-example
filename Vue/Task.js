export default class Task {
	
	constructor({id, title, completed})
	{
		this.id        = id;
		this.title     = title || "";
		this.completed = completed || false;
	}
	
	markAsCompleted()
	{
		this.completed = true;
	}
	
	get isCompleted()
	{
		return this.completed === true;
	}
	
	get taskTitle()
	{
		return this.title;
	}
}
