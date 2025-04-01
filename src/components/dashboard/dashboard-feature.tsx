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
    "3aikbMDfh7UbviWGvtdS2XwyBG23MBZCrLpbwSmqJUYA58ZpSVKmUhqEVRUxHzc53EJomVCs2kaNxgtewQZtQYdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvLbPp58HaXvKkZTRinA72UxDJ664sPKTmn2n4x7hWdrvfk2Y7JPcMjNmqxML37x4kdpvocJDE7iGWwSXKPVRHt",
  "key1": "4ro3GV9qxaLZTyx2va5vtVGHsZpQu7AebqvRF3fiiBvSjeKguj63Yt8njMZf4AnGbcbuX1rdwM4iJcYoodqoMwqS",
  "key2": "2fGy72utZZzhRKLTd6LN7xaVACDvSbM8z3BgJmz6gsPf7kd87QNRyhRrXf7g9KTrRoKhtonrjf2ukhvHaa3d2RcS",
  "key3": "5Dob28zK4FHyDGmoVeQQxCktUqHMvBex2uanB35E5eLKSKrwrT9iqGJ92ANdFYrPmRQBwHbJKmULTfgqMd7evmT5",
  "key4": "5L5pqNmjH2znedqfAeKMbCNFAJt1e8MM5d96nCw3FcZ8ReNKFZdmDGhsfiWpF6mb9DEknVBnyEr94jPnD8KtmmsP",
  "key5": "2aAzp4t48dZZcZ3KRuhz67sh8odvLJvk3tFfYLpCV9ZkkE9yhjeNbykSspsMBP5wYHTQis8e2fTJ9cQfbKYqHQoi",
  "key6": "5w5yVkdfKYvvWy57PuoYREheUzAwTEpbbutaBNzxxbHhhfB6nS9Lip6hHVQirGW6EuVPqxJzuYDztBRrdKipSWcw",
  "key7": "48iPuMWekD6vU6YJDeyjqYkmEQJ82gQDn2CeWy4mfP8wdYcqnocZVHkT2pdJDuuFvEsHbG6ozwGMStP1itGrhVhK",
  "key8": "5WdwV76pCEBm53ciVGTEaxSXbEsRHy1WvNDJL2FTBMJseV5wh24Hp9FhZWLzr7zYXJeN6Ubxr3jLNSWTF6H9kCRL",
  "key9": "4nUJCr9otURKE4jpSXt2QPEXF4G88Qz25zc76yVHxhRvqsNekB2fAR6qa9TEA4jLW8hQpHeJcXckEvWnjk1orY12",
  "key10": "2BWEG1QV8jqq9XAxAd1rRHpSAJuzkPw1UFZXMEgQrdnG8P8j3kAPJuLy2T3yrxQMRdwbRQnLBsPNMqSxudQKEDdV",
  "key11": "389e2pDxaBJ65m5ZNWK3sJX5V8hAEqJDN1X6V9hvRis3HniA6YAvCBmiotfBQBLFSpPqvU9q71FY5z4GiX9TKwXb",
  "key12": "5HUvRQAFgjgcEn9jpmG4YAqy8CFW2BzbHFK5FWTBZM3BD8b7TJxvrVdk2w8NE3BLCKn3QaAJEAmT35dyPjri6yme",
  "key13": "2KJgMJLJUmkJtQp8sA9MC9gV6m23YQfXxUbzdkJeRuEouegsY1C8Czz2w9USW2Q3ZWSRnPT3xShtWb3xWmTbgZ3G",
  "key14": "4JacpKsVjeofBZMuBNdXDdWnWy9QtJ4h31mjqXnbhx4TaTUs6cPK6qYdynJTTDBvbab94kxUgem5NiUDXS9dPNKb",
  "key15": "3eUpwbyNc4FbDSGWm8zpYKVoRUAWMCsxXhZUkCPTFfyxqF6BuwHhzU5t9fU4iqFyXRGj79jiDfw4o5Bijqo2Ut8o",
  "key16": "2G3Yn8kfDc2LYt1r9KuSNiXoydTd7D7mPajMdLNiMctRywkgTdeJoJQMyN3o3KAxssqs3hZ5hmRdPBxBD5ovhypF",
  "key17": "58McyJ3g5pejK1DHhiEXJvLdGLPfWhs2Upv9WYW81rYTphbzh5MGaRpuQ7wiQ3sutj7uRQ51pZTDigvZU82oMxG2",
  "key18": "ywEhnLcQGyPMyukLKrqMbnSNrcgYTdRs6P9bBxUb4wTfg9Q4DZMWkDiyxCNy6iPwxfKpFWhYQcDKN6ekJVatjVz",
  "key19": "rChNBurzUKyJm6NENjpKaHRj3bJ8CRhXggRKatL9UuHh987kgMohV9XYhZ2vJpnZrX7oqfzX791cKrzL6VeSQyr",
  "key20": "3QTXMNjFQHWLj9khhprm8fFS4RkKXfhU5YT3aHXQYrLy73B6Y1j4H9u4RbER25ocXaY8mkHiseXrYAQonoJToGuQ",
  "key21": "5DFVrbxs3pyqdr1pUCyia9FmBBJMZBgHRB97P2uHi77cVbP9ARZEdHvbc2Gd4vFrtE1QmZfEU43RRfL9unHTBTjk",
  "key22": "EQ1uG1cmCDR4p6ZL26AV5G85AN9HDi1VwGxvdQr7toBmty9z55Snj6Eon1iAr7xa8LkE8sKfrT6TTkofCsrVkq6",
  "key23": "5VcKjrTRS2npTbdCuWCDm4LiVBKBAuHTUcEknpe5TFDvRPXb84QvrkBzR1bQepbMmzJY9kMfKAuTUtAS63YJvTH3",
  "key24": "4yvcSmQziq9ZYHe4HMs6uRYeM4oRrMsSRR5VLiBPxGopFZnnDjKFn8g7UkETkdo7JAeNxYkyAZy9d9W52MYmLQdh",
  "key25": "2oUyeojpX1J496zFKo7sAzJfYwCYWQgcsuTpxZqhU3jToBMEBXAogwLAFrurFr4wv2KG83fgc1YNJpDrHM8gJ1Gp",
  "key26": "oK9iKYqNiy1wjz3KX1We2HTjDr14K4SdjPqEtRviLYiKmRxXXpJd2TyVmSaCFtjq2keSAHTMtjz24ZihCM5fLRM",
  "key27": "2JWd2NKHRqxeJkExaEGHD7dR3Dcj6LfM1YfKM1cJGBunLadp6fPWH1H61JHjDaFZnVUQ2Li8rmYAAcRrsxTuaCuz",
  "key28": "57fVc5zrWaeZ8Bg5q4EcDwEDDH8UJRq8RJXqKpCJn2xioVAKFt68FnS6Na4FpGUfA5MNrJQcJoDTLazgczFoAjZt",
  "key29": "2FaiUWn7u2hRX8vchYzNavkeUHNXS36SAWFZk6cfFV9vAPxv2mZ1U38zKojzaMgbBfRquY2b1eXcXcmPuTXdeXQV",
  "key30": "PjAxrCJheswCwQQDLY2me8yREw6jgHCrFqtrC4bKhtmVyxKnHzJziTnf2NfvnUskCGN9cMieT93oPJSJHWXB5Xd",
  "key31": "2sDceNH5CSQzDuuHEAj4HACvS7rcKU4G8DWLQN3q7W3nsXDvQKWK2JKvcMP5tvV8awxgYnv7SxwWKZAEUQZre8pZ",
  "key32": "4XRPNjE36AQQMCRME5AMwbGJaTedtrEC6wprJCM9SF3nr4dWpTashkB3vRAN35wBTJh4pZykf1iQRYaLWVDHyrRQ",
  "key33": "2ZMBtufo2UdgQ2quhsfzCcLPmobm8QXvsUrYssnCpAbNnRV2mqkTL5FFeAx5m3sVQagCte3DqGLMmwzUBhDdadkx",
  "key34": "2fCypGW7aJn82wwMkrAT2NrZJY7ZXaVwsFKvGCY4iUDcMuKLeZxzmmofoVAYhPZB6aRBN7KmaS2zBvF8oUWRkKs1",
  "key35": "zYMsL1K6PKzBdCt2DqXabyAmiSzbq1hBga8KDxr4rJp4Lw371uLEhmtVdGfuHYR1THfG2cgSChoYUrAnydQQpAr",
  "key36": "4dvCVFZEDpCPk4Vxm22RBqV1B6w2gtFnXJUxWSVZ1K2cnxeaQJa6Egmrg3NJqVngUePgJDNaXzCMbag8BPdNG9LK",
  "key37": "3oPKeV8XNn68eny8jCrdWGVVrUwBAxSXsGj2uXsmMfvtT3JxuKs87funD53LrkcvZcdPs3XV3vguPxkf7uRNbEx",
  "key38": "2X74NYwJPzFiFTgpq1ZfAj5kz4NiDm4rNSFy9EGScSNLK5jH7usDzm1E6m3mTsp13oNDA8gsyiYKszVxCr7eCW1d",
  "key39": "2L9JVs2uSs2n4pnpusBJZ23tzvuANcakePnFQcR9NPzeGAo74vULqeHd7jGLeGZEKhuRto8DWmYM7MBbuTDcZRoi",
  "key40": "2mJ3WLWygYaESMeReR5eWnjPHw2AJVMUitqgcTfJodSMkei6VuxZUTTJn6aKdhftbpQyD2NJtxxhk83uCLKzYn9s",
  "key41": "ic3Qeamu5MPLdEoHmn9DJn47fxhBMU37wr9CGoMELhqSZv2y4v7UqJi7BG6udEsWkSH87yAT1fH2nbwCy6xYLJC",
  "key42": "2x4q1sxo6Key8wowEzA3RhRfPFddCFzryKMx23fRgvRZFz73KF5mqzJ12YwQxchJvegy9gHjfX1XPzReFq9edc8w",
  "key43": "3MiGCLYq4LxH2EBiBpviDFrvxqW3kaHuZ4MuEioSPQSJNHesaNcKcNCM9ywaLGAqU3v2ZrTeGoDRGeU5kyqmkRPE",
  "key44": "5AvRdajP7XNodpiSf4tMDkVeP7wNZeFia9zyDPEEVkH5THHM94Q4E9Qt1uLCWSdFtgjJUfxcUrSbH9KDy35UKAq1",
  "key45": "2v31PiMRV9TbegLCFF2FWVK9PTZsUxMnec3RYKGnRXcjWCwnarXFZ58enGor6fyXEpVDTVTSH3QN9tcjVnmQ1Aqq"
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
