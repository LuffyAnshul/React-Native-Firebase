import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { setConfigurationAsync } from 'expo/build/AR';
import { defineLocale } from 'moment';

class UserPermissions {
    getCameraPermission = async () => {
        if(Constants.platform.ios || Constants.platform.android){
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status != 'granted') {
                alert('We need permissions to use your camera roll');
            }
        }
    };
}

export default new UserPermissions();