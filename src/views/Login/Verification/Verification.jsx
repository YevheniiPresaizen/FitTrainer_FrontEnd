import React from "react";
// @material-ui/core components

import { withStyles } from '@material-ui/core/styles';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const styles = theme => ({
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
});


class NewExercise extends React.Component {
    state = {
        email: 'testtestovii@gmail.com',
        secretKey: '123456789'
    };

    handleSubmit = event => {
        event.preventDefault();
        let form = {
            email: this.state.email,
            secretKey: this.state.secretKey
        };
        console.log(form);
    };

    render() {
        const { classes }= this.props;

        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>
                                    Email verification to finish registration with Fit Trainer App
                                </h4>
                                <p className={classes.cardCategoryWhite}>Please, confirm email address</p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Email address"
                                            id="email"
                                            value="test@tes.com"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                value: this.state.email,
                                                disabled: true
                                            }}
                                        />
                                        <CustomInput
                                            labelText="VerificationCode"
                                            id="password"
                                            disabled
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                value: this.state.secretKey,
                                                disabled: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button color="primary" type="submit">VERIFY EMAIL</Button>
                            </CardFooter>
                            <CardFooter>
                                <a>already have an a account? sign up</a>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </form>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewExercise);