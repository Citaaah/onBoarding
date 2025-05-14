import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen = () => {
  const [user, setUser] = useState({
    name: "Lene",
    email: "Sharlene@gmail.com",
    gender: "Female",
    age: "19",
    photo: null, // We'll use a placeholder
  });

  const [isEditing, setIsEditing] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.doneButtonText}>Done</Text>

      <View style={styles.profileContainer}>
        <View style={styles.profilePhotoContainer}>
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.editPhotoButton}>
            <Text style={styles.editPhotoText}>Edit foto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileDetails}>
          <View style={styles.profileField}>
            <Text style={styles.fieldLabel}>Name</Text>
            <Text style={styles.fieldValue}>{user.name}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.profileField}>
            <Text style={styles.fieldLabel}>Email</Text>
            <Text style={styles.fieldValue}>{user.email}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.profileField}>
            <Text style={styles.fieldLabel}>Gender</Text>
            <Text style={styles.fieldValue}>{user.gender}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.profileField}>
            <Text style={styles.fieldLabel}>Age</Text>
            <Text style={styles.fieldValue}>{user.age}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "#666",
    fontWeight: "500",
  },
  doneButton: {
    padding: 8,
  },
  image: {
    width: 200,
    height: 200,
  },
  doneButtonText: {
    color: "#5D3891",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 320,
    marginTop: 20,
  },
  profileContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profilePhotoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderHead: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "black",
    position: "absolute",
    top: 15,
  },
  placeholderBody: {
    width: 40,
    height: 50,
    backgroundColor: "yellow",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  editPhotoButton: {
    marginTop: 10,
  },
  editPhotoText: {
    color: "#5D3891",
    fontSize: 16,
  },
  profileDetails: {
    width: "100%",
    marginTop: 10,
  },
  profileField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  fieldLabel: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  fieldValue: {
    fontSize: 16,
    color: "#666",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    width: "100%",
  },
});

export default ProfileScreen;
