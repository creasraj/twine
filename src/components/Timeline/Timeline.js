import React from "react";
import {groupArrayOfObjects} from "../../utils/utils";
import Details from "./Details";

const Timeline = ( { data, rehire } ) => {
    const result = groupArrayOfObjects(data, "terminated_date");
    let display = []
    for (const key in result) {
        display.push(<Details key={key} date={key} timelines={result[key]} rehire={rehire} />);
    }
    return (
        <div>
            {
              display
            }
        </div>

    )
}

export default Timeline;
