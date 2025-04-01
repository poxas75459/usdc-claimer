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
    "4xDXs9iCPULGV5CQvWtgiQEgz3ZiQ34ieXnvf5bdgh1gjHdEu2zPDjCH9uPz8XoHC82rzEkmg9S1HW7ib7XYEebj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gd17aSxw4uspEWPXmLnZC6D1atXHLJ8k13rpx4JTkuuQZzMAZAJ9MDaPDmiZee3ACiWUhsW2hspbCss7zmNEwzT",
  "key1": "2M8FQf3wEGVp9jcAGv82UHErfzg3oFL1p68k4SNqkp2YqoVYjjHCF1u5TADK33Ea343TVdi4Hqey9YB95pAXYXUz",
  "key2": "q1HbB5ds4oLvtgrHyV1s13s5rY8Twdd5fLrYdHiPgHyX2R1qBagJNcTGQC6q1vomybxK8sJfqV5vFCusxfjPrri",
  "key3": "3qMKWqr8KLNpRJmAmD1ozgfWv2tTXHhFGyWt5H8SaBRDrbSwmqV6vDo4bMeAQmxLD9HDzdtXrtKQbpYEJbkLpGs2",
  "key4": "4zc5ck9cMVPoJfvm3jqKyESqkANj9wuNpdkztybPBDdejzMpesFL5FAy9bZCRBnzXGBUYDXLfpDmgxStzfT6zZer",
  "key5": "4Vp1yETwPqW6hGYysjR2AniCvg7hEYhbXsamFNBTn1LDYmNXL5E57FFyCuC8sunfJjauh5zqLUGVW7cM7gQ6cAN3",
  "key6": "2xm2okpawPPsphx4QX7giA7DgQo7TLJarbycFr4zpSkZFDJbKcuuHJ4BqQmTUEiYrnuctbhXZ4nbUbMkMrXwCUux",
  "key7": "3KdHS9oahBJp7oNbWWcrrWZidh2Pzw7vB9UJ6QD8LCHosqDEbv2gGFqgQDhfe1JJzN8ajS8QoDAFvoGTSn6DTqDn",
  "key8": "5mWi4RQkwQBBYaDZcLCnk4ZsK1uXnPruw4XrPEniJYfqxK4GJbAUgWKaZDhMp7VZG7XH5Hx5XspCnFjAFomyRYaF",
  "key9": "4Bt6hqAanJobb24NpU9FDtUfE4Sq6FLap1nCSk3fG1y92gWg3yVuAC3V7QB7hRDMinuKiMNG1m9qagjEHGWDc19p",
  "key10": "52GcP63vqeSPge6mBooH7XCawEVAKp5B7jFtkjzf2dZo21zwEtbDUD5vhZz54P3xvk8yFnsZydSvQCvazKqXPMER",
  "key11": "3ARBGLnEEtM1wo6JrYDsXwbNa1nQdNeyNGkNJ3nnMvfXcBPoGLQW7DLbFcvP5xnWv5ZNi3QiZbjxECaQP6ja6XzL",
  "key12": "5v5c9J8V6JMNiR4yWAsxe3t8YKnia3XoDKZB6weRYN8XjQRtETJDGNPMp3jjdtnDf7fKnfHaUYx4DD9TyVobgc9h",
  "key13": "3SjHnx9em3Npv7GHXeYR9EyWQLLtqbuiyqujT7CazSY8QkKCTdsYCLztThZNR8pUa9U3qcGRm3dQ6KNqtBdWmmAx",
  "key14": "47qL1UtroagT1Tpd5qVNa2wHCcAZ6nQjE1WdRtn6NT7xR8TT1YwR8KD3aJENHcZP1iQWUXpGHDFGBGMJp7W5Yqhp",
  "key15": "5JA1psBY7kUyP8wVEExDiMtqhghXuBxidyqdxEVfXioYZoNFVvaiMuznRt9sVpzQ5toxjEkgrEjqg4ZSFaBGR869",
  "key16": "4NGfPh2NiUfqyQL9YbeHTrpbgmtLVSTdGWWqGveyZzZRdMEPmjJtngNF7xCLZAh8jVpXLMcR76Znaekgf97Mxk9X",
  "key17": "2isDsmDGJDzLfFaMZPiwoo5WPvfFHdFRZ9xgKEq9oqLWFQeKXgbatwPzKq4PVX6v14FkVgVfbVSoW6qcwstAeZr3",
  "key18": "5ftHYBFfHUwce16m8qQJpoo4yueJcAMoZqZUVUugjWGKVSizMXGQJEm9rjCBi9hXaDj4BxSsvL7fJkmJ7u9Mgydq",
  "key19": "4WzmBt54zq2bUEoE6vpyg5WTuRssqt913FWWpgRpHWGSiq2n9U7PpM1KnzB72GC7seWZNWLS6LiAUm6DEgE2Xi2u",
  "key20": "4SfjLj9o3ApoHZtHX9wyPGaJmYDqPUERw2HMQJMiy88M9Snhaffzsp8ngMHcmMnRUGmY43qTF7Pd9VhYBGJrD77z",
  "key21": "2FAaJyZnwSJJ7zLK1jUQUTRTztJT5vfSUquG8k9PT2wYJJaBGLuxMoCJfnuU5Av1Zrq6WYyXuTkn8Nq5D6dPmE3v",
  "key22": "5zwHnx7zwFUxS3pJhgYXrzoi4c5V61Ph9DmBeVCuDmKtq93PhPahYJwnMYrENBH5ijwjrhuM14ec9TqQ4AHef8N6",
  "key23": "2i9LTaqfUiUqB5Nq8eVDLEVabJLGepyVY96w3Dkev9dwNVRoL7CcFxLjtzbUTPETCy7Bsy5q2Uu3HAwFepQFxGZz",
  "key24": "5WVnfgeDhZUB5KgSJnK2PVpN66r8U7xKnF4tYhXrA4uE2AefL4rGH2HrKkBorXpyMppHzkDtiyH6dR8hW9zJET6y",
  "key25": "5hpZ8yAiEaqPj52rkF7APRWPGv3Y1RmZGTqAT1gVWkJngs8oft8Ub7W6Ttr16d6WTZqoLG1Ub9V354D3wwK9GtkP",
  "key26": "3FewQUFFe1Mqmu3A4kTPwQsNpc9NFkr3trEnJemCUnigNFqZ53eWJGUdGM9TmJTV5WsiGdZjgkArW66XpX2j3EJx",
  "key27": "2pHFuPcibasgtvpKamRrMWqwdACP8XCePXjiyMJWAJiM2v3unEghpYmDqTCfLA5BB1smJfrATGGBZKmwfHjod5JD",
  "key28": "5TM3aDuMWwf76fXpnnGKCbeFXhgsckPY8Z2hnkV5hG9rYiXFygopKAJGDKG7sgdijcn8HidnqasQcs9oH7JzQAqP",
  "key29": "fHj8ezkQGcSFSj7kNJv5TkjHSjc1rembMsdRQh9W6WfzbUb4cYVQYY3VSfn52PJdzcxFx5WeC6bfGqqsKXafUpQ"
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
