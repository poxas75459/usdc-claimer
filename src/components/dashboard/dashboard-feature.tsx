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
    "32PGDuaAVExY4BgapxvEmfpUa7anWV8iXur1A2em9JdfZcDiov9UyFfTbRZgNAstTuVGEwEM2KWsGcWFCxFh9REy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ep42KkPCYJum6afQCJoPHgTRHCHhM5D73qBLeJkcAwfT5FWyefmk3ioMmDphN8J17X1gu2e91zH1SK2so3B5QZ2",
  "key1": "X4AKTaPrUMRFQmdwUiVPAw6ux1ECSECtgv5gUFef58v2WqruQs5SwAdYRwK1jwwZzps51kymEVjh4e35pSroy5g",
  "key2": "3QKeYpfHLvSMKPWaA6xTxCcLBd17SDYZicBqZq7qE6Cv7Zhc6tNyxTvTDwebNhEjZ1422yth5FfD83zB5er2SvEr",
  "key3": "4tWgDGTyh1LkuuYLYX22As2M8pL8T8TuGiWRNrmgKAkw5oEdCdUXV384dCVhDdpygvgPEjZNEMcSLkZxUoabsrLb",
  "key4": "4eLxTBH7NpJzRMiMu8C2PiXZbes9p4BXtjLe3mprumYLHWE3f9wfGdpNvNKJEhACskqNbAdrDjt2ZDzmaW4LWuEk",
  "key5": "4p7hnvhWTVhJyxU1FCRxXpqmHBgtju2TsCqYYTjd16Fmg1WKCsTSXdss4ypCS1fBUDg7UioVae7A9TvdkDFroPaH",
  "key6": "26HTmuoJXnCjE2y8yKD3sABwVjstT1QTSwNN2sCL6v4Z11cJ8g4auSYpFANMV3KhTbYhxGDQwVYEc9WCEAZL82Wv",
  "key7": "2UXJvwDunNFxw89Mqm4byyYDaFTk9uo4qJ9VYHxvXvKKuEoF97de5nbRj2TbPLTq2NYQoL3yLncw1xRwoKEKgaTM",
  "key8": "kpa2YPXgab5S3xBxTgd9xYEn4rAXWsCZGWA73yoh2eH9oKttq6MckmUztKMRqhKKq8GB1dDjDdnZVxYW7AwPVha",
  "key9": "3H3JYpPwVnAnLwbcMGgQEBCm4aD4PVNWfxb2MyZvZSrtmBbsDEhKSoePW6cvEharic67S8niPi7k7TCHB3tgaFCt",
  "key10": "5nwmqrf5WMxi8jCS533MihrvH2w3xNrrqiC8XUCjNycXY3Nuv1LzJPVNjZHy5XbXWXgBgxcQNed33mgNZm3CYTgd",
  "key11": "ayCvJWy6jSCk7JaRZsUyB8qqou7W8eFRdVeFfNuopoCN7B7ssAmszfqz8Uk63ztoccb9eK5oT2sRTyZncAWmBdx",
  "key12": "57TmfCoDAWqokwVNChGzXCRXhXVPqcL64f355XRo4YXtwNVdUf3vh62BuATHCixf4HRwajNMnTNLLoSG8bJdc6b4",
  "key13": "5SoG6p4J1djVoJ48xs43LLF1CziqdMxEveXDiBqkKkoz4K6Jj1Z6B82vmnjUs1hkrupVxueRJqpoaUkvrPj7MdEX",
  "key14": "3cMGrsTe54iWvemtQmVj4ZQLq5QT7v7LLVqxBFfzczg657f2HJxirq9CqfAFiA49qcYQSvQQAeePR3DHhsfdgk3D",
  "key15": "67D5yuUoa4HcjWcHUH9T9Z7oq6KGZ39ZXQtWcxH3HHzGjuWBooWZ2PFeszLPzBAmyAqobXmjZSjq5SbKGRvPEGU8",
  "key16": "41CvzeAcKjZyoh2ZNtoqZ5RFz8g6hMyvmrffJ6Hes6jmhsnTvXzDSoYNyvXDcLfRxxZSfh9ipSi89B5p1NvdkMsq",
  "key17": "4cPF37RjVP3jPzdYjMSXpn2Xcyv8LLgduBHmjqFL24DsR2BQnnjtDpHe7HLoKDjEtEaMbXDseu1qYey6vYfqc7hn",
  "key18": "gejuWGMQpnGu3hBMEcXdM9d5CMpr2R4VnrBHQwEoNiwYitiUSAq4SN1TT9x659YgcUdWvEuyDjA59Kq3ZvfqGXi",
  "key19": "1272vKND6dDfGLFjntyg4bHwuizrhsvTyo6Xu5Z3hhw6rnxFxNyFzCcucpjcPrqFeg7VEhb2TRxvpjNqM7WnAgDy",
  "key20": "5mUAbS6qBH66LL8JdTJuU8oydWrHgnZwjRuVTGioegjb9mK6yCLuoCpk4Fwbz7tBM5PQEV2MEVHfELmaykdmHpEn",
  "key21": "5jzFKKYkpmHTd6D9SLJkMZ7BgQZqXXJhgu9pysHCNKt5oYAnGQSxXHddSWPYCk3VjXWX7mZN1Pwjbx7kVdmMXZzb",
  "key22": "uozg6TcDEjy2g9S32aDt8cK1SVDVSsCUoFokxsbN8hF7uQk9Q37NUaQu3XtTc9ybPfHmAqHL1uAtGB3CxMn61Aq",
  "key23": "4KqkLdqbMn919U56tqAPK2GM5mpBE9a9DCAf3wVVmWiAouu8MYDBpuozpmGgyYdfN2budAxr74PxosuAU5yLXVM6",
  "key24": "3e8PngqE9cfkvMtXaYXYVXEKyycEThusi5pTGGWDguHBG3P6X3EbkzHURNsPQX4YnibgVArVUzX38JrMwNjYXwLT",
  "key25": "LWUWijJzoCJ934Q6RVdhEcJ4d6suW1SAcw7tLeYuuSAECego1FF4ep8C2cuwUu6pE9J7uUdJG1Zar2YpwX1hYmE",
  "key26": "5XCSSpLXY1a8RQqTk1pzLx2jRajSMaJgmkRQsFs7LbEm9K21iaWwT5N5DBknYBvMSDhMrkBRFfPwA5hVCMAaE3hq",
  "key27": "63rLw1wLwgQBq8KVLPvTjiAv1pUdM8bviyjcLcnS9yPeGMGhKphTEqGuaZdfSwsRPKyP4zh3uBh2iQYYTEhTXx38",
  "key28": "64zHfoUpZEgJkcoxBzPEM1rZY1f3j88XTKvvpiXXvqoVyJQ1rWapprDTiPDHmiV3RUcWkoCffr1xuag9ZEmdpKf",
  "key29": "5pXCUApepxV2GvJwT7t5xjPGQisPuNy8tGuXTZeb41R6LrKVxEDuThqi8Xbzjp7bdD728vC3BptWEHyyQpJdmjUL",
  "key30": "4C8wtvcLtLnGdpk638QWbRkGr8XkAoMv6TNhFdKrZtSgwEPN9Zsyzk6kvtG1zr7xMVrC2iK9UnfvqRxTdrBpnhBY",
  "key31": "3FRCNvR5QKBfmqHW4ghgX41zZeQydJPMffRojQLnM8CJUeknvdTW8mZ86V4ePhMAgEnmfPErfWmnqSuX5QGEKsTS",
  "key32": "mbsb5cTJQjx5e5pPoL7Zrj78kx7HGnqQ7KkNTmmgXdG5ZFnjoek6wAM46cfm6VsaLMYsi68uj66fpFkbkwyrAXb",
  "key33": "2S4UtcpFhM8QQ5FkBhjWQAD3XkNjrF43vrm2VDsPmeG3JhyE2r6y9feXUmGRKVSj18KQR2nP9tezdxJeo5upMrTM",
  "key34": "27ihDSSkJDahfSQVVoZWehqih7ZkZTX4ic2r2wSFu7MV76JkLm9LJbR6ap5hf7ovt7fK8AKoVPK3tePBLCrSMK4g",
  "key35": "3cT5WD8v8KtrZfrpf4BgzkQEQUCNgWUBCiE7D5qSFH2apzGYazy4WDChsXT86ErsLUZ1UsXErvWuTSvXiaj4kCmW",
  "key36": "5CpL46DphjsFM2QuJyRSukjVD5R4FETEk239PaonPjz5BhwNm6ESM9HrNnM5YNRHWcgv3ksN7rKeHj9nrnpeu7i6",
  "key37": "3k4WgWjLk45tgR6o5yZiSYgCzMXxxtVsfk1WR8mUR7jGx3VcVeMFuyP2aAxpiPpkj75ErFLTDTKtUg6pd2FuwMYd",
  "key38": "3zzLVFUD4tjWa83P443HPdnPVyGpi5mjuoScVnqya8j64N9Sb6jzV9Gn9TPqph52Sfpf3EJHxyEBcPcEjtrFXS9w",
  "key39": "2fsFLVLNfuAc6UC9WQwHzjZ58YGizeKBiZtmUJpg9LxcA2E3fqcfnmBpbsDYgYe6zKyrbRgyqNV5ikuoDhVWCmAN",
  "key40": "3YMwG9NfyQzBRATQB5SjD5tHBqrkDKvDPGF3B1eQeoVv4AyBSBRL9TeoJLDBL1szKK4A2vfxtjhUian1F31A7PiL",
  "key41": "sdGeNdN6psrkHzwiZmFaLd23RTmSUNk4sf4h7f76qypjME4GtCkajzGPegwtQjwi3bqHA2dLcVSJsbHCSJYLL9S",
  "key42": "4ZNYA84CFoJwQ4HvRtx82KTWnChFaBeXsGegYruhdarkYLaML5q4HijXJDPcXjfHVcmK2xnStUdmLkbSjKLCbC8W",
  "key43": "4qCUFyz4bnywsgg9BvnJ5yDbq4y8CX72e9KeTb8f2FHu3eZwc4rLxY4qGzHCnTsNRryHece8rQGkcJrrVwk41sDw",
  "key44": "4UgjLE5Wv1432xXJxX52XRzoQM1MUhb7zJVBgviKZ71fcUa5iY3QHFE4FxLreaM9NVhZsCpJF61qgQADuEyui1Zb",
  "key45": "4B2rZmNDV2s58qg9nzXWHHMmBnvuR295cbmz8Xq834wvVpbvqJFpsgWp34qDgJaADULbyd9VBy9h1JSCycnX5bTx",
  "key46": "4mY8WboLAv6xgPzJJ4YoqLxSdSZScG383YcnMyeow1Fdsk7eR9Hxyqda3AcAq5nN51ZxgzwPXtXVvHq4YsLHPtmg",
  "key47": "2euFu55BREYMy2BPzVv9Us1W7x1JsDVDr46TKZWRQfPyuGpByaQe67zgMjPyhMSR8XtjR7HpMxSPtxeyCEZB4PMo"
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
