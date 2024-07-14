import React from 'react';
import cls from './OrganizationHeadCard.module.scss'
import {Box} from "@mui/material";

const OrganizationHeadCard = () => {
    return (
        <Box className={cls.card}>
            <div className={cls.cardBackground}/>
        </Box>
    );
};

export default OrganizationHeadCard;