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
    "8V6LvuU3bxMQSoCdAJdRFzXHUim3LyTZinwb9u6q4myRbKHHuDCUzvFeGtCSMToSVVUidJbiJPahiX25mGtt7wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UxPufoNwFaTb7jwxSP1hnityWekrPex1P3LdqwsHELVfDx4kGJmDtXby5ZEL5MetTv2P9reYQgCjtsGfroog36e",
  "key1": "56t4Hswj13kM2Hfetg4z557vS31MTFnLjfZqhrL7rSrhXL252pxUgDM4Hv6dTeQ3G5ZXwQiHSxLTnTdKq5s5Faa7",
  "key2": "virkKqonbAyiTKYn4RQBoWw1ou5sfiPujZP136HQvrhWSo1eRueyLj8qFsJCVZFCKa8Z3U8mmgPBpUP6Saz2RZD",
  "key3": "325rNUkxMq5ZK2PrRayTckJF3gDp8wrxWKKxZ75P4YXKJsVNMtXKHdmSj85JmqVyNVsHEU3SpRTzQxzjwjwsRKFz",
  "key4": "AUuaUjLrPa2qhXiGmw4xHuLKUitfexoh4V4EMtYjRBvoJDhJCXcefCV6GM491AnR5oWhnt5imFnLPJVxx8ezWLe",
  "key5": "3e1t3VbvaXp2x9RKf9ypL1wz7ntzqfKT7AF2Z4bAVGMbD9yBPrZXSkCjQPjTLq2y3uQTFNKmKZYkktYSSgvPKkvW",
  "key6": "3z5CKndMHkhFqHHTrE6qNkc5DvRySiYTVqRVMjSi2iUGzEwysbmEiXnN7ogRaLW77ejq6sq8hkeadNVdXKLvH2pG",
  "key7": "4mVUsG5AWXN1hnAke92gGTFnXTvpR7wneYZrkriMz9b9qdPJ7h47CH8No8CkryuAC8gz4TERPLBnMU2S8EHeXyVw",
  "key8": "24tQe9XbCehgXCFPteFDqV4cU8xCV5L2VJSZXRUXvyzGQUBKmEUnuSxTYzBSr4pswwWEwLmWBGxCXsNQF8un5Vor",
  "key9": "57FkqamAgw7cA96P6m6a48Tdfw5QLz9AitYuqHEJPHmH3pX7zgL4QQsNyLKtMWDGJ1u8S59M2kXixxK4QNh5mLFV",
  "key10": "4ZRxSdQN62AN6zgAPfhkt8Yub64Rvm9xn1ACZVoYPUKG5oJiDbC3eqsavvz6rdhMD43P2cP8rSkcC8EMPQT148jb",
  "key11": "5JY9f31ARvfLJ6nKNszqLdpD3m8Xz7mGeT6Do1iLbbYDi87pNvD7D9Vycdv14pJEKCWvzfcaZ5EqrtY2FR9UbPBT",
  "key12": "2q1cZYw5mZs1fswysPEiZtQ23sr6v2eGmCekLxq5hNZk3gEDpZjgrYysNo73SHnt5fbxRZvbeu7zUDs97hinogZT",
  "key13": "WNQGFG2ysJtRZ1f8wJSQBsm5ZRRdDpqd6Mtp1eazVTkwwH9cRa9ZjUBNAVFCFSQwQeR3ajwuFWtf7dfTjQJynVK",
  "key14": "K3qVsD1gLMvS8iL1GyTG5PQYxjVxvzbhPj43Z676wV9HyQmgeq1jG2y9FLcBGtNoPr5eQBoEgQhGKfFLLaoq4G2",
  "key15": "3Y8g5QQi2UJENwA5wsJeEhTvg31w7XXHWezseWhbJ7AgEvBLuAEiBfcQ1JZ7rXkDYvY6GJ13YEHGWyjtmb38Y5NY",
  "key16": "5dKNo1Gq9jzrPNBY8A9P7r2NRMfVQg4atUtaqmRjScjmXMb8wndfHN7cA9h4hcWqNzAM2MnU3PuxcA4o1Pj1G233",
  "key17": "VGwS3ZQ2TTM8qeTpzccZpdUsc331y1k9MUqHAkQdBm8EP4QzqHabpwmq9JwUfjEgjgkjYhbMLiSAyXiHK2p6WhQ",
  "key18": "5d1Q8MngPr45dqaJrU6CX38hDkJUtAva48ixSNiv83AiHLSZ8HrPWANkNZ6QFr7B66LY91LGaw12vazQvo2JfAHJ",
  "key19": "26FjqhK17PYSr3oRp8uArKBJcz58BEqtHvnfo9uYFryL1jbhMxEasNoLSi6qYMB7Us6J9utHPTU8iq6ve9CLqgCi",
  "key20": "2hX4pkZTyrVH5dGPT9AyP2qw29qYf4XCfXwobXV1x43TuocUUESHZHQKBG382JgaZ8R2sPaRbqPpJf7d3hJ8zuVB",
  "key21": "2FF1ZNL8LPAoQDiXE9MANUJ7cjysxtJQjHxQoPMxmpHrdHX5UsRKHnogXaCzq4JVgbpAbjpsokfRQroTdFfTQ6Y3",
  "key22": "3rVcGRHwaQPq4tShaK8ELLgmKeC5DZH7QUMhaWg3e3RfU8ESyCXtbSEHNBvzHE5AnNv5mCP7GkbeLuFejpGqKEH1",
  "key23": "3dte6oJpH7APWJrGswihcv3ik1brisg7cyHp3iqJZKYDs591eKjYwb4HpSUCufCjReYh6pUTtAQb4moaSDYL872E",
  "key24": "61FgFe1uWuGaNtjFfPGuJ3Frhw5Gh2VFfHuwniKFDKypgJwyqyZK7djPhWPZBrFutSEMY6MsZ3HBrTZsEZHPhw5F",
  "key25": "4uw9ZeHWhAJ2Yb6irvKp7aaBfU7rdQAU6ahLZWStcFBG1xEnREba7KnEqNRWxB5zbB9PBUwn94pMyP1miHtWSzyo",
  "key26": "2SkKmtfRhv4TgPomCkUN4AGSMNJKZjbwz2GTVZugAHgMer63qdj91oxPR51MmaaZTU9jekx7JCwwmfzADfLBmeDt",
  "key27": "2NsJNTdfV6GnHkeAiG4tMneuUZCjCyuTWRkaYjbHAoMQ2DiLgtnTcVxkSyKVWZyAFFayHxXXPQpbSUrE81kZBt68",
  "key28": "53eeoro8wowB7RcpwY5nv6Pv2B3pmdFjLuFQoDgE9M9CpU3QofkWqwRdoA6ha3MxFwaYaofL26JTWkTjCAm5TLKv",
  "key29": "3AnECkbbb28hSdiRc7rB8K17nn9T6gEk5sQynfx9rWirSXj6dPJx74fykrKUL5S3B6TiSnHEw9fCu2vzxGFfksXU",
  "key30": "vosWX47rVuub8kcvjHYQFFQQ38xrqsXGA9Lbd663KRHTL1cYZ4kT6TVtDfeZpKZXcjJtsnvKB9BLBfzvfbkWwMs",
  "key31": "61F4voJM1CasxYsUSunAE7hwfNQaJ1BNiniB8HyJNHBcvuFqmoXFXViwGV2ZTP9rGD5azAJh5VVL77FBjkBcBRVi",
  "key32": "5aJkYA9K21bSbp1j1MSmCU1GuVcNiaFCmzC81K4pAU6hHBphJKW93M1KjcnkRnD6gcsexCLZtY9qS8vxPsEBbkD2",
  "key33": "22huYM4PM2sSwUJxK5CDLg3jtKtyTepVsPEGMaQJ9sxEsbSaoYE9w2WoZawiQVW1CaciNbfpwrXixnwZ1vVgYLD9",
  "key34": "5ojeNty77WnraRfbv2rhE2ejP8wTkiWXe4KSMMoEA7VsdBvxi1AMNJ3neydsSAajKrcgX3Ba4XRZ9tXKJrgdejJ5",
  "key35": "4XrCeveaZFEXkY5r5nNeAoJjEoov1a5HDGQcea9ikwEkKGcjRUsUwwWb6Npwib1s4nSxL1GSxSATetrPXzLPPWDS",
  "key36": "4f8EtW349hVJocTrcrR8QoRypTcbyB2RFwwj7tyc95BrySCJ71r7yBou8FbDTk2rPYXGaPxKKUzhRZ9kgYRRmKLK",
  "key37": "4HzZSXisUwVhHNoNaD2TE3ctQ1nVDPA2ePLzBEtPkoyiG6NjP9JMtwZwk1HigunusfjEg1fMEgqpSQsaKeRJLn15",
  "key38": "4vS5YyqhdvSqoarwFkWJ1zeqVokKAmhrsDkUWE8UEUTUr9GqiyWiidjYcUJ4XHkQjBiFjnCuZq4yDNqHycT6TrgC",
  "key39": "bCkp98AaijYgfqZmwHZ4J7xsSPJpSPGXJcmerEn89cfvK91QDvn85QiKKpXcRSkFxjJELT3xyLMLvFuiiHd1BxK",
  "key40": "KScJQdWhG7shSwzx842QZ5V8E3Nuphoit1WJ3zyEXirG4wXv9V2LdmjXt5nDhhX2ZGQ241HDhzZcp3pJ5Kb9pEu",
  "key41": "4X5UmkWmT9TRZ4bDSttXE8557YU5wywesGrFqNE3vNJDC3LKS4MqkmHqiK5ZZ1bdXscihaeDYfeZXpRoVoeNc5PS",
  "key42": "48X7xsbtGqevNUeRdysg3PAzFb91kYmVbztbkY2XZDZC5FAnhX4C97pfuzkUPvnjDdm6dBEyVTafAmf1NKmt63vs",
  "key43": "4x9hpP3HNqSNTFhBRwT1apYNSg2NNkuAwgo69XBkF9nzb7dsha6RvAeB7Fa9uvKgBh4YbsMyGMFHcz75Ko4PjU7q",
  "key44": "hBBxLDYJGzYPZ1hLVPatvbZLx4Wm3sfXEBCe6cRF3Br2GbLpw6g9q28Eza46afFDk5wFAV5nDYoRvf65UMxLagP"
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
