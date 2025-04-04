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
    "2WmtEPXE9gYkNapUHgh9jgZwtL5FSAVCX5xPuZRYou6NQFAzLyTrhHq4PJcxkp7VxoTnV7Kfnp6fKqRuLRgKxLTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HvnVPUwXyVLFRdgqxRMaehsJsTqJCcqxuqD6Hy1JHC2Lr2kJSqeYcy5AD6CEa7HgpT5QT2kxLPBSmvAvh4NnDMo",
  "key1": "4ncoDavne3uVRepfu1Uis54iVat5h5fAzQkiWu8DKp4zdu2R2z7GbDNG535bPhsbNVRKEMkUYWVBeW6Grvnqt3yF",
  "key2": "25KLmSsNPVve7LQaCsVjY2U6PACzFPMRV14z33rG6T2aqraBkzusKS8CdyTDo6e4NgDTAc7tNUMqrbLZZDtHbWb1",
  "key3": "4NVjDh3ERndjsMEG4h7n3WBrKCML2E6s4U8tmdfYfq9UPrhx8SjhRkCmzyB1sUcNf7WnqMz3norwzojLsmzsvYka",
  "key4": "VWxR51CW8pt36CkSzmsDrBVXKoi3a2aqxiH3gRRqrKizvPQ88ohCeAe61uMLHfY4EkiWiJig3jpr6KawyvaXb8A",
  "key5": "2ZVV615mTNtG62HXYXrrQdA8uVyLErNSpm3qLx3gYc2g5TBuBc5LM1DgwnjfNw5pmR5hTacn3jZuMKwNnCPYybB5",
  "key6": "428NJCqRP7N5NhoxUBH2G6oeLdQE6Kir3qWFBP1qNanA7C1V2wJTn4nN4FH7kUmkn3vyAGCgSEoDzpjGndc6eHMK",
  "key7": "28f2Kz7QqSLECRhmEmTGYFtPY3SYvvA3RFfBzp7hVnafAsdHSS6b6JoDKCEi7fHT1vrZiEMPZQqJTN8dXcQFuy9t",
  "key8": "Pp2xtAeiq7vB4y5JynVxvAKPSAfyjAPd732TK2JNGRww5myC7qVZLHdhSwp5HMLzJLPMVwA5iuzBLsnUnrXSeav",
  "key9": "4Up6TxJcDzHSsSvDhebA8tjn8dh96q73ovCWxinwc3u2bFWDh3rNopf54JBE6BAi6s6zvZZewiXbErEtcfrteq1q",
  "key10": "2RCfyH549atFvavZhP3LSXCdwmyGNA1xjXHXUAZjbLhCLotuSaQnetN1yvveN49MckgWSm71i4DkHPRP2wQDeR1L",
  "key11": "4qgqiZDSxLUCKjjJ2zUDaWjM62fTCaTUcp2RnzNqSxu94G1RQHFqaXfb9FyvPnLEW4bw8beFJdXVW9YJpyKiSshh",
  "key12": "utAG18vRNk5VRZ4aMBnWfc5Z2wxdPknTGGc1YgU8Kx77ck8xiMMSMHbFxkw6Gb2vKFsaLftsRRiKWAYc6L3oLnp",
  "key13": "3F1SXUQven6D1jDLHkHz8E3k9QDCS3aspNQQo9DvxmdMHyqYj87MBZ4tFB7oyeo82NFCwAi2nwCimFGHQGgZ73v4",
  "key14": "3vb4694MpNyy3x1H6QzSszFDq9BF9Vs3sAQRwUMYCvh4JCP4ALQjrAAegsaGNPgdBYrxnrEvAqwwHQVydi76EsGz",
  "key15": "4yr9mUKpX2dh5ZbqqkSZ4StwLJLUme9tYfm4jVNbHXVEZEAB1Nc6neM1X3dBNBWfLqGW5dXrkZv7x2pfL3TTPXM5",
  "key16": "67QgER9bTgUimX1iHwnNUxaQesWBrqr8boqMUZA9Pq2RXLK8y5qUwg25QwjiKuUroLczp5UMHfBhEs9uMtqY9ir3",
  "key17": "eKnXJkN4kMwfS3tJS6kD49Pmn7JpjQ5CS4wNBvju6HhGLHXynxpJMsPyoToKNXQi2dzUgehGhekPasUQNezKQGb",
  "key18": "5aA27AzAigu2SBhYutqjxU5EDzsECRxQu44gxK4eFD2eZbgQY9Xwtc5N5YiMF51PfMAcqwf7kD7HhHc6Rt7kr32u",
  "key19": "vRZKxLk6pcP7YqCdoyjzVdPWCb3GLeTHQeLun9KLV39whCppFcizgnA8HoyTiqFewFfVHGFrQP1DL341KmxGKef",
  "key20": "3yyDNSJZTeXLLr2jGn9pogWG6u1NpqPFkXozfszXPctvKFYoGXLyZ7o5Jv6BmRcJbWZDuXw62qPqtboQd9tGtLJg",
  "key21": "2a15ijYbU4SYNyLhc57PbU32EWbGPt4fuXEyuukzNJZ8kuW7y9fkCbLVRNSPJveM2Axqgfw1XAFZs63nSJgL7n3s",
  "key22": "ez7qYyz7LTNSUC1UbUBy826CEys99VHLNHDuzYDYoMDN7rFyFAA8u43mckw3V66NKW1TnGkpkwB8ikm4LV2dF1g",
  "key23": "4u1G6JYvCh41vCHZJvyhkuijy7fMWggJsEaNdvBJVEyH9wro9wVoqgiqz1hc8KeYGWQxNZR4Wzn5H6yXCWbo8BAK",
  "key24": "5mQRCGer1uoNuarAqqE3Gmwn4LB4EvyqKwVWEPBbxGV8kJccG1imxNeYeJmYTChTXdEg3crYXwBESVnJLA85Cj4M",
  "key25": "3mwezHXMY4VQB6ViGuWagD5y3G97HgQfvrqKbSDCmispn62EBi2V7z24dRa8NYRpETSiAkySP5UWP1wo6PnUAb9q",
  "key26": "26csJbguR5HhvmpwPuqDMQM9tBQsy6PzN8PMdouqticzL52YKTgjG9q4kv2MVZ3TYikFJEnQPVRtPf8Y1vnCwT1b",
  "key27": "2wiMV87b2ustQ7fBk9WxukGzhMywAdRyJRAXHFXwFcQFLo65u95rXvKXXBB3gcseWuWHeNYZ7fhhC94wzkCGW3BM",
  "key28": "2mUWXa3CrfKATFuV8JzoVfQVFHoDy5PDjqaDGrpqZNde6ipdEeRB23nkYCryh9qedLttsh7SEoGSwDCDkjSbwXu8",
  "key29": "2vhpWY5YYr5T5jNAYe1ccjWqP7RbUv6apzDiV2HBXYMkLQZ3Qt72be2QFpSPgm3KRKkm5UHVCxa3sR2yebrXDjg",
  "key30": "2oq4ZoqsK3QRwJYSAVtT9h5TwugkXknafcddCr2CidyQgxJHiZLhYJ8bqFuuBaNYDZBGtLP9FHAqxAPQhyfx1okf",
  "key31": "GBXB9xdyfArVm1mxELZ8Dnm8jCqCL8KLnEuUMEfNcNNSckwjR79MguzhcFE3vtsFquq7BkYFV7YE2N5wNjKfhWY",
  "key32": "4bsUn1FGyYow5mujDEK5cnyXC3vNEXe6fRvhm67dJyrF7i3zGD7yN7Be3jRdGhhKhN1m3fyo6AbLVie2ntyQPHfa",
  "key33": "5MDdKnr6WsrsKWjTdKAxYCzeiJJwMnsdCrJ1BgNrKvShwnYoJgPhwRuAQ9zKGp6MjyxSWWUoSnL7tghFruo7Hax6",
  "key34": "2gAvZpZxjSX1rKDFBg7tG8Ayr1rJjbYhXZGC3T234rxnEPPam4pLem8Vj1Eva9x3NkD1D3dPVv7MV24LZJFji3Ao",
  "key35": "4fYjxEcBRfjdwy7JXWRWDJGeGkrZdXhvjRH5aRtGDune47f7iA9SYSDnBzuKqckcLasvGDkuGpkTsJr2CAUnxMg6",
  "key36": "1Vxw2kssPc2ZN5JXFdox1NUFDyGkjKmq1LDAzmibB2N1oAT91X9NtGA1QagE9jEdayWWVziWxx21Ndf9XvTargr",
  "key37": "4HNUZCZGLw7bmy8s1cokR9EafyHqN5h7rwPTbqPKPrg5C2L1iTCRv2EnVTh6cBNzNkKEWycUuoUrs2cUhqXWAamP",
  "key38": "3eiFHTfvCjVWLHBS8w7ToRh4hbixifLPEGrG1oV8qwsTDXtomsB2YMTQmpDkcVKDN8Mid9fXuxbNjb9z9EkvqtHy",
  "key39": "J6Qe1f4RTVc4BzYVZvpKXFkr19Nsjz7huWuwLinWMy89z2fciDdEzNj8Lj9DRhbpsyx6DFaqHkNB1ChuUwX9dhS",
  "key40": "5utz9jgqkXsKusQMo4nEae2NtsmbMJRAPgREmTusXEqQGj7Tn23BAgDqAfmUF7Xndgcf6W6KTECpX2L18AbEKas9"
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
