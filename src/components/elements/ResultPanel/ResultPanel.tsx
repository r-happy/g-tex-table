import { argumentDatasType, returnValueDatasType } from "@/app/types";
import { Box, Code, Heading } from "@radix-ui/themes";

interface ResultPanelType {
  argumentDatas: argumentDatasType[];
  returnValueDatas: returnValueDatasType[];
}

export const ResultPanel: React.FC<ResultPanelType> = ({
  argumentDatas,
  returnValueDatas,
}) => {
  function generateLatexTable(
    argumentDatas: argumentDatasType[],
    returnValueDatas: returnValueDatasType[]
  ) {
    let latexTable = `\\begin{table}[H]\n`;
    latexTable += `  \\centering\n`;
    latexTable += `  \\begin{tabular}{cllp{6cm}}\n`;
    latexTable += `    \\toprule\n`;
    latexTable += `    種類 & 型 & 変数名 & 詳細 \\\\\n`;
    latexTable += `    \\midrule\n`;
    latexTable += `    \\midrule\n`;

    // 引数の部分を処理
    latexTable += `    \\multirow{${argumentDatas.length}}{*}{引数}`;
    argumentDatas.forEach((data) => {
      latexTable += ` & ${data.type} & \\Inline{${data.value_name}} & ${data.explanation} \\\\\n`;
    });

    // 戻り値の部分を処理
    if (returnValueDatas.length > 0) {
      latexTable += `    \\midrule\n`;
      latexTable += `    \\multirow{${returnValueDatas.length}}{*}{戻り値}`;
      returnValueDatas.forEach((data) => {
        latexTable += ` & ${data.type} & \\Inline{${data.value_name}} & ${data.explanation} \\\\\n`;
      });
    }

    latexTable += `    \\bottomrule\n`;
    latexTable += `  \\end{tabular}\n`;
    latexTable += `\\end{table}`;

    return latexTable;
  }

  const latexTable = generateLatexTable(argumentDatas, returnValueDatas);

  return (
    <div>
      <Heading size="6">出力結果</Heading>
      <Box py="2">
        <Code>{latexTable}</Code>
      </Box>
    </div>
  );
};
