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
    "LjS4agdsvFMaxZPR7xCPuEkhHgyDKeH7CnjzSNazKfpMQf6JGzzDS4Deec9HX4xZqooUsU164EvHWJvE3NLEA7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjbx7iMENgjCMEbSDx7vFzkeHwzNowprirLk2qTCL4z7YVL1hUH6WPc4gcsDov9uU3xgjw9PZ61UQqQQZTQixJn",
  "key1": "4XTF5aeuZMvML6QyRnjHbLAcX1cm4ZB6Ff24pJ9RUCCi2PizP1LQRJwkozfVM9HaK9X617EHdSqmyNeekQ9utA41",
  "key2": "24eQXHu2a4DL7sCswaBEn8EeYPNsCiov3wcxDhLvZvwpd4X8kyQ3i1LmkdKsRp9xG1NmyxgosaH1cqge9t6x2yNE",
  "key3": "yvkSKN3ZyJGhTNhcTn2yTfV8ygDTmRxn2zYCZ6EatnfBRtA2BBHSyWUztWqQc1XU6YsQFUCWZEMZCbTYZB8vZhJ",
  "key4": "5uHbnrcDQWAT5jFHUb81VRuRTpsJjC9MCSD7B89Efe2wghZwwj3v7kga3PMASwNxab6EfMrVtjYfUXd5vtgbhTPZ",
  "key5": "HwhHKS11yVrHVf9gPZVJB22BzmPiE8AjFjZDDP7yJhT4y1KefXfeUxmruuTQSKanWboypCqiJBC1VBdajqjg3EB",
  "key6": "4vKd4r4UeUBnS5oxKFPi6GzZVYBoDrMAXtckBnn8JsWQDiJ9PxaDK8YWe6U9FPHjv93f8t2KJhK6LNRRbABDFtEE",
  "key7": "3fvxDjB4tm9cFsVmfNPYAKDxgJmnpSj1bPqntekMhr16u4mMZHnqPJJ1rTLLjMWh4sAkwjqe9LHBMbqh2zCnh7dP",
  "key8": "2tekPYcv1MYXyiwftcbCWrPmxB4yVpckx2g2WLUoeYcxYE1XEqZnM7cwPWCjk8nuCnZKSYQuBUGmGmnAC4y5BB8G",
  "key9": "K921daBWf6xZhm8Xdgwb2wJ79Gm6DRW1R5abT86xyTk3dW9ryFbLd4oZgy4oqziWdrkxsCpDhe8PyHUoXXoVTQE",
  "key10": "3xJQLMMcc64FajiHiRdk4gbudbkRw9aFbGGUjpVqPGXFj2VxY2KtFEjGcYEddJB3JZWxdX59trWHWXdVECasWB4k",
  "key11": "3asiGekJRzxL2pkQGewRFWGJ4WhtxEzEuetS6rirHrZ3YDZqoAamWDje69grVqUcMvo63jPTYbhGDUGUVLzWV2eV",
  "key12": "5oL6krzCUKC16jpBWf1X5Lo5vnwFuoZKvqWg2oGdbtBbzCZb8rVG7Sw9EWUkK51gcabZ38M5JfwtzU3VKRmKvaeb",
  "key13": "2F4t6oaBmpY69L7PnyH9dDJrEMwLUFm6sSMdKPRCqjCzVF9chCQ4vKvnDB7MYZxwuv3mPwaimXUgRbGBjYMkuokW",
  "key14": "29jFsyK65RnK1CSpn2ZA7toe9aeT31RDiybnFwfffeZd4CvNtppCkkYLtvQrXNTvLFbR8hHFQ7REU4inTKZ13Li5",
  "key15": "4A82rdYFcNyyxYMZJKwVXGBZxpEbRNm8Ugs3QHfgaVoHSXpJE2e6LTgGkvcXNWdybjBa6ua7CgcbxtbKGEnh2N6N",
  "key16": "5UoZFZB6tyEu43w5akyCG8trHxhdLnJzarg89cVot4ncQA3fqZqWhgCcFZdQBDEyU6txzs96cbYgegtSnqaPHYMG",
  "key17": "2TWkmTdhBJKCaWj3rGAVh29cVCTWBZEy9MMZif1i5ChRU81dR8iboCmiXZJqa1QEfHADogejoqDRFkTkAr87WCVo",
  "key18": "34Q6CwSeXJNDKBgm3YXmCnKefqsjbNoB4ptBmovLFhSAyrPrUydjjoihspynerx85eSKB39ojXaq4QrSqnbpmxUR",
  "key19": "bK8vvDfVxFwmQ5pFLjKG3mjD5vNDF9X9y3Qx42Q9eoYEvrHHEUavSzNEBcCqWCXUctJJtXUe1sPHhqoHao4vq4o",
  "key20": "Ac9S8wb2fJenpQHVxgnYqCBYg6qHAPQQtzo2auB5vaJaeFsoLH64BpULWdqGC8fVLKoMnGzCvSFXPMgRVBX5hvf",
  "key21": "3NKrBgCBPsmrmeM78BRMHwPpcoQWnomBmyKdkgzF4fZd15uBL5HeSfn6yoJehJw2dqBkgnA8WEo1R7aA5goag1WT",
  "key22": "4pa7Tshx6EPCfd1kKMkDtQkHVpyBXng9bSL867Pn64ospVJsmgivEJC9YQBBCtcQCBg1WKtyKDn4z77D4zBpQucA",
  "key23": "62k1yC4PXG7Ybap4dLu3BSYJ4BscbBYD5xJ9CLv2hrGBM7zxFDHMxT19zF6Jch5cazuudGmA91ZYtzzaSL88mWDq",
  "key24": "4kSbuEX6pCYcGZBRhobBQfu3pZySNXoKY8GvPZXjSKSNyk18ctgbngyPAFYeY9Y8pFnpgxswngboxZrKNNa3UitW",
  "key25": "5NGu8MMK6QHCxG4WqCuE3WA1hFX7DpY1qDxmDxmrPTPB3PZXErBAZE7dKMewBc3YGXwhTkpCi1hpZviWkyW2H77w",
  "key26": "2pmfaJVmXUva2o1A75mpLN5fRoHDiAtXpzFEgbFHawAgkpxGje3jWaQc1XFWLKnbLvSZ5DmuFbxu1Qu2XWU9KwLZ",
  "key27": "3ykoxc1sKMr63DhXpD2RDzXD1e2nDiuaDiU5QRKptMoWpW6DLqFg3Um8a99frv37vSWdadkjj8VuqjpA776bCXRA",
  "key28": "5CkuDWsdzaCvAcXLnrzx9AZydUmL64ghHg7ByTXLRoDehJFRzEL65exw9t6ZSwiDEJXaqAWS3Mtofjq1FwoKUU47",
  "key29": "5R387Jfj9kN1ZWE8ZALbVWHAAEAFo6StNzdyV3tkKCig253xYoSNkD4Zeean7n1PFeoBDwtEV9BzKEsjQm7PrYGw",
  "key30": "4MemfMGMaYWX8De5oPu8FYDYrEZV4PpbGTx4rsQBSjbk72jttVeD3TBt212ewPx8XAJMbDjCjdPpmMmCJHedBP6N",
  "key31": "5dVZgVFeB8XkRXhs7kQW54mQyrkFeX2qJebWuiTMntESJGz1Mv3ULyqzKAjgoMi77Lh5tEEGW6S44vEBMYeNHNQZ",
  "key32": "4A9USbuWyLLtDimF3YiU7GCx2hAaEj8Gjs5GThCwN5Pgu7JHTonzCw1nX5PQpxPujBQctK1RbHF7LBym3jn79WqP",
  "key33": "4fHTjLJFsvVLh6xNYrwnSaBMH6Vp6jL9nLEBxBrHqKhqYuDRA8e5AHUjRLoumB1f1XnVYsUH6GMzPJRDyWnNj7Wy",
  "key34": "2uCtG2gPyWSmwK27eCTeN9ZostGLaGmNbXQnc7kqXLAozj8v5NwnaGSBwhsBF557PGJUW2T1uemYpRLDU56c4Juo",
  "key35": "3R57iKr6LoKLmRzsX6zsDvDGveLhCLMFdRy7EgqEJMzC4N9QXSewMJaZpyrBS5uRWZUeHYvZZXp7hXvHJ57bD44N",
  "key36": "NnEcfyRwo6qHpzqQBvSFvFVy62EJJL6U8cX7Pj3uC3kiz2iv5ecsazPFep1DAhEtSL2EjipQ659vrEqopUdhGUH",
  "key37": "4Dr8BjGPgiHVjwvxEQDSjQNYav7JRq6PUnKWFt3Uo4FeCuVkxW2QHaCo3M6Ww7EY5Tamykhe4ZfTnMkdkpp7vE66"
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
