/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "44gsS1ey8C68S55tcUZkzphTcRjtvFGiGULDoKp5TgmsbDz3MUMxEecnoPp6cY4s2XjMSjkVxWNDNdxKDuKrGJx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBc6UGcnLWdcosUaiJgoSiZBmp3AK6WeBbTy1tMLRwykhhEEQ2yr29es6FT2bVqNAnrJx7NKFmW6keHmsmJHqwm",
  "key1": "3Ah926ywM8xsG8v9rxNzNpESdGaafvUTEyphym9XMJKDsNLW6bmGcpEaVK6juFKkqXgom84f818B5hs9gedQsyMc",
  "key2": "YAu2Rxp1SnSu4hcqbxPXGFDJBijbEjQNvmxx48mhZZE6TaKQvjbTFgBaHndLs3nbRcCQihy2gBeG5KGX5Qvz9fn",
  "key3": "3dwBQ5yrrXBPoAL92uzJKu4M2tJisvCsSQz8cHDuu1nXg9Cs4kPJKP6ZhGhhApjvuTFG2FHkRSXWgbL5JYAa9oyG",
  "key4": "5tcCMuD73C1DoqLNe6kqRa5yDk9ydtNzi6ZaZYtC9b8WxWnLaNgpMGsJBirVax4hUPGczzTz5Hec3bfW25KRSriZ",
  "key5": "5J6xZB2EZCkrStrD6ErhYeefZjK5GsGiWvHnC8DYxeiCjK3J3U1pj2wMb38pnVSc2YqpQK9PWwr92UQ9M9y8UzHR",
  "key6": "5ioozwCMxnDmPXqv2yjADy7ZNkaPnpKXzDcLAUAetoTi1vNhG7DiNixwWUHupDTM9hv4TaggTCpP2HgzzoiMEgti",
  "key7": "5kBDx962QHHyWFu7nsfbJH8n24DvL5V5JzTFW9Zx6dDMFbHvMXn9RFJr8vUSjgSjMSuyodUbyZ8dkZne6TLNxon",
  "key8": "4onr4rNqTmVce2dyPcz7gibapAX3haj6iCvU5npfHQG1rq4tRmV1EMDc5ZLxbHftXLKMAVDMdkGNhLoS2sR131eh",
  "key9": "4TcBQckRrUBCnx8SbwamSKjWREiL9r5Mj57vjG3z499HwV98NogMNgzBJrPGu7sXEqaYoKJxgfRkftLPjqjkuC9f",
  "key10": "5wb55UwJciKXbXWLc4NMHScG4nDwSoB81R3kWuRBdexGDjWY5EgBzsSgH2eDDRRG63C6pnTfy8Txt4bBCrUawqYB",
  "key11": "5xLHX1ZFkxFbUg6rqYiV5NoXcwqUyVncGYWJTPsqRCbNudkK2qW7yhEC34hyNyzxeEKg2eT4YST4Kx5r4Fq4G2xX",
  "key12": "VwTzjTC18ugW4HL5MQZqSMnSvCa3nXSxwgtB9bJz9cy2j2LKd4F16H2RmekWEeFxeTUFRU4cU4iZb31KvZ7DnuT",
  "key13": "41vjvNzjpkyYpkb3aoyYpq6J5ZbTJY7Qw276GsZJge8fTCAvTCE7bgB75zs98pdn6DTK9MrcxMa2iX8vsKV3xArD",
  "key14": "5vosrfKitNu2pNz5DhByU3ULWFePtuSwSFbKK5j1GZb7w8Rx1BhaiLdg5ByT76dA26NF1YumvjkP49YcnncmFCDJ",
  "key15": "4hshDg1uhm6eUfzE1rtyh6GhChMNMVwL2osJkZwXUq6ANmmJ4b5Su1hGXyEb98iJiQ9hPmN4t4PowbFV6HTvuFdd",
  "key16": "uZA8MZASn4m5m5dkJLxJZ5JEbRgJfNENZn8PqpAg8VjH9swuY13WT9gAuEJ4gV3jwxeoN1mQWMdDEgjFWooFErp",
  "key17": "4UYzCiurnxp5gQRUefheTqryoeA1fWar9rywjvQfgzBnQyTo8yFkqtFZ6jMAtwncmcZaKFmJ82HHZnehowR2Txtu",
  "key18": "5N2EQaHG7pYmyMd5xaqmu7nrA8E7SMVie2RUdVTR9C5Vxz3WxwCN5mQ79kwbYThYu6g3dxp4yyxRZ5t9L3k1ZXPo",
  "key19": "5AiEgs5s18pEzJNeUjQXS4tytSLGUoAsrWr2iYziFAp5yrZUqLw99onFo8H9xE3PrjyKZ3AHnKs2vThHNn7CvfZh",
  "key20": "4xaYNs3ekf6uiwoyiRYSKT77YXvBz6t234NGC4jj5k1JV1KBg768DUybLYeTTLbWBBsLsFQ6zY9qsd3cFHrAEThA",
  "key21": "4Np7pDbZjQ22g1h3y9BcvXrmFdSTqPskiSyF3a9KNZ8AqReBfj2BgV8QpwJvRTaLRdwAUKXT8xGZG2JGD2GubuJh",
  "key22": "4tQfLcSAMN8A3CvHhZiHkDVgukoVh4mn8zCwMBF6PEyMKCijqrU1FimfbjM5dxDKh7qgib2qUkWEwTEfWfTa5u56",
  "key23": "qqCjLe4xSjLSit33G8SRMTGNsCXhR9hCwLcfDoDXb3wGMiUg9KpzSZgeNQB8EKeau4GHq8jz3G4dk3qt18bAPi3",
  "key24": "4Huq3MArRPh9wrzfJHkRzu5ubH8mQLnu9pKJxFrV7yfPHw5k87Sb5tzuUz1zeDqyup5t3KpYHBbTVkbLnjx7y3ox",
  "key25": "3VkvJ6QJDdS5JJAUfUQRVGd3Ks9GUXUDREoRRsoSpNJkfzpwGW1uSAripr6gWFwswEiRtp7kpsFzYHoa3sHSDsko",
  "key26": "4rSTm7ToN5QADnfqU6kV9goWF77tQbeBh7fAbQx9DdDkX1euxjRK7jVh1LULrGtnAkceifTHSKnHdPdpgYXG6XtX",
  "key27": "3VrQvp2n4UtmTuefNdEhu3wmPCTHsGJ5NEgE1PKhzThsmuh6ptRBtEEHdGjDVLDoZXAkpgfuKnU8zktH2d7xtEjN",
  "key28": "25L662bqHu14Uy6AHQ6BpHPWqkJyQd3PxSUToNBz9jyAwKwzxRa7EAQqF8xafPE6fDr65zQEvfy52H7g29AYDKr7",
  "key29": "4GXgFeVV8ZdpY5h4nRYjuF9w6NiAwQJLGYJTv8JG58oXC7vC7377qmX9gjsFCx4Afsf3tsHwUz7RgEDJP3uM8zJ8"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
