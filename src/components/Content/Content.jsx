import { Flex } from '@chakra-ui/react';

import { Card } from '../index';

const Content = () => {
    let navbarPosition = 'absolute';
    let navbarFilter = 'none';
    let navbarBackdrop = 'none';
    let navbarShadow = 'none';
    let navbarBg = 'none';
    let navbarBorder = 'transparent';
    let secondaryMargin = '0px';
    let paddingX = '15px';

    return (
        <Flex
            position={navbarPosition}
            boxShadow={navbarShadow}
            bg={navbarBg}
            borderColor={navbarBorder}
            filter={navbarFilter}
            backdropFilter={navbarBackdrop}
            borderWidth="1.5px"
            borderStyle="solid"
            transitionDelay="0s, 0s, 0s, 0s"
            transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
            transition-property="box-shadow, background-color, filter, border"
            transitionTimingFunction="linear, linear, linear, linear"
            alignItems={{ xl: 'center' }}
            borderRadius="16px"
            display="flex"
            minH="75px"
            justifyContent={{ xl: 'start' }}
            wrap="wrap"
            lineHeight="25.6px"
            mx="auto"
            mt={secondaryMargin}
            pb="8px"
            left=""
            right="30px"
            px={{
                sm: paddingX,
                md: '30px'
            }}
            ps={{
                xl: '12px'
            }}
            pt="8px"
            top="109px"
            w={{ sm: 'calc(100vw - 30px)', xl: 'calc(100vw - 75px - 275px)' }}
        >
            <Card>asdf</Card>
        </Flex>
    );
};

export default Content;
