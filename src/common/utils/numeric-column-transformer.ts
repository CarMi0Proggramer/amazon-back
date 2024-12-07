export class NumericColumnTransformer {
  from(data: string): number {
    return Number(data);
  }

  to(data: number): number {
    return data;
  }
}
