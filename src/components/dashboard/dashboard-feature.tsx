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
    "24ve1gu8mzXDaQWuoNk82C7fiiMEfnTdUZKvpFAn5KHSpxVktgT9Qi9ieWDrNRTyMc3o6e29ZejqV4jST8Gh9c6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3ddnZQWyuZFkYn1XjK4cay2iA9Yd9UGWNvGEoiZKVTDTisLY4Am4t7wZ1w24ZwexSJ2HN3pasRjPYcSRv6uU4q",
  "key1": "rtbRRGsoY9q4UL3R2shDbh5ZqNHF9LREHGombXYiUqsWyywGN7DVuKVVWBRXEG6umUxdQ8VX71N6ugRVHX5tsjV",
  "key2": "4tgvJqKUsA6DTFWSombfYC4Zwqo2MT7UKhKB7CwDK6r5KD8ihNn8NAHm67J682SQ5QZHNPLXpwAq2qBSp3eiSfrf",
  "key3": "3CS44JuA7MZv6ZXAuYS3EysnUTHw3EYyFPrzoj2Edto8S7W9zrM2j4sYnMWDtWfREmhikNaVAf6fX5URkPh6JDKU",
  "key4": "57XkLKoaZAKwZpPMUASZMZbz9QrgEk69RxQnnjYzFMdiDKxjUoWmdwgGaQ5LWxugFaX1b7y8a7fiMjx4itFHx5NR",
  "key5": "3Xx2aA2Cp8diWgJPNvC9DfvqeqjNJj8ZHP8gYGgpterCWt4wZZLA8BnTwA1qdyoAGkS54B6hZzJwk3h9vuErfeuz",
  "key6": "5K16hZMsFZhfZsDCt8VSyA6Zh4eQEcTsgRQc5mRUJXM3qAW9RxfvyBNkXHKtKoUuiawtZY8C56gtQeMwTyoi6rQ4",
  "key7": "3xS7eZJQBtKNv7DYsECRcSQsNLSpUAxxFxT6ZdQeZmzwUnvaGvoT3tQwA5Um2XY61oSQdefZbw8c3DRevasbMCxk",
  "key8": "5cxbZYte8x5jbF2QByen3HzAWhGYcBsC6BRWrHNVYGHGbZS3YxHCnkBw5xFiWeofyFPW2iEZbNbNUZxBkdrWniYE",
  "key9": "2LJt5Msm7oy8UcRMCqLPriCA7QbMrvv1LJJcCAtXGNNpefxnL8isGomyNqkWnxr11TAXo7TLmkm6Zzjf14eZWTdB",
  "key10": "5G1nrMBfEPTGSkuDpg6ESz9r7LmC3N4Bgx22fhzxaQTCwDfQ4HXfH65VPoMwV9XidFAp3kBCCtPovP7Cynt25Q3K",
  "key11": "3qUH9SH8XEafZuXfCaoNtiNbMN8wmpVVXnwWPHDo3wGGNd65JCP7ADBkXQc72sgGVSJS4fzFxYwAMPmzpYyNmQR9",
  "key12": "mrS6x2KG47gMtAqDXyo794etfcKptDPTjg72LqFpx5PQGAToL4zuaMRwNazfzX6jy1bRq6q51WZJWAkZsRmfXUn",
  "key13": "2wyEKhRqsMgLcN5HZHgT3tiXSRUsNQSvbPMXwsQkqLzGM4LvgEuYTDpfTo2uMD1QT6A563jfyNGDYCq7KyKXgucy",
  "key14": "jDotTrjMEKt6qwkpaaNFLmLN4HvDoXXssyxbhBKQeXZAnhMuGM2wJcZPPWh7oFb7pLgjjWgSvFHfJADnY7aNYu6",
  "key15": "5XRypAuYVrffbEf4aiFii7m6Gn7FcEWFcHck6hDg3HDsGvTPS1JtxtogqkVrquEzTUJycEvrJZBPYrRTCmvW9qwt",
  "key16": "3zdszZtYjR5NqsSEUb26LMEmRBCNGt3oHJoTuWgddv39jBJMsZYpyVr9uwJLrBjyrXsTUqbsLWS9rgGXJ8FMP6nf",
  "key17": "XNnrDJhcehhTxdPXk4vPbC1qbb1js1M2eEL96pZCLC8d1EShgf5Ko3SakmVJ233bMufDkoaaQSCxTcTvbciYsG1",
  "key18": "5A6oEfGXtjB6rFktr92aWsa1KZvLn3NjhcySjEwFr38EW3kra1X5EypGuBbB8awRa1w9cRzGXV94tPzY4MjFjD4r",
  "key19": "4FGAeu427ioUBTn4vkG5kA2qf48cSSZQofx8hXQYu6oaCZHbXyCg2SDMmAH9GzutW96eprJ8b5Zfcz1U65rMD99c",
  "key20": "2dbqCGKXHtCADQA7HYHX5y38rZaHS8B9KozGSedWSV34Jdumwk8KbUmEnq1ShCyx6apRRwLQEmmfmzNRLPJJinZF",
  "key21": "4FctdNxbsv78drwfJkf3hpA97xV4hPg1UPktQpRbdpoSoKB6MwEVzLzFcwLhmG4cdXvAWiDYxyTY4ja42yH66VzE",
  "key22": "UfZ63jCK1RL47Qz75uvcDtpE3BnX84SNEDVvkbnF2qpnK2JVmH17VecrqHk4PTP3ara9nTwFZx4jQyogQh8be5S",
  "key23": "rYUGr6NcRhuH2fVtiBX4tgor2wAqvCYAJXW9LqGcXP9p3Hswocd6PYGepvYuSEA32eCqaKVrFEEySH6dRHp188N",
  "key24": "3NCMawTh8eEhGQCuemqJjv8mZj68mfBpXuXbMXcFVNhGwbo6RtJZLqa9bhzTA6TyFZvhnhye7KNzZmWa8Dpe6T58",
  "key25": "21xvZnYB9AfLnwUJkZXbVazXe7f2XWpnjk2FSsaXcouac9pE74JVGztGuJCtJaj6Rf2BvkR7yDrhfLB1Qe1LdZLY",
  "key26": "AGynBDENTmC1jtdCegii7zDCQxh8rumQ2vpV1sDkjkLEWjRWUa6NfQt38mLyCdULbvpEmZHEXZcbUPgR7fPUWEA",
  "key27": "4Sbo74V8fQmgkUijm5Bzgc3aGGLhh6Nh2QKUM1BGn2snFxBWSAxJgrq8UT6b4xKjVfrbJhNT4QZQ735C35dgrRGC",
  "key28": "2HQCTw67ixWKkftQEzsCo8qT76wXbqEPQeoHXVQXp2SvtVzwExAUV2nPwxCvbXNkpjHXde6QAefudxiDBsCUL1v3",
  "key29": "3SnJHkqByHNtm8EBNagXS3WSrLxKNmL3FAZj2HvCCNiXQHw2JNjxSLibUFv9NiFbU6RU55Gd1Q9pwiiGMBqxgF2B",
  "key30": "4MJuB8oRydiz2DVaD16nhSboXgFCY2xxWPxYr5CKahuqEurSM4BrJwukxbsqHQHLWXZQdJdbUvvgWbAajYU1E4km",
  "key31": "JbSWSCrkbw4du2GSF1ND3htt7oFuffuQfhQPBtHAzk6DJEKMz3qpZh3LNCuUw7cG6g4AHUvAEi77Xec8v8hoAj8",
  "key32": "4s2pZFoHyTXF36xuyyJepXq4jreTPycu2fGNrV2GMxy7RPCSivsdbxh1FxLKG24Tt9tXCf7PG2MnTTx9XxZrqTQJ",
  "key33": "5vH5PtePcjr2PABJXxLUqQHNyhgkzBpEhUCCLaLFEqCcbmxseiJGFkivXRceEuZhoJ6eote6PZhPHqW7kkz6Bizo",
  "key34": "3zESmBNRcvy6xYpntBm8vBEDxqoeKUAf5rHHKMov4uN1YewqrssSfxF1CenR7yAFyCoxHsPvQU1GrhrXh3mByRfQ",
  "key35": "hbDtUUHRgmYXpQy8GwMyecc6e9bUtYo56Lt1yKqjpDLYeRfuJgbmUsXwzAoBB5NaovkHa3KX9qwipiRXSekodKS",
  "key36": "54rfcEfor2AowdCpju8UbmGNmqcw63oaU5BPwbQ6LJP5uZjcscXe6Kh2HLosrLcmYxfzP7wpPsNJHqVwfvgYLi3y",
  "key37": "5HfYW2B22fVT2jHiKvL8DU1SHioDcn2iQCjtk3rzrHoDrNJvSAKTaumAAY3Cnh6Ub97EB97UTg32ExkNjvPdeoxn",
  "key38": "2Q27Ayf95GuuZ2dztfLZhY9hqVK5ji71ifAN4gr6TxdBz4KqUcN5MPAwNHP59kEk2e8UZeFRJQoURabDB1NdPQ29",
  "key39": "4AfzSfCYvfoPQ1BzogNSmRhQJiTLfB7eT9G3vciTbBNFWTFWTH9q7BoRHojREQAdheUhVc3JLxTB3zK6jbvrtR1S",
  "key40": "416vqpBT7Fnp1BCtgVCs1q9xZFxz9U58afsfYCSkM2fw9jMmhgoDiMCEZaiFTK5VPWCFvDdShdVU4vP1BcaiXDwG",
  "key41": "5xxtKSPSSPjAQHJgaDi3G3kWQny5ybQJMLcDXb8HsWQsC1VMvLGHJPGdzY9H6zCmhBddLt9TdBkBFV4svVFds5DY",
  "key42": "64AYvPU8oyYdVxr5LaqJ4uL5eVqnbcu524PHHVZBJk8LTGg93HU8kXc8kqpnr6LXLdQN3W2FmkThEFT2kUqQ8WVo",
  "key43": "3ok5MmSRaTeyRvdzusPjy6r8mPMQGzVx5sUYQtVoxD6LZGMsJ7k2B9q3qLqbsw2sJ6iMNPidpFMiys8CSU32DCPe",
  "key44": "2GzYNTbeW4aF9SgbBcewrXEWY4MSW6uDBWWyQ6ZL5spF6VmsQwDPArdHNfTkuezNL3bz6c6DMbNN1ZbUpQihkZUm",
  "key45": "4qnVk8UAwtY2ac7n7zXGxw8cmtG84Z7A74Egdd15pRGR2ZbuPCv3vdZ9kfvvyTpakwY8EdqZvQdGRQ6Qr639qwCU",
  "key46": "4j7xeQPCpC7kSf44ABz3orSW8HWQMurvQkkbphL29yAYPAGAEZjhcAxuUnn2BLASKg3XQfUAauarb3ttNRrDPJBE",
  "key47": "2AoD68MEFjcT2p6sxhZCR3iw3PHxNVTXpinpBdGTraAb3Zyr9SMsX9TGaQdxL7AUXLvq5PLQfC2qN9sA9nzQ67pp",
  "key48": "2zbL4pCUP9tVqWZ6twaLL91XQ6Ng5KLwPJCmLCePSdaQ7j53oXfgHhg7AJVRXc5YdRFtvz12ksk2BBoDDfxzz48G",
  "key49": "gQEvFB7sUTS1Q9rjtkx4DYVjQQoTJVrD4oJ4mu3NeesH3oM42iK1UNe1q6hieN4GfdQwaGp5E6vCetras6cV3kc"
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
