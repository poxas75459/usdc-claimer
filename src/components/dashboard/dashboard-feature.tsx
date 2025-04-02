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
    "29fwtoPgLcWwJeksLfU3J58N7MWRLwQVaYB7VhYMA77LccLLXVqvhrK8Dq9onhyEukvxiU1i8ShJrqRz4UjfHhzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAYn9WUtVcwDesYcehRDY8QzyYH72ZhHQ5cWKya9wWYxhMzNsPFDwHdZ4sxGBEJ2SR9wBhm24SZnxDrKXpNVWpu",
  "key1": "2ZVhVcXLtXr1hdXm5Z3uKd1VafuAmSW5T86cTqsMVtMta4SjyxaGh7AUbevJQQr1JogAc5qrvX1L4w1XPFBHHQHP",
  "key2": "4frPFWcnwA9AUGUYZkHWmpJBymtf5pzgR5x32eZ9tSrPcibW7WZqH4xsLRVgS9SuvopwhsbV9xhaWpCCoQqF7zwQ",
  "key3": "6JkngcPzqMqPvumdfMLa6WdEo4YjAsL4odRBoxubUjw5dVDaqn8u54tfvWq2Hk8NQWMGFzbEbZjULcdcpHSK1GK",
  "key4": "4EkZgtz7TJVqEpuJ5tNugnTmmvUm6YD3a9JEoX8h43w9r1XHFAn4WHzfUq8baswgf9up3d1Q5cLd4CrR26uzBqDN",
  "key5": "fE9wkpmo8StRuVEkK6cdyLPZWxMjXDiRBWESRDuHf5rzUmGuPuB2DZM1nx8s2LJiGGUseGCkV3S83JqsWaLMjre",
  "key6": "2hBmBopFUt63bTMXM42FHmhMQRnTmVRZRZqCCZdg2KxZtgVjLeoP9GLefAczdMMQWmz3BaujbQL2SPUeyyrVugs3",
  "key7": "5hwvvZT58Y77Z2nBxobYGj8snhUkhn9y3F65wa4r7SwiaLbVkxEKbquZkmHztaTH393GJfQL9yq6AJ9N8SKtPiF9",
  "key8": "5tr4kswGNe474agq3GjdAoJYKHtHfjA1gTYcBYNSpuwdBBpM8JtYRi9iQZEtJ8yzr3jRcR12WXJuuGoJfW1FnsWh",
  "key9": "xneMWAJ7hnRUCdHcN2cpzox71MTCp7PunhX4keFaL2V8RswHZsaQCwHY7v12BspibZLk9hHmCcWyuu9PT2RvqVQ",
  "key10": "2GPJgQtCzpi1iymgxEWcrV9u7PfPM57jtaqwubV6yYN8sfjG1X3b4ucXWKyfodSTEiTdB8ZYokUN39WJd76JZS2K",
  "key11": "HFQLU7P2is4UF1QNgVtMLSEua8FJckGGSi553UxiMpzz7C74wpBqX3YLCMoGodeP2EBgg8LRgacp4kAVxJ4iMb9",
  "key12": "5DfrhK8C6KSx5BFT1n4HP9yGheePACSYwLDjuNiYvBgs1zJWmDYC7GVN7T2sBcvHjXX1H9NXJjmWRcMH8tW22zmW",
  "key13": "3q1LvqgpvbPYGESAUc5ce5h3kiWADidrDELxMMePhau67kpE8sXFdMgwotam5YsenygcEbaVCnLV6vyRqn8TRGHa",
  "key14": "21ABqxHeySjBkBLe82BYendjs8NaWEdhorGEPeQbmEyXXPmc4USqCDCMaUKUu57Zd7C3WHfm6sPozHJUm4STxqKp",
  "key15": "2pNPdDSwcSLmqpE47yBYBL9BjbiaDj5ATyDeUnCBvQWiJwN8QHzXEBDJBvkCmGT1EE3UyijmtAAy3vJtVaAhXCTA",
  "key16": "4m7jvVvaDMw9StqCejJPjZYcwtA437Ci6pb9T2yJpCtoRuxM8J14kPiStnQxV2p7J3UfStqgQoRovLHPEvxN1dY5",
  "key17": "4re8WquiFFvwNekvpwfmtSKbKHp5Jav2e5X7wevn5gxoWBSbAiLiQeDW2Xe9LCoV5WFSkybFHcfN5MH4cP6j34Jg",
  "key18": "5JgmDGewa9x1TVWzkWSJ6jWGPXkY6YbsgBYpc7BHyT4HEaiCKdfLJoZzj4VG7m3tpy6R3ckaLd2wRvnfy2anL3w5",
  "key19": "4qe1RU4zm7Zf1KZucBhCHMwuy29TVJYY1WxPNCmhxYnxPptxTMc4FXsWz61ABFYE3na5r5YiNnfrLrUL9GJgN5PM",
  "key20": "34rdLAAtnmCLTrNCtx8wAFcz7MbAvztcjfJEpLXGbEuz7LfCpYWnQc38jc4r8ETN1mmj1uiCMfZQPv16nm3wWcQz",
  "key21": "34AB7jDJSmYMJL7Qjgcp2E4rX91goSTuqmTsCcVU9U8AudfA2DJzsG7tFEwmSzUX7uBVeiMMtraiXEqAdGVSi8y8",
  "key22": "rC9DeTGiqmVYRG2ACmUsB6PSjLgXt9yMJdvjVyLC4fJUwRB6tGcTd76n4yahy7F9oZVTXG6Yatpe1CsYaxqNbdQ",
  "key23": "SwqE6eer2UG7rLAEtwzGrkUWG6p9N7R9G1xa3SuaAhAkZ6jqwY1tPn6396etGbEb6XVni7gnHXqkMUEu8aySXPh",
  "key24": "5ECy52wCJE6HQ3UCw4pRzZQJTNdczvexrjskN7UyaLMdLLXp966roLJt4PtHDjqN4wrcDJPWeEB56MqTAtVhQ7hu"
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
