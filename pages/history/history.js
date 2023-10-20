Page({
  data: {
    historyRecords: [], // 用于显示历史记录的数组
  },

  onLoad: function (options) {
    // 获取本地历史记录数据
    this.getHistoryData();
  },

  // 获取本地历史记录数据
  getHistoryData: function () {
    const historyRecords = wx.getStorageSync('calcHistory') || [];
    this.setData({ historyRecords: historyRecords });
  },
});
