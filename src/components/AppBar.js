/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import VersionBadge from "./VersionBadge";
import Settings from "./Settings";
import { getTranslations as t } from "../../locales";
import { useSession, signIn, signOut } from "next-auth/react"

const useStyles = makeStyles((theme) => ({

  logo: {
    flexGrow: 1,
    marginTop: 10,
  },
  button: {
    textTransform: "none",
    color: theme.palette.diamondBlack.main,
  },
}));

export default function NavAppBar() {
  const classes = useStyles()
  const { data: session } = useSession()
  if (session) {
  return (
    <div>
      <AppBar color="transparent" position="static" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar>
            
          Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );}
  return (
    <div>
      <AppBar color="transparent" position="static" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar>
            
          Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
