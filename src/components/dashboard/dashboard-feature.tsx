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
    "6627oLiyojN4FC1fsdUdxGXh6kBmeAv7CDccrqE4PmUYKZR7sF8JFFrnSkVXR4RKisfQCMm5S8cSjfzLAxHnwNeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LVGGqGJsPjo5pq8Kh5duFHi8cQ5U7Mr7EL9mwPPuqRi9hxxeK8kH1JjETBSDd8Uhfq8Rq98yWHGMjAugPWDrbbS",
  "key1": "46xwto9xcTrteeapBWfEyPBqGgAGSwpVXiEVgHkKXJzVoRZ5ckhwwUz8rsRS21X1ijEfc7E3KCQqoevtCE46D3u1",
  "key2": "3B2JXwaQMtX6KYqpvoTZxU1dE6VgGm6zgVKbhKq2bt31edT4k3c7cvf1gqFqXzTeM5dzr4oD7Tms6Y1ysEYGXnYV",
  "key3": "4fYtCv1nNHYwxt3oUboWg96vT8z9RnZ4B1A82xbqoosvz5xXBTAXtmiUj1QoFja64zTw2fG65tf8uP5sMF8Q8yT9",
  "key4": "L6Tpkyn8Ue5JcQmuabeaJPPNdZEniPZAWDm4mV7qJkeehNCaQS9vWShzNEuj72AsMfvqhJSZUfDTmuwG4MmgRsr",
  "key5": "RCue5Ecsk3mCkwEEx7GQ5bvdhzV9qRBnvjMRUh6Fh8oHavheR3RGCNEzYNYQiThgfWsKGxGGc4VEZVjVq757PrY",
  "key6": "5KgbcaDodgZYxCsja5CANCniAxxdyVktF5KjZM35TBZUZLRagcSrWVU95BmdZHErPrRwRBS9b8VDgjFJxZvEjdCz",
  "key7": "ExaiHbjjrEXVEhX7uMNECwej2vQTg1XFpPvMBW6jo7rfWzthvKRHP5tdkV57kMEcaZg1C1f6YrUzYWJsusrsEN6",
  "key8": "4kZnSXqyG5mkFFdVPXA5q5h8ygmPQ5PZ4aJXgLXYKy2JwCjw7sPRaMhx9eFLUHa4RTKZWRrrkhqTFBxF38EQMhhn",
  "key9": "4Cyk5GygtS4oab9N1fUVRU1e1Kq4ejUAhroDSYFU5nnPypqrk8jYmL7Hk6rApyftGiATbyrSNqhqmgi7rK3S7P1e",
  "key10": "4eF352L2Tiv2YfBikBQ54YdGYHrU7eotuAjJtVdDJNZDDxdSMy2VL7hizGM4gTwFFmSEh8hPVWvfv5Mi6wAsqe3V",
  "key11": "5gqfwYZaoWHYUtm4S93mM4cn9XGXiYecfDdMr247Q7Fq4Hpeb5BBbyCtDZX8WK7Kr7vajsSmuw7yhUYpDBHnfNt",
  "key12": "5MYKW75KM8xKDgWznuepiKiyzZvwThXfeT8eojxCFmPzm2ffe1EPzicMkqVdvXK7Qkw2toTJhKLmW7XcXSo1u8Gs",
  "key13": "3NUb7adaZk6cb5snJW2NkLeTf9wGFoPCYB7KLJbnQ5waUVwfgwkgsuj6CXzh29Yao9y1sMmxat5oqCyAKzzKE5WX",
  "key14": "vpK3oWXmeUZobFZsDPQmpZuKQGbWqDFefATDLMiLJV268EwqbtfuHDELbmqwjJxqCBxqYSXwnht2jZM3nj3qDzT",
  "key15": "4VsUJAyRAUT5dfrnkLfQq9qHJB5Sxhitp3tJ35srMZrUnRjLWCKPm5VW8qPXS56ppqBcXYcJ4a9JUdaivXpXpVRB",
  "key16": "4z1fGzom59YCwSjwQJmRaJTzZRh8KAVvoURDcCxgWo4DV4Dq9enRd1pcFbwvC8Pnq47SKtz1RN5iDDq7QE3642BV",
  "key17": "5ecA69iMiWh4hi7tyQsPpFAUPpCfWTSTro8EfKmtsnw5vV486t9knAozNWLNdYxSEFwDidQj5UojXucWR7f7SJLB",
  "key18": "WaoKHnzW9KMqzn8ZvS8DfarjTnKTAY9oWtGn76eqHdgJ7J7jqoNdAdz1MABh1UwaKJUAfBu7acL7szd6WbVHBfM",
  "key19": "2GAcHPU5sBCih1c6kikbdgfLPJkWYAZPuebGmLSM8Y2LZ72p9RaaA6xEWLsfQMN3aLzDndHBwuybfNNxAkXwRW5y",
  "key20": "44LMF5GMgBUj6vY6He8a7VjTw25qRxmgGsZRpfPjBFyMBue3WzyTV9gZwVYimByuX1fP9KCFJuwNZoP7Gjjk5Mih",
  "key21": "3DV59XEWK63ttK4qsfWYVTkdYFahzDXk7MrdCbNxUYkukZpCHKbEtoeMEErQ1QxRVzrPDgyVfohNoUDRMb4aYx4V",
  "key22": "3Xh8XYgdR5UUptM5JvdSkxwdifz4wBubW6ke7avS3cDbyhSL8GKxWmPkrhJ43ifrfMMXirEBvY6yHWXHTmz2erNw",
  "key23": "3SjBMCShtNBi8wzmcRc6yB1zyGNYa78zVSo9G2qaujM8AhWtz5i5S2EY53pqwEddRweY1GPCTsXsTEU8AYbGDagT",
  "key24": "LTihhE4N1Eu6U3imXBB2ksJhL6STpRdDPikRY5AkSeh7jrRAVTK9RmrUgv9MBMjMN7GqggezoYHaGtuwUpC1pfk",
  "key25": "2Hx1h3u4CedAsQQGRfZn9xyFnkoYx6y467CssBAMqrCeUfAgb6VoJewu5fNHocCLjzXGjwGTckHmqrD1WJSMZW9e",
  "key26": "3VGx38c2FX2UbfCAVMK5j98nqg2tFJJUDveXADQjPg3BhvhmewiCnZYvjBmSPoaoJmntWng1SDJPqZ8wLx4kbutD",
  "key27": "2h2cf7k2QSHprzYsM7XCGttBJUoko8umCYyBfXxAz6PY6Dh5MyFBNJ7Di9yjPh9iYaCfKC2F1RUg1A8gTX3JUk9f",
  "key28": "27yJVQrztUyq5KAY3KoFcARMeLrxmBiHuKaFeGAC282tunUdrYdCjcv8mDtbcJAfZn5AyFLeQEzCF4JbRuGaLtVe",
  "key29": "vN2VudP3FrgCrt8pAp26vnbVW35DzqWk3X16dL6m7SEHmER51cB1oLeotBJNfrJ9zQG5Ec6TdaXZAeKMfhZ87uD",
  "key30": "5aPbg6n4Ea19KJWvpiHfpmhiD3jNeXw6nenCK62UJdcsrbecxBRYbBKntb4qtmi6jJHGBTYq5bUGdYM3X3KT7P67",
  "key31": "5AoDjvQAF3pPgBnAhbsRY3UuGKdJTxVHFAQAE5ySgRjXeKaNPLGS5nqwD8XtfWAxL2wDkRgWPCDLGBTv3jabwsvz",
  "key32": "39aVEdvgerv5j6VL35vjcJyAdftYfNA5gfwKic2G7owVmrU6PEx4F7FMyHDUCiXvYEoWLdEnY3zMaAwuz45HmzSy",
  "key33": "5CN4nPkZ4WS24s9cNQkfBbaVpwYdeTZWSPQ8b1fpktmA99dS8X3L5V2aBm9mqmp1jz6EuCGEevrnosfudPVbdYUE",
  "key34": "rf4XUKdn3KDmsyJa6ByHobYgz2L77uBbW15SeouGbLfRov16ycNAvLwXm9DAQPj2XBunYJRC7HRbFbYuSYQhMd4",
  "key35": "58ZiuEB69s6e8R8wmqp6sY8HU6HY6m4U49dPajSCrc711a2V42PmDUjGyEhjmZX1epbY2sCjCBmRECGHLBTBZkgQ",
  "key36": "2X1NZfGJ6VaDUauEcSuKZ35GoLaMcxZWuhFAHkiBnYc6W1d7brZHd8fyz3VFPXWBcW9aKGNwMW8mW21BviXZjnVA",
  "key37": "5KxDz3mXyAdKPLc7HkandzpPdbrvMm5D7Q8HyJqCPHyugYeDwzoHfhWQjW4sk22rGfCF483oB4PCExrxJQTKNswk",
  "key38": "3yB4tXyi85pQCYk6FtdUEaSQAA7ahpmx33oWU3T5YarxtkXVhpBLdMEvttdYYt29w3vmCevui2UCzUCuwAvCodJb",
  "key39": "3GKs4DnDCPpJnYq9asLo83T55w6aRsHdyDGjj87vwRMxbfmaXboPPMkx8g72C9tgACfMwyYiLcpV33zYTP4Bh3S7",
  "key40": "3UBaUx46ESM7F3fzoVCspSCoWRiSRgqqt3CoDFUHGcTmJPVJbd5M73VJcQznKTDk27r5Ny3zbP4TxTmBa6SFiU9W",
  "key41": "5WqajEZhoDe4Nz9ZSbUQGjuGn2Gx1kRGip1EL4NsRjijS2uantidJxiP3xiLUkJCPzLKtmQg4sCFFu6Hj8bftvbU"
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
