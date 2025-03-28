import { Card,Table,Button,Row,Col,Input,Tag } from "antd"
import type { TableProps } from 'antd';
interface DataType {
    key: string;
    orderNo: string;
    name: string;
    tel: string;
    address: string;
    description: string;
    status: string;
    time: string;
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Repair Order No.',
        dataIndex: 'orderNo',
        key: 'orderNo',

    },
    {
        title: 'Requester',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Requester Phone',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Repair Address',
        dataIndex: 'address',
        key: 'address',

    },
    {
        title: 'Issue Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Repair Status',
        dataIndex: 'status',
        key: 'status',
        render:(text,record)=>{
            if(text==1){
                return  <Tag color="#f50">Pending Repair</Tag>
            }else if(text==2){
                return  <Tag color="#2db7f5">In Progress</Tag>
            }else{
                return  <Tag color="green">Completed</Tag>
            }
        }
    },
    {
        title: 'Request Time',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Operation',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            if(record.status=="1"){
                return <>
                <Button type="primary" size="small">Assign</Button>
            </>
            }else if(record.status=="2"){
                return <>
                 <a >In progress...</a>
            </>
            }else{
                return  <Button type="primary" size="small">Complete</Button>
            }

           
        }
    },

];

const data: DataType[] = [
    {
        key: '1',
        orderNo: 'BX1236984',
        name: "Liu Kuan",
        tel: '13498765432',
        address: "Building A2, Office 502",
        description: "Air conditioning cooling issue, intermittent cooling with poor performance",
        status: "1",
        time: "2024-05-30 13:37",
    },
    {
        key: '2',
        orderNo: 'BX1236984',
        name: "Liu Kuan",
        tel: '13498765432',
        address: "Building A2, Office 502",
        description: "Air conditioning cooling issue, intermittent cooling with poor performance",
        status: "2",
        time: "2024-05-30 13:37",
    },
    {
        key: '3',
        orderNo: 'BX1236984',
        name: "Liu Kuan",
        tel: '13498765432',
        address: "Building A2, Office 502",
        description: "Air conditioning cooling issue, intermittent cooling with poor performance",
        status: "3",
        time: "2024-05-30 13:37",
    },
    {
        key: '4',
        orderNo: 'BX1236984',
        name: "Liu Kuan",
        tel: '13498765432',
        address: "Building A2, Office 502",
        description: "Air conditioning cooling issue, intermittent cooling with poor performance",
        status: "1",
        time: "2024-05-30 13:37",
    },
    {
        key: '5',
        orderNo: 'BX1236984',
        name: "Liu Kuan",
        tel: '13498765432',
        address: "Building A2, Office 502",
        description: "Air conditioning cooling issue, intermittent cooling with poor performance",
        status: "3",
        time: "2024-05-30 13:37",
    },
    {
        key: '6',
        orderNo: 'BX1236984',
        name: "Liu Kuan",
        tel: '13498765432',
        address: "Building A2, Office 502",
        description: "Air conditioning cooling issue, intermittent cooling with poor performance",
        status: "2",
        time: "2024-05-30 13:37",
    },

];
function Repair(){
    return <div>
        <Card>
            <Row>
                <Col span={8}>
                    <Input placeholder="Enter repair order number" />
                </Col>
                <Col span={8}>
                    <Button type='primary' className='ml'>Search</Button>
                </Col>
            </Row>

        </Card>
        <Card className="mt">
            <Table dataSource={data} columns={columns}/>
        </Card>
    </div>
}

export default Repair