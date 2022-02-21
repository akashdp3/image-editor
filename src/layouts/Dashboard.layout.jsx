import { Box, Image } from '@chakra-ui/react';

import { Content, NavBar, SideBar } from '../components';

const DashboardLayout = () => {
    return (
        <div style={{ backgroundColor: 'rgb(247, 250, 252)' }}>
            <Box
                minH="40vh"
                w="100%"
                position="absolute"
                bgSize="cover"
                top="0"
            >
                <Image
                    src="/images/admin-background.png"
                    alt="Background Image"
                />
            </Box>
            <SideBar />
            <NavBar />
            <Content>
                <p>Dashbaord Content</p>
            </Content>
        </div>
    );
};

export default DashboardLayout;
