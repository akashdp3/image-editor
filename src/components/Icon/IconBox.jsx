import { Flex } from '@chakra-ui/react';

function IconBox(props) {
    const { children, ...rest } = props;

    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'8px'}
            {...rest}
        >
            {children}
        </Flex>
    );
}

export default IconBox;
