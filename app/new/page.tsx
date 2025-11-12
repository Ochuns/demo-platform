import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Page = () => {
    return (
        <div>
            <Label htmlFor="location">場所の名前</Label>
            <Input id="location"/>
            <Label htmlFor="map">GoogleマップのURL</Label>
            <Input id="map"/>
            <Label htmlFor="reason">おすすめ理由</Label>
            <Input id="reason"/>
            <Label htmlFor="money">予算</Label>
            <Input id="money"/>
        </div>
    )
}

export default Page