import "@/global.css";
import {Text, View, TextInput, TouchableOpacity} from "react-native";
import {Link} from "expo-router";
import {useState} from "react";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () => {
        // Sign up logic here
        console.log("Sign up:", {email, password});
    };

    return (
        <View className="flex-1 items-center justify-center bg-background p-4">
            <Text className="text-3xl font-bold mb-8">Sign Up</Text>

            <TextInput
                className="w-full max-w-sm bg-white border border-gray-300 rounded-lg p-4 mb-4"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                className="w-full max-w-sm bg-white border border-gray-300 rounded-lg p-4 mb-4"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TextInput
                className="w-full max-w-sm bg-white border border-gray-300 rounded-lg p-4 mb-6"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <TouchableOpacity
                className="w-full max-w-sm bg-primary rounded-lg p-4 mb-4"
                onPress={handleSignUp}
            >
                <Text className="text-white text-center font-bold text-lg">Sign Up</Text>
            </TouchableOpacity>

            <Link href="/(auth)/sign-in" className="text-primary mt-2">
                Already have an account? Sign In
            </Link>
        </View>
    );
}
