$(document).ready(function () {

  if ($(".stateGraf").length) {
    var grafOffice = $(".stateGraf")
    var grafOfficeReplenished = grafOffice.find(".replenished")
    var grafOfficeValue = grafOffice.find(".value")
    var grafOfficeDeposit = grafOffice.find(".deposit")
    var grafOfficeAccruals = grafOffice.find(".accruals")
  }

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
            slidesToScroll: 1,
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
            slidesToShow: 4,
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

  if ($(".graficCurrentsHead").length) {
    let paused = false;
    $(".graficCurrentsHead .icon").click(function () {
      if (paused) return false;
      $(this).toggleClass("open").parents(".graficCurrents").find(".graficCurrentsBody").slideToggle();
      paused = true;
      setTimeout(function () {
        paused = false;
      }, 500);
    })
  }

  if ($(".graficCurrents").length > 0) {

    var optionsGrafCurrents = {
      chart: {
        type: 'area',
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'kalisto',
          fontSize: '21px'
        },
      },

      title: {
        text: '',
      },
      xAxis: {
        tickInterval: 24 * 3600 * 1000,
        type: 'datetime',
        labels: {

        },
      },
      yAxis: {
        title: {
          text: ''
        },
      },
      tooltip: {
        useHTML: true,
        backgroundColor: '#00000',
        borderColor: '#363842',
        pointFormat: '<span class="value">{point.y}$</span>'
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
        },
        series: {
          fillOpacity: 0.1
        }
      },
      legend: {
        enabled: false
      },
      series: [
        setCurrentsGrafValues()
      ]
    }

    var graficCurrents = Highcharts.chart('graficCurrentsContainer', optionsGrafCurrents)

    $('.listValue .item').click(function () {
      dataValueChangeOffice($(this)) 
      // добавляем данные в pie myOffice по клику на $('.listValue .item')
      let index = $(this).attr("data-index")
      myOffice.myTooltip.options.enabled = true
      myOffice.myTooltip.refresh(myOffice.series[0].data[index])
      grafOffice.addClass("open")
      $(".yourBalance").addClass("close")
      $(".graficCabMain").removeClass("default")
      grafOfficeReplenished.text(parseFloat(myOffice.series[0].data[index].options.replenished) + "$")
      grafOfficeValue.text(parseFloat(myOffice.series[0].data[index].options.y) + "$")
      grafOfficeDeposit.text(parseFloat(myOffice.series[0].data[index].options.deposit) + "$")
      grafOfficeAccruals.text(parseFloat(myOffice.series[0].data[index].options.accruals) + "$")
      myOffice.myTooltip.options.enabled = false;
    })

    $('.changeTime li > *').click(function () {
      let currentName, currentColor = ''
      $('.changeTime li > *').removeClass('active')
      $(this).addClass('active')

      let seriesLength = graficCurrents.series.length;
      for (let i = seriesLength - 1; i > -1; i--) {
        currentName = graficCurrents.series[i].name
        currentColor = graficCurrents.series[i].color
      }

      let data = {
        name: currentName,
        color: currentColor,
      }

      switch ($(this).attr('data-interval')) {
        case '1M':
          graficCurrents.update({
            xAxis: {
              tickInterval: 30 * 24 * 3600 * 1000,
            },
          });
          break;
        case '1w':
          graficCurrents.update({
            xAxis: {
              tickInterval: 7 * 24 * 3600 * 1000,
            },
          });
          break;
        case '1d':
          graficCurrents.update({
            xAxis: {
              tickInterval: 24 * 3600 * 1000,
            },
          });
          break;
        case '1h':
          graficCurrents.update({
            xAxis: {
              tickInterval: 3600 * 1000,
            },
          });
          break;
        default:
          console.log('ошибка')
      }

      getData(currentName, $(this).attr('data-interval'), graficCurrents, data)

    })

    getData('BTC', '1d', graficCurrents, {
      name: 'BTC',
      color: '#fd9701',
      data: null
    })

    $('.graficCurrentsHead .value').text($(this).find('.item.active .val').text())
    $('.graficCurrentsHead .valueCur').text('1 BTC')

    var dataValueChangeOffice = function(event){
      $('.changeTime li > *').removeClass('active')
      $('.listValue .item').removeClass('active')
      event.addClass('active')

      $('.changeTime li').map(function () {
        let block = event.find('span')
        if (block.attr('data-interval') == '1d') {
          block.addClass('active')
        }
      })

      let data = eval(event.attr('data-value'))
      getData(data.name, '1d', graficCurrents, data)
      graficCurrents.update({
        xAxis: {
          tickInterval: 24 * 3600 * 1000,
        },
      });
      $('.graficCurrentsHead .value').text(event.find('.val').text())
      $('.graficCurrentsHead .valueCur').text('1 ' + data.name)
    }

  }

  if ($(".graficPartners").length > 0) {

    var graficPartners = Highcharts.chart('graficCurrentsContainer2', {
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
        // pointFormat: `<span class="value">{point.y}</span>`,
        formatter: function () {
          let time = new Date(this.x);
          if (this.series._i == Number($('[data-profit]').attr('data-profit'))) {
            return `<span class="title">${time.toDateString()}</span><span class="value">$${this.y}</span>`
          } else {
            return `<span class="title">${time.toDateString()}</span><span class="value">${this.y}</span>`
          }
        },
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
        },
        series: {
          fillOpacity: 0.2
        }
      },
      legend: {
        enabled: false
      },
      series: setDataGrafPartners()

    });

  }

  if ($(".tabs").length > 0) {
    $('.tabs').tabslet();
  }

  if ($(".selectric").length > 0) {
    $('.selectric').selectric();

    $('.selectricCoins').selectric({
      arrowButtonMarkup: '<span class="button"></span>',
      labelBuilder: function (itemData) {
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

    $('.selectricBalance').map(function(){
      var balanceSelect = $(this)
      balanceSelect.selectric({
        arrowButtonMarkup: '<span class="button"></span>',
        labelBuilder: function (itemData) {
          return $(itemData.element[0]).attr('placeholder') ?
            '<span class="placeholder">' + itemData.text + '</span>' :
            $(itemData.element[0]).attr('data-image') !== undefined ?
              '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + '<span class="title" style="color:' + $(itemData.element[0]).attr('data-color') + '">' + balanceSelect.attr('data-label-val') + '</span>' + '<span class="text" style="color:' + $(itemData.element[0]).attr('data-color') + '">' + itemData.text + '</span>' :
              '<span class="textDefault">' + itemData.text + '</span>';
        },
        optionsItemBuilder: function (itemData) {
          return $(itemData.element[0]).attr('data-image') !== undefined ?
            '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + itemData.text :
            '<span class="textDefault">' + itemData.text + '</span>';
        }
      })
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

    var myOffice = Highcharts.chart('myOffice', {
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
              $(".graficCabMain").removeClass("default")
              grafOfficeReplenished.text(parseFloat(event.point.replenished) + "$")
              grafOfficeValue.text(parseFloat(event.point.y) + "$")
              grafOfficeDeposit.text(parseFloat(event.point.deposit) + "$")
              grafOfficeAccruals.text(parseFloat(event.point.accruals) + "$")
              this.chart.myTooltip.options.enabled = false;

              // $('.listValue .item').map(function(){         
              //   if ($(this).attr('data-index') == event.point.x) {
              //     dataValueChangeOffice($(this))
              //   }
              // })   
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
        pointFormat: '<div class="picture" style="backgroundImage:url(img/{point.icon}.png)" ></div><span class="title" style="color:{point.color}"> {point.name}</span><br />' + '<span class="value">{point.dataСurrency} {point.dataСurrencyPrefix}</span> <span class="value">{point.y}$</span>'
      },

      colors: color_grafoffice,
      series: data_grafoffice
    });

    var partners = Highcharts.chart('partners', {
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
              removeSeries()
              updateTooltips(event.point.index)
              addSeries(event.point.values)
              $(".cabPartners").removeClass("default")
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
        formatter: function () {
          if (this.colorIndex === Number($('[data-profit]').attr('data-profit'))) {
            return `<span class="title" style="color:${this.point.color}"> ${this.point.name}</span><br />' + '<span class="value">${this.y}$</span>`;
          } else {
            return `<span class="title" style="color:${this.point.color}"> ${this.point.name}</span><br />' + '<span class="value">${this.y}</span>`;
          }
        }
      },

      colors: color_grafPartner,
      series: [{
        innerSize: '95%',
        data: data_grafPartner
      }]
    });

    $(".graficCabMain .capTitle").click(function () {
      grafOffice.removeClass("open")
      $(".yourBalance").removeClass("close")
      $(".graficCabMain").addClass("default")

    })

    $('.cabPartners .stateGraf .line .title').click(function () {
      let index = $(this).attr("data-index")
      partners.myTooltip.options.enabled = true;
      removeSeries()
      updateTooltips(index)
      partners.myTooltip.refresh(partners.series[0].data[index]);
      addSeries(partners.series[0].data[index].values)
      partners.myTooltip.options.enabled = false;
      $(".cabPartners").removeClass("default")
    })

    const addSeries = (series) => {
      graficPartners.addSeries({
        name: series.name,
        color: series.color,
        data: series.data,
      });
    }

    const removeSeries = () => {
      let seriesLength = graficPartners.series.length;
      for (let i = seriesLength - 1; i > -1; i--) {
        graficPartners.series[i].remove();
      }
    }

    const updateTooltips = (index) => {
      if (Number(index) === Number($('[data-profit]').attr('data-profit'))) {
        graficPartners.update({
          tooltip: {
            pointFormat: '<span class="value">${point.y}</span>',
            formatter: null
          },
        });
      } else {
        graficPartners.update({
          tooltip: {
            pointFormat: '<span class="value">{point.y}</span>',
            formatter: null
          },
        });
      }
    }

    $(".cabPartners .capTitle").click(function () {
      $(".cabPartners").addClass("default")
      partners.myTooltip.options.enabled = true;
      removeSeries()
      partners.myTooltip.refresh(partners.series[0].data);
      partners.series[0].data.map(function (el, index) {
        addSeries(el.values)
      })
      partners.myTooltip.options.enabled = false;
    })

  }

  if ($('.modalsScroll').length > 0) {
    openMod()
  }

  if ($(".cabMenu").length > 0) {

    let cabMenuSettings = []
 
    if ($('.cabHeader').hasClass('authHeader')){
      cabMenuSettings = [
          {
            breakpoint: 1599,
            settings: {
              slidesToShow: 6,
              arrows:true,
            }
          },   
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 5,
              arrows:true,
            }
          },   
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              arrows:true,
            }
          },     
          {
            breakpoint: 1150,
            settings: "unslick",
          },   
      ]
    } else{
      cabMenuSettings = [
          {
            breakpoint: 1599,
            settings: {
              slidesToShow: 8,
              arrows:true,
            }
          },   
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 7,
              arrows:true,
            }
          },   
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              arrows:true,
            }
          },     
          {
            breakpoint: 1150,
            settings: "unslick",
          },   
      ]
    }

    $('.cabMenu ul').slick({
      infinite: false,
      slidesToShow: 12,
      slidesToScroll: 1,
      arrows:false,
      responsive: cabMenuSettings
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

  if ($(".tarifCube").length) {
    $('.tarifCube .arrow.prev').click(function(){
      $(this).removeClass('visible')
      $(this).next().addClass('visible')
      $(this).parent(".tarifCube").removeClass("flip")
    })

    $('.tarifCube .arrow.next').click(function(){
      $(this).removeClass('visible')
      $(this).prev().addClass('visible')
      $(this).parent(".tarifCube").addClass("flip")
    })
  }


})

$( window ).resize(function() {
  if($(window).width() >= 1150){
    if ($(".cabMenu").length>0) {
      if($('.cabMenu ul').hasClass('slick-initialized') == false){
        $('.cabMenu ul').slick('refresh');
      }
   }
  }
});

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

const setCurrentsGrafValues = (series = dataCoin2) => {
  return series
}

const setDataGrafPartners = (series = defaultSeriesPartners) => {
  return series
}

const setDataGraf = (grafic, data) => {

  let seriesLength = grafic.series.length;

  for (let i = seriesLength - 1; i > -1; i--) {
    grafic.series[i].remove();
  }

  let minArray = []
  for (let i = 0; i < data.data.length; i += 1) {
    minArray[i] = data.data[i][1]
  }

  grafic.update({
    yAxis: {
      max: Math.max.apply(null, minArray),
      min: Math.min.apply(null, minArray)
    },
  });

  grafic.addSeries({
    name: data.name,
    color: data.color,
    data: data.data,
  });

}


