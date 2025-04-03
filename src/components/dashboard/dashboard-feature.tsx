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
    "2CfDT41Q1adFuXsqupVy9tnWKVQ1eCwpCuXP9Jj7RJEUcbMiKaLAugKsu7921VzeVAbvRu2PZghV1KNsmce1yNBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GicTszWQvLVAAn8GHPq8AMdUVzauyh7voU6KbBCMVUixaPmKrrauJZpmGrBojLMPH2ruZLuYHuqpV5dsDWfSzxf",
  "key1": "4oE4kJhhYPfdoPkZfq5c2TYZ5ZFRxmZm5f2YFLxPFRNMjeqrxt2tkAM5ovP9Kjthtrpe79yGXQTToSgqxHbYSz3R",
  "key2": "4ocpCqGJq8HW3qnYnUSdWwsFDxbPZYKhhx7PhRWJfJV9MjBbhQsFiP3Ntncnx3ddepmVUCntjzvLcDSZmECxow41",
  "key3": "WAZwC4t4RAREqo8YKLsUZzgHDs6VXUGBRUTjNizj3UfVXrXVHf9RbHLJHFfqa7rvBVXxDPtJKHtHnvEf4buBNe6",
  "key4": "d3Ynnn1nwFbvCyjaXyBvx7dNWvFo7wVSPf4ZiAmLDmRVmCh4QeJrErubssqXKkQufM4Jajr698RrMZ4bTRf9HDe",
  "key5": "5mAU8tAnhe2doPNEy9DupkTNsb6h7LYoS3DsnT9zxS8nmUM1j8dkV7GFzz8ukmiWqCS9jWuER2GmTnGZo3Z3nzV7",
  "key6": "34haSpnPdXxPJfFg3eqioCA3afYnmVs4x6594HNxZM2gkYAn7vk5HUy7WXNkokfRXb5kPiUMaRjbqFecEwqKtdQR",
  "key7": "1A8XrSQq79rCnphcFgetZKvEGj1cZus2aZiaSMU92TcA9RmdHhiPeFsDj51Dhmk3U522nA2ySox2D6Zzw5BKgFC",
  "key8": "5iNMSVDEwvy5yK1n4bJMoqUcPFyyFZw51wwxHubP3dviddLgtj99HzwE66xfJ2kgXrgBj6FMKLNzLDdkSAH9cftN",
  "key9": "55Hf89B3yfdN1JJaHBQjba81A97zmCkwUiGtTeoLunKbf7RDf87wSGuNbBumXw1pQ86Nc1KFgKWm2ZjTB2UJcNBJ",
  "key10": "Yqy9vfqijokKi1zV96mauBJNtgDWWmmwYzh1SsENqtGNUzX7UBA6GQczj32L7m6RxgTDHEnRu5NJAKgh2EfBGZg",
  "key11": "2xLjGDyG9Vuv19VLKtdw6TCjbubihnigiaigZrmSBPekJJq7MmPkfrLLLj6A8aDvbGtyKcma7AfHpFeZRWaBRjQt",
  "key12": "2rEtLe22AESQrYqPDaAdNi28BpHGsxb2zYRizh1JqypHTQMFNnYwjws6QjqMtKcr23TUP4cgTXyyRBDaerPBdL9X",
  "key13": "4Pe6XSWARxa4iVe6fusXAGwowfU4zcydJiGYVRm2JmRTVC6gXtjXdnfB9KJfZcH6RnjHnPrFS1WcPuFVkU8YKJsC",
  "key14": "4zdsr5uMu83U2AgqUUa3sDozSEfEJfHqS1G1j2mscvwrkLZw2D7H9BwvmK6hh5tjAqF7GHGnKk184N2GMMQK31cP",
  "key15": "5XcAMkCMLYrzuFwNAbmA3jPKuiQJ21veBUKZUspfwwF7oENb6jN81n7kCS2dgisANCNtpAM2VWocpLcDoyK6DgFw",
  "key16": "Qu7WxZsuBBNccwj7KW9YwCk5mS1P8ozu7w1BZFVcN4xEoL8pz6n7Mez9CX7CzNdnzavtiQ2vukEkFj14jMRw6f5",
  "key17": "3ucuEmswceUqU2xgFkHtKULbEowcrRaPnN1aXaGe33rgYyUN4frQtaGF2LN7WxabsJK15Y1VZSxiuAsUy1sGwD3E",
  "key18": "4iZNFr2TR8otbv2XufEjWnx1Q1kUgK16YsUazjW2TYxDp63kL79Jm9qZDuxhXUFuNWYpxak6VDxvFqWVFJ34wwcu",
  "key19": "5hmRS3RJJAjjfhRd3PsF3XDYTPQMSfKuK83XtWQmgbPKUxudyDWurcjmM7xRUakiMxX3dakk73vCx58WKvGs6e9W",
  "key20": "2GZ9f6Yxbwm7tD5JaEUmSaeRu2Pvphow4Y4ADMayp6UiL7dKmNFAPws5UuGKWJWtKws7QR2XBqsqiC9625cNg46t",
  "key21": "55NTMvhzebBxYASv2J2uXL4SsRjHrAA5PD42EpH56McAPwoeYNsns7MzfsS2UUPPG6ozQwqrVcqa1vJHMcU54TKZ",
  "key22": "3f6fAmFzarUra1A5YEzWpvgkudH1JWech2mRy92oskvpgBXYBv5iWSrFNBzXdRj8114Se3JWhnywMXy8a61W7y9e",
  "key23": "5sLwjUPGiDhErZo91ir4CP6MkUkueYQRjhBxci2RG5V6JumtVZ8wdHuHvHzgSanx1x68MnaQTZzDxyz6S9bkFmuo",
  "key24": "3WUemViSNUgLvwGzxH9jTeWnQFAFupWZ2QacCXPjw71MCPRoSTxzaaUGHNu2cRpLkUeZSqukfNguS2BYfLj9vwNs",
  "key25": "2jA5hjg7cTyJdLgkUGubCG7LMyL7Vy1gKbgHGyH5k8KY8GtaKtMNVmKriQHWoMnYDXSaYzaMhgoDQkb4oFn2LHBX",
  "key26": "576WTtb9SN9xRaq2cboJ8BDoxPhmv52zgrfovqcPHWV97GbGUuC9HMHbebXtP27UTmQAVgXofvkSAegYfktZtTCM",
  "key27": "jkuu72zJ5dqPFqpedwZSSJrpQUxD1nyf96mcgBZfwPkSrNW6sVfELo9P5YJNc8pMR5KfFtu5eSZ54RD2V2UyaRF",
  "key28": "5DxaJwufxh5kvVgAPJJBouZxZwid4EzyCzWGtvPrtTPeAMNnQ1PTsiN1dBY1oAB4TTa9SUhkxNm57SCqUcPHvYWA",
  "key29": "3XWcN8yxLsoQ85VyduR3AhuYGiviu3CjY97rBDeQPPa7bNhmw7opAAqYDQGGe4RwgcgXpyzToCp2398xo7NqCQ8S",
  "key30": "66bMrwrxgsSnU1e4xLU1WGNj5GVfKQNBALxeew4X8aNJbZHgqu2Pq5YfAV7dk3BCrpona5Go2cVutSbyKyEAJJbF",
  "key31": "2yE2URG2RUZ4h9PMhpTzHiK9FNtCowMmGk2wTyPat2t5TeBLkKQjyaCHbshmddbkSSH2mMfhTi6ZewASbTnh2Mkt",
  "key32": "3ZwRTYiEpNXmaJvoNCB8hwYeWEw7agFpkFmx8UUb24A7ZgZhRRTBDbHSHg1v64mMgvMXNwQ2qPwgNayfyeGATBBU",
  "key33": "k5FZip8FsrbKZduLqBfgnPPks4WZAPWg3hWGNvGNWGkfq3eJtdnXL5fqzVNR8mMhM1LbPcNTgp9Bhy2rSXn2R4C",
  "key34": "GsbMb5sHiEpch4dzVuHFGE8QkJNYmcPpzbgzzQv825xDW837yqXWWWXEnZ2LTb8GJ6S2FyqEbFpERuDXnRhZ1sm",
  "key35": "2NwAgrU9TXrarax1wtaYNGxK6mQ5jxaMMMshVhi4JRBfx2GjE7joDtpmHA6GhhArvQZxcoYM2nvQAAxStdiGswg",
  "key36": "2ggP6nURq7Qm2v7boTtNWj8bh3fXx7Z6nrJfZQb43zXZzTqh74NgHYicQCP6Pvrqo2Gfja3s8VgfdHxaDVQGsz3w",
  "key37": "49njcDyeUjhZx5Pm7dwsuvNwzHFYp2Sfc9sCoJDtKKvgBnXH4fFcJLPtSDxGhrD7KFer41fhENZWgMQpXUW8AEwT",
  "key38": "5SVVvEHzqdQTzuXuoiditcCkCzjcNxvY8XDbwpDRKtN29WVq83s3NhRr8Pxnp7tFVBnfWEL5ZGaeHTBa3sNh2XPM",
  "key39": "3HNQrWhSVKW54Rsk367Nfb29sjSYZciZRiKHRgUUy88UNPR9KPACRQ78mj4T6ZraKXe1EhtjAB3RkpZXqNWcE2eb",
  "key40": "2Xmxz5M1Vn7QtYSTp26p12sLTm3X7ygTcPZWF7awDNWoZrV6eiub4B6LGUUyr6ixMGHVZmoyEvVPYdeTRhQQTvj1",
  "key41": "55v9gdoMAQoz5UZAxfNAC7QQg5kUFujP12RgtDDkjPFYxhsP9zxEb3jGv6qoBeKPDUudqrZGKVEartRGEyCRJZZf",
  "key42": "f6m5Bi6dKEFG5q75uHHRNXJ3uGTjPkFR7BgsqPSqGi8Z2nNHwWRWvmynLvXNhNyTs7pXdpNj1w2AcaJB83HTivJ",
  "key43": "5czj9DUUEjt8LLJBv72K7DFCWmzNiHSv6bY1ZELMguAbfyuAkpVxY9W3D7F3JeMtLFxAe9X3rg74HXvpK6rc4mRQ",
  "key44": "59Zu9bDZWuS3rZKs3CTAXYWNRtCFViz3QGgkscJDmBspDSdPLPdzMC69MJbJNfPfGdy9Bmq9jn2i9fM2NKakBuUk",
  "key45": "2BPy34rcPbMZ23eR89Nigz55SJHpwuLoqSvhHYDbAX1yGzjaFYLrPd6po4AfNDG33hAsD8bLVZwy77TJWMhMMT7A",
  "key46": "3BC15WZr8UpVy7uionZEuzr7fRjvAw1gYJnu7VSMN4LxzhbuNcWD2bQHydBM5mZJ2rur3LYLGA8QYjuwv7dyryH1",
  "key47": "5HknV3QLbcKy3a9BHjYXuwYsxwwbbgXnv4ShHeVbnUrJpocPHVminufw3vG6eujSeCb3f848vrYUMsR2ZtgajGPo"
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
