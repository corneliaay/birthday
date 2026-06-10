export interface RsvpData {
  name: string;
  whatsapp: string;
  attending: boolean | null; // null: not selected, true: coming, false: declined
  submitted: boolean;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
