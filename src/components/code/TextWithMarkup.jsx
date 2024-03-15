/* eslint-disable react/prop-types */
import CodeViewer from "./CodeViewer";
export default function TextWithMarkup({ text }) {
  return (
    <div className="text-gray-400 w-[50rem] text-xs">
      <CodeViewer text={text} />;
    </div>
  );
}
