<template>
  <div class="flex-col justify-start relative page">
    <div class="flex-col">
      <div class="flex-col group">
        <Header @connectWallet="connectWallet"></Header>
        <div class="flex-row justify-between items-center section_2">
          <div class="flex-row">
            <img
              class="shrink-0 image_7"
              src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=8575259a4929d105407590b34d551494.png"
            />
            <span class="ml-10 font text_3">我的身份</span>
          </div>
          <div class="flex-row items-center">
            <span class="font">会员</span>
            <div
              class="flex-col justify-start items-center shrink-0 text-wrapper ml-9"
            >
              <span class="text_4 cursor" @click="go('/upgrade')">升级</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col section_3">
        <div class="flex-col group_4">
          <div class="flex-row justify-between">
            <span class="font_2 text_5">等级</span>
            <span class="font_3 text_6">一星</span>
          </div>
          <div class="mt-20 flex-row justify-between items-baseline">
            <span class="font_2 text_7">直推人数</span>
            <span class="font_3 text_8">199</span>
          </div>
          <div class="mt-20 flex-col">
            <div class="flex-row justify-between items-baseline">
              <span class="font_2">团队活跃度</span>
              <span class="font_3 text_10">xxx</span>
            </div>
            <div class="mt-20 flex-row justify-between items-center">
              <span class="font_2 text_11">推荐人</span>
              <span class="font_3 text_12">0x000…pux</span>
            </div>
          </div>
        </div>
        <div class="flex-col section_5">
          <div class="flex-row equal-division">
            <div class="flex-col items-center equal-division-item group_1">
              <span class="font_4 text_12 text_13">累计收益</span>
              <span class="font_5 text_12 text_1 mt-19">1000</span>
            </div>
            <div class="flex-col items-center equal-division-item group_7">
              <span class="font_4 text_12 text_14">可提取</span>
              <span class="font_5 text_12 text_31 mt-19">1000</span>
            </div>
          </div>
          <div
            class="flex-col justify-start items-center button_2 text-wrapper_2 mt-22 cursor"
            @click="onExtract"
          >
            <span class="font_2 text_12 text_30">提取</span>
          </div>
        </div>
        <div class="flex-col group_5 view">
          <span class="self-start font_4 text_15 text_17">收益列表</span>
          <div class="flex-row justify-between self-stretch group_5 mt-21">
            <div class="flex-row">
              <span class="font_5 text_15 text_18">分类</span>
              <span class="font_5 text_15 ml-108">数量</span>
            </div>
            <span class="font_5 text_15 text_19">时间</span>
          </div>
        </div>
        <div class="flex-col group_6">
          <div class="flex-row group_7">
            <span class="font_6 text_15">Referral</span>
            <span class="font_7 text_15 text_20">0.1</span>
            <span class="font_6 text_15 text_21">2024.02.17 16:43:28</span>
          </div>
          <div class="flex-row group_8">
            <span class="font_6 text_15">Referral</span>
            <span class="font_7 text_15 text_22">0.1</span>
            <span class="font_6 text_15 text_23">2024.02.17 16:43:28</span>
          </div>
          <div class="flex-row group_8">
            <span class="font_6 text_15">Referral</span>
            <span class="font_7 text_15 text_22">0.1</span>
            <span class="font_6 text_15 text_23">2024.02.17 16:43:28</span>
          </div>
          <div class="flex-row group_8">
            <span class="font_6 text_15">Referral</span>
            <span class="font_7 text_15 text_22">0.1</span>
            <span class="font_6 text_15 text_23">2024.02.17 16:43:28</span>
          </div>
          <div class="flex-row group_8">
            <span class="font_6 text_15">Referral</span>
            <span class="font_7 text_15 text_22">0.1</span>
            <span class="font_6 text_15 text_23">2024.02.17 16:43:28</span>
          </div>
          <div class="flex-row group_9">
            <span class="font_6 text_15">Referral</span>
            <span class="font_7 text_15 text_24">0.1</span>
            <span class="font_6 text_15 text_25">2024.02.17 16:43:28</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex-col justify-start items-center section pos"
      v-if="showDialog"
      @click="showDialog = false"
    >
      <div class="flex-col section_4" @click.stop="">
        <span class="self-center font_3 text_9">推荐地址绑定</span>
        <div class="flex-col self-stretch mt-37">
          <div class="flex-col justify-start items-center button">
            <span class="font_4 text_13">绑定推荐地址</span>
          </div>
          <div class="flex-col justify-start items-center button_2 mt-15">
            <span class="font_4 text_14">确认</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  components: { Header },
  props: {},
  data() {
    return {
      showDialog: false,
    };
  },

  methods: {
    async connectWallet() {},
    go(url) {
      this.$router.push(url);
    },
    onExtract() {
      this.showDialog = true;
    },
  },
};
</script>

