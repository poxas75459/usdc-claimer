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
    "5whKyNyMg8pMnyurcrV5SBkrmWrF4YVsLVT2yvVmoqBsQCjpcrvNf8KVDS9MG2QnM66v2kVHG5CzKMV2YruL5LhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MiMkHQ6LrZpBVdSJKSxAC4eT4a8gX29zUVZpYUChHVsEkFKnqk5qVVrWz3BP7ATe2BHFN4DkLg5PpRypMJx7iS2",
  "key1": "31WWDXtdvu72qGA6ymCzEYmEVNWjh9JR5WNbjGezzbykKhrNE27CoUGYxfEdzWqSiKJcm1xpxXmByHRnKQE2G4J3",
  "key2": "4HBKLqMCbVoR8Z2Kmdhw1W3H8iweNHjZrz57rWJ69k4Hx8AFSS94BVwmEV594RFFweCuzvhsbeF6718yiW8hUgjU",
  "key3": "2H94b83JjRQr6RMBmTBZT8BpCdCcXJErgn86CrSAkFqGkt8tzLGN6ph5Aev2ShCrKbeVQWBKhsQghPMsPsCer4hp",
  "key4": "3Bk6nBYtESogo6E3s593BAw22UNBfSds24ETqWvLtope8sbYEwcywQvH8y2uq9PedJJdSfRhhn4RLurxpFd9uE7A",
  "key5": "3Z9TnJr4wUYmBpLDKaHeK279DDFMqb6wX12L6LyixNpDDM36ApLF8KDuBKDhFzh8AzYTLzsbNTCrjmnPCQQF5wLr",
  "key6": "2jmGABYEN8uRt1Yyvv1TK6VAEZEUy4EdNt9pG3sxHHoD14Df7dSKZEavzGjJzZa8ZN1qkxzqXZrztrD8fhNmfXb4",
  "key7": "24P8dHgkAaMLPHhxYBuGbd7yjf7WP7YUQ3exFPfDqHm4M7W8WwpoGEeXDfkGqGRq6hHdde3Wz8LiXtGB8ohT6fQP",
  "key8": "2HApWfEzP5migewjrJNNdGXg9gkYGTSqdSf6iyTBWW1JjuKtMuzHXLbN7oQAPdWKbjtr2LAXwiiTRXTE8mDt2kxR",
  "key9": "3KFRh76kPChEsn7e3wvw6sJYAsEyWbEuwdD19RswBVyRVS3BHhxR7hN4oHq2CezYsB7o4FSoGKSRcTaYBhSXqKh1",
  "key10": "5fBJY7Wo5Sf6sXinJ2rFcFubYjENfHjMQAFJizDPsn8RxFCHTztygi8wARE8mDGRh6RL9SayAWmixwAUD8Sst5ZG",
  "key11": "5M9DYq1UfCmiuyWWrDSVGD3CcfqUzavY8FdokHKQpJwaXDBFWDvbv4u2rbvaVKnacC88X7xKqTpb2uQejd97qXUs",
  "key12": "oRjLRTRqzYetVUL15WfrzZCU1rdEKZpuBqqDWJScCzFiEPMtTQduAbozs5kdASdyzYEBuGAs5Kj6fKtEPR6xgse",
  "key13": "4djPiZh4ck11UsUqojfvABZd1D8XuqUBVbkMnm1tQHB7AbUz7JRq5vK27QJMA3cjeE8GoKAhP6jStNnYMUxnw1L",
  "key14": "2qLUxxQ4MgTDaNJJazSH8eqtc4aJrRor77R3bEDBu7WxQyxb3AbFkwrjAkCi3q1Cn9fL29z4Z6nNCTJTscdah1mS",
  "key15": "WWAJtGFu4TzHVgs4ih8HyhyPPnJvFK3VUg2wZLazqY1RGP7Rne6pa7tVmT6MWCKnAVGxEw92ABWCrfhsM26PBD4",
  "key16": "3TDiegNeCVHu5KDfzgPnUzCpRJxmAQ53pdYdLVzVW3bKbMssgbHGkPNgY7oQ8nVna4xiepdQZ59fNWn5fUuBHcLW",
  "key17": "4YgzWEDpqDi8exmNfx45fitvYcDGykYk5GbDwCKAkR7SznuDfQjub8aYAXwbELTb7E637JwmHcBUsSZaq6ueX9dW",
  "key18": "22TGwSa5jVA4u4JJcTdp17eRSHb6d6gRJwV1j4f6ZeNamuPb2Gg1qaRFVaVY1DvrhRBaQi7kHgrv1keNWNd3SZTo",
  "key19": "2uURhrZqSeRFBkcX7YV5faHpRvxhaEE6Parmc6PnhJ3mhWk41Y53b4uGbiQRiyerCa8M35tN6fhrokY69s8DCWav",
  "key20": "wtK1gah4No8kmxiJodv6MCiFRVXNdHXgYxZ8U4rK3RZtw6Db749r4vFqGtWuWjVevx3LhNqmXG4jSzG69Nhb63Q",
  "key21": "4dHG712Mgc2asVFvBUQbwYxycGxQhadfXq7jbtWLydc2iys8639iTMYcdyH6WnuJGV6WvdGdtewqBSGqYBNzERtu",
  "key22": "47UKQSb3nmLeEESZSG8KSh5Jcm3zagfLEjoYELBgm14ES2ed4wdSgnet6c3rANbNonfoMaAhscuRWz35DgJC5adK",
  "key23": "62d8HVMBxAaEV2sxnwpEdhxhTXh3JnqafMUXgcwKJuY9sh7yq2gK6ASTP8FyNokVFLc3Du5JUvDnrfbCGghAELhE",
  "key24": "25Y2eWVKP2ezAX7kn3mAjab1uE45LnyhFC3T6aqsSPaWFNBbDY7UH5s2CHKRrm4L7BCNYbP5Naqzs2vWnu16NytY",
  "key25": "5Rq56Lbp9HAQMJgR5vBMgYc5o5jscVbPPVioZz4TaFudqJgbfACV2dJZm4cXmRdqUJiZ2GCZHMTJgrJZqZbiswJr",
  "key26": "3dJXYgk6F9yxwUaKi2eD8N355iZKQjuDnJ1Gxdcqp8vkdH8mbrrNU4GRitUB73nzxaM3wqSW929UySBLwbL5HbhP",
  "key27": "5Sd46uX4FdcL2drHySPDn7Ldm8deVZWHRbtfQSPwBRPAzuZor8fJmrLSzZbLEviTR1FmzMsNMQbJmxwXe7aRtPbi",
  "key28": "4i2hBUdaWpocJxdDu2iGKmV6t8EfALMGu5azrHMuu4HvNLkNfERwqH7zFhNVKhmFQM1LZ3xjYirajywJEmnnt8PQ",
  "key29": "3Ufjfzf4B24Bfr6jLBmCa6PVW1gKfpSEVtAedQPvj2wuG9Eb86ERkGi5GF52Rgm3TMWHRiBSsA19yW1hTMn3cZhJ",
  "key30": "RHBxg3S1byJt9g2wHe3rSeEewgPUe42VHBnyoBZFxLGNQG2VXDp4R3pBfiY2T9qSEGgZk296aTXRUCcgiuZ52qj",
  "key31": "2BnbKaA9Wm9dLCdneY2xqhoRRxkuFbiCFQn6pBM96PHZEM71UNnyrA28jVyKKeGZCMFkwAxsqu8w8DNgjHwx5mrH",
  "key32": "3ShXkf36gZEvxfc61hoZj4kdDfkQk2au9vspHk8cN1GEhRPde9Y32g8mFZRD5C2puAeFxBV2ZcCkeg3uwf4xAxoD",
  "key33": "5bfrgfGVXuSV59xTbsy2CmfwLzT2tz2sHfDN4taizWwo4HaEfxHcLHa9Auo5JdEnA5q1h95TARjza1JpHcaBhxDF",
  "key34": "2CBt7shDpd626DCvGLTeFmmfwqbycnZmq86kqvGuutmX1dmRkWfjmtbLyoG3rkE8MrhofqnbxYqkEneLhSJYSKQ5",
  "key35": "5ZemNuWGjYNhSFwoT3nhCowb5kaHdSqJcYpQeFtQxKAGXMKgxRd8dEn3N4E1feheQ4bo52dMgYdbbNSTXCHZ8H2P",
  "key36": "2UxXu8s5ZEEGjzbM2EH6ah8HcGY1YjwjxQ19DFWHfG4h7vqwaFMtah81wk364GTMsUFeXMx8mUaJk5DJH8pkwduh"
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
