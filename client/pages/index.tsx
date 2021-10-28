import React, { PureComponent, Fragment } from "react";

import { GetStaticProps } from "next";

class IndexPage extends PureComponent {
    render () {
        return (
            <Fragment>
                <h1>Working propertly!</h1>
            </Fragment>
        )
    }
}

export default IndexPage;