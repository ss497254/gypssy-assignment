import { Footer } from "components/Layout/Footer";
import { Header } from "components/Layout/Header";
import { Profile } from "components/Profile";
import { TabContainer } from "components/TabContainer";
import React from "react";

export default function Home() {
    return (
        <>
            <Header />
            <Profile />
            <TabContainer />
            <Footer />
        </>
    );
}
