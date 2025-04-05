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
    "5AkC97iSdNYrFdxnF5rmGBQGr82JM9Mo6QJR7R4isMn2sSEfEGzdkQLmzAg5wuwzqtLbPWmYFiwMG9Cr3fpo7shk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6EkL5NWpRRTkSzBBdjJgG7HRBGvUE1Rb5j16kzFdzEcBBYyREK5siHhWuShgFUKnMm4Fx9ae25WKTh7ibhL2ct",
  "key1": "4zRTbZHKKpNYJuMdNRi5rFzSvo5m6zt3SLqvS2GQv5G3URhfxawP6LPh5M57wiPcCQ49ztuhLT1D8Py9g953rB2N",
  "key2": "31GMZXntz6dV6uZyVVtbcALYPDKMQgQHWNUK6SuMfCfSY2mCApSpVF15wRUmiaGw2LDAvfBhvXKydgAtQ5NzgfBX",
  "key3": "4pNKevfFaAcdjcyzyqkRAaAye3UrvusPiCzvgmBM5DJwHXRxRK9cD3EHPPQbzqPYeoaaBVTDoRKDpmW7rRxJvc8m",
  "key4": "5Ve2GRXczh1AkanWvvnb4bhWXNRp7tsPAiz1QMzBEKYvCgPBa6b6BqTSMwEYQ2nqaAVxdbc3reH4VTK8PyeUXWtn",
  "key5": "3M7KdjNkw1NNQ6kQXL5qtncd7Sm3ECbrua8qH3fb6x1pLXL8XpaKGJ9Hs9qWmrhkfKgKT23FpqBZapbKDmmvQ2gs",
  "key6": "2vddBtc5xSZqUsihmbBhE6enG2SPAK1v8Lj6uePrsQF6XzXvF4dskuqa3DuFbLtbhQNgr6WHDe8NTAaGouDrDKLd",
  "key7": "3EwRjmXWzVfRN12Mnpc6GwEUPkmy8yZZCCWrX838fUcJA7SQFKbjwMaU6bGixxMBYyUaYKHxGGKQbqFfwtZTFQZv",
  "key8": "nA499tvqfsUqR1hp3nLQbRry89CBU1trsyptypqsdvzzx4UQQLqBaewY778eotiXJbVtM9Xh9zzi5rtHwP5wKai",
  "key9": "2d4w9FsQJvPRWhFkJbcGXUND5LHYZyDD5XQgELGnPmoPyZAEDHGsddH5BF2EUdPtLjfP2Sb4v7c31GVuteY2jdWu",
  "key10": "2ziGyV2No7S6t6qn6nrMF8vxpRdjBsQD8Ah7ZKEvAx6uYzvvPUAYBo3nJbZRK3LzirAw4inmTGXz6c8QeHnPWgL7",
  "key11": "35aNurYwyqpKGvFfCM49BzNmj6fReNyv4zReJ8SyrKnqVCXU11aiKEeMMBQrcFafgo5vmA2AhsbVVA7AD3qPZ8Sh",
  "key12": "3evo9LKSHGwCYjY3qQsskCW2peSyGi8QMN81kpyfdhKqFZafLuv1Prxby7ErLWMhodQatAQijeJTDBCDZEpYSQbE",
  "key13": "4XUt7JSiT6JdFHARxtiNpFzmrjQ2uRr6ZCMDJqYiP1at8qtpQMqPE8qBjXicUDQe9MnEiYrdqbn4HMMbmgPntxHE",
  "key14": "4J1MvzCMYbj7sWWRDAW6jHJoqjr9bjzs6xgcToKbdcjUub8QrykdK7BtimszXa8tspEMN5nzJCrMuHZkitVfehQP",
  "key15": "2MypgC8MZRGTihWH1aC53yQxsxwQNPto3m2znauLribq3Jbjuo4q2xxUHpFPqjZoP8qQ7Cn1atEdJMDVsexLzSAA",
  "key16": "5NBF9CodtMHAXfUw2TvMdPEYuqLdxbdARAs44r7wTcyLMuUmbA4e5pDaKhFiSWpzWAekVCCTHwrgpLpeRPVFFuJh",
  "key17": "RwDuhJ4g2NY4ZRWzSnhtcLaHtJSauTSvidLzY5QLSp3DkN2m17BjZogWMWjMbiL4HqZverBwcLwxsCjmtgX2vVC",
  "key18": "5cGgMtUhvJxvuRy8PUN3jxHvVrNq1SUoZrhJbKBk3XUEHcBNjhPaRehfR9ZN2pvNaLnZjvZ5Dcu7mWHg3x6beKST",
  "key19": "JkaNtW7dChegYFE2i97FRnMuPgkAqCuNz3tTRCF57wEyLqWti9cWAtrognN8XpAZmaRyG8TyZ2AGcU2Wab4B4zf",
  "key20": "U8S4SajhsFfd4eNapsVpcf1gYzLkyazrjM5WMp8htJudZBaGJskaFaNC75jCgTKRz5Yu7uFjBGTYkJYjEJZoymA",
  "key21": "5DeiZEi5tWt4o3ZuceFi3Xd77hS5Ktuoyezag6ZsuzSsdgfwsQ65yeVGLdHRPV59XsWdniALfWNJ7QCoZ11F1uh9",
  "key22": "2dD95pDgUS1Ukvv6h9rzxLsRqsJVKJgYvfh8cwAG2FKQJ18ozbv1gnPJA8dqXghzbwESU2BErKBxk8A9M8dfd8oS",
  "key23": "LkysUcDJgRbKqcLauq4oNW1civYoBqmcmsUnyG4zH6r8RcvTKqSSBZshjoHpym5Hsc9V5s7U8HSjy1nFTzXZ4DP",
  "key24": "4k6orae1NjLdhPVSmu5Vnu74n53uiiztCgkz1YbN1dGyEDXV5Gb6LVz7m4UkWdiVCThzLbUYAZ4Bwjhrg9NBxQ6N",
  "key25": "49o8RpZGKvjv3ViVxGTKUpXg89ap4pkgs9evntGPkpZLtUwApgWXrq6eUEG83bM9wxP4mLrQyKrx6ULME9PA7rrL",
  "key26": "4AcX2Fubfi7HAYeBxHtT4AEMaiZrCKC4dCWS7tRy7SiDrtV6GzQpomzyedNKEyYNgYMYD5uRrToac24VDMV2jJPg",
  "key27": "5mSvBXU16abbZEMiBjtzFqhCrS5Q6Asoi8yyXhbNUUPvsu3ABNVbAJUBGDx7XtYnv16hxw1TKRCi8iPH3wH2b6jA",
  "key28": "5o43Kqj9b3sj5D9kWhnuSF9DDaBovKMnz7Bm4tgiDvU1tVmMEVxS9duioiFxMPTfnKjFP7dp2zLpqsy7H7wF2gbi",
  "key29": "ge4R1jSkcCCa9bMhVrcng31uBpcj6RTHqEaT4UpiYGAbWcNqr26HD8BvfgMN6RGEXAwVEeMQEd9ASGb9BfP3o5f",
  "key30": "3ttzANDfDnCkJ33wDjJTiPnj8x7NCEGQVskejXamhNWcUPiKtgxeMxUXsL9b97yMVTM4XmTYRinGhjoouBDHE9Yx",
  "key31": "3p2UU62mGscSGGiNe5uivbVaPRkbev7VJ7BfpH7hqKmHvTGQfYkoYjsnm3CiLur7rME2P6HV1emsNbFU46xAA3PU",
  "key32": "27rHegcyk6WL18wAaf6YLS98wx9Rt4nbxgRun6kPgSvX6F7jBs5LB6ZBADhEstwepk5ygen29LHVMyx7Kvpbrob9",
  "key33": "5Q3tt5ynDft3dtr3LXk78NqGW2Hdfq9V4WYdDHPpuZgkpDciTFSVU2kncZ9kSkErxV9k7dzNNgv4WhZyNitz2sBN",
  "key34": "4vHB8MPoHM2gtQc3BepvWFXpdfaWkTPBjxkaLxim5yMgnFz3L628qvmvGP3WtT8PDe91CbAdQtX5BenbH7fWoxwq",
  "key35": "4kDyEJoM5kgg99nvJXftfjN7KJCgnF8NiNPwrDGFgHhcFHLVLaMkjTZJPKdskwnbgraJ595mrNjG5ncbcbzB717q",
  "key36": "pPPAYfdHa6cqf7fBZVsJnybhWGcXyZU2PkZka6zajd1SsidHMTLjBq8YpHUqeJrA8CkH88QoL3yWwtCSoErx4eD",
  "key37": "QrzMFi1BmZmd75J7iysge7eitLrncTWTxWHp22dRCQfhbwn6ruta5ToHZZitmWGg1aW4VqEN3konSV1qTWjeoW6",
  "key38": "2r5EXie8owuuwNjPsqz9yhdd7UPQiAFH25XrDoh8ZD6Af28yT1w6vivsPktGNYx6B23QNJ1ZLhPmDj9YLn4kS1Lq",
  "key39": "3LcQkTH2HQ25hRAPdGYfHpq8hunjjfrKvJuMAk5BdqgHub9ZLSyLKjrGZigGFBxcXFV8Djc3owwCwSH1eNsakKUf",
  "key40": "25iLZhAsFgy5ZAHBQ9LQBK3eCMn9SqLFggSk5yrGTTkNvNXkEBYY8SpRKM33QqGC2Db3Wa6e2Q1Y2YcN3ZtbCYEu",
  "key41": "4BFioHNVWpoUpA8uMsJiQQwFp116XvAAsJspmBuUuYJucdYf7Nrm47howrdKNq5THn7w5XUsUumBn51oArvcDPRH",
  "key42": "5bgVPKKbLsE1D4mjF8cVn7JL58TjwcUpKc4GeVeT6wbrKMRQ4fNBJz3q7ieLWSsMM5xNawCkeVgjtSZMaLvkv3QF",
  "key43": "qb4ArF8yuLqMukKCwSe7BYWwN2KCG3h8LmifzcqpebkJ4TnusdJj8wsVmfeekg3Rep6Vxs2imvCRFMzMjBmbe3Z"
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
