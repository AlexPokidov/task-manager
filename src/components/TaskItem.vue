<script setup lang="ts">


defineProps({
    id: {
        type: Number,
        default: 0,
    },
    name: {
        type: String,
        default: "",
    },
    status: {
        type: Number,
        default: "",
    }
}); 

</script>

<template>
    <li class="list-item-task" :data-id="id" :data-status="status">
        <div class="name-task">
            {{name}}
        </div>
        <div class="cont-btn">

        </div>
    </li>
</template>

<style scoped>

    .list-item-task {
        padding: 8px 24px 8px 8px;
        border: 1px solid #c4cad4;
        border-radius: 4px;
        text-align: left;
        background: #fff;
    }

    .name-task {
        font-size: 14px;
        color: #1c2530;
    }
</style>