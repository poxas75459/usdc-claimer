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
    "3oXHYyrsSanCN23fzkSyRUnyWdFLRErffTZsio35grBmShEP3kSZWb17UpEsJ6oX3127MhJYPbH5DayXAux22GjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22YbSw5dsjbyjfTCkvcGjbBrEUMVsVVhQuLjQF7VWkqQKu1pKktgyszNj6KdDUrZhoJHrcDHHJ6WnxzuEGukmEtM",
  "key1": "5CpRy1ScyYjx84Goa1MN5zC7eGbV2VbAtXHRN63o1tq51MtovuDQReeCVeA1VnPktGzS2B9zbtJq7ggcmwaKNm8Y",
  "key2": "41eDyYDyqZf3nCmb8B2AvGeC68Qb2i7vg9Ac3FKSt52a9FjZJ3pQYxzNSaJRxj2YkGuWqRFKugL6XYeoPbUtFCB2",
  "key3": "4ykkcC1SqCitFMCKFGGudreqS5PDdHH3B7AEkzp2xteqBuwa5E1sUAMfXt14pVkhPE6wNcStWEE85eytcAYE5vmk",
  "key4": "8GrRtVgo1f8B1XjCjpJhvZ1gYiSab3cHwT6gBpuoXpdbzyLYanLYb5MEoz8DN5G9ZNd9LEcz6vHEBxkLyDp37V4",
  "key5": "47WCh2NxQ9rKH7R8znYEVtBidbghHzKabGbnLjhCZj15HhDdXfJeJNAewBex8cxPFuPvYJcT8wqv4iyCQ7ZvaJU1",
  "key6": "5AWjmystebX4yRZCkby5PdoFNAauzDf7jkexj18xZEjkPHGkYhMtyjGPggHopRDyTWehxEn1kFrwPxmDDzsquPtL",
  "key7": "4L4avJzorNqx5sgiBFzM7iC4RqPsZaiqXfAjsTfMyUpv8aLvQkQKfp3xrWXzNuMrp9bmqXc1yHVd7Bh9Y51tARPL",
  "key8": "484xtDJszL8nLJ4za5EJV6RqDKRUzN9eEKmKWCLJP7XtuHCMG6juaWwxLRu5yW7mdx3hFTJjAoKufU2JG9F4t61d",
  "key9": "4xLjE6t14gPNQNKFMzpi5ZbUZqNoQ3NgsCJNNjgkMPuyfN1sd1FY9mpfACqXZD5hp8thnjgiQ1G4AJeXzVyhHpVk",
  "key10": "4UzvrVgkoAmC2NYhx66wP1AbZL2yUKdNRfxkcdei2cG7EdMtX1mZ5rFs7c6zrvCSsue9FUKriaaktqUEh18DNLwC",
  "key11": "3tMm7uFdfAkwbKXQnrGt5LqDrpCjgCTokDD92CFqGd8itukspef7Jj2uJmLgwDt2z2GPEFxSEj3AcRzthfCjFs1z",
  "key12": "32vmn9VWAdjuksRWKDbBjDkMWTBwnHhuugVyG4SV15GHXHVp84ktpSTCzpXxdBB55SvtkThN6mYMCjXsuhCc3wGG",
  "key13": "5SHPhd18V6x3o1jAEvstqwhN2axDN1zcCdHKYntCottAHtw9W5q8rDgD1NSLLs7LR7MwF9m7875KTrJoQJVXNPBe",
  "key14": "3qJNaEuxE4ryn7ndgR4FnSionno6aEpFT4zBLhdJ638bKV8NovpyisNHj8KMb58th4ipbtVeuq2tLcLLBBzHkY3q",
  "key15": "4wdcgfAKShhpBCtz243qYu6pnFjHBQzmbgQFBZsMW4vbe3XYhd43S9SaF938pUL22SoU2uv2DdDCK6PmaYiF3XWx",
  "key16": "4GgBZWGxK4hGRuYbY5KX39fwSEBP8d9poxtfoXyAvLLbu9MDYsUgcLEBcoTteW2PMEaXvdfYYYEwST12Ub9Lcruc",
  "key17": "4sMNKUV2Fpstbh4UxcQahvjvBieHSRyYobeLfuquUmsmugeMQBVryTgNcvTa8SpU4DH8XB6XAcW8j1exVr9XuWW",
  "key18": "45phSQh9vDV9M2m36ydojs5Vx6Jokcs9rWXQbja62MsTQdHYNUX9tgCvbiSNLULmEZgZTvqw9C3JVWmi6Lzms77g",
  "key19": "xq1MTSBFJ62pmLwNCjYS9kDpRzFUg2URHGqS3yAZGmojjJq2aTPi5xhsf2aprCp5dkw485Boks6XXFpYRLzwpCL",
  "key20": "3zU9zZSEuKRJtoKvGZMJuHf6zTb4miRaKCLAaopVKJ644Z44ioifSb248z7PZY8UkWm5iUjU1EkKVXqDLVAWH5eb",
  "key21": "2vrzztF5AK3XRkaR9noN7FVHk82PZqarNQNHjuW5LqkE8ZFCTs4Y9usjGap3cLbocZhtbuNVnaohpnGsk5T1LEsH",
  "key22": "2QQ6Q6i4qU9Dw9Lp38PKX4dM7bDQ676dH8rJk7hj4ysoJ9FxPiQrniHX96iecDDA28JgUtMEv32Zzbm8oE7jFZex",
  "key23": "4aki7CHUJBynEJ4KtfM4qea6EFwzdgCGgyNANUaSrig32pKz7np45pa9QsaXSXcGr39ooCqQBnbHn9w1otMNfGin",
  "key24": "2CVMX3JY7inADWzBtZUNxBkU7bh7uWC3FR4RGrQAbWEwvsSZeV936WD6nRfcqgyStnVaE8J2obcSD9rXKeKSQMet",
  "key25": "5Czx5qJCYVLUiALbJNKzJyT1Sa3ceFQn2kzz6mJqGJkEMiuV1h49WZ7KCaXDS8FsrmBdyesGawUQVuksspi7setb",
  "key26": "58HGJzdJVytpAPSbgSVFi5tw1bous2qiEsXdUaQjgQTP1F8Hdb5FKBkdkRukSLk6211LQgfq4MJxoJDQQaJGo1WM",
  "key27": "4Dp2C6e4n1NxNKNWy6Z1wYNf4XSZufqEuxrmL7CZfRsZh7Xnpn3AXYqbEwWMNjAamd2NDwKnufUtAtbV7zP85BVZ",
  "key28": "66USyLDHiptSJwKqhJcZ8PBpxGuiqQMPzP7GN46m6B1pgbzBeP38LXYZ2QijNronNCFes4jaMHoJQcpw3RMfkf9A",
  "key29": "61nrpvPGE6LHka7xdREhXoVPRFC2hLsNauTHogsF9DxJfcWjF632SzxuX1Soo6GRr9sJNLaLgnpSyziNNTBRZvWX",
  "key30": "2b7XRdPoUeRpNmoM475mg83azKixar6RZCHrCLSGgZjqAHusmoGiyN5GSxJroGmP9D26L8ounJVG553GFvFGqjfc",
  "key31": "4cfKWxFX7wGr7Ah8LJ7bmLRoA3q4D6Hez41fK8FSpg6y1y7LhgYjPzPyytXFhr14Do64mK2wvi4GGn6kdZrPY5hH",
  "key32": "2gGHT4Ga62jHdVy92NVN5RcY9fChF86ExKURvNJBZY6NfnddV171v4ykfgcGWTcSEs24K79vuAUd75zDrWbe2Dqa",
  "key33": "3wApcXapLh2TNA4FSbY5zLnUhDbhnszKLERkDiGwukYUqut88baZpQMmtHWec4H1FzDyy5wXJXTqTv4gXYHsicvD",
  "key34": "5kt96sVgisfA2AxEpiXrqY7C7FYdamQhq3RxZrqPgpeLmRDoDoX93sbpy38pHyeW52bDTDFwwfhw9wa3zdUcew8t",
  "key35": "5Dq5LtaWGovZnKS5YNgYa9MQnV4WGM7f8t5SVJtqwXwNGp5YD8boMTtYjQUojMLLxyacJaKsSyg3z2YEn4upRPs5",
  "key36": "2RMbUztXUQ1uQ961CAzK3Z4u6shqUqeinUzoaP31R2GgLYmyi9553we1RFdcmVA4ENo4ByFoCSGnhRiQfizCfnSR",
  "key37": "5aXQoWLBwEm32ErbuuyACb6SQb9wVb9KbP3YbxWcxjqY4MBWZEe7mxmcKAMvWdiu1AHYiJXnMtW8FnCKnsw2hQqS"
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
