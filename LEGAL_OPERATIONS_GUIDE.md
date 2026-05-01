# HoMee: Právní a Provozní Manuál (Launch Readiness)
**Téma:** Legislativa, náklady a připravenost na kontroly.

## 1. Právní podklady a normy (Must-Haves)
Pro legální provoz v ČR musí firma/platforma disponovat těmito dokumenty:
- **Všeobecné obchodní podmínky (VOP)**: Definice vztahu Zprostředkovatel - Zákazník - Dodavatel (HoMee). 
- **Zásady ochrany osobních údajů (GDPR)**: Zejména nakládání s biometrickými údaji a daty z BankID.
- **Rámcová smlouva o spolupráci**: Pro partnery (HoMees) – definováno jako spolupráce s OSVČ (B2B model).
- **Pojistná smlouva o odpovědnosti**: Hromadné pojištění sjednané platformou pro všechny aktivní zakázky.

## 2. Co mít připraveno na případné kontroly?
- **Legal Audit Log (v aplikaci)**: Naše digitální stopa, která dokazuje, kdo byl kdy ztotožněn a jaká smlouva byla podepsána.
- **Evidence tržeb**: Stripe reporty a pro-forma faktury generované naším `BillingEngine`.
- **DPH hlášení**: Pokud platforma překročí obrat, musí být připraveny podklady pro odvedení 21% DPH z provizí.
- **Certifikace**: Kopie zdravotních průkazů (Gastro) a rejstříků trestů uložené v šifrovaném Vaultu.

## 3. Odhadované provozní náklady (První rok)

| Položka | Odhadovaná cena | Poznámka |
| :--- | :--- | :--- |
| **Právní servis** (VOP, Smlouvy) | 50 000 - 80 000 Kč | Jednorázově (profesionální advokátní kancelář). |
| **Pojištění odpovědnosti** | 5 000 - 15 000 Kč / měsíc | Závisí na objemu zakázek. |
| **Stripe Fees** | ~1.4 % + 6.50 Kč | Z každé transakce (strháváno automaticky). |
| **BankID / MojeID API** | Dle objemu | Poplatky za ztotožnění každého nového pracovníka. |
| **Infrastruktura** (Supabase, AI) | 2 000 - 10 000 Kč / měsíc | Škáluje se s počtem uživatelů. |

## 4. Jak nasmlouvat spolupracující?
- **Model B2B (OSVČ)**: HoMees vystupují jako nezávislí dodavatelé. To minimalizuje mzdové náklady platformy.
- **Digitální Onboarding**: Smlouva se nepodepisuje papírově, ale akceptací v aplikaci po ztotožnění přes BankID. To je právně ekvivalentní vlastnoručnímu podpisu.
- **Prověrka**: Každý spolupracující musí nahrát požadované certifikáty do "Certification Wall", které admin (nebo automat) schválí.

---
**Doporučení:** Investujte do kvalitního právního auditu VOP. Vše ostatní (logování, tracking, identity) už máme technicky vyřešeno v jádru aplikace.

// Clean code comment: Compliance guide finalized. Financial roadmap clear. SMRK.
