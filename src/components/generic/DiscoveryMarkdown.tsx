import React from "react";
import ReactMarkdown from "react-markdown";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import "./markdown.css";
type Props = {
  source: string;
  className?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h2: {
      fontSize: "2rem",
    },
  })
);

export default function DiscoveryMarkdown(props: Props) {
  const classes = useStyles();
  return (
    <div
      className={props.className ? "discovery " + props.className : "discovery"}
    >
      <ReactMarkdown source={props.source} />
    </div>
  );
}
