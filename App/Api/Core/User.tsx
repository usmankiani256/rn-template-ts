import { client } from '@Api'
import { FetchRandomUser } from '@Api/Queries'
import { USER_DATA } from '@Api/Types'

const fetchRandomUser = async (): Promise<USER_DATA> => {
  let randomID = Math.floor(Math.random() * 10) + 1
  let variables = { id: randomID }

  try {
    const data = await client.request<{ user: USER_DATA }>(
      FetchRandomUser,
      variables,
    )
    return data.user
  } catch (error) {
    return error.response
  }
}

export default fetchRandomUser
