import React from "react"
import ChartRow from "../components/ChartRow"

let tableRowsData = [
    {
        Title: 'Billy Elliot',
        Lenght: '123',
        Rating: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Lenght: '142',
        Rating: '4.8',
        Categories: ['Drama', 'Acción', 'Comedia'],
        Awards: 3
    }
]

function Chart(){
    return(

        <div className="card shadow mb-4">
            <div className="card-body">
                <table className="table table-borderer" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Duración</th>
                            <th>Rating</th>
                            <th>Género</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tableRowsData.map((row, i) =>{
                                return < ChartRow{...row} key={i} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Chart