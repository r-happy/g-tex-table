import { argumentDatasType, returnValueDatasType, my_types } from "@/app/page";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Select,
  Table,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";

interface AddPanelType {
  argumentDatas: argumentDatasType[];
  argonChangeType: (index: number, newType: keyof typeof my_types) => void;
  argonChangeValueName: (index: number, newValueName: string) => void;
  argonChangeExplanation: (index: number, newExplanation: string) => void;
  argonAddArgument: () => void;

  returnValueDatas: returnValueDatasType[];
  retonChangeType: (index: number, newType: keyof typeof my_types) => void;
  retonChangeValueName: (index: number, newValueName: string) => void;
  retonChangeExplanation: (index: number, newExplanation: string) => void;
  retonAddReturnValue: () => void;
}

export const AddPanel: React.FC<AddPanelType> = ({
  argumentDatas,
  argonChangeExplanation,
  argonChangeType,
  argonChangeValueName,
  argonAddArgument,
  returnValueDatas,
  retonChangeType,
  retonChangeValueName,
  retonChangeExplanation,
  retonAddReturnValue
}) => {
  const typesArray = Object.keys(my_types).map(
    (key) => my_types[key as keyof typeof my_types]
  );

  return (
    <div>
      <Box py="2">
        <Flex direction="column" gap="4">
          <Heading size="6">引数</Heading>
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                {/* <Table.ColumnHeaderCell>型</Table.ColumnHeaderCell> */}
                <Table.ColumnHeaderCell>型</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>変数名</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>説明</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {argumentDatas.map((e, index) => {
                return (
                  <Table.Row key={index} align={"start"}>
                    {/* <Table.Cell>
                    <IconButton
                      variant="soft"
                      color="crimson"
                      onClick={() => {
                        onDeleteArgument(index);
                      }}
                    >
                      <TrashIcon /><Text>{index}</Text>
                    </IconButton>
                  </Table.Cell> */}
                    <Table.Cell>
                      <Select.Root
                        defaultValue={e.type}
                        onValueChange={(f: keyof typeof my_types) => {
                          argonChangeType(index, f);
                        }}
                      >
                        <Select.Trigger />
                        <Select.Content>
                          <Select.Group>
                            {typesArray.map((f, index) => (
                              <Select.Item value={f} key={index}>
                                {f}
                              </Select.Item>
                            ))}
                          </Select.Group>
                        </Select.Content>
                      </Select.Root>
                    </Table.Cell>
                    <Table.Cell>
                      <TextField.Root>
                        <TextField.Input
                          defaultValue={e.value_name}
                          onChange={(event) => {
                            argonChangeValueName(index, event.target.value);
                          }}
                        />
                      </TextField.Root>
                    </Table.Cell>
                    <Table.Cell style={{ maxWidth: "500px" }}>
                      <TextArea
                        defaultValue={e.explanation}
                        onChange={(event) => {
                          argonChangeExplanation(index, event.target.value);
                        }}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
          <IconButton
            onClick={() => {
              argonAddArgument();
            }}
          >
            <PlusIcon />
          </IconButton>
        </Flex>
      </Box>
      <Box py="2">
        <Flex direction="column" gap="4">
          <Heading size="6">戻り値</Heading>
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>型</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>変数名</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>説明</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {returnValueDatas.map((e, index) => {
                return (
                  <Table.Row key={index} align={"start"}>
                    {/* <Table.Cell>
                    <IconButton
                      variant="soft"
                      color="crimson"
                      onClick={() => {
                        onDeleteArgument(index);
                      }}
                    >
                      <TrashIcon /><Text>{index}</Text>
                    </IconButton>
                  </Table.Cell> */}
                    <Table.Cell>
                      <Select.Root
                        defaultValue={e.type}
                        onValueChange={(f: keyof typeof my_types) => {
                          retonChangeType(index, f);
                        }}
                      >
                        <Select.Trigger />
                        <Select.Content>
                          <Select.Group>
                            {typesArray.map((f, index) => (
                              <Select.Item value={f} key={index}>
                                {f}
                              </Select.Item>
                            ))}
                          </Select.Group>
                        </Select.Content>
                      </Select.Root>
                    </Table.Cell>
                    <Table.Cell>
                      <TextField.Root>
                        <TextField.Input
                          defaultValue={e.value_name}
                          onChange={(event) => {
                            retonChangeValueName(index, event.target.value);
                          }}
                        />
                      </TextField.Root>
                    </Table.Cell>
                    <Table.Cell style={{ maxWidth: "500px" }}>
                      <TextArea
                        defaultValue={e.explanation}
                        onChange={(event) => {
                          retonChangeExplanation(index, event.target.value);
                        }}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>{" "}
          <IconButton
            onClick={() => {
              retonAddReturnValue();
            }}
          >
            <PlusIcon />
          </IconButton>
        </Flex>
      </Box>
    </div>
  );
};
