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
    "ctVRMoycZp6iGHZrh9sGWi5ydMUEg6UY42hFm3q8EDbEKR51LxoqWxvqy7DrgNbJPrWtbv8L2UNgz44Lxw8VrVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JDdFWzUmQ1DBuNyR9asQ2wwnR3KnAmpXbgdToH9sRyGohapKmS4j1WRBXy4BLH3eDyKx1izNBAPZPkpvbrTRTGm",
  "key1": "5LTxRjVZLYhwPFokoDHdZeSmN8hMTiR7NkbyDQez4uz2g3tnidWvmAYnexWqKhgZayMhFmDRZtiGgnA7CUk8Ln6H",
  "key2": "4zmfqT4PY2T8YWHMCHbt4jqtUsAEGcQr3jrttFvGUmv14jeBxdaDuPpwEn6JBkBbrZTUz2KW2Nv6NB3STugUMVXB",
  "key3": "5a1yKJqB2xW7aNLH6ZDBCVteVYac4fq8xfXembvf32CZJq5Zr6eg6438VmrcQNyFWEmQ8YZrdvJ6SPQ9idRTnnLN",
  "key4": "27tYErT2hsDhzAgXdNuvNaZskVHXUupX5EwZ82xtsPin6xMzZhZGQywYxfArCtQL2oHndfqKtkJF9Tre2XdBQAec",
  "key5": "54P8NpihigvtLDTVasoKgWAZ5k5SRfDzVzyx64187XFcGX5fnrqnGP4TvURixo97BRjCWfVfv243t5zWaEbdRvSf",
  "key6": "35k7nH3jXUq7iMjguQK1Jzkts5zBNZ8NgtN3PDbAnEWg6NoZZhozduDxhVYscPd2xC5ZnpJLa7mH5UBMZeruQ9Js",
  "key7": "4ArKD7HnqTTbPPh4J7euXepMriSoCDJVqyiKxx9keRtBr5BCoBAyZkT7c86cabMvmAgSN3FpAaAFbkPQN7z8HYfe",
  "key8": "p8DuwAquBBePP85hqCGdn4qXff1fq3ntgowY3NjDw2bUhAytEYeEt87bM5aGmGpwfooMvFQMRRNEFtgyL7at51u",
  "key9": "3s7UR2vMD7MVa9HybjUpVyqVqu1Fd2oMXMmMTHd6PJY6yv9azRHcPHyQV7RqysaWzN3cABDP3G2zi75AzZ8nTdMi",
  "key10": "5A3DyESqhvRL7g2h8YQH2LPVYiSXfoGtEtkDuAm2SQzhTfTpfDCep6vds4C84xDVC9xDb1gUcfP87trvjNowi5EJ",
  "key11": "3rVZg2UcNaJ7EunSqycit8VhS3DzUfKXaQtDJ9kWDdGdbk91YZLTyMsddJhkHhhgwb65tpTGTmrJbvkH2rGPUtyn",
  "key12": "2dQz7r61nJiYxAPRZvPhJXrfkL4s6J6HsFUxYuSTrpwYLFX5xYfVbG9J71RuxerzfcoayWVuXZDd53WkNCDYVmxs",
  "key13": "5Y1nLYUoCsHepAxTCLNqAbHPVZEVv8AoXJi1bJXHSqF5f3uXBMNoncLQ18sWZkMZLttQg7P9TrF8amPYrwN1ZLNN",
  "key14": "37uv2hFeyog9Pgwx5Ywtc6wTpfAYTBFFsqMMUoLi44TRghVVmgzvxPFGBytZjFrzdVFY5sxJyUx4ChyuRFgNMboV",
  "key15": "36qQyzYw7bsy31sCVssetRLgi7muYEJSssnCSj3y7UUZ2BaicAMScy6yTpy4haLGRUHkeDdH2wCYc527VkWL7J7q",
  "key16": "62qFPZ2eV5kbG3dmFSfTHzVpvFNGsyEtLH8Ru1EowgazcNM5oM5xGcHTaKEdZRAqVee4tNXGo7EunhnX1xWgDrSe",
  "key17": "toq1KK1dTMbRCvGcg7C7icSPvjD5yKyXccz6RgD1Y67bfNPftGB8KFf6cH2NCdGrDrokXkuzhXEkF5HGnXwSjbK",
  "key18": "yB2guvSMXiQXUcNrdsw4oDHPofoyn3urcUPhoGGJmU2C4if6ddQ226XcG1JDBuRXsQZSiDsc2EvmzYTVvfEwtX1",
  "key19": "5GhFXHt4kYukTqRLwUiAobKLn9K4fkyM4QKogcU1qFqSWSz9Ht17wc8GzjYUj4XeTSbHuyYFeMXFEZs8voUUcP6x",
  "key20": "4hAFNiBKPGXC4wsfbRzwidKrFbkuMtkVtzzjPHBKwnNYqDRf7WdkiJEKjWXjMbZzFzCsvX4VN2HQY3ncSpgdfd8b",
  "key21": "4TGyADAhRaUemZH3bRXfxwmnEEoQWBJeZEpLYvPQTJRQy2wv7KpEYdnyHNGrptdpGt1Go8MC7qGTMGi2nYNyNDu8",
  "key22": "5364orhGKvHx9P4rVXTjpNGQBCCc7u9xg9ZcH4PQxcBxmj314Tbbge84FMmVcmC37ug96PzjBpC3Txhw9xErx8zf",
  "key23": "2a3noyvxyVPUyjU9cNCepEHFbAUW9pKw2vcVJLfKKP4ioqram2zqkcDrwAe8DDDWrU997RBWNUtRg2WNKNpfEMdE",
  "key24": "5xHjQnNsiDLdkBzBnwbNyRLxEKkwMs8xGNJQuX1CCwiwohivW3U2DqYcny8WhuwVreMLULb8KFwhVtgcztLf7CPZ",
  "key25": "5HFfvwjRdVEaK1nUJJQrxbXPWfr9wRbka5iGqKFtsypbNsuHdJM7aFqhVvLg2WsKJDSpk6pbFMpu3uHabLv9smat",
  "key26": "2wuMRqh9zj3usJGKRPZPuxDAXL5ATMGRBjNmWvhjgNekh4XnYjX3vGqbeh9qog6Rx797eihveH7LxZJ7t9QndwJe",
  "key27": "29JTdwo4uXqgA2BmUNPpEdHAqNKWvEY3yAhApziMoNudyCGFkZ1BaHeNnZvNTSh2Sbg6vi6DUzfUaqtyGp6EdRTv",
  "key28": "675xEyB4Qo4PZiLsRTsex5QiqMwGGPs4sGpoAjBHySxYW41q7ofCEQnZdtcARPaBfxU9FyR3RcsM9yGhXF7FNaRb",
  "key29": "5BPCzVvQBFoJc4iR6aEFTiGS1uDgFi3VGsQK9ZvmZN9ZUMeRtXPVPEg6vpmaSq9HpP4QFGkCQYnkU2FX74Kn7aGU",
  "key30": "4sLDpVxtE7sYwx1ihMEHducQDT5VBSrAL8RqkLiCmJVq7n82GMe8pGFBZFm8TP5VuDuAj2EMQAiqLakqVvRrgK6q",
  "key31": "32Zxw7vEHDnQkAwfcdcCfg7Cpi56z9ihcBJ8dupNwdXv5J2GXoahKghS12tik3cGTE7FR2oRcLRcoAboJ68L4oT6",
  "key32": "3Fy6SxvpaKYCBYXgtZyw66J4JkBCxfSB7TUpqinzjvKdJPAmPqncLwVUcsyt8GKfRmCg1Hocu3q8BN8cXSLFDtGs",
  "key33": "5Ninma89cyzC6ZbSbXFGvXrMgGQkhVNtLjg4CWSP4mAPyfidvTikttcJ1NiTsttaz7y2WKAnQTQ8EZgbeKoRPS3T",
  "key34": "2MqGrjmwM2VSfngqVVLAGNDauWji7vtfj6Zo6AcTX2FMNmScQwJmaMRL3jMEyydj2VYmEXaSyorhi9bwhnuWaf4C",
  "key35": "3FbLG7zpciS4ogVnCTGxUM6DXJXgUiC8kai69N4EYSdPifCxPMn5BFmeCK1pgVqTTmuE9KM5vTU3uA1gewT1Hr6B",
  "key36": "46brJFc1SgMEi78EPEryrNGd5nCjEMB8R5wS3poj9ZZsMUU8iiHX794TSUXc9tesovyuG8NnFGaC6M4DBDRL7r81",
  "key37": "vRMSKafDDrKV4zH1Rvd27UStCn3bf5cek5AChE8N6ucMBLmJpYpfQ7B7WsSSawuCiCZT1xn9uxUjEpfTnEaGUG8",
  "key38": "5QddnUvsnQ3TuF1tGrEkHUEWXPjc142ByK9H2mvCDmdzwsiynGWmC1UNtVfMy825Z6xBrVbAwoFXkq5TeM2qjwEQ",
  "key39": "5ScZbzGfWgbFv7ModsBT1ETWSL9ULXaj6LD9oXWyfRFR1h3jzypGFgbmKfzHJv1pw2SJHANieBC8LDivpbsAzyw5",
  "key40": "2MEbEi2boiS4hQkM4R2uJSJgyAwt739MghdNDP8CMfC5r1AagPio81si2G72M7Cq5AUwf28A5ppRPcccqavmYQ8v",
  "key41": "2w2epRFkc9Av33QQEq1CEiBF8cX9YQN5TUkYCurrSqHcA6JyqbbjRybtWRvyhXxjCVpMH5ys8PYt16B7PfaEsgrH",
  "key42": "SC3dYqo2er4xfQp8e3Qq1t3VeH6ffQm5qoE5ncb2pvnaAqUriSDpG3mHnSAidWLRvCdCjeVuJRirsGTDzPL7irw",
  "key43": "4GU9bSBCma1Ub2TjLPvmyfXudPJBbKZSNoXnNdbNyvt2PE2vXkNiedL9pUYBuzfdsaF5CP42mmFfb5KMLNQ7C67g",
  "key44": "5u79mNrDKfHt5VALU4w9G5yVVQVdApG7XiyGyTUx5Xhm3kPkxAWqkYqZzdKYUeM2y9f2Kh3jDPfRuqjZW3CsCLck",
  "key45": "3NwxF18ovkS4Zdi25r6RadRWeJTy1CppcM2TBUsonaCYuTUkmGaHRbdazrSRh9S38Wou7SiXNfnHGJMdcztEa2iX",
  "key46": "434Cek1qGHmzDgLXajMGzFKKav4GZhsxj7t1jTtyaGyjgBDP4eeAN7int7EG6yzX5aFnHgieKnkD2h9VZDRWe9xD",
  "key47": "2RQ6R41FZZQxVJBGKtEnYqyiVPYwSaQ9EqzJ2LCHjyLWtAnLWmiNccYRTL1g6a1sRcSgj6wWBTP7AGoUuZfUrSzL",
  "key48": "5pcbzwH8id476YuQt2fRGRqZuRCSWziZ7RoG2dwr9nsUtQ2hg9eeSKWHkFXVH5QtoweDbEqkUkuJjxZNe3vjYtNo"
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
