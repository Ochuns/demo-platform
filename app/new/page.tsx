"use client";
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Page = () => {
    const [location, setLocation] = useState("")
    const [map, setMap] = useState("")
    const [reason, setReason] = useState("")
    const [money, setMoney] = useState<number>(0)

    return (
        <div>
            <Label htmlFor="location">場所の名前</Label>
            <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
            <Label htmlFor="map">GoogleマップのURL</Label>
            <Input id="map" value={map} onChange={(e) => setMap(e.target.value)}/>
            <Label htmlFor="reason">おすすめ理由</Label>
            <Input id="reason" value={reason} onChange={(e) => setReason(e.target.value)}/>
            <Label htmlFor="money">予算</Label>
            <Input id="money" value={money} onChange={(e) => setMoney(Number(e.target.value))}/>
            <Button variant="outline">追加</Button>
        </div>
    )
}

export default Page