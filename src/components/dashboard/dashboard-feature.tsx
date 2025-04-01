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
    "3rtjyKukyQdVTZKRxJeK8u46bGwbgDJU22UZKV79FzCr8GdH6c5MgLHNNEr5tRM1F6MU48za7RoSEJL6VcENkNnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AvcyPyuiUMJdVMwG5nrWtsAiBaQvY2jGpJ8vj5LezzVLpKaZvMMi7J4DG5o6KMDiq6oPhs5oCkx5RRWwTBGpCvr",
  "key1": "PYk4bpVZXfmrVhc6rPuyvTraZd57cpMNVqiqLGnDZYRcc2n7HJifJY9Rbz6Jv84iAezqoZyNYKDPscGwB6zwhkd",
  "key2": "3VNN8xAjH2Qfq7kjzWiH3mUD26FonwVs2xFW6Gt3ekuXbejV9oxEJzGUEWExKVZKgWpEPcNXASMn3YNzHwqGcYyf",
  "key3": "3A91EdztDwJMM78FUud61ztPjf9HxMACkzEUAxfyUsjcyoNWqBEgZGmCY2nRtXNdNXSKHYu3xvxocANZrCZMLASx",
  "key4": "4bQvWJpZ7zSR1YS7bhktEJWV8MLYzsWWNA5y8ZEdh7ViQLcfcfbNuRkxjMYMB1opkxSDE11QQ5AQfnsM6KRoSaQG",
  "key5": "2FGgixzHzu4qEjBajVMQjjyD9GgHkT1ghcSppyfvjTEr8rK86Tj1rJmnRxW4XNwdsDZnSXHqW2dt2Gm7U1bmoy5B",
  "key6": "2HQ7fqHJUDNJeFPfiTi2v8KF8JicjxPmaK7V1UtjuWhBoaA3No9FNBPzRP7j2bQQ76fN4ZRTibneoDEeDF7vDKfW",
  "key7": "GQjjKxgg2qJrKN9osvZvL8Zo8sAf6tvbfSbCqz92zXuBhJVNwnfMvrQ4RmSrN849p9eUwiJPEZnJFor1meBRY78",
  "key8": "5xqc5r7ShsRiPsvXMuVRrXUNd5J6CsJ9fh3k4NaJWWPmgjHRvrpHGVdQxorXmTpyDRA33AUkgqZbTFPhngXhoHbd",
  "key9": "CAJ67dGXh5dxqLHsHWfe9qkmCn7hVBJ8tcaMPqvEdzM7DWidZDre35cupbyj4mqKxZs1UWVCMZ7vB6ttTccup4E",
  "key10": "4scYArdS7vNdYzbFBM8CVEBiGp2pP5HikC2UYjN25dnKZEccnrK5RTdt5a3XmFHm7fxeD4mTcV8iikLQX3j1ehcL",
  "key11": "2z54GtKPy4dAHU7YrWyadDHkG6Wa6hpQjTkzYbBJc8VfJPmK5E7jHNeBSBAezLdsL6TKT8ZGSZRLiL9CVPhiQzap",
  "key12": "2g3CnTKvhVSWyzYzQDxwmXgLu1RGUvqhPznNuiqToVtLebg9jmGk2uS1jodFACpYpfQn9UQyAovqjgyYGXsLpQ4s",
  "key13": "5kwxzATjF7BKo9xEGVtZTYEEaNdUp4pkUYYbX7UJ2MbdwqsBwLiC6FcYgtRZWQSXWNJYafQaZrxtQrYBt3KvWnQU",
  "key14": "yKzp1KjLTcLBEXbqXHuVHTjxxoeVf2LsYnKL5JwpcSQHuQvJadaKzeUkwz3pmGPCoTMSrcY5bpRjmUfwFsh6QYj",
  "key15": "2foMW5ErCZa4sqjJ9QngzqqsxXTVYcpxoCux9jhEenhjPqo9KLQC9o6oPFfuqTzPV5HQ7erVqJqxyfsHqrF4HRLv",
  "key16": "f3s3HwsDkvy5FMS6PjFnQA9J6rq7QJv6V9CptnHB3ACXF3UC1TurH1ia4WjsffekxpojEyxSHJ4ZGWCQF9pTinS",
  "key17": "65zyhB83P9KegfNMgj2hM7id2qTBQ9HQNr85WfKRMunpjzoDEERFjhLm3nfMptmjhYHZq5y6qaU8xiF937fSon8y",
  "key18": "5Mp5J8BCqcfvu6GMWtjBaKxByGGGeZeapFF3mqBRiHnTMY6fTMpux5DYRrWqriUc1iTZSUxP3RNggzf3S5AhNof5",
  "key19": "3QKkZYQbfVEMmgkufBEew6qssTHEWBroCyzHq5CJ48GcytUwjwW4vgCVAyzroRrdb4Lw3d3Dw4zxEp4CBUwCBK9g",
  "key20": "5ontSeuYgRYWDREi4qR2jbLhZyZ5WnvTTgjmuBBokaPsLj2aWr2d5w9dyMDEVLfUjJ29nNwH5DHpA9uQkPBid5wB",
  "key21": "ZRD91pZmsUUMmBDX23XKqeanKckrkFPPvUVpB2BqpxM6UYS9RP5azqbriLcsr6dWjAJr3si3MJAnhv4U4NKxoCT",
  "key22": "2pafVGvaLJHqQZzLxnudivmRQHhddjsbXnRTKi5YnWZEaLc3aNzb9Rxmj5LdPQTCxGYBJV3WGvTJLNKaDeVcPDp1",
  "key23": "43WRGnRUPxUuJzwczzgWA7t1apnRs8NP5opyQsy8XH1mK3H3bJ4bS31xbB7toJqKZjKxqSFqst7pWJijyaFmnpPX",
  "key24": "sZinEw25XoP7ujr8s6Hhh1FX923DF7BMQzPCBBmKojNvCSg6etDTxAS8VJX9JczQJrYNipDzN8hy42H7TtggJYk",
  "key25": "2NjTK3bd5FT14TcPxhDxgDFRwVVBFGJFroaR48h5XMqSjt9AUexkDpF8mQvHnmeJCsVoSCbmkf3NpYUV61KWgVCC",
  "key26": "HQ8hh2WjTYh9HLj6USjJTTa2cmT2FNnWEKgW3qzBd23mAMvBiRq3VZT6wBJhJTSDRMnQqhgTfsxgYihVXGvrcq6",
  "key27": "5bKhtv8ct692ExEPL8aR5PkFHA2KCerE9xSrDGLTmJqcbJhBtJ8w4itRNtC9c4D8wrx24LH5ePKb5kHwW5Tb6dbZ",
  "key28": "SipitcMaKfzKs9p3CiVY4VBGGzU6YWc76AeVueBjmTJc9wNmwHBTg8BHoj5TD7LAFvtCcSEDpm77dmKrVZEWfAf",
  "key29": "4Fn3b7cSbyFY7sPD6h1LrN8HxJwgqrbr6UYnTHn4QiJM8QZtMkYC3sr5BstJrr3eA97tneMJj9HrnG1E9usEwwzK",
  "key30": "2uQZxQWbN4mHQhiZdoVALVW7xsbAbWrP8uQ7BvFG3wAfcSWxWwEQ24bF5zjXuJZRY9M3i5vRmY4DEFDPcD8pUgA7",
  "key31": "uDCMyHnQTQmKbawCJVCP2WoALkpJFJ9nhadJNtpsBhouooec2egCqghTVGwezMGyHvEusJjX9CNGLY7bGDhsxee",
  "key32": "WVhYoXaY1Um1rwQYKoofuGjUS4cMJeu17NYpCi7wcA7oQYJze3B8q2fZ7CGKF6BXp4Xb7Qvk9ox8V8v8GUvZf8U",
  "key33": "56BL2B9GBNY5t7NNaByvhxCBbsBXX2AZoJSwJmSw2XeuswJ2mpui5pVNq8dCbs2pBpdQKZUXxbEuRrDSjxotrDqP",
  "key34": "3279D5xdhkuwzWkYMiN6iLG1b1Xa39BqKQcFnWgZFahN736BddxjXCzcc9o2bm2ornqFKY6N1htFPrD33yTYfYr2",
  "key35": "2xgFxAimFY63XeWSjM7HYBuS1E4go9cUJGmTpoWCSrbjSmxtt8akE5GKwHQQVcbsV2Exzerpa8gRuGfk3BkXb3Dr",
  "key36": "3ijsAEnYuGCABhhPVCjJaAnBXN2c9SYc3gqh5QrQxwFRxKYSwBnZPsWtzadPG3zPP8DY6HbGaS4RfnMXoYDXmcdK",
  "key37": "3d4iuisBYsJp7d9JSZJoJLKCgRmH3T5RoskrcbaGYTiHtQUFVJohUd4RTUEqomyZeoMAnpCbzY6vtLKNG2HBDBrb",
  "key38": "4gnfYKtcUpKon9bYfAeMzv9pUoHMNop5vNwuRTWrjBEi8QzzHhEYMkLRRPpmQsMmCJm8jj8zBusvbPJ46Mo5VCs5",
  "key39": "62VdAmzijVernN22ARw7WEQZUHYXePfGPgNo4GLe1c65Qk2sUDYVfzk1Pg1Um2CpTc4ggiTLi9nKgnEgsDQBMRnL",
  "key40": "3ycRSZov6jjiqvdhnXtWn2WzVpU4jkeyo7CD2gbLR2aC1aqY6nJmAvJwfipbtoA9XrzY4CNcXa37ZctsGDt6E3pC",
  "key41": "3kMd7yEnZfXv3H3FhXfSc3v455EGyUyMbcaBh7hYv6f8yD6HF1eHSrzChUD9ud1JUjF2MmGj6fccn4RFHT86iS6U"
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
