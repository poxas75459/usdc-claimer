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
    "4gHQevtAUmNbYqJDw3ZAW8f77arpVKoZAnRZJ27b7iq2WVSRmXv2iKMHvzWspBRUNGQU2Mp1JSELy9cGCbBZnbCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Csv2tHLbtZvF1T5ZgP9e4Ay2wJvHVTmrKKsJ7ZQficRQ1Fp6gkYvHD6x4KKzKVLu36FMBmSBcDQENihcMNTatEZ",
  "key1": "2pTg5GFeZvmKRRbZ5YJ2dSQLfPmp7GjQ2okhERHutHQpPPfbG29kMtY7VXBaNMxjgJ5XosusQaav2Cdojbrq9tYB",
  "key2": "Mm1XvwsmnkZMSAgpW5SkcQENihhP9kncyGXLmcqkjBrqzcyq7a7Vu6LAgLuMQL2JmwEVgehwTJiDdJLr1QQoh6P",
  "key3": "4EQWviyzvEnUebTaqyXKj2et5rVenigevVCk6nJHnRAJ7Utw1nfitNfH3gVRZ3ZpgEhzPsvWbxDCMuhpr8xmUQD8",
  "key4": "5ZaV8gTNqG6jXgX1t1RvQTU2oBCdLmsA8ypoKgsN8mTecy3asuxauoi9z4RiJiD2nwDNfico7NNZLimEo5zvci3E",
  "key5": "3VH5mB17pBkEbkfFUwNgTATJ6XQPbpQPBGbao87WmEcvGbcjmaqptYZCQWjQYqnwd12NThGPZ3398ZVnm9HaUkKE",
  "key6": "2TNgJ6UHyg4KtT5DotnzTzwypznvEBnQokq5x6enUkhCQDr4wVCeypuG1pf3z8KmcNgB4EB6qJkhC1Dmdk769J4v",
  "key7": "41kmYPCcXDCacx5jWsRRz2oTEQNV3bXt9f9ahGQ4VxcBkwwBrXxPx1o1XVsvYgzv6vasw3snm2wzt3zSU46bgcP5",
  "key8": "UdXEPsAUqTkXzNmpaN7aUyQfuV8f57Hzc5vgM1ZD9DRAmZZa62yXHZ9Fxt9Mm3dyXShtAm7xAyzjUUi7uKkE9us",
  "key9": "46VsZ9RFKtPhHNeUjJC6XbvsBpJBGbEBZ4fkSVstsRgfxWYbUG8rgVtCQGcpn2KnaGgCH7rk8Lni83jknL8EMnt",
  "key10": "28gxcWM519yMbUsApZw3E5qFrtUshgiq64GGnW9vic6U57Xy7E6HjyAUMD4xUVCSeYGqT4KKoH2L5PfhaMbfQXev",
  "key11": "WVUMeY8ScXZeNCNrzFqSd1SYrdTVux4h6Yg4aYTgNGoDfWrcJAZaHRVkXYLF7qpURv9TbZrccEmUpguiDAhr288",
  "key12": "22StEJzHchfWXkAkmaE3KhA3PK8uBT1roHcQvSV89jeGJ5ZtZC55pi6GWutyVF5t3uFaruJKWQpWqA77pkK3fD3g",
  "key13": "24VCZLNuMv3JQZyPMmu6oodVqB6jAvXK9Pf265uDHQdyWUq3s6zhaAdeB8Gc49RkqV6RnxGRJApYX567rL7UsDaR",
  "key14": "3WmoPxW4G1LThvntWR9SkTvEx6CVvhi38mW8Vt5QMEcR4rnK1H2uTjYt7hpDZnLUeemBZxY1JGmDAg6prgCycVBd",
  "key15": "cLawYLxXGuCNyYMJ2QiLtTvFMACEvh3rJH9C7UTNAYXW3YYw3QGU7JRYUrh3jarkbLFjr5wXFGU6GaaxCq1iBxc",
  "key16": "2odUFqXAbcQ55zygsCQewJQr2FdphaS4jUAJ8KeKQTKAgrEZr3G3MBVNJGDAfRvFcqggsQgibFsbhMnSvjHq83ws",
  "key17": "z7ca3oi6bDT7zq7iVmCsS8Rtus26wbtvs8j46x1eZ4M67b5E9YKgNFYFciSRJzrDHmH5v5rDZYsXcW1Kbq9wrq2",
  "key18": "d5buCC5Ti8icfqtcLHySnipYBPsZyepky7BFKFJQY1BRzxow94FHheu8eKxnuBM6nEy6oYtvvrBk9wLAoMFiiEx",
  "key19": "bmaD1szNPq9ZBpHsK9HV84foQfnnz2EprfQnvzoLamnzYnsCoDdvVhbLpzFCajTKo7hxcZ9bUamvBHgU4zhCdeG",
  "key20": "55JmUh9xHhPvK3fNKUDfx14NQAE1J9AxtNenaieHUhUfyEFDeMdh72Xw7mubQLBhMt4aQ8NmApVVkpDCckBoHdav",
  "key21": "aUU6BorXXK3Qia8PLvKW96rXz1HPFPUcSox3GcKK2Qj655ggmVNNJk7AB24dGkDMwVizfRrg36d9kVyftNFNjGc",
  "key22": "5a87UsUsc7HdFowXYXVSe3498czGSfS6eb2CsCQf9bxoPneudR6g6z93K8ZaEEEomVK7aZrC7SsmtDMBPmWtz9cg",
  "key23": "56tKNWKCoxbLjZm4Rxtq1QrAQBrUFt7wLQhG4grFb7G6jYaTnpeXxa61in5P28KLb5g37rTHCf38poSV4kV6prYC",
  "key24": "4oHd9J6d3uAE7kAcKQHorgwAe3VxaCRUrwfTAbdZayCu8KEFPUgZrf3Kdonyjs5MHmZifZ77uqre5Y572VAcLPrn",
  "key25": "4FkaAAerddxyteARbFU63AosBNcaxwLdidNqKLws5pNqsK4YPsEBWTNuYJuDDcZKdHKRRzgVRG8t723GkD4dNK56",
  "key26": "26d94uSgp76R8E6YhiPY8ZnWxyF2r9tRwgn58o2vMbiV8heYSqFoeXAhntAjtAsnrs6JzhNmCqxTGfDxnxg8gQ8X",
  "key27": "5rw2C6PJYnCxfQp7jnDNrBWwWye5owypfapYtke5wZ9Cgj5gEftrSpQbWVzWYJXmaHohk7JeWoz46hhJLoDV5bm6",
  "key28": "FiiYBTdV5Q6cYJ7FRiE3KLvkiMWsFyFbK9KpaVUGycdvgv5FcUzkF6uGke3wegpiVzM114Yb6Q9NeJPjSfcCmDb",
  "key29": "2h2w5R9NEn7SyQPbdMca1Dqhd1xB35WTgbx42BTrWB3bfZhNZFRAo4uw69KoPRL95YTaXcTWe66jGNpN5Mem6B1Q",
  "key30": "3PZfsmh9CYWx8qZa6DaRxrYaLD1s7oYPasW2bWb378Jtwf5q4uZVREMq2zWAmhhH5PzYnVbFtfR8iHb1PTyYgKAj",
  "key31": "2wcZxM1tWBcfb3KKyKdwcDKipNELqVsz3RqMzr4T9mx2aBrDQct7P9PwcMkxPhwDGtAjakoc6hMQTHbkQrBJ51AR",
  "key32": "2X5DTdciZ8f9MDGd6Ub98wMJcBiCmCUp9v8hMPNqmUuLq6m65WvgDnLu3YPdkY8Rzaxs8JA4H9epY6wwmYMZ4qbY",
  "key33": "5wzv7NqCVd3Ba2zExrgmMc2cURXhJBGNtLGPWNBokuhD7cgumiTCbJXQTEgWi9R2jw9s4pnqEV6hcdV2hD86ByHq",
  "key34": "5pc88KaXoBcCxB5tm4mqrxhTFui9YAZ5XANh8eZZjwLXh8jHY7cGnRCPPhfNCDMpeqVbvoHYjZJkmc31QoZyb5WD"
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
