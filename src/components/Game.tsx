import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Button from "./Button";
import "../styles/GameBoard.css";

type BinType =
  | "PAPER"
  | "METAL"
  | "GLASS"
  | "PLASTIC"
  | "ORGANIC"
  | "NOT_RECYCLE";

type BinContentsType = {
  [key in BinType]: string[];
};

type DragItem = {
  word: string;
  fromBin?: BinType | "WORDS";
  type: string;
};

type TrashBinProps = {
  name: BinType;
  items: string[];
  onDrop: (binName: BinType, word: string, from: BinType | "WORDS") => void;
};

type DraggableWordProps = {
  word: string;
  fromBin?: BinType | "WORDS";
};

const bins: BinType[] = [
  "PAPER",
  "METAL",
  "GLASS",
  "PLASTIC",
  "ORGANIC",
  "NOT_RECYCLE",
];

const correctAnswers: BinContentsType = {
  PAPER: ["қағаз", "дәптер", "газет"],
  METAL: ["консервіленген тағам"],
  GLASS: ["бөтелке"],
  PLASTIC: [],
  ORGANIC: ["банан қалдығы", "алмұрт", "сүйек"],
  NOT_RECYCLE: ["шам"],
};

const initialWords: string[] = [
  "қағаз",
  "бөтелке",
  "шам",
  "банан қалдығы",
  "алмұрт",
  "сүйек",
  "дәптер",
  "газет",
  "консервіленген тағам",
];

const GameBoard = () => {
  const [binContents, setBinContents] = useState<BinContentsType>(
    bins.reduce((acc, bin) => ({ ...acc, [bin]: [] }), {} as BinContentsType)
  );

  const [unassignedWords, setUnassignedWords] =
    useState<string[]>(initialWords);

  const handleDrop = (
    binName: BinType,
    word: string,
    from: BinType | "WORDS"
  ) => {
    setBinContents((prev) => {
      const updated = { ...prev };
      if (from && from !== "WORDS") {
        updated[from] = updated[from].filter((w) => w !== word);
      }
      updated[binName] = [...updated[binName], word];
      return updated;
    });
    if (from === "WORDS") {
      setUnassignedWords((prev) => prev.filter((w) => w !== word));
    }
  };

  const checkAnswers = () => {
    let score = 0;
    bins.forEach((bin) => {
      const correct = correctAnswers[bin] || [];
      const dropped = binContents[bin] || [];
      correct.forEach((item) => {
        if (dropped.includes(item)) score++;
      });
    });
    alert(`Сіздің нәтижеңіз: ${score}`);
  };

  const showSolution = () => {
    setBinContents(correctAnswers);
    setUnassignedWords([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bins-container">
        {bins.map((bin) => (
          <TrashBin
            key={bin}
            name={bin}
            items={binContents[bin]}
            onDrop={handleDrop}
          />
        ))}
      </div>

      <div className="words-container">
        {unassignedWords.map((word) => (
          <DraggableWord key={word} word={word} fromBin="WORDS" />
        ))}
      </div>

      <div className="buttons">
        <Button text="Тексеру" width="120px" onClick={checkAnswers} />
        <Button text="Шешімді көрсету" width="200px" onClick={showSolution} />
      </div>
    </DndProvider>
  );
};
const TrashBin = ({ name, items, onDrop }: TrashBinProps) => {
  const [{ isOver }, drop] = useDrop<DragItem, void, { isOver: boolean }>(
    () => ({
      accept: "WORD",
      drop: (item) => onDrop(name, item.word, item.fromBin || "WORDS"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    })
  );

  return (
    <div
      ref={drop as unknown as React.RefObject<HTMLDivElement>}
      className="bin"
      style={{ backgroundColor: isOver ? "#ccc" : "lightgray" }}
    >
      <h4>{name}</h4>
      {items.map((item) => (
        <DraggableWord key={item} word={item} fromBin={name} />
      ))}
    </div>
  );
};

const DraggableWord = ({ word, fromBin }: DraggableWordProps) => {
  const [{ isDragging }, drag] = useDrag<
    DragItem,
    void,
    { isDragging: boolean }
  >(() => ({
    type: "WORD",
    item: { word, fromBin, type: "WORD" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as unknown as React.RefObject<HTMLDivElement>}
      className="word"
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: "white",
        padding: "8px 12px",
        margin: "5px",
        borderRadius: "5px",
        cursor: "grab",
      }}
    >
      {word}
    </div>
  );
};

export default GameBoard;
