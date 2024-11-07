import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import groupLogo from '../../assets/group_logo.png';

const ChatHeader = ({ from, to }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.groupname_nav}>
                    <TouchableOpacity style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Trip 1</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="create-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.tripInfo}>
                <View style={styles.grouplogo_info}>
                    <View style={styles.avatarGroup}>
                        <Image 
                            source={groupLogo}
                            style={styles.groupLogo}
                        />
                    </View>
                    <View style={styles.locationInfo}>
                        <Text style={styles.locationText}>From: {from}</Text>
                        <Text style={styles.locationText}>To: {to}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={toggleMenu}>
                    <Ionicons name="ellipsis-vertical" size={24} color="black" />
                </TouchableOpacity>

                <Modal
                    animationType="none"
                    transparent={true}
                    visible={showMenu}
                    onRequestClose={closeMenu}
                >
                    <Pressable
                        style={styles.modalOverlay}
                        onPress={closeMenu} 
                    >
                        <View style={styles.menu}>
                            <Pressable 
                                style={styles.menuItem} 
                               
                            >
                                <Ionicons name="people-outline" size={24} color="black" />
                                <Text style={styles.menuItemText}>Members</Text>
                            </Pressable>

                            <Pressable 
                                style={styles.menuItem}
                            >
                                <Ionicons name="call-outline" size={24} color="black" />
                                <Text style={styles.menuItemText}>Share Number</Text>
                            </Pressable>

                            <Pressable 
                                style={styles.menuItem}
                            >
                                <Ionicons name="alert-circle-outline" size={24} color="black" />
                                <Text style={styles.menuItemText}>Report</Text>
                            </Pressable>
                        </View>
                    </Pressable>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FAF9F4',
        borderBottomWidth: 0.5,
        borderBottomColor: '#E5E5E5',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        paddingLeft: 6,
    },
    tripInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    groupname_nav: {
        flexDirection: 'row',
    },
    groupLogo: {
        width: 34,
        height: 34,
    },
    grouplogo_info: {
        flexDirection: 'row',
    },
    locationText: {
        paddingLeft: 9,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    menu: {
        position: 'absolute',
        right: 10,
        top: 155,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 8,
        minWidth: 200,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    menuItemText: {
        marginLeft: 12,
        fontSize: 16,
        color: '#000000',
    },
});

export default ChatHeader;
