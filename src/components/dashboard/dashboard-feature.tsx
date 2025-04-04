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
    "5hnYy9yh3vEs5y2AifVGcevjbiMTZeJS2JhhW9RXJG7wev91kCLUzfdb1FB6beDbYipqum2Ry3dR2kWDKUyXZ8tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fRR1S7swpT4qJU1MPZSD3TfY7k8Br8pUicFt6jfRQ91vjcGybpod5wpL9iv5Z67rEPfEFSdn5JPzusMj9Ft9npn",
  "key1": "3n5cK1RM3jDs9Hgd1ziQ5RJNwnsqBLJ2vAvVdBu9utwv8cQfiqNVMmHbGULWgYftp2xjD5NY3Egam5MrA1oEQzDR",
  "key2": "2YdHVrJCBAuw5DDtuVcr8NwDbWuHWmHh8rmEw4qPzkvy4RZJh3KEd2Y6edGNTz1CBzCsn2BR2678LLUCGGGb27TV",
  "key3": "5aEMbRR7aT5YVXJVr86bGHPvEpbMLxpcNm1FGtEj5WEErEuHA3BxhTEzqDx9F5MS5A6NzvLC6DEK3WHubQgqxeQo",
  "key4": "2LrvEi3m8h4k2fvNA2SahmroR8e6VUCq35fSFngFw6EfKyWA62D8k4o31Qvu29GYVxrkvdT8B62chzZ7eF6MTQTB",
  "key5": "3S1EvUoSKS79NpP7CGqmYMqnK3dPZtN3s9GAJRbPpoqKJ4nztzefBinZaeUZbtZUYPq9czBpW5m1gfm4e3gTQLec",
  "key6": "48PgmYKZQewxssaPzS6PH16qUcZ8yp4o1nnoZAABeFu9twL4cjfoLrJ86LpP1L6nchBsEais5F4knQWQ6V86sMnZ",
  "key7": "3LxFudw4AgcEAbM6TqRx8EmQ8ezwedZFActAVYTCzJ55mbXwceZKNEUeJp4Z2NKi5L8fvtGcJexAhhdfHQmcE1s",
  "key8": "2pJaJbnBYu9wA1nESt2xSTtxgY9UpyVKT1cVVwbLeCPUWeHEfiftQkBXYnZ6v98JXvcqUz3JzRnF7SF2d5YJ4sXA",
  "key9": "29f7wcENWK9pkSEoTBD9BQPHu5PZ5U6ZoGBsNo5ab6qmTjZuX4Jo9HodUuLkzFGy2msg3cACGt6VJVH2JyttdLxP",
  "key10": "3iho2rrfiNR8tiBjZXayZMdfp1QSVHPaUscZZ1Za86qq8kMBsq1Gm8HrW3J31X45ZKAUfaKVk8oz1uCCurXN4VJH",
  "key11": "4wsDi8MkpfY3dr7iY6BEE7G1PBkcM6WnAyrynGXzWcauVgbkfhVguXtswgdWtv2kWDu9fiPdz64JiqcQjdatcE6x",
  "key12": "8qzE8bkC1jmjBHKs3AzgSnGnqmjEf7oRgXqEzztCYhtzr5kDz7qGuiUVhBpK1c9jsW4Mf7KDioG498UkwTw1YqG",
  "key13": "5Snut3bWo3h322u6VF2Q5mTKzxB8Z8ypCrUyuM1anRCWxfNdormNgWJut1jZX1BdBNQ1hNAa3coz1jpyjiB6zXY5",
  "key14": "RAQn3b5doiNAh9ZSzDrkPk2t5yqGg24pF1htovFUw8Rsw8uJzXSEymHHgPUhCUDkEKBBs9ZhBZ1GveC7gsjtgR6",
  "key15": "2L9kUGp44fMmDsd4rCsrkTnRnmiBJJRVGRFwZKM7DKgigqe3SkfLzjotj6hFbUcpU35dNmcbfVawCZ342PqytWDx",
  "key16": "3NEgy6CpwaixyEBdVsZodxX5fwWcJoNQMK3CtNEeeSys4cTSHTNmCbM2H9rXbSXVSbvynXMMHT54MTL3aioscCBd",
  "key17": "55w4bpgFKaWdvnaqFf9ZHdNQPnsAD5jHqb17mZ7v82NcTbLtwp33upFYpdCriHNVreCw4pG2JW4ym2k2hxJjiXJG",
  "key18": "66SEPyQTRWp27WSgq9UvKTeuqK8rmayjG4kja2FxQbY3FNSyBte8HCAkjdFd2cykZTqqoLG64uW5wnupPdprFsAV",
  "key19": "4D2UJQYzNS58dmiMbXKWSczBLj5r66NiKgq57CjCU44EjZtbSiq3C6FnxZvLNAQvWemsrPJ8MbDfxfTvLZd7YGiZ",
  "key20": "4VDoNjmykJbRJBV7Fk4bEDhpmbq9phZsvhq5Tf8yb8tsXSjQbKSYVCY8HRq1xS7Z1XGpXpV8pQy3oKjwHMaWKvX8",
  "key21": "4CFSAXYmAXU49YDgGA65QsPGEQrX7gxQCvCEakYyj5Xxa9QquPRD7GwyRiFq4UVaa7SPt1XDHwMDCJNGBHTi58yB",
  "key22": "2ZNzKuSsFk4G2Q7MzPhLPLB8dT524cDq3p6WVAosWNCvBUBMnTHEEWZoH232xgHgKkrtUS3Fcf3aQt7xAV5P9EuH",
  "key23": "2HPatuEPZAwn3YMN6jXo6LxHo5LRtVu24LaHd5KYZu69NXg6tnD7b1DbDsfT3Yzs2kJBVxQ9pfEf2REFBZ1Coy78",
  "key24": "4RZoSS8UqmUEquF5PV3JebaJwtvXJH72FNQ8CxBCj6KUYC4Vn8Q4fdJhCjSXMdVbLY4dHKqRJbfHb4nTxqNFyL3n",
  "key25": "5Xq6bpK9bHGVMzBEBLUpEjaGz74Nscg7xLFYhrKrZaHrcXq6kaAeGLNkcyXrVjPjxVbtTg7gbAPbBySgwmNh2mCF",
  "key26": "hzENZzqm1RMfBr3BqnFJkVcreU7RFhh9SrYWVxh3gCpTwmonLzNMv6cEYeKbXvNvgQeLu5B3NUtXgjNQ4NZLMvS",
  "key27": "3KUBmSYF5NXsS2NXrFuxsgJ4PG4htoWzUPocpQPFC2J3pQxBtUZZaGVozmxbGEKMtkf7dbKeYjtcNniGC3XkRGL5",
  "key28": "8Sm5VBvjs877dEJQGhSmo49R4y32BNDTzRPWMjoxsEhqjdCyJ3xU44SLiwMHRsvWNqvr3nyCDNaKwdoDTvyS9jp",
  "key29": "3rNLomN9K8EqcC44YcXSnGPphyphZvR5We2JX9NcnvLFHHS3kMF1wKbigDcpRXU2hAUD8zL8xqkTPWqci1HYd2dW",
  "key30": "3CTE6WWbtepgMf2BE23E7tz2babn5cLnSYuuQHKZhut1YgwTyFYd3hpZrfdyufLWwTBzo7VtsnRX1E7CkanDhKMQ",
  "key31": "5iFqn9LKFiQfwsKPS5bSqYL2L9ZtRGkTwcsZFn383kFD82Ch89jn66wTmephJtT9pkNXNWXDdwPEJ3zc3a5iWLug"
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
