<template lang="">
<div class="container mx-auto">
    <h1 class="text-4xl italic font-bold text-center mb-5">About Page</h1>
    <div class="flex justify-center">
        <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900 text-center">
            <li class="px-6 py-2 border-b border-gray-200 rounded-t-lg bg-blue-600 text-white">
                Users
            </li>
            <li class="px-6 py-2 border-b border-gray-200"><router-link to="/about/vishal">vishal</router-link></li>
            <li class="px-6 py-2 border-b border-gray-200"><router-link to="/about/sanjay">sanjay</router-link></li>
            <li class="px-6 py-2 border-b border-gray-200"><router-link to="/about/jash">jash</router-link></li>
            <li class="px-6 py-2 w-full rounded-b-lg"><router-link to="/about/saakshi">saakshi</router-link></li>
        </ul>
    </div>

    <!-- <router-link to="/about/vishal">vishal</router-link><br><br>
        <router-link to="/about/sanjay">sanjay</router-link><br><br>
        <router-link to="/about/jash">jash</router-link><br><br>
        <router-link to="/about/saakshi">saakshi</router-link><br><br> -->
    <router-view />
</div>
</template>

<script>
export default {

}
</script>

<style lang="">

</style>
