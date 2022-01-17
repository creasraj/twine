import React, {useState} from "react";
import BoxFill from "../Common/BoxFill";
import {Card, Col, Row} from "antd";
import Title from "antd/es/typography/Title";
import Modal from "antd/es/modal/Modal";

const Details = ( { date, timelines, rehire }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [content, setContent] = useState();

    const showModal = (res, popUp) => {
        setContent(modalContent(res, popUp));
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setContent('');
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setContent('');
        setIsModalVisible(false);
    };

    const modalContent = (res, popUp) => {
        return <>
            <Row>
                <Col span={2}>
                    <BoxFill voluntary={res.voluntary} rehire={rehire}/>
                </Col>
                <Col>
                    {
                        res.name + ", " + res.position
                    }
                </Col>
            </Row>

            {
                popUp && (
                    <>
                        <Row>
                            <Col span={7}><br/></Col>
                        </Row>
                        <Row>
                            <Col>
                                Go to
                                {
                                    <a href={res.profile_link} target={"_blank"}> {res.name}</a>
                                }
                                { " " }profile
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7}><br/></Col>
                        </Row>
                        <Row>
                            <Col>
                                {
                                    res.termination_reason === null ? 'No recorded termination reason' : res.termination_reason
                                }
                            </Col>
                        </Row>
                    </>
                )}
        </>
    }

    return (
        <div>
            <Title level={5}>
                {date}
            </Title>

            {
                timelines && timelines.map((res) => (
                    <div style={{padding: "20px"}}>
                        <Card
                            hoverable
                            style={{width: 440}}
                            onClick={() => showModal(res, true)}
                        >
                            {
                                modalContent(res)
                            }

                        </Card>
                    </div>
                ))
            }
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                    {
                        content
                    }

            </Modal>
        </div>
    )
}

export default Details;
