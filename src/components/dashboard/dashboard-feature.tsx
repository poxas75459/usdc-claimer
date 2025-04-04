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
    "3yWGJ4G9UQBXe9ZHaHivkBD6yM1NdYHW2EAdUUVjbapcuJFkoKxiD2cLBorEuqbiPirzxLLBPNN3xH5oBABV4ewg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XCdns7aHT3L1rmMsCS3WFhs44JnKw9g7vjq1fNUFW98xGURPWkQaov7aQYbkQxmYfZStL5wqpphTeYjQnGdm1Bt",
  "key1": "ykDmA8oh2c5nQxaC4HXQeVcNjAYNPcVK7jYjeiqFaPGVvrgg8MpoRDoAeXY5A4g1Z8EvCBCvWJR4DJ9uUehUcyU",
  "key2": "4JskFEsyhCtX2P46arFGmrGpuaYMFTe9WLRt7sbVMUrdnL2K5JbCJCmEb4Ru5nHERtkJSfErp1bXBFLko27DfZyM",
  "key3": "3oTNZ9CBSn7Fw4zPRSz8DX5cfoKbLUK2aiDH8v3TettKeysyhwTMqoxCWAkYfkCDQFdFriv6Lph4fYwkgWVo8sZN",
  "key4": "2u9fxDUUbPzJ1y7uN2N11KP4Kayzf3EDYChiFaCcF2GqRK1KBfrNJcQpYtNvTwY2dNXCb9bzCftn4dQWyAs1Zpbi",
  "key5": "4n6u1VRLqD1vQJ5soyjG1GQtTAE92fVhsGxfnGAcg8dR1LvjFGLgmXMkzTrHRcVKNtF5ChMMUajwah7ndUAW5auX",
  "key6": "3BFzRPwiyN6LUdNqeb6f5EiLpg6yRNdZqMtkpwhgatbKSYCykadN13v8ibpyV3tmFFWCFjE8Fat93aPfJdsoRS6N",
  "key7": "2YBNZfj46TdkgsvozX9AC3fxmccQoAF5W63iqLRZeBvNLaEEJDHasrqRABh8Dx7DE5kACroN5Bocf7RND3WnygsJ",
  "key8": "37NCq8wCemFYW8jYHgv2VJn53CyMfWjX3FkGBQPPzSMK7zy9V9Q2NYyfDhBBsFrmHMzw6wErmBFhntp8wxXQVdc",
  "key9": "5CPJPNsqWjzfjwCYLvXGKSMQnBqcpqNbd2Bs8QFRTDyxAN5W6vMsCTEvvLMHcbvoBou84kQTczYCQoGNRm6YhGZ1",
  "key10": "5DEsMrKqCrZjnFDiLUjrMaym5GDJqakLdF5x1HRMMDiW6frbkNUHoFZXptHGC2T1ZcaSVcyF7XGDRfaMRhXgx2hG",
  "key11": "2yNRoURZJxTPtvNCtTpcUNSUUZ3cHzzdv2VttrPMvCYdUrvNCJ2qHLJn2bU5TFMqkiJQ3a2SPrA3D6mpyeXh5ghi",
  "key12": "35FwksR4ACgCzBkcxovZT3YWQbaoAsexqrtWgNSLRDHSAEiQ12pMh9peLvkF89tR2qXzbrwJHQPRjX1Mmt7zn8XL",
  "key13": "33s4SYRT8qiFAHFBmtUcoYz4eJN2r3qcbyzL4A7aquTUVVMAbeTfpVP1DjuqgXga8rTJZFhKkwGHjfLstk6ziogp",
  "key14": "xm5DuhDfpq6NB3xqEC31BUs5L5vueyAeZgzuwN3asCfhZDudmhFTjiy3RQWc8HHAdecopy1J6swRatw2xnkcSWS",
  "key15": "2SykURt4sgNSkngo1dW9ws5Ed7jmhorVQz4mHpktsHAwumWNUrGgJ2hBNPeGtc2gfrtYSiTuVGFkVGx3qb3AH7me",
  "key16": "4HBEUaANhnAkE4gLSurEe47mDaJgg1jBTrySF4LPVix7Rh84mPcU9eDKPRGG75H3oKK7iSeLy4S1uFx59bQzRWTX",
  "key17": "57mwUEBenkwN16LNbaiodK596fRQ4DsbT3q4dgWDiFguDPnx5p82qf23DdWQCRWvi1HHQoMT9Ro4jcVbyhMycabi",
  "key18": "5e1gfogCbL9utSmmZCrvfMagh5kJMTQ7Qemudj4aehDwu2WNiU6Jsw8tA72wcpZGdKX5Z3sZtmm2ynwHQ5EsTvFk",
  "key19": "5RsgWGHGcJu67537jYCDe1BUnQycXk54pYx1i9a539RULkvYNXtx9qCvygSDogjfTHrWxNLuUMoGh8Lm3vFCQ2yx",
  "key20": "5hHihqKMM9BurjvLQrHYUZa7jJjzMBr5ouYMBqjVvLzht8EmZ9E8reAk9ifmDyj4MAALmpz5xQb2kndMmTt9JkkT",
  "key21": "kHVP3t3Sm1fmumK6zMdWC47KeG8NbWjYUy52K2m93Yw4naRtYrxn7aEB5uQvGZZuEy9XTdBZYdoBtM8TZFxVTbb",
  "key22": "5KYQwPpdeQPTESQzozfsFHsqpXhjxhqoAcQoaFBMNWEaPGFdBWwba1ZrNYGTu7S5pCYfMUXCZDEKAipMuUsV6yrG",
  "key23": "3zPFPM99yJfqBWTTZzPqbQGfu5hjxYJyjR8L8PAZNu1U86Z5oo5ujJgrRTvDYzLFGi1swoRM5Pqn3FC74E6uDFsc",
  "key24": "5qj2kjtmFjeyy1okJ8CjzrstDwnWsbii7vcR4CfP8tdmdjvqCrjZHn1ACYMi2xefj23721SzDchjf4LAgh7675oP",
  "key25": "2MS6kcQrfopTdsJXGQ5EpfH4M3s5BfxV16NvUNhctvyzxc6DzsM1ZcTABFWKYF6oj79QnTSuvSBxFSngM8vZwSPZ",
  "key26": "PT2FPhDVMJQi5p8bTANLdxRCXKdAjgrp8rnPqbNbM36VFzf71FcC6n9BSd5YsddavPYq8y5Rp2LWM9k3pT4oRhE",
  "key27": "4hdeBtLcvJWFbtJmWvVqB1KtfsoQsjQ3hgyANmK4XrxQ458PAmuvrCPg5BxfFXuH5w57YnewY9y2zCkxBYXj6euB",
  "key28": "65UTfopxxeEkkZC4FxkeAPCHyypLtuHZfAz6kJ6sy6yi8ZsbeUyTssz6ccQHWsbmMjHG2wfDk3cLcXgDAxE7QGYR",
  "key29": "5p2sUoq3uQCnYLj37VtdjevoP2EH1w47CMvYtehLBRSmwutHVuPQSutUgvvF7PYXo296qgVDNzz3iKKqbXexAhm3",
  "key30": "5suPBfdtRMYbcuXhhguanXBY2iMcVRfwxucerXeDkMSq4YgZH8aSyh1wBviiRc9ATCfQgw9ts1276xwLZfFeYeJp",
  "key31": "3JvAQJ5XyC6ruyuqGir5wfqETVdruij84pk8pHUYJ7dgYwgSDvAR9TfTXjUMm5e1hU8nug4Q7F6McCv2dDFr5UnC",
  "key32": "KASoK76e1DnmmHuD5WYy8sLZKCzWK4BpEvzoez3R3KQnMVAZyrcv91DNxCP5srTMKHwGLvhMwNbn59YLG6ZoVG7",
  "key33": "4aSUKxovTFJwKsXUXasERAzQXENmotYGLQ9uCiV1scCdnMqW4HFJUbwyCpjnfdFx2BLJdyTH72exMk3ke5Ybf75L",
  "key34": "2GVrSbHJCT4F42cQhcGT1fPvTBWLHLdNcmeN4iCxYaL7LYBarPfqUkGtXnTK6BWFK2D3m6rrNNz7mWBhKC7QXqrG",
  "key35": "si8AXY742HGDmo1uGNjKJSFgpNt4Ah8vuX1L82WvrZUNwRDgKJXHW8DzQMTrAh8KRjQomaUkzeFFppPqP5QsdgF",
  "key36": "2XkEYvxpk3zSNi8epj4qTwMGajFEmrYm5jfLDZDEgWZaTnTniwo4U2c7HDibyi73PCqAmqCTEd7CfdSK3PXT6zMJ",
  "key37": "4Tj3X1uT1sfa2c1jWsQ9L2huSsGhpU8NmwP5CvGUcK2zBYenU4UTW6UiSPbfZoHq2ZiwAKHveib1xmkcnpHN6PqY"
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
