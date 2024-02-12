<script setup lang="ts">
import { ref } from 'vue';
import TaskForm from './TaskForm.vue';

components: {
    TaskForm
}

const prop = defineProps({
    idList: {
        type: Number,
    },
    tasks: {
        type: ref,
    }
}); 

let isForm = ref(true);

const changeIF = () => {
    console.log(isForm)
    isForm.value = !isForm.value;
}

console.log(prop)
const classList = ['item-list-btn'];
</script>

<template>
    <li :class="classList" :data-idlist="idList">

        <button v-if="isForm" class="btn" @click="changeIF">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2 4.16667V15.8333M4.36668 10H16.0334" stroke="#3D86F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>
                Добавить
            </span>
        </button>
        <TaskForm v-else :task="tasks" :changeIF="changeIF" :idList="idList"></TaskForm>

    </li>
</template>

<style scoped>
    .item-list-btn {
        display: flex;
    }
    .btn {
        display: flex;
        color: #3d86f4;
        font-size: 14px;
        background: transparent;
    }

    .btn svg {
        margin-right: 4px;
    }
</style>