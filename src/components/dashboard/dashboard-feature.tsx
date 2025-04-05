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
    "4zVLiKRnX8CB7sXBeS8swpPZi8qjLNoLMPAMBK6cHTmkYRXftFccCa7zZBch6eqHsvJmutagJqSQeXxxPXTr5iHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22P6BvHSor7PcbYg6jBn2gJfD7UzAZSDRmb1bHQLJAMgKjix1a7vLSzRTWbYhgDarngrFmLGAy8YejMQtW5gjxKC",
  "key1": "33DMCMhCWQ3fGV5RA6tKUrdc1Yqp8nMMx8BW1thZPcxi7eUVXiE5gP4DpbFS1nY8Vz7mNuMKb9FVffxXAwGcBHFJ",
  "key2": "3VWnBmTRKivHKye2vxqr2YHw9EeotvRQjTrZN8eSdqhzjJ3j2viH5d3necTXYx9pTkRQN1UfjThQBCY9KJCdYy7H",
  "key3": "5DwALDA9weYc4TNPbyPQA1Mm9sRskRPTifx5z9YrtAQL8EGtta6rPV88LUrcjk2HooeR5rSvwHzxe3wbi3ZiB71v",
  "key4": "2xaabCTaYxyYGCzVT1mGhbVX5LBrVHhJgHvF4145s6LLKwTCaDD3bXub57PuMBPKBBu4W4TFvtPa2D7qqmgXTYik",
  "key5": "5zWPPrqewHe823Awa6FzcYJwr3B6eSSdvB61zzWMVPajKmUwoHvEnTFc7D1CdWvnUuypez3hCK5WUFTRtaahMYMT",
  "key6": "kYZ1s9CTgxmHmakesVBeEKF27jh6F56cAN5aURx2f7BojdR1UNQQw1BkJR3p77SyvBxinkYLpZZPHrmuBfiCMRy",
  "key7": "4vtPw1B2ytP4G3ezk7eeSsxTuBhWMndCncYXYAdF8bWad6CZh6CdKig9MhwkoE2jpbhYNfvSDkcZTor1C3EpMKbN",
  "key8": "3EHmVcdYRzXySrHtUv6VX3eGi6DapuzA9SGpzcXaxCbSYjsyMEUnx6KSpETmYkUHnAhkppLDDH1zq7MpS3GX4uxq",
  "key9": "2oJc4xYgVgNQ1pPo88vXYxt1Yq2gCCWXNX5EPzS9NBhZiXasBkfuoaCVS5zYGonXx5MGsu58cKptuRYeS3kGhqy1",
  "key10": "4RRx4gzyic1GkfRsf6C4wPrFXjPE9YX5ibuv2PuNUHQ9n71QHkHNVRGdKqnLnkGWA36VtKYrFnHEFQvAR8YETAsW",
  "key11": "3R2SJT94MCHjpKCxVEhq9jHRFDUoAC4m3fgmWcRyJfu9HQP3EDxWMdusfWQcF3katJawVK17sVYFJ1Rcvdqy3STf",
  "key12": "4c4bLgDjqzRkWjj2LZLkq3brzdFc1sNxns4GFyMHvRMHivC4o1LQJbKZemffWz6t78AnnAz8Yz1MycK1QY2HKHgc",
  "key13": "tqLv6Pzpk8pooffJ5qpL4TJChvRy3jhnC4LcqHUJp23tSYkxYMqXzUFnTMrSiQzoNjqki7kvoebMcvoEWRivuPd",
  "key14": "CSfAg6Dwg8ZHF5RBJQHgGR7AYkB8sUfPD4muQnHXXdzjpJNPMamVZizcowAnszEpEwTXwujVYfGCyMw5BjnSA7s",
  "key15": "5MkeDzfShHrbkF5LPCipDV66AKEdiZfmy66PYyWUd4Rb2jX5ZbX3ZtsND6hLe5MNkpk96vmpmfrtTP8EcGTWhb23",
  "key16": "2wPoLnieYTAvnY1VJRuEwABLMK634NaPQNSWKjQ4HkE99pSwXzY9BmKskPGb8AfzwfcbjDcCaKgq6BFE8ahSmVq5",
  "key17": "5zwyLRvHqsuQRkBfW5VsJ4ng8Eypsekq3zXseSUDg993nzEQhuo5yXmDMDB6mPJrK33Gak7qMmFnYopZW1LLMhae",
  "key18": "5HVCNxUk2kEA4zwPPGmXtV23JN1D6oJE8EbrWMYaQBN6i5dhgDUnDunczAcsQLGCm4AZX7tPEfgRa91uPNsFUrDj",
  "key19": "JWjLSc9bArrsxWkvTjDcDniYVAWa1TvJo7GxyVxL2f2d9y6ub2Nigye1MxQWeDrmdUZyxjMvFbNv9Rvor3dvzrm",
  "key20": "54jLcj5Cj1Wy48YSAHJ7WcXebBjx1YnMPdGnLHpDdLXaL6P1XggBYTtdjo7Aowqh2vMnPo4uRjNkusWf8wADAmSV",
  "key21": "3P6eWNuQCUvmpGb6EYzYCvna3FcE4dVEW7VJXqKjWjFcPe7maNum7xFy4ni6T2fcgv7CnhE3z84MM88RF63QZJ5n",
  "key22": "35ToxdqJM3nZsFKaHNpBM2DgH8PUkQjjR3n872Aj3xVCquB8RrDQxiXvHY1rJ2XQviSrFfE6WQmd9iaCGe9H14Vu",
  "key23": "5v17fF3PGQWt8tjULDm42Tu55oqHh3ZGCdGMzXi2Q8C2MF6VDKQ9VZSww4RwXzWXyYHUCXUN4erYGz29FbFjjZNg",
  "key24": "49VYRygD2cGUD3vbYh6x9djr6wsC1nwhvgBiFK5wSK1MzBU3YK2VaCWsF92mamvsLsbMRGJsuzsq5kUNVvg4z5rS",
  "key25": "5FrquF9CsrndYJgaBVFiBUnndRevi9R1mNjE5LFgvbKziHjD253CUoZJhfck8vPcZBR8o6qaUzWCTpPyJABKmdr4",
  "key26": "44YcJ5tnmopaZot4Nqg5qMvf7qRiM3LqXMLueGDUniH1ifJmD4edGva3qBSWZvweRMgZ7t45NFtBxsr1Q4tAb9iX",
  "key27": "2jRbhBiH6MiX6ma7wyuYhxsYmhJLEZZ8xb7wwNoXkwjuvc3QJB4irpPq7fYZVMD7L8XnFNZeNQmFJZvX5mCmv5wW",
  "key28": "hX7Nxg8m3wE8FJgHKxF1DHbV1SkFqN1mT3NJjaBykqLLRjY5NwAxD4wpmZTCS5QvxKf2G1qVbRewMyXSed63qfD",
  "key29": "22tYMCZGC5a1junrdvevNTNwxvAW8wwwj2FWWk46wuQsWxzA6x6CRMAYCXdpA9zUUcALrJ8xVJfWRzwJoY7Bwm3z",
  "key30": "5GxRtaevBPAyCLCosN7CNEnpNvh5Dizbos8GR6E7iQUqA2zY1eCk1nguJ1NirQe8wzkAvkvAcpfoUqpbHPXQN8kb",
  "key31": "5pdo8ga7n9Tu6JPKVBTZcKG7bhfHpZGN3H4frpXeeN2tz9ycDUaUq79HuRWMLqX1RTkAZg6xmszkrRVJD94kSkXK",
  "key32": "354umRtgeST941xKSPfYHkxV833csH8Nn6zH7KYS537fZGDUoPVm5WDBhfSkvuG2pxTy1CsSn3RDfNS42Sjd7KrP",
  "key33": "3oCDfygDGxvnJw66ydHgL2xPs1qo7Me9xBoJqCL5ayxx7ANEdamSEZTxYaW6ui5gxR8BZxcJzVT6o9tz4Y4Eif1P",
  "key34": "5ybiyMy5trhbEYKS2kS9JVu6jRixwh82mvhhmfBpXWg1VbaiGfoGiadd7BvDYSi7TJga6Yh4Tq29c16CNRZ3CBgA",
  "key35": "5DUCSyZxeBURrvTYahzSNJnhnbLcGCGFUissqxdoQTo96LczDyUn9BnKQPHuLtsAPR787eXmGWNJ8sXXEfk9v6QG"
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
