import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

/** 삽입 테스트 */
async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
  }
}

// addItem('20230604');
// addItem('삽입테스트');

// 노션 DB 조회하기
let url = "https://api.notion.com/v1/pages/1523068ab59042578f40bc1d1e960468";
let method = 'GET'

const response = await fetch(url, {
  method: method,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NOTION_KEY}`,
    "Notion-Version": "2022-06-28",
  },
  // body: JSON.stringify(data),
});

const resData = await response.json();

console.log(resData);


