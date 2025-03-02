import { Card,Button,Descriptions } from "antd"
import { useNavigate,useSearchParams} from "react-router-dom"
import type { DescriptionsProps } from "antd";
const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Contract Type',
        children: 'Lease Contract',
    },
    {
        key: '2',
        label: 'Contract Name',
        children: 'General Property Lease Contract Template',
    },
    {
        key: '3',
        label: 'Contract Start Date',
        children: '2023-03-05',
    },
    {
        key: '4',
        label: 'Contract End Date',
        children: '2024-03-05',
    },
    {
        key: '5',
        label: 'Party A',
        children: 'Wanwu Technology Co., Ltd.',
    },
    {
        key: '6',
        label: 'Party B',
        children: "Tianming Property Management Co., Ltd.",
        span: 3,
    },
    {
        key: '7',
        label: 'Approval Status',
        children: 'Rejected',
    },
    {
        key: '8',
        label: 'Rejection Reason',
        children: 'Missing legal representative seal',
    },
    {
        key: '9',
        label: 'Contact Information',
        children: '18888888888',
    },
    {
        key: '10',
        label: 'Additional Terms',
        children: (
            <>
                1. Semi-annual payment, annual lease
                <br />
                2. Fees include air conditioning costs 
                <br />
                3. Includes usage rights for two parking spaces (charging stations not included)
                <br />
                4. Renovations prohibited between 9:00-18:00

            </>
        ),
    },
];

const items2: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Building',
        children: 'Building A1 Office',
    },
    {
        key: '2',
        label: 'Room Number',
        children: '406',
    },
    {
        key: '3',
        label: 'Room Area',
        children: '96㎡',
    },
    {
        key: '4',
        label: 'Billable Area',
        children: '70㎡',
    },
    {
        key: '5',
        label: 'Property Fee',
        children: '6800',
    },
    {
        key: '6',
        label: 'Room Condition',
        children: "Furnished",
    },
    {
        key: '7',
        label: 'Property Manager',
        children: 'Cai Wenping',
    },
    {
        key: '8',
        label: 'Manager Phone',
        children: '17777777777',
    },
];
function Surrender(){
    const navigate=useNavigate()
    const [searchParams]=useSearchParams()
    return <div>
        <Card>
            <Button type="primary" onClick={()=>navigate("/finance/contract?return=true")}>Return</Button>
        </Card>
        <Card className="mt">
            <Descriptions title={`Contract Number: ${searchParams.get("contractNo")}`} bordered items={items}/>
            <Descriptions title="Leased Room Information" bordered items={items2} className="mt"/>
        </Card>
    </div>
}

export default Surrender