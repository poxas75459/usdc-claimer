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
    "4wwPNAsgpZHb98DrRcn5fPJUKgPdPR6eszVnzAf2EXjy5GzNDjHxQMSTC7UTK2Et6K9dVmDavM48B5tDw8mCBu9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37FsEJYbXi4sDG7amCW8B7rCh3J39suG1eGSNK1rfEHhBzVJvNaP8ADGeeQ4mtzPMzsdPmMVnRzLENxFwiRg9bP5",
  "key1": "5EaNXA6xjHwyhK9ahRDJ7WJrfsg4T84wPrKnrzxqhgLxX3msQx2ipHentaZEB26DUmHQqu2FnU7VCmKX7XDwNLpZ",
  "key2": "39jjcvLsPUpi4iT1Zv4Dxb7qgx3UjUsKMCWbbUKPDgHcC5Nq6UwfXaAScniw8t9bkpHzHfDqixkxTNEbTxgJ6SRc",
  "key3": "3jfZy1HLrLNUT3nEYguTgMboYxRZEvmKif6dJt8SLYpaMLPgBnpdFZS8bkodA294HaMfhRsMMys4N5UGVPf5Lvam",
  "key4": "228XH4S9P67aLEp47WMpXm7GdqJbLGZkDngJ1sURFRYEgsJcyJpjDWZ3Dvfx8kGsiG96KpZwQsUnFnoG9BEU5j1w",
  "key5": "4S1AnUjdfhzxm7U3DngE3VBwESZiwSgZY2yKKtTBHTuJW73ERB1fbcC4F66TWQBp43NqrdRYVjM8uaAdayGsCvud",
  "key6": "4LL77dNDuTFmHFnUJtRxgRwLE2grvTWjmLP7HWn8116Aqsyy5zT7CPk9cLKSWv8AzJk3xpq9k2JxjQym447JU5Ct",
  "key7": "2r5C8KKZ91BBqESAY6QwC2hJ5AhKWuQv3V6wC814rr3hQh233oCJHsHq61WfeEXoXE2uM1wSMHCzb4pRPxcWgZCs",
  "key8": "2wjGymm5akh8i2gVAzj4eRvndHQXbc4eraqTC6hVghUPUmKxXhCxGzuecohW95mBCg2rF8zVsHXUFaABFNuMipU4",
  "key9": "oGBU7eDSrhH7PiXv17fNTHZ5KW4hy1ikHZtF47CWcXYmYnSBb1hDDVGQrmGtfTB9aZ2RWQszUKJDZWucQYNtUzv",
  "key10": "TkSqzRxfBcnESZm5WePcLKCWUVe8vXxb8jAcmU2pq8xUGeqojEMrppXkM87S1GvFZiXM5v6LnB3dA8dcvVqhue7",
  "key11": "2uQYBqbeVhDbo3QDgTF7EnTNVVgKcDFZhfW7B497h7nb23iXqB1YyXo9SMX7oMF3XJeFcWJ5ARnuC9zY6xqMBM6S",
  "key12": "29xvuSfgScpgZEix7U5uXS4QC4ggpF2dxizBLSsCM2fjobwWuPgVJA7TLwAmXXw4E1QqYBHkpCn2aRmUN5CDgGE2",
  "key13": "jCAGcmoP78191dq4cjXyGkbxzQmJ7t619ahXaCNMgyZ5wmshEqFWrqWtRf6r6Y91VkLgqTRRgbUPuHaxeBZKQwS",
  "key14": "4SzCeqhHoakVqNvytsQKgA12v84KbU2GAsxtFqcNwxbxsfNQx1fJYj39XrMnCfhEsXzYLLZByJcubY9xkr29aJXD",
  "key15": "2rEF2jyCnRKsNJpJYBA56PyyNZ3L7ek9EqWafgv8o78RF28fEeujt35sHRH2qrHgjyHis9xu7gKfGQjkdBtMLLit",
  "key16": "2GL7ZFVYz94faJb9AYyYWCtvkSKV21FNb7weWwKDfqCng2yWdP3j3WhRMxE3uPrBQXrAkUQZGBasGbNteSfMeDdC",
  "key17": "5yaRc2fNFd5KLpCyYL1d8dU7bhsft83vuE1YCr58uHfYpuuQ3b2dgQTGQGomVwtmWyyLoEvGyS222pNYfPmF8K2i",
  "key18": "39LfCZsasbmqjfydfqbZbHFNe8Y4JZGWCHp4RndJK2YmudGkGG8JeBkTbZgbD3EyAjRUkoCKWFU98cmZKAcNgcvh",
  "key19": "5nihWe53GnKrihDPWYTQBN8Ji6qJ3eHZjTuh8ajw9HrR4XC7YrTxMQU3q9ypMgcyv3DDDdC6MNgeHPSHLJ9f4KNw",
  "key20": "28rT7meY2hys4dbBBxgx3imP8zurbA98Kt1zjALAqiQPM6ybqxqRMRTFwHGTUYvgmaRpZ4rWHQHj6RRb1EA2LW2G",
  "key21": "61PPouTEEuQm5jB1PjnmQHJ8fwKvCmauHL2kmYt2LzgLfuTJrYMiFuHRcUANifarGiJf32cV1KNhEzTX87pgyaFk",
  "key22": "22af8ho8bzG21Bx5o4m8KXcsNqj3JFS5jND5KmCNgq1WgVnD31gWkEPuc3FnmCjtHa41Uj6B78dmLhfwuzWyBw2y",
  "key23": "H5R8XgkxuZrTXCkvEaiNjBLWo1KMxp6wGVT1fw3qhNPxeVUqtR2sNrKwybqWvaFt5r2NonewVDQ9oiDKjgJiPUc",
  "key24": "2p64c5rQjkRhc63vJ1i3TPmFF8g5TMczDkkmXRdJgHyWL2UsaCUCU9ssnXwAJvyRy2NfSLzwp74x3q91q9hF9dfT",
  "key25": "dcrnTLMjTTrW4pYquuhPVSm3F87voW4kgXUPuwxKBsPxUhTYMbumK3WupaDtEzkEtpFQFyrV3es8jv6mecXi25o",
  "key26": "4zxLC43su2rzZjnE3FAi1RWDuR8bEokNnxXqLiv6MFrBheiSTiEVTHyu9wu7C5dA6UNbxez8fEyk5bV73ucarHYK",
  "key27": "5fsCJx2N4MYG7jH6NSTckzzYAoF2e2oLRWMTXMggrZEFhn82RHHP48kctyCHQNe4AYWmKnB3jeHPEGMPt6Mn8VAJ",
  "key28": "Ztow1vuEsY9rU91wXAdbqsjMnEwZCaufFWGTNiQuY7PvjmUPZGBKMdzUkaaCW2uDkhz462x8cagBgkMGniiN2Ny",
  "key29": "zKVMAaMBPQWTah4q5DuriesjXLFeh6jNGxux1tnKvQpuNLJA4nzEApneguW3gxf7M8jDbaQZiZZcJe8ekQXxua9",
  "key30": "GNpuh4ELKJbeDPaZytHjXoLFz2DcnqXG3oKTqzxrH561AsCTW4yUmN7wuArhniwC3yQc1BVHisr92nZomMGsXar",
  "key31": "81aqQt7eFkGiWPkZskSJsE17i1NYJVEuvi2vA7f5dCTx4dV2YxYUn5StErC8DnQuGY1rpSzmoWQCT84psapdAf3",
  "key32": "5QUp7Bfd99WhWVJR7odkZyMdBoB66ZrXkLCnJYFvYsecppkPzFs1odXYUvEaBjQKfjw6mu5yvyWwkMkw1Lz4wm7L",
  "key33": "51T1CfhctVYZAB5RBfhzc23pJniq3BW1pwRdJphG9vXcYzqXG896uswUUrsSMCckBmqXFMWe55E9t6KwjgUm4Xgv",
  "key34": "pfwexxoiEnDtUQ5vhiahHqa57NJzEXmJhRzxnVUU1gMAqMmnqjrACaQ6fAGRNKu8uQY3kRzUZGWSdFgyPdbnpbo",
  "key35": "hgv34TVAvkDW4FoY9bCyhh6q1ee4zbTJJMFdrJbGSXZu861pt8y537qW4k8PE2L6gfBHduFKi6GCuqDK8oSGa47",
  "key36": "2pjSCdvF8jXLGFCNJe1VKQ4RqAxtrUN9NXYKt6ML9Mc91Pbi7jAULNDEHqicHDBBWqegyaxs6pjxJ5p6oPFnVimK",
  "key37": "1xdvTFnpcnwchBsgojisiY2DKubKv89mMLEeZPjB1b1EsifmSgymPMxLC7uT7GnyvUwrfaVLPkG8611du54oz3r",
  "key38": "5urQxdjmU74oBG1XkfK7gUMEgstqxro9focEgNGV22aQyNaiD2HYLmdtKkjFFxxTU1Vbn6qZNnWqaToXSD1S284y",
  "key39": "2xDrAoKnBkmBUCDQLG3QF3dDwZMP7bfXCkyCiHgKLFCQBkzosFo945Dh2yFDwQQvnFaEAtByvfiJ7rFHLCPdRrvu",
  "key40": "yC3tsoYBTSHM3UnW9fnn8zDG5tJBR7d1cEAae7TpBZpp9bK3HQh3itGfuZCzqcp3A1sgjscgyefBigeTERFrPup",
  "key41": "4DrshUQjRvRsiK1qwfAkWKKyPV14QqJPb6pMACtzUTLnDQeJfSLRu6ZZJ4wEMmvqFqWETN81J2SPT3Kuvaqb5k8Y"
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
