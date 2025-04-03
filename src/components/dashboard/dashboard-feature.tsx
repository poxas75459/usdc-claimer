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
    "kURteFLGTXkNmEaQ8xDxGnCTw5H3y7Xm9BSeLs8u6zFDcHeNFZehxiwfGrQt9GvQ3hAdhfpZCaiyXeBVTq5rBaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48HwFx9fuCnTVcRpyqoASgm43Ercz8uXQUTkoJkKBs5ZTE8ZyEHNdW5FdbQwKXkos8Hy2ve2eEZELuDeQVP8F3to",
  "key1": "4UDUjvcrUstHph73sg56iFJF9aAJ7ADJHDNwCRE7L55gV1h9XkrazCHKcZYbYSdM29Bh7RUG4nEtTy2CedWMpDFf",
  "key2": "5B4yQBsAcu8dhq8YnZzKzCHNLv6sPa7pbUWhzkH74BSQTvUT3TAcH9edqS8LDiDJeyHVqjdsxWrVKwqKdp1ZYfna",
  "key3": "3xoCJXyiguqj6y9PDFCnJ8B7Xx1Y6YCCeU3F3kG6iqSf86vCQtBnoMXVAmJj9iQHXEbyw4ko5rgJQK9g3R7257nE",
  "key4": "woKdGxQq6vzuaERmxxdzgFjMp9U4RHVCptHohMMZgK9ZLpKE2KT6LVdcnFGAvsCMywVck6bQoqRR3n2FMXQQ3Qb",
  "key5": "4fUbTrf26pSgr1gu3uFECVH6Bz132UNRB716PQPfeFMu45p6GDTs7bjiCcYyET4kVQ2wZ1NtdB3k1nTQbRLB2xDs",
  "key6": "gwa7JS29guPWAEjDMpM7JG5tKexmpkZsrmYG866KAuN5aeMUJBgWsbS6fzcSqXpzE6Xub1LVAvLgb65uAa1QtvJ",
  "key7": "2dy5hHxaNb5MaBjZHFik7RJFzygbvUZxC44fJWq3NijMDUMwacR3SYBVMVEhovJZ3wQDLD9sn7q2NefAx7cSkpxe",
  "key8": "2RzvbQj3BG58taJYejwY9jjo3h5HcEjdj33YYQipj4f1H2WUcVf5rh5kDSF4A7d1mDzmmKsd91L45YyKWegXkmCG",
  "key9": "5xBjcn3hQnoKRk4zSH7NtHzERS8Vy53V4mTRmj6z3mQiRDqA3EBszQTfkjhQdNwaEkNpKKM6uB5oa7dYhnh9L5gp",
  "key10": "515ozsaprZPezUKAkrPf6D55HjB8TGkaWWphaA6nsw3C4VNBqsznf9txMWqPUPVoZF9U8YSt4JJErvEUpfc4ijZT",
  "key11": "57nGQsXXK1DE2XmkTVNSyBibKNajpSP1F9ZAnj2xXpLtsjvCyNUE122TheWrc68i5nqj9mL9TsNJMgAStBg5XEs8",
  "key12": "39yadGC9cne7PZCCpsqJQ8AGdjpHYQMz3Jp5918eAzNzcKJKfRK1iVqM8ZtDrBS1qZcNETABZE7cFrm7axT4b6NP",
  "key13": "42dTf26EiHc98XPvMMTKMZHGAaQ7LazkQdjzYrHnjttHKkk8zAiw6ov2cW9r33AvEyLJVeCDCgdEiu5w4kUdKg5p",
  "key14": "K2UzzTWgCMnS8YRxamzDZ2UQGYWoLtbR8EqSqLP7nZ9arM1AQUcRhp18TbyDHoGESoQoc5AkyBnVxSLGpaS4qct",
  "key15": "66iKKzBX5SVBhiG47pRDeqzvwX6rAe1FtAmiHMw3cQhbzpSAMLinAHe5QtxV5zF1iEzj5Ao5f3fdZocCac18bSod",
  "key16": "41dkoWA1fsCjyYnsycy3WcQomjsbmnqn6U6ULKZb6rPpkPmsvHDnrnb3Pn5ph8b4sjVo6uhP8TiDTqi7fgvqNJXj",
  "key17": "4i5ptim4m8QLHeuTeYheDXRYP8r6euFvzpTxSwVmdpDCenUTaFckUoeGgBgenhxuJvoEF2QBZCFQcTQ61ENik4GE",
  "key18": "2LwQcbEgv717cSoeSgXGsTFjBKcQZfezyW9Z1cJ2aAeS7FTawVYw3HcWP4rF4w2VnWfgXc3bbUWgM6o4MwPpRCJU",
  "key19": "3EPz5SP89GscjsqdbGiStGPwgxscj3DMz9FXWomCSZPhh5jkC5HpAUDro6PTHZr8PebdTrZafEXqbSwKo7B21fSP",
  "key20": "4vDLQq7D8s4R8XZ1C4hyKWhTYyiJu1khVRUeG8vXoax47BvGtVgKBABnojJWH5bE4Uzq3fC8eNDj7b8HsJ9umT9P",
  "key21": "3xgnpxirMH8t9Qiif8Hz1evSUjnMSKTyk1nALB9JznwVV5eJvMFTJyCY9X5186KuR95LRpmiwrt2Eq3fzKBrK2FQ",
  "key22": "2jRLuGQqct41WHZVrDxJv3uC2fptX5KZ2QazQmZxzwXJh2W2M4NiRMJNZQs1gfu43NuDL5o86Cocr13ZK6rrtwRL",
  "key23": "46TS3A4f5z1qZjaZtvh8nPJaR3psF4BWbVkJdHGxGHuDKvFHnaeAeit9XihXvy3FbbVoSSLE6UxSb2fjW9smHjNu",
  "key24": "3XiaoYPhhc71JCXkiGBpL61MFFR2zi7NNMkj96j6Yyn9jTQjxxSoNNH4pwfWRdnNcYbAGNfcqUa7ompS7b3TukC5",
  "key25": "bJX2ngoHf3buYG7QFnC29qWKiHpXJEmLm6LCRgTkoUmWYYxKQgv3uhgAR218Pjzycc9kuCaDYZwEQn2PxK7rDU3",
  "key26": "2KXbacieEfcVsj1deZmgXsf4hDhUHsfq2ueFMRg2crhuqr8xV3ewfpimDuiVCLUhXHGdehnnNhD359NhWzZG2H2C",
  "key27": "4Wd52PDSngEGxUmZTtLPqY5AQV1fE72DxjSnSw8D52ekgWRJTZUnLNqekmMju547EnNFm5L7wkaAa2yjBYa8d5eM",
  "key28": "3mnhFqme83C9wpt5SrcciTzP15ovbfRGAimaKfYYRmoPFM85ebXdc2jAt1NeKqZgXXrrPmvSGkh2RPwCGP934oqL",
  "key29": "4mgN9f5dZ5idGhgGD1RqxT346EPx5cxae1SoUstwDLcigTCZbPtT3zUBsgqjwnffWAvREtExFYWhsRXDaGtuwC3D",
  "key30": "n2PN9nkLLLPR6gvsi7yFdtE7UhSxBHTU6WTCg9Y8vUAyWSjFZ8dQrTzotqY8zJS7VwBseexRHGFeeLVrEKgB7ug",
  "key31": "4XYPg9ne5RREDoWPc9NDdNdrMv1UxZYWqiw8sCd8BzbqcNM8SFVPBuKWmeAFK1nJCkpJg9Uu7rT7SMTvFmKAkfHv"
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
