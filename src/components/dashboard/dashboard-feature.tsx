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
    "FSAxWB3MTHBu27D65e8NTUv7RpFtUF7PEzRdjMLDFc5iMNX3AVR54DuMwWnhBR3AchpjCuUD5JzkjdKDrP6p6Lw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FrEqLzXz6KBxypiT5Du5Vxb29iDHWnEHvuWEogcLSSFdyCAyYataRwBBwg6ZADEF7g5jWYUKPjzhrF2pvkNGEpX",
  "key1": "2LUDFMyVqixuPSdcLRdrk3ZZttGqM93dXAxAvpbD9AKrKQTSMVp1LpxqkipLjiJzJQWQ51KkQkT2MxUFM2dcdQwo",
  "key2": "7Vpsc1LMoNuCnDB7DpwJsf9K5ciUXMHKqQfXEySf6ppR5N48xGR9r8zFpfT3eFh3vSPy1Yq3eDix4Myqm2qfBL9",
  "key3": "4qC8sQMs6gVKc1WpYqBWKKsjkmJWHdK91oPN9eUZWLfDzZTKvoBYDhWKgmUA4pzfqmzWfz9Qp81UpbSYZxGQyEfs",
  "key4": "3TBk7bsCqwxkqCGu5xY6JoxtnxyNRHavQKkVBgETArmVU1q3cSpRP5rW9CGQ5Rd4xfTTjevYMfv2QNBxM2oLi49a",
  "key5": "4YWCEHJcF779VrRriX89yXAMhkPgwnp5T7pFPGVCk5kWV5Gm97jZwAZHsza5SDPaSCmDoNDMfCGZBjpiADCFD94p",
  "key6": "58Y3wU18bWJRtfopRTLemBAbpReHpaZXaAXwmtp8AtdRDxAtywrBqiSVs9UdGEcKRXRr3bVckAchv4o7DazypDHW",
  "key7": "5fjAhpWz4363p5BcnPPy3hAwwfAoSM8YYvsZsV7AEVAUX1CFj9KtZft8VLbuwNQYJVFuX6PNKswBB7jmriGaQbXG",
  "key8": "5mpAQFwkzWnkgcfFe2vJjQe7nRAhYtZnrp7Ap2fQPxX9eN3gHEyX3zpZSrW3Lv8ZMF6NmWBaTymV3KCGrcJZhjxS",
  "key9": "yVBbSeVP3cSXh6AdA4YEakj1pbj9fJTYLVwwgsS1vhEuuHdMBQYxTTgcZkLvppkZWfsGXpxkqJ5UaUXy4zPfYS2",
  "key10": "4DeAXqVHiEgQ1caCa8mDxXnrbyf1gR3V7X9YMZzzQpJ5rLkDX2tGArjyMzADwCjYc1t7W1z4WzxbEyKejQacvouy",
  "key11": "3gS5RZvmzpgXzGZMtngF946rQc9jTDrzXsCBwg17f9AxFL4p3PayXaPMEe2Pt9cE6XmApWhUDSaQxhMUzq8eiiXb",
  "key12": "5gY2AVQ4gcFVWQPFYhGbbEmSR3U8tzkeKdnYdFmSGoWp5jkZfFSvotP5j9XLwFQSBw9vcR7MAm41DPv6UeLSQa8j",
  "key13": "4ktUqVRwuUBJzcTEdfa71dks8eYFVsUV5yUbN6vBZLYpNoagbcHntqNRsiGo1imXu89JhME4Sr6R5YpthWHYAbgh",
  "key14": "4zacrgTJhRWzzKyi2WpAw2ccRyyn7Cat4j3d69KaXHQ2AbSDiXWXUyejMaQt5KxjM3FbE3whAnarxGxuK1ivXG2x",
  "key15": "24K9kP4UCMo8GtBxD914qfELEsDWcWHGXR7nKh7E92oAQTaPqVpR1iQSauwxov5nYAuQkw7ZjwcYbGixoYd7s6Ee",
  "key16": "5WUV2JYCiy75eyR4PWQAtpKfo92d5g32XrFgAgU7NCaHr96L3iLh9t5KJngPcUEgJU8CK2bSKRWBRACuegUvjQ2j",
  "key17": "2ycF6vRrzQq1y5UoqFmZNoX95uUH3Uh4T6jJLrNNbvTskUqK8RE7VVENVWkdv2EVGsLFBqzhFPjhj5NonCsGYXy4",
  "key18": "qZhxwVg6oF2zVtgHwAZxQkEgPytRKSV23d88TT4yG2kkqPF2tWEzC4bEKgTTGMKTZSGYLRTrR4oUvC8s3ADzxwx",
  "key19": "45R73UGxqHXpas9iA5mSoPfGc3x8pK31pZmbMzgQALLhXCHuSqvpcZfnCo9Gv4tj5gU1obq7b3GPezTzT8eYpSfm",
  "key20": "PrH8SkGSf29borrKSLgWFuMWmScrYxZ5YUkY9ALZXAXFbFNj8R8kVNSJkYGnrxoKDfyHWQLAga8XMebw2X5Hhdi",
  "key21": "48bU3YpigrhmuJobo6ttWcMJUpQJnhFybDRQnWv48vo29bZL1DDwFSEPajygv8wec4CMM753AYrEpruQ3JdWmwpK",
  "key22": "2GAUF58TC44sau47vUVXyaiky2VmmkQKwpCUAg71DogabTRgWcCMjtSE2vb4cHmxr9gcBvMgihsXMEqUDtWJ9Ww",
  "key23": "FPvWT7eg2jMeZL8WQkSD8rxK6YUPomtQ1iGMcmjcD3BqPSpyjuBninGUcijMRPmSL6JoDK7NX5wTPMNAFP8EqGY",
  "key24": "43AxMPuWhs8WXkc9eBd97fonbfoHs4hYJpY5M5jbbnK7x4USQWvJRhAQuE9HuXwPhwZnhmWuNHmUZArhsC1unynW",
  "key25": "sGbDwjmT2eWasst474vkKxBq8iypDKkpjzrWJPgJ75JX3Qw64F8hPn1f5aSoTy2aGG8NJEE36BNbcKoZVw5pwUK",
  "key26": "3X3HH8H64x3FPrXEy2bZX74pr1myiCXn1S8drWyb4xumLZ12mAwffLDDMw9PNBW2eFjLjV3mvqcAfHCCJVgMnEnN",
  "key27": "3BHTAcAUEZ5zRqUKzrXcmaNmujdwn56w1viNCuvDQqHbUeqgyvEK3A7X7BSk9PNV2J18CENNR3XR1KaiS33p5dXt",
  "key28": "4spnZ6SW5KizniZn1sWLinuohQBR48E95FU5BVtfoqtMx6CXegjkPpvAmSWPPNVk7zPUuNGnfbdcBMsJUTcDXJja",
  "key29": "3tAztHGDtdNSXd6EadK8YsfaMdjgurtmqvG2RUkgSW33s4cxV9fH2BPQiXUTiQyFzXbmqcYahLMTKVmZzHMTQAh4",
  "key30": "41hGA4ADX5SREf8TywsVo5PrFAQAbRUUZSQsfD31nzKukXMB3e7XtavBY4fPdkmd44j1bv7KZB7MLfLyQeh8DacM",
  "key31": "2yopnTWqCYptjjwjDEcLEsQgamG7uhdkdzWiXMLTt2uDKwP1JAo74m2XCfTCcdMgSifFge2DpMVT7oE9xHSpv4ss",
  "key32": "iHWJtxrY1XQrdCVspf6pRojXtqfWTHUMRoMq6cKVxCHvDmgnxDtJtm9n6YKSuqTJyuWwSB34mszufYQHukucRvy",
  "key33": "5ZaNwfsgPyvXyj344dMM9m8zqYe9cmP7dhv2QokjTgPNXMqFHUX6PBYX9CtvKfsFNuyLyWv1etEcmZhubnkqmgNZ",
  "key34": "3Bm2F2hxYfSu1exywZgdiZnSr5DiLxrncVA4s94si7yjepKQsqVXGJpck8bh6a4p2JPv9rZkWkjTieaMDDXY76tQ",
  "key35": "2S4vSd59PaUU4wArSkcCBpDDXbLGq8UbKvDeHUhGTbeL5vPdJpMDkS7WwdP6XDY9ey1pydVj1PzFNP9XsBWSif6X",
  "key36": "2L9k1soURPcJaKL8KEcZtV5g71Zr4VWqAArkQK1XncCWvMPifZqn6NAvWnJDprweDUwCScVZEXTqSBf7bDepX9Su",
  "key37": "5YkGQf9ihhkRTNyEn4zaftXeoMwrCLzSszFGwgJtsdY99zBu4pkgR6k63m7iAqSCRxbDPRrjJPyvGvhp9trPoHCF",
  "key38": "EL859hVgX38nrjKPYawu63qM4mF9gd4RmdEzuPAwNerTZmrLEHC6tc5a8xs4xtjxnspNFkgqfdHRyqCTpidaiT7",
  "key39": "4cT2vpbLGajGw4ER7XXSH4uTAa2vqnuY6DGMmVzzXkM5mecsRb6UGmmeTdfnvji6T4rHK1GMqyMVLJn2tiaA9XdH"
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
