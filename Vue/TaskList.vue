<template>


    <div>

        <div class="">
            <input type="text" v-model="task.title">
            <button @click="addTask">Add todo</button>
        </div>

        <div>
            <div class="task" v-for="(task, index) in taskList.incompleteTasks" :key="task.id">
                <div :class="{'completed' : task.isCompleted, 'not-completed' : !task.isCompleted}">
                    {{task.taskTitle}}
                </div>
                <div>
                    <input type="checkbox" v-model="task.completed">
                </div>

            </div>
        </div>

        <div>
            <h1>Completed:</h1>

            <div class="task" v-for="(task, index) in taskList.completedTasks" :key="task.id">
                <div :class="{'completed' : task.isCompleted, 'not-completed' : !task.isCompleted}">
                    {{task.taskTitle}}
                </div>
                <div>
                    <input type="checkbox" v-model="task.completed">
                </div>

            </div>
        </div>


    </div>

</template>

<script>
	import TodoList from './TodoList';


	export default {
		name    : "TaskList",
		mounted()
		{
		},
		data()
		{
			return {

				task : {
					title : ""
				},

				taskList : new TodoList()

			};
		},
		methods : {
			addTask()
			{
				if (this.task.title.trim() === "") return;

				this.taskList.create(this.task.title);

				this.task.title = "";
			}
		}
	};
</script>

<style scoped lang="scss">

    .task {
        display: flex;
        flex-direction: row;
    }

    .completed {
        color: green;
    }

    .not-completed {
        color: red;
    }
</style>
