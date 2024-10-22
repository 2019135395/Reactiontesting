var myChart = echarts.init(document.getElementById('curve'));
var option = {
    title: {
        text: '',
        textAlign: "left" //主副标题文本水平对齐方式，可选值为’left’, ‘center’, ‘right’。
    },
    tooltip: {
        trigger: 'none', //提示框触发类型'item'（数据项触发）'axis'（坐标轴触发）'none'（不触发)
    },
    legend: {
        data: ['销量'],
    },
    /*下载功能*/

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    /*数据点颜色 and 面积颜色*/
    color: ['DeepSkyBlue', 'HotPink', 'LawnGreen', 'Gold',], //color[0]对应series[0] 深蓝色
    /*X轴*/
    xAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#ccc'
            }
        },
        type: 'category',
        /*x轴数据从原点开始*/
        boundaryGap: false, //默认true
        data: ['0ms', '25ms', '50ms', '75ms', '100ms', '125ms', '150ms', '175ms', '200ms', '225ms', '250ms', '275ms','300ms','325ms','350ms','375ms','400ms','425ms','450ms','475ms','500ms'],
        axisLabel: {
            show: true, //这里的show用于设置是否显示y轴下的字体 默认为true
            textStyle: { //textStyle里面写y轴下的字体的样式
                color: '#333',
                fontSize: 10
            },

        },
        /*轴线属性*/
        axisLine: {
            /*y轴竖线*/
            show: true, //true显示 默认false
        },
    },
    /*Y轴*/
    yAxis: {
        splitLine:false,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        /*y轴是否从最小值开始*/
        scale: true, // false从0开始
        /*是否显示y轴*/
        show:false,
        /*坐标轴类型*/
        type: 'value', //’value’（数值轴）、‘category’（类目轴）、‘time’（时间轴）、‘log’（对数轴）
        /*轴线属性*/
        axisLine: {
            /*y轴竖线*/
            show: true, //true显示 默认false
        },
    },
    /*数据系列*/
    series: [
        {
            name: '设备数：',
            type: 'line', // 'line'（折线图）、'bar'（柱状图）、'pie'（饼图）
            smooth: true, // true开启曲线
            showSymbol: true, // false关闭数据点
            endLabel: {
                show: false, // true只显示折线图最后一个数据
            },
            data: [0, 0, 0, 0, 0,0,5, 20, 50, 70, 60, 45, 25,15,10,5,4,3,2,1,0],
            /*折线下方面积渐变*/
            areaStyle: {
                opacity: 1.2,
                color: new echarts.graphic.LinearGradient( //渐变色
                    0, 0, 0, 1,
                    [ //0->1渐变
                        {
                            offset: 0,
                            color: 'rgb(193, 228, 249)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 255, 255)'
                        }
                    ])
            },
            lineStyle: { // 折线颜色
                normal: {
                    color: "rgb(4, 148, 250)", // 折线颜色
                    width: 2 // 折线宽度
                }
            },
        },
//其他数据图
        {}
    ]
};
/*方法自调用*/
myChart.setOption(option);


