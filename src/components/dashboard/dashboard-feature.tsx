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
    "2jnzoRq5APFzFxnWNVNf1cYz4qYL2KLybxZB5VZS1VCTTcZpJrMJDNZLGqNg3KzxVfAaYMWMxiDujGzX9sPhmBtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHep4Sq9vA6XE25k3NBwoQd2uG4Cq8LwMC4NvsAJpkdhsXGr2auF72DEwfmUA64UkYMetmoVpF6PV6JEAdB2zpN",
  "key1": "51mgxshHtVCnuAP7KxFcReQB5FeVvN2rs7soAoZzd6MUmkGFW5vLkkV5B8y5JAkS1CBxNDa7nKkrQURyZMsikW4Q",
  "key2": "fmJsad9gEq8G3Gh9jSFLa7NouM8Q1nYAESg7WiGrgwqwEVJDa4isVcz1r7K5BJ7y6Wk2eWZDUnDhC9X8zRN1Sn6",
  "key3": "2vSAPc3w2w1RAb6qzuYh3waV7KwJHZB8T7Syf4YRwmU6DPfVXzk9eT19dAWz1sn8Rsf4K8E3uMh7bPj3AV86exuk",
  "key4": "5ZcyJDFxJNe1WjFsCRUiGZjFdohkcQtFWgV4HFu6ZyPdHU8rfjtM4tENAyauYTTKmA7JiRusk1ZaMYc3PR99F3Ge",
  "key5": "62tw7U3t7iS5RbKuTdXtTT3YykZ3o8wpCeJGxyGnqr6qiMY8Jb8braCkuHbtVcZ4GeR5vAAWEvR3mgcVtxbVmM7r",
  "key6": "48M2qTVxdkCXHWx9ToMnuKwLUUTvSts5ZVywA2Zk7hYVDf3XwD3rw21QxxThzG7Ju1TKUAgHsycEaby6MtBMqGYs",
  "key7": "3teoy7TMBkCpKZxP1NzCN5M1e59zZjYBBKYZwv5giLGeqcYnTrWAAF65rK83aT9iwz9c6RspNQx4syBzkbYaHekH",
  "key8": "L6HdaBEk8d7RSDvyMAfSa6jLfYG4hfUrVYfm7vCMqHXYV4stBdYoYoca4dPNZjZRfoaVNDDwYdtQxWUnRyUy6NF",
  "key9": "4afX5bfAXQbSRgXE6w7VnBe6V8gt1p7TsDKVd7grcUjMenXT4DDhCpTV5U2MUhZFUd679R76Vp4MW8SXxaBTRAMK",
  "key10": "3nEXPLzyHuLtvAxmUYJ8HefRcMaqdgQKAGHshqPgB4j39uXuUm83zKPnjtwdvqj1fCTaAUs5NfefzexVdjW7cjAq",
  "key11": "yhgSWZxPXTNT5M33NdPUADNXGprwvuiWDz3jrh4dGrbph1cQNfcXuYbYgLdEVeVav561Sk6e9qLqfQvGMTKCCC2",
  "key12": "3JbUczbm7up8xKrHgbJhYRGPau1ZfvpFcdnHVMkrML2Nvq4AtxUcXQjdPBp8rjkwJUTDH7h1u8BMLFcJFXYMpeTB",
  "key13": "4wXGKWtXPDvbjMmF6PqQBrGhceNjWCQpDhXhxYWm8X5XdXr4Y3FeHoaN5z7tJ2TCQuFqFnYZgN4ujSaY2vuGtDyM",
  "key14": "B14RXRtYKR8hytsMd4TvrrShFeD99GDnebn5e1cGVjaoF67vYHk6pjd3Qb8UPPrR7jXNiepuC8W2jXeYAtGWZfV",
  "key15": "2inXBtGy9hroXShDpBs4ZE4vgTcKVMHH8JeFcf91x6GnBDg34syJ7h5w9aaVK7t8oRff5PZEXzWzXZSCBjF8Vy6P",
  "key16": "5HTnL96Gz6i24hC2Y5PWevwfxvU4P1Zjtf97kE4WMSkPKQKnxQJ5pifrAZTrbkGBZCV5tpaft5xw261YNJXBjPt7",
  "key17": "2ECHZzTbKViigd3vkEAKfggmX2b7R9pHsu8V8TYJrY5NcBqpEqwkvD9kSJ9UtGVKCahYTgf4rPZf5fytDTbUE7yh",
  "key18": "zS6t2jurJn8sMY8E6Z41msHt1eru5wHt5aPiGXwGbvHV4pp97fEXEfZYfbGumrHQwbDAdh64JH2thEgPk8bkqZu",
  "key19": "2m1jBkiZ44mhkdLvi2oSseAFyNxfR5avKQ5uqh799hzEyo7gbrJ9WDF2cJTdsS71gw1ayVxRy1jXLqCcbuj48wUt",
  "key20": "2T6CPgqxjRjB5Wo89GewPFDQ2dyfKp6YybGbmGFH9JvPxwYRAZ2zKZM7RQEwk6nLLVAnveM35eGPVEkwSvyyiKfB",
  "key21": "3XiBAVXr7yEQSxEQCwF2s5C6d6tMt2hXZUPV8KNBLuNuRuLiAgWSfFLkRcnVz2FHVNjDdq1ns1af1W9V7GAbiRyT",
  "key22": "2PEWtr5NZRNQMpxjy7Zj4CVVmFXhFXwokmBeP3CCQ5E75bPisz8qcq567kjnTcHGGPiagBc3jVc2ngNrHk37C1Ry",
  "key23": "EbrcSXaYQB8jyq6YPPbJpM5j3cHhNZaaSDTn5VDKV8nSkvmKYfeoHL6F5LQPG7qqKkkdiVGVPdJwvgAzEW4JBab",
  "key24": "57QwWzuoqwfnmD6Ard4N7AT38hH4YRhxmeTotYFZpinAPKKczRzUCuUKZonpgoqMpXFTdZd9xCVbmwj26Zp5EJkX",
  "key25": "2WBDaAeAjX6sCJfrdGHdBxrV7ZrFNM1BWa611G9U9Z1Udmfh1bGyEGs3h1q5TZnb8qRyFJi8SSpXNqjyKXeD1yDn",
  "key26": "63KtySHQp3UhW4aUpEAaQZD1pnfz9z5CQMgHmq5gmN4gAb1QU3k7PTN1nw8JzqiWEiRpmEWcAhM5zEpqNTQcowao",
  "key27": "41nHgkRnnMfXWfWNbhSumGDaqPyQTLrjR8tMvfGuBwxa1fHmNE4yg5APvG1hd1Tdj4jn3n3RchFBXKgtCKk3v2Cr",
  "key28": "67q9VNcQmyvR9CETZAEgAQ8Zgo6zSqqXnB3JzeTt3FVQtgad3UMxubqyKCtHD1tSgmLZJiKgWQLmb5rXMypLxVTB",
  "key29": "2hpBKth5TipKudawoX4UYFGSHMapXe4iBxVsDEqrA5rXi4JyKZrckfuMXwq2kh3AoT647TMkqp3xHwavHGi4fXWm",
  "key30": "5VZnQT9jbuJ4txh6FwfcZiCQRNecpcheMRV1Kz7yvbPFAYzyEVuoe9zjvsnX5nEZPzpfR1ffg3VNgNP6QtfHsfur",
  "key31": "4UNVV2SJfPS9RnMEtmRtQ59nePyZXuRPvGSP84mV3Akx4PQiKp7y1VeztBBemLfmWw2j7tMaXHsGDHz2cuaaDHX6",
  "key32": "4b4aMPW1c16LUNqQjQUDYFetfoGAKRKzd4h5rmbcebSu7R8vgy6MUcYGghkfHDKxN4EoHUC88Dgz8njwWNaoMCd3",
  "key33": "3TJACzMSwnzcG8h9cwtam1ZAiHHqT6hM5QtTDpQiLgmThDUoEzptWYnxKppTSDuSPGrq45UQgLeSAPEGYHAhZEsT",
  "key34": "5nR1RcqFKw16THBCeVw5paGHfsfmA38gHqpjVwcJzYzWeM2JmrdzyZLNdgLNArRzo6o4C4suoR2Fbg8AkfZMF89E",
  "key35": "a8R5vtWCb4sBPxhD3j2Hv6Un6ENAyPy4wfuWSvi7DF8pj8fm2YBfAjNLhMKqPUnE559ZzDKhs1nxt8NtSE56ffi",
  "key36": "2QWpTEjFNzdCRVwJgPrt6dLZEFf1bMFcHZmU72rjFf9FKVnL4r4LowYan9sFWpjpYkLhNcq1iurwgTpjwVcs4XhB",
  "key37": "4xz8kAWowyJaQHwssZktKg9mMvpFt4YhDCWqovraw7QwbRZF7zkCv6UNU5XNF8YMut6CTS4c3J8Xm74M7r5Bohy7",
  "key38": "2iEmDkthTPFJoRL9LZTx2nV3q3BbMScWuCoSJFdGRRmLgQg5j8Y3FPBKjnu8f9MbkMGX1jeKXWukmqrFYd9LKx9E",
  "key39": "2gVqy3UaJ1gGHY1A2emWjVTGZheeY6wwDonJCefucb7QufTbFd32JvQMQirHBXQTSHqASCbCN2cSFh9emB6AFkuT",
  "key40": "5NrXNkbC56787AKYRbbaJ1ivC4G4KLpbuv7yfDjCs4JLCwZeuoqFZF8BeqBzWF3t3CqdWe3nEdH2xDnLTzZixMHz",
  "key41": "YGNspiVqCaUa4uozY2u7GzaZvcFNGLKJHHvRhgvUj4kh17Y3j9cqdBLJuwTkWL3yhTZtfTdhkBPp7mz4MCHpZEH",
  "key42": "5YzbteDcFAAcp54fmZfFWQpKn38SbHzWFS6nApa99YLokJ7xPgCMGSKTUjnJfxa2qQtNLic5EHvqXpuNTNgeCvPd",
  "key43": "PmHgkP4F8RQStbpfAxP7V3wCxQ4ULGaFCw1asHJpHrMh7ZsDKNvLJuUf8467xZgo5Zn5YAieSzWxuKoCEJfTuKN",
  "key44": "3f2wHerAkoVQmhTB8VkBNFZ92XKVofRFQ9yRNwPfCkj3ozdCt8SZMVpVYr4oR6TBhyjLnrq1fBALQpXEusJqVrU7"
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
