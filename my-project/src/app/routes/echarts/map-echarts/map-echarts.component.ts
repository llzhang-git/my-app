import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';
import 'echarts-gl';
import '../../../../assets/lib/yz.js'


@Component({
  selector: 'app-map-echarts',
  templateUrl: './map-echarts.component.html',
  styleUrls: ['./map-echarts.component.scss']
})
export class MapEchartsComponent implements OnInit {

  constructor() { }
  private geoCoordMap = {
    '中芯国际': [116.512874, 39.788658],
    '亦庄创意生活广场': [116.51093, 39.815969],
    '京东': [116.570059, 39.791678],
    '京东方': [116.558281, 39.792791],
    '力宝广场': [	116.508233, 39.811539],
    '北京市二十一世纪实验幼儿园': [116.498443, 39.800739],
    '北京市第二中学亦庄分校': [116.495241, 39.801438],
    '同仁医院亦庄院区': [116.524664, 39.780891],
    '城乡世纪广场': [116.539457, 39.807934],
    '大族广场': [116.519222, 39.798074],
    '奔驰一厂': [116.463902, 39.839657],
    '奔驰二厂': [116.513907, 39.756997],
    '奔驰发动机工厂': [116.522606, 39.740288],
    '盒马鲜生(经开店)': [116.503829, 39.79185]
  };


   convertData = (data) => {
    const res: any = [];
    for (let i = 0; i < data.length; i++) {
        const geoCoord: any = this.geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    // console.log(res);
    return res;
  }

  ngOnInit(): void {
    this.loadMap();
  }




  loadMap() {

    const option = {
        title: {
            text: '测试bar3D、scatter3D、geo3D',
            x: 'left',
            top: '10',
            textStyle: {
                color: '#000',
                fontSize: 14
            }
        },
        tooltip: {
            show: true,
      // formatter:(params)=>{
      //   let data = '测试1:'+params.name + '<br/>'+'值:'+ params.value[2]+'<br/>'+'地理坐标: [' + params.value[0]+','+params.value[1] +']';
      //   return data;
      // },
    },
    visualMap: [{
    type: 'continuous',
    seriesIndex: 0,
    text: ['bar3D'],
    calculable: true,
    max: 300,
    inRange: {
        color: ['#87aa66', '#eba438', '#d94d4c']
    }
    }, {
    type: 'continuous',
    seriesIndex: 1,
    text: ['scatter3D'],
    left: 'right',
    max: 100,
    calculable: true,
    inRange: {
        color: ['#000', 'blue', 'purple']
    }
    }],
    geo3D: {
    map: '北京经济技术开发区',
    roam: true,
    itemStyle: {
        color: '#1d5e98',
        opacity: 1,
        borderWidth: 0.4,
        borderColor: '#000'
    },
    label: {
        show: true,
        textStyle: {
              color: '#f00', // 地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: 'rgba(0,23,11,0)'
          },
      },
      emphasis: { // 当鼠标放上去  地区区域是否显示名称
        label: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: 3,
                backgroundColor: 'rgba(0,23,11,0)'
            }
        }
    },
      // shading: 'lambert',
      light: { // 光照阴影
        main: {
              color: '#fff', // 光照颜色
              intensity: 1.2, // 光照强度
              // shadowQuality: 'high', //阴影亮度
              shadow: false, // 是否显示阴影
              alpha: 55,
              beta: 10

          },
          ambient: {
            intensity: 0.3
        }
    }
    },
    series: [{
    name: 'bar3D',
    type: 'bar3D',
    coordinateSystem: 'geo3D',
      barSize: 1, // 柱子粗细
      shading: 'lambert',
      opacity: 1,
      bevelSize: 0.3,
      label: {
        show: false,
        formatter: '{b}'
    },
    data: this.convertData([{
        name: '中芯国际',
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: '亦庄创意生活广场',
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: '京东',
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: '京东方',
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: '力宝广场',
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: '北京市二十一世纪实验幼儿园',
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: '北京市第二中学亦庄分校',
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: '同仁医院亦庄院区',
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: '城乡世纪广场',
        value: (Math.random() * 200).toFixed(2)
    }, {
        name: '大族广场',
        value: (Math.random() * 200).toFixed(2)
    }, {
        name: '奔驰一厂',
        value: (Math.random() * 200).toFixed(2)
    }, {
        name: '奔驰二厂',
        value: (Math.random() * 200).toFixed(2)
    }, {
        name: '奔驰发动机工厂',
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: '盒马鲜生(经开店)',
        value: (Math.random() * 300).toFixed(2)
    }
    ]),
    }, {
    name: 'scatter3D',
    type: 'scatter3D',
    coordinateSystem: 'geo3D',
    symbol: 'pin',
    symbolSize: 30,
    opacity: 1,
    label: {
    show: false,
    formatter: '{b}'
    },
    itemStyle: {
    borderWidth: 0.5,
    borderColor: '#fff'
    },
    data: this.convertData([{
    name: '盒马鲜生(经开店)',
    value: ((Math.random() * 100) + 50).toFixed(2)
    }, {
    name: '奔驰发动机工厂',
    value: ((Math.random() * 100) + 50).toFixed(2)
    }, {
    name: '奔驰二厂',
    value: ((Math.random() * 100) + 50).toFixed(2)
    }, {
    name: '北京市第二中学亦庄分校',
    value: ((Math.random() * 100) + 50).toFixed(2)
    }, {
    name: '亦庄创意生活广场',
    value: ((Math.random() * 100) + 50).toFixed(2)
    }, {
    name: '京东',
    value: ((Math.random() * 100) + 50).toFixed(2)
    }])
    }]
    };
    echarts.init(document.getElementById('map-echarts')).setOption(option);

  }

}
