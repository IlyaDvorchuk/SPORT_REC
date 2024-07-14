import React from 'react';
import Header from "../../components/layout/Header/Header";
import PostsComponent from "../../components/layout/Post/Post";
import Container from "../../components/layout/Container/Container";
import OrganizationHeadCard from "../../components/layout/OrganizationHeadCard/OrganizationHeadCard";

const Main = () => {
    return (
        <>
            <Header/>
            <Container>
                <OrganizationHeadCard/>
            </Container>
            <PostsComponent/>

        </>
    );
};

export default Main;