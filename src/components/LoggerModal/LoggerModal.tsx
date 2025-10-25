import { useMemo } from "react";
import { useTypedSelector } from "../../hooks/redux";
import LogItem from "./LogItem/LogItem";
import { dock, window as dockWindow, header, title, list, disabled } from "./LoggerModal.css";

const LoggerModal = () => {
  const logs = useTypedSelector((s) => s.logger.logArray);
  const modalActive = useTypedSelector((s) => s.boards.modalActive);

  const sorted = useMemo(
    () => [...logs].sort((a, b) => Number(b.logTimeStamp) - Number(a.logTimeStamp)),
    [logs]
  );

  return (
    <div className={`${dock} ${modalActive ? disabled : ""}`}>
      <div className={dockWindow}>
        <div className={header}>
          <div className={title}>활동 기록</div>
        </div>
        <div className={list}>
          {sorted.map((item) => (
            <LogItem key={item.logId} logItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoggerModal;