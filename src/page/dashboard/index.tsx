import { DollarOutlined, LaptopOutlined, RadarChartOutlined, SnippetsOutlined } from "@ant-design/icons"
import { Card, Col, Progress, Row, Statistic, Tag, Timeline } from "antd"
import ReactECharts from "echarts-for-react"
import { useEffect, useState } from "react"
import { getEnergyData } from "../../api/dashboard"
import "./index.scss"
const option2 = {
    title: {
        text: 'Enterprise Qualification(units)'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top: '30px'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '80px',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: [0, 0.01],
        data: ['2014', '2016', '2018', '2020', '2022', "2024"]
    },
    yAxis: {
        type: 'value',

    },
    series: [
        {
            name: 'Technology Enterprise',
            type: 'bar',
            data: [40, 220, 378, 658, 1122, 1200]
        },
        {
            name: 'High-tech Enterprise',
            type: 'bar',
            data: [20, 39, 443, 490, 559, 762]
        },
        {
            name: 'State-owned Enterprise',
            type: 'bar',
            data: [78, 167, 229, 330, 380, 420]
        }
    ]
};
const option3 = {
    legend: {
        top: '10px'
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [30, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 40, name: 'In operation' },
                { value: 38, name: 'Rented' },
                { value: 32, name: 'Renting' },
                { value: 30, name: 'Renewal' },
                { value: 28, name: 'New lease' },
                { value: 26, name: 'Waiting for rent' },
                { value: 22, name: 'Unsubscribe' },
            ]
        }
    ]
};
function Dashboard() {
    const initalOption = {
        title: {
            text: 'Energy Consumption'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [],
            top: '30px'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '80px',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00', '24:00']
        },
        yAxis: {
            type: 'value'
        },
        series: []
    };
    const [data, setData] = useState(initalOption)
    useEffect(() => {
        const loadData = async () => {
            const { data: apiData } = await getEnergyData();
            const dataList = apiData.map((item: any) => ({
                name: item.name,
                data: item.data,
                type: "line",
                stack: "Total"
            }));
            const updataOption = {
                ...data,
                legend: {
                    data: dataList.map((item: any) => item.name),
                    top: '30px'
                },
                series: dataList
            }
            setData(updataOption)
        }
        loadData()
    }, [])

    return <div className="dashboard">
        <Row gutter={16}>
            <Col span={6}>
                <Card className="clearfix">
                    <div className="fl area">
                        <h2>13479</h2>
                        <p>Total area(square meters)</p>
                    </div>
                    <div className="fr">
                        <RadarChartOutlined className="icon" />
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card className="clearfix">
                    <div className="fl area">
                        <h2>8635</h2>
                        <p>Total leased area(square meters)</p>
                    </div>
                    <div className="fr">
                        <SnippetsOutlined className="icon" style={{ color: "#81c452" }} />
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card className="clearfix">
                    <div className="fl area">
                        <h2>38764</h2>
                        <p>Total(ten thousand dollar)</p>
                    </div>
                    <div className="fr">
                        <DollarOutlined className="icon" style={{ color: "#62c9cb" }} />
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card className="clearfix">
                    <div className="fl area">
                        <h2>2874</h2>
                        <p>Total number of enterprises</p>
                    </div>
                    <div className="fr">
                        <LaptopOutlined className="icon" style={{ color: "#e49362" }} />
                    </div>
                </Card>
            </Col>
        </Row>
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card title="Consumption">
                    <ReactECharts option={data}></ReactECharts>
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Enterprise Qualification">
                    <ReactECharts option={option2}></ReactECharts>
                </Card>
            </Col>
        </Row>
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card title="Lease Situation">
                    <ReactECharts option={option3}></ReactECharts>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Charging Station Idle Statistics">
                    <div className="wrap">
                        <Progress type="circle" percent={75} />
                        <Statistic title="Total Charging Stations" value={75} suffix="/ 100" className="mt"/>
                    </div>

                </Card>
            </Col>
            <Col span={6}>
                <Card title="Real-time Vehicle Information" style={{height:"406px"}}>
                    <Timeline items={[
                        {
                            children: <><Tag color="green">Enter</Tag>08:24 vehicle BJ-A66666</>
                        },
                        {
                            children: <><Tag color="red">Exit</Tag>09:15 vehicle BJ-A66666  </>,
                            color: 'red',
                        },
                        {
                            children: <><Tag color="green">Enter</Tag>09:22 vehicle BJ-A23456  </>,
                        },
                        {
                            children: <><Tag color="red">Exit</Tag>10:43 vehicle BJ-A18763  </>,
                            color: 'red',
                        },
                        {
                            children: <><Tag color="green">Enter</Tag>13:38 vehicle BJ-A88888  </>,
                        },
                        {
                            children: <><Tag color="green">Enter</Tag>14:46 vehicle BJ-A23456  </>,

                        },
                    ]}/>
                        
                </Card>
            </Col>
        </Row>
    </div>
}

export default Dashboard