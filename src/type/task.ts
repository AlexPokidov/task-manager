export type Task = {
    id: number,
    name: string,
    status: Status
};

enum Status {
    "На согласовании",
    "Новые",
    "В процессе",
    "Готово",
    "Доработать"
}