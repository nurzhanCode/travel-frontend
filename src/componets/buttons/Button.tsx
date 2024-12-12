import {ButtonProps} from "@mui/material";
import './button.sass'
export const Button = (props: ButtonProps) => {
    return(
        <button className="button" onClick={props.onClick}>
            {props.children}
        </button>
    )
}
