<template lang="">
<div class="container mx-auto">
    <h1 class="text-lg font-bold text-center underline">Compositoin Syntax</h1>
    <div class="space-y-2 text-center">
        <p>constData : {{constData}}</p>
        <p>refData : {{refData}}</p>
        <p>reactiveData : {{reactiveData.count}}</p>
        <p>computedData : {{computedData}}</p>
        <p>refdataforcomputed : {{refdataforcomputed}}</p>
        <p>dataProps : {{dataProps.age}}</p>
        <p> forWrapptoRef :{{forWrapptoRef.count}}</p>

        <button @click="addNumber()" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Button
        </button>

    </div>

</div>
</template>

<script setup>
import { ref, reactive, computed, watch, toRefs } from "vue";

const constData = 0;
const refData = ref(0);
const refdataforcomputed = ref(0);

const reactiveData = reactive({
    count: 0,
    name: "vishal",
    age: 21
})

const forWrapptoRef = reactive({
    username: "Data",
    age: 32,
    count: 0,
    counterData: 0
})
const dataProps = toRefs(forWrapptoRef)

function addNumber() {
    this.constData++//not execute because static data cannot change
    refData.value++
    reactiveData.count++
    refdataforcomputed.value++
    forWrapptoRef.count++
}

const computedData = computed(() => {
    return reactiveData.count * 2
}
)

watch(refdataforcomputed, (oldVal, newVal) => {
    console.log(oldVal, newVal)
    if (oldVal == 5) {
        refdataforcomputed.value = 0
    }

})

watch(dataProps.count, (oldVal, newVal) => {
    console.log("new val", newVal);
    console.log("Old val", oldVal);
    if (newVal === 5) {
        forWrapptoRef.count = 0
    }
})

</script>

<style></style>
