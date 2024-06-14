<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="flex-row justify-center items-center relative group_2 mt-15">
        <img
          class="image_4 pos cursor"
          @click="goBack()"
          src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=8abf2397ad90c0816842f5572b35314a.png"
        />
        <span class="font text_2">升级代理包</span>
      </div>
    </div>
    <div class="flex-col flex-1 group_3">
      <div class="flex-col">
        <div
          class="flex-col mt-14 section list-item"
          v-for="(item, index) in items"
          :key="index"
          :class="activeIndex == index?'active-section ':''"
          @click="activeIndex = index"
        >
          <div class="flex-row justify-between self-stretch group_4">
            <div class="flex-row items-center self-center">
              <div class="section_2"></div>
              <div class="flex-col items-start ml-21">
                <span class="font text_3">费用：5000U</span>
                <span class="font_2 text_4">等级：0 - 5</span>
                <span class="font_2 text_6">产能：13.5 cs/天</span>
              </div>
            </div>
            <div class="flex-col items-start self-start group_5">
              <span class="font_2 text_5">周期：40天</span>
              <span class="font_2 text_7 mt-11">限制：3个</span>
            </div>
          </div>
          <div class="self-stretch divider view"></div>
          <span class="self-start font_3 text_8"
            >权益说明：XXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span
          >
        </div>
      </div>
      <div
        class="flex-col justify-start items-center button text-wrapper mt-18 cursor"
      >
        <span class="font text_14">升级</span>
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
      items: [null, null],
      activeIndex: 0,
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
.mt-11 {
  margin-top: 2.933vw;
}
.ml-21 {
  margin-left: 5.6vw;
}

.page {
  background-color: #081935;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
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
        color: #ffffff;
        font-size: 4.267vw;
        line-height: 4.003vw;
        text-transform: capitalize;
      }
    }
  }
  .group_3 {
    padding: 0 3.733vw 8vw;
    overflow-y: auto;
    .active-section {
      border: solid 0.533vw #99ff32!important;
    }
    .section {
      margin-right: 1.333vw;
      padding: 0 4vw 7.467vw 5.333vw;
      background-color: #ffffff08;
      border-radius: 2.667vw;
      border: solid 0.533vw gray;
      .group_4 {
        padding: 5.333vw 0 4.267vw;
        .section_2 {
          background-color: #efefef;
          border-radius: 0.533vw;
          width: 19.2vw;
          height: 19.2vw;
        }
        .text_3 {
          font-size: 3.733vw;
        }
        .font_2 {
          font-size: 2.667vw;
          font-family: PingFang HK;
          line-height: 2.48vw;
          color: #ffffff;
        }
        .text_4 {
          margin-top: 4.267vw;
          line-height: 2.488vw;
        }
        .text_6 {
          margin-top: 2.667vw;
          line-height: 2.509vw;
        }
        .group_5 {
          margin-right: 5.333vw;
          margin-top: 9.067vw;
          .text_5 {
            line-height: 2.467vw;
          }
          .text_7 {
            line-height: 2.464vw;
          }
        }
      }
      .divider {
        background-image: repeating-linear-gradient(
          90deg,
          #ffffff80,
          #ffffff80 1%,
          transparent 1%,
          transparent 2%
        );
        background-position: -0.4vw 0vw;
        height: 0.267vw;
      }
      .view {
        margin-right: 1.6vw;
      }
      .font_3 {
        font-size: 2.667vw;
        font-family: PingFang HK;
        line-height: 2.48vw;
        color: #ffffff80;
      }
      .text_8 {
        margin-top: 3.2vw;
      }
    }
    .list-item {
      &:first-child {
        margin-top: 0;
      }
    }
    .button {
      // margin: 0 2.667vw;
      .text_14 {
        color: #081935;
        line-height: 3.731vw;
      }
    }
    .text-wrapper {
      padding: 4.267vw 0;
      background-color: #99ff32;
      border-radius: 2.667vw;
    }
  }
  .font {
    font-size: 4vw;
    font-family: PingFang HK;
    line-height: 3.493vw;
    font-weight: 600;
    color: #99ff32;
  }
}
</style>