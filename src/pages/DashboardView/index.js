import React from "react";
import { Tabs, Typography } from "antd";
import { rehireEligibleEmployees, rehireInellgibleEmployees, rehireUnknownEmployees  } from '../../mockEmployees';
import AttritionTimeline from "../../components/Timeline/Timeline";

const { Title } = Typography;
const { TabPane } = Tabs;

const calculateFlag = (data, isEligible, isIneligible, isUnknown) => {
   if (isEligible) {
      return data.filter((e) => e.rehire_eligible === true).length > 0;
   } else if (isIneligible) {
      return data.filter((e) => e.rehire_eligible === false).length > 0;
   } else if (isUnknown) {
     return data.filter((e) => e.rehire_eligible === null).length > 0;
   }
   return false;
}

const DashboardView = () => {

  const isEligibleEnabled = calculateFlag(rehireEligibleEmployees, true, false, false);
  const isIneligibleEnabled = calculateFlag(rehireInellgibleEmployees, false, true, false);
  const isUnknownEnabled = calculateFlag(rehireUnknownEmployees, false, false, true);

  return (
    <div>
      <Title level={1}>DASHBOARD</Title>
        <Tabs defaultActiveKey="1">
            <TabPane tab="Rehire Eligible" key="1" disabled={!isEligibleEnabled}>
                <AttritionTimeline data={rehireEligibleEmployees} rehire={true} />
            </TabPane>
            <TabPane tab="Rehire Ineligible" disabled={!isIneligibleEnabled} key="2">
                <AttritionTimeline data={rehireInellgibleEmployees} rehire={false} />
            </TabPane>
            <TabPane tab="Rehire unknown" key="3" disabled={!isUnknownEnabled}>
                <AttritionTimeline data={rehireUnknownEmployees} rehire={false} />
            </TabPane>
        </Tabs>
    </div>
  );
};

export default DashboardView;
