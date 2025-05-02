import { Slot } from "expo-router";
import {View} from "react-native";

export default function Layout() {
    return (
        <view className="flex-1 bg-gray-100">
            <Slot />
        </view>
    );
}