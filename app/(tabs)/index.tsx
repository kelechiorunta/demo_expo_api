// import React, { useState, useCallback, memo } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   SafeAreaView,
  
// } from 'react-native';
// import axios from 'axios';
// import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
// import Spinner from '@/components/Spinner';
// import { useQuery } from '@tanstack/react-query';

// const HomeScreen = () => {

//   const [loading, setLoading] = useState(false);
//   const [placeholders, setPlaceholders] = useState([]);

// // A fallback API function. When using this remove useQuery functionalities but it lacks caching ability
// //   //Asynchronous API Function to fetch placeholder data
// //   const fetchPlaceholders = useCallback(async (url: string) => {
// //   setLoading(true);

// //   try {
// //     const response = await axios.get(url);
// //     const data = response.data;

// //     console.log("Fetched data:", data);
// //     setPlaceholders(data);
// //   } catch (err) {
// //     console.error("Error retrieving placeholders:", err);
// //   } finally {
// //     setLoading(false);
// //   }
// // }, [placeholders]);

//   // Asynchronous API function passed to useQuery to handle data fetching
//   const fetchPlaceholders = (): Promise<any[]> => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         setTimeout(() => {
//           resolve(response.data);
//         }, 3000); // 3-second delay
//       })
//       .catch((err) => {
//         console.error("Error fetching placeholders:", err);
//         reject(err);
//       });
//   });
// };
  
//   const { data, isLoading, refetch } = useQuery({ queryKey: ['placeholders'], queryFn: fetchPlaceholders, enabled:false })

//   type PlaceholderItem = {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// };

//   // Custom component passed as an argument to map array items to the FlatList Component
//   const renderItem = ({ item }: { item: PlaceholderItem }) => (
//     <View style={styles.placeholderItem}>
//       <View style={styles.avatar}>
//         <Text style={styles.avatarText}>{item.id}</Text>
//       </View>
//       <View style={styles.placeholderContent}>
//         <Text style={styles.placeholderTitle}>{item.title}</Text>
//         <Text style={styles.placeholderBody}>{item.body}</Text>
//       </View>
//       <Text style={styles.placeholderId}>{item.userId}</Text>
//     </View>
//   );

//   return (
    
//       <SafeAreaView style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Welcome, KELECHI O.</Text>
//         </View>

//         {/* Search */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={() => refetch()}
//             style={{
//               backgroundColor: '#007bff',
//               paddingVertical: 12,
//               paddingHorizontal: 24,
//               borderRadius: 8,
//               alignItems: 'center',
//             }}
//           >
//             <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, height: 20 }}>
//               Get My Posts
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Email List */}
//         { isLoading ?
//           <View style={styles.spinner}>
//             <Spinner />
//           </View>
//           :
//           <FlatList
//             data={data}
//             renderItem={renderItem}
//             keyExtractor={(item, index) => index.toString()}
//           />
//         }

//         {/* Bottom Status */}
//         <View style={styles.bottomStatus}>
//           <Text>Updated Just Now</Text>
//         </View>

