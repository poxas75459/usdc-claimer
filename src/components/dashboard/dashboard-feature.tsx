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
    "4ZwVYBPYpSzK8qVLNbActMfXvRDkEHwKcQVR72SuTKfpWVx6A8Jnj5h3cHNQHGziz6x17ycYcxddLPCNbMXF5nXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53oTfAg8LVWQASWJHK3dLVVr1AcD4BPi7G2YU3DPFKMDosMC415ejndrjRwqMtE1zr9hnnDPu3fqmL9JY3z3oLWm",
  "key1": "2MTsm7QXRij8tuVApt9kwv6Drv5jQdF9s6rtsfGV9JhQAC1kq8Be97FmLiCD6pLhYWnxh5LSRDnqv3eNYUNnbMGn",
  "key2": "2dbkjvXtwgmauhnHg1DReAaoAtDb91W2QHQaVHgFih4rp9hYdCiaZCnR1Px5MNiEqvY1KC7iZ5ihCBm21jJPXutX",
  "key3": "3Daargw1HTtBCKobpZqEdKdUvrCPJayaJrCtnX2bivUEiUkvpYxjG9nqE3wGKLrG2CaZEeMUWbG5GqkYaLRHxRqB",
  "key4": "5cXtSzTeJN5VM46p7424ffHzYjUwXrxeu4hWus5Y31S3bREmc8WcJhf66UCWSHA4zHLa3U2uKkAU6sQfN2yXbCdg",
  "key5": "2MpibsR98ChQzB8C3ZJF9DHnC5i8bH7PM9bVx2FBksBvAhEjqHhZiatmpVXvXRAneqBpqphZryoTYK5LA4CsQqYq",
  "key6": "5qHwzpN5ByowVj9xjWvjSadxNxtrmygyujBK5EGAsFE9SpKXBSxYNrfMapgcsjDhF5Zkg3CTaXwuf3Z4MexzTaxx",
  "key7": "43BJpFhoMpFqi6ph9Kc9erNS2vmRq2Q822AQiEheyNzDC99AHYSyP8QiynPNdZjjE8bTRmfDFxiz5bAEySAkrShf",
  "key8": "5YD2FmtNBZHg1Xzk2ByQHEfZU9ZCvCRt15ggnsnsWH3hFEsiiXHZEQM7m54DcLpGraxb8VMQzw4gz4x81FSZ4uvq",
  "key9": "2BxQvVSzJiEdcTfG9snE4sYWNevXxwfEPHx8PgCfMB48vcmXLHDPtjFun9kieDcLhHSWKWYcytwWuCthHVkrjsM9",
  "key10": "5mKxNnM8yzZ1bgiAFypEvWPqYVwqJNGznXobS3cRua9SgR6turBTP2Vn7V9C16CWXZfijv4YPXYhdpXf2tpS9whw",
  "key11": "4cX56X6a13emNtCGi1Xtvme1n5Sfx5hEjWwwa1kvcGYtx9fQFyW6jvxSq8uKXKYsF58U1UXMQKen8AxRNe221TaZ",
  "key12": "SHAWRU8XQ6dPW9mu94irwk786TLhTv22JDVdZJR4XmchzBkY41Yb8RNFPJ4Dt2D8M91EH7or45gqikpawTSStdA",
  "key13": "YDm2ifSWqWyR3w1qpmsh7gjNSRCaNwgPwzfdecgXyUrrgfc4Kze9WxFWENKPmhEqRUdCyHuFWAkWFXB5s6FqMfp",
  "key14": "55AtA4n1mDytFGyWzELooD6fmLx74joViJGekokSKj9Ba6DV9Kk8xvkafygfXGPoL75S7ZKbFWYyhF6W6SeJLtA5",
  "key15": "2yiB2GQ6a46jpkCFnXAgWAT8LXhYSDoeJxmeoxnmNWCsrWcem2Hsz5Aju8v3agFXCknvXkPzpLTmWwhnJMJX5a4P",
  "key16": "3JDWPeXwsz1yTVj5WVdoev3TYR8vuSirjy11dWWYqfMcKDymJzsLSJSyBTE2XgkvgGyAixNhpiYPAQi15h3g4Jvj",
  "key17": "55pQP5zCt7gXcp2pgGaV7WE2oyRkPKvw9FrDKDonwM3tNkX7aGqSo46n8afszRQvp5zUqSKbtHytWexjYALG3TVv",
  "key18": "5fzTnzN2nF34uVdJp8YoGGk2Zj2y9sUxJudTmyLqiTXJ7cbcpBC5aLkmTepp6PBj7T67BRMt9hLuNUNbum47A1jH",
  "key19": "RuAnZmwfEwMTA1xTNZ6WTvyLqaw2VD52ajWpW3Yrr4SUCMiap1RjGzobqyFwN4dqxmbBmhVR7RqqmrUz25Wu34L",
  "key20": "2szr7u66uy8uZ1xMoST2GtQVjeGpDpyPBv9m8U17avZVTqhaaPCyEihyfW4ozuDNRZ391pqwy89W3iUzJP4h7jAX",
  "key21": "5dbNhcEfsauXi1F6S1U6w8cfqgnhTCt7yPnHYmRfbCp1RcmDUtVAKd3MK6w9bCRQ2S5n1sk1zz9w1vJLFbsgGT4E",
  "key22": "QACXfFeNsm5WQFoM21Afaz9UFQ5WdKM9gbvDwKoh3FvpDqkEUjLykzGSF2GHjAJxUCWXcVGwT6cNfLBFRZ5b2Jk",
  "key23": "355yNuE8RD5sHUko2JNKsM3kNH4mDq8VPmf7MNkKySHYDkvzQdYuBm2hcKVX9ixG6FGYarxSN1p7UeX5379vySCN",
  "key24": "5DFpU5YjybEhiFuJcJkUsLsvukUp5vfYMUKE5inA8cbZ3Tv4AZxEi31A84KWJmwisrwmkEgt4Yznq3GARBJdzv7a",
  "key25": "5uSt1kvaUiCStwegzNQiGQGgpRm6tDqcmy9bbzdNGVx3WZg9yTA3Q2rawjmrbwMGxviDEmxNJ9Q9WuNiGfJYspn6",
  "key26": "58VPyFQX5TtkfgbdmhUHc73FTh2zQuFvEyjgb7pg38UC8DuC38e44Yv8GugMYRcAnQEx6tZUFYhm98GPbr2PWaUM",
  "key27": "r9Vqght8RVDmAZ2xzeB28uvH6EY99D8kUntXB3YWQEumRFqDyFqrj1jSfd3PAn7shnfc29UqS2mciRk1dus3qpm",
  "key28": "67fYBNUnKEU7tUbYcKpZnJWtGAYcemQmsuNr33JNSBN47BGXXMiQsCPo5VWYi68Xn9rhny1tbnwFhBvufVbNivr8",
  "key29": "57Ko7ngEbLWXAY31dtTwqYAS2fsLctGBJRpqwEHNU3LaP3VH3oNwfmoo5cKyEevVET2H2qCZrZEJWhQngNsnopTz",
  "key30": "4iXDpDoUNnqfGjBgTcSCxScBCUVGkuYEVPdzGw1t5q6jXjtufRZAMdHeg4r9r4rMAWL7hBeNg8BjUXCjTcKd8yop",
  "key31": "5Vdfg3pv2ZWrrGCWqaVNwWV8LZwfFGp49bofZtaaBCBuQeVoXhaFYXsGBXMK9qnG2ggi17oqFhNjDogDx1oj7Hwv",
  "key32": "4AoJNVGsKutQ8XycYGLgZFSoJrGXfB3WJCGwHXeyaKTZEqxg779DqDJWazN6BbzNPQUJznVB47FpBZtEvqVj2AUa",
  "key33": "2bpbszXD3Le2BqWnQv4WL1rYfS5x7bWkLQqsjDWfpHLfhhUBrrcaHnEX668AB9s4eFhLiGJ3TRyo8VqKkriwjgw6",
  "key34": "3Hbu8cusqJy1JRsSPHzh62JRW2tKY5vmFuQXheGE9Gjv4DJeoyPe135jZkMipcSKHqyX1u9kppDoQSnMJjupzUYM",
  "key35": "tjwQjH2XzHgzS8DtVm7MHkFpAx23fzzMixxyhmAKNk6RMkqYbHivKvzy7QG42BEitnSynsZiJ8nRChxR5fuhmQZ",
  "key36": "3FzcCtVAqaHhmesYAUmUohWuem6bbbEsrUPkiuQ5JLSwAWHQL4FEa9fw1kf2VGGyrPboLKet5D4bZfJxBSg8xFNp",
  "key37": "5ufthiKqiso4TxCn3jZr8wMUnykAh9Y2sHGhmw9nc8RMqhrnCiKoKkzrPbPBZ6H1ufW1REWAGQJj8aNp1YHSLHsK",
  "key38": "5iLaoEjEUikm6qdM2p167BALjvduRsgYxJxVibJaCzCkDXV5fU66hFNnugboKGE5QphxTAVFY3a8RrBkTbqx7BWt",
  "key39": "4Y8y1Si32CFLgWkPcxjZ9Uf7kTj87CuefA9b69Ea3tBQvBKJS8bMRj2bLj2gigfPxHabcnmfgsLF6CHawZaSmVQW",
  "key40": "2hhLB7cCjm9ZyaU88kQevK2Ejt4HFmxJDvWMAYw8P9hnsEb7S1egTNB7rJazy62AHRCzrgKnBufM7K2CYDURLayq",
  "key41": "259MupdnE9gme8qyrVmj4HPUDP5AUsmEjVs4nyM4LtixjBug6RtYszUaVku3icknXJFvSyvZ347fepzbnHvNaVyz",
  "key42": "2K9RZY4bgBodb83PW3KP13JcyiQrTFspw4w37MUa8WgNtE7AUZ6wafgZXHxx5cRwQPMi79N9XR14RoTnBE46XRG2",
  "key43": "664riH8qihKYE6UqMna4iWeQLBFKd5TfTSiTsJQbkprhP7JjBhyzPP4msU2jVMmCK3vTs8RNustbKSH4ePpbVv93"
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
