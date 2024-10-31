<template>
    <TheHeader></TheHeader>
    <div>
        <div class="bg-slate-300">
            <h1>
                <span class="text-3xl text-center text-red-600">Alert</span><br>
                Fill correctly the form
            </h1>
        </div>


        <!-- My modal -->
        <div class="grid mt-10 m-auto w-[300px] min-h-[300px] border-2">
            <!-- The Header -->
            <div class="w-full ">
                <h1 class="px-1 m-1">New Task</h1>
                <!-- Task Title -->
                <div class="min-h-10 border-2 m-1">
                    <label for="Task Title">Title</label><br>
                    <input type="text" class="full" placeholder="taskee" v-model="tasks.title">
                </div>
                <!-- Task Details -->
                <div class="p-1 border-2 min-h-50 w-auto m-1">
                    <label for="Task Details">Details</label><br>
                    <textarea type="text" class="w-full h-auto" placeholder="taske dee"
                        v-model="tasks.details"></textarea>
                </div>
                <!-- Task status -->
                <div class="min-h-10 border-2 m-1">
                    <label for="Task State">Status</label><br>
                    <input type="text" class="w-full" placeholder="statee" v-model="tasks.status">
                </div>
                <!-- Start Date -->
                <div class="min-h-10 border-2 m-1">
                    <label for="Task Start">Start at</label><br>
                    <input type="date" class="w-full" placeholder="begine" v-model="tasks.start">
                </div>
                <!-- End Date-->
                <div class="min-h-10 border-2 m-1">
                    <label for="Task End">End at</label><br>
                    <input type="date" class="w-full" placeholder="endeee" v-model="tasks.end">
                </div>
                <div class="grid grid-cols-2 gap-9 items-center ">
                    <RouterLink to="/Teazyboard">
                        <button
                            class="text-base ml-1 my-1 rounded-2  hover:scale-105 focus:outline-none flex justify-center px-3 py-2 rounded font-bold cursor-pointer hover:bg-green-   bg-gray-100  text-gray-700 border duration-200 ease-in-out  border-gray-600 transition">
                            <div class="flex leading-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-chevron-left w-5 h-5">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                                Back
                            </div>
                        </button>
                    </RouterLink>
                    <button type="submit" @click="submit(tasks)"
                        class="text-slate-800 hover:text-white text-sm bg-green-200 hover:bg-green-500 border-y rounded-md shadow-sm font-medium m-1 px-4 py-2 inline-flex space-x-1 items-center transition">

                        <svg width="20%" height="20%" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5"
                                stroke-linecap="round" />
                            <path
                                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                        </svg>

                        <span>Add task</span>
                    </button>
                </div>
            </div>
            <TheFooter></TheFooter>
        </div>
    </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref } from 'vue'

import { useTasksStore } from '@/stores/tasks'


const tasks = ref({
    id: Number,
    title: "",
    details: "",
    status: "",
    start: "",
    end: "",
})
const store = useTasksStore()

function submit(tasks) {
    console.log(tasks.value)
    if (tasks.title.length === 0 || tasks.details.length === 0 || tasks.status.length === 0 || tasks.start.length === 0 || tasks.end.length === 0) {
        console.log("Something wrong")
    } else {
        tasks.id = store.tasks.length + 1
        store.addTask(tasks)
        console.log(tasks);
    }
}

</script>

<script scooped>
</script>