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
    "32jLz9VmCwJxbLcGUvTg9vDwnbGTKReq4GMBty7zTYovvjp16LxvEPNUCg3APNxC5DeHJoufmsY2bfKjpU5EJR38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ke1FzAPPJ6829Swz9nuK2gND4hvMMNagiAAjM6NQmxRmcZUeNkYcFntr1K5tx8UScvQt2pUJeWfwkvvmpA3qJFw",
  "key1": "3RLhMjxHgBm5gsJ5oPMDnwYvkSeyMCZPsjvebWGr1sxut5AfVNFEpdqzmhvayuyRks1WhmRMAHSTEzrecRzcynwv",
  "key2": "4PJ2Uhe3FJ1QvaSdq4rEyeJKH8YBP3SKoLHV8kvyQpeqp79MZrwLkHCpCijK5RXvbTgFh23iBYd1JD5tc8wswyMa",
  "key3": "pifinB2iieeauCGERttnoq7boqzNd4eE9iafSayWUUYbWfQbqs5BoD1P68oxomHgRMNSNAn7MMt9LMafwe7LyGC",
  "key4": "NdUpsZ35QjEkrTSnNGbY1Vs32fMakACyXp4NAw6SfpJHS1pv1XZUCrg5UWrtcLW6PYzF8G9DJavhRH39c1rdbDR",
  "key5": "5eWmMYbYZkCzaDYTehAkQ5NzzicoshphENbF86bgXmPmsR7D7jGPXq7KxKy5uvnLYMT6YbmMFGx48FrPKsEFKPFi",
  "key6": "4w3S6NxrSZJFoYHvErX6XoZiAyHSEz8QUCixXKQ8t1qjPqK9mmLgW5sWiQJCZtLbAUYpbSTSqsLFM31HRVv1ihqt",
  "key7": "42zaANbJvhwCVnZEe4W6LtndUHcMsjYtr87D52kqo7mK11Mr65ARu8SQAuWnfZ7cQVrhovztab7jVVGaSoMwmxZk",
  "key8": "3dMLSWi6P4ffHcibRBcPV9DvtvsURDRRuG9wRJy7cJKkMtn3DbE5PzLVPSV8muELitE5nGE6uKbp8Uw5eiya4RHV",
  "key9": "3MR9HHaEow4mkyUZUM596gbhTAndmR1fPjNDJ86nBUaVMSvTfYidJ9oh98jwLUY6LABm8snheg6SBCPsidwHii8M",
  "key10": "4zPYm8C7DBSRyzrPJsFzdc4nz68b6Y4WSKj8UrBMKNwuBBbaiPVRAjodWZFxHs9pBJYuuqqzWc2fnCSSqpy8Cax2",
  "key11": "2bbv1j8i5u5B1Ppfn2TZ6xoHZWtDAJDNqDExNi6WZYWvzuF4dbDFcYFXSpgSYweQUD5ivy74skWYMEbCrgGdxuho",
  "key12": "8UoBqFQ7RXeJ3gm8MA3QcctgXekXQcmREesNf8eZzcUnWdpK5oF1kdcjHKRikxMKC8KYqwisw1pgi2bB923Cr3t",
  "key13": "2FadxtLvQDKiTJCQme7TbSzWKLsH84cdAr2gPQ7TA5Nc1eb2ftFU8rESW7iNw6DLNHoCewGfpvr447raneHodtX1",
  "key14": "2BdHwbkErcBumc7CGYGK4EnnL97fkNMwfs9QeB5DXEaUbUtUdGepfcR6MYDMspa76gkHoJHtCMy9HoPHJTBitJ2r",
  "key15": "3p6YRcPmPg5ZHdHpD36N3LTxQVtrzQaMXAHxGkeotFc1DS1zT4UVtHT5yn4mcgieQksFuMRKWXtJQykNGgi85q42",
  "key16": "42qghPgje7AiEJruGHbuPjEqg6k1oQxcB9jZKeK1HrFdgjGu86gAJPVL8usZibW59BRigDRGcwFpMJG1UZ91mpnY",
  "key17": "tAbemM8MCKK84PNjbTtgZ6Zv6snS6VhXRqmxVEwWqNPRJL1jGi79GkQ9iN1gAbNaWBowk6KMsCpnCpbKs3gsBsD",
  "key18": "55mVUPdSM7dBSBTRqsBGDYjJQZJbm5JEqHGopUTqRQCesd3Cw7uboP98rAx4mdoMysid92eNX4Voem3z9tVuWtaD",
  "key19": "54cvwsz1XjBSWkFETYZoCcFkcAe8GAbucPvqybQcrwPFzkpwr8CPemXDRE25rXFG8zgsnik3XbgFezmh3Njt8mwg",
  "key20": "5s2z26mvM5XygHk2NQyUB4AgRZPbBieJPtaSCjzhM995ft9g2S9Vc493b9KsfYRSfmPWELKw8uVemXUVZpXCdZh2",
  "key21": "38BP2J8YqXKfnrZmP6PnKhFmiWTNwEgvNrbFJ2KcQzL119aGK2YZJUSAvWWNsvCpT41qDU9n1NgJZ6bXLFNFeq7H",
  "key22": "2yx4ivHVR5Rk7oUWWz6J9wen8X9oxHwgBZwRoSJnNjnbfCDQ4CmjJVmHf63LUi9FS6AVmkytQv13PmJDVQpj9BVw",
  "key23": "5PY97jVwhf2gYYJuLYqAKrtkTn8C44uVHz8wSHmmuZtUQWDJA3TDynVmjFdt2TvVhQUByi1oPJTfVsdUmTu2ZbE8",
  "key24": "3pmyd7Mz8twkH144gcUDbV5MMX4C7Kr1WYDaFuA15toF9p7vmNZZviYBnFEMM1YwVNJ4DiDDJBZ4EYMPTtuheNvt",
  "key25": "3HnpyVYNgWYL8iwKzGrXF5tcV8NHtSZb4eCz2LeVbnYWJB6k1NHskALZj4zWhP96g8WDUYvNdc6YNCCmpdQ2LUJ8",
  "key26": "3nnFgCjge2RdWwuGRoUpKZMGXYH6FZxsqqvxJ3J8ywPe47qPKCtNpyVPiVPvccJeKqquqR3wBjsZ8oJnUWzb37Sg",
  "key27": "5BJmGSkwaSN1YUK3v1ahuYsVpAQTWgpeCcL6XXySYcewvmYzqFDD2eJBwunNE8L9W9DDKzgvk7FeUrLFKR7PokLW",
  "key28": "FgsLRKvYYfLioxCTGig2hT1BuXLXMPcEiePLG9GUUV1meM1c8yNyFwWfbEWYF4LQnvpFsKxLPY8AcQCvNf9CZ2d",
  "key29": "3kaA3bvds3jQH92AC1vuVJaZtwhfDYYvBoFs1tQD1HjHgyebrpFrwZ3pZ9VrnnbhVx1E2Z8FznPtriGVpWdvWGSi",
  "key30": "2TgjtD1JK5furLZXNGtpgSffMSa5cGP7WiWe3po5cn4qJHXPEtKJXsV9FU15MbWmFgL7bmfXKkcVZy2DkmeJ9F9n",
  "key31": "13GQEuSWfWBUqpoohafriEnmsW2GAa4ugsgm8QchvnrFgM22rjBbeYDDUtBdx1ZKQvTh2dhVQhmXoM9Yod2ZFtY",
  "key32": "4TrA3RaoJVWPZmEZqSH9CUxUXAKuv3DFyADHCyJvZ89rs7s866EiYwfNRJL61CPuMJdkQ5DoPGGrazQ3DWTQzaQr",
  "key33": "2sLuUtrWcU1VGLWAtyfAaHApa7qAy11sHxiGBCgByk9tukW8L8LrtaabmRY4XrXPaUshtwTDZLAJhN1hDgdKbAbU",
  "key34": "2XXx88rrX76YAsNQhZ6u22BmPf4f9yhMt1yH5DY9Kja74LuhqJ2GYKLdBMEM1ee3HJZWhuknhYy9TL2fupXWg8bi",
  "key35": "4bXE6ZrgYMxjws7nrLYt2vocLj8q7YYTuBTLdkNcAdt2S1to2ypE68qmrc93RGn5te2sc4RxsbHetc4C5aDMF8we",
  "key36": "tQJB6hWogP1udsRUMLj65GUcrnWYmTNwuZv4y7sXPakRGGqJDDgg3MeHXkZzAz3pawPvvFdMrR4rFAw51AsNVox"
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
