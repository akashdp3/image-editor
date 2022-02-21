import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    useColorModeValue
} from '@chakra-ui/react';

import { HomeIcon } from '../../assets/icons';
import { IconBox } from '../index';

const SideBar = () => {
    // Chakra Color Mode
    let activeBg = useColorModeValue('white', 'navy.700');
    let activeColor = useColorModeValue('gray.700', 'white');
    let sidebarActiveShadow = useColorModeValue(
        '0px 7px 11px rgba(0, 0, 0, 0.04)',
        'none'
    );
    let sidebarBg = useColorModeValue('white', 'navy.800');
    let variantChange = '0.2s linear';
    let sidebarRadius = '20px';
    let sidebarMargins = '0px';

    return (
        <Box display={{ sm: 'none', xl: 'block' }} position="fixed">
            <Box
                bg={sidebarBg}
                transition={variantChange}
                w="260px"
                maxW="260px"
                ms={{
                    sm: '16px'
                }}
                my={{
                    sm: '16px'
                }}
                h="calc(100vh - 32px)"
                ps="20px"
                pe="20px"
                m={sidebarMargins}
                filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.05))"
                borderRadius={sidebarRadius}
            >
                <Heading
                    align="center"
                    py="24px"
                    fontSize="lg"
                    color="blue.400"
                >
                    Image Editor
                </Heading>
                <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    boxShadow={sidebarActiveShadow}
                    bg={activeBg}
                    transition={variantChange}
                    mb={{
                        xl: '6px'
                    }}
                    mx={{
                        xl: 'auto'
                    }}
                    ps={{
                        sm: '10px',
                        xl: '16px'
                    }}
                    py="12px"
                    borderRadius="15px"
                    _hover="none"
                    w="100%"
                    _active={{
                        bg: 'inherit',
                        transform: 'none',
                        borderColor: 'transparent'
                    }}
                    _focus={{
                        boxShadow: '0px 7px 11px rgba(0, 0, 0, 0.04)'
                    }}
                >
                    <Flex>
                        <IconBox
                            bg="blue.500"
                            color="white"
                            h="30px"
                            w="30px"
                            me="12px"
                            transition={variantChange}
                        >
                            <HomeIcon />
                        </IconBox>

                        <Text color={activeColor} my="auto" fontSize="sm">
                            Dashboard
                        </Text>
                    </Flex>
                </Button>
            </Box>
        </Box>
    );
};

export default SideBar;
