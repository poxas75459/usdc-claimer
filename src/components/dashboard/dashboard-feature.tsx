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
    "3kF4AHxR6mZwCBdZcqYW85oCASmzNihP5SHYiffNXBgfvnmBebC7FrQ221y1H8X5ruqrre7noRtgoxZDUHZwuuNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZKHyn31agSo1zZG8KiCaKVB9JSPo419hns1nyrwoidvNzN3wM5LnmN3914UL66w4EYRn66w1mw5dq3PS7ikydK",
  "key1": "2AvU1mxjnTS2xaDxhAxHfCVVvwKWkquSpTQfp2V4GMtmYui7pEsYCxskW2yqdoYy31eHARoqrNkry1xa4z5uBWSy",
  "key2": "5uKtXNzw5fWhSqQ44BQPMPibJhwL3ceKLkRmoxKovu4htmQpUSbSBVeqna172Hd1uaZDgjeXW4b3EhyhVmCNNDE6",
  "key3": "3tYT1k5EVYKyqiidhFQEXwXWVXrwcy3MKRzxG2Xat3vN58Jd6fjhG7RHBgQa7iddXYujrm7a5Jet9dpNZfv9SiL8",
  "key4": "4oRZGAueF94pdSTmAWUu5uHjBwXM7WUJsSw1yJkER9YGXQWjs2ejTgy8sxXGnM6updA3wAUA8XQSd8unqDcwqnE7",
  "key5": "9jWX6urvRemWYL2QYyJGQV7gJft5fvALP5yZ3hsBayPvNVSriJZFj72d9RhH6EkEkYTJi2A8LZbxJonPPQKdGQW",
  "key6": "32RJ8gbRyMfXKV7CX9xmbyK3xND8a6QyLs9dsia6ThxqmwshraCZQLMRsmafRerhThiganWUNv3gKuycBZoUsa79",
  "key7": "2SyUgbc7oy2bahT2ddywmr15V4J1imW5g8N57pn4sZY3bF7eWUka7gdDHULn7sB6cgryrW7uLYQPGaA1eLSCR2LR",
  "key8": "2FnbkSsqALnXyDiZ5J8u5eDi5gXZn1bWyKx8FtnvybPnjMpRHfWktNrENfJX5XZZjCRGEjfEnV7FUcD1Hg6gGaBA",
  "key9": "TGQG22kPzaoCoNpk4CkXbj6SQcr8NcL632LYU76QPXXPnQPMfHsGV714feKXZfREt66SkVepDnHEg4vBuVXgjDH",
  "key10": "v9VNrcNq3rKGcizPSnUrWQmyTgZXRNX4h7n8mjue4W9XJTbH3ozAVw6vkMm3iMngswrJ1Zwa2YpA451wi1dnhnm",
  "key11": "3oFBJmo7MwzyNp6H4WCbsabbZ9NzMwYKsmXp5DtaxaKnWLdVy7nKuM3mre5pDJGEGfNnykFaYuQ1hvjQwhS3RChm",
  "key12": "3vAo7GJfpCJYUDVJUQFo6WcqhiJTtnBTpCtnM5dNQBZUkxNWytpuzdcT5PBkT7wLXHVfQs8148S4WvKgU9oKrUot",
  "key13": "4U8Ld87MEvNz1vu6vD6137TrxpckEchdoUovHgCLzuz7fMe5i9uDLTjTJCDFA3XyDqu1EB4SsHEijYSWbqwyDsy6",
  "key14": "66oGoNtrDYrYJi8wMDo3j4DNRTmdydok9dbnGQXWCVsrBGYTFzsivjXTNkjLzs1kqBzfowb9QbkWBWuAyp9omPGk",
  "key15": "4ZGeRdUXMSEsdoYkBhYeDb55Ki5fHSf86DqQFZWVCXb5xJERPHpbzBJ8Cmi1v4oWrLB5wqtudjUCgKy97zJRySwW",
  "key16": "65KD9Z7uFHL8MqEUCRdJJqV6Yd7M3ihFoXnLmMhJvhWWh2d1BUJxm7djSqqb6qhEeGRRbjNJ1HousACf9mb8bwxn",
  "key17": "3BX55qMfUfGP2aSLr44n49ty9xh3ibSXHwEPB1FHz6mfFXVBkAZdpkNA3cRHD8psbhk5CECg86i7d1a5CQfKUFVA",
  "key18": "5sZ2BPTGGidGkNzRNMZFL26yfFSQh2VKQLyxtcA1hR598sQF3sxHYmYLXqBSr43b35cHkKJFun4sBYESDQadr4Qe",
  "key19": "3Qcz5NAenXRzUTEk7iQZXVUfQZbKifZDeWqn4pVonrEHoJrYprDsP8k1yJRjnUgUVPQo41EFvNkmjGHeBxqRVVtm",
  "key20": "PaLrNMaiqFjGxZFgcyA2LCpqb24XbgoPc7shYZ2KWAiaRkCLvhdxCdQFb5WyNdVa2MuD6Qz1iAqgWseaQ1Xc3nE",
  "key21": "5s4sHhuN9D68EKagwzH4CkwUxMAmgn6uDDYozUcKN6ucmCjdFFCiJWm55mqudcWx8RBDkY53YnGZXC5WbVzy71uz",
  "key22": "jddUQfp1FwKPv9H2KNrYDB67ShzGpT1DdKDhP4fkhD1hNu7fiFiMzHuk2rB3cGybqCdLc1ynSJRUWtzMsGVDCF3",
  "key23": "2wgNzF7fYncZGaWGNSRtomTA1crDtMRz3q8A1eWJt4D5CCHL93JA7BmbgPjahvQiPFEAQVFhp3UTjHjsRFcVNVT2",
  "key24": "4ajr7QJFA5TAv7cJMdpsz7QfYJ63eURXuV7S3ubPDWhizHp7Up7MKgm3CcyLpSFFHxn6KwWRvEVnUwVrTM1tkN8g",
  "key25": "5dGEae4qoCGAJAXawvzu6huuQ8To9FB3PCUnWS6AXQ5Usqpta9jmoygGVkvtRn2HxGZhhcxM4ZaW1DfAHQnGgTem",
  "key26": "CNB7sVGYkgRNe5kfity7oShLQBAEWaNqnqeSFeSrDt1j17DZad1xdH77SHhNMuztv4YngQ48tinA7B4Ketq6aCF",
  "key27": "3kmXgnUGVTcetXyzHAAYPPmGGLjHZNAenVtYPtKujBYLLfqyFqEZ5AwaGjBNqMFHk5Q8K5PBNwLzvG66BXdW4pi",
  "key28": "66Y8LREjua3yjRnjnqz67dfEErBrcEEsB4gAxCEWpregMSWsDeg38ZaA6T3VmV5aZBciWB6hDWYPpUk5WjFMRAZN",
  "key29": "Myzy3xB616SyjBryqgxfowoma5RvA85Dd2F4CpDT2dQBZphW8ctvuquCJGcQTujAEiaz3wJkhvPNt7c3Hy2boT5",
  "key30": "26ZL586Ddtm83bXdmh5qmWfV77sKL6pdcUxPnq4AcWsGEn7pYWjWDWUNx8XzTgkpf3R38h1DrR8yPG5WderKct6m",
  "key31": "38cMNs5cSAwTsQqub6SZDDjSrGzCibBJKd2ycxKk99yqPHyQnfN5UD7nzrj5c5HgxNL7WatuA8zADsBwmZr2tXZj",
  "key32": "4hEybAXYBmQXgvVaJLkBz4MLiAh4bgToC4PeMgUiStsah18BExHnyWEXrCyfFYpf1tt7V7gQY1sT6pTqHgfxpEbT",
  "key33": "65BbS6FvKreBtGwCM2ShJ9Edhryw8P3F97GpwHhFbSY7Z3CH1c35bb42EqudFRnc6Y591Y3N5rTqVrrnQZ9TrMBE",
  "key34": "4KFZuZmEZdSPcwfAsDbLpsA3ZuibzT8EQSLMJHE1wtrxjeshsxTd3ctYSjwS9Mikgjm2qcwSP8CayM5X8cK8bzq1",
  "key35": "5dyDc8zgXSFJn7ZpY8hJoCDPXCh6aoj9fsVJ74H3nJCaTaPreYfyX5muKWs5YmQ3My3D8NZ5SevnKAMwVa9Vn1ys",
  "key36": "4Fn9WRQGesV1dAKciMYqFkXt6ReTBCtTjRhLv5axh4nXjcNd9aZdZorAsHLbPh2JvP1usJ36k3BBtdtFBSRC8JBp",
  "key37": "35LKUzVESygYhvcY7qHNj2stTCs49ig8sVgpEgRT3ZqVcRp21hXjSwDfBqSp6M8MdM3kFYSNeiZ4mNMTHGTkwMZR",
  "key38": "5ouBQYYnbsTGLfbugTTheKygj2wNL9oJ7rHVu64AkpzpCTNU1BeNHLkj6AT3WoMkeRQWkhdMcVnry68NYG4XRcQL",
  "key39": "2s1s1Rm5gyEvBzp2VWV3D4vdaRHtVfshEMXCAQhKmuU4MfWe6r9weJe2WUwW3aXb7YjxViYfot1tcF9aro91PZLH",
  "key40": "RV9ctqdC8PiheFfXX3kqzurE2cqDksi8nfiPXdP3gVMufVXuaBUBG86nP6ABuw4K4cBusDi29GbosQNHMuuDjNi",
  "key41": "3L7zWyw4o3cLk5ougTiA1Z5vU5FNLgweSBX8uGR9NL8i8kMYRAcQsWxzp1ceQKco1oFaW4YBZCtmTD5deKH24Ghk",
  "key42": "43cSXJoubv8FSFqDDLEp2Mb3gYbi2UVJ4u3ZvPeMLdVeijaqfjfSpLHAvrFsMwpnrQcaUUhmhrTFT3BZTcKiMme2",
  "key43": "HtmwEkCtXE282eSaCnCA8N8Jim7xjDqihyoQQQnKgua3PyiUL53mCREYdgL9Pmq4sSxGKibRk4xARMifUGQNJvz",
  "key44": "4v1xQL8jfxorsuNmUEoskAzAxag3qbbkbw3ysvVwAhfdgv2XqSKVnPV98qZNwGhNDCrWM8He2jQgPndmzkAAkxKV",
  "key45": "3Cxneeuve1BDjg3WN1NJt6kqput5vAc6aDDB2cGmWRpyniVR5HdvmDxpsgz4D52Xs9EL3kptm9f3jQCW5Mi2TvM9",
  "key46": "5raUQweEvXkPgUCZYwj8ypfeQu2TFog9wWWP6VR1oGX2ZDyhYyVyoA9Ci5BpFsmdQ2yU8BNCQQRDBXd8GrZ4JFHs"
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
