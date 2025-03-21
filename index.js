Vue.createApp({
    data() {
        return {
            todo: "",
            todos: [],       
        };
    },
    methods: {
        saveTodo() {
            if (this.todo.trim() !== '') {
                this.todos.push(this.todo);
                this.todo = null;           
            }
        }, 
        deleteTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    }
}).mount("#app");