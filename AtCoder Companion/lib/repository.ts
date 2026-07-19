import { saveContest, loadContest } from "./storage";
import type { ContestInfo } from "./types";

export async function saveCurrentContest(contest: ContestInfo) {
  await saveContest(contest);
}

export async function getCurrentContest() {
  return await loadContest();
}