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
    "4vfXzPjzpBJxk7abFiw7uE1qDV5wLsw3iNFmMqncU1uXxTjfGsZVmSoFmRhXXiVLbvrwGeR52tXTdsWm3ScWcHxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gy6QLcX4fTPdcRk4JjBN9jeqH96QSgK554M8WhZ78iW48jYdUXATktGrgfz2mJ9f7sgsiUNcRatWsLCEjX4Z8zn",
  "key1": "53PxhFDrS3gJ47WKahn4Cp7dKCFiCk3GShGKriLnbrWpz4MXuy2eX6i43pZBYqURtFg6NDoKV2KcvM4gEBNoD1JW",
  "key2": "56cvisqiiHb1Mf9s9y6XfZo5GrdWuYrttCTPuKoPtmoN3ngLQ6m7yLJYYSfkfJf52pquhY8uEGNoDGYQiQekAe4K",
  "key3": "57CKtbNM5hxWsWZhkEGM9Q3K7WHRiJcnLkJhb5yo8R7yxGwXtza2DomzaXwHj48mYzY5iDYMqn9bnJTN4iUzSVFv",
  "key4": "5cF1pwpn54UnuXzUGGZmM6pJwusUTVFAyFjQ2E4K4JBKuCgxQGhHgUp9aCVCv8DRdJkAcVKd7tKcjJasArsmTvyj",
  "key5": "2rDuDkivroQkgABNW9MsEvTh5YVvQguZPqSp5Msqodp7Y1qtRqRuoqwfH35gqBkeSwMouqxYd3iVXgLUXyia7P2C",
  "key6": "2QUnfB4ZUa1veezxfFXnUXcMhJ186UmhaJoMCTDrHkwHvqs5N84nd4hjS9zfT8hxsDJnhSVzd8249DJBSiDbySRw",
  "key7": "55tiCop7Zig2xtoK5FWWP9P4oPDuBSsrbbusaBe1WHNGAJcixygVJngCmih15RZTJEQsfAzMUvupXoLmHv5i27LW",
  "key8": "4S3w4PU6AmRLZMvwhZL7y8AuVReMSHKk2Rx2hP8iTU5yTi1jo38fBupZQX9KxuPhFuqeCwrGKfLFmJfVFoeG8P3q",
  "key9": "5xvUK7ETiM2qXGjYevSbiyYXMXVJVjtVWea6XmAGBiwFspymQhSXw4x2xeVpfkWcW7bY4tMqpwPnRLLe6F3aGCE2",
  "key10": "3DXVUmR5ktkPNaLehPcQrmJH7dwjfkBk2gTDiHx3MgenzVG7zELnWuoyGbtCi5nkyAyJnZfLTKtYrfFx7VC29Bnt",
  "key11": "2fNKBTtCp6ckxi7tj9LUZUjxuiYvRjp8r3XmmQ4zbaDgU6nwy3xe1feBsEV4KEKFb1VVbHTeFNwFNdwkWJZqfN7B",
  "key12": "5Tgt9xnX16s3Kqsxev8MbT1a4QaX1khAGb2jPf82fmBncggz4uGEVNbPCueAnsBHHbQAxBbMsyntvoHh7JQy5ngb",
  "key13": "2zi2NnujU1PhvNBTjm7W7LWLkkbfbAkjjhnijgM6LyGPtHhutwBtNJoZoEENFLEvhswAqaKTD1RSpctYgVjQzKLz",
  "key14": "3yWwBnr6mDZTgRV8UBXRTjX2Mzu3a4MSHtHEDN3hcVKMpECMyzrXdg3Gc5UpwDEU4RnRrGCy1diJCdCX5JfXV3VR",
  "key15": "5BUvicUMsTzynm6qyCyeDBdrWm51YWgw1ivXrmK9vpS3VC1Nr65mKsazKyDryuXd5CAW18QYaqwhigvunL5TV88t",
  "key16": "3enGHHLnsMKF2ZXXRE3ptKsrJ9yp7p15EYoS6Pw8nZoQZAj2B4j7iHBXtgvqy7Cx4BjaWAHPMobL9uHYAnf4p4N7",
  "key17": "626G9W1jqDkcB3TytXsytR7yaZeu6BD3n9tT6KDgh1Ugempi1j7AYujZRTxzcnoM2Fi7EFQM34EbCkDUwbSgZfue",
  "key18": "64tsMq4xVJzB5xZDPR5ZxZtGdptqX66A2ufkiHFczvFKhCC3RoXqMWctmir5yp7ERMrFohJyJMMhV2MfjKC2AMyG",
  "key19": "4zvYSpssBYnyBTzSWix2kDQaU4MREtQghLwQtFDEQ73944QYGVuFnZo2oHvT1zZKUkcKoemXLdEw9kEAeH5KCeL4",
  "key20": "2KUNtnaUmNHo6YB894vqybejGcew6skpacHMKz5DdfXgN7bTqjrL5tFqfrJ8tcL5sfjbDnZYMKBhUMiF1cZ6snKC",
  "key21": "631EQRMffvdyfBb7Z99UMcezGqZLmdh9xpEZZB4L6qpaaCeFkeDuJWWbwB2G4ZSf7q6MGgGRvRH86jxx2EeQbtLy",
  "key22": "2TCXcDkPTBxKu1zvC2Dg6yYxvRJ69w2FEPxPGK9yxLm9iEczoAVieQB6DhKjdWvEQbUs4hGACUCZW7xoVjzw9bmd",
  "key23": "2CYnMe8iUPTmCcn7KdAhVhMkChgMxd61WeCTiTaviXc35HUwntrUfBc34NV2cpvEyjZZFNnA6DTt4DmtTbRLoFWL",
  "key24": "2D7AMkzEwKKj9UxaufFb4c7WXXDmkqVoRGni5TSbAF9RCkYvTbEBPWVhGn5A3BcJovMLaT8AsYnjhUHpsoayoww3",
  "key25": "8jA5ERbg8WiQgsntvM4uR58i189o4Det4M8oqkjLNV8k2nEw5ZyCmnMXPzMGZbPkKYWpWZPhSpC1XgmzViqM9TX",
  "key26": "YDBsmB7JKwJUuHo2YPs7rvBSdY7MGJ8VPtKrrQsN4mcsUH1Vp42AumLYCmSnZu4XE5BYw7Znu2zYZxGRdC97rSH",
  "key27": "4tEowrmuES34AUxgV1j9zTvxbzRWi7WZeJEeWwMtZzJ1JVcC8ozwfcMMJnB6QENZwmKHTLXDB826Gbc44J7Zrztv",
  "key28": "3SVJo9GE5Pug6S6bWSAcCu2Nu9tszcfYjYcWP1KUMP43BktgwjGYs2FXqoivhryV1FM4ub1xpNN4njd5DQiJkbsL",
  "key29": "42s7RC1NsraEeDQpmuP7VH311EHypz5ZvQWu2mbEW7DUTrSqpeD7CxtoivCEbKkAkveakag83XXaYdYokKZLuyRT",
  "key30": "BLUNhzJCkzgGQ1KAz4hSNyeKUbteNsCApbYjnAzfofYMW6J3Qmg5qFpmEqt6QsrvEg1ehrzRfNNyEEFKUdX2XF3",
  "key31": "4yDbdsAAnpPGesgpoXqch6NUAiee9vvyxeBstDNJWZti2o9gSQNR8dxo6N6JooLiQDP1j4Z8ntNmNQp83MqQEFaR",
  "key32": "2h7AtqowfTTbMccVaHNUxsxRmh5E5EWyESJy7M4dDV5kcBRndeDG3smzLqWvXB52LmcgC4gVuaXGHfqV97YhiboN",
  "key33": "4r3ELS4Spz1BRDpScmAzLa6pthyhKjYwe9mHj87WLDfRkpFfXxs1eWeQWtJvE9PuFsH3LqbZx6ucYCmDHor8Csm8",
  "key34": "5cz4PJPmqhvT7V3VuYHhqgEAptX5bece3GgPo868QPcBrryM77WwAZp4Y57o5itoG2jGXv4hWXAZe4zzQ1yamrEn",
  "key35": "3TWATc1RCDgHkfGgBVVUNFouuLdvggohDsFymDji1ivo346Tc3dUKuWG4CUCHhzobducpY9DLmmvsubjY51ji7aw",
  "key36": "mMrdNfNa7LBpGAjTaRjxua1wnVmhKQFR5Ac8sxSptdsHU824rK94nbcQAxMeNaXsyxkVbdsrqTE5jJeBG1C66Zm",
  "key37": "35jBr4oybAAGaCMR8hqk3sizSokNU8MpQqF97UjEzPww62xfKUDrUFcGwwLeK3xtee7eGBchoo2nJ2hSPDEYqgeE"
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
