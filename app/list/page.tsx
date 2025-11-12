import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import {
    Card,
    CardAction,
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
    console.log("data", data)
    return (
        <div>
            {data?.map((place) => (
                <Card key={place.id}>
                    <CardHeader>
                        <CardTitle>{place.location}</CardTitle>
                        <CardDescription>{place.reason}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{place.details}</p>
                    </CardContent>
                    <CardFooter>
                        <Link href={`${place.map}`} target="_blank" className="text-blue-600 hover:underline">
                            場所を見る
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default Page
