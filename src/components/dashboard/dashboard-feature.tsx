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
    "4kRvE9dKzAoWXvUfmoKZVV6FouybKqdQoueK8Ljcu4P8NXfdDuzJeYPXHRvaZJJG24KE5MQgAMcA6FTkALix4xg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i4ZBBJpYbCJtTS74wjQSGr57k8VNL68x7iXmWLV9KXdxvva2k8nDXsFqvix1HpAmJSVpC5S8fwgbuoqy6G5Go5R",
  "key1": "2QLJgXDEdLjjTu3GQtP26p2PeiwHs2rAdZC5NsQYtRP4eBSXep5yWqQ9osCiEDfwuCSUF6oLGrQ6vni5au29eJC4",
  "key2": "3YFXFGrtpkpfadjCNe5DqemgTJpMxULzTKtn9G7dKzBVte3d3HsPRCyDo8WtR4uLrbqj4bTrkNLVYYXhR6UUsZvB",
  "key3": "4QWnvB9eaAtJTe45RyozMaZ4J6ApMsZUpAZsSnTQ2RCKd6EkY9H2ucSHjAPUMUXuDhwnDUdibnWFPCTbbUWHFgjZ",
  "key4": "66DdkQtZuYFsWVrcmYQAKhj9d7paq8sPDLwrhq6MbCWcn8HTR8NK4jT1xdxhGgSdg3Xi7Fi5hCuBdfrX5Ha1GHhX",
  "key5": "226T1fSXTT4TLieNXHLMbynq5gsdLoGYEok4D5rod2wCymvFXNeBMHjqXyqV1PmHEkrEk3gNk6AirNYAHMrSKzyw",
  "key6": "58JjGxNiTV3BLibCMesW64w7iWFrLq8QczFfxpQxTnwqgetLD6sBavcnnxKDLxHuyKTFkKCco7YEfKZrhFbm69ve",
  "key7": "3avRHTDJdK35dSv9nJjfCMibXNCbd4tELJkiHoe2ueDWnJuEae2Yt37MhCeR5EugkqtX1Jds6vtLCzVX9XeoTLjv",
  "key8": "2RTFF5LzHW1bpEw3xSHaa4MVhGp8DMMBEdNYLfuBkvHLMGjXQMYW7cw78CmjXCy2E5oxVLbSdRM7VFF1FkfEeaqa",
  "key9": "2Hi815U4SdUfP1MYT9QpzmqzFPahy5RFRaFW7No6MWi2EndppWjMoqb9Z9Cg5YUELJyf2J1U63tPP1dqAxhu2nAT",
  "key10": "3xz7UZn69qWJfj5Czphm2meMxPCXaXNU4UbhPtrHwb6zz2VEmaF3vFYLHrXhbLfeemJgMqNyYnNgrDeY5BqZfeHy",
  "key11": "5gpjS8i7MXLtvCrAtz79LEYp28Lh6qoPxknU9zuaY4dKsysdfP5cCYuXPgWN9SAkpiCA8FzR93eEmRRffeJx8JQR",
  "key12": "3ZFLa7VQjX5w2HneZ5WZGuNKZWAKjN4ezVwS1bsv5SuDSDU4ZwbvtBXeMcmKc9EAD2MaAMTcsEWooy1ZLHdTSKBq",
  "key13": "3Knk9f9jGwW2ojeRcY1VGJBiFFJU7o9GFirANJEst7S6b72RW5UUTRc2rFjKRz9Qfd5vj6DwrEGaW2WRdsEdYPiP",
  "key14": "2opZhjJca2moH9G7yUWP8GejHveQC5a2yAeefRcDUjgeLBCePkA7jB276vkwanPro5ytyGThHSRKQeBAmQyRfWuN",
  "key15": "22W6zuShBwR2gxoYDxCYHvN4TgC497u85WzUan3YMQbTtWL8coQ2qM34pKnXfHt7VTUDEVjc8Xb79pE6tZCP3baf",
  "key16": "3VgXYvZhiufJjcgvUUo45Sf7JDxMm9djRFL1pW4bjJtm7MJgfjR7nn4owL4nVapmYcUBKkw9rSBYTENCFvetDcWu",
  "key17": "5eD8oV3Pq9HG1Jr6wJF9Ee5BGhW2iJcAoP8Hy3r7tBnmCybdWHWY8noNhNTnLS8rSwKuJ9Ta9DrjgkrF28tLCFho",
  "key18": "2fQT1UDfSRkGknbCapnsmyH5LwEc89ZqeRUEyuZgxMt7S2hMRX2gCGWmKiC5d5i9356xDdpX9SUYv87PJah1mfsP",
  "key19": "5bzc37ZjXdUgh3zZVh5gWvpYdLz5uHpb8kfXFCNgqdbfaM6CYvdruGcwmAbsKkj2D4jvGAAxBWYdz8mccLbXNYdP",
  "key20": "47vkcdWe9Hfm9YXGTCFAu5EX4FQrraMLgLMGjLC8DrCUvkc5m4tvn8VP9Z2apNz8MbJEtqegK4GxEHRKrJueGxZG",
  "key21": "2RWwuYpBCjomrsobBEiu45ZM1qmxyxgnPyrTrTQVeyKUN7ETY1GoGL4z2XihUd6A6MPAm2kxCJFa5ogpz4N2jeQh",
  "key22": "2DS2bWfGBBdHnZTHSzKy6PaE62yQLT43Fou7qtpaUy2gHq5dbeH3xGWBwpuLqMmpsPNxVwV1q9GcJTEesGmbgMdc",
  "key23": "67HQEniN7RKHU6dN1H4sJaf7cP3Ea2nLNAWQ2NJbTKRyeJbkbA2fhTaF5eq2BwaVnj5A4k33xJJZhCrYccTahoyY",
  "key24": "4FKzjwcJ5fJaSPfzz9SgHxtH7gizCtTapur1P1yCxjCE47VPSi6saKRMYTB8p3yoLbxUqEsKWbnU9kfn4gNwxdZ7",
  "key25": "4Gpzs2QDFwnXpCsJ2PAvLjTpwk3Xu8R4GSy5PEwWuPbstcHhSTus5SkArdLDcr6TAUDAChg9xn4bjSyFHRvqnmNZ",
  "key26": "nwppRxQaA6ZZTT3sk7ZReUstdN1CMRqcCvGNivQAoo7AbwxuywSa2Kp3mobC6fUCFPP8zrCbAUShcXN7EYPrsE6",
  "key27": "5LQb172PPWDKzAJaXVT6mti5tQ5gnYzLTPVfpQCTscqTAbEBBthqh7hiRBBoprkxAmv4WS8JSfXDymNMbXk5Xahd",
  "key28": "4b1FX8QXrzdV3yyyfdUwCS8yTE9YmZzyR2jTdCEn1ggorSE7Vps3Ldi7xyoTbdomPFmX8xiNFaApZhEKLJFkCThb",
  "key29": "rX2Sh7k7DEiAe5QHGTtUhbrrjV92NoYUbWkNtSCBZ7tUxmxuKRZWRmzPG4rS8ntt5rqW4TzzRg1mycgt7C1N6xZ",
  "key30": "EwoD7j1f4yWG1c3pgkYNAG2z9e8LgBb6m9kjHGC5rmqrjPTMyzJMeirk29a4FbuMi2Nark5Geuopz5nAywiqj9a",
  "key31": "3jjsYGrQbWttRbVQUJvzYB91grzHG5USy2dFiAWq5AZv3xzwAZV76cr4BwJZJQqrzdFDuTQYPkAxqWRJ8DQEgxZx",
  "key32": "fAkBdkrg8kjzkixWCP5pHaEkuPR6N8pBH7SDo7L24nTmhj1uwDYCLrMapdujodF4R3Atqt9VoQxyyyRMjmgtnCi",
  "key33": "5VfPMCgNHBK292urUga2AzzBspanmdzDpTJ9cFdqnLngCjGp6ACaiT3UquYXx9DcecUKDvfKcjdE7eUg7N8MmZzr",
  "key34": "3nbAYsdLDcJzggygyotHQvLX2WuFTgVmhNvovi4BC9Ldfma3jakYwS8XoxNKvkCfNAKEBQAiq1Fb1KmF6U9pRAkk",
  "key35": "QjTZT6orAmxWRi5aN4r47TD126kAAXdVWbFwPc9dskRfYYvQazbykJUvV3VuHuuoDBgpT1oTbrF6cuER6EDnAQW",
  "key36": "V9wfug6WXUugDrE2NzhKkRE4uJMRfsc4m2TeGgDnXTAwCnshAoHWGbvxevjqns3ErFye24p8624ZCGGKB5Ucr6N",
  "key37": "2TRi87VEhiyr3XAbRKxpxoZqmv7uYfMhuzZtv4yjbjWVVbq6uq2vSbEhrvKAhFpYVriGPYsGCBagcng5RGd3HddH",
  "key38": "3PmGH1EnQoSd52M3b9ZJLiTxdD42T3X3zS98S8RaeJ1g8CUbhvGZ2L14eqnrtF51EwTcAwtQVyNwC6AW46yJdfpf",
  "key39": "2BUUJ46R9xammsj8uLLRk3jgySuMtCXepLNdtWqoSXSa748nZ3YHh5BtmDMMh62K6AjCP4p4GyNckDdZWvU6CNkj",
  "key40": "5Y1ueHaR95pMuvZHrh3BLsairDPvjcC5KGjM1hDGqM7ojXwGq9ZKXFziYi7YwzVGq5KkZ4qAKQXMA8Fv1AZFCBo2"
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
