<template>

    <header>
        <div class="w-full flex h-28 bg-red-200 justify-around items-center">
            <div class="w-30 h-10 bg-red-100 p-1">
                <p class="font-bold text-xl">First vue App!</p>
            </div>
            <nav class="w-28 h-10 bg-blue-100 flex items-center justify-center p-1 rounded-xl">
                <div class="p-2 font-bold hover:bg-blue-200 transition-all rounded-xl">
                    <router-link to="welcomeView">About</router-link>
                </div>
                <div class="p-2 font-bold hover:bg-blue-200 transition-all rounded-xl">
                    <router-link to="/">App</router-link>
                </div>
            </nav>
            <div class="w-28 h-10 bg-red-100 flex items-center justify-center p-1">
                <h1 class="text-2xl">Gsurica!</h1>
            </div>
        </div>
    </header>

    <router-view></router-view>
</template>

<script>

</script>

<style scoped>

</style>