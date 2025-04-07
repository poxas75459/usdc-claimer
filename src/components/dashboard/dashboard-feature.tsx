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
    "72XvbdVEt6CDzvy958YEz2k1HHMFaamBGYZqH6XwhVL66K3LWysnagSNHv4vhpjiE4xdY8y2k9HXu5FETQ2utC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Be3Vk94sLH1Af5W8bqJzjU72pKWEGGt3P728jjzXmMryzknJ2VGuTeWF2KFA4NQ9vw8YEiNwsbMEQyFUxMLyX2E",
  "key1": "9tfAV7VGEcbtnkuiW7NKMgo1LV6XcmxvVSbGCyDVvy8CbTtvBKoFPnA2AJ54nrFXe7FbP71HPkAn5oMbV2EcSsk",
  "key2": "3o1yn3ZydCi5g6NYPeUmo61r3N4ZUjhBsNbBGkeED7kMNxDPCb1hzmiqGV47niCuQCqEqVwutn5sWh3CRYzHmHc7",
  "key3": "2F1hzLaffAbC3Y3wvpANCFfpNwof3WwxFj2KkmtjKj7ftcuTh6vkQz9soro7fqtYnCk45ozWK78m9YH9ajm3Bnop",
  "key4": "3dbqpweTmQKciqnx9dnzSKmkfYTwAEATJKhzhp37ceAG4EbG7uCdf3LCbnfUufvgj4E6e1Ftbs9bC4whauSnKmE4",
  "key5": "4sq8r3oMKsq1jJJMbUKzJuGt1cVERU1ZL8EzUUDPLkKfL927tv3bWnWvRa9yJsUKMPACUsML5Hy8Af4tmf4wpf1E",
  "key6": "22sQdX69mY2ChCMWUa9j5L8Wkm1saYTUT9f6PqucmCJF9GLYgQoLpH1kf5jP5pnSw8o4CSSLqdXJJ4C3dZMVX6eU",
  "key7": "4qhe1cPYAyYpfY45XHTcZUZFBynwXyWmRDSPvk3kX3XBCseCubBzQiGiiCWBUB9Zy9vMWzrJktGTpZ2NirahR7Ez",
  "key8": "5y7nMtsF31MDkP776RGH3Zt53frEMKJNZT9hCGz25mzh3MmoZiPe2kTQmcJPatg7FR2D3fZpYXFvrGMv3A8Ua9FX",
  "key9": "r8Jv47EvAJZCmQH9D8iRG2NJsz7SA5b5LZwKUbreYePPVZLz9g6Vw4zEBdLDmTSyBPQucCYb9XiKgdEQC7Rs6eR",
  "key10": "4acPsQJUnXbqu3Bsy1uhong39zSEgGs6Nfuxvb5fDpkx5tjbXEN5RY1J423D4i3uwJ32B1ci3J9eVgsJEQHFb1he",
  "key11": "4pyatRMAQHNGnXDmzZK6dYrZMbj4jArFZPPXPMZ9TKSA9daXUr3VhzXKbgEebHKqtjSfHgoKCHZtNdq12n5kB98H",
  "key12": "24CweMv9u8NXJ5tU2Tf58njSceKgs8ezU3C8oWscPJKP2Zr7VhizWMzHyzxfoqMdT25vZoCNUQao6TYyY6MKrpis",
  "key13": "5jgtYsKZiQAZg9iQK7vZvi5Jer4E1E4H9nC2RSUtx9zuP4Zrj7eBdbguQzunJn6VSqGFjk3HWuQ6nqxkMuiCTaoV",
  "key14": "2zDVaNtF8sQiZfna7jHuZKqPqodxxTVbRUKcK2vsSGWHXKEVTuGJQMY6whRL7M9iQwxpRBayvwY9fH8XND4y2cBN",
  "key15": "3J49V2pyZiidev75wVJz4ezEbYENZzciA9Lvw7zo2XYGFVx3xbbK7TaErzqNwWaLySDonEb8eHTPGTkE8kd9BfVu",
  "key16": "3A4xPSMVE7kKFP4GYcy6s6nkDfBodY5zvLyAfJU2vuTrGGASjzQK4QZFd66RAYjjJAMbsRgzFUACbVT7JXDWeztf",
  "key17": "4pvbbVSUPo311CDZqFxWn36iHiGZzPGPwn4cThnG1VsCKQgzWZQ3aL9CLPRAKebo9iQVuF6GNYcpcW7YCxwDgakL",
  "key18": "61ioMZMsb3jVMmPJRsGJhvozMeHat8b7QZLD9vnzvQpx4svRfNYagpESCLMa495ajSLF8S3p9oHW2vEvCEG5yLki",
  "key19": "3AaEGQEBPLmj1XZJH9WG4FM1b3F5Wg7nf33ei2vzX6iy87Maa5yfyKSQWNV6Qpch6v1Y3FcjGaXbRhxajPLGM6rB",
  "key20": "4XtubxbTdYhDbDyXytnuuHfvFL1zm4DjVDUZHi1CvuuBaBXrzDthxyceWBeyQcX2eYumZAcQpkMHgGpR7ukMByyL",
  "key21": "pcqim2bqhrdfEeSJDk738bzNqgAEgy1HD4EsEGNW7fiA849S721GbmfWHfpEEmcs1Cmm6z61bBUzMcvqLskJZfz",
  "key22": "8QzLD3V8g5jspzLs2ZumPxu9m3BygqdLmPRTawR2E2A7THTgCvB7cQJPz7Q6FhfhuX6WE4gtyQtDHmQVPsuDvqe",
  "key23": "3tHX3R5wVXdMk6thMfZwoo9H9wQJorN4RBcYALGkp447dXDetitSRpumXh3d35Y5P8ULFhjPf1SXZft2D4jnz974",
  "key24": "38pfGwCgmXcj3EV1rMxiiSdYSUcSQUDePPkLL85pwwaskahqBm9cfGTJ79wxHYT6CmwuR7QeTcWVZYihwmKVKevX",
  "key25": "58fxxPMzUaRcadGVAVcY9uZdZngtUXjJhE33gtZea7FLJox7eMuAPoG7i2goibCgGBtp26yAmP3tWsayz92LBKt4",
  "key26": "2fArHMEzqdqNgtQAyjoUES873yXdygoQStpUndPBMe2cfNxhWWHSrivDgjf1N44ufYZGhzuuSoMsB7RsVbkA5XJR",
  "key27": "2MhBgkudwekM1vwtzgkZFfymWK6fWSjYfEbJBQKzsTBwLkUjVR7cFureKrL6F5BKfcr1oKSMtzLze1EvRV3gZLWH",
  "key28": "CUkHKYaxqAaYXQxPUCSww7L8nQtUT5v5pcdzZo5aBk1Pq2SjsVR5EzWz7aCRMctGMjP7RxLKFNo4U8sa1jhFXoB",
  "key29": "2y8QtZtvVtzTj5EtWbfA8gSxfkpf2gcASmHDNeWJoj2eGUyK6DpzXhHTZTSKRtZi55PQsV167TGknR4zf5yyP9Q1",
  "key30": "5KRfyLVoPVHHzqg93AbGPWTRLmNuJWzkr2V7vuQxBhfobXGwYrevbKeBmCrFtoSZj2j12LeStvpPGTEfnaDbidw2",
  "key31": "3paMzyGLneziW635yWHgBRkCAxxwjdNDjKb8MtKC2ziJYnG1aWFQvvmLGhW4HM2DprhidsL7HA9ieLBEkK8m7vKp",
  "key32": "2mCjzi7h8PgvvNF2REGK61acDWTYbDuNKtaVLKj5SKNR2nrooiLasETwriQwcm7BiEXMCdmkuzN8pjkDghZNxyqr",
  "key33": "38QFL7pGdmejsNrPRTn6Tn8ZLe5kdMA7JfQiWkzGyVRzHch1CxsjKwJoWiVqZPHvC1JeyraxoXevibWDq2bCdf2B",
  "key34": "YC8FvKC2irsetQZCVgNn1nmAkQwcYUmg7jrda9CYWYcTkt9Xvewgj6M649YZtbmdv42aX821iNjR1YhP7nuBubA",
  "key35": "5RmwLGCJhx6qzAokjaJ2k4t2URox6mRXF4gzsyRPRwgr4S7azzBHYEwYBEGW6vU9pCwNjFNYGmfZ1tdUBGrKYpkP",
  "key36": "2w9Jn5fqvXKQqgVLGxhxYwT3EbAE9Jfgg8rJ2aVzcVMQHsSPRXm1DEpFKf9AGMTGyx3S5QeCq9ksENxsKK14XW4t",
  "key37": "5dv9ppLvF3joPoLpiz4eAqdjuRGXub1sPWdBErEH2nWcBR6vu9ruNi1hfoQq3pPhGFMhAbXLAKFYQ2AvWbvkNFNe"
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
