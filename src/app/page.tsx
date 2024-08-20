import PhoneAutocomplete from "@/components/PhoneAutocomplete";


const resData = [
  {
    "id": "e5622764-e720-4452-9500-12a0b98ccd1d",
    "name": "Test",
    "phone": "923000000002",
    "created_at": "2024-08-12T13:17:39.380Z",
    "updated_at": "2024-08-12T13:17:39.380Z",
    "orders": {
      "id": "a8a059c4-0596-43f8-b797-b8037f6fdf18",
      "order_id": "123",
      "instructions": "askdjaskldj",
      "promo": "0.00",
      "ready_time": 10,
      "pickup_eta": "2024-08-14T10:41:32.990Z",
      "customer_eta": null,
      "total_eta": null,
      "status": "cancelled",
      "created_at": "2024-08-14T10:31:32.999Z",
      "updated_at": "2024-08-15T06:56:42.037Z",
      "address": {
        "id": "738e0431-e768-4ba0-8cb5-7c421f886202",
        "place_id": "ChIJWQk10f1E24AR64VZox2aHEM",
        "street1": "10600 Highland Springs Avenue",
        "city": "Beaumont",
        "state": "CA",
        "zip": "92223",
        "lat": "33.9676668",
        "long": "-116.941603",
        "coordinates": {
          "type": "Point",
          "coordinates": [
            -116.941603,
            33.9676668
          ]
        },
        "created_at": "2024-08-12T13:17:39.380Z",
        "updated_at": "2024-08-14T10:31:32.999Z"
      }
    }
  },
  {
    "id": "e5622764-e720-4452-9500-12a0b98ccd1d",
    "name": "Test2",
    "phone": "923000000002",
    "created_at": "2024-08-12T13:17:39.380Z",
    "updated_at": "2024-08-12T13:17:39.380Z",
    "orders": {
      "id": "a8a059c4-0596-43f8-b797-b8037f6fdf18",
      "order_id": "123",
      "instructions": "askdjaskldj",
      "promo": "0.00",
      "ready_time": 10,
      "pickup_eta": "2024-08-14T10:41:32.990Z",
      "customer_eta": null,
      "total_eta": null,
      "status": "cancelled",
      "created_at": "2023-08-14T10:31:32.999Z",
      "updated_at": "2023-08-15T06:56:42.037Z",
      "address": {
        "id": "738e0431-e768-4ba0-8cb5-7c421f886202",
        "place_id": "ChIJWQk10f1E24AR64VZox2aHEM",
        "street1": "10600 Highland Springs Avenue",
        "city": "Beaumont 2",
        "state": "CA",
        "zip": "92223",
        "lat": "33.9676668",
        "long": "-116.941603",
        "coordinates": {
          "type": "Point",
          "coordinates": [
            -116.941603,
            33.9676668
          ]
        },
        "created_at": "2023-08-12T13:17:39.380Z",
        "updated_at": "2023-08-14T10:31:32.999Z"
      }
    }
  },
  {
    "id": "7e8d32f8-e94a-433d-8fc4-73ba30021cff",
    "name": "My User",
    "phone": "923000000211",
    "created_at": "2024-08-15T11:44:03.815Z",
    "updated_at": "2024-08-15T11:44:03.815Z",
    "orders": {
      "id": "a45de2fd-0183-4c87-8b1a-7ce7dc4976f7",
      "order_id": "123",
      "instructions": "New instructions",
      "promo": "0.00",
      "ready_time": 15,
      "pickup_eta": "2024-08-15T11:59:20.591Z",
      "customer_eta": null,
      "total_eta": null,
      "status": "open",
      "created_at": "2024-08-15T11:44:20.597Z",
      "updated_at": "2024-08-15T11:44:20.597Z",
      "address": {
        "id": "1562d9ff-5d3b-478b-ba25-c09926dbf03c",
        "place_id": "ChIJYYhacgr2wokRrU5N2oXEOW8",
        "street1": "159 East 125th Street",
        "city": "New York",
        "state": "NY",
        "zip": "10035",
        "lat": "40.8042694",
        "long": "-73.9365823",
        "coordinates": {
          "type": "Point",
          "coordinates": [
            -73.9365823,
            40.8042694
          ]
        },
        "created_at": "2024-08-15T11:44:03.815Z",
        "updated_at": "2024-08-15T11:44:20.597Z"
      }
    }
  }
]

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Phone Number Autocomplete</h1>
      <PhoneAutocomplete data={resData } />
    </div>
  );
}
