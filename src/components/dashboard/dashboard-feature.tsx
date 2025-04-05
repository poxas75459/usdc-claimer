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
    "35We4APCVo3B8MFCtZbjMaCoEwGzyqUmQp3YCnQJP4Wrvh1DQkvQVFt6M2H74AcYP1C6hxg7UynTw3fGcC2GZ2Ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EspiNJxhZRhqsVL1o5rqTrmXzQUdedd9cEbEyPWQgcPKboyU7BBeADXkc7qMb7oy4ewjy8hRSSpoCb9CCWJptpV",
  "key1": "21Mqqebxf5ACJ9AbEyZdX2AMGkxDJTQ2pC6DmP4sBFswW3kdVdnunZ3AtKUjJbGmUAGQq32HpC7CwHa5TUUjAFYk",
  "key2": "56SyYAMM6UQCQ6ZnwcmFFppJzHjY5MU4y7FnhM9NzCGQQfXC9Udd4L3d8nUYGPRSPgTF89ZvvRxBE7TSnEwhkKVE",
  "key3": "2N1Yo7AT9LVaTXkSKhrbnirhSSGJbhJ8ayQauHmjpawrPSWGDgvFc8ZYsVSVF3RkUxLSVkassDs8UCFQ13Bk8Noi",
  "key4": "5jyNkVabGpSZ1mqHcjrW6z1kyoFkjZvLWZREi1adoGR49nHKdoxwvajobbFQQCd7eAyYdEEeHABGQe4MLLw78Xmy",
  "key5": "3mtoyr4Rxbr3GuN9M1Fde6ZMk5XwcJnFSk8BnUrxDhPyc8XbsHrAzS9R9wVruJKMb8EALj2jNQudLvzj6TdDC5J8",
  "key6": "2unzMyEVSUMudxNwNYDtU4PJA4NKKA3Hcrwc8FZS1BMZcq8SgvqbC74UzKbNh6PwUDLD2U6dHtnkXLZYsii3pGQ1",
  "key7": "4Kx37WvyvtnQuZ9HoH6tZGfpkdzjZYkqqJJnKSDcRTKL2xgTxYYAQA9asQHjGhimuY9yTp5mpFE1VubMn8x7TKUU",
  "key8": "2KGzg96hXVivjvKCgv5z3utxmKe9iDRucriMqSfVXNqTcTX3FovQcQRDuS7vDGWrnVDUpqCLkgwsaEhkiSPL8Xfk",
  "key9": "48Jd8deMqt6xjc8Pdh6GS7a35NpznCeKGqpJAaoR2YCAgcNqmcDKaDhdKMLrnec4eSddrpQWrucYp7VpXwxgwGrp",
  "key10": "4LjPGiZkmecCfLn5dk1U2WfoowVuSbsYLYn9Y67KANzUyrwMFqdAJBtnRmYYdxQXXn6UNeKkQ6EJgZtQxrdqhwPp",
  "key11": "42z2KRjycBP3NX9gsP1WPsPeSw6sBRzkyitXoBL5WKWmYnmND6zoZSk1K7rfPqNPQbju8Mc6zvc2kxLLWLwXuuxe",
  "key12": "LWRLjxUXcoYypNMZmJEJWCrYxhsihGjFiLGymj18d5vjksU18SmrzyEW8JGUnyJVhWZTv2HD1Ge1HCbEXBTjivQ",
  "key13": "4ygT5HLUhE3RLPeitbgswkEefZ7mAKDT92RRUWEjw4qbJ79eYJb96SoptJp8AfzMtLm6utTGksKCzbHFcStXZ1LM",
  "key14": "4CudGwCNHbJQ9ruDgjVxdyFtHyrE6vkZG3U5vuUn5TC6Ji5tCpbABV7TaZSyMxv8srJDNu3bXXVBuHcY7DHqbhso",
  "key15": "hfHD1QXqjyo2MHWEJGnYUJ16qvnFYntBodsrFgn468TE2qwjuWFpNX9pLvcPxqpdAnaf8S3iY7sZKVs3vhHeBnT",
  "key16": "44DBUYpb4iFHfizBTzjgKMkm18AR6F15ML4L4M1zmhSzyo2D16FmZCrJ1zawYzSYtjUzir8E3Hg39BZb5qAYWnJd",
  "key17": "2DNUPKBskhJH3MKvyzP4CbgvFsTWZfif7i35VjTNhK9M3ZKNZt5crBHfxWL3i3DRutYBmvJGzTcc8VRwLFHF6kno",
  "key18": "5Mzk82vkJeXSZ4w5JzLnRA3PAyz5KoonSVgcRNKuHdphgFXBqeSBLLFF1FmURJxgowNZ8MnyKSjuSsk7sWjeESFM",
  "key19": "ptj9WUqFdXESEcns5hAAjB9fAJgq2YgcDCpmQY71xA3btidinQpZ1KVXr3kvb9jhmTPC5jjumDkY7KTbDUetbAZ",
  "key20": "3K1Ji6bB3oxzZ7wXsc2TT2wupGCGgAptd97bJzKgc46tKEgC5sXpyHJxC8qj2GmzRKSnWp4ZhxWZFdZYmuQfQEbQ",
  "key21": "5wJHXNwQkzygrvMphoXSSTzahn3hrKub5iK9UX9DgvAZPe59PMt9onkn6GJ9XwjhDPdqj89yPYFpqG6116gPM8h1",
  "key22": "5PVZDv6Sj6WA3V7EW2FCGXcYLAucshiXN3omvVXVMNpjfUjjQ5XT8FuXP1533dbGVqnA8awRwDGaVMVgjHFFRLzo",
  "key23": "23qE5E5SidLFCsbwvABaFgsp95oUBSyNh5sHDbcNyBm5bD4VdC1FvbamyWkr2cQAo3JtiUaN4uPBXArpJeZtyfZH",
  "key24": "39QbzdMy1FNSG123Gr4CacouVe3vVrNFw767fwUaFjZR7zH1AVUpCfveyL5Le3k4L3iWvZq7PXpPaW8GPPETts4q",
  "key25": "2ARfYRXtweoNFsY6Hx3FdAPzTMSq75dzu9PpyYL9TQxP8D8y9DPmdDkH3ewP6N8W2jNzZcBZ9rKP966yAc1jmgEd",
  "key26": "2o3bB9Emw4q1VLhcrPJ6hBu6nzn1rdjZcgtvj5gFzd9qE2d8iB15hL2BaECuixM8aWrbUbPdD4hTvJxFmd7qnqzS",
  "key27": "5apTyZQqRJfxLRY9EVGRbHNXN7mrtivcHnBUiRS6rCKCfNdWg9Hi16kQ9S9nX56m7ryZvoxv6vw45wnBpNV3SYQ9",
  "key28": "2xYmkYaSpVMVSFfy7RzgEi8aUH8AEBxEv2bVB9KDzhJx8X9Br6iJgNCvvYViPuSByWcaJcQzrkkjPcPcxxvbKohF",
  "key29": "4ZbxMPvRPBTYfxJZbBuRh224WExV5brZgKoeUYEQtfUbJ1ZWpHfFRVjxArVzfyvaFeMgaTp32no8zx9zySTz2ScC",
  "key30": "C3nBPJTLYnxq282izUrGHBtxPWJm4miEJAbGJF6cJxijPcn7SxJrtE9aHd9Y5akbfz3Sj561WafekGgDxsKp8ja",
  "key31": "5wtsPELMjJ9pJaft4tJuD9Aptx9g5ZRxvW5EuhMZCU1STRuXQ3zkkuY2gBvRyBigx8vi54gsFGXpWmLiJptemd1r",
  "key32": "62pdMPzYMvKq7LymgnGo18r6icv7XF4U37gMRnPQ9sH7PPDzh6CmS12HehG7Rf4gAoWjUuY7e5jS4ndpqcjHR9WC",
  "key33": "3onqEeYCr1Q773aqUBj6sqjJjvuyEGeJiVc6qAnrswioNJNMFqMs8yHeiqZRnThDmLX5A6E91Li8SUEMN3jt2yQU",
  "key34": "4chKRgKdDUfP2QZUvCFJWaSik14yrmXu6zeNgSgp7NgHYEJLGDo9B3GjCTvJ9dX57AE2sXaNV4GNKXgj5rX2z8d7",
  "key35": "4odmQ78BkyRXR1H7yGh7zs5Ys9pyrdL5qo6Tib8jDGRdF3YEVj6Fn2LMF5L3558txLtTqhZmRgCpm6h7ZBqAtZT5",
  "key36": "44wkmYuKt2fJAvwtKkUNGt8HqMB3i5AswgMjg7pZGNojTtq57FrCtcJUnSruGAzDqCxGv3KHhg7wgkMZZd1fWwTS"
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
