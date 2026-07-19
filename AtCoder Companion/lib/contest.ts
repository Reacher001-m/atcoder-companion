import type { ContestInfo, ContestInfoDTO } from "./types";


export function toDTO(contest: ContestInfo): ContestInfoDTO {
  return {
    ...contest,
    startTime: contest.startTime.toISOString(),
    endTime: contest.endTime.toISOString(),
  };
}

export function fromDTO(dto: ContestInfoDTO): ContestInfo {
  return {
    ...dto,
    startTime: new Date(dto.startTime),
    endTime: new Date(dto.endTime),
  };
}