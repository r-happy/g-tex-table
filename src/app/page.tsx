"use client";

import { AddPanel } from "@/components/elements/AddPanel/AddPanel";
import { ResultPanel } from "@/components/elements/ResultPanel/ResultPanel";
import { Flex, Text, Button, Container, Tabs, Box } from "@radix-ui/themes";
import { useState } from "react";

export const types = {
  void: "void",
  int: "int",
  char: "char",
  float: "float",
  long: "long",
  custom: "custom",
};

export type argumentDatasType = {
  type: keyof typeof types;
  value_name: string;
  explanation: string;
};

export type returnValueDatasType = {
  type: keyof typeof types;
  value_name: string;
  explanation: string;
};

export default function Home() {
  const [argumentDatas, setArgumentDatas] = useState<argumentDatasType[]>([]);
  const [returnValueDatas, setReturnValueDatas] = useState<
    returnValueDatasType[]
  >([]);

  const arghandleChangeType = (index: number, newType: keyof typeof types) => {
    const newArgumentDatas = [...argumentDatas];
    newArgumentDatas[index] = { ...newArgumentDatas[index], type: newType };
    setArgumentDatas(newArgumentDatas);
  };

  const arghandleChangeValueName = (index: number, newValueName: string) => {
    const newArgumentDatas = [...argumentDatas];
    newArgumentDatas[index] = {
      ...newArgumentDatas[index],
      value_name: newValueName,
    };
    setArgumentDatas(newArgumentDatas);
  };

  const arghandleChangeExplanation = (
    index: number,
    newExplanation: string
  ) => {
    const newArgumentDatas = [...argumentDatas];
    newArgumentDatas[index] = {
      ...newArgumentDatas[index],
      explanation: newExplanation,
    };
    setArgumentDatas(newArgumentDatas);
  };

  const arghandleAddArgument = () => {
    setArgumentDatas([
      ...argumentDatas,
      { type: "int", value_name: "", explanation: "" },
    ]);
  };

  const rethandleChangeType = (index: number, newType: keyof typeof types) => {
    const newReturnValueDatas = [...returnValueDatas];
    newReturnValueDatas[index] = {
      ...newReturnValueDatas[index],
      type: newType,
    };
    setReturnValueDatas(newReturnValueDatas);
  };

  const rethandleChangeValueName = (index: number, newValueName: string) => {
    const newReturnValueDatas = [...returnValueDatas];
    newReturnValueDatas[index] = {
      ...newReturnValueDatas[index],
      value_name: newValueName,
    };
    setReturnValueDatas(newReturnValueDatas);
  };

  const rethandleChangeExplanation = (
    index: number,
    newExplanation: string
  ) => {
    const newReturnValueDatas = [...returnValueDatas];
    newReturnValueDatas[index] = {
      ...newReturnValueDatas[index],
      explanation: newExplanation,
    };
    setReturnValueDatas(newReturnValueDatas);
  };

  const rethandleAddReturnValue = () => {
    setReturnValueDatas([
      ...returnValueDatas,
      { type: "void", value_name: "", explanation: "" },
    ]);
  };

  return (
    <main>
      <Container>
        <Tabs.Root defaultValue="add">
          <Tabs.List>
            <Tabs.Trigger value="add">値を入力</Tabs.Trigger>
            <Tabs.Trigger value="result">結果</Tabs.Trigger>
          </Tabs.List>

          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="add">
              <AddPanel
                argumentDatas={argumentDatas}
                argonChangeExplanation={arghandleChangeExplanation}
                argonChangeType={arghandleChangeType}
                argonChangeValueName={arghandleChangeValueName}
                argonAddArgument={arghandleAddArgument}
                returnValueDatas={returnValueDatas}
                retonChangeType={rethandleChangeType}
                retonChangeValueName={rethandleChangeValueName}
                retonChangeExplanation={rethandleChangeExplanation}
                retonAddReturnValue={rethandleAddReturnValue}
              />
            </Tabs.Content>

            <Tabs.Content value="result">
              <ResultPanel
                argumentDatas={argumentDatas}
                returnValueDatas={returnValueDatas}
              />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Container>
    </main>
  );
}
