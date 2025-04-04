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
    "3oGuhigjZuvsvxMuPZUecP9HyaQULvNgbwAPMMNJ1H4oZrv23pnxWtomS1LsyB28s5JtHkni1euyh3f7s4K1ixor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eoi1vDtsxg1eS12ofz4PUD7NDi5T3owL3EjhHRchvzhaBFyEcHKJAstLPfUCYKy7S73UHDzLba24w4YCrJXBDE6",
  "key1": "5pqZQnsN6iy6to8pzY9jVH1bXcMp8sMhm6QndxXMM5bq2Sax64qX6nExE7AYQVanpN9c8SYKh9SbPexfQrdjzrw6",
  "key2": "5jpXxoiStxbedvKkjFPRnFFxXiLMeErmSNyHZBzMKDv5sB3MrtmShMihZqUtbpJzCyy88PhidGEEemww3gKdNaxu",
  "key3": "3xSMA4vTQ3Suqe6eBSt3uBCbY9Jm7xZuft5hX7SsRAjmti9QN37fhWo75mxY43UbJ1e6Aibd6ySCXmR7TVjpxAWY",
  "key4": "3Fnv8cjKw4iC9HPk3jWvoVtZXJjwFF14ZS6inv4b86Wzi77E7P5gKYhL6yjn8PiBgyoaBfs8HQucG3jBXKbvk5Ay",
  "key5": "gQiyA1g9y8zVCb1KFRe6RewJzKxe4WCvaqvLdSRL8dEx5ynFrSrjsREkgse4Sk8AmPkddhYqw5mMLWUS6JCGjYA",
  "key6": "5kuY51nHyLGF137gJtD6n7CQhy4LZ6SyswFpW5jtk187TstUnzceC34fwEQgW1YnKx23HwDxFiqMRY6e52maaUzs",
  "key7": "3CwfQEd5f6VdQauNU8tKkVRN8kmdPzc8sD78nJSWNEVZEwQYNz1CMx2KxsE8NjS93GHgmcjQFVxfRwehQ7nGpGeg",
  "key8": "vSrQKYxsU1iDEVtxZRkqxKiFHgPfGSfYsNy4KznMby8dsseWEgNZ9Ewu9nkgavggWfmRSdo61vmtyfbJGAwbNMS",
  "key9": "5LvrupTWpNLUpKwNChjBiuz4E65Tirz51PCk6v1v6unvfKXZHsJUyhhppWQVJLPcoLy5sibrWYKNJT7yB6vaQ4Ka",
  "key10": "WyEFbFe4SGkimZVapY1jEiY4hD81Z5THBUjAcTLWHT97kRVH5GY98VHnyyXDTPF8oGUTJ9Nfqq7igHGJDAtwmi1",
  "key11": "5Np9ZQMeQL5TCN46Y524dYzh39FX4pjaU7yDaxMeQFhzqx1iZPNA7ejXKHXjsNhkaUjCduSqnFft2YWaXu58cbAx",
  "key12": "5e6ZQey1X7BFAZsTxaU8mimGcHh8NcV3MSwtYFx4mBr23UJGFD72NH4Y8krt5VAYGCBGdMQSVhmJPYpzx7HPwUb8",
  "key13": "4fJPqJcjNwWV9JL2YHva1qCD1adxJdkzVge4yWGVuANKaTayRa9jLaDN5ot9QUu8eTB58Nsmf2MWyDuwqLs97fy6",
  "key14": "4UEsZAypT9VpkYZanCuq7cCpzj149EAPS9kJ8kL9nGPjHzDnbzNk1FSZyETdvBQ6EqRW5L8SfqA5CcGwZKSp9cik",
  "key15": "2QBwxA97mu9Ht7KFnZhjbmqhkPapijYHH9rc82YvQE6ebaEmNZpSU52qX4wFoEpWnWwb7z5pxaY6cc8pL7jYCoXS",
  "key16": "4TeYcScqFyfS9Jp55aPJZKzG8ehVhVRAcrsEc4EhvSg4QLtoUFLijdsgvoz7Pgku9ynSx9Q3PHxBMYqd4kJAtiu4",
  "key17": "2EJaTJDeXDqvffXzDuxHJeEw3QmtrbR7vJDMsFtHviWqDNXBbNywgoPsmEhKz2HV7gNibcMDtMuDjSx1QwEtfc3t",
  "key18": "6uNXvJxY8wm1VwfVnnVSXD3LZ788JsPgUuZeqc29n2uiXfezkAasCoKpXFSZ3876iUrAnGF75ci6PAhnNeSExBN",
  "key19": "574WxeypXDicuURLCdQHzqztqEuuMuDuWikZXS6YxBTkGjw8yH4hVvUPBGU2qG8wEiY7R2VvHSYtt1ohc5WxKqi6",
  "key20": "3V2oqfQwR9TcyVzFpAQLq4oFv9ZpUvCGvzwDDLfRMvYgJi28dP5h2oRg9tse8Sxwk4mHxSCpmgtxBHBCnnX4369K",
  "key21": "3zyrkBFNpFMFYVWMgAtwo17mbkq3VURwXhmuYRPGWBhryYCr2gaVemCpGiT3bmFKEe7RY5sSBwehKXGthotpdvVq",
  "key22": "2jB5Wb1z3pmJ7UaoLEevxM3kH6mmiTRXG13BezyzMoTCrLCP3UsFj4XrMRPsTiS61GbfW2xMFWJxvhEACrFRbefa",
  "key23": "44RX6nzi5m9jjuL8VhAAx8jHqwSyhm7wrcRUcQaYTBC1H5Npr1ddvz8PXcqZyL3RcxLpmesGJGYQypCJBio7KfDB",
  "key24": "4gtLgvnN8b8b5L5Er174vYKvLSBnaZoFmdQTL2qerijSkehDKeg3SQYhT65FqbmNzFWPPddwKowoM41WfSU4vfz6",
  "key25": "2Y7XHH7jmn3RSGVLuVW6oNxrUdZAV9jXKxWjiSwLj3LsDV96LnkEZprawFHRVmwpxipYpRmzHk6VgXUF1iggY9YL",
  "key26": "5ooa1v7c9PALDTemobYuvQnGAhY2HzZ9AwnSbWpbobYbbbKHD7VcRxQrffEmPnVfDqb3iwyxLfMPWGXBXj9cw8es",
  "key27": "3fdW9goW1nG44GTfE8CuemcjkjauxxfsRV6KVzkmREaun6koMny4ZSoYbSL6e348mXjCVT1g62pJsKqTcjmubUkz",
  "key28": "125bS6zsKw42aM9eCYbdB8ueVNsow5qLqyLPeSsq32PuEKSRS8gviuhRyiA1vQJbuxPDVfyxc7S1bdKDSzcpB8q7",
  "key29": "5jHUsyFmSbyX3GdyBQLRog68Rsestaw1624tpPCsWjZg6sJLvo2gTuMbA5ijtd62toDxK5FfaKcd9x631pxfWSWH",
  "key30": "3KwLcNPJ9qPLuAFVJKn1ytZrwhEavAwhAkhkTsZ8JZ4xBqaGQTPFe1cEKZBFHmiwi1pb9rRn2uAZxepQjXzZaiYC",
  "key31": "4mATm3VSfWnWq9NMgJn17JmYtKbdanPft2CBmaZpp86UMyu8NWbH8x2mq6Sy3aiDyQVu3Xb1i33MNBTKkt1padNQ",
  "key32": "4uCsk2zvUM1oWq1rmctPsqULGT9ZzAJ4TLHf7apg7dzCVub3ptgFz8jffi4wf9FNFAFjFcVT1WVooyJ1m28TmJw6",
  "key33": "4RC4W2RBkYx6qpzkHDVvdduZ4tZa4sbrJmpgXpBDJyFdTKj4jsQvw6FPnLNhBuRfVs938vXfftpNjNsQeWYzxL81",
  "key34": "pwRTcuLRjwRhPwihGGMwy6czdtnYqYR7YsStv15exjbeneN6Z9qBb4hUh71nRJKpMLWM1UcD1uZBrwP7hEehNZY",
  "key35": "3sHJUrGLSjExhfLzG3Z1mPXKqy2UUNvApRWaaryZLhGwKyyC4FDT9VFzATTe4H4ACQgMefVEMAZCcTvkt3FjcJBc",
  "key36": "43z79f2qG3SvZ2xB546uk1jqCR9PRjfggsfrKxzPPMPdzK1cb9qPYPRseketQLZzujjRT6wCyhFknWw6bD59P1GL",
  "key37": "24oaEkF5ynbjZafjNzYKNe1qjxGFPf1vxtFJyMWLTAyDv4MrkM6cSHJ9wLTXFAb3Si8mqYbGihqGqwEi5dQpFpUS",
  "key38": "L83BCzYV4mMBmVaachNd9FdA3mxL23X41bXNr7DcMwaFL6TSBiKXYVU5oHucWiVNbh3mBwGurab9oJc7N6yWKKE",
  "key39": "nJPaHufaNgV55zS84xEJR23Q2954iwLyAspAYsqwUE9eqNaRpHY8VTyTJ9EJqsYLwfgGgKnsYzLpKXXQfpkRrog",
  "key40": "4JPWKCAh8S1UAZ5aPwYqP9UinvyAnE65uKD22nZ8B7fvuJqrh2YtAruLmQ2YmcmFkp74dos4P3DD4ys8JG8XMdE8",
  "key41": "Jdhjoi51WL4NJjupSoScaNPyx1cQrQxZX5cMrBfEh4Mome6uqyWFABiDU3AJJF4LiMr2YC5zCqdQNcSmFmAUDXN",
  "key42": "2LHFxPjTa4HsbdrtzbaJwJJH1HKdpPNPtHaVwfSj648VK88jwihDRfewNMgbmxv4j4pQUwWm4CRNz19jWXbybDgP",
  "key43": "4zK4Yz4aEzDBjFQFg46TnXYugEmFEgCVtUhUs3MZRQ2QbAYjWE47cDbFPhwpfbeTLka83qEdydMBHEjuqQtCQmKj",
  "key44": "4Dth48bqgEGhghQLBn25esN8ohcCwA2nR3TKR1haeJMjAwVNgnDFuHLoWjf5T633kumrTfGdqh6A6bK4d8WjgRTV",
  "key45": "2AokUtStdRNhVMcQkL5MQ1z1eF9E11c9orBNiycW776EZo5JttY6dtBaNP7nJgi5TYqcT3rZ4QmcNum5qoxcZHp1",
  "key46": "43dQE4jco64buVXmPQpGnej742xnfRdG1RcwqhhrhP1JTXmgU8mhSXWPiyCCKGR2bvBnzg49ubjgpGJePdMUT1F1"
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
