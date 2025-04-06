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
    "USf6FtpoWfDFtBGBsww1WEB7HSWUYgnhkz5Yt9oKDZGtU7yMsqzSQSpbR4nYegTgBbkJKUdmcjgamQKSCZbJty6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ah4XbkwLBDbFd4gTTJnKXfjV45J5yTako18QmDcXDfnHKPxQc2eJUGvHfVnF5GcAi5HvwHn6NjRvydES69Kmetv",
  "key1": "5EuapWCnF9KnXLXQDWD5PZqRM1hQV9FM92CN2Lc3XnwQBhaATK3xBsPhk715NpEA5G1g7hnrTw5pEkXFGVXSLjc8",
  "key2": "2Etw3kJXSgYavzQQJBGgFoUMhv8DPng5WBrr1WpC9PSncZV2byNirp19xwmXKUJhGC8MeFW4bzDYbx8VSQqa5fwL",
  "key3": "5iPhQPXZ5bkmi8BcBsVwGSfPADSyUAEcgzQofCkpPN1mLXmUcWPBrBcudzjYWNqthqejqSuo2Wvkrp66KSMiaVrE",
  "key4": "3iPEX6EeT5jYoTve2PAD1iNqcS9TB4g6CnsLXeeEGqGtCLAjm18GNdyVLqVPSnYzdvTB8db8HbLweCieMexbtjA9",
  "key5": "65gacZNnf5EkXmsNghwsvDBFqL4vFDLtSzFmgNkwvrKinBi4LrzCSbjCuA52M2FSyB2nBDwvZ5tdp8qBufzD28EG",
  "key6": "3arTTsaLb5j8MRqhgGxgPtxEdnb8h6DZ6izWqMPjxojtsUKTFp9EfdjAmRsuU5npycoz4rso1j6xakjgUnAcWC9a",
  "key7": "3WMJYJ8ZWcLegMucAZRqyDHeroda394o6vwt327diE2dzdRwLFENrSPmEmxCVMTsNXMxTJFG2yiN2vCXp8Kyrnua",
  "key8": "4jUwd6kD4yXmVa7DVQXUHAE75X9BE7EbSkUCDFqheGRuTxJUsjTB61GpCmQ5cKzSPoHJvPSro8JoDjwHYXUAigUt",
  "key9": "4S3PNynazjAFZZrS9tfzjF7nVLRRnoJFrqsQk18VwtKUJoVGiph3wo8kCcHwbRq1Ryp8B7HiUJjcAkdNCZLHyAqQ",
  "key10": "5C5zvFp3ycqo1QPUiyg8AVDsLAgSCw2YezZGMVgiYBg48FQYpAUageRBx87Zi84Gx8ZJmpkhPuqjG5NEn6qWLGfk",
  "key11": "3Znd1dLus2X4jS2b3ibDwwh8o9xHkMLSyoW83jFtWLDaooSdZQpYR7DEeRjQSVUPt1DQqPgHmqwrC5uQyfYmweC7",
  "key12": "5zJAAqnA87Tq2NZUGkkcnbyF1h6pK2g4qaDKJc7xN3AskL1Mx9mqivDSdgkryNjshTyiCLYinnJ2yftPMmgy8zyh",
  "key13": "3qhPsRnUm8aeuHVxviXZ51xKzLKhWagdBXi34BS3LXnNnDx7Sfn81YsLsp1DDkb1WNVxAMJTufRsckP9iWdw7EKW",
  "key14": "3gnpQNw57bfoJyA6VN21kai3z9wU2hUknh6SbKTmZsrfv4Lrwg11oPoxmjU8Dh8KKV2P39yzX4Uc8q5p4z93FJER",
  "key15": "4ACdptYSGWVSjF28RauBkZcj3H3kcVZXFaYaQCx373E5ie5tRhX7AXnHzXbVoZU1FYj6u8ad65KKhVWgNz8WJtRU",
  "key16": "4nWPhtnQFJ296d4wpdeBicj7Kq8J6Av1ge6WSd5R3DbtqiDebK966F8wF9ZSbU5f79VSNX4Tn1xCk8C6yzdeZQGK",
  "key17": "2pn5agZK5yk7NubMK2khHvVodHyvuZNHdm7s5zyXj3WYLSs9ov99cMj4z84m4qVHFAFi1ftNZS5wcT7EreTydr6W",
  "key18": "4FnAn36nZyAHH9CEWp7xDRHeB3aVwWxPhdviv8DPBTkXXP5tjx8DvEabF53R5yUa1V6BHwVd3q2VC9gF77S4nVQa",
  "key19": "4RLXYmq9m3ZFbcDJk152jbkahDmNvx9M4ezcsLwWoZKWfgYmP26r81zGpn9WnrWd2dpfViypmtvEZuRYsEgpdHkX",
  "key20": "4fpbtQofpV762697GPbyPfSSJAYx2hYCQXN9kGGpPwNMpginw22fma9QkzHhpu1JXUfdZZFSvX7H9Hgw4gdh1F53",
  "key21": "2jSNhsKUtfFNNNTGe68s8iSNiiDFLYsD26S5fmX5p8T4qhJ7FgbDaqfP7QwfZ3NpWdrYmsidf5oe9a4t3v5xCQWW",
  "key22": "3JzW3wq5XqJEPMPrVUDZhUvrSaBFGpBgnr8FEjQDoAXgVLK3tsSJUPZV2ZsqnthrZCgPqPT4cZ9T5L5yL7n9pBZo",
  "key23": "35e7aaQBPF8myYfhVMLx782aQhZ2NkycK6RnHKjhTC1oiH7TET5D88gvV1JdahZt76P4MTKqNzqSmX2Vx5RSVoKc",
  "key24": "5XCpxDUue8aBmH5oaSofKwxBCYoKrXG1B6afrvcKHJxqJjBZB5enzSq9o4aVk1M48JXXptYovJg7JU5ARTmX4v65",
  "key25": "XsTyd8U5n91xjMPRiK6PPqGBQ7GHW32vdzNcMGGSXpTH5MetMjePbFEwNYm53jMG3Vw3LpmBafdzBRv6YHs6JvP",
  "key26": "yAf7hUJ78uQUqwqDm1D5fTNdChzx4cyMcERqghyCwREgk4bfMNeMppzN3mPD4pyKnVqoKZ4WEWyXgmjR8yPVC2r",
  "key27": "9VBGDJqsuti2tKwm3FN7NHVHGzfjYYL1Najf4egVr4vjQjtpHo2TZC7Kfff6y8RA4pGgiwfqKXj1aVxSc6eyARw",
  "key28": "48sJoMP32hxVTZiK28Hnqzh6yGuXYY3KNkZgkGkLVWRpNWazHZV7PwcKrAzUYxvNLmypd4PYr6k8vJJdFZRRpJ4r",
  "key29": "4yV27tmyqTvRaDKj87NtHuc4ekNPe8mECNMFmQLAz9oASa2tLUhjGjMzzYCCzZfqLC8Ze6S842u31xKq4wtgHaq",
  "key30": "4MjC3sC6rNZAeSZbNmiEBHBVNNXsVvPbTgYHgtfE6z4pVffEQBLMQ5NRyZLLb2qLcVf7nJ6XDrPAAVEvC4EUKEqA",
  "key31": "5zAfGTk7Pw2FoWX6g6i5t3AtJj4vCxuZyngGCVD87QTAAmasMopN1C97X38WYpWGT3z4tCfjf1t32TrDjXHWoxPZ",
  "key32": "3LeAz7g9md7GAb98CjcFh4obYt3TvCBwiWEPxZjfoKzotmoZtihEuGczgy5MD21PqH64C73hhFVCRLyryGbGbQgu"
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
