const savedData = JSON.parse(localStorage.getItem('userData'));
if(savedData){
    $("#userAverage").html(savedData.userAverage);
    var userResults=savedData.userResults;
    var echartsData=userResults.split(",");
    const ranges = [
        {min:100,max: 200, description: "90%" },
        {min:200,max: 300, description: "60%" },
        {min:300,max: 350, description: "15%" },
        {min:350,max: 450, description: "5%" },
        {min:400, max: 550, description: "2%" },
    ];
    for (i=0;i<ranges.length;i++) {
        if (savedData.userAverage < ranges[i].max && savedData.userAverage > ranges[i].min) {
            $("#account").html(ranges[i].description);
        }
    }
}else{
    var echartsData=[0,0,0,0,0];
}

var myCharttwo = echarts.init(document.getElementById('curvetwo'));
var option = {
    title: {
        text: '',
        textAlign: "left"
    },
    tooltip: {
        trigger: 'none', //提示框触发类型'item'（数据项触发）'axis'（坐标轴触发）'none'（不触发)
    },
    legend: {
        data: ['设备数'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',  // 增加底部空间以容纳标签
        top: '3%',
        containLabel: true
    },
    color: ['DeepSkyBlue'],
    xAxis: {
        axisLine: {
            show: false,
        },
        type: 'category',
        boundaryGap: false, //默认true
        axisLabel: {
            show:false,
            interval: 0,
            rotate: 45  // 旋转标签以防止重叠
        }
    },
    yAxis: {
        type: 'value',
        min:0,
        interval:50,
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true,
            formatter: function(value, index) {
                // 自定义格式化函数，value是当前的数据项值，index是当前的数据项索引
                return value +'ms';
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#ccc'
            }
        }
    },
    series: [
        {
            name: '',
            type: 'line',
            smooth: true,
            showSymbol: true,
            data: echartsData,  // 您的实际数据
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {
                            offset: 0,
                            color: 'rgb(193, 228, 249)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 255, 255)'
                        }
                    ]
                )
            },
            lineStyle: {
                normal: {
                    color: "rgb(4, 148, 250)",
                    width: 2
                }
            },
        }
    ]
};
myCharttwo.setOption(option);
