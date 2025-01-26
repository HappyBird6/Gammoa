let myChart;
const LevelData = async function() {
    var LevelData = [];
    try{
        const response = await fetch('/getLevelChart',{
            method:'POST'
        });
        const data = await response.json();
        for(let i=0;i<data.length;i++){
            LevelData.push(data[i]);
        }
    } catch (error){
        console.log(error);
    }
    return LevelData;
}

const LevelRanking = async function(){
    var LvlRankTable = [];
    try{
        const response = await fetch('/getLevelTable',{
            method:'POST'
        });
        const data = await response.json();
        for(let i=0;i<data.length;i++){
            LvlRankTable.push(data[i]);
        }
    } catch (error){
        console.log(error);
    }
    return LvlRankTable;
}

const WinRateData = async function() {
    var WinRateData = [];
    try{
        const response = await fetch('/getWinRateChart',{
            method:'POST'
        });
        const data = await response.json();
        for(let i=0;i<data.length;i++){
            WinRateData.push(data[i]);
        }
    } catch (error){
        console.log("에러");
    }
    return WinRateData;
}

const WinRateRanking = async function(){
    var WrRankTable = [];
    try{
        const response = await fetch('/getWinRateTable',{
            method:'POST'
        });
        const data = await response.json();
        for(let i=0;i<data.length;i++){
            WrRankTable.push(data[i]);
        }
    } catch (error){
        console.log(error);
    }
    return WrRankTable;
}

const PointData = async function() {
    var PointData = [];
    try{
        const response = await fetch('/getPointChart',{
            method:'POST'
        });
        const data = await response.json();
        for(let i=0;i<data.length;i++){
            PointData.push(data[i]);
        }
    } catch (error){
        console.log("에러");
    }
    return PointData;
}

const PointRanking = async function(){
    var PointRankTable = [];
    try{
        const response = await fetch('/getPointTable',{
            method:'POST'
        });
        const data = await response.json();
        for(let i=0;i<data.length;i++){
            PointRankTable.push(data[i]);
        }
    } catch (error){
        console.log(error);
    }
    return PointRankTable;
}

const LevelChart = async function() {
    if(myChart){
        myChart.destroy();
    }
    let Level = await LevelData();
    myChart = new Chart(
        document.getElementById('levels'),
        {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: '레벨 구간 별 유저수',
                        data: ({'1~5':Level[0], '6~10':Level[1], '11~15':Level[2], '16~20':Level[3], '21~25':Level[4], '26~30':Level[5], '31~35':Level[6], '36~40':Level[7], '41~45':Level[8], '46~50':Level[9], '51~55':Level[10], '56~60':Level[11], '61~65':Level[12], '66~70':Level[13], '71~75':Level[14], '76~80':Level[15], '81~85':Level[16], '86~90':Level[17], '91~95':Level[18], '96~':Level[19]}),
                        borderColor: 'rgb(75, 0, 192)',
                        fill: false,
                        stepped: false,
                        backgroundColor: 'skyblue',
                        type:'bar'
                    }
                ]
                },
            options: {
                responsive: false,
                interaction: {
                    intersect: false,
                    axis: 'x',
                },
                plugins: {
                    title: {
                        display: true,
                        text: (ctx) => '레벨 구간 별 유저 분포도',
                        color:'white'
                    },
                    legend:{
                        display : false
                    }
                },
                scales: {
                    x: {
                        ticks:{
                            major:{
                                enabled:true
                            },
                            color:'lightgrey',

                        }
                    },
                    y: {
                        ticks:{
                            major:{
                                enabled:true
                            },
                            color:'lightgrey',

                        }
                    }
                }
            }
        });
}

const WinRateChart = async function() {
    let WinRate = await WinRateData();
    var WinChart = new Chart(
        document.getElementById('win'),
        {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: '승률 별 유저수',
                        data: ({0:WinRate[0], 5:WinRate[1], 10:WinRate[2], 15:WinRate[3], 20:WinRate[4], 25:WinRate[5], 30:WinRate[6], 35:WinRate[7], 40:WinRate[8], 45:WinRate[9], 50:WinRate[10], 55:WinRate[11], 60:WinRate[12], 65:WinRate[13], 70:WinRate[14], 75:WinRate[15], 80:WinRate[16], 85:WinRate[17], 90:WinRate[18], 95:WinRate[19]}),
                        borderColor: 'rgb(75, 0, 192)',
                        fill: false,
                        stepped: false,
                        backgroundColor: 'skyblue',
                        type:'bar'
                    }
                ]
                },
            options: {
                responsive: false,
                interaction: {
                    intersect: false,
                    axis: 'x'
                },
                plugins: {
                    title: {
                        display: true,
                        text: (ctx) => '승률 별 유저 분포도',
                        color:'white'
                    },
                    legend:{
                        display : false
                    }
                },
                scales: {
                    x: {
                        ticks:{
                            major:{
                                enabled:true
                            },
                            color:'lightgrey',

                        }
                    },
                    y: {
                        ticks:{
                            major:{
                                enabled:true
                            },
                            color:'lightgrey',

                        }
                    }
                }
            }
        });
}

const PointChart = async function() {
    let Point = await PointData();
    var PointChart = new Chart(
        document.getElementById('point'),
        {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: '포인트 보유 별 유저수',
                        data: ({'0~150':Point[0], '150~300':Point[1], '300~450':Point[2], '450~600':Point[3], '600~750':Point[4], '750~900':Point[5], '900~1050':Point[6], '1050~1200':Point[7], '1200~1350':Point[8], '1350~1500':Point[9], '1500~1650':Point[10], '1650~1800':Point[11], '1800~1950':Point[12], '1950~':Point[13]}),
                        borderColor: 'rgb(75, 0, 192)',
                        fill: false,
                        stepped: false,
                        backgroundColor: 'skyblue',
                        type:'bar'
                    }
                ]
                },
            options: {
                responsive: false,
                interaction: {
                    intersect: false,
                    axis: 'x'
                },
                plugins: {
                    title: {
                        display: true,
                        text: (ctx) => '포인트 보유량 유저 분포도',
                        color:'white'
                    },
                    legend:{
                        display : false
                    }
                },
                scales: {
                    x: {
                        ticks:{
                            major:{
                                enabled:true
                            },
                            color:'lightgrey',

                        }
                    },
                    y: {
                        ticks:{
                            major:{
                                enabled:true
                            },
                            color:'lightgrey',

                        }
                    }
                }
            }
        });
}