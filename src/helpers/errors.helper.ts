type TError = {
  error: {
    status: number
    message: string
  }
}
export const Error = (status: number, message: string): TError => {
  return {
    error: {
      status,
      message,
    },
  }
}
