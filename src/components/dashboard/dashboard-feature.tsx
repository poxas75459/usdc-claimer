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
    "5Wg5Z6Z8ytUFFn2sgjF1w4hFZoCKadaS7QsZY9K9eL47bTmChwXETDPfK87Sjhk4c9uNfxD4iyu1EDJZz8apY7AB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wHXh1bmXD4FiPgsX7J3y9mVHQ9opzTju1LYK8xtcWyuJTWUBRd3w38NjVMNKtUWrveM8UT36AohTUPQM8VAfAks",
  "key1": "57inEhu7vY261kbfX6evAK4vosgHpNWWU3HLWrUAX8RvWeppQwWfZbEJ7qcEfD8dteXVpjnkjHxnN9vEcirQKY5w",
  "key2": "4QRk9Ff5evgurJwy72HSWym9ZMc7KWaKhdbiQsawwcqxdGvuQAeNMEspZ8D7AhWvBwLLrxanJjQWjh7RenKsYhVP",
  "key3": "42zQKPvUMcB131dPEHp4RStkyekTjpJiDWxL6nMnVWmn19TNfbwtn4Kx8cCa8HDzW5BuK55V5WibrMDz5Wkhj8mG",
  "key4": "2d2kzRtgWJMxW7tonSNShxTBZvu7QjWxRNqVRSDrhyUawXLzHQp8EUCfm5KHrHEh3qMtLLuqRSehKWG1icEiDqtN",
  "key5": "SkqpKdKRSQhTFkZKGArfks6jTuatacCw2v3AGBoeGpo5WqvZuAtvUXK9TMGDYBiqh59Agv3yfdog87dwmNfmDQt",
  "key6": "2XQMsM1Whtg76vhnnGk26LxBzHJN8EL1vuxhSwy5ZpSiuaoPdRVaZonb6zPznE7jkihYkrATAoMCo9JSmUuZZ4u",
  "key7": "TX5xv1ViENmeQvCEmFKKUzFArPnZRhQu1iYDGufGqTuRc9DdAb5A61RgxyUkYXaMxsSM57cBK7qpHfqmBsKFPCk",
  "key8": "4oNxvagEeAhaStvZ73PbvoyET6LLj5RTjVDfSEv3dnZYZom3qHGimYsjmzpmTeb9FjTkNk23X1h12KEkieDYbbrD",
  "key9": "5Y5VyNKvRNzaKRzDXkBkm2fQ7ZitQ9dqspPxsyG9fr5asPSt8sWrdv8wGJxyippPxrpsuQjTQEnKg4oVayXeaAfV",
  "key10": "5viKYAt6iqYFi3SGNCq8sSXdBjzuZay7AgcLL7XGhpDRCpafwX8VoGFgYiHLFncXtDa1YKp41581S8BfpDRFYFN6",
  "key11": "27pPpHsfYTySgeTWxVF98yzgPfwLKcS8vcVC4tPBxN1gLdzvT6SH8FsGYm19h5DwRQzhvA6bbCGyxmaN1xYoayDh",
  "key12": "5nTmsxoqdqRxefT4rJxmeKu3sfArH5knGjvRNz9bvoE9vC1RprZJFgj3HNeKPVWxoTZ5y8yaXjEP3QATXgHj8Uv9",
  "key13": "3tUkPrqPa3A9eSoxPSHhP1HwfjwpMyie6hiZqmez7hdQm9w5175WvZvWU3K9pSSXq4vuRDE2K12nWjpU7GncJ6Du",
  "key14": "3SBm4XXvsbP3jNWHrAMKuXG6eLSJizMekQ1keLGyS4P92tHkmVknYD3ToFQUZ2UfD8dzJtijrnE174RGerpaZzD2",
  "key15": "2vF35Gj8o6nQeLv4SSuLTYZzk9KHoX2ZU1LyuMxQY1ug9PNWxtTgv5ktGpf3X3XqKZ91U2dk3nkEd9cZhWMjUKax",
  "key16": "FemBkWMBwW83YQTXM7MRSMTZFLWX7pHpLEM8jio2DbpB6wcqEVo6cGh3QhMy7uA1ZJGX9fZ8ahko79GXJHooFLT",
  "key17": "5zhCKdLtYS5z7yHzcALtKBG7xopyuDVcygk6Anay6SiLSK3QPRpP6W2HDPvqYKiXHX6ANNLxXsfwJK8o3dAojtqJ",
  "key18": "3vFDv985PrfMFAktAp5pSfXDCxt4HnqUsRCv6CxxAtzuQfq5p8n5RiGf8sqaS9Ab7HYmxZeRHcMcbr3qwpWGP7wz",
  "key19": "45LkzKUkeDft6Q42v2pF7hu6eWtASHbJ9Y6No842nTHQMnAuTkJe89FDNcG8PrzEN22quytDY1yQycFLyvDTAgzr",
  "key20": "46kyoTiiUDaVPPdvsXJgA2GzJPQcntrxnkgds1TFLoXw4u5cHakepfqGJ9iEfaAMY2cLwydgxU2Pcbs4N9wDQtAM",
  "key21": "4KfS4aynnz7xHerZHQ7STJRb6XGKCzXGo4pCgzeFXSviAV985QKn5ZBa1JPfhoN8wpt5ZRgtBDjRWinjdwJ9pPQ",
  "key22": "TXo6QKUuHaVS4oYP3y7gR5TEMmJ6LJd9B1EG565GwAj1odCSxvwEjmfqQzaX7pq1Z7MN4wY7uyECsTCtRDnMdxB",
  "key23": "GpGJDNCrzHZVM7CtprJjpiQS9GwyX19WfJRNHofRtWb3ufL9xscAjgpS1eCbvmNNXPeP3uU4ZD55rqdtezVhbQ7",
  "key24": "5mxYJqrfGhhdJTYnnr4nzyNUKm9xQ9kGiqWqL1vdd5TXkHUaGawGzRkbsrvrwDAMRNU7gPjxVEjLLdXqewzqiY8h",
  "key25": "59Zuw74WJYKsi5Fm2pEqZeJCVNBfTWgU2NSoZaGGdG8TaLtGRVyxoJYnnmzfnLXREWbaYHKiK4oX4NsqDDJ7ydQS",
  "key26": "2BPuaC1pxSPy9LuMC8qm5keM7VpKgbyWzdT9F61zbu6r1YptWhPffTQJVUBDy6BHYTA2MAZd35ipvAE2EBpQcqvw",
  "key27": "3xytWAQGhzbGHAnYuYFCvYFwwUyThREcyAhE3GhiBdaQ2mZscwySFSZu9Dr5mKx6t3pj312tPEBbr8sb3bDypGKu",
  "key28": "R21nAGyjrq3FJwbjSP8uB6WrWLs532XH7F1i3CtBz2mN4fmY1bh2Bc2SMxeMiGjJgSvjo8yoiF3mdpYcdm2kuLL",
  "key29": "2wVP4BUMbxd9249uUgwNkBhv4SwEwAZ4JeEReTZvEMxjg7D4MJSVjYtXZ8X1eNKFoPXGRrz2Xb6HPAS8HogXcj6k",
  "key30": "3tE385M9Uxo8yhmLQAeeC5abpY1RAZ9uQnKjCHWgZVrxHSsqt7qtq1ZxWbszt9iWjNwKki1mbzQj8XszRvX4S5jU",
  "key31": "5WkACHE2yCw59idKHxNoFzyS11Ni2Qc6tasWqPZjnPo2M23NPppeUh3PgaNR7j1PS71RcmV8dZsfc362P5fBqwNs",
  "key32": "33EL3N8hWRokdhTyefrJJyqHrV7symmSAkE5SkXG9Hxbb19JiKmyokzrayEosqWrVkZNDCbfuYnj7jeUQGGSeQ6k",
  "key33": "5PaMsu6g4JneBNAcJspJs928E6tRAAyx74Uccp7HSSGwjXBQpXaRvjPcng6UcBESkvnSXrMjaHB8JLrmwc4PYbT9",
  "key34": "3bfyG1AgKS9uqtHfzcpsoE63bKkWu6pZMkAVLL4rLRjT9BbyfHpsehQcGqVo8WxCWcHme8qq5nyMkZVGFph5agxR",
  "key35": "5Te2puuHhZ3qtfCGzWsJCZQpNbrB6VgVeTK7nGbsbBUHRQxReowXzSFHNoYTH47CLLaJWaQsV5FQAW6kaRyH9kiC",
  "key36": "27jupyUZWNBTQqeNtvLKXU6chey2kUAPjxRriV5p3JxFCkp5Hvtc9TRwLrkVt8QX5hbXTCoqqyzZrNWhZ5ktJHH5",
  "key37": "5VexVGAzhsSMuGjvJKiwzsGtVWVaCgoM95vcBUhQBHjSGrjP7xcGktbFVp51B3FHn5ukTkHmPkGBLasnq4B7YgEX",
  "key38": "429c2qJZVTASpkKNnAT7VY9pSEiXEJi3kiKChKryDKcK61SQqis8GCGMNJ1ixmSZvijiBSLj2G9xZEb4yPpBjEET",
  "key39": "2Yp3txH72azdZZQ26MMwn9tBxcVr4CEWt4mpx3fYpS54yiBU8mmcDFZWFsex3NsVB3DqZe69gQk5tyiPsBDtsjP4",
  "key40": "KC6JSDiUFiQVBpSmP2FfVERBerVh26UXb5XbVgG2zwxq9TCGPCCpcvDWr8p8xezozZgPVMWY6ZnrGHrKBwsZcCw",
  "key41": "FLCBHmfNtWKuAYLioxg8cM7CXJ2uhJ7YEFBxPnJxMbRS8wGzGCaHxtegEq2TQNcXBFcgzjmGDYAwaaQqqHePDPX",
  "key42": "57tpVvosJFgte4RYZGmTgCrEGkyUwfwLWGqBqoU3jsJs6tsArET9pF92ctSoXaVo8bX1XZ8moHpb5WdxLGznvVdY",
  "key43": "4NJyWJx3KKmTaa6xmWuiGrrXrTTLA6fBw9ieSahXfLj7XZ4FbW254UUvw5sNNFyxgs69nh9zpZcCJiGjRHqVWKq4",
  "key44": "3QqtZRjvWAsaHMjhBixej6UmqUXffWe5bB9zX4wKhyA7QBsPqwbmpdzXhoadzs2YhSBcrfJvWfvTXg9ZCHek7Gq5",
  "key45": "3gQhGiaALRtLBcze4i7WXiLTEvibUeCQqm12QFaLwR5cS9An9kYTtHihYD8WQdNoJUMvCECeLLbVTny1rfh4RkM",
  "key46": "3DfkR3XxchLrqzcL9Y1DqvvDb1ikXakZwssTCCsk6HrpDm7ZLM9X7cBFJ27PNAziDE1jjW9dBz6fBCaj3FC992Ee"
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
