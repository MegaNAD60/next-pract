import { NextResponse } from "next/server"

export async function GET(){
  return NextResponse.json({
    users: [
        {
            id: 1,
            name: "John"
        },
        {
            id: 2,
            name: "Peter"
        },
        {
            id: 3,
            name: "Dorcas"
        }
    ]
  })
}