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
    "58i9dT42QMgiyhW7YRuPihGMreuFqrZWgEFLu4xDo4mefrGjNnVcubUjEZmjZj5x3wvK27pSoWKobJ9fkrUUL5rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TTbJJjUCja3NaeA8dXCe1gb5qoesv4rUVg2tsPJKuRmpMeAbRBY2oobj9XUMLKkvbSYUFeg887YcXnnHq7Tcj7",
  "key1": "4YfU3zhYsKCLcV2y5Qj9uTxQmc8pKa4YbyGdsCxdLXHxsAhF6gXGs4StPVt8PqGGNDWdcj2GvB6VQbEgCCLqU2WX",
  "key2": "3z2cRVxvL82QjiheymZbHHEERpuGhcHw3e2itRpdv6Nu6KAS22H9ynhNPi9wzAwoXufPrsHqYZZrKwyjza6vBLqp",
  "key3": "4LwkunZa4tGZKtn4moo8fqGXj4ZSGRBJ9Pf5hKC6Gnk7oqUpxm9L8z5GdEpg8rawySaR14RgSxB8fQ2pvprhk9VW",
  "key4": "4EsBQyi3hZXow3PMFy3iFEKSwpo8wuDuhNhnFhixqKYZr8qzg53YLoYruFHS2XSjN8m2MiFk8TVHLUDjyax4ExQu",
  "key5": "2TiMH7EwuuqNoxDiJtXLQ2F858Z2pe62Cd7hrb3DPsczqpf2Y8fPfrbkf128eeGp3qDBuVwCy47u6jLZCQAAqgWZ",
  "key6": "5GkcUYumcqVsvH1rbFEZgZPE3JJGu6aJVQcKdXkzXMnSmBSfY8uXeGCfopxcdiwcm2ktqjUgZkuC4GFfqxUSpXf8",
  "key7": "NH9urQ8QXw32MezvFYq8hSRWwwehjFtCqHeVLgnQ32uHAcXAyxzn2uDHEbxdVZGRjQpBu3Qc31vauvV4FDAxQN5",
  "key8": "3u4gao5GtYNRL7oWQbyVuUg7F971aNTjiXo7boaAzL28HCQATmLt6mBqLk2YpJhtTrPc6heitCts4K8AAePqFPKH",
  "key9": "2mwjvQixu9i1M8Z5ZXGWdC5cQgn6FHd1UXFmo6FmX5aSvoydkX5C8FzFk6oMc6j3WgBH8RvfhFqvc8DAh4YhCP7a",
  "key10": "1Xwcf7tUNdk3j9zzUQ4wni2SNAnED7dMGQEVauHy3d44SeWw1J23dKpBG8xnrPYZmULPE9Gkm4ezq8WsXEyTzea",
  "key11": "5XeLCeUPgfMZnZXX2McjoD3XEfwS1YV5YG5bDzS7BAQV3U2raBaJZ5TroRuJh2bCAmEtQDYmX6BmUMyVTEYeNurQ",
  "key12": "2w4eC1YpSxBFBMbENzxm3FtGMjiP2FfZEMfjwP4tCdyTcefuvkct4BSbz95r8eB9nCaBtJk1rcQgSZSVSsF1oore",
  "key13": "3TAfq3vNkQLmf2FMCGsW7STiwWkacYqUTCGgTBoMqUSSwWzhCwCbsitQawLUXQWPcKeyUjtX5h2yoXAhJiRY5FWw",
  "key14": "4qgDZiVKTYqWxYYrSwJVf75yZ4WRAviBwdRhasaBcTuFAsRw8RgiYSsxeKWZxzYD8ePGn2hgtfQEhW5i5cxXj7CC",
  "key15": "2LdSD8o3HGSNfRnajUQpuBq2banFv1SsuFhoVKNLi2oVnVLS6nKwSsdCuWnKCt8L66q8hhiaQa6Es1x7BhD9daiq",
  "key16": "5SxcGWFg8ddxM6A93G4izo8zvZEf8wt5CrZEsqDGTmAAWG2Ld3D7pg4eKisy7GfAY1YoAHoQKNSVuoTjbJJbu24R",
  "key17": "45ZfbjhZXVEQjSCiAvxS9dnwKZ94DC7waKS5yshkGp8zWdmbjyUp4coH1QN5zCHHAd8H662JesgyCm996BGVdF3J",
  "key18": "3GLQKwtxaGtDkudyssAut28arxc2gWiiGBQoj6hBTm5eXzNq1q12jA27Xwz4vZ5vSXs4dsxkmjTGY1DtrtWEKb5x",
  "key19": "3Bcpymx6WxuBmpUp7b7zVkDQdS6othBM4Tn6AxEdfyxkCz1yMz3x53MNiJTCB27Kskxz9Yy13E21PLhqf4yqN2SY",
  "key20": "2tPhrqQEGxTw5yscHfPC5trL1m27VvbuWsKJFLPqVyqdYG8mxrJ1vkyVybeeUP8CQZFs2QmjwNT46nw167QiMhjR",
  "key21": "4vJF9skAoy3DFrqh1zZx7MLBdgiCAL2Er2zNqFVBfoWbUPvCmC5eJnFBKf8HX6MDacH19ijYJR2bwZUPrzH4ys4r",
  "key22": "3ybbCfzpwArH8iWkDHrwytCvkuMUxbNGvat4141to9pi37Lvdg7AxviFVtWC4R9qY1eBR6HVC6srdauX22i41hZK",
  "key23": "4vMGuQ4DHeCdVzsouzehuNdDW1Ks6s2NsFRh891L94Um5JnsHhP9ZHYLqE9mrufnCF65Mf3ACguJcbJC6aq9QRL",
  "key24": "TPNZYCKUerQktAjK2uoEguUHV98VgpfHVcv6cfM8pnyZSkr6LE7Wf64dJRAm7yHpoPE6HEfNNG65qpvGGYoyekA",
  "key25": "4cjw6EcPrwA5ZuvD2mYJ4V7buS3hJxuyfn4CazDp5oKbzBnSrUCb2DyGAauW5saoe6ZmFRNBs8MEgz9CkpdfvgAU",
  "key26": "2apP9bY2LwvckgmTAki2GFb4N1NNDxaP8DQXPewaAVQfk3ZVxNxefqyohir8qXbjoMiCgSaHHCCuebCDoBrnTf7Y",
  "key27": "3Wxn9MTovxAcoQHVfnoTbfKp2p9iLyvMMrMQmxhpizYkG9Tj1LYFeYQtPFhdpR49TgmBbsohF2jUjcQbnY5QBB4i",
  "key28": "3Yid1bTT7sdxmhsaNfinJmwJySyLcgcKcySW4UbVFFTSdkbpv3iYMUNneW3upcUgMhM2qbS6e6XPCL6Zvnc6piGX",
  "key29": "39LBFr7DQut5wukNDru4VeS77dEFiDUHLb7LPKYeSmmS3x1dB1eCR7Q1wuh5HrwNuKPZdZk9m8DYxetzVABXt3CA",
  "key30": "4ae1wueBhsGVbALrxpHXi3L8UqV2qt8x32QNmWJRntL9YMUk7BgLSTqhCUwY52oGf1dpym4yT6e4MacCF3i9H5aK",
  "key31": "2vehXxoc8zHxLhNt7kotccKod3WwaTuUsqf4rHH1jAzBwFyDoNX5CTk2Bdaos6GMMeEN3ZPrm3deNPfxsWSup58K",
  "key32": "5kYzsNCFGhU1FLbKwwHPgP538rQnaagPeH9WKTD9d1ALfaGCyCUx1VNovP14AFZvtBVGSkKd4Z8vkyof7sqMJGyF",
  "key33": "4QjiRbBhomKr7cGQoMY6fnz8tcGrJiLg1VMCspGJXdfRtDrwvRkPmAwAy6RrUQjoH7D5RLxHaNXu5nfPeRUwPGKD",
  "key34": "21CUxVRJT27fK75cJMMcXWtHrZ3u42svki8YJ57ZsjPqvwUGre7Mzu4mQLQ8zY2cYgTjL7mUmVG1HT2b6kxrtUCL",
  "key35": "wgnjxKwYxYKE8hu2GpoKjYZhGNpvKCN6Ga3pb7MTjfeJsdMpakkmLkmqMiysRoQkgRfd1vMUvR9JL1PaNRCS23q",
  "key36": "T9stJY3v6b8cWsFkST7e2bFmGyqfsY5pn3eymFYSbtGM3ZG2U1HFiLGW8ZUarsTcFVC3oUYDDET87uHhJiAvnkN",
  "key37": "cpznkmK7u2L9hVbzptJ6BovF4K12t5TC87otBj6YZ91ai4y1rK7aQ5FfHqiViSPLm9FCbgnFJAmKdTi5kT7NorE",
  "key38": "5cgUHnD9WjTmn5rMDgiHrGWBHKiDefVXs4e6f4Lr8G6tFeEbeLcN1F6Gw4Jqkb64t3fwoQoLbUqbZJ17ABSauiRe",
  "key39": "2ieK25EBSTxTiSnqqEB2SmMKv6YPuVsFxkV9gYjMAYc37QoCZnos48ziAg4A8twcHSMDkpPrDCkVoipXXArYkwtg",
  "key40": "Ua5amWhjZ9kpjS8up7gJCM4ua5MTvyXTsJV7CQWDXmk7JfiDhGW6t9FRMukcTSbkQUWdRRa7SzMXdwcJzXSPBNv",
  "key41": "2HAmYYm4LnrDB3n9UY4sp27diY6Pmok1dtDPQcuVcdtfTzVBR4cTLRgbwf237qFG3R3Y6oomh5yLhNumUhgZh5xo",
  "key42": "4XFcs7pSfSHuAbruYmZ3DF9GdvVJQBZpnK2TQfZ1YrueyyDH32hxZdBUSV3pcKGuY8PcjD6vPrEKrSmVB5EWypuu"
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
