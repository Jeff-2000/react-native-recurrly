import "@/global.css"
import {Text, View} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";

export default function SubscriptionDetail() {
    const {id} = useLocalSearchParams<{ id: string }>();

    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold">
                Subscription Detail: {id}
            </Text>
            <Link href="/">Go back</Link>
        </View>
    );
}
