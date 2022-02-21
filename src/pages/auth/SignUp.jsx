import {
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Stack,
    Text
} from '@chakra-ui/react';

import { GoogleIcon } from '../../assets/icons';

const SignUp = props => {
    const { toggleAuthView } = props;

    return (
        <Stack spacing="6">
            <Stack spacing="5">
                <FormControl>
                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                    <Input id="fullName" type="text" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" type="email" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input id="password" type="password" />
                </FormControl>
            </Stack>
            <HStack justify="space-between">
                <Checkbox defaultIsChecked>Remember me</Checkbox>
                <Button
                    variant="link"
                    colorScheme="blue"
                    size="sm"
                    onClick={toggleAuthView}
                >
                    Back to Login
                </Button>
            </HStack>
            <Stack spacing="6">
                <Button colorScheme="blue">Sign Up</Button>
                <HStack>
                    <Divider />
                    <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                        or continue with
                    </Text>
                    <Divider />
                </HStack>
                <Button isFullWidth>
                    <GoogleIcon boxSize="6" />
                    <Text>Sign up with Google</Text>
                </Button>
            </Stack>
        </Stack>
    );
};

export default SignUp;
