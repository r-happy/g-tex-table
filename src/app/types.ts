
export const my_types = {
  void: "void",
  int: "int",
  char: "char",
  float: "float",
  long: "long",
  custom: "custom",
};

export type argumentDatasType = {
  type: keyof typeof my_types;
  value_name: string;
  explanation: string;
};

export type returnValueDatasType = {
  type: keyof typeof my_types;
  value_name: string;
  explanation: string;
};

