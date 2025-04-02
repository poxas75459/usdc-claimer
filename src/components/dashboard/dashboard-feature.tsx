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
    "29THaTCJwFpJZW88Wy7YcHmyEPZ59ESYwkoyBpA8jTX9C9rAoxELAHfKQJh9UsEcx86wxBMdHoYiyWXvzf7v2uDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7W1muwbmFTw3pGp1nuPQWQGJuezpD9Ar7cjKVnLQYvxqTC4G4Xg6E7WbQ6H4ukUCsSbsRhc3gpfpKp8QDVsrLy",
  "key1": "C8vD4W16gqdUA19wd4d2MDZLFQ5ws4KkmcsRnzPaSHksvy6dGs6b1CV1xBrWthiftFV6m24rh8K7NuVucqsxcgK",
  "key2": "2vJv6H1qQKgMVgssTSMszUU11MibujeqhMnra9vhSQuG9LGFYN61V9HAV6T6VputJf39jdMsGYtTDsr5yWuJAadC",
  "key3": "2FDRCmD5EcH9fGS9iQyMmR79S2B2qraxQ53DZ7FFnFSbTaByqgt6HZAF9Ph4aWcSHqgfcz2bNWQcU4ULALb1sZ56",
  "key4": "4KKhVN7LgFQVdwWpP5ssq8SGHbQSdf8E5qbGFTCgJQauGLMY9GLSCyeUChzsdNd7mWKEcPsm2DNTKXx6wacxdZB9",
  "key5": "3ArgwpAvZRbKwxCvxSh2XeMjgSoAsK7o3ZGqwjDL7bBhXeqcFEVknxcSYFMm1eZK7NXeApCQLpamrENGsfq2hkXo",
  "key6": "5vV2veHpW49qS8UH7BwjRhCVgAhffrA5Vy8hM31EMgnjSAELPmfx6BXgLv6Us5nfHLvLoAWFQToGeTPx3tnqM6AR",
  "key7": "2BDRvkqRpNRtSaPryEYDvgbRyEaPshrg4jPt2npj7X2Wm2wVBohtyUgUuYTc8W9ypLMDEdQ16gze6cJaYQ3xnU3r",
  "key8": "3kC16Yxwm16gGZiiupGqZprh489fqjF6QQ6PNgRF1eCwZPxn1eqKTfT5cqnhFAsywqotbpnkTxTtVR3SGAehEXmz",
  "key9": "3diNTJaWrKxTgxU5GuxZtzxUeeYpjCufZhNF46a1M3VCDgCK3Gn3gpipQRzpJZYhh5fQkhG2kwvMthnG5Q7hQKCn",
  "key10": "2s79e3J9tRZX6XkKCTu8zg4Pne1YVoBvLhzYRjwxyj96uiwcsQwHoHrqMnHN6A3aSmNPcJtC2Yu8Mm2KCoRUZSkK",
  "key11": "22q8yKHX1riXLpJ4XpMWBHVUirctSQyCHdrZC76sLc41KU1JWQht8Bax5u3JU1Aw7LacSWN3fnXUTdVu6mYQXMN3",
  "key12": "2tPqSDG5FYacc7kcVhrcWQmAcExkHkXfrqsV9AyknKhD7eFqTUWpmUrVm5fBsvY5DRG4HP7fyu8QxbeLwz77Z5tT",
  "key13": "2741p5uA5rsPmTa4sPEFX7W3vF4wq9eTiVEQpyEDWC8t9yrp8HzSYuPfAK5VyyVq1XhZ2VZab9VSTAmBdXREXLox",
  "key14": "612gKJW8CSSfK75f3YrfW4V2oYgH2AtBgxnuETo3r9HUv1ZjPBCKorR8DjgsyU44dLVioG57ABJWWUwVSoaLNhAT",
  "key15": "2qvU5ZUn941AekScbVv2FNnot2nwgr7MbCuD4FHcbk9vGnr2S1tRAK23Ed8kLiZ4n2ai9CRmrse55JYkfT7MdiD",
  "key16": "2BJ1t9ShBfmoQVKeBAHNXxH4vWaxz7eQKs7h3Lob97vZK3sDGUZVP7F9qahWnY9gtidQCaaVQJmYMY42vNCZ8kjC",
  "key17": "2HDXk9r9brxFfLdodumiJeHcFRq2Br4BMNREri8PDfhJUXqTCupPx8FpQCvuUt4rZu53UBQerLktjqw1AqTeWkLP",
  "key18": "3vNAzF6Z8Ue7n3JoPthC3PskX5G7AK5uaJhgTvbnvnpKhpqfdRnEGvR1KwA7JHjjBfTNqQbFwp2gW6AFAqbCJczu",
  "key19": "3prKbDcrSw7kWCy3sjwWMnxBZ2Ap1jAsbPbHMUxmBwdVX3xKbgV6vde2SsRtdoBncpHc5orVqYbRF6vjWfwxhyMV",
  "key20": "2qHcUvTq92Pv3GqHmQTyjRAg9MgdcvQBJjj8QvtDEh9yjuswJedJVYQWVEiNwajKkHrH3ezQbQyZdqarQZQwtog5",
  "key21": "3NAgVqPxN46xTvxeUeChAL5cYjzy9rg9fN3f73j266rZQ6EAVo9sJgAEN3iZtifu1oinzt5oueUXYTDQGvcfLiyR",
  "key22": "3nGNBCuD68LHjNKrqDnKQoCsbQsQbNAXm9eEMsp534gv2cWkcdU943dP7YcdLASFX6pJ2Z9taanzVgYRL5nccdhq",
  "key23": "TF1M4yg2gJwvp3hBPA4YyPTtQRT65a2MjkrYS3RgUvGEj5knBQ8JyqKFFbH1iJ3cc9h3uDYrxHaWNLJAE1UWhCB",
  "key24": "SNA8GQW5YYoY3QXwhpCsf31C2ZAQUbgH2pcn18HusHdF25in1PyR27GND974B1T8SoUh9vpRshDYxo21T6W1r34",
  "key25": "2KsdUrj4ziQw5FgH348EzDPaap3EVr6XUH4ECYJsDfqFbZGY3V2qt9XFS2PNu3Crn5FXtuQJPosFoJ7sUoLnWN9s",
  "key26": "3yaqNtzu7WVFK7syjVz8prTu6HBRbRCCJzncQq2ihu8duD4m8ukiUCJ5oeps7iFUAsMGJfvrm34GHErudf23PkVG",
  "key27": "7972eJr6H1kFNnDjW9e82tFpuECg3dGsmeDzExdSwweBXwfCPCj53DPne6A6k4kEyp1EEKs8Z7X2GspuYbuTWu4",
  "key28": "3YXdNt3UFXRRAL41cekyvSnzZ9q84pEDTMkYVFxV2rMEpE2jW8W5BRh4Jp4rZD4cRdooFskKVVvxoEQ4k8uXeWA",
  "key29": "3WtaR6kHPoUvDQbTCHky7MyaDYp6Wkm2nRdvkQrKcf1N57D2XtYtN1SVgghgDqXLxCVVRyZ6drodNaMSNkvH7CjR",
  "key30": "63e2ypATgtvAFi8ZVT9KT31NJjasE3mZnqLLzFnJWmtzm7cwttt8x93banFbJ2Fr5MHqHfQe4775a9ondxwoRBFR",
  "key31": "5snYPnmXAScUtzRLQfsLQZkmmbXwDk9wYypVa2UgncEru2w5oiSxVhRpobdizFvBBB8QtTvmqTQMS9kkA82Ew6KW",
  "key32": "226hmuZefDByh6AiGHPBUbwsAPyU5YmbF3GTUCQbRaXZ6bevjj9AcU565C6ymvXPK97eQ9wPwJfdwkh5LshdN3Xk",
  "key33": "26zfWoctswtW3a81BSVGB2QD8KrthW7x5AoViCKTJ4fkjjfxKXveZmfVyN1gk2p2hRitRSxZBiLvbAhwWHUR2kCm",
  "key34": "RPYWGi4YpqYMojDjuKf4GbHabVPCkYVty8vjdgsUCniXrNEYGrQqLRfuvtniwSdXAeCT32qjPZzFNxL4eb3Bdkz",
  "key35": "2E62fjc21HDCB9gWvXFr8NhM3BwWLcCpRwhBXyy1jSV5Phgs42UFVBhRVr6i6nYCheyxb9FQF5UpZEKcmGn7YQaH",
  "key36": "2EWRMYJ7BL344gVBtYRm4sTFCbnMKqdPbLp7mXeGUTFTdPBjTs5EapL7MmgyBJ1MLXcZ4jqH7jkmMVSDRPMBNjgT",
  "key37": "5NGH6ZovbeXWk3FNkW6AgSiMv5BPEjhjDrhewiqVRDSZ4zB5CuuKdTabRmX5MAzkF6u3Kd7DHLtPjdAjegnbp6fs",
  "key38": "2DLDZnv3x25qzicPMuJrbwxZXLfBtV4aeSoRgV9vDGfibAEEr1Biokab75mMa7WHCyDSgaiop17xch6LuVGL2txo",
  "key39": "44JL82TgM2LQ8YhzD3Koz7VooeKxiUqJknNt4TCNd7o4AVzzHSWYCSrTvByytYmGTnk9woi1tDnAM6diZvDhE8Re",
  "key40": "5SLLhXwrRuGXZuQoEzBbjgaHjME9Ty4ziwx8vEnzdjNKbLWGyWNdqDiBD9hEaWPtCc1L1kjUeP6Q5GkevsQhH7cM",
  "key41": "2dW3ziQ5Dr6aXa4g7VbpCAUbgKcMWDyArENvUhDn6yhWHw1XMDu9NvztMydFPKbxFxbtw3NvCRCRjvB3UeqJUsKM"
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
