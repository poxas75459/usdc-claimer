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
    "2BR16eVuGXBsE1vGkd2jTWXc47qqxq1CCicyfUiwK4Px3x4wwC7RxYJUGYF7oCoPetSZxu3dp4Hwp2fiTXDzX3rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21C2xfsZNg3hgMWkyoAbrog1pYm5PGUZqe4BSoRXf1Sf8vjixURoRyJkcig5UpxYRNHCynwxu5q8vA5EFpghErJR",
  "key1": "4y27gLAEVKH8yCL2mtX588YCBhVUWDpJ1fK8y7fYmHz7aY6nmT6w2avzpehb4SkHhY46vbWmNrcgNxc8RrXwBhqo",
  "key2": "23tst6egh2RTLS3ADtKVrKu26FFJtnuvGYYbBEM5oMKbXXH7fzqVUVoPr8kCcrxjnb1qssdG3DjE7mTqajxkfQWw",
  "key3": "5itAzuRyvNawZ6gWhS9UuuJbHbpkxkqSeAEUKXgtbF95D3eu66mj5nE9vxweqQCjjLXzzXYJcGuJwW2tsm3mBCd3",
  "key4": "2y6CScs7GfoQWnqCJ6Q89XZbp8KwjmAn22XU4pgnmcHXggtPtxA3eRwNxyfnU9oEe8Tc32okTba9Nam8aS27n3kD",
  "key5": "3vvud7vt3oJLyJWLaSTpP64yuwkouGkUPGtCZG4i6Uug7JiYLuZWfU72SJeNhUxh2vGNPz32UjbPBsJb8Tc17Tba",
  "key6": "3AVwb6PVAm3E1ygHs2K4y8hVmSvuaLNUgyJUY3PZN4LgPiZeMGXscDYa71UbaTp6jebCrHgcN74VXwpnk6jPe8mt",
  "key7": "2zYB6xkPHrBjBDCg3xhm3GaMSgKL6WqNLQnxeEeNHsdd1VrCvRQH45u5VdsS2VuBCdWRSMxwdsxG2tjDXHbcowZF",
  "key8": "3Hf3L4c81dQGpwgqMY6qPoxaQQMwXcYQVuWNCveDSLjiVMrVxVtG3Q2yUHWEpiAggRC5dNLoTTynSgMYNjAnoZc",
  "key9": "44fcu2q8bx7pGKcc9jTEKvmiPUM8EKe8oPRpQYhkWmUGvgnCbiS6yCkCGx59hgt7ZMWbvjMoCeG17oZuvJZCBSUP",
  "key10": "5khT8E1SJfhqyps9Utw6K69PfRbbxo7Uba3knGcazvvhm5nh8BGZSMZjfZHJMUmsoYxi23Pv2QAGGVhdnPry7T7T",
  "key11": "GnP1GtQzXuXDRZ2bv3RPi3ynimwAirxKZwVHjXsR7B9TJuznxWdfc81xHQ4aRHYkT4eBruzVzTpqJ65E4BsqnYf",
  "key12": "EXjgQM8CwdZDK6hnKHzNS4hGUVvD8ADQoUwkDdrgWbweUgW8z9wCkqiKSP4359LRCoLCBst9KFo1MWF8JY2H8yg",
  "key13": "2EmabfCLRfwHfxbLC8XyGsaH6TXEvyAAgcQHVP6P5fCx4Cdi3fQF1TVSnZeRvidhHdYeaP92kvdahGKL4B87iFZy",
  "key14": "2Nid8XB9bGwMEXm8VuVeukBpJH6ck6z5TPeUxkKRTrged8ryVGpaRh2ECcVGBvEL8eanjsHGC2prMWxgZKVpDEDm",
  "key15": "4qezUkgBeUYWpavqhPiZAzXt3vWfc87zKAjfTiw5pPWFLbsk4gyQsStm8iwedkrJ6yRuewXBVQ63owJpCLztygYG",
  "key16": "x2xph5vuWDCtJbYLQV8TeQkH5xsQwCqcx6Sm2mBY2CbYHfeEBMHHScT5xR6x7wUWg2sEqEDyWjpwyo1HA1jRW5k",
  "key17": "33diDPNyZCegzgWZoGb6oEK3j2GdRyPSUKBeerSTJ7ChaCM9WQn4GxiLeydt38wdBaU8sQ9nNDaCtrNhe6T5i4r2",
  "key18": "2Cv1iRcy1wUEAdrt6xeNdUyYRT426frgqsFSFD9trKefo4vX1yxwoqjiZ3Ty9LTo6vvU6SaEavuXniTxdbiyMRbD",
  "key19": "5JrcBSytTcXTPqKNeUYxJQsiC6BTL6y5VGehU8U3i3nkynxRtKTaAYkQ3eQP4jH17AvmyoGDNJT1tDvKamWdoi8D",
  "key20": "5kUCidwaBohqLRSaSzenkSqeHQGkXkALWvnwae1UoxzEZpMQ93QbqJufDaRTzLEr8CBteDWb2Y1kDsXxX8XkpQ5d",
  "key21": "B3N1YJpHZYNPy6aSgrPUSFou4hUzaoinEcKxmVQfRrSXfsDw1YyVfTadthdPauncqS7QP33KHryEiW7XreN3F2h",
  "key22": "2DeU5rupzb9MpUkwYSnRmVfqh4MwGM4RCz7bc54VLYShVDSEPVEu17D2oLjPnDbyrpX5toihz7qwk58gF51r2rrZ",
  "key23": "4dS81Xjfo3XU4eBTr3PNcTJymp66AGX9gV2SDk4GoLdhtBxcuwA1M7LQXYtLnDQ8MKCNaej4FVXmoR7kzu2pa1Gc",
  "key24": "41RzA7Tzo5nHnLDRwd2poiGo7MmD9XbvUb5SCnrqnPXnP2R4gKTcWkLPvincn84BeFfqed2A2j6BQriUUSdfAoH7",
  "key25": "5BkvbawHrpJ5VQGwmSLd41v9scyh8xUPzaFb49NA1s8YuJYR6EzKocmYA5Ax47LSqQ79btdUSPcBanZ2UhyPTJjx",
  "key26": "4igWjFZt69m6vp7LAkzWU9oq7ABJZV4YMbqLmyCpi3gYgnwGNzGY8GYy4w1i4L3wVZUgVTndggjyKkJKZnWHnADq",
  "key27": "2mTCVtsfnc3DxaQhsHk4Wyvz47DjAHVnZWAwDqJUE8K6PsHY13F5LCzg2qAubAtGvKCec8uvLT7NDQn4xSNoyZNK",
  "key28": "5DwR98z4SVxJf14inPcE2Cd8butkgQeyZFCSC6ENxGhoKGTjen6CJDYYec99cGLbTcamoWFCwaE4NwrYmVxu2NUt",
  "key29": "4ZvSSuxhUP2nWB6A2EDkMHzG9fgqqPtFo7mHQEBYDKDG13nwQ2yJt38VRaMFTk6P1Fbd6BjP1CE8bxvP2U8zkNx3",
  "key30": "4emn98uLHTr5mMq58pyRDxwTxa5vuUCGYFJJ2Xr4uustSLgaRHAVYmbnBiqhu14e1XNoebiBt8PS22X9tQCE8ZHB",
  "key31": "oezQbHHHMY2CPv1TW4Ws2KDY5qwRXSd8NZgEMtkboyD8gdw15tkQRE46Qhyx7LhtUJC3WDDghpEn7cqkztr4BAk",
  "key32": "5GMkCxzHdxomgsPf9UwSpAqxYVscBTFWZr3Rpoqm7TR8GJgV2h4HnA8v43gsEwQJ2xnC6RkBTcBbe9RzV3BKoDs5",
  "key33": "329gF12ZGxM9CNekgQL4zvRUVGvpUZUAcRsGvwhaLjGFSdrCTHXzfdgeWojzPzsv5o2dJgkwchh6GwPdZfA444jq",
  "key34": "259YzRR9JACQKx81u21EbjD2YUCkEjoHyS3nhVGxYa5hbZUaYqpfH2zBs1oRc98x9zcr32K5wRpMwnYsZGPvmXeR",
  "key35": "8X4Y2D8cD2MZgTVH5kumVW4S7yKWpRQN9bbFQz2hQgK6tLcMNZrZi6CBdp2rNFboKhAeEztoq62YuVfXJRdPKWX",
  "key36": "dwJHf2cVEZgfr7K8L5kcM6G91AQktHkM4r6h3gGGtZuW8pWtiAZJDBLNoH3VQ6VtdDE3UBYpC1vUssEBboeQuGJ",
  "key37": "2Nz66os5eDN4yKV9iNmWU11c1aY8En4vaBTh3EuUrHgRspJsxq9kEeVyBT3HnK5EskMYkBD8Uu6tfTha1nv1bYcC",
  "key38": "3iEnPxDznwSYHzAVvT72YpRqMJUbXcEjqxBCutvGgUEMqAi7hPzb23FtNdNt8nDt16GUToYC928toY4S8yyTsZ4Q",
  "key39": "3MU4SbVvZSNFvuMyKw3Z9yWU1DaBqMEdJoXVWMZfKi627fV3t1THZkRrGNGf4puGwYVHFuDUo1DsLMrPZUie7mjR",
  "key40": "3RnoXPwX5VGHPFDRknrfp991YnTF484ShjeBWboznawwGRuoWVrkoFQt9AocB72FoD1BqU1NqfwB8BYZ96xUfMRg",
  "key41": "a86dXv5z7dtEgTKYLFnie8PRRwW8ZqeLjy4ULKprExPumS93ody5PLcWE8HCDm7JpMFncgV6AKNihJcVpN1694L",
  "key42": "QYvFGL5AWRdWvRhmutgY4HeGm9LM8LRX9ovWFpVZCeVSpDaHqoBworg2jPXjTEiqHEvdNcaYgnJm5Qfmpb6ZAuy",
  "key43": "2dJWMxyVoCR1ofam8EuQdxfKQyLDXT8Eht3cHkAHGmwT6XuP1et28ADny4YNAKSc8rqSks2PhNk3MY7uFRdrt9aA",
  "key44": "5WPtDEreHUqEftvBDEYYyK6aQTroHSWSdduLWSVK1b2oCRHYvwnFer4BRriMwKkKipEs1g9yTKTySFXKuPmzXVnV",
  "key45": "5bDokXkGaVpP2tChBgDpRZAaPZyScuUpVRNYmA3b5EGDG1DR1W6BXdER5599wPsE8J9f2Dy9fFe4NEPTq5TiJRPC",
  "key46": "31okPULEGYvP7Zm9dANNw41rF17BD5CfoPZUpAjrNKpKwj1MGvKUY9FMdWmxJkSpPmJnU3m4RwaWLdWRcC3eUe3Z",
  "key47": "9xDGGGX81uK1w88CUcQ5iS9BVpz8Ehpp8k6zpi6KPfKjmGRN3VJa2sHKvMwBuAgkUMZVbvDYy9vDy7oXok5ueRU"
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
