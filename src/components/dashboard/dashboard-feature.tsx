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
    "jdgvXV9W4xwk5ZLkH7voahRTyQTMjTH5CCGmg5pJSTY5sUG3CxGQtesnCa2F5dR9Aksm2t5E3oRb43RQxFdWzNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uywx8tixNiJ9c3ykmADs4a4fDrp8VTRsoWyakbL8WMhRF82v15GkA3fUb6QQ7kviCCPZj8PQUr5ch3uMTHEoBCJ",
  "key1": "25uDhNpBuw7NhQub6pqnR1BTswyNbszMMcQUhKNR4FrYJgK69W5aKTTXYKrh8wKbfL66RstoBHaMR885ETyc6qjg",
  "key2": "4kCKXCcbxiaZMRVEhgJLFdT2KkCjfpszyCtw68sJyBx57xphpJrn8ryHZsggJChZUnRJiCnqyhUbJuf1ABY6xez4",
  "key3": "4oLpu6sfujPwbYLiot9PRRfEB1KEjGvCnMuUuC56UTpCsN4faxUuQhoSbFXJBF1XHyekXcMGtE8rHYq9Lkb7T9P1",
  "key4": "31bbu2FHPvwnXLdjgg5SyM1sfRWPS4dwd6B1NEy8DALAYHqtXQhasdnUCwTWoauim6HKQpSC7vLy7nLuMP9tViEU",
  "key5": "3skLQRzwXk2ezJ81adutv9vEM635ZpyGsHtAo9YhkVLJvdRjffCLr94LZL7Q2FgBp1pzQPNXCstnktAFJzsKEmXY",
  "key6": "2CHdqHEohoiTvV3UA3trDsBzWn3ZBpnL6dZzaQtRCZwFB7bcEbJvDMMREDaz9wvbbGN2cvgEN7Vha5jNGPwsSgiD",
  "key7": "3oKK13DnU317X6C2coVgMjF9UHGGFcWqknL2CmEzYRSBnBwG5nPUim9yaJgZVCo2qmZsgK5unUDBrhz15qDHDvUp",
  "key8": "eXgRwRWnM1w7UwJCyFGPU9i3o5fpVHfDe9aE23pPUAxSxBuR7kDTxPq9XamBKDfjJiRttTrpzUJNmBD8QR5aTCR",
  "key9": "5vqZLV2mizK4JAAMRftss2n2N6kFNuMMiDUP4BAZsm9V9kZ1uAsmTcXLSUACjd7t1aonuUhFoEHSCPuVTSw9EyLn",
  "key10": "4j2WZvLB1WkYNn79q5us6aKmixontvcFuuz5io2aU8drTxXviTd3LFTnDtjaTxo7pvgkJ8BEqZXbDeyfEcbHT19a",
  "key11": "5nFMaGa9LUVovbqhVC5DUpeb88vWv8rWCYpnP11xSPuyqMKL2d2C3AZjNujWNNZ7dtZRtHcvr8psr3162UfNRXy7",
  "key12": "jbBqcWEtppaHwoTGRZmD3y1UgdcDnxxTs9smAwdP21YxsVGtv8VYiLDcbVT9DLj6WVjhGhZjvcJw8Xs7LueF2ja",
  "key13": "5JtdSfL6iwX34cwaXKmWwtVczxQbzqKkzq5A7aewsktozm7wgW9Pjv63ysPBpUe1UDXwzdu7xyaKHLMjwabKrZYk",
  "key14": "4rFJEwscLoquYmVFXUMr6FXwQu2QpMNHgmeoNUUeHopBZpfxvwsXe9FsfSEksQ6cfJ4eM6LDVpXMMtdufAi9WJFM",
  "key15": "9x2xpwFQkPoi2jnUvL4RaHBPxvcf87X8qdN1Pz3hWBn6GnWbmGaMpMkPj5iqBLtEVxEkvb89JBS2M1zF6PoNwvB",
  "key16": "inUavFJp9TC7CkRkmosx9vsckRNu3zof94CLvaD43PNJkeupfnpLj83FtNyBFdEhv5RGJMzgMEdjTEqgTByY88Q",
  "key17": "4UsEKkAsLEoZjFrEejXD3SXZuFbcqJpEBzHw1cb6LTKWpDen6fWzNEYkeu4eQ8PTdJsPJfjDHyVjk1cQxuwXeYT9",
  "key18": "5SwAkdzn3gr3SCco2UknA88n4Rdm5s3HBpLmfVWFAuB13duVNUTgi2kwr6A7vR1uWL4LAMnCcWSvewWfVyi8Nq2w",
  "key19": "3xknVXK8Y4im5uX1uE65694QDnQJUe6gGDM9X9pPCGkYECFFpNTHrVSb41yF818Zfc38aXjaBMpmiqE8XG8p87bC",
  "key20": "eq3X4oeCgHtZNcXx1XgxdTfxNqUvkXCYfX3kXQBpwStmJz6RHEMVk9yG71eaJ1c3miQGCMB9y2s9PrzHwCjR34Y",
  "key21": "3JoTgihos85RvdyRiMaCWrsJfBXvQ5TPdcKiitfXPhtu5WWNSwBbsujXBdJVbYgDZJqRrwNHCyJp5RcXruigp7Qv",
  "key22": "3ZqtNC4rBfT5NwdkywXMzZuuPPY8H1RXKYbWVxUPLBaUHcHVLUCNdK5RN2NzFHJoAzLZeKqsNzhrAYGGvcfQdkdJ",
  "key23": "3YyQy7ok5vD6KJnJNm9xiNxhAsEsfj4tN7PJWE8Wfs8DNTkSfT7jXkeU3aoRhz6d41PohK5BF2UzVkv7349cVQYo",
  "key24": "3v4ewiV8SKS3hUe1Mh1ZYgLrCwikHQVaesAHrFC5XiUXK5v72ttN9LgpGwBaj8EUZArEb29oiHv7v1jsm7m668Pv",
  "key25": "4zqeRTRhXkCfJwjfVnJ8jquNvP4bXrwdSdfSKW8rv5VJ7suditfR6JzacG727fZhNxsU9NFuZeyhuiRnnYD3T2Gp",
  "key26": "iYBAk3jCJTwVhHUtbY5o28hJKiPXvtZipFRVwFN7MuccDc7jdKyRHCRhSfz6BdcvEuuTHcJXm2zuu1bhTLaZEd5",
  "key27": "2BKZeL6XagtfwCGDzjc5KvnnCSCaKVkdaQAKukjABf4YHM7UWMrqDnMtNSDdMvMdrBTmLmZsQa7KcdFBGxevsTmq",
  "key28": "4VSoZKEqYxi3voVpGHMaYP8Y7WDHDUcCYQKK7jEsc8a49FsGQav9Q59xcGkGKRLzgFnyWcMhcez87C1hRJft4Fkv",
  "key29": "4tCJDs71EkkfHNPZxGii3CGTQgLUPQR7SV6wm2hUEADdBApGfvUMmZ63MnNKXkNSvNa9AXyedPQDHn2MkQtfviSd",
  "key30": "4fC6bdHCYWkKiKt7wZnFKrTRt8EWSdhM8R1mjKuUKrNsL8m5Hzw7FJ9uBbBXo1SGEueNdH6ZatfLs8JNot1gb5GL",
  "key31": "5LB31hJJpTj5vSrSUW2GpqdJVzKiNYR18JTepS71cUfsQbgrqyjXw4m7teVxAmdQ2uyFdeGPPNVya78vMwmVR2fo",
  "key32": "5i8DoQwxGX8RkqFAgp6uAPVgjuw9BRXps1KaVhnqzAzdyxdc8jVFGeD2NqaNVN6N2cH65BQDrnvJLjax5FyotY5n",
  "key33": "4QRAw72fH4w8ZCCfik3Y7xJd4EHAebqVEMwfyP49LYibgwmUFEc3QGQBwcpZHsxm8DoYF35FvrHrPuadcQxkhm8b",
  "key34": "3JNpiAPke9eHZGxm1eLuivJ6ArSeQfo6czcRkGV4kNg1TNa9hnmvDrp3Uw4pp8kNhoPsSX357CPgfBRzjUK2MVjt",
  "key35": "44NBhdHXTWv6qEMQDwiPSVqf7zKPJjcc9FzZrXkBhjYpz2rPp6s7r43EPW8CqhfMt7F3UNJ6Zp2D8f3NMRHovrmS",
  "key36": "N2mZTHci8CCk4zKxnoqyvrTuDCmdtVnFiUiKtK4Fi5rYPrpLrj6aa3QcRrSRpote4y92sTZgXutoEFEYuWw8Pko"
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
