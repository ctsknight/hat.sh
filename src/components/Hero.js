/* eslint-disable @next/next/no-img-element */
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { getTranslations as t } from "../../locales";

const useStyles = makeStyles((theme) => ({
  
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>

    </Container>
  );
}
