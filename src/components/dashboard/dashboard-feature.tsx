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
    "GZYtnsboDSbizqjGzaCEaydM3RMhbpJckj8NWarSpLhy9PAD4it5ujNjmSdnmQ985yKWFmnSbDvvxaarWeJrDpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jfihYB1bC9MPyNpWF7NGQgPTy9CY4rkUyTYbWQCWo8LjHkJvTUxoEA8aRyRVKRqSGNYzgTuoJxLUP6gqtNRnhy",
  "key1": "2HucbZKcMPVGd3d6VrnH5cF8cRaZKnFDWfqziS2XqaWWhoD4R9nTALniFErtzNBhUkdM7E8YfEcHFQJeuRXVnRQL",
  "key2": "5xY3BQRwrSmtdPjDsP6TzXdnEVifUpXuednEboVyQpJZQExGNvx8prX8fGyC1BVSNrciQ5uo7vTEZFe9xKCv51dC",
  "key3": "bgfXcjmBMXrG5tyCT62Cbw9FrTT4ZyXhpBxCY2u7Knbgg99TgKyhbNSZqa83Xwm5KHakJn7mApuDVEZnVzUoPh5",
  "key4": "GjCoMbfp1EF2fg15NYX47Bjcx5mTWCNCxuNFzVkF9WphJAxQmsPvueyMjFUDmTsrSZ8JdPM8pv1yq8FKU1zYoAs",
  "key5": "4dSPDYj1z4rhLHos9LKS4nqsz7KQ2J1jFNwgKJhWEF31oGC1rMySy7fd6UdBhmMyjuFscac3ShZcCafxxAiZsUTy",
  "key6": "4GHM8H3242wgbjui72T2cB8umX3wYg5AifDfwSBBfuVHyZA5Tv3Nw843BTha9nXzTxNL5u22JnNGXXLwnC7Crovi",
  "key7": "4rDHPb6LmgqDdcQFLUG3NuAdNAkXT2ptJU9qoD5KZcRSjZ2GJjYD4mzoSsfJvHkrmCkH23U6F93ZattG4pQDsyDo",
  "key8": "5fZGXxKgw22xhnbFs7vPLPUAEv38BQwCVLXRvJZfHG9VsYA9X38FGbxVrRAsFqSHCLk93YN8dfWDi8iyMbZLVtGJ",
  "key9": "2u15mbFAGA17zE5S1Uk1TYssBro9rymZbxG9QQejHcu8s3gY1dsDZnGZA1ekmR7jpmtVok7WSJtBWucz16EiMNyJ",
  "key10": "2CPm17jw9z1wUPcUJ162h6LDAiZHTUwDEZ2KFKNk53JoDfvML6iokc3htYvoyKcSy4BNjtoyW3eutoDqQhczqhU8",
  "key11": "3kTX3Fh2YPc8BHaK31GoRyBGBDT2mGTCZ69XjCY1uXr8jczmkrHiwLKQTdQKXJz7QKGUJ4J5GhkDw6PKG8kQTeRR",
  "key12": "3688Np1Qcu1tenuREmwvQy8MqYsjbtf3Fi1coLjm58HFFaFsJ8yrbw9rJaMtMWqjELs2aapmoPvngomkMejbY4Du",
  "key13": "2d5DNC9N9qQscBcA2wfAKLx8Y2M19u9QqqX1d2WFYgVT1NBtbmTFpPw5Er1hxSPwR5E2nnDKH7go6b1E4mM5eoFP",
  "key14": "43XA8DiBkUm7kjEyq6Y9Tui1LNPpyQ9fGTd6LGB6UhwjCCTpJBLEy7mvw3KZdavKimKXYqCPMq9kKZhKTPCRmXFF",
  "key15": "4cLgZ2HULTCArmmD6NYrZnQKWEfgtm9WZrc6McwKomAgfxsS1ECPVuVSRnXfP4taMTwzNGcBVcAvXuJo4k6XpXvf",
  "key16": "2h6upMPPfKdEgrbJ4gxbnUcrYgg5QHtLoPaDWutFLW2cJeEFVnV2cY4qg3a6Ncj1sgb55oyvQpbBiP4KKrngpm5r",
  "key17": "5jVJV7fWJa59exMXF5WQLNJY4KJ1ApmrU95VjovuQy8Zd7Z1WWRRQVSCT5CpGoVMdekKYLfYyZ3TudftZkqKjbb6",
  "key18": "2MBzvYCr693tb8QYYW8rb2hoeHcWwsbhMYVDyX1yBL67gDjjCbCrPKFLE339ac9j8zRKcDo5ACNcxCcwK4gPxLjq",
  "key19": "5ReknAcbb3F6AQXzh8Mw5czjneyhf3UorKKanDx4sRXFYw4xMhSYwRNWLwF3jzrKoo3G9FRVP1koW9Ja1bM2cNnT",
  "key20": "3HZQ6PMPSHRi1DEzaMtfwrZVQKXDPhG7BhWKRfop9rf3NDCbdFYq63rtFpuqaLSbxD7ibsqPu2XHYkKXapzuyEiK",
  "key21": "4EYkkq97xNYhKARAP4Vwn2Hp8Bwp9qdaPnVE67aWmUw3CVHnT4t6ccNNz51FB7RkG8W8yweoJ7BdFbXmtAtcpaR5",
  "key22": "4G9UYrdXmvHQn4J123EYQ7w1hQoYJmik3bSEGkeAxu3Jxc8MBubd3RyWHTE2c99rGHwmkcKXJ9PTkkL3P3gp73Lt",
  "key23": "ofE73aLzqr6Aw1PqakzMMWDpJEJNX8yHSq2HGtkSBFQEnGX3QoaR2tCGXFc5q3zYoyJWGnD3gJcAk3Qvpk25XpU",
  "key24": "23ZQYDwcrdo9upTjnNjV6dj7j2kmNtr49b7Jd1gRTK6Zk7DLHLrom68rr3NMhw1XspQzLPGH6HqdZcss9ekiKg3e",
  "key25": "HSPiWikAp1nWKYrpNfePHFdx9kq2fuvaLuZ6gzJf2oivPeS3Sv14yP24TfNxkScYfEUds1JJr3tDYqsHsFBvdBk"
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
