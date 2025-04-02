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
    "4kXyan3ZPFcxKqJ6gmHnDfwGfEu6EZaytiUSdDxaw5623tNpuQ4CxP6jTFtrSF8cNAAxu35nRy7LT6JiQVxJQNfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rjQhZZts9fuvemGe39ymvAKBwxnbjEHJHUdWvE9zoswRf6JFkxtzMdDkZ4UY2QGmJPjtq7cZoPB8g7HSjUfhve",
  "key1": "4TarbSzQMiPFCiq4dKZDwQAqSNG2jjG8ZE1DXVK55LrLjCJSshv7mbs4Aykr1FtSQdA8NpuYa3s4X7TDcVjq9buC",
  "key2": "3Hf45coKHkeL8jfvv61MxiGcyAxipDMVB8EQG9w3vwwVmeGdw1CkjhTZ3en8Xy5771s3P3EyKbJFdHP8RRE8TdoY",
  "key3": "5BqsPzvZ1GsDUEvtfTV66BS7vQzASN7D51ziU1V1BBULYiswL19L6Ak13Wypz2c7vqRyGbofA1wwtxBQ69n6ebiT",
  "key4": "5qsz22kRFHGqjYu35GE5JNYQZrijkojeUc3pmfHBkUrpwZcYza1uvso5J7VwVuMjb5wa3QMPFJy1wzKbMu1ck4PS",
  "key5": "1ipNHZTEPvxaaoURGymp8wevLJyLmHvvy8t6GLAyBNAT8VaKuH9JPvVCU8KEZ32oSx8kA2zofKQhGpWCfqxs1AL",
  "key6": "4RTLegyh7awLZf6b8Lm6HKQj8Ar2StwfDDs1zkaMEbgLscUY24AEHbz9htei6sdV3FqUMsyZn2XupVyqWiHt7MmV",
  "key7": "32AzwCo4Rw2iKXZFZZbbhT316CnG9bq941isRfwxcjc1SP2MHt2668R3vuPGUgaS5VuE6JYnRHVAz3t26ycwswJ6",
  "key8": "2iNQWJg5RbDQTqiX32mtWogWAYvqh3e7gPKkRj4pW8fJCFTxie4C6RzcVciqv5Wqef8iHuPm6doBzDZiRoaDxWdA",
  "key9": "2Z6iLWLEF4xXBoWEohBrzBWdn92fatWQWpPqStm3t2wimYVJgaMoNk8P3gqw2AGNjpp1rwzjE7TeaXEJZAdA1R3F",
  "key10": "3j4A4GZbJfzoYNHKYh4JwVw1Ma8NLAokVdP8HASpTnrA5ZZv9iZsWyQMG8a1MxWmxpgniWynwR9XZE44v4te6oN4",
  "key11": "3eKMZ2M1AWCe9uDagDRK5tdxho7BLeQ88cx2RKHCvWGsE31WfkgAfzgjzrFSrRspJ8BJ47Bz3KeRwAMGjLkyP5oy",
  "key12": "4NmcvR7hUDyRjTHyBzgZ8mf4zLzRoKNZo458gsYFTjVHyCHecuCVua5aXn4hj5gchAQi5JQx6TgdodMJApLD48AA",
  "key13": "4RcHfzcykNhQ2dNnNyPWDTwadcECJjnPT58R7cS59GuDy6NNu6LNZLutqvZiUXMTCsqr6wdqYKbEursWzqFoV5ub",
  "key14": "5rms639vuheZGXpjgtQiYJXiRGL1Qx3A46PRcrwEkFaJZpufgf6SZrNktEzXHrEmg2wBLsyK8reXYsdPRvQW4uPf",
  "key15": "4J8USshxMLAD4cQNhiJiy6GuX3s6UouFomdbfcpAZHX5MwcZ4LWtpocKiBCG91kbxnpnmDvHVJLYLtyZwi1RtvG3",
  "key16": "XE8v4PYYGHqk5ryTGjoMna53TqkBYuvE3CLxsZ6tNBs2pjxbkXepQEfVh3iR6dN53LWpZvchiswsLVP5KoDz3mY",
  "key17": "3m3D5Ze4sj795xko9S483wEGLJ8nu9neyXM8BDneVYym4hfbzgWo9yEyeb5fu9KbCefxnM9U52EudSsAX6CX4nVm",
  "key18": "42zENQaMSuZ3jDRpXZfJnUrku946bXjoWQ8MYsm1ypLxuTtYpbzzyRkgxUAYFz3wFnkJoAekvETF2wZ8FcxQdguG",
  "key19": "3gGfoPqkC7ACWBKGQGw7rCNepjyPJU7SbcEBF7Q5jXFVStiyWKydvbM5csqZx8ZMjuTrGvQmfwNobkZLvVhsrKwy",
  "key20": "3czucbbq5Fin51JfdYKMFEYtXRxGo5i6sp1pv4MatvAq43iCghJDJ6w1ywVQC43bxXoroX5CFwWJf3NnjematZ5f",
  "key21": "2zWwoTU5peYPqY4Z5m8bjvJRJZnccnFwa1SF9qv6URHM3DDD7bvQLRpzJUvtbzrux9Wpm4MaZWEdPb61owRT4x5x",
  "key22": "5ey3PuypwU8m6G4FsjHGSqwVUtrecEQoDqXGoTYjsKyHeBsjJVTYmnAPZr5AGRqRSCH2LCgzsLGigPAFNWin5NDU",
  "key23": "5xePSf33fzUHJMfjQjXLsRqiPrDic1smS8pmQnBTwmpihwvBxdaDtFNC8xYFxRWr9DX2E5HNNgiDUPw4TfKS5NLE",
  "key24": "5e3kxCugc31BLpt2cQ74UUrdF54v6RVCSh3XbiKrMPBMp13EJXHKvTMPARxj9a2cA9F9w41Q7cz5WpbJyoWQ3oFc",
  "key25": "PdAnZpQZD86zDwTj7NPvFRkyLLfCSvRhEzpQecqjFVDnyoQnszKyC7JrKoqgzuEUb1i4Knwvbp1fhW9sco7GCsm",
  "key26": "3B57kvU4pLug8H63hpPTbgd6JJKUxH3KfgUHmSCDhm7RAX3bmcy31w5Cn7MaTyLfNL5kYaWKgRTvdmK8vrRQZmMm",
  "key27": "5FUqFeW8pa737xHgBbuE6yHaHU7SvPzAg2xA7kr4r6X1htrkoKA7mo2ewdWcDoapbjB3W8kghmBgkvXyEjL4jcaZ",
  "key28": "XT2z9AACstK6p5a4SJsVYXxJnkbjkD6D3ff68Urtn71dWWo2ZcFzM4ZNdSoMSa2AgrC1QM6ksZrt34XhFUj7gbK",
  "key29": "2Yh7433corTNq5yNDwbAVsB2zciJ2V7eU9NiyyBfYMafCua6zoBukVnv3F2XR4dDiwvPMqLFpPkxydJpzAER9xKG",
  "key30": "3zVC3CBSbXncfurCHse2FQdoqp2frGXDDggJwQcbBtXzLz2L93Ua8xjvviGv9HZQRddTw9pq41mjt9rUaXWxZ2aM",
  "key31": "uvYwegFc5UQmjLdt2ke1LaRWXkG5WuBEdPJgHEg1AT4ZuxPzBoQ57SjCLgD1av81Au2R7PDDZTqqh13hk4eGFNU",
  "key32": "uAQYj1jgJMVdW6JFX6NiHPSSiiWchzf4b97o2bn76gpGjwvrzcfvgE1Rus4rME3ULREpHkD1YPyEefZ9ydzFKNU",
  "key33": "3ttvUnZgfEim5BozPszNsTCoBx7mXMGGvLxexUQ899eY4EgiwpbJJfSpARTpk36WGtsmkE33E3H8GSVxxCpyJMkv",
  "key34": "5AdmfFMnuWQspY9HP9LkkJeLPsDZ65nCEqkYe7Pni8jLPrXMN3Fj4d61btNNAPXpQqAjLmEvrGsscVRfQFWZp1HA",
  "key35": "3Z7ZDHsacHCYugbVw4VtoxgVdbJEYv14durVmWXZPPZkKYfZ582NXsd3E7XqZKSRuAdkAtSL3oeXZcUvWSmF4Qr4",
  "key36": "25ttPBzyvz3YiGZFTRtWNMore2QZPkN87fqE2EDqXbzFLGwgTWAkLoSYdSEDh5o5JuX29hih6qpm2N7KHZ8tEk4y",
  "key37": "5Dxkadk5C9DQddZD6sqYFmaEeXNY6JD7Hy2vNBYjeeg2f9WNxq3zdXogz3NuoSnqVpEpX1ay36yCcMJj6D5We2Dh",
  "key38": "iXUZ8XZP2tXPV9QGPmhnBMbG7K6JcrGYw8RnQqmgWjMbTXdyVUMGCHaWwujsk1bWnchB85fCbDhZKoJZkQtpxeJ",
  "key39": "4VTFJ8mgaMUWhT8uwemyTgnLUyFibdCcAeE9FThtZKbEUzdNoHdqHT68nLeo6pnZnvqWT2zaZfd7HpTP4idoXa6G",
  "key40": "5a7gCLXyZpWtQox7FXoCjtpuRupXNWjCX6J3BJPnzJHGoeXiUGLNWbAZWsBXmnam3uxutMQD3A9hG7yGU8TrCdzv",
  "key41": "FxjHXY2Asp2zJ7X8jvL9iQ5Ft1LuBHMFghWyXtKC5WiYm1mLnuZ6jpLUfiCTFdyALkfydnambvAPCe91Jo4cfg9",
  "key42": "5ZbK2eJxQj3qPEFZwXd8ycVYzhCugjU9pGV2cUzdHZJwcDUQjMHmyef5VjYB5qRvQPc7393sGvCUUHSd2fvMJcSc",
  "key43": "5MdfKDeLRnFFRTXkBxSoqnkx5SgfaMUW2ogpqXMpdfKZMs1Ytaeb1LvDSCCQrZYKdXTj4AMQ1YQL76QGwcKnoXoi",
  "key44": "3M5qLuwanFW3NmHErKgbY5nRnozSK3RHsG2Bo1r41FX3QeAksjY7gd5zXK5KF5WV1GG9nFdkUYca2mB1osjrwKS4",
  "key45": "4V1NHHwRLMuC2Wr4JaVe6fFii5TCtp3PSzv7ZWexaCiAQxSkQ9gxrX3HbpRFZS5xbi3iaeCDjhMJYQyQCKfJqN7K",
  "key46": "4qKYrZDxxLDJzsS2cbCsjijjP2ogn9msX1HucTLZrev5pB6zEFrAJftcvojYdW5UFiTcbV4wHAmwzgPdxr3RdieV",
  "key47": "JePi11DBY3ScVGzSvjQpqS6bPtErqVCuNg48o9J6yqv63DHMsZjukhC4VTN44qr5f4ACyPkVgR4vxevzcPv74H8",
  "key48": "4bgFEqmAA4bK9CQk7mApgDBfTgCVENpjHZX9rLnrq7cYm1942YmJa7e75nfwtiXxg7fqvWfFLtrBdmPLCFJV4Qag"
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
