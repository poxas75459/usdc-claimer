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
    "3ws1ei785WGJNKvcaJ9Xk77Dsg1E2ntPJQiF8icAEveTCSEtwzbDjNtnL5MF938JHyqEzfDYvqsHK6rN1PbugetF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h1X8hdXUQ8gjeJYzHWmKqP1tBwVYzcyfujso3oSgKMEsQ58VjxMm7BEvgDBW92uw7XH9kfHdMn16faegwjUpCPW",
  "key1": "4dmWKeVfWt7HHF5auHkps1XUrQeEnG5kdcsNnXnE1YheGSQuKrptSkAWGNcFdDqTx9XDByybhn5TGFTwoCoysvw5",
  "key2": "PYjyeqK9pUNTBxkJWcVCxgx4RtnVFo1yrrshNBzJf9td2rwvg9mbh9KuZwyumAQtNySz6GLdTS4VmirTNLqifFr",
  "key3": "4Ze2CgnQta5MdgxarBMffW3yR6ndBQugZNDWhkchso95ikiynX9hSAc5sB9j4RSbfgtFDvzbiXdmuMvr1nB6Qbi7",
  "key4": "bnp32Y5rmhMaeMRrEnn5xTVvr8my947kogdmM53DwaJFpJGnAsN5TG8bToUDNaoBHWB51myBcp8UBdMbNP9pkKW",
  "key5": "49LReorCe6Bo1GYVxyhvGAoQXH2BsXDFTS527tqUym6cRGyM1uzYUm2XE3mWqoMfhQJu7Gj5hPnZxjHMvYXGVLyh",
  "key6": "4XTXWp1B3NtKKndqmooCJrid6MrScTydBM3MqhDy6LJuRDBJKygvwy59KjerXWDACnR3C55Vca54BjKUTJ7A6TGA",
  "key7": "2ZVzzadAGhBaAJxzstkSjSSuNuQKCX45LziFbu1cfZrK1KhZqKc1RYYnPA51ugxbCztD8vxXTfchggTkjJGtwhKs",
  "key8": "2qT9kEUbbeEQDURASdWM5XHmWUQTqS1JcRP7isUAPX4qkcLUWm9yEdAZxxQrbGT9DgApHxgv1gm7dxLL3EgYerQb",
  "key9": "5SieYuHPtF8jYzrKdJx2WW5Rrdds9Gp7EkePTX8KZCpqKwG7eMbL4t3AJdrNsGJA4CHwam6bFeKkvxTHxBnWXG5Q",
  "key10": "3weD9B8x9xrcxpXs6joXvvgbNGnjJ7thMX1EK7qKRit16vgfiPo9V1Jxy8DbMZCDWRvJrYVZWBSsxJvrJXomZWse",
  "key11": "8nZZjkvQqoSuLu8UDc4kZSSptBzHyyycMmKvhxTZgbHHacboAqCewLL77jQUKkPEz4gtjSiRc1ayZzUAousBxd6",
  "key12": "5hLeVUfLwfP8fbJtjWgkKtTy3hMgeH6njb9xAxsW8nYwfnvCtDmXAkaxKs599JpK9HvbBBDBdGPxtxKSPRWGssvy",
  "key13": "5K7xEAzwn586EXedbTvhENm2DGAhvUxp7yxWGMaxj3dQ46cHm1PbAsxJbuxaCQG5rRNWAr39woPdb9MHuDspkMj3",
  "key14": "4W5RJWzyDHNtcAVyJW3Fs21Kwn4hndGZ6NsR18hMrNEabguj3MJxgzsf3jTLtuNGh1No5Fzvg7Wk7sEH8imvVaA9",
  "key15": "2MXjQeWu5fMYhmx25RYyMKmMPudpfPZo5GnXaRPjcajW4qbbhamxwqL4Y7jQUCzo38k9Qi7nUJqJGuKsKBY6JLJj",
  "key16": "5sNGFv7BChCbWkdHVTGGRUtDc5XBhSd3qCaJHURy2i4Y4LtH4eYftzgfUiifv6aoATrr7Jr9jT5rUAaoddBuMcNf",
  "key17": "4tgDpTVHF76ux6hSKcSs1kuvrixdSX5fagSPDhmPvfkKmb2JvYtBdpPza3f5r2CzFAJwv9ywobTJxYQSJaduAmSh",
  "key18": "59Po8ww6yfVBmPXYeJcYU6ekNkZKrMrCMYZkWRnxnh8Ye8xksBqXWZLQJuQqsR2MVUjcKZvbWi4GtMxP5K671izB",
  "key19": "62Ad55AQ3485Eie5Ym7Laz9eReNaLYjBGoRioC5VApYgNWB6Jvamt24f2EuQ9MSecvxB3qnYujWmGnuwpy2zMGaH",
  "key20": "2oayZiQH4DobEmUDJyubzPTWpeTGL3qeXvDSmAUagqbmHRNQkcc7vpUwvy6TtZBteybgPCztuHBsTs4fAiBevJge",
  "key21": "4QnBjxhL8XqjvTZ89u1cDVJZGuGdtbJ5XBLxX7LfKdsCcKj4m1yzX1Bpov75GHfW1AKHhZmHj5WVp3tg4C5ekgSj",
  "key22": "5DHqTHy2gwnTLEbN9S3SwZWAAgTHLAyWrZ5wgF3QgQ1J5Wu4YFEjy1Y8MRJKQMQtTi16SN1KMBbBD8oJfDwauRRu",
  "key23": "3gZ727knq1uW4Yd2p4twT3JjvNcZ6WRrw5U3VsrorfcgXYCR6RgvaXvRPx1zXu2NzcdfzEpBsxAKnSoFZ33fjww4",
  "key24": "42xWEY6YwEAGG343isXBDaVZA6o6eAFyN7tCxNUMc17wLEig4X97zgvXRnbVY9wzF4yKsjjkz6ekeDYPgzyuCDm9",
  "key25": "2cFhCvsCQ9napeXbovjJspDQGFjG2ZvqopyuY3RXZgdDPdY8Git55LFKrsKr3uxZnLyCzNsNKcTzBCW1TQTF2aYm",
  "key26": "gDnrxjSzbmxiKsmSEJ7gUpcacLxjijS4WWSMQ3w8WaSLdavjgLQqjVrhEYR52ixRatKJeKoM1FijtPy8riQVZZa",
  "key27": "3vdWdy6P4ygkgSGnr1CwNFdwjqQZX9WgKd3X6HFANHAvoWv6bQRQj19r1TNMk2BiY1txZr8arg9fywEN5RZCeGcU",
  "key28": "E6xaQp6zACpnn5HKrfUc9u61Eox2ChNC5vtN4rhSU2b9wXQsYJKVBK4LhAPFNd2PESxVKifEjrJWBDA6xP26J5q",
  "key29": "3qePBaWNhFaZotcgtvch3peYLaTpyk5LTAhr1hL2kswfvfPHmxrj1Nx2qk65BHEBkJQwbf8nmQ4hHa3BrCiQa33t"
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
