export const sortByCreationDate = (requests) => {
  return requests.sort((firstRequest, secondRequest) => {
    if (firstRequest.created_at === secondRequest.created_at) {
      return 0;
    }

    const timeDiff =
      new Date(firstRequest.created_at).getTime() -
      new Date(secondRequest.created_at).getTime();

    return timeDiff > 0 ? -1 : 1;
  });
};

export const sortByDispatchDate = (requests) => {
  return requests.sort((firstRequest, secondRequest) => {
    if (firstRequest.dispatch_date === secondRequest.dispatch_date) {
      return 0;
    }

    const timeDiff =
      new Date(firstRequest.dispatch_date).getTime() -
      new Date(secondRequest.dispatch_date).getTime();

    return timeDiff > 0 ? 1 : -1;
  });
};
