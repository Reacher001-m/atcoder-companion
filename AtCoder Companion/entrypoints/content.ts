import { getContestInfo } from "../lib/atcoder";

export default defineContentScript({
  matches: ["https://atcoder.jp/contests/*"],

  main() {
    console.log("✅ AtCoder Companion 起動");

    const contest = getContestInfo();

    console.table(contest);
  },
});