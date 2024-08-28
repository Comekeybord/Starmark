import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  /*子窗口状态*/
  subWinOpened: false,
  sdList: [],
  dList: [],
  searchText: '',
  /*加载状态*/
  fofaLoading: false,
  bruteLoading: false,
  flowLoading: false,
  /*爆破参数*/
  bruteFinishCount: 0,
  bruteTotalCount: 0,
  concurrent: 100,
  timeout: 2000,
  dictPath: null,
  /*流量搜集参数*/
  deep: 2,
  waitTime: 0
};

// 子域名页数据
const subDomainDataSlice = createSlice({
  name: 'subDomainData',
  initialState,
  reducers: {
    setSubWinOpened: (state, action) => {
      state.subWinOpened = action.payload;
    },
    setDList: (state, action) => {
      state.dList = action.payload;
    },
    setSDList: (state, action) => {
      // 去重、合并
      state.sdList = [...new Set([...state.sdList, ...action.payload])];
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setConcurrent: (state, action) => {
      state.concurrent = action.payload;
    },
    // 子域名爆破数据
    setBruteFinishCount: (state, action) => {
      state.bruteFinishCount = action.payload;
    },
    setBruteTotalCount: (state, action) => {
      state.bruteTotalCount = action.payload;
    },
    setFofaLoading(state, action) {
      state.fofaLoading = action.payload;
    },
    setBruteLoading(state, action) {
      state.bruteLoading = action.payload;
    },
    setFlowLoading(state, action) {
      state.flowLoading = action.payload;
    },
    setBruteTimeout(state, action) {
      state.timeout = action.payload;
    },
    /*流量搜集参数*/
    setDeep(state, action) {
      state.deep = action.payload;
    },
    setWaitTime(state, action) {
      state.waitTime = action.payload;
    },
    setDictPath(state, action) {
      state.dictPath = action.payload;
    },
    resetState: (state, action) => {
      // 重置状态
      const {
        dList,
        /*爆破参数*/
        bruteFinishCount,
        bruteTotalCount,
        concurrent,
        timeout,
        /*流量搜集参数*/
        deep,
        waitTime,
        dictPath
      } = state;
      return {
        ...initialState,
        dList,
        /*爆破参数*/
        bruteFinishCount,
        bruteTotalCount,
        concurrent,
        timeout,
        dictPath,
        /*流量搜集参数*/
        deep,
        waitTime
      };
    },
    initDictPath(state, action) {
      // 整体修改state的值
      state.dictPath = action.payload
    }
  }
});

export const {
  resetState,
  setSubWinOpened,
  setDList,
  setSDList,
  setSearchText,
  setConcurrent,
  setBruteFinishCount,
  setBruteTotalCount,
  setFofaLoading,
  setBruteLoading,
  setFlowLoading,
  setBruteTimeout,
  setDeep,
  setWaitTime,
  setDictPath,
  initDictPath
} = subDomainDataSlice.actions;
export default subDomainDataSlice.reducer;
