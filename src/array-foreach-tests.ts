import './mapAsync';

export interface ArrayItem {
  name: string;
  sleep: number;
  counter: number;
}

const items: Array<ArrayItem> = [
  {
    counter: 1,
    name: "A",
    sleep: 1000,
  },
  {
    counter: 2,
    name: "B",
    sleep: 1000,
  },
  {
    counter: 3,
    name: "C",
    sleep: 1000,
  },
];
items
  .mapAsync(async (item) => {
    return await new Promise<string>((resolve) => {
      setTimeout(() => {
        console.log(item);
        resolve(item.name);
      }, item.sleep);
    });
  })
  .then((values) => {
    console.log(values, values.length);
  });
