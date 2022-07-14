$(document).ready(function () {

  if ($(".sliderCoins").length) {
    $('.sliderCoins').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 700,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  }

  if ($(".sliderPayment").length) {
    $('.sliderPayment').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 700,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  }

  if ($(".sliderRoadMap").length) {
    $('.sliderRoadMap').slick({
      infinite: false,
      dots: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  }

  if ($(".sliderInvest").length) {
    $('.sliderInvest').slick({
      infinite: false,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }

  if ($(".faqList").length > 0) {
    var timeOut = false;
    $(".faqList .quest").click(function () {
      if (timeOut) return false;
      $(this).toggleClass("open").parents(".faqItem").find(".answer").slideToggle();
      timeOut = true;
      setTimeout(function () {
        timeOut = false;
      }, 500);
    })
  }

  if ($(".copyBtn").length) {
    new ClipboardJS('.copyBtn');

    let messageShow = function (e) {
      let message = e.siblings('.copyMessage')
      message.stop().fadeIn(200)

      setTimeout(function () {
        message.stop().fadeOut(200)
      }, 2000)
    }

    $(".copyBtn").map(function () {

      $(this).on('click', function (e) {
        e.preventDefault()

        if ($(this).attr('data-clipboard-text') !== undefined) {
          messageShow($(this))
        }

        if ($(this).attr('data-clipboard-target') !== undefined) {
          messageShow($(this))
        }

      })
    })
  }

  if ($(".graficCurrents").length > 0) {

    let data = [
      [1483232400000, 1400],
      [1483318800000, 500],
      [1483405200000, 3800],
      [1483491600000, 2500],
      [1483578000000, 2200],
      [1483664400000, 3500],
      [1483750800000, 2300]
    ]

    Highcharts.chart('graficCurrentsContainer', {

      chart: {
        type: 'area',
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'kalisto',
          fontSize: '21px'
        },
      },

      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value / 1000 + 'k';
          }
        }
      },
      tooltip: {
        useHTML: true,
        backgroundColor: '#00000',
        borderColor: '#363842',
        pointFormat: '<span class="value">{point.y:,.0f}$</span>'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        area: {
          pointStart: 2015,
          marker: {
            enabled: false,
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'ETH',
        color: '#6976e7',
        data: data
      }]

    });
  }

  if ($(".graficCurrents").length > 0) {

    let data1 = [
      [1483232400000, 1400],
      [1483318800000, 500],
      [1483405200000, 3800],
      [1483491600000, 2500],
      [1483578000000, 2200],
      [1483664400000, 3500],
      [1483750800000, 2300]
    ]

    let data2 = [
      [1483232400000, 1200],
      [1483318800000, 500],
      [1483405200000, 1800],
      [1483491600000, 1500],
      [1483578000000, 2500],
      [1483664400000, 3100],
      [1483750800000, 2300]
    ]

    Highcharts.chart('graficCurrentsContainer2', {

      chart: {
        type: 'area',
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'kalisto',
          fontSize: '21px'
        },
      },
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value / 1000 + 'k';
          }
        }
      },
      tooltip: {
        useHTML: true,
        backgroundColor: '#00000',
        borderColor: '#363842',
        pointFormat: '<span class="value">{point.y:,.0f}$</span>'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        area: {
          pointStart: 2015,
          marker: {
            enabled: false,
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'ETH',
        color: '#8db35a',
        data: data1
      },
      {
        name: 'BRC',
        color: '#d9576e',
        data: data2
      }]

    });
  }

  if ($(".tabs").length > 0) {
    $('.tabs').tabslet();
  }

  if ($(".selectric").length > 0) {
    $('.selectric').selectric();

    $('.selectricCoins').selectric({
      arrowButtonMarkup: '<span class="button"></span>',
      labelBuilder: function (itemData, element, index) {
        return $(itemData.element[0]).attr('placeholder') ?
          '<span class="placeholder">' + itemData.text + '</span>' :
          $(itemData.element[0]).attr('data-image') !== undefined ?
            '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + itemData.text :
            '<span class="textDefault">' + itemData.text + '</span>';
      },
      optionsItemBuilder: function (itemData) {
        return $(itemData.element[0]).attr('data-image') !== undefined ?
          '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + itemData.text :
          '<span class="textDefault">' + itemData.text + '</span>';
      }
    })

    $('.selectricBalance').selectric({
      arrowButtonMarkup: '<span class="button"></span>',
      labelBuilder: function (itemData, element, index) {
        return $(itemData.element[0]).attr('placeholder') ?
          '<span class="placeholder">' + itemData.text + '</span>' :
          $(itemData.element[0]).attr('data-image') !== undefined ?
            '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + '<span class="title" style="color:' + $(itemData.element[0]).attr('data-color') + '">Доступный баланс:</span>' + '<span class="text" style="color:' + $(itemData.element[0]).attr('data-color') + '">' + itemData.text + '</span>' :
            '<span class="textDefault">' + itemData.text + '</span>';
      },
      optionsItemBuilder: function (itemData) {
        return $(itemData.element[0]).attr('data-image') !== undefined ?
          '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + itemData.text :
          '<span class="textDefault">' + itemData.text + '</span>';
      }
    })

  }

  if ($(".tableWith").length > 0) {
    var timeOut = false;
    $(".tableWith .tr").click(function () {
      if (timeOut) return false;
      $(this).toggleClass("open").parents(".row").find(".openWith").slideToggle();
      timeOut = true;
      setTimeout(function () {
        timeOut = false;
      }, 500);
    })
  }

  if ($(".tablePartners").length > 0) {
    let free = true;
    $(".slideTitle").on("click", function () {
      if (free) {
        free = false;
        if ($(this).hasClass('active')) {
          $(this).removeClass('active').siblings('.slideContent').stop().slideUp(function () { free = true });
        } else {
          $(this).parent('.slideBlock').siblings('.slideBlock').children('.slideTitle.active')
            .removeClass('active').siblings('.slideContent').stop().slideUp(function () { free = true });
          $(this).addClass('active').siblings('.slideContent').stop().slideDown(function () { free = true });
        }
      }

    })
  }

  if ($(".timer").length > 0) {
    $(".timer").map(timer)
  }

  if ($(".dial").length) {
    $(".dial").map(function () {

      let circle = $(this)

      circle.knob({
        'min': 0,
        'max': 100,
        'width': 170,
        'height': 170,
        'thickness': 0.05,
        'displayInput': false,
        'readOnly': true,
        'rotation': 'anticlockwise',
        'bgColor': '#3f424c'
      });


    })
  }

  if ($(".menuBurger").length) {
    $(".menuBurger").on("click", function () {
      if ($(".header").length) {
        $(".menuBurger").toggleClass("selected")
        $(".header .menu").slideToggle().toggleClass("open")
      }
      if ($(".cabHeader").length) {
        $(".menuBurger").toggleClass("selected")
        $(".cabHeaderContent").slideToggle().toggleClass("open")
      }
    })
  }

  if ($(".morisGrafic").length) {

    let grafOffice = $(".stateGraf")
    let replenished = grafOffice.find(".replenished")
    let value = grafOffice.find(".value")
    let deposit = grafOffice.find(".deposit")
    let accruals = grafOffice.find(".accruals")

    Highcharts.chart('myOffice', {
      chart: {
        backgroundColor: 'transparent',
        type: 'pie',
        style: {
          fontFamily: 'kalisto'
        },
        events: {
          load: function () {
            this.myTooltip = new Highcharts.Tooltip(this, this.options.tooltip);
          }
        }
      },
      title: {
        text: ''
      },

      plotOptions: {
        pie: {
          borderColor: 'transparent',
          dataLabels: {
            enabled: false
          }
        },
        series: {
          stickyTracking: false,
          states: {
            hover: {
              halo: {
                opacity: .7,
                size: 20,
              }
            }
          },
          events: {
            click: function (event) {
              this.chart.myTooltip.options.enabled = true;
              this.chart.myTooltip.refresh([event.point], event);
              grafOffice.addClass("open")
              $(".yourBalance").addClass("close")
              replenished.text(parseFloat(event.point.replenished) + "$")
              value.text(parseFloat(event.point.y) + "$")
              deposit.text(parseFloat(event.point.deposit) + "$")
              accruals.text(parseFloat(event.point.accruals) + "$")
              this.chart.myTooltip.options.enabled = false;
            },

          }
        }
      },

      tooltip: {
        enabled: false,
        positioner: function () {
          return { x: 0, y: 0 };
        },
        useHTML: true,
        shadow: false,
        borderWidth: 0,
        backgroundColor: 'transparent',
        headerFormat: '',
        pointFormat: '<div class="picture" style="backgroundImage:url(img/{point.icon}.png)" ></div><span class="title" style="color:{point.color}"> {point.name}</span><br />' + '<span class="value">{point.y}$</span>'
      },

      colors: ['#fd9701', '#6976e7', '#00abe7', '#52ba95', '#8db35a', '#afafae', '#d9576e', '#fe6603', '#d11f25', '#3dcacb'],
      series: [{
        innerSize: '95%',
        data: [{
          name: 'Bitcoin',
          replenished: 1500,
          y: 2200,
          deposit: 2500,
          accruals: 3000,
          icon: "vl1",

        }, {
          name: 'Ethereum',
          replenished: 1943,
          y: 4300,
          deposit: 2643,
          accruals: 2672,
          icon: "vl2",
        }, {
          name: 'Tether',
          replenished: 194,
          y: 430,
          deposit: 264,
          accruals: 267,
          icon: "vl3",
        }, {
          name: 'BNB',
          replenished: 1243,
          y: 4100,
          deposit: 2243,
          accruals: 2672,
          icon: "vl4",
        }, {
          name: 'XRP',
          replenished: 143,
          y: 400,
          icon: "vl5",
          deposit: 243,
          accruals: 272,
        }, {
          name: 'Cardano',
          replenished: 943,
          icon: "vl6",
          y: 300,
          deposit: 643,
          accruals: 672,
        }, {
          name: 'Solana',
          replenished: 5943,
          icon: "vl7",
          y: 7300,
          deposit: 4643,
          accruals: 6672,
        }, {
          name: 'Dogecoin',
          replenished: 2443,
          icon: "vl8",
          y: 1300,
          deposit: 4643,
          accruals: 6672,
        }, {
          name: 'Polkadot',
          replenished: 2943,
          y: 2000,
          deposit: 3643,
          accruals: 1672,
          icon: "vl9",
        },
        {
          name: 'Tether',
          replenished: 2943,
          y: 2000,
          deposit: 3643,
          accruals: 1672,
          icon: "vl10",
        }]
      }]
    });

    Highcharts.chart('partners', {
      chart: {
        backgroundColor: 'transparent',
        type: 'pie',
        style: {
          fontFamily: 'kalisto'
        },
        events: {
          load: function () {
            this.myTooltip = new Highcharts.Tooltip(this, this.options.tooltip);
          }
        }
      },
      title: {
        text: ''
      },

      plotOptions: {
        pie: {
          borderColor: 'transparent',
          dataLabels: {
            enabled: false
          }
        },
        series: {

          stickyTracking: false,
          states: {
            hover: {
              halo: {
                opacity: .7,
                size: 20,
              }
            }
          },
          events: {
            click: function (event) {
              this.chart.myTooltip.options.enabled = true;
              this.chart.myTooltip.refresh([event.point], event);
              this.chart.myTooltip.options.enabled = false;
            },
          }
        }
      },

      tooltip: {
        enabled: false,
        positioner: function () {
          return { x: 0, y: 0 };
        },
        useHTML: true,
        shadow: false,
        borderWidth: 0,
        backgroundColor: 'transparent',
        headerFormat: '',
        pointFormat: '<span class="title" style="color:{point.color}"> {point.name}</span><br />' + '<span class="value">{point.y}$</span>'
      },

      colors: ['#fe6603', '#8db35a', '#d9576e', '#d5b947'],
      series: [{
        innerSize: '95%',
        data: [{
          name: 'Общее кол-во партнеров',
          y: 5000,
        },
        {
          name: 'Заработано реферальных',
          y: 1200,
        },
        {
          name: 'активные партнеры',
          y: 2000,
        },
        {
          name: 'неактивные партнеры',
          y: 1500,
        },]
      }]
    });
  }
  // animations

  if ($("#starshine").length) {

    var body = $('#starshine'),
      template = $('.template.shine'),
      stars = 500,
      sparkle = 20;


    var size = 'small';
    var createStar = function () {
      template.clone().removeAttr('id').css({
        top: (Math.random() * 100) + '%',
        left: (Math.random() * 100) + '%',
        webkitAnimationDelay: (Math.random() * sparkle) + 's',
        mozAnimationDelay: (Math.random() * sparkle) + 's'
      }).addClass(size).appendTo(body);
    };

    for (var i = 0; i < stars; i++) {
      if (i % 2 === 0) {
        size = 'small';
      } else if (i % 3 === 0) {
        size = 'medium';
      } else {
        size = 'large';
      }

      createStar();
    }
  }

  if ($(".descriptions").length) {
    $("#os-phrases > h2")
      .css('opacity', 1).lettering('words')
      .children("span").lettering()
      .children("span").lettering();
  }

})

