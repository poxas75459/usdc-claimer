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
    "5Vanf3nhgrjUGL5ZQNu9uf9JFegsFt5hEyN6ABP72vs3uQXhc7rnLP4kJEboyP6L77jz3iNjVUH9k1VjbYtEhyf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rxuhdy82DxaXoaUcVeNpKwVXkkRWa8qf6soPgWxdppM2sfBRfhfqQYSnpx42CrbNC51eYwmWuhxCWSFFaW4GkAr",
  "key1": "r65eshGwb8SvSgB7pAgUo4dM4sjok1YXfvUxgChKZLYsuBNN2UKgzUvAiByamusNGqHEypwrf1M5ts5cCw9yGxs",
  "key2": "3t8LCXg6XhKZCtuC2z7wZu5v89nm2x2uyqnhj54W9KUPtNidm69mjZVgUrSttZgBHSC5jhPqFfGZ8meCv1tG4bZ5",
  "key3": "2ShhwgvhxpUrV6WBycXdW4vwZNLDQgLgzKXALSZ9xE6fKGqkcr6chZt3iSvifZJ6NEmoVwWaYryf82taoxZmxQTY",
  "key4": "3wEY8KmSivedfL1sZNTkqsZPzq8pqEvdhTPtSatBi5HfuSWw3RHYpmmPMo9TAxDiDBRK6h8itYQdCKkhKRNp5cRq",
  "key5": "3AhzvENCYHbwfdc5jjDa47eihL757LzuqJvv2fZsP3oomU7c3A4aHeKMN2peLaMrxjkqksDs8ikqnfvcJyPCA2nm",
  "key6": "2yGiyXndi3RBmtWSra6ZhLShYrKRdrdrHdqvocjEsAwjbahRTtbGMVZLJgcW6o2UfQMea2BFHrezXY6xeFCxvUB7",
  "key7": "5DFk5AUJVT9DgpPpWn9JjmEBssdUK3BUQDqUa4V1y5FHC9n1Hjb9mswdyZDq3j7UFKZFhU6FSr6s6ZzmiuyQe9dg",
  "key8": "3vaDfib1hRuk8CWEmZopHssFAeaHy9xgws5k2xUqXgd1HDENAtxYnVsvLLcVkvg8aHb5LNn54GMPqgbxPPbK26ws",
  "key9": "3K9u3HW4RnAG5AUxkaWX92FJNJU3DVnQvooiqgMaurn3PFbLJmkcLYpCVXjMSVaeVKDXwLRypN4H36wjxZxKBPSi",
  "key10": "24WTYf3Hh5zZkyBb5ioDKvR3txVWM7eAbCvTJpkHkLUVp6uUNXdqYBt6t9CSUPVnXeQ2v4Eo4bgzxAbEURP8EA9g",
  "key11": "5nfndAtGbXWP1KFJX6osjrxnnqn88Adik9iQpn9gfmALN3BwaGhcpdye4uJS26GWHu4paeTUnL1qADbfqqw9Ariw",
  "key12": "3KFF86U8pumGL3x9ehnBNCVzGA9CrHNQhnK3eBCoxv8WuoskyyrT7BTLrRkjxmoH9bdDUki7o5b7dD5VyvqYuDZN",
  "key13": "25kUNoJuN8iJ5QAEBofNeAHHcCah8u1WoAytNsbsAiMgjo65QXTR8ZGR4hzq72rnMnYPcAoRQnHptAfrxogiZMsh",
  "key14": "5oqL3CnFAS6imx5SB5pUPMTmGDLaAMmSCfnPbHjzkDqNgn4jSdoCdKkX7saoLuAtf5kDickEV8iLxRXCm2uqBZgA",
  "key15": "3ReyjZzXqCzUm1qtLWvjThNnN2Wga6xo4JvM6BGP7adtksRJVpHWn1bPGjnUvPhPuJ1vyVADVBiNnbwR7mSeLM4f",
  "key16": "57YiX6bXNeUEL1gCnp4bi6TdxDq9zWBCuEkTRbxNvoqXihepSLzYBaMhfAnZcz4emTgcBtgFTkkQEiGHzijVfyz2",
  "key17": "48Z1B7oMcovNr23XfqMKfHEkR7dNh62WXXtVzMRkWgPHxYUeRgswf4sACjgNLAwkiPi72eia3eEpfc5LdMVh4qV1",
  "key18": "47zw2FQWKuJe7AVhEL4Zi9KG3bkakRTjAT6iaLWvTrkceNV3vHdK4rdyJ4hGGp6ofmpNpx2dPM9GymBrrAa15bDq",
  "key19": "2imqNTSiy3RXA9nJNG6hQ1vfM5CwfR9zgk5Xg2peFUU7ahPRYdJHNfQgLY6Wtr6JxVWTm1QFKpZxZNRXDg2NQCE1",
  "key20": "SbvgGwnivn6nFSN1PQ6wd9Lt6sAMUVnWANQF3p6QUSLTy6NQ5T9Rhyqpz2u6EYzXiwd1DNezTYSw7diBbkRPM2t",
  "key21": "5P69j7zardLzdqojqyf2neBPSq4ZTTMTxvjw37yhfzDbFDuTTenhq1NCA39RiBEYCzYMNquYJ5h7yE4Q8q3C86St",
  "key22": "5EGa9kejXe4tkDkrVgJHjtK9q5htQmvwzUSi3VRVrR8v2zboC77UMT4aA5ebRkxCUG4oSZ5PcQjV2x8azokN6RBX",
  "key23": "UZyt3DxQYv2QNu9YhV7sAnmknCwS239PJTh3yNA4bWUP3GdSXfWFFKqeZWsKgM8qzKWSukxG8x3VWDfL4LmFZDt",
  "key24": "4u21Qbjs2TD3xrQv4dYRfPZ2aMbTnNMgVgnDqnUQDDG8WdQ5FF1VZWsxSyLbozLLCSxTr7cHmayJ7NLsmDMsAbqs",
  "key25": "4eExTbjbpZ3rGPaAAKoq5NkAS8goZwEyBhHfj56c9osjVZeCxTvvPDUiJ85mHErBjFfAyuSRmFD6AguiZrvHjvSr",
  "key26": "3QWYvk9GnCu3X1SN126sFbeEa153MSKDVen1j4iiCQZx5oGxmHiwBEFZz2oM3HP1itLnbatPKQTZweERdTAqwqhM",
  "key27": "6ghUwyiViZdxTE2qUtj7WoVhXA7C2A4iDwpiXrtAd27fAbFoHcWYF3xphrVNNy4efEM8RTHCTc4TStLycbb5eiJ",
  "key28": "kRVPQq9tytoLTpWm5hYRQZfwXMaVMhV6VnCD591GfWQwNJJaHMJMwWxqrJGn8XbKcwjbFaUT7TNV3bYsWe3K7Pa",
  "key29": "3EhJ8PPL6aWE4EaYyaYmec9hxfYyjZTmCiu8WhAdZdLDc1aRHBnaXkXm6PL3P3LKRvbMWmFyk4xxX9kp4YNjYPmH",
  "key30": "T7j4E3PfFgzKuR8oYQo5Fc7tGbv3gxMcRpaNQyefRBfmZkxmcaEfe4vM7t8HgQkKc31G3Zfk8yS9bK2un88SXY2"
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
