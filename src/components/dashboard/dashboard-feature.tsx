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
    "38YgwaXvLVszvR1RXVAtFce7JTfi7tpuaFcsHBFu5S5eZxogk3LWrWG2aFV7UrJFJbjHJsZxcfm7Rk7eMyQLL5qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3Biq6eKFfqp9XZkdjEVtDL5Nd8ALoJShkzGqjv95iwzd1RBYYrX4GBiT7dfunsNNLudNMVZjifaLH7sDD3itS",
  "key1": "2tHvP9ZsintoRJAgj21qXBWcrua68p76gtn3DvY6w54VFAtUDZHuMsPn74oWS6gCmrFFdReZGnfPJ8ugSngSst9T",
  "key2": "xs9h8Vg9ipY1Fju7RkzY1q7DcwAAoyAaa9v3AA4beaPj6FPKUW9AaD6sqwHMGNhX3DU95DvodLxfwkootFTMwMm",
  "key3": "2AsGfoPLPMAzzL8JUx9KHZM11UiiAEqj4y99MYKHPDCpiMqFjqLrJJJR5RD53UpQTmvETk6fBKDjqmmNfjsq8yaw",
  "key4": "2LDV7jpCB3w9V5mPWA4ABFBRE6J8xhrVvgn3NxTWGT7ZWC6aiQbnPAFhC8md567iUooXhFC88PgA6gQ1AJssgYWT",
  "key5": "4wWNzYs5XYNp7bKRQAXUNz1jHamxrdYcVpufp7AWhS3eZLvK7vQUiJabfDpBCkaXM3qqh8AkDSoF3M3FL9B4MF36",
  "key6": "3Ajd5GdJt8aLTna9cnScpeZ35CUfB2YKm1EKaQcAKRCTwYwkW4uteXAXoqLLNVbnNvzi3KT1uPrjkFDw45KASFKq",
  "key7": "3BpjKxze6iE41YNADhMmLmVYbXvQq7Y7pB2CNzvNrqs9h5CFuLaxszbRvY7y3roittHdCNB72tRRf81f7VL6MRGL",
  "key8": "5XomzYoKidDzT7EwJseLZTq6swDMXvTD4vYh2gZPMhNkvtFyBSMKfgARHz4eHqj89S98XG2C1fenmmF7UZEiHZok",
  "key9": "4smEa1T6bpfAbTsEVvo9pkfZJhJDDxiowzvb6kMY6Gd2gvmehBP4DTufKRx3S36UVLWhrkLiyaotGh3swibk1rJ5",
  "key10": "3BpoqGcQ3bFT9jt7UP8C9sKqbwfJJg4bDKqMQin8bQfXGYRPkfhW14AWMtJvACyMTUCecp65bC2JyQBpuk9rDH21",
  "key11": "GQc1wRU4hSL1WLssuqoxDtxcbaeDZjTjjS7akNk96abemX2eAB7URjZ68a7MvZf4KC9sKwm69PQZUBaw8FkKDLk",
  "key12": "2bD24AEWz6tNVXsLxVjVMCFMqyYbxGCQqCgiM52e578Q1h4QftkxHQrQHn9uufDEnNbPm8LYCs3ocgLzQ5i53jxn",
  "key13": "4ZxjhcUA29P4P1uN6PEcHK7tGWgFyKTfSzTjpsdypetvCH51kmgFQzSTtonqL5JaCEQbdfjSYr14416ALtfmBCXn",
  "key14": "48C1Jrw81my7qMY9N1R5JcjM2vFqBCsgKrZfrKABrFD6mUTZmMBa42eXB86Bg67SKF2pvdgWn7DzatH51TA4E1rm",
  "key15": "54x3MNqkWqrcMzDWu3CGDqFD6Ss5ZjAz6Nmtbq5Ly7ApbDhMLCY3wipQSL3VC8iyLRVzBeaZ5gqHMaNyhr4stKCo",
  "key16": "9p3PsSawcGF6btdSCbbrY369RrNi6m93v67R7rVpKU7hYanioQ3WvLcL2uR9gYXGiwfJ7xFesvi5NjTEzzYXj5W",
  "key17": "31rvWPgzwM9Z8ycHpb5ZKGhN9a97pRRgPZmnb7YCF4anvg8P89gLu38c8n6DU8N73aq1Z8VzxJrFy9Ba9RzhYUza",
  "key18": "9JkextzgJFU3BRRDWb6CNGRsLPf9MEqmuzYHjbuFAceLZN24n1jSRRa7Wa4HA5SQV4f96WFhxSkikd5TmGQTnEK",
  "key19": "5HhEfY39xZ45kDHsBhcgnDWyDEdS2Y1omb3F9FucNpZXhvF8uBkRHLK3ADxz5GK3c3pybKExYhGjjq5NtnBf9hvR",
  "key20": "3ysLzDtgqi9kMepR7VHEWGDvWyyvhNyPUThU39CdjZkSUKMaAQCVM1nh7fnx9YEzXP8gehhDVr81FD9oV3eZkyjS",
  "key21": "5dNzJxtrNwFoKQLJNPxR1mgKQqjH4QsVhZ8C6DeXc3hz6Zs8SprM84fQGW33K2rFyu4QnXMoHUARvJogrGDFHesB",
  "key22": "4f4TCGBhJEz5GRsjHX9Hrv8B62FaN4U6ET9Feabias2R43npRbS45SzNs5KqgtqtRCtrXHUYvj5FzLLfUQYM9AMd",
  "key23": "47Kv3wNL6B5uYvam4Zvo26rdXGjMwyehX71Y9uJFRH99w2nSuPpkWhPYsAYCxhj8d4k3MvRqEXrrKugr7hC7gus1",
  "key24": "gkpsAeYUC5byDU87QtW2iiA5KjndyV5DK6KbbFSxRwhrnTrxuCM8Ve4KxMr1DbVdv2T8eRUr8u6XoaTU22wEPoa",
  "key25": "52LEFx4pCz7NYEfLr6oHSBHeZGdKWvh32BRKzMmEK11DoHJGqRimdZK1FcCg8wsuibVCSTcfQT29zepWm9LvB5iw",
  "key26": "4uoQBnfPPvCpmNnLAqw2Z9BpP3rU2Tka2b8TRDMkgrQdvHF6ga8gUexLGNjf3XimbpUs64QG43HDPCT38rHbNg9v",
  "key27": "3muUyGiTKLoJCk4PTZ2dKXXHotGw1jywqkSwHykdGJsh9xTCW7YAPhwU1DJBeBWEzg3JJNk5CN4ZoXkMYXaAKMGE",
  "key28": "5fsdP3ED39wDt6SF27hwxmM7GgoqRyd2hLLdw3Nmtdx1QesTc2QJTsBZU4VMpdAd2HWMVNAamVa1SY1bWwJvL7TA",
  "key29": "2q2yzt1ED77tRrLPxRjHJJ7MRCAEo4tc1esGfie4vPpBxMF7QRb65ywo6sxeiUtUzWSonKnVok3mXAKxX5as3Gph",
  "key30": "5P9UDk35q9GZYnVDxmpoapPwauxH8AoQu8NEY2LRWGcBaFsrtJRPmzU57VJgA1jnNDCsKuBmZTHhEvziV2K1MQWp",
  "key31": "3x5SfruJLVzYfsSpNuGr9Vub8neoyBSVNFbpCiYDNAgTRwZhgm3gZGArZNfHXrdratBGmxC2W5nj1trCw87arK1Q",
  "key32": "122rJVToYaCoV1Y977VbVQTYQ52KW4PPZ3nXi35RPTcN3AXx3ZLjySxCGAhTbNqvHLJEPLxA3Kz1tBiyPAK7Jhgc"
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
