import { Row, Col, Card, Badge, Statistic } from "antd"
function All() {
    return <div>
        <Row gutter={16}>
            <Col span={18}>
                <Card>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Statistic title="Total Articles" value={1588} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="Prospective Clients" value={235} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="Resident Enterprises" value={766} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="Park Users" value={6988} />
                        </Col>
                    </Row>
                </Card>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card className="mt">
                            <Card title="To-Do Items" extra={<a href="#">More&gt;</a>} >
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="Contract signing pending" />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="Charging station repair request" />
                                    <span style={{ color: "#666" }}>2024-03-12</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="Air conditioning fee collection" />
                                    <span style={{ color: "#666" }}>2024-03-22</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Tenant property fee reminder" />
                                    <span style={{ color: "#666" }}>2024-04-01</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Follow-up with potential clients" />
                                    <span style={{ color: "#666" }}>2024-04-07</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Park cleaning notes" />
                                    <span style={{ color: "#666" }}>2024-05-02</span>
                                </div>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className="mt">
                            <Card title="Latest Updates"
                                extra={<a href="#">More&gt;</a>}>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="Building economic circle together, reaching..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="Ten major industrial investment projects..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="New energy policy released, is it good or..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="How to determine liability for accidents..." />
                                    <span style={{ color: "#666" }}>2024-04-01</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Important notice about charging station use..." />
                                    <span style={{ color: "#666" }}>2024-04-07</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Important notice about charging station use..." />
                                    <span style={{ color: "#666" }}>2024-05-02</span>
                                </div>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Card title="Top Quality Enterprises">
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>1. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>2. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>3. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>4. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>5. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>6. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>7. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>8. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>9. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>10. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>11. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div><div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>12. Wanwu Technology Co., Ltd.</p>
                        <p>Staff: 87</p>
                        <p>Value: 8600 (10K)</p>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
}

export default All