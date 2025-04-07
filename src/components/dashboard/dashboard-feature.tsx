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
    "551SufN3fGNFnTE2ZiLt2AeMWKkhUE2xoTeTYjVNb8eHuoRaDxvGrTXE5QLPyGP5srYgRHFxWgCZ6Jmyh1NVhkzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8XRevN2t6ZjTD1GxGq18u4uxtE1e2mw24R4hrxU3sHYBR7tgmGJDFidAWKxG2RbdvyXC46n9DahjdwkgwgJedh",
  "key1": "3jnarHaVB7tHqpmHWQHoEL4cy3Avnvhjbj1TsK1LBQ78odFyFropowutvsmTDo1ELmHHwySFnrXTM8DMVGDDURuk",
  "key2": "2xVrRkTm2rLETYiH6FjemRk75hyuhBPrP4NiYUDhUTRPRzV8K5Ua4dLpXCXB4QuYpCK3gjQDNXTDMo57zeFvWTrz",
  "key3": "5mrDuCPb2sa5EHYb8fJkj3MS8eVZHtvAkRG1nfpDwTC8ukngaK22ekSEmu4H6tfCM9WE9AApVxqALXGk8uwRZXLY",
  "key4": "5D2VMiumiR1cRZqvNsUFJ5W9jRvrDQvqUh42YSMMjsFTaPWRH4jXN5B9EhLGvRa8im4h8zD1FxcnzqAQuFf6GuMC",
  "key5": "5H6VXUC4iR92AnuCccBX2AhD9N2D6kSed836uKHaPz4RmrxYFEm17fPWuVEC3Y7BTYUNjfuB9fxrzxAtBeoriBU7",
  "key6": "3btrdvYCQNJs9RKKdSbDCL1494gjCP69ysuci7XkUH5V7vVGLY226jXzBLtUrnyGKhyWS1YYbH7hpzhivqHfMQ3k",
  "key7": "5sLWGKEd5N8FTiSXy6o2tk6zbXwiSFVVNqB6QLcaR2ZNXRN79SqZUFWwxYoVpiLzx1tD3uWHdNkXqQAd8CntT4x4",
  "key8": "4U8LV9MzmiqfmKgi9KLe8ZUw8G9EWgtpbPt9cQoCMv7Eb9xLBdNWYjNqfXshrBtdy69DXRXV2s7xiFBPEccfRn1d",
  "key9": "3XcCspWJBFo3hkn3AqhdC7WbGE2jEP4R3hwomkMj9W2fZpCFZVxqFb5P9Wi8UZrcFCU9RuBaMJdfrYHMpCd52jPv",
  "key10": "2EfoQdiQMdPFQPDfvWHh4QxAMY1fjiSiPAKXGThvJfjQrqHYvbJWd1nJaMbfcMXzgHCPvEVTEu7rUgoDtcEAfqJT",
  "key11": "4f8KV1MzFGjuuVaPafQtBzEqFC1Lcgnr8hmDmBTPVzxFStXvkUcZVDTT8F27HS1PNH6NKHBFARKWDZs18XwwWwtf",
  "key12": "wwTh9g7FGJEszRK1KKL5sPns9evPLX99NTXh97R2tKMsosYwJJfPar1CnoLzcaozX4WsboPeCjiZczcQFDUSMaE",
  "key13": "34SMEjWMiz75VzwMqdMyGQgfvFqjxHWwwbXCDMx2EF3uTG3M6C23BGqcmf8j7N7oBc7zLUzqi7LAgZBpRcmpErRf",
  "key14": "5UwjLBNS69cT4E7UuR2UmoVFsMRL6Nbf8qMNnqkV7U4kiAFzTAck5RcwFuhixW8wFZQrhctLgree3nn55WNpao8f",
  "key15": "3KD81iqA8u25ijFfidHBaTVGt81dS7kb6xNGdnwbQJdZiixUYqDDiovoJaw6htCVdEsfc2eN23H8bWsPUEJescQ3",
  "key16": "22dmkb93TuECHWdJFuAs4NoiDmCCpYx9SNy7RGozSrpvLqEAW6ByhQTLGvawNXeFc1Vo1QFzbY1ioutxc1ou2pA8",
  "key17": "YF51kZ6cg27HWioMJJjKrRN1CR5YczWrNMyfMfMYcsLTUoDBYf8v6hQj7FSFkCJerJvYEL3qMcP4qKY7bm2G1xN",
  "key18": "Zbumec99Fex87fptquS3NgyuBD2yuN74WJs9a7WaanYXWZ5dgMYJENwXpknwDE2TCkeG9sNL7CDkBizsydduYbd",
  "key19": "6rYs87n7BKs122qkRfeVkqBru51exhURwbmK8bx8haDmXB9UpRepE2SCQWTgg9kuKhexEmZGS9SAeYEvEczMB9C",
  "key20": "3adXMfzmgVDn4VbN3PhtH8ScbYCcXNH4cYta279y2oYTDu6s7JnyWK6Pb6RPdk5GY14cbSHkMzWXCB6RF62d9LFP",
  "key21": "YrdkJxDvofPaRPWNxrh75FvK5qLXrZdZikbfdcYnMy9F5dtcE4P6mSg5mUfVHsACSdUjVUTQbyv5uXmYzEKfPXV",
  "key22": "3MJcKccyNN1Grs5XWrUp3CWZisP3nAbDvhKdvAtR7qdLyiWGi45MsHVw7vtnBpDqqSCW6Dvkis4ArgWiy5ZLZFoa",
  "key23": "xn1uhxrLjXXJ3HYMZQKo26won2nkLTezUBq1auAKuXGFG6gJ77gjRE5EJfVdCvY8KbkhuQJtViXRTy7HxwYqR1V",
  "key24": "4WWZJWiYufejSYLaHPucDzcKTrYZSGJKtgNez2YmhqeWQaK9tQ7XzFY5ZQR98cR8rYQgk4yQvDCRm6k41hzVuce4",
  "key25": "3JTQ2qWXY7q9RgSGRMTMFYzFoJDqUfaFMJDxG7jf6jn7ryjXSxDo9HtaCUqRyRSrnqMNqLdAuz5YzweXXn3PgVw",
  "key26": "2Bhc9xdbR8Bfmxi1JsUTmPY8sr4c5bbrw5Mq8U4Sg51R4K6kByDdoSqBNPLAPtWR23Uw1Wc9NZ271f5sH4n5ahio",
  "key27": "4PkZWZWw1J1a4vTDkkAZjPrN3cZj9tnyTfaR7cCP3kuBZNCm2iGv6rTpANFeiAjfbEjXmaTBqSymBYwhuCbyJhXj",
  "key28": "5mJm13FFGXQVcHnvVfczkq2a7Vd2p73vcscpw1ZNfSHYB3CbNdYN59NyQai7Jrp4wGZZqqsUh9LZeAxEoQw7cAhD",
  "key29": "aDEdQrcAb8PUHx8VqUxr5yHFy4NnvZdaCdkoFTNQ4wS4jXj2WM6WuF8jqYss3CCzTcVosChQctrawDZevQvas3S",
  "key30": "3JAmhBp9sDHZDUtjs8QPTgyveufx9dgabnjijrBwydDnQQQF99aFJCZoJEAkT8E1jb728WC92q28CK9Tf9ZmQpAw",
  "key31": "5kgTjmauPLduEUgbdqZgMd9MurScQPmqUGPxpHqmhuowhg9E5CUFTcp1aEWXqVWdSq9twXUFQ3jzFqYACS9YqFVg",
  "key32": "5CcRHswFqvLXt9DM4bQ5qSERZNqxuFkUVKADGsUd6F7aUSGgvTRnxp96Ve5x6XyxxbbbpY4E3TdngK7A7dMBmoqh",
  "key33": "TfmepDDAjq2d5FydiXBquxRdpvQ8MoZU5wYbBGCS8618cDg4cF3s67Z8VDNH8B2nV9zKdXE8XGLDAW7pmxtxqkT",
  "key34": "3jQkSGXF4f6TvGnJbYKUVWfG5otkpmVwVGcBkvZaCxM2XBnzdvDiYzbtDrJ6dUY27DMedvRZHZmwWUif5gC6bNpa",
  "key35": "4JgxFQfnY4owiaqsiHbKxVws7cBSDSAPyeiuwQq7R8LmLV4C93cJLyYquEQhKqiMsHRDchwiz9BHYEv1myCwNkhS",
  "key36": "63dQ2r6CZqUCb98aUPi4vbrvULzeSW77qatKgAsj446SYzoszFego2yzmrMAWFzbfjf4WQeUJQj9HWpQuy9UCwy9",
  "key37": "29pHf1TgZwruDKU63PcmeajC7QLb7kKZd8gDzRoEQoEZbmjDE46RBR4p73HpgnHVJH42z655kp6PyEJGYaANu4W3"
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
