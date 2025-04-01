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
    "4NtsyC8VCarLHz5aUqDXyFaCjqRBdmSQhMQAWwKG4wg3QTPwVo9Dh9P9b1YERv9BDxWtPcKgoeXom8j8fBgFUgic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBzJawTfsLq7N8zwx4qven4tdLgBML9hqHdzY4Kj1C6RKcN6yLanqYnwHanVu1RPEitFGB6a7BcjFnVAzCaMv1K",
  "key1": "fmzi97EbWD9dM323s9hLAN9QdZPMjkoauMCDBkpqtfQNL1VaJry652G5tLRBSLZhJbxxrGRJrf425AEUZgUnos1",
  "key2": "4v1ivwx43DcZaTuzr9kyKUuvU1Bw5mJRpas6zRJtg29YrNtNAotUPb33Sj1vUKvNWTA2CYWuhe5tY98X2ApQhc9k",
  "key3": "5QWZLeLBQhgxXKwuLWB8VXAdXLaxspWNBphbdmFAgzeuXod7GRqJk5VQBqMbEF21bNxwaw4No3hhNMD2batQxAH8",
  "key4": "51j15og1k4GLcitT4ffcNVm9bJ1wbWXJf2CmCH42HDcz8QnyUHnpq6Wpxti453QFvKz4zsNtiPK5C8GZBUzC2Hwq",
  "key5": "4BE9EJipmsLGbCWu9tH2DSHhrEAdkhb9TWrpXBHdwmL4wynsHxpx3gzH5zUC9tHr4PhgHyYDuK4pxXa94hVR7Toc",
  "key6": "YaLWw7d23oZ93FPSpZNJVMZ9BNnWgv1BVF46Scv2tLoiEViNUnVPfnLUu3RdjwFvxE2HBv7Ju3fw2CT5Sy7goBG",
  "key7": "4cVHUpdUEwEX9S7EFvYpq8GBEEjE68pTJs4G42qgNoQqdFRwa641gAcPSr4SA8F3B2oDjVuuGwUCvFNCigZ3U7KJ",
  "key8": "dfAzt7TWuWQCRCrx68gHyhQax7ZT61rBuG5jJhzrLBbXiuFZwEZYbo1fhycZ6CRc3sFDzHRTD1uSgXQYPGGosfP",
  "key9": "2STm29yRnCVrBVYsCdXQ5gFG6nvKgU33j2pp5tsZBWYVQ66RFtqiYgA8VdD181tvYhMCtfTqT8G3x3MWK6x9kAyJ",
  "key10": "6372kn7CCvmUTAHo3GVD5t1rZPFToc6n4jGorh7Aa2DYcpbbJhtACosmiiUyRv4ttxKGMUewiYn54dFVT54fAZsP",
  "key11": "2eU4FL2vcaYfpRqE6ieMiGhv37EcFJyfjX1qByAJq11tofGKpwKByP1ynRwPm9BHDCpjCkDeH5e1fx1usPiFx43J",
  "key12": "5ooWm7KSEswEUxHzrryqL6S8NPn6NLKt2B8xsTBPBYQgNfV48PDo4cJZnte8mZMmGqmYsbJuxL6PPTeAuWvWfXYW",
  "key13": "5kbUGVeC8bQT7toLVUdYx4xr4Z9uMw16JeLnZG9eipkeNgkQQJAN7uM3L1hzNRJUm12A4LVtaoHfLgsYXSQvhNRV",
  "key14": "42zrSzgf8cJAkwJ3W6KHwRfdecLM8esuomwTw2yec8CRZxYAWPQfjjsgV6mZowCRpKDad8wN4yNxv9tuzjeHK8fW",
  "key15": "32f59NEmfykefuMLRcWYzTJAMK38MjPFVfS2tZTtPjrkhEpCLT6mV2kGWNYV9mpbiJSLzT18rGMvctR6KhbBTP7L",
  "key16": "Qg1mFuV9aBQJPyuSmNRgB4P7mhhavR7tWk63RskcsbtY1DyztFNRD4HtHPh3uVd4QpDQ5iB6wEBfDDXcKSoieko",
  "key17": "2gkkgyZRSR7bpf9Fs7XZ772qzMbaNFcBvCoBTiLEuzXm88MASpAeqSxZ2Y34zWTazgpR4haJMcnREXHS2GwpDQRo",
  "key18": "5vzs3GsGjEzRTkAmq7kP6ZikytqjcmumGdWQPR32mYXzM6m48RjfRo21oeEkgFkvB6nQtwmGxsYJt18jDFc6i1aj",
  "key19": "5zkfqnfvb3xbvjjeVWS5LhzrDYAzz5ajyThkfJGytgM4oxE6DBwnJ9fqwrMVdD5NM5VNtBB9nWjBcq5kjaQmbUw9",
  "key20": "2VzVJbiX8dotyhztE8mkS3ZjERQbVhkiJrGAoM5Fo5aW7okfnbR1umLo8uiCDotPt8JsB4gmfPoCdiodidb9Tp63",
  "key21": "2LTCW29nSQCUX2xrja8pH4RCzwvWaGZTHwzQ2BTDWgYHPpDriekH1eXw6cvag1yiWBd53Se4FLebPtxDFY6md4aD",
  "key22": "2k3asaQr5HcTyZ2KRQZLZwNxghiCRDbEt9FbJCE2DrLQpZjFdMd7ebx5mURu1WNik6K34fWsuAhdNMKCv9uadgzH",
  "key23": "3ZSjbDjCuV2ysAsx6LtS1XKnVm27g4BzSczgPmD8Ek2dpoBpH96FTc8r7h28RpmxSRH4xBanGuuq45ta1UKDK723",
  "key24": "yQ9o8p6kPkDn2ufSJHmG13ASJvEqLyXfHoy9sH7dptW7NYsKNy8Nz48AbSs9uoVwiqGwuS6vsU637pp6buFPbdS",
  "key25": "2gaybFHeuTuQj2xUuWA38AnQU1vn9aKjkjEeaKvAMF8inY7XUJkd2nyi6GRW3ZNWmWE1XypLdAe63rYUP5eUCSWP",
  "key26": "31AZKWKMEjzDW398BJ3Uq4pHW5Z9PkD12krmcw7ggCz6iauD56WW32JTHBajQMsVdQGnnJvEyrFhVxgQJoCR8WUY",
  "key27": "4G8JtmGacxcTvy1F9dR9NqQz3uVxoRBqyWNNr1zMZGL9iqfaenWDe9wjJ3v3ntJeebqXDz8oP6uShiTx4GZH6BW5",
  "key28": "2oekjxaz61zSmxTBY1EGsD6LPofKLQtwvSGNhs3X2SaKGCC1ro6pqpJm4Ma9rtKmQb4Prmi55d4f1DaREURCB9Hc",
  "key29": "45oNroX1qAk7JmLfc1FfpT8Tkyrgd6PNGctgmjxdGhWfv51bhmhZLLim5H3cboojhjUPm24WbZU9ZKc4WNHx3ZDb",
  "key30": "4o7BCWwELPyBQkPBDKRtjE3m8RGjyBW4VjV76WKcTRaumLrV1HK8D8mcCviLG7dw9YAM1qtffYbC1jScd4iruwoD",
  "key31": "rDQcWBNhZR66Dvsk8U7WkEdhvJSWzM6rymPKPpD3cCzGEG6c4d22eC4anhMAuNuSZDyom5H4YS5fcCvpFxnLoyD",
  "key32": "3BjrPxSye5xqqq3S7nVe6Wy23NE5SLXQy7jxJcjn4jazQd8AVLEG8tyVb39pJD2MNrHrhW7pgc8uWvU9bANJs8Eg",
  "key33": "5hMbGS7mu1ijjMoNZxvzGaGDH4TpJqCt3yEXNxR7AiSitkrpbfoB1YJpJVteKfH17C335cWwd7899wtV4YtEdZ3W",
  "key34": "36uBbRZWNg72T8d3cW73M92BVGtBsNPSfao5vNq4pEhLwoZaY7q4o8cvCsoWnfFUBuipSCxredXpsvJmffriyTCf",
  "key35": "63QHXzAV3gdy6rxHiLEJmRUVAeGkNQBvUPv25VdFtbApo6eYGJCYQzhTSCsi6YTkRNurYErto6qr65ruBrxkW8es",
  "key36": "5ZJShPbaNRyCZ9PasxjxfZEXJDm3pgT9KwX81dA89SmjNEArZ6SUNvZ1qYpnCSDyMRQR7ixN9tTf4Rf8cdQ1Qh5Y"
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
