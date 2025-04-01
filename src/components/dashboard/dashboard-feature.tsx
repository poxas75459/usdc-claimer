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
    "5T7rPngL9DFXPDf7rij6jBA1PgN8vxNndVPnpmtJYhBn2HTMb84xvNkGiMTh2cZzxbca8sBCEdUBWor2NWFxb27c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMCHeoSQvoEpdue6tGNFj5zN1Poycd3ueR1a1GMSppoN9sKm6fbh2Us2xY9ZBrtFDVDh91W1iUovwvj3jgbVZbC",
  "key1": "2Cbu4yezLWKpYnJ3wg6izKQMNrHmuoN5ijVfvHnGciLsQhi7xSsmM3fo7MauvkrjtEJy7uaUsZ355adZzx8ATJzq",
  "key2": "V6v1cNXoitfqsDdxWsGb9n5y4v6bC5mgKmFej1uJnk8BhsqywGhxLSYoR13CZUCQRZ5vJ151KxmamF7yRbutqi5",
  "key3": "39QrChE42S1wP5rinSaZMnRysfo8yCy6HtnEqtsAe4bCHbF72WtMNQWnb8NwWfRSeXb82MdyWCM5b2kpPM6TmjRW",
  "key4": "2cujkgfTHEtChAAt5VQ36rCYWerEWMRyFA96bct9hZrUwdLYs8AX8CW3CtWfQp43LKSXymK4PRjHU9MF5FpCYhfo",
  "key5": "59p7RQSL7DmegPd1Wjpyc9wgSGmUJNrXAoNvunrhkrSM8HH9CmzxLfYZ8h2Qtq5xcR8ZYYPQMYRoVAiwMCa68dKA",
  "key6": "bdHCs3y668A53E5x9otLTGBrLdvo4Sg4U9NT4dZKhNEwRyJaqtVwxy4fPUdwdmWa3MmKmCpUjwawMfjrEARiP5a",
  "key7": "2mcpTFbWsSwiHHHJAY4WtDoL67kjq2wtiiQPdHjHtbDfBdsvPMyMNYzqRgh2zJQHBofKD4eQMLbN9EPTNN9uKKhZ",
  "key8": "3MtPQGf8hqaiPw1Gk26xmHFXS6iQHBy9jcZESS7wez6PBREipzEcFxg7MC9iqAnMYFh9cE83xW9fKRHEqJWH2kro",
  "key9": "24S9ku43VYVEapLj53kWEDTWZuDmTCdZWbmci3tsKxVGHHjnAub1h8ggKueGKafDjV8Ykocm6t2U4EA62HGjb6na",
  "key10": "3R8FnAKSNERBaNjwURUiuiffZ2ey5Ajqp1MCp6mJBYLtDuJScvkdjRGHDkKWJ6tbdoBv7sxnXRQA889DiKx2yFvf",
  "key11": "4cqG6xdLgCXg5PXCBaL3xvCAXiQgDqLBCWC2bvX6d5AuBwtHjbW8PRkdmPgqsJ1aNg64eaCs7eRa8eaBxXj9W73S",
  "key12": "51fdC26a8PWHTPwy2QpGWY8xACLYdCBUH5kKCGfb2ENWqBBqC7VApuTayh7kcBYDSgSo3kNkdJragwhoPKvTreSp",
  "key13": "5ktHgTTcLNX8dyPi5QWNPWsWGQX94p1z3a79TysV6gT5VNXQPNaHUKWALtAyfupF8RVC3PHWonNLrxduGQoUxRCn",
  "key14": "5d1ifGjeLFHWyvuPwdAPstaanJiENbnL3vnhYiuZi6uYc7N63w6MP8EsoEw8VbiifvpCp9JgL5YQHQH1zdiSC6p3",
  "key15": "3Pdx2kUgtSNzPKJeXY6XTPzFUwcV9ibU1Hoe5jXAiNHHTYbcAq46XGjpU9hfrYQcpQLQ4fT3Gw6KcaozmSPMUkAF",
  "key16": "3PP1eu6j7N4hjBkYcjrTxPuqdavsbaX6gJzuM8NTcjS3AB2SfermsXVmkBd1sQS8zJ2hPpEFiaTPaK5RnXJJRLxU",
  "key17": "66JKkY9FJGDEPrmmoDNZxcEKtonn5aXkB5jBsCzYw6ijT9MuRyC3yRtog9SiHrgxgbyBvo116WXz8GCsDewyzvMG",
  "key18": "4iBLByLDjipCv7AUzN4hVUMixGS71GJhdu5qdoEtzJRnr7ABmkfFoUkmJYSBDaheW1NvkTfEJLdaM7yYMH1SqRhR",
  "key19": "4jZhsciV1edvPFdiv13qtSsgRKUJdnuDmZNNZ5GaYBXPzFZSvzQSprw3hTxfppvsx1XPsXxfR6sxr2C7ennQbVWb",
  "key20": "4AypoBTKtZsEmHRHT3HssVaq9hfYC4sXViury9rmjDFqFphB9oNTURDtZ2cUfvsSuBAbqcsHkipfVGAwiQUtEuAb",
  "key21": "4kMvGuPUC3dXAMtskvkdDHzvopKTD8vcR9shhvpSWKraJTrmh3C1Xz8KxJ7QhdFj2ctJauBecNp9jug5FK2C5uo9",
  "key22": "5VBh945sYxw1LeKWDkjdbBPYxdaavF6nixRudN4WdggDYVE5UCq4CsA1DvKMQEmSpqpcNLV7ymevmkxg5HBaJFUo",
  "key23": "3RwhQymr4baQkbs4hD9RYed6i6amJAsfbHZkQoGBVC4BASnpawXsxubE1wB7rnS4ix6DXJ7YxQLX3uMwDdQ8tsFz",
  "key24": "cbyu9VP4KLMKB344r5pouacT6MZu2y2m357w1m38B8JYyZizaGdGUUnQLgwakTNjg3FDfXDN7pG22ksk99fjii7",
  "key25": "46zFGVgC4nd68BuqftaXWmpJ1xe3CjRvYn324qie5xjxGkdYiayenhgpdobNVdnMc1hBQUNUcbuoyYn5vYgeAXKt",
  "key26": "2v4Hr4vnULSsbuFgUw3HVRqRMtcXztQEAbUnSRSjb4tYawdeM4jXN5zGmxmCW6KZFumL6JuSDcvjEGtY7E1avVdc",
  "key27": "3mTSfgDQ3CSohMjD4vo9Vv5iZvsg6jECWGjDahg1dnWQUi6rTgZoHifDqAHqWcCWXNowemSXjRPMGTqvz6iwPmKe",
  "key28": "wttUq8r3eep9Fx5Fq56GD65fTUvDAb2K43H9WdEEAdLCi5xbgwJpErQD1SE9vznNBebPgWRkoB74UCJwkiWUczL",
  "key29": "3KWqLQDM878Wam6arJUj2QJupRL2vp4ubgue4nNEkpXzPpnmPtxfNDnMrX1Gw4N5LxX2dmcLbAjY8hyY6D5GFkCW",
  "key30": "33G6V7ZapAm1em6gGXBAQYAfy9AgiendmpVL9kkBVR7xVH9iApfsQriwS4vc4HkUfrEJKfX234oyAANc7caB2ARD",
  "key31": "3D3K1khHcQhZs1okHhfcTxXPa8aJiUNBxkHq9br36UJXTEDb4DMK38YYVzPY2R5YD5c2HSpQwsHxSqPiK5SGYKhE",
  "key32": "27WFtax529Qv8H8QDx7N7jqY6oeSqS4RjKcRT9K6Y4xJ8zCgGpswFex9CNk3Knpn7F9Vf4zQjyBmX6gQ2TfQggqQ",
  "key33": "Bwz2t5gHx6NBCXL6wqAVYfgFdyCLqrjd58aSY62xH3c35uQuJNvSnJxTKnDmxDKyZXcMq1XJG26QiwVH5W4VzbA",
  "key34": "3iYN4zm8T5y6LiEhEbzeAGQNP9E5eJBQM3jAP9sJEa7b5yX3SnpDGpod6AiWQVaSrXfSUJRYQJHYTMwBNrvnpucC",
  "key35": "sKDnAiui1Rxh2WNudVmQ9RpVzCtk5aGDr87ycCja7XjYb33nehgodta5G2GHgyJr5tue4NbxmumAwKZDAGbvuL3",
  "key36": "27xWzFRRC5jxRiGtA9kPsuujSXfKjX7DXJaTYhJT78mPqL7wLMiDtYq72wgCwjipT6RPLtbLALbbzkpjz2U7P2ad",
  "key37": "4r5voxPUtpbL7eabi9FNbcViN9p46eGmjJ492fL7s52qR3C8D1gdiaXpJ7fs3x2qn3derKA9qgUEjXWKKruhAbS1",
  "key38": "3L1WVfXDPTvVkTqY1M8VcyNMGE6QwV5FvmP5v8e4tWVGfvvtdo1RYp7WDmdbLdkB6LGqoTeJQkMzGjJV64GSkmaP",
  "key39": "3SH9Wk2eP4sddpvsU9cnUxnUdaSCmtyLxgrhUUDbriVbQKMT6cWcXoC39KP4K9eJqGSQGCK5nmsrfkTVhWEKDWav",
  "key40": "Sx8AAeMudqvRL9kfvBjZbTSk2MWEbtt6JjPtkVbhADczuBxpS1m5tDRTjst2z8bovcW4tVrXxwfYoSh2CaPsHv2",
  "key41": "3DVNAZdaVWWJgDZeFbBhNSgS1rykEmK2w33Mo8aEbQQqWK7QhnTJvcAYXQRwNYLdpUbtqqo3jWsHATqDbSmoggMb",
  "key42": "2gZjZABQTiTqZ6D3pfhvPrHdemgQMtgPZ4JHwR8hxrX6tFqSPKt1myP8tbMkG6x1FiibjE6wanR2C69HgBt5ukPC",
  "key43": "ty7QodEwaj4ZynJhDtuwnxw9btWJrXHi7tpSSfeYtNbTrTMrhm84LsDSbULccFKhHcKcPfjPqn2uUhw3kARNc1x",
  "key44": "5wUFCmSCKM3MS6hJbTUpoRPKnSL81EMMHkiH2XmVJA5qvyRWLLGiPVaTeoLtzxgwzbje3PSnFKub6zfFiJHpzB4b",
  "key45": "u89hF4qfWJNwCca5X4s6ekZ1PE4ns9cLjQiCcrjkRBzTFzEjRKM9v3tdNdP2bpMjV1DHmxavUitjHxQ8asvpc8q",
  "key46": "4bYWqWwLZDFpwuPwcpeU2L36NbJS92mmdV7nHLLCpga6Mu9XwMJJgfuWi1iMmNhsyVFyhbkiVSju1G2ZdcWY7Pe3",
  "key47": "5J445UnpFCGVbCen99xwEhhzDbwDXmwG3U4j6ghHKUNnXPE4gYH3euyfsYmdskBQcLSXbBDnZpe9os4WnUwKdng8"
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
