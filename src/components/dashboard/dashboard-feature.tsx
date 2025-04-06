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
    "34ECvfPMXcFaDZkMgCttCU14M4T7Z3ik6u6Tx7Zwqo6t5Ac73E93DP3Tc1WN5eax2X46St1ryeTxAepoMZJZ2eY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDtZ7jpy64hj77M4q7Zg7W5TiVfNTwprgDMzqtReLZCZApH4BFvbW4fDdfABkaSEtjGckz1CC6DytQSUTZeg6v9",
  "key1": "4Tr63YCYVJoz6NbHZ2JsxUHunRUacamkA92MXEaaKPT715qTyLM3gV7hBGsJB9vXdzVzX3GLZvEqpuSf4enYUNxC",
  "key2": "28of3jjUBknWkz6kgC9XhDzAozJrRPW8cYF62YB1Vo9K4nX2gkHYmr3rEvpvyc6rQQ78LqbKBtyKBMXx9sSqKDsz",
  "key3": "2PZ3jsq6T4gbv5EZdFGFhTzCUyebFwbpfF4QoYdbA6Zno5WWq47tScs72VqpqzK8j7fbyZ14EjK1EDNoP8wvoy2X",
  "key4": "5BdKT9YfYzzXiaodi4txzWofjFtPTTFdUqcMPdEs6xyG2uT6nsBcToato5aPGF6NWyBgeXA7BMZJ1gowvjVY6qhS",
  "key5": "5m8sHhHXZz4uZi9hn88sJCjT5kf2pvYm4rQjTsAbgATrZgXVQzwSqk4Qc6NHPLE1GyQZ5y6vED4vrsfFv6T5mTHv",
  "key6": "4yHrvYCr7YHcJxLQNNFKuVSWiJ6Cp6sTSojBmV6zAVcEN1Hxh2CAzL7Kg5EUAU1LyfgN89cf5qC5uLw1nGtwWxFq",
  "key7": "3SiVoLAPcZKn5D6qFrvBMGc6NAkV65r9yQqXmFWaE3RD3arFme2CoEAA1xFwxsgGoaUgXYDkHDjz8ZoBEQFHPe7G",
  "key8": "2ZxjK2JfUZUvkkZNfy3eBpc5Qiz4VAt5CHXwmRutBdpvaLdny8sAT1otvXP8Ygo9V6Dk7wdv2fCsJE18MvPRrPeA",
  "key9": "5xCf2s7fpNyWZrtLdpsLVEhjEfCHupyrou47QjmYC9RCturZrE4dd8h9HJMoBAy8kLFM9PUdsPxBNP9uW7Q2NuwW",
  "key10": "4ZvPF7TYoUVYohLmmBbrcoetufoA87opYJ8D6EbiA5mcU3Asjjt8qfrcTpVzmmsRjQeZirsyZZWXp9pYTAaWjabK",
  "key11": "2ThgugrE9qFbjNN858DCDfGmcEgttDimf729sSoxTHFEXrN54VakVqR9tJ8HK1a9vFiwDJWgQa1rm4P72ZdU43LS",
  "key12": "YREcLSKTvMdduFRX88xnaVfcSt9PXEFitco4HNcxPRFTzX1CiPT6F5jr7ZfzjNyAUEPZHdE7BdVSb4XbYhMwqy4",
  "key13": "4dC4q4UQMXNQcptwiFZPjkGjXb1g5qfbQS7TXbXwv77wZxPug467G7v6TN3LizuberyyNadYV8jCgotcsxFoo4B8",
  "key14": "56SU7R8dQtUcDDtMHgh8VdLH9DNcrosr3XYSNv9pet69J99kDTB6SwCXC8yStNqXVNom97JdEJpjFwZSSEQrGTod",
  "key15": "5ZdS5w2wp8c1oCReYNuCioabb3KCvSgYFvQxoD7QgpTX1h9rfmZ9JiSTb97VjoAfXsYQ8nGro4jYD4JyvM3QJJcj",
  "key16": "5G9SV2xDPwK1sGZWMvtp9NgMSSTBa7TjHteJz25BEaxtpNdybCwerWxLPQejgqZeT3pVGP1g9n64FHqTqhn5JNiY",
  "key17": "67bm3HW6Sf3cMBuHduADMC8tzE2j8V24mT7aoyDrx5eUqqyJYHWQnoFnK6SFnNTXK6iJWQGF3MMfUFiyoKMyajKx",
  "key18": "4duoLorYWY4FbKzhHZzoQpBaRugx8f9jJ3jgMkm53AUR8dQzfeCc7mGtw73WiEMUVJ9JXUSE3M5AD8yp8TQm3z5z",
  "key19": "3AE52AxfdoFhtJq14X6GtReyrS4wNeKbJBDoxdQavAV6xwkpPgWZRDW7GdaYBKYa8GB8vc59NdNHyA4VvadD8r5x",
  "key20": "297RtT3xkE2c2ZaDKedujqbgHpvThKczhMhuQcTQKXZUENtoR2uUXpJcP3MMaWVy7vLPKCLgA9bHpQ3zmFWSKeDo",
  "key21": "3xZEQfs89Cb5NgVgA2WUZE4BbEuRM7RMoRUQYvzeCacZsoeJR9etcPFnP6hYTVSd11bWkQqcuNTf4ti8fGoNfhtb",
  "key22": "ctUQHJFLbS1kW7gCKzBKBv1k2txBv7PUQkqAvJGA2pXsHDjekncQTdZfzhixYcFFptwjgcMa7XgjtKLXRYReX4h",
  "key23": "FNJjduk871b5gbhtQCkZusmjCdHYDQj4hPHGi4JtpNiRGYhVt2RAgZQjVg8z191erPpJTuwMtrVHnHWkxZfbCft",
  "key24": "yM638biZHZX7rGoHwRcQfY1fESNGr1fvci3w5rWuMVqDGzy6KTpyZVYw2tw2Kq5Ws2ZUR1va2ZWK3DQ4e7h86Vz",
  "key25": "fUh6rMwv3PVa38V9yR8NrojkHbJtVdk1xGL5LkeZgX1vQb9mXb6VNMW1XYvQPvNagHtipegEqXYCCwzLHn3K39G",
  "key26": "4EX59UgNrofPjs7GufUDiarFiRF4UDyhgVUKfNygXm8MPZ7dzK7cmBWqCgeYPWEehQYHuPZYLeHStYPmCqUBQEV9",
  "key27": "3yyHbzarwCHyvi2rRiwsDDSsrsng1EQzK5WjJBGVt3DMuTaJNZk3dxovzuiBqzDXRQrv6QN9LqFkqNJneYQyr3H5",
  "key28": "3qXJPT1JJmr2JJDu38NwB1m54MNWyCo8datWr44BvE41XuDthRu8AN8gmTTkN67rBTuLynMhZ8ncAFXmRpqjB9wp",
  "key29": "Wtj4uVkUNj2dBLViqco1Mmm6C99kqoefPvpcTWp9qbKaQkj1G9pyhqPX57RoC2sai9zEX5g3x3inA2DwMXTbNyM",
  "key30": "3eimh4H6XUZNVBmcT3eVDKLYt5MynZ2quZvkwBe4pQg9uu8VHixBXYzAq7f6hNoaN5usEreboRM9GrXJHUFqr4Kd",
  "key31": "5fmjacvpkLqERRBu58mcCGmz1dzkca2DRr1BQEX6L3tCNtj6hN9pvwAKszSJJmqsBxBvt9DNodwgT3uU2a1q7jGt",
  "key32": "2WrBLzSFoHRoBLX6TwjKvFJCRxpnyeJTmKEdty3qjRxQrM4s8PCbty4ciPSUZ7H6ZYM4V359WxpfSjdxWeUooTpJ",
  "key33": "iVjG3LdJemYMxqmVRqvtdKZBbJFoYc3QQRg7VbXkJ5Z2h3wKH4tanfQNNz3QVoswRu2uSw5Uc5zQPZqkiR8mdQG",
  "key34": "4Hu1WTUKrrjzhv19U2AwacSEuYbVLGWS9D64TE3WAYvcvow46AUzaCv1J323wewCHu8hBhNXpCuyKHcbqeDXCwt5",
  "key35": "4uiMzKfQkfBr8pAwPbasQNifKzPUVSzP89MHGPbqN3UdsNwSESM4bgLCeHJA4A2y481ahhr4hUTi6UaXhLtAtvrt",
  "key36": "3UdixxkEEwPiqjjnZMsxTYxd73k32DtEg3fG5SSgSFzi6n6BqfJ36yjuzBe82fAqFF5tPAkNDVex5GLjntnjtvJZ",
  "key37": "44g2UqrHxm3mG53zXhyif6xXrZ1hpGQaKQfVZKgtfUbXYcAdtqSe2p3dMoYkShKCGuCTLJSid5nK7MTU1a561xfq",
  "key38": "662KkSUGgtmyoGdB4UdUPsTrVdKNXjioqKUSsskhtxDQZknCg4EVA8jwLerfSznSJojuJAXfpcpn7RhYqUemyrEK",
  "key39": "41Ek9LAcHuuPoD7xEY5LgpSEDE5LJARvB3U7CiPBKLjQDMfk8kCFLQ9TXCnipWgpBKyJUS9UV5bbp79zBiC6FzHZ",
  "key40": "3CuoK41YLE4E6UniDdwEidq1T6YfGuAG26cM9mZJekG8zFQMXhA343CHM9vNuqr1xzrur8yw6FzMtoz23VCQuSMr",
  "key41": "2CwoE1uDjFgqqhNkQCbjNkKQJeL6jnFgqj5VN4XqtTSJCcwKbod9aTT6tnX4FsXXP3Z6mTV24jCPzkDH39b5x7xv",
  "key42": "3iyKHwchr4ih3va87xMRv8ahJ4dvN3fgLhVnLQZt6G8RLJKsqmcqTJdpZ3mLQQB3YdhNBDFcfDC2jygzjv2shsxV",
  "key43": "5aFUNKRfbdRrijEovSy2EDfGSUQpSecns7h4BSpzdCWqN7sV97yDdRMS9PZ6eaxi13ku3rNxRmbWvVYBRy8aBsPw"
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
