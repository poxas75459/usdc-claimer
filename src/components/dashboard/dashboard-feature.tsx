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
    "22mYegY9XLQLim4w8LpVXZDVUAc6mQKN6miLqjenTdnoSP7sMbHcaV9z1RzmYdt7PTjS3AdEW1JUXJpJmxmUgVwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MeqpSVYua5syNXW24UeZwxsmweFDtPm8Xn3EjY1q373Fszihh8vNgWiYTckf3Qy64kYzGf5kkqMNDY2NKW4mmva",
  "key1": "2UyZdLRs2TDiKTgRRhVqqQputtcvkAoHgCXVQ1H511Cf4GR85iRNN2BzvDx1mF5sNWgdtGavb7btnpYdztAdK9tT",
  "key2": "42SBbaxjet2MM4sGfipqw1Gje9huTUQMiSDhg3jEREpLKuoPfRtcqSJh5RFYUekoHdQM1kwyyfWGgZqQDEDRGcKL",
  "key3": "53nBW2QJUusGcAyNqJ5TJEFhu4yQqg1wmqF6iHtgbe8J3W8a8cqBdrowjEAoeemnMorViYvgB8MpRsVqfw3zk6YP",
  "key4": "5CLVpiSRt6Ph19Lpcd2zdZhySArh3LCiG9dhTj2hm9jG2GSwvuKnkcUd5adV5DAv1or1bC3JWPJPVfxDpZZmdn2b",
  "key5": "2rH2LBXSv5ciMYvwaH7dD67Kisrh1u8FP7dYt1EA71LSiKsPuAZEjAoEvCD2iJxunoYnpDT6dqXoY75oueiHU1bu",
  "key6": "5XnBm6nqjkyAzbxabp9BxVLkaPa1Uyg2pDyMA4wxWDkFjq6Xxt9HjmBGHMUt9cJun5hFApe6FufLwagveR1aDgqx",
  "key7": "2auYTi9jFzff63Nz8qa6xdJfrA7duHa9EjQeSopQjHbyY3aETxrtc8RoHKcpaSKJgF7HStXtWdGphsanSqGMyUTY",
  "key8": "5aS3Ciyb1VqvmNjKov1FEyMJMGmPZHV8N7btw1Pemn3Rrozg2FBwXZ8hTXLF9NbUMn1MhntAjJ187rquf6QDYuW7",
  "key9": "2dgGnspfEwPTJCvzD8JnXtH4UKuK8VTiY4nmVak3Qg4smpwXwwDzT5aYnseUBQswq1x36VyBUTmVV7fNEHWChLQv",
  "key10": "5V5YPX7gCuTAg2PZp9m2T1UZx6USUAnAwzpbvPc4uKgVSbZJHVUVCqzEVSC5SB93QUUy1d7DzsR8joh2h4ND97Mb",
  "key11": "3a2Z3mn9jcr2oVLb8V6FSvdosko5AyoUBUxWag4CxCKaw9TNncey7JrgjYHcsioRho7i6Nz18d2cuTznZiTgiYru",
  "key12": "2yB3mg2NvWSjpidAbagpUjgY3EnsQb4ifyL8WXTpg7PSyQVSfdNBfRUjBmZ3G2exz4r5dCAQAapZp9m9RKG98u2v",
  "key13": "GrxXEtzyPjF1MDDQgWqG1HLvPuEhvLcnL43Z5GYenieYozMNBsHNuuRs2HtcukBuDFmRFKYvZdbhL1ZwiDjYVnR",
  "key14": "upZrS8NtVhgPkFFhjiYkPfzP5GS4GRFLpuZT4jToYm2w7HriVC8h5xQHinX8GUueuNambMCz9sRRjmRv1KA95ME",
  "key15": "5gzQyfqhaz58mw3FePD8tRUBaZTJL1iopK7ngQ4Agd2vQuHpBaBMcdH7MivXzruNiNcTvM8xYmHKvkNmKqKzYQEC",
  "key16": "5Ln1f9mjPJTC4p58DefLPR1f9K7N4uYoMCbx1H7aTHrXk2oHLMjoWg4dPnL1QXxZUBgtbuNBDftwDrwM5mug2f9h",
  "key17": "24om95GqErLSaeMu5LuVe45rP1EZmkbt12xoN3zUtmBPKbHP4Rm1nL2a926AivnZP6HzZJL83DbXPdSgAjVKXhoW",
  "key18": "5xywhkp5xnKZy2FLCQfxWrnree9ypYWJj9anRFRZFKG8EYop959rT6EnSnh9HZX93mLYgP23yejG4riAHWXneeEg",
  "key19": "33J5eA1Bti9g4Baef3bdB5ed7c2yb9LAk1oRTGNZdiFGFXbXWLc2o8AZXaa7ASmcQZzzy1WLvLKTg8P4z396SHTm",
  "key20": "gkvF9nXpMgvH6w8SD7DYgTd3sh75bWfDnZSv5KaQ2XerZevLV9TXpfueyKwjKaQVVNcqAi2NynyN7QPZAF3oj47",
  "key21": "4ZwqGeEHrbxXQWrQpLTu7qUMvPuwj1mwkj8WJjZpXsYtZRi53nL8PTZGHHsGwgRJANL8deK4HZr44NgZA7qM9suA",
  "key22": "66iWLZAsix4giLjybBeKXSrEu8TUJUNd8idCHtkKLvCZyL256kBv4T3DnM331PBYwkT6XKvB52h2A7z8zSFzVaNT",
  "key23": "3WmqzK2HuaLU7qmKn1NR4QQ4RDhi1HfDaQ31iLEeuXH2DMCvutUZesfLTarFq6myikhPVxmLQzvhdPdMhk9DhRuQ",
  "key24": "3x7xdRQ5m1x4Dgbr6fknMnyLyW7FCY4V5LKgGmAcwP65stcjufenksJwZsvMAxGixiehrbaoMVaNkxVUfAMLGe3q",
  "key25": "fh4JqnNuJcFH21tQr1tTtBUgw5CYBQACTuGBLSKx2sscYCy35NDLqfXnpr2Ps6QWHM1Kj5QPp7nZKLEcUqaGnxo",
  "key26": "36bx24ZJbbA395L6KsX6GeCes25Dcp49sEmXJHCG7dhiH7f6ZacczrZJhVHogg4RosJjkPZ8Uq3snLRD1jwiv25m",
  "key27": "2Dvwy6Hs8JCwg886NG9nRwx3ec1PNVXSNBXrKJi6ZdAUavksBNGYJZrfBGTJC44e3xjyUkHruem69U87pUzBX5Sn",
  "key28": "3HxqkLxXYKxHCJAALm9hykoExcGqYS5ntxf5qGWuoaJn6Xp7WYiGLeCd9YJ25f9RP38Gt3nWe2Ggeq4zDeLK4pgR",
  "key29": "5jb7NxPHqxca8PWUWSkzUJ5T9kLUn4HybedCdB1oM8Hrod8XwHtyQNjH7ncrGNpZQsJyvTokKXH1sG2VEAkpNS7u",
  "key30": "5UFcJapu6UP2JzWCXxicLPPUrLk44viJRJGUuXXb7MX9ty3pLDLaAVu3RvXfxn3ygx7UMjiHtWnH919XtBoLvHtV",
  "key31": "2CX5VxJtKWf6RYG5QMMrysdu7wb5vaQJXHddzMr7gTW96um1aTab8FPcBgHv8p2uEnEK14XKcSmN9pJfHcLUAg6Q",
  "key32": "3ivjm4eB41yrpxvvMizkdCPK1ZJY5N7N8rX3GJy5uvTj53DHfWu2HWSUyGX5CdpSHJqQgL7SMMWvWMvLBgRdUz9a",
  "key33": "XgBBj3JvnTCAjAQ9C7SXAXXA6xuK9vsKiuPhJocujku6svpDbUukyJryeJR3wHXgnuETN8zMYrQfBgFy1Dg3BAK",
  "key34": "LjRJ5iSGYU9Ea67UKGv65gKkfLjQKdbgBFb9bBGzNdiru7YxNtmdX8fDibPEkYLiPQy8bbWejdvcZVa29cMVW1c",
  "key35": "2bRgHxzK9zwC2p65oSwh1HGDj8uDFY9yaaNtumUsZ7zHWRhoxwKJbJW6KxxUSTmhqFtkEr81YBNNbf61TQ7SSoAP",
  "key36": "58o1MSMV3RokjRJAtkfZuryr1795tVp8eu3b5sUQMYZfcBV5hBzLCBfCqkPE6EJf1DKLFb9VjBbCbG24fnck3zrY",
  "key37": "53vhG4R77upNn1n3tfzBnAFTyh7cGY4wJ376BPy3Bxwh4qqSxseHTrnnMQ5LfvRTKqJvhXUhtPiy3C9K6jxC96dC",
  "key38": "55UXBDyfypaPLkVv1e72NNHaQCppSR7nSE6Hr7VdK4Yf31nS3tUwDWDAcCMJ4n29Vc1pgR73GAXSNMqJYPTFGnvo",
  "key39": "2UyvvYHA7pGNKpQZ2X4pNUwuTY7HXQU4XH6iyyXs1kr2h4sLhmCy7VCCm4NSHrgn9vvCeF5bCbG1tuUA1ekE9LQH",
  "key40": "4ivwhPckExXK99sjCgkH1NUvQ3hEtFznoFvuX5wwrySdQ6zyKxxwPEkowoHSwMPfuEzi99aQbwZ13QM7hHAodopw",
  "key41": "36DxQizDRJmrXZZ2Doaj5NZ7yz5u7tNct2dNaf1PtKi39A6o77bEzAYfGnFHrhsBzpuotL9gZ5acqF5p6fm27HKH",
  "key42": "GSD9dkdTkvDc7NZEDfetkBLwGrUKtSRxaT88bLxvJGesNFHGXkwr5N48TzrUPjkDUYy2JwYwfDZKRVeYNLD1Fe8",
  "key43": "33Esz3tXn8PQ8vMaAoWp7Ze77XXGcSBz44wFj5R6tSDcNq4jqvNTv8PsDwYTsbLB47Aj4Kd5mdnG1kpqTrLo7vEB",
  "key44": "24K5P8iNZTZFGU3Xi1JVZZZL86HcqogLP1B7QackUJRNPL8c28prJhiBtMxceD4wZ1DSA8gerFjoJuqDDrU2QQEw",
  "key45": "3xXi1Xg1RM1fSBkcA4syHeYc9NGgbDAED5iBRapYViGSqLq1WfkVJV4jMQezNRPhgu9MEN1zU3Lq3pebKtT1rVmX",
  "key46": "2yV44YVkUJdHyAGjUqcG873ugnVsWP5uueAcSvFQnvCZsuHZ7s6HguqS6jky9s8KeypBn9qsYDtPR417VjgBMHRx"
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
