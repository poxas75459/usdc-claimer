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
    "FjCMzQyGoEQm34giGrUTGsVTa5xTfFybEJVsYccJGBMrfVxqaBPYavDJ92SX1oDNz7q6ZQ7pdXNniMnVuy1yJeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGCx2UTLiNXTtX3utqKpTitVAw1WspRij78nDHST975dmh1hW1T5spowwbcKaNdb3Tp9CGo8d19pcjUgzvVu4Le",
  "key1": "UCE6ccbkzTyXASMsVh2CJ1kWsAHfeVZ1ntDPPrHfeQeTWR6Q9g2Xea2USJZyLtHnVarDvPaJ1zykHW8PaGPpose",
  "key2": "5134vXA528SnzFpPixMzwgVu6WtgMpeR9vQyhyk2LkwNf87t6U7KG5gzvMPBA5Nm8gpLmKeE49E6hygbQAZvxb2Q",
  "key3": "4vvWpWG24yKEaC65TYjffnbncbUC5mQTSP6cdxZD2YKgtWNy5rdDLSL8FGw6VPQn556Fk5fezQxSn8C9BbTxkaPJ",
  "key4": "5xqD6Sboh6rKAemtwe88Q57bG1Fmvpn5y78C3WnXFAMH4HZnkR2Pra1UYt6stKDz9v3qot2UxJ9pjyWte96V6X3T",
  "key5": "4CnJ74SQiskCDr7etEhT8btU8nE7EtZcBDwomJ7TkXVpNwqYv6YSgiLxKzbXG4RzdQYtcp1k8bTPJhs7EbcSesWu",
  "key6": "4AqoJhRPUvK21fjrZH4csw8jELfiG5YpEvQhu3PgmNxY8Gn2cfM9FUufpn3jp7KBeianecg54sazmc3APuZiARHy",
  "key7": "2peC4u7eKXCMXfWq3QSpDFXpBw7yCCJkGDxpdTmjS2aPr4BJFFZN8rbdBFqvwFJkWn6pzsthU9WTSHyYHRhffGi5",
  "key8": "5iV6rYxV6WuFxA48teDtwFu7feknNgpMY5XwpRagPhsxBdDjkYpxLmzpGVDdmpH8jgALwxYcmcyDUCTsqYjqJUFt",
  "key9": "p4i9Uhx5ZnvLVJjhRTsdXRUXoFvtkqmwgTrMv38SiC7je5LPndisvZ24WjhGHHWH4KnDygLVieVdwLoqFLjteAd",
  "key10": "2DDnNBacTmbS3HrSnVY2vG5Bz5y4qpHCw3foHiubNKVSfcbJGmgzQDkq4wDLaiFr8VhVCuyT1miFjZkSUY3gvHYn",
  "key11": "2LHdXKsynjo6owq1NVKjMtaz5NkEnMF27ZazHwjKVqAyrauDyUnMUTApU5jCmKM4dokbav39oQa48KKv41BSRTRx",
  "key12": "4ieq1ewYddZXQbTzMHnLuUge4nJJHP6WEdYRQYYBJtLDJPSwtGQDcLMCMX3C3ZEJAnc9ovcREEWQAzRJNJVUix1o",
  "key13": "4JJvNpk9YNZefN6v1oBH1MyBtVkoJqCPAw2dfF2Hh86xWhzK4zhQzrWT2jV2WjDcejUhY73Ee2KfTna9PiG1nRo4",
  "key14": "4gTF8ncdG8Z6zRtTmQRw6BT2r9jGGYcp44sj5zsdFBb95svzANfQyHLpcYFBVT4qyqAoUn5rG65BpuNNVgXbgXbj",
  "key15": "icPGMXQ2UXNdv9qHzRaEYLjjrB96bhqTPXf6zL8FdzEyi2nHajfG6bPb22Wuvjz55zyDkVfcBzryj748DL4vfBf",
  "key16": "4kd5rNdye3kw7ntZrxXHCVRdQw3RbSwundmjQcN71KK7FTZWapTaasE1gJYN4r55JRyS769HdD7vCzx23Zh1RXkq",
  "key17": "2aCSts3VPtgZ1o3KdqihzTEpeZjED3J4Jr3UYP7Rb11Ap33c8svUzV4i7Hhfqg7wVu3n1YiBgXyyzmGxTki8Xnje",
  "key18": "4uiwPuqp4CEuto275A3vyXLYFZEgeg4fA6nUhdz7Hfzk9hb9fyQzpzn6XWexi3udLdkfia2CYEypQg6JVDRsnSX8",
  "key19": "2b2Bu6pQ3UXFruDxfZGgvdkBTVUAxkEct1yvFSe7BhbvS6Sg348oTZUvHXU8yz5YG44gH4QfCet4CzJRW5JQtGUY",
  "key20": "3Pv3AaTiCLK3sEeFHUcctuwZiz5pinpsSNNmqVH9GpSGWeQxWoqc5ecnY1CH8FPKbnuoVme3fpwy9LxiQcPd3tTo",
  "key21": "5kBEBhscZidDUk1rbyj6FepfrekCFhWZ3by34ziPQ7YmifARKsuaYQNKrCpWT5LAjAVWHTi7P4dMxEo4V8XfFVWc",
  "key22": "28ANBnnHApeXnBp57mi33tqmcRrGHdxBq7CtjzKKoE9R8a9Uns6SFT6fN1qvw9YW4fdNu8y13ZKegUdKTHq1RwJP",
  "key23": "S5wuHVEE8S4coHJjxT29wuwsXgbL5146nG6fNWL3tAgx8bbeApvYB67KiJQRihWFBokbJ336ozapACjYZEukvKy",
  "key24": "4dAnTxMZyBHqTEnrDscx83HBRfGpExrEcsGYPk3Nqtd8M8T2SeQt8rC7sbKwKs17vAYSb2FtGcBgXHbb6gmVbKSC",
  "key25": "3FKSANv6a3yv5ZJpbS6dr9MySXWZeJ5EReNV7pL57nGp93pvkJGXLop5Mfo2kr8X6Ma8QrAV5Q1XotJNhV9vzwK2",
  "key26": "f27Wqjx7j6ZzPpiw79UFJiaP4ErYcjXxdMoMama6xAZ7SJYQ3ovbdcEXneBHDo4VWy1sp3gV1tRFdEsvvqKVWEL",
  "key27": "4UcW1nEzKcy2DqbMydZ6uVZPUqCzDQGyU4NxvYoy8pJq4kgjRSxDzDWFUevLYqS2ovHvDCox6SuM8PBrkUSkDGzg",
  "key28": "5Q1221h23Gz32bj4KNF2WW59egERvs1NPAAPVcdxcFGP9zv4L2prgZrAyMRET9RASDBPBA6dqDE2QX4PDn3x4s3g",
  "key29": "Ste834pJz3eKVnXGkWNR8m8vGiTfiNPZASK9XpU8yFoBaNE811wNviWnxTyPGR6HYJJAW3H36CTJVmwnNyP6afv",
  "key30": "63h3H3PoAte6nnpn7LgGY8oRd1zA4KaLLrpjMKwjgxsHnLfP31p4XwHpC7G3h5RaeEoeUPSKR4qeGcQgQcPgcnL9",
  "key31": "3sehkuibZUyk29H8q19ThqrBN6oXahk64WFHTJv9wEPCa3XUEqNN4cHeR6x11S6dmFtjJWab5a4KRiwKa5EiypQT",
  "key32": "2d1VfQLc3EwPxzC5xroHmndKJDCnWs8hkqEGdi4TcYq5JC6WSobyrmHpcAmp51Zu1QX4D3MviBhfc7ZDGiBSGS6v",
  "key33": "fqXEoVacSve92kQXiYV5m4LDQGeypP34DbJgGM7kk2KzGdaWkEHaSa2eihPU8b7VTjB5EDorxrDAfpqaiJ7DgW3",
  "key34": "645CoP2UPh8F9YtftjE95GAzTaTjCE727E65xwB4PKvTDmSvzAnvT2PjYKTnczN4Bkk9jLXw99mf8eVtSMsvXYW8",
  "key35": "bafatxiB9B73SGUeiJeLjHTSNkQPAnsDoiiNSdrmSz2mhLpsHtj6nWekzNwfkvD1kNsYBMQM6TeTuaNBBST8a4d",
  "key36": "38mKGL5NTu9SqXAZSRMUM6e3yF9brTRYkT2uUsRcWoU41RYCtkmB866bk3a4jdcdPWXJUrMzLseUEnogs6UvQJAB",
  "key37": "4cuG3KXtTz8GmpB1KSg7mko6yor1CNGTRPUmHTYzTdzc5BJHAm3S1wfbVJGXzTu5PjgHp9X5aHCHcr6aJpRSNniL",
  "key38": "4u1TWwqSsB6BrehkvxxEzbtTqCja1zXgCm9Anbu7QguqTq6nDLAqSph6HgpntRZhN54Z1qGd8rmHcwCn3oqiwLJR",
  "key39": "4F8X4Dh1tKfQyV2jVMLjk6m8HxUrkEaFmFVVoMok2YhycHEwoYkLd4rirJ5h4uhLxEBx9khka1MQoo6yGUirUjjQ",
  "key40": "7o5Gf3Hf1GZNqNiFZe4ijVGMxftGXULRdbDerKDtH55z2NCBbz14S6AwEypVXNoJKGYwRNmDFvBTDgqoquNXwUS",
  "key41": "U4TKpJ6v9tYmPa3pDzJ8uWRb8Xgm3rnzwNhmd5u7mEc6pDqVypvtv5JxJ2bRFKLteZSQJChWK2Mq4KotPpsy82X"
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
