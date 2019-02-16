//index.js index.wxml index.wxss
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {id: 1, img_url:"http://127.0.0.1:3000/img/AFEI4vIdEAQYACCo-8fgBSjk3fuFBzDuBTj8AkBl.png"},
      {id: 2, img_url: "http://127.0.0.1:3000/img/AFEI4vIdEAQYACCLiMLgBSiOrtS-AzDuBTj8AkBl.png"}
      ],    //轮播图
    navlist: [],  //九宫格
    listx:[
      { id: 1, img_url: "http://127.0.0.1:3000/img/AFEI4vIdEAQYACC7nsLgBSiH2NPdAjDuBTj0A0Bl.png", msg:"6天5晚+酒店" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/AFEI4vIdEAQYACC_nsLgBSj0h7iDBzDuBTj0A0Bl.png", msg: "6天5晚+酒店" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/AFEI4vIdEAQYACDBnsLgBSj6pev1BDDuBTj0A0Bl.png", msg: "6天5晚+酒店" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/AFEI4vIdEAQYACC7nsLgBSiH2NPdAjDuBTj0A0Bl.png", msg: "6天5晚+酒店" },
      { id: 5, img_url: "http://127.0.0.1:3000/img/AFEI4vIdEAQYACC_nsLgBSj0h7iDBzDuBTj0A0Bl.png", msg: "6天5晚+酒店" },
      { id: 6, img_url: "http://127.0.0.1:3000/img/AFEI4vIdEAQYACDBnsLgBSj6pev1BDDuBTj0A0Bl.png", msg: "6天5晚+酒店" }
    ],//横向轮播图
    weddingShop:[
      { id: 1, name: "XX幸福婚礼策划", detail:"XX市优秀口碑婚庆，XX钻石指定商家"},
      { id: 2, name: "XX幸福婚礼策划", detail: "XX市优秀口碑婚庆，XX钻石指定商家" },
      { id: 3, name: "XX幸福婚礼策划", detail: "XX市优秀口碑婚庆，XX钻石指定商家" },
      { id: 4, name: "XX幸福婚礼策划", detail: "XX市优秀口碑婚庆，XX钻石指定商家" },
      { id: 5, name: "XX幸福婚礼策划", detail: "XX市优秀口碑婚庆，XX钻石指定商家" }
    ] //XX幸福婚礼策划
  },
  onLoad: function (options) {
    this.getNavImages();
  },
  getNavImages: function () {
    //获取九宫格信息
    var url2 = "http://127.0.0.1:3000/getNavImages";
    wx.request({
      url: url2,
      success: (res) => {
        this.setData({
          navlist: res.data
        });
      },
      fail: (res) => {
      }
    });
  },
  handleTap: function (e) {
    //1:获取自定义属性值
    var id = e.target.dataset.id;
    console.log(id)
    //2:判断跳转组件
    var page = "/pages/aboutUs/aboutUs";
    if (id == 1) {
      page = "/pages/case/case";
    }
    wx.switchTab({ url: page });
  },
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