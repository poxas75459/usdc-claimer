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
    "3ffQspD9hFWFWXRKVrcR21g6tYYyv3i96AeFk4Q7CVNTzCaYkFxCod36a5MHMZq7n8QGom12HnwSgiwg4s1h14bV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R6NgBZjuM37trTXuq9JfvvjKyuAbsqFaJH3XgdZhcmQ9JB9voaxi77EiUEyxkW8FQmi1Z5Fnib8xji3h4yo93Nm",
  "key1": "5yr52dsPExRTft9Bry4mq1EywvTQACeYbpR1yq2D37Fh7yy13zmTbPEcFxZz9G2jQ1nxgX3U5FqEUvt1h9B7FHsE",
  "key2": "22UaJgXjP2JmyCA37auMFTL4RDF8Rm7RKx47oP1gp6zeXXD3JzDjejx8pDahLGiTXfydM8mz3FxDMi5VebvK2PZE",
  "key3": "2M5biLdzhdGqexUYrEwrYK8FNcFp4yEHRKkuthzmwuoBja4F2YDUiziy7w8MsVyp5Ab8vxEciY3svpnEhrDu8TgY",
  "key4": "3sBS7dBkypyXvmK5K3fjw7t6PSo9BqGq39UpZQX7ipqHGwXgvvaHRYDmAkpAynxRjPRgsf6ipFkpzrN1F8MZRLP",
  "key5": "JcFwsP8tNRrXxZA7sLyvaRueDwQWr2dxCPhqXRUb3kLDneB1KeftthqabH3XbVKpq7V1KuwhhXp89PB8u22Snvb",
  "key6": "2j2yb2ZGyVg2FbheXbthpwij6N9gSzq68ZrpPheAVZqzMtQfhJNh3kxEV5TmPSNz4gP8HwB2r6oBzHGmUyFzKdw6",
  "key7": "21EJT3pP6ST3hFS8iYdg5QFxLiZZDcHiQWfkwwU4EDcdAmd4aQLDupcGkrmAzUL5eVYzvZNUxQmkn43mRDY6BFDG",
  "key8": "esB1uAkWHSx9Nuqrb2r4BmtzQw9qQQPrYnaFin8XsQSEJpY5wSZPjwLTdwYBf9ffpd2MyWh9sWBqdUzQhjLGCGG",
  "key9": "4EB5SbKrYDQuGpkcnejYbkRN7sFGWkkDWoU3o9UZ6yVXB4uNF4gnvek4YHViwQw1HVfdqvevR6JSRfaR3zr3nhsw",
  "key10": "37PCVpsjikwpDG9RstAAq9HCzN7Z3ovHRXFEAWcm7S5yhVkZStuSENmdguyY3ZcDvVjNqnNGsh181JiMB5Nxe3Nm",
  "key11": "3Ddyf2QRC3CE5Cxdvia9FMR5VB5K6LZvkdRbcSjj4B8Lju51HtGz61h4qMt38RDVt9BXJm21kXv85FrVxn9yyybK",
  "key12": "2rk43wZPW93K2bKC11N1TSqbBys1QGK1cGQc9jqrEyoUYdLYnNgYLbhd7W57E4pTAGAQkcqQSWdXXYYEY8qmhhG",
  "key13": "5LY5YYrn4n5ggtQJqVfeqyHHvNia9tjVibagmspBLaUyVg6vH9395wdwN8Fgu87B3XVqw7Xuyt3oRsGaG7gUZKuS",
  "key14": "3JkDv2Knzw8bgDa9i3oUG5MihAjnhufbdY9CPEdY2rJnEudPwTLjhtYemgmFAsp3hu1YchbPuMe4KgwxLkLVjtjy",
  "key15": "2nQjqRQSgbtdVnPCcXjNdN7Q4wH4KNtCud8SeMwo6DaeEMei6M3zG2Xs7sRkWnEFRBj9dCuhNRSgGv8rm3xEWN6n",
  "key16": "31wxTr7ucAsihAsMueRY2yxyxEJTgC93aHrsg1wReWsx4yMpHFHB1yrz1Knvyw9NzHGZkXduMxaM54RyM4EVqqD1",
  "key17": "5YwARvwBcj8vCuSLJd5auEZQF7ZNGLYTxnpfyvPR3FxJoQ7JKdAy9obyKoxFEjx79baSLtMYeuxK4DxDzdEs9A8o",
  "key18": "3icAemUkzPn2tS8KUbrJRtbVcwfukb8T2PWsfR3QJs7PTEmXZAv6BoyFSRyJfP6SEUHo3drWf2X7B4RWswCctVRc",
  "key19": "5hUExsrKRhb5Wi9Befq7tNMbGeKYim71EtcT5dckdpmqpYF6BKhotGPWiQnzGt4YER5XMcBaYVVu74DuiZqp8Ges",
  "key20": "LVojiTn4A3GqtNNV4u1yNTjRknBZ3VaAj75YppEJuzHhZxEcZMwXd4tu8tw4AqFipWEckop13sJGp67TgMxeG2j",
  "key21": "3tXtbzWwo6B2QSyZDZEgqTjM6wAKqJcm5eZ3T9z7FfTR8rjUTKph4tdSpuun6fhmPTZtbgZJ6LcGRbtN6Qv1wzvo",
  "key22": "c9jfeboyuFhrg4zMSpSDEFvqrFvMdvqMoWKzmiT3EVghuPN1HH9CqHrKvMYTmyryR4Z4w5f5sVARNqkKYnmzyfq",
  "key23": "5K2TKhE3B3tqghRLehrcv4mVVtTzq4zEs3e2jPZLFPtdRWDzN2XkAjAh8qLrFDRyg5HkX5mr5L1gr7sE8FMTkq96",
  "key24": "5irNWrtQMUH4fU6Q8U38dMEh3dzhfwwtydndbmyBhZNZPpjTRGGZqFbPvx3u61SvF7pk3JKSuFV7of5CQF6C1zRv",
  "key25": "38xeHcesKqjNETcmwuzaBHzSS4NiDznW2DKaEdswZAKdiP4AgKVv7euvAFd6rsjAgDmCrHXfoWYNrfs6fUV9xpvA",
  "key26": "2kYcSroYUjCSJySiVW937Muax31PgLbZZ92WjSzTEvipCu16Tmt2xMTHVj9ZjnPubWYeCWzpoK6FUQEC6vHJEbUj",
  "key27": "4MJkMme2dXGHsczip5Ag4FuroKMD94P9MYenrFjQGVcN6zT9jetZh5YN95fjnNh7WFVuta6tCx3LWiLfcYdPTbxW",
  "key28": "436z7jehUPjti8aCJhR5DG64xQ53DFkGSYehGDHeCggAx5LedMbb8Xa1dZQYmun7yjp31kYWhXiKyC1TLNxyt8eq",
  "key29": "4hp96q1ojrWtfa5M3c52ZYShgFXbftzmZTs867AFLwDjRMANV2MiSU39qUvTu46cnJwi7zz5QgSf5GcPraJBhpb9",
  "key30": "divvgpcnyuqpiwyZZkcFMbPRKnS5odL9Kd3hbJr1LxKHZ969SdSioh8tUP5f7X94oMkyUYLcD3CGCvtWTt3KvG9",
  "key31": "3ocS7PGHACBm7zM2vR1Cepwp86c7vPtawJNwqRzgeroiB76PbbCxPHZJkqgEo8REDgnvY4pz36AVmVbsW6ynZbhF",
  "key32": "5sbZWAxDhnyhezmNfFHVMQKrbi4iQQVjbxEa1b2JCfibLtiSv8xYs8cEeBFSznap3M1v9tAe5c4Su9SUjbn8JyWq",
  "key33": "4qrEyAV3fMLXEm2HNvos4z4U7R795bHakEhrn7MLM7GS1zQTmc7D6wpZxbXzD5Tf2U6REk8YitaLNUxsKZV2H9xd",
  "key34": "2RgHkp6wWL1sGynKToWAKgPVkJsQ2eDkt5zTJmq36q1fsYFuWH9C3s4SBha7n598scNFLXWosxHHmU91pSr3w41U",
  "key35": "5tJto49DKfasTwXN45ppxjvqvugRTh36Y6kaDznWPCqbWNQCt123WkkjTm8KDMr7LDZ1Jq4G6ZXFcUmdgtFCS9wh",
  "key36": "2FeLyuuukVQKCkhe5dURg5N8mCp6tn8rNwJ53vMVetgWbL5w8wYPjRrJfKWix9ea97kKdM8feLToja4qRijH5VKU",
  "key37": "HUSxDStKtYBpAarvs4ThULmqhvFC9GuPeZ766AJoL4Q3B5gqt3PsjfAVTQo7CLmAP4gg853mdKoPdn1Ac79mG76",
  "key38": "2ud5prunSzpGqxTM3NUVQguNgHv2M6R1gWxuQQ2vVJPJMiAPFFhjhVym4pYiQtzv4FJGFSThbQegYjYa6cT7QyWd",
  "key39": "363JuxoY9p1qcJg1Tz3cTshxgXFJCsSZS9NxL5YMprF4PZNSaYf7D9u2Y3QG598LXQFAsWSRbBoCqjc3CUQAHEed",
  "key40": "4QeMsxWeN9SdqNbFkMcRe13u27Z8UTdYvvRJ99FZEFbjD8HgonvGdBT1MeuFQnaiTbKQuuDu6Qb56g3bX5HARbry"
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
