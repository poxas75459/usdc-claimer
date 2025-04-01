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
    "3KufxZESp4xf1gNPimGGw2uG6hek5MoyinfJpeJBJrTRyKzCoyu6kJzodcuxHxxJgvBTmNBcBkodugTg8k4Gd5q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zRjYzaUCsoqZTxogBr5Rci4XCL3q7emSK2sovv3apsor55bJVs5LGhRfKUDqKXyfKhyLQV3VJZfvGYQRofX4Hpk",
  "key1": "freHKYXUVtKsJzjftZvzKjUU1RJykaPSQgJisGR8QSbcLNussyBoeFsnxKeTAWEpmZm2srmcxZCwKch3U22mqfC",
  "key2": "3wawQzzbaSAPXXCTkUiHYbk1hgpoMxoqKZajnXkomy4k476rdxfVxYPbyCQWbSCixN7ehkGp9awk1YSnRTEGxsn5",
  "key3": "3Ypekjv8sn6swdxghHxmXuGstDBZKuJRvwX2nVhwc12wL4GY9tKivTgm1Ap5szu3MDs8WWgYtZSS153wDWGYPDQE",
  "key4": "5zv7LKEkkVURXWaLYVZZKjrNrapUuXWkCs8933WTdhz2tiv81SpTbrjH8XwTn3ERodqnxTGS2FRGrzCnTrqQ7BJd",
  "key5": "3ntH5TtcLgGpeK6tPfYHpZav6WG9wmgxt8Am8msibcJoqmBnanb5DVw4F4kN7tw5YDiVknp4adpvajoEUN4yosmf",
  "key6": "679Jquzm16pEqP5DzvWpktn63AcvDX7B5uRnFu1hETCthzDuvwJNaW1ZxYmpSzeyEBjRdsBhZaKcvGkqEV5rc5Zv",
  "key7": "zBN1D5CDJxrFgQ6x2XvoVNSBhhsp8SVJqn6SiCkiBh1K1cvbZbD5kPw2C3aqGNinzYv2AiT5k7AbRYr7dykfDyd",
  "key8": "67BmbPrgPFZ2Lfic2QDA2RW8moAH7HZdSNHXJZpz7RwbQkWDkoDBgnALdrZk1vPU8ZG4FYLjQBwW4wtzzBDKN8iA",
  "key9": "5umrnXhi4XnUHpQNzZ9ezaS54B4hD3DMM8TvK3DTixn3qNz8q1j6y5c8G4WzPB1kMSoztNU7orS9UCqW7UotT5dc",
  "key10": "4aLFZVqmsfg6EnR8U7mBqEK6udXFf7ZkTmyQY1x3NbHdmQPQ1fxCYB6p9vQYzVhakyozcpJXAGCt65zDysiN388t",
  "key11": "3DkVc4LTgxCXqwT7kQi5uatxtwtYWPDy5wawRJ3eYpKdqu2HYyw9g63LrL7rZGQdKXZwsDdDNuUAEaMr7mGkvFeN",
  "key12": "4giStsVs6mMsZk8xbueGxLwHmrDBfwnj6kY3BBRNto39SGmqACzQzHAgWoHHH8R5DZePAcfTYsYMGWwwvnJDyKWZ",
  "key13": "3ThKZdzV2ZjMuqNVtnnCQBAgtz3bj17PFC4v5mWHjyUGapPVbc9bdJYgQ9CYUD6yD8mbuWu7KqpPCK59K4AsgcwR",
  "key14": "2btQEzE2krsrxmbMfRA9WCBCTrq82FcUMRAFCdxban3vRCCiQeigZLK7Xe7n5ZE1HbPNKEX3mDC9QPifFuxGxkNu",
  "key15": "36FUcv4pwGswoUfZHTkxnowavdh7CSyggBzeSPeZD6X6gGDRxhjwJ8YwpQKUm8nQTMe2nAF3iQGKxf1CbeXZ3ezf",
  "key16": "4KcTecn3ybkAVDbn1YRta5j65EeoDc2Px9r2qdubTM28ZC2c5qD1vzhL34f1SyK36SQcQhmnZsgKcq7s1Fiuy6Si",
  "key17": "2SV3iQrxGgqQKYGsvbYqzqbAxzwtSr6WkjwAAPBGnXWPkKgbdGPCDQLshWMKiQqFX4hJ6rd5yE3y6XrEE1wR8wJV",
  "key18": "24TKCBRLEBUzxhGu9Lt5wPZpdi9FBxrRUt4QwmfGiu5ftHcZQT4u8d28QSuSxGEdJo4ZyRMVDWnL2aM4f7vhxXXj",
  "key19": "5L6RugJREycoxefdmmXuC8nNv59EyGZkWxPHLWobdJM9eHYJJrHQYyW2shC5ySdNzQaHtyjoyfK6Mm9LcMnG6Pxh",
  "key20": "2TjpUxdL9h3xfqHCSdjtn2BY3adzP3gaifT7sj9Lkf65eLBYEsBcBcK6UzMN7pQqv293Q1vXaC47Rd7bMHzwy7th",
  "key21": "3HNzAufpN6HwyrzeeCgoZ9b7AxrMdZvbzLYnMVAxhzGFTUtz6KUVDnSVNjL4gkKQHpmZVuHDjySEqg7UiQtggA5P",
  "key22": "2ScH3whfLpBUSUEKwS27TGrSMmT9EHcRntMdtYKqbAMhQRTf8nzDyJodX1CCQzFqAarzxzwoQZaNGxKTZ1B3xRR3",
  "key23": "QnSd3CE9BN5wbg1CPBaMUpacfVy1EGLVspzv9p4m99sTicAhJR2zqvGxynGFGXEvFu4sGCjoPJcaTVQ7Q54vvA5",
  "key24": "4XiLoG96tYojYfkjP1pY4MySswzDbRyHJEntUuigod2BNqkEeYxiEZHGFSC5NyjJ6iZBRMzxN2Mt8AhwHkJJKySw",
  "key25": "3sWg4neKA8wWryaGNT7xLYpsRuSqPxnAouMg14dUgRyDPzDEHsRrYhHskAsC9TZUqYUsmRUfhaKPXVWdfaLkQWUH",
  "key26": "5Zzqu97imjWkC5yv1eAmVByBBbUU94KLjpCZFobrcf65nZJ8AwhaBQ6uUBqJaprZabQREPCt24XQUJ8eeWpASe61",
  "key27": "F1b73iuyzCTXopuwA6r9SaJu4QeXuqaPk5KuALTmnjH7WyiZ1voLUQnJH5mkak2cr2kPgeo4i3pcr87atkanUeo",
  "key28": "36WwmHAGwEbcm1TzmSVu8GaLnkPh5k3eZET4DyKNzuEEaYhJmQPAZqR6C5uHd1HUYjhisq86g1w2kZYBFbzxe5aC",
  "key29": "34Y4wdfz13ijcQbBtocXaMuKG3reBVBZRyQ6AUWSbUDRt7p1Xb3sahb58yf94BJw5qUP7zXs8Po7jnKJyPqfT9ra",
  "key30": "eGRPT4k84f8wHFrLNBYtjqmreDjSKhRBrxoxnQ4Khq8oS73aamu7DhjuKAyMdj2VKEwjEhULJ9YrAhTsHuKcJkJ",
  "key31": "3wQ3bX6wLFTattxAxidVfzX3QATHW6Di75d7Bf2ko9UHMfAQzktf7iqAVaihYuysmTg7RTrPDVW3ZZPjAB6pgwCe",
  "key32": "3KABt8R4tEkKPkVDDWRzR81m5yk95mss91pbrTaRRg4B3jzWB73M2ceMeRwRKPgSESooZvX7jKJdKdTcQw8ncpan",
  "key33": "5aoK5A7yr6VywZPteRwaEUwpHTgxk3Cu8KzjxWXjZSBoJifnj6q86kRc3Q3yp7bf14v6EZWrWQ4hoJznm9epKhug",
  "key34": "35u2uNS6PXVbpVPXUKSayg9cWaNQB4vWcjMjKdgenN8FNCfMcNxtvoyiv3NRjVZyzAfDV2CH7fpnUGGgefzwc8QE",
  "key35": "2JZFPu4EGmrwiYkGjZ6PaNB7pwQ99BB4Rau7bcyEqRY6on66FTqV7YFdh85SyJEN6Jmjp5HFjZ4dbKbfujhbwduP",
  "key36": "2LfWq7pUm3hUg7byJ8b6sUJKRsn52pEJuRUi9hpVthsQnbWe39NKh5v45FhXSQiFnqmi7yY26aapfe3UVRrWRhQu",
  "key37": "39rvjtUYH2z3Df1C1coTgphv78fQ6eskUhU7SR5bqe6s82LjrmaKjxQW1MG2gkMMNiGBXgGGkRHn1Vk6JseN56R9"
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
