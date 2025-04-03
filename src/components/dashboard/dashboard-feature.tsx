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
    "4SyhNkeEdef7j6fNesSPW21ZC7Jjk5G6SdVf6MQ6RzFn5dhYqHbgegfCLrkKPXXPwy2pGfBvkHwrCKYQGH7RTqTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBfCjwVv8LFKJq4iSQ5L8qxGfaBVBSF8AkdHxkMQU1unhEXuw9GU5WoCbhGieAf9LtH79LYT3kziuw8EZMkkAEm",
  "key1": "4votYxFAZ3BQBaYuc8rMfUCZDWjSfcKoHXBoirMoYxY66j56wy51snMgm81aYMWVkvSMtdrWgBho8EKxK6ZZsEc5",
  "key2": "426xAuAwPjVyceKmAZzMDkC8ujePhZdUG3VaYqSgfHMKeA1cAfmJmdH8nTrmdf5Nzg9dR5AGtbcgxfJeUv325vmy",
  "key3": "4sqau3NQnSuW7tXLihnG4skT2ppHYetJrJhtSmei6gBuJMCsRonWLvottzTSrHp6b1b1wW6TwAm3E6nySo5UFXj7",
  "key4": "2X6oQ2LedMHWPjdxhPCp9yUALGcJqgTkuRgNuSGJuDehSBHqoKxCU1gnUus37XXB3KiLgJ47MymM4uPnm6PA5i7U",
  "key5": "4jdgVA37VFKVn9MG1rSjPMQhRvPC5jus8k76ERmbJzcEhS3kEPzjcJu9HJjtC7wPM5c1enkX1KzSJTatNBk7j9RL",
  "key6": "XL8uPspAFqyRB3HmoWemzm7cG7VKe6fzMwB58QNqQEs9u6kQu59b6JzubgT1Lw6qD4A8TdX3o16Mj1Fu7Lqxcf5",
  "key7": "28ihdfGkK9rm9qDSeL6QcR8Va2b93HD2CWFsbxEvGcj1bhigMifK8ZbamaaNPrsRMbpiabCMx8wAYuceaXRCftYW",
  "key8": "2nD8u3HuUcvatqMQshp8i7YfjEunrTHLjKLnz2ui44HVLnQzA86XSsaEPUDmjqrpWCCrHfw2kGycq4q2wUnQAif5",
  "key9": "4FgDgUurNkHvUk6VnGNfV7sSFeEvwVz8goiYgEzQ8ofy786x1mhLdC3J4XfMcWSjzfHVxFuc6wWWGMG2cnfSDFYz",
  "key10": "5SSp5ZwYaUWUZVUrhhPjhZ8sHgvcoYnT5gAoxLrfBAddF1mLby5RtXXbGbKRYagC8wYsMTBNU6ZtZXXtqU7PPBcX",
  "key11": "5xEji1KrDMuSSk2Nputie5cPuqKr3DRAH3nfPKyYZFDe5wzLQqABvRG9tW4qPaRL4fP9g91sdZtiu8WG8x6e6698",
  "key12": "5V9nV9aScwywxUbn8RvbZzgpUFezkQNLCzJQDDGAQH4FuJDw8aZUhVTwwuUBDmSVNZdVbeLjg98CjcLJaRfnfzp6",
  "key13": "4dNDTz2CbyVAXyaV6reMBN8cgMBso9s9AKJ4n4TyqDrZL1ZqMRVUzScwpxy1s4NxtPw1SqDLLQCuXv77mMbfhLRx",
  "key14": "5y6DHzsxuYBmC3vXNQBV6L53EW8HNcrpC65o9vdRt1yGMTg3RjG91trmcXGbQUaMdMPnyPhqaDAxunEY6H5VrFRS",
  "key15": "5XWaDeGPa2coAZy7SfUXyHqkVv4sHAoHaAGqDdseyGZ4Z1oLiSiLwmPKTx2jy1iWSF1oC39diKQJuPDBLtQB1EJ3",
  "key16": "ctYKQx4uf5DPUFbZa27Nsj8nmJjKXR85i9ADtmeoPiL9rZ7g4FMsbvyToAuuidT4MqLEY2D74AFuChf16U2kqpF",
  "key17": "u8m11JZwLpK2wZk6iy8nwvNzUAG76VZhX6FEcfnSL4f4UACT8tSDJp81JvsuKN6RBjfVnBVQgvRppoi8T7i6G96",
  "key18": "3np8mB5AQwwKXwhAy8n7qGzh8TSxJqxcDcgY4LoZcG98e8zdUSUtxCGbqtjPACg1XMmmsUyVs8UXGvbGg3kScFd3",
  "key19": "3crsGURcCek4UDfBKZ9v4HXsTy5wunnspQqGjr9o4Pf3SSz1Pd1NZUP3UhojhmEYixf3TkiWutHaScTgRUr2xj6J",
  "key20": "X1vEU7a7ZRZAbcaEV2ytP84fDuRKN8F85j3rcANnzFycZnBGvSZx4nyiRKM36T4NBRF3DwinEoTmFCYby84EETz",
  "key21": "4XJvUR2Hx4GE6NPFceckVzFGC4jT96Jrio2F5NBFYxCtGn6X5emHyudgzG868aQRQxmETfvKzpkdhnq1uTJXpi5w",
  "key22": "2QeF1wAgveFNgPx5HxpgSGV3aV3SjEwqwXazZC6zhNCwusZXJjWuJRiQJxgQ4oSRqAdiv1L4tBho2DG39fZqxXYi",
  "key23": "5n28yPdUijCHqaLGwgjjxxJv8wzSdcgXFehF92PtX4sqH159Rb2eWoZ9KXDX8m6oBtJpq5AF8UehUWAKJMJcqTMN",
  "key24": "2yFvXaN5kzu8gwM6P2STxeqzu1gaPWJiWk1YU66E6F1VuFeKq2WXFpfhcYRk2dBYhvhYgkW6VShn2yMQXMBQcF4P",
  "key25": "ocse8j6ZYdpF4SfuyfEaM8EaEyVcpRvoSSMWYNL9mB3xFuTec5XgdnYobcppCMh8Y83phAkhaPd7K5GJggnVThj",
  "key26": "5teUTxKV9RyvEuUTf3hGDhevd6LXEUpAaTvex9niT2hQGPSeLgf6tvRT8Ar9226y4DQkwAU8aY547nFUNdbnLtn2",
  "key27": "4M75VBWoEnmvHkG9XgHdNDQ9GmuaczS3LfDGhsesjqnAHmsow9xzCjg9tt3RTXKHnwFkHRSTsmWGU5uXkNV2oo7Q"
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
