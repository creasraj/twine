import React from "react";
import {Box} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& span:hover": { backgroundColor: "orange" }
    },
    box: {
        height: 20,
        width: 20,
        display: "grid",
        border: "1px solid black"
    },
    boxBackgroundGrey: {
        backgroundColor: "grey",
        color: "green",
        fontSize: 30
    },
    boxBackgroundRed: {
        backgroundColor: "red",
        color: "green",
        fontSize: 30
    },
    boxBackgroundGreen: {
        backgroundColor: "green",
        color: "green",
        fontSize: 30
    },
}));

const BoxFill = ( { rehire, voluntary }) => {
    const classes = useStyles();
    let className = '';
    if(rehire && voluntary) {
       className = classes.boxBackgroundGreen;
    } else if (!voluntary) {
       className = classes.boxBackgroundRed;
    } else {
       className = classes.boxBackgroundGrey;
    }

    return (
        <Box
            component="span"
            boxShadow={3}
            className={`${classes.box} ${className}`}
        />
    )

}

export default BoxFill;
