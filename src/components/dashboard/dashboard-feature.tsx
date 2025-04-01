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
    "3cbFaNmzGdRQhuG4Ja6wsVdRKostrXW9y8fNLCxRWN7SBE6bpMe5eSnjp5pvKxitNpzXZn1yZEH3J1EGaDgfkSc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X5NHk8t2EUnpNCjQaWDFmZo7jf31jXea5ZQETHbnJWJVz5J5SQEXZWffcSKjFpttaYoVBNYeVg681QAB4jf6z1V",
  "key1": "4Ki3hnJrYSfe26S6eukkyYbBhwppMb8HJY5Hkz3Eng3XMvFWw9Qwtk9AwmR6GWGt98sEAVe1Xf2KR9AdCYkMxWSy",
  "key2": "2kwrcA6PeNyNZ7i8wgeyEbKKHwUfreFEuhwCyQtfejRb1pZZ7CkBT3cxM1YG8RuR5CAm4jnSR4z5ZbfKiKigNkjK",
  "key3": "4Wqq1VRrgL1NkG4sEnXo4nYTgh3xC4ymyvoXq3nN1wfH2ZZZEWx3ydosfHRSeSCpcXqJ6ov55WqCVHrLH6mcho1u",
  "key4": "539LYCKMnYK9AuhoG4kEpGASG1o1kdZnJiUuP8z2PgTBzCzwGos5kgh4dFoUnfGbXoGNgQrSR8ZynDjRrtW9pXey",
  "key5": "3BzWZT8FHAEWjWhmw2XtgxejTxdR7UKya9qbf1jvJeTRE2MCfqYNVws1BoPLMvzoXDCbFpDrNhzgapyg9EhGRyCT",
  "key6": "zMtaPpW4cpkoQvFay9Szow4n1SMowtbtcFVo4bjarccG7Ar28S2FBVatvE7KKqEfiViurJLWYUz8Rg4uk5G2mZh",
  "key7": "3CL36kD98prNb3BGgRU5j32bAxg1iZzCAZR15rW9oE9djghPoFfW9h3nFpyuegTwHWL4KCev9JxWZCu3dC5U73GV",
  "key8": "5KCHhDLDmiXzg3Wjf6rmryiqn2Qv7BW1ksswwef5pzuMtHcS3mR8uAcSk7mkK5qCWnNeFs4J4Nsav5vooD8FR81M",
  "key9": "3bKKqSdpVTYRFac84B7ancQL7XJeiQ1g9e9GxygBQeDKkaoj5C9ZFiYpBaggHhj8yB5HTQSjwxa13Jx4k9vEjvtu",
  "key10": "2qbA51zqs6uHyPGkz1WNiqaqm6awLNjSAW9VVFSpqFig1zCgWq9vkySQ7pD1AmJYrrhBzjm8qEJcfkMMRgn1Ysr4",
  "key11": "4uhzivmFWXdb6Ph95pHzDxMr4gcYtKrgJWKjz6mJMqhxMyyp7bz4Dc8r2nB6vsa51hT9xQM2ZHZJvHuxcQQqeKFN",
  "key12": "2QsDPNoxPrSzFqQb9cexhHHtf8jGE5mDR5tiLEJ1taJgd3RWGjzuijKaUFtKL2JAHzhb6EgtbFDENpTkVoirhMs",
  "key13": "5WwoCRTqVogpG8Fatf2tg7TNAbWGbj5ZsDN225S7AKK56xdkFDM2yVXewzVoCpiBcurnZmGJ7R8YBMpF9rdkKftB",
  "key14": "4BgPQ3vrY7GyzA1WsUUZz7SDQfkY1HwSJ2gwDtsXHTyHymbzWikHun1g3MVTLWL7tTDdWBthBwz4eKwp9PEzdhcx",
  "key15": "29v5kwW1VDAPHpU8pvSueWjBF9M9Mze5zCdUsiKHjYznkerbF4pUdEZrioysiyojbmWfjtvzCeFdDSrLLacAFUA3",
  "key16": "2wdpNiLKFFb9ZLkREKjeUQ11zZbbYUPX3t2EmAgP5BnRBAkrH6L5DwEkVrPLhDwrzbZwcbT7kdAuwWp21wq6P47n",
  "key17": "4MiBPiMN7m6Cj9r29E1tGfsMyG7Bdien9YxQX5u4aQFLeySd8f9vWzhMRTkGC9ZsbTQioFpT6YeqiAfPHX2RnYpw",
  "key18": "Atn7tTaZN6Q9sdzbGo8uy7hCH3uWn4fiN3hoLf5jB1uZDzt6WmRiPhJJ9BC3r6yxpaJayCzZhdwUXhE3XFjaPDm",
  "key19": "4CGRP2tqNBNM6xJWc2tDfkQHvEBALAYRCh2FfjTww1cMgjFPCuMdxZjswhCT7pPerL525RoUi2iRhFqY9xYQYvZ6",
  "key20": "4t4sRxhdqfxeUkBgYtMAF3piEXwJEWGqwXHqiyvEBJTN1TqA3JV7tfca553Siv839aENqiZKFS3cws2zv48JBoXE",
  "key21": "2otKV7ACecXuUWGhPmhXb2HUn1sceHvhxMxkrQMXDqLGuUkDi94AFgk3wZZhYLbRFMEy6jijDLhSxQcEeyu89CJq",
  "key22": "2TPN3vjXN26R6PjwxEpxYnRF9Ngrfnqd2LFTjFm6Du8XBFHx9bVgu2mn4BVwP3o35wGqq6hU3jMXNeY3dN6PCtQy",
  "key23": "31Zf9Yq6Mi2vi7HTWtJYoB9NwbHwQoSdfwiso9WDHq9nV3Aua3ekUr3AwsBYLyDBVvX6a3SQhw2GVJHJfbyvFgCJ",
  "key24": "2t1QSVRtzCRpEUHZsUbzJDBXWrSX2a5mLphxNDrztFRors2URqJy1YBncaqMbbgrWRh7UMSxag8oyewecZUkUshz",
  "key25": "XdsbV7YMeRkGfTqmkFBtRZbFSjJxZCrapJj33JJr1czfPZPqDQbtpNzszCqKgrHUfpzB9sCpSoyFY75yheKjpH3",
  "key26": "5gwUrvDwQ4StNsEkjiYjjgA268WWd54ovMypDs5JVuwh9zoWKXPc4jjarG2hpofepGyuySjmZ2Wdp6ab4gP4vwWY",
  "key27": "4e7B2GdK6uX8YmKdkzxw9JYPwAcaQv3yKG4pwifZFuVtT31fYsE9pZQrVC99UXEisaUkWAJDZpYDAdxNGEAz67m5",
  "key28": "3qkzRh749kiZDu9gnBd52zRcybHJYsYPVV1WnwVaQLbVeJVB2j94g1Ju9trigrHwyezoos13JHjuPqkgVT65bdTh",
  "key29": "1AxsUMvpDeKbBZxfPeEVGf9UJ4q54GjKF7sArquHzVL229bEh7i5q3rXmZQjCsapYsrT49oTMRQmpcjKdi1CEQZ",
  "key30": "45JhDA357titvHxo8QYB9HN89guRW8376p1gyKgXghHy538oKcKSEhp7cLoSNtnyewRdwTYs1xZSfRcKVYbHjbS1",
  "key31": "5BAATiw5gWPGWcGM68dMvWTEbbugWcpfecSsajfeRq6WHCoef97fWPmqihPhR795CyGg9GpSt58aXDHN5C1Xk8Ym",
  "key32": "2b7HsHufP75ug7MMZ7FpWPYthPSmvWaoJxPvvYJUs1A26VhbiNVxf39MHcC3qHM5etNfkUzpBNd1quo1R3e8Xunm",
  "key33": "tB1m9gRNVxp393Kkso1X5CP2QN6wZFEebbZBuoALoepneXwDcUTgEDfsovCFPb2XzNvFBXvzbNy6d8enJypTAFU",
  "key34": "57ZiRaTGvNMJeot3EshtP8uEybEd4YQRXFjJcVJWDvLnFCsgXhJ9v62HhgDCEh2cuD9U4RYFuGh37cEiDa5fa7Qe",
  "key35": "3i2CZAWuECbuHobcXQB4roeYveqe9jQiVmTrcctF4XUNoKrNiUPGr3cR2azwk1WAXwtGichtLghdRTpyPkxejr6U",
  "key36": "3rSGZAVfFjBUqXYrQ5aYpjKPG3Z13H6BeSpv7dRsis1twDGxYsDAmmpvusrAYYPikzj6fo7HmxSW3NhuW8YdXyTP",
  "key37": "3XRjaUUqynJzUFxrMQZXHnZFeevMtv7HCWh7HPAXvxs2HKsMdjSedCDZYicRbTCmnNgeE9MNLp9ghvRGh2zd64sw",
  "key38": "33erVZTp1UrbqXs5h24bkpJwMWGkFzrHM66Nrg8arJFj3FsV3m5MQcPkNznJZqjjWn9z87MSc6o5w7RpuwDKE1N5",
  "key39": "28JrdpyrawwGpwwvVAg4cZT2Zac4imfsKYpegkcLXoi3b4eW2iTWi2PCwJNm7tcBjQCEREtrwSrS5TVavmTMP8v5",
  "key40": "4P7vVu2UtNV7aPV4k2CUS3xPomw5kEjZRzmHNvy3TDKttDkiDAxNPj7gvzp7SQ1cDJvm9BixCGdxSZaS6HzaE6n3",
  "key41": "E7cC2wGKBEsbkDWvFz8CEtgXk4ciSCebSJfScfJZjz32Wv9wXAwcKoKGtGP7SGcKJ71bNqk6g7Z32tBqj61beBu",
  "key42": "rC8yKfU1pBv8kURWAWukQeJ3B3nvT5LcgYrg7oztyB1JwpM5Yutc7HCePwS3ZM4JMmngMxaBSiBPC7FeMKk6mEi",
  "key43": "4PYKNBbEKNFCo5mpHTynwoEgY5mMR4dhAvAKJs8Hi4iAFEiWhJDjGRp56WBVqSKxe8zUsCvrfQwLTJNMY3co85d5",
  "key44": "5gMpRzWN7NmPanuXVjikN2zVi3oHTCYzFf5zvJSBzhtrfuSBgeVa4uTWjKeEdwQya8fYeJXWT9SdvrGeBGMHsurt",
  "key45": "cyUXS6w3D4gmkQfdz59jevrUiPiQ3cjoBaTbXVHubUkgZGgRqZCzFZ6BPJk3osj4AEihMqn8KUS6dnxQjwHVChj",
  "key46": "2o8g3XRjNPQSgaBJteW56Qb1o4idi4FJT3EjWVcr1QH3W4r6at7YVy74834AoozEQ43j6cYoFEzDmbLyccLLpMib",
  "key47": "3KUvb5gP9Y6ihJfSDverndiYu26PPD2rcgBciKyMDjQ5sN1z2qvVUSapjVeqtniEKQtQNpcXbkUxnLkepsenFJGd"
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
