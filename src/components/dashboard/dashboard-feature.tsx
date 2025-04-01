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
    "4B2pwtkxADnPqT9pFrTX7WdZyhqd1GFBzshdYaSYY8XNhXjscPFqb3n5FgSrm3mEBfBpFCJcuxUdUtwRKBHXwvqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fvgCcnbmyZ4G3y9Ur1N88xp7SoWo6YYfd6oq1mdD1NwgEiTzJMDUhGDtcyYFRyAesvMGbvPtsxAoRLq11wPJcL8",
  "key1": "zVcCQ47J1mp9pbE8QrsdczqMEzpB5iq2Q6sec6K9wgktfvJErCr6jQwhLEAKpjguBDsxtczrVEp73YVnakstbKU",
  "key2": "43o6yCJRqi58UJZ6uiJo86bqCqu5dmz3ZgmqspsozYzEfKXeRJmMHPoaiPoTUW3TPzW16mJarGz8Lq8GYRHTpowu",
  "key3": "3MkZB283nSEN8T8kdyPqJnosBfJaCahwgivnu7v8cWwVBfr4aqxpRNn2Z8SGVUbWXCug5TQGANYtq1zEFmxbyasJ",
  "key4": "4YHX7eGDihwYvTorzwfzHVsKzTUaJRCtADRH6mCwmPQm9FdTiKCj5QiPj1Lnvfd8JYvVb9HdLhtMrHq2Rb4iPiHx",
  "key5": "oDHnFdENBDtiGpwAUW8JqVMrHL72CavJrkUHy8odx1NdnQqkZx9S4TvRQfA735Vnc7PhhbtBA9iWQqstmUR4WML",
  "key6": "2CAFNWSJ8VekxC5VPUo99w9uGZH31bT4haWoYnyeR4Z3g6aNzRfaAHWEcWZy61B2mMeHhXRH6ct3v3o12AjTMvwb",
  "key7": "3nNSNih3Uk8k2jCQ7RnqQAP9gYdRMrudXEMR1MpVjYNcLvfQ1xACQCUnkxKozM67exthCZy5KcqxDHzL82bM8Az2",
  "key8": "v79ziVHKRvxUSJGKK1EQZ57oQfymJvNUo3ByzU6VN3woFNpr8p1f9mV63zSJqBzdjqgUyH9uHzXi2v8c3K9Q45J",
  "key9": "WUADHcm5r8pJCqfBSyLihadVa8k47JNpz64aezKLeSsPVb8Aikwacr9kfiVQsin6zAvDW1i4Fznhb47c5fVy982",
  "key10": "3oeQWrwNrCmjwwS3n4m4D3bfRuLryJiFX1Fb1A32H6TRcm5WWasUPwdNGcoXCes8rtcii7NqbEyeXzHNk3bFvBWi",
  "key11": "BQRpdZjhNUJ8xvergX58zrpS27bGQzvz85jjfjWanuxxnk5CxyLCmTsXvKqmvWUdKVokqM1gZo23xuqyQKym5Qc",
  "key12": "H9PdYCPoc1VTqG19HC6e6a6Lg7yeFwAatLo8FGTEBPcfU68qME1PQW2HSg4cqevr6p9qAUizBCBwEKiVbdTTj4x",
  "key13": "K6vmFQH4pMPtjf2uW1ekq3UVANwKQPvHn8Lt5g5gxXhRh3t3VEG1jmJ86ukqkZtfmrYfxun31w9pGcAbp3mU5de",
  "key14": "481kPPrLPUhco9fFomsxZ5uYgC3EgVmG5Ly3L7aa7S8cQRWKVE6r2nVzLV1UJ2LeJfPExQP9bbVUNBhqAWVYq5tF",
  "key15": "4Qd8C8EgyHsuYJbCJrjuBtQaL4qD9N76uPpQ6gXpznar3iH9wgKdbKtEaGuuxVGTsZA6XnbYNJVi6sHLMd91fX1x",
  "key16": "2GUAuRcuCv363vCKXkDQ5AK7xvb9AbLMbCAW1RHphMFR4YLbGv8CYYmLnXFBGJqrabBLAVKweJW2MiBnSHWH62cf",
  "key17": "rbhDgQu4yhD1PB7XnKrJ6KQA7qaCAE8MQ3xLkLydrg424DfvAd4dPmkoccJVd9fnhX236fWJnT9LJ2f9sPiu5x9",
  "key18": "3QV7NdFu2Kgd5CKbUur4geQPCfnujpjFVmgNktmf2A9DpsnQT6t6ygCZNSFQYnMDmEi6invZw2t7B5tNtUHs3QFC",
  "key19": "4FTDX7hPWchTAAryfsza2Qd6w8V3aJRaoU6yVUJ3DcUuJmFhX1hygCDWMYVeV5uKKkzQWGWm646q1aSmevkQ4B6E",
  "key20": "3CRV4zR6EVQvexf67qqQPUv3cLQ6GbaP7MvJxyKdyJhGuGFPPkQb5rWYmHqhcVnJMjSeGgy7Zpr9mu5Z6KD23kJQ",
  "key21": "3yXS98QQgCsipuTmKURccE914JNwMcgoZoYoKs3EDp94kUh76he37oDJAqrtNwSMJ4dJiy4g9rvCRL8gVKJhBygS",
  "key22": "27bBskvqZVvnAcQ8heTSZ462Dexubg4hXBtwd1Bj5Nn6VGhRkBgV516JGsbpEUN1K7NCSodZnxCvLNYUJet42Keg",
  "key23": "38wsenstcU4cJZJQkHopHZ6hmibaKsvgYRRyojUyhjXbRHkkw11NELppTvMECDNvV3EGSPdT49qfoo6dZvm5mzrG",
  "key24": "7gvNGjDNS2maB1fPTukCRC7Y2yuefgVcAEebQ34Mn5gEXDitEXjYePrftAGhPLKZUxZqN2dFeKsvP5RdkNcYrEr"
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
