"use client";
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { createClient } from '@/utils/supabase/client';

const Page = () => {
    const [location, setLocation] = useState("")
    const [map, setMap] = useState("")
    const [reason, setReason] = useState("")
    const [money, setMoney] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const supabase = createClient();

    const resetForm = () => {
        setLocation("")
        setMap("")
        setReason("")
        setMoney(0)
        setErrors({})
    }

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {}

        if (!location.trim()) {
            newErrors.location = "場所の名前は必須です"
        }

        if (!map.trim()) {
            newErrors.map = "GoogleマップのURLは必須です"
        } else if (!map.startsWith('http')) {
            newErrors.map = "有効なURLを入力してください"
        }

        if (!reason.trim()) {
            newErrors.reason = "おすすめ理由は必須です"
        }

        if (money <= 0) {
            newErrors.money = "予算は0より大きい値を入力してください"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleClick = async () => {
        if (!validateForm()) {
            return
        }

        setIsLoading(true)
        const { error } = await supabase.from("places").insert({
            location: location,
            map: map,
            reason: reason,
            money: money
        })
        if (error) {
            console.log("error", error)
        } else {
            resetForm()
        }
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">新しい場所を追加</h1>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                            場所の名前
                        </Label>
                        <Input
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            disabled={isLoading}
                            className={`transition-colors ${errors.location ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`}
                            placeholder="例: 東京スカイツリー"
                        />
                        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="map" className="text-sm font-medium text-gray-700">
                            GoogleマップのURL
                        </Label>
                        <Input
                            id="map"
                            value={map}
                            onChange={(e) => setMap(e.target.value)}
                            disabled={isLoading}
                            className={`transition-colors ${errors.map ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`}
                            placeholder="https://maps.google.com/..."
                        />
                        {errors.map && <p className="text-red-500 text-sm mt-1">{errors.map}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="reason" className="text-sm font-medium text-gray-700">
                            おすすめ理由
                        </Label>
                        <Input
                            id="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            disabled={isLoading}
                            className={`transition-colors ${errors.reason ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`}
                            placeholder="この場所の魅力を教えてください"
                        />
                        {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="money" className="text-sm font-medium text-gray-700">
                            予算 (円)
                        </Label>
                        <Input
                            id="money"
                            type="number"
                            value={money}
                            onChange={(e) => setMoney(Number(e.target.value))}
                            disabled={isLoading}
                            className={`transition-colors ${errors.money ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`}
                            placeholder="0"
                            min="0"
                        />
                        {errors.money && <p className="text-red-500 text-sm mt-1">{errors.money}</p>}
                    </div>

                    <Button
                        type="button"
                        onClick={handleClick}
                        disabled={isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "送信中..." : "追加"}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Page
