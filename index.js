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
                this.todo = "";           
            }
        },        
    }
}).mount("#app");