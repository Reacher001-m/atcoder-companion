import type { ContestInfo } from "./types";

export interface ContestFoundMessage {
  type: "contestFound";
  contest: ContestInfo;
}