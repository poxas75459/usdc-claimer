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
    "3LYR9wL7A6Y4PWKLGHCaPtPVkYPTwX8SoNLdXEcKHD76aMrYYr9bEcZJXRRbKTwMXiowi1t3DgY2VmhkeKmKVzgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H8vEGzfG3hANJgUSTduRXxidURjcDdvGgetobCcABgj7AJuptnEF9QZxBbryNELRUNoLMDdmF3GM5eVZvpdhdqg",
  "key1": "4mAPF6qixM7aV1xcDvu18ZexXCqwEWPd3u5tBdq6C4PU8AnoHbhJfpYuB5q2qa4czWid7ADyrrSDk6btRKrfWgVM",
  "key2": "xMucLRs1PGo5j4ELvowWd1CaF9xdxwXdXPCPj4mBb8NYBwfhPRZGve2TVg3N6BSCHoUBANgFyUuU5MApCU2zpCb",
  "key3": "5BYMxoQM75x6moskm8hkMz2rexD6mmcu2Cp7Qfy5rbrJzmnijKCzpiHE8hgtruR7mYMJvBQtiu3MJcq3uUwbqFma",
  "key4": "3MMwHXQyrZG2CKu4DHzZFrDQNzLmEYBJFB2TbYJAp4rNm7NdcbmpimFcZde9nZmrQEbs6T1N5FGgRDdJgCkoVz2j",
  "key5": "4MFvhzc74Jn5cd9ndrDSXVFzFbPMBfrcCyPXDSAjaMw6JX9DpdsTUFMoDbtR2QfWHVqktfmZ9MZLr837zRoWsL8N",
  "key6": "5vaxHoQxCgbQsJzi3bMjQRZ4213xs3WEb2gh9ZPWbYXS23VeAmE1cFkTPmNP3zJ2zrjMMQiSDsqBcLAnV3yU1xnV",
  "key7": "66eg7FcJJvdMhVL7qokXGLJxdbjAiZfompuaRz8ZLsqWTBx52wq6tRmoW2A8gzkK7RVw6UUiwsDYDGZbTwnXT2bK",
  "key8": "5wy5bj7dEZy5sr9UUrGTbybCqYjgqq4WvmJaHTC4FYHpajdPCYH7KHs7Hd69KoDRdGx91S5AnEg76afdxeSio1To",
  "key9": "ZAcgcfmZdjpyacgiFjAqtHU9Rs9kVkayqbNtJ3g1p3beMs8tbyEeW1LQHDiPsahVYtmkdeoZLxVYjhr7Ue7TZ5M",
  "key10": "2rZ9Ubk7X6UKEniCUDDitzN4Kwhww7e5RDcLYUQxfFdjJkb8hjP2EkCKH7LxsUpfUqWW8ezhR46kzWBWFCb2BRFj",
  "key11": "2EPfQT8mud4xnt9xyRXQdmskW2gjh2D6haDCfyCQGnmT6bUMp4JGyhKp9cK1ncHawBfn2QdQtuVpeXff9av6QQMa",
  "key12": "53ATcQJcNhZC2NUkogjyy5K1ngW76hHN6rpS4JCfGEXPhpLoYXQ3mrD1h6xMNf5sqHaUu2zok9dLGiwcEivn57Zm",
  "key13": "om8Zxd2jQ8XqAVdYivSn6qBPfNDxqXCer3P9tzR3xdzMjTrTuR7toH9VtL2C23TSZcRdJmYEfczq7sBgG5GnMMv",
  "key14": "2fun2M9WZDrJhdXr3nYQEfhJNx8KDvird3Nzmpfjmfj8gZPzVMJB6ULzweUufrFnTk8cdPvYd6z2vuYAk7bNL5oy",
  "key15": "2DVkYiFqekVsBuLVNirembrCHc65zUkEnset8vF6H6VCsJeRopZdii8VZAZXMBzoefwix7NEw1Td1YCZ6pq4qYbx",
  "key16": "5nPpEgLEy1Hhcybc6uUvzgm18tDwFMBM3MsHV8vbb7YonMzcNPAKg6ShiBUQdGkdvXFc54Tt7L1cFqju1xD4TzJh",
  "key17": "45x25oRLvyng2ehHfHYi8cNjCzz5PqPF6NoZUdHwJdmmtwyL5NLCvtJzSdjGaTkVDHUpJs2VkAq6CmU1ofAkQGoq",
  "key18": "E2ehDcecGsdxhFjJMQG989gzzdA2HVh5mHQqTT6oCX4QAituToU1X7QhJmsN3Q3ZuhEJ3m59neNSLTTYwm5T9Pq",
  "key19": "3usaN49MxjXEhn4q6WxG5asrjCvB9FycZKVvWxzoFrnKqAJ9iZ5uMfFxhorEzSGrG5nwCWMg3LtqFniVD1ZTpppB",
  "key20": "5j5uc145giDvsBGr5oajPgvgnhCxWzu4i4t3whnEQb9sf6TaGFDC7A7UpyCfJXwB6S9hLe4gjVDywiuBzH7rtADD",
  "key21": "5QHpdTX9cvjeDqXks8KQx3b1GuaejhXP3pQTDWAB62S26nWWfwc3J3YDQUksH2HHdgZRY38sRmVrfHsMAk8MkTgr",
  "key22": "4a8difXXh55K1ezXRH7wYR6o1JuZqeQ9PeQXZDmT2ePHZkVMHwG4qR2Zadd7WbDETNEGn1tPJnPouGmH23Eb7wsm",
  "key23": "5PLenojURL1WnBtukpALD5Cx4gHicoZXrWh8FkZvWW2pz7n5vLVRAoKGj6FWJmzCT8QXShyWiJZ5S2vPniUWpEcS",
  "key24": "4RdPjSZBUrNEZ7uPD7gMfQmHSCa4o5V1xQEB5anritNYtj1kAbaTxXGgB3orY3Ss8jUoBVmutunxYcMD9MbTwygA",
  "key25": "4SujDJ7Ti2g4GswQLMqb2SgD5qgGXDHPHbUnwkXZhuVaovg5MdVaZpdxTvsmAbMFDPdSABBYRrsRqZQ8fUKik6Yj",
  "key26": "65SR5GnSAANjcXFq5Zs9D6tD3oFcVd4L77bXcpZZogRRk6CQvAkXQYJSn8PGmxBk8c4E41ny2WztNkCyNvnuQ3kA",
  "key27": "3b83nQCzsyWJoNKqwJcd8KxFN7T3jkLQWLuxCTFBJ4FJ2BgJ3hUecA3VxiZ7zMh4pCCoU1CgqJQw5sw14JNWinsP",
  "key28": "585SQ2shooBnqN8PeU2NXp1WQQ4M1enoxUnF9h6WkSGyDsit33XiNGsMJ7BRdpbciNVct4DaxnFwpdLdtw3bk1ox",
  "key29": "4pdDK4LCrkVaWdtP5CojcvE6Jbpz96KkNxvub6pSxRDt7rW1nPm31LFxWymKK8SnA6PrDJReQtw6eCcuig288Lob",
  "key30": "5VKwDc9b9tDir6AuTMC6yDVV17dE7VtxWjcMF2fPxPo1SrH9sEd49zyyx5RUZiZJrfPTgTQWTeaP16GReZ6qXNf2",
  "key31": "2p1HruL9rmHqMx2ybyW9LFUjodzPKjPpFkvEigTjNXKQ2B7NhUutDBcSUqtTuLEM3SNPZrqN1ofujHcEcVWkwacT",
  "key32": "5v87vnLTkztzS6UWqEZDrfeEG2ADdkfSS3Kjgy4r5ZgdkPLDRmi4qmujkwJVUf2okFSDprJj4Rk6GFLa1Xnrm2H6",
  "key33": "RWej7ngZuFZe9y64vcRfHnbCyUesSbKyse8zXNMLnUhrj45ui9rUuuT1nSCse48jafmRC8W8qNtWHubSSkdPb6M",
  "key34": "64cQReBTpNJDsocKJTATFpqhuNB3m9zckS2LpHyNCTkCXp3qqURsV3ATXa8QNxDg9Em9Qb4Td2tTbLiZPvN4VHFj",
  "key35": "2HPjRkF4eUmnWK5rXhxfWefr8VgRTtiyy5t3WSfmKnQLzp8S4VLnpYMXgCWTwjQ8tuhayzZTiMVVJBdHaiLkBzNJ",
  "key36": "2cqfMJ3Kkmr6cRfzbYs8TfAi47htgst8BdknNLbVwap4Je5xfemMvXaK5TYwj4Jqgp9BaJcCzTrm8h7GZi8EteWV",
  "key37": "4qEuXN3ZXRzExsShYJutt2GrTLbPXCVoHw1JHDNyJAjuAcRf7kqcp8fWKykNiEk7PprRcyJkCMsrKotiHSG8krEU",
  "key38": "2igpoDNdvGRwsR7JULrEcU3gnryqen66VCtEopjmQXrmj9xVFmxU9wTe7qy1UBXKxGMrwYvywNiFayaLxBaEzQLT",
  "key39": "eDFLt1AfLrmbrj8j5ypBUJNwfuHfgPCz8qnaz4hmn17RKVoz6pVFArpu4j3yWboNcw4vACHM8Wj2AQ9MJ8ZbwVg"
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
