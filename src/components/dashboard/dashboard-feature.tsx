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
    "4jGkVbt1QPiffRmssZiK3E3wE8XnE9Fww5mKEembBVkuVNmdRgNppDWUJ2gXt8bRnwdpneugSZQRysFBVGrt1iMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NgVPDAS25R6eGGkBJpMM3vXoQPti1GF7LYM6MnL95BhYz3yB4vUv3PtxW6EvwaguazQ1bTySKwtSEcRpox5H3Pb",
  "key1": "2fWRynRw7SUn5WQ7rhQVXKUg416Hj71vMYp7TF3cketcrVM5SzsxL5LkRtqyxGdgWjw3z9mgh4VVS9KQeoZ7Sdd2",
  "key2": "uew3or5Ndd7W15MKPR8VfMtySJFZHYX4MVPPSYfwxRE3L4kTvZk6v22qn1YdsjZQm6XYGhsdFeqj3bVsDfgNHbq",
  "key3": "5cAbBDENHs7wxPGBmXiyAWZ8z4XRR3rWwyMutJrgBrdYBf6uQD4Jszwbv39oqMorUGNcgGPZPfq7nfvdpzTBDBJY",
  "key4": "659d82gno9ZTgPZz7BxYxM6JADESG6vk2cWjnTzgm22Lo4nzvgX5hXNtpkK18yCgKXFKgbkS1uLpHkxbVq2jhTs6",
  "key5": "4qJC2ePtMU85hFD8rxHLZTWnTwfC8KLcuRoD5rG7XGzsCLCG7HECJgWkeMxaMV2gXFywd3BEoJo2CBap1JhRx4uj",
  "key6": "4CbXdgrohhHRgyqiREEPUYY6cCdGk9HNToqf21vVhvpNnvjfs1YYDyKgSjFHEnQun77TXxWhWU35RNpzxywxdHnK",
  "key7": "QsiH2hnU69FV3mREZ6qy1o5ERVSwfxNsCGtmpkcnSzLQKwfNkMoSJ5D9desXb4sKsMmvbwZPXTTNWRboytrvVBu",
  "key8": "3jpcMifY318YdPKzUPXUjHMZmeTw7hcg6owhR3xLe3MpP57M5Ywv2xUQsEiHgSZftEVUy1DYEhqn8QDQH3ofbUVQ",
  "key9": "5qQGY6EW2MTuPyPEaaZAP2pp6gDKHBKRwtK5Ep1LhNmj4sipzypnDJDrBjqsnZiw1dC3UWCgxKCxn2c7p41xa2zh",
  "key10": "5Pv2aywE1D5q1RQttFq6TqsFBGHgnPemwLPGiSFTNawWrFHiast4Knc6ySACGtSqM9XB3JfoJQKL9X4THokT7VNk",
  "key11": "3TWhFtbuzjeX7Fg3yjzvAJZeedstJu7dYmswcKhbZABfxiy4598cB7BrfLmLWgmgLRoD1SmZ5XwEKDg9aP2R53HP",
  "key12": "5N1Roq3eZeLyW2GEF4GUbfLy1RFg4daQ2L2Y3GrVE9nK993ruhfLkSDMEXbrCDH5aKVmmRWR4hjwxBHWpqYD33im",
  "key13": "5Bo8bfy9SDmy3aiJ9JZeMb69xVXjAbUUSwV95eNM8ZsGDEAEMk1SGMnGe9aRKcuKZXqL7jAAWTXavjHz2A9Qjzyt",
  "key14": "38XdgjMmQamSpzkz2X7H6LYB4XQyn7nQgZcghGmasrMwXAABTLY3F8ens4fHrGvNkA4nBcfRiz7QfZ2XaSQ6t9VN",
  "key15": "pKCnCmF4ewKy7L8YCG9AGqhiRxfAwdmbr9VWpbWUA6nm14usZwu4EEkkuCkLApTQG74922G2c7YpqXonuCwb7dx",
  "key16": "5Vpmi4c8gGDqZ2VaXj3e1FADV8z9TbTtTEYUhfyfbmPuWJ8pgGJ4yR6Mogbg3rDuo7qkXVHtQZD5S4uaaPq5G7T3",
  "key17": "4rfRMKUhEd3WQxgqVRdoUaF6PQe9FBsESkGck6CqLoXrwK96KZvBHwHjgrPp7Lyvt51ZUoaYtAXiBuRjgTZH1ptx",
  "key18": "5GbXcjZvF7CNpgUiXoA5Jk4PZZoMudBGRXJkeT8vLMBztEwDhP62UomafNKUxUzcf6Wfxdq2ZUFzAKMqaz8ggiwh",
  "key19": "3FspyN3VTG8R9aygXa5dB3PEAjZ1VkhWbTXbsNsrSchjBqGNSE5VJgjgTTgsGJgPUQz9zLbeniuUrcdmG5tdxEdH",
  "key20": "4hDQUDzfUDHDmJNEPg92bVGvvYqLumLRFPK1pKyMzM7kRbDk59k8tx5j6snf24TduTmjExWXGzf24sfH5WpgXsm9",
  "key21": "5wD6Wchkr3DUyapfJxCLshvtH1RAFJxas4ZmfXqT9Eu7wRGyeLbMBezuqAsHzBNoiK5kyFrmpaHvoK2uyYbf4hVN",
  "key22": "7XPBB5R7weiuf4PKJweNZnjiSESeug71o2w9upZqbxuz9An8qj9JEYxuvcH6dtoeN8D5m2nsddvSoCaD5wZXi9b",
  "key23": "4GLaQnhYwWVkMhT5e6rEf6deEiwJTqbxAZ4yjHsde5V8hTBgfyejN7gv1hw8q6xVTXfaqMsqvcJSY2Q4AKXspvHY",
  "key24": "4hZXLpWJmAXcBcjwgmFEbbvBeipZDhwmp85AXPG3DhcCA4Rwgt6evmJtJw1PxZUqwL4ePZFfrNnWGN4ky5tVcGQH",
  "key25": "5sBfF2xzNSXf2BVkGGVTSxrpcbD3TgSZFQGyZb1YGZmfB9rUHPGGAPRjbbtH52RnRTfyrzZ7LbgwUw69skeRfLT1",
  "key26": "4FG7etfZxpHvn9HDzdxALCnaYbdu6HSTyoPFnfCoCRR5Yk7xPPeqGDRhwZQrxvrA9Km3xZkFYB7LQJjmStR84Lzx",
  "key27": "1GpfTP5uY75BM4X524LaYQyLvryh9w5SJ3L24bT2iaPgUbmKvWGgzc4JhSQrmDkwJdaNDZ4hrHmN2s95593YSQ7",
  "key28": "hNQB2jAhQHwyqSW5cpkuf5FG3zvrEhLLHdY1aAUgHvnJjB3WsEUaWq6dAPZims3BXj87628Dqgz7xV1eMFmY66B",
  "key29": "3kUhHwma3fQfhrFhRjdKRmjPsN3PujZPJJHCgYLG5dRU6WbKL51L8V2PMzjJBDuUQtgKfWrb5tBPuPcoXZzUQXRP",
  "key30": "3ePWFLGFAt8vrhykEqJcudXXjtUyPnRUjWVxAGFhHigdwTVgFqCDqhjw9PrjorufFiihDWwfdvBttwXB1vMPfkfy",
  "key31": "36a49fSpRn735Thr34c3PXso6oz3Eo7FWXxbKv31u8ghTGUERKvTtxE2mf5oxxUHAS61Nxi4KmHYDvs9m1CEHWZn",
  "key32": "4EPJEMH411mjeaxcctz9na1AcpyKear6F7dAfMN4KdVAf9x6fiLNXD39gbd2KAx2M6AAmg2BvnjP7NfWRev6rZbs",
  "key33": "3a2kKz3f5c8k74DD4YJRGftHHg4z1eQMG9KgD3ybNbULFqdV7kgwDV8e6KkZSBYSr4gqJbHxXRi998xe3f2Bm7qT",
  "key34": "5QjUpp8Y7FusrojepyAPFVwARaQheUjaJzDuFDyCyW5ryuXBNsRkQddWLj2o8HUWxn3YTzX3wXox3ARaehWk9gGB",
  "key35": "3Jp5HiwJc4RJ97aqNeMhoHbCQ9HNe8GxiXhR6Z4CQGMDErdqprntLb87o2AvovAXgyrgbtuj9VQuBb86NEF5b1kf",
  "key36": "4fECooiGprEmddpEK7897BDxVEFHEXNsDtGbJ65hsiDerSVyV2PkC15C2NyVoY9ZGdshTqXiAcqy3cvJhcZhJbn9",
  "key37": "3KpNUNg8k2WnDrsrAjUcmJExiCmK7rV5rQ9qmCei7e6ZZ4yv9fEyzSpGForDuNNhCSYMbQ3SEUK7ewAUm263YM4d",
  "key38": "3CFTrS1QorBpKPnCkQhrCqktc94sbWA3mAZikD6FRwLhEXLLV2MJEtdPXrazYsnbAj1JLvmfUZ4cR2agU11Yx5d7",
  "key39": "2WFTxbxWBddZF7VyEzHcm1Ujbo6Xf4wuKqne5q1hNaNBeL9EjnQU5Ro1bkcvyK8P7ed1m4M4uD7FS713X2Hb75iu",
  "key40": "PhUzu3Xj5Z9Rp6hCYRkRrXYCmWoJtfoPAfwsodSCLzopXyQSDvmZmyULfC8eBoMEfCRuDHMe1fHX4NJuSvUn7b6",
  "key41": "2W2FqRMwxMSJqpAjmb2FLGKiFEzuL9LSfhLj8m2Dj7YqnvUX3H9BY2WdKjzvSHeZumxWVg8s6Z6nZCEriiXrk5a1",
  "key42": "A5FYLou5oWp1TVAeAJa3vz4gkNMBXMGWyH54TeHXPawAGeCryi18DpqCkgUJgbUhUBcUz34QAa7RPNnEJCLquZ8",
  "key43": "28fZbmaQYVFXvAzrM12Pf83sCaYMeZBVaaN283d7mbETbLsrUwcqsgdPsyZitKVUG7YyqZrpx3RGcxFVCC5G6hRR",
  "key44": "2zwrHqHw3PUY2Wpm1vLHwpKwqj28GGjEQnqe4dk3fJtQSGvdjHzPMJ9QNKEjbS2xq6JjGGMj9i3i3XcbEfEBxGSN",
  "key45": "5qz12cR61F3RRQtGhgrPpEfXp2boEsDJiDmKezHA4k9Sz9kt4gD5oD3fuDXqM7oamDpjEPZqPcCWnCPMskEoTxyw",
  "key46": "2uKxk6wwDrqEk1dQJUnHSeN3gpbZJ1DkGdX4fRGYv7FrffwoNGXxcH7wo91eiJ3wGBNyeN8twxm3UzXjfmKnYt7b",
  "key47": "2oGFv2g2BKnfnM9oHyi7a2XmJ9Mrj79g7Zn6aqkvfEGSSkoZabGKnH1KpRe7XxraLqoq3g5W2Bt38fMXwrS2szA3"
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
