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
    "4gPWPGcz8d3LyFj49ptyds2uxznGMmWnTb9Twt8eMZuE8H6zbeE8ghjfmbxJGWtgAkc5EzJLcosPi3WPiQuQwWWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itKuqt7k2oncgTGUH6rMJLSg7Qpa62vwzZieZ9h1rb37aZHGVacrSXf2FU9bahHEHGGWYd71LRrwrQgrpEtzUi1",
  "key1": "JfvqP51cxQ7nVaFRXWYfvxtm1DJR9qrAmnujRqJXJ4ebELrtss72yfFjCFc3Jkdc5yLwGUc4PonsonkmN2BgMUi",
  "key2": "4Mer8SHJ3PQSFbSmHvRevC5o2DLua6kjPNd1hgFxxMZEVnSLFspewruGagUiTzgA9RyyHSdvC9f6g95j98t7yguT",
  "key3": "623GhsCzrDw4G6iQrPLTwVPHywV3Qh4s8zMj8vXmi73cqNZneajqWdY52wtDJEyxiTjeJnTBASqa3H8P6yQ3aXz1",
  "key4": "4nEJYyfQETzXDSq4TouTaFhQ3ncBPfjMi5rHtc94pCyXPEoVgVC9xatjdgZkYKzinBVic3Wa71AnF8s6D2rZWX6J",
  "key5": "2kKS1iZpnR4LFdmppiujzSeYDJghmBwqysuhgR9KatDK19uUcLb9LWGTb2oFkK85dinyDPqfnYKcSnHWHsByS8PZ",
  "key6": "31nXUpqRsaxcGhKMwhurnDRQWkMeKUbLBpiJUWQw6HALPZqE4NCe9UWruHnBdKVwSBNaoNfFUokgcMgWsmkDN47t",
  "key7": "4vZNkLKTwXt9VHhfHnRw8eVH4Wr1EqPm9b9i6KmYLQ59S8S7tGrccNs8ixuaLSuznFZggdouaxrBbfYsZnwPtvoG",
  "key8": "wtseksDsh53DpNwokVuLLGkfcNsWGuADYQ4q6qHvxnW1TaLGf3JyJR88P1oJkM9RxxKsY1M5xEyy5j4B7QC1ZSG",
  "key9": "5ZCpt45ddQyhCRYVubSv5xNudpLcSswv2gRZyC5vCDSRouXLogfqC6nnENurHaterRpbxj71mD6dHBVaf5SfMrw9",
  "key10": "geEx1DFFwtN9aKwm5PNeuFLMo7EPHsoQZqEJVcVFqUFrgJhJ3tyF5uReZw9LHhAREDUVW9UHU4peQQCDCoFConN",
  "key11": "LT4xTotibA7Hp22J1on7R9cuqN4HWSYi9jxXrzjWucK8eatyyn1nAh2JD6Ypi6U2TjL9yPQDpw1crLaihYJZYqt",
  "key12": "NS2oWtiUJBTtEhruSZDfksB97ffSCDJaHJoL5r2AhJze1CCBtnbbaEGtcmXyDrHqdFq7QqjkZJcGazytfJRaAhf",
  "key13": "4fXyPH85pbxMsdGNP6K3gJ6Mo3PWZgERtpVKMdkudAoBhDbsViWBvWVfpGbBVRNmnuKJscW8vUjJEUaHepuso7T7",
  "key14": "3tBtMWSaNdLjwnonWBkyuXjoZG9JeZuGnjGbJzp3LxYiP1rzFTW33KdZEVfZVDpgjGHouNMGyGXQNFkZBkUKRAQw",
  "key15": "3bzmC4BeARKAYTMex6svMQXwuUWgAG5U5sMQK4UXcdA83MpYv3YAUScHsgDH7RdjNTku71rz6mGBfAymg3HCHVrQ",
  "key16": "5UsazrrP2Y9cGuLjc4crdUBaCXJj7K5gQDei3GFgXNL3VKH4gWE5njJk8YGUpF8xGUs9VRkFtWWjqjcyziVs2QhX",
  "key17": "y4PgXrufBNdEDrjPybeY2p6Pq5mvjSt4AAEuN1SfX2XpaGCnKs583x4m1Fr6erRnhCn4BvQxm3S2muq8jo6J7CF",
  "key18": "5dUFowsu19TtvhM6pNkzpmmhBm2WM89UVmgdBXhf9XZehvsEMPUYcHRLgrxunfLzvu4BQwv1GVAL2SmJY1Vwc1ZQ",
  "key19": "4SdnRuA8WVvLWL7my5CWXvHrrYZT8piEkDwKSTSQs6tCBcJV2e3o6dwn59LNLWu98tpDdWnJP7jnQqfRb3f7gT9C",
  "key20": "A7EnpqGbZQbEAuQmWsDbFNQ9iJtei8RcCtRZTKytFMw3vb3s9dj3WA6Z9W7w7a8VPepkYVwsvVPaE9k45hWzp2E",
  "key21": "65X82awBhjX5py87vbtbe8jWzVYu9JK2JWLSLREjBcxWnMusMo35daYGADqdisAcrY5qLr8AcScgeTm48tQXeEWf",
  "key22": "qQDq9BQpoqVQeAxFwUedvjHDXrTKvaCQitUgV7KtHERH5Uoz1qhsQ2ECojkUWvdSvLCqgNmKvdqCUJMxCmsCi6d",
  "key23": "EksnWgs8JhRVP3xvsr2EL3pwWpg22mxncVybu29idYchGTdvRknTNW6Q1M2tXL8vs3y89UKFEmTBuSY3oBjTn6Y",
  "key24": "2QqQLuyTVnDe9gFG8WaskStoaeB4FVhKxy4kuaAwQK5SGNUHFDLyYQc24XeyA6YsRknAopYNEEEdoMoSvPcbWuAf",
  "key25": "HnNbUW2eg8RXAa4EPddTysp8Wx3ComFP6LYA9mRBsz66hS2yVaHPETi9EUc4cWDeyG8vE9WJrkdDAiCyWzQCDP3",
  "key26": "2wU7o9Vf6z5ddRH2LQ4rUZXfXJafdCWTwwZFVQPSyggeUEzzH7eevonZ18vwrygyUxUUWquqvfXNq1RXuDzYuxMx",
  "key27": "2k7xu9i4CWiPFBw2VeEDhzxL4phVgzUojLB5Dqu5hejXM8zCxarSpuXt72oFpchKgvmY8T8HPgEekSmbMomdh2n8",
  "key28": "5G649fAzHgQcJBJDSQ2pt6jLNRNh5VFbNN4Qbj5q1vB7voTGX9hmdqUQxpn4DqpCBR3WjrnT4uaUWmkLAVEeZifS"
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
