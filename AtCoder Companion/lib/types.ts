export interface ContestInfoDTO {
  name: string;
  startTime: string;
  endTime: string;
  url: string;
}

export interface ContestInfo {
  name: string;
  startTime: Date;
  endTime: Date;
  url: string;
}