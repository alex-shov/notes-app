export interface INote {
    id: number,
    name: string,
    content: string,
  }

  export class Note implements INote {
    id!: number;
    name!: string;
    content!: string;
  }
  