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
    "598u8zkLYyMF22TvgVhqipxwFRiVEarHg2gX1DhQacZqvSoswLnrwmV7zugpDvgZ6usFcMyFxUY3gHHCR76fM6Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPn2tzumLb9WDmUQYHBujuVP6yaukwyfzwpSTELcTG5wPuXu99f7GPm3vYgk8BANbhtaybEqeHoZREYQHupXfnr",
  "key1": "3GZBmN3k4ZYHuSnCzL5C8QrNQQhfWTwBkYeTmxDLaDnRaqnMhdcdzfk9hiQ8SFYms5yaiKWw68kedfXiS6ACdt88",
  "key2": "JZJa7D8jCk4JzqqGRScMxUwCGdxRMjxJJf1Voy8mnCXWAjN47KZsAKqhomoj9KLtQK68W9v7ev1NFpcyTHXSat4",
  "key3": "VwG6WKCJBriwmUPnXpdLeyd423ZK7wV3XBegryon4e4gLwmUFa8ubA1vfxwuAN2iEDdAS1PddDpprEgicSspcd5",
  "key4": "2FXNEFVugwJmLAXFmrt3DUNHqPsNZMsttZ54Z5KiK5vLYwuEUMV8UEww8aGWTbWZca9vv6a51YDHtxyU9NF71KkB",
  "key5": "363jejuqzPw65aRLjNoE88aMdVXLz5869Gb2LFoDfB8pjZ85k1iMiAUPQKXGEJjSPh1i1ZSoh3rEYgo1Ajr8XZ3h",
  "key6": "3koxsnH9JrLQSw5vbRt6LTKk776YRsmUbzG4LSTYKcWqFrfzaqj1xK75v4cesbVUJn3xLnfwihqxAbhHTQKkSkvP",
  "key7": "3jTCVAdhgvDWbD1gSDRh9qay5c4WxDtbCgoRHbiCruaoigtvVBk6wU11e6N5T6UFf4hBbM8uqzjLcARZA1hDLGte",
  "key8": "225D37q1ywyr8R2YgwdQrDnDD3PBJYqmQ93djeKsgxCeXG5CSxnfV4ooCpHkso9Z3LRmAXM3NSkdJjyFeTFHdfvR",
  "key9": "3xv2nvxJPdHCXd78ZnAHkTkS3rxre3Zyjq3BcHGDKJ61qWiacGdpHzmBkTKpd9BuSXu3912MawAXfM3gRRL8zmh",
  "key10": "5uFnUNW4HRS5yNysVSXRR4eATBB5XecQxXsyyLMuZudgxwGKRJRB6mwq2tNhgdkqkX52zjPkb1AzgNzXLNkqD5PW",
  "key11": "2m9oGFtW6BkSSnhgrjh9dQYUpXsejJufXtsh14JiTqe4RJZHEiRk3FDF3cPhrt7MpGfD2zZc73Du5eiEGJrUpCuM",
  "key12": "4ppU9GHgcWRRj6UueXEnExgum9UALhumowp2vXka4yngtRNoZ8QDCF4UUfhC2wYckRyPzwT7DNTCcTqEZ3eCQo6s",
  "key13": "2rxkvYUaSZuaTAzUamZLgr6tfGQBeM3gTiKE6prxueFzNRcUHvwo68TYpKQq87QjaiFqDkDwffQXoPyFToDDhfZN",
  "key14": "3SuKF3sfvfkGRfyhZmTkxjCX1XvBw9nBQYaeskb4TejsS3MZW2TbBpzrLq1faW5CH8FX8vMQqaMTayW3PFhTq73Y",
  "key15": "2BHLgavz7ZTsgo6GrJgZvwx6TEkPbSGotSWKpwt4cf1jtiZKFviLyACuGzMgx4sUVLwhFKLGrhGfJ2tt9qK5N6s6",
  "key16": "2BPJanT4qNh1fSuhe2hGmWDyo5g1taf9pQcvQWmfvZbkqzhbep77Xs3UUTBBMi4KChd57y9Y1i2i9RpbNLNXBuV6",
  "key17": "3nGih5tr4YnpUZXuWHADBTGhzYfBwSxWsauAQdzdH5RX69NkEbhrdoSKE2b1qukRNxu1nvxaQxkqK3fzLw6LwiJX",
  "key18": "1orjDGry4CfgRK1Qshv7RSgtrRPCi2AqYeh6uvnWvBSniH3spEp2P7rUybFwtjZbTEoNoas17WTZpYEqt8y7rTJ",
  "key19": "5wjaAnfuahxSV4uvB4YeqMwDJg7zfLAPV2tiQ8mDPGQ4zy4TC2xYHT724MtUChADNaoNvMjjsP1dv9ue9whrDuCJ",
  "key20": "2kuHU5aZuuxxnP71EGYPVGTLzw6iJtTEhSvyGWDKbRY2UfYEU2vLGHdnwnd7y5BNo2QA75wm16bFg955GYDcJtW7",
  "key21": "3x8y5JxfJaQNEhimg5WMjKKmXnhMh5327iv2A2CGHnKBXXek1wUHgAikeqiexgAa4Etf8Tbh9FJypFywMV8C5vGY",
  "key22": "5rTVibfAxV3qF32yaZ1Dp2vtf8pNL4atDLLid1cwwwjhi7pctix42ph5gnxsDQr8Vujd2JywYVAMoG614Xq47Cos",
  "key23": "3KincWBD8uFEWf7Fpo5ChPGiHh74aj7BsDt7nzhj2GHS82VpyK5a7bRXeksGtwyQgs6i5JYx3JbGDW17kJhPn1zD",
  "key24": "4hiS32FjfzheTYqvRYNEe4UBTJ3ymsdv2y99HjAZGq1pkD6dserHPU92sRDux7Nve2s9Q5qcxMh18EFqZiLj4P6x",
  "key25": "5W8J9DTtVuxGzVdgp3afy4bgGugUncLFxFB3w8HL6T7GvT4dmQft7WiNueFZVCLa3oYMTkDiVaiV2q87sjAsrfzx",
  "key26": "2VoGNEAYLSx5gtPxDrwigfvbHX8yGYB6LgfqM4hrFJtdZzPXLyTg5RPiNWv8DCh5H7GiJ3Uz58kbiHxbLpb2epxx",
  "key27": "49mMTbdKMc1wSi9GsJzChJDqhBd7Kmyh61zoXBtnnRKTEmQBY86YumzCH3RUF5bctqYBbUyGf8MyExFmnsgFfJG3",
  "key28": "2rGpeN3pmLFJYy7ewgaJ3q657HVpqVmjrZxkH3SKTEp2XDPxHQiK52i7WxLSBXiTh6pMppT4HBRpgoujKoj9wiyV",
  "key29": "2b8ESJmar8KDbokasjP2YDkKrtqGWgFxjDjJ1MEn4K8S2XXoob3NpbHCyk1HUtCSt9jWYBQzFYviY2CT4TkfRqhb",
  "key30": "5tz1BDcKA1VfLPQbugk4VuEM9ZeyajxZBwVDJAYWUakZYisZR9Dax1YAk5ddFvdWaLV7RrBAsNyYn8vzhRppJ2ih",
  "key31": "4j33yWzS4r618QJFphz8QYy2HVgGKyrgmjCympn7o8eTzv1agAXJzJUqiBFb6HQtMEWW5qT7qvcQu4mX7qkW3f8F",
  "key32": "3GfhvCJ2enqWqXBf25vTzBB35eKgsxtzMMoZS6agBoY13ktKf36gvmarvBKkg3VQCgsgbfFRop1paBZBc2rXp2Y6",
  "key33": "3P3RjWqC5RE3yZBZNmTuoPne1EwFCBi5H7Kz5JLvNA8PoumTQfXM1CmNFpWgU29M2grNLqjyRjs7aM56d2TXapEx",
  "key34": "2FTBb7RQxFqLgFE2XJXvwdQCqFEknJqkMsh3aY6xFsEbWcxCiDTdpmCDspSGs7TqpJGV1BRLnthsUJQc91ihTbfG",
  "key35": "uKuY1MdfYFEppFQZcqHDEjaHSQoheukvJqGm8qewG6Ri9uikv6Gdg3YmXiV517cVoSdXkcpKJKjsqb5RwsR4KyV",
  "key36": "4doRwG72HAHfWDbYVYi1P66x5R2FqB4zMj1kiexuMwVvxtb7igYSy15RjNr7vtVQSMf3kDgXZi8D93nLk8aV4F4m",
  "key37": "5gK93xJjSk4Zgf87S1iA8yrDvQ3G8tPvCWUmXxDu6bSZFku5fngEQFfPaWqnCyMsR3NazpbnE9Ny3W1mxizQfZFV"
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
