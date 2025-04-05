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
    "2TGfsEcAcNRHjdFBhfrXb3KkAfUgUary4fes3s7CRwPGwzofeeJLEM7uCxc8BDuiKJcjFz5oRq5QKNW9LesQE6M8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4ojFYmjJ7PcnQdjd91iHeCrQNStKdtHwVKGdoJtgai8HGNSUwwKb4agcBLmCBLUCACr72cNNftaxAbeA7KyAH3",
  "key1": "3umNTSnXBg6N8XcJzpcZDYGyfKdkUwtDWXDTxZrqFhXhZciqLapKcCyj3o1hzZ3DtnK9P8D9gWeghCMyLsNwwtzZ",
  "key2": "3DdLGSd71vDjMLzoPwojuPguXSGdschSdwWgTPcG3WDrTBGpX24vPKvhAt5mhY4jFi8XeBVGJhz7KE1dX7oPdFP7",
  "key3": "4MVAPJh7zAPuTb1APmr9QjbET9Hfa3Sy4MPxnFJdxtrtJk7ZsxVEeuKwhaxbvV3vmCY6b7UkD4gwWRTN146jDUZN",
  "key4": "5PRhDZdygMcCQ8tDBbYfR9zHiUvSvG4nfEPmnbSsXWXWmA2FmvzSfsbR4sYD1vVGc9nZVSD8eCpGwTN1WTkxT2jc",
  "key5": "DLpizMC3XcrBJBEo3sZMWEZk5cUtviomS5BwHBYW3wLexYX9Nc7aqAAGVFc2fZ8rPTtok2icvJjai5Jffb3nZcx",
  "key6": "x65EGNjg8AGGCiziRQVgzGAc9Zj2VinMRwccSbsjZtahWTtsoT2gEvDowCKYwEgajESEZFCZcVPQjtHsyqj3PN9",
  "key7": "2zAL44keHgNms9X9kfparuFjaf92es99subaUmg8iFt4mTJpQB49r2Gf7txreBM2zWkuGsYGoS3ZXreYfWppfFGC",
  "key8": "5JacpisicATufBtNKun3NRwwAcjZ6BW9wU1mippuD3YTGATSreuGyHfsxKPm7Cej64tv53MF3YbXfqTjQzZtjAHV",
  "key9": "4sMSTUmPMQHc2ZaPH8tuxSeXDBUtc4FRzCyFK8t4Fv6vm2dmQD9W1qtVGcTiC8gi2djidmF5DLUUNE7ZMQx6opV8",
  "key10": "k9jxn4BQixep2qfT8GJ5svmnd95FU9KvaQcxsrrqdPow9K8Hfzkxpchv6uYjxyjTcnxbMpAKn9DmYneox2asGdq",
  "key11": "3PZPUw1C4KeasAHGPS2yABrmvpHe7djnZ5DhQWU8E4ffatEzeDAZLioYjXFAfLZHjiHWUv2HyNzxEvCYRgmoJC2K",
  "key12": "2ncs45WKRGGgUYoKQzwUJVRdLwNRCi3UmHqUa9X5y17Mt1mVRSZe4pA6bndaSL4wssHH2kSZdDw2hCPrDLi4Qr4D",
  "key13": "5LwBtwrvH4cbPqMfyz3i1gRVC2qExpF1fRr5RUzSro1CdASSsRRQcWJLqe2xXd64D9YHFXPn6cKccUSLSZt8FMBn",
  "key14": "53HBTo9LZeMH87qdWTTUoaCSfFkztcAiTDroGmsJMCovxUvAMW9SThxJPziVnTBYfKZPpD72VFBqTPTY9RiE39m5",
  "key15": "5geuJ5oJtM28X1D11SGhDxHvoVGeVajp5zCpGrnSJfNUg5d5XGjuuzW7amqXsVGM4QxcLJnj3uB7HNy3p5sdLmmb",
  "key16": "4WvB2hXh8qP3C7AEmEzBwf9F1UKh6sG8zJ7CaoULj7Aiq8ppFCWJt3PkK1GLEQSR1bxBrgiufCN18LsYfDGp7aWo",
  "key17": "XTcCRYHkWadQbMSZx38X3SjVZT7Zuk8qUkLtAso19rFtC7LMUeaxEb4TCeUZZuWTuvGqTgvYgk24hh8jBfXqGoH",
  "key18": "5WXmyMm7AwQnGK4twPWRCZzXzpiQ27vNypdMteWm4sRBNzBWQxRyY4RR2P8uyavUVjoKMTu3D1GQXie7534qrKt3",
  "key19": "3PiHFAoLdtiAy7apxNzXzpuXhoxv16qhkNiBBdKspbef9uvHFAqC6YXASHdj66MRUCqsuVFbeFJhC7d7rZWxrhUh",
  "key20": "3TZdkQoc1tdi16QxbW4nY4xSi8a9kGcSGbXAL1fMfXc42uw4eCBMJ5abE6U2BfFNPtrgYrfvxwct1f1eBQy6NR6Y",
  "key21": "3gRAXyz7989K566XsFhwC52jDFH33GGjabfYW34HeBY6b7YC18hb4Yf2pGyfrW5P4dEPJ6eD55AHbGgZyCeFLAgR",
  "key22": "2U9qFVejB4889un4M1ne1U7gHw8hrN9dhr5oEF25cBtsTXr7Fa6hCSSu5ViMpMcRs38ViTsCEHnXA7LYdWk18563",
  "key23": "2Dmzg2McHERpVqmpL92kfc9oUDisgZcySMMrwihKfWqSvjpiJa3v28u3xAJ6fUKZrfY7EBk8rUix3tSY4BfqGcrd",
  "key24": "gT9jbD3oFY9MQ6q6uj7T1MJZTf9WpPjtg8k2RhVkPuXBzw9dvjHMooW8L6TovPj6h8EndN8enHW5qoPMgeTMuc6",
  "key25": "52UaomDaWD1Zd3jBht9wSEi2FNVQrjALBfGp3RmY6BQYmLRpQErgG9Xz4QQmooCppShMtMzrgZu2YMMtkZeVoNZc",
  "key26": "BzPHYds5ZEmnRgUm7ZcPZnQ7AXSbmfpvUiQzoPwWCNzn8TXCngfFc6dukFF1oPmGdUyzS8ReRTudVPAL6xcxMuY",
  "key27": "2xA7p6k9yUUaaRXiM7qtg2agJ9QL635Q6UDzT7nRdp19FZsV89ZnjkzBtVD6nbHDVWZRtNReaSBpCGQE35SL8wv",
  "key28": "3h48i4AM3zkbW33wSrBoiSrDn5RhbwfGawgsEtaHouowYJWToHJB9nJ2DGgB8Lpv7MKQLgEaiKmDHWnin4o8mPBh",
  "key29": "53WJ6sZaKzK9imRDEdobih53YAKR8a8hZHc9dYS6QHZCFK1LktxKy9smnCPoM1Gu2RKLEUpmsCis2k25EoiyqvF2",
  "key30": "38ZB8Jcdg91gkHxwQSeP9WwLa9hB8QJNdzgKoSMJf5xJcnTJgENt8xak6FmHartmNmgbDzwReEaKfmLQ3iBibfLC",
  "key31": "WK2naqjbP5DgMuwyyUFkFFdDejMXU4gK5wiM5nAuyffoiYHC2ypA8Aj865TPfJQav3ZydtEQjA6i4B6jr4VrTy6"
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
