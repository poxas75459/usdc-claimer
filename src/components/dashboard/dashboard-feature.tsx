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
    "2YEbEbc6XKy8Hb6jdwLy67jNyE4oi7xjJnmihXvD2Lu2Pen1P73v5yoGhyCRf6y1vaV1GuXWcGeouHrdo72EpS2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qo8M47onF9g2Ae2t6fTWVXJAADNYYygmfyFM1qjugDJBSFaYvGkVbGLFZZFE1VgFoAUMPfpXzzk6A2sKQawPCV1",
  "key1": "3ZaVeN26RKJfd6mxxnR8oDzmx1T9jUUKu9RMszT7v9UKnmLYVCuyxRXGv8twUnX4vhPyBS9FTpDZha3tVSYvw1TY",
  "key2": "iyzLrfn4StZ5SVPaxM7ujUgTSdxvEttLTbFjSAJRMw4stu9KLK6PbsL4pAJLdMKXJ2pSbfzWARPHNsSbuXzFS4d",
  "key3": "2ACoZZH1CjLjPaZ7WtNET7oVkseinuNJeVVJqy4crX2BFgyMLs9dkBus1w1GfgWc24Aac5hW7kgamCNpMJRfiXLL",
  "key4": "5bbHwQcHVwh2RqijwEaW9uyue2yAMpQeu2qW53cETGLTumJfFzKcZJnEfaPr76sH921kEi3wv9vo22jKurLBuHer",
  "key5": "254r9PJ9GdVRrh8cGQvJ2SWmKGcDV41cpmV74yKidNZaLd7x1zkWAn3Fc1wQjACwkN14MFAknjaaUFUt43ZDUyod",
  "key6": "53PGbtPwVzKYRiznXZymfPkqmWrGfsSbb9xYQYVrKyoGmZQto5ZhvYfhDTiyFQeAAZymWniZ6GBzEf8CabxaxrUE",
  "key7": "2jzMX8AhyC5xShh2agRWrhKDQHzov6sVqJqGEXi8FcQD3AU41uwaGaKvv6reBj9Jut8J2K2zkFmPs4TewPJGwWZu",
  "key8": "32ZwPGS9R5wDqs7fAdhDXRwtkdDBsmEhFbnvDz9r2di5KyKWki6WhE1XYQPzD84ZYdia1qz864cgegBrTbroARNJ",
  "key9": "2nzwCwNPYrDSKmpxQxjPkctTeBUCg5hC78mLoAs6hs8wd47roDwAF2tr5Lt4FLSa2WXTaxdcXNXcQu7tvUqQQY3q",
  "key10": "41iMYTPPiVy2eCZvZnC5efvHtfD26hHHtdcpQ3scefSxojicBFVhq4BfFpzM1kQbq65tPaEApKDABAp5a1nPv7EC",
  "key11": "58yAhchzEQa24d3hzn7M2wFY9ADgy9JN7TPLgzizMozBL84Rdr1LNNE1kih4xrB1GNDhaRuFzJuGUnKyvLCnSw1s",
  "key12": "4gECiuMVtCisK7Pvu97ryBKr1J2wr8cxUSeUEJ9sgTrrSHewxzBqp34ZYTCEmHxhWkSJ1rVoKbYnsM6my3e76MJT",
  "key13": "5mhcrdHs6x7FYYubufAiSj1ZGRWw82TEtCFnyfVgzb7mHTrJYzorarnkqdu4BCyzd4h67ugvnUjeNGWAw9T6zBJt",
  "key14": "3CceCUBLqXJ8ThSJ4hrS7jdjKshhHuU72t73o8UiMPG5tHTMsy1omLmXCHjCBKGHKATpk6uRLmjsTQRmQ6roxocW",
  "key15": "niMFfsCjkx3i8wnGwjuxA7WjMdFefZbwxu8R9FNsxVvMVGCHaxSN16RWcLVcv8hFfJ78HVUrT7nEhRBkBJ7skLj",
  "key16": "4TGhBFEF45YZSaSi7kajtNJs5shTQNXcM6Ce9zLaTP75w6UbfxDgvRfj2e1L3XuhuSN2isz3ksqqkB5czX2yAKmS",
  "key17": "5QKcLcSzG1qDvzY9ticRxdcG8jLtrq3standqp4w9jFwAj8M5tmEjHUF9RWLh5JWmC8gZAspAkYUJgqTyGaNfFR9",
  "key18": "5zgB1QELEUDVPvzjQHLiw1mATszps6Ndv1vtvjX15toY3PAnfm7KfdQsKvL7W6adqP5AodXpjeJFTN1EJ5Ae6bjg",
  "key19": "2AgdZykPTb9mPYEe732y15GykLk39wUMkHPi1M5ewLJpaiUg7bob4Pqkm6wLE7VhnXMLTB1jTgZDvD6ZBvtveWVg",
  "key20": "ySFX1GAQx9MXRyAm6AyFDjbnVHZS4hNVSKXHdUAcc5x5NaoehiFSriCLewX5ktfjPpq3PM2yYGjGoPHLSzudZMK",
  "key21": "3ewBfaW2BwsXWL2DXQzGm7KNUFYx1SFrNZSLvHFPKYXitGM358YP1tnvCGL1WuWFLLyVCsdvJaKNHgu6j8ebcjPd",
  "key22": "nzDRzQSFzj5vwyEtmvmNenQqq3QW88Rv7vKmH9YDdeZyQGzRDrDS2RW3rvW84HrXdDfbYMdVwwaUP4MHsQaZouU",
  "key23": "31ZVUZG3GzBRLhnQp3aD2pCETvrAeXZnGNoysJX2CmoKhDm71d978CJtHmpgTjAGmSQx8HagYuso4wNnPC9XUntW",
  "key24": "4zozqWF9LL8jgndkXNERFTzEYVQCE3Upse19sdxmjRJLASfiSJiDnJmCmdcp2FijUBk9gkNS3urE5cfsxQmh2iEB",
  "key25": "3SMK1GgfUqankKy4eJYphPjRwwYqVFX47MLvymMAmkX8S2XYTqAv8RmiSp6GVe2j5n4Q7wDyVcQhAnPP48d56PNw",
  "key26": "2PJ1SNYJqr1QLx3CC9YHJwUTZ5E7VXdT68QSnEcavqpUBpLs9dKc7MmSKdTHGpvREDnJzL4yWQbVncCKuC6RmpY8",
  "key27": "5Dfw4sZq42rxSk2VNtP9bpbpVvo4DZ6r4YBRCAFoNPwyKeLxn1aRGgeq9ZTbgPyTS4wSMFLYcMZ5UfRW6AignpJM",
  "key28": "3emGpgT6UKYKrxgTreJh6aK4QgVPvDRAd4jPXayu3C2YC1Puq3MagdSBAaewjYaP3YgJUL8Vz9gXxGzAcPo1xDPr",
  "key29": "2zVbFdo56JBVZkQ68NB2hfqBB78pZQciyCRXNJXHCFFjFPjJvSDtR4g3DZ64rGr6UxQQ3tDHqYfosxDZUjBykgZE",
  "key30": "cN1xdyBE73iwi5av4tUoWqk4PjoHmoUaiLcYpcN3o4cY5PE7qUmez4ymEY9Xp7WaMWHij4e1iW9T45txHWaU7he",
  "key31": "4WSAW7n2AePnJ8khtBXuDow9AXTL1VpQ8rewV8xPpXWyJPcXEw1bfL4kSoRf8GjjgyRjHfQk6Quw3HvmmLyu58kN",
  "key32": "3M4N3JHfzGbPefTtQGfcfvXhidpXxDS4cEF42muZRPf5L83vRw2drpmThhZmymv4z5TdBAGW8bWLjyYe9N2V4CDn",
  "key33": "5A6vcJE7UhSkCvhxe7WU8EHa5gjeo47L5Nu432eSYn59PcrPYh2uwERZN1pVU4eRLXRiU1BtDKB8wX4KoktMBy9D",
  "key34": "4hWYTUj1XHPGqkoUqxbRcaSTZKAo8LXtEAVwTB2fpRjURRepqaVHueG7uW6Mv7SG4wKZBF1FPTjzZ8VzqmmBFfZu",
  "key35": "sYXiHbPhTFuGcTfnMiqquTeTdib3zZzCtYazV4JKJSCLoxTTDeZConB5kgNorJ31gGMiUod33syPxxXZS6vG9xp",
  "key36": "2iGn8fAT2Zbnfd5xa62oUUxKtzS9uUU7dMHHWTwPnPUEwRz7cGBUiYabVK16ojJQ8moDHsrQfqW6Q29bg6Gen91q",
  "key37": "5uarkpqZjQrRMobzHykymssbc9T3GLbENtutuFxj8tTAaC4t1mu23eSC7Y1BLxoR7CqSdrDWP56aY5b11DaGAZFQ",
  "key38": "3xZb524hdRCh6PXnEqRk5htGMYDhLiwkQj3x2tLMxrdHmcGobS9zedgNYY4iELWbq3r9vJ1D9yWp2uGwZmmEJAqi",
  "key39": "24R5bgf7DfB8xjfbYL8kmytkjD2hXsG9hRh9MihECycnArTi2t73vt7AzsefGBZ2mj6vbmazF6L8RQDwepfHo1Lx",
  "key40": "2QvyAbEERp6gPjnWE6Ypo8iqE8vWMK6FXbswawGkMn4VyCPizcbGYRq3hg5Jdkx59rxv5uNfv9Day9FPyv9wbpm9"
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
