<script setup  lang="ts">
import { ref } from 'vue';

const prop = defineProps({
    idList: {
        type: Number,
    },
    value: {
        type: String,
        default: "",
    },
    task: {
        type: ref,
    },
    changeIF: {
        type: ref,
    }
}); 

let value = prop.value;

function submitAddTask () {
    const newTask = {
        id: Date.now(),
        name: value,
        status: prop.idList,
    };
    console.log(prop.idList);
    prop.task[prop.idList].push(newTask);
    prop.changeIF();
    
    console.log(prop.changeIF)
}

function closeForm() {
    prop.changeIF();
}

</script>

<template>
    <form class="form" @submit.prevent="submitAddTask">
        <textarea class="textarea" v-model="value" placeholder="Введите текст...">

        </textarea>
        <div class="cont-btn">
            <button class="btn btn-cancel" type="button" @click="closeForm">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6 5L5.60001 15M5.60001 5L15.6 15" stroke="#F53D5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button class="btn btn-submit" type="submit">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2667 5L8.1 14.1667L3.93333 10" stroke="#22C33D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </form>
</template>

<style scoped>
    .form {
        position: relative;
        width: 100%;
        min-height: 100px;
        max-height: 200px;
        padding: 8px 27px 8px 8px;
        border: 1px solid #3d86f4;
        border-radius: 4px;
    }

    .textarea {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 14px;
        resize: none;
    }

    .cont-btn {
        position: absolute;
        top: 8px;
        right: 2px;
        display: flex;
        flex-direction: column;
    }

    .btn {
        padding: 0;
        border-radius: 0;
        font-size: 0;
        background: transparent;
    }

    .btn-cancel {
        margin-bottom: 3px;
    }

</style>