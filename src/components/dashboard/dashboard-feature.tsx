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
    "4SnkVjh9JTRTNoAEeUPxeiFkjcvgTxBjLWVyHy1EWfTe97UF4KDPo9v5NR3HAeyHHu6JAJM5eB81MZKNofQVfTa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KGQfZ8QhSXcmf5wgC5kVjyVjZp8t5v6BEGbGeGVd2gqkfnZ7QDe2bDHrpu562iASSbvkTiaiDu2SLnYmoXtdj7Z",
  "key1": "37cccSCtMjNAo4k2tofgn47bKHUXcAVcoiNTxHJ6Wu7MEzntTh5ZhhZX7XGSAy3RVwbsP97RqdNvibpMgu95V7sB",
  "key2": "2kYjqxPGPwNHcXFj5mFXqyu2BAVqYDGDLJntm81zkTrwYStcHEQ66Ui7LJDWQoT6TUWMNEJNC9rBkKBj3etKpWMZ",
  "key3": "27TVa22X8CJShswXPqFLkmDuT6WTroD2fNX4snAfEx7cYA3iH2BpNKHj4ij7mEKWtLNZVRecmdDwgMpMkoddQPrF",
  "key4": "36QV9xMfCDPa4eR1RLnvQYHTG7WcCEErjU628zpikvqhUwhfDkrKHQovJwrqQCHbZKtpjUYjzN62yqVp47FcJ6Do",
  "key5": "2zsNQdoV1NgJnXjRzA3ZuP5btmmsCPBE19SwTPwwtsrWuLRad58KVXJ4xXoTrKtLpeKEG82XyupaL9stw8ZQKDkx",
  "key6": "Q3LC359goreMrz7KMsi3VB1jTSEkCofBY5Lo8SJgDzHUNx1x9neWimjsAtKbmTHQd3kTvyfaQbwxWj3KxKVHpQt",
  "key7": "3jTSkDFXyck1aJku8CHfbWVF3yDAgJ8iijvehjzrSob94RgYjaY4hFMmnBEbgSGWiFdPYCjvSQUUonoPQDkdBVL6",
  "key8": "3JcDTuamYVqnvzAa4sSgeDJrDf5rEZrFKCzNxC3nPBMzsMDyWRFzKfpGVUgCp9CJ6wHbdA3gFzTRY3JS2QZzEVjH",
  "key9": "3Wd5hi5aGL6q95ZaFJVf4Mm8ncHjD7HkKcbkqvjPNvWDDMtX2MVQaG9CNF5BKwVMJWqF2r2XxFDSfsKh3ueSrrP7",
  "key10": "3iZkL2CisRFHNyte1rzrEksmwkgS8CVa13TeM547D9PKM82ozt88VqfqRdNx3b4bdsUa75Z5RfnNvgArqKYUXBkk",
  "key11": "3SQcPZQwPSj96UuTSJn7zxWptF8gLXhqvVJrdR79dCi8KKqA3DjwJckm1AMoLz85qYZaoxzeGUZA5ixLs9XWTB6D",
  "key12": "3kz4TxKYdm6uNChga5jKUYZRUu23gYC5DQYYznfPqvkuVEbjJwwDA5A8HQGb9Sd3C63LzhRnqPu9TB43DfHnbjHs",
  "key13": "364D6RijUQa7pRvoD9ckeSZmJQofDhkJ7Khk1sGoJ5EhAgDAzkGsNof2uHoBztzJi2WVQ6QhzBJZjNTEY2vbKCo6",
  "key14": "d3Ns4DktczHjYBA7wm1XZbnt6BaJ75xezGN8U6xQPFfSa4QLz3Q3duxRcoGEbe6D3Zee7r2PFHAhfYjXjcLZwEf",
  "key15": "v9dWweCdTT2ndjxyYyrYNAeh2i1gHDjVZBVJSXvpcGw3dHFkGSHpTKifD4AFE4B37aWX3P2ztkuXW8d96RyiNgz",
  "key16": "2WQXmURcsjQCRBBCcB6WzpWBzYZcWDdw1D6CN4jVQy6Cq8Dm4Su2TQn6Ve9PDVGqbFp5B5zxuzwd6JxMyCvXhzMe",
  "key17": "5dMr16fZsm6VyV75tTZ1KBFapKfSD9as1GCUoxhzFaaG3yzCBjCecBp83gn5ZTQMhRPuLbUW2EbiYzuKpWMn6dyo",
  "key18": "3giEiYxTZcbYqMtpMNE26VGK1n6Yh8MzNL8G2m3v7VTuXi9SezZ6eXyJXpNnLjqQe9Ge9phrfS5LYGg7AoGWNcbN",
  "key19": "2XSodhf4tzzpBDVEjbE5gQU4o6tNzwSk5pQ4VYk4cChBKosRfRnC9W3z1s4GQVTkmXZ1TwAyqWctJDrHuvMrX4YN",
  "key20": "6uF8TC7QGQgNGhDwdkKz77mAx52iYfZCFxJhEtC1NjBbn6gs7yKUSx5grzEDUV8ybmkubWBWk3pA7RMfxesmnQr",
  "key21": "4W9J2X6swweTQNr7pmsexmiMGcutfw1biGuVMfZUGXmac24QxKoqsYcLqswkkLbY5aQ35vEa5Uo53wbNYs1kXd4Q",
  "key22": "BxhacN723Emm8j8TwQuhUT9fuTLqypjdcfWKVqeBC1qzbkGQbLaeZmrqdAXBWiEhJLCZ8qCTs96QW62Z2X1jKW3",
  "key23": "5gDuMpzPryAbmJVtYbdQhGJYHc43senqefcmHxWCbCfQ86qLCTUS3esNmy2zVULyNrwuWNe5vDZoQtJPPmTbv16c",
  "key24": "58W5maSLfEP3XF4YFAkyK3T2p88uhzBsv16hXE1RQuJ9R5b2Y6mzYXDg8Ygw9UGSgpYUFS15EcYDYVv85p1kgdzN",
  "key25": "2iDWE8DabnZZT9WCfcLinoTycEGstVkTa1KA1tBwWCkAVkySqsxZW8EA7KpryjPQPTcaxUM4mW2Psmr9kk5cuzq2",
  "key26": "3UQH6comFjANBWzjU4Zo53o7XMUkSSxC5WcuyvPQKGX2MVA1gGF6KwWG35QVFq2xt89xcijrfyS6tFy4eg7js9VX",
  "key27": "4iXhnePREoVTcm6hq7kHv53hfgGopLHFYhpNaVG5R83ERvztitZBLWgLHikdNoBWyifARDckyNw8k59BvjNL1UMq",
  "key28": "2odCbkZeNk6KV39VNMGVEXTf8qjxw3xvJfnzeewpNG5MkTawbC3amQTjjP67Uj7xkDRJeE3zs5Rms1hKStP41Y7y",
  "key29": "3dbouwBa1yGFhaYTLZUfnCJoUxnHfwfzmttHwHP53D89GaC8tc8XvWrY7Da27ExmZGkfqWeM9WX1FtJoiNi3hpgJ",
  "key30": "5hUTrAGwmqdHVsxxWeDUwKfVyxmE6vbTsijaAfrbywQLE5xnKBu1ivMZXecfU2VBgRYsewPt4muQg3tNm9Smwa8N",
  "key31": "7J5jvWZveTTJgFmnjj2ChfLSVMwzB1yyBZpZF46b3FBQvcJEY8BNr2Gwo8sA8yEir7NqdsEqQPvi5k97fcFudL2",
  "key32": "2xov1GZKe2NRaBxkLJL6YGUDxrTnqtkiLMrm2M1r4t9RW1foQcxunVbc1noiZQ3YX1XvffR5teYtkm8wYTq58sT7",
  "key33": "4tdPWVP4cAoznu8g9SsBeznGcujGAGRkzJNJk2PUEvDA1vWW1GdQMVPFD7bo6ZcepkcJBuyJh5VowNXDKcLb6ZWi",
  "key34": "3tQhWRNNStyYjy9hzxaR76ujnaBhNj5FrQ6fXiaG7W3HjQpPjcR9D2dZL5fUiifRip9bRrbJMz1wLxWqkjSvKnwr",
  "key35": "58TS19WiW7ZEsUET85T9h65XDDP6tKr8L1MfCrayoSt9bHFK8ZHoRWKEq7UrVZz9AEftiaRpnxBTWtHB7p8RW23W",
  "key36": "497upiqUE6n5pSAMQyniPmgovAn5BfogoQeMLif2PHsTGPUwPsQkNvVafu3rzt2oThQtWGEYwqc1s3RNLhFAgyLE",
  "key37": "59Gr1ZGE7BME4rVZBsoyTg1P3Y5X8LPhCn6Cxe8kX3qX5GMx1C5Hs68nQqvFginkBV7xeew5nzCsTGkEf5wxpKBf",
  "key38": "4Mrsa629Rq614CF9rCzCPewmJHy5N1DRkC5nzrVv7B4Gh9oBGfE4wSYN7eK7eR78byEnQiCWKuMLnNa5QdTmku82",
  "key39": "5mB95HuyBtPcWS7mywQcC7n7Yt5xpz5BuyG4LU6GFu3SzxwrDFoLECWE5Q7k5uaCNHHKi8own4SYoxA8j8F9BERv",
  "key40": "5MobHA4zBbJEeoEM3nqoemC2FBR6yY4awrjNws7fj84fEJwuAekeXZ8P44QLSs5YLRnv4KqT3GEqVJfve5vPo94b",
  "key41": "2c9CDcrs7oH8UfBhHo7NBsFDV5ZfVyqyD9XPMU2FuW7LU6CrqeAGzcYfS9RYHiYNPyM2kz8ia8teAdL5j5NRn1fk",
  "key42": "nop2YtiBUE11SpVv9Miv1X1XfjkS3E9f7NtqNQ44shMRtb18PAwT33zAUqxaP72q195Y8Bg1jvfuGBih6HbUkjM",
  "key43": "4SKHSBxnBtFjDeMnaKGKE7swnspUNgK4HGm8nthc4S8Q7MxVY6biBLo2YNwrK1cvuam6QeCWKmNMUsoFSH9y8Rwp",
  "key44": "nSWSgMVQNha6cp5bse1caRc8ohVfYf6TyaANC8qN5R3XRGXagCT9rBQsA46iH2SDGdFQE1xzqkmGyHpiW4jhpeQ",
  "key45": "2VcM3ocwMduZ81cRxxbjJXNR9gSTqC1aLZY4DAGtLvYZx6K1WM8zVjkev1ZscZfkZUBEvJ1saguUZnxgd87wv9mB",
  "key46": "53ZYvFw7kPmwDiotp3x13ty38azoy3gAK2a3385yBX71Bz4yNnh8XoAFWiY1moZYFfcU4stkZ27xN2z6quZS49qk",
  "key47": "4vnzkWqmb1F4dT1vxjacc8PWuTvf37z1fj3gb49zuzAGEnCiouwv623xvFnge9nwiNpQdYeLoHggzacu1miG12kd"
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
