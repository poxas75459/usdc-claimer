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
    "5horfqEtoknUpWSK3vzWw2y3NMWzdGhSb7Rytmo8LeMvC66uBbnhkBXbD2vXaQ35LSjL88yFpzgoDZubAv4KK8yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7eC3SJ2TXKJMv8cgpyRN5aFyCxhhprvswrS4pr5Pa9wDczTah5gshJRebfACJsfQPvY1xgwuWMxN91z43iSXr",
  "key1": "3HaNXCF12vDKpKmEqwvS2KtKpxdF8RKiQGj3SDt1T8U6JgbWqtkhWLogBBmGDuSDucfEc7Txy6jCwTkAQ4qjMgvu",
  "key2": "5uWuVSTxYQ39HWGRVFZchtbDChs3UR5nFXnRziyYRh6zC1AFZ3xQPgiP2kNHXVK7GhMyuyFCN7qoArBKAiX8rDnf",
  "key3": "5GNHnDyin9Kjuumd2va2WCviA3hZJXMoNTZESGS2oB4W3Q8WvZ7wttruDs5utoMnUFGE1HzG1vmwn9ckBjL3dVRY",
  "key4": "2fBhK8fzjPrfGd729VgWQ3eybDiF2QQcgk8vbur48nNegGjoRj7XntnnAU497DgwHNVC9uQprAG25AkNgk5HKRa",
  "key5": "D5sHy7StzL5sjpLw9PejYCuqDomuLaxF4AtA3XLa3MNMjYMrfgDyCtNBFFtHsTMqYc8cbBAc15XZMssqsNRHsEj",
  "key6": "5zZTDJYCJC985MEerw1tuYuwPYTgBMpvfihCWxshZZi2u9HNNdYkUC2LUxh6mo3ZnC1vTTbmi8txfNFe32JmtyHM",
  "key7": "5KXsuT7W735wx7wyKTPoqWaKkdBqzKyu4nDAGfE6EafA8AUKbCZWwvsbYv9w8JLb7yZdnhofCosLFJzNCQuoQW9N",
  "key8": "2rC161774U4jnd5SwFw4dmRE2JMsXvwtuQiFMCXABVLH8Yx45m9AB9fCsjy63e1q9XQtEuYuJtbFRPi1uPi6xuPk",
  "key9": "4gCGwsbYK3gRVc7Dfj8BoxDiQHpduvoTgcb21H3L66z6n6zda81sKvgeJHjo6HvjebZJ9rrqiZSbxCb3mQkNMbZA",
  "key10": "ja3FVxhJ9FhETy4oDNuNAZv53ktvYzZyXiqeYMntAoEHw426K7gggro1rhRDEoucocJWCXt9upRbA48oHW4KBJj",
  "key11": "2TcdM6M7q6xjaKZiKertwSK3o63CWhuzwHVh9yvfkPUVu4dW9mfVMXi19VDBLANtz2rLhrxyEHRYRo8pAsbDMAKT",
  "key12": "5cczfLUQSX8kXcfLnq5JnHfjGzP1V2rCpUxepJseCLhZAqW1sstuQJU1437tkw7q9knWXSp4PXhVpon4jJRa7tyg",
  "key13": "58CArKQnWnYZB2cWUyqHAGL7ALinVPeVV8C7ppS5VCjeFU83Lv8x28SEGfzt9d98iuHVyyXCKJtnkGxsWNqaNjxU",
  "key14": "4Asq3QUuwSBFx9rwcPzw1sFhFZqcWY9XdS9CTJ9kbYP8R7Anx1f8MTFSQHc4t6tVV3ycLqmJkgbQpw9smcoFPWsX",
  "key15": "rP6uvbb137g7yHi1Y284bH9oFq1xWSB6twNyJ3ZxrwE8TbdppujCo6y2bLqXTH9BbVpbdkqCUjGSDNq27hLDGUk",
  "key16": "23H3JkAbDsG5M8eMSu8vgfud51ZtTBwsKsZNo9zTYFYmXadtPp9wpNruvCSNeAM6u546LAoRyGCdG8SAMDqN4J9q",
  "key17": "5ksLg46NLMHBryQpSRjXAZhJe96nTrUPfc3gyE6TGF9tXnegGkTYqesSgzf1yjkq8G9mHPonxJC29tcEhpsKmufN",
  "key18": "2PCYLfS8rVcGWsYQsGkBD5Y5uVAfZToapVK4jbXWvYuyw3Tn3QSok1hAiYsVhQDyRZGzN3ste6uRrApDzfYKMxHp",
  "key19": "2NS4NsbN6bgNCyTfrPAmfu8LyMSCF7QDPKaAWarhnUJo5BJH5nnqs49zLSAY6zwf2QGAx7J71zVTH36CNrCwSNXN",
  "key20": "v9bbuAwd5J8e1mJzrcUBdaqRDGujpPUmjaZdpKwK62ZdnZ3TAwwKjvgiCxyvbao6gTigCRkWrSqfNeCjtqzCtqk",
  "key21": "5opRMAtn67uPuQGeMBAp6e9MDzZvpnPy5KnzyAGARTZ18KYC9nrBvGupkycg9wQ3S5hYDv6fHUU3B5duMZjXKKXG",
  "key22": "aCFob5MNLjJostompgTigU3ReZF6mjJbT5eMKNdL1FR5udtM638XogRaDZ3oZwaGu5urK6g8sVvL3rGtxNqtbBd",
  "key23": "DEdVzMorMuEi9YQxFQoNcdwZ9LiC2ua46H32wxDv6TSkME7NsK3VBf4HLtkoab6UtDsAoiPpPtsyWWQSodtBt2T",
  "key24": "3E8B4SH8U8wQpbE49E8C9Ycq5DLZvSAYrNgXSPWGsZP7oeDbaxFw18CRZi7144xnuRgfN9ibJqRwEgCgmMCwok8r",
  "key25": "qPkDJbxhKHv7Bc7K5NJFJWAgyGNu8mJiUV2icZ5XYXKFY838G3Gb7K2ahpSACNQdSGre33ErwMt5LzQXW4Es9E6",
  "key26": "3rue1fLYsM6qXUWgcexQkShYuvRFrvF1kF5rcuDUnArjzokYNkPYdCjezEKiysTBmpRnrBpm3bW5H81u1pzcfWfs",
  "key27": "2W62rT7AGJgEJuahLC2aqToHFrQqitTw3Zz1yQFuraWzH4SZs49ATMsFXhKvJ2QzoVJVNFesvNzziearhCK49XZ4",
  "key28": "4B9jocpLvPYuQwwAdsoqRYAABzx8g8JsYGEHfNfT85hMv7GBeDue7ekF5YzZrUZGJGeDpT8VViWmbSmDstZu1rF9",
  "key29": "66deUW325CrUV6SVAiD6FbvNetkW7T8TnxTPko1X3yikJSfYA56BABEhKvRZ9MNYneMTWWuSPHNJdtKc37BK8sJz",
  "key30": "xTb1TdnrM4J2Xm44ADUoARLMNZPMjGvoLYa23ZekSLfzhza59nHFhWTyXEaxs23CJxFQL2krivDNRRyYPRRqZa3",
  "key31": "3eCtmNwefkP3Av4Zw6vrZZK6fZxKkfHLpLWoqn7XSaduuDS73NFZCJTC9qmpJdgLxEbPHBVP4xyGJkHnCoN9N9YM",
  "key32": "4pqHp3oQ93vxEVXNLA2mYm5pVxKGPFKAAjkY2nGonnzjpDoHzsjZjANakk8wqNqSsgm9mS5bVhPcWsv9d1y8s4ox",
  "key33": "3RdPm5P9vNDL7EK5NnvDV26rRoCxcBYc2RTXruEPA5pFfTg71P5KzeGpMpu9fHtiq3tdz1wYkueCCDmJ59ttCh9Y",
  "key34": "2LWZa8SzHHwKFT3VuuGTHuMWA9iy4P86Ny3oPcyLpTSnM6QwF4NXrRPYbYtfBQKUKkv8WQ4FNfNMFTW45d6A3Ca8",
  "key35": "ut2rKPMQtAbThaZZzq34LoSNbfEw4q4QYWurhbGqZskCQsvr9QS97FbdtiKLPagzUsGBrf2m9Y1TDjmrazSpESi",
  "key36": "C5ozKwWdJj9sXVYdnZshLpinKvNuB3mUpWiFADWVtCEPXKHVFLPj5MX81JZHDg3SJQr7CVDXhDFDeHNHzXQBsZ9",
  "key37": "4EUvfYG4LT7VnzGSCtv1jfeki5GKcVWLSTUva14f6HG6uPkwxjVMVkt56UJbFEUxKbXC4WTZYxgyitS5gYc2rpMc",
  "key38": "2vzaew8onGYgaA3afA8FoFVRWQ82hdeqcDuoRXf68WVHu9kNTxKPAhVLqzyQnsEGV1KhPq14qPm3Eg6WztiJM2Js"
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
