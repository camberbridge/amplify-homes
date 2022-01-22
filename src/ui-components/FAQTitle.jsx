/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function FAQTitle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="1160px"
      height="88px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245.00000059604645,245.00000059604645,245.00000059604645,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="48px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="1160px"
        height="48px"
        grow="1"
        basis="48px"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Document list"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.03px"
        width="1160px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Upload your own document."
        {...getOverrideProps(overrides, "Flex.Text[1]")}
      ></Text>
    </Flex>
  );
}
