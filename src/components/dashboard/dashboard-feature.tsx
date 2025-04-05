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
    "31wyCJgi6rpYhYzuj7T5ubTEKR69LeHrXKSw7E9JJFj78mZGCGh2vg3WKrjbSJ8uZo1eRPgx8KPT92fRzQC23XwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bge9QDnAz6zbs9YUdisk3aLdX4gCVoTE6sNwPJn6Lde76eDL96115W4zUCKR1rRbU2s4obE963zBJ1iZ3p2UvKz",
  "key1": "5EdN7YieRkNTejkbScEi8ppYNEmUfP9n6U7qAj7NpSqRZ5KpMNDemA8ZLMGHJcLMb9skcgTUV1gbe3CkEn15wVhX",
  "key2": "3JreMFbrUWts7392ZpHNPmMemX9i5GrZvhTkkJTdLh1TdkMJRbm2Lz9rRYiWeAmi8PM8qM1kgdiS3NpoKAXsgqMU",
  "key3": "22ozCVz7GQZsCoEaB5rjwSPUbK22mMTtX26THQmswKmNWEbugQCjLRDVEgMLKEhNe5VhwL2krN1aWmZT5rBvF8AH",
  "key4": "2rgLN7xM7itpbVnqsG55vygA1i72riViZouBRTu5x4XmknwMYfcoJA1LmbjUtnZ5F3XxzZL79jzYZX1evKRmSBAd",
  "key5": "5XsoaA9q66AqtvDBwYtqJh8yeZ2vBxsh42W8Ps2t2tuPo5KJYnUyFDVA2L3eB2B4GqVEcHPsjp44FAdE8d6TUCRr",
  "key6": "JEEJgZv7FipmfhDjtL8gcuv2QJCUQssWwBndyaR4gVYjWRnEeNE3n4UU53WfizgHxthvkfc1yMjpEhSfzPhZbAP",
  "key7": "zcdhQChPpZbNK5m1rEvTjEJCXwA4rhsb3bgaroJZgf51m3rakRnSkyFzevx27DvasxvV7jKTcjJuPQXarqkJwHt",
  "key8": "3EXpWWrYUWjcDa3N896xDn1bS1mRUFxxVTqWT2P8LV1fybvy65pF8S7zNeJTLXWTQrny6stscvc9iJE1sDuZACRT",
  "key9": "sRJQXgLMydZgu9nvMVastomsVxfU8aReQD1pWLKHRnhxY3JSXRB8gh6rpKvKxzk42dj6XVnNKHNZHXoypSgf8na",
  "key10": "4RwBCpsogtG4qkWNu4ekiPNRensjdBp5WsUC9jsE4mUiuEM2a8HWoiBMpdsZbbk98E2LA36RXB4A14Uf7PJCLaXB",
  "key11": "3Z8GQjqKoHkLsaD49DkFMM185cyTHr1VSkHWH3v2TAmcLaQT5RRCQHpCTDBoDwVa7hHQkM7LZf8EadciYhosPzY5",
  "key12": "5D3zq2MfnkZdpcKkRyjPTBXP4WsLXdxp8esNJQjZrJnSwedabvVHYJmxXJpXsv267QwA7gF1yUwrMAzLA8ex4zc7",
  "key13": "3obPMuBzfP5XuwnyWLimtvzPQpoAXpGCQzTKuBH1ZSEBP3wG9Z4tfGk4Q5PqHJNSYJF6pU1DFwtMMzGr5zDwhuKE",
  "key14": "CJr4HZWkQJumzEeKV5AtKS7VTksFsvHBFrhjfwjoMyJTiRhx8tFNcvtDttpA1gtaDDxeUJFmipx55HigV1J3jG2",
  "key15": "3bLcvkuXk5Ms7DFGLrh45hBjg8RJQxei4KpsbTV4ubbfk8hXSyCbpZhimdA7RvZW6eTByxeujXHK9DQUwfzZTUdg",
  "key16": "3SRfwcRXB62u2Vuy47nzAvWymX6hyCnWSW1DzF5fKFj9PD3otCN4HKW8ny56QuLSqKS6SfNThdJnu6x1B2DUEfJL",
  "key17": "3LqmgBvqoSEeMwbr6ebaMGNMhLQhyPExMZJCmD6MXpqBKf7LS1Y4UJji2G2a5DPMbbmQh5kqL74TLGGGFVAUq2iG",
  "key18": "5F4nYTBx83Qbmabfkr4L7oVMxrxKyKPguCELewyG8oXU3TbpMJwd3KbhZynzPxzjtyRWn2yX1UMeTpgJ1JX5cAZr",
  "key19": "42KAFPDqXTRa6Pjg7MEV4grfEQv1HRnZerBWj9TTeZtrb7c3VjjoNGkrofsPSVhTRWSZsHMWyBNT7QVztQmBiybT",
  "key20": "4kmbghuwehf712ha7ipqTkpxdhXQd7rAf91di2aqCseQnz7zHdTqvEk4hXuw9sVFGkmCTPAdmap8iBkJ6Y5naSZG",
  "key21": "4wR5jtM7kZRKatMZKYAtxjyqxoUP4WJEYzTSF7bPHzdzhSuKeE198JKzQuoxhzWgfZ7UbtioxBQeFDeG4C1Ffspp",
  "key22": "2GYHQsUtVKRGeSU4cnfDcoGmgfjWbd2hT3rxrCgFzjJgFzyJuH62UTRsNGmrZmftPCnw1NQqYfDrNydrptTyydjn",
  "key23": "5UNjNXBsZTemsFVVvma6WwyJAvrNdeTcPKPo1MEFa8SqcXTgknv824TrZnqYEVTNb56LRC95TRQZirwixbeHfxPo",
  "key24": "5yx4pxmuHiFWnmJjFYncY8aSwiMbeaBqShXYLXH9dH3zcPzqrUNq4xVKEEiPLyYzmghWWAy4VGnHkYf5tTKTzfiV",
  "key25": "4RmMA8X1fgWJdigdwCH73jduyHDiHsbGKeJHuPaV4skmTJ8tdzXgFv6o26CKq46hgxRLRS9vs9VncEAeF7ShzTnp",
  "key26": "yVWetXW2UMQVxPMtJZyt4FnVqmds2XRBxFzPz9KuZyYdDjL6ACUF89DuVYPLRi4okU4urEN8iPqg3nYhUjZJGct",
  "key27": "5ddcoCV8jAGqJE41jxUNpT2AYWn6gVg82UXLGd7gCMQn2UVmn16FCDm3z7ysMjNA4E1bWHNYG3EpkwT9ZuQCpSBX",
  "key28": "5HZxmwKKqCUZCJcoKz3iMwJ2iHwS6ZKMjfzN6VgRsaBCrh65Wx3m1VzBnemmgMGUxMG9EBTiM9jBDq1XK8kLjCpU",
  "key29": "5B4pvHguzMBuuQtNGUuj2W1zyj8gFcpa8qvXNL94pm3ShAVKfbuNMyuYHj9Tu11LhMhUjXgcC3PkJMxTDptcBd7V",
  "key30": "3aWhC8E5NREYfRQi6SYfETpE5PFobvWqeH9p5xVr8owxh7DmukY2zuf9bdrUHFxpgVaQ9ENWKUyqN9y8hjAiRsVh"
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
