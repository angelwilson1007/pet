
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewPet = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

       axios.get("http://localhost:3000/view-pet").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()

    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            

            <h2 className="text-center mb-4">View Pet Boarding Booking</h2>

            <table className="table table-bordered table-striped table-hover">

                <thead className="table-dark">
                    <tr>
                        <th>Booking ID</th>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Breed</th>
                        <th>Age</th>
                        <th>Weight (kg)</th>
                        <th>Vaccination Status</th>
                        <th>Owner Name</th>
                        <th>Owner Phone</th>
                        <th>Owner Email</th>
                        <th>Check-in Date</th>
                        <th>Check-out Date</th>
                        <th>Kennel Number</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        data.map((value, index) => (
                            <tr key={index}>
                                <td>{value.bookingId}</td>
                                <td>{value.petName}</td>
                                <td>{value.petType}</td>
                                <td>{value.breed}</td>
                                <td>{value.age}</td>
                                <td>{value.weight}</td>
                                <td>{value.vaccinationStatus}</td>
                                <td>{value.ownerName}</td>
                                <td>{value.ownerPhone}</td>
                                <td>{value.ownerEmail}</td>
                                <td>{value.checkInDate}</td>
                                <td>{value.checkOutDate}</td>
                                <td>{value.kennelNumber}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    )
}

export default ViewPet