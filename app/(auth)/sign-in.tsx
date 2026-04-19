import "@/global.css";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {Link, router} from "expo-router";
import {useState} from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        // Handle sign-in logic here
        console.log("Sign in with:", email, password);
    };

    return (
        <View className="flex-1 items-center justify-center bg-background p-6">
            <Text className="text-3xl font-bold mb-8">Sign In</Text>

            <View className="w-full max-w-md">
                <TextInput
                    className="w-full border border-gray-300 rounded-lg p-4 mb-4"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    className="w-full border border-gray-300 rounded-lg p-4 mb-6"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    className="w-full bg-primary rounded-lg p-4 items-center mb-4"
                    onPress={handleSignIn}
                >
                    <Text className="text-white font-bold text-lg">Sign In</Text>
                </TouchableOpacity>

                <Link href="/(auth)/sign-up" asChild>
                    <TouchableOpacity className="items-center">
                        <Text className="text-gray-600">
                            Don't have an account?{" "}
                            <Text className="text-primary font-bold">Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}
