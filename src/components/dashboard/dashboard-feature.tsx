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
    "5ZLwirJQpwSLB1byFZg5azmb1SSxDvdVnUvxSvGrrH8beocoGvbcGB4EBrUmfeGFi3zvW8Ffd9kFPGMGVirvmsXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KTdG7XsYvA9TH2JyaTb9fwYBgSpep1RNvJprYmkhUboJYB5VytCWVxu2yKi5EHAC5cJwFSYKoNg4jRKoNj7B5Cz",
  "key1": "pWvYRWZfbXQ5Y6Lqmarjmrnw1UJV3ndbWny5CC2xmixrV2Xybu5aV7T9tjCgN8vr6BE3nEWdEzRe2L3GyamMuEA",
  "key2": "3LSUnKL4Nm8oZfwT7YK5mLD4F4bCX2Uk585EhsgAXNKnPUzqmiEKiN8hfyrqidfHFQrxiwjup32iqvXVPyg9mc91",
  "key3": "5NjZPXhNMG3DdottpVUXh9RZUx2qg3iMi2fK7ikoizp2P4NzCS114vGUyg6FDwrKrrzh5q1QbE8kpvFzG823LJP9",
  "key4": "nYXMr2zoqtocUNnG1NdZ2AYwpJgim1mwASRpNEPztzJ24ptWQJn4BVXi392UQG9UDryf4oXtuYzGdwLJ59641Ar",
  "key5": "MKxYj27opHz9p4UBNWCwAEKc2AnasuAxdWGoCHPafTaBKnmhgMS2GFn2TCSshVftmbSQbJHp2Di7BpghcoSdpSh",
  "key6": "2MT675d8QSxywiEd9AfazJwuDgK5jDGvebzHSoGazZhQMzzBG8cNtWnVsdTHDQzsfuBsnMX2AuPgngoMYYaiao3f",
  "key7": "5PHVCAvJAp5WbLhA4vJtNSv3YX9fo5nyZrnfQQoFb4a5q7739BfusGX6j5c7CrsE6MQrDCRuJE8c5LFXvjFgRYbn",
  "key8": "43yY3Wd7Yx7RhnWhPVkeQKJq7K1ia8sU19ZMX37mAjo7L7f3gMFLQYnsEGn8Ney4EyqENeh1xpa9yyh2JUbKJ2C2",
  "key9": "4RkijYV8guSx8T4VpXKveNU8M7ygcM5Yfy7uUGZnQM5PQ6RXEAS4MrGYwfhv2YchVj4asif8Hpb2LHTwEbaazpTM",
  "key10": "23K1Sv1AC6DzcCGt5SPnaX64F61VKUVNjp797VuAZxMLg9sdYq1mmPneQLp78kPPEC4eJkiBhdZgwJ225wK9ynXx",
  "key11": "8TXeH6yWnsxydYC727FhFHRUhMffYiBVzLce2HYziYAfnp48k2cgCs65DJFCB8KGq6ctL9E3sSMmCLmYZxajHzD",
  "key12": "B5wzeWDVVbqgY1NJkcDqJ84kUg2YXAwUD6jc9LVqVLarzRmeQfRqGBYCCjy7N6CxeJq3NgJzFFqEXQmwiJMPWbd",
  "key13": "3qdGBw3EJc229z8D1GFknTz4g2JxQXV1DNkqXbWfVPYqmbChRP8Z41YxE2y8GMGiEoYdXYuYHMPknbtymcBh9CBq",
  "key14": "2Em4Ds9USKwyhf2pjnv6Zf3gXBPpzWzNnqLScjrmzaPAn8VWygo5p3LfVw3LU7v9vNEjopwAqd4obEg69aM7CgJe",
  "key15": "52X6fcnYZVMhMkiAkSzD87k66msUgP9aeHCcJpZzALy1FUtcc5Vn52516e3WNuxzR8cCq6BmemwNBrphJQf7pti9",
  "key16": "WRmkjWCQEy7NrnV8UfY6pGvenAprqz7MA2ksw3s3p3iNQySQ16wNjDxSHBXqZep33c3uahdLB4P9MCx74QkpBvn",
  "key17": "3jVr6EsX1xx9ZhFLtB2DzwQWRnszKo1p33avQyXd7L1p8m9fy3GRKE38cu39WeGs96SqNeHM74yTc4rktWJpUrqx",
  "key18": "5g6pShsMWBJQJXr4q6rk419wAehgzzJS8Rz51crpCtncMHJHudFQzejAtJ54mQgfVb72wLiSmp1bqV1FzSwv1W7U",
  "key19": "3ESxvoHwdQuBKwTo2pe8DzpopdUTXKeEkdWEJV7SXbE8RzrojJZktxwndhd3wr9DXJTxQ1mK9nagiZ9PJuVS2pja",
  "key20": "4k66nJZz129SYX7tbEE5XGipeXFSKnyYKhmwgNfLaWPsAnk1y8owt7ampUY3ggrFbwUTriAF8WFjCouunuWUyh1V",
  "key21": "4XcewHQdkysXEVZWyTqLfseWkXNWnDb714r5jnjzFcixdcyPiuvXac2VhZ45FaoUrPs4W4W4yDLcLExTJtQFrQBq",
  "key22": "BM5asPFshosjiAYCSkJvEHbHErH3PXxXpGMFw5snfPBPGCy5AyuEJVLR7rBaaXpnpaCAQFbMmgXZTYafiJRyN3L",
  "key23": "hKHQmgTduiRPRHbw3bjvGpc2g7ki2iqtdpyJSMciYpLzBzBzPtXdx4Rskwr22KGXQDZaeF6Ki2qMLg3ABGjFXhw",
  "key24": "55FxUuWFpWnDPnMUsRcz2BLf5hyzr9dpwd2pFZhXDpBchd9pkH98iBVzfG7Hubw4Yp6UWpQQe4S4P1YQgtqf6VLt",
  "key25": "5gYhpoJ3zwPW7fu9barQYRxEgB5xSrkDXTRVCCUobExf1jxv4EB1RcoYrnq2hqxGsp43b9EyyvWk1LmsgCvmpPe",
  "key26": "5MBw3PHHWp25iPNP4XR1SrCrVw9thiTzqggwvUaN89qFDXBKty1JbbQR5ghurbAFJwmkaPU21WrZS6QpKts7gQYB",
  "key27": "46sXByEwDzfzTNpB9WphfZwCTKTMtbsaSgPHdwtneHv1fsZg3XtM2SEJ3LeL4fPCAxgJpeMj7fTR8adTpBe5cSdm",
  "key28": "5JYszzeUi31M4Cjk5LLJQcpjxJUjgxDutkXhvCy7UJMdXAaq83ddgRMW3pKDc6tFVwdkwmZSjN4c6NRmht42nog7",
  "key29": "3iMjTnNEfhXMt88TRfH7Gn7eKmAttpuGFDTie93aWBkN9YQFpD6qPEXVW64K3c3Bqfr95yT5x6Di8KGUmz9Hdu5E",
  "key30": "4WvJx5iJco2dCGNwqDSJEsFFWamcrDNw6E54oPjwnR9fS4kR9W6RHURgB6NN3sy4z9migSeGAHZ7hTCiZT5MDNB6"
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
