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
    "2qkTA4iuxJ8k5WpjBAYRqHCQAQcdtVhpfer3gK5iv9xmY4sJurcda7cuXqLe9FukJVxow7rvohsQQnKw2kCaikjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNyWTYYDzUQkAu7MUrzKwMfAzf3PwAMKAjW8t3iXh2PKFQJxaAQLXT9tWWUSb1yW6z4St9nWHGwaB4QTaaXwnYX",
  "key1": "5yEGAZBn7dvM71N4ejBfYh7erinPEdg4KcB4CrSzGmSSJyRmMp9JdTSVao2qzZ8PSmzDA5X2PYDhefoy7yevbgBz",
  "key2": "ncmUctpjdfx3ht3b8R1ZBtSsNSDy6Xn8FE1q89wL5QJu964q1gznwCi2Bs5jaMRee47WgDNwoHvcGhdXFm8YtHd",
  "key3": "5S2PxBhwCGdHnQ9eVjJmjTk3ff7FE891s1PVQGXw33gDKyndGPHhAWoXu9Tfz5ruzqiDSzLdhNsWXKQCNnUCjgDu",
  "key4": "5MVwC2FqFVgjyydr6MjevqWs9MxK523e3whKL23j5dtxZcG3qcqAAQ8DtAxg4cWTnR5gfGDRdDb2t8mEXpmDmnQ8",
  "key5": "3f7KLz5338vcUQMULkVTB9UEwVrzvNmo4ew84k7YR8Q3nh2Dv38MashPxa3uKvk5fQMDUZHMVWg5W1q7wANoLeb9",
  "key6": "2YPjao3ZWCTwdUwT5nTfz4QMzRALehYRVaVtCQQD5zAz7ShgxTt7nGcE74LgVpFXwqKkRQsoKfbxt8Z1AnXH5SLN",
  "key7": "4EgpmEESD2sbhwKvkQf4PymgLkvjDpiuWTFiKjF2wkKC65ChZAc7AKx9Mqt82U5wtm9Li1AwE2R3UosRrhP267gZ",
  "key8": "2Tx1rB3XViuZf1jBowj5e46z2kT3EdVCZ82t2KZjhLERf6BcDQME7jd2Jd5VFQFt8haPqXZvABqdzixFaSmJBVAD",
  "key9": "58onBZbBQNk4r1XDNQMd15MxEgszFz7HsoKQrW234e7HcLWaugZ9rFywcHHqEL7mCJ26s3SZApusQPLAWvYR22RZ",
  "key10": "3gTTrCZTzScTwByrqfp3N5bbrpv7cUJptTcNyFskKUKTzqJVmqAvk4bfqkvskKjp1aHGsDW8MSbF15sw4SBY1aLz",
  "key11": "5RyTSMr95Kcf9U8hX63YprTpL7DumbqYZ9PpskXaFN31yLYCEWqdkowLPearLum81A8CuQAtZQx3U9EpBRRLaQJj",
  "key12": "62BdysTszNYYdBm3xJpqe162N24HW5Ftax6bDmJ3NC5V28jC5mp1hzWcqavW8VGGqgvV36UdMFkqWSEj6frGGHKq",
  "key13": "3BYbWP4VqpJJU3ugth8wcQFabKkGvfmWYGiaFChsbKLPNp8UG1jBQPv6x6wUcbhSaReYkgmm3NEiUmEbWSLjrgyq",
  "key14": "2Cu7pVNTUrpVk3otY5TKLkz7hTAEmswwKmsh5AYLUinxZ7YrjJ1psMK7g6tLqEgWrHtn1aUm8fXz9hcZtdYJjC93",
  "key15": "3iBSvS8EuhfmPKtMuSTXyymvvHzyZ5brSBsMRmFYSNwwWRqkhHWu9B6FB59wXrNNv5Rur7dN5TctUHsW4ihKbKLe",
  "key16": "3wTfDmNwuizJdkZFNYrkSdzC8XCx2dsjnSTDg51qq6cfk4UFqh1ZJ2WzbENF1cExqoxWZAN5ZXgpbfAoZri3bthK",
  "key17": "2ZGZBvYF6ME5c4jsGH4uwpyTsjmpTpQkVE96uYGef3KcqfStmpaQv9j5fRZumdg5YEPbzvcPNDuE6CE5RJc3wyuk",
  "key18": "62LZDMzNEEEinRswxcvNjAFdLGvf8KrVfPNNhijeKuRwCL5BVTKDP7v4sVSecogZhMpRe5fxcRHyVMBdz9TLsLr8",
  "key19": "ZAKugwmd8a4iYLxy1j3CqycgRBjsqbQFXprDqPLAZoctzWsk6mSTJfwioMgoUrwEuhdKtpKFTQqPRripZEWppyz",
  "key20": "VaV4P4HLpqMeUNPrgXMxBU7euNFp3y7fW4FgeqU8sAep7B22K7GqPrZmwA4BXW6EwJMPSJLTxABMS84dstf9bSp",
  "key21": "3V6V4hSiu1Fn8rJvjbCdSzKa4GqTa7K2R2FHrvV85fwWSgdW9hgh9Vv7TW2HHRzJMBxEwzxWjAzWn5Kite7axDKd",
  "key22": "26AYzmQePcSyN6ud7GGWEgrigtci6DmmaEqyrhddAo3gBnGALKidLToHdyLrfssrZm79rVRfUBysHKSwrPRqLuYN",
  "key23": "4Cj1XqMsFaAUmcZVAhk9HZ67UXethCQCC36iLruFDM7XQ1FiuSfngGV728dP6XHe4r2uuxGGTB2BAq1YLhcSFZL8",
  "key24": "5WEFqYCFs6dKfDjPZP3sRYPHCFupgrc7AqmhxK3UKyGzgrkfYsiNzF71Bg5fDMBtjm6fyma8Ae78LqhUTfUPLwPg",
  "key25": "3VF5EvygPewxszkdJwA4z3Rz4QCHjHbcNVVGtkowSfapRQ52qCdeqSqRqJscVGVswQcf6NyRHaWuaQPoQdRBtE7f",
  "key26": "3pSXAmhbpAPqjYo77ipzUTHQhoXUQRyccfeNCdYpKXwwaQ8iiiH3XfXrZm3G9VMwcYLumULir6U9pUXWyJXgo2Z9"
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
