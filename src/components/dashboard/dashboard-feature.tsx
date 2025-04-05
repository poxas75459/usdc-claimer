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
    "36UZq74JAekfAHW6ppYxcNjRu58XNpmwaGMXvLBHH9rSdGG1GbiXXvMayHFFbv88Qc5Xtx5eriZRpS8xKSqFcz72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2beFhTqdSJvHsCpPED94xzcbYaxuhzEN9a5or2txgdZ6GTNwks5hK1Pazp7rD3fFx5f1zWe3ZfK8fRtz2JePBVkG",
  "key1": "5z44mzC216VkB5h5TyXihWR9XsyvdrjAufHJwXrvsCRVsc3Trnpv9huA8NaiYcPZ3AAHDjBZ1cifBgREoY6WSxcx",
  "key2": "5u1n2cE2hRK7AFrVyPxkZzw4kpVcJBZgA3Yz6XXwcFzTiieba2Xd5c133KzQukjkqQVDt79zoyvKPsjHbf9diJdL",
  "key3": "LfeeqgF1ExrQmP3WLq3gQ7oYa6ZE56MiqvC6XiVu2gsCLZ5iia4uBFER58fEr7Jf8kb56f3qiCo4Yxza8Ntxez6",
  "key4": "5ZQXLq8Z9k83h2xqRnbEve2PgbsrXJm1FWpU16EEqgLSN99wBnoYh1LjrJqz9EhT3YszAMfSy7UVGuC8DpdudHkZ",
  "key5": "2z8T8x3L1BeqfKUZyBcxWMt3MHbPKPiyRZv8LgCawxKGxeU9UkP1dmeNxZgGTRettT5cDmWrGtnWiBr7LK3bN7pB",
  "key6": "2WXXs1xbCDhYnqSWQrVjPgnki2EQMUGMp1BQEsNWsSJMbhjGqwtBqHetW7MntNwv4ga8t1G72DAHEL2Bhu2SRF7",
  "key7": "5pDtwL4jYvXMLUWSMvzfCN5PcDL2TMXhAVzpfuTkzqZUtYbF5yjBHEYLhw3bfmANTr8x52Q39TpKemCMcTZewKZQ",
  "key8": "czVWTuBfBc71syYaow9Mkf9nW9ABz42S4L3qVaEhVsS2QxqysZEeFUX1PsfEAuCxxUX2Dk2eX5qSMTTZh7v7E2g",
  "key9": "3ws34edRV4ZMtehVPg1btviVz1rMgaBh1FuR9nsgm18C8sFAofHxU3XqJdQaXxpPUTNSQFtYeqbLTY1Th8iJAwQq",
  "key10": "3gUSc7KUDhbu1yNqZANzXFKuG1Mtr3Mfeqtb6e1Vwha2BdxW3bB4555U1rdcvibnZGY9YhbDUZbLNRQ4bQnCcsto",
  "key11": "5kXhfxYaBaUQdxSFrGnaH6kNtnmo6QtnLKxf7LQsMxUA83QNCGgp8gAcindBRwRaJoNyy5Xr68BVEsAheP2TByWU",
  "key12": "64Ag3CNuM5TJz7VUFhcTgtphEPdg5igLW8ZZwd6YJrSXAn3qY3r5Rm9j3d6bTDQBehwUEJYwbRcwb1Ag3nE9NMpi",
  "key13": "24n6wZ53XmBbvnW7Bvs2NwxytLSF2f74B8SxvsRGaidwn9GXHS5iq5KrAxhFB7uMaMJtPQG56isHTDyxm7BdUpRA",
  "key14": "5XJQc4MDPh3gLMoVT8jrVueLhB74SqK9J7L9BDik2RTSUnjTAz8wYUBBi7QfYhnmqhMCeZUtzSUvEEVdNfyJtkq",
  "key15": "MgttFscULabkYJD861XAgUfdXPYPA5X28Us48HQ79LwVvGN3YmLLh9FYh5zQ7BvzdELMvos2iBHiGdbBWsTPsha",
  "key16": "27Mjen2biyJxwPZnP1JstVGhh4Rz7QmDsEbtnUcYkSTz2d2EEi8HDoueobEFZJD9ot4f7WZdhtsRTmgw7MXZnHVe",
  "key17": "4YdukqQAc1BoVRGJjK85iUUQW7Yxf2hfcJVrQ6Lat58dLUxyMKWRmuPhwW4xQZFsizPsiYJKCE39K4WDGUsgeQ8h",
  "key18": "45onz5UzD6YBqqNyCaFtYsX5xtiavRS6YwW5onSr1yiKdHWWGy8Khbpa1G1yc1iQJvNeAsKiNZJENkDwzsEphFDD",
  "key19": "21bDXHKvzUdug9gTNFiXStYmQc4d65yU1PSSTtJEWbA1yxJeArotPTbJ1ufbCkjSbjSEmcAHGW9YE7JoFjp4AWi4",
  "key20": "3RQWYjzTyAJ1S3jqp8dh7s5v96RDNrvNmfzvdJgbFN4VfjeZy9NW7BuzchajdJu3K65YMrzaZQ7iPt9H6Ju4CvkU",
  "key21": "59NcezDNVrgjCJ9jLYwbEjWCUF2FDAeA4haEz9td2mjRkr2jB137M5EKE937yXBz54b9fQs9odti1qFi8nscQVyS",
  "key22": "36sy4vohq1S5pjkyPggkBbyVhvzGkp2csRDNNeg2dMDegX9ZKfrfXWTj1S6ZCENLPUnSFkpBV9kfUccMHG7fzGUT",
  "key23": "5uE5AQd3eGbxZK5STabnxohXvhNCUyXYeKmeEf9EoMSPzKP7XJfxUrBmMqUb9gzWFZgcHkB32amoCzz5bWsLYaSC",
  "key24": "55JSr7wtuM4a65HCmUquYitz13V8TWePbBiNuLEkoTEpiX1r7eX9NJ39phWxrRyNszsfLxWVJyQ58hsxgTwVPWcm",
  "key25": "2wkvddMXsLY55Qpk97trp4Ah7X9NE53oNkBUS8d34qYdKvZg5aj1GZ72EQSu5KseR7ggjXgVfPizr4QHiUsociic",
  "key26": "2JKWEqBDEwdbyoPtVfs9S5Th3ZjKnV6DGyJYewbUJ7f1wgQvHd8bVb563xM4hS14hP8bTDU1uukuTQ1xYatZiF5s",
  "key27": "47GS5EDjQ3NJMExo8UtmjP1jsaiJ8FWChdux4FQLsq9kBm5GrJsKEPcFFh76ANzBGxdZcAXAySqirNoqXLwjfNpz",
  "key28": "5PWM1DSKAqeVwQxrdPPA3T65iaziVn5fxhZjCDdPshy5oh8eYnpUxh71YstXiqTePfr3QuiwxqBrDY5spCA2ejjp",
  "key29": "4ZTASoPMazG5nwUWY2HJqbKPjgtaqb9z9Sc5VupRAQmHuwWYs8yg9JmEU3P1Z5aaZfWjjQ5b71T7PKsk86LYuzg1",
  "key30": "4cWVZsrnDxcA3mhignwEnqj4RKtzz9x8wuaXrUDJLBQGq7Kwoi1N3we7iQHL1ELwWGeFGdtFcXw9Z9dfpvy5yQtx",
  "key31": "2iKQcQcV4cXvfh1EyrHceREPKnBHS1p2x4qY8qGGiSKAFGLvKULHo5aPghAg36tnrUgWQRQBNtvk8tPTsWtFtmQT",
  "key32": "wGn2K8oxbpmyWu2rhq4vfUSEeXZMMrXwMxeiAE2z3PHWmrkwkXP1TDrGJ3oMisESuXwwxYhnrzrMofKiMtXFtJx",
  "key33": "4PnX1fxhxvrUHLHeLV8BY6TocG62jVuGogWa5etzDCmfSj5kEfGuDD6crKN81ovguGkYmyY1PwMnCajy7rgkvqku",
  "key34": "2njtd84JhEtMNCuuARQFcdxViXRbHeAm1f1N6SZuJkmx3v8DsP8jz2CzBr1HBVbcgwmeouLi4pjy4fWa4nRYG3cy",
  "key35": "4SgtqtFKcmaH1BPLiJPWwp2XC8vWb1ahKwFD6SPJHWJ56Uhv1nETJ8dpdrDjJCJhViqNBB3RwP6CgV9HqY893bYJ",
  "key36": "2E6TXzvd5PVo1CkVrmBc8664jwbpwh57zxPN17yG5cHWy6ZAERYcWYXJ3m8LG7irUtRYzGLRyw71uzKwpJicdeuL",
  "key37": "41SnqvD2G9jWjxpRkDsDn41sYyCXqdLDrPnCC4CtKbc6CLnXRpzFHMSnVM1sMj2jDtxYJVd9ahDoZt1PNfW7oU4b",
  "key38": "fbWUpR4Bs6KUEq995X8ozp4DyXbw8EcM7Bmac6Hyg3bh6Z7ZZJ9kjDq4TuqnLrhJGuvYZuHHzyL8i8V3LwFTAZ2",
  "key39": "2cUD2iLFrYY99PdAwJ2wVtX9MzbMPGQq2djyTLQ4WQH3Gbja9arnnumFLkkP3dmuCHDsPHP6hZJxE72Urbjr7JxT",
  "key40": "4dujBaTei4TAJQZbGN4MWghM1VgJCbbgVmAxaPjRNnQiQubeH9YvZQ1hotAo7tsgzLu1yiFXh4wsmEUt3Hi6KeHo",
  "key41": "5kt3QzyD9WE8JEs38yfrZaUkWrn2bAaK2gut1NFcdo4ViuAZPhxcLMV3DVJtbZVRZFGGSmzCj59foaE8UYBWvoU2",
  "key42": "3eDCTSXUCPkDYjSB8fBpjpQm7zyaNYXAGgCmNkuDjd7KrcsBfWc8mbqGAFmqQiRaac5FLPUYtAFK2z4QYHMqVuno",
  "key43": "2NetwhEbd347fGgsBZbWubQ7sD7zeu8RJuaNgdzTtXjV52zX2rbLozYfTHh2LJhg47wcCCSjzMcwAy9u5J13aAJ9",
  "key44": "498zLGnfydef6GXyFVHPiZKbJzxfScmyjYAYPot2y9MQ55URPCzp2SBDtV1VrW8MfhYRtyfsv9gdwucvVeWTpwCL",
  "key45": "2HDd3aK4HAmQTZVUqMmaZ7Rv9Xe62kzjsK7WkLueJGAjtg6a9J3Gt6zTFtNtvUDP3qvKFgRpw2kSctFaXzP7Sqcz",
  "key46": "2N1toBkGiXqFQg3v8sUrzDc5L9Xi6mPFMByWYf73bHVarDJe62xrJQ2dJNGmVHLX2RkXKjxh9WN8LdhWuKeLbVYf",
  "key47": "26zmUr4tDEzvw4zyEBgTeE7WmZStHnFCNPQmSe1WfZUVyfEG8LKFhpXHjZnUuNZbUre1ST6C3ViCCYscmTRJWYJv",
  "key48": "3HPzNMQwJPycmxjbG74UvQnvHykyEniq8xN1hrSqm8ufSwtrTYVQ8B8uQdT56sst5kBCjibXZsaKWKXkURNo4rtP"
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
