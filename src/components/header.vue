<template>
  <div class="flex-row justify-between items-center group_3">
    <span class="text_2">Cars</span>
    <div class="flex-row">
      <router-link to="/inviteList">
        <img
          class="image_4"
          src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=e65a83846d8a7fd405c2641adff337de.png"
        />
      </router-link>
      <!-- 能源包 -->
      <router-link to="/nengyuanbao">
        <img
          class="image_5 ml-15"
          src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=699c29f85f96dc583bf29162cfd8bb69.png"
        />
      </router-link>
      <!-- 我的背包 -->
      <router-link to="/package">
        <img
          class="image_6 ml-15"
          src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=962cd7571d9a54ea827aa648a16a6ba9.png"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="scss">
.ml-15 {
  margin-left: 4vw;
}
.group_3 {
  padding: 4.933vw 5.6vw;
  height: 14.64vw;
  .text_2 {
    color: #99ff32;
    font-size: 5.333vw;
    font-family: Bakbak One;
    line-height: 3.472vw;
  }
  .image_4 {
    width: 4.533vw;
    height: 4.533vw;
  }
  .image_5 {
    width: 4vw;
    height: 4.8vw;
  }
  .image_6 {
    width: 3.733vw;
    height: 4.8vw;
  }
}
</style>