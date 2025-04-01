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
    "5rho7GHCKpcVMg2vX7LSwrSQFULDEvTDJ3rv2NoQkqh7ioNahCmQLyhs5aHQBfMkCzDsd9A6Xo2H2hA5girjYmnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wjk5twD3TtumjZ5y777bskV4FHXCiNYoL2s6cTFwaCUrgzdoSDEwdMWgicyhKjbTXw4Q99mhmtfLAGAqonB3CnQ",
  "key1": "3BUwfSZq615zriqkWJ5UckQciJVpVyyWcxr7gSJTyodTLiq7373syEYhcUpr1yVr5mKr6vhYnnFdkuDXUmdzhS8j",
  "key2": "3mfpgJmyFLkwz8SvM5gVuxUV6CF1Fe3S6pVrcWXr1cedymdprszoPbLr6VgL1WrVcdCn8gma1qsSwTwe7S4jAztU",
  "key3": "e4gcZQwXUGTuTQGu14LtcrkBdS3QJm74oW5VW8CBm4uXkfp7qxyCXrjxYnTs2QEMdqiSoohBmTbqqMsgk5DT8VJ",
  "key4": "yTuiEe31MzgH8FPoJP86QosT4hxqCbJ9LavKwP5cC3dkZerqfyvNkJ772sTURA5FzJauNwX44TPmN7xgn3twvD7",
  "key5": "45cWU2aoE73zad1kkZ2VQyyHkUKyFC6rC937N4JubggmRVzD1wPTJkNStL2pc9W79MUhDW897USTFsy38Voriwm3",
  "key6": "5m3iaLvzSSsiLMax5pnemL1ZULeNUcnxKXm5cJu8gYzksyzXf4oxAjT5as4hg1hyUqmDrkZGZym3nA2Ly9GKjgoy",
  "key7": "UFddFhZqEnNJDX3DMiussnm4EANHn66HakT9BRUTMErJwrUCXPBzhkGS9izDtcRbiL19FuBKNTjLzg1C9nbUsy7",
  "key8": "5nBVthZaVZfg9oG8rHuMeePKEMMVVnTLnygdKU22as3caDRRhfrWCT8Lu3aqRREx5uD4zRtyrUg4962G2khvRUDv",
  "key9": "65B4cM9vTBkZTd4SDhMiv1B52b7dxoBnJVTQb7xh49ZotCRUDqpoYjdPwVtsJNmhgA6TW57CPXQkSjv6XGcNXfMW",
  "key10": "3XDe6Vjjxj1Vj1n1pScjJ7JeaDxSqbSVVqSzuCvdRpvGw7Eb2ESpbhcFoq55mjm9jx62AGktKPS3oEdLQhxX5udw",
  "key11": "tCmJbXWcEMPm8eA1EYMuW4GqMRPLZ3u914DRDK4zGDBi7t6ksfLYEDKvSujUQguHGEqwGcpCEwVmmAiVdni86bq",
  "key12": "4N2SN6fiiPLLXjjWsLRmjKcazeSqQTnMnMA3uSvvRRCaCg5KaHQiWc7GkjmGp2yQnej2TusVwjBbeB6bi47QkKpo",
  "key13": "2k4a19ULE1vuNLq9zrjztP2TVE7kSWQSW8EoBU9AHJG97MVvP8MgtMYv1gb7JJMmsLz7JYo3JWwHEgct7x5HkZ6J",
  "key14": "3Wu2gnJP6sutMMoFXLmjDSxNx9h6frDYjgHbFVv6V9Kudzfz2ykEZHZuHwx4hLhXHzVLuKue9SVEDfxTS7orwsvt",
  "key15": "3pDV9XeEEguvDWN6NxYmgHTZGUaA2TDRwCKKUrjx9oMMswNBpfmQ4ZyidrP5VftWdEoBoA5b2DCSmcggZZFMuai3",
  "key16": "3boytHPFBHwEZujMjNtoVvHQX2dMq1Rxr7vFLnh5HiVJac1xgcZp1QiC8ytRzsczzw9KhKfNpPvmNfo7wzPv1aq6",
  "key17": "41hiJrbMGXTKgVjKX9gDMMph1WkSfsr8VoNjpN4NrDxKh34NkvCyMF6o9bRYNEpLBX9sZPW9csS4BJMzfDw2sPSC",
  "key18": "4zAjiSANZVygBW5B3cgYDqbpD8VcqA8tYyumW2PJ6C6Q75kgta7FfZHBCyCDyDCPQRJUsSSKBGAfQNkjQpgonNFn",
  "key19": "47FcRLK2SJVjgoRPQLF75YYLRV2WCuNpYADbon1vtBaNBUKtJtqF63ePKZPxMzzYNch6s7YJEUPpRNX6xaUvP1ei",
  "key20": "5sbGdAaYMoULnb4YzENf2fCQSwyj1GUY2ovTHLfHv2cdcNCXC2UgN7vwDjL1v73hPo9APV8VHdpW9VQPgQ86a9St",
  "key21": "iaicudAbgs7ZJjnBJxZjUBy2o7nWyGJKxppu3PoJ1UTfHQ9CWdv7D9buNqcopDZbbpa4zjHYGBGbW3JekUxNvCm",
  "key22": "2TSzyjdm7sRbSCpcRDiQSKtyQqvk6bF7CTk2b1nE7L7tr4kxZuPu4Ki5xqS5ZQvDFKSUr8gQKxv7YmPM1jmb8jAD",
  "key23": "2nmjnr9h852K7LBKn9vyxnRiuQ7Cp9X6vHreg9ZW5nptwiBHYtvYrubetBfSkB1RyiBZjGLLqQF4mA7RdrqMcaNn",
  "key24": "2nATamRZi365W2Nthcd5nuBQ4Cpyod7cs3rJQRxDtZDJ3AWkwq3kktXP5V2i5kAQjU47rskdSR5vT6yXfsTsD4tc",
  "key25": "4divjDBapGGq6SAoxw95wgfVeat2hgNBhA3vKeRt1sVAcpbbJ1pbV4ZJNo18G5V2LfQVt2JXeHNaM3gBApvQXpRm",
  "key26": "sXmGEDgfghsstWS5VFHZRNvmwqDC2Q7MHcaG8jGCqXLcGAbWBxSQtRi8dKqSetpp35gePJBDe7kdGNDJxRJovon",
  "key27": "5xzUMsXK7Y7GrwrtF3U9eazDuuMusT31FfLDtgMtc3BD7hibJpEqiGtsmQdxr5a4oHodYM1cc8Xw77pJKT77M5V4",
  "key28": "3ixpihQSpeArJ7cLCCgq2MkxjHhJuge6jk8ozUqL7SAUZk8Wy5wiDWH6bd33KKumtfM5NfXJxmom5X8LJdk2hN5",
  "key29": "5nNuey7fPGCeb42p1odn4jzbef5zTR9Nm5fzThVKWJVvQXbbyYceoqmnKzKdmFUxbMpRJkmo2pE61H4nTYHgkkyv",
  "key30": "2EiHwAJtTaWc6oeQPWG7gxWUZ24vFXFacbw1FENdRyoEgVsDNSxtba5fFLPDATmtGiuaJfEfFxh9XrtmW5BvPM9H",
  "key31": "4F191FjedDCuTnKmUf67wubaJSXtyVqe9zUqeRmNMWgMF7dTLG6bP76wVJ5KuF7xeTRJZz8Qz6QGseRSoesPqFgv",
  "key32": "3XhD4FKmTT8ESr178fWKndAkmJeecTQ8sUQiNFkr1iqf4gHW8vdxdsXbZC7L4bxpEtGYJ21ijCjo8mQwvruXMeJn",
  "key33": "4jjQd9BxVuS6xgp8J8owqGSKmhRUsm9mm9xiA5gPWnSrCK9cxu228VRgB5ByoRAjzUHsnbrxg5nJNTLETt13wc2t",
  "key34": "3y3By8h6acBXBmdQmqQTzPwSEFfK9ppG7bYMFpuSJwhJcLDzRHqvbLcE5jxBdFVMToBM1sWzs6Wmwrsvz2XhpdBs",
  "key35": "5N1NZg9dqbbbo8druFnoHri1ki1hjxmN7siNjHjuqsCWPx1NQjs3HSqNokRPDAbCkmE1gmFvq7RY7WG2jaTFxaSc",
  "key36": "bgF7DzYo6ojgNPa1xAYPdbSnb4TvQ3susbtZpEfHNsLqGJ5fScbDXzXdodekeSnnL1kB4aD48CJvU4wizemM4Sw",
  "key37": "3P6kUE7H1pV2cutAdahVhQJPbWrMNQ6LdB9Hjas2FMsT9HD7RvJavCPRNDQ8Zvu3Zo68QLfvAD6LYgeeiVdRQNEk",
  "key38": "2mpoETynghn6j2X1v8cNw8fJt2XPvDSwFYiHpAf5eooEqNwRR1my3eknuX19eDGHxUuLrGMwaTmsPb1pepfTTm4W",
  "key39": "3ygwgRQmBqvhBLkKcjCtM1sdY9NJTgvhcyWVBTGZe6vxRMmkgJRGMaErSXnFPdmHx8kSeYDPBM8s2gVvVxYYwWvx",
  "key40": "32HhHQf42APmBDRjTPsCX6ak8xcAXmDvdmDaSwWBJTMj5yNh6F5NoTH71tCAA2Lvq597rquGTgkECqFMdNGMYUdc"
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
