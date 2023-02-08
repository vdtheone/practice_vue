<template lang="">
<div class="container mx-auto">
    <h1 class="text-3xl font-bold text-center">Calculator</h1>
    <form>
        <div class="grid grid-cols-1 gap-6 mx-auto mb-6 w-fit">
            <div>
                <label for="Number 1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number 1</label>
                <input type="text" id="Number 1" v-model="num1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000" required>
            </div>

            <div>
                <label for="Number 2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number 2</label>
                <input type="text" id="Number 2" v-model="num2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000" required>
            </div>
            <div class="flex space-x-2">
            <div class="justify-center">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="sum">Sum</button>
            </div>
            <div class="justify-center">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="sub">Sub</button>
            </div>
            <div class="justify-center">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="mul">Mul</button>
            </div>
            <div class="justify-center">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="div">Div</button>
            </div>
            <div class="justify-center">
                <button type="reset" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="clear">Clear</button>
            </div>
        </div>
            <!-- <div v-if="ans">Result = {{ans}}</div> -->
            <div>Result = {{ans}}</div>
            
        </div>
    </form>
</div>
</template>

<script>
     

export default {
    data() {
        return {
            num1: '',
            num2: '',
            ans: '',
        }
    },
    methods: {
        sum() {
            if(this.num1 && this.num2){

                this.ans =  Number(this.num1) + Number(this.num2)
            }
        },
        sub() {
            this.ans =  Number(this.num1) - Number(this.num2)
        },
        mul() {
            this.ans =  Number(this.num1) * Number(this.num2)
        },
        div() {
            this.ans =  Number(this.num1) / Number(this.num2)
        },
        clear() {
            this.ans = ''
            this.num1=''
            this.num2=''
            // Number(this.num1) / Number(this.num2)
        },
        

    },
}
</script>

<style lang="">

</style>
