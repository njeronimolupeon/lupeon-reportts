import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Chart, registerables} from 'chart.js';
import { PostService } from 'src/app/post.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import plugin from 'chartjs-plugin-datalabels';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-report-custo-de-frete',
  templateUrl: './report-custo-de-frete.component.html',
  styleUrls: ['./report-custo-de-frete.component.css']
})
export class ReportCustoDeFreteComponent implements OnInit {

  @ViewChild('meuCanvasOne', {static:true }) elemento: ElementRef;
  @ViewChild('myChartLinha', {static:true }) myChartLinha: ElementRef;

  @ViewChild('myChartLinha2', {static:true }) myChartLinha2: ElementRef;
  @ViewChild('myChartLinha3', {static:true }) myChartLinha3: ElementRef;
  @ViewChild('myChartColunas', {static:true }) myChartColunas: ElementRef;
  @ViewChild('myChartColunas2', {static:true }) myChartColunas2: ElementRef;
  @ViewChild('myChartColunas3', {static:true }) myChartColunas3: ElementRef;
  @ViewChild('myChartColunas4', {static:true }) myChartColunas4: ElementRef;
  @ViewChild('myChartPizza', {static:true }) myChartPizza: ElementRef;

  constructor() {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
  }

  ngOnInit(): void {

    let delayed = false;
    new Chart(this.elemento.nativeElement, {
      type:'doughnut',

      data:{
        labels: ["Janeiro", "Fevereiro"],
        datasets: [{
          backgroundColor: ['#0A2C5B', '#126CFB'],
          hoverBackgroundColor: ['#0A2C5B' ,'#126CFB'],
          hoverBorderColor: ['#0A2C5B' ,'#126CFB'],
          data: [300, 50],
        }],

      },

      options: {
        animation:{
          duration: 2000
        },

        plugins: {
            filler: {
                propagate: false,
            },
            title: {
                display: false,
            },
            legend: {
                display: false,
            },

            datalabels:{
              formatter: (value, ctx) => {
                let sum = 0;
                let dataArr: any[] = ctx.chart.data.datasets[0].data;
                dataArr.map((data: number) => {
                  sum += data;
                });
                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;
              },
              color: 'white'
            },

        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: false,
                stacked:true
            },
            y: {
                display: false,
                stacked:true
            }
        }
        },
    })

    const labelsLinha = [
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      // 'Agosto',
      // 'Setembro'
      ];



    const dataLinha = {
      labels: labelsLinha,
      datasets: [{
          backgroundColor: ['#0A2C5B'],
          hoverBackgroundColor: ['#0A2C5B' ,'#126CFB'],
          hoverBorderColor: ['#0A2C5B' ,'#126CFB'],
          pointBorderColor: '#126CFB',
          pointBackgroundColor: '#126CFB',
          borderColor:'#126CFB',
          data: [459, 604, 426, 28, 70]
      }]
    };


    // const animation =
    const ctx = this.myChartLinha.nativeElement;
    new Chart(ctx, {
      type: 'line',
      data: dataLinha,
      options: {
          animation:{
              easing: 'linear',
              duration: 2000,

          },
          plugins: {

              filler: {
                  propagate: false,
              },
              title: {
                  display: false,
              },
              legend: {
                  display: false,
                  labels:{
                    font:{
                      size: 9
                    }
                  }
              },
              datalabels:{
                // display:true,
                font:{
                  size: 8,
                },

                color:'rgb(100, 100, 100)',

                align: function(context){
                  if(context.dataIndex == 0){
                    return 'right'
                  }else{
                    return 'left'
                  }
                } ,
                anchor:'end',
                // clamp:false,
                // clip: false,
                backgroundColor:function(context){
                  if(context.dataIndex == 0){
                    return '#FFFF'
                  }else if (context.dataIndex == 4){
                    return '#FFFF'
                  }

                  return ''
                },
                offset:-4.5,

                formatter(value, context,) {
                  if(context.dataIndex == 0 || context.dataIndex == 4){
                    return new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL', maximumSignificantDigits: 3})
                    .format(value);
                  }else{
                    return '';
                  }
                },
              },
            },
          interaction: {
              intersect: false,
          },
          scales: {
              x: {
                  display: false,
                  stacked:true

              },
              y: {
                  display: false,
                  beginAtZero:true,
                  stacked:true
              }
          }
        },
    })

    const labelsLinha3 = [
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      // 'Agosto',
      // 'Setembro'
      ];



