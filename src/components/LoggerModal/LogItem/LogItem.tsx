import { BsFillPersonFill } from "react-icons/bs";
import type { ILogItem } from "../../../types";
import { author, badge, date, logItemWrap, message } from "./LogItem.css";

type TLogItemProps = {
  logItem: ILogItem;
};

const parseActionType = (msg: string) => {
  if (/일 수정하기/.test(msg)) return "수정";
  if (/일 삭제하기/.test(msg)) return "삭제";
  if (/일 생성하기/.test(msg)) return "생성";
  if (/리스트 삭제하기/.test(msg)) return "리스트 삭제";
  if (/리스트 생성하기/.test(msg)) return "리스트 생성";
  return "활동";
};

const formatSince = (ts: string) => {
  const t = Number(ts);
  if (!Number.isFinite(t)) return "";
  const diffSec = Math.max(0, Math.floor((Date.now() - t) / 1000));
  if (diffSec < 1) return "just now";
  const h = Math.floor(diffSec / 3600);
  const m = Math.floor((diffSec % 3600) / 60);
  const s = diffSec % 60;
  if (h > 0) return `${h}h ${m}m ago`;
  if (m > 0) return `${m}m ${s}s ago`;
  return `${s}s ago`;
};

const LogItem = ({ logItem }: TLogItemProps) => {
  const action = parseActionType(logItem.logMessage);
  const since = formatSince(logItem.logTimeStamp);

  return (
    <div className={logItemWrap}>
      <div className={author}>
        <BsFillPersonFill />
        {logItem.logAuthor}
      </div>
      <div className={message}>
        <span className={badge}>{action}</span>
        {logItem.logMessage}
      </div>
      <div className={date}>{since}</div>
    </div>
  );
};

export default LogItem;