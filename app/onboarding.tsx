import { PlantlyButton } from "@/components/PlantlyButton";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);

  const handlePress = () => {
    toggleHadOnboarded();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <PlantlyButton title="Let me in" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
