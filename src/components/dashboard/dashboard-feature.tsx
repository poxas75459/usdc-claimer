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
    "2mB3PJ1vr9TwrEo9KNnHNxwBwmpX1tyFddGegwbMNoKTsJPkw3pcZF8nXpG4SgeqRS5awxG9xfZW7FQbbZ4GEfQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MnP87Dwj1tZFM2CT9YoVsw29zfFcEhHc8i4XFdtCnvgZbqMRtdg4KdUhPBwT15bkm17pH9eU1GpiE3nQwTzckt",
  "key1": "2ehsZwiUg9XPew6MqVUrzJWGzMLT272tHCT7bVXAeJewigkQpWq2WJTNabqhFYimsquvSvaAEcoQC8jTPG7Ct3pD",
  "key2": "41zC2Dt11TzyESMsUu2Mniiq2JrkCxR8rQ4df85yti4KSKQgBCt4TBaUJx7K2diDWKhUyFqxjXN92oYTZRvif7aM",
  "key3": "53E6Tib8PSN5mVDuvpsUEPj9ejyrm2KtpNDDkbHURHW9kGEUuousWvVZ9q3qrz8afESyZ2anPX9K64KRBSxAQJDv",
  "key4": "uckHymKGDau78yXEUYXzxJwrVcyBAjtJpV8NW3Acc5knxVzh3RnuKCJUKpxcFrbMmsaVtn5PazFsJ5UBK5WgQtm",
  "key5": "oY8AQKSgm9xfv3NxYwCQM9Ut8Zt6a3Hrg5cZneCjoWZCU8UaUDm2AC7HGzspP741K2ZuXV8gDWvraytMve8dvMf",
  "key6": "VQXvv8BdeQgHmpWsNZ5SYTW7R1mzKih646dMwewwYEzXcogSRifD2mxoL8tiZJfV93mswGPDbS8Lw1zvkxdebgQ",
  "key7": "5cjpFfzPkoAQ3sozsPqPursezDT67SAZPh2uctsGpus6xW8voUxYYQo88sEqLmtRaWQJcKoJgPho6ywHe52wStqi",
  "key8": "2F9EhQztnSXew76Htbs968w22JUiJ4GzjH3rxZJZj2zdgkEuivjbKVSuGApqfM3Qsih2MQQ7xxwQWAqRCKbX3ZDB",
  "key9": "2WDTnCdVzUuya5vyWpLw6sexdNwHcx8aA8i9V4L4TVnA2bkortNXnheSQJboqoimway4BbLeHgfPUcKAU4iZdEGM",
  "key10": "2tLpDx3VszBhmnkBVTuYfBRsDPsqCq41ixeaAdyLZpDE28XZA8BUgsZJQV5YUcRe2sp4787W1o2C3RgfeBYH3k2A",
  "key11": "3jWsUMgsxXhv7HjXminQ6iNXq44QFjjuHRY82tg5mkb4JfWK9dLudCiygV86t1TBbeYuCFPHBy7VjaZTC2LtgzC8",
  "key12": "3ywazRWC5H6D81tL4RNTA9LpXhsrnzHaVkLRt1uUXGHV2pdc8xfTrgEiHijDR11noamM9jiwy6pKZg75Cag2uuyv",
  "key13": "5ic7T4AWynAQci7UuoRtFg3vAngMHbq9GKgZf3EgZhK3x9KmQkdyb973XJRKS56c5ZC8momChnWgLm8HVsGNqMDT",
  "key14": "33vzLhvEcvkHYUgBDiPrLjwPgTysFnL1nFqgQmVeVi5yKJHstqm9qu7xsdYXCRsbE6Bt6w3f67P7WAcbmZo82Epx",
  "key15": "46FGPFnaebJgtx32nTJXCDtVD7rWQGyBVizUEiQEjeGCkJUYgRN4UWmppuLhLc15smwUwFPwd4afnWe43v2Z5cDG",
  "key16": "43pedvBZ2XZuLvfYTP8hyxcYBLendvQTTfAo9Leuvg2RF9MkKWvZXwotJ6dR2xg7MF7J7kmxcGM3bhENLivYDDJT",
  "key17": "2GBNqUCL4x4Rs1upyEZYAd664eV9cEfMgZFAJ2QZEqyuFkT7vn6KKvqGp2yfsDQ8JUSqRoZcCijDZg2ZNtaES6Bq",
  "key18": "BzKGtc5asEJhY7vuPxwF4wSUEnSmkWfQYcJJ8bN6AppeUfFZQiSTLCCQ9boB2413iGxJhbP5gKkFjRZCtKi3gEF",
  "key19": "4aqRZgnMJAmjpqvwLxft9BtWyWVqbSkzmjF9u5KW8F2Nwjr9UoBSvsxJALBHFARjMVPS8aQ6Lq3XhSPUTb5ywUSt",
  "key20": "2K2L2eBkuXhui1m4BTJhqJ76Ceu8uhCDvnUFbPN9weDNQdL3XuWjogSQuGZ1jwWDRUfi6e35pywpebq49sU6Dj9D",
  "key21": "TSPExAC3rEuUdLkMXDZxmhbgbSaYpi5B5rRxh2ay2vZPUjYPewKefdTfM6YgYAc2E4bSsk8vUaP79JAUXNeSG4K",
  "key22": "4m4YKRvazzVyk1AKuy3ZRy4JsBgqwXgqF4vj6M8Xwu5j1uBcQ9qHzYEUPpPLyg5aigtqdWRVzRTuqYe7Uz3yea7i",
  "key23": "2S7343QW7AhSQRZitGmMEq4zoJzj4JDc9VJ6W7uK1na79PmKaRgSk51Wc9GtnBBNUbqYKR9fvSJAEpmuGTqnWTsS",
  "key24": "3mY6T37ddZooTZVHh4XTxa42wSVvzWZw9s7V7kGohVU2zfrowPnbgT6E3WNuEQzC49Dh1DicwZV4QnZWDDUSywot",
  "key25": "4SJvUcJcRpHhQFKYgvpFDDGUZm7mRfNx9E3djwyKPR9wfBcXKVApyZrNc7BFZNB1igESa37MoLJx9xY2hjdwpn4Z",
  "key26": "64offNakpEknpshZyXxQdA5mpPvZJuv6vcNZJtcPq4m4VawomaLzU27XSW7PxWzVdkZeePsfKyBtUjjGAEUz4oeW",
  "key27": "2fhJzr6YSQqoopPSdmNANa81BwB7nsY9G2nCAeoSgZ7T2DLVr6Foo3dfkN5cUWoprSAwQ158w2tq3E7gfSs5GkVX",
  "key28": "mxSL7NXD5BkwcsvpwvwKvewnXc4D14rYBwCgDpFyEBGNfgv4kMSfnCiJf368hchN1KGxvneABYPTbDbDedgAg1V",
  "key29": "eEcdgqStEbeHyCBkB7wwSeiPRGw3X3mGEB8WmqWnv111mwvqPeDmsJQGLxpxC5UoKBgms4Gs1VvWmfLtxv1YAxM",
  "key30": "2kTpnCUyAdmkuoV5RDFSuzJhb2Ypt3tWnmxKjYhUG2PEpLts65LCEkExzfBgvHdUN6YGLMkKbKDa87WPDhoFp7Ey",
  "key31": "3pMpbnekBLJP4jBNAHFqi6v3BSvNKDYxTxo6Jv1jTufrEnbNspGsT2BX2wi2cWfE5hxfuePpeR5VguLUJTz92TQJ",
  "key32": "2VLqNq2y98sNhkbXp4TGVuz3d7unfWFXapvuwkV9MKoBJJqLcoVhdR7CqdV4UyTUTLa9fMJzJ5UsGmP5WudxiyLL",
  "key33": "5tvXUpmW4YnZwd7GmFuuqktGgwbfqNXw5kYPpXPWi3pgjLrWgbb4hbJMqjc5mWT6FMmPvqG3KZ7Tt2LgtKio6ruZ",
  "key34": "2vYwe3nJ2Hg4BAe1gDU1KV7fWG8TXcxW48VTKxMKDzWo9nA5cYnhbVcsc375rLCAd5hUnXgGxPwpxaFQb9cushM2",
  "key35": "4JFGjzwSGZESp4joJmyp7g6hArDXFQJ2nRorQVeejC2hhSMbsm2vYCmxmDsxdnxwvSoBW7fof92QPH5eyZGF63ew",
  "key36": "3ALTdEjhDHdWjAHmpZpGNAGVY7jnMcNvWL87rwReTMY87V8NGgkQBf65zRRriA2AkenAawmyRFPa7MQWJK5m5AKs",
  "key37": "45BzDjBsr7A2ffg7uu1UkKiuWZymisFQpyDvYG5svUe6fbGRFuGfxiAtNfqKps1MNYXm8xDPCHQPW4UxLQEySWpJ",
  "key38": "3sDYKzVTWRQJbkdz7z9qjyWHJyUxd6AZonyP2fRCNZScDwnhfzSxdkPT9LP4qmSHJNisWNRv4EyTKXNYXrSoZR5p",
  "key39": "3jVg7CUEvNHCredHUpUq5EwJ4Na97YyVaugM8cAJG5r8AfDJxoDbL4rKZ9bcP4H7N69gfShoEofbq5vn8YAK63kN",
  "key40": "65cUhbtHeynsmDmfhXB1x4QuutgNYw7KUcCeGspb7Zttuzmerujimb8UEZZTe6PhVy3EZVZDwh8a8ZpczWGVXidR",
  "key41": "5WnniiWHBpBMoCNtephBzyJTYY8c8S9AYY5LKxutxtJCsXujtrxuLBYqvSPxEW8eLbaATFPn3fimM8B6kBZ8q7Qr",
  "key42": "HpqmAaEftM7vNrzPsnfsUC49ysrvtwu3rjxUqvuE9DqMRyA5omfc79q9KxJ7vw8Q4fnf7YCzjnGpiuUdjP3K1VU"
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
