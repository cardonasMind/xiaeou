import React, { PureComponent, Fragment } from "react";

import { GetStaticProps } from "next";

import { HeroSection, ResultsSection } from "../src/sections/indexPage";

class IndexPage extends PureComponent {
    render () {
        return (
            <Fragment>
                <HeroSection />
                <ResultsSection />
            </Fragment>
        )
    }
}

export default IndexPage;