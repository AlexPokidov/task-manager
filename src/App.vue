<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import TItleItemList from './components/TItleItemList.vue';
import ListTasks from './components/ListTasks.vue';
import ItemListTask from './components/ItemListTask.vue';
import AddNewTask from './components/AddNewTask.vue';
import TaskItem from './components/TaskItem.vue';
import { ref } from 'vue';

const TASKS = ref([
  [
    {
      id: 33252342,
      name: 'Задача 1',
      status: 0,
    },
    {
      id: 3324252,
      name: 'Доработка меню',
      status: 0,
    },
    {
      id: 334536252,
      name: 'Описать правила поведения интерфейса',
      status: 0,
    },
    {
      id: 33263456452,
      name: 'Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца ',
      status: 0,
    }
  ],
  [],
  [{
      id: 33263456452,
      name: 'Создание тестового задания',
      status: 0,
    }
  ],
  [],
  []
]); 

components: {
  TItleItemList
  ListTasks
  ItemListTask
  AddNewTask
  TaskItem
}

let itemDrag = null;

function allowDrop(ev) {
  ev.preventDefault();
  console.log(ev)
}

function drag(ev) {
  itemDrag = ev.target;
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev)
}

function drop(ev) {
  ev.preventDefault();
  console.log(ev)
  let data = ev.dataTransfer.getData("text");
  console.log(data)
  let element = ev.target.querySelector('.item-list-btn');
  // if (!element) {
  //   element = ev.target.querySelector('.form');
  // } 
  element.before(itemDrag);
  alert('Задача перемещена в другой раздел');
}

</script>

<template>
  <ListTasks>
    <ItemListTask>
      <TItleItemList :title="'На согласовании'" :color="'#ff99e9'" ></TItleItemList>
      <ListTasks :class-name="'list-tasks'" :idList="0" @drop="drop" @dragover="allowDrop">
          <TaskItem v-for="task of TASKS[0]" draggable="true" @dragstart="drag" :key="task.id" :name="task.name" :id="task.id" :status="task.status"></TaskItem>
        <AddNewTask :tasks="TASKS" :idList="0"></AddNewTask>
      </ListTasks>
    </ItemListTask>
    <ItemListTask>
        <TItleItemList :title="'Новые'" :color="'#66b8ff'"> </TItleItemList>
        <ListTasks :class-name="'list-tasks'" :idList="1" @drop="drop" @dragover="allowDrop">
          <TaskItem v-for="task of TASKS[1]" draggable="true" @dragstart="drag" :key="task.id" :name="task.name" :id="task.id" :status="task.status"></TaskItem>
          <AddNewTask :tasks="TASKS" :idList="1"></AddNewTask>
        </ListTasks>
    </ItemListTask>
    <ItemListTask>
        <TItleItemList :title="'В процессе'" :color="'#ffd466'"> </TItleItemList>
        <ListTasks :class-name="'list-tasks'" :idList="2" @drop="drop" @dragover="allowDrop">
          <TaskItem v-for="task of TASKS[2]" draggable="true" @dragstart="drag" :key="task.id" :name="task.name" :id="task.id" :status="task.status"></TaskItem>
          <AddNewTask :tasks="TASKS" :idList="2"></AddNewTask>
        </ListTasks>
    </ItemListTask>
    <ItemListTask>
        <TItleItemList :title="'Готово'" :color="'#53c666'"> </TItleItemList>
        <ListTasks :class-name="'list-tasks'" :idList="3" @drop="drop" @dragover="allowDrop">
          <TaskItem v-for="task of TASKS[3]" draggable="true" @dragstart="drag" :key="task.id" :name="task.name" :id="task.id" :status="task.status"></TaskItem>
          <AddNewTask :tasks="TASKS" :idList="3"></AddNewTask>
        </ListTasks>
    </ItemListTask>
    <ItemListTask>
        <TItleItemList :title="'Доработать'" :color="'#f76e85'"> </TItleItemList>
        <ListTasks :class-name="'list-tasks'" :idList="4" @drop="drop" @dragover="allowDrop">
          <TaskItem v-for="task of TASKS[4]" draggable="true" @dragstart="drag" :key="task.id" :name="task.name" :id="task.id" :status="task.status"></TaskItem>
          <AddNewTask :tasks="TASKS" :idList="4"></AddNewTask>
        </ListTasks>
    </ItemListTask>
  </ListTasks>

  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
