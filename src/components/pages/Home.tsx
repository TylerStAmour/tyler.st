import { Container, Typography, Grid } from "@mui/material";

export default () => {

    return (
        <Container className="mt-10">
            <Grid container direction="row">
                <Typography variant="h3">
                    Tyler St-Amour
                </Typography>
                <Grid item xs={7} container justifyContent="flex-end" alignItems="center">
                    <div className="mt-2">
                        <a className="mr-8 a" href="/portfolio">Portfolio</a>
                        <a className="mr-8 a" href="/about">About</a>
                        <a className="a" href="/contact">Contact</a>
                    </div>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <div className="ml-2">
                    <Typography variant="subtitle1">
                        Just a developer.
                    </Typography>
                </div>
            </Grid>
        </Container>
    )
}