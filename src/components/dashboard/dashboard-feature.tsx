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
    "5dLeJkiaU5b7m6QVkxSznFVBR2qiPWJibwHPNtaDRoWaveqhQEAM5YEfCgDGb4EUHCVmNmZ98SsppqumGNTpiXTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wEmAqnqpDEpL7wTUAmj35itCsZpicXpLDWu2rxcmxTZmHcTRUYRuJSHmraJyVRBqq6JmG5xQuprKU9xdYuCfkFB",
  "key1": "5eNhRWBjzcrCj8TJLAzuaHVfs1KCohW1VfLWQgRuiqfGcaAdXNXkVYWbeCC8FYLAJctJdLx6XgB8wnCjBHMP8nav",
  "key2": "3PKas2uvRWsaXSkJcJiwB2JVrNEZyGh4dyYbiudNM8Qus4TSYZHQKXmoEbZ1rPLbD9sbomhP2DzvqjMCAeRUF477",
  "key3": "2wAxExWuLMrf8RqABxX5RLjVA9G87iAkejm3TGXgqADhLgWBNNtmBeSLjXb2NySA3N2oDfJFQvzbgJrgmUJW8tgR",
  "key4": "dpLgL2QELiKmoG6BnKqCj7gnxfBh36bUc8V4YUwTbvcoK3uPm5JEMKCwSU22HUM6hs39qhbA88pmE2xgezj1uS4",
  "key5": "3cvonAqQsET9pMxNBgFsbCkbxyoSjiTL3LbyP9KRQbM4FcyMeo7hw8WHbX8R33qgd4UoBkJtqxyG4cUHTgKJHiiY",
  "key6": "5RBZ8rKVagx7ayk8qYyAn3q9SZGpFQQG653oBPXoCKRhZURqufPDZUyzopWoE7TRcUc4ZxSMh2G7yFPDJvyewCgF",
  "key7": "3PaAD1JAG1kf3pEbJZzXnYa3ECVVoikz35zVhyuSLFwf5Jhvv1aetfAMqDpRAir1nxhimiUs77ssSqqRy1uoSz4E",
  "key8": "4nkYUrELw25CxnpJ5oahWRwtLiNFw6B2QwwBoZAr6c3VBJevSEJnVVNKshMALHVDmpGyUCp5J9TXyTmkgYpVMDcZ",
  "key9": "prkTTQHu3J5hBCKrw2a7k4pa2w8FutSa1tMXifxECToqTKoxh6ZznfhUFz1st4jLNsbDWYPYeabdbhQegueR4dW",
  "key10": "4oapGMByw9TfE6wzukCy8Uvv3a5QChsvmGSeipTEm2uoEQNceXR2n3AGWZacs5caqae244eHvLoiUwaYz3Z61SDJ",
  "key11": "2MkmGhS6NPn5gq9Kof8FmEqiWk8vVPhQFvnz4KdZuLCwQB97o1hvTL4afyQ1Y8Pf2UCDckRQZmkTQuzaJ3LTHGDv",
  "key12": "3Us5V6apihWGzwdy1K8fSur9RsKEEpzfbhc1TToS5szMYiVJpuFDdtVYWUfVryQDVdJxAhZyDaGfQVbyQnkeHgRv",
  "key13": "4vHC4rju5RAJtCgvrG4Vxz4QmXK2JWqQgV2HAAfwsbpD9cd5QiHh6YNZkR1waqoSVBivL2hqaZPKQaF7qtC8n7VH",
  "key14": "4Wp89kanbUwkqtxHyWWpssNYM4i5Kc4w8fDUqfUxJb3GAFmMymaSYCZTeJJcDfdQdHiQ5V9RFjGiHzCThqcbugeH",
  "key15": "5fu5cYvBHbrgjqLJ7AR96M1wrsy5tLMcZ49wWoHv5gPtE2Y2y4cfhHe25WKHd56mKxpun5AMn4iJ3rBG3nd7qUBP",
  "key16": "5aJYhrhFWoBCtUrYpQ2ivu8aDNBGEk3hB64zq1MpK7FJLCw3HyjEURk3NfLS77cN2Ke1P38qRZkbamdBZFq4eqQy",
  "key17": "4BXmFdNApUMLjPkUNEvfffNV7eAeRhkv8APxY42Q8tc6jADZ7omejcyuP67hXGJ1u4DS9hNnKi96oqxNMj2bY2Dc",
  "key18": "5GiCBxB8jE69NxRjhmGsjoDxgKt5gbwKH6jpN4bfEwTFnQsVB8rBYeEEE3uSTw4ogLFz1zLe7sacVCUm7B5UrFJj",
  "key19": "3vuaPQB1Rcsr6pFQnXzQj7RkRMDWzn1Xx5RY2EhvK1KpWRKTL988kGKDtzX8Uu3NF3qXnU465LNXwvAkRS4khzJ4",
  "key20": "2HyM1iYGqGvSs1fXoy4pf4JEFvYWTH4FHqmjkmGGJc3FnczXCuxU2rjav9SKJjEi9brw9nsowPRzzMdZpUToMbSu",
  "key21": "3ZgvKBHQM8hB9h9s3iRbgXjXS3EBEUxN41ikemrVA6c8fy1sA3qR7CMRJZtpgq1YSjM3B2qVtrDqquTN7Pp5oU2G",
  "key22": "4FSsxsrJ5XWAhc3oBnWkDNMxKoJBwpdneCbVEh6kLBnLHvGaVsZKdqaYH4my3MXSVWfYPTFXCLVVbRkopRukM7ms",
  "key23": "2efRFDcgJ369VKyScUmYzZkNhyfeQc8rLFPS7gxpDAW8x3d9za3CjMVQjYSnHmDAkymSRMtFWRQ7gVZpZMoRGSbg",
  "key24": "hwkyZrZ6iw2gmfErQ6K2EyVDQS7fXTCxxaEtLHYAJnSoaSqRKAhrepFms1vmctPYgG6s3QCZTmVYLDENDRuN2zQ",
  "key25": "21v6N9T6BWtsyoHkDx8KRVXt678ttQkpbf9tdzWyU7WS9GDxuaUMC7YwKxyd828cUmpRdwx8m1Pa1mCfmJ8QkAhJ",
  "key26": "5nZQBKdhnZaKi71b1Rm1MWHBTtRTmVHsCKQ7ccvdPHi1fYaY1CvAK3T1SzANFiR8airtixgPVsoHwyKBGUPErLz7",
  "key27": "RbeniFdxaeyLFs4xyxSYLZ2J76S4E7AjkiTNeeKMX82ehgshLj4EUGoymFuZQQ5khc1T6CYWZ6HZsTsnodNi9wZ",
  "key28": "3jLf4iH2c1ZMw3ukrpYVgo67WLnnkyBR6XDriXrN1yo9RN7RkBQBY1v1MrRr8vXnWoLwXkXGhHFhDLj1wb3o3o7A",
  "key29": "3mvpDL1qhkU21TWpCUbByis7ghiLVt2M6FyTK2ZDSvSUVVTz52XMtXF2T14TmAxhnVvY4b8G3f3v9sv8qrLwsggd",
  "key30": "3tFG7jCqHCwzCsPK74DWp11fsgd9mpxCFVXiFoDRfordWsmkZ3LaRJw1WHYoA6YgZtPBS4y9pK8UUTVA2wi19L3e",
  "key31": "2D52pRCGJrq94Bdx2i3ssyuZAc4XxcVtiDzyCNBHiQGVvq6TiHdPknYvAurFCzgMeWdPQEbgqC7tKzLCM2CaKqxi",
  "key32": "3y8FygRJwXQfM9VH5q4W8ULaYf1GfH89N5cfze4gksJvgZ2fcabT2Hvx4L7PZb4A15mhBS8ZPucMoLHpQykaQZaX",
  "key33": "35KhyhhHfJ1SYHF7Lwiz45cZTJAiYjsQsMK4P7moQ7qJeyQSLyDk9xsTj966qaL6yj3TGvBiC4WnsmDLmgF7A65W",
  "key34": "JWWZpoZjmxnUdvqkAH6VdXNUqy1m3fakZxrQnWuzPQs4SLFEefJYB5Hx5EbYFgWfNeT3z7452EdH9LU17vu8pFP",
  "key35": "2c1UCx6Y7GRux4HvC3ECzh6dFAtSfkvbxSi12AiKZKpHACHxoHamKWo3nStcEkqDfvpsqtpXSYPuPgNBJ5nLRddH",
  "key36": "34Mm7478xyoMd58mfmxmfrzoySgFc31ZvE49oeVwz1s6W4GEdNPutX4ot2sVxCE5LkVJv3MfrxJdTfXUHyqKsoCQ",
  "key37": "3HmQhb6RFK7w8p6oFwEdza6ZEafQFS88b4zzjJRyYD6diMHesicMgP1Q3UUkNWvrgUJGgsHcWXTRXqefyXrW2bDi",
  "key38": "3k6e2BoBJp7d6MyBPEpvczTfJ5q1oYBS8usnRL6WQtF8wiuXquP3Hi43jDZumniroEwDWBydruwV1TyVQ1t11uCT",
  "key39": "deJSWAVgr8NSUkZzBumeq2rAZ31pRULnJSQ2jFY9ZsK8Cj59taWMYNgsSefAsBtsMA7LHku97eamRNbHN2Kkucf",
  "key40": "5AqJBFMxaZoiNCU1C4QrakpMcvCE4VDXRDnBgqWr9K8LAS1VpDwHPBferTq7zFFpUn5HtLJ3zJSpKrrfKcgh5DG4",
  "key41": "4tUPgGcrzsf6xqBsCvtPSgjSCunKHJKFGuS9opR7V1EdRw6UQAhc8ZGaQqpZjKdNgvczwYXmMmdWzmbyoEUR7zdV",
  "key42": "3KvzPuSvhsMdrpPCkpYHL8Ray6JnQXVYEbPX6XnWHPkarNEjn5G34bi93A8tNe6KkST6ySp3AKWKnLxqCm8jxHB6",
  "key43": "XCHMjpjt9FdBkABcGiohiN5gxPehekt92bjP94Rwa1ZJ5ujgAuv1y4z8hnnxC9LFfncMUPgRjFxhsNtiY8x32ck",
  "key44": "5kaRuSwo5zDsD74VUU7Kp7yzxn7Pii17dnQ5kiSxdmWRh6ioN8gmPEGcsRVtPkwoLBLzqideamLcmpQCoZSxRbn1"
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
