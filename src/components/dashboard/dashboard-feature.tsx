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
    "3HSEEBkpZTHbndZenurTei2Snvfbds8kS8pRr2XS5JLPrednksoQTJkugn6zoC9VDD6bCXWjPsAsZVZm8MG8RzAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rw6yEfcuM3VgwVTbfKD5LMehPLo6QkbXAru45D6dWHCjvL2vbtSv4LsKSsNGsnsAG6bW2Pc8RN63Vrnz8HtbUBq",
  "key1": "5i3cMVMW5Y3BmzRZLmW5rYfkbJUEGJT412YVo9nVRMVzm4UkFBhUjfMEC8y4B4F4RceZ4EwHfwrAxaKDgf2JrbHK",
  "key2": "3HoQVT4tHKwfUvoZBvB56juFr5t7FRXpaC1ziHAKUfXt2HtGRSnrPyBKTGReReZtxd9EbAf2G32P2p3EnuFbY94R",
  "key3": "36SBBDaX9A5Eekyexm2KsjiqC2rEwZuLkBWvjkhY5aETePtuKTuk9Fx4pNCCkothXZzzs8xyV3baCR4SDbDJuKQh",
  "key4": "57PY8sjCqEkJjnCEXCKiDe1TYRS6rfQc1vzpmrD6WaAcs6JF8hLTRu9L6ggNGy2GA9KkSLMkhRWjV1TJ9oHA6e7J",
  "key5": "Bx9QaucKwN1o3tCjSzpMBN6gSh4Ynz8PfZKnztac35dnssFggyMUtf95G62rrsNxJn8ADXiE8UbSJoMzxGtQLYP",
  "key6": "5bLnuNP63mwgHN2mvwo66g56zuw8afDZpBXCHu9qeLNy94nMgUVFvNzegMhnvv6eLVA5YDs8DMPYhbacgTBjCSoH",
  "key7": "5E9ZVRVVTusSVockpHCLrcXQh9zgLonAvWV6kMAgEz4UuEmGPuxijahJenKdrwyyGUfBoFbaWjWJvws5ujRwF1eh",
  "key8": "3fSQnQfVZkRPMHvPj9vsmd4eXDgSCSq7z5SYbXkBnqNX5Yj8LSFuRE8j2iyuSB1wiuy9XMXbfSBCjKsmnUhLMEc9",
  "key9": "2porZ4uWVEtAmjFuYgS51HCar2kDfAENE1XkDuXm8Q8uSWCpwzgp5jZMKZJExB7V5btiLkkK13HaJKLxzv489ToM",
  "key10": "5pf93sRhBQw6JnmaZ1qqfa1z9w4dC1dtcbXMScJvj2gUX7fRTMjaH9EvnY8R8Umfd7RGkDAhKzm9x4ZLsFzKpLpZ",
  "key11": "5hY5rk5dfo9iQC2QiTuLkAMNjiaPimmTdJK8KBHQBWh9c6eXxsBUX8urQLk17CVSxMah719n3XQvERBwEsq7C7i7",
  "key12": "3kabrCbgJ2rwswg4j1oKdSjQ2ggHh4gR9oiQi4KU389yqT2z8hM6fMqhfAzA3yJ8cUgwYHmytdMAYiU8u3ekchy9",
  "key13": "5Mhx6kmQ5cUQiiokL9UMkmcgGKZsQsE3w5MwrH3LMbiwbojuhh9QhtPEhxzLp6a16RVDD2CTkihR75m8NGXwiohz",
  "key14": "5hvhUSJfLdh5CsQU4ecfjGbk9Twnwu3dmf9SxzgaHrHe9mBEhGtUvFc9k2sZtRuDuW1A5yyKGZdKAHNav8LqWWuL",
  "key15": "5SMFNDQFb8gS5n62o3iL9Pz9JVBVtPZqEAQz65EWbT3DjmKRxLntd2mkwMcX6RBrmtELqEwQA5DNmkAXSpPvNfWb",
  "key16": "3NhqDvMn5S4CJwa1TKydpEZiaz56gK8bh9sbS9JaTTa86KqWTGmCB1oXHQWjYTAaEfms4xDTpcATXw1JEyGeTuiP",
  "key17": "2Jt3Kgfw3BfVQkEmFGjAzR8yXhZwXM7T8mv4RaW5E7DHXHEKWZNzi8oE5y7ALPf3CefRmmJkkgtmSnVrQ3Mrs2j9",
  "key18": "2PX9Eru2ED1Sv5Zwy2fT6r5HuUEsMf4ziN7HavRQKjFBB92tL9CgH7Fc3f8LDstWBCwPypSmmVZW3b9oxUwZDkAy",
  "key19": "4LG2GYGghLPY7BjPJwNZL2CFq6rUuYmcNMfJAGwP5PfE7JtknkcPyDbo1xQC2z4XyCSShdBFfQrnJaQw9vED75kn",
  "key20": "URsKfcgmj7EukM9JYAcPG95rLLtBC3XWjgsQLUbbnyhczn67nicAfSTaZYhUe1t6Am8XsztqbvPPqaY5CNdg6HF",
  "key21": "2bzLNjR1KM5cgMu5uXf9nNhtv43NoGzWYfoXW2sAXTKPJ4fWvVirmUaH9w72KiGeknC7pch26bsZTP7VpoqEMv9r",
  "key22": "sESMNKbhjXnh7w5Qku7KWoRypmyUkMoUfu9rewA2tjLLoLCUPxdNgiRXxK9kFdWokqJaxke2mxuh7j9S9H6neSZ",
  "key23": "3MBVEkVZbwgdVmXSSqAtbWqUWmH8Jw2Uozpwk2sqsNtJnAUim6Mp7XMN1UptChUbftyEJ4xMfKGmx5DqoBWaFJS9",
  "key24": "pn2PjuHUufhcff3A91jEo8iwHSKumDZHVQsGSBmANZmQjUsippTjjvVeNokJTjZLC4UiV3WtmcgqDg3PibAT6ub",
  "key25": "2pEKWd3vHTnwvawEXFJYqXFnfj5rFGFHCMDmkDDEng3H9HyNmDJaWc4jXyLmRsNKLJ8SWpRU6yhhdQ5H4RTCFWxP",
  "key26": "43HgC5NVUjykW2QHJ3iM3LKT33Uuq39pnobgt3EoCtHcs4LypqBxjYdZPX2ZMQ22g2C7Lot61eTUXRU83qoSAe4j",
  "key27": "2MjYEHr534jSXrkRmQqvUyxckwnPjyLv2hY5dSDKVVgGuFXMsRBTJwevVqTzJVDUSVyVH7onug1DmerGMqvUH2Wj",
  "key28": "8gS6hq7zZHNobbagbHsuauYyKsR1Kmihc9LikYXwF3gv5JNh28npHDEirEuUvHsCiagK9PM4BjsarPESjL6D2zy",
  "key29": "i1x3bybq1ZeJWRxCrS6yct9WvMdrhb6QYBe1vkSpfS4QgVBSwgRJgxy2eXiqMjqmV6HohwhoG4f3jg24DHD1bqz",
  "key30": "3PeVSn1ckppgDoQTMsu65WmFj7NCamdCnL4ZcV95artm2waebNauQPx4x1ajGJsyv4ahcKkVS4NPS9BhLab1fGGy",
  "key31": "4SjCp1T6MWXgeMTSwND2PpWwLViwZQ7vLFQ9EasNvbz6Won8iLXN5ErGNiD87VnSi5DKw52bT8ZTf6sQcXHFLWTr",
  "key32": "277KS13AZuAyDAcxvDajP2kQuRCsqNoJiRnxeBsY9vago44XEwTkrQb4jyHyWdxbbxEVc5SquLNaf7C3nTCfdRQy",
  "key33": "2kRsBrC2BbdzgMcEvN3JVS2mm7Uv46urd6URofgdVqsTiVkHZESwpKPausDwVwuMVpoW547RFNinkerJEj7qRXTx",
  "key34": "4V4qJXxuLNRND9i3S4bbJsqZS3M8Uum8gitiXpPNjNyx9AzfEqDP4P5wSZ73vHX4SVNE99jvubxyKxM7VHtLubK5",
  "key35": "3UnFLZ1rRqM2fbsUVssipFwZNKsWJ9fxYpbzf8T7Q6byL663JeVZr5wJRVCsAzYNc89HMWYfxxAGGTtMSziLNEaG",
  "key36": "Lo9XQmPMQXf1UTXrc77kUEf6EUbqwEfkizKzhCxXjqBvR2nSWobcZgpYkwXtyyhBBPf4TsQE6fveWHTdH2KpJqC",
  "key37": "wg27poouG3Uc5keeQvC5GdCDCPDGuidSF1F64SYrP8D9e9UWnqNXuEGhba4vZQKH2m2c575g4QMoYLbtJKMmdjr",
  "key38": "2KvvtrBDcueH7L2n9o9KbArDjPb8W6wb3zZ37iAeZy24r8Wv9vsa6kuzwJC19EfGhJDJLek4PxXXtdSUJ7A1z8Mm",
  "key39": "62mda1bTQjegjShKwQxoSrZHanyfkZNbyseJVLGjaFFqGMCZCbA5T4GuRJpXk3HD2zmT5TnpkNGAB7UBr5uSXXnY",
  "key40": "c8jBvzbry6aHNPDsPUG32yyQArSteSpo1c2jaaYvdkbEmUrrPmELWAFzSJ4F1d2vcNuci7GctFTiB4GrmXyjbkq",
  "key41": "3eQqxxpiK4jpvUUh3Dz1hHaAYdCa7GxDrDXEPE2QCRxj8ATs2qAfYf9QGYzQNbW2L2tvVz9rqrJdCfiN9dszsRyX",
  "key42": "4HZrKGmtKVXxU24uLDb5vdVYcNmwdoRPpyngF7Hs4A5yKwr9osBpcRvEAiDdhbv2KkX96jELfjAAJmk64r5QQxJp",
  "key43": "3e8VxF3SEtFDLZu7QhqF9JYbj5Gpds4e3E3QcTc695hSfEGLMavmcq7rwsHn5KEsK2GB5hak1z4TZAngUktqANJY",
  "key44": "3ZqeG5uEKa9WTP9eD5ZKAm7P26npDrhyJG3T4ZFewcUxsS9zBZzGWpQnCNsFbpn9yD8S63nBA5tce8uDsSYrHaBk",
  "key45": "51nYYoWsTpfRvPn6KRnA6Ye8Gpht28YWbeAVckrV1GdGubrspvXaC8EySJf6oom8A4UPBYJGsNgjTJ5gRv7h9iuf",
  "key46": "Rok63QGaLimfKZX4sf8KGqjmi4DmMR2ZD7LCde5Du7wtM1vjnjpPFjPWtGwXkNKKSnudwo1wdAVqLRdJH9ryWMN",
  "key47": "4qFhtvCdmFLfpvcDQfqBjxLN1Gxuc9bac7PJrLhqRU3FWFTdTAbEMJiyNyQtsyNXeHarY2iZ1GipYgdTxrrppUVc",
  "key48": "UUU8ryTqfm9PBnkKQCaKdBEciUkfYzU4PLMhvCZAu9qbXhcm68NCd4LJUeFQtTtaFHfEhEPZnH8AF8QVFzShxqa"
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
