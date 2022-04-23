import Chart from 'components/Chart/Chart'
import TableProducts from 'components/Table/TableProducts'
import Featured from 'components/Featured/Featured'
import Navbar from 'components/Navbar/Navbar'
import Sidebar from 'components/Sidebar/Sidebar'
import Widget from 'widgets/Widget/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className='charts'>
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <TableProducts />
        </div>
      </div>
    </div>
  )
}

export default Home