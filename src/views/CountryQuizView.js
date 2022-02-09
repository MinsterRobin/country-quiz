import React from "react";
import CountryQuizViewTemplate from "../components/templates/CountryQuizViewTemplate";
import Footer from "../components/organisms/Footer";
import CountryQuiz from "../components/organisms/CountryQuiz";

const CountryQuizView = () => {
    return (
        <CountryQuizViewTemplate Footer={Footer}>
            <CountryQuiz/>
        </CountryQuizViewTemplate>
    )
};

export default CountryQuizView;