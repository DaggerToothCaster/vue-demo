<template>
  <div class="app">
    <div class="page-app">
     
      <div class="group">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: {  },
  data() {
    return {};
  },
  async created() {
    // await this.connectWallet();
  },
  computed: {
    // ...mapState(["web3", "addr"]),
  },
  methods: {
    async connectWallet() {
      if (!window.ethereum) {
        console.warn("请安装MetaMask");
        return;
      }
      await window.ethereum.request({ method: "eth_requestAccounts" });
      var web3 = await new Web3(window.ethereum);

      var accounts = await web3.eth.getAccounts();
      this.$store.commit("SET_WEB3", { web3: web3, addr: accounts[0] });

      config.account = accounts[0];
      config.proxy = window.ethereum;
      //this._getUserInfo(accounts[0])

      window.ethereum.on("networkChanged", (network) => {
        console.log("networkChanged", network);
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        console.log("accountsChanged");
        window.location.reload();
      });
      window.ethereum.on("message", (message) => {
        console.log("message", message);
      });
      window.ethereum.on("disconnect", (dis) => {
        console.log("disconnect", dis);
      });
    },
    async _getUserInfo(addr) {
      let d = await getArgInfo(addr);
      console.log(d);
      this.$store.commit("SET_USER", d);
    },
  },
};
</script>

<style>
/************************************************************
  ** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
  ** 否则页面将无法正常显示                                  **
  ************************************************************/

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
}

