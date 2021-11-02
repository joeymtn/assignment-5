import { AppBar, Paper } from "@material-ui/core";

function emailViewer(props) { 
    return (
        <Paper>    
        <AppBar/> 
        <h1>From:{props.email.from.name} ({props.email.email})</h1>
        <h1>To:{props.email.to} ({props.email.to.email})</h1>
        <h1>Subject:{props.email.subject}</h1> 
        <Text>{props.email.content}</Text>
        </Paper>
    );
}