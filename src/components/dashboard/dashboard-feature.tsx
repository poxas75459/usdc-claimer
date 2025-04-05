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
    "J5gscm2UQBirMcpoqsixhBGJ12NvfNNbnqbe8mZbDroR55kqmL7ErnuLpD3YUzPYePjMf69QLWa9t5Xo2eEYERj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hXFB217ZHuEYmoLoysBjq6ieM5RaNStcK1rqQHiUrYwXn5xjkE4sthcHrRMtXgTdif2FN7adtzov67y4KCK1YHU",
  "key1": "5nf1zFzwA8cfitzqycamxRRvmf5k6jiMDSb6dZ62s7NmzGaBTDYsizk4oqiSkYB486wgqV1Z1AXEXPp3u9E8iaB4",
  "key2": "3RvhNQe95bUSRqoAobBpFxrRP7u71Nq4gvNtUvC4HMddaBMs5SAbcx4jzH6bdzNjxra3M8aeQcnwB8wfbR7Tk7D6",
  "key3": "4aDNzPQh7sDfWDSL71Cr2NXXhKcW8FTB9HSifvfMKGWZskzh58M9dpWgGQwZvnWPkDM8ELxPmeGRGZDhREooaMqb",
  "key4": "v95oJ6P6ghTXS2FRkTSED2gbBEDQHEYhKUsUUacczvvoHUUrz8mTitSBZWWAiZzgmknNWrv7Hwgtdgr4BL4DEgF",
  "key5": "5GabkJ6cxEWr8GiAqeYYq73jVdmTjNHWKPqMNxEcdDj4wzr29WGycT88KDpX9Q1wNxdErk6uASXw5wVdy1tWfp5C",
  "key6": "48eD6z1CKQxX7W6XCSWHc2HSgjWfqCM8wXeJSuu8nxwrvcdVr9NxWrYmKiPAJcS9yYQHJk1LRHnbBin8yEjfBRWM",
  "key7": "4t113rHugENmN2rUfDfHcgsw8RoAr2t5SstfD2JeZhtSWoVie78PwMgt4wfh6ybH73SKixc6nFxTx4nhEGMe11cK",
  "key8": "4MovJFjjGDbBpMg7hPL1SDen3P6heKJHYMKjEtLZ2bw7B8KroBhc77jxN6eJVHntvoiwbkvKvuGYEZKK3LxhPcGh",
  "key9": "2mEpyPvdFQL6P6DwV3CvgeVkspfxa5nNSabH6CyemkDVJCbdrTD2Xh4eyWaJyaRxfhkJsj8jdUACC3ujVjUvY3N7",
  "key10": "5oCAvYzLxUaptkL3ghWrxggkDH8JLv4hVcvXFbQ9iLJTC6KfJxZmKCw8FNQ6FSgRcxqYH1Bpzx5y328u2Qy5LKF5",
  "key11": "3gvJ8H9pdFXyH4VuqTDXNB5AHJa82eyxjMTya5vG6YWrXpZKoBJa56NXwEhpZbVAwmBfZwBR5yXogyjH4rFNL86r",
  "key12": "5DVUHkkknSJyrcQxETk1G84XQ2h499SyMwi8zzAqQ3FXCveC5V2UM7ynPrYZKYXCx5v7GrRW7f3BFfLN3i4rT6Gu",
  "key13": "32Yf6ejtGzKqR8ivAW5L9yHFPXeLtvurCd3vYCxnkMDuKKJcEx2sqi7RmsR6hrfbbsyzW7gCiCjQ9YUfdXEqLinx",
  "key14": "357xyXsYuHoNqrszckZY4hYXAi1XGh4cLBsh2wwgdd5pJtMaHzvJYta6EXQ27p9bX8ztAFXtikVXiDxD7jBRPZXR",
  "key15": "UYD2ekPNvNGydMtKyGKkQAJqsRa2kp4Q3QQCnHsNtuAWW7S81PbHa3RKFKxKSzoNH7MmKjzZuCGHHWq6pK4A99o",
  "key16": "3npfejBBSm7u8LoWbfRji3zFvQAgXudM8VCeKuEq2qJdwZf7LicLmtBZGJqmokQ5CYYFsxuFuQnBPAk2eSNCVLuB",
  "key17": "3VRjB6qFm7feisCqNAhAGpo3K4iBLe6HTKuSEGTByXMHVkPxRbuehBGaoGvfRxkafEioxzpuRcvbjBgjXKwGLy8m",
  "key18": "5WFC1XSfNvHgdRjyV1EdG4yJpqWspvc1FoSVgyvCJwVizXNbR5g4FppdJ4B4aSsXzzkvcrt92JdidDForet8bCJG",
  "key19": "3kPFUV4Ji7eZ7XHyLNdcexXAHtKoiiBmDrV236K7aqEBuBjKS5tL6dZYNNP8LjjkhA8Ve5Q3zxPEzZG5SnFwgF3a",
  "key20": "3yeXdGcbjgM4xfbotZsWCewi5M8xywPAUDgSW2i9DTQDcap6Susw6pT4u1ARx5eYV1Kdc6umDmoxiuBHkMbgQCLv",
  "key21": "5yv7SMCRZ4xqGoEtyziqjGzqEEd29ncBcCpJ7cCGRy8GsudRpR8BYMDZVWs6XjqBCAbS1NoTC5a18DzVWBq6gaNX",
  "key22": "2VhrWzmkcxH3XLyX3u3oCP7RMRVoXXM6YLMsZJZBpLhVLHqbw4qM4cN4QJEeFQXtfcjZAM4P3vVVdLUgtTeHuYkX",
  "key23": "2HEMC5MRQxcSv4hHZyTZXVpThQP8whY7ik7pf5hN3SUtufHc7nAQawNzLsLM3ESMbqC6vzSZt7F6C39pcygBpXC7",
  "key24": "JEhaEn6DHB1ut9MAcY6KbT28rzA6Pt4gqEUC1oysXxHU51KiDPpoS8dF8diDUoPwMHrBbhG6EwStZHmWnY3YpEb",
  "key25": "WGi2Yx4n2HNhEZwzpkSaf8eHHkti2KnNRvFX9BKXDU8nV7exdFNQnW2SxtXcJ9DJK5P8hwibhyG7fMq4EoXoM27",
  "key26": "3LeG4XiQ7AfVhaZqCR5U8vzFUCWw2cCaPBEFDgTD95BMQRfMJhVSkbkWqgFUS6UMf9EV8U9bMhVaGZpxW1koiA1U",
  "key27": "4H5Vs9XYNogZVe2J6q7GLvKDZiazDSafWDFRpzyd7pw6k492DJMxfEHZt5RQcFZHZ2mG5raAycWYtznZnAxQQVg2",
  "key28": "4Xuqp47ZYQzuy71KQmC3jQn2Tp1af66HZc2nLaUoUN5MhDYbDPpqmDcguCR5hopEz68RXpxg42AjQE7PMX5XYybj",
  "key29": "49XZwdyR5Ma5SC9yMYBsfpA758xRexJgq8zp59tPmshR74c79SudqkL3vQG5WRqfqm283YPTyybnEUQuE48e61eo"
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
