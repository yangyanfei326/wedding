// pages/contactUs/contactUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg: "http://127.0.0.1:3000/img/avatar.png",// 头像图片路径
  },
  selected: function (e) {
    this.setData({
      _num: e.target.dataset.num
    })
  },
  
  changeImage: function () {
    wx.chooseImage({
      count: 1,
      sourceType: ["camera", "album"],
      success: (res)=> {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片，只有一张图片获取下标为0
        var tempFilePaths = res.tempFilePaths[0];
        this.setData({
          userImg: tempFilePaths,
        })
        wx.uploadFile({
          url: 'http://127.0.0.1:3000/upload',
          filePath: res.tempFilePaths[0],
          name: 'mypic',
          header:{
            "Content-Type":"multipart/form-data"
          },
          success:(res)=>{
            console.log(123)
          },
          fail:(res)=>{
            console.log(456)
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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