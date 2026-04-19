import React from 'react';
import {View, Text} from 'react-native';
import { styled } from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function Settings() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text className="text-xl font-bold">Settings</Text>
        </SafeAreaView>
    );
}
