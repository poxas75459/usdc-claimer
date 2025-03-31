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
    "3Hpv7YCSw4eZgKRKuocxvmJqksYFaQASBzyfRrNZGYgis3B1zoRPogqUecX7AdSfy6B1jTGu4MAyqVF1LirgGg8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35HvwBH1j8nkTazYFSp8nLDZs6NJDE1tjsjkZj8nF6FYQPWhX3heUH5FPmNXEELk2KfJ2sL7MVLnbHLt26E4ZYaf",
  "key1": "4YSveKnfaEERrm6iZnx5gLiiDSMTaMCp2shjToDbJr62yFuPzJU7F8dVH6QXngFRhZD1o7nH1BrzffyEsRwyHbGb",
  "key2": "Fo3XazzjQALgwpCqvAwssNLTRcpo78ekmAmmVpkX6W2ri2yMycdceM6swYk8kfA9fHfnJzqqiGeFFrHUyjRiWcL",
  "key3": "2V76sSbS4zGt5XdPLSJ3yZAqGPyR72yU3Vf7BSU5Vhs2h6xYHv1izzehCQswMgsMHpWqC8VqmcmQGKaR8KX9HRdy",
  "key4": "4W5wAeZuerv3hUg8dzaiYEMvSQKRkecVCifunaBa7JsCA4sSaKLpK5YyvnA5mEzwVwKYF576nwLRTeiFXauCMqgU",
  "key5": "3j2mufqCDtp7M5ogwoZq934oDSysh11wNzEnn1EhbCdXFw85eyzpuubbVBezXytcNkTgnMoffbtCfx5D5dYv1zuM",
  "key6": "4Nv2PtfpBtx16Ph4eoS5Wh7T2h51bxBCnyLLxVKXBSGzkP6fFVcyt2qzyTRU8519FH4B4w3DExyEoyHGTb4PKq7L",
  "key7": "3kbgKU1JqSFR8Ht7m5Sdb6T8SW7XUFy8yDvEFLnHAJZmdBGBw2rUaF2iKTN3bwhkJzbmowzpJvdZ2qobhXmWybDj",
  "key8": "3dabXdfVTWSqwjq5X3szCAj8GSLJDmE9V1JF6eQ7Q7sQhhJGrHKcZ9xAcj2GLHi6ugqcF37wzrRuKCQnBdQVEKbM",
  "key9": "4ZnD5PdbqxkvrekjC3Datd5SFKenVsF6mLsRhuyPZDMf2pvxgXTqSiKZxT9MumDLYFLamCwTYenNNmpBva6rGTxt",
  "key10": "RGkTPJtJeVnZBzKQEzDh5Yn7kbPyF8qownG5tG8Ud9qH9FmbXcSx8ENteevwfwJujYHZJ1d6JryeBJXYzKm9HfL",
  "key11": "3D38g8AHfgPMH25tRTDeHdoZhe9oiVfpjsPmDcsjWyKMMXW12wiPxxu1dwATu4HSgDqDGt7PMELDrSGA1k96VLTV",
  "key12": "2wctEt4oDpxkbmLT22vdRXSagQ4oHKiPMKejbe6qA6LVug6TwuUgmkEXhC28bdP9Axxsa9WbVvjeUg2cfb5Lt9n4",
  "key13": "5TFcEXtLrRtJdUWmJKv3rxNGzuGgsMRt9K35dUW7hHyjmWvG2oBiwze2vYq7tSQKVSnuLt4Ms9N6Ut8QnRkQbKa9",
  "key14": "3vQ3ZaXzdEe8hsz4aKM2kXQTVvvfBkhvySDYj6A7piUzJLpE8NgBcxhZv4ffQ4nxmvAzL7vkiM12f5KJ6hEgiCpD",
  "key15": "2PrLYSdZ5iupFeSokBRY8vxSBSDiw43PUBF7rDnGkbqZzr719RcsgLk5FNq7MddEwR6Uef3b4RCDoSGZKFXyjpVF",
  "key16": "2agXLLfYXS4hEXe2TUMP2ok9d75UBRsQrXz9CVAr5hk4gMLr5E1Nsgh181ufLH63UFxuXyuwArq2yuNDWaAyJMvd",
  "key17": "5FF34pyGhXp32Zqz8t21uJyKGT4vhpPibAbsn2KUC46oAyMNhpYPVSNdioJtwWFGaJH3GMohT9ztKaKp89An1Jwb",
  "key18": "2CuQfmYd3QDepEA9RwLPUJcRC7u1EPoW1k1qZAQnWMJogozUjR4QLgCWyR9hrPvXcGivue3nzT46N5NNM49K4rHR",
  "key19": "63U2MaRFKt9hFM6rQRmNrWgURMzEyirzaupjLmpCiDAjgenuRZXy9RT8qDGFkycSEjp9FjiSueb9jykL48y3uC9g",
  "key20": "572A1NFhNGcgwL8j1jmXSka9gHVYU4Gf2VRL9iUNik4nWT6NNZdybgGw8b7MEaweK9Q7rxyRmwnz5tBjzmgceYPX",
  "key21": "2nnAbWZA4DDa3tJA5bDQP4Cj2NaJnF2rongXh4U3Ezp4a4qiooiDgEthuQriFfFjwitUHXwV9qesWhY9PmiX2oDg",
  "key22": "39iL7CowfoysTNtg1w5rBJBuB2n5BtHHTpZY8Ysj2gGhqBm7NXNw7qnJnceZJ9NygbR2smbaQq9ipoGNkzm9YkqB",
  "key23": "2FrBuLig4kSQgnZhyPAL31fzn8aa1u8MYQuLwaN8SiphJ7r7yjF2adRo2MoPBr9HShWDGtZFDGb7v6KbHYfiNa1S",
  "key24": "3o68ftkNtE5ZMcgnAKDFnzfwTFpQPP8gfyUVZwkWagDPQDmbbp4zwCavHzWYYwCeC3FW1D5mcaAJDJYUpDdw6mrM",
  "key25": "4cBZoKSH6VmEvekee2yygsncCRtEPkdpwrj9xZdbAZx2zP9zcWciAgmqHnHWLu9hZHD98n5jJczJ5eph26bS1fNj",
  "key26": "5mKYkUG5j6gjw4J4LkqwEraxbhxYmQH1J9RFDF5Fsh32PQk4Z6TJW41HpwZv9HyShMgRC2b368JbM8SCkn4sKw4H",
  "key27": "2XbFcWzJBzkbkR4SWLqwsFjgLK262cvRhBvbnBghsrawDAGmWA8RaawZNK6MpxUU95Vv3bxwX1JVznNTbAhCsA4d",
  "key28": "5pDH8KFSb8ZQ8Vy9fHERonQjJACnweu4E7r9qvm7Dg6dUp56WeNBsdeszyJYsDPopKiPmp28Bfib7EVCadoSf71o",
  "key29": "58uGtfHziWzcCqHyvxosdpFbdpgKkwXtv6HinJjzYsqtjGXSGN8knhCNaUvGMehCDov6mehngunL6PJWW4Njdtzn",
  "key30": "5rZG7ALJiJmt9RFs1QfNSWeLDcWPSZ57uQWiFhLiFcWsE9JB47CPQsskxFttAthP4sJZrY55qhLZJCENpFLCb5Zq",
  "key31": "5RZGkPJQfDaLzE5Eg1npn9njUDh8TkUAmz7QmWLBMCB4b2sU14ZZRuUN9cNh3fVJcgtAdwWWVtdoCbmN61B2NEgK",
  "key32": "39XLNqHJSfie2BwWnCV9iRCNg4oVjwaZJVZQN2X3RkHad1QyddbpTD4541RwQvr8RiiV3LhahfkvfjZZE9dz6Gf2",
  "key33": "57UrJgqKMvTHcNm77wVintd9gZYbRrS2FGqTCDzX5ETsEo6fxj7QoMDRvQLQzkXDN5ebTkzrovwpnQgH7cHyNo2C",
  "key34": "nixG5dV21RVme51mc8ZmMUyjfG8bpYzt2x2tzS7rFp7qwJxhD5MLiHp65zqfnspPpmd7qKgDTsVgYv1VRGfcBp5",
  "key35": "4guYVuFmhapucrZw5g89MbdKafoLesVqQah3vr5HoGbr8JcDV9xcXtBMq5EV4Som5Vz66Dc8mjp6ruSFxqXruRsd"
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
