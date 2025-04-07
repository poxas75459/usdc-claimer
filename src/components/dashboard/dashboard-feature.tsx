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
    "4t6ydAE82y5ph9DFpC8EKQTyZnswcBKZ5v8ybnLfhU7su2txDSxjkg5z7g63AevhFV1RrzCoKAXn3sxKdnWFBYxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRH3F68qnjvDFadYvHbnbsZnEk8hY1mKGnphLs6wYYgcmRNtxjmmfN7tZXfoPRjjbJGhYLQ9tK1MFhPUAEBJsp2",
  "key1": "1Eaftji7QeARbVV1hJFBciEfx867JeY1eruoHZH3fZzBioQb7syE8xtKos8RpuY5McbjqRuKvJUVqMsZmEAXCNF",
  "key2": "5w6BXrb3utT9iZprYZ4WkQ8kRDnKYvQJxeQC9hNbouQHub237eyEK3QZwgmuMyiR55gptwSjvw2K7faNc6BSHnMr",
  "key3": "4f65QgDc69RVu12kDxBiwPn5PzerubnPipawEvB5PWWHYeAiYyeDQPvigWw84JCinkRH6YYtifgeUWHFFtUuLVgM",
  "key4": "44bn11fjaYjJCZYyfhLqAW2yqs34btjfexPzCUvtMr9cPAEKmyzNAL61XeB98K5srp6U8GRQBasBkGnMqqa1ez4K",
  "key5": "23zfk7bDxjW4Jpcdq82tW7JxK9MQiUt2Hf1eXAgJtvhoanz3bNcv6sanNt3KvTq2jpuuwDsMfkmTbEyW3RU5yFA1",
  "key6": "4vs615zJvm32DYa2xNmVu7FGLbPWsTYD7ucKp3Sbpad5Mf4omx76TnWDmWb4DDS39HzfDWdwShxspoHLX2itde6H",
  "key7": "2F8rLTL51cwj3iGLYUGpC3KGvNPvuGRakGuoisMUw7ZtMPWvfziGYByYgwqNuEztsnt6JowViPhMqAqpdNn6LxuQ",
  "key8": "467po1DE6ddqay2i6Z6iAqB24zMjmb9RDXJwY29Q7vuu7i8veEQBuHJUMo2YeESohhFCgUF1XizEmZ2BFYALZGDs",
  "key9": "2BFPdeQA37UPDXSktbW9Lgq6hZ6oN7dWPjUEHJdcw68rMk39TWwAP5hSm34T4DPnxnELK2HAheNWqoAbiWMYDzrY",
  "key10": "2mEZmRYJ9xW2Y8AkD2hzk4cLJNpVD23GjrYP2Bkp8A12QTkk1HZziQa2jY3kmCre1JCnEu76FdtM7UqUaWPTQr9P",
  "key11": "2e6A7EGD1ouSF9MDKVM4A8LPHBK9fZHQhToi7jPDrFUi78ixBcUvr4mU7qtMu1k38YgKDDPm41LT3YVCj4bCi6hY",
  "key12": "223dereazahSCdXX5aQGL89bAQvVgrcQEda9k6xvg1KAsyL7LVt8DScAiZcZgxRCKSutPo9UTcUdtmmZekhqHEsc",
  "key13": "4wizhejHA4KpLmyWXfZzTrJtKiZRyPTeEYS9QwVWmMvFGPftXc2VLVc26wFmdUTvkS5N8BtcxsVjo7pPJU6ezh1g",
  "key14": "61gWhrmjD2wwZqKDAm3Ksjmm5JvLJojY8eSsAa6HCXSJK1meQEx26MDp9xcXXeVc696apfDPR2SLK59YSkjsvvak",
  "key15": "3Tsa6qfnMGuFFzrU37uKnMrV8FhPNZDHQ9bJQYju7XCRuu8wVBcBU3qWEwVpWp2kMrYNhRS5MKwfjCtZJhcWNZvL",
  "key16": "3XNGhPeGo7aK1WosWtfixX3FiJs2ZzzmJJFiz86jpG2yzzNommVxXwgroZN5aBVLhWZvHz13X6iyonpkizqAeQeS",
  "key17": "499L7BsBTuHn8PUYXRzKgu6QpubvB1qQ7c1JNHcEbGmpPgZUvEXTf6LdvoFeHMtpBAv5jpuXyjb5tjmtjBoNWS3J",
  "key18": "4FDQWbxH8XK6Sz5zaxZi1qQYtdMHyWTZQsBwfQaebQAjGW6iFAxY37FnsFzAnNKJFrX15RHprLAeax6H6LwS1Uqa",
  "key19": "3zy6mVsi8WfJDdhFp5fvkASrRvxHJyGxbRZFtDho1KuTxEeFdFpSjZDfcs4xeTsLyounU25G8667uGw92Btb8X13",
  "key20": "3bL614srY3dc5fsbPB5DHnN2V9mB48QPUJxjm9DLoGVSvB8K5FuaDLKgRv3CCYCp66cpxuGRomhpnBFJi1ipt1ZK",
  "key21": "5AJsYeNoMW4JnuwhZNoXXWUgiR8zxvxTDmbHLKK6paHCnNxnb1j2ikdabqj8m859EZDXKFaiHMZHbwZsZ9muwd4L",
  "key22": "4qnj3L1axAvv5SGu2djcT9JEVMLRhTzhyAmAyQNgHXpHQYTYPkCg6NWBb5yHCG9iGR8tudE7EcmHyPTJ4ZpZPKes",
  "key23": "XMYCAkzJy9yoNbRErf85iZQX5RyjvjNhdRr7wJg4igU4711nEViKJ7a88Hukz7ZJUYGtzFaTHDoDQrTh3PTvtZo",
  "key24": "2usDAak39URxoD8UukgC8Toi8bZfTbuLvBhzX2yEApQr5zoYaCf3djaRAjmRZiEQobX5U1TsjgiDmBtdUXQzPNZs",
  "key25": "3WQa5tjY5PEPqm1ab4A4jCE7Rf7k7V7Y1cGDWoWLC7p6eMpioHRAYiARJ1SfZqS4eU3cEUpoi6P5UYvsMP5RxbDi",
  "key26": "4FvypDWssxSBRkW8srbNkwPrKV9ixunsfY38VEKRMyJeKZEHrqjwLXRxoGYt7jtHPyAAoZKvCiNvGZdjUDgCmAA3",
  "key27": "31tbRqC6wuzjmf784BPErBTakdJgXaxqi2vC5f4617aGvWcndMdawH3ZyTVB9ayxkfdy9CBNZ71M7RyzZTNZ82bx",
  "key28": "5SJ3tmJguXJmBY2RmuyzQeQ4QV1cfj2Rodjt7un98X4QKsp3e4KjfCkCqRtbaj77ovfzQX3SJdUE7v7gD6FW1bRd",
  "key29": "4rHKEbEpq1dgaMfKsQF8di6t2LbAfg2oSogeuaLfz43YRpFMhVH3X6SHwqjoMYW94EWZUjZN623DVRvpG4zrBs5z",
  "key30": "2ZU2t2BiD787vN5cFyoAZbqP3VeC6WCiEuURJ6nASFS6VyBdRrmXveZaRqdNtzHTDsKSWxsqxDkJfiEf8ubQ4ten",
  "key31": "ocxV5ctkP86XWznGMHn7VUh3RfuxFEkSEwg43V2zreJdMTChkRmiQSd3snvLjDjdL4jCqZieGEJZvaVTVPcwUDG",
  "key32": "4c7pBpJBPVVeRSHuc1wKzQYUvBqLzzY4X5aDXUxAPCt5De6DyoQhtChE493KW7V9qq6dGhbyZLX8mjtxAy3YbizN",
  "key33": "WZfHhgSpdvm44PEsD5m5kkoePTXt8n1QVGdLxe7fbXAdRVVBvs5W3mWEK95PaV1B6syn3PkmPjASeJxLGr28Kiy",
  "key34": "5siiHqhhdyhJCDCcMaSgAgppjyVSRwsRuDMQ5Mpsngiy4RCdzHZY2VFZWvMyEjprCN7itaDr7iwnK91DYcjWz5dW",
  "key35": "2sZhB7gtqMFYdVaKQy6mEAukZAWrpG1tBoVUCBWTJ6xjCjkCEeVQ8cwfVr3i2QZMCYCHrkWN1ez5UfKdxa1ZZmnA",
  "key36": "44sXm2Kpi1gdUZGR1C2AXCETHtw9vBzwPdneoXcUu8eEbU2H8oGbJHT5STpm8TWJJmxF8hwA5Hnfp9sZyBEZthqj"
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
