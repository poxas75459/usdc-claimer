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
    "2Fwvzf6A6xtXns8EGKZWQJDfnwNXv46xc2J5n9AtVC6SHUQFJjsC3eBtZCxrLyD5ydBkk8GANXyq7WHyJgRRVo6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GV5zCB8LUWs9xYUEzwrUJHrnHpvFV9ARucN4i78TS3rdYLhMNw3nxrF1bApjYZy67fv3JK3yoqjojqnm3m3zXr4",
  "key1": "645tqSfEcaCiPWMNNCQFCvnbqginGuxcWFks5hvvaevEZ2BAZRscod22ccsz1r6ZhFJ3Fz59NbaEV1RckhBdqGGx",
  "key2": "CM3PpkQmRVXfSjfwZ8YHbASDe1XsyuGDrsoNxa7VFXrRfAMsyYZDGcVJGTFY3rvtfZr4926g5PAqGCw7jzTaUkU",
  "key3": "3d83jejqZsqvd5t29RfejDvdxnL9cdZNvtEBawSogTGmtomo9nf6QLnoDLm5ktGK2YZX4VoV9PqYDwtjNFqdAGUe",
  "key4": "2eyd8Q5XBiVuxFATkPhBbryXjUteAFYrSevFoyD5enhELVbqkVTDKM2vybJUhzfmer6kWwFES7Jdu61AEVmWR2ZL",
  "key5": "5JfmmsbBheT3dBv8KPcMK7cgDqnjAt7rdpFcqvNMKS9VchTwMVUu2kaTKCX86eT5ab4XHenx5pNodnLHAT7tHoMK",
  "key6": "26R7RovTY4CiHHq34N6iHRpNY5x4mDqfc8K2YqU78mKhoPkiCmWdDJ44jKQRm5PDCFowe4wLeQm2qW9izUg161ER",
  "key7": "2JLEaWSNwMWs47YTfakY3oLeey4J7cVSHBikwrskNRwSZHqQ4HMTZVHE1EYCqWEJCPBPz6bj6jbes1NVkMTLjuzW",
  "key8": "4siHrQkeGbi8xX1AFQv955BRXdgnV7mL1o5Mi9BQTuNzd1KojFPA87ChPKhMr2ZwFBNQdrdruYJWuHs3ydtEi2HL",
  "key9": "4e5pJCTecDrQnDbHuzoUK8kM96EgynhBQhQ2ivDsTzjL7CaqpN4QryyNoTqQk8F8rFcMC7rv9VmnD631uFQzh9ku",
  "key10": "3pYCuGkzdJ5hhSyJKa9T4Dqt4Vfxw6kixME3j9FD8czh2fu212GqG3vtN5FLd1ab3EegkXqiCYy6qYPTSs7mExFt",
  "key11": "3c8kCjznFfkrsxfRJeq8EvaggPUzQUqQ6XJNAQe75jT12RrCZgW8CvnRYiS4xYVMJuoGV7Fdwv5fShpEj8CCtU6B",
  "key12": "zjR4JsgSCFwGmd9qPpu9xsBPNeUXuSDA9kuRmamsBqZhBAF756nzgEaXxqiRCB39h6RZfCT1VmjhVqQnBLM3eDm",
  "key13": "4cFutFjd7sgb3Pa1qjfyFVD2RNX5eAG3ZEcGMEKBYvS6p3mcNqFyH3ms2aed5tMzuPRYGvPPN1manHDUQbcwWw7D",
  "key14": "ph5f744UiVyVsR3RxKKNMM2BSLsqYRUk8m3QvnSHeY2ovKnBWASvCTvwWp6J4jQ2va5MCsDf6QGsFXVbCLPL5yQ",
  "key15": "2P75bQf6EkcqC7uSCEPsTHk3LgnwZwLSG9TprzsZhob1Zw2jRVLYiHeBQbnuvPeBWa42QaJFiUen8wXtfV4u6e5L",
  "key16": "4Fp5sFxYpPgWPLtxHtJDWnoze2QsMSEXUNQ2vvGSADUq98TyGvHUiQSuF6nFAGvX6kP5g6XSPRJApiQb8HVBikos",
  "key17": "2pwuPrAQyaZqe6LJibHGv8BaN8BKEfFVSgADSJWxAUoG9MWFFBabwn7hMibaQrSQHhN8exSLiYn4Pb9fvwPTUHbs",
  "key18": "5nZDrMRP6heSaXwHqXPW4mk9At8zLeWCsDNjEpuhmcuqzYDh7ome43ybKZ5BJbm7t9nHMuQQHwLGYtTX1w4LVMpr",
  "key19": "rCGX5Chq1ZFLVtk3Wnsv5J7NKkcL2qg81zDp1sWHShyuftvYkYeLZQKVrRW1Vr3nzZU7uRfLpT5HajGh3sUpv5g",
  "key20": "5sThymMMKAALEJ6YPsh9ETapZqgmTbjP7QAoVaSxjinSju9PXBEZQxgAk79dSGUWhuJjw6tEpEv3XEHApyvwwgRu",
  "key21": "RYxksLa9Ff9rBLaNvgoHHnQBA67Gd1HeGDiY6CeBq8RwVHNdQu4XiAuquiKH53o4BqJztjnrbeAioJhgDbKBQeU",
  "key22": "2JNwJeSC7ccuABUEs1HF7nisZTa3Y9qtizvGagBkwKDx3EKceRkbPzEVQ3Xks4zzonWjYZ368wtbnu4yDc4D5YGz",
  "key23": "2NL3f1BrTEMpJk4p8mQ1CBh1mifoKCHJC9GqEdSdXfWeheExPYP4pKMPm6uCNKJ6urqmijCocXJQzxdVN1ervJKk",
  "key24": "3vwNmY9HeNmuGXktLKTCAQHiNPMQHjugjDuZUuTb8qDxb1EbbA3spJLfkER9n9wr6MWLtoqTMrx9MdPftVnjLzWM",
  "key25": "5tNBm7HN4DF1RJ9ivSiz1H2H4QQSkxCfuSRLCAA6WjAmw9x2U8AbLvr3ZfV711MyPbqTeE62Y7HDUVkHbUF3NX7h",
  "key26": "59wMtX5btEUsvvvpS9sw91DNDaDKY6bjDZmFJ1dY3YAe9cZxmZR76u3PTeTPjTGYcHZxxe9Ufe6o6o51CfefTq34",
  "key27": "2m3csAuqNpeVKzbC9ZAdD7BP3F7DjpfngBNv6yTa9Uu54Gvbg6hgQqp5y6BZtynim2xcUgJCKomFUQGXsXGnS5QX",
  "key28": "27w1aDUZi6VFhMAA3vSy3gTaV4iKYbb8zBZpE2ocy6658zXcMJP3vaGnKgCCTeuoXukC5N64Go2YEKhhTU2Di5RF",
  "key29": "7fV8kihn17mUutEfE9PQYz3DBQcHFXUG4LhYKuj4ZVdDA8AEU3RmMZuFTMzHksV6TXPpSmJYoEj2YbcjYPjA3as",
  "key30": "2QsQDjo3obFPt5bYsU3gqSXMfkaZNLAQYzBzDXuC8p2XnpdfRHMhVFT9ByqpshmDxGrhfVC1qgYEzxmey1gJen2v",
  "key31": "YAxust78tsYy1mRThBmJ69goKGBbm1S5wyF8pvWgh7xpzgYwi6GBQkF1NMsY9GEkREdoBsuvuLBpyNBFBJrK8QA",
  "key32": "4JB8to99uv4tGKq46VQejvjmDxxr6SewhxBsjMSfYobD8MJeHWpS9QM4xDAqUhsh2cmnxNbAz4pyUaumYcYVXhA3",
  "key33": "3gV9fNqmjt3GzBRoFzXCNN4Tr2G56Rv6xD6awqr9kSk9pCNTsecCtq4zzc7FFggqE13rzwW4ZVmSiWpdFNuCSCq",
  "key34": "29DeMkqM5gsCJvBc5d4hNxgHBbdPJVcAbEaxMhj9UFyjNNzGFfK3qdZZhMpnGPxjyKcf4cAkojLH7TS2wj3HCpiC",
  "key35": "429D7bJLuLM9FrnZYceTmMVw14ZyjbSej3ndzJM9JiYWvCQxutPPfZKpH9SSacFSW6VRAsubRV6Mh2PA51rc64QP",
  "key36": "5cFnTdPFkBsiCF4tdSVrabF3xHYhq2wcz53AKa8gbtzFVLWE1fLxZvHT1cmw7uf4LHHtyFyd1L3u3JTLxCwNPoS5",
  "key37": "2BQMcBFLRVKGvi1fqgmWsTGFc1WcbdN6y8zUjfxK9UGFMqNiQw8uLo8MWYV3SW7Zji2iUc2zeBmLqVCNPFMMNAfD",
  "key38": "4wnmKuPvyiMZxu4dLGvCnLMc2p4ApNAFMqFpahEnusrx9WWJAJFRyEPqTYVJrr8AxhAzwnNP2Wdm8SjScJmMAPWW",
  "key39": "4nrYox6vAAhw4PVq7H6zvZbViK6fuBdxQXAphXiQoYZFnJ7qmYydeEGicvMq3swdm9seGMcnxS68o9p6RkNYqX82",
  "key40": "daMntfAcK2AXsrpJWSQjwWLRE4RwheDjEJ4p2cDprbYDgSgtC8siTZdipcaXJuhg5NrecgV6NXuKkf7UqYgHTqg",
  "key41": "2SQWyn8AE5MMHzzS6BN1V5SQKKdLmLV9Hoew43mUsDvpn86grZLwTP3X2NmFcrcv7VnS9zshymGwpSvvPM7k9waM"
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
