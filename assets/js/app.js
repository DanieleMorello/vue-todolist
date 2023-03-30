const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { text: 'Alzarsi dal letto', done: false },
        { text: 'Uscire', done: true },
        { text: 'Studiare per ladocumentazione', done: false }
      ],
      newTodoText: '',
      showWarning: false,
      errorMessage: "Inserisci almeno 5 caratteri",
    };
  },
  methods: {
    toggleTodoDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    addNewTodo() {
      this.todos.push({ text: this.newTodoText, done: false });
      this.newTodoText = '';
    }
  }
}).mount('#app');
