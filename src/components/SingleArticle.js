import React from "react";
// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const SingleArticle = (props) => {
    const {image, title, date, preamble} = props.data;

    return (
        <Card sx={{mb: '1.5em' }}>
            <Grid container spacing={2}>
                <Grid item xs={4} sx={{ alignItems: 'center', display: 'flex' }}>
                    {image ?
                        <CardMedia component="img" image={image} alt="" />
                    :
                        <Box sx={{width: '100%', height: '100%', backgroundColor: '#eaeaea' }} />
                    }
                </Grid>
                <Grid item xs={8}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={9}>
                                <Typography gutterBottom variant="h5">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography gutterBottom variant="body2" align="right">
                                    {date}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' } }}>
                            {preamble}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card >
    )
}

export default SingleArticle;