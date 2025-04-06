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
    "4txhwwJUde4V8qbp5g3EZf3BD1Wf59n7uiZPTG4r4HNoow9jq8dMrNfHbabTZBXrdrWVH3BQ2knnh7CUkg7Jqm54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUHb8aDmDCF3QHR1ENtQvHLdEci4zvwWBedvJKrfJ2tekg5NhiWPGS8jKzaJqfmnwnkt51VtC1zpQXbS63wdPNs",
  "key1": "PL3Q9gjEQh49ogrHAB4zv8zDdRxeWs1gaZRvxCdZP8MPsJsV2x1fpJXLJSZYde7fqgpwxiXnWTs7z9dnnVyZhs4",
  "key2": "3S9QNE2ijcneKaRpM3aBFZFcgWVEytXsCAqxz6EYxUyqCDJ1KbBQAJjUxzkRwS3X5dbtztDK7ysNzoSQwSMdxQqj",
  "key3": "5bRX1bF6ijvSDKgKmfgYwErf2zyEziDFT8PA2PMmQ5nYyJbtgHguedYSPKqXQ3mATzvH4xGmbXKMoLvdUsJGzNF7",
  "key4": "3RVd2GHbecrSnZto44RMkuFPmww74zYiQMTD9aygMptd5v5bTJ4T6mG4x1d3DKaFdnHVtvoqRixv67Zf93NHj31a",
  "key5": "4873zX9MZhphs2PfDznptbLTy9EFgh8NU64b2jPrT2Gh6jEpKRWwrzJpLZgtGME3VLKDW7hWchcseUVMrn6Wn77i",
  "key6": "4K9qTXjtZSPZKvAFyxgYsJWeYYcBv76sJRX7XS2draGCQsSG6mJEZHn9Dww3seJbHD5PASB2APj2yHBmRgBTD7og",
  "key7": "4NhgBKYF6pRqTmwS95jZDCcqqGcqg72t5FSCnpGNSNDuHpeRMHD13HAVTMg5ZvtRrWZfgFkRCy8h4YKpZjw9YJkM",
  "key8": "2yVLkdowin8YBSjsUB62wj88QF6weURB6HXa131JnNTFdD8Z19LD4tjjV9KREpt4Q25qKRUMvAA2NYmZhtm2gomZ",
  "key9": "3Dh9djV9FtupzthF8wmoZGyNB5zKhuF9Tt3gzEPTrdnXGPb5aWEf8kN2nZDXuf8zMjaBAJBXEn58Ho7pvqBcRdwr",
  "key10": "3rNxjiNA452vaY1tCuMu6qz1Keqfe91JJNWLUbWHKEz5UVSqtSfkuKJSPoBrXGdoFLQZxKpiR5oK557VZz4Zf1ZB",
  "key11": "3UvKA343AnxEm4nRLGu2o8WqQBbjFVfgfHidcVzAFRGfdPtGTNhMfQeN8XDXx8BHJdo77FzBL6wKKBcGqDL3mwtP",
  "key12": "5zi85dUwfTg4na8wY4CeF1HF8QaAyEMnRn8hgozoPdoV7D9CuezBAQAoZbxqrT1Hz9NUypfp6mzUwA6ht6koz8ap",
  "key13": "3zP32cWm5NNs9LKxGYrcrJf1SWAvngFMxoMmXFK5SSvpg7YvvAPycRZdBwmWojmRiYbWeQNUyvkrhpbFheZEkWF5",
  "key14": "5U5GgrWjz9anjbayEG1obVUoATvu28aJJQdEga5kgRZdxkvr3V9mBBhBWpwvCf7dTG3Dop3DFhvWFRNUsbJ6byaC",
  "key15": "4w9RqQ3k2Ah5THUUiZMVMQbEjjuw9eNNz7bc2xdwQhBoaSRVbF3CEe1AjYNffHsjJo4ZUEEZ79kgcrfQPJPSSzjh",
  "key16": "4tDmgNz3wykCniVcfUCH3JPu7sAfpz5aag8ooBQNePvxVPozruZWNqb2sxn14bzwRQJb5j61h7ecQYwTuXu6swvP",
  "key17": "2Jf51SWuRENXHzo41vxEyfxCVN3gU3j9YGUkTs6beRyvdYJ8BfnD9Ew8XYzRJrhHbrcphBgpqKAfJ8oqPBzZeE4x",
  "key18": "4YzLtpuECf6otCQ2MbfM973PRAoii5HENAhu5g2B6g2zYK4newYZ19NKPvUaYF42JhENioKq7oChdG71f79abuxq",
  "key19": "77oTm9iGPWSkCgb8qdpvaJgY319kdX6Guo1Ryhbx86HtqiSB4zzeh6UPXcv8cR6vAkSkv3JDJNKU2ADoMcNF1uF",
  "key20": "5bTUUpoGzvBvTYbBEK7D8JPQerS4S3ZSk3Ve3EHsASamfwb2VQTBCcH8m7W1mhUwxd96Z4X5FXJa7dFYdtBMTorL",
  "key21": "4u7PUijZkQcHKKVKr8PFqZVtMHAU9mKZDCrzXcv6ArvUx6qzc3MAvK792bYksu61ja88M11yDdDGoYFMJ8nM9tFZ",
  "key22": "2e9BfHQhiGB7aXrrHS9ZptjqviusyjTrHPcFqGCvQ8B2ENdBFG8YWp5PFg6ANj3UeFAyREnrX9JVtNZ4Rymupmwr",
  "key23": "396cCp71HBKUWUsih4BqwfBgPyd53L2wpmNApKi1dVLE9hLirju15La5jvwmypfeo75RwjPiMqgdCJjpGEfJQdxd",
  "key24": "5RjhGJhX1daKW3yHaXY9kuBtvJwtuGpkSDGQZDiNn5RCExR5hkJmc7HeZby8qi3zEqp5Z7XQMkVZofUzvzphUEP9",
  "key25": "4DWFQpz3hk3f54ZX8XtxDGkXuUHnpqwJGr4WZTcbWWAQdtVf6sWYwSgbUPkTsrC7SrY2vLsXHMbAUgaoeVborUnt",
  "key26": "2DTUqQhs6yF4XMEMoHQm1TriKhAduvqhhXG4faNjV13GbhBjPC9nxUM5wezpNkrNkZ7m2QiSxwUHDmykYb5kZw3r",
  "key27": "JdoXuQDV3wy1N9JsKb5EKnwX2MhL1XPLZb5Gg1QC1bZ6nT237b5wwJ5CjQF2FcqaeJgycAB3o6ppHk1zUsNxq7p",
  "key28": "3M2xbotFwPr4fxqMRn9vnQ1E9zN12WorYkUUmjwSnowXaWZaafPQSsTDaSTYAb91dkbCyuP5oVsso3JcXESke8iM",
  "key29": "V7JeJcMDTp4NkWxxCg5nMi9TdktD86NnuB8E3qnXfsNgs9DiHQb5G2PQo3ZWw6y9HLK3hGBBXGxy7eMXUHhHBbo",
  "key30": "2xJxzNHigRxDDcwwBCGxBCFRn3rVbgYPjzf4kHEyr7jnucGfEzotECSLCiNwSifcKTS2nPfWDY6YTmg12qRJke3W",
  "key31": "ePANvMf1Lt7Fc51cS4Y4k1HVV2EXvSPacTECAGJjT7Crr6TLqoFpg3wFrkc1mVnkXFLphNtx6i1cwEmV5wr6Y7M",
  "key32": "4SF77je4gFhaW7QZqaQooRXqdiXX258s7zgP7QUhDRZF59p8RdGMM2wMdVc3xJvhZtscs4KsJ5pBWSyLVGHxSjxJ",
  "key33": "4vkJ54eJTtDS1qJqUK2wDWUsWWLvkk4GxLe2d2NxTCiYWTLCCvkKvkhbnni3iLNtWBBACn6V4mdhFqUUmbrt4G3q"
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
