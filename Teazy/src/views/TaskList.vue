<template>
    <div>
        <TheHeader></TheHeader>
        <!-- My modal -->
        <div class=" flex flex-row flex-wrap">
            <div v-for="task in store.tasks" :key="task.id" class="grid mt-10 m-4 w-[300px] min-h-[300px] border-2">
            <!-- The Header -->
            <div class="w-full ">
                <h2 class="px-2">Task</h2>                <!-- Task Title -->
                <div class="pl-2 min-h-10 border-2 m-1">
                    <h2>Title</h2>
                    <h2>{{ task.title }}</h2>
                </div>
                <div class="pl-2 min-h-10 border-2 m-1">
                    <h2>Status</h2>
                    <h2>{{ task.status }}</h2>
                </div>
                <!-- Start Date -->
                <div class="pl-2 min-h-10 border-2 m-1">
                    <h2>Start at</h2>
                    <h2>{{ task.start }}</h2>
                </div>
                <!-- End Date-->
                <div class="pl-2 min-h-10 border-2 m-1">
                    <h2>Finish at</h2>
                    <h2>{{ task.end }}</h2>
                </div>
                <div class="flex items-center ">
                    <RouterLink to="Task-edit">
                        <button @click="store.task = task"
                            class="text-slate-800 hover:text-white text-sm bg-green-200 hover:bg-green-500 border-y rounded-md shadow-sm font-medium m-1 px-4 py-2 inline-flex space-x-1 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <span>Task details</span>
                        </button>
                    </RouterLink>
                    <button @click="store.deleteTask(task.id)"
                        class="text-slate-800 hover:text-white text-sm bg-red-200 hover:bg-red-500 border-y rounded-md shadow-sm font-medium m-1 ml-12 px-4 py-2 inline-flex space-x-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
        </div>
        <div class=" bottom-80 mt-8 ">
            <div class="flex  m-auto">
                <a href="#" class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 font-medium rounded-md cursor-not-allowed">
                    Previous
                </a>

                <a href="#"
                    class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md">
                    1
                </a>

                <a href="#"
                    class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md">
                    2
                </a>

                <a href="#"
                    class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md">
                    3
                </a>

                <a href="#"
                    class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md">
                    Next
                </a>
            </div>
        </div>
    </div>

    <TheFooter></TheFooter>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'

const store = useTasksStore()

store.getTasks()


</script>

<script scooped>
</script>