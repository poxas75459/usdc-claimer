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
    "4ofC5DVwqSEW54D1BBu7xjq8b79FBALmCVuK6uMeiBdxY4pHDdSUyVL4xFYr7b5ppEe4uG8PrV2waj7tqKgdouma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jMHctpgeKY9aykxuc5ZB3JdttVimVGe5nKXzQjpWsx4yHkvh6Z1kGRZQdrWHcYAJAL7i1eHzHSw6tFKmUXHyWzK",
  "key1": "sJG48dsvrw1jp4SR5KyM3ibAL7kwurTMt8oxP4zNWRJf41o8vYYYYcmuVtYUZbVwZA3d5CjWA8iZPD5vj67UywM",
  "key2": "2HiqSq7UNztpT79HTb4MPE4qcEtNdMBofRhEKgxa4Z1XadTRMHuB2MvENbXKoGarr2N48VjigKMDbgQKTXKd5PDf",
  "key3": "4ebm8116vshNfLBYvbfJisFc52NxRhDkmaL4tF6McT3qRLfUqcb7JebAXapBDPbYox3FHgSaPYjKHFJUdPHyMeoy",
  "key4": "34utVpj3nyfzB8YXqziyvhS7EqEPdbDifFj13HtQb1GLpErZCLrHq8iS679f32tgBsBgyhhcxUDVXypQHCbjMqSv",
  "key5": "3h4gwCxJm8Pc34MhSBPvzRMXyXFHH5Kpf33QEuJxjGkbcxLHDaToG6aFfAEctZNFgKMYUChmPPb5Lxw3N42oE6i3",
  "key6": "3vg5fbUirEtappLqkWB8u3xEQXYRNtZQL8jbKPRCMgh1TNZrn9wNsDNw3HvfdFSbuvY3LK2BByHva1W9WMH3v499",
  "key7": "4NdyhvsGA3JfZNcAJrbXNQAoquGWVKDm7E9zWRk6E8D3RKDQXKkMkNr6PV9c7BcidUyhiuWy6Mmqmo9Noz6MmmDm",
  "key8": "3gKkjQ1yKs2WrzhjMCKWheXqDC52Af1JgWcGZMh2YpFhqxcMcnYFRJMBEorR9hjmJcGuxaEhwkMtbXjhQiF1ixGr",
  "key9": "2A5kCstgLSHGscZ7RZF2x6haWo9iFXef2ckwHCNGDoe2f4a2T5DnoZePrvtiWf3QUSkZCD3fngfkXSgjZ36fd84h",
  "key10": "4eMp85xXVFnQaowrYHiDJTpiQqrm2cNZ7VByP7oTLjiogKC8WXwgJpD1HBL2MFaAmn8Q2eDSdwuXRVEoKCxiiUti",
  "key11": "4zscJzR5bmWrpSUfXRiGPPZsf6BsTSU56diGqhmvNTC8uHRi37t6qbwWgE3kid3yL1KdpMrRbtaZFoMVxKopGf1G",
  "key12": "Bt5t5HAPu3k6ZebfkMXueLUSppi2cCeSKDwftUd5cN1Rx2rHj9EATjtXL8JEr6zxquPHssLbZv7b9fGRkkdwzTF",
  "key13": "4a2QqKh8nJC46jid1SVhb4qwKp9UxwHkBGu1axHBX69dWidAhoRUjMqyyAx9J2Euha5eM7zc3GP9Zuj4e2fbQWbC",
  "key14": "29Up1bj1bTeDKiBcVK412oUj236tNuH6ZGJme9nZ9vUnv362hmxrtzsG5r5gpstSMZgccBEjGcas7HK8ywwkKE3F",
  "key15": "2gt9fedtRZzchEUJ2cPmdTcPSSePaYsy3ZGN8zoHJGdwxdgqxowwAMakz1DJkstXDDXn8ZZVFAeGY7tRpcjvGmph",
  "key16": "3pZp4Z8ZCo7MHygjs3cXwDANCKjZ3dA6z5kRvdqtMUCApjxiNHzmEab2fcDkanD7V5KEQDH5ox19rA1MiUA4p6eR",
  "key17": "4A7Dz7ATwWNrrmqB1tRUDJAZsYPwqUmGn3BDogmHdEjCPETsXcUtuBHCC1DM1eYFrgod61RPPhRzhjFBzQ8RQA4G",
  "key18": "4t8LTEZu9G7GncbPtLWtV5Nt6WE2eUXrrMmEXGSLMv4Hpak6mMQDzJwj96QcrzP8UzPBTn4zuNGh8r7PWgn4M2hY",
  "key19": "4JnNFLJvV9YKujLGgRXrj5WsMjBMaGox7pBfVVNkQSfzEdyRq696RQ89cbCuWm9Dx3rWAnEPsB2DyKhnwR2vX9BK",
  "key20": "2XTtonN6BNBwBgfMiTS3g23EYNQrpSdrnvMAHEuY9tNjzApaXNCuyKPApmcM8FMk89MFsnD77kUmkgt2yuLaSKDV",
  "key21": "XcmQvJiPY7Z84uQ7nMckief2Dh6K2CCrHtbLsbhQneXTBpUM51hsnoWcFHnyXiWzCeh9cFNSuRMqHR6eNpMdh66",
  "key22": "4XisHA1Np9jCVXHpc7jczdhPCM9skSfs4UbmoFH4DZ5HrWw9HihyqEev4grfz8NhKLcsE4Qib4zCHPoddzVZGZrz",
  "key23": "251YgyYQ5gLYvSVJiuWVNNaU4udJZ8U3gTpeWhtC7Z86ZkZSX7LsuM4uDVENe6v6pK3JEwmCzvEUKYA3GXw6HF2C",
  "key24": "33Ni7nkNSt9kYb6iZek8u4R8SQaorXtp6hEH15je3NnnoyEuaho5xtr3bRSRctNkGMJEBFFLTLbcDdGA5Mw1pifB"
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
