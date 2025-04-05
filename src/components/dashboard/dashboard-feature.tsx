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
    "2Ra8RnyzrCLvkSL5xhk2YNYyDjqLsrP7sVouyWGq7UJ7t9y48t6T67UHJB62ezhtqYCvMozQ3TGn4gUREduPWft4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBDBGi5V5j6x3zd2t7QeYK253AMXHCqSbvydkcZvKotTbEjSDHF5SKxdXT69M8HcVELsvSh3DckYc9drBmrqSS6",
  "key1": "5MwunqooobiM7QZWkZo1NqYEx2ymnFLQZkPAhKBxmdkcRUsYTZR4kDSPYgWdEMDN1RcBunqjiurQyeovp8PGe3Y3",
  "key2": "wVugpnnCTYUQwLsvCQRtU8WMkxDXXRkwvHDWvdBrzafAY7hahVsXPh5e2JB7r6XfyU8sTEXGeGRkAZVxbqTtqwa",
  "key3": "49mRuxPgkLRwBEnefGyYJM985kLodTkVMW9rvRwC6hkA51byvSYaBzZFiZ4gMtHAWx7TP4vp8ai2MnpteoPXrxAs",
  "key4": "2bzp32XdDB6NbAPSWQwfUo5V3d7ZqnrdJ1X3Nc8P7wnsTG1mKdcXt9WKP8fTau1uT7BbXVt5XsBzNUoswqeZD1Ln",
  "key5": "4rExu6dG9F7wPsXVL4P7nM5hR1u6Dcs1XNrGDA9Pv1EbUh8brWCRmiPrMMFUmNwkm2mpSsLEphBmvbudQUhUMvuA",
  "key6": "5tWW3v9swvRsN3ZmrJGbjreaxrX26ks6iPPE3TzTn9mYqm3LCrAKgWZdri9GWxRmbg6dWknn1B2SZ2oefQNBpGXH",
  "key7": "4TGoePKLPTLv8bx3zmjMoNDrTxudnbbTDRnfS47JxZRjY7CnsMQwqHECaJ5EB7WRePWoCu32Ks6yF3o9pLG8J3L3",
  "key8": "31XhbFggYEXMh1cR5P4qxTndDWyNxgrtjiJZpR9T2MYVsPaPE1ntgvfYVbn9U4SvJkDqhMJTSHUfiFXuCD5TkaWr",
  "key9": "252hsiryzHtYxVCpXGFjmp9xDTKhRV6HkvvWM7boakZSSyU1rQaHsVW6ehQzLtnhkuvNqq7F2mRnUZLu3Fom9N7t",
  "key10": "4oNTzZNST38LaZZfFn8FeH6cTU5QMDVmE4UQYDxqfS6kMbqRj5BPeqhgeaMnFJG5EsRugTfCsLV4rZryG9NrpHZw",
  "key11": "552o4iQsEgVsMWRBJGs5X3xDUTHKYj2NM8os6fP7GQjnwBzRC5RZHgCNg3XGW2YFkw2Y9ujcTGoX1rofLp76jFuP",
  "key12": "4MJYmUcz9Vq2vkrrx4hVZPHRFhFrNhTPgwPidrjZPQcMi3wn42xzudmfyVKsq35XpM5mSDpyj1YHJq6dQUmNq8GP",
  "key13": "3eAexHhTHzptmhX7imaZzqnKeBxa42T7uRZ3zDgoDV5ez3eoVpD3UbDSY4h8KbtJcwVd4THg7wuB4DumJdtxEWTD",
  "key14": "48ZpjzVcM7VNk9BMAzbmVcM6jrGUjywavaYfJGWxtXDr9CHQjz3Ez7D21GJGP3eEMTMJGfhhJvybz4Czctr7f2a8",
  "key15": "4wpEd3rw67MgoiwGoV2N3RLKDPXnh1HCjWeffkSnheyY3Z9LjiZmncmjK6V6ZxxEcZM1gPFYrphVjQBB1ckhEERQ",
  "key16": "YW9qQCVf3Z5BnSVGees49gZ8UQLJfrTvmf6SSvuGMDuNrGA4ZR28vGBZqrq6YiXdRyLTeZGwhqtqZ9C1JBJJAZj",
  "key17": "4dWECfNkAwZrYFqbENWpRor9e532kXVHxDkYs4npfpQnPf6zgLJY3i7od2MrmyV25g85jbhLntib2FdGhRVZ14uE",
  "key18": "3o994qXLpznyLEDkJar16ZVoCFYPV1bcnKXW1Bc3LgecuzmgekcDi2H8EKcU6PwZV2WrspW82nLddp6Lj6s4pC46",
  "key19": "5mFdya3PfNreS5GdQtXk6zrZUuaWvmti3WaqWr6pJfrWpcDecRWcBGWebunbqphRUp1UxX9gb7naAG6nBTQiRRSS",
  "key20": "AxJm4H5A1Ye233cEtsRsC9gNSfaeVvjEv4jftyZLFxhtDRgx9bFZ5kbSpsz3iZWBwUa7A1YroYm7ragbGa4aGKy",
  "key21": "5pqYmBWnfN5mRh5jHtPT1c2GfostyYcmp5bJzG4Xt5PGBSvxSFoGz9Ted3p8WwYPMqVE2HAnTznAC5F6AjkMyhnv",
  "key22": "4y7j14pUsivzuwVwrdHMyRgLJLSDGUEBWa4pKNrDh1UmmTDHiKP6NAQTmCE67wemydDAUJvYiJn7fEbTFfUu1rBG",
  "key23": "3oBC7GR5eoQ3MThysUsiLeS127RuE5ft6TEUbR5CpMJ7cBBTyn5JzkZNV9iyMxn1JtaXiBiXmRtB6Jb1T2sGCsWx",
  "key24": "3Sao3Gm6bsKG8BobCdiC7vgeHkMv5rMareg5Sz42XforwmZ1P9h6cHoKxTXJy53ev7nuHezdhFT3SdMfthBqEnue",
  "key25": "2stCdz8te5ebBMWNjsCuFvZyvFGgupyyEWvHyHRuMr6hd3io5Jw6DMkB8k5ZppwY7qftcr6aucRZjN8MK25LoR9c",
  "key26": "4FBi7C4X2G5R5Qsd4qaFdi86ArPmjxQuhTdCNir6jDnAkkWsuYQyQMmqKvE9nNAoHHobsNUYJNKftnpytS8A3Gxo",
  "key27": "NrA8ZK9qEUv7pSqNAri3wZvZjcyijRYqEsBLWtwpRHKdFxr9n3P9dGs955dpozjH1fiGZHkgk7i7A6T33Rm5Sa8",
  "key28": "3RjUX3p4EDfqXrRFZAEN7ubhMWA9ubTqNX28xh2w72HineZ2PVAcyLBUywWkfbvk3umxswE5JJ2vVE2QT2dM1wQa"
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
