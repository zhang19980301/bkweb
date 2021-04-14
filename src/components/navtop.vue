<template>
  <div class="top">
    <ul>
      <!-- <router-link :to="{ path: '/' }" v-solt="{ href, route }">
        <li :href="href" >
          {{route}}
        </li>
      </router-link> -->
      <router-link :to="{ path: '/addArticle' }" v-slot="{ href, route, navigate }">
        <li :href="href" @click="navigate">
          {{ route.name }}
          {{navigate()}}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>

<style scoped>
.top {
  width: 1200px;
  height: 60px;
  margin: 0 auto;
  line-height: 60px;
  padding-left: 20px;
}
li {
  float: left;
  margin-left: 20px;
  color: rgb(141, 141, 141);
  font-size: 18px;
}
li:hover {
  cursor: pointer;
  color: rgb(255, 255, 255);
  transition: color 0.3s;
}
</style>