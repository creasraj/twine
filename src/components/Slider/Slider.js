import React from "react";
import {Button, Row, Col, Divider} from 'antd';
import {DeleteFilled, UpCircleFilled, DownCircleFilled, PlusCircleFilled} from '@ant-design/icons';
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const Slider = ( { counters, addToCounter, removeFromCounter, decrementCounter, incrementCounter, updateCounterName }) => {

   return <>
       { counters && counters.map((counter, index) => (
       <>
       <Row key={index}>
           <Col span={5}>
               <Paragraph editable={{ onChange: (e) => updateCounterName(counter, e) }}>
                   { counter.name }
               </Paragraph>
           </Col>
           <Col span={3}>
               <Title level={5}>{counter.counter}</Title>
           </Col>
           <Col span={3}>
               <Button type="primary" onClick={()=>removeFromCounter(counter)}>
                   <DeleteFilled />
               </Button>
           </Col>
       </Row>
       <Row>
           <Col span={3}>
             <Button type="primary" shape={"circle"} onClick={()=>incrementCounter(counter)}>
               <UpCircleFilled />
             </Button>
           </Col>
           <Col span={3}>
               <Button type="primary" shape={"circle"} onClick={()=>decrementCounter(counter)}>
                   <DownCircleFilled />
               </Button>
           </Col>
       </Row>
           <Row>
               <Divider type="horizontal" />
           </Row>
       </>
      ))}

       <Row gutter={20}>
           <Col span={6}>
               <Button type="primary" icon={<PlusCircleFilled />} onClick={()=> addToCounter(undefined)}>
                   Add
               </Button>
           </Col>
       </Row>
    </>
}

export default Slider;
