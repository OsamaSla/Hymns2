import { I18nManager } from 'react-native';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './SearchPage';
import EditPage from './EditPage';
import SettingsPage from './SettingsPage';
import AddHymn from './AddHymn';
import AddTranslation from './AddTranslation';
import EditHymn from './EditHymn';
import DeleteHymn from './DeleteHymn';
import Home from './screens/Home'; // Corrected import path
import DetailsScreen from './DetailsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

I18nManager.forceRTL(true); // Enable RTL layout
I18nManager.allowRTL(true);

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

function EditStack() {
    return (
        <Stack.Navigator initialRouteName="EditPage">
            <Stack.Screen name="EditPage" component={EditPage} options={{ title: 'تعديل' }} />
            <Stack.Screen name="AddHymn" component={AddHymn} options={{ title: 'إضافة ترنيمة' }} />
            <Stack.Screen name="AddTranslation" component={AddTranslation} options={{ title: 'إضافة ترجمة' }} />
            <Stack.Screen name="EditHymn" component={EditHymn} options={{ title: 'تعديل ترنيمة' }} />
            <Stack.Screen name="DeleteHymn" component={DeleteHymn} options={{ title: 'حذف ترنيمة' }} />
        </Stack.Navigator>
    );
}

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [font, setFont] = useState('default');
    const [fontSize, setFontSize] = useState(16);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const changeFont = (newFont) => {
        setFont(newFont);
    };

    const changeFontSize = (newSize) => {
        setFontSize(newSize);
    };

    const theme = isDarkTheme ? DarkTheme : DefaultTheme;

    function MyDrawer() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Main" component={MyStack} />
                <Drawer.Screen name="SearchPage" component={SearchPage} />
                <Drawer.Screen name="Edit" component={EditStack} />
                <Drawer.Screen name="Settings"
                    options={{ title: 'إعدادات' }}
                >
                    {(props) => <SettingsPage {...props} toggleTheme={toggleTheme} changeFont={changeFont} changeFontSize={changeFontSize} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        );
    }
    return (
        <NavigationContainer theme={theme}>
            <MyDrawer />
        </NavigationContainer>
    );
}
