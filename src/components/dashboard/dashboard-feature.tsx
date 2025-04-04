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
    "XSsHFHfha3U7RAKyN2gyKAXbDgiikapqGhZRCZotorTmErdhZygL8Bg5BjZjZ2H8kdzaKcBe3i3ybYxjvG1JFT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jj1YWVwSCBsm9hYNKdFW6Ezwi6cixZ2EJmqFzrkjt36qWH5jYyc4pDyTeCN892DkK4Zwe2PLQjtzgWTdTUe16qi",
  "key1": "2fB5naYK8YngdHHd3JLaLfecmSzzoMzekfmmFEFiDktNMaqWKuUNp9iE9hS4Zzbdwu3bXSuMkx4qTbWud8arABr7",
  "key2": "5GuzbUMmuxHr2QT1NXzQUoMzi4yL6wL2wXX2owb9Hi4mGK4figvXUEd9jCYcmJSdXAKLm9Et3HfFeqtz4RNvLmfn",
  "key3": "3shU4RSdnSq43PMch5uLbgH2qMt4MwT5a4hGPacaWWHT8QUUjqRyxC8nUbCfg2HzUE2ZCJshg5J7snnvNv9J8Sse",
  "key4": "3axQ11yAVMwdGxGJRiiRagRhkToMJPcwcw4caeGEjeezTjrXpa9KxGAN43YNgd6hPcdaFcDjNhVSzYbAHipjEGoh",
  "key5": "2HoUUvxEbKDbwi5FzJGhzWAfmDfH4L9TMZBvV6JF4UJaQWiTA7BfpQC8hmLbZR1oWehh6G2qBf5ZKGvakS4HJfWu",
  "key6": "4QU2D8SchXt6crt3tUw5o27E3U6CeYnEZWAehSh8pMEkNMiBKLDJXatSyq7kmZkfYXfFfUFKM9jd2haELcvpVt6W",
  "key7": "56gYKdQtX6XNZJFVjT4n9HeToUUhvjbHi5xFGfAVXM89kEDG6XUpKJqLB51n8FpycmGnaMWKiFWXT5hzKmeEDoRf",
  "key8": "4wPamrBWV3QW2U2EMDSBYeAw5QAuupk1wgvM3in15HdxTfT4hsrKxGbHsF9iPio6VPQjAo7eD6NHPFgmTYWT9eeU",
  "key9": "4LzbzizXsShXq2XHeqUNhFiCLTeyf7L5m5PQqt2bCkdqqwwCQkoHfbV1SwfysY8TJ4342uAgVeQUMQExHAMNQVdg",
  "key10": "ARU8zD3GGcuvcxwBMoWSBZbiCvuHHcU7eEyg6ZNpzGsehPekcUhCzs82QdNiD6ZCVXxbCkfbqTRgR3xqXv6VNNm",
  "key11": "4xpS65eBUZNhn2ticBbiCmQg6rETd1xnb8LyCFFVCw8S2odCYd9k4e3AuE4nMQFKJ5wSf2TApzNyEzwRAWj6ukwa",
  "key12": "2teBhzJsBwRdPsWFwgt7ErjSeiNoNAFw6f8uCx2aqENDucgpCseuBzLkKCPcx93PGr1z6SHrjAte2qodZxJugXMp",
  "key13": "4LsLEwy9vYwNXaK4x91c2nJiQaFrtpEiLNFPX9jGnJ9gNen4RrLkF7PA7G8Vs8e1CT6q2NFBeCM2GrEJbrkGnrQd",
  "key14": "23ZYY2TGHZSE4yG2yMabwFffEQo7aK4GKT12iqyZ9e2ZANac4hqPzgYweX2hyHnusPt5Ts3ervJyKb2UbiL94SH8",
  "key15": "5PLVoT7hPJqKTVm7pcCM9jFsBG17j5HmrjgQkrh9ctYzDtNWSWWziNg2t8NhWKikPoQx8teBH8CKvFzNjv87T8fm",
  "key16": "3Sb84mg5PYaPfzHi3QjGKcVXyB1qgFrRfeVexEwWHkrQ5KFhdDa5LopDMkifSPx9xRvYmmKMxF22vPpw5SF7y4yz",
  "key17": "2pK4MKzPuDAd59cY63HJeQLAg4tpVaWisUDxeX1bqmCgKgF6kvkMBbWDbgnd1kHb3eyuo2WKDJs8nC1jLfQv9uCq",
  "key18": "4qBHDYeLD1jpziLyqRSuRj3wTjuUJ2qBa9Yksxgm1zCkEuWMDtb7xLrWsE3STxZ9gKzg4VVw996zyJhYYUNoesw5",
  "key19": "5K5RPTHhgWsFrcKMXeBxjKSixNrdxPNNvRb69fNVRXZn53yqssm1aZhC2AH3hfz9AJQHYGVVK7MC5HZHHybMYvpz",
  "key20": "5c29oX3ki33TgBGxDNMS1R4DyaqzspeHVpCaDs9X5wC8PfWeBCyp3KxCofvZ3QXaXM7X2Z7DH3b9RLCf1snMpmRd",
  "key21": "2TeRh57cyT1dSuovHjW96TZBpKA3QGAvcFhXKg1KvERTAiuiweaH7Ysw9ZR6pS7aXtHvsFkpuvETmVvYcnyef92K",
  "key22": "4YsJ2p5c6pYUWhzcR7Zy1K4wAxPSXTUrZC2j2RM5FRLMYbTKwrBYdXoh8Nb95Ataqdp7iKYDorDageN4ra6UY4ww",
  "key23": "356AmfR3ueHq1aN3Mo7HLhahy6ymBUFRyCKKzyGzMuwTuQ12hZNrrJf1W2TpxW4kmkMbR8cB7z8mC8s8Y8fGzBnE",
  "key24": "2BmrpNFBKxxnEGXnSSGe365cJbKZiTaQQaYkyLVaMuYts1JN6ATcCjJxewP7jDy6Vnqpau7UffkHoJNai915mJM1",
  "key25": "4NELqbSgXJneQjLihXCV3qtYXK9TFBe8xrBLx5dpuUVA15Yb3d1MUD7JVdi2SXykPhCTmnkgamn15k3ohmZYutuo",
  "key26": "fR7KSjx7xvi3nyv3ZuVKLyqrMMKMRo7vWmFUs4uPucjtKw3rdpXkMoNLB2CGcAnEoq34ndHpi5vPaWqHK9f4EUR",
  "key27": "5L4efXhJgJGSEUPbdgqHY8hTxzto2714PKS6cXVupU2vkLNBZXm33A8uhxUhy1amNb9jHii62zDk1btkFe52qo7S",
  "key28": "35N5oi7EUskh3WAacwgttutLFbETjnVm2vmVxHsjWYMR6L3DYRtoVZ7BDShmJpypdq7vjqaVS9W5WYHq7skFcYXk",
  "key29": "31k5wfD6YjRwjpKdXm2R7jAvk5kFv1BHouMcc4Gyz1gVYGscgvFs9fcL5XHqCKeFvm8Wr1sK4JvLmQj7BrnvCQft",
  "key30": "h1iuEhXVxck8PMhWe9dmGjBXEpivfGnLscHTWzu12qhSy52KG7PV3PcLrvcEMBxCovk2iiCVriX41231RhtcLQr",
  "key31": "5oeE33FodsDru7GWt4gkwWt6CL7rGfYS9sGiWxqdL9oCZUgCrpBKShWGpPujdRp9SEiAVqWQffL55mAr2eQV8nX2",
  "key32": "2zks9tMK4artjxyjy6dewVyqQQbDuAgjA8LmbbtYgjNY7Vx6Pe4uQEW6gt19v1Vuhpxr5YL4hfhX9xM3YJTe68ME",
  "key33": "59URgAd5Uk4fqZrzSvLFFGRE16NgYpcRwU14G1hBLaMp4P9VJop3HnySMbNzzchHkqJYe34gfj6CbqhHFJ67V7N7",
  "key34": "3WHLwE9ptALoVdbM1LVKfsbT1fkiqTqDj1PTFLnCqzB2vwAEzark7VbXb9q31LCdfHWWCW8CsLWd49N2sZcwz3rf",
  "key35": "56DxQtt7kRmGSNxkg6Ph3k7LKi8F4JKEmLT4BNieZ5yqUHJSDvJMivmZpNnu3NByd7oWBnAE11ejg7UG8ft4EV7u",
  "key36": "5BCWcrH9xY64B7Ddk6GpbuQ3No8JwVrft2FFC3g6Qruh7N4TRV53insR7vwrQ8uU2tB856vckixQe9Eg8fb7G3HU",
  "key37": "3AkFMesMQiHJGXodPVAfxT2xBkKNUkBq5qpaRFMeu6GLUqaX32Nco5hvoscocQ35hjwAvDRqRoVbJCJLVEedu19T",
  "key38": "3ty3YntxCAvGkjeMg8yRXovoTWLFe4XMB72w4MwXJKNzhtmxEvon7oYPn16LdyixCDCekkvSazY8o6bZfcM7W9gR",
  "key39": "5uBRTcohkDbHF4LcRiYYF41dkiajHG72PMTubDcZZbgoFC5mFdeEXz2ZtZmUQxTpsmHJ4o8Hwnv6CwJS5ufxwV83",
  "key40": "WJVm5QP1rhhordR7MW1fNCP9JyTe95M5kiRrEbdecbnKdttz5U4DjwQVXiQRm3GFYir9s4CGLQmegtLRtRCPT9p",
  "key41": "2wUYeYS7YTHySUSFDpwboFLXeoF28gayTLjfe7xhpA8ZZTpF6F3E2QLCvGfnM7sFrqEu2odxyqTEjSQhu7ZqQZ6R",
  "key42": "vjybQWZm5wnpA3bDfqHVgVx1khwgt5ekaSsG62NSpLAu7pRP1kRaGjs5pt1ZFvhaq8mDPhAEC2TvvH13JRcvK8N",
  "key43": "37fgWRqLWCqVqwbDoi3sTuhqqvcfbbw2BMSQ2X7RagNLKPoPq35kCvaFaVmDFYkJV2qRBLxLXUWSa1M53JBTofXS",
  "key44": "5mYBhPpQrz986qn3PDMgMjjmnyUhBfZGZVPz8HqJwbMdV2H8KqnHbs8VuWv7FF6xGtWBgsVPdZo7HndvvjV9VuiF",
  "key45": "3HjQt7nkNLNg1fswPfF6siv3CCy3Q76ekjAmJsQ7xTd5nmnhHpga469xzw9CKKQxU1Ab9S8uvR5MDLhCNxi6BojT"
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
