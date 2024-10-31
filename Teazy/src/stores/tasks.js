import { defineStore } from 'pinia'


export const useTasksStore = defineStore('teazy', {
    state: () => ({
        tasks: [],
        task: {},
    }),

    actions: {

        //* Local Storage's method
        /*
        *to add task in Local Storage
        */
        saveToLS() {
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },

        /*
        *to transform tasks in array from Local Storage in order to show it
        */
        getTasks() {
            if (localStorage.getItem("tasks")) {
                this.tasks = JSON.parse(localStorage.getItem("tasks"))
            }
        },

        /*
        *to find a specific Task        
        */
        removefromLS(id) {
            //return JSON.parse(localStorage.getItem('tasks')).filter(tasks => tasks.id !== id);
            return this.tasks.filter(tasks=>tasks.id!=id);
        },

        //*CRUD on Tasks
        /*
        *to add task in Local Storage
        */
        addTask(plan) {
            this.tasks.push(plan);
            this.saveToLS();
        },
        deleteTask(id) {
            this.tasks = this.removefromLS(id);
            this.saveToLS();
        },
    },
    persist: true
})