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
    "2Gd9tgUQC36BTPmTqKChR7CuwLrSLyMuY4juPjnjrgF7WredtTXxymwTv9S6tM4fUbu9ah2X7oqQKgA3dyQ4wmpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59RHsgT6y6gD3BgFnCFATCWH8tRRu1xLG7xm7ysGRrp9VCVd4HRdpp68Ujqznzg9FUsk6Z7hiDju256TnHQH5B1f",
  "key1": "4Mf7oVq3Dkg9pgB1zz4NAb4e86YprX47GgBLWJQMPDRgxpYDshv6b4iQqMtbvd5NVhQRJTQuCo2KKK9wmcLKrJ7j",
  "key2": "4k5d1FfzJ8SntY6C3qs2qh43KKUXAKza2nhKU3AizFftDhgmEi6JkesHg8EckgwcBG1yTJN2EH5LNjAJNDBqNpf1",
  "key3": "UhAT3qX1h4vGkxMBCGAnwMiRDmJNFpuT1fwVcELZxgBPfekSW61N6wNNk6ha6fxYAygT7nMKD5dxZQQwt19FJR2",
  "key4": "4AxCnS4xt45Hq6Rg44Fiv8vmmwbeKuCwa64YhmaBrtBR8X8e7vDn4hgzSRDnuXzuaRV9LhP7YNvqceB59upn93Vr",
  "key5": "3JaYMdnZkcjc29tRo7614ZVVK73mxGKiYcFLSncaTnSBhhtDzJRUGDvLUjHGhZTZd6sUkRcDaezSDya7EkVvvFga",
  "key6": "5Z5wr38XNXyA5apvB9GSN7mowhMbuiq2Qn7Vz5PvGAjydXzrdXcVT71daveVVkJfqqt7ohxYSJpvsHoBNvZ1KtZ6",
  "key7": "124Mj4hVVGW74u2WWt5MTCNYCvmwnXwjKcW396SttrAhTe1sqUVao4hSh6Gk6j4oK7RKDnoLViVwT4b3zWqiFKWq",
  "key8": "5HYkWyC9n2X9wmQVwVzGDP2rdbJRHwELhSecbYCWNTLeTtSh9pt5jHyqLZ7eRGCnDXD3m6WrbfbS6HHHykwFmTPz",
  "key9": "5Hd7SeNwUtU9y6fxKt7QMokZVVoKuvJqWcrSQTQCrBHhA9VyDgnLqPYiDrzSLqTXmq7zQdKV3EqbvgyZ8ySVPD9p",
  "key10": "3ZWJdKRXGcFSqRz7KpVkRFcKh6eyREC9hrJyqCWy5ZJWRiR9QXjBBG6w8tPr7ypxHtQ8vNBjEyfmRKLgiL9KKyDB",
  "key11": "4gF18nLujUX9bYdnZFfVu3Bm5hEmPAJX93xrfYPabim38ziSphUuQdRS6AgCrn39kPfPbFyeLeJhSNcbq7Yuujds",
  "key12": "2EHSUGmKftBXHbnBag4u4q11gi6XhnD64W2ANSLjTuRAenzzdEd5JQSP95UZDwMP6BCgjy5H4nNrzDDzL5KAQcqs",
  "key13": "3HgLDPWg2HxgTJt3mvkVMYJVK9RKJ25uDDs6zoTeBpJGzkRpD48nEMkvr3v1nCNsxSNmi5RAN6witnYZHvBuXh4q",
  "key14": "3PW3XK6jaqMFFsaAUu2hKs4gAMVgzXW8jjinVHm2Af76Jsj8d2frJJukySDvYd8vSPYVv3rXEKL9GSNPAZFGCtBd",
  "key15": "3pPK2nq81BuMSJ4MJezTuJtn33fKqo1216FnbvjwjVqxPqQEJZNu3B4qrrBramvhdMQTv65eWCBXRJPEM7HSMkkY",
  "key16": "3UDYfQ9vMhfZJnnseGKmTBvB24rhLLxEk81aFujauJuNknAT7VLJsaT2TRvLoazRQNK4rXDCF8acpQeiLzRD4nYL",
  "key17": "5L1LwPiMdcYTZTxWajhVBcLdTbMQiNPNpu8vkihiwekAjUDbciyNPQEt9f2dLMThJ4LznX6kaTazrj2S9AavJfPL",
  "key18": "DJUjURAc5LeTEv2bdTmDS1J7Zva1GFD6xBzC4mQL3vkhh5zzYyQcksepEi1gtS4SesJ5o1CX7ySyc2sP7JENfoB",
  "key19": "4WBdXAaeGGVZA3ha2L1Z7XkoQPcLkidZ3upedhcZxiZEnCbZhDJQ1jFskGvVYCQEqLn5Mc7PcCZfVAHPC7gkCQU",
  "key20": "5sUhvLw1YaxqzCXsGXVAqXJwHmcPqxWjeccgtjApMjp8vVzDeXvJckffPJZgaCV5qfDMAaTMgf9v9VkiiWZdg5Xj",
  "key21": "4wxmHy7xX95L8C6NKYAYboAAx3FCKgskYjszn2Tb5nA5ZrD1isvqhuGAKVxAeVCKGhrCnYuKjMG828xkB4tYv3VF",
  "key22": "5nDLF7b3n1Q9gE4LzKHh8dhCMEJVfzZb4kqUZQWptF6evh4c3a8MRTL4um1Z5pcCqXyKCn8geTyHPxJ8o9FDhJ7F",
  "key23": "5UCDvqgdZJ7G317bjYrjXMXQSG5y8oZ8iGfB2c35xPMtWgtMZ3NbTTJk6XpHWh9efo7qMasycrNfASsR6JFSRmiA",
  "key24": "GjFgo9EjZVs5sAoJFMGU19thZGbCa43bipDAriw2pq6CwEw8pLwgnSVezZUL7YoaYUcX3r9EamFopSyNtCbMh66",
  "key25": "4YkWcjef3Ve2QsrRMX17Y6suR7bNgv44Lpn7jJeacMfeHwwTPpmF9up8SmHBPdZrNke4opnhJg6RKzLEToPEiLV8",
  "key26": "5W6VGMhJsj5Cqt5mHG4Ej1Y5hYu1SGZ5J91KTxTtM3c8f2d1KXDQPwxfmJJDhhMaKni1T3VKAGugEBqu5qhPhBFK",
  "key27": "49oDN6XiWEogkcassnjqjSLjPKfUqQb4JdpwasV8muTdtvmy4yHDCK14mUaTn3AjSkyGbbLH57JuXBbnVtHSYaKS",
  "key28": "4MtzjtBzQCfosvxurpFyJQZM4b6wdkkCTd7icsUaDSbLCuk1ZJuQzZu3eXzZ3DBKnSpZKvcvdVUUwcEcuzFMEG6p",
  "key29": "3VBn5ByaSxcJVRYpVGBjd9C8SWCswav4P6KFBCTKuJjgCTXVmFyJLc4gQiGZ2tw5W8SjS1qVgbuoCVVxav8sKp3V",
  "key30": "XBwHfhyUgMdHHnaK1r2MDSDi6E8K2TJT2k29GDacNLcnea7kTuPL3RY4MCVVhxeBXzreJC4K2Xdwx1vV1id4Tbw",
  "key31": "Vk16BZXa63H8GDLJ78bDugiUJxNW352b7SEmMfVyKibegTnj94sTBmNCpqYx5T5y6NbGxHzXZzJAsxmGU476w5t",
  "key32": "p8JsTNoAQ7VWsesESmLrioyiAyD7tHHpCgDjCKgwwJdFPgsRr5FBP5wjNVqEAGHt2ad653TXLn9x91s4DUxJeY2",
  "key33": "52ntj3DJ9LUe38cMnCkjeKZpGMdJBsiC4heowyRrfAN7E6aqVtLxgk6XA4PJ686TJ9BaA6BXHihpNR7RyywC1aex",
  "key34": "51P4dopg8CNqUheJnDbBiaFxoH3tZCCNKRytEwrGpiJccRcZb3UxxEunxQwmC8qEKo1HiPZL8BaGBY2AJnP7QejC",
  "key35": "49yiJvkHuEfF5Z87yseVTuM12ZC9iEZ8QH8S3bUPuQQYx3buLSVMq19ispnAsenhXyc77vGHZJ3VNrfezZZdrcd9",
  "key36": "55xwVfKAE6rZk7r69syVTAfRgF2Tom1iJEZpt2ou764NYK4Rvq7X8HsZiQ1S2XWtgXvcpxW3v2aG3e79ZHxYdDpZ",
  "key37": "2o2rTocMuoQPjZFD7xbj8NWw7GigwySC75srPtQ8kKT4fmNHrtDPXZ9bM8muD4pUcjVMKGuh3uqTJFUS7Qyx3n94",
  "key38": "5RcxsSFpY2msmfggk7mQhx5Y2WwjyPViYbyGPNdu8E1Vxt79wv1M5f1WuP63yhjJ2hP9TWbXrf4rVRc4S1Gih5gT",
  "key39": "3pscGTb8Qu3av91iSJVk5cCykhJRDq2w2Y3kWgFrnV9wQ65kn2Apjn8tut3MToHzEk9H9uzDCfYMotJg8bSnwxHF",
  "key40": "4sY6myZ9Ts4dKdg7z4hvjHscVmQWy6sNekvCbsGGP5xkXj5Ryh9aFc7F1iFAKfNb1R9xPoPusr7PFHzSC3timBaK",
  "key41": "2xRT6XiwyiETuhCSHcYGJUEKBB18FmdZfL4ag4eqJxj5cTDf3uT3hvz1B9qF61mvxwinRcsR5b3zg6PC4ooiRyF5",
  "key42": "5ZkQZHWEhzkBXCPRvKXWeK8Q2UnUbkiYk2ez8jAqTKj3MCj37teQzEPGpngtNYTij3uJcPR7hnxSht2WfkHGh6vk",
  "key43": "krJezEhRvSWdJeQcUoGEpXf2SbPHGtzymkzjjfD8zYVcJHV3RkSMmmM2puCo5Ui7kGcNc4NwWZXFGCyus1Z3CtZ",
  "key44": "34ikPyh4NfcE9E2snPqAVzGzNogT1zD93Y1dqzDc4bX4gieTex9RiEDeRwiY4yEhiJQngpRBdKczmzA1eFdpDEQ7",
  "key45": "2WSBQG8RSeukjNLm3L9VdmxVVk5LF1y3CSm9ZxWKwSsgmp3wbpqnkm3ue8JGY6QQisRkt5jyHmRcSC3Le86qn5ba",
  "key46": "2sKjNkQZs9EUWDEywF48U4vR8A1rWroJ5nWZuHCg626X2U7bhSgtSMTrRLdVRAT3i1A759PzZsd65Ma8Xney2xVk",
  "key47": "3GKob9jk1e2MmXYibJjCC7wC2tPqfq4pksfW8kJgkXG2iNfktyMbzT5tSJyBdS232k8RLEJ7o2U7xH2YxScqfDsb"
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
