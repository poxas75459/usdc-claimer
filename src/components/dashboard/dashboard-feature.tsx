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
    "5xrcsJZH2z7y9co3Z2QRA2ZqDcpW3sj2HjyBA23HsfKynxaPKVMwMht7eGPEzuLovangf6Yn6T6Fcwe3tYzAiPpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gbgtWESYBW9kMbWtrBGx4CqBGJKnwuJYiFxQv9L3CREKB8FZHYi9sD3HX6NsqLvrX3zbG7HSYy5neFT47fPDEbX",
  "key1": "2Yk9eSnCEL717q12AqDF7mAWXYmc2Gq63sgCfrke1K6eXoW2aoAwJ5rYsSBQRW3b3vs8UqgqCgWXYi82i7ijDZgH",
  "key2": "5fdu4CuprUKd4Rju4ntqG9UMPMqAXyDR2Y8uwpKGbNyN6wVS2vJsYY5jwikMiJdzDK9NuzRA9xz3b6cQQtUt3hM4",
  "key3": "5R1dsrqfXX9H2s1mpcd9RUYjUQpPUXT6MQwxsCzk11Jy6EVX2bSnD1ZFQCWM6Uqxs8p6F5jyCqMdNF1DHYwSdBJQ",
  "key4": "4qPiAGrtCA5bj7C2szwa5vjKwNqx4HwwTTK5MdSaBF4xgkWrJ1Msd1Vq7wK7WNXDt4game5JThp9rBWt5HCQJeho",
  "key5": "5LnSqXvKxgJx78vmwm55u5kKjMvJr3ixtbQreBLgByspAv6HasKWEMyYryqXLYiy2ET63zdK2XSknQRxiMVJTPGc",
  "key6": "WuD1eSFeEacGx5oyCCYewBdHPVb9iYLyqwsZGiVQaHZ9WP1YhCyJKw1VETR3tARCZg1sm7NyoiiZJ3GmG9xYMa7",
  "key7": "5CEzvKtg3GFuVfuPnssKh9VYB42J8enT4G6NXfctGBAFSuiPAy2YkoSbrzZCbT3o6YhKZsBCrzNbRoXnq3Mp7b2Y",
  "key8": "5D42o8HMzXYnoeQBtVjUFDam9Nd5YUtHuQ1igofVBTT2JA7eNgDU8UwZ68WYNXWPyRWCgVRc57vdKZeoNheRgkvQ",
  "key9": "4mP82b4oaH4bBSdQYDPRNveBgrZXpsUWDLmwWnASuGot1fQH2dJx7Z4FbY4sip4fQDRyhWQgqikLwY7DdjnULb4V",
  "key10": "jA3pbkQbaYcPzJDKWtyyJqt8sqDXZJKadkxxAjJphY8bn3H8k8griJ8UMgrAqUxFG8Yq8hCymP3Boqmh3Yoeknh",
  "key11": "2nHAeZ7g5UZzxe4u9Ck7YgL3kpaF3CGYNcGS4eqTt8WXPZFw2PpgaEK8kx7FQ4GB5hipsDWJe9pCgbQvVvLyCmJz",
  "key12": "2CWnCi84w1tjTTt9QcPi6MLuq2fQnZAo35YV2rZ6hrKVAzjJ6BDHmiBjpf5dhCq43juh26pK9vbzkHDYTt7vXXjP",
  "key13": "3UL29dz113Wf7n3ngZueCWquhzEEd3dvYQPbqbfQh4Tti5fVyb4rffgU2XerBozbphu6d1Hnnxtue4QSPgr9vxwx",
  "key14": "5MDNDRzm8y7KTU7z921baTXUFdha6sDDJkQv67w2xbnDXW5LFw3njfp6KK2tnT27BdgwwJu6tw3XA4zvn7moBYxw",
  "key15": "5ZPByvUHs6vjcE3FNy5XU4zKvw6z7Nh2GaBeXYKZj6srghXNprAvt6SXvUS65B7UFQ9FMPaP2Ku8bgrFMFztUiYt",
  "key16": "471mLGKtcxomFo69Ku3oPBmQ1yvWKKMem72FkSsMMgfD11YYXntfotNv1xRwZCcwpSkhL7KzVnCcmaZ6vWGD6RWF",
  "key17": "bd4DcRZhcUsWh6TfmHAnSoNMMfDdd7GHkoAW1xSZXUCpW7R5cJhyuSgxaWH6aR37AJp3WP6SjAHscmVQwzPBjWR",
  "key18": "4koQZCUZjRvghSgFSkyFWfMiEbERcQDFmTnGh4cUtPDcjJAAz7tJ1vqW4YoA88C3zmVHRSYkj1BbJY2Qc9eU2pGJ",
  "key19": "3Ex3CyrDmeUgi9gPUdNgSMfokCijZ6e7RW8Pj3GTiNAkVqDAZn4LXgeWhBWqvQFtNVshxN329dwTcfxUZmkjqZ7Z",
  "key20": "S6bg8NrPxztpBEZTNga2aJNqVBvBdAzQYioPJ1wVPVMQ7nK3KbV8dmqRJYm8YYDQtcVrBZVgm2tt5LVVBwbsg33",
  "key21": "5wHWZ8p9kVA5r87c1oBpa6ij8SSteebyFhDnJgaeCHpYJCmJxvW769sWiHzeXhmxrKLygCz6JkhnaM5UzCZ6bgFB",
  "key22": "fibQC6D2m4v4HB9eBviR8Ye4zUGz4ttwEGVXcw6QhngdScqeKvYHo7hyHv1UvBtAADAfjimqLhX7KJYC6CHybAD",
  "key23": "MhqWg9efkcKaX6CEm8WpWBHSFVRupDLvot5wLxzKmWjxUDouu6cPLvuBCTYaZdCPXWokqb4iyXf5Q9gbhTaqYh5",
  "key24": "2Cb1AA9HaCCKzPKiTVvSuwZpwFodL3BrevRzJzqSKQZvLmJDuTDbE9b17ccMWCzCD1QNMBYLWTSPsPZNftxS4VzM",
  "key25": "5nwkWDvECiARE4xBsj8ckCMAEZYS7HvDKNzrZ2HWgpJFC7KX2VWPtLqLSd61TicAbzrBjf3wDZbrohQ5uBqYcYsc",
  "key26": "2vs9pzdZiYKU9nMfqqg7FsLWQxm8EZTFKEKa74x4Sfb8gDgE4Yzepv5yR4PsFF5XmodbXND5z9LKcrimoF91AuFp",
  "key27": "5FLBsnbvNrnwYu3WwKL9FPCb5rE3m5XUz3wsu656vKBFKWcbnnBstx8o94PRmCR9VHDKjbyADcWPYUsN6Q4RcHjQ",
  "key28": "29r1Z56QKBypdZPHh4fTjDiQzKdPexGETqd2TgZBhTAwmubCpVNK86wRL2r6LytKkfQzkCsLfvvpYtWAtrPQK23s",
  "key29": "4TMgc77GxshLQJ8kSFt66j4o3JMGMYSdayfFhfwURTXz53Pj1eD5kgn5HzguQwjTYu4bRkHMKjVKDXkS6qZpRgkX",
  "key30": "5yrwMtb3qzTPf825HKH6nBbLCTtMrsS48CemugW6YRQuDi92CfnhCPWRcSx92mdWxhYLMEydCUfFA4dteXMaEMXn",
  "key31": "2W9aRB8DrPYdtPXwetM6CF1ZczVNerACpgMR2FA2vRbgoevR2jWxQKCBc2BaSFgfEQ4L3135sL8Z7ypkRMTk336K",
  "key32": "gfzH2BxQF7bsFv9gkw3wgVCeYofJYGuYpJgTZe6F46vK6iXV2hyb633TgbngphJ5NgGYLdv5VZiSaMpg6QVs9sy",
  "key33": "55svX6VxJzvAqmSdfgdfdMoNK41u348ZucLBLZpKqwavwVQpJoEEXnDFZD3q6fGkXkJeuLyHHY6NpWnbBdeTjF6s",
  "key34": "5MJqoH5JvYmYodyXWPihGv7SCTWGU7Ss3diHjW2zKtPyP3XDFiFuGV8xwVmVSsqJkAfMHpaVG4x2g66p9WKY33A3",
  "key35": "5opY12ADDCW5cv1LXjhgrXzKLvdMurVKiAkC494moiESEiWcyw4cZRxYZztrrHsMP8mrhJNuGGUTmdz6ZLAVkAH8",
  "key36": "3FQHAb1xEdCGpYgrj4WCRa5EfZM3Ck3J9xixXhhfMrtXgQn4CsdFU5eU7S5E3pac1LmmeVgXSAwUKRENYQiWb5Gs",
  "key37": "2dm2zd1JsNecUjkvnV4vXGcpTZTptTCcuWLr5JkrZqiwX2jvBha6KnLjuLQ6PHWzrrj5EH6FCQpSna1Bk4ffwfxS",
  "key38": "5DwwWuDLsTvf5T4xhCCv1bYwWWiT3eFcMfqR2gquH1CHce2bB2tXKdhhKwCTvsMqBGgPisGzDDNnGdkASE6uLkyv",
  "key39": "3QbZTGJ8xW6fKYwW8VqSyN81amJuXYBMGfWPnkurp78smC18UhXwBDyLzWpHHk8sAmvUWi8HXAuV4FbM54BCJ12s",
  "key40": "2A4cTEGysMMZYqEDubLYiUsYofBxDUufip4ANP1NY9f9oaqLZEqgRSo9D3RiavfeK9VSDGBf9vWCGEMhTA5pSqTu",
  "key41": "23Pur7dGSh5bpaGGXW37CdDHEFNXFst51WiYqPGrVw9dL3AsH9VFFCiD4EZ6L4FEQAFqQcSehjtT6RzGz2wA7vMq"
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
