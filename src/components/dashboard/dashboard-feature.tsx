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
    "5AfCkgBU8xvxzbyq9R7hh2GYZLa6J74PBVFYD52qLKaKTrpBmH1NDzLjr5mUF1mbYwKFF82qDSumWTHAWqP3WPuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ghv1DrzV5uDQ8PUn5zjmYfJyHMdLh2UPmzr9DsekyQgsiLgnWr1jr4LeBjdZcfjPwtNb8LJi7REnCaDWVCZ6Xah",
  "key1": "4AJemYxoA4tJprQV5RKgnoy1cUeNQw8HKpxWnM3B54twZnZZkixg9ePWm1oZNFQ1qyL8pK4iJqhSvkZdDXsPUpok",
  "key2": "2YX7A1SVJKFgFzSdXvivfUJyyQw6wpWVKWeC7zKChEcs8ym35esrhkfhdM1pqtMxxtNJXsyEFKNRJhQHUPctUgsq",
  "key3": "9BMVdx62eZzbfvGBna24M9UpXqfqMK87hRpBgYVcvSHZ2cGTTJQ4iZMXwr4VKuuishzPbNMUgXpbbiREBGy8FTQ",
  "key4": "21iUMuu9Dkioswiu2dctvMa5jH2Zn4S7EjKEByKax9KXGHqFwVdAPu512Q4g2BApqYuZZ3wsJcRDr3uJzXVtw8sY",
  "key5": "4PeAEcSjTLzWpMsTZ32vJ9bKrSZgcSrZavuukMt7Gk4UEjEL6k6oyA3QWHN6gSs4WcQxoiwGTdNpyPsMZAbtGdWs",
  "key6": "bJ3KYo1HxU6A7KC2iVekamDPVgow8Y2ug5YfiXVoSkkn8y4xzgTRAu7pZEmeim2zwzyovcYskm3YM7DiqQCFcUS",
  "key7": "2kuqeiuq5AtyAL65xTT1zXin96s7gD3on4ZhPd6roSkNGbaTrmGXErZKJxVaJVTJYUc5xhJKahiCLbz2qLnfjXiP",
  "key8": "2rRkG1en7QLTzjtfUgeBoCBtHnwGnAmonCiUYfcKZVuNtHuGF2gsvDt8CALePAdxxPdxGtduMKX6vVyygMpqBKzi",
  "key9": "d4xFZMLTXBivRCQ91U7G8MUKgFgsqzD89124Wp9QcL7RFqoNpRp5Xvq5hRrKZhMUNGy88KX1moD9i3Mq97t8W7h",
  "key10": "2uz4S6NUL3CJ9QeGtj7n9691pRGwVqtDQmjhmfS3ZY7yYzcCCPcTJyQmuqpYpSvHgwe929zLjLasQk1a1wAyG88t",
  "key11": "2oLFc6u45EYuNnJzMEQBB15ncVYeQSDcjAfwSCYhzWv2QpEyFX2yjssg47EG96sk2BXf83dWMcdKCKBDe7DRrFhB",
  "key12": "5ZexC8SzdDziw24yCzASzs8PENANKW73AzB7Cd3CxL6AvRJHWWsfvZrBmZcy7n9j9Xp3QoQEK2vmzGoFf4y6eubz",
  "key13": "TVkbTKK4iPbZgL7Y2PFaZunF6bHNkuvP7BQzmmgtSnQy8KyA1KhQBcHULXMYJ2H4tHj3cqAdw9g9Pm2icJeGB7W",
  "key14": "2r1sTFpPDcnj6k3krTEHiw8zfqYGLNwwUauLt6as3cvKJNB6mYbP2Ec9P8NEixfUM9znYFggdDHyztU8Wah7QpGU",
  "key15": "3qMZ9PLs3h4TknGQzEkD3Hk7yZtqTPW8kHgpZNygKVirXLu3fzor7S653iiwtRpsHXK9Pe9uq7p5c5A7rEsFMQaT",
  "key16": "4wsesC5YtCD5L1MhxPLQXPajiGXhYREvqYUSzkjVGLCfCZt9fiukRb7TyFpSe1seFuJHxXVme14wJujZPBpBykdH",
  "key17": "3hs31hHEQkAmdXSqgaPxvvmpGcKhjMxP8ey8aWckLNwVoECMcgsXiaZTNofrFKFxMjF58RSnxRRrTjgmwksXqBpx",
  "key18": "2jDdmB8dzoB7VcQK3HvEDqEerRgAzXGvVs6qPS9zQDsx8UYDZcq9qcJaoycr9JN85gt7BsvjDUNJxCBfDTche1JA",
  "key19": "2fC3QzSpPWtJrZNs5YEJWQ8Ys1h64JAHPStVTsHM9rEHkrYtc4MNmSr1V6QKHHk1oE6FAT5objpRtpgNRScDVMa4",
  "key20": "37NLKcBopfmuMJ99hD5Qek8owieHpqgSRDTyP4jzAjL7WiP4E172b2uYRruezRz7fyZKJEzps6h2buCEdH6taeQd",
  "key21": "k9YfWEqGVmEF19ABwddPmEfETdETX7ddSUdnJLCU7ze56RzVdQcY4embxHqbYeYF6C1BzibwtNtpcp7iSkfLStf",
  "key22": "67gd2x7jWF15LsXjphoyAkvRenar6yeCmsKFE1fBfeF3YTqgiYkXkQVg9ie3rCePQQqSVV9m5VeBGyGQVDXhxbE6",
  "key23": "2sHrvbKaFQkSUjMrvF6URd4fGvo9WBLqRuUcSLU1g281LQAdHMBuqCTjP7qcbb1dttfY7R6HUqtwP8JREBCUbKAY",
  "key24": "ndHNCEK738CinPp8DoPE7gLdu5suYyMCLQdB984oLWcXYwskexz6BFkZ4sWLSgpJWZ5CgEuQSVVefFeiDJwUj6r",
  "key25": "2LANgSC5viwm4PAuA8HtBmmtPqjsRE24F2jxQBj9fLeGNMDtPWkuntxniFfnxAEGPhA1cMe1wa3Bsu4bR5rEmC41",
  "key26": "2LYNTm3L8jyc3kPyg1B35G8yKE99Si9GUnhoxsHdPSm9PUR2sQAYEH3Zmnmt2ChRdsgTuBkn9PohqyjmxgH2FbAV",
  "key27": "4zK21Ma9ebEvfr8UVm1hCTAPFR6nvbAmP3Zc4W3SJR3ait97P4LLkv7kPL7AZEUbh9NibGwUiQ1auekDyyadZnK5",
  "key28": "YsgM4AE8tu16KY9qEuduR5r3WzBwzzU5n88yyHfuZ41EBPxYJV5m1zjitabngNoiU9pr5DtosmoMzMUv14LoD1J",
  "key29": "4mUcy2iQ4biAjhqjvoUaDWZBLZaX9umJSZsndj8qLb8JkUvVPduVahdrGAuCGwLL4wTwKLuu5jxeGvo9DuQg7vEX",
  "key30": "45ku5jkZJ1gT9fG6nmWdwQgW1Fn3ya5g5bKBtBkB17kE1DmVaRhX4CQ5omQ6wU3vX4ieKvwuzunXuuzhdcZ3pvUC",
  "key31": "F1iw3ChGU8ireWLsvZzPWZXPQpiDFnCsQdEaqLL5ZfeCA9QmNkXqdUpabavdC4UzUv5e3aAC6h78dudxFybuQCk",
  "key32": "4eGnH4j3h9cdPAKZhB5sPa3eRMFgouqRefhbXFDyrvBCNtpmUSGkYnxaXwtDE3CtdAtR9PpAinAHv4rzsuT4uHHf",
  "key33": "5FZ6m8FAYfDEk1sHDm3iDjJSRB3DiRi2ZzkDD77fhDPXkAg5MVbAoeCJ9HC8EsczKW1it9rS2mm8QrcCT1RK9bkA",
  "key34": "Ys2eV7YotFnfyi3NEPuS8LPJA1bBkN3N3BoH3jT7GPk8Z3YZ8Bmp6f6gV2svgTzNBsdbhHUGkjz6HMniyPBUi7y",
  "key35": "3Zzo1x7aKbDTcDbo2vrd31csFRQY7ucxGeLqcNAX4jMQNFBsz4jcghzGHh2mKKKKSmPWXEVGJ2n81R22PURpJ3Ju",
  "key36": "2rmyfDJRnMWVYdkdo6yTi1FsqB5s84tRbVf3MYt3HF2HvqwvGdhMqGZCHXHR72Bx1DsAkWAxabUeRdggRs5CYjrj",
  "key37": "219tahtML1Yx8VCS6wM1iv5DpoUGEDFmv9pfwzk7WdN1knrbaVQfcKUpvtU6LbavipCa3Bj1qBkkK3j3VqypvuPC",
  "key38": "3Pt7C5Qbtg28ZPVx2qBCLdLoq3S7FfanLcXcRWYUqPRabFpF8sv3xTA2UKs9uiNK8hjdkG3bbYJPgXsRihfqwdGC",
  "key39": "NbABbf44F6eU7dHoiTjc6bcyM9H2APZqAcLbCa8F5aBXRjzRiPnDj8zNBFd7ifoXB8Ps1pmTPxwyKBvWXcaaDRx",
  "key40": "KZgcSW4LtvoZSFpFzTDrGKfb6RAvWeNE4ZLP9vUNj7e1pKz9cwDAGtKTccstNASXvqjAuHfGis2EQk4udEHxbmD",
  "key41": "2aZ5RhRB9Dh2jhisMpqL5UE4LPdhGKpYN8CkkUSKpxxRbyWjNzU9wu4nUQf2R47S8d2P6a5HkdMHeBiukJ41DJzP"
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
