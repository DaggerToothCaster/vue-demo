<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="flex-row justify-between items-center group">
        <span class="text">9:27</span>
        <div class="flex-row items-center">
          <img
            class="image"
            src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=f810c6ce4ac2d1e640a0dd10fd8e56e2.png"
          />
          <img
            class="ml-2 image_2"
            src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=c9e487ab9b4a1553ebf398abc01a72d2.png"
          />
          <img
            class="ml-2 image_3"
            src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=2f0a2c0fec05bc52e0507bed359134f4.png"
          />
        </div>
      </div>
      <div class="mt-24 flex-row justify-between items-center">
        <span class="text_2">Cars</span>
        <div class="flex-row">
          <img
            class="image_4"
            src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=e65a83846d8a7fd405c2641adff337de.png"
          />
          <img
            class="image_5 ml-15"
            src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=699c29f85f96dc583bf29162cfd8bb69.png"
          />
          <img
            class="image_6 ml-15"
            src="https://ide.code.fun/api/image?token=666ba8dc53a4470011076abd&name=962cd7571d9a54ea827aa648a16a6ba9.png"
          />
        </div>
      </div>
    </div>
    <div class="flex-col flex-1 group_2">
      <span class="self-start text_3">推荐地址绑定</span>
      <div class="mt-34 flex-col self-stretch">
        <div class="flex-col justify-start items-start input"><span class="font text_4">绑定推荐地址</span></div>
        <div class="flex-col justify-start items-center button mt-17"><span class="font">确认</span></div>
      </div>
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
  .mt-17 {
    margin-top: 4.533vw;
  }
  .page {
    background-color: #081935;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .header {
      padding: 4.267vw 3.733vw 4.267vw 5.867vw;
      height: 23.467vw;
      .group {
        padding-left: 3.2vw;
        .text {
          color: #ffffff;
          font-size: 4vw;
          font-family: SF Pro Text;
          font-weight: 600;
          line-height: 2.957vw;
        }
        .image {
          width: 4.8vw;
          height: 3.2vw;
        }
        .image_2 {
          width: 5.6vw;
          height: 4vw;
        }
        .image_3 {
          width: 6.4vw;
          height: 3.021vw;
        }
      }
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
    .group_2 {
      padding: 9.6vw 5.867vw 137.6vw;
      overflow-y: auto;
      .text_3 {
        margin-left: 1.6vw;
        color: #99ff32;
        font-size: 6.4vw;
        font-family: PingFang HK;
        font-weight: 600;
        line-height: 5.997vw;
      }
      .input {
        padding: 5.333vw 0;
        background-color: #ffffff1a;
        border-radius: 2.667vw;
        .text_4 {
          margin-left: 5.333vw;
          line-height: 3.747vw;
        }
      }
      .button {
        padding: 4.267vw 0;
        background-color: #99ff32;
        border-radius: 2.667vw;
      }
      .font {
        font-size: 4vw;
        font-family: PingFang HK;
        line-height: 3.701vw;
        font-weight: 600;
        color: #081935;
      }
    }
  }
</style>