import { useState } from "react";

const Line = ({ data, search }) => {
  const [copyItem, setCopyItem] = useState("");
  return (
    <main>
      {data.map((element, index) => {
        const reg = new RegExp(search, "i");
        let findList = element.keywords.match(reg);
        if (findList) {
          let key = index + element.keywords;
          try {
            const copyToClipboard = async (text) => {
              await navigator.clipboard.writeText(text);
            };
            return (
              <div
                key={key}
                onClick={() => copyToClipboard(element.symbol)}
                onPointerEnter={() => setCopyItem((prev) => element.title)}
                onPointerLeave={() => setCopyItem((prev) => "")}
              >
                <div className="contentEmoji">
                  <span>{element.symbol}</span>
                  <span>{element.title}</span>
                </div>
                <span
                  className={
                    copyItem === element.title ? "isVisible" : "isHide"
                  }
                >
                  Click to Copy !
                </span>
              </div>
            );
          } catch (error) {
            console.error(message);
          }
        }
      })}
    </main>
  );
};

export default Line;
