<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="flex-row justify-center items-center relative group_2 mt-15">
        <img
          class="image_4 pos cursor"
          @click="goBack()"
          src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=8abf2397ad90c0816842f5572b35314a.png"
        />
        <span class="font text_2">我的背包</span>
      </div>
    </div>
    <div class="flex-col justify-start flex-1 group_3">
      <div class="flex-col list">
        <div
          class="flex-row list-item mt-15"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="shrink-0 self-center section"></div>
          <div class="flex-col flex-1 self-center group_4">
            <span class="font">福利能源宝20</span>
            <div class="mt-24 flex-col items-start">
              <span class="font_2">产能：</span>
              <span class="mt-20 font_2">已产出：</span>
              <span class="mt-20 font_2 text_3">剩余天数：</span>
            </div>
          </div>
          <div class="flex-col items-end shrink-0 self-start group_5">
            <span class="font_3">199 CS</span>
            <span class="mt-22 font_3">199 CS</span>
            <span class="mt-22 font_2 text_4">19 天</span>
          </div>
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
      items: [null, null, null],
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.mt-15 {
  margin-top: 4vw;
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
      .text_2 {
        font-weight: 600;
        line-height: 3.984vw;
        text-transform: capitalize;
      }
    }
  }
  .group_3 {
    padding: 2.133vw 0 56.533vw;
    overflow-y: auto;
    .list {
      margin-left: 4vw;
      margin-right: 5.333vw;
      .list-item {
        padding: 5.333vw 4.8vw;
        background-color: #ffffff08;
        border-radius: 2.667vw;
        &:first-child {
          margin-top: 0;
        }
        .section {
          background-color: #efefef;
          border-radius: 0.533vw;
          width: 32.533vw;
          height: 32.533vw;
          border-left: solid 0.267vw #99ff32;
          border-right: solid 0.267vw #99ff32;
          border-top: solid 0.267vw #99ff32;
          border-bottom: solid 0.267vw #99ff32;
        }
        .group_4 {
          margin-left: 6.4vw;
          .text_3 {
            line-height: 2.949vw;
          }
        }
        .group_5 {
          margin: 12.8vw 0.533vw 0 4.267vw;
          .font_3 {
            font-size: 3.2vw;
            font-family: PingFang HK;
            line-height: 2.373vw;
            color: #ffffff;
          }
          .text_4 {
            line-height: 2.819vw;
          }
        }
        .font_2 {
          font-size: 3.2vw;
          font-family: PingFang HK;
          line-height: 2.973vw;
          color: #ffffff;
        }
      }
    }
  }
  .font {
    font-size: 4.267vw;
    font-family: PingFang HK;
    line-height: 3.976vw;
    color: #ffffff;
  }
}
</style>