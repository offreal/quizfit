import React from "react";

import { outfit } from "@quizfit/lib/chakra-theme";

import {
  Flex,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Avatar } from "./avatar";

interface OnboardingMemberProps {
  image?: string | null;
  nameOrEmail?: string | null;
  isMe?: boolean;
  pending?: boolean;
  label: string;
  isLoaded?: boolean;
}

export const OnboardingMember: React.FC<OnboardingMemberProps> = ({
  image,
  nameOrEmail,
  isMe = false,
  pending = false,
  label,
  isLoaded = true,
}) => {
  const hoverBg = useColorModeValue("gray.50", "gray.750");
  return (
    <HStack
      spacing="4"
      py="2"
      px="4"
      rounded="md"
      transition="background 0.2s ease-in-out"
      _hover={{
        bg: hoverBg,
      }}
    >
      <Skeleton isLoaded={isLoaded} fitContent rounded="full">
        <Avatar size="sm" src={image} alt="Member avatar" />
      </Skeleton>
      <Stack spacing="0">
        <Skeleton isLoaded={isLoaded} fitContent>
          <HStack>
            <Text fontWeight={700} fontFamily={outfit.style.fontFamily}>
              {nameOrEmail || "placeholder text"}
            </Text>
            {isMe && (
              <Tag size="sm" colorScheme="blue">
                You
              </Tag>
            )}
            {pending && (
              <Tag size="sm" colorScheme="orange">
                Pending
              </Tag>
            )}
          </HStack>
        </Skeleton>
        <Flex h="21px" alignItems="center">
          <SkeletonText
            isLoaded={isLoaded}
            noOfLines={1}
            fitContent
            skeletonHeight="3"
          >
            <Text fontSize="sm" color="gray.500">
              {label}
            </Text>
          </SkeletonText>
        </Flex>
      </Stack>
    </HStack>
  );
};
