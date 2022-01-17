import React from "react";
import { Typography } from "antd";
import { Form, Row, Col, Button, Input } from 'antd';
import Slider from "../../components/Slider";
import withContext from "../../hoc/hoc";

const { Title } = Typography;

const CpoHqPollsView = (props) => {
    const { counterItems, removeFromCounter, addToCounter, incrementCounter, decrementCounter, updateCounterName } = props.context;
    return (
        <div>

            <Row gutter={24}>
                <Col xs={6}>
                    <Slider counters={counterItems}
                            removeFromCounter={removeFromCounter}
                            decrementCounter={decrementCounter}
                            incrementCounter={incrementCounter}
                            addToCounter={addToCounter}
                            updateCounterName={updateCounterName}
                    />
                </Col>
                <Col xs={18}>
                    <Title level={1}>CPOHQ Polls</Title>
                </Col>
            </Row>
        </div>
    );
};

export default withContext(CpoHqPollsView);
