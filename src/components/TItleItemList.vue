<script setup lang="ts">
  const prop = defineProps({
    title: {
        type: String
    },
    color: {
        type: String
    }
}); 

const style = {
    background: prop.color,
}



console.log(prop)

</script>

<template>
    <h2 class="title-item" :style="style">
        {{ title }}
    </h2>
</template>

<style scoped>
    .title-item {
        display: block;
        padding: 7px 38px;
        margin: 0;
        font-size: 14px;
        color: #1c2530;
    }
</style>