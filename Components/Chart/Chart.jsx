import "./Chart.css"
import DataChart from "./DataCHart.js"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Chart(){
    return (
        <div className='Charts'>
      <LineChart width={600} height={300} data={DataChart} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Competitors" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="RedHorse" stroke="#82ca9d" />
      </LineChart>
      </div>
    )
  }