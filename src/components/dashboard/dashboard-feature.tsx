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
    "2uB4pKNeHT2X2Zuw4MYwLXikkXYSgacAbXfDTQTNQPD9nYQuF55dtjehGU5K4rd3QFR4i2hwsKYhW9ek8bVHRxgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLXW8RPsnrhAT4a6jG6bghqP2YEKSigzCGDvRDeudiq4w4ZgyhqqLRayMv5Qt57MQB8dQZXUruUQsR8PFMGJkia",
  "key1": "4Lubk4JVRuxrKeMjF8JC3SdWuVtGKAnApXZ4cb9GvjotdiT78YVGBqZGYVhFAXPHQxT2hUDXk1WkhhxLDYPhhd1S",
  "key2": "3QdFn1AEsJNUC8dQhrTsRoGNssa4mstYE7h4bx6TJeyEh1jLRSB4QWzK9yqoHXEEbBvfFF7jrjCX1RMkzpMY3Rqa",
  "key3": "3PSJzNvrDHKcj2tgireAdbtAPeWYavuUNNzJXzUKQyNvQ8q2x6F131qWK3wwtD3MWEfsWNQ3rURUfBJmaUqzuXn8",
  "key4": "4KhzvsTgW6c5wrp5xFDpdsEnhExLuCnF57GmmE2ygvgX82rS3LvAddr7vrzGJc2tqris6itMzFPthFi9FgSMcFur",
  "key5": "4tGENzpGGy7iiGuJwvQ4GHXQ9xfWUVmg8uvxUwRsBy6ez5B2T5wCCfqPUgzatJTFivJpQ7GnVZE1EYU8iSiMu62P",
  "key6": "cePPcE42cpwi7tBT2PDDawANjKM3VDSJyy3z2WHZtVr6MZvELCYQKuL4zDvD6cghvaY8dDG29Xw5w2iHcXtsz8p",
  "key7": "TCnuZWBXyU9oDgbKbrQbAmak7MBNQbrSkEBhEX4wCQHaXArFc1q9hC7pA9hbnEYrta52VqN8d4EKVqoFLsBFN7V",
  "key8": "3KuDpdAJovPVpU3RxBTYB5Np6djnudfn8f1QGU4kPiWBXwUheuzx26KcySwAmTxvscj9ZReok6xHGuMctjhhFnn4",
  "key9": "GmrYuc1NKuD6NayxnkXgHQqsiGGayLKw6zCxRKfNHURLDT5oRp28ZVfHJtqrqYnyVNbrfSUfiygqANMAGZcxriB",
  "key10": "2Sau5cNgk1w367Ts8F3nMRcVpMNwCqE8AEmdyiWWtzibksWng73K2AjsfA7MjVeaHcbTAdZTAK9Fn3hKv5vso1jP",
  "key11": "4DNULMLV3rWfW1r57Cj2WvAcyRYPvSvqhUg97FTgetXZUwommbWLWCuPEScnGCYE6f56aCwj1NbRAvFpWusdSWQc",
  "key12": "4KNAoiqD4DCziaMZKKEQeEKh3gHhpvg8J54NsEahtixbh4TEtZeJUvaj54SiucR6uCC1bK8nMyx7ZfbXRRL6Wsem",
  "key13": "4rM44FrpK3pxMkjD8HcxV9mHakDSs3Zn68PWpfk6mqa55BnDr3LXajKLveZuWjTgpYggd3YixxKdUuj3noFcXdy8",
  "key14": "4nFNgaEWHTRjEsBai1yy7qMQ9D5vzW67tp5DoYdoSnBTXFokrABuwB2Y3j21t7ASqLd8gNmXve14BQvDR6byFkMY",
  "key15": "2GzNYq9qfu6cePxErCCgmdsnvZRxVT8CYhxcybfSuWZBh4yGhcmqiVLiJknzchDTp6Hfzo3MEYxpPeoRgvsvGu1o",
  "key16": "5XwdiPpfMNc2ch99t8VFkfq72Zjd16NAgY8kNpsAibKHsDoXYgAn8VxDGdVxutD54rEm4nbCcoXsEfzekmC9K5va",
  "key17": "4cxPwD568WjUpazwJwRq235Mbx1UMZJV7Pur9tNLmEhAtJaiGWzje7UNLnxTk85CCgUT1xFaEeKD9Hf2nideyuBu",
  "key18": "3r1kykcSazp7X4UKxkc8Yx7KduKrjE88wVTpD1S7SBudXaCJiq63U3GdPttPEsoxjYW23XLGwWcVptSsKQLT9UYe",
  "key19": "612PuHVUJmrG3mTg3Arb1BYUCHKDxPxpnWJyAN1AMxrMKx7hFPHvDn3ZNiU4K8vfq81ABm3zwTMxEz4GA26nQLFu",
  "key20": "4DPQ4C51bdRFHg6rn82Ht6itLpKS3s19G73JJ5zADoVRgfzRfbuMEZBKD2jrJCj7vc9Ng8xCXX3whDoBs9dgQZsU",
  "key21": "2JykTnu1WQ661wHyh8VEVBu2hNb57B9uvaSjyUb5BvvxnttcncVM9rAppKQAUeSW14tqbcxQAaW9U5qz5Kbu9M7t",
  "key22": "5riBSm77CZaFkoXZ4zv6VPAEgW1mcSvRQAwFks8d2EpkRBfvaGJeetP1NNGrucViJk3bpcYDpQtRoL8UjTEjKGXS",
  "key23": "3xxJV8S216CEQv2V1sXjQyPwGRdcbmmAfztoEJ5DqWDUYoUiatxjiTnY6dwib1uCYzimpK1GVX9L8DZer5ZEh5s4",
  "key24": "2jRpjvQ4iUjukR5KvAYeE3JQRgSnDkibNm2zLcZ7phCxb6uhqo96C1qDKnFRnvRTM2SwnPVUuXbqNc87mAb7cJ2X",
  "key25": "7gLzmodiXgNxPBXcRciqnCP1oz8ib5q4tdrPh792HQ2QJxR4EUiwNV74JsN8ANHPTYRRxHChadmwwKTQA8Kq1SW",
  "key26": "23x7jLHN8PgJJhGBtS3AujaUUPo5fM4Fqc9EbDCqosyqHzseLJfVJY9gZZe2JRVVQkjyhRE9D9zd3TK348rKL8MS",
  "key27": "2i7H1dfMpaJToq6AxfgFYRJzKgNyq4LmZaFeGpicLXJLKV8RHL995yUczyRHHuRMbJXYwFW4vABbFWM6fEgLggXc",
  "key28": "3GVDfcQ964sDrt25hutQwCun4TsrkyMkMzXmXSr1At8jXpUC7598sBc5RwgHqtv9FaQMBpQiqvNf2EZNpvPfSUkA",
  "key29": "4qnXvGbdJarreKQ5VCfZM5yYR8Rm2wrZDWLiZzRMyqyie78nLkM44nSHJ5n7he5vUDV42Z1the7b57q9m7qKjBVY",
  "key30": "zi2aSgXqxL2HGditcw4Yg6bXwmpcNo5AHyzZJXWJ1fDHKEk6tNqHwWoCBiMhG9NoUqZ9nDcU5oJ36V3UDKxrzvp",
  "key31": "5y8jZsub9JBPgRq1QZMXwd5FuvMTGXdDyKcKqzmpfqLS1EPwrk9HeGj2vQiWoPbfMfKeFqsjFpQ8WsBk8y7sXasG",
  "key32": "3gKCMK15Q6HFhmbKQwdYY1B8E6fHMtxvUfGvzE6V1gnGbRyzEyFJQ5rv2m3psx7fphbinFnrxpzbyfCARdtoMecy",
  "key33": "3PUPsNgPtxuCwSWLRKY3cthxzLegVnGq8nfZFARsM5GoyQmtMmumwK1CC2UqBZKLccph95ZRVCdwGqF8iaw5LFot",
  "key34": "3eYNPDbJX8gAVdAadX7szE4ri7Dw8r4tLfh5Qq9Nq2bmgux3fM1Pd266bXef3nYM6Xjy6YrrhzW117YnCWLvbQc6",
  "key35": "3adkAWwnM2Z9PVCCFL6zPvQjnMSnx13ZTDKTcec9PxQkrSZDaysqm5Qx3bpc778AEovmpP7mDu1yoePMrbZ89t8k",
  "key36": "zFC69ZYiZnw3QC4UH7HrGndBqHs1fyqwgGT2FgTnRx18fCEaWNcvH8qTuvSnZNMp2mrqVEGVJA4CXt5Qv3Y4d4x",
  "key37": "5PqzuSntPaSjCAKnTwzTgqRQcWecB2M945oNVh56zUyMNhBdttq12mcQkPSFzBdK4xgxYVouS7EvpURUDiYVEsvt",
  "key38": "4VQPw7LFrJQQcu57yw8x8Kb7Bt5Bcn4nU6UE1nj6tCMY6cU1jAhWdogVp74VZyUx6Vu1z78wMebNCeaJGGLEEhiz",
  "key39": "4xakc5KqkH6jkiwrwsHPLycCGpXyyMYD9tweQA5SPDNhgcr2r6ovhzD29AAFUQxxi388RDZrfKPZWfTPShpEJMuU",
  "key40": "TGhNMBiSnswEAPZcEQKcHUWRZatLc2B9H3rk1wW5wJYTMCEnGWEzkacgVpMMtAMSgsaTJvcZ93b6MjU6A4oE2dF",
  "key41": "4v9f5LYYBD8yY2HQ1pKkR4Pa4XMsUM4VZavZuDncE9BUebxVjXuGqJuDQAW6Ud7gKfUGUEJfsy5sHqeb2pK6UFoD",
  "key42": "2XXh5f57nY7hbmcLduoLwGRdUSL2Z4JJ2cRQRRoRQVzbaa3eSn1HVF9j3fuUW2nUDTBQ2fxjh6ZnjNR4oGPt3BF6",
  "key43": "4VqGGK1iTerX3e6bMyVMG2SApS5Si4MVkRZz3TbhPRSxXa3xWkBg1tM6ZqnNMMizqUpAuhB9UyvifXcx6M9fCyT7",
  "key44": "54GJjULXeHvKZcvSiGtwzFtwouqXzTURihYXPbFTFMziThfdddKQmrQTsC1gKn7FZYpA9WC7UtpNkVFCTsjM9fjH",
  "key45": "3xJKTz7PCGAMxBViya4C6vhS5K9HsZc2xJbs57roRcCPB8jR5eEds2K4cYXSJw3wtqy1LKSUfzqY7bvH1hDWmqiz",
  "key46": "4K3LvvPE7M9LeRgdtvLd5mkrMw4rPEPbEXD2kLthdMCk3UqjHRgtPZJRHLy8F1ZwdKbDzG1AqCGiDhqL34oHKbLz",
  "key47": "3gG7VbfH1LW1DL75AjESfT8SJfKMyrTjtsZxaYUcEF7qRu3ZKdFCo2ysiLjoaVar38dtnEASyfAy66qkJJd566Tf"
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
