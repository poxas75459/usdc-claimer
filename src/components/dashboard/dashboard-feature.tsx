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
    "51cC45bL55V9szGR2mDHhizKDgcWbiwYADCveQDgKw3kHPmRokaLKUjBPZPw9zWjewKrzY2zsHZjjC1JThwJwPGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Gdtw2wXAnKeTJ6FM9zQdffHv4cm3XAzpsh6W7pQoTzU4L65tnEEukZYjMsRLhybUYmkHqvpPZpuMe9kXvEt6UT",
  "key1": "2HjVjT741vgyHUGrrgbXW9YwUBecTN5zRuRhqzJysmJBybkCADTb96C8ERRDHzBGuduHfMdrVq6ZcXYG5bDqPHSM",
  "key2": "4vL7L3e6ovT1Xw6i1vb6TcGxWu91MEo8QdQh8JghKQaXrThiEGjfWhz9wC8tegZ6hKRkbZGWQregt7vRfKkW8UNJ",
  "key3": "2jzwuD4PUKvuWSYFCUyptNqT63iSJy4nrtMY3twnVFQMBadR7pRWJZhGWi4LyZoGKRP9jY2ZLAKcA4hWA81LdPKr",
  "key4": "3LQtjLv8EWYjLfNsrSyNJw5TpHcnvGgvi2A5fZUrceKTkTV7xspYGe9YTnEXit93k6mVTVkk7Cw3g5bTw8dp8SFe",
  "key5": "4s7tRAgxX1SbaV2GpZ7gheSmZoiVokyEm6dxpnmyaXhSNS1gLQRLe9sb5iDPh2V8jQdGQytWcQstSQczVu349DWX",
  "key6": "w15aZyLuxPCtL4dckRm9FV3yzgotaRhXyMJ1cnauyLYPr5qqSZpKcN3fhtbxxGVF7Y1KzuhSxZX3ceiKx7BezKi",
  "key7": "3HoPMarQpe1qd95kfj5AGUtztbuJgodRyKo54Fvs7MQUyG9YadYBLTeadzBFw5N1oQzZGRz5C5ZomjCNp4kq3Yru",
  "key8": "3XyUVE3RzFgct7jDrozHs7Gk56uwyJWB8wSFMg3w4RKBawhYXa6ELS8Jbn7kaK5fUSea5NHzRY6WC7qer4j7TVfX",
  "key9": "5bCcPQeZ1otRpRjnPKr7eKhQJfQPSCxGJGboWSGhhkno4MkDmwr1EEkVk11SqGEE14vMD8EPo4LgzSXarsTvgR3P",
  "key10": "Rrse8K6ArfXqDGyPLm3svvdLoNgEotJqK7UzJJqyFKaMtGJzHuuSZzTgxSWKnA8rZvkyMJm9kWiSQKdneRyVGZc",
  "key11": "57qXxZGjKkXwPuPYha7WDabs9FkJV88b3q7V3ev4bndfC9q9YAvH9WCkgDVAdpVrmmNdB1j5khDHmPazSvpqGQQ1",
  "key12": "425nGbQ9yxZsRkgW9KqQK1HQRBfv6P5U54YkJ63cFQwrFfL63iQ18Mak9niWaEYaA56Xn228KriQE4odqVA9yo5H",
  "key13": "25rjUoiH8bR3hCBhyf3haDSBcsq2PSRjczPY81j1gJ9T2NKebDRT31KhSAeg6qnyQTn76ZhEFmu4RshNV6PTLDnE",
  "key14": "2MdSKjBUjwVMa31oST6iopM4zLvps9hnjwFcvSL8kYqqGaCRVSUyPwtQUeucLVYjfuneM8DGtWjgJSJg7GX1QpTz",
  "key15": "34qK9hpvNGn4jVrK2rsZhf5V4kBE39sYBcAPZZjnpPThQU9bnUBCZsgw53k59v2h3VYMvhmsGvVGKYFAksbUe1sF",
  "key16": "4rZpwD72qUoYtyQRb1YqATF6Ga4dvDTM5Wfqz29C78hfstd3BrMDPPAFeb6DirFAVwf5qiFqEkh8uzkJFAms7NvV",
  "key17": "3pRG1XDBcHx6waupxxnxgNHDRYuuvFGyHSk3tyX9NmQBySFDmLNFoz8EfCzsvQQeyCXUtSW2JCE4jabrqKFCz2SY",
  "key18": "5Rk8sPuukEMruGvcgtGDj6bHESxrvDKakeSJSoai997K43mbkhtafTGJ1fnubrciEYAJ8zAv698QdSpmonU7jKU6",
  "key19": "4dKvpxTCMoaZL4fi9nyR2dB9Wd8uxfNfwuxX9BATtAspLgPGEVSHB5mPpXnSm67xYZc44aZbm1R4co1Y9cxdgNVn",
  "key20": "3yQLBV18YURBmmyedRjMqWZrsp2Atr9BQjddgVXac1vLgNrjZqgrincBd2jhMET9Cn9y7KhWpXEiSojkNHwVnKsG",
  "key21": "2VR7e2gkuGrtz4xhRCx3YrPHuiPJnmPjVrd17QAwsKL8ZKJaZdxH3hgJpVs3KociYqa7YvXJakEozDzWBn4rR5gC",
  "key22": "5g9qAhC5pyzQtujr7qPTfR4BrhwbLRHNy3H3YRAyEYeExH9SeZdPAoupbhhiDWSyDD5EKAXE7Zzj5KVszroMoez3",
  "key23": "31xw5MZKWxtN9iC4Dgpqi6Xgs3862dGqGu3U3dNXFaVbBzHNh3bsUtQHCMwuJFA17VriAAByYXc4Y2pWFH4Wpadp",
  "key24": "3TSaM7EXoRq7acnFiNh8pKcR5Wd64r8FP9EB83tmV2Cp6cQ6XPuLP1d4VPq9qJhAUw65mXihF4DEx32zPG88mVHj",
  "key25": "2XcXN9cHUbtqedquEy2pMkNueQvKwifkhXsHqhU4v3B4Q8qLcvwjbkDa54nLzBWydtMUPVBZQhTRg57j5mBuePCT",
  "key26": "5o7ckjWavusnzuqMECfphkPJN9YZ77eE3iS5RNS8i3gVhJcAQ9KMh5NgCn8SvhmGzGeErPnjEGxSohmos3PBCJva",
  "key27": "2w6f4G2rgV7GEfgRWd7AJxtsaNzDf98CNzX7EF6kAGCXXz9XHfXR3LPnQkzRucQT6yPrfAtjfXj2b936rzobGRTJ",
  "key28": "4431BQg2UmKTcnreWFRTh58qH1uZYXLhUg5v1J78MwmXESxJ7JoCCk5tf6CtrAfvCFhUyX7mktmhWEK5UN1mHDfD",
  "key29": "4sEh9fXHzWE2MgRyhLL9EeMDXtU42XgfvE9LCWVkLawkVGfTLbN2RNaK62jAaBfTchX6NDUBuETW8qdcUFhD3sop",
  "key30": "2Q2S4tkFq8bvGKCnf2C3faKeytujSF4H4yT1XgHTSpbMtfqC8PHdR9TiGLvuU6mYfpaGy2gQGp7gYRZzkdju1Eix",
  "key31": "2rJfckUepYuSCBa2tcWVAEKAurGHVwrHfqk3M4McYddGpFJX5iYfWkWgbj9GQBLwUwwkyBDnENrMxt4pSoggKUgz",
  "key32": "4R5vs6NeHEJR28PWcQG8vQ3WrHJRoB8P4r7Gb9H1WXW9uxf1YrpKsXHjzvxEcW5oYPmEe7eZAu9npy4S1eVvnDJL",
  "key33": "5EQmXHuGVwyuiPdV68HqREQ7DRyR9ou4k4JqPnZttg2Zjjzf6tSESaxj7ZhpCwjDnPG6ubgCr9y7p9ddShNSyxrX",
  "key34": "27bxbyrDXJa6NDGNnEFHHRBsMuiQAgvGJMk1SzdDESqoEhSErfgMzVnDK4Qwrkm9UM8Pkntg3bbraLGLCf7tbSdT",
  "key35": "2PgPzBcNUbxTKLYbr1dH8YafYUBqbs2jcCtd9hXfXjpgcq71bC3xg2ysW911ZwXbEYZ42yVe381V4PSoEtojcEZ8",
  "key36": "3zzLvDyXdeXaKE1XxhtYXMFc3jDJCuJN3jGRp4wYFdRCVknfyx7qxJZH6Qv5ZHJ3pdTuaQE9mBR54kWuqDNZ6vsX",
  "key37": "3Xp7K925BMNmRfssV7Dc8uAZLgPKRMTNRg4um9hvtb9pp7zoEmoxxLBtYQjfyXNaRg1Wdp1RM7K42RBsZGweCuLi",
  "key38": "4dNAEzMbiJQkMYvKDEt7wSeXaYncwVsNTgp5ATJ2YzJCfGR25HpEhQZedDHePigBfcLK1AenK3Fwj6oLZy6qteH",
  "key39": "43TucwRsmE63z9NmNkowUo1tv3HD7q9oTtkKYEpDUUr6upvFBaVhrnBSLLQwAnBucUaQdmCCxRkzx8mzoSBbM19y",
  "key40": "4ghk7uo7MwExYtpAHgL2E4bGAetgrTWBnHePTL1toxXHLcb7k9HystddLukKr8EezvEJ7hUBz42dargmFYWJqH8s",
  "key41": "3QAdY2yRnnXVin6hXKzBX2kkWjp23wvQ8gsRdbB7KaBPFqpEyYok2xgkjm4ytdU6y2hM8g7aTeeyfaZUGepAjwP9",
  "key42": "26qWxgehBuj4BYwR7HhREyEfDPLKJy49orSJkuwF74iCtTWmzs2WdWTooYmcsHuNgvz8mQSkjuC4J4fs4ANP17GN",
  "key43": "3bvEZbh1SumrUfuNQNxCTCU9wfFDUmSWKZzVbgHjV7wRktchxPA3ecJi1Zv5DNVLfB8eF7EWvLrnwJTazTLqVzKr"
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
