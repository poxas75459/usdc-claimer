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
    "231aaT3tXZdVYygMRUF7oLGSeML6sgLEB3HJXgKoxLSk2K4jEYswQrx59zKNi4L8kL7SvM5AsNnmWG3ZsZkG2QhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fWVGXtNXLv2XqNsprHXeZLanh7hcv2fpkqnQEjyZmAhK6q3sGvGQEfWAY4RjWjDnUkeqs995jS2UDRZZKmBwTPC",
  "key1": "228AzmMEXDXtqGYvyHsHriXg9bJx3SijXtg1nnhmkjoGbXYRRMxhJX4zLx65MTGyJy7j6ohVtz24z6bshfmRPB2R",
  "key2": "4SLMcv6nMkh4owAZMYVvhqzdtfKvEA5f9Ce4SbdnKzowVm1PptCH715jCTRjG2q2sEAKDSsjth1nBCuoNuXbJmCW",
  "key3": "5wYt19CskeU8q3HoGoMEtFSpmNAN36ENXXdBY3zoZWSFxGHPAKWeLSKXRwJTh2hvSHEp6x3WtPVp23kQkfvJ97ck",
  "key4": "5KUyJ6ZvSfmYG8ujT1UHRn7BYRy1XiTZL3qQf16v2HzDXpuEyA9kvQ7msjd7t5UJWoHyGzaJ11jaEhZoxHYgejrt",
  "key5": "4o7D9zJTnuQhAhT6xGhSpkU2YUwZcGnGc2Thj8fJWqLi1ejUjd7QA3J959rBtCeXLoh9GTwQkBf4dESbPesy3nX6",
  "key6": "4pRD9q6DDYNDaWpJJLnBzy4sJ2zUSGY7T5WjYHwM3BtauiB5hoV5bfcUWa7hGn1jQfGQYrFpw16b43BfnWAc6SYM",
  "key7": "2QP8ZCHCisx36do76XwAJAw9mxvT4zv9UkmgdDZZFP2JKoY6CyGeoPhJsTkVD3wP2g36aFE1QU3mUMjkvxvksniw",
  "key8": "vCokZmfprWxHPFgSJ3omLZ3vhTYu84kAQfq9jEpwqDmHEGUfLCJ7q6s5L3Pm36njUx76GZhDDQrPYrXYAoAhqNa",
  "key9": "42a4sJvqqoYfkMtTsmCUEyjoGouYeDwYHCk2eS1nEevR1DN3KzoWpj24H4MfxtsGJkKQMkbT7Db5W7NyQfyGNJST",
  "key10": "4AhNpeXz1nmoC9v2pSYg9oHPDAynZBF5rWahdJe1RppoDiPACsdWzVcvQasQouq29ErgEca2h3XNoDBLZQW4RfHM",
  "key11": "aXqssxiPTKQqReVtpdaTyhvcMSvnHLh8R1LEkUNVKNqnfzgW7LLk51r5rfSiJhSaBKmW3R2xDqnEYMEPeaatK2t",
  "key12": "3XJwrXM31k7NiWn59dAt5J7FbmwnZUcEfVqEhLDZv7cpKngDdTiXBw413Zd4SrmjxcdvoaajkwG3TsycFvToqdHa",
  "key13": "MjNhxH3AetoKBEMkHLrnCbkdJsfRDrDTvV38NvvQerjifCZGUNTqPFtmwnbs7EW3iuj51mp9hDZLx1547VeoXxE",
  "key14": "xyFaHvZzedeJpsPmnYLuhVzypmSAJDQ4bHKTFgHkC3bFsCu7zhXuBQeDTnaCjZ6STk4hd3CUr3Cg9guJhMXgVVo",
  "key15": "2TYJRZ6DHqsEj1YeNFJjeZco4LXnYZBhgP7rf7jJXPvxWTKWi9sCpFWhhkEMSGxMZCeKdzjuu8tiFBGJvwUYBDLV",
  "key16": "3dZV2tZHXJgnyFDW6UHddJh79ZJLKgPRkKYVzgTb3aitSYqFxtwtBWqo9Eu7TjX3EcvUPLawbhMtsjrm7NknJLGS",
  "key17": "3qAbLa5ZvQ37uqUMyrx5Nx9jhg1DNtFzUcb3WcSvnxYg5Ly1NB1GNMr3gHAF4GM7Trm3N5oQT7TN8Kq6kZDGto5k",
  "key18": "5VPvNkEZfyVicDrvv236uFXXhjJtVTMJ2BifZDtAyQMaepdhNMcUjwfi6Ad47rqWrWz2J1Gpx8kijDaAvvpHywZA",
  "key19": "5VuGARoze2WUtxgcG37S5Lmyz7A1QqjiqkmtBa67xbTxrvTRkBggnYN8UeNJCSQyzneZQ9cVEyCPFtQN8r4xqaRp",
  "key20": "2qfWkS3A4Ngf8h2ba5XgS4WPfwN84ngS6FVssZgQY45965xzsL26yAmSajkgPn7eNJ655cyMZggbEHjUxwWwE49S",
  "key21": "3QvPKjqtd4jAuyDM51yuxTwX8GwwJ2LCX2fXLp45aH7EfrX52mR6NP1AfR81FY588woa2raHM6fmntntMsTt1owx",
  "key22": "353mrPgTfeCejxksGUh19RcJSN2d6kKdgy9kwzVokTbXuCUiN6mc4P5cdBFZnfjTP5KQF9Pj6eW4nm2pgy9E27Wz",
  "key23": "qQwYVsR9uLUNPsUkqy97TEBroa9zgRVFbRwpVsGx5baVunQJNcwJAiwmbDnA51Dz5SQMVxDeYHoHAsnvXndXbfj",
  "key24": "Y5vjefRuBGukUaQ8gFjvN6TyKSFRnSQUWjQdok2pBqz2Kpr18EoRL8VUaJG1xij7ExBc8L1tcLXBRy5XSjviKvP",
  "key25": "4VQaEZA1LxpjWtKdd5A5EmbewZbJdMXJ9FrqDnru31KVPtafM24sB447UdA2qe7HkPiHCJiUGCBR4XLkHZ98dCzY",
  "key26": "36pZAbd6XWrpruDMV5xhW2xtwiwHsehicUZfJmXBKAjz1zUAToP4XYfSM3HvU3M57dMR1VYACaDqS6rLe8JupeE7",
  "key27": "5KBeNXHguMMJbw2KCjsd361boPfrha4U7DFFbexHkp9SFaAJ8u5yZHvTtTNWjPrf2HmJh1gXvqJQjoEiMuSgVyQJ",
  "key28": "4BiwwtjRGmC8dvfkcQT22QDGtXhq9NbggxwjkF2BTPGC2wJbkaCyvJTEgfbamoaWRQC82xxxcrNkcL9G5XnA27EF",
  "key29": "3eTzkZEk3sooAsbjeK5Qfwxu7iUvVap95NxWPZYN5BuxQWPnUNU8Xk2t87qXobjgZaQy3c68kjGA1gTHbkTyPvdg",
  "key30": "4nwzHhQg68HD2CnsPEBWn58tvookhooz6TKLGHeX2o6e1MA395SvnZBYC5VnNAJrjREasoYWYBPAF3NoLWtSR7kb",
  "key31": "v55MhMhjDV1GdFxaJ1sr5qURzXZM1uWn73UsRVZnDVTNAtd1fnsM5fr7Ezptjejv9UQYJzfhNkhYqKUViLBPriP",
  "key32": "4DssL4uDMURww7DABJeVUte1udy4Jca3TwTsZpxxDcpo18m1VCKwfME5ZzcJamJp8VTu9J2jxJgfgMGvvaJUcCP7",
  "key33": "5TNdMtqvgmsUY1Gwn263C2GDJDXh9WKq9kjvA9a28ZsWKcvJ2WA8B7HBAWqxcWNSr8W3TSi97hgeFXwPmBkb4wBs",
  "key34": "2DWNM88dG6iLxMmDpF28iHL1dXkCxR5gWcXvoujsSrULKUoCJEvddT2tk674KZp8EhBY4NPFjYFsETB9spszbosN",
  "key35": "4iXXLAAagPvkAbAkJ4Amsj4jRj3BHxexZ5W9JEiUoRJwPefTnspYa8km177vK3PNSxZfi1vpGAheXcMWcByaVuBG",
  "key36": "3HKDhKRiat6fX6p9EYLSGFVnZeT6NcxbtH4Q6tZueSF3fP6objA51cDXn4h1WpgqZQWPr4fYwkS88QyVpcx6hqaV",
  "key37": "31zca3JTHBwivNWcd5JhdcAkGKheucGzyEVuDbodyFCHV2zCG5r5vVeQ7WuZux5RqJ9YvAYj6ENC7c7tvCpnhzVT",
  "key38": "2LP27arY3EqgkrJgwS6W2iRKYebAipngw1TgpYszyMMFCCfcqmW8MMNH385EYf9mPRvUUEcyeF1f4ateu4jXXL6i",
  "key39": "2GFTaFpEx5KUo5wJtcXfpfHxggq3edaYgAdoWmNnBeojy1XxfUyH1FoUZauLZH78Mc7nPC5UDHrQRL8FQjo15hgZ",
  "key40": "4eyzg9y5gY2K9UXXcsXFFcurb5hgMYLy1Ff3rSQoJowPUhmn9xFCypc3rWoPr4WicD6y9wqbtUSmWL4LcXzAgXap"
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
