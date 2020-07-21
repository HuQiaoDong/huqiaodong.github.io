var myChart = echarts.init(document.getElementById('main'));
        option = {
            title: {
                top:20,
                left:20,
                text: '公司负面新闻占比',
                subtext: '从高到低前十'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            // toolbox: {
            //     feature: {
            //         dataView: {
            //             readOnly: false
            //         },
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            legend: {
                data: ['展现', '点击', '访问', '咨询', '订单']
            },

            series: [{
                name: '漏斗图',
                type: 'funnel',
                left: '5%',
                top: 100,
                //x2: 80,
                bottom: 60,
                width: '90%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b} : {c}%'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    // normal: {
                    //     label: {
                    //         show: true,
                    //         formatter: '{b} : {c} ({d}%)'
                    //     },
                    //     // labelLine: {
                    //     //     show: true
                    //     // }
                    // }
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [{
                        value: 80,
                        name: '公司3'
                    },
                    {
                        value: 70,
                        name: '公司4'
                    },
                    {
                        value: 60,
                        name: '公司5'
                    },
                    {
                        value: 90,
                        name: '公司2'
                    },
                    {
                        value: 100,
                        name: '公司1'
                    },
                    {
                        value: 50,
                        name: '公司6'
                    },
                    {
                        value: 40,
                        name: '公司7'
                    },
                    {
                        value: 30,
                        name: '公司8'
                    },
                    {
                        value: 20,
                        name: '公司9'
                    },
                    {
                        value: 10,
                        name: '公司10'
                    },
                ]
            }]
        };
        myChart.setOption(option);