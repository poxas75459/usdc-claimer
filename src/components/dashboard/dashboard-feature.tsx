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
    "4Emz2JgXMrWpwgbAiv5kzTKZLyeyEokPyb3FkTPuFSwPTQHoDBFXAzJwJssT11E1gr39u7PVtQjkxME724HxEFyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D7GfVRgRGv2mZFrTDrGnoSBSSR1k1rHGQW8FXKffjh24pzeJyi1nLHNL3mqBZi2fTwxG4yCyEGHNF64QFNbk2Ck",
  "key1": "3nKibhfkxqbH1vCTL7dV45or4kAq8RdFnpSDa9anCnH3j2wadJkkEUgtRenJ4afVvNTWaS9ue2QPzboy7psHoy7C",
  "key2": "3c3uhz4fMt79fJeMnnt7o6FfNaX5F9B51KKxvodS8wd3uPk2Rk5FQSkjubo6Q6xiDCMgaNygqLU1ESWnTBuEGYx7",
  "key3": "5ktA5w6RdtqpxSkpAqTuPYhKu5o32pwN6sp3AqmH78YZ3YrEz7MEuKnEqH9na39stZB45Qyx2a6q2YpuUqY3wSmx",
  "key4": "2CRiafhmjkPdGuTcjc6ghf95E5fPsTCU2JdAbZohtp5QXr6kqdpS4N5bMDveaoJX1BVEvevaRhQ8pgp3qwvuXwxB",
  "key5": "K6GhhxjYx1CdogFL5UNypZiUKxFXnHJD19TajuaXxDm2E129wxUPSfwRoHQMyUbR1NJsd4RYSMpn1VqVArjxrrc",
  "key6": "5R7AThX7aThZpZUiDJWr9t4RLALupggktTFphWB7ko8BUayb1Q64MAZvHemYxr5RPqN8w8oXNM5pVvQrbgxR6NSH",
  "key7": "1p9u33eXdwkwZomhvhhVVHQqfPWcKCZPNbu9U7GZx3Yp2KQhLCF9nVkyPgt3uvsW28EZqyd9xPWjN6DsxvCcx3m",
  "key8": "mnYnHj8GhD77tRKMWsRkqEhF2D99zaeRVgz8orLiPQ4EenTKJ6WeFupiVoHD2gRA157DEr9fWsSjWEFkaVrMPxC",
  "key9": "4Qu5uTn78vC5owpsAfVVMRR4kBukVJdFnqdWk1TkUZt3HJ8wdid2vz6gKCBsSPZ77jzwDMJjP4L9YWsgSJfhCrcn",
  "key10": "4f35S1r668GSKXrXKstwRhH4TRAntDobPL5K5ryq9Wpg8f5vyppW4669mPTFGViupF44fyki2bkAzKfcud6hLySj",
  "key11": "5BZtafhkFZUuWqozU5TZkGVR49t5Rz3qzFQt68xQkhHZVSXvRqQ72oPeyqFVQ8ssNgEcV5DLM6vVE5smCTDj8sRs",
  "key12": "2Kb46tp9L7LkvtYjJALPBy4dK5rTpwFMhY9W3mTFwbYnHaA49naYCV6ndoZyJB8LHomWhzwJqwWzgENFUVQss9x7",
  "key13": "57oidLia71eHSWx5EKQYdhR1e3VbiSm9Fm8s7GouSCfCsgwvxm9HGFPfu4U5s8pKNeqj3mYzEWCt18XU7CiBQHi1",
  "key14": "4BJY9ZpuUstdQeufDEoWedwnxFKtRg7KqjfsqvzS8PDbeVWsprxmDtvPjwPezTz2NjrT4H8EDZrxWDdDFjXUFFFi",
  "key15": "2RxhdAZe3NPt7huB81L4tXGAPMT4jLq3UpGCJkjouSV9h8HbsH4b8Am31vtNUvTg3tkmpcfozydEKhDfjL2m3GCo",
  "key16": "j9tCuvS5jgvpghXomYw5XJ5yY1ySL29GmY4Vg6Aed6LUooN6RJ51M5ojLptyN2d8uMQpWfZVNQT7aKBnaZqA6ww",
  "key17": "4hN2AqDyugcUVK7i1XKH5re4kmfkdKsL6AUXj1b34NnJky2xFYsFYcGdhwUYgEEeeYsbMxEZ5ktPiXCCJrawii86",
  "key18": "2F3QJxDsfSBSpdPe1BvurohujunvNFvQM8zwTT26NLbHfPaXG7pJxEErCDYW9UG1yf5eveVZJngDBVsxF3CWXNBP",
  "key19": "62NJqjqq5gNdTWF4GTSLxjdH6fm8JCnkjbCvEwFjHm8zcXrDHAf1JtJgMgWZETumdtT2DU9wptFFi3gp9VaQvvpN",
  "key20": "63LDhbo9G7S29Rm4Yz82dTpgqDfd88zghe5ddMABQvtTSJocoHJ82HqrmKVu5Nzr5mjcHGcXrmD6HoU3N86vgQpB",
  "key21": "5Q9yfjf7HvezkLRT3VzqsD9eNEEfJjbuJrF31jcDpQQqSRuAFTkLCAxAHSFDCx6XD1NndtY4j9JQaUkewwpf8idH",
  "key22": "5kY9SHDMn8vXrJdHBUKCDW4kHDeefLqbSoedH7pTv8nNpMSca8mJW7JasSyc4gAaW3UJr9G1aMoEtjBDCTa8Dysj",
  "key23": "9BLFqJaHBoDQEHThKSuW8n9tuwGdVgxeVXPw8Z7whpRi2evV4V6xkGonF53AZFdCJZRtpxoPQfEtUEm5pTagBsk",
  "key24": "3ve2cYrh3Xxk1pZdzbhpWSYyzxEZr7PgWHB89JSfcbCSkCyUv5jQqZHWxJ3smeXNxBp5eJkrPcmhZCdshpeABss8",
  "key25": "2LLNKviE2v6focV44z9aNXTQ84SFqLJhbEHybr3rtM14RDZdym6Qmj391aLa2SeD2QBte5sEhZ8s2qFr3WnNDTjF",
  "key26": "GNferLgRMSGwcJ1gmobWuJMzi1Pas7YcH9qWDPqHdiHqF26puALoD6Eqk2DjMxBAUSft4K54kzzGieiHv18KvBw",
  "key27": "122WLKuHPMKq9p6jFQUr9r7opuSTiuZcKxH7KuNey58itiupmcV5CVtV8p5vQwVXauX41cLbH73E2UoqZAvHA89j",
  "key28": "FRSk8SHuHoc9AM1JnC6qsQbhH1EJsju9nuerrnSva6SxKishxziDpExgopiXBf5dMF1LU6xYRtHzJDgPAaWz3rU",
  "key29": "3HN93gCgbA5EqjZAfxfBn4HbYibq94TuHFG2CjodLdtKoXyu2RCCVhEqhJNvkKYeYcxRmmonYRR9BYxRtkt22oVj",
  "key30": "x3o7CGQKfALufarYVUZHoY8hoR1WU9ZUjWoT3DCvTheGeJpJm4Jq8EkZhboQUU6CrHUGf7STvF5sd2efkhznWpi",
  "key31": "4U9m7Jhx4et85kpzdThcr7Eu7QnqKKrruXvNLqBKq3WULhD4hR7dsviVh3QbvvDP8JMQuQXKp9sqL33KH1h9wAs9",
  "key32": "4LxB818hauPmAbesH3F2f9TwQAQJpztk6raWUwccBNVKfF1qhhaEj6fMmvyR6XVizuoDrcRDAa4vPhZBURY4QyRF",
  "key33": "4wfVm13ZqSjSoXtZVaPkPrAH5j3dqDeyDexNDLct6dZ6wF3Ev2LHNX8pnn9KRjATMwQkxoHA4b6KVXSe1PK7grmM",
  "key34": "4FmYmsj3JVGGUnqNAyFMvm3d9GPgo6SG2KV5U6f7oYsS5329hYvNA5URfST1S9YFPveYs2t3EdWBbHhFT4FrSjmd",
  "key35": "Gq3LPakR43CjD9SaBNd3kFCm71dpA9txHhF33XKNWX25uyjrr9uvxdnJ2n6g6mQJrzb7Fz6iL1JrjuHy1B8Hi1Q",
  "key36": "5kpxwNwzUrLtHAyTMcRuWRN1CgiH1XavsRJ574v2bCBXvYwWbaL8qQNHanaU3dZb1xBQWXPBA91dHF5nX8gpXcqc",
  "key37": "5VPZBmJAuwsRKnd3pc4WeLzx99pCtFrMutqwawSKUFJcCJCHevvGmX89C8E2YLBMBMHf9GavnTeBgMD7TjDoUPSb"
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
