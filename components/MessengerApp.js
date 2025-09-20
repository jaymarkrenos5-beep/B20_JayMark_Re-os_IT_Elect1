import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [messages, setMessages] = useState([]);

  // Messenger send
  const sendMessenger = () => {
    if (message.trim() === "") return;
    const newMessage = { id: Date.now().toString(), text: message, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    // Auto reply
    setTimeout(() => {
      const reply = { id: (Date.now() + 1).toString(), text: "Got it! 👍", sender: "bot" };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  // Add comment
  const addComment = () => {
    if (comment.trim() === "") return;
    const newComment = { id: Date.now().toString(), text: comment };
    setComments((prev) => [...prev, newComment]);
    setComment("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.centerWrapper}>
        {/* Messenger */}
        <View style={styles.cardMessenger}>
          <Text style={styles.title}>Messenger</Text>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageBubble,
                  item.sender === "user" ? styles.userBubble : styles.botBubble,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    item.sender === "bot" && { color: "#000" },
                  ]}
                >
                  {item.text}
                </Text>
              </View>
            )}
            style={{ maxHeight: 150, marginBottom: 8 }}
          />
          <View style={styles.messengerBar}>
            <TextInput
              style={styles.messengerInput}
              value={message}
              onChangeText={setMessage}
              placeholder="Type your message..."
            />
            <TouchableOpacity style={styles.messengerButton} onPress={sendMessenger}>
              <Text style={styles.messengerButtonText}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* News Feed */}
        <View style={styles.cardNews}>
          <Text style={styles.title}>NewsFeed</Text>
          <Text style={styles.subtitle}>🚨 Breaking News</Text>
          <Text style={styles.content}>
            🏆 Philippines wins gold in international basketball tournament!
The national team defeated Australia in a close 85-82 game. Fans across the country are celebrating this historic victory.
          </Text>

          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.comment}>
                <Text style={styles.commentText}>{item.text}</Text>
              </View>
            )}
            style={{ maxHeight: 120, marginBottom: 8 }}
          />

          <View style={styles.commentBar}>
            <TextInput
              style={styles.commentInput}
              value={comment}
              onChangeText={setComment}
              placeholder="Add a comment..."
            />
            <TouchableOpacity style={styles.commentButton} onPress={addComment}>
              <Text style={styles.commentButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEFA", // full background
  },
  centerWrapper: {
    flex: 1,
    justifyContent: "center", // centers vertically
    alignItems: "center", // centers horizontally
    padding: 12,
  },

  // Messenger Card
  cardMessenger: {
    width: "90%",
    backgroundColor: "#f0f8ff",
    padding: 16,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 4,
  },

  // News Card
  cardNews: {
    width: "90%",
    backgroundColor: "#fff8f0",
    padding: 16,
    borderRadius: 15,
    elevation: 4,
  },

  // Titles
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#d9534f",
    textAlign: "center",
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
    color: "#444",
    lineHeight: 20,
    textAlign: "center",
  },

  // Messenger
  messengerBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  messengerInput: {
    flex: 1,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#f9f9f9",
  },
  messengerButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 8,
  },
  messengerButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  messageBubble: {
    padding: 8,
    borderRadius: 10,
    marginBottom: 6,
    maxWidth: "75%",
  },
  userBubble: {
    backgroundColor: "#007bff",
    alignSelf: "flex-end",
  },
  botBubble: {
    backgroundColor: "#e4e6eb",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 14,
    color: "#fff",
  },

  // Comments
  commentBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  commentButton: {
    backgroundColor: "#28a745",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 8,
  },
  commentButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  comment: {
    padding: 8,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 6,
  },
  commentText: {
    fontSize: 14,
    color: "#333",
  },
});