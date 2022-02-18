import React from 'react';
// material-ui
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';

const SortingButton = props => {
    const [view, setView] = React.useState('');

    const handleChange = (event, nextView) => {
        if (nextView !== null) {
            setView(nextView);
            props.action()
        }
    };

    return (
        <Box sx={{ display: 'inline-flex' }}>
            <Typography variant="body1" className="action-heading">
                Sort by date
            </Typography>
            <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="DESC" aria-label="DESC" size="small" className="custom-toggle">
                    <ArrowDropUpIcon fontSize="large" />
                </ToggleButton>
                <ToggleButton value="ASC" aria-label="ASC" size="small" className="custom-toggle">
                    <ArrowDropDownIcon fontSize="large" />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}

export default SortingButton;