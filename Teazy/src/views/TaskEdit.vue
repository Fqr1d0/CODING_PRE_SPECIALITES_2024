<template>
    <TheHeader></TheHeader>
    <!-- My modal -->
    <div class="grid mt-10 m-auto w-[300px] min-h-[400px] border-2">
        <!-- The Header -->
        <div class="w-full ">
            <h2 class="px-1">Task</h2>
            <!-- Task Title -->
            <div class=" text-center min-h-10 border-2 m-1">
                <h2>title</h2>
                <input v-model="currentTask.title" type="text" placeholder="taskee">
            </div>
            <!-- Task Details -->
            <div class="text-center p-1 border-2 min-h-50 w-auto m-1">
                <h3 class="m-1 p-1"> details</h3>
                <textarea type="text" v-model="currentTask.details" class="w-full h-auto"
                    placeholder="taske dee"></textarea>
            </div>
            <!-- Task status -->
            <div class=" text-center min-h-10 border-2 m-1">
                <h2>Status</h2>
                <input v-model="currentTask.status" type="text" placeholder="statee">
            </div>
            <!-- Start Date -->
            <div class=" text-center min-h-10 border-2 m-1">
                <h2>Start at</h2>
                <input v-model="currentTask.start" type="date" placeholder="begine">
            </div>
            <!-- End Date-->
            <div class=" text-center min-h-10 border-2 m-1">
                <h2>Finish at</h2>
                <input v-model="currentTask.end" type="date" placeholder="endeee">
            </div>
            <div class="grid grid-cols-2 gap-11 items-center ">
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
                <button type="submit" @click="submit(currentTask)"
                    class="text-slate-800 hover:text-gray text-sm bg-blue-200 hover:bg-blue-400 border-y rounded-md shadow-sm font-medium m-1 px-1 py-2 inline-flex space-x-1 items-center">
                        <svg width="20%" height="20%" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5"
                                stroke-linecap="round" />
                            <path
                                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    <span>Update</span>
                </button>

<!--                 <button
                    class="text-slate-800 hover:text-white text-sm bg-green-200 hover:bg-green-500 border-y rounded-md shadow-sm font-medium m-1 px-4 py-2 inline-flex space-x-1 items-center transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>


                    <span>Save</span>
                </button> -->
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

const currentTask = ref(store.task)

function submit(currentTask) {
    console.log(currentTask)
    if (currentTask.title.length === 0 || currentTask.details.length === 0 || currentTask.status.length === 0 || currentTask.start.length === 0 || currentTask.end.length === 0) {
        console.log("Something wrong")
    } else {
        store.addTask(currentTask)
        console.log(currentTask);
    }
}

</script>

<script scooped>
</script>