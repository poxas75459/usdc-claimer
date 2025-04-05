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
    "2a5NuP4gd54uEpZTjBtA3vbTyTd8auFE86ByMTpFuhhXYg1wx6dbHMNp9hLnR9UxQ1HVQsHgESMp413sjPkJE1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZsUGW7mLjNsZVCnaaAHMvkkuvPEkQAKsERTJp626qZsM5EbQuDvbnQEdj1MBJtu39q26JYZeC5BLGVVUfM5Pzjv",
  "key1": "aMyPXYsnnSFk5eTABiCRtyTVx2BAqfWE9z4P1gv6VNxTv6DADfbfUc4QxBxdtQfUPMbbkEeXcBenWo6JwLPdzXM",
  "key2": "4YoZ7DAHzqXk7V4Rjfow7jZQZFtHMipQzeKM59ktHUzkTqYZUZtDoR8R92JgTdBRzhASQJNHFs7EF8YR8vKGJykZ",
  "key3": "5AimvLyVfHSRWWiC7GXrzgi93X3bek7T7vcyG22e7mKmz76LnbJGV5LcrLVq6ySUkcjiY5VTW8V5yLwBuPR7KhHB",
  "key4": "4PJwRDiSzNJjePusoJ2mqdF3tLSQwz4r2JPzBDbVUxfUMXeh6rmf7aH51zQRyooSHEbjJ7K5zomFVxS8behxse54",
  "key5": "5m2y4MauXVvEKMpnYzZrVDkacLsfJyRE6gRZN9u14xfskrcb1EYmYBSSm2ez8hLZx63eYGb3jd5RdxdQrPDrNqnV",
  "key6": "4KCh63HUSJjRMr1dTkGbWtMMwaLwgCzBM81jPPvRPi4iamQpLKP4nYXa55Z1x7fjh2Z2sWGHt9jrW4mgJMLYqdff",
  "key7": "2AQvdGGKeGH8sPTDBdpSWSstB2zKJh8qqc6mFqhaLDpxW2dhya5pbFwma4xBrgApFojYUREjPgnYSaoQQbsqHfH4",
  "key8": "5bHFqvmS3JygQ8XmndcoocMmTzj9BJJzfQput9VryToDwGvYB3pQM1w5A5hPiL4bj9woRhBBpqYcxnReGVbzPZuq",
  "key9": "3TQKzF5jEKhHuXrbRcD8e38fw8pe2eiwvBiJWvrKTWZC37NLgLwzckD2ZgTLXPDG8nB7BXcJxVwDsCM6qjGMB6p",
  "key10": "5tcqiuj4VqsHmEAfYhdnP1wer3Zr3wjMiYgSvcZnGcYiNTScU7tKLL511EpK65ys3WwwSm1u9fQnAh7TSCCY69eq",
  "key11": "5vmPvxp2LRLkJmAQswEGgda9V8Y3VYRvhMs2UonogAWSj28gxkpgKmovsFvmvWkCzgcegqCnWVsnhhZu59aVL7b6",
  "key12": "24qBdkS5xBEiK6KV6V68exHFwRX1WxfHuokkJkkLkshWmNUNiDU8TEL84rzhuyLm3BS5bBY7F4x61exDBdhEt3hv",
  "key13": "3ZEF7hiAhWdNvCF13eLeTS4ocJFescFRoVSbCDNRam3AGhY5twNV3Zbii4xpmYvkLh6G5SVJ83yEr3W23ZgPiccF",
  "key14": "3SLb6J7tX1j21XK11pHAbejMki3Ss46SKHfmRGxxg78pFZXoaaKaVbJun5WGT5qg8yFCMLEfMijD9htUh8H3Uk4t",
  "key15": "5WPXWrW6zJ87ixULszu4iiMAb6nZHxYzopTugkJPbds1ahi9h5AT2jL3hS9FbtUj5crQ4RaYNNy91737cBRcPETB",
  "key16": "2arBbe7j81X2ALonuCcA3nRczktSVm3vTHsgJZ8Xc9qnJko4ksRUJCuLhVaE4w4oZmnYbpgS5pfVZT91J2Sb5nMg",
  "key17": "nQgh9RNC9EXTvBsx1VFLdCVYD9LbGLb8ikqYg51hBi9g2i3mB8aeVipapcpvdft7PRvCC4gJzHAq7T42zXrokvm",
  "key18": "y4g17qiTppYCXKowMov4Mn9wYTmZPF9udjnxmKYSeioXfviVLhA3Dm1xt75PvooVB6QK4PjSu2koAN2Hhp7twgj",
  "key19": "54Lcqc4C4gg14ZpuKySKbYrekc5bpMBrMudLJmim6Dev3uGM7sBSfCQc7Pm8HWeYUBrwgeJZu26SiUpwPEw1nrHX",
  "key20": "4CXmKkHF3uWiZR5qwymu2ULStWdhT2emQedepEmZAvBKM1biGncr9a6hjA2YDQEAtLrC2w4JJrzRt7bapB5vTgb",
  "key21": "2sVkYg2ft618cBvnWADtFcVrqmZfHJgTHvQXHSBC8mHjuGXnsiYX4RHfcPbRfKe9vHeZdBjehbDT9mvAdjparo6Y",
  "key22": "5SvUxjxPBu1sVmXUuq1CUmaxLx7L3AEzXFhAtaxcRJUcP2P1QsBHPW9r4X7PTy6qXnQkDtHgG9Fw3AYuXF5Qb4hL",
  "key23": "2UwdkdBkxPF7JYnce1Mj1KZbDXHLrH7Fiua3xqE7uKzawUfogTATXBg4aYTYgZTUUCnEPENCZCKU88oQkdqSyjoW",
  "key24": "2qnfVx926RdjFWeQniWwM4PcTLmCw5u5Y26hKbhXFyKJwiJmzTXMj5nSPyfG3qcHXhGYMsPeYptPLccmgrPqLwEg",
  "key25": "64C1MMVm7dGJ6uEqQCDiJmcajnKGSnhNKFC6Cs6ar1dHMuW5frpspVwy1KLVcFMWK4MviQnWuKGByZQ4BYTA3e5h",
  "key26": "6cuvUTiyqAbBSeiTQYQRCb4KSdtioza4pU9QsAwcjq6Z9kjZ3FAdo8vD6wFqv43ya1Bp5kSeieGZRhRw7Ns3tMb",
  "key27": "4cngKsbUxPL7ZfuxRtL2U52aYy1etx8KoywJGwZ3KA98a4dNnXFxYvfW8wCVtL6qjjHLstm5yZkDjkmn642uKpiz",
  "key28": "5y3fMweFrd7URWVgUXm6b7ukLCs9d5wpmaZGbWbGKDyjAkfJJtCLSDBcAbf3Ym9p6WRcLFSGghxP1aifyMnJYFD3",
  "key29": "4QE6hbrCfAjTP2CqQmFmsa9w1qS1r9ToBu6oHSrxG71wSqEWZryHGkW8vDuwEET8jTDZ9nQRWvXvTMgdyqNn7qSL",
  "key30": "64tCwchQh8vbaCc6cTMe9U5q3aAeus2i8n9MzXEHezGADZyigAoGdbBUSBNgQP4iC2i1cNXwiD16y6QmoHhTfX99",
  "key31": "5ZvxEVuKAaCpgyB3oqD5pQESAxJViVizbC3v4T3fKGKvYCKhpgf4iboQncNmTQAZD5fxEQk7LydQ4QpzTqYGkjyP",
  "key32": "5H4zg5LgAZxoXvyncCacjToYiGo2FdrhuwxEaH9yXzvaRJsDmurM9T9LDSnhWc4ijgRCre3fQ7QyoS5FTj4FDvov",
  "key33": "5n555tNzfp8GajW9AT9pRRPLURSYfwBNAmEg9pR4UbvUX2YZb1aUfXx75iDUWDfGksSSqb3SEJGtB6kNzFVsEdbR",
  "key34": "qp16BkdSt6Nsp6AiChRa7XJ6voXz9E9yRetzLvsXChiU2hKGjFfsFd2AXvNMSm9BnXXYgfeDXjKxbBAU6MXo9Zp"
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
