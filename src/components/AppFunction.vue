<template>
    <main class="w-full flex justify-center mt-5">
      <div class="container bg-red-900 flex justify-center flex-col items-center p-5">
        <div>
          <form action="">
              <input type="text" placeholder="Put your task here!" class="p-2" v-model="task" />
              <button type="submit" @click.submit.prevent="addTasks" class="bg-red-200 w-20 rounded-sm p-2">Post task</button>
          </form>
        </div>
        <template v-if="tasks.length !== 0">
          <div class="bg-white mt-5 p-5 rounded-xl">
            <ul class="font-bold">
              <li v-for="task in tasks"> - {{task}}</li>
            </ul>
          </div>
        </template>
      </div>  
    </main>
</template>

<script>
    import Nav from '@/components/Nav.vue'

    export default {
        components: {Nav},

        data() {
        return {
            tasks: [],
            task: ''
        }
        },

        methods: {
        addTasks: function() {
            this.tasks = [...this.tasks, this.task]
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        }
        },

        mounted: function() {
        const tasksAlreadyInStorage = localStorage.getItem("tasks")
        this.tasks = JSON.parse(tasksAlreadyInStorage) || []
        },  
    }
</script>

<style scoped>

</style>