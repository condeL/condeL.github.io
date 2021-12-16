import {useForm} from "@formspree/react";
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {Mail, Send} from "@mui/icons-material";
import React from "react";
import {useTranslation} from "react-i18next";

export default function Contact(){
    const { t } = useTranslation();
    //const [state, handleSubmit] = useForm("xknkyodn");
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_KEY);
    if (state.succeeded) {
        return (
            <Box id="Contact"  m={3} >
                <Typography variant="h2" align={"center"} style={{ fontWeight: 400 }}>{<Mail/>}{t("contact.title")}</Typography>
                <Paper style={{margin:16}}>
                    <Typography variant="h3" align={"center"} style={{ fontWeight: 300, padding:40 }}>{t("contact.thankyou")}</Typography>
                </Paper>
            </Box>
        )
    }

    return(
        <Box id="Contact"  m={3} >
            <Typography variant="h2" align={"center"} style={{ fontWeight: 400 }}>{<Mail/>}{t("contact.title")}</Typography>
            <Paper style={{margin:16}}>
                {state.succeeded?
                    <Typography variant="h3" align={"center"} style={{ fontWeight: 300, padding:40 }}>{t("contact.thankyou")}</Typography>

                    :
                    <form onSubmit={handleSubmit}>

                        <Box flexWrap="wrap" p={1} display="flex" style={{marginLeft: 16}}>
                            <Box flexGrow={1} style={{marginRight: 16}}>
                                <TextField id="name" label={t("contact.name")} name="name" variant="filled" margin="dense"
                                           size="small"/>
                            </Box>
                            <Box flexGrow={2} style={{marginRight: 16}}>
                                <TextField id="email" label={t("contact.email")} name="email" type="email" variant="filled"
                                           margin="dense" size="small" required={true}/>
                            </Box>
                        </Box>

                        <Box p={1} style={{marginLeft: 16, marginRight: 16}}>

                            <TextField id="subject" label={t("contact.subject")} name="subject" variant="filled"
                                       margin="dense" size="small" required={true}/>
                        </Box>

                        <Box p={1} style={{marginLeft: 16, marginRight: 16}}>
                            <TextField id="message" label={t("contact.message")} name="message" variant="filled"
                                       margin="dense" size="small" required={true} fullWidth={true} multiline={true}
                                       minRows={5}/>
                        </Box>

                        <Box p={1} style={{marginLeft: 16, paddingBottom: 16}}>
                            <Button type="submit" variant="contained" color="primary" disabled={state.submitting}
                                    onSubmit={() => {
                                        handleSubmit()
                                    }} endIcon={<Send/>}>{t("contact.send_message")}</Button>
                        </Box>

                    </form>
                }
            </Paper>
        </Box>
    )
}