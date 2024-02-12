<script setup  lang="ts">
const prop = defineProps({
    className: {
        type: String,
        default: '',
    },
}); 

const classList = ['list', prop.className];

</script>

<template>
    <ul :class="classList">
        <slot></slot>
    </ul>
</template>

<style scoped>
    .list {
        display: flex;
        gap: 8px;
        width: 100%;
        height: 90vh;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .list-tasks {
        flex-direction: column;
        height: 96%;
        padding: 8px;
        overflow-y: auto;
        border: 1px solid #e3e5e8;
        background: #f7f7f7;
        border-radius: 0 0 8px 8px;
    }
</style>