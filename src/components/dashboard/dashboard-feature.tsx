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
    "27pDpRxL8LtSgvW4FgFyV91Z4J4ytrWJU4pHvstkNSs2mDPgQFzexnXLVU6u3NzeyqRsojUXsM3JNfFABbx7gN8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cYyBNqVa6FshciwJPceqQQSDbXk4yvzSL2RTM9FAiWLp9rwxuHJ3dQC6Yb5PSXrXFSC45d1Q3JrcQ3ojKdND6yW",
  "key1": "5iZyYEsd6c5bwEk778gRmQgzbtKUQru2S8GpPnMLj16EdrqrREbnJgBvpQrnAfipdLJQSEtxEKmwoUow8UhGXepV",
  "key2": "HJG4KYsh4Qrzby1f3qY4BShRjr6cD7WF6btZnthNyV7VuqrDCgkoxFe1ZmxzZQmVEWtt5AFySP9me6SR27XhNsA",
  "key3": "WiCYV8WxnvF2ULtJosNndYhpatR3m9pqt8JAiYovQwMDCgF5h2mmcwqR8ZdYHWP3HuhDKbNFLc5XMp6ruDi9HkE",
  "key4": "3ja8QGQXG7vSVadcdFdPcSGDg4kf8yXBgVGqQtyRfDg445zaZDcaBs1vitV7qiDF3xn223Ki7xZFr4fpfJJNo2DL",
  "key5": "Cw2GV8HtNM9zZRbCiBczfb3mjoPtxHevxUMddj8z7tLyUCzngjqpVYjfwjenirKJZAk5NsjaNyr6zzqjqZhc8g2",
  "key6": "2ENjp3o5dspo3mTsFEn4uofUnJUTrMZbWddMe9QM5ZGYnhkfSHXiftP1E1Zdjhy6w7T77xiezsvP5GXfnERi86BN",
  "key7": "5JCifXYnnms3KjTc2EDp85Tc3U98jmGTsynjJrbBYS6Zte94mAKAPiTZavwjnZS6BP1F5AvWxoFisgRNLE9Ye2Em",
  "key8": "4JxfNAb8wDr7dv4cgE6MSxFYx9PWAaJ8ZwL8Won2RTQ4LeVU8VQVMdBg7yotzsJbC9msZh5fKeEst1dSczJukMfV",
  "key9": "2mojrdHKcB3b2McP137isv6w3Y96wiMEaZeZSMXLowK6YLtTqzKGrY8bGpytWphixsuRNPYxRcAdq8NtyLt5Prjk",
  "key10": "3eatSG5QBEcG2mbUJqUW25hCBeJfgsQLwEaPz5uiBzmj6rCJMDURcgxiT7YsyiyjTnK9XgvnmMtuebhaaKAw6UgR",
  "key11": "7GSaaSqycesi2DX8agohYkRwQjxZEFKZdDiSxUajSsx3ucZsTsiQB8wDTiLdGXmefYSjbiZf1p98G91DCMpz96K",
  "key12": "3QLPGe5vmrPqUFhjRQScjs4faDGBrX1WhAxQHYBAYz5RNqpsgtB73e8mCJa8UoA8vhydrjv8zw7cCJgb4NJCLBLX",
  "key13": "3zwiUcKkuz8RnfeGrNrT7C61syFpnkQKVjuiVGN4xvQ8jE4MsAHDAXU8KZXqkzKHpyYMzcfC9LXZzoYnRrSuXQTh",
  "key14": "3wr3H8rUcTW6Ec5akewrMYaRAKPMUPy2RkSMG7F6ngpVtDnjxqkiqNNXZMkgdHTj5tfyFdCXPKFAN4jheFLJEwvy",
  "key15": "5XjCbizgEmGJhU4FF2KRos7Lo7VkdCx9fbvGc3PsoV1tYA4BTvp58sR237MEnhBwi5Ycy5qnqc1zQEvrKTxnioSz",
  "key16": "5p7iw1tkp9cxkxduX98RdSyDr2ak6VrYEFzhGq6jSSA1dohkaF7LkELfWUkCLAdpCvJu2eKnKH4twmC5kSyBGcSB",
  "key17": "3Jii8Ewyovqm6S8yWsTg6kGjbqwPS4BrySjxqDbCD38S7khKF83kBa8mHub6FsuZbFL5FqVg4zVzuUCksuzEoPCB",
  "key18": "3kzf2TeW4wXybXNAWWgbq6iGAdPZ9kkJoYotinBTtvyLPdjw4m1MYfKEMWk7reoqyFYrtkEdhX23nxLePpMMbCZ7",
  "key19": "7JB2BFMZfbtpVx1esiCb2Di1wx8CdfKXR4hH8yWGs9yGWBumyUoE4RrbQ6qVjvbn4ZbT1CeXtPuUw6QDXxh1dtB",
  "key20": "57oN38yQ5H6PZDaKhm4bjeg25nViojU3Lo2kGZUPyJevcJ5LfEwzLxa3LhrKwotzn7Dh1JqeuktDR51UQ9KQ3UH",
  "key21": "5ZZ613eZAWGYhjF7KVxnWizWnRFYcWTAxjSX2nQZYmiPsW21SCCxErXtKnppiVVg1CyWFMPzocq1zf93DHu7XHs9",
  "key22": "3NuRRDAFTaGJCzF9Dh4Bvh4s2t4v4xwngaaneCFaS6ZHVZrXp9uatJQQ3LDZWHNugmmE6YgX46vzNNtJT5d63nvy",
  "key23": "FAHe53KBQjaWhJrCcacs8wC7eo61fnrWbYGYeA1vmA54ZMHNhJP6CQiKSXh9z5mrBzcPYV6ni4ihQkJCYrZR3CV",
  "key24": "3kyDEGLZY1thYxkd5jra7jqEdtMbx8cVw1Qa9bu5QBspGohMqn8mg8HT3HermM7j7twxZa6ant9edxmMdtxMZwv7",
  "key25": "3zW1VMDgCXPBwAxtr3yXtXy5A55VdoSQfpQ1ap8unVko6PC5eKSQLn1UKq9gYqwosWofRq3QiXQoTWRQfedHCLj3",
  "key26": "5ztrTsXSLrWrASCUEwSyHMR1xRNAZDrTeWqWNCkqgrj6xVqTaBaNAfFmri7Uqy2hpVX11CjPmXzb24q5zYtGHghw",
  "key27": "61AmEc5UP1Z4S6mVcKzGc3EFETpWC9bGwtWsXXZsRhc2BW4otWbS9m8i92EYFt26XDf2TWSB9ZwfQEViz1v4TG8d",
  "key28": "5iuMmYGj3zkuaELENfMqu8YMwwYL8P2urp3SEBo1QiZ4nWz2kqEpMvH1Ms76wW7MXbLNUXur5keqfNS7F9ZtRb42",
  "key29": "47tUn7E86ytZRVvFaUsVbywi5W5NLDNnLdWWDFC64xAB3zGZnDZ856dvSwn1ueW9ghzKm3D2GkJHxi12tjrYMnLH",
  "key30": "2StdwWaBTaAeR6trFKPPYT6JaSTa3c1BWsDs8Vmn6Uh3PfR31Z6E46FNK7HkvKeLHaQpyHYFwHyNzRsdsYL5EL67",
  "key31": "3qs7GzDMtSzBKYuGCcRcCE7HMgM3ux8TuYM1Rpuznw4ytqBEdGQimhn7wABEPwhX8cuR2qSvhiJ5wyKtPS6JzQ2Q",
  "key32": "qHDGDYNHsMLYhcp6imdE81EfAjmH1eeSRpcxLBHZ8UgfTjEjekzNEdStLFLn1ECtX5VqrFDHPFBNrc86co8wCQx",
  "key33": "5QAQBkiW73u8ogLk88uxC471wY1A6rfFbG22uxDR4xEkpUEe4ZW2ee3xkZCYDJGF6h1QQ8bbzMXL6DrhfqaKBo3q",
  "key34": "3xD7UUTLEjV54VHWhHx99KabEpPvqHZikY2FLPrFoTb4nWeZw3aYktAo8ahGB8Jh8r3gqi3k48hMonMJQwaNVYAj"
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
