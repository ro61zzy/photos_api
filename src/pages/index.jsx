
import { Inter } from 'next/font/google'

import MyTable from './Table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <h1>Daang it, we can do this</h1>
      <h2> shit</h2> */}
      <MyTable />

    </>
  )
}
