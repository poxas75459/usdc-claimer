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
    "5bhmDpV4k4T5zugpiXv7wcenj8BPLPfZw5oLXDJRUSPi3JPsRfSV38skWaPC9qbu9T3NJkVftHuHkJvPscQpCpY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42fmokwoYi4Uy8aEysfyyNWxtJzf7LHp6F7bum8EBas6uzUbCPjkuAUCHkbJEjZ46zwR8zqN76KqZ8xwC8WDPHF8",
  "key1": "45X6Fp9S652X7ZEyGEX1rwJDrFQyivshL35Qh5bSuzjyJuacY2eHvyWwtpKJRh1eGNQ5xwnRnQr7H6CmFcwAC9Ug",
  "key2": "dCZY1uT15A1wAPF2s7KYHbyGpaseoBpmVnvQXSZ9hTS2dwJpA67vYoiZ3QgJ1GSRhbBkAfJguyYZRXkNaCW9zda",
  "key3": "5w1UfDyH2BwVbgYPERbp1F6k4Y7jnScGwaLnsTc9niHc5UEygS4dmJESG3d5rBWp9BPAk1PLVg62URx2gsjQbnJS",
  "key4": "47QeaNbNMEztJVMe4ju5fYCAepWg34wDSzyqf4qTKLTpuHWzKVGiLtamyfna3tNVcwd5DZiUu6rEGAuxiH1RvQjy",
  "key5": "3HNqTZLm3nY4TnQ13teAYYrqazgjCBfpjJk46YkyYXNsdgVJPWcFnrbro18fRZpcLf88FFtNKmv2gdLGi2CDKEEo",
  "key6": "4Lax4eHUwXqCLDiZhouTeb71WiyxoLJCEZjeLwCxdqHL9gKPyTT4NrugEoYhpVUg4qVL6eLBZXU6s9kdegAyuGZP",
  "key7": "3HrozQTec3mAqwpzpuZMDXgNkSD7oStf8UGZucG6udSgTsRKGmL79Shkd3XUuLKnVP3XauE2fp9gwdYSyxmGktVA",
  "key8": "37LDb4pHRnwof1jAftQBvn4ymaJiQdDymUM9gsgNQWLo3KzcvmHmLsrtLweWZTmZNgMJwv3D9T3LXXQ5wktcAEKs",
  "key9": "53xubxpmKesCAhgzFXaTCzM8y2m4gT2dAEHusxuzqL8bpEAftoz4sz5WxgmHa2FYzizkRNibdNhT3vzWK73pNvsZ",
  "key10": "5krsCDphMBFTnziddDbqfqJPbCdDLxePfDscURqRsHki7oiWpNGkPpbp9XnPoM59U5ETrdcdMyH8Ux8PygvxWiYa",
  "key11": "5jvenV1Vb9iqqfemGdqvAMsPwawcBdUUFWiJgJiv7ZsNg52vHwEqnj7SUAZAXzFpGr5iSde7jZfLqxeAdYjtk5PY",
  "key12": "4pGxS112bRh2y2D6stxix5aMNSWgMuAPrn5zaxX3Dh332bfiFMEXPTL51VT41FBKfkesGJKt9tqmkAgJPeTkTwTg",
  "key13": "3wdaU3dvwokaqr8kevffURQgmqq6sUTWS7rc9MkD1SVSKSaSFFVuHZRBuAnzNvHzUJodrRMCJYsmcJHr6dzkVkbR",
  "key14": "4mbz4hoPaKR9CJRnnwqsjTdocbxQfabjyYD5JzLoixL6ZJt2wzuqykLfusgoDZupYvmhTh54nqBCfo9PQsDBznLc",
  "key15": "4WFGHz6xWsVtkhdNnit2PwSTH8oqia2f9d5vPzNRwfFUV6esubKVxJf67EiywVeCrWr1qXcwkxJYoGo3k25tYvU1",
  "key16": "2em2TMw8YkodSsC1wrUPEaz1TBVWaxGxFzbyiUmpfhLSoMopd1FRUJY6EL9eTDsq5zbaoEmkM4fB8ihYZowPJTPn",
  "key17": "5amVv3LQZ5JHLnVBUpVke5EM2autVatukZoNvJUZBB1RSVqLJQLcN3HTMLfufAZ7a81svGXjjZwUivz7abte6T8",
  "key18": "4Ss1zd9bVbxiGDPrZM2KF8Qf417gbE5wXwg3HKLKXEzPRaWqiDXiC3Db27UemfBJC9UXPDGsLwiEGzh4B1G3xgfo",
  "key19": "iQqPa6xiv2XR9Drkdmj194ZiieCsBjGmNJoeGdF21QWj9aijcVnym5a4GS9DNyYAaxycn15u59CA3wLicCE6734",
  "key20": "hjS4s7H58GDGA5CA2LNVE9dWg8tV1XrgWind21pg3Dk52EgxrsKPbbhTakSA7FtEJazK3AmZMXdxfMYM9Ccrqrj",
  "key21": "4JM6dKfSibqTJG2jeHFSrkKpCnAZZjs8ZbfBfbnBYcMZgEfbEQJxxY7pmDHeiRttSiZfTZZZNV7sFzTbNCummLwR",
  "key22": "4F9dZaKmnGnRrrqMxHD4FuEzEoMEv7MahcGZkYdvkyUu18tM98e2H3Lv5K51ji8q53fAyVLj1wQaRL2Yp5kR7MEM",
  "key23": "crVqCU1PSKriD8WtQ8JAVdvtiXxhodKGkz87rEFtgLkdZZcNhywvFboT7gEDfuukmrbTbNQgBwYp4xjMGdcQdfh",
  "key24": "2aEbC4NjqmbkFX9mTs8Gj6UUEyiiddDxtvxqf69tgztwVxzebpLDJzfV5wKzxkgLZihc23MPLhQFtKduYmBeZj6Z",
  "key25": "2Z6fNRTew8pAumqs2wWSWRzRrzdNLRdN1hzuwrepvUP4JkUtjL3h9B1T4ngTzVdupV8MacEjGjTzctua8eXwfmut",
  "key26": "55SHp3KB7MbRmDv7tsLSMyeeE8PFSW5B5nR2S32VnhsJaxJwopZTnB9c3RiFti66UFp4N5mtJSxcvBGNboco97SJ",
  "key27": "A3E2rhYRMjajRKJQoHsvriAxPznoJx1Jey61q6H3A13Aw7eJTM41RP4yHDgLwCiVXPNC5b7S95STmapf22J3jDT",
  "key28": "4oMx6dhEdouKMZiwoHHz2bMG19boxGHD7xCveZ6xHfGqB7sgd7EXsV9B2W65HnnwryV25F1GHwUCtomRMZ5LdY9A",
  "key29": "4QtR4rURbm8cNTAJZyWubk15iWrjGxLiLppAn49Vjta6ZcYDqciDTfbM5xnnrDdJzL6nZrhYGZ5xnxdHdwEUPM5t",
  "key30": "5wzWEdYqyi9s4bqUmJrbYt6v1Qu3yarUMzcGZpr9Xf2iEAfE1fAPTFcZEs4J3qgnCxDaZtbz49NXG75swVoZiMyi",
  "key31": "43g3at3XiLjCAbWJFJUarmyjjLLGEv7QgSHxgomuqkksLs7RfzR2bXt9TLp23EPArTimWRW52knocDiytWZknSaZ",
  "key32": "RdkHHhgau7m5sPhm3D7C5gWXkSyG8bNWZg7BWCX73ekQPuFb63AZ4g57mRy8pBadUBgr296cPSQcC79Cob37Xck",
  "key33": "4h1gtd7ogA89P1bFVZ3ZqBwtVHkPDwXV88wiPa3U238iq6aPXFehpQWuopH8SToqrLgLaFTSYjYHwRzStW2A898K",
  "key34": "5uZVc1jCyUzJuYYzpnYSua53aw2Lad8RiSyKywjCVXx3fFszjutEz2uLDR72ya4XwrKjvjy8yRZYGCcheMnyN74R",
  "key35": "3FoD4XP9DFjUs6GTbA7tviNGowq4UT6ZQgYJHPQQz1PjJutXHvx5tx3mriEJXdYygJuBnxuEneBg9PEAwyUwgpgH",
  "key36": "3weVzgZ9RnFej5TJR9T8MmpDPgFAxZ6nTKjv7DhvPQxJoeCvN5VxJD5SnUcwV5RXk9pK5Q8ubNpgAvRXGX5ohTDk",
  "key37": "G8x7PndZV6mXNUPE56rPB4Xy4pKyySjMbzX9rFJMm2ZfgB2nDBpKyxx5zfnBS8eE5YdZwbBx2K8AMwtWHmP5Lfx",
  "key38": "3SULGqWt6JW75kBoMCraNK9x1jdYxbFaA8aFg6SFCrar4xXQdjVCtcLgbkTSC554HTXVVu9Ygq7HYfg98aYk4Kh2",
  "key39": "629BFDpWzHZqJHZcjCyZyTRQVCniyQ5dmRx2R1ALxRuU6LCdUpLCxKUSeZT428GXFLXRwgnmNFojxXMExR72qJJg",
  "key40": "3H4jzZfwsyxxokNLqrgHLybQzi8q1LcFaZGguVA1JsQWFPKtaWwKFkpfzNDQwuz37V5nf3sgDWGXHC9ax8U9eBuP",
  "key41": "4wBWe5y3kBPVeKhkqTUpoF2MsPVA6GDvUE5xpt7s2YM6i2GYPe3KPT9gYLHnzsW3pRtb2mwYjSRbTTa1EsDu79h6",
  "key42": "5DT1XEQcGXYGtTZgoo1QShwLaz1sXU945dZb5JURbdeG9ZxRaNWBfuF7pDjxKUv1XPGiKiFhNtYjsR2Zwqc4Q9jp",
  "key43": "4qyQVFdaLqJ7sMkQke2zxAbP4zgzsBpet9czsWLSJYjX1hrjwtEu3GZKX21489JZS6kub2mjBgMbB6x8YG33JjLk"
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
