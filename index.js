import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
// const notion = new Client({ auth: process.env.NOTION_KEY });
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
    console.log('Success! Entry added.');
  } catch (error) {
    console.error(error.body);
  }
}

addItem('삽입 테스트');
addItem('INSERT');

/** API 요청하기 */
// const getUsers = async () => {
//   const listUsersResponse = await notion.users.list({});
//   console.log('listUsersResponse = ', listUsersResponse);
// };

// getUsers();


