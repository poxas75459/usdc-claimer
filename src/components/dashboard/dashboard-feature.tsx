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
    "2tvmoMPHH9nDzD8h9jxzpm3LJmzdFZFQbeUSTtGsf6EHWTqwVRRqkJqGot3tUbmBPqqC394bkVZnLU9uRjXj1gfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkCsEuseadknxhfyQy4mFTS84JoY9dGTPMEQVFqX6voLASyko3ENr2Qe811G3FgttDR4dWGTPYEvfxkQTHPVghf",
  "key1": "3KNjd4txqpxSJm65BhuVLQ2qQSb6vhx7Du6gjymaDfymKgG3WYhXZijWmq6BFy9ZJzLjjqEzs28v15kwJKBxdJJH",
  "key2": "4f7P4uLuojrNaSvFdPqzi8mtspt4jaA6GzXGxnoEpqt8WbVCK5hkiQnwN2TZ8YDtCifwymvTCJTWu4UCGdTXx4xJ",
  "key3": "3kbVYgJjrRWdB7JHVFGd1drZovmRJ92np46ow54zFFAhvfVE2LozCw4yAJ8jTvjjzi2tpz6XA8MoBfvo61YvqjNS",
  "key4": "53R3EzuqnUroZciffJvp7i95enPJ5Jpe2XH2ocxnoMctBtVLMMEvFWXiEWWfuvdiXsvuHkP2XQisGyxHH1ZFuqHJ",
  "key5": "Eiyiupmfuxn6jmcFsqNMQsW8bJBi8qJZgq5tZFp1VSbChCXrtYGcd7TdB7Bq97HV1481nKo826FAmrRuW9GtHVy",
  "key6": "4HuK7P6dgmYtrxiEWAahw1HTDdCAmKyk46W5aQkmrEcFdyoT3jBEw7YKbnc9in3CWPSsBM8KXAq1u55nqauB5W3Q",
  "key7": "qCRBNfJcR1JZ2CUWjMBejCGcnPXatSHYj66S7t2ZL5tmMqjeMYTYVS9Dwi4qzZViS6b2vkuGBAxvC9aq6Mv2GZq",
  "key8": "AbYRfKvJLiRD49X7C1kEBdFxCPB7psPgoA9bqFdtxFDvtCe4XhQkbW2qz3oJ2jiGFNgFBXfEqE5fxMwysQyiUcz",
  "key9": "fQZtgRThZH9RQbqGTwV64zw5z7LgHrzSfJQwidqwonJyiaJfji55vp6tZCPyTUvacPMh6mF97kycsGrtK5T7LBa",
  "key10": "3NSFepr5fsGkYpxF44Gv28xfpLhrAxYpF7H24MdH5QDrEcBUALnVdrZsYZsrgFkzUcbe75ZYPfWhGicKrE7QTNKh",
  "key11": "2XVM6u5DpK4yrMgd2txYpsCiLhXQkeQpSamBdWoi4wPr52mjK8wU8JXUUgsCkhJTugVQiDE842JHRsgAjjQmLKmf",
  "key12": "2F7nU66uzorbjiRBy98L1WQqmXGYsSEMjomhNKb2NxMM5n2qJG3T4eqdSo2YhBnrbh3i9YtacojTKRnMELArB2YT",
  "key13": "4rzEFsU5vZamUdHajX8dNh5F4bGrV6VmcHVAETKLiWsKSG7mstFVJw7xWvSztNBWYq5i3h68DHK7LjFnsf4fymfi",
  "key14": "5HYQZVFgvKAtie2jecjCytp14vpGeAP1ZfySht4pbKsSg9gXdTzHZYv4GtTjfC33mYoe9Dk2hPzgimwFuTHfVPVM",
  "key15": "4C7AXjw6VUEn8zQogeBTn9DXxD3M8o57dzyCMNd8ouuJjmLSwN9mo85Gp5zUuQdhun72DB2UKYhwTJ7dgAZBT22p",
  "key16": "sRTHnbmVMXBb2N5LQHWzNtMcrnGCMhJ7cQ42exmuybSKZ7B4F37wLGczJuG8TzToCeCWVWUsgeNNgiAjAGcDxkc",
  "key17": "2Hp5FAHetMBQHD1oneduT3zQD6iPH99PB8bNy2e7iKLXTTLqXnRKt9zA56NJg2oNbFGhrBhbC5eDm7wPQmY3nmpE",
  "key18": "2doWRmGLLcu7dQozRpszqcLBrFVmxDxzTTR5WK1BHWUsmsGd9pzyR7ExPuiF31DrxGuwSm4vMwbd3Xh5JaHYTaJ9",
  "key19": "2C5P5r9cvgoCBCsBSxcUZqhmEbcbDQ68osMUsXq5y8QX9KHEdQ7RYhGSXwVm74kPaeWkr9W7mu14vwJp9EPq7nms",
  "key20": "5HRmNf4LancnPwTRbU51xdwwrG858CTeQC6TA7VdsXsmkBPR2dfofUD7k2c7PuXTrFMS3r8oavRFHUHQ5pQVpg4e",
  "key21": "2TXwkkBtPv5MLc55UQmudyS3LyxHDcyLZHHv2kecker8QsNVhEHUJQN13cgW9GBPnkMBSJj37a2LTfXkKPJ1FUXy",
  "key22": "2NKv4n6PfaPPaMTHjaCFA8XZps6CivkR8hGEwgRqiiywvHwzmpZhVjEPgYAxc94j1LHTYStn82Tdyb1ArYBaEAyA",
  "key23": "mTTGugByv8gyNCyAckKERzqCVvN2tL9tTotyTrjeAxkdGtYo9ksvkbYPXcjukJDWmR4LhjGhYqx9WEsSwAyfFY2",
  "key24": "57vUna2yXHTTDdWMrwG5UiWT4xuZCc9fqfYXres6BNNVCADpcr3mYRpGY9AKXyuyXRkLR97eqnxtaQY3DfEr8VGG",
  "key25": "2K6PC6xaQS727HPHnw5XfoUko7LV9kch3E1ADh71REoXvFDo7xpdvKyPnB8NG8fustRm8BPdm29ZkSjZ7VnmvFvR",
  "key26": "3JbGyra6FaSLpdZHV6pcx5tT2JHFipttBhEo5u5pdTpHUjentucEcPikZ92damyrwmi4HcoUfr5vpebDTG1iBa32",
  "key27": "4gfQ4hCKC4P4jKxqqd9rJXQ4EVXzqZnJENKXAUDnMxtCNJjPhV3e2k9WxFPZom6RxzrB4e7CLFVPY9HZvFHGHnp",
  "key28": "37qtbrPCR92rX4hf1rxVS31qJcqQLJuEExiJxD8LTpfgFw4CkDJYq1L2JZVd1ECVDMM5NivBe7rDMGZXt1LXVSPg",
  "key29": "4adR6cEocF66RknLpQcNHPXPwWbCBY5eWxCPkaezndHciuTc7WFT1Xc6J6Uhi8WwMWpg685jxUExmJyKpE69ArVY",
  "key30": "3rixWpQYi2ZWZTUVisnHp4PMGCY3aGL6e5XMfYo84YeQWpVLzSGgxZexCgmby9nLF466cHr9Vn8EchPXHGX5JPKQ",
  "key31": "5ivp1Xkwte4cENDj6q4TrW4oswEnVTf59L699xCzKAampDiqbMfgAkJCJifMQy8guoJubZYUqaMw5FhJzjx6eCod",
  "key32": "jfaDRZKtWQEoC45GR5cmzjyhPKA1pRUxKtTtHRbwGe33P4wmJpbmUhAMvxmkWQCcdpf9VkQvQdZvnHpYUUzc6JM",
  "key33": "31ghsKedbFqDjoBcs6Hh9RbhfFgoJ5ajpKwiCZ8gcTsQJzLGeBrBGWvPuv47HiTmBsTvUSk9j6AbuKe939FfYVcz",
  "key34": "4dgdXug1Y8GqHHqRAHwRwZhTSm1BG8DqVmakJocSwpaKD9GjUCkza6nJmnMKhV7D526ws5ysv8Pkr3EvvE75i87Y",
  "key35": "3HbaGhqJ4zMgtSKyUizqThzauGbaSfWmDPaZUsviFWZM8SxfhjKW6YA9QCNbUdNKZDaxwC1YKWNbLJLsVcd48kxg",
  "key36": "5FseUdFRASHsCcz2sk7oqrvG6n7PtgATcCndPcFs7TmEx9uyom27P95uHFuCh52JW2RdDCpsMYcZ23fXqsWgQiL4",
  "key37": "rpRtcMCtpmPzvUPAfG88astgQLmmx8Eevb4HNfm5doQpcRPxwngm1RS7YkZPF31kX9TR2CamsrB9fFVb7pTnDun",
  "key38": "216j2hHJK7F6tQ4hsirAb13xi6S4PYN6HzFzztBjoPjMkoo8pHE53ySXF9BsFFRirTrQfyQ7ankgJfvNBFwuHg77",
  "key39": "4CR4ZBnaEt6RgHHPxAqzow2JgRJKLBuzvPmBjg9zjYncjyyDTKPPZ6fdq9gpWMGyAxJ7xaMAJHZsDMdtvUJ5kju4",
  "key40": "2YMt5Fx7dbMiCDciwn6Y596Ve6vEi8yREZUpTsrZLHE1uyM6SMPoQ5nF8kyhz3bgHERXRJWdepxwtUx6sYFejYUP",
  "key41": "TLRA5SLzQEyoBhLAUSQ4GufWyJeeiGrKHeVxDu6BUAFdAk4Y2JYB1i3xga4dHHUK5Tm3enDwqfb7M41sC86edC7",
  "key42": "3Uqg61EHr1HNoA4Dhn2eiBJiqnaVj5escvWN369QHRufQfZQqTCpaUh2rSr7U7WTgDTP8oqrWr4B73T5UApDyriU",
  "key43": "4S4BrAUD2oxodXyjA64AHs4jpJqRkRDzpmBcxDJq6n7dKffnf1KCQbapk6QuYfGk1niiFQPcZrtDCqBNF6k6YCgv",
  "key44": "5DjjTZ4Xd2JGkU8bkrdcUL2MjmmuCgaKWo2WEVWWvswTVs5wrC8zCPzRPmqgJccJJGteJd8gCH1nXiuxw6SmGZwq",
  "key45": "61PZKdVks9QAbucN8vKawdiF7fXxTuzD25Y9TXL1u3gCxLBRJif5d7FxkDYDt8hVShqZKVZXbMj1rUzuQfGYjjdT",
  "key46": "26Y3jXtRZbZxLzCEss97adGYm6rrGCjn6rba1uqEZ4Vtn36wDmSF8oSzEcr8FR77umMLRtArZxfUPHzKvujmrBfJ"
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
