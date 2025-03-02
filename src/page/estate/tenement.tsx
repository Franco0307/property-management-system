import type { TableProps } from "antd";
import { Badge, Button, Card, Col, Input, Progress, Row, Table, Tag } from "antd";

interface DataType{
    key:string;
    name:string;
    person:string;
    tel:string;
    status:string;
    vacancyRate:number;
    propertyFee:string;
}

const columns:TableProps<DataType>['columns']=[
    {
        title:"No.",
        key:"index",
        render:(value,record,index)=>index+1
    },
    {
        title:"Building Name",
        dataIndex:"name",
        key:"name"
    },
    {
        title:"Person in Charge",
        dataIndex:"person",
        key:"person"
    },
    {
        title:"Contact Number",
        dataIndex:"tel",
        key:"tel"
    },
    {
        title:"Status",
        dataIndex:"status",
        key:"status",
        render:(value)=>{
            if(value==1){
                return <Tag color="#f50">Under Construction</Tag>
            }else if(value==2){
                return <Tag color="#2db7f5">Completed</Tag>
            }else{
                return <Tag color="#87d068">In Use</Tag>
            }
        }
    },
    {
        title:"Vacancy Rate",
        dataIndex:"vacancyRate",
        key:"vacancyRate",
        render(value){
            return <Progress percent={value} status="active" />
        }
    },
    {
        title:"Property Fee Rate",
        dataIndex:"propertyFee",
        key:"propertyFee",
        render(value){
            return <Badge color="green" text={value}></Badge>
        }
    },
    {
        title:"Operation",
        key:"operate",
        render(value){
            return <>
                <Button type="primary" className="mr">Edit</Button>
                <Button type="primary" danger>Delete</Button>
            </>
        }
    },
]
const data: DataType[] = [
    {
        key: '1',
        name: 'Building A1 Office',
        person: "John Smith",
        tel: '16654789654',
        status: "1",
        vacancyRate: 60,
        propertyFee:"3.5%",
    },
    {
        key: '2',
        name: 'Building A2 Office',
        person: "Emily Johnson",
        tel: '13698756669',
        status: "2",
        vacancyRate: 40,
        propertyFee:"3.8%",
    },
    {
        key: '3',
        name: 'Building B1 Office',
        person: "Michael Brown",
        tel: '15587966698',
        status: "3",
        vacancyRate: 20,
        propertyFee:"3.1%",
    },
    {
        key: '4',
        name: 'Building B2 Office',
        person: "Sarah Davis",
        tel: '13698756324',
        status: "3",
        vacancyRate: 30,
        propertyFee:"4.0%",
    },
    {
        key: '5',
        name: 'Building C1 Office',
        person: "Robert Wilson",
        tel: '19878965444',
        status: "3",
        vacancyRate: 50,
        propertyFee:"3.5%",
    },
    {
        key: '6',
        name: 'Building C2 Office',
        person: "Jennifer Taylor",
        tel: '13369888562',
        status: "3",
        vacancyRate: 10,
        propertyFee:"2.9%",
    },
    {
        key: '7',
        name: 'Tianhui International Building Tower A',
        person: "David Miller",
        tel: '13578549687',
        status: "3",
        vacancyRate: 25,
        propertyFee:"3.7%",
    },
    {
        key: '8',
        name: 'Times Financial Plaza',
        person: "Jessica Anderson",
        tel: '18745889874',
        status: "3",
        vacancyRate: 15,
        propertyFee:"3.3%",
    },
    
];
function Tenement(){
    return <div>
        <Card className="search">
            <Row gutter={16}>
                <Col span={4}>
                    <p>Building Name:</p>
                    <Input></Input>
                </Col>
                <Col span={4}>
                    <p>Person in Charge:</p>
                    <Input></Input>
                </Col>
                <Col span={4}>
                    <Button className="mr" type="primary">Search</Button>
                    <Button>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={data}
            />
        </Card>
    </div>
}

export default Tenement