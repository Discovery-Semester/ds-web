import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Aux from "../../utils/Au_x";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import constants from "../../utils/constants";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a>Discovery Semester</a> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    display: "flex",
    padding: theme.spacing(2),
    backgroundColor: "#bacad2",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
  },
  footerContact: {
    color: "black",
  },
  vsEthLogo: {
    width: "15%",
    height: "auto",
    color: "rgb(50,50,50)",
  },
  socialLinks: {
    width: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialButton: {
    cursor: "pointer",
  },
  socialIcon: {
    fontSize: "2.5vw",
    color: "rgb(50, 50, 50)",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "rgb(85,85,85)",
    },
  },
  [theme.breakpoints.down("md")]: {
    socialIcon: {
      fontSize: 32,
      marginTop: 10,
    },
    vsEthLogo: {
      width: 150,
    },
    footer: {
      flexDirection: "column",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Aux>
      <CssBaseline />
      <footer className={classes.footer}>
        <svg
          className={classes.vsEthLogo}
          viewBox="0 0 440 156"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
        >
          <path d="M175.77 70.323c-1.219-2.696-3.74-4.697-7.57-4.697-3.829 0-6.35 2.001-7.569 4.697-.695 1.654-.957 2.871-1.045 4.872h17.229c-.088-2.001-.35-3.218-1.045-4.872zm-16.185 12.616c0 5.83 3.569 10.092 9.92 10.092 4.959 0 7.395-1.391 10.266-4.262l6.873 6.7c-4.611 4.609-9.047 7.133-17.227 7.133-10.701 0-20.969-4.872-20.969-23.23 0-14.79 8.006-23.143 19.751-23.143 12.617 0 19.75 9.222 19.75 21.664v5.046h-28.364zM212.568 102.08c-9.223 0-13.139-6.524-13.139-12.964V66.67h-4.785v-8.614h4.785v-13.4h11.311v13.4h8.006v8.614h-8.006v21.75c0 2.61 1.219 4.091 3.916 4.091h4.09v9.569h-6.178zM255.023 102.08V74.412c0-6.003-3.828-8.004-7.395-8.004-3.568 0-7.309 2.089-7.309 8.004v27.668H229.01V40.132h11.311v20.795c3.045-3.132 6.873-4.698 10.875-4.698 9.918 0 15.139 6.96 15.139 16.53v29.321h-11.312zM71.929 100.678h-8.772L46.646 55.873h11.78l9.116 27.693 9.031-27.693h11.782l-16.426 44.805zM115.763 51.207c-14.773 0-26.793 12.11-26.793 26.994 0 12.46 8.422 22.97 19.83 26.066v-.047c1.611.392 3.348.567 5.068.567 3.651 0 7.235-.791 9.401-1.999 3.404-1.899 5.703-4.468 6.832-7.635 1.207-3.394 1.082-6.738-.377-9.937-.764-1.67-1.971-3.378-3.594-5.079l-3.398-3.557c-3.403-3.554-4.615-5.223-5.049-6.024-.496-.88-.99-2.204-.525-3.512.259-.731 1.044-2.11 3.38-3.139 1.366-.6 2.114-.721 2.414-.746l.754-2.944c-4.119-1.226-12.646-1.104-16.506 7.93-1.138 2.658-1.191 5.554-.156 8.376.912 2.491 2.852 5.272 5.93 8.503l2.932 3.084c2.13 2.227 2.916 3.363 3.195 3.917.537 1.081.574 2.234.115 3.526-.426 1.193-1.045 1.937-2.209 2.652-.646.397-4.105 2.304-8.848.936v.002c-8.773-3.128-15.06-11.49-15.06-21.335 0-12.517 10.146-22.666 22.664-22.666s22.664 10.149 22.664 22.666c0 4.341-1.223 8.396-3.34 11.844l3.108 3.29a26.987 26.987 0 004.363-14.741c0-14.882-12.021-26.992-26.795-26.992zM295.94 46.973c0-1.765.05-3.415-1.188-4.653-.858-.858-1.848-1.32-3.283-1.32-1.436 0-2.426.462-3.284 1.32-1.237 1.238-1.188 2.888-1.188 4.653 0 1.766-.049 3.416 1.188 4.653.858.858 1.848 1.32 3.284 1.32 1.435 0 2.425-.462 3.283-1.32 1.238-1.237 1.188-2.887 1.188-4.653zm-2.887 0c0 2.145-.165 2.525-.429 2.871-.215.281-.627.528-1.155.528s-.941-.247-1.155-.528c-.264-.346-.429-.726-.429-2.871s.165-2.541.429-2.887c.214-.281.627-.512 1.155-.512s.94.231 1.155.512c.264.346.429.742.429 2.887zM304.586 44.697c-.61-.611-1.204-.825-2.079-.825-.924 0-1.699.429-2.095.825v-.726h-2.64v8.877h2.706v-5.313c0-1.007.726-1.221 1.089-1.221.462 0 .709.198.973.462l2.046-2.079zM312.308 52.204v-8.233h-2.623v.726c-.545-.545-1.073-.825-1.98-.825-.858 0-1.584.28-2.096.792-.808.808-.825 1.798-.825 3.415s.017 2.607.825 3.416c.512.511 1.221.792 2.079.792.825 0 1.419-.248 1.914-.743v.644c0 .577-.297 1.353-1.435 1.353-.611 0-1.106-.149-1.518-.561l-1.683 1.683c.907.907 1.947 1.155 3.333 1.155 2.425 0 4.009-1.518 4.009-3.614zm-2.706-4.125c0 .908-.066 1.766-1.056 1.766s-1.056-.858-1.056-1.766c0-.907.066-1.765 1.056-1.765s1.056.858 1.056 1.765zM321.301 52.848v-5.759c0-2.161-1.37-3.217-3.911-3.217-1.501 0-2.326.28-3.234 1.188l1.683 1.683c.429-.429.726-.594 1.419-.594.941 0 1.337.297 1.337 1.105v.231h-1.799c-2.112 0-3.019 1.238-3.019 2.574 0 .825.264 1.568.775 2.079.495.495 1.238.792 2.129.792.94 0 1.435-.264 1.98-.808v.726h2.64zm-2.706-3.333c0 .429-.066.709-.264.891-.297.28-.545.33-1.073.33-.594 0-.891-.347-.891-.743 0-.412.33-.709.858-.709h1.37v.231zM330.788 52.848v-5.676c0-.941-.132-1.782-.891-2.541-.479-.479-1.155-.759-1.997-.759-.709 0-1.518.28-2.062.825v-.726h-2.64v8.877h2.706v-5.313c0-1.023.726-1.221 1.089-1.221s1.089.198 1.089 1.221v5.313h2.706zM335.457 52.848v-8.531h-2.706v8.531h2.706zm0-9.785v-2.062h-2.706v2.062h2.706zM344.351 49.944c0-1.419-.809-2.525-2.673-2.706l-1.37-.132c-.61-.066-.577-.396-.577-.495 0-.198.214-.512.874-.512.693 0 1.436.083 1.881.528l1.667-1.666c-.875-.875-2.046-1.089-3.498-1.089-1.766 0-3.531.973-3.531 2.937 0 1.732 1.039 2.425 2.574 2.574l1.369.132c.528.049.644.313.644.561 0 .462-.759.577-1.155.577-.462 0-1.419 0-2.162-.742l-1.749 1.749c1.221 1.221 2.525 1.287 3.861 1.287 2.063 0 3.845-.908 3.845-3.003zM352.766 52.848v-5.759c0-2.161-1.37-3.217-3.911-3.217-1.501 0-2.326.28-3.234 1.188l1.683 1.683c.429-.429.726-.594 1.419-.594.941 0 1.337.297 1.337 1.105v.231h-1.799c-2.112 0-3.019 1.238-3.019 2.574 0 .825.264 1.568.775 2.079.495.495 1.238.792 2.129.792.94 0 1.435-.264 1.98-.808v.726h2.64zm-2.706-3.333c0 .429-.066.709-.264.891-.297.28-.545.33-1.073.33-.594 0-.891-.347-.891-.743 0-.412.33-.709.858-.709h1.37v.231zM358.969 52.848v-2.277h-.858c-.363 0-.544-.198-.544-.545v-3.63h1.402v-2.079h-1.402v-2.541h-2.706v2.541h-.809v2.079h.809v3.828c0 1.221.792 2.624 2.755 2.624h1.353zM363.358 52.848v-8.531h-2.706v8.531h2.706zm0-9.785v-2.062h-2.706v2.062h2.706zM372.747 48.409c0-1.732-.231-2.59-.974-3.399-.528-.561-1.419-1.138-2.854-1.138-1.436 0-2.327.577-2.855 1.138-.742.809-.973 1.667-.973 3.399 0 1.749.231 2.591.973 3.399.528.561 1.419 1.139 2.855 1.139 1.435 0 2.326-.578 2.854-1.139.743-.808.974-1.65.974-3.399zm-2.706 0c0 .875-.05 1.502-.396 1.848-.165.165-.396.248-.726.248-.33 0-.561-.083-.726-.248-.347-.346-.396-.973-.396-1.848 0-.874.049-1.501.396-1.848.165-.165.396-.247.726-.247.33 0 .561.082.726.247.346.347.396.974.396 1.848zM382.069 52.848v-5.676c0-.941-.132-1.782-.891-2.541-.479-.479-1.155-.759-1.997-.759-.709 0-1.518.28-2.062.825v-.726h-2.64v8.877h2.706v-5.313c0-1.023.726-1.221 1.089-1.221s1.089.198 1.089 1.221v5.313h2.706zM295.412 57.104h-1.881l-2.706 8.547-2.706-8.547h-1.848l3.861 11.748h1.386l3.894-11.748zM303.613 65.156v-.742c0-2.376-1.303-4.026-3.547-4.026-2.145 0-3.548 1.567-3.548 4.273 0 3.185 1.667 4.29 3.762 4.29 1.469 0 2.277-.445 3.135-1.303l-1.072-1.007c-.594.594-1.089.858-2.03.858-1.369 0-2.128-.907-2.128-2.343h5.428zm-1.666-1.171h-3.762c.016-.512.049-.759.214-1.139.264-.627.875-1.056 1.667-1.056s1.386.429 1.65 1.056c.165.38.214.627.231 1.139zM312.275 61.18c-.577-.578-1.188-.792-1.996-.792-.941 0-1.799.412-2.228 1.006v-.907h-1.65v8.365h1.683V63.77c0-1.155.759-1.881 1.667-1.881.577 0 .874.182 1.254.561l1.27-1.27zM321.367 64.661c0-1.27-.099-2.689-.941-3.531-.462-.462-1.188-.742-2.029-.742-.891 0-1.584.214-2.195.94v-4.224h-1.683v11.748h1.65v-.891c.627.759 1.304.99 2.211.99.842 0 1.584-.28 2.046-.742.842-.842.941-2.277.941-3.548zm-1.683 0c0 1.485-.215 2.789-1.733 2.789s-1.749-1.304-1.749-2.789.231-2.772 1.749-2.772 1.733 1.287 1.733 2.772zM330.508 68.852v-5.593c0-1.898-1.155-2.871-3.449-2.871-1.386 0-2.211.28-3.003 1.204l1.106 1.04c.462-.594.907-.809 1.831-.809 1.304 0 1.832.512 1.832 1.568v.594h-2.211c-1.914 0-2.888 1.006-2.888 2.409 0 .709.231 1.353.66 1.798.512.512 1.205.759 2.244.759 1.04 0 1.617-.247 2.228-.858v.759h1.65zm-1.683-3.019c0 .594-.116.99-.363 1.237-.446.429-.924.479-1.568.479-1.056 0-1.534-.429-1.534-1.188 0-.759.511-1.205 1.501-1.205h1.964v.677zM340.425 68.852v-5.346c0-.94-.198-1.732-.842-2.359-.495-.479-1.204-.759-2.062-.759-.842 0-1.65.313-2.228.94v-.841h-1.65v8.365h1.683v-5.098c0-1.287.792-1.865 1.733-1.865.94 0 1.683.561 1.683 1.865v5.098h1.683zM350.094 68.852V57.104h-1.683v4.224c-.611-.726-1.304-.94-2.195-.94-.841 0-1.567.28-2.029.742-.842.842-.941 2.261-.941 3.531 0 1.271.099 2.706.941 3.548.462.462 1.204.742 2.046.742.907 0 1.584-.231 2.211-.99v.891h1.65zm-1.683-4.191c0 1.485-.215 2.789-1.733 2.789s-1.749-1.304-1.749-2.789.231-2.772 1.749-2.772 1.733 1.287 1.733 2.772zM364.481 68.852V57.104h-1.683v4.224c-.611-.726-1.304-.94-2.195-.94-.841 0-1.567.28-2.029.742-.842.842-.941 2.261-.941 3.531 0 1.271.099 2.706.941 3.548.462.462 1.204.742 2.046.742.907 0 1.584-.231 2.211-.99v.891h1.65zm-1.683-4.191c0 1.485-.215 2.789-1.733 2.789s-1.749-1.304-1.749-2.789.231-2.772 1.749-2.772 1.733 1.287 1.733 2.772zM374.397 65.156v-.742c0-2.376-1.303-4.026-3.547-4.026-2.145 0-3.548 1.567-3.548 4.273 0 3.185 1.667 4.29 3.762 4.29 1.469 0 2.277-.445 3.135-1.303l-1.072-1.007c-.594.594-1.089.858-2.03.858-1.369 0-2.128-.907-2.128-2.343h5.428zm-1.666-1.171h-3.762c.016-.512.049-.759.214-1.139.264-.627.875-1.056 1.667-1.056s1.386.429 1.65 1.056c.165.38.214.627.231 1.139zM383.06 61.18c-.577-.578-1.188-.792-1.996-.792-.941 0-1.799.412-2.228 1.006v-.907h-1.65v8.365h1.683V63.77c0-1.155.759-1.881 1.667-1.881.577 0 .874.182 1.254.561l1.27-1.27zM295.066 82.498c0-1.007-.314-1.848-.957-2.409-.495-.446-1.106-.71-2.195-.875l-1.336-.198c-.545-.082-1.023-.28-1.32-.544-.314-.281-.446-.66-.446-1.089 0-1.04.759-1.832 2.145-1.832.99 0 1.832.215 2.558.908l1.138-1.122c-1.006-.941-2.095-1.337-3.646-1.337-2.442 0-3.927 1.403-3.927 3.449 0 .957.28 1.699.858 2.244.511.478 1.27.808 2.227.94l1.386.198c.693.099.99.215 1.287.495.314.281.462.71.462 1.221 0 1.139-.891 1.799-2.425 1.799-1.205 0-2.145-.264-3.003-1.122l-1.188 1.171c1.122 1.139 2.392 1.551 4.158 1.551 2.458 0 4.224-1.287 4.224-3.448zM301.205 85.847v-1.435h-.693c-.627 0-.924-.363-.924-.974v-4.521h1.617V77.63h-1.617v-2.541h-1.683v2.541h-.957v1.287h.957v4.604c0 1.204.726 2.326 2.294 2.326h1.006zM310.577 85.847v-8.365h-1.683v5.098c0 1.287-.792 1.865-1.732 1.865-.941 0-1.683-.561-1.683-1.865v-5.098h-1.683v5.346c0 .94.198 1.732.841 2.359.495.479 1.205.759 2.063.759.841 0 1.65-.313 2.227-.94v.841h1.65zM320.311 85.847V74.099h-1.683v4.224c-.611-.726-1.304-.94-2.195-.94-.841 0-1.567.28-2.029.742-.842.842-.941 2.261-.941 3.531 0 1.271.099 2.706.941 3.548.462.462 1.204.742 2.046.742.907 0 1.584-.231 2.211-.99v.891h1.65zm-1.683-4.191c0 1.485-.215 2.789-1.733 2.789s-1.749-1.304-1.749-2.789.231-2.772 1.749-2.772 1.733 1.287 1.733 2.772zM324.667 85.848v-8.366h-1.683v8.366h1.683zm.049-10.016V74.05h-1.782v1.782h1.782zM335.062 82.151v-.742c0-2.376-1.303-4.026-3.547-4.026-2.145 0-3.548 1.567-3.548 4.273 0 3.185 1.667 4.29 3.762 4.29 1.469 0 2.277-.445 3.135-1.303l-1.072-1.007c-.594.594-1.089.858-2.03.858-1.369 0-2.128-.907-2.128-2.343h5.428zm-1.666-1.171h-3.762c.016-.512.049-.759.214-1.139.264-.627.875-1.056 1.667-1.056s1.386.429 1.65 1.056c.165.38.214.627.231 1.139zM343.724 78.175c-.577-.578-1.188-.792-1.996-.792-.941 0-1.799.412-2.228 1.006v-.907h-1.65v8.365h1.683v-5.082c0-1.155.759-1.881 1.667-1.881.577 0 .874.182 1.254.561l1.27-1.27zM352.354 82.151v-.742c0-2.376-1.303-4.026-3.547-4.026-2.145 0-3.548 1.567-3.548 4.273 0 3.185 1.667 4.29 3.762 4.29 1.469 0 2.277-.445 3.135-1.303l-1.072-1.007c-.594.594-1.089.858-2.03.858-1.369 0-2.128-.907-2.128-2.343h5.428zm-1.666-1.171h-3.762c.016-.512.049-.759.214-1.139.264-.627.875-1.056 1.667-1.056s1.386.429 1.65 1.056c.165.38.214.627.231 1.139zM361.924 85.847v-5.346c0-.94-.198-1.732-.842-2.359-.495-.479-1.204-.759-2.062-.759-.842 0-1.65.313-2.228.94v-.841h-1.65v8.365h1.683v-5.098c0-1.287.792-1.865 1.733-1.865.94 0 1.683.561 1.683 1.865v5.098h1.683zM371.593 85.847V74.099h-1.683v4.224c-.611-.726-1.304-.94-2.195-.94-.841 0-1.567.28-2.029.742-.842.842-.941 2.261-.941 3.531 0 1.271.099 2.706.941 3.548.462.462 1.204.742 2.046.742.907 0 1.584-.231 2.211-.99v.891h1.65zm-1.683-4.191c0 1.485-.215 2.789-1.733 2.789s-1.749-1.304-1.749-2.789.231-2.772 1.749-2.772 1.733 1.287 1.733 2.772zM381.507 82.151v-.742c0-2.376-1.303-4.026-3.547-4.026-2.145 0-3.548 1.567-3.548 4.273 0 3.185 1.667 4.29 3.762 4.29 1.469 0 2.277-.445 3.135-1.303l-1.072-1.007c-.594.594-1.089.858-2.03.858-1.369 0-2.128-.907-2.128-2.343h5.428zm-1.666-1.171h-3.762c.016-.512.049-.759.214-1.139.264-.627.875-1.056 1.667-1.056s1.386.429 1.65 1.056c.165.38.214.627.231 1.139zM391.078 85.847v-5.346c0-.94-.198-1.732-.842-2.359-.495-.479-1.204-.759-2.062-.759-.842 0-1.65.313-2.228.94v-.841h-1.65v8.365h1.683v-5.098c0-1.287.792-1.865 1.733-1.865.94 0 1.683.561 1.683 1.865v5.098h1.683zM293.68 101.852v-5.593c0-1.898-1.155-2.871-3.449-2.871-1.386 0-2.211.28-3.003 1.204l1.106 1.04c.462-.594.907-.809 1.831-.809 1.304 0 1.832.512 1.832 1.568v.594h-2.211c-1.914 0-2.888 1.006-2.888 2.409 0 .709.231 1.353.66 1.798.512.512 1.205.759 2.244.759 1.04 0 1.617-.247 2.228-.858v.759h1.65zm-1.683-3.019c0 .594-.116.99-.363 1.237-.446.429-.924.479-1.568.479-1.056 0-1.534-.429-1.534-1.188 0-.759.511-1.205 1.501-1.205h1.964v.677zM303.597 101.852v-5.346c0-.94-.198-1.732-.842-2.359-.495-.479-1.204-.759-2.062-.759-.842 0-1.65.313-2.228.94v-.841h-1.65v8.365h1.683v-5.098c0-1.287.792-1.865 1.733-1.865.94 0 1.683.561 1.683 1.865v5.098h1.683zM317.918 101.852V90.104h-1.683v4.224c-.611-.726-1.304-.94-2.195-.94-.841 0-1.567.28-2.029.742-.842.842-.941 2.261-.941 3.531 0 1.271.099 2.706.941 3.548.462.462 1.204.742 2.046.742.907 0 1.584-.231 2.211-.99v.891h1.65zm-1.683-4.191c0 1.485-.215 2.789-1.733 2.789s-1.749-1.304-1.749-2.789.231-2.772 1.749-2.772 1.733 1.287 1.733 2.772zM327.257 98.157v-.743c0-2.376-1.304-4.026-3.548-4.026-2.145 0-3.547 1.568-3.547 4.274 0 3.184 1.666 4.29 3.762 4.29 1.468 0 2.277-.446 3.135-1.304l-1.073-1.006c-.594.594-1.089.858-2.029.858-1.37 0-2.129-.908-2.129-2.343h5.429zm-1.667-1.172h-3.762c.017-.511.05-.759.215-1.138.264-.627.874-1.056 1.666-1.056.792 0 1.386.429 1.65 1.056.165.379.215.627.231 1.138zM336.481 94.18c-.577-.578-1.188-.792-1.996-.792-.941 0-1.799.412-2.228 1.006v-.907h-1.65v8.365h1.683V96.77c0-1.155.759-1.881 1.667-1.881.577 0 .874.182 1.254.561l1.27-1.27zM350.835 101.852v-1.6h-5.726v-3.531h4.884v-1.584h-4.884v-3.432h5.726v-1.601h-7.508v11.748h7.508zM361.511 91.705v-1.601h-8.25v1.601h3.234v10.147h1.782V91.705h3.234zM372.582 101.852V90.104H370.8v5.016h-4.769v-5.016h-1.782v11.748h1.782v-5.131h4.769v5.131h1.782z" />
        </svg>
        <div>
          <Typography variant="body1">
            <a
              className={classes.footerContact}
              href={"mailto:" + constants.links.contact}
            >
              contact@discovery-semester.ch
            </a>
          </Typography>
          <Copyright />
        </div>
        <div className={classes.socialLinks}>
          <a
            className={classes.socialButton}
            target="_blank"
            href={constants.links.instagram}
          >
            <InstagramIcon className={classes.socialIcon} />
          </a>
          <a
            className={classes.socialButton}
            target="_blank"
            href={constants.links.facebook}
          >
            <FacebookIcon className={classes.socialIcon} />
          </a>
        </div>
      </footer>
    </Aux>
  );
}
