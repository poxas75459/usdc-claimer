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
    "35yS9AqrdzhsvHyLPi1riXTD9zHjhiju1zeqvsaVmby9z1cxCm5QWWsArR8fywrMdHTJz5bu5G35gU8t2BjEaciY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y9pbSLPvwvAxKK97mFr4rf7srr7ze8XFMSXfPvwrEJeVgmmWvBTfsCEntVfkLoe61phssbmhVEfU3JZ8qPoBJHk",
  "key1": "2acP8fFYKj3Juaz9GHjFbWMV2w2LPzPoNJFRAAoY7zC5J7QSLN4CW8xzzQeM6ApEuwLZsBL8qBrfSqutQPDvZaNR",
  "key2": "5Uf1cZGJ1FMJzhA61nbxR7qNj8RCps6e6nad5Jxtip2AL2mzviEFhATau3cvshv7xACTuoc1s7A4hxzPFzasaFQG",
  "key3": "5hEP1eR24MxvD6V6uMBkkEinC59kpK1JnGjFYgqfawxMNVyD2oBoW9cPneCR3qXh7wB8JMgk9Z1YUxjNoSgw6Wv1",
  "key4": "5aX1JMr3eaRpmBX7wr9EmCuEwt3Q4sRKYGMfyXzUozvMwAZcSab82pv3FxgFH7v46qvRfPfotrdB1r629Wc63tq6",
  "key5": "AxMbAaTYZWMKK2XjcZpacrLgghBKHvxr9oW9kRdxgjbspG3r5nTfHYQ7JqRQjLU5rbABiDnQwW2s1jWaeXpYpWD",
  "key6": "4jzuoXQqcBL8LqjBvmwjE4Tc1T9ptPzoKoB4P9ipoFQBEwNLd18KnF2xKWs7Zx3vAgXMEfk2jzGDvyqeNnrs3EpD",
  "key7": "4THm5f11oN8sfrtARbFCvfJ8khkQkBEWqWknB3bEuuCMVvs3ymJjYSY92huxni6Bb8JCfGqzkTW9T6yn2nXduaZj",
  "key8": "2aiiuytof2ZWGuAh3xnE5PNK3j9mjSDwavzmYJtJLTiUuZxKf1QK4GffjsREKzdNXGvADHhmnF4cxRpmBrYsN11M",
  "key9": "2NMCjm8wHFH8cdzEZoyPanV38zYYRsMWEnHCxF2o4HuxwmMECsJi1Dod4Wq2wDh6GQ4utEnMAvDqGS2cNjddMZMA",
  "key10": "2uJkfJNbeC7DH498RmsuRyfLEDoj2adRcRcAZCp1fQPnMSqjmGvJk7SNFBkRV8SYQV2xiH3ZPXMzqo3h9rbbzj7P",
  "key11": "pBRncKphRWfcGcjbLYUC4Zo9uKTr95BDmv23NqLWrmS4iSpfX2ppqtetTgkLeeQs5wgRwcWoJV3j6XGvAUbkzr9",
  "key12": "38BNhJKcVPuFpoMrnTCrzLnsGwGJ5rkF3YsgPXK1WQj734sgwUbkE5Qz1E72tUkG8eHySbk6QNSZWkHXqMp6ubif",
  "key13": "4UtDmvJBrEUsuGQ1Ts9r93r4pckyNNgMJ2ke1JFLxgaEgiSb6beeh8pNYJMSceymzz341svq1eLX1hdD55Sn1Xva",
  "key14": "53ZjvYWj4BwcFPowpcN7LhVDyN1mU21oxKuByJNHxJC1o4AowZxGWkF5oEAueZ4ZJqhzBQPKEThmV3h3tNAyQcqL",
  "key15": "5ydfFZTKWngDvmBBWoVBVE4HCshRTtm1RzsqCq7vgKDNJaMUUTL59UPrvi4Q2h4E7XHgu9jLSNsy4d9dhCKQ1g63",
  "key16": "5woEK9PygvosfG1EggN6PJd9apY5M2eBbKwVP92fTD2QErDzz5h2MhmHcZ5T3wzMmsUmmhNmvUP9N6jM5QQtpZbL",
  "key17": "2rVLBWkj4Zj2fnRvefmNS2HrGegiBPghV1B25J2g4bSVAHjgtMHDBLEvBFbnei41q7vHqvo6gwHmtaEYVSMZ9GyP",
  "key18": "5hi6LHMqk6JSBQBTZJtWpDWo8FDkSt23t3hSJRBtNsaNskEwgAD5DTpxjuXkWPZvLVfDA3FvtpU2NYdayjueWsKR",
  "key19": "3xDJURuEnYq9HNSQuAjzgEtveXMLHgvakgGB2rAQxACfLYbYHpn7XatW9jAnwY2381jbKkiCphTCHLg6zAj3TLgR",
  "key20": "4Aj8zoNMatrFYQuSs73MRzXPA2mLJv3ojG8AnYB85DQbhVnAseexjP9mGvSbSA5jS5vtimWuK8juN3cEbGyC4CwZ",
  "key21": "2GpPJAbHummeSu4stjuzbfZxaaLtJ2wxtSsMriHSVGkDh7AuY4NuYAqT7Lf9GYVoh1ca2FppcBTqt1JxtzV1L8Lu",
  "key22": "59QYQBDZj4DBs4PNhikT4CMpHyfbYUf4p9Yc4T126qCxobtvRtTDikerz9gEy9Mcd2cM8TowaDXqipoaCMMzVVD5",
  "key23": "fHNWXeRt4UFf1uzzinvUrfjiQjTdzpZyDP6cHiRSBQ1FcHZfYruKm5o9ba44fJgupGqhV4PZpAdx5hfgeuuYVws",
  "key24": "xRCVjJzUFZ59awBy7x9bQxvf6zSTFbFmjgyRNBph6iPoCnU4FXrtWVzsP6DNcfHrUKnY8aP5D8LKs2qh8TykUDS",
  "key25": "3ZGZerW711yT69dWfmhUaKJpFLAKq5VYxxYKng8aLswizohiHYCJzei68b2KT7t4ehxF8dWm8ZJFkZUkxebPRaF4",
  "key26": "3DHhtWu3jyKCr8ktrCnh3ie9Cb1cc4pCYi3TYG9d2vJARhfeGXzg3EN4PpoARNoW7FHaMuK7jJ6ar1YZVNQxgQkS",
  "key27": "4FPCTYYBmFWWoc6YkmUtYebGkNtTaAA8S9pA6Cp8JZYcnDbAPQeG8eaNxNpxoiSLeFnGMdpCrEVP2TLSbvTj3AAK",
  "key28": "65bLbpcxXDSpDjtBrcv7nnjQFPesStGPh394nQTujmmBa34MSMnWXxwxVqq2Z4HqkyD27qgxa6d59BCMVSzmAdUG",
  "key29": "2T6xBgAUP1rYz2armuRk5eAiETEoScCpXkGpUYHuvWQpYHtZ25FcWgo3mqVS9K6frj9Yx26Hbt3Kgba8gDCSkXWd",
  "key30": "55JzuFYDNrpfWuBgwFi81obPawHUUFdA5kyvGCBD4EXdiYG3qCVQWzeWRHh25gvBb5TTC42AgP8ksMKfCKz4xQeN",
  "key31": "4XnvjhFfY1GVyBAiL9UX2AaM2yQFYNCsiJ3Y2VhsQwKXp9usM84NJRjsqn4S86LCiMgcrScENJqqnoWNij3K4zN4",
  "key32": "2YAQcDLfDM1wRBQUUKs86MFQU5dZYePoJiJKpMm8d3LV9AvHvEdfTXFWs7P7iors3mf3aYCGH4FTXjD1Vyp6766F",
  "key33": "2MXN9NNVSQGwCdsYvLos14xYQ2NRykutVLMmD9LDrVip6t9hQDVgLiRvPCQ6GMjWL41QHRakpXgqRo98ucUNqsbK",
  "key34": "5JHDgLg6DzrM5huk7k7zP7wSefVACrTLZ9Y3W8qXUuUtVU2Tr8QksoqdYqzztLEdcySmH2ntXjz4FPo3YKBpL4nH",
  "key35": "5iQ5cVVCQfMVCResdrsmbvbMtM22ofNxU7VqZkX4hnAac7SP7EFSwesD19zjjZpYsfBTCChzPq5qMhH1q1D8dhyS",
  "key36": "61fUg3KUbKzXvM8Cem1ySZeHfj3gji6jqYafn75sGSfgCKhPKxeLv5pQgCc2A3BWESx9QnkeE7exY1FBdp5VWb8k"
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
