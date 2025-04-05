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
    "5mcv9FMEqWfWQ6tLi7iDbT1RC2qZdwdMmD76EidaWeo1ZFYDV33xhj1JH2KvfSGJ5SntWAh8sib8CRSXhMASwy9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bsmpoKWwAQ6CBvjM5NpRu1YGwZmUcg8gV2Kw3T1ZpNwprnfXKYmFubdzXKidgGqjCtshaA2sZGPutLmV2adGJwq",
  "key1": "4BTx7PzT5bGQaq4Q3vSdGkshHbm6Fi3Pmeceg7tkppZthxPHo9TRCpZYAfva19pADFjhU52BNRraDeepp2bqU7wH",
  "key2": "62nWmnHmvQtK9SVV1ga741kBiy5CMTZQoz8gT2qZfq4hAuzBVmxN59roxxx7UE63W2jPKuPdctEDva8YS1e9NfC5",
  "key3": "65V3pxESxJCTBLdXSEvQzW181g2cRXPy6VxcJW4ZJzwcq7Q54V9xd18RKkbbK9UqWsFMHHtwNx1iPuvvDxAerNbe",
  "key4": "3SnPPqNGo1jaDiW1LDT7d6o5a2xDqm9ivyR8UkVEVbz9WLUmZsUaA9oPoJA8ZzXYgjAK7uUeABX8sfZN4MGuZtnd",
  "key5": "26DNZ6PTGdudbjojow1hVmAprxmHL65acDejfAGe5p4YjzXkRXFX54yFVdi2v8pkLzmfehbSM67wCrGhKxEjbMnp",
  "key6": "36ghThfhDHLvAGVYp95MrqQUwMLP9t61x4sfgwC1KPDrZregk1DcGwYQG4peGXSQZiD471dQP8E3c4hz7r7eg8EG",
  "key7": "3H8bcQ5WTH3LchntvTFjkhE6s1tjFdv8foAGBgNHqWcajE1cCwvvGyPmFQiiBSr2TLjBNu3DnvMzye5G1UtxT7B7",
  "key8": "65YESCGxPGCBvwJdruNPssMxmt6fNUJpMJGFGtNeCeMe4fc8vdEjt2UyfFPYXC8WGJ8za9eHgx2pTSyFvmu6ktAt",
  "key9": "5Hm2sCgqD5cXtkUEefCBbndBP1z2rJHQ8nHXxwBGR1irFkcRjUC2ChEMEJHPd7wXLEcJBrGRzw7zLL1m4GSGBoih",
  "key10": "5PRoAodeckBiEAogmtixU1gAJq2cCmzLWrP3pMR5tU8U2ssw6nkC3c2zfd6DdpBfK3nM1Smi2H2T2HQwwsKKWQSr",
  "key11": "31ZcKUvyWtDM51kkwKHoiW61HAMD5TTTHCjkyYMeRtUxnv3qoj1R7Bk918AHDKU2m8uZfsro2xCVQ1oeZBttuxUa",
  "key12": "55J5VCHaaa8VjxMTqFtmg7xpEbAaUVDfmCfLZSnV1tMfVWhJ6epD9oAmrS2M2PCUTmdjzL7nVJX7RazQQrVF4a7y",
  "key13": "3qj799aCXb3y3Qeued2vjs6jXoWdcm6FU9PUyoLBons8ED1UyMqe4e8PJtCrZyn51nvLDDM4bCCfD35tT6bymasx",
  "key14": "HyLX2NUnGBhgkfE5Qy6NwQU11hw7WTZfVSPkPpF95J41hsqU5P6GawbQpTLhGwM1PKBDPPojdkYMTrXTPpz8dGb",
  "key15": "GCDnRX6qwPpViBr3Jbdwbahts1iSYK2bTfy7nZy4gshZzCTygUfMt5FK9sVAWqBCtDzdiHW6yhKifqDHoNUh9yY",
  "key16": "4Jya9JEdskNcmGoW7X7swfWVTV4PjxJGCkMPQqwf87HrMzi4XZFJzGF2D4yWmeQaWMQDFXfdcUVMAwKJzhrHUHvn",
  "key17": "4tiSd3V8xN9ZojMr1y5PyUQB42PZMXistEiEBsYygqnpPz2q1ZxqsFVASSBFWB6HsyystNAxQM9JqQi1LRp7mhTo",
  "key18": "3T28aPwx8Yn3i2TULgWxKB5ioiPMBbM5vuyZCoAPwCuVVMio6nJd3u23kLefXw1rZPqc8d9hdJMzXG1HEQV74BDo",
  "key19": "5HV5dAAi8mYBAyWzT6p3Zob3JdnUmtESarhor8cqzAFynHm7jFZUjX5fUQPdQCSL7Z3pYqxqKfJD6YdaAnxV5wuH",
  "key20": "4wSXgQgSeoEcDgxWTyuqRWRyV4dohW92QM9M8ZNYrX9r5zsCv57xqY6vNY711pdTRDdxoxcWTbjVioBwEz4oSFMw",
  "key21": "2AsRBB2sxsqh1DBYfY4NsDV3AdkXXZtJDFEtsdfQ3sNremW9rqSa2xUAUMkyKi8U3tZZ7QjgFW65pvNFk2M1E7zM",
  "key22": "2BDuXUWZjc4AMPdKQj3tejpWzrkAF2ysZMMzEWiAR4o486xtadCFTpCCtH3FgudzqDc9aGiSK411FQVfjvL5FSRh",
  "key23": "3J44ZWY7NRxfUyHGD8FgvLoCKRHeebF6HSQVeBRz3njJ3xp5wX8gWqoC7b3YGrd2whUiiiJTNYF5dALqNJnPZXdL",
  "key24": "5LDrejKzgEsCGEA37JiT2K8VQ95qUvCGoVbG6vtGtzwZyK14yqES4tySGKdZDWSZw24AeqeWGH7hzHM418YVSDvV",
  "key25": "VncvfmbwsRQd4Z9iHddLqQT7DHw4Whh8EN1FEsGN6STZ239vcn3jts4QgqJU6z3VNDqBS2ZazrsP7iSQNLMYALg",
  "key26": "3YEmv7F8YYdfxFtMoyNXeh5e9ixA3jPG43HpssKqURMbR8EY8uk7ggeaymkLp1r54p2tXThtJhY3ALeTyKPScgiw",
  "key27": "WT4VB3aADXva8TxDqsef4Eir5GpfT8PJ1Msu8pbcBJB19XYxMbrzYkMFcV69E5vYzEkF9UtmKW5WooxupDDwynf",
  "key28": "MtZpaaxkqexCNHQ9vXCFhQTeXhBQnV49AQ7657FfJmgoNBTKLrrsiQFD7K4gpNsmig8vznJo8zFECCZ2zr6PVBM",
  "key29": "fc6FkT36sav6z8tGVj5jQLJ8vzRfpg7cmHRDR7s8Z5BqFqe1fRd9z98ohfvGZy8SUi9nwDd2f5dxwmwanKbMtYw",
  "key30": "4r1oxp8BVD2H9NTpeGj8KRBSVB6JjcjWu9R5r6ZUUGCTMuWNW4CQseUbeQmnQFm549jjg3FzA6aiKVrxVXC34irB",
  "key31": "5a7NZptzXHR1Lyr1Sudk3j5sCnEfunRxiJc3BokEXTij2oNFXnAZBvu5m2Ksx7YahXkUSHHTD7FgQharTDtgBimj",
  "key32": "56CdXHWzVc6C5H2fwts1xugwp8R1e7gMM5LVcgrHkdHxzLPLv9kJRCSbiiY6WpMUrFEz18bCDiSDBuwv9o3CFcW4",
  "key33": "4RzdLPegBEwwpULK8XkhrRYJQ3E1peNmom7k844LyDmsuESjCLwMoU15KcuMyvPdQb47Y57NivgU5pbRyyVzQ5hj",
  "key34": "3cDHqK6GuZskrF1jbWBrytAPDMZH9SWg7dGZRT9Qy7TbdKVXQocCUeZkPydkKjmGSpQbU8DzWsa2C5q1n1pccPFk",
  "key35": "4rm1tUshWPSL3BnVrgFSnyq9La3pS6bsdAwqo9FcSVWKU8HrW8aCtdEQc41QA8qFhVKvYJ9RUauZi9wm5zUBfVXS",
  "key36": "6geG66TaxiR5k5rWsVkdVNT9DfwTREBjGCdjhjw8ZZjwQUB8c6yN4gRWd6JMVogtm9PQCCQpqiYpocwp3k8g3wK",
  "key37": "5reuJwHFSA56NgAd1ULNpH2xjFzYuh1hfFuar1NZAz7SjrqMkzM3HfgcVAcjnZJD28kQPK1qbp6iiPTUxMXK6JQE",
  "key38": "gjy8LxW13N429H3cMjdgFAPcc3Pme5xi4ig7qjWuA9dmhWvjRZXRrbbJGuQomf4XM22uQUgEdpmzshPuR3M5dyT",
  "key39": "DhuPu9vqZV3pdaCA3VFpLyb4kCettVSE7ATgfgL6PJXNXmdho9udWHjJujeJL6m1p2cTGkfYrvMFy9fHpLarXoW",
  "key40": "c9M62UxSak7fbSM33QTiYm1YZn47YmpjLqjUJb3ATQykrqzJonhKkvYpoRjRwgUu9a59c3Wc2ox8Q2LFzY1D5bu",
  "key41": "3TFeYzHR41K9Y46NaNjs42NGRCfHnGQQZrEHs6bQRxJVdyd8cLb7rbuPW8PSsYeTes6eJeuVH9diGzZpSLppBGEQ",
  "key42": "3Vi7VwG6ckfn62dUK4AdYLDNfuBXeJM5TYqUPFNm4Ys4whJgRXcbdrawnLjRPkCs42PHVcNEGGCtX1cMFfq6TTy",
  "key43": "2wHonbojNn1FD4kW4rKLEdNahegpDVv6uAYgWKWBxfFDdBTcixDCMmKRWc14d9vmfzJR5799qXXThuQi7L8mCtmn",
  "key44": "h9yW25HsFmtnFgWPGJG4qm19ZdK4pCjXDp2bTesVCiR7QzRKPL4Py5Gmn6o7V68Sts9mUwwCPWFSHKYq14t85Ct",
  "key45": "3BfaPoXKnqbze2wzcjs7cDMTu2Yj4828J6x9uhJDpo38vRY8Cq54coDW6ec9AaihXdJk5Qj1L5JnggrXFaHBzcJW",
  "key46": "BxF4JDa2nyBQdZGV9nQ1PNsFZ9g5L5W5gL5tcaRmJw86ythUsC1jQFz7MGPxWXZXKesyLGBATQcUhzTE9iizcca",
  "key47": "4ADmvfEu6FivQMTMks1U6fiw5dZNDUXzFdZmFRwaSGmYiXbTojYyqD69YsKvW4VwBUH2dufwcJdBSNeV4Wcg5MZA",
  "key48": "5z3TxPzoFKDtT5ZLdTUvxRC9rMG2WgGpe5QJYncvDptxkxcr4WD4GKussB3W5PpGAxUzHCnBFporiogLCrWHrT5o",
  "key49": "UNDyQUD4hoPYiL6Gho6ABZnnPrKuQSAMdTwVqrs8ywqGB7Hci7aJTJCJhXqHcwu9G1dQ3SB7miTL6s82EwHd7Xj"
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
