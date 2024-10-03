import { Typography } from "@mui/material";
import React from "react";
import Component_03_10 from "./Component_03_10";
import FirstComponent from "./FirstComponent";

function ConditionalRendaring(props) {
  return (
    <div>
      {props.StudentInfo.map((student) => (
        <div key={student.id}> {/* Added key prop */}
          {/* Conditional rendering of Component_03_10 */}
          <div>{student.age > 25 ? <FirstComponent/> : null}</div>
        </div>
      ))}
    </div>
  );
}

export default ConditionalRendaring;


{/* {student.age>25 && (
            <Typography>
                {student.name}
            </Typography>
           )} */}
