<template>
  <div class="TodoList MtMargin">
    <div class="w-100 d-flex align-items-center flex-column p-5 ">
      <h3 class="text-primary">Add Todo</h3>
      <div class="d-flex align-items-center">
        <input
          type="text"
          @keyup.enter.stop="AddTodo"
          class="AddInp"
          v-model="AddText"
        />
        <button
          type="button"
          class="btn-sm btn-outline-primary AddBtn"
          @click.stop="AddTodo"
        >
          Add
        </button>
      </div>
    </div>
    <div class="w-100 d-flex align-items-center flex-column py-2">
      <h3 class="text-primary">My TodoList</h3>
      <ul class="w-75">
        <li v-for="(item, key) in todo" :key="key" class="mt-1">
          <div class="d-flex justify-content-between align-items-center
            border border-info border-top-0 px-2">
            <span>{{ key + 1 }}. {{ item.AddText }}</span>
            <i
              class="fas fa-times DelIcon text-danger"
              @click="RemoteTodo(item.id)"
            ></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo: [],
      AddText: '',
    };
  },
  methods: {
    AddTodo() {
      const vm = this;
      const api = 'https://obscure-cove-49403.herokuapp.com/add';
      // const api = 'http://localhost:3000/add';
      if (vm.AddText.replace(/(^s*)|(s*$)/g, '') !== 0) {
        vm.$http.post(api, { AddText: vm.AddText }).then(() => {
          vm.AddText = '';
          vm.FindAllTodo();
        });
      } else {
        vm.AddText = '';
        alert('請輸入文字，請勿空白');
      }
    },
    FindAllTodo() {
      const vm = this;
      const api = 'https://obscure-cove-49403.herokuapp.com/data';
      // const api = 'http://localhost:3000/data';
      vm.$http.get(api).then((response) => {
        vm.todo = response.data;
      });
    },
    RemoteTodo(id) {
      const vm = this;
      const api = `https://obscure-cove-49403.herokuapp.com/data/${id}`;
      // const api = `http://localhost:3000/data/${id}`;
      vm.$http.delete(api).then(() => {
        vm.FindAllTodo();
      });
    },
  },
  created() {
    this.FindAllTodo();
  },
};
</script>
<style lang="scss">
.AddInp {
  font-size: 18px;
  border-bottom-right-radius: 0%;
  border-top-right-radius: 0%;
}
.AddBtn {
  border-bottom-left-radius: 0%;
  border-top-left-radius: 0%;
}
.DelIcon {
  font-size: 26px;
}
.DelIcon:hover {
  cursor: pointer;
}
</style>
