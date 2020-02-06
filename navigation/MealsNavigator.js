//import { createStackNavigator } from 'react-navigation-stack';
//import { createAppContainer } from 'react-navigation'; //npm install --save react-native-gesture-handler@1.4.1 -D -E

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

// const Stack = createStackNavigator();

// function MealsNavigator() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

// const MealsNavigator = createStackNavigator(
//     {
//         Categories: {
//             screen: CategoriesScreen,
//         },
//     },
//     {
//         initialRouteName: 'Categories',
//         defaultNavigationOptions: {
//             gestureEnabled: true,
//         },
//     }
// );

// export default createAppContainer(MealsNavigator);