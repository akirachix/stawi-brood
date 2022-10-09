
#include "DHT.h"

#define RELAY_FAN_PIN A5 // Arduino pin connected to relay which connected to fan
#define DHTPIN 12 
#define LED 13          // Arduino pin connected to relay which connected to DHT sensor
#define DHTTYPE DHT11

const int TEMP_THRESHOLD_UPPER = 25; // upper threshold of temperature
const int TEMP_THRESHOLD_LOWER = 20; // lower threshold of temperature 

DHT dht(DHTPIN, DHTTYPE);

float temperature;    // temperature in Celsius

void setup()
{
  Serial.begin(9600); // initialize serial
  dht.begin();        // initialize the sensor
  pinMode(RELAY_FAN_PIN, OUTPUT); // initialize digital pin as an output
}

void loop()
{
  // wait a few seconds between measurements.
  delay(2000);

  temperature = dht.readTemperature();;  // read temperature in Celsius
  Serial.println (temperature);;
  
  if (isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
  } else {
    if(temperature > TEMP_THRESHOLD_UPPER){
      Serial.println("The fan is turned on, temp is high");
      digitalWrite(RELAY_FAN_PIN, HIGH); // turn on
    } else if(temperature < TEMP_THRESHOLD_LOWER){
      Serial.println("The fan is turned off, temp is low");
      digitalWrite(RELAY_FAN_PIN, LOW); // turn on
    }
  }
}
