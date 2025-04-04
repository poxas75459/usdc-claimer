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
    "Rq9jsuJJ4frBkdxJuUoVujNsjofh86gMeFbzkDNhqFSnbs2a3ESuSx8DirxxJMVYiXuMhv63VTcZXutj64WcBoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WNLcKkbeUvgsDjLhq7wnUjVs62vzPhXLBTDmTFfMgXBTfimNZhcX8jwT5nBMeBVwSQ9jWLBaCnURZQJRCPHvRge",
  "key1": "3ez6NQyZApbiu6uQUrcNnyZvFF6iJFsRYggu7q3VVrAfm4ZC46EnjgT4XE7EH12EYVfb2m4XpuPp8kW6G65m8F6x",
  "key2": "274WY7n2SGAogqKJoHFjJvnWPdieLR51SH3MHPk2jfs7eP8fQzW3nHe14daZrAKVoJ1mtyDNVpSuYRkLpGTzt88W",
  "key3": "56g6tbZxXjaazQdQ4JacZwTVJnxM72jvJ5ZYfBFW9Y4mcurB7bKEUECn1qdmXr8Pkxub7pZAdkmoVoJxwSK1GHbu",
  "key4": "sYak1RrXdKMR8GpXrAiJiikZDyuBnYW4MymjzVNgngQwYJjTSza8bEUwurDARAbAf5aT5TUztRCx3qzkxvw9qJH",
  "key5": "GYuqcJ2feLtCTu2LaMZ1n2XfL1zjnrJWWL3zHfuvtp3y3iAne9VmpD6Hy7fsAcrrT42dbWjqDCreBcDmK5f8wms",
  "key6": "58nwnrohVggJZhvvMrLhzsDg9pTVumK9SCsc8vxnanhYcqmb3YWD91xrXxjfqRVaX4NdB9b9UhTxEFSoBnRAbJGi",
  "key7": "3phBs9Wjb1reVmTSnRhYzzNf1wHmeJYAQVxRhrbY6tz9v8EViqZmMqq3psdvkyTjdpTjYK3nxiTZCg26FbQqAcw4",
  "key8": "4kEMVdU8Fj81RT5XRxoPaKJPEiLAocqEpqV9VBy9Cv5L5Yr8X5cNbu16k8zQbU1vQZrSoSgL2rXXkcXotxLhWwmh",
  "key9": "rrhN4e5veDVf2SxvjLzdUhWHLroYXwzCD2eqqQjsP8HcBcGZsK4xZ9Czy3K9RxQPtYgP9VjA8VLrPiAzBymY1T2",
  "key10": "5xStt1p2bzzLB18cGWLvafSfpPU8RrtbWvyxQmzeSeuDdL8JCMw9N8qzexX8khEFevFnBKw7Bpz41iDQvjFhHuNx",
  "key11": "mtVr8roBxaTf73nB15Jqt7yNCbXdYXQ3rir4EGKkCx97kqNBa5S2nfNTxkKLWFfXunJFPECMxC6BK8FQRy1iC3M",
  "key12": "2LfYWXhNrM6fpBhm8KSxiYFEcKc8cjVSqPdWEviTVzHqvRBMfQous76dtqk2qFY3sanYRZK4nDrzArkxSsN7ydhq",
  "key13": "371uPjaihuyF59n174x19A6VsPgqVHzbHitJyQ5tMK7dvsq9gdL8E8SKRyTGhrXBhNqo2dmP6PaWLunFaF3T2Hoc",
  "key14": "ec3j1HBEGQ8RhdMaJyeXMLDZA65DyNF9GJV7zUByhGuV8te8WGratxosaQoQ5ZJ1PuuQwxTZHVaEgqZD51FYvap",
  "key15": "sLA7Ds4ejXh8Npd1cCqEZyC6eFFo58XTzKoQk1CGMhk6tMdWxNWq49kCPYVS376b9PkTFcRxkEApXXJutfMjLTe",
  "key16": "5hrtBd7qo3oL4YP3EdWRFutcTja8FLgXgGkWfD92To3hf9Nk94vYQXeqbA1bJpcPPyn5sMzc1perscZ1eeojXfDT",
  "key17": "2ece3rTn7k1n5uF5vAksEFrcXZQToQfQ3hU4mkvUuKo88LXQjHDDvKSgm5izVBfAePrejQao67mxfFp3zLdGdo6C",
  "key18": "3SNps6cL8fGJcbwHbUQM9x5s4LX1Esru8RS5drHQpJaHwnvQ477hSyNmHFujct1GTChuc3FmLtwTh962pYRvBbDN",
  "key19": "3qsjqNGrydqBoqvDPFUWu2cZffoRPyv3BFqVB7ZYsz6rvuRSebrnjhJaN5A3ht6sQCfe5P5P92Nsx9X4NV5grQ4c",
  "key20": "46X94UC5k7PYBh7tW5Wi46Xukbu7cGCeF4LMnoJBq8pGnxVebS7chdoetWap5augkvyPjXUB9KPoKdWyniMve3wR",
  "key21": "2BNL2K3NRcC8WL11k3qQLHF9sP5aFnvaUke3s43J4KJzbTCmqVzrn7GgiPx6jJjiFDxz4ZqLtUHXEHv3hfUar2Lj",
  "key22": "7DyWT4Lr2Vdkte9TYTYLCAxSoa7fdoTJkz27Dm966vQXWJXkSb959rUHwPGVUUQ8UogRjq1N7YoLAEsq9664a8f",
  "key23": "cEWbBy6ahm6YfncqJWY4P9uW5uLNF2ZbSHkFG2YCVRbAeg81d2473VG3v3qYpyaDudEv3qRdtn3umJTn6U4JNos",
  "key24": "5drZgohq7NRmbpLupGHpLpeoNoDM8RD92UZYPH6fCH6cKKmKUg1jQjykr9Jfzmuok6XYjFnXu1vYqL6SoHS8K26d",
  "key25": "2cnA39LxxSuoJKNKnDJNvH7nXY1vvbuyz7AHMCuqd5Brdb5CDBNUooMtEg8yQz28owWdgmc8k56gmzAe9qcUkQLS",
  "key26": "3vqgiCeJ6sR7RXHriHPW7rPzyyTWae1NL9wm1ftWtEJMWt9osFd7DR8tNFLMS8RAWLPra3PKdQSK7jzMDhX71xmG",
  "key27": "4SNzvjwFHN4qzy94QrcqVZ7pXvtX82wpde6dFVRZXku1LsfNeoNMYpVzhBCRpifqotYmeWJTBDJm3JtWzbnfsC9r",
  "key28": "3CKQ6AcYGk4UA7qX9jq4HvtMQZVCxvAsyeq2JtU7vsEtcKdM6quSwdDnFtMAdhu2gWaKgpc6cgU7okLZCeKs9dW3",
  "key29": "4snGQzihGnngTbrfxTYtEtHvLhpfPBtFHE68X3vW9NKrZJgnf4N7MpWsti6gaf9DXokKBde7G54zmvKom7wvParK",
  "key30": "53WenrYfnfDVQqhSGS8CrSYAWRpxML4NHFSkftsZ98jUZyJgmKH9kvD2PngEXUDjQo1ou9y2AVVstLYwtyzRLtsX",
  "key31": "3g4sxMJJbetN1rTuBJwko975Fz18nSNXDJE4jxHSxfKmxUcGE9aSGkjQA5YurbEqMEZU5DWt9oVYv4LQFYKuHMoi",
  "key32": "32FnpZdt9c9Z865LYRhwjWBYbtoboUp7Ss6yU9bexmS6cTBkBrMUahfCMAcPBJSDZB1L1uJSyYkhYpokSU948buP",
  "key33": "4tzvYtxuVyP7GCPtcpLeRJAT2NpuLBW34oicgFtdnMVrM5soeSrT4J6jfqJhsK4RTjHv3Q1xwHvww9hzbubCqp3b",
  "key34": "Y6itV9HntT1kgPwDCmRr659r9N7FQ34cCkUrvLzntp5cVb6oowqvgsfjHuMKGsF5CKtYGXovKzk1vHYfy7pei7r",
  "key35": "2ZY4fJgnp5R8XffKPHjXYeNMLuYHhJCLvRHdTgMjj2E3mupsVRr5UMQdEZz8qGwWdDjKoH8PFmthqNpXBGEEfaZr",
  "key36": "ziQppsSLhHTiDiTpgtJtpyi5J5TPwBCSbv86vdDgtks1tGYa3cXx46JgxRiGwAPErTRNNWZdQmhfDMGvWYMu4Yb",
  "key37": "1krh7dTyXmGN1dhHBhwse3Y8teKnKvDwdRuunj75r2kj4mNbJenwBFoj7es5zYT2bxz7oj7zrgz4qx92AnH1KhU",
  "key38": "45TiiAmHSG76Rc8ieRTPfshTkgdu1kiC8Pwy82qsLMFPjZtQAXmyKXmvjpxCVAwNe5RQtUHnEpy1zDH1y9N2YMZH",
  "key39": "3o49N7ipNRyMD3YbQ7icJ7vqkUyELVEb43VzDvPm7qAh5sCGdtXQSKkQTqTvdcLhCD1vBguN12miV7yXo9VAVpF",
  "key40": "4ThfmTJZx4DhMCKPFQwhc1hQUBDZBjUT4maEmywwedkRmo8adQQzTFzB428YSBw6GFRuovHyZTEotdXTkxgKiPMF",
  "key41": "3jbPB52jjsnn1H1bRhgeLd8mrL1FWUihu4ykcaULnSz9EHCUQN4k9nyAQKTrAJGdqEieJQVPagsY8vJ8zb1w3Ukk",
  "key42": "2UNFdmgX83o9FF3Zkg9Eu8W99AGDmdt23oRN9dDn2xP4xAWavYkNXuGDQncJAgpwoTq6SqzqFZP4nPgsp7jXCGqW",
  "key43": "5mUMkYuYPaRGaGsyzZqPjrQEiJCjCsS3iWdzk3PQ7k4SgvupoLvsh3nGKewq5zKVQnZ8eJPvZokPWZHB8E7MHAXY",
  "key44": "5g8Z1EtibRtqpKFaTy8cN6XbQkbcgwgDSjdzhpbTcyZdij5fmx3x6CemCGpVZEhzaRm6DBNZwYfBHaPKhLNb854f",
  "key45": "5Esk7eMDdAChT8TcB94dx5hjEi5ashEagx98nCyVsppm4phiUB1ADxKzVH9xMLjNoRZ1KjTaiwoTcxkUSRkV9jj5",
  "key46": "2RyozTF6k8z9TDcPHRCQNrHxQ63XeREeJxY9g2siAtgDsbr9epepPNSio1in6DAJqoVApvqUC6YEUnahjrH5jimf"
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
