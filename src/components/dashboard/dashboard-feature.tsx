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
    "UtxaNZ7j5PJsMPPKw4WQxyn7T8nU3WdGwVQGBiHVNXKacZ2qp3DsGiVdgKBMpU2xjVL5qdHWqi2rdMwRbh931jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JZDoWaZC4Fy2TtRBf8sp46VApM5RJz9bh5rZz6CjquZBdgg6kEqsJpnqpJyotL3jBiJ4mFQA8AJqPha8K87Qj6s",
  "key1": "4USiYxBsPfVNMaW2dcjmve95PdUFMDtoDAECkQynkPYxq2E6YwLBhhSSML94AY5vd67SgLD2F9o8HJi4bK6YZDsD",
  "key2": "4Q2ELbedQedqjDGVKBNRkZQTVm36BqdnhHV2dsocmZfW1ZBW2BKXvtgXx9FhBHEg1iburwG8vkozj7C1NvnjqNDG",
  "key3": "2xv2hSsLbTt4t8cLJXEwG4BAPM1U9VdyLoB8SVJbaVGEyJnjyx2TzfMbaTi8GLNsKDJi5UsK7GCUrpERJFhCpv4K",
  "key4": "2mJSdZGGAvdEUfR9nfteVMDXWG19XSs2GGVutRUEaHyb8dcL539JFk75azBUrwgUu3GSccTUEdZQA8kkKZoN5szT",
  "key5": "36ZqLGsUPkXjHaMHRRNKwJ2hE2CnVDQZKVLZFybiSCsyGrKfTbERa3yq7JMr9tF6MfbQsH6z9Ep67L4ov6dZHaG6",
  "key6": "3qzcEbA3t7H8cXA5aEQPr6Z6cvJbUVfRRS15kzm4AqsLXAXzvdeKBcZRGE6BqWaR1Prk86WuzicxBKY6xrZuUkVf",
  "key7": "5GYw6B1CGPpWnzjGdaNCtUpfUeZx2NEoeJVLfHJhrHg5TgmCYn71nqtcSBBz6rugTddkEsqs9K2CCgct8KoJeG59",
  "key8": "3YV6MJSmpzacxM35GYEGsE9baS5BJ1L1M9tkpELH2SbVY2Ky7ZDePBZmhDV7ACkvvJanf9N4cyFP5vrWGR657trU",
  "key9": "2CnctvontkRLRThQQ4i956dsxULvLCH1xcphg97J6po45CwWTgy1tB6ymWoX7HYExfTN7ST2MrR18j32BNLBmfYW",
  "key10": "wbFgVLeE4EhD3eizhn7QuRz1txM6MqQXEHjgGDhDoLFPkdmSwNhuBbTXX1KzFCEkmnbMGDitgWT5VuiEHDthWhZ",
  "key11": "gWRJufgt64rdiP9GoRGFBqqjqmMiHXBEQtARA7m5YfTJPiQoRTSxTPmuQx2LzJHxDQTv535TynXrdziu7TuMuRX",
  "key12": "5xvzxrDyK5i262m384dK6LBCuKcQWjBxXRcmCa38mizhQjavQPHMyBzbHi2v3w2xxbYraXUAw69AioQXhttEqxPr",
  "key13": "h22d5oLzRErLaGzhzVyxn4J35d6kdjL22TFSEvfKbrVzNizj4ftFmi4azy7Eju9n4LgxQP4xGKyEQ9qxK21ceBQ",
  "key14": "2oZcrMtFPkDsnQ9GEMfMYfBaJSiDrJSiSikBw5fjZy4t8UMuc1ojbtAm3hpXdF7HYX8sjXSG2qceNFhrcYmKci5",
  "key15": "297MvpXgjGtArc97UoAQspdCekrwk7ZuH9efgSMHP6Qwn26jyowFDHKUu8czVNwNN1gAnXuwxJJrLJtWw9CEy59E",
  "key16": "LpWwTa9ArRQYXATGZ6gb8QhZEzrHPB7hDMDwErUbCMUHHUSktZpKo7pLmjC7jqvkQsqwHKHr165YGFdKX7CFvVV",
  "key17": "5czYXezTtguWKGbEAEsM6Di4BPZKoxkFTbZJtwubAt2UCkdonXbwF2JgsXaX8SdnqopBYRyzzfayaco1U2LV5aDz",
  "key18": "49NEFBRzgh3XmMbLSb86DnfRHVqhyAhwoja24z2yoD9Jn7vqCHH4rXeRvgVbrBM5D1LAiMjiwJ4gBzf12NC6SoJD",
  "key19": "3814CjdLtsEyeFzCSjp7jfan9WkRa5S5duUiFWh8R9AmkJDd7x6m9NjSfGqtK1DzpMxYPVBcSKucxRGDiAY2CcrG",
  "key20": "8AYCfyyCSaKh8h2JbonpvtzC5BiJYZHjWDt4hJwWELYUNDtp92t9wsr4fu71X7X6t1c2JdvNPisKm7LmbK2PMh6",
  "key21": "56Uzq22Zg2NWmghRdSKTwjLrM2MF6yRp95hDhhKuePkhbZ7fj2BDe5yQ6wYUQSSyLuq1AdKYo32mi8BeMC1vVfDV",
  "key22": "2mKagbxHtCyyH4coXwFY1pL2rvA6rJb68LqPtpn1NuitD6TrErj35kYHsTKR8WsZ44SBRTRqm2X7oxt4k4nhsfrW",
  "key23": "3SWYx4EtKUNiFnVxrxbAuEKw5KREmBXG5ig8sHWMwiJKYP8nk9rkcTmtktazH5ZAWuz3djwowcWT2SMz3m74oa4X",
  "key24": "2wfAMXhwRWub7V2nLJbmvPVTijM9ZGFfpyNiopv8M6bMdYSUc27S6944Ep2do2r95MQnUx7WHAwK11MpWVz9RpcJ",
  "key25": "4joLaVDvQecgUPRZatv1XAcQ8tV6gyD4N52x1c63HMXr6sVenZo1xN3WyXd4CTm3aZwaCZjbAkaELMjncY3ZEh6S",
  "key26": "2QDStp1shxKC2YDdWhkv2oHTmL3STEi7WBRNNaasSPCArt1BB2Jutio6wq8hzWZ3tFnxoyyEdeLaxwLvgRCrmyPV",
  "key27": "GKWTX2Dv2FD8kWzRKDZrGxYXMpSEfNw8pGQZQwMvzetVTpYP99B3Uh1kVJnD8bJ1n4qFWGutmjf3tpDZhhaajpN",
  "key28": "5DswCHsmU1e4QBXeo1iC8h87Bq3hkXz4fC1kyRPGT3FbEN3dwwXeqPgD6UMbNVFo2uqZ6LR9LTUQSnMBC9ugVK2h",
  "key29": "3LccjdJmf2M7op3aFCJQRDSEb9KUPkqSetYvyvDMcpHzVT9KJcqpRsXy2FkuwtQCih739RkKsyyp4Tc7aDPvNRJv",
  "key30": "4D5WmpWNxjDRc4Tw5DkbL2JQkYH34dWo3cdN8833M987jrfkkwAGDsj9TyZSsPDS5H5LxvB3ifwT8paNeoqDwzeG",
  "key31": "LG7oqU3dWmcYKk3bG4MkcjmzRyojaigaSewzSrh4qvGmjMsPSnVgwBpGm4EHNxo2LEw5v34sLAZNmwGiPUsVY3X",
  "key32": "4dnCpHpxXV4HqegjjK2EqGfJwS2WbG78NZVA7iLMHYBb6ByZuNjbuwdrEWLAM7Y7rVoPBA5FnmgqGVvEsF7v2wte",
  "key33": "4Z7xYmHNLiqQJpdpkJXDZtYY3YhZbi9xRqwn9ps5S4wsnfk5bYe9nyVQc1jb294PpCbcA85ZCLuPrhHVxPVpE4vV",
  "key34": "2ErRkxL9x8dXGyWeDVAhBaQ7b1MGHVtzFWvLEV7eQ7NFTjhkcXymSKTGja1ThadursBrKwhsPQgxpyQNcyRbRuMu",
  "key35": "22nLSkkbv6rzE3v4xKjAPayR57nkbyDW2VDpAdQ6xB6D81vv9wP2ffxDkGxfdL179jCcacMYygbAk94JVQmaSYNj",
  "key36": "2yWP9Hhb7Eh9T89g8QgHVMMQJDqrVqURjj4j6FK3VdiuomsAaGUdNd5BUbjVKjWv7C4Eu2eXAmNaFqxnz5hUJYYD",
  "key37": "5NBirjNtyhuqLj7xazwtKzTBw4GCgXYckzwqCd8VvEfvL2KAxR7XcauyYZSc1gvjkhsEDyxjyigkvV9fQTotim3z",
  "key38": "2hEFDPpH8GF7n8giPNGWKq4DWzqYUGH447WvpAv8P2LZAWpGHPJw4w1xHGnXHAqS5aZd99gkYiEE4WzQCBFkKf82",
  "key39": "Yx1o7iUgnxZqqr6UMY5MNhd2S6fMGBSh7LwipVKvyrSnBXdrNZJLEiSQq7Y9GoxBcPEtd77eExPKV13jsSdJ9SX",
  "key40": "2bazM89Zeh8Zas2tB45Cc3NFQRCnziTdzDvoaakw8BHRjSUxsrVi6QyuBdHb8rzKwvXD9Hj6t4kChrurVgk2o71t",
  "key41": "5xSshTJxJWQoEaRkGBT7j9HBMmeeub9Pv4Ud7TXUKafPHVYW6ShFBpLBJCtUZHSzrh5Ng8P7s7dhVSJweA8zCmFS",
  "key42": "4jXPGB3n4yw4g1h9DXC52XFTxv7bDw9CpXMWwyPxx8PhmjvQaSk2FPakh2zyFUGaKuCEA8p3PcRJ4AuvJK9fkNV",
  "key43": "4VH8qc8WHZtxuAyWEfWXaYNx5vPXXNq1cZstKPDdg1MTB4Dr8MxHtEfHL3j169rvZtqFfZyqWVkEjnRragMxjGPC",
  "key44": "2xbBjniZNi16Q6Cgd4gSfFQiHnH4nUp7VQ4ejCS8gWWwLkqWi77h5JW8xWTEHaKKkiyQNy8HxXHYiBRkyej6tMNL",
  "key45": "XAm1ATVJVKMFSC13i3KimmYUWukBtzyTxkNcTtRivhRX8ZorS6Ach7pVzYjJyv2ZZsNvcmB9KCXUUz9hXycwo47"
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
