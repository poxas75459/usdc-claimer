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
    "26Eo2gLjQoDbJoxBwzoFTeGnEVXL47gKRfRpAWueNcE4hsMfVSPG2nJcmgyDyaUP5c49RjDEEa6wadEdZvp9S911"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzdfmrBrFQtBH2Ks2unANwcrKBM9rjnAHnsiiuZ7wP55ZfpFv6LsJoqbTACnUgjvXFWQEnUPkwH5hv9pRANit1E",
  "key1": "3qm8FWz1pRW9tzj8opprgJKa2BoiLexgdu98wdL4oXo33EEv6HR93GXyNzWjTzk5ftcUC4wD4KDNrJhZTLbP8Nw8",
  "key2": "4jBAvDBqt988x3AQCa3DGcmPHoHPncCfzNCReViVT9XvzX72jybja4YE1uXkdWvt6NHJmKE1hkmw18hPFXw4C3KK",
  "key3": "2x2CBRm2AQV2k6c57n8qy21XvfRYkfS4Nc8P86AzV72s4itYuyvRiAKZd1kn6sjTTVAgiLZZ6cBnBdhiXWjGrZnF",
  "key4": "4uPuJbxFrQwFcUdXDqHZKW1KxMDsrHYnzkNzKAaYptrsKc4QDs2gxEZzJXFX6UgAY2CCmQc6y5jMNU1nWQCZQB9T",
  "key5": "5pDZURb32VPCZ9cnquftboFQcpRrnq6cNTGLCXicHBfZhSjhYnqrLsMUSFyjngH4xziSRd7KwBhQyod7jfyUwL9y",
  "key6": "4jiLn8fsJ7TM5CJo5BLq9su1qA4nBz2Lz46J6YLjkBMCtsiMt7FrtLVtwAwWd49MdPrrkW7gERQgSDvQkitHcAHX",
  "key7": "4xuLvz7E7Tbh8GA3WB3Deq5canQbay8mYtyTg99BLv4nagxjwkTqrh8rgrKK16t1C631uZcEBJogyAQXrhFtVX8n",
  "key8": "2TV8dL87qtn8rcjYQTZU49t1DXzK65PXLPr9zGFhiuH9QnCvkawLe6ZfVvMT3tpJKyVnSGFrKFAqFRDFX71rQAuU",
  "key9": "5bi3JCgy3aBMLxXGzk3NiE2M9RJZLHeSfemCp5at2mgQp3GBqf3dcLaBWBoVx1sAjsZRtnr4Qv6AvfLmKPYi7ukT",
  "key10": "4D1TKoCTy5RFEy1Wduo2Km5k65WTc4NKWFV5zvP556uvRvAN7DnCdMVSJ8r3DE15yw8PmcHuwJEzR4VqzD7ZK5QX",
  "key11": "nruRZxNNDpcvwe6JqhDEDx8Nz87FPfkYWmiicK8C6wmPGRWp9nDR6sHxphPWDKv3izAJtKAnPXXQdJ6MLdnLYJo",
  "key12": "4ZatfyCmc7FJ4xSfCKvHpb8atKzniwuftX6HqLNkiQeWqHDBg5ziYWRnkvHAkjYxqVGAZtPWuEu4mu2c2wC8ijzL",
  "key13": "2WWPn2mCzBF5FnYvDA9ans8H7Wm7K4xDdphsryudTFYTevs2cHefzd7Qj15sHv35h41zh26wqAEyyXuub23MRsE7",
  "key14": "SwB53rrqyvzH6q1dEFD4Udn5q46j9Bxmz6Dgpsn6d2LG7gZyacZpXe3epo6wMT2zM6QxCqE99BsiRVFQVLwewSr",
  "key15": "UaAERb3fy2ezC8XC2DCAVxh6vAxFLtK35jwbYdBRjbXCiUXcu155ncxmB8iUyUu8joGULfVvxLBXQyX2XULm48n",
  "key16": "67gcdhB51q4m5JHbtMwbEtxdgm2gVmqeuKLcgqZPZ4NHaWDNGMYomnUHvvZRy35kL1V1YXjy36fJ1RYscV9cTiMr",
  "key17": "2KerXv8ZDLdniaD7LpApawBSXy8onGo8sXZbBDMhLpHp85mg4rsj57jNZqSbL7rXAKHDzDp7ZdQCqg6JMcSQaw9y",
  "key18": "22nKBn9e7qWmAj5qi37DjqG25pnQRaExBKjhtKpvfKqzzCGTWpwK4263KJbi6LPRYXfopFK76xkembqb6YxDAKaq",
  "key19": "3BJYSFMLJeDHoATA6R8JtnxuVQbwCu93fykCwzbDFRraYEbFUxKyBhFRugTTgJuFDrnWqqg2eHBYMayhrgW8Ze93",
  "key20": "5KuSCXRrkfdmh7x1kDv5MQDUX4KRabNA64WNiGESyHTmRxF9mUpWx3mJX44UC6CUK6267mch379cmYveBg9vnpkv",
  "key21": "tK88nHtK4Z5vTQ1whwVxs6QThvvMfMLTz2hkJvh9MmLnyxioTDZyJKXfJcTeH2J7A83HkTZZFFTdnr8NUUKmz3J",
  "key22": "2AcSfKJni8kQW3anhx8GSzRvq8i6GrDYBVwMDtonnDFp9HqMeqeRcmrQohSHL7baK2Si7xJgd7e8pv3LNnuQsCN7",
  "key23": "2Up25kNpG1rLYpfkibvBewRnpR2JXRbhYqKAFRagBYzLmg9tzWGYzEuHjUThbCbAUL6Lo932HET1RzW62JY78NUx",
  "key24": "3uLjdFNPFG7Jv1cVj5jMtAfktFhWuHA18w8YkU6jmNLLJPXKVqxozDf69XqwkEFv2uptwcCHLEFXjroSNvr7ui3B",
  "key25": "53sxtxM182GXzoSdG4gD6MsWby1g61MQdNC13TCSey45w58hQ7oHHu3ZRFMMHqURLn5oELhVZusFRJ5icLspYrRy",
  "key26": "Dv6PW2ZNXtoB4jsQWLYMxBF6hK7hZidwnDMWq5vV5FxBAyTCiEJn5uXuQJFQVNEGLDjmn6y7j3M4AKNJscZoxCS",
  "key27": "4aNdRkcVZJpH4JD6wxesm43nZJLJoUHvHEPGN29cMkKbX9mETavoLNaftoR64U4ij6DYCjYn7G12aVVbi4Y7fNHt",
  "key28": "2qGAoFAMrmoaH9fZ7yMcLAH6DAZZcPBqTbBCFuiz3TiSPJfom42LxuG3EvFNHuag5ezDQLMLRgZVgrr9c5vKM3KF",
  "key29": "4Kh2sgzaRRTL5mi7WnSP6AU8UhNuxY1L9M5BrKSURVtm56kB82jHpMRTfwjAn8Jdk2ZKTMMo2H4xc2V9nvyAA6ZT",
  "key30": "3pkchLC1pY67bwSA8J2mmsk9w3yAgYfby2Wd1cb5oM8SSfKYi1TLcEafQBbdSvHVfbHoGftYgYCh4XNGSnhAiETN",
  "key31": "5R16UM2U1g55Av3UHH2xKFhNc4Pacpthtv2EuG6gRekpWzNpQ2FUNFZfXZEc6e2cd2PNJayRXGN6d4FTvJs1w8EU",
  "key32": "4uQ5nc9ZjMjA1FcXmWcc8312itWbwLxL4F2H1vm5DtbgqnrhDCNsFMNN9pbDZmz39atBadv2X8etfnU1oHHUgjZk",
  "key33": "3FNSthaFZa82mJJozZRt5sTC4hP2sP6ZVkkkFCS2GpF8R8wrzuqRqk9WQDmMhzwBDcWfeN9BqSmCCU2NjkZWM8XJ",
  "key34": "3zqwP67Q6JCsy9N4RmHVprvn5uDVmDD13BD1aPvGPGoMhTzoq9GUMYLPypA7hjaMffkNhKrjxN5PtfZdpeSZiZGT",
  "key35": "4ZzdNs8HTrmvEFbaoMNvAkJsLwRXdbH4hjC5awx9tuCcbr5UXNBFiMt4bKjEk9MH6QziHSe1PdJitdbi5byzTPaQ",
  "key36": "3g4QE6vCBmH6WJBNkakfcjZCvxWyqbXfXPYXianPELQNNcMyg8zth4CGptHQUwW72Go7gCZFuq1VkbnRgoq2toeX",
  "key37": "5kEYjVQCkbvZikK9ReyRMHMJJQQxASqBMoC6xvLn6DWgpnzPrdMTcYJXfQtC4gXEEz94Ye39HL3wWdEoF6rRfpHB",
  "key38": "2iren8dpYdR1zzPJyk5SkGG5BjorQbSecCGsubrD8Lm3TPSdnuVXNbwNSzkH9AdhvM6W2yS1D3P7QJm4A93fHicQ",
  "key39": "51yHmMeRkFErYqWciHo1n9naQQzHK3uhbsS527ZGQt1YF1deV1oXQN5ATuszSgdqPt7A21Wfee3DqEor7arnoafM",
  "key40": "5UiCsoizXHrEqXBm1KXA2JJKaM6RjYdEmMF111S4doSFuFxpp193qVBLYyDuB11DJJhzijwUVB7AN8yGNyhQJFHg",
  "key41": "5ncW8HybnwQ4FDsPyUEkSunMccU4rhRCNkNqNBJJFg9nm63e4Ky3JxcAmKG51MMTxTuMHxYpRToCK1uWA6CHbDDw",
  "key42": "3urMD5JQ4NVMjPRwvoAXLYHczH5JGJotoommWs868qc2vrFJsMVatQpcKz3kbVAdTpjxrgspWFabK82341DzNZZV",
  "key43": "5iY2K4K9JPgp3N3L673MtvoMXHAALrUbRYTHDHRPvgms697aJzuBzuxUnXhnAwHcRmBVR9nSFkjDK8S4ScJNbkww",
  "key44": "4W1SDC7HMiJzRnosDu4piDH5nA6mhoFLpqvMoetZ8nin1JS5ikjm2KFLu4HyHgYbUc72TkLAEZ6MRyMq89QYsEEs"
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
