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
    "3MJVx5oMXLBcbDTdQh12CtFvb5aeD8rv5Ng9nqJoyrug9JsaBPH9tKQBNQRta92dx1bxF3wV6EyTRaWXq4Dn9bSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GyHrhwh2skrG2p1XTxWDh67HdLZvmezipRnRnYnHqkP9TFrF7XssxM7P5tBcwT9Ky6dvVrQUbC7g4wwMSWJyeiD",
  "key1": "2Wzshh2BXX4BWes4wxVpuW2fw3g4WVDLN2vBWwFNNxVzQAXaKhJUXEXUPGQu9tLDFtYxecPzXvCwcUdMdn1yavgo",
  "key2": "3x8JHbfHR6W8jSsoiLKVVfjB9NAKdh144Q2ohyySNfiAfS7nEbprfTm6edhTJpnQdpyv1arkQeaorQEYJk2z5aro",
  "key3": "4nDDQWcaaxz5dnWBsQ7LVq871Z98gcgN6qBjFNP1TCF9kwSQZQYr7RfgiQ7kAEKx4bHLArBmK9ceo73HYjcvJjfZ",
  "key4": "39dP5NpiaCYRAGZfkzWnY8CEdvjemTV5uxdSd4F6TeJLh3ceLzST3mLDn9XWjafYZE9q36MjuubTi4NCXqMfV2gQ",
  "key5": "2fFwdJoZYfgsL9e4tZeae2R5U8AiQvtPZ3uUiVjDrZGztDTFqnmbMjXQsRvgwrRKbQjAYEhgDpV1cgnwaR5QbLSD",
  "key6": "2hoU2UnmDyF94TZCU6qU1Wnyi2KyJjvBdG6BpDwB63h3CXyomZwnqdbbudgjj6JdXge7oHZoWNAoD2Xe6rW8Z5AE",
  "key7": "5FTMCfbjV6fY7jTneXXQcro6XUyqsRKxWUJWWvaKKWJkEo3v7fCbxrr24n2an9p7kcgwk6njwrCXsRQxZNKxEte4",
  "key8": "4TorWqnkGXESzTBY2AsNYYSKLXAkYNAmCAbd7vEeSsyDcBDCi8aSRG9iD22nfd5UDQ5y1oKXaD7bUwQC5FP7rru9",
  "key9": "4g3ZtRTiKi8fqtDpzij6NfKjBCzqba9GYhKxvkGDASH4NmtsaVa6qWGPuXBom4AYNfiRXTjruChQaXswU6tRkZJQ",
  "key10": "3VgvjKYiABzhHvqGVotVu5HTuyjtUweAC9sLWar2e4GNmMBmcHmk6gGZMuc5iSfubMsrd8dJr7Cf9P9ZrNsoGH5Z",
  "key11": "4WRqKr3WesWfCbGgmAWkUKPZqermUKEein4WGSGrzgSohBxs9rEioJL88gZV2BwwhokHGPWXa7CzQwKexAxAF8UM",
  "key12": "45W9y1r3Q7zRjjif1RueYkfrj1S1AEHbCHA7Phh52roFrktCxAhgagzKHWTQoiuTrUwXQ2xjNMVbLGFyF3eCZQE1",
  "key13": "5kBUCowDyrwQdCgsi9snZdSUGwa5A2qXZVCBm7yLT6ev24QvRL5ussCigizqKYmNEHKHviWCjLZxw9tGMLtZJohB",
  "key14": "3JCnQLpRxbvpQB6Qhp7Qy1EUNBQETxTQ8mzhNL5HP8AARLBRhEeYJPuq1NEypwydXm1vQMcvB1KmPKSrC9BBKBjn",
  "key15": "5TsMUNSVzpXMugieeGii6sn9hAzspg8VbuhQzEjVgDtYMuPxo6E43yPdJxBLMnUaQ5h7yN4zjQwug1bjdCA7EuY7",
  "key16": "Y1ZT7To7EsScM3EtcGCwzFhGtVuW1F3DUvvWNKaTfXBq9vC5jr4X4Qh8mhkpgQj5mEsC27wSPw1dmGBDdc3LFia",
  "key17": "2kebUz1HjXARrmj9ELz8jqrGyvMM2K6AYYqE1u5vXvhFDWCERhL5PBNyrzyRfNcdRYjX9uT1XGemsxGMmRiZSzKb",
  "key18": "yS94MPCvwotKfobQxebArtiivsWBrvH2qihaHMfZC4wvbeTn2fPnkvDHvbkVvBW1Am5QL1svP4GqNZeQKgjKSXe",
  "key19": "3HNDzMKSypGmWwbbLsDzZ33oKUn7q2Q6KZQitACAEpNj94kBDbCdiykx6qKgeBNc8tp8FPoe5T9i5NNJugmM4kGX",
  "key20": "57PhQ81Guu6stcr45Qv1KtihmKJcUAqGepGa9aDdzDsEV2XzRbRu12R2LqHcHWHdb9NEYdqRUs72VmGQnbYy1DY4",
  "key21": "UgE2MFnLGrnp1g4z881gDhT7TMyoPCuAwSMzjy7AGDzWt2badiJnE2aR6GJtURuZiHfhwHY9Kmo3BRZgYL171E6",
  "key22": "2QiNf7PqSeb4FxtfZurYLjg9pLSvtVao1rXXLwPQ4p8LG4F3U7rTAoj284RYVQMFesLR9SeXniEyhFxWSs21U1n3",
  "key23": "5LMdYF1nHUMWKSXPate3CdQSZnFu3EtSzGq2AZqkBXqCuRnapUq12BnuydJiRM26FXK57Y32tpEBPVf3GgJunvGy",
  "key24": "66cbV9ocFFmMkeqqubKhD9CxYhrPiNdMGehRQQVSjDGnpB5HoySYqhtAQtyDPhedUnirJn5cfsQvW5yHgvLqMQBJ",
  "key25": "5uCERp7FasHg8j4YfrGmfaHkgtz1ZirSDub25M1FThjJwB5Mr1HBkbPRH7cqtHZmFDRLgiS7VGpSXeaW31iGwqGU",
  "key26": "SDTfHaCWuLzPYKh3UfVsJB5sSrvbjRq9rg2o3AU2FoYu1MQfTTcE31oYfnQQtsSfqtxvse16i3Ab7hKj2MPt8oJ",
  "key27": "5hw8YqzcHBCDohzUpnAcV52BukphPHYufh4Zws5VEiL4kSpMLuTJyWv3Wo4Wwd8U1EK3edMMyCNwZpSm4ZMFiaen",
  "key28": "24173eWvi95iNFJENVffv4rux9azakFSmS5X77axmtGuzqgsARB2xWarsP4qcckxjhdk8g8EJNiJzzwvBreFhPac",
  "key29": "48eXomymmoDa4hj9Xi3ZNqbwTro5TQWNXmqnf9DwHYhBkMud3bNrKir5T2652TBSuSkQibaaByQfiAvXTEeUAymc",
  "key30": "4q5t9DDSdnPLtJKsgaRu5i3qFqGwVaQXpSz3Kon1pQXKV8ZDu7DwQHXAY91mHZkEiHcNq74cjoMDUZKQQYUdjfJk",
  "key31": "24Xj3XqY1MCAjg3As8QfVkZpzECD28mV7vFNp4ixmFnLcHJS8EsVZ46cF1w3NE6itgU7GLcR3wzDTRvB7WZY6KaV",
  "key32": "fWDqDrnyxBPxWP3k6FVnZESoaEz3RAG2VgVeo4rTw1M9pBRqYDhnxK4z49GSxj3L2p81ZxCZMy3RSNMT9nPHYE3",
  "key33": "3Twga7PFMVPcrCepiR4kXDfqSmMhMThydAnPwAE6Gdd4yqgV5xw68fegpxMo5xdPWM5C7gMNiqpEXdZCGMQyksuL",
  "key34": "2fWvjkzsar1hTE8E5xJMy3MkZEuePggHGVGFjJjxjY3rA1JfkFq5pQHTNEg4nLdPEe8xQKbmxTG6G9KvcuZBqtPa",
  "key35": "jmwfPKi9grHQqpqmTPd6AU414p7KWa8axezb7ZZP8QtxawerDs5XToftB9zKJDUu1FwE8aCn76Mh3zvqjKtDXyw",
  "key36": "2THHM86dVtmq12CJK9epYDti23arJkgYK6DWiFD6UwTjhMvFTmecRULPF1vPkh5BsDdvHRtdgzhf6pjsMr1pN64r",
  "key37": "BVTFRUXZb3QpjtRoK2ciaZg8fmqpbMC1yvHKSd5vZeQDDqPTk92JpFbxsUfajBw4LnbQ2traXCGhEFVbaexwifU",
  "key38": "31TsPVRqHbHjgmvPohUEL7QaWUgk5gZmnpD11UBsDc4nuurzvXTUn3Qc8tmvx9CPCJtjs8rT5Dyt1jhGMn5vHhgG",
  "key39": "4KhDL8vLKeA91FC3mkxwHxcuFX4QjkaMDhbCmu4vuZWvwcmo5wyefeHarzmsUvkthducfWvCvQECEAAL5Dv156WL",
  "key40": "3AJY8cr1U1ibvaBAuYGbSMGQZFMtP7ykd4i1FNeZBRmeqYRdaKF8nMv4TUNCXz3r4RbGfjHc5puRtRPEh8SkhQPo",
  "key41": "J36mfjcChpa8pbuwq9yCHv5Gubgz7E5fREnCnwNoqJVRxoGQDjFU3eqchj8g7qAUM5JnpuPrd7vnW4cgoaNFX9W",
  "key42": "2eJT1SsVAzGkhwEeAzGeRsvkvLE5EB6VaTz3trey9VmxtngS9goDzTUoSkZHwv9RF7SQvidpY55rXroFwzJEauaT",
  "key43": "3trD5MiKJav1vQANEBiJz3oGUS5D8GFPKNcEAdgbsYHhkc7D8dicJDpfrkcB2Tc2JSefd5zJZbgVq4QUQExkUPHU",
  "key44": "3wC3Kysw8g5LeAwNw87E3Xgo9QpdjooWMvrXNZdtA3Sg43JSU8pDKrWanxbN3FwaLY6HphMutq5wsz6vLqNfvevF"
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
