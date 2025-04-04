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
    "3Lv67Ec77e5BF3UuPzPAJtL3N1ingAG9eDjcamAf6pH7bWZ1nzmgFgB4WMPmC3CXHUfta5osS14r55X52WVZmBgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24UBgj1odcvoGd75Y1WuAhtoTW4N4Xswb4XQo37G6d38C9U2AzmEDbRmGubToXuTsfsMvK8PS7moRpb2a81yx9gG",
  "key1": "5TzVN55NXT3yKH5smL4hrBv2xjciRLErqiYmZT31WCkW6hRQCJx3TivGMGSP2T8WCRPn6ky9Ej8AHvXAAKbuqTet",
  "key2": "2iKonXspu3BQcaa2aBTba9aixHF2SnDCJwVFobRJF6TGiKD9TLC5z5aBwXn4nYw7WjZfHHeJfwcyiX9cX6vZXDJk",
  "key3": "4hxSmhbGNZzrnUNAJJ9RsKH3gsByk8Y3uHg5zfdCAaGV5doSTupuN69ThtFQHFKfwjguzvRBWKY5k9NrXrk943bQ",
  "key4": "55kEi6S9y5rT11h8LuhAJhTE1WhT23qKnXjFT2WBTCkpgXDNqxTbW3hBZE5ma1UFXh8sZaKUSihpVxPmJatPsWCF",
  "key5": "3iKazwCAsknWXQrENgFRyvG3twaWjSkVzopiWNxuyEGQEdgD2VQhbPvaPZjtyhMLBhxKRKhmX2LBYzY7KCgpFMjo",
  "key6": "2FJLDbFkiMSDv3yDWeSp1bUzQbP78HNqgRL4GDJE58m8PzmQC6E12ehvSDBff3YmDWM9UNL9JtF32BF4fPc3eB9G",
  "key7": "4M4MtzZpVfW2jH8ohoJSEgGzmQzkQtya9RcGb5eYjderhNcJ63d47nJMMsF3XSFFDS8Tpx8eA9X5brTC7F4AxC1c",
  "key8": "2HDVeVeqwKH5E8hWiCa49yCqZ7psfyDEUdxqPypzY24jmRWktett4ofE7Gkb55FZTp6frccLKY6CG1H43k4QdWYe",
  "key9": "odRuH2kM8XwBYUgLf5jfvkZB2CX59Yc6noY8SLi5P4kA3KaUYNtUrX53w7ijXLHyJyJqnUENLgqQ7B6VpFbEiB4",
  "key10": "4M3g62A2FaPZzy4v9uQs9o8gfJsMKKsPE9ZF4TWxpHDAscq4ZwiX1skATWFBYchSzd928o7QMYgYoaDPZDUpwKRw",
  "key11": "3zzJtDMw7XvN3PUQPvPrErJ7UWMupB71CQrgE8ytTb2ygbRiQkrYUB8C9LE7PZXtJJkamyTrbeGV9eTu5mvQWY45",
  "key12": "ZbDz3bgQvPEQWva3uJ5NMhJTEFtE11rxDw1pQSB7JbhZp2SrsokLtXbz2Sox9zSSkhRLXmfBAsfB6hnQ9UWgsCm",
  "key13": "4Y4Ts5ApUMXBy88PWpvS9ckAztouizAkjjfvqzCVQKSgkNZV51q3ZxSrEDXxGo4PoWv26XPMd9edEuJqqDt3hGR8",
  "key14": "2dJFL8Q8Tgty9ukUmoqofuvWCZspAw9ef2Z8j7exoCF37Kpj6SjHFWDgu6Cz1SQt3zshcFFXqjo2YfxAnWczFiVy",
  "key15": "3LjdBaLRgwa5MduceiAzDu236jKR1wdqVzs9jicVgTXnoCjYtwGxhpaUB23S7cMErdTZzKoPFiKB9MSZW2JUeRZ4",
  "key16": "ZNLgzzX48iy6SeSJNSHt4uXf8c7P3FFZ4YtTA3dkpuyx46wBiYzRdUV2Ur4PJ9h9aBrLYQLsywR9xPLyFkCxoKm",
  "key17": "2KRHkLE8TWGcm78QsDqiuTQNRpuSYWzE7Fe3FRNGNUyemMuVm6FvTRBsbxojsA2oQsVhtMThncbL4vccMUue3xHo",
  "key18": "3uMbHGKS25bqs54WDwNSV2twnVx2RHLPjtuGA6XhXQfzqHDoZLXYFKxaVypVC1KLea8om33mHN7GTEc7g4Sypjvz",
  "key19": "4Won5nnh3LtRFiWuyQ5cyHMSwPoKuZ54zqzYfStQrQZodGL4RtEdEXUxs5RgbtYaDVCCWAAqp5HJkE6uG8qzqYhP",
  "key20": "66xqoQaUra7T9X7pxwGD7P8GQwKm2yG8B49MbcL62X51k4t1kHqMCH38uG1kYPvRK744DnmP4ZdXqa8E8Kgk4o9T",
  "key21": "2aB6D6hBKRqLZVuuzk8e6nkDNe2uE44eo4CWSdvDS17ZTUFSbfJ4ZDmi52a1JMwTKJKDhbqFFHhN8TspLKGY6Ujn",
  "key22": "2VWsNLBmT9khemiFvnKgBEJgEFUAKxjs3VjruQJr348WDkAKvX7S5D1fB6qF1GLzLATm1WQKMXmZfnDLsQZRQMtG",
  "key23": "3L7zTihqz937Rzr1xS1y4pRNbUV1fFxPtLZrCmgQeuGJCLoxscbEVsXa39XkZZw7vpE78aEKGVMuH3QpR9QuCVgP",
  "key24": "5o98V8bEWLhsWzcciaCpewa7vu7kQdHzPRKZJnzr5se25nm3csHbQxvxqwN7hFqCbtDxnKFVUcpjf2mefHZmVUYy",
  "key25": "2wdMQEQvCxAghPRxk3zvxwyPcsiZ56fZGbKXQbDby7SYXKps3TYjJisE8Dy4R3MHxRJyDKoMKtcLzaUF6aMbRBn6",
  "key26": "5UB1PqNLp2C7bieuMcVqTH9E6v41ECvvaAPNMhMzmhHCnQVuQK19PsZPPmyiRagncm759Hd22tKKzYVnRdBtBeAv",
  "key27": "3o5Rw9WnMRfxxqkFauAVEYQ5vmva2nhwy4rRC3Cx22KLr1N3JeNFRsNAR5Dixz39odPCXKEeNAmDEewVJLAjQuBE",
  "key28": "38vJoev4U58jbbnswEEvEBPEbCAaJF5ZZTq4fv5u8ChZd6gTsqzGQ7bp5SdkvBF9kjfcTsu6JFKeqdHX7gUGnFAf",
  "key29": "2PHG3aCTbg5NkyF37C4ZVtGjZXYA9wRh5nwyzezQgJdHHAHpFNRNpKm3vfW7wohVtyGBhqYjB6RHSHaayZTZTyoU",
  "key30": "t5qiVegFdtZqvBw1tHen1644AToW1p3Q6pD2kYi4Y3Vg3QYEpKrBhx4SSRLf6Cm6f85ibZK7UcHsuDgFfVhbf1u",
  "key31": "3PuiC6dDozqsQgXD9ZySNXQMJCsxVjWTrkSaEyDmVf84hk3TqLMHvoMwwkoyvJTsPtnUvuDin1TmfeCEd7uHxoZJ",
  "key32": "2tsS9BduhSocStmmvhC2hMLjTBUKjYJNDrvBZKrhr4nAKASg2gVf7KfWspPumfrVZG5tUpfcqr61gJYFn1y8Z4yE",
  "key33": "385YPpA8vqtdRByWRiQ5NVKyhTtK3Bze6xJfYRk4V7yAvMtFFg1DK7fa8JhA6sHRrFsC9o9Vz3Q7kJfgvcB7xJFQ",
  "key34": "21VyytZjFajQJWFwBe63fMqq7w4kTLfahyghGdU8xRS1Xnd2ZDRxK3fgDVLzUq9jRkzVVVgWM2fpTngRiqrHPgCy",
  "key35": "29BzQTn1pjeETriEbwuL7W8bYRDbGnZCFRAV5jS78Ze57DboAi4NxDdozzxr9yDuwAUByS4w3QyXhcd3rSQHgcDQ",
  "key36": "22GQaGg5dwAQrmp1BCSrVUoyvW3AMvAosotTiWem5TTfU84vFc36JhQhZFRfdgWGa7nkrFkjdxEv75guLQ3nHwJr",
  "key37": "Fs1h3ngpnzmHZqoTYzk1uvmDiWRvtqKYyLxJMRCUTWVrTxArnmxnyM4BymTzRUZYj3yVqpNiJ4SvhK8RRVxeY1S",
  "key38": "YPnum9KmdgDFcNHGZtNBojVPyEW5BM9VNZgJmqUSvPqMPmUPTXzxznTLYbLh4seTfpf4sWQUMRXJNG6aFLoyJJR",
  "key39": "4tSR8MvTfHXJem5XTGizxgqGkUdGoKhGgYFG2vxfWBZwEsDfxwsXXHTRhtinj35HKPs1hi41TZv9p6WE3akaq6gn",
  "key40": "273hLN1catPdudMci66Fn1RZxLSJRAZTtngrqxPceBhsL431bkxdr7rtLVBHnKQLWrK3iESWuqL1Yzcaqmx1E7iW",
  "key41": "38gKPnmmK8Suym3peRDPwjgLPhj6UHBvMHUzNvCWxVYEUCmL59xHNGoP4m6PVReswDcAecgHsyrpWxAiRjXuXTQW",
  "key42": "2hpNx41ifhx6fSicU17f1Nmc5Dn9KVGVr1EYUdGWPYamHPPfk3Xsw8i7P6gUegpKCxd7MYvfBs6EessRQFtfvqUo",
  "key43": "5Bkb25db9uhNM18HSQnJGUZySxZ6iTQKgUrPtGqcTWrrvbdPEXoZDbfWKbvtdJfwBnthet9cwvB1URNzRcAWqPHT",
  "key44": "22NYxJUTCfhTvLVDtRL1L6styaNkLA3JAGrcjWGgdb8jpEuJvMqVhBUixgqgURwu55p7nRa3AWVanqpBdz4EXmUw"
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
