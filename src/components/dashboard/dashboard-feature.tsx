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
    "5TWPbikgzet5oFX7FBGZC8heLq88DaJztLdsy8sLEYwavP6gYqLm4brtcwfojg6L7v7DEPq7n4ZTCMPF3dz7Zvtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vW8hbJ8kbXo9JbAEd71Hsmc5CTCkwV86xb1G8p1TZhsAHVndk3XVb2EaaQYFNXiAuVQxqLMfL1EWqQ9FVDAKnpW",
  "key1": "eN3sHtzJFfmvhW3NkvBUrUnvUETSRFEugXMJrvxFanW85ZWtBxmGwGTxkSyaxVi3VEE2UbFqpgLHXP6YKr9VYPB",
  "key2": "2QP34kBg8atw9L6XHgdpULp4hSoXymUtTdR9zCPWvWeqPukDyA6FJXKV2cBtNXgnA9cjr4FwMsnomzb55Hv7a7r2",
  "key3": "4MamR6tHHhn7WewiFqbFLawRdG1EqVu61KoF8wo21aWhLW22zTHqF4wyjEsLcaQxfwe5ptFW5u7B1UkUjSBiQi4b",
  "key4": "Q33hbt4z8xbog7v1bwTV1g6DQMJ6YMLdrqMPZoLxzBG27h83soJKDyEsDGJNrzcfGyAPtcMP6cCuA3b3M1csRSy",
  "key5": "5zRWiEEmuS4nctYAUJDAYJdEyXruMVU7YJxz14YptkTdRw1MXzSEajNyNvaUSv7GSbV7kaRpU6ss838iw2Xgcjwc",
  "key6": "5mSCddeUiNUHe8drrqS9jog9Cr29jjvRJGw3qqDinXPE2dp6jaboMaobzXCeTMGKwKxWZJarAhNdBNExtpsX6rwH",
  "key7": "3HjLrNsbLscHD5pHunWMCaBZdiiu5DMRgcyHWTpE6fNJC3YMJ2oop5arHND1FwVKjZf3DMrQpNAdZ8oE1pJ7QQaL",
  "key8": "3smJtjgBWyjhiVeZsREUAP722dPFGu2CeWrY4KgmKvz7AAkH8bAT7o2PhQ6d2EcyGhxNMsKAk2thU4kXzxv1q3dg",
  "key9": "5ZvY1LgpWYbPGcf5CRrrFreC9yfEa5sBhgx6Ao69USArBEfnzjmyczRZQ1fa4iPfLJeZZn51gK7TcBHXkxoowS6k",
  "key10": "2FyMgxkGUBqKKtC2oveRL9Uw2uwvLdL8pudpEcKZTvTt78YoQ2fdJwkXK8ooJisiH5UWkH8GUTQYwoMJkHKL6Zjq",
  "key11": "iD1GKDwrhJGufaLJ7u7sbxvXDbeuV9VMB213o9TNM8mg4y6c8fjptBy2RQAm4b9VL5oeMHmevGmcKHHBa36UiFN",
  "key12": "5meQXGWo6xWk9L6CPeXLjcUqYVmLFFTKyFEochYFzgmtVw5kdg72wAn8ZtbnEtzDGHBh49YQ36jY6mpLXh2ue76g",
  "key13": "kgFitpFxMyRFXuzk63yZgrhPdWM9cC8cVgnVrqcT8BBKd5Y9qSXKX156DP2YYxkMav8iKytXrZ7PCcMs3dqydxu",
  "key14": "2cjgGzbjJ8BdzdMirsNCxyjwGepCNEm9DHrPEA1UnuAPr5GKQUhYFm97MuT2xpGPiM7WAbwhmxDQ4qugUKUXn6kj",
  "key15": "61Ggmy8usbcFe6nNBwhpsCPkQr26a9X5kLTEaq1qo49Mtx5N6Hiz1Y87zfaKU7gsBA78qGozsf3D9783MBQVD1bv",
  "key16": "5mJigX2FzV5bRkpYzXo7Y5okCHLQeyvtoteNZzUffTwq316PrkjqygqACi7vWZ2KH47CXXRgmkEJ5pMfta7xZBEo",
  "key17": "4xaTPNNvVPWudw59KBGHgYktjJ3DtvBoYAJchpajb6FurqsC83FNRzdN2PQbbRg6oVQqBpYAJ59VAQn8gojKiG5N",
  "key18": "2d2cfw6PJziHuKuBgVVhjyvjJBzRkzV88xry9gf1gqUTgQZHQkKL7bLz7sWf1PWRDWMDRLRCDnLoNdBB5CnDiaSH",
  "key19": "3ryiN5A7EJJiUQHwevKAq3exdafzsnMHVYH2xEUXGrVoV2BeyD6aQFzzBuuSShdPhd5UwkN6GeLBTCwF1VThhwwe",
  "key20": "2zjZMJvvBJt5ZxALpXt6Sx1xsrzi94uFYcb5npQNmrtTruk5pKZxZReAsm2vWiKUu1cjKMGWfiq1h9WzdmUtc5Q3",
  "key21": "2Hjr2mNXK2mkpgZPvENVpvYtknae3vfedurx7CFUmW35ERQ3X2FFJuaHTqQbnTAVKkTsYwGFNMD8ysy5HshhGjnq",
  "key22": "z5eBzjFDwTXoa5gfHDnxxdETqtMr2ASJ2Ue3g7BrPwhxPpY7WDW1xKroypJYiCyEt1ePZHTY6wMdFzUVqJ97j2t",
  "key23": "2wQdTvyn7RKUMb9Ctjj7g9LRo9Vxay1XSr2q2SvcBK6KdpKdfavqARV5cs9Xw7rjpapVgssaLDuWJwD3AtyMGH4a",
  "key24": "5XDRJJjHhuqcHPaSksw1ETxpRNXLh4GUXhuvLa8sPMiWjTtm8xS9RRMX6nBKwDVufZzXY94PZGtHWPoEuL3TAAYy",
  "key25": "5fKAyJaQDxfqZaMseFZmU298Rg3mNKhGdDz2URZpCgsjfipvvQMr5DQHeToQM9k5H4iPkpAfnKr2R79WxWw6BEUA",
  "key26": "4PjXsK8jLCBiXtYCuY4AnNCCLjwZab72Yj2m7NX5XQSR57eM24tFu5YSyEbkRZyumKJ8aTvVNHwbQgZwsNC8dcDm",
  "key27": "2ntQTcYT8ZNM9Qt8PFEvdVyUkUTG86adjAJs9hvmYLY4p2RqvVCk8yhMwKguMxchXBT5WbrtWvWPVyDXky5doZHY"
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
