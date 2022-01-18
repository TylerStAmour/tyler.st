import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";

export default () => {
    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: "#efeff1" }}>
                <Container style={{ paddingLeft: "0" }}>
                    <Toolbar variant="dense" className="flex justify-end text-black">
                        <a className="a" href="/portfolio">Portfolio</a>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}