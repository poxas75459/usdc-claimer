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
    "4AoUFADQvSrt9dUSJ2RW55A18HCxgwxxLmwGCyS6dUbJgyqcqswac6eGirF72aRmxcw54k4GcqTF389dUJ1E6CLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26EgTnyhHi6TiPuULaZbpy4bpaVehccm5GKt2wxkU9ytdXGMTBUQDjBJFXTBNA6WTcvTEokgtHfozpKTz8h4scqu",
  "key1": "3cQ5UgqWzpSxVUXdUH2777ALEhFMFMVbqNQgMNNkfCyVeJtZLtyNFze6BkYk7YSwDBHc7s5eGkB69RX1B63aTmPA",
  "key2": "5yLMxEDZBjyuzw7CKW81TRNTZ7yZj6dRspoxYcpUbN1B58EqRUpZ6FhMRdfRrPSBMoYyeL1XLAQDFpHkx5P1pBnM",
  "key3": "4cjCTV7Yht2WKoSEsy4YmwqAqewYWsQpi5RoqHn2HBWp6FPV6G8hp1oXSfcZQrW6cu1pwvemjTA1eTEZ5EwjnEZx",
  "key4": "c77rBS76F4vnF9SsGbxcvtCh2KSHBdnYu1Fjukbd9Lgd7ozpVr4oCXXMXxo9b1Li1fRJPmJem7m4RUo9pJfU3By",
  "key5": "4txoz3M9QLKmkiygTKNMexxRUtg6pE89z6dV1nceMyiaECYTxhtaJt773j1orVG6r8A3JRH3fW5LyCJV3fyTZ93i",
  "key6": "4N4FmqFWmb4wYJFNb8iNzbzvdFJjwoLwdCX7KV85LQxFowUBiC3HwVKNoUzn4dSrznVqUFN4GfWaMeZ6CYQPWaho",
  "key7": "4CgZMiUHnB4y2QzF4jwZVCUYeYQFQbCw2MCkBmxdgR9u84oUMUzfWBDSFSP2taPKarJpWsXoButGtjbhZ9kE5yAV",
  "key8": "4V3cYEon9FPnLsdkcXws4R8EaJqfTrDoEBSLvgDGPqqhNcekrEgSJF3YJnTzWJpzGKMyNyKtw4CwMoKZxP71CwGV",
  "key9": "53m4nvcybqjvGcATXeijpQpHTTukzR3w5sUt2yXUidoPtvR9PeGZ3Q7iNw6v4jKqhNpLsPJdBPM7SAaH8oAuHchR",
  "key10": "4i5TdUmeRhKfqd9raPzwFgPpSXgmegfmsQ7M2sKa6TwLLyQTQNE1q2PvfahDQBsgjwbUGgfvqGx7gg4FYkpMqyha",
  "key11": "31iMqy114vFcwrJjXza6neKjHmQKkHjaM75nmW1b5Hvrtn9kEpg6vaC2ksc7ovkQh8ja2xAH3jNPRwSR8LhvxqQW",
  "key12": "3cPREbjZXz5gmyQKZSp2pTe3QrPcnUS3x2ZaG3kedKQHnCnguDS5WBkDDwfxtKyRc34QYasVZZjDSzpgAmqyCbPZ",
  "key13": "3XCYcjy7x3Lqqr4kBiqfu1528Fn2Pob4PrZ9o65qtydHTpb88wvbQcR1sMDv59by4FMXUC3dPnbnxxT5yvxyEQcv",
  "key14": "3dKsdRL4WzAs4HDpJkq2BWJJkHgUg7RfjbM4vynNEKNhTWM5Rm7N68yvZRseQutAPwbS1GgwopT8tY1G8Pr5ppbW",
  "key15": "4Uy7zMTA3dHFCd7BLZ4LDHMBzHnqDSzWzxJTq8emvR2PfbNCFHwR3xTB1xvbTjUXMhsE8CKAEyPmL81uu63qRuKX",
  "key16": "3Cf9RCjbPuWaKWy4VyVWJmkABPCj8Ng15uRjKTMhchTkwK5sovnMwm96X2dnpwLnWBgktZa42pgeyWjPuEag147v",
  "key17": "5zicDGaM5RiJbNNvPK9hztVfTZt8zWhaRTpu5BxRaJvYakmQEUmqbsSKe4TtyDJyPtS6gjhgFLNNE8v56QBkV6Qs",
  "key18": "57u1HHFLKv5EqoD6zdZw2WGyjTbFLNhRkoVhT3RuV4uLxQcXCnt9MWDtpseV38zM9DCvEu9Y4JRF1Kun2LXWRCKC",
  "key19": "4v6zWhKuetBogmnd73tgS4rEKGgnbrLQzvevC5ofF5byT2GRqg1jYJJVKj8spR5TWdUZ6FGupP9gdBAcRFYhysyj",
  "key20": "5vAsnZv7rBbzLmyeMaQiWHABWe6hs7RGE1vSnizPe6e3SA9qVsFfre5p7KpRWMiRihPFWKRS4EfXfoX6X4y5iFVE",
  "key21": "NwpKACvQHHF39zu2PtEPHmpDupyDEfC7NU2DSViLEF6uPEzCYQcfxkpWzuxy5KsSXiRNomJfvmFVyAN1xJp4uYJ",
  "key22": "3qw4wXC1UggpyRnrYCkFEzi62gbai6rrU1vXFS73y4UxyTMw4fuKAimC8tpkQvyxjiJEug3NmS9ecRK2miKxcts6",
  "key23": "PwSWvDLrW5MFes1PzPDNhuRM1LjRrkm1VnjVBNHu3RvvR69cYeMVmoQ3v8GJgVyY6swfmtaGy1PM26nFXTW4jhW",
  "key24": "2CFsHVMLQ14bKXcKjU8YQtXvdSRJZDSh5g1dj9i8gCwuhHBUSujU3FvgCaJkvmp7WSW1d2qC8oQ4HNscohUhMkTb",
  "key25": "RyNzXnJzRZft6Kr7hHsCgbbVsdHWaqASWsWxbsVb9TrzJpPkkUTAjEzXgCqjAY4V6s4anDgndCTVh3C372GQWjV",
  "key26": "4R8vGiw6WUQif9buFhLicmuzwSzqmsQAMLLA3nSKkknNsSTSUrwRtXpE6QFjVyuFbV2GtVBQ5pJNa2ykuzijLLE4",
  "key27": "qzrzHbvE1h2ivqHh1BWzq4p6B5idSXMgttz2Y6ukHTqqA2GtgPFY7FcKc1Xe7VNadwSafK6u7VGkMzGbLQpSq4k",
  "key28": "2qpiggyjZaEFzt3v5Kct6NinyASPHCGdE3ELxXC4SWofgZHj7jycNMr6BbWhRsd4DDs3fGc4bzVKi5mR7FEX3tx1",
  "key29": "4bvhhJP3yb9JxRtUjyKPmfQ5CKD1Qb8LL4SfqxfhfHAxDWnvby53wAwjtXJ8JLd1kJJ1YSWgs3vD3c7aRDJhvK72",
  "key30": "4Mutf9eKGmRDfCfMCg81x73hN187fxtiRLrbW6oWxcfyFDFWfdZ2LwgB3fvcJmBZeaWgFJW6qWbEV1hfjAvQxPNB",
  "key31": "2he1aH2oNAYdMXZ5QYbrhwuLs2qvP1ZWtVafX7DCmMoTiYLC2rksMPSrYNfrcfNqqqe3Ntu3u5xSBsfZ9oiMsrXy",
  "key32": "4yYhuEqfvrCJF8gnqBMdVeQRM7hMK8eeGPxQaHxAb7eKCGFFHWEGN7k7WQ3AGCSteCaq6YQ11wpHhZWxLGy6HAUd",
  "key33": "3b6gGCbVvy1Xx5aCp5SYNwAuN11RG3kmMF5dN6QHHV2HXTCUemnDiXXhwQJtpC2F3AhvQm3r7s3EiwTg3noU6rXC",
  "key34": "49XrdgC1BZCkM94rHDdTBPu5dViaYXmaXeg6BzHXugxcaTUZQScBhnKpCJKbt3LegMH1L4qmEMq893Sqs19Ba7kn",
  "key35": "LM4MpfzoRwUPLz8ygrDWNNH3wwjzx6J6yQrHCewaWSHgsfQZy27DyowaGBx6yNykXXAx7F67pJah1JvpRk5Gmz6",
  "key36": "p5Zfgq1z2QhSrSAsz7bjq3qiVnz6yhyQq8UwXq1vVFBJz53g3sGWYGbGdPwcnK563ddG3hh6cv1yY6t1Cz4rEG9",
  "key37": "2AwVayuEE7shaYwDzThfQmn9v6Z5F3woUrUNzyYAxc1FpqVSaCX5h6m48ckSnyfBcjWaQehYu1PDF8jShQcFV9DP"
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
