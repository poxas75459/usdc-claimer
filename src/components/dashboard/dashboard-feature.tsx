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
    "33ux3haBNSwaV6DCyVoech2v4j9kXEY4b1pz64CdNRq2akwhwRGcYCQXGDzDPPwKD5f1FPp8rxtJvArFoLRdBKW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SkYvgUy6Hj3e3MzNwjn5k19ESUBsDDjs4uaJ11KWbyJfu83TSQ4s49FDuEYfh7MQ1vwTmz4Q7njpZb8WUAH5fpX",
  "key1": "5SUgxWcbzNy29qHRP9AezJXAyder4zGa2AJJFC87PzreKFov4A7TZ3xqDQMg5atSwTtvU759DngfzshZx2t9ZG1o",
  "key2": "5x41naG458FUsCxYEguNDNd4QLqJPzdF4Zuq9Rptpf1PDju41nYvqLTLHYajkFK1oakLqhnj5xMpzSMm3KA96p9J",
  "key3": "Pf5ijKRbSoNmpNBT1N4B295sWAgtzWu6tiA5dvfBuXh5iZFAHTgHo2BRyur9YCo1ipvmQpYo6Z9GpceMhGbms7Q",
  "key4": "5g2eUiXCwftuxrxtEWPhYBh8uxc2vvisWubnFjc3q1bkG6MCCuZKYfD4aJy2oUSiSoD7LkKKBrVkToJSYwwREVUt",
  "key5": "PkQcGdjZT4x8dwuLMwyJ3EYvfqwNoPYUx2sCFXFz5jULyfkXuXKUGUytfJisRnrTiAZWoQY2xMv1UjYL74ErcwK",
  "key6": "UR6kHSDsyTa36uTUvBjgFZHxXbCyZrh7f4Smsby4BPjyVKusMrS2sUXDns1CjNuuy9fFTSXv1iqfbkmaV6eWoBJ",
  "key7": "4A2Zj6PLjx9NcyKzYa9zsipgNF8Nr2pNR4LEQRNtpc1Ma2DcFxeCzj8kunvvKcYsu7rhg1aqqYEnQgvQFKYmWyzH",
  "key8": "1CaedcvWzqG5rPgu8BrUA8Z9zch4q39ZSiafeH6BdLAjsejK3r31UTnQTk4DjTGGXukP8Q5oXK7ZjR1BpeUonNW",
  "key9": "3gbC1wbyXQTGsywttX8u7R69FiZ72VZgRPiMBnS2kW2ZLVbJYjBYh5RrFaaa96zSnrKX5o8DpAcHbLf7hJB8hBup",
  "key10": "21JErsPWznZWUrsfuL6K5BWy6bLgxtycBZwKefBQFMRnaFEfthruZVvbtCNxPtBgFHTD885FPeJkER5Sxg5fXAeH",
  "key11": "2NJx6jnEbhEbTCTMLvVuhMA4QDkwTDZN7kQ3qzsiYT7XYUTB3MWteYTEX87YbdEXiHe6oxYprvEM5F4iwRM5vSHg",
  "key12": "3YnGrmnmPzDr1bJn6hEWVD8Mk1cp7WxR2ZneF9jhojux7HUNytR8JcgRxvihHBXrPTLJGLU6HaRpgVomjXAdx8Uh",
  "key13": "3vNB2Gh1HPgB38ARaAQ9At3hNVYfcbJEBic5BirtEUwfK5vhG67WCdsSCZtTxFMm5U7vdH9gzZEgUgBkQNnscLRL",
  "key14": "4tqe2cjHzaog6EdqBv3wFAEq5xQKXsHTnihESnW2HmGQVoyRnehoKgFTu3hppaaqkTydQR2KUMVEbeCJHAo7TYEB",
  "key15": "5eXLKBcDzZUJPNuVQf2Jbw9qT35m346shNYpibz7gchtxQeDicbcyHw694839L2guabSEJe9qiGYzcGKVkk37mBC",
  "key16": "5VKRwByNn3YpW5nFEMaxdcAXA5BVQoAhRPsgaYBnEuPyVrTzNug4EK3YLVAApofpqVMEaTbtZNe5w8YkEC29hxPH",
  "key17": "YCd7onYad4MofuRwErJtDkCSCfPsWrbMfXz1wipkSbnPi6GqLLyto3rr4YXN459ZDGvyCxvuDWytSJJwMUHufbu",
  "key18": "4N6Z83aaNs8AdduYBmMVrFzsJEv6CUUxUkmA2MYqiwLE5JhV98fF18eqaRTvFGWrVHqvFMS3E8yis9ySxT1ZjFfw",
  "key19": "2pSbVNyPSrrPGrYzzisoRNWFPZZNdv9ScH7NGBww2qmBHVZgSNu5ByPM9SN3y4f8hVw4PLhdBAyWKDY5Rj3fTZjx",
  "key20": "31tWbNw4hh3ubxyVoi1ABGRTnVxFoR4mWdiE2FZEwistfYR1ufzk3WUXYQYTRfS9teFkET1K2nhhkYLEAtpyt1rc",
  "key21": "SkyHCziEXmQnFvzZdx2qiSQQeNioRXoJyJa1K9RE7qJ2ua6r4NhVnPmgZV9oE9iC5XoaeacU47E1bwpTNkZLcW3",
  "key22": "4RDHqBKTFiuh3jeq5n1cRtXLb6ZkdY8z2pN3e7dAhCNYfCq7KTi2GPJNEBa8PGhr7nnxevi37oAvFzfZFNCbbtxH",
  "key23": "3jTaeJ8tWWeh718Uw6Dc1uLkizZLs11t4x7mHAtqUXeQJsvcNCQnwhGXqQjwN8AeW3TVTnjz4ocqkDEPLZH34qkS",
  "key24": "ytUxJgRZ6VSkdKaFzQ3f2jRhj2KGT89ST7V7noAsEDtF9HUL8Gxto9r16ztTASi1mCF5VALQm92LSH2CAMkESnq",
  "key25": "2YP8TEDzr6JiNxbfALP6Lew5kfFdQnKdGSnbgs9UHF1FiP9j3F6P16qZiawkihMZrsiUVigUouz2aN6k52Y2MaN6",
  "key26": "393TP5W2xTURcxnUR78NjpukQbJGLEthUaKVzFJHhicGk5y2ix3vuvSoU6BbVEugpxBYNCmNX5SAj1JxPxYaASNq",
  "key27": "35DuVbXTRs1PVhUc1DpHGDXYMmkEkMPmfbA3GcC1TiPJr8EiJTtXktm9GN1RfZ8mCo1ECwqa5wvMoQTBqHoKTP2P",
  "key28": "5iT7fN1czYGbr83iL7gYY8fKNJZaTzgea1kJt9a1bCurmgecZ89SWVv4A4goQHQksVphGvwaRzitzoytnJ16W7jg",
  "key29": "2FvmfQkRgVkpLJGzrz6UrNMPgnkWTiWyC3rg65o5yyKW5bBRiDjaAYGphB3fMs1aGs5X4sXWUY6r1JrW7B7dpxgZ",
  "key30": "64rzXNp7pirHW6vdTGQ1MHC6YtNBWUvQoa6ZtAYViU4WSBhDYtS7udMoGNFBcf12ut5go8MsHXDzGtdMVfdZC8WK",
  "key31": "eug929m1rRFvmusar5kZtXzsUUDooDDMZXkgyzrgWAzhbQo4V3ZqeQqTThhB6MckXX5SvyByz4yBJLuibc6viGx",
  "key32": "3buVAtCGTN4oGKHf73dpTLvUdBamMLHyUJ2wTd49E632VoXkY5SwNoq8ddDSNo5eR35eop96n2z88fsmSXK1h1VA",
  "key33": "fPMzK7TBGWHi77BY1AhHRAZUs5B3dFjJK9nir3YenjU97cy1ZBwK554p7VsxAiHRaruyQnBHRP1ok8rdNfXXet3",
  "key34": "PcoXkMJEMWFdmZF837ixCyTjE2t82Bec3ShV2FMq1v2boBJEKqTmZRFCBHT6QxbELwMBFwL1pHArNCSLBVndYnV",
  "key35": "5MD2GUCmQX45r4e3S1UutLV74wYnwVgRrY94U4XVaRZyiYh7dCpHxuBdpx7L6szK8zm5tboUQaq2E4Gprt5axaFh"
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
