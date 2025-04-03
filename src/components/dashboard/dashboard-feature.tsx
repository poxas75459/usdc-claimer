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
    "2Lr36Shn8GAUPkb1rdjfNSi8Q5dw5BuDEpSoUn2G87rboSzCbFELXSXQVq2uKzGTSz1WB4WPPMXfZDCHvYt3hfHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zz9zxaabXYgb4WNjZCGry6XFPvmWtja8SXom2KskkfGFsaWoWdh6ULgt7JqRTagJBqwFS1qPbd5KQMe2ATPGzbD",
  "key1": "3JFGWdJ9pLqRFre6ouQwtTLQJD4wWgUdjD2Se2sqtJ1SRSZmVW6aWH2GrezHr9hZ3s4JdDPhoNhYoEtvP1KwNDuS",
  "key2": "XzgpPGYDhXiQvTN2ANXtd3XjpF3RxuDEBxtnnXpHoYqLfBLWoUM4c3i7ZaDo7MufqbBDYBWFgA4se1U6TqWFqsU",
  "key3": "2ShEtCPKp8SEuUkQ3EZ4HwZPtsXgzfGmCVC4ScJ9zgJbzvixuz1v6yuQfH77qiNBw3vvJo9FqwURKWzzvLMXB5sL",
  "key4": "ujrXNynDkMKp7JVHpBWSYF99UPj5NeqjGzpVkGEG5ckdDUzgaUpuWQ9wL361gqpEi3x3X7iHZSjnPwCbtapeayf",
  "key5": "2h4VfcairBYDftfbPsoBWXvy6tFKUQYn177qDseeebemh7YhyKpYxLV9zdJXVwCELFaiGa8vb7a1ykZE4QJ6HdaS",
  "key6": "3w77eCai3roVwQk1MxREctjHRYeKtSG44iKDCBV4remv3eDFa9GqtwfK4K6pFijSf8Hy9oMUEuWv7MZUadNbsMyN",
  "key7": "fLYoRNw2wSaMsFLRHLTguhpqVp64YLnzv4TGKBZXTm3sfw47tFexzSqkttptq7JK8QU4BZVB2SKUkmiZFTgLz61",
  "key8": "vbntCqDUbH4xkbZuM9ZwUKEW4GMksQB2aet3RtHagKCkw1ySyRXoWEUZa2j4ZRzSX5mRZGC9uRJF4QCUBM6oEzu",
  "key9": "4bhPbXjcuSVCqPssNVhstYXBaVcBj1gsXnVXVR9Hik2NCpp3FJyHJJJTY4ZyLYA8Zx97YDrur4J7zm9o3T9ag4qQ",
  "key10": "55pHNv2bhyKTMNgeWCo6uqNN6hNMp4NkA1qw645RkVEydsZ3WpjNU1Jek1ppHzUc4c2RGjhmKGSgts1dBkCuoDkM",
  "key11": "4fFyFv4Rtc31s8qeJm3g3Hjg7RCrDZcC2ZArwcDGHPMTMTNpHW9UWKw4ies1zgvKsDNTJEv2NSZGgigFVY4uqCD5",
  "key12": "5W6PqMW4fcSBEQ2t7gfwPP96YYtw8FxxNqLYqBEgxXoJTdFXtc3tqmyRnUxY8uSHKzJ8PsijWruZAbPWMRyxgAWb",
  "key13": "2ZwiFbW1SEWCGmsZwxUq2kWbRdi9SoBSmqCwGB6evaQgromFEMAoYpaMT9i4ppdS4UeJdcxijBDRykcbsjmo8mdz",
  "key14": "27NNrjqREekadgTTZk8nVKHMaqufEKZVYDQWF99499XibSi5eSmpZeWAWvR7dgkbSf9htyKxafvzdUsLbqx8iSpB",
  "key15": "5BqLodH6SCEhTaYvRoNTM4MBTii9gXU1qjPodXsWWWARRmhpoKtCtUZEbdyNDFABHkwcuZpXJgxrjqqAitm33bze",
  "key16": "5EkYEztSLLfUKdyFRWV7ovggWJBpbmL7FKAhGEeQMBop5MWACtBznxpNTmzc4RSQakF4b4n5ooDQ249iBuJq7pFS",
  "key17": "PNqWszuNAxAy1c4S8AfZ4ZB1FVDJUiUqXmPzU3s6RK1uRFgBMdG1qbuagdVkfgoay2ZPgSCXVmvMJN8oouPvYY5",
  "key18": "5tLjU9NfGRLWQqUvAAq52J5FMrRXW9437oGjCYnRoaery2e2W1ZrsPvBmz5wuJPhZ2SUgtDfZNTUHPivBQeVV5G6",
  "key19": "5ppoCbLaQ3EYM8iBC1fFLHcviRpwK8uVDsWXVcUtx8qufGpcbr1qVVj2vwEB3FoX1LHfTeRtf1mxUJ75Vm2on4K",
  "key20": "v8TCjBU86DiXWAoKHjJpHL3YCsno4EsFtLYZvoVWTfGFzth4jrmpJsRos9RASTa3qD6xgJa35ApbKiqbnbFANEE",
  "key21": "3THbsoEn5nQQnw6cRJG9Kv4RykcKsoSEa8wPLCdPBZj5mzLZoU95zBzQCqPcyThcmqxS363Ss4hadVUVi5RbFzha",
  "key22": "3XcrwwUknb3CCyiLPTq5wUSacq1XtgmfYf1Eg8X4hdsom3ZXMMLZ8QySkzfjZVPKTXtZK8sTCp9sy1WYFXcVfZBv",
  "key23": "YikFNdLJrKefUtaZi3CBqV8qgpQzu6KCyfZdEWSuWM62a5LJYyGpqGZRQVAcwqP7E8mXLmkcYuUVNVd1snQT5JT",
  "key24": "5KT8NdpFCGMSJEQ4Y2KNN1mJ645pFQna1kLuWDqbTDVPgcdqUcCGzYbhF9C8aUHWmXxEyj2JV9WrP8WPGKn1Tm5Q",
  "key25": "36kTxVTB8ijV9AvoZZ3f3xae1SAdjuoPz5S4XWcmB1rGDpJD6et2V6wHS7dK1ShLaAHZnrNf7WPDALqMEpYJ46ci",
  "key26": "VYb97QpHouoUmadV6RyYFjEpAbkfxciC9dwE3cj5TFKc4j81BoZChJhYFbz8qmiTMRG3gXZ6wEya7KaSqA7wD6s",
  "key27": "et3g3JsM5YVMGZEDQ3KrDJ8LeadzgEYWCkMNWm2sx7YoowVoPpkCjPdnRgJB66mdVWm5T3SBFfVx5PD2FpMDsPy",
  "key28": "4aDNy5aNyVe8Eo4MbfoYvMtaktKaPCgSpTEM4g7ibwzv7VCwDPVVECB92DSSGvVT9MHnuVYPbef3DB2MY5WHJ72e",
  "key29": "5RrCXub3Mv78wtL9ScKMGKAdKbD8U417NzqUuogF8jeUeK45eMuUjg2ZcxiqNhRCkByZLDBgjNSy5NeoXnTLLd15",
  "key30": "53jaVfGq4ZuRii5CaQiJ4Sy7rwSTdJyUvVrkYi3R9nnrgUncUFWtUurbFbvkBwWb7h3RDYG5eRUuozinAexSz2Kn",
  "key31": "62byeHjYP4PAVBCLmncmh8Syvhut1tUqDSxf4enbGMxeGajv9ikZ2ScgN6Ct9KPmNYwKGcRBTqbKAi1po1UnfTxs",
  "key32": "RnHTn8Mp4z1bms61FnHZR1S91PqYq7y1WBfyRdoQ4k458Fk45okyb79bUF7Veit92dDqgVZhs7G1A34ZZhd1X61",
  "key33": "589KGDEaKh3S6oqpyyRX6AbysxKPZatVyYzicCtB4SeVaYhMp3Na9WkHMoYxrxVShgj9rke3sacmA1frgK7Di9CW",
  "key34": "2NEvKZSAzwLf47YCgsiVBMX3te6KjpDd5tsWHubjZ22sBsmseHoEtpETWc3E8NUbredkCKogUCa1sjjGYzsm1bbq",
  "key35": "eWNx5LDw6B8hMCEVSGwPRAkcTew3f6c5uumrZRNvTwM5Qe2cS6kQGUXAfDoJqiz54RaQ2jJGDXwEx5vyjiBEMNs",
  "key36": "XFVeieg4NJ4cvoEzpi4cfZTgJPN5WvptTiHBKqdF3yFeuK9z9s9nbXVoKzMPZUf6g6sm33QLX7uydFJbBh8UniL",
  "key37": "5KkTwEmEVSGuF7a2kihEW8VrV34eFCLKhUcekTzHpS2eXBN5XjBeSXtUDq2TaGjoqbvWjWpkNxj4q2UH5hJAw11U",
  "key38": "4XgjWYXtNuyTXq2WUfWAi4ZPpDo568ySNPZ99tb53mgXr5Bq6wpofYmBkRy1rLYeert2eLy21Prpkdku4w6vBdTG",
  "key39": "2q8FHJFupZNceawtVXzXvK7V1cJcuLVefWksFDbsYesnNK7bh9UgktCvgVnjspyjNrCtfEFigwSh4P2yeDEUfPc1",
  "key40": "61wb7GRUdiqouQqt4B425AC3p3svhvKR6SNVRJULfcboRgLXsu1zEHHnKkPNUNW4dnwWicHxQouEnhyjGR3Epo5S",
  "key41": "NyBv8GqdHzvgKmY7qCQWSLXfxy46sGHQgssBzxqTHU9mARgGWzBkZ636RWfNa3mQQx3oTtTtcBec8xBar1Hy1eJ",
  "key42": "5GJfXabocmGFcojj2n7K5pEvCkBkm6AxsvgPafpNqD9Qf8c1a649ksNuLDXucusTijfc4zTctpUb5cexu2TkgA7C",
  "key43": "3AFfmsqeKtEVW7FBZR5BQRqXUkNG7K8K3EHYDxNHDbqvLrBrTx8gYENnSMWrZkZmjZebLC4ahe5s9fA5sJmHfkQk"
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
