<template>
  <div class="flex-col justify-start page">
    <div class="flex-col group_3">
      <div class="flex-col justify-start header">
        <div class="flex-row justify-center items-center relative group_2">
          <img
            class="image_4 cursor pos"
            @click="goBack()"
            src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=8abf2397ad90c0816842f5572b35314a.png"
          />
          <span class="text_2">能源包</span>
        </div>
      </div>
      <div class="flex-col list">
        <div
          class="flex-col list-item mt-15"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="flex-row justify-between items-center group_1">
            <div class="flex-row items-center">
              <div class="section"></div>
              <div class="flex-col items-start ml-21">
                <span class="font">福利能源宝20</span>
                <span class="font_2 text_1 text_3">费用：100 - 5000</span>
                <span class="font_2 text_5 text_14">产能：13.5 cs/天</span>
              </div>
            </div>
            <div class="flex-col group_5">
              <span class="self-end font_2">等级: 0-5</span>
              <div class="flex-col items-start self-stretch mt-18">
                <span class="font_2 text_4">周期：40天</span>
                <span class="font_2 mt-10">限制：3个</span>
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div
            class="flex-col justify-start items-center text-wrapper button cursor"
            @click="showDialog = true"
          >
            <span class="font_3 text_6">兑换</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="dialog pos section flex-col"
      @click="showDialog = false"
      v-show="showDialog"
    >
      <!-- 弹窗 -->
      <div class="flex-col self-center section_4 mt-145" @click.stop="">
        <span class="self-center font_3 text_5">是否确认兑换</span>
        <div class="flex-col self-stretch group_4">
          <span class="self-center font_3 text_6">需支付</span>
          <div class="flex-col self-stretch mt-30">
            <div class="flex-row justify-center">
              <span class="font_4 text_7">2000</span>
              <span class="ml-8 font_4 text_8">CS</span>
            </div>
            <div class="flex-row justify-between items-baseline mt-24">
              <span class="font text_10 text_11">钱包余额</span>
              <span class="text_10 text_12">9999 CS</span>
            </div>
          </div>
        </div>
        <div class="flex-col self-stretch group_5">
          <div
            class="flex-col justify-start items-center button cursor"
            @click="showDialog = false"
          >
            <span class="font_3 text_13">确认</span>
          </div>
          <div
            class="flex-col justify-start items-center button_2 mt-15 curosr"
            @click="showDialog = false"
          >
            <span class="font_3">取消</span>
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
      items: [null, null, null, null],
      showDialog: false,
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
.ml-21 {
  margin-left: 5.6vw;
}
.page {
  padding-bottom: 8vw;
  background-color: #081935;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_3 {
    padding-bottom: 0.8vw;
    overflow-y: auto;
    .header {
      padding: 4.267vw 0 4.8vw;
      .group_2 {
        margin: 0 4vw;
        padding: 0.992vw 0 0.347vw;
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
          font-family: PingFang HK;
          font-weight: 600;
          line-height: 3.995vw;
          text-transform: capitalize;
        }
      }
    }
    .list {
      margin-left: 4vw;
      margin-right: 5.333vw;
      .list-item {
        padding: 0 5.067vw 5.533vw;
        background-color: #ffffff08;
        border-radius: 2.667vw;
        &:first-child {
          margin-top: 0;
        }
        .group_1 {
          padding: 5.6vw 0 4.133vw;
          .section {
            background-color: #efefef;
            border-radius: 0.533vw;
            width: 19.2vw;
            height: 19.2vw;
            border: solid 0.267vw #99ff32;
          }
          .font {
            font-size: 3.2vw;
            font-family: PingFang HK;
            line-height: 2.981vw;
            color: #ffffff;
          }
          .font_2 {
            font-size: 2.667vw;
            font-family: PingFang HK;
            line-height: 2.464vw;
            color: #ffffff;
          }
          .text_1 {
            line-height: 2.488vw;
          }
          .text_3 {
            margin-top: 5.011vw;
          }
          .text_5 {
            line-height: 2.509vw;
          }
          .text_14 {
            margin-top: 2.552vw;
          }
          .group_5 {
            margin-right: 0.92vw;
            width: 17.056vw;
            .text_4 {
              line-height: 2.467vw;
            }
          }
        }
        .divider {
          margin-right: 0.4vw;
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
        .text-wrapper {
          margin-top: 3.933vw;
          .font_3 {
            font-size: 2.667vw;
            font-family: PingFang HK;
            line-height: 2.464vw;
            font-weight: 600;
            color: #081935;
          }
          .text_6 {
            line-height: 2.507vw;
          }
        }
        .button {
          padding: 2.192vw 0 1.968vw;
          background-color: #99ff32;
          border-radius: 7.2vw;
        }
      }
    }
  }
  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    // padding: 4.267vw 4vw 73.6vw 9.067vw;
    background-color: #000000b3;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  // 弹窗
  .section_4 {
    padding: 10.133vw 10.667vw;
    background-color: #081935;
    border-radius: 2.667vw;
    width: 74.667vw;
    justify-content: center;
    align-items: center;
    .font_3 {
      font-size: 4.267vw;
      font-family: PingFang HK;
      line-height: 3.917vw;
      color: #ffffff;
    }
    .text_5 {
      color: #99ff32;
      font-weight: 600;
      line-height: 4.011vw;
    }
    .group_4 {
      margin-top: 5.867vw;
      .text_6 {
        font-size: 4vw;
        line-height: 3.717vw;
      }
      .font_4 {
        font-size: 8.533vw;
        font-family: Roboto;
        line-height: 6.237vw;
        color: #99ff32;
      }
      .text_7 {
        font-weight: 600;
      }
      .text_8 {
        line-height: 6.235vw;
      }
      .text_10 {
        text-transform: capitalize;
      }
      .text_11 {
        font-weight: 600;
        line-height: 2.997vw;
      }
      .text_12 {
        color: #99ff32;
        font-size: 3.2vw;
        font-family: PingFang HK;
        font-weight: 600;
        line-height: 2.373vw;
      }
    }
    .group_5 {
      margin-top: 6.2vw;
      .button {
        padding: 3.2vw 0;
        background-color: #99ff32;
        border-radius: 1.333vw;
        width: 53.333vw;
        .text_13 {
          color: #081935;
          line-height: 3.933vw;
        }
      }
      .button_2 {
        padding: 3.2vw 0;
        background-color: #ffffff4d;
        border-radius: 1.333vw;
        width: 53.333vw;
      }
    }
  }

  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .font {
    font-size: 3.2vw;
    font-family: PingFang HK;
    line-height: 2.981vw;
    color: #ffffff;
  }
}
</style>