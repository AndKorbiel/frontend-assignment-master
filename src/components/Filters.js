import React from "react";
// material-ui
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Filters = props => {
    return (
        <FormGroup className="filters-box">
            <Typography variant="body1" className="action-heading">
                Data sources
            </Typography>
            <Stack className="cb-wrapper">
                {props.options && props.options.map(option => (
                    <FormControlLabel
                        key={option.label}
                        control={
                            <Checkbox
                                checked={option.checked}
                                onChange={() => props.action(option)}
                            />}
                        label={option.label} />
                ))}
            </Stack>
        </FormGroup>
    )
}

export default Filters;