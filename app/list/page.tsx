import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Page = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.from("places").select("*");
    
    if (error) {
        console.log("error", error)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">Places</h1>
                <p className="text-slate-600 mb-12">素敵な場所たちをチェック</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.map((place) => (
                        <Card key={place.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-xl text-slate-900">{place.location}</CardTitle>
                                <CardDescription className="text-slate-600">{place.reason}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700 text-sm leading-relaxed">{place.details}</p>
                            </CardContent>
                            <CardFooter className="bg-slate-50 pt-4">
                                <Link 
                                    href={place.map} 
                                    target="_blank" 
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                >
                                    場所を見る →
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