let m
const timer = function () {
  let now = new Date($(this).attr('data-now')),
    startTime = new Date($(this).attr('data-start')),
    finishTime = new Date($(this).attr('data-end')),
    startMS = startTime.getTime(),
    finishMS = finishTime.getTime(),
    nowMS = now.getTime(),
    betweenMS = finishMS - startMS,
    lastMS = finishMS - nowMS,
    percent = lastMS * 100 / betweenMS,
    lastHour,
    lastMin,
    lastSec;
  percent = 100 - percent.toFixed();

  if ($(this).siblings(".valueInvest")) {
    $(this).siblings(".valueInvest").find("[class='val']").attr('data-pr', percent);
    $(this).siblings(".valueInvest").find("[class='val']").text(percent + ' %');

    let pr = $(this).siblings(".valueInvest").find("[class='val']").attr("data-pr")
    let prog = $(this).siblings(".valueInvest").find(".prog")
    let cubePr = ((16 / 100) * pr)
    cubePr = cubePr.toFixed();
    for (let i = 0; i < cubePr; i++) {
      prog.find(".cube").eq(i).addClass("open")
    }

  }
  if ($(this).siblings(".circleBl")) {
    $(this).siblings(".circleBl").find("input").attr('value', percent);
    $(this).siblings(".circleBl").find("input").val(percent).trigger('change');
  }

  m = setInterval(function () {
    nowMS = nowMS + 1000;
    lastMS = finishMS - nowMS;

    lastHour = Math.floor(lastMS / 1000 / 60 / 60)
    lastMin = Math.floor((lastMS - (lastHour * 1000 * 60 * 60)) / 1000 / 60)
    lastSec = Math.floor((lastMS - (lastHour * 1000 * 60 * 60) - (lastMin * 60 * 1000)) / 1000)

    lastHour = checkTime(lastHour);
    lastMin = checkTime(lastMin);
    lastSec = checkTime(lastSec);

    $(this).find('.hous').text(lastHour);
    $(this).find('.min').text(lastMin);
    $(this).find('.sec').text(lastSec);

    if (lastMS / 1000 < 0) {
      $(this).find('.hous').text('00');
      $(this).find('.min').text('00');
      $(this).find('.sec').text('00');
    }

  }.bind(this), 1000)
}

const checkTime = function (i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}