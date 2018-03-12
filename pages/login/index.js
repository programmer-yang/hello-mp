const md5 = require('../../utils/md5.js');

const app = getApp();

// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: [],
  },

  /**
   * 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const timestamp = new Date().getTime();
    const signature = md5('7a1d784cf78e48d88d09b81482dc5ae3' + timestamp+'0NCyjdm6OxmtZj25');
    const newUrl = `https://api.xinwen.cn/news/all?size=15&signature=${signature}&timestamp=${timestamp}&access_key=0NCyjdm6OxmtZj25`;
    wx.request({
      url: newUrl, //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({ news: res.data.data && res.data.data.news || [] })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})