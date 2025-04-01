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
    "2N4VTWSHTBhCiJ7mcLaxvft1xgpoCi9LNdUScQXW1FdAx9JK176xrBndfmfLA2EhyV8SmEJJGw5f3FgFanMtp7cm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XUr3RQEK8u3WpKzNqyjDpYgb9sxgSaU45PtVmEq1ASbWqfauPJJ7nZ5KpqVQamsyGY17smi5W3cyR6w1N29iPWL",
  "key1": "4m9j8QgJchBKGhiEwPMKSf4KwtncXQXkew3aa1364Et7NhQHb2AoUSmM7oBahC9wELjiAKCx3UkrGJF6Jw9MimkL",
  "key2": "3N4MYXevia54FBtSykcFbMUQjamkedQ3QESd1eMvfgTC9cp7FLJ6sZg7UckvAmsbMNYXsn87mTMsmJnrZA7HfAXC",
  "key3": "58rZ58b9NQAi6qriwt2XRrf83QWusR6EmMQhvx7DmoJwRfWZ1RMZdHgvkWhiZcntUoHwnSPUpW4AnmDHBTeHX4vu",
  "key4": "6721iGiox2HGa4m4z3vAWtz8g3D1tktiGWUTHLx98mSEERm5cnphNDStx8SiE3mUMGsGQbR18LpucfPutFkkuEyq",
  "key5": "5sF2az5HDugpZUaEgjjs7aR5VHjSxz23RjETERmsbq4usDNweY3qPzTgT6FEjxtQSngWpxUbzM4CtiUDe6V55LnL",
  "key6": "4quT2PBegQhtjVNjaSzZPnXZbNxoXweoi9HfhRZjzFP69x573bHPV85rEgLe9nxwRznckS2qL6rP47AaxVEXTdHm",
  "key7": "5FURpPHgMXNK8tUQjaBpHxvVCZVPXKhE4CSBD8eRxzSPKhYU6cLkcSCk4321a7uYZiKbZFCUPghAKZs1uYKxsQTT",
  "key8": "457T5in75v8msSfCZVdNd7cmGi8uSB7aWR9NQTnYUciKtmjBcWL6MVL7PoiWG9dxiUXS77b9wV1cRndALKMKgmPt",
  "key9": "2NrQ1ACTDRtr5Hy78n5f7nx129GBT1Wb1MG47njJLjiPmTRdqAwdhoqrsgmKsfnFFWvsuhmWmV8EW6jAYdSwPYFP",
  "key10": "2waZ5pbFDyHiWXy6m4cBYSAKPzgWGqZvbPqd5e3S8gWrCNNxQCbsJm6vuigqcG49P8Hm4gfs9DTWkoPLJt7kRvT2",
  "key11": "5DMpR2i1ZPiGTAT1owqWjWF7pEiFZy7UZoYhRJfCnkwoH95a5ErK3Bj9pKkvF837UbMacCpUqBo8uVgLzEUexhps",
  "key12": "WhU9Z3HGdCP7RniahdXiJtqtUddm6LZNMkQGRLrwtFw6vF3oEfUeVh5ncovU9QyMqJ8CT3cnZcX3GzXGe84N7pc",
  "key13": "4DXdjCW9h917aG9nairFwhygT4gEWnE95uiakHDhiDYg2NpT83YAdwMXii5cNr6SLTD5xvQd4eNynzNW5bdpsR5q",
  "key14": "4zdwuDsa7RyqKr4zYnRCNKTk66vRnjVCw96UcppnYkHaoBKAYbKj1GUqne6i9KUdJLdbphoSp9yZw2jadbvutquv",
  "key15": "2x6aNJvJoKWBtF1JHArbaTS78NL6v1H92QzqGULGfL4qkftifpQ8WwG4akWbsT16FBbywrGvjfN81Ay7SnaN8RPu",
  "key16": "5p5HQJkmgzjMa6AFWzr9ksrnM4stpwfZKtXnUHjnTzBHmVBLmfyqEJD5tT4ksAg7zg6LTK9StZp4JBxSEKsxxVBX",
  "key17": "EGQuRNKx9EZw74c67qTuABGBWHtYAocG4zmT5YFKfvtz4cj1bPKenYGFY5EMdXiFeVFLU72oUby9ik7UXrML2ja",
  "key18": "pFX5S2dGJ4HDEaF4KXwohJQkwL4XCF4FjqpvCtLzHVdg9iziAu6YSPm9dp1kDD9WGRW8gJjEtaQ52LjtWwqcEgs",
  "key19": "617izh17benB7QrZeqJhq2ua9aBjz5czRgt1JcFzas9C4VNt773zzPV3huoxyycvzMwsaH1wYYgriWDM8d9RbANU",
  "key20": "4BkJgLkPEuQg1zBL5Vn5EQdSXp6PyuHq7LriNPa4mVyrU6FeMS7EfWh94CYqvPbWzbdhPLoAMibbcAKvArVMzHDd",
  "key21": "2g4UwxRVskufn6DgiPXKywHTry5DL9SqWtuhMrLNUJr9KvwLSsfNsF3FCRBenUDWv6VR11sYQwgQQaSXcjtjK7PS",
  "key22": "5DbpgW2qWMpCEUNTFDXEdWPk5HgSXR2VoAFWZfiAPhv4xcJ1gnQp3ME3BoMYwnfvDkUmKyGmrDes5usimD9M6Xmb",
  "key23": "BbLcVLaC3JDVkjTwYFNpCgCFDgHdKXHVJuSqeeRqwLwmeU3qHDe8pzXUFVyBsZrUr8YonibmdzorVX8oGpDen61",
  "key24": "uMFUJUk8phCJWbB9nbrJLaHZs7vBp4v4fv9YUfsvnsRfK8fumqxpSBrQRtQHt9Tho8R1FbHh7Sa6nYbmPWtcK5D",
  "key25": "2Fwz87N1j83WpcHdE3onTbhMqViUEkbaQd8cgkSsgGKszZxg9NHxZq5pkjkDWXcV8dZjLzfDwVpJmGi8jn7UpFh9",
  "key26": "qRXXgaYPe5SeBZBHKopnptTKVLY4oW767pNdJf2Q74iX8M7xxEFE5kZ2WmWBW2gJGTW1PGHpbw8gnqdu9sz35DE",
  "key27": "5dm5J4pPNCtZXLQT9BVYjHnYcbw1p5AVwonHywz9ryLLyewL55rSZY2wnRCTzXomAbj4h9GT5VhVJntZoWw5X96K",
  "key28": "46bm579f9m32y5PrJiM28ePyZ2LCKCXi4i3zSxQqXPpCCL7RwV136Y1WQgkeGZer8aMwsuqoM9mQLnL47PVSAWAD",
  "key29": "2NoepHgU1pUWG58QYQoLeA5w61djp4YuAWYuNvk5JKWe8jAyXD8cWN1PjcWUsKBY6mfKBEf59gJqtY8WiiJbBKZp",
  "key30": "3rrXiE6RyGqgobZefdJZstYbSUPzoMUb7PDugDT8WmN9GGhrp9ZziBgaQoRdLM2QjqntNhQzBmcVQvwEsjjKn15U",
  "key31": "4ze4TeXYbKco1GRFTYFc92SaeYCFiePN5uxrQ9UiMdpS6RqaXZG5SxkzSkLqRQPTVfC5eqNYSqkAyH3MfX5M84CT",
  "key32": "5jFKSUATt47enzPgbVdkPkGpQMAbwjNJNHqi12C9ASNXRE1ViGrQPBSjTyrCi1uzeS9GneBmBEhDEUacDGCNRqC8",
  "key33": "3CVp2zmdJ6Cc7YXsTvb4auQUXY8LAnBoapmaeTUb2GfvGNBf9x2rkWdJBiiimEEr8aBBSWzjHZKH7xD1KYxtgCMq",
  "key34": "5QREq4Pu3Q2p27sQj4bZnJB4hnZr5SFdtXwopTWzwuQDPBmnXsYX6iBEyVDZUn77mxyuDorVnvCSejwvgvue8UrK",
  "key35": "2yyYbUVELPuhJ448H1doUmVaB2CZGe78fz1GX8nxGCo6fNZ8EheQuXi4HcXRsoQjR1DNfkveXbg6FaJ2QsURoaHZ",
  "key36": "2omPsqbqVibXn5hvzYR81GwNjJBhSXo2bmi7cB4ceBX9kh4wuprVDAeLKuXsTEWjPbd4hqU7bGvQ8fAKvcrqRGgQ",
  "key37": "41ChtxMtkLU43fNHheHF7sqHQiFvbpiCyF1X7tMTNdd96JwVMzLBAwMsicuhfNkKQ7BHkUahLBQ2FyFcWQJJb9tS",
  "key38": "3QR5AT6srzb1FVPrQHgwcgDoyQ4qgkmu1HVwYVZCP1epxK1pJ3jtScRR7tW9XsWRgF3WvXkSotF4Sd2jAQbNVgFv",
  "key39": "2RJxA6o5AJZPWvRcSNvJ3wGN9HJPGZup6bjXh3cxpdM9FjvpzKqUF3UjPX9L7ZKNrjq9Ft18gVCt6Gjv3Bn2NxKi",
  "key40": "49Zu9gxbPNtZFHPw2Y9AARqbdrWic5nGjooM6Bs7qLDoW49rx8SbE3fdS8K7FY1CzvZoWxxXHzeAeSLWTvi3XyvJ",
  "key41": "285KEa2D1nSgHn8kvKJLwN3gXowozq25TfkoUs7DK8q8XfbRh84m1X36YKNRVwFain4FfAgqkEd9nrrThkPeYiCa",
  "key42": "5JeqMYBik19QG52m1mTUEqs5YExMuyuW9CXNihnUtR1UQvR6eek48hFC3a3f7jm7GzBS1ZiKBUqPCuqEr2pNEAaj",
  "key43": "4mtBRjQL1R7iywnN5heFB1CToKqFjtvPiUPcyBE4KqjqvSgm4NmaLdTd3qU7RfhhHChT24hfMpqsCbWwWgKWrEQy",
  "key44": "5SGSYs6Xkg8L7Ea8iAasxQAcvXUz9qoBNWZCjrYfY7M1AtJRQfNzWbdcKQUUyhMY1SYWkoyJTBp55BGuR2xadMik",
  "key45": "4VSwyn2hJ5xecdz4warwXjBLdJRxgHoofK5EnPB6HimmzWfVeqV5mP7G51YnsXQGk7p3LeVVWKoDsmELccPzVb3b"
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
