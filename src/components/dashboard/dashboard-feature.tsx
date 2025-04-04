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
    "5ggvCXvPNHinvQmWH8noChEuzVTtFVP95QCCNvPo12LwWJp8PQJufvLtFo1inPHk5ZCxbqBnJAsJAZmHwanZqWum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iLLVak3jP4ffuVK7rKc1gWrcTGxjJPbbg76LaBbUMPf8yfgKUTYcd9CpYxyVRCwyFgJydfGjc7Sh5WQYjjPbiKY",
  "key1": "3y5SARW7y4Sr8amjmCDBuYZgWhVJKJ6H35KTLj2UySVBtn1TK9wpFKFvw6rEoc9GRm7cSWuzEUgwokiFc1mpAxb1",
  "key2": "5ThK68xCezQF4qHeCzUYcuC6rn292ELgXNvqx7wVFZ5uVV8afBLt8Ti67APx6QrjSFFvXZjZ9eTbVtLrUK6KKzTV",
  "key3": "55mwHzfBqMBARWLwDTvPZaon1xPmuzJoP4qAJUAcPaaaVDPJTACx8VWFUjG9jofHYgw7jQfz5PWgvAEMLjGhTwXo",
  "key4": "2hfThubPvcGzvDCyqpZFjJgu2sg5mohAycQPkz2A1pTUKRuSyQjt2VupPqoyu3VEEwmCd3rUmCjkcSuj9733QkeL",
  "key5": "3JS3HfUMeW4ujwaScm9DPy1eTC41N5q2kwv1eMLKGeiXXGkw7u3Feh69X7o6V3RW1WyBJRXvX58nfYod8mHptztN",
  "key6": "3prT6yhBGqnPFRTjzHfCw64X6q5tTbCCyyMkgu9XANKShyRy1fQG3pFwqMbduoFs4A3n86Ghgxx2uYsWS3UpNoCM",
  "key7": "67Xdn3XDA1UWCLGSL7rmQMkmA8abTp7Ac68YFbCscqGksYijoUS3ZDDmizju16a4iGvqJWVM59jNFvb9Z5y3ov4a",
  "key8": "2HCc4DWRkZSi6yHyHBxPKh9coPksmAkPTwNnovczJebNVLQTD4GYSPzN2QkKLPQbbnt8XhwvcYWW2ZqrLdG1s4LE",
  "key9": "4AYjsEaw7LcZoERnWmaDCoGR6rYxuK7o46ych6aFsBFFcxkbTi1bdMQ29fNSaKXmDhhNRsdeaTLJxGcHJJtubqwQ",
  "key10": "2aDdDZyok24bGZvyDMNu1joW6gBykXwHxFmP5stoHufPyqg1Wvk8tPoZ2GeKVpACqNo7U3BUva3vH4Ck2au73Rhi",
  "key11": "4Rx6Lg8A7ck94uZw5tuWt4e5EwPTGG3gBi4drW9MTfcybLmwb4hJhbDLX4JvcpFbkfHg9KvrBb6a63Zr6yvNRPCJ",
  "key12": "4JUFuoTr4Qi9688QGHbXgNzQav8vBFwACpo2LCSfhAc6H6nFraHNwzZxDAAgt3q2K6etQEybybVy4aswPum2S7zS",
  "key13": "4SaN9TcFLXdfAUYiTS5deRemcLdMRxSKxMEe1xNxKQnHcUrKHzKMV5tZ48Xs2iCDErfVnUT5mPyXTr7aRDJsYGUM",
  "key14": "5GT87DN7pSEus7GfxNES5thAXCeJYZCp3FBkBEukxhjXogsNbccQxf9cZg7S6yoDERnRj6bGeTzAQgbannd6rtC5",
  "key15": "3GNXVw7ZCRHsREcRcWgvn1ZQGdY7mFFx1zAwrg8fUjpNTr3AnPBRpPii6uhXEGeLycxVZzoVyPtVV2KwcWtr2s9U",
  "key16": "xRox9bKeA6XHspuDyH4HKYa3uUTSQuA2WJw7bBEQiEFHhBAYDGRMj2HU7zQZSZxaTzQ1G8nHbEuWPwmJUdzyg5S",
  "key17": "31evgtAtxLtnoSLWTeLR4JyoTZTXZzs3sL1MKdBHY5k8tmCZyJ23sKpxqEv1bTa6bxvboT2mrJjgo3M4YoHeA54s",
  "key18": "4apwHzz1PgVhnsQT3CiSa6vWYQu9vHM2jJVv4G5me6z3RjYyoPXWDciWsfcrMKDXk1EGrFKevCMFm4yqeWeuv4JE",
  "key19": "meYpU3vrWdtpFcHkuAgmpJsMQowaMNiPA1bWf2jDQXTrDg3QVPQea3S5BmamxDzFzGrUT2Ba6yPPzpBcRoHV1eL",
  "key20": "3aAKLPoh8A5CsTjmtmXwroYtKD6DMCdpghKtCAiM35s8xSMEePT8hc142TjGmWGr1UbBdSX2G96optEfMcU8uwfN",
  "key21": "57GoBZ4UR9SwCkGm18CoSuYayCtfDTPuFZf6toc8Cb2jj7hZupZpU8D2yCSwkXPNwxMYdQnwgSxb3ofLdUdXtmd2",
  "key22": "4Ngk67uv2QjrKZpjqN4tnfKbZY7jJEQ2yPy4siCHChgTUAB6W4w295jcevw75kLLDQe1iUTrWcWx5sK5UcUPvMJD",
  "key23": "57YFAeem4fk3NDvBJcU8mmTGd17bfbSrD7US1cFyumg1bSdTfNz2iy191ioFZCBQPrNLFfUdmB32vRLmHPdaLznY",
  "key24": "QpzLrVjXqBKsbaVZcLuVYMufqV3X7s21FSVEyC8wdPtDDMwz2cAcTxpDxV4gEhjCXPfw8m54S31D2Psp7P6xaEB",
  "key25": "5oNNudDJMHEJzKUGVGzLzqTuCDS4n5hAUoL6KcDgLLBbDNiFtn964aLZmRBPdL9M5ijfqk4keRRBCKdszHuxsSGT",
  "key26": "3GwChLdB5UgwhvmYyD2uSS4yfTdrNg8ru9RRnEkQuBEATuzw89NViH2aBkWdJyPw5uAG3Wwjz3qmCgTJSUGiwef9",
  "key27": "52kHRHxo4Fr5pbbh9P1Bcid2BEGZX1BsPJ2HBzV1J4vaYQuP67dcmpbXMF4A5XVQxWQ35zSwj4KiT6EGcaejPjx6",
  "key28": "sjeHtm1SS9kSuzX6x6Q5ye8w5E2GT4BHTkjFBryJ3DGPgfPXDSfPQuNfkMB1CFBoDLg1C1zLW812KRwtnVDbmWC",
  "key29": "5DEK243KX5hBEaVJhjWMtCNB6crNPs5bhLbN1nHUQ8MXDPcSWmMmNNw15Vru8ZzqztEdMqtY6pqz8K2ZTJJGj3f8",
  "key30": "2oitqLHs5PejaSudT4gCaN675wPF7WpZY2PRQ2WKtrfCopv7apSc8UHd6rxXVHtLu12SNzVgtypBcUfZtsveij5J"
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
