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
    "4pTUtaexpDYQHcS13fPpv8RdrJUR3hu1hnV6iXJGYGjD3PkR4mrCwFjoKZRq2GAhKh1GLQQwuaAz4ueexKac9B1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGVegxRZtFuymC1fty1YiMpijz8G4DQACFKtQfaNS1Yy5MsCrVtcQB28a7RtYHmiQcuU6K6QPNa6pTAet8j7HmW",
  "key1": "5UyuNC9ipQYmbSF1kwEJYzxbHJMWib3VJvGgbN75QqBoFDv9ySnjU7Zvw1o4iSouRC4LdBfBfoYJ4kbhygfLPXxc",
  "key2": "4rGn8357Pq9X9zo4a4NTHsQAdgUVyQXY6rGedinCrJf3HvAHrMGynDheSN9n1HJaUUQYaE9m3sAZJfeHAJ2Ww6eG",
  "key3": "4bagPETeqkHCQtCkZRvvaCaCGi5d2zpdYuEZ1Tjh7jQdTGoAsRKFCfnSjPMP6MMF3gt2pmR8DYaWvaeJBnH7g8xa",
  "key4": "4dkwJjEh4efCEY2dsXfFmFrM6ypTNAJWWXZEZVi3QriCzrfRQrkpW1xYkop1xePf1z1F6U4tM6aWMmLtmHAt34fj",
  "key5": "3im8VCZntkczWjQdADYdR62WE8mxBByhMuXwoskiV8kWcykB3nXmNx8XtXTJso7hUdu78GWqjWNqDpYuix8bev5y",
  "key6": "3CLeZMzyk4eNbzA1K2tC7wWKuLXoSbj6AZspgz15sJLfmyt1HGYeavRjfmPxngLGktTwzRkfMgDhNPWF1LcsEiQG",
  "key7": "5BiGqGHmeHQYsXqNcvFdi7UksP1s8D1eoXG9AC6VTF1Wh7BTuLA87MjywSGQjGb73tZzg8vAvzcHkPoSce6JkeRJ",
  "key8": "5jSJgpnRv4pqxRPHtSHAs1XM7JXDp1k4orAXe4cJh24tNwWBW2ZECncqoVe7xwxHg1EeBpsXJZfat1zj1ss2EZeg",
  "key9": "28NTsZLw62L3WVHwz1nnF3LU5dJcVPSqcUHFKWLeWWbpRzPRaPT6kdqeUUzEWmweF6UEnXzexgQFmtc6cy3jdRFa",
  "key10": "5F8ioNCDqD4x6Q27ZSuZptrxLxiuQtmg7TRfLSVj9pomoCWZG824AfYNdHXn1snVbH4BGEUnWMdWgLv3gFHDFELc",
  "key11": "2ZmUSUcZckv6JHPsdgZLejRMEM4Qtq46wyRe8UCF5B5wvYZMn2RCfr59NghtY9BCmgkaPyzQJnVCck41crKEXy3Q",
  "key12": "5nL2KD8CycPcLk8771PNAsjn6ARQvXSS6v1QqyCKEM74v3VY5vYpF5cUg6pH4vFxYRT4GvRuJotw89nhucqr98EV",
  "key13": "5Yd5AbebxJdkvd8rJG6LrHBUoj77fwTG7UVLRvGFyC7JsNAysNdJC8fPVZ8jCd1nai7JqS1qHAVWby5nTtJnFg3A",
  "key14": "2bHPjeoJ7xCXKhWgCvti88owEUZMJZGZjFVZNCFWu9VZHot5J8CVS1DXMsewUUZfLwzEsjdB9sGEfnqPDZaWaHZ7",
  "key15": "3oZASc1wwvLSf8TVY1DuSGnxBW4CUvw2iT2RBQqBQM5jWqeGXXrqrPg4vVdSNK3CX1nkmUeiEdjtE4GNpJriNGfD",
  "key16": "b1u38wDx6bJhR51vxdkJNWzp5zpjDW1WaPfDDR7bCRdnbT7YtjQFY9aj171pQerAtS5NaSYSUwaB2FGsDRoL45A",
  "key17": "5JbuetFb8nyfEciwZL91Neg8p9NTouwftWX2XrkerNahwxf77jgj3N3nwrCzjrEJY9e74646BnZi7Z7B8VuoqP11",
  "key18": "3apDsqVdSsANMPi8SAp9N1Ndv3ijnyWzfPHrvHiqLcuBCqHaUTdu1r5HeBW7rDENwnQErZVwafaMYTJUxdhqS5A3",
  "key19": "4yQejJokWmxqPLALVHgwXrvjs6s5Qr7SZBGXbb5ywFCREggRQxWsc8HyGggDUqG3G5BLAcjhkz8STnZ1a4wnVmUn",
  "key20": "4EmpgJqYDyz3nV77M1kGZ7WNwB88WWhM5t22drf4VHUDViHhkhNvsKcJhy5wZS1UDsMs5di6fERm1XfHokqvimG3",
  "key21": "3g1cqbcXKYspb4PnDCsp5LovCTqCV8o42yeqKyXzC6dJHVfWK3LbxjnMbLSHtjZvxMKBweKQAqfiQgkbETXH9W4P",
  "key22": "3iDkdgMGKJpbMZDczeRaejSiJzG1GwxMZGwdbn6Aw1ZqmaabFMUujTWWdJH5LWqdFjpMUAaVPbjmC2mcTkR9rxXA",
  "key23": "PVjgFtQxZsMo9Z5pGF7aB1gdCr3ehTUokKe1sSJ3QvMzKvnnNcGfsXxM99d7ucUhyPL8dB9LtFvPzVkjqZ3SMRx",
  "key24": "bRGY9QLXkKDyhyJEQwAReUjDSC2h16Tua82r9ffdAwQ11htYFZfz8GKLPe5TxkRsiGqHrvSxGYwyPqZTQfqmZ5e",
  "key25": "3bkHZVwCYuZ8URn8wteLFuzgSx9pY6aQQwz862XEW8tML1HyEYQCqwiLkBDkaczcJ1mu6MrfjXDZpekZZwZDSr9j",
  "key26": "38VR3nuuUKvRCBfxoWDy7TFU5ZhVUUPkZuNibYZU3cx2RVbf7TKh5Yxnaa3eSPXPhytAi7aK9CCPFg2mLtz7HhYf",
  "key27": "4d5wQjj8SkAkpndN9EWxRwoR3vU78YgjvKzsZGPZfheSvRDoqrM8xg4zFv21RNiMHhhff8DXAwM3UgkLZxFBA1tg",
  "key28": "5RCNP8m6zkFNQ8EVFpwAc2kdiG8KqCuzVTeuKchFgmy2T8EXcZRJ3kcDpXT412hHnzbU1vjpTa2kH8zHSFTKti5W",
  "key29": "3PfDDc4thrkr1cAPcw7ZoZ1SvXzYqpxfJDUaqUBit3GExYvhMK6BBeHX9wqm89ZepGGbDUwXfsTYbk3MWba6TgUG",
  "key30": "4Z6ZMPpEiqhnMLDjkw4wpFD1pDAc5AbWugoPJ3ZY5ao7Xcmj4d3EpZrj45qzGmV9ByeYcUZxwgyUsYu1pQKGnW15",
  "key31": "3YhuoX91a5acpUS57vCiyp3NvvxM6HERqiU7jEje5ETEuczoejiYoAxgW1dayEft4FzoLQA6mm6dV1SY9UG1Awqd",
  "key32": "5QKkfCdMga4WwmW5ReENqGTiNgjdtne28KaeacJFtw67Nq5xE297UBay4tk41FbW3KjvM5q2krEhDo1epZBSB4Q8",
  "key33": "3ZjeXdBPTxP87BE31rgxH7XxPbxJiLR4K2gqBMfErC2NaKooT7MZMWyHU8hUxqp87iZbdGRnWY9LFeq18fqFTC3J",
  "key34": "3NnUSohHCUFUNCwaZZzt1Cn4oMvozqeZ8MCoUSGmEkYo7dgk3uzhbJPekAACgj3FtvK9i5ppYeuhT1pKVapCfb7n",
  "key35": "3WL58pi6k3YXMP7VyUJShv7cZvLBD7KrRo2BiCPYAKeJKm5RhnX5mRgv9x8TYM6H7Y3XB2eJZvnMNnYhn7WEj6qc",
  "key36": "5i8PR3j6w21h4pNC78rsYs5nxJCF7pgqiuCbjxYkPfj3qhLhSMsLYNyKdG6vF2Zzwz1QiSL8Hi2rRFWqFwgCyNto"
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