    const dataLinha3 = {
      labels: labelsLinha3,
      datasets: [{
          backgroundColor: ['#0A2C5B'],
          hoverBackgroundColor: ['#0A2C5B' ,'#126CFB'],
          hoverBorderColor: ['#0A2C5B' ,'#126CFB'],
          pointBorderColor: '#126CFB',
          pointBackgroundColor: '#126CFB',
          borderColor:'#126CFB',
          data: [459, 604, 426, 28, 70]
      }]
    };


    // const animation =
    const ctx3 = this.myChartLinha3.nativeElement;
    new Chart(ctx3, {
      type: 'line',
      data: dataLinha3,
      options: {
          animation:{
              easing: 'linear',
              duration: 2000,

          },
          plugins: {

              filler: {
                  propagate: false,
              },
              title: {
                  display: false,
              },
              legend: {
                  display: false,
                  labels:{
                    font:{
                      size: 9
                    }
                  }
              },
              datalabels:{
                // display:true,
                font:{
                  size: 8,
                },

                color:'rgb(100, 100, 100)',

                align: function(context){
                  if(context.dataIndex == 0){
                    return 'right'
                  }else{
                    return 'left'
                  }
                } ,
                anchor:'end',
                // clamp:false,
                // clip: false,
                backgroundColor:function(context){
                  if(context.dataIndex == 0){
                    return '#FFFF'
                  }else if (context.dataIndex == 4){
                    return '#FFFF'
                  }

                  return ''
                },
                offset:-4.5,

                formatter(value, context,) {
                  if(context.dataIndex == 0 || context.dataIndex == 4){
                    return new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL', maximumSignificantDigits: 3})
                    .format(value);
                  }else{
                    return '';
                  }
                },
              },
            },
          interaction: {
              intersect: false,
          },
          scales: {
              x: {
                  display: false,
                  stacked:true

              },
              y: {
                  display: false,
                  beginAtZero:true,
                  stacked:true
              }
          }
        },
    })

    const animation = {

    };

    const labelsLinha2 = [
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro'
      ];

