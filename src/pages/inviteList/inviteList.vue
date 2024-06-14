<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="flex-row justify-center items-center relative group_2 mt-15">
        <img
          class="image_4 pos cursor"
          src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=8abf2397ad90c0816842f5572b35314a.png"
          @click="goBack()"
        />
        <span class="text_2 text_3">邀请列表</span>
      </div>
    </div>
    <div class="flex-col flex-1 group_3">
      <div class="flex-row justify-between">
        <span class="font text_2 text_4">地址</span>
        <div class="flex-row group_4">
          <div class="flex-row shrink-0">
            <span class="font text_2 text_5">身份</span>
            <span class="font text_2 text_6 ml-47">累计活跃度</span>
          </div>
          <span class="font text_2 text_7 ml-77">时间</span>
        </div>
      </div>
      <div class="mt-4 flex-col">
        <div
          class="flex-row items-center list-item"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="flex-row items-center shrink-0">
            <span class="font_2 text_2">0x000…pux</span>
            <span class="ml-44 font_3 text_2">会员</span>
          </div>
          <span class="font_2 text_2 text_8 text_9">xxxx</span>
          <span class="font_2 text_2 text_10">2024-2-20</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      items: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    };
  },

  methods: {
    goBack(){
      this.$router.push("/");
    }
  },
};
</script>

<style scoped lang="scss">
.mt-15 {
  margin-top: 4vw;
}
.ml-77 {
  margin-left: 20.533vw;
}
.ml-47 {
  margin-left: 12.533vw;
}
.page {
  background-color: #081935;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .header {
    padding: 1.267vw 4.267vw 3.2vw;
    height: 16.8vw;

    .group_2 {
      padding-top: 1.067vw;
      .image_4 {
        width: 2.667vw;
        height: 5.333vw;
      }
      .pos {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      .text_3 {
        color: #ffffff;
        font-size: 4.267vw;
        font-family: PingFang HK;
        font-weight: 600;
        line-height: 3.984vw;
      }
    }
  }
  .group_3 {
    padding-left: 4.267vw;
    padding-top: 4.267vw;
    overflow-y: auto;
    .font {
      font-size: 3.2vw;
      font-family: PingFang HK;
      line-height: 2.944vw;
      font-weight: 600;
      color: #cdd0ec;
    }
    .text_4 {
      line-height: 2.901vw;
    }
    .group_4 {
      margin-right: 4.267vw;
      .text_5 {
        line-height: 2.997vw;
      }
      .text_6 {
        line-height: 3.011vw;
      }
      .text_7 {
        line-height: 2.997vw;
      }
    }
    .list-item {
      padding: 5.333vw 0;
      border-bottom: solid 0.267vw #a4a9e81a;
      .font_2 {
        font-size: 3.2vw;
        font-family: PingFang HK;
        line-height: 2.373vw;
        color: #cdd0ec;
      }
      .font_3 {
        font-size: 3.2vw;
        font-family: PingFang HK;
        line-height: 2.944vw;
        color: #cdd0ec;
      }
      .text_8 {
        line-height: 2.285vw;
      }
      .text_9 {
        margin-left: 17.067vw;
      }
      .text_10 {
        margin-left: 15.467vw;
      }
    }
  }
  .text_2 {
    text-transform: capitalize;
  }
}
</style>