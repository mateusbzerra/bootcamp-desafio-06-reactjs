const formatDate = (date: Date): string => {
  const parsedDate = new Date(date);
  return Intl.DateTimeFormat('pt-br', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(parsedDate);
};

export default formatDate;
