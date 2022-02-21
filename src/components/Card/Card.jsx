import { Box, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
    let sidebarBg = useColorModeValue('white', 'navy.800');
    let variantChange = '0.2s linear';
    let sidebarRadius = '8px';
    let sidebarMargins = '0px';

    return (
        <Box
            bg={sidebarBg}
            transition={variantChange}
            w="220px"
            maxW="220px"
            ms={{
                sm: '8px'
            }}
            my={{
                sm: '8px'
            }}
            h="220px"
            ps="20px"
            pe="20px"
            m={sidebarMargins}
            filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.05))"
            borderRadius={sidebarRadius}
        >
            {children}
        </Box>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired
};

export default Card;
