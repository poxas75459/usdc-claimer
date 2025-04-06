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
    "4f5JGWRZhf79r5PLQN7Xi5PEZzAXXRnahHk2RutdjKgJny4s3VSALTJ9yCeWK1HJLzmg9xaiHTkEcgUJQF4U28nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UZ6dYdAPcEa3Z2pE6mp5jszYQjr1LxmsQSixgYNdMTz9MTXb33YcDJzSn59iL1jv9Suczrvzc4puQnBwtNA7Tnq",
  "key1": "5M1baKRyrFmDuwSeWs7faWjL9crsydf8hqsCQo6uLGQDbJYmuiqrDTgtHqjuH2vbJyk7xVWUd9v2UT5oCktNeqqk",
  "key2": "8dbVnhGYJdRT5jsFgrVF28MuLue8ibrwBvg1W4i9QUgFmpLzSJPEmGPXQEa1hC72MtQR2on7RE5BgKPAJnGwUNN",
  "key3": "2n9Qc4BzwbkTj8c3CbHnm6gKoXCouCraARcH2HTYWQ7PdrdwfmY63D8qQZjcXPZxvPK2g4dM4245MjdALMAzYQjk",
  "key4": "3XxhDDNTUEqtpzSHrpvgEmv5bNULunTT2UM7TC5X8nU5A724jDwKdKRS2CURpaFvyx6uCSXY1Wej45D6ZYESPCPd",
  "key5": "4w7EURJpn9Yzy1MRU5wn4MriKXWbyE15h4aFwhUq1kzswiRqZaj1PFFUh1z52zMrW3qVUP3QjTmA83SssxTeU4gm",
  "key6": "2TPgst6Q6urFrytLrenKkZvsMBcrXvN5tNbsV4cpwTuySspamHU1rZqi14bpHe4tVwBwLSjGjnTF3dvMZknAiCri",
  "key7": "7eDhk2x2V2Ps1w4LyH1b5dzL4tCygMMKLWHiEAMjrY5eBN8DidqnSUTktd9DbBLutQLC51az6EqYRxRiKSeDLds",
  "key8": "HpHSVgPoddkbBqupvqHPgRuZQNFwmmwPtko91ZQ2gpX4Zu2BM1pKwR8NqzDaW368PZSJpei1rg5hrjYhzRhmnSg",
  "key9": "3141H6vSFmYtue4D4tQL8TERVyuWchJUxMpor3tuedvuAXWi7ePgZwXoMXHcKs93Mfnep4NdiacMRrfWTK3VbdcS",
  "key10": "AZt399sc3XN73b8XJAQTj6PoEoc18293EUkjF5AB8QuuYEg8wAFhrykXr4a3mngVnGXabb42fAKDmKW6CipKjmA",
  "key11": "4d49qq7h41AbShmxwjBVHHFES9dLSrTj4JK84dyrezX3Bgoy3Q3SCPXqqf3DUNhSfziAkAMmmDXTAZ6TVEbDajbG",
  "key12": "MvZ2GbhRe5VmBNtpbMqUxcSpPiMzSKc1tJUXrbUgWBSBpwTvMGtyZXcbWv8aNFBVbQQS7gXRuMz5L7xbbEEMLcm",
  "key13": "3ycpmyPpa5Jx9RM7Co2Q9H3ini4CcV6DM7jYwC2DmpMwS7NX8dkgweG6sjnTkKKBn9t6KsZW8uHdniE7BmvkEULc",
  "key14": "4EpX16UXqbMsaAB9J9TgTKDhrHxibnAaBmnrZ35pYYG4bQUT6R5ByV7VKTjvUSpKFcuBGuNPzqw3gH1Bova2otMF",
  "key15": "4cNwKVEKDFUjMgqN5P3xthYzeDxeR9ccWLnEAWTdMMvz6vFGQqw4o37FJBHPinY1uLeXiW6EDm9N83MzBMLu1kUw",
  "key16": "2iq4JjQy6nan39SUZdXST6ehBWMVhyRQ3DomRZSzSQTyhpXR43bhzq5RhEYtXAAe6xWRhFQYaTGo941Hk4g2nWwE",
  "key17": "4ViBYkCDQnE4XQNozGJBsPDEue7wFNjvCxZdcj39QFfxJkmFdAhyrz4rKRi7Nmg1Us6dEKZQ9CHqDTS7zt7KvetH",
  "key18": "4qZHygozMVWKX2FbH6iJwkerBHFXXUSbM2nFBGNNG4AbuLite6c1v2hmBiY2ptjSAxCjWrpd2TAWo1gTVzpGF13F",
  "key19": "4kLuBQAi1Taz1NeaY2pb2VnvAxtUmDThG1FCAZawQY1gHR3DrNN9TiqHjtQCHdVJ3iAXNe3ndvN3FGPvoJFGmLm6",
  "key20": "5Fkwof7AzZ688sjQ3bKAjhY5w5JSDkrwWyjcXkJWBXckRU1KszS3ya8XR8E9daJ98fXSk1QqT7H6JPKVcszYtS1Q",
  "key21": "4nrvsghTSHppGM1B1A83KKn7yHmfeunssKyGsSKUdxbrHJqa2vA2johntREqpxWzXTtHaArNENpFLYGKk6z3Qxf6",
  "key22": "2gqNUuABsPBnhV3U5upgiR1GN42hZfkmrw7T9pyNHRdr7rd4rL36GdL9K3nmK4Wovg8SgPchZ2sSht8iXJscPqTK",
  "key23": "5gUePxjGqAen1npbBcWvvJoNNaAGUHFWyaWGdEWb8N7taVwaDWsMUPB8W7ZZLcw2ARVDGnrkHkDZ81zWs7E1KnhM",
  "key24": "3tXuffWgkmr1mtUUT5Ridt3k9X7eFGwtTb4kYMM7TBkN5ZZcHf3RpBpHqzKmDwJG3fEgKcN9eNU4iqdCdUi5rDvy",
  "key25": "5Nagfm8JguTuEdj4wG451DN1xPsPYERqtsEt47LZwzxqVczUaH3mZYGfWqZDxqcmfcs6WW53xnwckXwtYqigFhXV",
  "key26": "2bMSiN34vKpS5dJHskhzrZKroeqyP3bXkNrqLg1uM21gnfQsSZxnHk5t9j5aZcvuhGddxGP31mTtMs58ABAx2Sp3",
  "key27": "4SCp7hHJuSfWQNmsYwqgJZbDD7kZjHt2xV7ntopeV5UUtajEQdtJXNHXZrkJe7YM9FoJDDAcTB6J53jMMzca9y68",
  "key28": "49yZscb7GhmqPevzghKszz5rCKRQSfiUvPKR2PJ2L4XrVdBLqtvshWL3qGbrZGcGFxS6kt8qNh2eaqPqcjjUqBjD",
  "key29": "MTjBPvqPpQzX7hwKK6mQuvw7P6XjMf58QF1GZV8YxQBXSxJevnAUs9AFvmTM5ppE5ctfp27AgCC9GvVUmQS3SBi",
  "key30": "3UNyY9qkHSydcK32dxNkTcu7rE6FQNf58RwYhE5Wnk4z3AKvaty1H1wXzktwzNjiZbYEkhr6Tf8VmQAN1ZCKCMgm",
  "key31": "5hpJ8hQhZWVeqZz9HoR8EPiDUojq7md5aHQSNbqqaMDjWwA3g5dxbLwNSu3JkXfUkKzC516cbCfjc8V3eXxXz5bL",
  "key32": "2g1JyQoFFUJPajQHMbcRMD6ojnZLWyTekoCXupwcsZQ3pu25FCaj8ECcxuLU3Bd7xwetKpnfEEuCgNRzogdD3EUZ",
  "key33": "4FauQsBNXu2JSBJ7vyuhEtsgYCosiqU2fqiAMkZd8aNQynL3WbmmRv2PuHa5eicyVB4rcGwFsNJeLzZx7vJBzkXB"
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
