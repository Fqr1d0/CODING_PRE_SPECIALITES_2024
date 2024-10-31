<template>
    <header class="header top-3 shadow-md grid grid-cols-4 gaps-8 px-1 py-1 items-center">
        <a href="#" class="flex items-center ml-4 mt-4 mb-6">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px"
                viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve">
                <g>
                    <g>
                        <g>
                            <path fill="#282D33" d="M80.139,103.801H47.715V55.703H30.227V23.282h67.4v32.421H80.139V103.801z M51.715,99.801h24.424V51.703
				h17.488V27.282h-59.4v24.421h17.488V99.801z" />
                        </g>
                        <g>
                            <g>
                                <rect y="23.279" fill="#282D33" width="5.362" height="4" />
                            </g>
                            <g>
                                <rect x="9.901" y="23.279" fill="#282D33" width="5.363" height="4" />
                            </g>
                            <g>
                                <rect x="19.799" y="23.279" fill="#282D33" width="5.364" height="4" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="102.838" y="23.279" fill="#282D33" width="5.363" height="4" />
                            </g>
                            <g>
                                <rect x="112.736" y="23.279" fill="#282D33" width="5.363" height="4" />
                            </g>
                            <g>
                                <rect x="122.637" y="23.279" fill="#282D33" width="5.363" height="4" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="76.139" y="3.551" fill="#282D33" width="4" height="5.363" />
                            </g>
                            <g>
                                <rect x="76.139" y="13.452" fill="#282D33" width="4" height="5.364" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="47.715" y="3.551" fill="#282D33" width="4" height="5.363" />
                            </g>
                            <g>
                                <rect x="47.715" y="13.452" fill="#282D33" width="4" height="5.364" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="76.139" y="109.186" fill="#282D33" width="4" height="5.365" />
                            </g>
                            <g>
                                <rect x="76.139" y="119.086" fill="#282D33" width="4" height="5.363" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="47.715" y="109.186" fill="#282D33" width="4" height="5.365" />
                            </g>
                            <g>
                                <rect x="47.715" y="119.086" fill="#282D33" width="4" height="5.363" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect y="51.703" fill="#282D33" width="5.362" height="4" />
                            </g>
                            <g>
                                <rect x="9.901" y="51.703" fill="#282D33" width="5.363" height="4" />
                            </g>
                            <g>
                                <rect x="19.799" y="51.703" fill="#282D33" width="5.364" height="4" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="102.838" y="51.703" fill="#282D33" width="5.363" height="4" />
                            </g>
                            <g>
                                <rect x="112.736" y="51.703" fill="#282D33" width="5.363" height="4" />
                            </g>
                            <g>
                                <rect x="122.637" y="51.703" fill="#282D33" width="5.363" height="4" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
           <span class="text-2xl font-semibold text-gray-900 dark:text-gray-600 ml-2">Teazy</span> 
        </a>
        <h1 class="text-xl">
            <RouterLink to="/">Plan your tasks !</RouterLink>
        </h1>
        <ul class="flex gap-x-8">
            <li class="text-xl hover:text-green-500 ">
                <RouterLink to="/Athentification">Register</RouterLink>
            </li>
            <li class="text-xl hover:text-green-500 ">
                <RouterLink to="/Athentification">Login</RouterLink>
            </li>
            <li class="text-xl hover:text-green-500 ">
                <RouterLink to="/Task-create"><span class="inline-flex"><span class="mr-1 flex-wrap">New</span>Task</span></RouterLink>
            </li>
        </ul>
    </header>
</template>

<script setup>
</script>

<script scooped>
</script>