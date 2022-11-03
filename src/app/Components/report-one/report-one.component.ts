import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Chart, registerables, ChartConfiguration} from 'chart.js';
import { PostService } from 'src/app/post.service';
// import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import plugin from 'chartjs-plugin-datalabels';
import * as XLSX from 'xlsx';





@Component({
  selector: 'app-report-one',
  templateUrl: './report-one.component.html',
  styleUrls: ['./report-one.component.css']
})
export class ReportOneComponent implements OnInit {

  @ViewChild('meuCanvasOne', {static:true }) elemento: ElementRef;
  @ViewChild('myChartLinha', {static:true }) myChartLinha: ElementRef;
  @ViewChild('myChartLinha2', {static:true }) myChartLinha2: ElementRef;
  @ViewChild('myChartColunas', {static:true }) myChartColunas: ElementRef;
  @ViewChild('myChartPizza', {static:true }) myChartPizza: ElementRef;
  @ViewChild('myChartColum2', {static:true }) myChartColum2: ElementRef;
  @ViewChild('myChartColum22', {static:true }) myChartColum22: ElementRef;
  @ViewChild('mapa', {static:true }) mapa: ElementRef;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  POSTS2: any;
  page2: number = 1;
  count2: number = 0;
  tableSize2: number = 10;
  tableSizes2: any = [3, 6, 9, 12];

  POSTS_ocult: any;
  page_ocult: number = 1;
  count_ocult: number = 1;
  tableSize_ocult: number = 10;
  tableSizes_ocult: any = [3, 6, 9, 12];

  POSTS_ocult2: any;
  page_ocult2: number = 1;
  count_ocult2: number = 1;
  tableSize_ocult2: number = 10;
  tableSizes_ocult2: any = [3, 6, 9, 12];

  constructor(private postService: PostService) {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
  }

  fileName="ExcelRelatorio1.xlsx"
  fileName2="ExcelRelatorio2.xlsx"



  ngOnInit(): void {

    this.fetchPosts_ocult();
    this.fetchPosts_ocult2();
    this.fetchPosts2();
    this.fetchPosts();


    // Doughnut


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




        const labelsColum2 = [
          'Rodonaves',
          'Allied',
          'Hilti',
          'Dailus',
          'Clique'
          ];

          const dataColum2 = {
          labels: labelsColum2,
          datasets: [{
              backgroundColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
              hoverBackgroundColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
            hoverBorderColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
              data: [708.029, 419.743, 346.958, 243.000, 200.600],
          }]
          };


          new Chart(this.myChartColum2.nativeElement, {
            type: 'bar',
            data: dataColum2,
            options: {
              animation:{
                duration: 2000,
                easing:'easeInBack'
              },
                indexAxis: 'y',
                plugins: {
                    filler: {
                        propagate: false,
                    },
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                        position: 'bottom',
                    }
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                        stacked:true
                    },
                    y: {
                        display: true,
                        stacked:true
                    }
                }
                },
          })


  }

  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  /////////////////////////////////////////

  fetchPosts2(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS2 = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange2(event: any) {
    this.page2 = event;
    this.fetchPosts2();
  }
  onTableSizeChange2(event: any): void {
    this.tableSize2 = event.target.value;
    this.page2 = 1;
    this.fetchPosts2();
  }

  /////////////////////////////////////////

  fetchPosts_ocult(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS_ocult = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange_ocult(event: any) {
    this.page_ocult = event;
    this.fetchPosts();
  }
  onTableSizeChange_ocult(event: any): void {
    this.tableSize_ocult = event.target.value;
    this.page_ocult = 1;
    this.fetchPosts_ocult();
  }

  /////////////////////////////////////////

  fetchPosts_ocult2(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS_ocult2 = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange_ocult2(event: any) {
    this.page_ocult2 = event;
    this.fetchPosts();
  }
  onTableSizeChange_ocult2(event: any): void {
    this.tableSize_ocult2 = event.target.value;
    this.page_ocult2 = 1;
    this.fetchPosts_ocult2();
  }

  /////////////////////////////////

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  exportexcel2(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-2');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName2);

  }

}
