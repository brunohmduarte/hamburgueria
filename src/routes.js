import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from "./screens/signin/signin.jsx";
import Signup from "./screens/signup/signup.jsx";
import { COLORS } from './constants/theme.js';
import CustomerAddress from './screens/customer-address/customer-address.jsx';

const Stack = createNativeStackNavigator();

export default function Routes() {
	return <NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="signin" component={Signin} options={{
				headerShown: false
			}} />

			<Stack.Screen name="signup" component={Signup} options={{
				headerShadowVisible: false,
				title: "Voltar"
			}} />

			<Stack.Screen name="customer-address" component={CustomerAddress} options={{
				headerShadowVisible: false,
				title: "Endereço de entrega",
				headerBackTitle: "Voltar"
			}} />
		</Stack.Navigator>
	</NavigationContainer>
}
