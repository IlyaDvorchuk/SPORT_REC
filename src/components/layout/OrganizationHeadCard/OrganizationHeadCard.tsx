import React, {useEffect, useState} from 'react';
import cls from './OrganizationHeadCard.module.scss'
import {Avatar, Box, Button, Typography} from "@mui/material";
import supabase from "../../../services/supabaseClient";

import logoOrg from '/src/assets/images/raster/logo-org.png'
import russiaFlag from '/src/assets/images/raster/flags/russia.png'
import arrowUp from '/src/assets/images/svg/arrow_up.svg'
import verifiedIcon from '/src/assets/images/svg/verified.svg'
import locationIcon from '/src/assets/images/svg/location.svg'



import {OrganizationType} from "../../../types/organization";
import {imageTeams} from "./data/imageTeams";

const OrganizationHeadCard = () => {
    const [organization, setOrganization] = useState<OrganizationType>(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('organizations')
                .select('*')
                .eq('id', 1);

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                console.log('setData(data)', data)
                setOrganization(data[0]);
            }

        };

        fetchData();
    }, []);

    if (!organization) {
        return <div>Loading...</div>
    }

    return (
        <Box className={cls.card}>
            <div className={cls.cardBackground}/>
            <Box className={cls.cardBody}>
                <Box className={cls.cardHeader}>
                    <div className={cls.avatarContainer}>
                        <Avatar
                            src={logoOrg}
                            sx={{width: 140, height: 140}}

                        />
                        <Avatar
                            src={russiaFlag}
                            sx={{width: 24, height: 24}}
                            className={cls.flagImg}
                        />
                    </div>
                    <div className={cls.topPlace}>
                        <img src={arrowUp} alt=""/>
                        <span>№2</span>
                    </div>
                </Box>
                <Box className={cls.titleContainer}>
                    <Typography variant={'h3'} className={cls.title} sx={{fontWeight: 500}}>
                        {organization.name}
                    </Typography>
                    {organization.is_verified && <img src={verifiedIcon} alt={''}/>}
                </Box>
                <Box className={cls.additionalInfo}>
                    <div className={cls.region}>
                        <img src={locationIcon} alt={''}/>
                        <span>
                        {organization.region}
                    </span>
                    </div>
                    {
                        organization.kinds_of_sports.map(sport => (
                            <span key={sport} className={cls.sportItem}>
                                {sport}
                            </span>
                        ))
                    }
                </Box>
                <Box className={cls.countInfo}>
                    <div className={cls.teams}>
                        {imageTeams.map((img, index) => (
                            <Avatar
                                className={cls.team}
                                key={index}
                                src={img}
                                sx={{width: 22, height: 22, left: 15 * index}}
                            />
                        ))}
                    </div>
                    <span>
                        <span className={cls.count}>{organization.numer_of_teams}</span> Команд
                    </span>
                    <span>
                        <span className={cls.count}>{organization.followers}</span> Подписчиков
                    </span>
                    <span>
                        <span className={cls.count}>{organization.numer_of_leagues}</span> Подписчиков
                    </span>
                </Box>
                <Box className={cls.buttons}>
                    <Button variant="contained">
                        Подписаться
                    </Button>
                    <Button variant="outlined" color="primary">
                        Подробнее
                    </Button>
                    <Button variant="outlined" color="primary">
                        Подробнее
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default OrganizationHeadCard;