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
    "4oVid7h5nBpigf2TJsuMSGC7RXbiWzfnubuMn2SjLBituyyUYmrQ4Y4HFyTD3FK6Qvpd6ZuB2bPRTCPpsFCftPw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26XVCZV8Xxqswes2hjg1xoJsraVCPQSE2KAV6X3Nyg12HB1e6Zex5q6iSNsNFnFWfttdyccu31ACxeeTdG3vgWAY",
  "key1": "iAr2YKr57SUbJThzseWYgN71Mv3GgEh479PCJpZrKTQtVSjBuG1yn8GD2WxqNvoCFEESePvzsHioJUrsQBJYkMr",
  "key2": "4EZCeVfnBDsV4Wy3mTLPHFxVyXQMnYmsZ7D5qDirHdudyKAYXhde1EokzRBDahdRE7H4VbY9ANXkmZQunrn5HWH4",
  "key3": "5wykWLYVFmYm8CtCPwEyvLQ7sG246YWZAsy61JVHm5Di3S3phQagE8RHaXWxCb5X6HkUasqL4qLDy9qAMGCBU9cn",
  "key4": "3EXjuQEPpZ2y9Zb66pZA99ggX3rw3D1t46Zsb1pcwBy9ehEJ4TApBp7BNtHcv5bKRtbPTiq7hq19kMf6PRkcGuRC",
  "key5": "45HwFogZaWdBnDCsazRWt2wsx3ynPmYf74mBA5pZRbbtKahGrEetBi7gmnhCz67oPtFLWVRrDWVNeAcpTw5oX5Mh",
  "key6": "3EkYafWDDmxtU2CfYjZXaSQY8o7Y97NuAg8HkCJU5qrXSE8aoJtsx1pAj5snmRNK8iNTpPMnaFyjsCD5xbpJSRd6",
  "key7": "3n7QwsRUK6qUuDEnSKux7wnJ2xz9u6qgj2SSbfsgc4WZofPzNfe9rgcUqcQZruyDT1WF9kBMcZJJWDH1pwruZ839",
  "key8": "522AZaJVhLPQ2AqTPK6gpDy7oMMwsvW3hX78x16HVZ31Nshf4jUbzAgKPCjwF6tDWYpZTfjVJVnJLEgVYuN3tiJt",
  "key9": "5dayqhwckhAxUFP6Gv1dduEgrsmuyuXF4TUjUd9NHWAdYaxhef9zsWMoaAqQ5RLT1sfKdA3Ms4qbPKTmx6VKLAnj",
  "key10": "4rMUwSsETc4nYzacrEcLTxkkWk8tKVERKC2gfqNJocnRMFvWWm7k9TpEuynzHQ4BdFWWL8sCH8uujuSXT5F7qMZc",
  "key11": "UwWqcB8LfrL9bJMkM2FmdF3xEpqcgyqS2nc33iqXE6GafZ2X6bzCmrhtsY3NByPd1SgUGggEu7Er2K9yd5LY4tG",
  "key12": "3uwbs8qufUtfBYdDCdRbjcMNgCD5qyCiLwfaTCigkfXqmBVAGd7Kw9JyRsWayTgWgsKepg96mA4cemSQjDaYk2tz",
  "key13": "3Yh5M7FCkaBEiuARmq7Tyjn9NvQ5RvWP4t8ZusC7PXhRdXjnnQ1ZTSSkaKo1nRtBvkpVvn56xby54vp3ortpo7PY",
  "key14": "5eF2MdcuhYQvyd53WKjw3iFYEu2tUgymArKTeM6uxwrvJ1HJE9pWpWwFZhP2JjDwdCkJDpDX5nVBUdH6fDg2RhkG",
  "key15": "3aTVnC6WK4zpzKNToSMtzQmxQ4WY7Prms8VkPdezRpkNkDSdTaaZ2sQghyaQ8ZvMD1unLRL22essZQcmsFLa4BWN",
  "key16": "3meafxFoPKfdgJKXD5Fupgu56BMfrhFXdSYt7M9rK7MZTTfUVwUhGGogxgTUeL4yiZwpFeHM8MexmfG7KoahKwxS",
  "key17": "4WfPxwjJfXcAHw5nybLD4JMcaarZmgDmCYsb12Gm2Xye96vofc8jYAHBpXKK4CfCYrAuQPHbwuVDzUjn5aeVy2cU",
  "key18": "2xHNsKKn8iNtyTZnRKNftyJK59Xj9ZJfTWLGmBhf8nxkzPqtfUNQ8eThK7khbFU7JM8Nek7HyLV9MwqRt1uy8tBU",
  "key19": "321JGXXzKh9MDYmfHSC7hBrNVYUMoJtsNoeCS85yi71rs7woPKQwu3khnGrsvUb2pCrD6AWEyb34KBdeSFjGbCjY",
  "key20": "E5yhjJF9zoKJB9rXYbauPbXiZMbhXMRy1KP5pCMqawecgxDLw7aMkNtdcpGTwYb9EzdXhLsYxWy2qW7Ed4cs2my",
  "key21": "4vgnDGqSCvstT8Q7gsL5NDGsbzRdN3N4LXEzaKrZWBosLUsWmcvSAp8oUoic4S9hy7wqDbnhEzgg2rU2DZuqYHG9",
  "key22": "63vveLqfDmvEtbRBnfEMkFsaXvtxSi4Y1AnpdgU3iW2CJ8KFhYptQVKD6V3ZiMebfispJbUiTDRpnmdpDAAjSVxd",
  "key23": "3qKxiy8cVZVWs3nTAjALd2yiWoZ4wjTZaTv9XYkHSUkUevmUreDcxUaSHk25BUfECGg81yX8Rsq2E9AERgQLCThq",
  "key24": "3vSPzEhTdVVqoZkoiUk4EsXHBh9w8usQjyW5FqaYMEcZdXwCN3guMwdDTN6Kx1B71Pqk1jeRHVMJyvRQqjM3zidn",
  "key25": "2E9Fr5bgxgbzY5wD5TCjmk9TGP8ttvAfYKhLxzS5okibLWbJEcDbZcf85satumJ2hhmFRv2wQXNZ8zjQbFKurb6H",
  "key26": "5mEdZUu1z5VNEN5hwRcvs6cE4UafrcFNjFJcwSNQeoMuXsCZbM44JoHpvQ12CEpKhCwuCtjkDLJof5E4pDJK7x9P",
  "key27": "5UfxyggnWco7JvmdKfJPSm9PrQbdWAK8Cqs44bJmMjaCtXLsM3neoACJTnL4E7jXdBLDHs2KjTAZoJczEuGFhVre",
  "key28": "3UFd9VxNMznkszmh96YExpEaA9Tzhpywps8uhqfyeN1cDERVzmm7jSFKrAQy7oknq4b2YfLxmcGbBqEV6qPMUEW3",
  "key29": "eMXjqMB5WFxwZgeDjcY4C4ptSPmWf9SvqZCWbCf1e2uiC9pT4AAGFSyyEv8mZ6q3nxHZpcjeGJwRFQofxopuxiv",
  "key30": "3xu19FUE2zPzQFtxGPwR4Cn4nedmz6qCLcZKiSeSRMdVv6aziaYmbXz1FCHHNH21fLvL3JMYRVW27dseMrzVfD68",
  "key31": "57q4M5NNnpqLAMrVtyRvrS8UKw66FPGC3WQQjRHUKHEfhowcBArd8DDTiR23jTLUQLLNmALoFRCdhf9ZzYNKKB4Q",
  "key32": "3Pygu41Dq4H82VJJLffz3HA9uAHmEUgomg4fbJr2EZ5qu57n9479yPBbNBYgVSUH8frDUWW3S3nrZzF8PnwJi6tg",
  "key33": "2oqi9aHRvPQnU49fs3DN31gnLDH8ecBgssqrf2UnM585G2bmYczgvLLuUHqBcwfGdQNzjXvbJcFZG5kYUNMq9can",
  "key34": "4bK8DMbDQKkfbsUqNLJ7kvtRwKy5hnevACpiu5XHVpyxLEkC5eidciAeoPEAYmayBgSCsEBHB1hCSTLyGhMnEHYt",
  "key35": "3KyNaedeCcUHSe6fHTJex74MTNjQYc87LpRC66KpkzFRbkHcMgqL5kEfuKMZ581g5uS6jDuG3hmn7gxkx3K6HSom",
  "key36": "5SUKz28e8pCj6tTCZnuBDQmJsjP1joov26PpsfSvEkBCvSFsk73YJwaTBqjumWe1DaS13o1zzvBLdmEAXGf5ZpMr",
  "key37": "3EfMBRYNmeeQ8m3p9jKEHQZcXG1UhZjtB5g9MAMxD8S1fJCjpxVVA6BgYSbF6EkSUCDuDqFoCAjqLvKFx5onWjtK",
  "key38": "3BywCXiQsTGX2Y9h5rpe6177gVpesZbs5TPq181qPLe55D531myjrTRindkNn3bacEQpbfydznv12scynFv5gdUc",
  "key39": "4aEGuCX17hLzZVT9vraF8C8GWd3Z5UkmTBLEZo9YtcTisCrtvkeTu8CSEgJ6hWNRdVkWygk4ESKaVycVkQzaDQGc",
  "key40": "56jHxpaGrQKdDyGg2Yk4oEfZmBMNpS7m73Ho2wfXwujDNqVk7c4zgTR6zE5fHjcPVxbMZex1YJg4rCREPmgvvoyK",
  "key41": "2iESgRh14tkts5rVoNnbEwgMCx9kNVe5bgvXwCBrnwR127u5HVTd11bVQJ8gACQztfsxj2Rj5yCHfVNDrs683A3H"
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
