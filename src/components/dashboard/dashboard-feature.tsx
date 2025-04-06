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
    "3cUzRHgbb8akKJimtcQJcWeqrXaA5nqK11bQsTBGX5i4z5uiBSxTduyCA6DoWackmFqhrrHuhs3wzfsGk4BGPXpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UdxGotwiV5CqPmnwzFrvDwoRo7wATN7rdfTtZKQBewoc6pZ3gRmBE8Et1QMMWNaxuZVkbLtzm9DcRPj4zEnXSJx",
  "key1": "4dsGXqDijTF5T2hQ6er1crvVA71VoCpmDsK95EaKvR8E6UEXp5QVNmZVe1zUL5tjXGuK3y6Y8VXemxwrz4ZxQNpT",
  "key2": "56sNczQnvXfqhvjye85doimpSttL16co7pYAQ8LKAQzf42MH1w6p1hVGhvKSq6rYMXoaJuypvQF8YBwgReStNaKG",
  "key3": "PShaDpFgnCc63JGY34UW49rfY2HtrRbBytHQX9u1x8G9NQdrpDPkNp31WvurjHQu3fwsPqiAA9eEwxKVQYY3rsG",
  "key4": "31J877e2jxjzs8nYaer7Zhs3UBhzMwjJgam81jopvZsWkARKnJKZpWQxfEdEqFyPRpPuWpe3Nriqirxn59FmhCbf",
  "key5": "3F4h2MArUGAWjfCpMgRQKM1UBgN74Jv9kNqejb1VZC5LG3m7x6BM9pokzavLqrn4HDFJiDw8Cq6NfTigF1JteP6y",
  "key6": "2PuM5Xu1heQh6JV9SJPaDETsGUtbc6p22TNTv4RpciFULwci9dCWbF75u1gt8fPF8y2xTjYr7tTJtcwX1uMQ3q35",
  "key7": "3Z8ye7QG2Swozj8b3wV9juDQptpvVZdrR2HGy8jYUrnWmWRtbgZQdN9jL8xqvxVyzygoJy8QfPJdy89xUZfBUU9F",
  "key8": "2nMgDs3qw5Nbq1Kd7knaLNZE8JKAW3At2HmEW9UQYDwrv8QeX1eeY1GR3zYjP8GPLFCaVYzgQAvqJT8eNEnbgnr6",
  "key9": "5mfZnRTaJvuVnW7eQygSyt6w4SJMtbpDg4PzsZa61H7ySsV1pZLPVjRC8nwsXburciR31Shwbyc1LsVYZzC8KQog",
  "key10": "pgjWh5fSjDZwxKMUGmLTkoydgC2aVHTK6bEHifrX2qpWN86SirPMgcnS1drdM9EZYvNmFPgnWDiQYi5NMQs3wr4",
  "key11": "HiDNR2f4NSmBNFvrGwuoDJMqot3XQ6YuE6sih9ppRK79GuZ9Rc5c89AxJU7mPeRZf8mtJHoicpV3GUz7hugzpjv",
  "key12": "57KktDqoHdEcjLywLpRiiz4migbxgQoDiRyuoagawZArCWzKbUshHG4VMLH8ufCVrhTNkkEWfmymqVjoA58rrXXT",
  "key13": "36AmruRLghuZxYfVAiw4apojj6Mk9saRVV4unAr6Dm3vdkdwZz1v1NaCuZfrYN8xDVF93zG5VbWgP3TLZEgPL7D9",
  "key14": "5myoPmt5scb9CXPYD568cozp3HPPZ5N799jaVCmC2KsttNAtYcoFNpDnzuQtYjkTFCwvCGzF2cpaSsz99AUe41M5",
  "key15": "4Ji3wiCC2WhheDxpRQRMU7xcg6pdcD1Z9ZGta4cGBFb6cGUGCY1sh4TZ6W9VbTmKMxADkqzBLRcnfGr4Eo7dzs7Q",
  "key16": "4TzRXJyPAMdEeKvJ8SPpMejgxUU67RMmcENPoPzD51FuhVZGo8EKiezii1CuupCMfXcgNQpixUNdS9HBzTXftA8A",
  "key17": "2FFqhtfu4AqMMZHXBbpHuj6rSgMNu1GniESHN8FTpieHeWBtgtxuiggmTD3RBboAvxmAEdkEThCcNCEAZyQ2cs4e",
  "key18": "2ETjGiSK1DEp9jaGAtWA3Q97T6NCfdUugUgvyuJLmjd8HhLKF8Z26unNAK91PmU6dgrtFmsF4GdBjW8UCoyD6kdh",
  "key19": "43Vf66uCS59HHRCKjLa41XusbCVL6itjgd8ntrAyb2cx6Q24ssjUd6EFUM6BqsWRaXZVhR7MfZEvZ4xU7pZkMvV7",
  "key20": "2UkEKJUGgLBMuD4mvEKWSefJgPdXBpr7f8oKV3LVKfx3exFmUQYiUdSJc2jCekJP8zWPXs4HEmxdxqdGGFaPRCqQ",
  "key21": "5hdt8AbPQBKgFJygoqv7g4cHoZCvBUhQC4m3BfpH4wo4S28vauT8THXsEmpjqbCUaDGrU5X64BX74Xr9WLHzAYi",
  "key22": "2Qz8KdeUvvujq1rJLYupoxNQACDjyNqyacCrUMWycsqCRb8V4jHdZVZFq2fJb8BYFoh7gxkJuEcY24v6SDCRrm6h",
  "key23": "n1rjXDjjy2FZzHKgbUPkAY6NYUBc6khdwZtwwXQGFvJfeRTUB1EKG89R5AMQBhSpTPUbjto8ydFxNvQJzJNxGLh",
  "key24": "4uZTprhMqRPrx8icGJjABZ4ukv2wvQ4CAmQdKWqTmTyNmWVSsGfJ42e2qCMdhaYaxKJrWEyQ41QYtL4bsGDYTzpD",
  "key25": "5VKbgeMCVMNJpcBJ4x9m3zVeeXRKdNQwE52LscBqsvPU9BKTJjdEyMQ4LTfbev1hvkGHq2CH85DA37H7bKG18BQR",
  "key26": "fnGrgacj2qcRTgjVzoX8cJda1tF9KeUjHcxkjRTxfhx7HGky57NFspSgoWnbqWEwvTKrpovRUJFPQ8GT8sx2mDQ",
  "key27": "pcP71BLfbH7hgqEUSvt1NSphRVVYxATdxSo117z8dCAwsPYqLfn8yU71xv8Up4dcnPpfAhymet2wpa6BtarMzFv",
  "key28": "3wkfYzDKqwmiYrKqeCxx4khgqXzsEhsimFxQ56KbP6Ec4kHVDYJrnUJgaeq8ofxL4dGedXY9Qehh4f35t26wVvHd",
  "key29": "5H14NMxwHdvV3nhoKkWHSC33bny5z8DA3XgFv1GHY23LCjp5jThu8hw8Xiumyk4otW3gBNPQNDhfF4LYaq9oe6kQ",
  "key30": "2PgeF9UAt2uCf6X7GQ32yk9WWMYM1pwyHmcQT1VquZkoELX5F6NzXZJyk1GCeDyoaaw29XQd8EgZm1dETcWqxQSL",
  "key31": "5AhHT7GVBMbTsPLUnABdUPBuNwBF3DyaUkSGDvcsYgxrxoL5Aog19RpCpz82xbyzV483Q6JoU3Nax4WN1C24jdt6",
  "key32": "3fFPLfDwcHezzzgdb9Lf7RQwmW92cZsP1wceckLw9sBBTsrRViNLgJg79wQtEQPBqxgGyUfwRveTP5hiMjHoo9du",
  "key33": "2mEFgtRX5VEwTHUFCxdJ7io3HuTVuidNUX8nSZyp4m4qNWSADPRXu1AbLeggfH52oiweNLbKGRWhYzpBmm375Pi9",
  "key34": "3ysPMzmLBJ9uGG1MYnkcbyoAUGY515n3dwR3GQHrsJnLjyWxrAvv7VtwnVZvq3bgKY1FxTyPTsqD1h7i1rKyVSab",
  "key35": "2EFyGQZhRpp7yPg84UEpV9v2cAQj9m3tWKjaDQdK7zSUeroK1yc8wAKkcdrxn9aYhNBD2KJpMunRJRzqwUgiW6Bp",
  "key36": "4pFYwXQmQQ3uUJjcv9chKKVfuZERLFFE4SmkCwt5jnXucFf8a2nDuFesErYWrkckBowmeSJGi3bqP98xqWDB5yaT",
  "key37": "43jX8bFu883fnMUqLEtVnnZjyGHWsVkZnTakFGCPFyVy7CkjHKAMXfU7s7BZa8nYt2mdoMAriQYBatyM1qL4YASb"
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