      const dataLinha2 = {
      labels: labelsLinha2,
      datasets: [{
        backgroundColor: ['#136CFB'],
        hoverBackgroundColor: ['#136CFB' ,'#136CFB'],
        hoverBorderColor: ['#136CFB' ,'#136CFB'],
        pointBorderColor: '#136CFB',
        pointBackgroundColor: '#136CFB',
        borderColor:'#126CFB',
          data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 200.728],
    }]
    };

    new Chart(this.myChartLinha2.nativeElement, {
      type: 'bar',
      data: dataLinha2,
      options: {
        animation:{
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 600 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        plugins: {
          filler: {
              propagate: false,
          },
          title: {
              display: false,
          },
          legend: {
              display: false,
              labels:{
                font:{
                  size: 9
                }
              }
          },
          datalabels:{
            font:{
              size: 8,
            },
            color: 'rgb(100, 100, 100)',
            align:'top',
            anchor:'end',
            // padding:10,
            formatter(value, context,) {
              console.log(value, context);
              if(context.dataIndex == 0 || context.dataIndex == 6){
                let sum = 0;
                let dataArr: any[] = context.chart.data.datasets[0].data;
                dataArr.map((data: number) => {
                  sum += data;
                });
                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;
              }else{
                return '';
              }
            },

            // display: false,
          }},
          interaction: {
              intersect: false,
          },
          scales: {
              x: {
                  display: false,
                  stacked:true
              },
              y: {
                  display: false,
                  stacked:true
              }
          }
        },
    })

      const labelsColunas = [
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro'
      ];

      const dataLinhas3 = {
          labels: labelsColunas,
        //     datasets: [{
        //       backgroundColor: ['#0A2C5B'],
        //   hoverBackgroundColor: ['#0A2C5B' ,'#126CFB'],
        //   hoverBorderColor: ['#0A2C5B' ,'#126CFB'],
        //   pointBorderColor: '#126CFB',
        //   pointBackgroundColor: '#126CFB',
        //   borderColor:'#126CFB',
        //       data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 249.728],

        //       fill:false
        // }]
        datasets: [
          {
              data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 249.728],
              borderColor: '#FFC94D',
              backgroundColor:'#FFC94D',
              typeDocument: 'line',
              stack: 'combined',
          },
          {

              data: [200.568, 100.751, 5.194, 193.459, 22.604, 400.426, 240.000],
              borderColor: 'rgba(19, 108, 251, 0.2)',
              backgroundColor: 'rgba(19, 108, 251, 0.2)',
              // typeDocument: 'line',
              stack: 'combined'
          }
      ]
      };

      new Chart(this.myChartColunas.nativeElement, {
        type: "line",
        data: {
          labels: labelsColunas,
          datasets: [
            {
              // label: 'Dataset 1',
              data: [43.568, 202.751, 266.194, 193.400, 224.604, 294.426, 249.728],
              borderColor: '#136CFB',
              backgroundColor: '#136CFB',
              stack: 'combined',
              type: 'bar',
              order:1
            },
            {
              // label: 'Dataset 2',
              data: [23.568, 10.751, 5.194, 193.459, 22.604, 400.426, 240.000],
              borderColor: 'rgba(19, 108, 251, 0.2)',
              backgroundColor: 'rgba(19, 108, 251, 0.2)',
              stack: 'combined',
              order:2
            }
          ]
        },
        options: {
          animation:{
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
            plugins: {


                filler: {
                    propagate: false,
                },
                title: {
                    display: false,
                },
                legend: {
                    display: false,
                    // labels:{
                    //   boxWidth: 6,
                    //   font:{
                    //     size:8.5
                    //   }
                    // }
                },

                datalabels:{
                  align:'top',
                  anchor:'end',
                  font:{
                    size: 9
                  },

                  formatter: (value, ctx) => {

                    let sum = 0;
                    let dataArr: any[] = ctx.chart.data.datasets[0].data;
                    let dataArr2: any[] = ctx.chart.data.datasets[1].data;

                    let valueReturn;

                    if(ctx.dataIndex == 0 || ctx.dataIndex == 6){
                    dataArr.map(valor =>{

                        if(valor == value){
                          valueReturn = valor;
                        }
                    })
                    }else{
                      valueReturn = '';
                    }

                    dataArr2.map((data: number) => {
                      sum += data;

                    });

                    if(ctx.dataIndex == 0 || ctx.dataIndex == 6){
                    dataArr2.map(valor =>{

                      if(valor == value){
                          valueReturn = (value * 100 / sum).toFixed(2) + "%";
                        }

                    })}else{
                      valueReturn = '';
                    }

                    return valueReturn;

                  },
                  color: '#66666'
                }
            },
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: false,
                    stacked:true
                },
                y: {
                    display: false,
                    stacked: true,

                }

            }
          },
      })


      const labelsColunas4 = [
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro'
        ];

        const dataLinhas4 = {
            labels: labelsColunas4,
          datasets: [
            {
                data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 249.728],
                borderColor: '#FFC94D',
                backgroundColor:'#FFC94D',
                typeDocument: 'line',
                stack: 'combined',
            },
            {

                data: [200.568, 100.751, 5.194, 193.459, 22.604, 400.426, 240.000],
                borderColor: 'rgba(19, 108, 251, 0.2)',
                backgroundColor: 'rgba(19, 108, 251, 0.2)',
                // typeDocument: 'line',
                stack: 'combined'
            }
        ]
        };

        new Chart(this.myChartColunas2.nativeElement, {
          type: "line",
          data: {
            labels: labelsColunas4,
            datasets: [
              {
                // label: 'Dataset 1',
                data: [43.568, 202.751, 202.751, 202.751, 266.194, 193.400, 224.604, 294.426, 249.728],
                borderColor: '#136CFB',
                backgroundColor: '#136CFB',
                stack: 'combined',
                type: 'bar',
                order:1
              },
              {
                // label: 'Dataset 2',
                data: [23.568, 10.751,10.751,10.751, 5.194, 193.459, 22.604, 400.426, 240.000],
                borderColor: 'rgba(19, 108, 251, 0.2)',
                backgroundColor: 'rgba(19, 108, 251, 0.2)',
                stack: 'combined',
                order:2
              }
            ]
          },
          options: {
            animation:{
              onComplete: () => {
                delayed = true;
              },
              delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                  delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
              },
            },
              plugins: {


                  filler: {
                      propagate: false,
                  },
                  title: {
                      display: false,
                  },
                  legend: {
                      display: false,
                      // labels:{
                      //   boxWidth: 6,
                      //   font:{
                      //     size:8.5
                      //   }
                      // }
                  },

                  datalabels:{
                    align:'top',
                    anchor:'end',
                    font:{
                      size: 9
                    },

                    formatter: (value, ctx) => {

                      let sum = 0;
                      let dataArr: any[] = ctx.chart.data.datasets[0].data;
                      let dataArr2: any[] = ctx.chart.data.datasets[1].data;

                      let valueReturn;

                      if(ctx.dataIndex == 0 || ctx.dataIndex == 6){
                      dataArr.map(valor =>{

                          if(valor == value){
                            valueReturn = valor;
                          }
                      })
                      }else{
                        valueReturn = '';
                      }

                      dataArr2.map((data: number) => {
                        sum += data;

                      });

                      if(ctx.dataIndex == 0 || ctx.dataIndex == 6){
                      dataArr2.map(valor =>{

                        if(valor == value){
                            valueReturn = (value * 100 / sum).toFixed(2) + "%";
                          }

                      })}else{
                        valueReturn = '';
                      }

                      return valueReturn;

                    },
                    color: '#66666'
                  }
              },
              interaction: {
                  intersect: false,
              },
              scales: {
                  x: {
                      display: false,
                      stacked:true
                  },
                  y: {
                      display: false,
                      stacked: true,

                  }

              }
            },
        })

        const labelsColunas5 = [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
          ];

          const dataLinhas5 = {
              labels: labelsColunas5,
            datasets: [
              {
                  data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 249.728],
                  borderColor: '#FFC94D',
                  backgroundColor:'#FFC94D',
                  typeDocument: 'line',
                  stack: 'combined',
              },
              {

                  data: [200.568, 100.751, 5.194, 193.459, 22.604, 400.426, 240.000],
                  borderColor: 'rgba(19, 108, 251, 0.2)',
                  backgroundColor: 'rgba(19, 108, 251, 0.2)',
                  // typeDocument: 'line',
                  stack: 'combined'
              }
          ]
          };

          new Chart(this.myChartColunas3.nativeElement, {
            type: "line",
            data: {
              labels: labelsColunas5,
              datasets: [
                {
                  data: [10.780, 43.568,43.568,43.568, 202.751, 202.751, 202.751, 266.194, 193.400, 224.604, 294.426, 249.728],
                  borderColor: '#136CFB',
                  backgroundColor: '#136CFB',
                  stack: 'combined',
                  type: 'bar',
                  order:1
                },
                {
                  data: [10.200, 43.568,43.568,23.568, 10.751,10.751,10.751, 5.194, 193.459, 22.604, 400.426, 240.000],
                  borderColor: 'rgba(19, 108, 251, 0.2)',
                  backgroundColor: 'rgba(19, 108, 251, 0.2)',
                  stack: 'combined',
                  order:2
                }
              ]
            },
            options: {
              animation:{
                onComplete: () => {
                  delayed = true;
                },
                delay: (context) => {
                  let delay = 0;
                  if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                  }
                  return delay;
                },
              },
                plugins: {


                    filler: {
                        propagate: false,
                    },
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                        // labels:{
                        //   boxWidth: 6,
                        //   font:{
                        //     size:8.5
                        //   }
                        // }
                    },

                    datalabels:{
                      align:'top',
                      anchor:'end',
                      font:{
                        size: 9
                      },

                      formatter: (value, ctx) => {

                        let sum = 0;
                        let dataArr: any[] = ctx.chart.data.datasets[0].data;
                        let dataArr2: any[] = ctx.chart.data.datasets[1].data;

                        let valueReturn;

                        if(ctx.dataIndex == 0 || ctx.dataIndex == 6){
                        dataArr.map(valor =>{

                            if(valor == value){
                              valueReturn = valor;
                            }
                        })
                        }else{
                          valueReturn = '';
                        }

                        dataArr2.map((data: number) => {
                          sum += data;

                        });

                        if(ctx.dataIndex == 0 || ctx.dataIndex == 6){
                        dataArr2.map(valor =>{

                          if(valor == value){
                              valueReturn = (value * 100 / sum).toFixed(2) + "%";
                            }

                        })}else{
                          valueReturn = '';
                        }

                        return valueReturn;

                      },
                      color: '#66666'
                    }
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                        stacked:true,
                        grid:{
                          display: false,
                          drawOnChartArea: false,
                          drawBorder: false,
                        }
                    },
                    y: {
                        display: false,
                        stacked: true,

                    }

                }
              },
          })


          const labelsColunas6 = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
            ];

            const dataLinhas6 = {
                labels: labelsColunas6,
              datasets: [
                {
                    data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 249.728],
                    borderColor: '#FFC94D',
                    backgroundColor:'#FFC94D',
                    typeDocument: 'bar',
                    stack: 'combined',
                },
                {

                    data: [200.568, 100.751, 5.194, 193.459, 22.604, 400.426, 240.000],
                    borderColor: 'rgba(19, 108, 251, 0.2)',
                    backgroundColor: 'rgba(19, 108, 251, 0.2)',
                    // typeDocument: 'line',
                    stack: 'combined'
                }
            ]
            };

            new Chart(this.myChartColunas4.nativeElement, {
              type: "bar",
              data: {
                labels: labelsColunas6,
                datasets: [
                  {
                    data: [50.780, 43.568,43.568,43.568, 202.751, 202.751, 202.751, 266.194, 193.400, 224.604, 294.426, 249.728],
                    borderColor: '#136CFB',
                    backgroundColor: '#136CFB',
                    // stack: 'combined',
                    type: 'bar',
                    // order:1
                  },
                  {
                    data: [100.200, 43.568,43.568,50.568, 100.751,100.751,100.751, 50.194, 193.459, 190.604, 400.426, 240.000],
                    borderColor: 'rgba(19, 108, 251, 0.2)',
                    backgroundColor: 'rgba(19, 108, 251, 0.2)',
                    // stack: 'combined',
                    // order:2
                  },
                  {
                    data: [100.200, 430.568,53.568,43.568, 120.751,100.751,60.751, 100.194, 193.459, 220.604, 200.426, 340.000],
                    borderColor: 'rgba(19, 108, 251, 0.8)',
                    backgroundColor: 'rgba(19, 108, 251, 0.8)',
                    // stack: 'combined',
                    // order:2
                  }
                ]
              },
              options: {
                animation:{
                  onComplete: () => {
                    delayed = true;
                  },
                  delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default' && !delayed) {
                      delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                  },
                },
                  plugins: {


                      filler: {
                          propagate: false,
                      },
                      title: {
                          display: false,
                      },
                      legend: {
                          display: false,
                      },

                      datalabels:{
                        align:'center',
                        anchor:'center',
                        font:{
                          size: 9
                        },

                        // formatter: (value, ctx) => {

                        //   let sum = 0;
                        //   let dataArr: any[] = ctx.chart.data.datasets[0].data;
                        //   let dataArr2: any[] = ctx.chart.data.datasets[1].data;

                        //   let valueReturn;

                        //   if(ctx.dataIndex == 0 || ctx.dataIndex == 6){
                        //   dataArr.map(valor =>{

                        //       if(valor == value){
                        //         valueReturn = valor;
                        //       }
                        //   })
                        //   }else{
                        //     valueReturn = '';
                        //   }

                        //   dataArr2.map((data: number) => {
                        //     sum += data;

                        //   });

                        //   if(ctx.dataIndex == 0 || ctx.dataIndex == 6){
                        //   dataArr2.map(valor =>{

                        //     if(valor == value){
                        //         valueReturn = (value * 100 / sum).toFixed(2) + "%";
                        //       }

                        //   })}else{
                        //     valueReturn = '';
                        //   }

                        //   return valueReturn;

                        // },
                        color: '#66666'
                      }
                  },
                  interaction: {
                      intersect: true,
                  },
                  scales: {
                      x: {
                          display: false,
                          stacked:true
                      },
                      y: {
                          display: false,
                          beginAtZero: true,
                          stacked: true,

                      }

                  }
                },
            })

      const labelsPizza = [
        'Sudeste',
        'Centro-Oeste',
        'Nordeste',
        'Sul',
        'Norte'
        ];

        const dataPizza = {
        labels: labelsPizza,
        datasets: [{
            backgroundColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
            // borderColor: '#136CFB',
            hoverBackgroundColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
            hoverBorderColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
            data: [443.568, 266.194, 202.751, 193.459, 224.600],
        }]
        };

        new Chart(this.myChartPizza.nativeElement, {
          type: 'pie',
          data: dataPizza,
          options: {
            animation:{
              onComplete: () => {
                delayed = true;
              },
              delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                  delay = context.dataIndex * 600 + context.datasetIndex * 100;
                }
                return delay;
              },
            },
              plugins: {
                  filler: {
                      propagate: false,
                  },
                  title: {
                      display: false,
                  },
                  legend: {
                      display: true,
                      position: 'bottom',
                      labels:{
                        boxWidth: 6,
                        font:{
                          size:8.5
                        }
                      }
                  },
                  datalabels:{
                    formatter: (value, ctx) => {
                      let sum = 0;
                      let dataArr: any[] = ctx.chart.data.datasets[0].data;
                      dataArr.map((data: number) => {
                        sum += data;
                      });
                      let percentage = (value * 100 / sum).toFixed(2) + "%";
                      return percentage;
                    },
                    color: 'white'
                  }
              },
              interaction: {
                  intersect: false,
              },
              scales: {
                  x: {
                      display: false,
                  },
                  y: {
                      display: false,
                  }
              }
            },
        })
  }

}