//         {/* Floating Compose Button */}
//         <TouchableOpacity style={styles.fab}>
//           <MaterialIcons name="edit" size={24} color="#fff" />
//         </TouchableOpacity>
//       </SafeAreaView>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 16,
//     fontFamily: 'Poppins',
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   spinner: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   headerText: {
//     fontFamily: 'Poppins',
//     fontSize: 28,
//     fontWeight: 'bold',
//   },
//   tabs: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     gap: 16,
//     marginBottom: 8,
//   },
//   tab: {
//     fontFamily: 'Poppins',
//     color: '#888',
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     borderColor: '#ccc', 
//   },
//   tabActive: {
//     fontFamily: 'Poppins',
//     borderRadius: 20,
//     padding: 10,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 6,
//     textAlign: 'center',
//     alignItems: 'center',
//     width: 150,
//     color: 'white',
//     backgroundColor: '#007bff',
//     fontWeight: 'bold',
//   },
//   search: {
//     fontFamily: 'Poppins',
//     // width: '90%',
//     marginLeft: 16,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#f0f0f0',
//   },
//   buttonContainer: {
//     margin: 'auto',
//     width: 'auto',
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#ccc',
//     borderRadius: 10,
//     height: 40,
//     marginBottom: 20
//   },
//   placeholderItem: {
//     fontFamily: 'Poppins',
//     flexDirection: 'row',
//     padding: 16,
//     borderBottomWidth: 0.5,
//     borderColor: '#ccc',
//     alignItems: 'flex-start',
//   },
//   avatar: {
//     fontFamily: 'Poppins',
//     backgroundColor: '#ddd',
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   avatarText: {
//     fontFamily: 'Poppins',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   placeholderContent: {
//     fontFamily: 'Poppins',
//     flex: 1,
//   },
//   emailSender: {
//     fontFamily: 'Poppins',
//     fontWeight: 'bold',
//   },
//   placeholderTitle: {
//     fontFamily: 'Poppins',
//     color: '#555',
//   },
//   placeholderBody: {
//     fontFamily: 'Poppins',
//     color: '#999',
//     fontSize: 12,
//   },
//   placeholderId: {
//     fontFamily: 'Poppins',
//     fontSize: 12,
//     color: '#999',
//     paddingTop: 5,
//   },
//   fab: {
//     fontFamily: 'Poppins',
//     position: 'absolute',
//     bottom: 30,
//     right: 20,
//     backgroundColor: '#007bff',
//     padding: 16,
//     borderRadius: 30,
//     elevation: 5,
//   },
//   bottomStatus: {
//     fontFamily: 'Poppins',
//     alignItems: 'center',
//     padding: 12,
//     borderTopWidth: 0.5,
//     borderColor: '#ccc',
//   },
// });


// export default memo(HomeScreen)

import React, { useState, memo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import Spinner from '@/components/Spinner';
import { useInfiniteQuery } from '@tanstack/react-query';



const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
  try {
    setRefreshing(true);
    await refetch(); // Triggers the query again
  } finally {
    setRefreshing(false);
  }
};

  // ✅ Step 1: Type for the post
type PlaceholderItem = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const fetchPlaceholders = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<PlaceholderItem[]> => {
  const response = await axios.get<PlaceholderItem[]>(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`
  );
  return response.data;
};

  const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  refetch,
} = useInfiniteQuery<PlaceholderItem[], Error, PlaceholderItem[], string[]>({
  queryKey: ['placeholders'],
  queryFn: fetchPlaceholders,
  enabled: false,
  getNextPageParam: (_lastPage, pages) =>
    pages.length < 10 ? pages.length + 1 : undefined,
});


  const flatData: PlaceholderItem[] = data?.pages.flat() ?? [];


  const renderItem = ({ item }: { item: PlaceholderItem }) => (
    <View style={styles.placeholderItem}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.id}</Text>
      </View>
      <View style={styles.placeholderContent}>
        <Text style={styles.placeholderTitle}>{item.title}</Text>
        <Text style={styles.placeholderBody}>{item.body}</Text>
      </View>
      <Text style={styles.placeholderId}>{item.userId}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome, Kelechi.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => refetch()}
          style={{
              backgroundColor: '#007bff',
              paddingVertical: 12,
              paddingHorizontal: 24,
              borderRadius: 8,
              alignItems: 'center',
            }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, height: 20 }}>Get My Posts</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          data={flatData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          onEndReachedThreshold={0}
          ListFooterComponent={isFetchingNextPage ? <ActivityIndicator size={'large'} /> : null}
          refreshing={refreshing} // This enables the pull-down spinner
          onRefresh={onRefresh}   // This handles the pull-down gesture
          />
      )}

      <View style={styles.bottomStatus}>
        <Text>Updated Just Now</Text>
      </View>

      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="edit" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    fontFamily: 'Poppins',
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 8,
  },
  tab: {
    fontFamily: 'Poppins',
    color: '#888',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderColor: '#ccc', 
  },
  tabActive: {
    fontFamily: 'Poppins',
    borderRadius: 20,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    textAlign: 'center',
    alignItems: 'center',
    width: 150,
    color: 'white',
    backgroundColor: '#007bff',
    fontWeight: 'bold',
  },
  search: {
    fontFamily: 'Poppins',
    // width: '90%',
    marginLeft: 16,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    margin: 'auto',
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: 10,
    height: 40,
    marginBottom: 20
  },
  placeholderItem: {
    fontFamily: 'Poppins',
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    alignItems: 'flex-start',
  },
  avatar: {
    fontFamily: 'Poppins',
    backgroundColor: '#ddd',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16,
  },
  placeholderContent: {
    fontFamily: 'Poppins',
    flex: 1,
  },
  emailSender: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  placeholderTitle: {
    fontFamily: 'Poppins',
    color: '#555',
  },
  placeholderBody: {
    fontFamily: 'Poppins',
    color: '#999',
    fontSize: 12,
  },
  placeholderId: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#999',
    paddingTop: 5,
  },
  fab: {
    fontFamily: 'Poppins',
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 30,
    elevation: 5,
  },
  bottomStatus: {
    fontFamily: 'Poppins',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
  },
});
