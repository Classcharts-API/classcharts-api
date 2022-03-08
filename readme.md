# Classcharts API

A very WIP client for the classcharts API

[Documentation](https://jamesatjaminit.github.io/classcharts-api/index.html)

# Examples

```typescript
import { ClasschartsClientStudent } from "classcharts-api";
async function main() {
  const client = new ClasschartsClientStudent("classchartsCode", "01/1/2000");
  await client.init();
  console.log(
    await client.getBehaviour({
      displayDate: "due_date",
      fromDate: "20/01/2000",
      toDate: "01/02/2000",
    })
  );
  console.log(await client.getActivity());
  console.log(await client.getStudentInfo());
  console.log(await client.getActivity());
  console.log(await client.getActivity());
}

main();
```
