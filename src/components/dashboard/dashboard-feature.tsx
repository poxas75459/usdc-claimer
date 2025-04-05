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
    "2dAXXurm4AY4BEwrzJpbdBreMW5nfpxADgbStpsCFpaViJTsMS15agoZdJz8N9JwpkKDEmeMJt2ui4s1pWaRE8N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ENdYuN6vE9Hj15NDEKeEd8rrdgojWQWHNZTvQ7Humoj9cWtHMHS1gnPyokSBK5sLncSw5GzUtR72SGm9gV4vsMw",
  "key1": "3DCF6RX9vGvf3t5cMqLRHjDVfn5XKara4NNmdXoEiWvEmKtdwLwmSC4uXasRjaHmph71Jea8fE7TreMDGRPJYenM",
  "key2": "2o8eJrF88bSubdKv4oHtU2DeFtC7Sjk7h98CP1q5tUTxui6DBve2hSLHv1hiPjFJJNFfqknrC6CSxfMswWsaRaVu",
  "key3": "4m4vEq8D38KCjQadEpqh4QJaNa9KuANxx7buxkfSpr8PJnxFcCztfvCzyH6QGn2cGDb1P2LuTTkkRtN3CVwtnrdB",
  "key4": "3o9a44H5fRbMG5Vy1ofDbCqcas3KF4iKFpYHc2y97zHYeV6gwWPxNhU3oKy4nnqAF1auGqpcprVdFi5jGh26Nd6R",
  "key5": "5KYWzsxPZ5iEdBEZ5QVTmrRtgwuxwnQTcx1912QWa94dwZiwFA8xKtAesoZxS8AzUhPMuv7EV9DqeGj4mRSLemFf",
  "key6": "5tDaMDyepxLdjicuYbVauj5HfyGM78MWLRQZaywnAdpzovx4Rfp8juY8RATBAPd9WixWp8oYHkJErMbWmeQYVw4n",
  "key7": "2iZ9wrR1At9d2x5J7pYASxMiVAMyKcMm3hfFCofVTPnXvkNtKFSawjLaZVY2gMD51y2UHG882p6HE3nXbyrwnUYC",
  "key8": "3eGWABDtkzFhR3Q8FdqBCKpYVZMMx6TuPWdBqmRfKDYoYjXvCLrrvoiS7sAu3FjGLTfdFKFwTYWFvMv2uoecZ5mc",
  "key9": "5JBc6D2VUWxMFrp6QBcrm6eTRs31bdnYvD51ap2hmNWR28EFg1daKYXx34XNsQmdDsKKLhjcDgb8b8rGQdxiZUwU",
  "key10": "26QYDvREfS3K7MbwoqUUpMxQG38cbWXZ4rxKh5epvMwsbygmpczaxFj3UURFDuDQ9TCNAXKC57HZwi3fg894dLRf",
  "key11": "ymXWGSQYGJpcVsfmRuVbP7V6sMdNY4tKwkq3f1ydDDryri7ovtCu7aTnG9h9XbFwwah6tWrPrCtQyWx1an1t9WC",
  "key12": "5Va3iQLcvbHKRNp4Y9n7EJbiyUV2g2JtbQPug7zSAXhNX4DM5NYwrjhrZJKJD6NddWZCgg5mqCnRYYrt8HNFT2CB",
  "key13": "5XQ4uTBmx5TixWF9jwzBA3RM4UzBLsvXTz8Zvw72xZJvkcAn7eUVJ7xxDxpN3Wsn6zhsQmh56gf5U7xQoaCVysfK",
  "key14": "wd7AK1h3a89eTKXCRxFKibhyE7U3tDPKpR8ijDAAERzosM8xLaY8ajWooFvqAXWCE8X9rnAR5KswD9MpoHJa9kW",
  "key15": "5MhFoPjnfPeoYaJu3kZuHzqmuc9y19u17HZ6aC3MsWUcFrzhScipuD9n2nyr8wRCdf2yTcu4s18WKDEu4hsmtwvn",
  "key16": "4GYXWg9xuiPSjuUD975FWdsyDVFDVLvRStdH4PfJPKoxFxfvLQcrrEy6sYuGF7HQYfCunSH7NHRQhkTT8iKH44Ef",
  "key17": "qZ4sTSBeN55nhUL2VsnEwBLnzxwMzaa9QcikdRwCtCFEWxkBHKkgFuzNC8yGbTno8kerzdC2cdUfBhYivVUTNGw",
  "key18": "3xjiwWhiXW3EQrvno5V2H1pSt3jD9GpC3KFd9zNJhopDbRU5KiugMQ1zjZn5jRrkdC5RojjuAi5U5stssEK4KS1e",
  "key19": "5SkGCNWkxxbJBnfdc1xRh8AMDcUeuxPYspemCHqF5NWG4zC7vhUXFHeApfEWBFi8wgz3kwXcxZfJDvCZMPZqyqig",
  "key20": "4NhRr8oq3KQxfsrSmwhP6ZVfLc884GHd1EwYrUnNACUgGdVvTA3gSzYF1YtDYoVYJTCWXdPoy8bk1mmPx3Mwgxa2",
  "key21": "5VpzavRXsBxV85xHvgAmK2PnCpXiV3SvbEV4DYekPw7W2CoNWJ56U7Kwy31pa192i3g1TyWHU5MmFuwrKF9qGz9R",
  "key22": "3Ub42JV4N4krweYiQtgf5H7S6k7JMFDJHyJAbzESJmqqYMW5SwJMHoXkmGpGVVukrzeHGETWBvwVqAA91KfeG34s",
  "key23": "2eYwkFYCJWwkrKzHY9S9iqHaVKc3oZNPrAR2ZAKevFwY7asZrUeazCLm8G378cvCgbc7h93HUzrY8gQMMAEezUZR",
  "key24": "4nunmjPdXqQgvYHyqdFRdmYGAbtzZAuYUDEsRtMwALNcEnMCkHkN9mHmhjK5vxMbSaQkZrQsKAUkAGnYzBaW6mq2",
  "key25": "48MdgNL2LzvKe3qNYjfvW7UiLXkvxWNCMJMUUChpdDEHmJyJJfGqQG9gUjFj7Y1bd9FDP4UKLwxs9pLrtLPKhfd5",
  "key26": "4Mz2PvqKJ2nMN1DhePZphWsTx4NdQBtDLdmqPT5Nj7iZGjWT29aVJUzm4pk2NKecsY8ZZiDwmCARdwdmjZ6r6BVq",
  "key27": "M5TGF4wo46gHv22Hb7WF1S3Jm2j2n7m1gvpQvqUT3XebCnRVwkZhdambGWqHiRPGAehwfryyh4bcZnn2ymXAfAb",
  "key28": "45XUuTLeWFa2uu9z3tMvKBeYCG8BHVWns77s9LYSEPjMi3ifNNe4rJpjSD4LKXBYCt61j4M7fTu1ny7MbpZkRMwX",
  "key29": "nFVGQFSLB2BmXo4GsdfViPrbnM2W4w6H1Y6WGCpCKg9pdHbdkiFpJDV4AwAxnxKNqZRqZg8cEWUvUB1SCKMwyDR",
  "key30": "2X8116egtHi9XwA8a2A6nLfpFaFZBv1yXmMQDXhRai8F3NCfLXT33AxXRQM3cK2xa2WwvwtNE2AqQawVCoVyFkcq",
  "key31": "2oxLpjqUy7U7DYxB1DQ1je4HJatxU4sdhLBfkYLgQVZpdAsKa6kNQhwhY5J1UoR3Ur3QbZ3zsJn2UpuXn4Jgx6fG",
  "key32": "DMQuEAozf6z9XGsTYGjNZkpeMjjW3hMoJmthvxaf4BYRqNGKEpfAkBQ2shcyy4r2ryjmqNivq6QQ6vDvNH848nb"
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
