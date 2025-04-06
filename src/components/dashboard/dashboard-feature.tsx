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
    "5h5mcTFTKDiHwFJ1My1V3msZnM7rox3SwqB8cjWPprUNuJWu4CaQsFNffKJN5ekGCGZ2XpqeFLSMBWnvPRmhC3od"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PavPhYXUkmqgqCtjCqX1tjY5YWpfaxTtMn3f6swNZuoH1KcEVrzntoKZaa1VhZrSnp9qAGF1Kc7BkzptHv6suts",
  "key1": "dUZU1yqHbbfeMCVKcyW8VqUmtdmAesa1S1wE3o88L8x3P82gFnGfmxd7D2iJUDbJGE6bVsv7bFAaDZLsBBjWmKp",
  "key2": "9juxcf66J1qudMtXiLhngu1BXuPMe9hUh34KAwGsznXQgisgfGkmu4VnuvwPgfE9MUFEADN1hJjExQA88PYysfc",
  "key3": "36UztHkaEg3dk9WzLp1MJqpY8x8G5Gxw96coFTxuDMCKGTmSVzJntaDmZb1hJmSNKRao31AodoEq7yhrVLbnMfrY",
  "key4": "3CQ5ZL5sy9b6W2D5mGN1ZdDbAjFrSWexHFjBe12MmPt1cuZ9ovHoCcDm8oMsxnoWmX3LJ6a6vUqhyCsWhSGdzPeV",
  "key5": "YRaqAQHNZ3UGeynH46N66hn1g2JNYEAxx8TnHyDLcRBCQ6z9taSfRKtewnFfP9ZUST5BW8x4scRSb28ckLxDdAD",
  "key6": "5rsbbeaQ7ofQVC8dja1dUu4KjWLAnUJ3fVKFvaEspJDxHZHvZuQsusYEbAWegHdWb9WAqEJMqDiQaMXjACXKfNqm",
  "key7": "3DeFD9kkvUxsZJHWW7C1sKTtB5oPqZct3dVFgtqfbyFSqQnDTreouL8rJw4WmHdEmjigrY9gW4WcKNTybgzXWFcY",
  "key8": "LSTkGnVXZmMHoXh3rjc1pn6MQnTQqmrz8diuMBhjwZ3v7PBtRazdLmTEBPCG6s27brPmBdgbLKzyCb3wikYo9Uk",
  "key9": "32h6GWsgwHN2aqoMvt1MXA4TqX4E5TTtHkYQoLEk2AimiAopDrJZ3ztcKmpioWLgV9z711rLpLZd1se95548o9HP",
  "key10": "2adWmX2ng8PbuxBmvfW773boQLnZHx7fQ2yfBoxYCTFWsTWgeEAfCiZ7dEnK53ZBZEsA1YyysG426YvmmyY6uQaP",
  "key11": "2cCT6UVbKLon2Qa212DjtuVECSSHQZAW3wXnnfyRrSs7oGpSePaH4jQ9y127AMRsokjeLAvNWBg8ewHuHqT2Ccns",
  "key12": "2L9PLSuVZFPmmgtiS596x9Uvhuwgw2WXem7GsTSN4KndKib4PrhUKcbFvTsv1KEyxZt8jSG2cf9y8HKYMV79XfRi",
  "key13": "5VSQuejtzyHgGZfzQQBMFydoHnsP5bqKpBDc3fYFVHWf3zDQbmxcdNETjZK6h5RReaZam9zvR4CfUwUjaVxp4tTx",
  "key14": "4rnK4gVdDN4VHBNVau9ZWSoto83MRGfGWzhNFcS5javikLux3WPTweFgdYi35h5BXCPYbecRBbKdFWMRdYh8Wuwr",
  "key15": "2SWyP4gvvHHk5wwGU11rUeJq4XqrrqsjoRNDvJ1STWRHtHwSkiASKb87graviLeCwJmwGQrZdm6sy6D4JqoDPjb1",
  "key16": "3J2mxhQNXHsYTPRQw5oGNmaCXcnFTxZyuiHraQH71o2CkwzdQHgpYnFEf5rWWM4Gk5ZPgYKfdyRZFRym9LRPv1iF",
  "key17": "5zuePkTWoJEPGdVviR9U5RJjXt6BEwEXnocGbxasLHqLEmwyy4VXv9gDUyf7d55TJXbTfGBZFFDb5pDauYCnXWsT",
  "key18": "5d3XNrdgLiswrR7rNDVHCCadhkKMDLfi4xp1LHrnWmbtBxtX9fruKmCpZRqu6QHXztX4Fzu893EAaTHAizMvp7mz",
  "key19": "3GqTQraCVsyu3n658r5hEtcjCsV5bTai2SNsVPxXQcEr5v1h4oEhYA7vcV4MPPzg5VqAxKTc22euFhNdZ8gxT3qW",
  "key20": "28ekNasxrXH1Tj7bz2chW2jdPyLV5oiP5Zt3mCjtGck7xATiAJnKe9R91nKzirDzED3fMhWARpyVbzdQnuZykT79",
  "key21": "5s2oYe72EktwyAgX2Rb2WSAa7GiPfJ4kYv2KFJjMpskfQCyh4Bs9ZU9D7G8SiiEFUX1gWLv38RRgFjLT6xGZTo5m",
  "key22": "2v27YFxFQNFTuiaaWgfomQHspF1aufhjfhiYjxX6isQMWve8uW2NmyC2KWFkkx3u6cZ3aiiFECwUjmxmQ5CZj6Ks",
  "key23": "5xMQhhNbfubYjF76h3ZBDxVmwevrDHMoBtNieK9ME7xd2cYB7aN24Apck6iuwjQXL4qSbB1mmeSwpxFq24fAqsiK",
  "key24": "3zpkNzNceTLZTgZeoY83SpdqRKba7JQLTAHvevcM3ZDsK7K1nggsF49e7vAVBqGy2KzYtb4xtPEucA4gAFc4wqxg",
  "key25": "5UWgMBPGwm2o4HzsHC7kSEFXvWs5kaub5FRQ4WS92cPqKneD9sxceoLKmzEmkChh77dBhQcyG4Kz4tBBXaDaPboS",
  "key26": "RmSAFgeHaPjt1k4AZHsikuW9VBBMN2JuVn8c5m958p6SGAU8A89X3A7exwafXX8XsBq5Q7moFbk1LMWc9KywqES",
  "key27": "yUbgKhHV55PF9HgvR1tnQAK6vS4mhPcQhTBCnviuz6tQcMnu3hiEZL5a3GqYogvaGmHQWZs7oHS1oRKv1R9Vbif",
  "key28": "3xErqnizUo6pUHarcDH5D9RJM8f1Bya23Rqsfzx9UGiwggkrccrrWB5NfeNaJEaEAWU4tqX74S3YVQUHYS3ZQS8J",
  "key29": "TDh3Dn57PEeAKCUby3jkgpHcAf9M3DVg5GhRGM1QNbwbYGhbNmzsVuyGrf1kGbbyggjEEc7oAYMCG5XXAqZcyXU",
  "key30": "3VLpsLWUsCgZWhpvTHwt4rKETnCGfeSbnqByVQzdDMuPCeuPXVL9xgiuCjQ1sjW95j5bBvGU5CbVhwGXw5RnKAsV",
  "key31": "2fMhH4MSvCBP2LtvuuBrCgTRWXibbJVst4XupWKvpuFM5GHKp7LyiNrXKxnLpcvb5tnTdQbKtwPmDmxqTJAdNdDy",
  "key32": "3g6TgmCkYGeQcLg7Tqyhs7ezrnXAkZ1PQjY2enXrgMXbrp8ZyvW6YHWcvbTq4vZBZEJ1DZJ28nPYtdRysDTHceNC",
  "key33": "3CN3LakmHaSPPAjfSyA4uWcMhC7t2kx7s1kiCLzhaQ5yynBvZ2Q97Z7fZXMHb12Evn4G5CXQwtxLGLTwn2YR38AZ",
  "key34": "3XirNsbNXJaQcvznt6apw7R8HM7gA1p8s48RcxYjzN3X3cvVofpPfifn9ShoGiaHo1fJ8Z4xYHNzcorjoJaq5G6M",
  "key35": "kYW1beLw8zRtSQZKmaubA9pGo5tD2FDyJUXcAoAWDGtWGuDYe7sSpqGr8GUgGEFk4afGoVvSyp1f3FBQbKV8LTn",
  "key36": "5KgS7UPUgDPtZM9hvL1RaGDQdDupWqN2jsWHfdhcGkdcRUhV826PKthTg4SreMWsZXAHzs2zDizXWUBKEN6ajfgK",
  "key37": "4E5SkpMsE4DsdZTwro5BcCcBMieGnbK8KARNzTtFysLhBNJDrdvkkjSznnENw3zzeNVq6fid3LaCtiiDx6nczf7Q",
  "key38": "61cMWLzr5bBwruGzQY7rxGPuhpQasWLFSUKGsy5xmnZfLvqhtq1weXHspMxpefeo7jhcmiCh5fEoJrChvVvNsJZR",
  "key39": "pHhjisUXryuRs3Ye7HT1mUscL6DDLbDtS2Jvw8PAP9uS4msay9kyshkTXwpwBDqcunj31Jg1oDtqNWZC6n5Lsfv",
  "key40": "3n9vudzytXRSp5e8bvBJHcybw1tYjMoWxhajccZZruQxBuZBqMjXPwofXxmyHxDdKDYC1GC45PZXAnMLiU5Lq32L",
  "key41": "2SmnznHsHMZgcrvBCUzEkCgFG2eWRDefcE1TexeeMA3nrNpwADRNV3RqtyMWawWuDx54tEyYbUTaNEZhyxEFSNAU",
  "key42": "5ttYxYpvawDo4UmHGh7abpwMzSEB4ZfSKCvVD63DHvnnXjxjCYBMk2rC2eRFyDqFKA3Mn8z1XQeAt9VZgXrMUodv"
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
