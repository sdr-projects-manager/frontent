import Head from 'next/head'
import { Typography } from 'antd'

const { Title } = Typography

const Team: React.FC = () => (
  <>
    <Head>
      <title>Tasks</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Sample team</Title>
  </>
)

export default Team
