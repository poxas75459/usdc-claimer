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
    "51itZRPoVXPc4wMfd2EeaTZprGrMr1zefApwx5J1H6BzB9Gbcq38Mfy4ExqFqQDsExDKAMaX81Jct7oYiMfkt2QQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqqpT6DWCeQXWSNNEim7W1AN8EqGxXVEwhjccLYMNZ3AP4LJkNf8mycVKQ7fqYzAbLhFvNoqdiqP9Ss5jCBBwxF",
  "key1": "2fMNBjcQizVywALKY81cJDDUjG8GUC7jkpXnwvqdyVxr5EsXtmcUKin15f8dUpynvBQAsJwFwBEsYCDqniUkAxeM",
  "key2": "oHUguuA3AnDYxeLcTaWFmZvZPsG7gLqz31Erb76mqWoi6aRKL3NjcczZQHBVpdycrJUpqB17ZGQpf58h9gP9eHd",
  "key3": "Hx3bmP6St6f4xM2gPmmjx1m5GJHtRZtAn5AtpZnmLHVxHutNjUzRZ5mNwB8DJDmC8WKC28uj2CPuoAubXyJZ5LF",
  "key4": "4QASPzLsJ1MKzuYsvDizftza7zoctgqrvcMfYeJxpErk37wiET53qqcn8NQmsvqPVxtWR5Y6Dz86NiUZeiJToFTj",
  "key5": "3jth2EHZPfopQLxYYnaB7YvYpUwPgjgXxYJdnxn6rxUvKvUmCoLQworrpgk5UgNHEmN8Da5z8iKGFBxodMBBC51d",
  "key6": "2dBwKdu1GyMr3mKoA1UYjfhRWGL9XeLHeFY2bmddnNrTph9RDqzytVEKZr7wZ3UDwWvTvnk7UhqppHmM9bMEcsNn",
  "key7": "33DSEK3ULu8iJSmS48Z82ZEwM1armibbtG7tbemPFzArZNjaZnW2zBLnhAD9ZvvE224QDiUET7fdyNTtswTPYbFb",
  "key8": "4YKnDcPUu4qmF7ixrrC5EebAkPY9mZP9M5oWvdJ8NyX1tWnSzRHcq1RSZGQo8De1nRTFaxj6cuVovwAJuDH84MA",
  "key9": "3U61b4USgYwiD7k4VZGRLKBQX48KLKsoZqeNQQsA5V9WZkU5B19F1tq911vqfi1BbEpgeJJtGAaGNnHsX4PutHMu",
  "key10": "3GQJSNTsHxbmFHw7yXpc9zBpd5hpvZawJRSC8XMXJgx4zYsJWC6dZJX6Mk8hGY9vDs1zTmUNh7CYyWpdSSUjhZzi",
  "key11": "uNG3KJA1pt8Bmj2GQLjbBBdm5ZwSXbd7bNDX6yJesLoV1A6QayFcqH2nWtQ7TZ4nao1nisU3CFoqZMNhwct8Qzo",
  "key12": "WbU48T53V1EpGP8xjMsemEG3ZZUWnXVfx1Qwkrur7dffFk88z3apWZi92NELtQkgL9zG3XTM4EgutScGzD4mtKi",
  "key13": "53kw83s4YZLfCDseUyjHBWZK9BT7W8N2raadpCUC8tyr98pEyPhfQE6pUNfJQpPpJKHVqJ8UvfwYA9nPLwDWSZi8",
  "key14": "2nWX15zvbkWVLqKUCTQzEEm8Fj1bMzoCaRVYzLvX66v3BL8Z3vbhobjnCGsfhzxHLXJai4JPVUteWgQ68JBbJQj3",
  "key15": "2pQ5Mgh2d9uW1jcMaVJk3JGiX1pLPcz6jEyiUJpPjE6649gm2RmQRbfEjuwVK11pTuAJBkKVmacxoCWeVaJpBijo",
  "key16": "3yJedGppA5FAQpkNJfcaRBj5Bg11XryvfCcJ8HBQw65npRt5y7gpND86BEwSDWgK3kCvM4tGw71A8NtUYPfKqToZ",
  "key17": "57n7dXbRAhW7UY8N9JexaXvhLGVtiRyUM8z7z1oF5pdS571CmqbgFJ54qD8kLhQAGuSp6mxrmFty1K8xPCRNXFCa",
  "key18": "39nRJV9mo956MBgwCExisEagZvq6FpFiHGTkyJjtiNUwSTDJXrFQN32YACTw9NwxsUhkUW2Tgag6MYUKXghXRULD",
  "key19": "5vmK8QyRzELfFXEQBJDSPARbtwXZ67sNaMWEJU6p8A3yA5ohn8Bzqh7Jwct8yK7fTm4YbMuoeQ5iKyjVCpB5wE8A",
  "key20": "5V59GFRqASMVw5Y84ZKmnDpuTdUmz7M8ijmSrVey7YjY6ReCkJ4r5v7Xw4qXczUfCB6Z7M7UgswBCCmeK8J3cF7h",
  "key21": "2iwreF9rz8M8FpT9YrGWRjVmWfS5wXrBgdzqyZYfTWSndnT84JmBFeYUB6YwbFY31aJCqaxi1CzfpFZHUzU9NhVu",
  "key22": "5gDRzpheeRqDpi1HgBiDBbkwoSMnsXmbZqKNH14nFEcZG6bwB67aDkzjRkxtTbLZn6e7xpBhAfbg9GtwpJNVBN43",
  "key23": "3f1fSruV3Da8KmmUg2bLh8GgBneA69ba6umwverPCTkaTwmsZxMVN5xRLSwaCok1ZGBsqLgguzGcj8d5EKXbPD41",
  "key24": "43LFTV8ugwomgyp1kAemfaTKnSrbG2hYnCTAEHQ7U3p2T6H4VUuX6s7Pb1cDq1CkH7xRdyrVLiwFM6xf1CmhDKMd",
  "key25": "5cYirB5NrFHCgiGgtkBYQvoUjiC1sq2EzMBKYjjkw837BJ7iDk8EGLBYuUY6g1GZdvmDRw3AN5a7THPPDDgpTh11",
  "key26": "3w8cJfC8UMdqVVgbg6TQx99dC9i8V37v1RDPQdKRfBq9Z42cRKJbCgoZPtkxpcgT3dC95narg29d72ZncKkAcUaE",
  "key27": "2Du28jzUXg39PG1EiRYiKsY5Vs73Q3WAfRvw8RrHafX1TR1KQT5fgu1Z9XtFymYC1Kf5x6cAHyEvMaetw5WA78kr",
  "key28": "4hvzw7u6D9MMtdNQX51caKTxkHRLzhkkfgyWgn1heKX83tLE83GPKRjfZbnLzZ5bx1t2mWsLr1oyfM9fV2UqQpTe",
  "key29": "3DB3HxGCNA7Ug5sjDmjBPav2VK8ymx2LS3xFHevDSkhMQfJgqUWogFV9h82KiMdibsLde2Pir8hv1tzJscTxyBpc",
  "key30": "28RWLWtRMdekxXtP8NhkuHn4punvUtTDCiz4hzENtEKD66PPXSXUbwMR4Q7ZhMHoDaF9RZAQExwbdWtsFNocVdUg",
  "key31": "4UjB89dyWbVXLiJDmMCeUPvuD9bKmXFJDCVWN7KC6a7BsbHMW9HDNMdCWaYbFeoSpMwqFtQpTx71pDjMsnaEkZvD",
  "key32": "35yu7Mzrrdt9621z7mcdjYFaGJ6DABLS4Z6UDRzWMsGAes5gpSWQZmB4Kz3E9GS72uFxigAfU3ry4BwieVDCTJSh",
  "key33": "acuAF6Xi9iwHyQ11pTqTrUGCRSBQSeSU1zyk3mMkEHTNkeuiVeTuNsUXZHXZSE6LnPYovwGedeYL6fpCGsDyeAB",
  "key34": "4Kp1HWbRaauVMaPormr1kiHgh19Evcc63KrCu6WsWQmuG8ps6JKb9Zc9RhZscvb7ap7zGSuDGDYzmri64ANN3wAE",
  "key35": "4TTe64bEsMie1qKo9vRhXxMwjFV5P6fbv4ZyYZu7edwEPgi8QjFFDqUMfyRsvJ1v8MwoNvVtQzy3sRbMWMVDLHkc",
  "key36": "5THyiz8CPhhuUdRZ1aEdigQX8m9UaGdRv4ebVXbsMnGKkJDWJQnRdwyXvH32EzYGD7qaoNYNXHyY2uhrGcNkrmmZ",
  "key37": "57JS7d9KokD1HXwoKZEWjujku7eitUxHgJNy4W1zm7FW8QMn3hDVuGcfCtg11xQtGCk8U6PhowsM4jgH5dRG73RR",
  "key38": "3NRtTkXa2Xa87jYagwDNkzmMufEUcHfGwhpPpqAw4PrUkAYmSApsCZxcFBaPZ2GjRZKK68BpCqV4VakA7xe6NYWm",
  "key39": "5z6YxDRV6PpbrihQc9yiHLgtxhJD19kPnni22djKmzvhbhY9FCDsyUsCXAPVLzxqWXpdnoE8g4FrcbbtxPfj6QBr",
  "key40": "5CRdLowDC1xGzQdDfuPMkpYh5i8pKTCee4QW4YPvzcYy9bG5A5zrK6QiSAjoNM2z2TPd7TGppn7oFFkrHzUGg56T"
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
