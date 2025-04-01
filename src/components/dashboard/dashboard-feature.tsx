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
    "2HTyUyxmAma74X1JvdkzMk4i9iv4DzpAFJGRjBezn2XHLqzSw3hkioLRXAbB477v1rjUhAaS3EgXRyHJyzchzhiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSvJ64KgmDPdfApBf6M99nsWfebpWT6YU31WXaMPypSPrDjHq7QEw6fHBG1bo25D7wEUMw1xrmJSRjeMJKuZZMY",
  "key1": "3JTS7Zv7yTdAiweuzZhsQVt49WAxjFcUMWaN9P5pgLVVqUbVxHJQQnK8G3YYbUiVWXf8HqT9C8eV19zUU2xN3DJa",
  "key2": "5YexPMMBsYD7UtDhbUFVuaiTdfiyGVG4qsG6RMu2yf7BPy41HndSoS7AWViQM2VinAssMXtE6qZq92HsGvSfjsQt",
  "key3": "2oECAsBFbcTdX36CXSQBuC6HbLCCgRdLoUkicz3M95BunNkA11qvrPgGEU4x9U2vYnLVkJU6RS81MbrKYGDLkKKZ",
  "key4": "RnYZKWQxGxbxDhJQeCPeLGrTSSrFAL61eCFt9oamgLoyrqxExWSgkZYJsLFN3A6nkctUb4Ne8qEYQCrCQvPepPc",
  "key5": "2Ws4EtFHVVtwua4dNHR1pmSyjqxDbz7AKsArA2LnVptPKCVPt4r1fxFxFS3Xwh16S35cpEQb9PYxME8F5R7WjFSw",
  "key6": "4owzLiLzbGgDuz2hcVGUHGps6TbZPrGZx5uhRp1BKxmkYGyDtdeq97SgpfMx93ykzk9dDWSsyGtuwGNS4pdddg2z",
  "key7": "2Rz7pDbSmavE6tNqBtRoVvFVBBk9PeM8tEf8GStu4GG8zutGCuH58VN3yzLpkhvZ5pnuhBrB1ME81fQH97bHUmcQ",
  "key8": "21KYkp3SZ4oZVwq3WHrSUJMbTzFtbA4hYdudu8m47KHhtP1AgpjGB3WgQRwuxzD6nM9H1PF7hhfteaHtFhfbAPjL",
  "key9": "4vZVMQ6uH4yWFxqiPcXr6RH5qmBaVkhcYGXF97MMd1zyUE37bxxTsiBEqiL3p1AsJw4DNeqp32Js96GLU5NQu3sE",
  "key10": "2QEAZqngXw86ecG65cYsS1nXpjnDEbpqgsjq7FRkZUfizk13WvjkwcXZuVdSwxgeCm85eEWicREmG5HFoZ6ygcvU",
  "key11": "3EWwdfTyHgEPdG8cMSsrsAbyqTyLGvPrmZD97dQXZfcU4GWo4N718amWVsrZJBVHG91n3kZeycPNxXhzAs4y1gdx",
  "key12": "2Tn3Esen7f5CPtPvDhzFptqj6WdeySt28Y5WXmQZ5VWYWwT2rSni2YXDpdweWUuVQFw16ZtZpZ4DxTK87tWQB2EH",
  "key13": "XmhSeuiKv78vq9u5AWi3B4yNu2sYRhmZGj44aJQtb8vgXvE3zSCt5BL9cjB2i5QuqT6NmkKaN4hk18a8Zq9zUhk",
  "key14": "5CvKZxLxxRB1tiaFFv8fp4vwZ7UXyPLucPxbySMFf3XcWmEHNhEgD79f7HHgng1NAWRqtB6DnPwaTnWXUPAgiCd4",
  "key15": "3QD3JnAhCeWc64gLLKv4M1an1pCB1PEC3EHysTY2hFLGfYPvJcB5qXmXLWwQD27heaoAxvXuE4z8xb83J4wGNr16",
  "key16": "3SKihnREfS6A6X3ktwq2agpf5yQnAoCRe9MVaS7ivpz4UxFhQyRnxeobkAgLnYRDGhDNHBitwva4aXdYc4GY3R3F",
  "key17": "3upjHB1m3Wn9AWeP76CtRS4RknCQSfL9qi7RH4aRKdLihcEGFReD4x5YqW8rDJ21iSb9Fbk3YKNMmHu8QcCMzkaM",
  "key18": "38d8xo2poubbXx6t9VUA39tu2yoRtpVC72qZwXjUTFdvkQuBRyzDMHyMvyQPWa1nQTMLzDMrDUHxbqpbFH3xLFLU",
  "key19": "2dVoCfZKpR1GWPuXSft84yH88g4nHbF6WLxCCqeM57gTagucaiJczDD9FHHJB96SLAjfSASa5Jm8XdpH18kWweet",
  "key20": "4ek8yMcHFhL7YdECBFGqtJLqEPLHuD3xV7R3UcwUdRBBkTYFnzWZLrAuFGX3cgsFwp2h3zJ33Hz4HShdDyLQVzTL",
  "key21": "4WvY9yk4NdGxtguPV7YfNBuYcAh1AuJjUEYpTLk6Y2SCyDxXR5AY46bAYEzKdFi9dKiLtZE1rcVNsi8QexgXp1QK",
  "key22": "Q4s4QN8j5kGy5DLeoPAiexQ4U44eiKB6FWRsiLuyGLrfFRD2rKUy13dMqyWj61vz51Fvmsu9DoqeWQje7meCXXb",
  "key23": "63uK31MxaKLwbVWEov1kwhASUp83GZvTCrZL3muXRwdY2eR6kr5vB2LYZXMddWwrVDf5d2ZKVS4zjECQ3YBGX1WE",
  "key24": "4DfH1S6ke6hZe927HvAe5MLBLY14xjPiMhTQwniAJZxMbjxax4s7zFmA6juP9jrKk6gnT9QKctZPkVcTaB31F1hu",
  "key25": "5EqutSP2oG4uE1gqqJ7auorUFTMdMWrnVkrvjHvgPNF1KndqLN9oJPxNFwR4tBwMoVc3BMuFE1HKPHded5zHxgN3",
  "key26": "q25PhzQtdTDpviAfug9h1ib64ckKDH9JCsE4b9szSwGvfR4jXoMrEnAKrMRTTr3brW59xyKXZDAKCCYCkBxHyKs"
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
