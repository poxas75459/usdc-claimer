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
    "3wkATAkLaoh7iKgLn2ZB3V7EtA34KbS2WWX4Ahe7jwXCXrc2XcyrsZepAqZePaGpgAz3SBffarsxJmfYM69fuv7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wAL2UQeupAb6gnGnJLe66Lf7bhFiUxTeVqzmWN91bnE5MKJieqJymxUX2jck32LSK6xV2SDnMQVueXshWN2TZgM",
  "key1": "sXGH4ycouq6j28QGKhrkhvq3pCG4P6Xw3UFyyYMZmBxDxbDEJACBDnLiQp8odvZ2rUryimzw7Lr6ZzE6TVPWBVP",
  "key2": "Kf69GmYQn3C4pYbQoMw7FTcmXREjEnWZzVC45Y3rK27o2qXepWiUSv2AQWpHWTSay7gdVd8tnzkSfjDiodC56BN",
  "key3": "zyG6GbWfSu9L3XbB4UFRMicixbAWij7HdkAXNsCuYSPdp55hFZ3Yvgwup1PKGzxneNVwkwvcSsWenCSPR8GRdRV",
  "key4": "2xP6MAEkoMJ1AvkjcHPRgUerjT5tt6oy5XSb1bHLBDa9PtQjTzBrBJwPgcUZsTr1bs55LSofU8hxGSawc8EZdU4V",
  "key5": "59s7w1y9NWJrrj7wibA8y3m9wcEZgUCAGmXK9VMQtsfAApWkVGN6MeCB3mpM2acSCasqXKnYgyHP3irQBDZyPKni",
  "key6": "4RZsoMdVMgfUzr5N1Fb1NMffpuKxwpAZNsuZ769JMaiW1PyB3mURQCE6jY8hh8J7G7xmBiG9zLpSjSKkePmy43Eo",
  "key7": "5dExUTEBEeiDkW8uiuMdTJeXnfPxziGJRdcXRA4uLmKK8j62UVVRz5ne1E3qAzoMWhXV6XXBPHWuoYZAriBxf3e5",
  "key8": "Gr74kdv3fzd1kEp1G8VqCuPqRmP44qm1A1TiAMHeTpMAv8xT24zTEk5wDuCdFmVoZVw3eKjwLVFBfX9QxXWg5Ke",
  "key9": "25PvL96RiTgRea7qC7PNsWUB6GAD9nU5bswrXicmLMVjzJUfESKp6RDmKmE143N8coZy2pTGu7yh9Ur6cRwJRmxx",
  "key10": "2t6CR5CDfaaKuCsQR4SVz8ru9xENNtu2fN3ZBJAUMHsoUncGN6HEQ7cgtv5G4U5amCBZqPsH2R5fEs8TfgFkNTGN",
  "key11": "iUk97X9F1zKn1Kn6unNs8w4WfCcwue6a57c9itb45nhxXxgftyxJkAzYrGKd1W8jWpuALpXiQbg9aqazBcKH9EQ",
  "key12": "5Urt9bWYdCFufjgWb8yxU4cgdWxoc7ySbThUm9WXnYnDWTmSAkBvLk4j57BdnDkZnhnLAhNb1CkAis5XqQR3rkma",
  "key13": "32ZKTifchr2NHWScfn8Paq7W15dFmcLzLxDrFuJmMrhUnKXe1UWBnaHNMfrV4RPsG1ayHPbPznuikiwWQ6LEd9V",
  "key14": "3FjuREK5NBiY89RdGQemWbtjhCBC88BcK7EnpEnJvS1ziADrp9fTx4hJ9BuFHQ5dorXV7HDm2Fof2YoiTyjKafUa",
  "key15": "2eAVTPHt3aUB3HPToYWdy5vYzpQjYi2mGHip5oN9dP1G8cn6nQwCZ9yzPs7k7wtrdq3CGTCnzF4Vh4wCneLvGftG",
  "key16": "42WSEi2X5qvYWNKYhZ9LFV2kYvaDoN2NpbsWAm2DY6Sb9dEqxnyZLWuvDQSASRQrq6L92yrFWG1NQutawF1nf84L",
  "key17": "nd9Xq7R6f2NCxCt1WDi9JE7RFV8rktpAt22mcdR5wmA7EQGBg57FwduGoqALxT3zUD2TSCbfyRwEpBeckmpDXeL",
  "key18": "YUBUJra7rajKTBfXfBNrw8xhsbtffsbBX1QgLjsxwUnf5MbFJJQHep4Xzgs5eZVmh7BNDEtmLXMkcaFFiq7pU6j",
  "key19": "5cgnnYaXB1TaRxu33komhvBDB1YqBUHaVkhqBPPoDdQPapZ6Vx9xpCB6XwPSeYM9qS38MQvyTsuPn5KrcZSjVik3",
  "key20": "2LycbPD3R261wdMtAJsMbCJmePu5YD3DLNx9o9TQCHwN1yaJfmzUnJjBpUVaaJLCqaifNPvN7JfmpZ2hNA4hvixK",
  "key21": "4g1Xj8PUFy7vLCvfss9TcBCwAQiotPYawNUvfaUv8ernjPQp1HWQVgoC6X1RYJFHXhjj8mWU9Wtso9jZYyjkHAEv",
  "key22": "4kTCPyDq81zBvWa4NCC6mZYrRgEwD5YmqRofS4HAHTtj9tT3XBSfje5nvjViNqrBZLJy88DdS1iTwNjy2CN3vEmf",
  "key23": "2aW3jfN9mwYRuvt61W3rZUocWn8PyNJo9EEMqtEjMfYPQk93rK9Xi2fM3p8PmVBbnLgeEbzeYCTeWMvDphEv1b59",
  "key24": "reiU6m1UGRj95T9iZ5pmV6B4afpAXVLWLMSapnLBYsymWBS9yjG7qn67VMBVCb77fWWv4FXSiHAQxoV25sirpCc",
  "key25": "48UGje1p4Y5Ae9fBQTYZTo1oz4ppqrvuFKvYwNbP6qdkkjUfqhHQYvt7MWD2gkh842dhtsm2eLGMgMQs4pakR6VF",
  "key26": "5FucTRdwsgC5LXVGReVpsD6afJzya7wpJAYKx3BMqcZm1YMHBUKdg36wAFmtNauWxd8ciyaxPMtP6akvHvUHyD1Z",
  "key27": "4Mu9iAUbFpF9e2WEgDEX74TQGVjjtwLiNER177aa5ZCdqfTwhRRr7zE96rHR5eBPRs7bXdUaiejmwGQN1pJZrdpC",
  "key28": "5ijvxMHjjhEgMoHBJbUvE1CJbMr2eSVE8JYFNNjyiXFjzyML552nCdr6L7bYMz6a1V69FW8jbnhndqz2EDhPoey5",
  "key29": "3kXu7gWNHiEHqzQSpeiSLdhqtybwfA8HMqpJoKPENWfjTWVCRPqWbRTvaxZfFcX6W2iGLquXKCBdkrTEf5QQPnvT",
  "key30": "5dKmoUcrst6QZgPgrKX2hLjia6o5G3CGsaxyiQT5vFkE9Mv3CTmcihf89zx2DC6EchHtvM3cw9MHs3gzW8BhcDdv",
  "key31": "2T6uWtG2gn4KXaNwGbBu3QsnyYomZvGKYG1gxU9K2bj8TGHZhDNMU6abFbhbbhT64ZBMR5D1PfHPqr6uac1W1fbF",
  "key32": "2zUDAngKCuqm3xf9KVhiHTuhDaVknSxH3w2vJeQ9VcmgRpHBNspp31hvzXUwMKun8aNfKPn8BrCUB8Rc9b21KvAe",
  "key33": "VyUEf3sW12CmrJPfGesLe9aRkwLuvhh42eZ55m95nif3yBaDxR6bzBStc6qFFAYf8dZRZjSeyEv7HszEwcmtQKq",
  "key34": "5zXYocS9GR1AmegJEeyF5M9VKuchbU2YtCzHcscEqnvN84inEL78tTdeTXHfmkgtrNr2B7vCHaEXWbW9qsPUGEiM",
  "key35": "54bTANHEqQ8b1w2ZJYz2GhLptcgnnHvMy4KGX2S4HebTgYpLxgxKU4HiPc5MzuMJ2qutFp3EEitYdFJMwFdyzKdG",
  "key36": "4fFNc95bwa7bkd6ZAdkcy7JRsB1H4S1aEJcvx8aFEbFYxJJewEmYyGuejqU9dUQ22WQnHPdBMHPL62EG1yFuvdNF",
  "key37": "3qq5RHRJn4cbMM6kkJNVRMN58gBRtbWiyx6smjqGLXujKXJFb7Txd7WxraHde15mfBavhRxYciuSjHSMSt21fZtR",
  "key38": "2tAQc4XdJBMCU9hgNBtUrvNWLWYYSRHFPzuWhba4Bg45uXh62LkeUuHEppbArAPuBhjYH4hbUv4VoDKoL4NXc5JZ",
  "key39": "2vJStFvbJLqx4hjJZx87wwaXFgUPLDgkvL6HLD62gQ7H9ifFKpePxhCYjb1PsPDnc1QLVM1sAiCZDY9zoi4VfgjC",
  "key40": "uY6TpVMKmzghDtbzyL6Mh2THg58AWpUErCFsgyDMkQGaPxAG99Qz4HiE4WQJavGszdKNXD4UZfG7CvyRW8x1HVG",
  "key41": "3xo5N8AvdfU8ZBgQfyGpeFUg8qxmHFoFsqL3QuDmWak15SEtX6UoPsgSs52ZCrb7nMQj1qhhnHtTFeU57QjgktrB",
  "key42": "2Fd6WfH2FP7zWmiz7YCE6xAdJ3DEQT319FJEqDFCVCM8SBmLNzDCmJuyBuNhTM2scHDZn27WU2jFoh5DVBLwimfc",
  "key43": "5pP5k3CkATmqmC2oYUd7mVxsdJCTqBWTkAAYL8aqYZ8S7yrLeGmNy5ZQvs9ZjSrJL71CTZUZuMsfeYRx4KS7uc77",
  "key44": "5sqy6vjqE7Q3UV6DrkVUJM7NuCGgVR3FsvwGrD1Skd2ypD85Ciz3g3hC1E9f629DttJrMYmgPbGtYa6HnpoDeKW8",
  "key45": "2s3wkZLK3yeLzck4QeUva5tfrTRHVh2eaDTJD8KDmBgLoYmusSHJ9CL1UQVSRfeSKSL3CM6cXFRc9VnnosrLb723",
  "key46": "4DxMF9CtD4Zw9zfhP68RrvdPbK4ktwfNY7K2H1YQPkt3rfXbRbjwjJBDhpDQ6HW1WgtSTyzQmRzsEB9L3SuXE7ot"
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