body * {
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.items-stretch {
  align-items: stretch;
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.self-baseline {
  align-self: baseline;
}

.self-stretch {
  align-self: stretch;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.grow {
  flex-grow: 1;
}

.grow-0 {
  flex-grow: 0;
}

.shrink {
  flex-shrink: 1;
}

.shrink-0 {
  flex-shrink: 0;
}

.relative {
  position: relative;
}

.ml-2 {
  margin-left: 0.533vw;
}

.mt-2 {
  margin-top: 0.533vw;
}

.ml-4 {
  margin-left: 1.067vw;
}

.mt-4 {
  margin-top: 1.067vw;
}

.ml-6 {
  margin-left: 1.6vw;
}

.mt-6 {
  margin-top: 1.6vw;
}

.ml-8 {
  margin-left: 2.133vw;
}

.mt-8 {
  margin-top: 2.133vw;
}

.ml-10 {
  margin-left: 2.667vw;
}

.mt-10 {
  margin-top: 2.667vw;
}

.ml-12 {
  margin-left: 3.2vw;
}

.mt-12 {
  margin-top: 3.2vw;
}

.ml-14 {
  margin-left: 3.733vw;
}

.mt-14 {
  margin-top: 3.733vw;
}

.ml-16 {
  margin-left: 4.267vw;
}

.mt-16 {
  margin-top: 4.267vw;
}

.ml-18 {
  margin-left: 4.8vw;
}

.mt-18 {
  margin-top: 4.8vw;
}

.ml-20 {
  margin-left: 5.333vw;
}

.mt-20 {
  margin-top: 5.333vw;
}

.ml-22 {
  margin-left: 5.867vw;
}

.mt-22 {
  margin-top: 5.867vw;
}

.ml-24 {
  margin-left: 6.4vw;
}

.mt-24 {
  margin-top: 6.4vw;
}

.ml-26 {
  margin-left: 6.933vw;
}

.mt-26 {
  margin-top: 6.933vw;
}

.ml-28 {
  margin-left: 7.467vw;
}

.mt-28 {
  margin-top: 7.467vw;
}

.ml-30 {
  margin-left: 8vw;
}

.mt-30 {
  margin-top: 8vw;
}

.ml-32 {
  margin-left: 8.533vw;
}

.mt-32 {
  margin-top: 8.533vw;
}

.ml-34 {
  margin-left: 9.067vw;
}

.mt-34 {
  margin-top: 9.067vw;
}

.ml-36 {
  margin-left: 9.6vw;
}

.mt-36 {
  margin-top: 9.6vw;
}

.ml-38 {
  margin-left: 10.133vw;
}

.mt-38 {
  margin-top: 10.133vw;
}

.ml-40 {
  margin-left: 10.667vw;
}

.mt-40 {
  margin-top: 10.667vw;
}

.ml-42 {
  margin-left: 11.2vw;
}

.mt-42 {
  margin-top: 11.2vw;
}

.ml-44 {
  margin-left: 11.733vw;
}

.mt-44 {
  margin-top: 11.733vw;
}

.ml-46 {
  margin-left: 12.267vw;
}

.mt-46 {
  margin-top: 12.267vw;
}

.ml-48 {
  margin-left: 12.8vw;
}

.mt-48 {
  margin-top: 12.8vw;
}

.ml-50 {
  margin-left: 13.333vw;
}

.mt-50 {
  margin-top: 13.333vw;
}

.ml-52 {
  margin-left: 13.867vw;
}

.mt-52 {
  margin-top: 13.867vw;
}

.ml-54 {
  margin-left: 14.4vw;
}

.mt-54 {
  margin-top: 14.4vw;
}

.ml-56 {
  margin-left: 14.933vw;
}

.mt-56 {
  margin-top: 14.933vw;
}

.ml-58 {
  margin-left: 15.467vw;
}

.mt-58 {
  margin-top: 15.467vw;
}

.ml-60 {
  margin-left: 16vw;
}

.mt-60 {
  margin-top: 16vw;
}

.ml-62 {
  margin-left: 16.533vw;
}

.mt-62 {
  margin-top: 16.533vw;
}

.ml-64 {
  margin-left: 17.067vw;
}

.mt-64 {
  margin-top: 17.067vw;
}

.ml-66 {
  margin-left: 17.6vw;
}

.mt-66 {
  margin-top: 17.6vw;
}

.ml-68 {
  margin-left: 18.133vw;
}

.mt-68 {
  margin-top: 18.133vw;
}

.ml-70 {
  margin-left: 18.667vw;
}

.mt-70 {
  margin-top: 18.667vw;
}

.ml-72 {
  margin-left: 19.2vw;
}

.mt-72 {
  margin-top: 19.2vw;
}

.ml-74 {
  margin-left: 19.733vw;
}

.mt-74 {
  margin-top: 19.733vw;
}

.ml-76 {
  margin-left: 20.267vw;
}

.mt-76 {
  margin-top: 20.267vw;
}

.ml-78 {
  margin-left: 20.8vw;
}

.mt-78 {
  margin-top: 20.8vw;
}

.ml-80 {
  margin-left: 21.333vw;
}

.mt-80 {
  margin-top: 21.333vw;
}

.ml-82 {
  margin-left: 21.867vw;
}

.mt-82 {
  margin-top: 21.867vw;
}

.ml-84 {
  margin-left: 22.4vw;
}

.mt-84 {
  margin-top: 22.4vw;
}

.ml-86 {
  margin-left: 22.933vw;
}

.mt-86 {
  margin-top: 22.933vw;
}

.ml-88 {
  margin-left: 23.467vw;
}

.mt-88 {
  margin-top: 23.467vw;
}

.ml-90 {
  margin-left: 24vw;
}

.mt-90 {
  margin-top: 24vw;
}

.ml-92 {
  margin-left: 24.533vw;
}

.mt-92 {
  margin-top: 24.533vw;
}

.ml-94 {
  margin-left: 25.067vw;
}

.mt-94 {
  margin-top: 25.067vw;
}

.ml-96 {
  margin-left: 25.6vw;
}

.mt-96 {
  margin-top: 25.6vw;
}

.ml-98 {
  margin-left: 26.133vw;
}

.mt-98 {
  margin-top: 26.133vw;
}

.ml-100 {
  margin-left: 26.667vw;
}

.mt-100 {
  margin-top: 26.667vw;
}

/*  */

.page-app {
  padding-top: 4.267vw;
  background-color: #081935;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.cursor{
  cursor: pointer;
}
</style>