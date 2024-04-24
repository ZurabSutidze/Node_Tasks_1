////////////////////////          1          ///////////////////////

// const fs = require("fs/promises")

// async function WriteTextInThirdFile() {
//     try{
//         const FirstWord = await fs.readFile("First.txt", "utf-8")
//         const SecondWord = await fs.readFile("Second.txt", "utf-8")

//         fs.writeFile("Third.txt", FirstWord + " " + SecondWord, (err, data) => {
//             if (err) {
//                 console.log("Smth Is Wrong")
//             }

//             console.log('WriteTextInThirdFile Is Sucessfull')
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }

// WriteTextInThirdFile()

////////////////////////          2         ///////////////////////

// const fs = require("fs/promises");

// async function CountWords() {
//     try{
//         const data = (await fs.readFile("RandomWords.txt", "utf-8")).split(/\s+/).filter(word => word.trim() !== "");
//         console.log(data)
//         console.log("Words Count: " + data.length)
//     } catch (err) {
//         console.log(err)
//     }
// }

// CountWords()

// ეს შენ რო მოგწონს ისე თორე მე ესე ვიზამდი

// const fs = require("fs/promises");

// async function CountWords() {
//   try {
//     const data = await fs.readFile("RandomWords.txt", "utf-8");
//     let count = 0;
//     let inWord = false;

//     for (let i = 0; i < data.length; i++) {
//       if (/\s/.test(data[i])) {
//         inWord = false;
//       } else if (!inWord) {
//           count++;
//           inWord = true
//       }
//     }

//     console.log("Words Count: " + count);
//   } catch (err) {
//     console.log(err);
//   }
// }

// CountWords();

////////////////////////          3         ///////////////////////

// const fs = require("fs/promises")

// async function FilterData() {
//     try{
//         const res = await fs.readFile("data.json", "utf-8")
//         const Data = JSON.parse(res)
//         const FilteredData = JSON.stringify(Data.filter((el) => el.age >= 18))
//         fs.writeFile("data.json", FilteredData, (err, data) => {
//             if (err) {
//                 console.log("Smth Is Wrong")
//             }
//             console.log("Filtering Is Completed")
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }

// FilterData()

// ეს შენ რო მოგწონს ისე თორე მე ესე ვიზამდი

// const fs = require("fs/promises");

// async function FilterData() {
//     try {
//         const res = await fs.readFile("data.json", "utf-8");
//         const Data = JSON.parse(res);
//         const FilteredData = [];

//         for (let i = 0; i < Data.length; i++) {
//             if (Data[i].age >= 18) {
//                 FilteredData.push(Data[i]);
//             }
//         }

//         fs.writeFile("data.json", JSON.stringify(FilteredData), (err) => {
//             if (err) {
//                 console.log("Something went wrong:", err);
//             }
//                 console.log("Filtering Is Completed");

//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

// FilterData();
