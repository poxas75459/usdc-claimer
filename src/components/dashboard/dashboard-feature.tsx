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
    "4VfL8HvC9DA5KFSP62wFdbJM29kdK7L9jZ36PrPJeLnjsLVJNn3csN5g2GodBMxJzuZ9vvyFTeyBoiYbZXGc8Kpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z8SnJWtAFpA2pemqxhGNxUW27ZRcyK8n9mTGvpCTqmLRhQhjnFKPYA4gjjCjwbp9FfzuKXtG7AchYgUFLDacEFL",
  "key1": "5QXwp9pVSj46yyW2A6QJ7jprKC828dcDS5qorsM136BgXmn7BxN2eUnkZ8LP4JXQowUyQAqEAJcdhjB1LBNdKzFi",
  "key2": "2NGr6d3JZm22uJjaXt8q5jJShi2x97mjZ7eXkiTZVhAr9MVjHPSZdc5HXiikUbJBVRqbiEWqbtHRypf2MGJ4K2c6",
  "key3": "2j9JTtpEaJCEQL3HujPYt71yAmaXNNBZQsyywQ7H4x1AfpBEeoVLKXRnXDmCq6B7zTsPhrhU9DJaSXKDfCQ2HLrj",
  "key4": "4ny3hE8Pm7GoNQdxHzCWLvdu7Mdw4CFWdQp4PFviHbF5F6X2zFFoxpA8UcvRZEypXLA5FHqBjvguRgRNC4GBxY48",
  "key5": "y15q2miMR2iGEgc7qzv4V8xHMNSn3TbUREQL7pqHpSU1q7hbcx7Xfi9w1hpfb7V2dKbvQkp47iZdYJDKafMy6Lk",
  "key6": "5XmXuMa4tTVX7xcADPQUWweupWfYQjziSPQzUBJxPJT7DzWzkvtzbh2EJMpL5RWxJ9eBhGXEoZ8rawbYby2A5mCm",
  "key7": "oRYAPWQrir2B53UtHHvaigC8vJiG2fohpW5J2f9MScyrPcgAv161p8U1y3ioSarzvBdTJtg7DqXkRddFpVUxLLc",
  "key8": "2jiVwuTKDgkWkTKX4tSWuuyJ2Zxm9nvsRTthQYwcVYp6UoWk1N9fD3KuRJ1qUfNr7rwR288rk7y6gUHJkV9tVenj",
  "key9": "45SfXoF86VUbPkS569dX5EQ9w7YfTD9GfqraTZYhG37UsF5fX1WsaAWL5DcPaVpgEPrJezbqMbCbQG9Ej1tq1CRV",
  "key10": "5JwYyd5dU3UPUaUHWcb7ftGwqzSwLPSZB2N4kgzeUdKEWxSWwmv2VKAk8zn1ERPjzbJ1Dg4Dgr73RMWhnA21pX6P",
  "key11": "2jGtyKnXZbYVCaa9giXSoe8hmMyAte8wKu28nJek4YCfFmrPXZ6GdHqTVvoj3eu7ik2moUcVkPU49UiMRdLcso36",
  "key12": "XK5DMb8tUXmSiGyvRqcgZUdPiytH29WzUuZWofi4EVbxy5q9RAayUXt6HRpJ7sAcVPKmmzPHk5WwjVJiBbbegG6",
  "key13": "23euDZVY9oeMpcYWfmmYaszQtGpZ9uWSfGFmiuuDtQgpnGHpwyNPFi3rp9d4zyJhSNVHmLnaQ5KD3dPFiXea65PU",
  "key14": "VPtXCruFishaBxj69fA9WXUe9xCfQq8vgrgS9X4HBUntLqZ39b2oR5WCNvSj16EuYuWPSDJqkWHRPEviPGqnqDc",
  "key15": "2VHNBoh9hqkz5VNZH7Egsicyaei9Td1SntXy2swkA7Z5D7MEYTsZX6wgxbdHJukKz3p6fsZAUrh4aNPHssw2Yp9Z",
  "key16": "187YD5XyPfsshCVbaMRivSLUQNta3yD4oXi43rZPeu2fw5dvd2J7iePL8Qa4bAnmafzaTz5qEDie6HHQ9gAk7wE",
  "key17": "5j2BGEEyo94B7C25fBETGNv8puswh2nVswroXsmDrGetR5Vec66MnKo9fWZRV4myRzHVHoijZVUPh8XDTsQokh5a",
  "key18": "477dieUV8U83FGVVAaL7m23RL6TDFvU1a4pyGTwwrShyMdxNaCg4jAg4aCYF4yHELKTs1vBFNQ2L79XV7H5XBf77",
  "key19": "58KxC5UzLuWAruAKmKXWS3oHGZL6iNWsbURVM3v1ZFAAJb6M7NHh5N5QjqEsuWGihuFVzGqGDLwhRPDS3E6rJc46",
  "key20": "kdVeBP27iS5K2YmYuCNAYqiYzJaQ8Uodp2Gs54nm9K3yDKvQSXJ7DdqKKiVrcQCoTiiJunXJHqSdYQyB65nf99T",
  "key21": "3vz2rvbUe41ih8gtHv6ZYFDukwMRkfDHXDdwGjSVdq1McfUxnr1hSoWHpiby5Un1p3QSQfaJF79MdooNdQ4mRg5H",
  "key22": "5rexBdLSqxvRNWoJrtD7PFoyjzVCwp9gvVGebqcDZMkFTfqi36bP9cKMVZVbtjpGpLtbB66dSsTrJuZ8ytVvLc2S",
  "key23": "3zPA2yEy4Z4VFxap81EkX4UFQNZnViwo7uhAtCi3B86hmkbsQrEV7x6kXj1RpdtSFpNT9x9zVf4Ax3n9CwparjmF",
  "key24": "44rRw79UWvWs6CpJxAngsDTC7jnXSJJJSywzZnADn8VDKp13iRfWjiPZ25tRqHZECgWCkNFps2n5RqzG5jPhtPaa",
  "key25": "3pBvBRuKypga1gU8aCE7vYDGsfmCN7vXtNJHZo1W9W536CVK49vwb5ozfDisg7jykoZEJ3vSd2WxEszfibTSdCWw",
  "key26": "3GcgsvkSpcfZcDCmv3FKCYV8dsCeJA4scoEkAMQzcwqpQ54TR54auoxF6ZGQPv2nqtqV1ivYGYBETqYQvxYc6sxP",
  "key27": "4T19q8ryDVRksG1Gq3y88ZMNb5gCSqMKEanKzBYuPkzQVHprKSmaFZdyzFzYddyy8NTvHN5wEtnf5cvpQUP3Qe5z",
  "key28": "5CBDMCHTgFpmjm7P39gtKg5hhkAkzW4ukEHvTx9KGj19HYxpmufpJ1bjyJEPSAJNYh3oaJUtfnH14SuPzRCrnaTf",
  "key29": "Yr4gb15mPRoxxvHxLnp6muciN2tfL8xDAX8Kagj4TTfwxKgM2uaJVuZ9iB4A7DtFKhjXfZoAvvWDjNYVVYG88v7",
  "key30": "6DGAxjJhqVyitQhk9mdgKrLuKDA3ZUBczRGDeRehrF1EsUsvtiiTAKtKzpiELyeAVMHYxLKm73DRcoyixkJbrec",
  "key31": "5eJu79wYERSHaLXTbo3YYtN56QhfQDZaK1w3vNUGG2d9JSrNjWT5iJd7Ao1exFTvVkzzAoNg9JcSCiNGt55KNw8Z",
  "key32": "4NN9hhZ333fZcqRdrwHG8xJ7BFr4kLChSvv253BeBAXHEhRBAfyzC3J591R93YNieB7mj4JR4dEZ8xch5N4V5VC",
  "key33": "4EviTztt72NnWDxr4UhJahzENnK2Uo6D3MVmfhmd5PnfBdVFupDk76nqAeCbymPHEPgZcnPUcWnw6FJJeAXK57VG",
  "key34": "JFkkGWhCikX9MXFCaNguXvVicQQTh9af5Wwr7dUHowUJEqJNsGEApKk17PSB4EUDFTTjc7VZi1w4fC1UUBZBcA4",
  "key35": "2GDGtjxRMH87mnuEAxQM4Y8rfRcfESXwxzuuA4vnkBeL48zAiYJ2WnBHKue58tBp6yRy9XGGZmjZiekQgv2uTgAf",
  "key36": "4wzpfSqYA6umZNnVSSHa4hq6bVWJqZKvmBjF4vC5MBNCzzCHSG2juaPcYhM4ySjLa7ZstjsqWnUZe9w4PzGFGLq2",
  "key37": "442x6A8hJNZyNZyMzaZ7BakE2MHh5qsUiEMBYbPuJP8Pkyt4p5Y62VaAB857Dype7nVmzA218SWgcn5STHkKCpQS",
  "key38": "3EGKZAK9j3FmmJTeiQECLCV9tFsxwfo4ZSHdxtYJdRWXurGt4kvsigJ7VvU9oE36LTrRVrcYVrTVd6pLoppUoTX4",
  "key39": "46Mpy8mftjHNyzbqZ5EATJmPSeBfK2bHQm4PaJhcnJM98tM7n1TA3nymnBFabiivCJYdPBoLSN9ZCUiuXtsb6DNT",
  "key40": "3YQNQoR31jjQxJJGsdazHxkWYTWn5qRvknPLNHLAuC3e7pLsmirH6oKq5NfbqgcUjz1dSY94spkAvN29yF63fNpQ",
  "key41": "4Lm54s6KPRpY4T6Y3WFLp9KCDHRmWZ9pEodkxDzV7LCYgDDh7YQT6rVqZov48uSzNEcNGmU8f1ZPScCm8JvSTzt5",
  "key42": "7BTc3SBcKd4mVRtaHRZrY8UQhxi4sEFPsZx8Psxn8MwjR3dnpPbFEai7WtQ1zZdrhUuBjsRGFKbw4Vu7KrGj4pW",
  "key43": "2fd3MKY3pFEoDCVrwjkFQu2zRD6vAN5RBnRXPAcfVRS4kv3vEZZ3sssbwFoWek8tGEa42KYBJ6mnGJarXMjyMNe8"
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
