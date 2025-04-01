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
    "2WZDkPF2GQTND6RJhCcpkCqnqRNNdy69noL7iCbxnbafBvcafU8QZ4vSCJEfD8o98A9ZLmWEnL3vitrNP1NcsFaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AW1z2JP54LSsni2uQzLn59f9NRKQ1d1DGFDLD5MtCiSo6fvY21PJoA4Z4QQukagJwrTc8EjeJC96MMPdmt2CnVC",
  "key1": "4wbHuzF34ZkUMLuCQffgZzuRaDhReuaGA6oNwVwQb5cJVYE644p9oVW7VUHh5oGA4simKhYRermeWQ4rqsxHorT5",
  "key2": "3rn4iHokGSmjrRNqQ4TbjpAV86dsyeWmvDGkdbn7XkaiW6ocUNj9LG5jHSREgcKfUb8TTzHPbRDTbDWQn51UbNU1",
  "key3": "2BYE1AD3Zaew5TnDVm1WrQByRd9EhCNgJ1hwhS6VQnHQbbWp9ibKrbEHFDDz1Ljv3krPkVpVLhGaLRtF4GESNnHs",
  "key4": "2jcUyxqLUXvdY4eejJf13jRMz3XAsfbYA4s3eTcWpF7HrvztuNqB3N15gJGRD92HMyqnCLaFhm9onrKSo8Rzdhqy",
  "key5": "4DfRVMWePzgkDfaFizf3pVm7hZwuPvo1BdTiyUbDyGZQeyWvmRQJdL9HF5aPDN5zkicbaC71RzK7sYPvfxgK3H8V",
  "key6": "2WyKcvEwxBny4q5S4cC3nRANWfb2eKUp5CBnHfbN2x3DH5A2P6RxBjMGPq2ioJVFS8WSpXvbqsxyMjXnR1aBdx5M",
  "key7": "3CpgjEg8zq66omyNWnBJDgL3GbdTCZASAH2kTjT75XsVqz5rUVAShzhxSFrqkUA5gAWMQC7UGZDxX4LFNzNxdzbA",
  "key8": "2Sto5E8iiiRCksJiXFKX5Ao1sfMAsoR5WwyFrR5gcKk6b9xK397XgJYsNVFtbxSgTJooEsBhTJDixVdn8LLi2LVh",
  "key9": "3ikiRofnzh9tS71SjVy9yfW7gazYu48PGca8dWmXKfdCGfU25w4z7AGtH2gmvXCMWo7jwMjEzYuTUT7egea3fHAt",
  "key10": "2wWMF2rLKTpwdWQW2zD5DGXgY9uysxSc9cM8AGjDAhFDLKFmiBUE3bLb7UtiWBU78GcPKXbpkTXoA4RpTTxGzmxJ",
  "key11": "5EuxQVdSXpZh3WYXC6JDomsrMmjEzFMFjYA9KviKGaggb8RA2x2sEisfPthpr1n7nwyVUJW3rDYw7aYPRkRJdVRe",
  "key12": "5UfQ2jj4SDN5ocFHn16KiEQF53YJfYTWTBHQWCzMkrW3aT4RrFD7w1y2ENzQ2jmmmHTSQEDf1geQspe5DSDZ7iAh",
  "key13": "126SFFRV2tY7TiUR6Na2T3Pf9HAkCfn6E5JwH9X22YqesgS3HMvFV7u4Zm4iQPc8AtiWcBam4DSj1JQvpfqFCqpZ",
  "key14": "5RVmSY66RGxJg9A4D1SfCu95rTwPYyWWpEuaRRYBc4wEHxVQeorMfzmgrpwYMqDFvQthECbWSWwhcksN4otxMroj",
  "key15": "4vj6nh4VQrM2y5xbL6SPfMpeR6V5nESByBtYoHaJGJfwXTRCHSJDZhNbF1C5k8m2xQpMFRrti11LrbXfqjv3ZepQ",
  "key16": "2iWGdUJKMSLdYQBKZEWLcZdQmkXkELhTs2DXzZvJLkhqgqwikiTvRZQpc3pv8YTggQi4Qn2PdyjTn39MyweiQKVV",
  "key17": "33C2aiFGrm53vUti3S4A5XMfSpsNi8PbdnDBCxM8wckyZLUb2BvYZz2D8jWkwJHqhvdGNQtPKspRiFi27RFcUzhP",
  "key18": "2qL8GDVhkvDbx3m4JqpUVYrXit6pUqw9NfLJQsKDdtadFzzpJtgkTiVFG7LFHdhbsZpcZTq5ivd9kbf7DLMiDRQD",
  "key19": "UQ3t7499ZxKjDAjtUBMFEqjJYJwhQCYodH8QNng4yZMDtPSYQRTZUXGcb3sd29cifZYG5icwiYQsv1My6dqkirh",
  "key20": "32g1jPSJDdnXgbcnjZ9RMFJfugTSftC4EU1S9q2YDH3fFuvXgNK9WjSVnqyWEU7RepefA2Fery4YLtWzjnqFuYh3",
  "key21": "5XAJvcpKt6ELZDS41S8nx6iCcgtaY6RDLx2FtoivaybwwkUkckitREaCyqLResAU3SBkrtFUbzNrKf4uMmVamanq",
  "key22": "31pogwRjXKKs5hvsZpvsthLGwZTFYPXctd8aSsxkYp95ytvsPuoRbGDJrFBJWUXFZPrhG2ByszpnpwtgxcBPg5Nm",
  "key23": "37kDVXDiM4yD6fvNPq6vAGkYEsEG4hmmmw189Z1vHNmgFXiSqHtvQ5U2da4WKCq7fkdj8bUdsinQ5kWS4Y521j8w",
  "key24": "aDHg8dGgV6LhfSo3h7QDiE4mTaJWkF8ad1HAE7FejYRuWnZHMgU5rKGaf2chqXMt5hvqahEmEHY7mNY9RgQwEmH",
  "key25": "4cFrAGyPVYrTjmbn9rDq2WR9PfB2vcTNCkK87u77KQrCnhBBpSvDVK9dNVbFVM4brFct6UTusx4zVKh9ynHFrMxJ",
  "key26": "4uHRA7EmsWmDNeS128x4aaaMWbV2ExU6EPStpDk74hffTRUoVXX9547WvmYdXC6NspPzbEWYFBUJMbFfg1SPeCi2",
  "key27": "39BM9SqDzwtFwnSAMBwoSJ7pGhM3zgfjjEP7AotpDtz8zq1NCAsXFbBsXCJrT5NWeTHkMYeqn6PXodsF4G4qmuKH",
  "key28": "3C1cYhdLWkC4ZGo13N5xaCZR8QuK9wEbneeW42gfFBbvTyeMP6yQrQMFdEEJEHLKraAo32aUdxD1Uuds6NCq1PZK",
  "key29": "3FjbVZ8XUocp9aYxzFx33Ghj5aSjyULdPe2ViJcMdNBPbca6Gydt4MJL2AY1uBdxAwdi3SknC8RWwgE76kWTs8Sk",
  "key30": "VJTEfR7n4zkVaAF4jFyjTmfZsNffXopNCk8rzFUQY1y6F6ST4V3cvZcuoiWZoZCvmntwJdaa6gzy9Wntefkwvh9",
  "key31": "4kPwUXqCEKPX6mFY1sBdjCKa6iNqajPn8Sa64x6RjbS7E4AP25oPgYynh4aMUA5X2N3NtHeeoN5t5Q8DkDMGM1cW",
  "key32": "HGvMky49ZxtrSN9DGKrXWhDvL92rLcCd4QcyyQzDVfCWAkHgZjhpEhnwz3AXwPLAPwENFEdQp4FwjphLye4onYJ",
  "key33": "exTPerHis3khFXs8w7n6Gi51ggbLUYH2qH6suRJ3WtBfzmiVrMEYDpKktYtogEtz2tV7NDv6PEC66sy7X3nd7YB",
  "key34": "2rndhuiFT4P6hTR3yr3V9U9f5kVdtUpECsoV69yur7CWHMqj6YPV26HzjsHPRJP6gogxXUwPc41onC7B84MvPZ8D",
  "key35": "5NheP5JQXagwyGYhn23jVnnq976k5E9rGEUgv32LWKRj1dHendytpwWfdP9m96zx6tigNfehNd1LuqP5zFwQgLtD",
  "key36": "5qHdbGWcV7M5faA4THZR7ormAnAmsviLLvK3vwXAUeVLzDbGUJNArMpFrHWtwJCyDj5z43GDQ1kzwRVch6886iDy",
  "key37": "2RwS9zXfHhJXbuGvFY9bYWSYLVRxu9MYcbwsHWLoQKBU641X6EN6YCxMkfYbTPM17G2NcGrWPJMaT1XqwvtKv9GH",
  "key38": "5KpoHEbxuovMLKMakbmeVR5Uz2r5eiX9uRiXptbMjujWWLC9srEiEbHATH7nH2XbgtVys3DaN26jabgmubXGQVzS",
  "key39": "4R743ozyD8BuFP5FoAkefy4cDhJqPAYHmqkaTcWtZxeRsxbHyXywKUSh2KsrB8e8ptzd93uH4KoqQCrWsd4hbpAi",
  "key40": "3buT7aFhPdogKmiFdD4yugan2X7K6SW94xiuFYv695sXEdkAihi3xMgx9qTq36AyXkS4FiAaJueb2AeRixfSsJuZ",
  "key41": "4kRvKVoXDWK6qiEHsqzzUVhfcpu2WqN5wgQVYKakFB9UGeGb4gAcbcrFPohgqQ97mS92xtez6YMyKrxsVUHsnhEc"
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
