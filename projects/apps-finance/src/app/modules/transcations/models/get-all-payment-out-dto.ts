export interface GetAllPaymentOutDto {
    id:number,
    code: string,
    date:string,
    paymentHub: string,
    paymentHubDetailId: string,
    branch: string,
    bankAccount: string
    sourceDocument: string
    relatedSourceJournal: string

  }