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
    "4KPZbhVT2XCKRtfaDxu4yyuDTdNfnhkKn95VD9pBjDDU4uXkeXqezcqBXV7ELmZMngBLTVYBP4ZgpREA5wSpWbqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a5YsCkAwwLELfnPYpi2RKvm31qQKhhfJX1izbJKdT8M7RRFU9qvjMhKNnZMiU8PZ3xHjNgPHYXS3RNYK911g6GY",
  "key1": "3M3dooDTNq1W5qbkeN1Zmg3AMMTuiX6CBqpoDUMdZKFzd9emRLFj5Tfd1R551AMPTktDGsHgoDceGo7FccMRYLpe",
  "key2": "5gnqFZujEG3uMq4yT8a6LFFtkY3EcwsrSrfYJNVxmSy5pRWhCzgKUiiZxvZ2eNFKDVGB6NVsAfiEuRWRCEktRnoG",
  "key3": "2iM4TExtgxWg6tCuMubRWMWKzjGeHHLqjGNsgfJN9v8Gz8fPgoWRxwHo4k4d7hHCm9DGWaGco5rwwiMKvoXRrap5",
  "key4": "5CzLGV3XJowxVMGd3PMYXND3SAoYsnbvcdi9BoRpdBBRVKjB4NUDxTnCnJHeyaFLkKju36iXrBphJbVrA7f7FrpX",
  "key5": "2ZEZpXuM7jUNYRxbBzmEGZXwwZB2jXMTCyRhygWbpLENXMXWKxxNsVyLL5vh6vYWR4mcMKGaTFzrcn5HR3KRJwUJ",
  "key6": "3r9yr6t6NWed2w3zC6RwV86ZY6P9WVZcP7cPPkjDaqaRqy1jUCbzVp2bCsoT4fHiMF7Qjfo38zp262D5H5i2zjqk",
  "key7": "44w7RNXcXURjTMzcdfavUJcoVn86CR8HT1ZmktkWDiZeuFJVPTVt6EnadhoVbsB1mAfn7p4deT2kPpvDKNNru6KW",
  "key8": "mL9wntqcZkyfxBBhvuU6C7iHBEonVYzMwMDQ7SJTFr2TDPtn31PzPRZHgrmpLNri5X623KnFWN8y3ytNAAnFV7U",
  "key9": "2e3xFE4uAHy1dJv3ZR39F4gyzK3rpBustk6t2dg7gugokyH15J4H1xLSCdUFic8A1tKdneVKMmHou6QzNE69Hwgq",
  "key10": "4pfcyNYCXw7Lur2TEUJWD7jUaQ7AfnFmmu5TsH25ZzfhFdt4ApwkGW1GAZRNNvJsdWDvR5cnA7wcFrqhDTb15sFH",
  "key11": "2XXFHaGReWiFsvqWqwp9hkbHw1yX28prwYVwKpZ7xV9hEWGLh43ndkrAhEcaDG2VSc93zAudPa6rVe8EiAQqU74v",
  "key12": "4jUa6jG1ebgBYfasFrvQYSnpQPTFzn6iJ8BtPPvVycw1WEGLZ7zhWNeKvZyhjZhSXjKS1eUNdoHfn1TQixWSPAu1",
  "key13": "61eZ9DYujEDmGfcLdPdy49bsv9bo8m2SViKSrK1H659aV3fA1TNyPbiM9BVP2VXXkUbMc2FDxU6rRuqAAZ3KKMdh",
  "key14": "3avdzDAEPnu7WzMuZnywZDBYMD5zFBrEcyGzPRe4quMWzR9GCSmintS25mF5SFgbH6n1UY8LqstxBN14rfxVL6go",
  "key15": "2ro5s1XPf4srQHLThwQzMp31YCf7dXRQSBXE6d7wm1YpJc4bimzv9pJNyLPWrgoMNKchtv2wp44zsfq7pLp9LKqU",
  "key16": "2te7t4PSD22PzEoCPfW3iZqvfQeX4aukKAHxqq7ChqFSTy7DCJfbTt3cuGopvauFMor7tBbXyKQU1Wwuv1fa9AeN",
  "key17": "4hnvTGw25fp5KK55WMb8YNXbG5szSZ9vC6tBvfU1AB3vjCvtcfHD3PedDMpUsLmfLphssB4z5n8ngcmJ4YUXVt1o",
  "key18": "3G7c7H61pkZq7oV2BC8Ut1vZVxf3pczbhs7p66QA26UBUufyB4PfvwdFZeP9uxw8dThASYUUNSFKKNaCcgSryx6r",
  "key19": "2pm27YFqAy27xKd7aguQSfKCJ1WTV9UspuHVkhEt68ib3edirons7GfMVqMusMh69SUJLGBN4RiPntNDGUUn2z8Z",
  "key20": "5haEA193x1WDrcZfRuWBTVvjpvsQim9N7kCQLHdKJ38Wo641UJzipceYRd1HfD6hkSw7UTCoVTneW9bbEMWkSaWW",
  "key21": "ShKh36kciPYSDJDBcShdLb839AtLKBxJWNnYMGQ4VmF86kSL8THTjamm9ptfXByaDaDgu8xTjV3vWGFyaQRBkhx",
  "key22": "5edQEAN3ydZ7Se5yxq3Mt81Qug4A3KtB7gDQU5abtZz6sZpyAu8dzjErZwY5GDi4EchULT7p5kdKus1JctRXtuB3",
  "key23": "Mtm6Qy4ujWP4P6dM42xJEG8WTwePJYwqNfU82MzguT2YCTq8ZDbHFh4AoUCF67uZq6SR3rHDPLYKDEgZ1tPCZ6a",
  "key24": "3Tcf5ANUqjea7zZ3L3xxeU5ok4ojrPv97kLtPEV7WHSvsGY6RGrkHAgaDQe1S99ubnnHXff9FN9CGLKyQpFHa1uE",
  "key25": "2MnSzXtAZyKxxjTpu7HBzvAr9QeUAm62jhSuRrCRZ12h79FeCCW5skLiowFFuK6Lepdd8n24tHr9r3KZNVrFsLeH",
  "key26": "5wVCqoMuAawxvUXpbKPJg8aATxCbjEqTPyHxdGdNEN2RCoEg7FiEt5C38FnpDXmHwwxZscXLXUi4pLxT9kkjkGoq",
  "key27": "4jYZ5og4q12DfyBJskauE1AFFaUKUPrJwAzPPdiCEZuZPo29G65PYMe64JrH9eQHWbcxuz5dy84T41JM68VeUpn2",
  "key28": "4DKZfPKT6KpDp3vuxjGKhPtJ3giU5UqEDgnzoWn9HxS487J55R5woMjMzwUQLcYFx8cd2UJbaXbFXXJRMrYkf3rF",
  "key29": "4yHiUSAcyPLykDtKttgo84seGPFDg1sJr5jhMZL4kdYcPNy6ixbU2yskzjh7sD2L2ewEAQi461xCmjNkUMYXaZdQ",
  "key30": "3ZesCqsNqrvwyKD5ZFVWp9g2JWR5LdC3f1xyAFDk5eZJEgdrk3WmGqEb8r6J18S3vJPri9kp8G7XFxWFdAhQ45pg",
  "key31": "nwX1mtuFqH3TXW6L2Mg8Pw9wuu78hvcpfoYqTTXKXzRSjkDkJyVz217JAPjNbUp4V7uyRe2EYnSq3yGu3y1q5r6",
  "key32": "2fMwVppn7dKK4jmCpKaRAynNbykwfRfZZcJqmuuPQ4vMG3DAmE5eSHq8T4CZETywMAnJGUfLqbtCnuvsxteuLSjb",
  "key33": "3KYfTHzRac8EjdrEHXMN87VmRVjaKzNvMS8iABLGnxJHpDbXeBWqed7k6Dx7NgLAVvzEgRF4kRzcoFYwmtDhSLXq",
  "key34": "4RFPHjFvS3bARCBeb2DppJpss2q9gac8mkurLkL5bWosQvA4ks4N8hRpiztbzKdKZcrTnWSqrvrW6yb8c4k7Noo8",
  "key35": "46R5NTe6cpGWP5WXnTbewwSNXxwJDSAAUhucP6yXLpG7hHUwtBC4nVXuwYkj7jMujkZ3VH2WNRNgfBrLL3hLbvw",
  "key36": "3Pragci1ZwMyH8aGQ12iGRKEJARcYak3sf7iRce8wPjGtyAExexKhTtFLAsG8R4c6qsJ4NpPzkRcLRmNTCN2YkGt",
  "key37": "2iNArwCXZify3xw589h5v5XqQz3UX9TSBN1hPX7ksX2X6hCCZndkeSzSeDouQSpSgxA9b9MA8viuojrRU7tL7Saa",
  "key38": "5qjnns9St8wEeeU1cpnPSwTaZZeHQhETr85KXMbYcBycpCqMuYPBK37wvY9iocQgu93599xq56r63jLePzbiiSEF",
  "key39": "354HYKGiLJTSkywnsHUrzzGQibeXu4aHiUp6PGfZXwQWrXggQdEKwqAzpU41A3XS6YmXaGGRP9krvBs4BVuMWiJP",
  "key40": "5vp3W78oErgSsPZfZkqop3Hm93D84yREkRP4nqYFv5vZKPKr6F4EjSSB2v2kGTXm1ghRiijVkeX1XbAfa2X5kw5X"
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
