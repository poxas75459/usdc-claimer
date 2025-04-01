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
    "3zQ1HQVJZy1tct1RrgyspEZGsxF38X76p3yDqgQujcrVPwJXtubP1CzR8SN3kwupJxqfWxAXoYbSBhJuSypjXBKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VbPQv8VVGnsJ3gCViizjH9VvzwjVVgYjNfBa9bTsuAijAQjjdwAboA8N2rotWT7NodvkFLAnRQUZMUZC6Dou7dt",
  "key1": "2i2beSvzLHYiBXqcc7e2iTuKFmbdiLPRsDQZukevEfibBoP9KiLKbmQ1wCJzZL1676kJXJx3m4ppvyZeVUGQ6hbT",
  "key2": "u925xY5suTh6SeEqQBHnL28bZa7qFxWKaF9T9fe7TP56VyNudisTLamk1fkQwbRcPjDDZ5XLwR9C5HwyoRxFwJu",
  "key3": "5DxGLXSAPutYgmPS6HXy3y15CvxTjWnVLCbj5FvwzG8WwDu8WexUSNzgDKkXKF2E6r2i2vc5JNqkfZ7J3ECQaJ9U",
  "key4": "rM9uNdSSp3kABnUKiQrfarfYiRhNQXX9gTZUadMFouJz3VCQkMuHgUjctCeGsMVY5boPjevNfFEtDgvJ9jHX5Kz",
  "key5": "erxwWsWXzcXgq87qsYAK1sP5DMWuBsk9mELb14pB4YyvvgNJRZYDHL2u8cxAquhuUFrSmXh1m7dg7UZhmGbRfGJ",
  "key6": "P9ewBaSR75zkPy22fxCFWGHRGMDvt5U2pBAUaNDZV4nFie8NUqneFxWbDcTau3K2CZSAQvZ4qWykmAkzSWzaLxy",
  "key7": "4BisKnhgoCi8HLg6Tu5s7Aq94JPmZrtrjdy6iEJWQzwjH1jM22SRrCUZYnQfzaR6TU3nFuENDnTqvgMECD7M83Qx",
  "key8": "5DLqH7avhzMqGN3Gyr2buheEfv4cFZLhBfYoFxY7zBGvSU2ZqVFwkgMntDZxBKB9QYQdUs9cMV2qMaJNmxJkDKzf",
  "key9": "zdQSpbPssEqFgsJgVh8RAqrXPmxVwSwCYGdy7nyshXtL6Z1FFJpnvubtyLofXxVQRvwYFTrCLGtd5iHoWrLbD5M",
  "key10": "2rrsp9yNxeApfJBiJyRP9nQ7oCsjExhfGvAwRpF2GtKXmHteJHCCpRqDxf3dmeRMExLP3Gb8MMKatmifmbC6HC6Q",
  "key11": "5w7idwGaGp2pTz6bMsdeT8eRb4MqgaxJCdcPQqJKwNoazia8hcHqrdPzW4ojEKXBxEkuUpwzrSbsYe36Xfges8T4",
  "key12": "5sVKPMjSDcMQFrv7MV4ojPMtrhJQFDp5h4U9oLvpCRkJ5BpmgBYW3UDynB6eiJxndSet4ZzxRb5Tfcx46h7fKQLU",
  "key13": "gpSdyiACeCACdrKcoNryUjGioRTyg44GorpRt7MonjWmcM8LaxnZKccqL5miECTqQog3J21TxsTJ9CUwvf1NFSt",
  "key14": "49sLEsUE2Lw94mCSDPHyxjuQJzQjM5iZgNZ6EWpw6T4tXWmoY7HBWvCTQpD4ML2jxjEhcGuaAf2irgVt9K8K7QCx",
  "key15": "42PRY4sJwAGaLpSrP5SkUdgjXSBEK9LaS3acNJTX46hEbqUWu4DTe6Zq4aPsigJ8E5gfVPsyfnLZkZUaKzqcrkkk",
  "key16": "43T1P19jQWEjypKYDwpEWgzV5VCvuBPaevoEBwqEYFxsm8pS6Q6RBBNi4dMrR6r8FhMPdFbP2W8Aqc98kSaHxRxu",
  "key17": "2LnfVytN3VTVUXBn5pKVbmWKkWHZAWVaY4w2VqbU3yFzqpXvcFUBFdMzGrQGUGNbDwkRbCAgnXeNQeq18tST95Er",
  "key18": "4LAA99pacGy427voofVCXBVeJsQqjn4KdVnhQPeSwPjpsTTJNGpNDGYxHRn7hYrYE8uioX8cApD5Zq3pGkNhDD1p",
  "key19": "tAc8tYNXLbZrAVq1RUnD73T16pKzSnhqjCtfBruF4jgJXxKCqn1XsAWA86Ry74LkMvK7GuzyzBJB3seyaxMUCPs",
  "key20": "4FLkHEqVgsC743dBmTgALBhLb5D1rzh5U4NkzHpzeLLsWFZCv8jxR67NNRPW6jCd5NdcejKirW8RJWEhmcihWfsS",
  "key21": "2tJe9hFg2PngdJQ39kLbQrjvgKnYZucMcjrFdNbUufSjXDELLTuF4rS68CFkxfVUX4j588QMY8GJUBvss4WeoT6t",
  "key22": "28iguymMCMQkXKxvyydD6nwYYwSP8b4YtyMSkGQ6QDhhe6j79dMnE2x7JQiSs9aZeubEBw2NCjS65PpSNpKJUbpY",
  "key23": "2oQTWJfyvnh3sqbqMM37HvJkQqcx49biDuEgqWSCHoyv8E6bUvahdcDnNUGpreJchtd8HD6qeKBkyYm1NxmRTSBn",
  "key24": "21eLthPRQMknJY2b9BY2f5NxD8bzSgNCtXJdNPWmvgFSAzjfbhMYZoPRFAmJdKSsys5BgyVK6qHyPWyCpMDHJaJ7",
  "key25": "5ZzffaGf3Sk2A8QKoUJBHMXWt6uNK4nfvGSDWqDGvey9eguG44tp71BwgTqVhD3xCafJZ92cnvgvq4x3edaxMr3r",
  "key26": "4qFmhqhhqUjJdAhU7f46ATCmDZi63ekPhbXp2BoWjkgWKX8XNVZxvjrdbMy8L6X5DhX9RyHthVs5dTYhCdo4ureC",
  "key27": "3m1QU3TwjDrKujbHFseU6TfgpcpfBXJHYa6ANCtxmM63mWT1NDMqW9iSgsTTpt1x7Lcqj1EcWrWjFHdgb9Su19y",
  "key28": "3TE3frSCvQ5nvcNF7mFgr9QJ29fzZ2vAQGfnDhpRDh3Fsj1GZaRS1rLAjXdaQozaK1RhFPgxCQfS6dnoKnK5Wmvu",
  "key29": "3wHKp4yoHkJzX3K5AGQNybdRtC5DVozVUsnPRMGqUQE7iKCZD1ZYFoYq2YGKVGi4BMcbMYtjRiNHrupnht9S7uVo",
  "key30": "5eceeFJvvS2j53Ptfo9aSbXXzJyHPrgkj1uC1MDAuRXLA1o8Bg3GvDqXj7iigjrXVWDb9ktFk5xGx3hvgcBTSCTG"
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
