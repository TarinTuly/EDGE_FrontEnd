import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

function Homework1Component() {
    const [expression, setExpression] = React.useState(""); // State to store the input
    const [result, setResult] = React.useState(""); // State to store the result

    // Handler function to update the expression based on user input
    const handleChange = (event) => {
        const input = event.target.value; // Declare input properly
        setExpression(input);
        try {
            const r = eval(input); // Evaluate the expression
            setResult(r);
        } catch (e) {
            setResult("Invalid Expression");
        }
    };
    const[count,setcount]=React.useState(0);
    const handleIncremet=(e)=>{
        setcount(count+1);
    }
    const handleDecrement=(e)=>{
        setcount(count-1);
    }

    return (
        <div>
           <div>
           <Typography>
                Expression:
                <input 
                    type="text" 
                    value={expression} // Controlled input value
                    onChange={handleChange} // Update expression on change
                />
            </Typography>

            {/* Display the entered expression */}
            <Typography>
                Result: {result}
            </Typography>
           </div>
           <div>
            <button onClick={handleIncremet}  style={{ backgroundColor: "#A594F9", }}>Increamnet</button>
            <button onClick={handleDecrement} style={{ backgroundColor: "red" }}>Decrement</button>
            <Typography>
                {count}
            </Typography>
           </div>
        </div>
    );
}

export default Homework1Component;