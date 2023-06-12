export interface Data {
  Rpm_Utensile: number   // Velocità Utensile
  On_Rpm_Utensile_CD: number   // Countdown tempo in sec Utensile attivo
  Off_Rpm_Utensile_CD: number   // Countdown tempo in sec Utensile inattivo
  Tempo_Rpm_Utensile_CD: number   // Countdown tempo mantenimento impostazioni Utensile
  Temperatura: number   // Temperatura Vasca
  On_Caldo_CD: number   // Countdown tempo in sec Caldo attivo
  Off_Caldo_CD: number   // Countdown tempo in sec  Caldo inattivo
  Tempo_Caldo_CD: number   // Countdown tempo in sec mantenimento impostazioni Caldo
  On_Freddo_CD: number   // Countdown tempo in sec Freddo attivo
  Off_Freddo_CD: number   // Countdown tempo in sec Freddo inattivo
  Bar_Vasca: number   // Pressione Vasca
  On_Vuoto_CD: number   // Countdown tempo in sec Vuoto attivo
  Off_Vuoto_CD: number   // Countdown tempo in sec Vuoto inattivo
  Tempo_Vuoto_CD: number   // Countdown tempo in sec mantenimento impostazioni Vuoto
  N_Rotazioni_Spatola_CD: number   // Countdown numero rotazioni
  Pausa_Spatola_CD: number   // Countdown tempo in sec di pausa tra le n rotazioni
  Time_HH: number   // Ora
  Time_MM: number   // Minuti
  Time_SS: number   // Secondi
}

export interface Config {
  Set_Rpm1_Utensile: number // Set Point velocità 1
  Set_Rpm2_Utensile: number // Set Point velocità 2
  On_Rpm_Utensile: number // Tempo in sec Utensile attivo
  Off_Rpm_Utensile: number // Tempo in sec Utensile inattivo
  Tempo_Rpm_Utensile: number // Tempo mantenimento impostazioni Utensile
  Potenziometro_On: boolean // Potenziometro attivo
  Set_Reverse: boolean //	Rotazione Utensile al contrario
  Set_Caldo: number // Set Point Caldo
  Set_Vapore_Diretto: number // Set Point Vapore Diretto
  On_Caldo: number // Tempo in sec Caldo attivo
  Off_Caldo: number // Tempo in sec Caldo inattivo
  Tempo_Caldo: number // Tempo mantenimento impostazioni Caldo
  Set_Freddo: number // Set Point Freddo
  Set_Gelida: number // Set Point Gelida
  On_Freddo: number // Tempo in sec Freddo attivo
  Off_Freddo: number // Tempo in sec Freddo inattivo
  Tempo_Freddo: number // Tempo mantenimento impostazioni Freddo
  Set_Vuoto: number // Set Point Vuoto
  On_Vuoto: number // Tempo in sec Vuoto attivo
  Off_Vuoto: number // Tempo in sec Vuoto inattivo
  Tempo_Vuoto: number // Tempo in sec mantenimento impostazioni Vuoto
  Set_Pressione_In: number // Set Point Pressione in vasca
  Set_Pressione_Out: number // Set Point Pressione fuori vasca
  Spatola_On: boolean // Spatola attiva
  N_Rotazioni_Spatola: number // Numero di rotazioni spatola
  Pausa_Spatola: number // Tempo in sec di pausa tra le n rotazioni
  Aggiunta_Ingredienti: boolean // Aggiunta ingredienti fine fase

  N_Fase: number // Numero fase visualizzata
  N_Fasi_Ricetta: number // Numero fasi totali della ricetta attuale (max 10 fasi)
  P_Avvia: boolean // Pulsante Avvio ricetta
  P_Pausa: boolean // Pulsante Pausa ricetta
  P_Stop: boolean // Pulsante Stop ricetta
}
