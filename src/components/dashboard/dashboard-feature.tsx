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
    "puf6HLkWe5qYLzFahd1NyAneM8VvC5dfoPkbBEq5TGEibvvHSg1TUMCo1zZNyzGiEvcshAKZAQfLgRRhuz1xBbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cuqSH4At1UbttVn8jSfkQ3mqAvv6Ew9nwuiWn14dDkR3BVbgfGkte1F34fz5rBGRKnHDxan1LP688KVpSbDmvd2",
  "key1": "3JYJfuiyt8AaesUrwZkTYbTEJL6ZnbmN16HFrwiNiBT3tPSm6r6Hux79U3xSyA1zKYBS9ECjPBhYRCkzADoxE9Vh",
  "key2": "2HiAvNB6sV8bUYjfjZ4KyrRNE1N9BLzfXaR2Wqt67tMKRB5EVxBwPWw3s4ppUzsHQ9yn1oMGEupJrdsWhkL4o4f5",
  "key3": "5fwzVxvUUXnsRbUG8HVfxsLUyumDf3puGkybtxaXwh8BnNYQnPd1h4SSXMfHKnxJjjZnda7UAhVm1P8v7jsTaJdN",
  "key4": "vp9BMjvZRjSCc7EqeJRJcG9j5jUuiTRsLpAFdqw1xNnibCP8iTDP9gcTyAUd6Bc5Ln4zWNf6he84DfAUJKDkB8r",
  "key5": "4ydSE1cndCnFaLEFVAAdCijmrhojj6stZUVLKX9pRkiEVXLNDVDq7WVAbs7rfTgwmaX8CG6bq5ZTfzMVaM5LBNoy",
  "key6": "3yCrQi5ewn6fDSHd2ahzoqQ4sgmw7D5Zr6qXKv7NC3dYzHY7VQSFb54HuyumgYnPyzbK1afATPMQvSEfUi3nhE8g",
  "key7": "5umstNVoxiHVgUgpRgXDTW8Yn3KWethj7nDMnFMcR8hSmS1kHe5HnwJHhe9sSj7znsfNjUXNE12FjGQ9La2kQXT3",
  "key8": "5KtqNH443Cfyj5SyfXUT4n1ebP1yqpiY7zfPs2AB9wP4NfgFuiKZ1rxQP2SD2XtWPmkrD6dAUQscvAcixkgaNnfs",
  "key9": "2JHz7NUQvgjoFwC8HzNmU5WriX42HBsrXBPFSwoHyNcDH82qBgTmxVvFTA2JCpGtBsGAERHTG5ysdW3zKTfhmXVx",
  "key10": "2QivF8cERQMhCnGm66g7CyLnYjE1phfK4kvH8XoMZM5ERpJA7ZBR5FU5xjxBZBrccDWYkeGCztK6UoGKzPp8Np8Z",
  "key11": "wDnNtNzkamm6ikm1XiL8R4hxULcEMLGo1KUJBnjEsdCTAKXiFN5bcdZ3ab3eJxDL2QgeBunNre8Ezm6gLwjQvzK",
  "key12": "63HwcyJBEfzdj98Nga7eYTh7vY7c4i8S5xtkjwo1VugzxRPdpNtkFdTQy2ia3zcoUShyGfnnu8FWGnkbPVSGuw8p",
  "key13": "VkEUqXD6CRWy3LLZWWXDTAF6guyaTrxoApY5ST32vCDSzsj3G2x1GgKHthFkg7ZSxThyhsjfLKYZkSx3QXJWm4c",
  "key14": "5uTLxENHotugohyXcP1v1PncS7soDqmRaPEBsXTJNQmTKgxzA1uYtAGPjMPLZYg8wnV4P827M1McLKJKwPrzPnDA",
  "key15": "4krCzmrbs2p2vbLAQc6b8qLgxezaZT1GKGfySoGv27kv1sLoY3FKVLRgHq6ukPP27Rww7bLpoJDVLKNPwM9pasM5",
  "key16": "dPRQnUPYoSnbmJxSqa3Tt1VDjW4uY3kYuHNLb4aoJ8ieainjyc4TRxB447N9WjubtkLrjnSk8E3asxW7HHSTVAu",
  "key17": "q6f4j9VzSxFUTgRCXZB9Lx7pb7LqsgDiADaNPdQZ5X9H5XuLJF4n2ZEecVxoqGfApga9Wg5awdFvTYDvP66YVSm",
  "key18": "3m9kUHHGfFd8J9Ch4W4quCeEEqDLDQGiH4fodJTmBQagquDKE6hWaTmcCpLu6TLSKBXaTJqLS2wTebLZRy7VNwQR",
  "key19": "zUqrttP9tbQwggH9THWwULQMRYjBUzHP5xpVxm3L9RyjmHxE16HXCkMqoTWHfhWVqrmNcsM5PWApDdtsVBwB6CT",
  "key20": "WKD9RVTW7DYVTqGUBGVg4M4j5DTEpqqPV2sFN3WYWw16TsXtKSzLTZqVFJXc1VkpJJd3WaFQdm7nNDv15QPeG6t",
  "key21": "58dGqzCKeGDRBHYfMxQoKM2chpLjBfXNn4syFSUkZuWHmwxUomV1Mb5G1hUg97YATQoStMr8i61qkYcKfBLfaj9Y",
  "key22": "3WBb8cSmnroWXuVJm1Y1eGSJVfN4FEvJnL6YJDJxaqKqPeHwaQn5jXpDMnuvK4RzJC9hh9pGUjXX32ohTXQcMZmC",
  "key23": "4YYPaGy9FLxLEJTt421ozhuWbG74KDyWR86NLEa31WZASt5qMUxY5gEsf6wLky4zdBBqaMsFyfyyiN9GLaVRiSuv",
  "key24": "Su2pCpwnHME6TjHDsQycAEKJhGtopieFVgjq3ddvBT9fgaze4QKWu4WvKmYw6aihht96jhecDvhinLuzH4Duo34",
  "key25": "39rZ9TGM75gCWZiLKF7uHMZdjzdQ6D5Uev9six8mFUfvbvJitn9J3pNe1FSvhBuMLA8mkGULD7KyB4G3PDMxofCR",
  "key26": "5LZ28c2p17obQHppNZQzhdCZEYCuJfnuMChAdUYUyVV6FGshZqkMraVLWs1iNnL5QFxXysz7AKBRyPxwqV6Hurs5",
  "key27": "2SwbgrJesPsRUwsAB7hBrhGRpD6yZLKArU5C5WV9inrsJrkoHG4YRjo68XLQdSXejRaj7uLJ8xtzatcb7z3eqaL9",
  "key28": "3meNW5pMtD6zPq27xj5gJGeh7wQJNVo8XgEr547dHnHAKWZCQT9baVJZqyPPCXGH4mtBvJmrfYyBgJ9gGJpP6Ajn",
  "key29": "5BKhyzkFrhr9r5LJ4TgYVm8bHcnWV32N3b8jLmLTC6ayBevPNcgMkj4sHd3C4Ygtz6UVy8w3ytSE1UNfMg8QEuHd",
  "key30": "4KVNf46tFTVyBfkpxbneRx3sS1ekTbLqCimHMy8N9ddJopRAZ6BY7A42pAzgwBtCT9yhZ7NuP5bUbxpzbM2VsY6t",
  "key31": "JSWzjRkQewwSnbT4gvuoUTy9anMckwfSfPmSfkA1NRE5uF8DFsMuZ8THtyY37xmbgP6xCmRCwdun5YoH5bKB3b7",
  "key32": "3CrizT9Au1pBNLVbKBDdNN6e6dCocffgqKg7LN1bSZHEuh1HQfwPjZe2gjY7HddrbY4kfM8wwbokF8gmoV3Hbqo6",
  "key33": "Y9KNKF1EkSU67KFBsLXW5jz1T6BMs8PRB5948zBbAERBaGWstSQzfrQkQU2wMiyt14awfWfyevGHqAmppim9TQ5",
  "key34": "5D6tzUDAaTW7krw6qAeAusoMJ17P6fppAY1zKVVsrMxEjN8aFv99pNoh1zfoY4VhqF9rMkWFjSk2gxHwvj6YVcx3",
  "key35": "5oDA2XHYB62RzGfWDCjqePygZtLk7mwBncGM1CgbyKLwgP33bsLA4D8px9yPxseJzPoTycWNSPhfx2EJF7QYJgN8",
  "key36": "3miWAxbPeBv76so5jo2s3JBbHaKbiHaqncxT4SECtVKa8PmfoTEqkJn5DsLYt96aHBD72dfM1dFYj7rTxrT563FJ",
  "key37": "445T1cgFsCbCTPm58ANni7B9g88oewbQrQHxYYegmssGZN3jH9joALXKk4qWBkV5yZumerpL4Wt9TMhFCfHxV3oS",
  "key38": "5RUZtL49t8u5pgCoC282PBf9YsUerMAaHxHQvwAedSbEWyJyNXnzXCEEabAByGhy7tZe8PMjUoaTnW6bTxDBH84o",
  "key39": "a4HkvvSw1oFQHh9AKV7G2Hwnj2bgGnSZXJCpGkKY2XMgwixRisv5gxjwYChKWaMSaWqo1JCiyxP4gxHD6cYaYs1"
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
