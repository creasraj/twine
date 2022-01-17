import React, {useContext} from "react";
import { Typography } from "antd";
import { Row, Col,} from 'antd';
import withContext from "../../hoc/hoc";
import Slider from "../../components/Slider";

const { Title } = Typography;

const CpoHqForumView = (props) => {
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
                <Title level={1}>CPOHQ Forum</Title>
            </Col>
        </Row>
    </div>
  );
};

export default withContext(CpoHqForumView);
