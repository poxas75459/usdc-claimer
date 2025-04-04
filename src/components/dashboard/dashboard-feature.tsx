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
    "4yHn37Bcc96iU3boxrpC7QfLDKHBiSpFeokKbKxQyNk8nEJECdu67XW96BxcBaK2Jg6xgX3cU7tbcLB6vQRLuGhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UNELjxdg435TYg6QcZmR1eAodxzPuPjvPNChy9JRcDevsvqgH1obUATE8v5veiGcjfzQ5NKT8eCqjN5M2pYeFsE",
  "key1": "45vQLH7hkGC3F6JaLtA94HhEkAaHq3LFT5dd6CFQ37QNCnu4tr5dMPuCFjEtvXq8ozX2rWL2GsEi9tuyiM6yrew3",
  "key2": "5mK9FLo2HjNSWu5cCE1gQTnUcTrq4ajy1m1DGPLdGZg4kZWMmNmy8qZYPhWDwesNY9xEPv7ssJvhe77E8yKFGgGM",
  "key3": "2EaPtvFatjvzc4fgVfq8GUKjqCZR4KMnh7Se2AV5wcUmHDE4M74uvvPn3h242gncW2fBUwTjWMa3PEnroViRWbtg",
  "key4": "5ddC5v6yYKGFoHsEPW95sAuMgK5zXetceSZPoUt5ikWbLEsvTDjuerVSG8FQ25hPuCchzSPBu7kTYfb9vzSK6SgD",
  "key5": "3ecynDzrVGdGMBmNH8XJg5ZkJ4p4AWJyiAinbQJPSpBXT9qZBkHq1Z3BkJu4FQbAMQyXsb8jd1LNU67rWJXLEGmz",
  "key6": "Wdpqkhe7FofPzEAGNoT1w9mSCjwdWi2fWhRRNZzQNuXYkeZpzyfSNcZ6PJZTwTYXi68WKbK1CgynE2A8Yty4kU9",
  "key7": "3akG8WFpt33yXYorLw9A3bEQErRM7dwjTBKDweKPY4AsJdCz5uUK93Tm9FN1ezLyudYhxC8TeYRMiASrNFEbv6dU",
  "key8": "DFjLZSUBcmwvr65CABXLEb6ekDZU8nuUJFyxzNdj4KyiGkqpS3w6pLCpzqThCPWYofkyaA9Zy9CFTe29iRLcDuV",
  "key9": "31scCqyXfrou8ZU3mZ8657veCTAoUdM4h78nvwyQSaAWGFeV1zhAFcb9dRqpPS7DxAzJfb5vDcCqeGbS8Bw5hkcq",
  "key10": "vUV53xeRCT1NZPEowpJeYZTPBQWxNtbBLCbFPFQ7VkFBZGunmn6yJfApyjWVysyNM5TyEgVU7z4VcUacoPB1Hs5",
  "key11": "5Xf77qcb5bUz7b1iu3a81sRWtLQqmxRaN9Fq23jLJKgNiKNN8n4eCsDgsZ9idpQ6Mfithkk8JEBVQ8HAtCzEf53a",
  "key12": "5uiqhPEP1Hee7aK1duK29KAnswYSAMtY1kQjA1BEpeSFy572J8rZRVYG62zareq9hTMub3ADTeFb1RcpiRcmsTdm",
  "key13": "4ghJ3b2e97cYaE4CKjejduheZ17vvPb2qx7ZRVb8VQsCoHhFuQkv4A4QMUtEP9fe1DSmuk4QPk14C2GFKNtcbBzH",
  "key14": "5mnDvnosKN7MBEMX1EWug59B1xzJuTuAf8sYWRgEfsxRHf9vh2h9EKnSNJi3rnQSTvYdHHZq1Nu3KsLHL6itNwXY",
  "key15": "57JncAkDUKmRAWpo2HU6nU8M32pCkJ6zTNjygwhzLLigM9KqosuF97XHtdMdTdZ6yhjsMGnfaHMDfK67T6HG1kn",
  "key16": "5iPYNBPJQ7DnQ6Z2XGSFVd8AEAcsgdYwJ9Cr1phgyNkNYaDtqpX26vYCtuLx16kuBUJnt9jCYXg5EoBxKN9qx8m5",
  "key17": "53QDDHSjLe5LAas36RetS8y2dc4G2wQa4fMs4ceL8Ws7aiCmrkzaX8JqRHAXpW8NjcaYETd6EY6QpQYy5x9A1vLH",
  "key18": "QCP6Sdpq8hW3QQChbnUunz49nUB5phxKVmqjbWuQPHfqZ1N91mvfZY2rzJ2X5PiSH1KpQbEPPagm17bNzVUQstW",
  "key19": "3j4M41t7nxmbaVtCCyMHGaD7KgSroEnifjLFM6s3EPVE31wybzPkhfGdwGRgSKm6hpZfADj92WM56b7jB9fRQysa",
  "key20": "5i7fVSKL5avLdiJptVSLmdNo3j9UE988yZHwb38jCq2Hr9DGFv9Ed6xFeh5nPwDh4qnCtxMPDUwLtZH29PxqkHE9",
  "key21": "4ZhAkx79qPmkBBEg9SepbhGAGnzwvwqP9UQwd8xZqjZMk35DX9LX6443CBpKF3CniSjgqxtzHUHBDwVL7aAGeBLe",
  "key22": "38fTYuMM6Qud3e3rLNa4N1iV4JNmqSqk87XL11HwHAqxkeRQiBQdEgJjoPCK2wXK5JERsL4RZSmS3K6Z6hnHm3zX",
  "key23": "2DC6xEUoFfyZeHJX5SsbTMLxcqj4SFao9p7dozgoEiTmKStPwqknJx7H1tbxC4sK6AqfyEkoSxYRFhYHcCXvf58N",
  "key24": "5Vvwq39KACtu5aBWx4TGninFnw3LQRP2vFAC4XmP6eY2cnceayLnf3xYAeuZjieZJeUQbt3kumahah56CwY8pHDM",
  "key25": "3jHLaxHw8o2HXu5BiFgvorrdNZvZc6ZJUMeWvvVxzBoBmckQPCbehMnmkemgs3Fdt7xufEZeo88KouaQmQYpURTD",
  "key26": "2RUftoUJi8N16mB7cumzXNDCoAXzt7YiQ2CYPp4PLsiBivQi8xPC1LM8Xb9FF3JMUBtxqvVSjJMfNR2C9F87vbPR",
  "key27": "3pHh7mRzjVduwdRhVdrVpcJMoKzmTpJhnwCk3Ee63wMHqqst2uyYfayxMkXNtgiSBJtoyFj1iMQMDugChVL6NxZ7",
  "key28": "3LtWX1n7qkPQSBnLHrEMcaUZ979x4BjrJWRwaujKEWommZzRG5o5b5D4DEgjjZxhS2LpdgVphr7i8pyPSaspGexP",
  "key29": "5x34feb2GbzgCTrgC8dqn3Ub4fgzjemazgsGn4px6WgSahXGXguPHeUx2hNfcfdvTxVAvBxjZwhupAY5SYeRsM9n",
  "key30": "4ic35nX1HbQjeFFzsDRHZ8xJEPaYPiGKL3RjpLKj4efvyxAQVeCfXLZ5QoUmaxu1RqMQMctz1HV9YCx2BjXiB3Ym",
  "key31": "z6Q3gFG2jXP942wzEQ452h2nnbYELLkPL7gv2RaNMV67yrzcYq5iFsVDXHKa1iQiTZuQvwz8jHM8E6mixL6jBQS",
  "key32": "66o4AoqaH2XvK1k5WR7tTbf9QiDVxgWSt6jbEQBBu4Xsx8YgEoVCT3ifxKmbSGa4y7dvik3zxQ6QSwBi9TA3kky4",
  "key33": "4YtKB2BezigDVY5HTzANZnBNhTfUkqAcCv9VadqNgFW1CCtBZhCtcDQPs4UjoxqMsYAAserC8gKxi1KtkdtdQBN1",
  "key34": "61wqXXkcro4tQ9kuD2CEdmZbecXczWWRohD9r58agbUHNhY49AhNNi86rgoLiEwbMWieQ37vDyA6Heof1tNvimc3",
  "key35": "GFoqNZV5TYEdPWJfr7erkdaMhyKtBbwVz1MR67wP4vNYZ4UEWiBHY86Kb7pqSxtkoZEdSjZj5VmCHkM98pgBWTR",
  "key36": "3cjwXup9WDRhNpQidQbvmPD6AFWRjwdjL1B32XhSPncvxW23fVxyUFeFo7EQZaFCVX6ZnuZX1vuwyjPbynZX7b6J",
  "key37": "SPReNqJ2iRbZ5gbFREy8gUTQ4YYCQ1NCht5XRrSciBoPRmrmvw1ZhoVsMd9kJyJUHNCyXdhucaRAn6WkAMiQz3e",
  "key38": "33vNtRNt8pbxSPLwWvGpEdPcXEpByAxaVNDuWxJqv4DgpXeef9i44mBahRweFbKt89gK9aSbZMRXGSxtCXda5Ak4",
  "key39": "4ZUheUv3F3qJYPHrVqYgFkFVT5oTmueH81ztmb3bGEWDs8v5wKDZnnpSMH99YPbNoi1fK5tbaNhSWAWstUV9sVqt",
  "key40": "HcfSJPKQHzESRkTijF4BLaoiesAdLSwPmDEFftKcTT4ouXdqr4wFSwnNoxhWRDj7oomDQgzFFb2f3b2qBXLTe9M",
  "key41": "3UmpCfMzMqvGTvqEroKQM33kfhXc2vnHfP3X7T3C1vvfx1umiiKtXRnBc9MQvn7FNZnFXb4b7DbH2GQtXZmiKxnv",
  "key42": "532yHHxnKosei9yXhPGknfP9ea2KSnBZtB7PvqTPJLjCjViKbhRFwrqB9rJfkBJQurYxc56zNFQNSTimd7o1BcS"
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