<style scoped lang="scss">
.ml-15 {
  margin-left: 4vw;
}
.ml-9 {
  margin-left: 2.4vw;
}
.mt-21 {
  margin-top: 5.6vw;
}
.ml-108 {
  margin-left: 28.8vw;
}
.mt-37 {
  margin-top: 9.867vw;
}
.mt-15 {
  margin-top: 4vw;
}
.page {
  .group {
    padding: 0 4.267vw;

    .section_2 {
      margin-right: 0.533vw;
      padding: 2.667vw 3.2vw 2.667vw 4.267vw;
      background-image: linear-gradient(90deg, #eaffd6 0%, #99ff32 100%);
      border-radius: 4vw 4vw 0vw 0vw;
      .image_7 {
        filter: drop-shadow(0.267vw 0.267vw 0.4vw #6540204d);
        width: 4vw;
        height: 3.2vw;
      }
      .font {
        font-size: 3.2vw;
        font-family: PingFang HK;
        line-height: 2.976vw;
        color: #081935;
      }
      .text_3 {
        line-height: 2.989vw;
      }
      .text-wrapper {
        padding: 1.6vw 0;
        background-image: linear-gradient(90deg, #0050d3 0%, #002d77 100%);
        border-radius: 13.333vw;
        width: 13.344vw;
        height: 5.333vw;
        .text_4 {
          color: #ffffff;
          font-size: 2.667vw;
          font-family: PingFang HK;
          font-weight: 600;
          line-height: 2.488vw;
        }
      }
    }
  }
  .section_3 {
    padding-left: 4.267vw;
    padding-bottom: 1.6vw;
    background-color: #0f203b;
    border-radius: 2.667vw;
    .group_4 {
      padding: 7.467vw 4.8vw;
      .text_5 {
        line-height: 3.696vw;
      }
      .text_6 {
        margin-right: 4.267vw;
        line-height: 3.493vw;
      }
      .text_7 {
        line-height: 3.688vw;
      }
      .text_8 {
        margin-right: 4.267vw;
        line-height: 2.968vw;
      }
      .text_10 {
        margin-right: 4.8vw;
        line-height: 2.067vw;
      }
      .text_11 {
        line-height: 3.683vw;
      }
      .text_12 {
        margin-right: 4.8vw;
      }
    }
    .mt-19 {
      margin-top: 5.067vw;
    }
    .section_5 {
      padding: 6.933vw 0 6vw;
      background-color: #0f203b;
      border-radius: 2.667vw;
      border: solid 0.267vw #9bff36;
      width: 95%;
      .equal-division {
        padding: 0 1.12vw;
        .equal-division-item {
          flex: 1 1 44.213vw;
          .font_4 {
            font-size: 4vw;
            font-family: PingFang HK;
            line-height: 3.704vw;
            font-weight: 600;
            color: #ffffff;
          }
          .text_13 {
            line-height: 3.752vw;
          }
          .font_5 {
            font-size: 5.333vw;
            font-family: Roboto;
            line-height: 3.704vw;
            color: #99ff32;
          }
          .text_1 {
            line-height: 3.896vw;
          }
          .text_14 {
            line-height: 3.688vw;
          }
          .text_31 {
            line-height: 3.896vw;
          }
        }
        .group_1 {
          padding: 1.333vw 0 1.333vw;
        }
        .group_7 {
          padding: 1.635vw 0 1.067vw;
        }
      }
      .button_2 {
        margin-left: 5.2vw;
        margin-right: 4.933vw;
        .font_2 {
          font-size: 4vw;
          font-family: PingFang HK;
          line-height: 3.704vw;
          color: #efefef;
        }
        .text_30 {
          color: #081935;
          line-height: 3.677vw;
        }
      }
      .text-wrapper_2 {
        padding: 2.867vw 0 2.792vw;
        background-color: #99ff32;
        border-radius: 1.333vw;
      }
      .text_12 {
        text-transform: capitalize;
      }
    }
    .font_2 {
      font-size: 4vw;
      font-family: PingFang HK;
      line-height: 3.704vw;
      color: #efefef;
    }
    .group_5 {
      padding: 0 0.533vw;
      .text_17 {
        color: #ffffff;
        font-size: 4.267vw;
        line-height: 4.003vw;
      }
      .font_5 {
        font-size: 3.2vw;
        font-family: PingFang HK;
        line-height: 2.976vw;
        font-weight: 600;
        color: #ffffff;
      }
      .text_18 {
        line-height: 2.979vw;
      }
      .text_19 {
        margin-right: 4.267vw;
        line-height: 2.997vw;
      }
    }
    .view {
      margin-top: 6.4vw;
    }
    .text_15 {
      text-transform: capitalize;
    }
    .group_6 {
      margin-top: 5.867vw;
      .group_7 {
        padding: 0 1.6vw 4.8vw;
        border-bottom: solid 0.267vw #a4a9e81a;
        .text_20 {
          margin-left: 22.4vw;
          line-height: 2.339vw;
        }
        .text_21 {
          margin-left: 20.8vw;
        }
      }
      .group_8 {
        padding: 4.8vw 1.6vw;
        border-bottom: solid 0.267vw #a4a9e81a;
        .text_22 {
          margin-left: 22.4vw;
          line-height: 2.339vw;
        }
        .text_23 {
          margin-left: 20.8vw;
        }
      }
      .font_6 {
        font-size: 3.2vw;
        font-family: PingFang HK;
        line-height: 2.373vw;
        color: #ffffff;
      }
      .font_7 {
        font-size: 3.2vw;
        font-family: Roboto;
        line-height: 2.373vw;
        font-weight: 600;
        color: #99ff32;
      }
      .group_9 {
        padding: 4.8vw 1.6vw 0;
        .text_24 {
          margin-left: 22.4vw;
          line-height: 2.339vw;
        }
        .text_25 {
          margin-left: 20.8vw;
        }
      }
    }
  }
  .section {
    padding: 46.933vw 0 102.933vw;
    background-color: #000000b3;
    border-radius: 2.667vw;
    .section_4 {
      padding: 12.8vw 6.667vw;
      background-color: #081935;
      border-radius: 2.667vw;
      .text_9 {
        font-size: 4.267vw;
        font-weight: 600;
        line-height: 3.997vw;
      }
      .button {
        padding: 4.267vw 0;
        background-color: #ffffff1a;
        border-radius: 1.333vw;
        width: 61.333vw;
        .text_13 {
          line-height: 3.747vw;
        }
      }
      .button_2 {
        padding: 4.267vw 0;
        background-color: #99ff32;
        border-radius: 1.333vw;
        width: 61.333vw;
        .text_14 {
          line-height: 3.701vw;
        }
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
  .font_3 {
    font-size: 4vw;
    font-family: PingFang HK;
    line-height: 3.704vw;
    color: #99ff32;
  }
  .font_4 {
    font-size: 4vw;
    font-family: PingFang HK;
    line-height: 3.704vw;
    font-weight: 600;
    color: #081935;
  }
}
</style>