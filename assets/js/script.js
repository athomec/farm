"use strict";

$(function () {
  //JS開頭
  var WINDOW = $(window).width(); //視窗寬度

  var WINDOWH = $(window).height(); //視窗高度
  //---------------------登入頁設定----------------------

  $(".js-toggle-menu").find("input").click(function () {
    $(this).parents(".js-toggle-menu").find(".form-check").removeClass('active');
    $(this).parent(".form-check").addClass("active");
  }); //---------------------側邊選單設定------------------------

  $(".js-info-opener").click(function () {
    var content = $(this).attr("data-target");
    window.parent.$(".js-side-info").removeClass('open');
    window.parent.$(".js-map-content").css('height', ' calc(100vh - 314px)');
    window.parent.$(content).addClass('open');
  });
  $(".js-info-closer").click(function () {
    $(".js-map-content").removeClass('open');
    $(".js-map-content").css('height', ' calc(100vh - 54px)');
    $(".js-side-info").removeClass('open');
  });
  $(".js-side-menu-toggler").click(function () {
    $('.js-side-menu').toggleClass("close");
    $(".js-side-content").toggleClass("close");
  }); //---------------------視窗拖曳設定------------------------

  $('.js-map-content').resizable();
  var resizeObserver = new ResizeObserver(onResize);
  resizeObserver.observe(document.querySelector('.js-map-content'));

  function onResize(e) {
    $(".js-side-info").addClass("hide");
    document.addEventListener('mouseup', function (e) {
      $(".js-side-info").removeClass("hide");
    });
  } //---------------------頁籤設定------------------------


  $('.js-toggle-menu').find(".js-toggle-button").click(function () {
    $(this).toggleClass("active");
    $(this).siblings('.js-toggle-button').removeClass('active');
  }); //手風琴按鈕切換設定

  $(".js-accordion-menu").find('button').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
    } else {
      $(this).parents(".js-accordion-menu").find('button').removeClass('active');
      $(this).parents(".js-accordion-menu").find('button').find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
      $(this).addClass("active");
      $(this).find('span').removeClass('ti-angle-down').addClass('ti-angle-up');
    }
  }); //----------------gotop功能-----------------

  $(".gotop").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 300);
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //若目前的位置距離網頁頂端>100px
      $(".gotop").fadeIn("fast");
      $("header").addClass("godown");
    } else {
      $(".gotop").stop().fadeOut("fast");
      $("header").removeClass("godown");
    }

    var index = 0; //各單元區塊順序

    var st = $(window).scrollTop(); //現在捲軸位置

    var wh = $(window).height(); //視窗高度
  }); //主選單設定

  $(".navbar-nav").find('a').click(function () {
    var section = $(this).attr("href");
    $("html,body").animate({
      scrollTop: $(section).offset().top - 66
    }, 300);
    $(".navbar-collapse").removeClass("show");
    return false;
  });
  /*匯出視窗-未輸入條件示意*/

  $("#info-export-default").modal("show");
  /*匯出視窗-查無資料示意*/

  $('#info-export-noinfo').modal("show");
  /*個人資料視窗-編輯示意*/

  $('#info-personal-edit').modal("show");
  RESIZE();
  $(window).resize(function () {
    RESIZE();
  });

  function RESIZE() {
    WINDOWH = $(window).height();
    WINDOW = $(window).width();

    if (WINDOW < 768) {
      $('.js-side-menu').addClass("close");
      $(".js-side-content").addClass("close");
    }
  }
}); //JS尾端
//# sourceMappingURL=script.js.map
