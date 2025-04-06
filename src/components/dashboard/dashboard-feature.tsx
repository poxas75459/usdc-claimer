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
    "3ieFaK58mUDFwFDuhesmoP9bUSvX418sSKnrFsAA9YPqZ81UaFiuUvsny18pa2WrqBtqJM8YZB3fvXw2Bw4yPVQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yKF5qWA84mUeH6nUQNondGsQGSdSzGHvAvbd3Gfy3gWC9qX6xA3GtpiC1cbnCibhtRgcPPKJ8EtL7MzsutPJoSc",
  "key1": "32UoGpixb9qeB4LE9omgZ3WHMFuS6A1WovnzpJpD1tSvsvQBXVTv41JgzztB9Q8UqYCzZFArkw4p2g2k3bJ5jXdD",
  "key2": "41R1r9SRQcRs8U1pRN8Wk2CsVPJVghF2rSZWwpv5zpVqsbNhi3SKJ7aDLxQyq1RSREnTCiHn1FQyGPwG1oX86WYA",
  "key3": "3Y7UW2XhszpJNqCPUKpHXgbMiMQqkLu3ibDGn7JJJa1QzuGxvKXETSsnusvXQckRVuZrgXYbF4vdykrAJ9BVwtVD",
  "key4": "5yPEf1fpBBYMAPWYd5dcspdekmvizw1dMS9oCvxnWNCQzqvxi3SYQXmPFwBQTo8UpNRSkmH4GXLZ4Mo4A5P5Kti5",
  "key5": "57de27kbbNhTgXzWoMiFwWskede3oh8cLTcXSzUqgEW2yTwR9HwQ1fBmb62f2GueeY9PibJyah76i3XwmvjzyPXh",
  "key6": "3w8HhoMZ8vv4s2kaoV2CLL1vaUYkEjn2PCaJCvmSQzwBaBuikq42RSk9UYGpsAeiZPwftt6ZgjeetU4JfRXdde4K",
  "key7": "5HJgGRRDEeTABAcjhHmGAqpW1svzpHd1qieFbJo2Gszq7PtjL7zschf6AmX13x6UNgQBWsPUXMhS1HXMyF28zDZy",
  "key8": "y8GzWD9A1rMSxbeV2jREhshMULtGvC524vckYmWExH9q9bDW6ykE9bWbdXTG5jndZTxhDHwH53uJVKBu8dn67PX",
  "key9": "ZEWiCrhkDAbnaHXV282SJdX3Do2dLDqJ8eAN4ZypHM1mQPKXtoSde8Jxgtf4upWSThny4Tih2Td4nsVtM1GrY7g",
  "key10": "3iXhYwL5ErKCWF2bYdiRY7ri94QzGD44XdDoeCc5YVCX1jk869feuJ3Cpq1s27z8fwnaSEU6zdAWYKkE7eUijJ2p",
  "key11": "c6i9vGfkKCC4wUYsLnRGZCuLKzzPAHjjM8Y1XQjzfU5rsMknPCqLE4RpDdEk9b9wRBCVdGW3nzbkhXeu6T3kFhB",
  "key12": "4iMou7Y6rH1MEePYfGoVZ2HJVk1z6fbR8ztWHHaX42oa4VhSizTdXzhLKXwUvJjospNaF8MaDcBQfQ94EdJjtZ8Y",
  "key13": "2mYQo5AfBr17wmG4tm7Ju736hdgxJxMBCtDkB47BFjA1EuDYXUeQxLhBfhdDfSbp3e6HTH76hHkFNmzPhFbxLuhm",
  "key14": "DFotZvbYn1qERWgJvftZCdJD7Qm2d2BHmnqgLAiYQHnVCquDfzWQYYQbGrSXBDnpukZm2GmkABFdwmG3EWUZY9g",
  "key15": "4xX3wYFuEggXfsKtoFMpxT1pxQJkJd1DUeEQtVEYTLLvGDApNQRuN89NoDCYH9N8VaiFtS915pmxrvpFYr8QrxTK",
  "key16": "5ArY5cLAssK928Vg183KJy3sfnVUYbW9H5WUEGEU3iKwYhdMWFCv4ibsiT9CEo7HtCkoCBQ5J7gcJfw1racvsqYc",
  "key17": "3vtMUdTfzZBhZRmLAiB3wXujrsyZWA4PEnE58FRFN6dfAoqoiYN24U2fv6m1QkgkDJfJwLNNNioJiCci6vUZMp5T",
  "key18": "3CwDHtt4t6Ra9uYAXUzxrYPALygGEtSisuzaZrQNw45w8fjFMXyQtsDVB9Md35dJv5zzBrcJZXRHaBv6vtvAybH3",
  "key19": "rss8htfZgVp62WVj7unyDcUY4bZLBV6CBp4kiywpWSg1DSUXFiYxArt4CvnUGp44V26iQeYm6KwapiHnGnKSx2G",
  "key20": "5SxGfrSXBZvG6fHQ7MvnYtg3sr54XgfyNqReyh9k8myBY1fSievtMXZV8LVtZm34KesnjCcbrVzCz8UK3AJuC8fW",
  "key21": "4YeuFffyypJVDSUiwy3L3WJ8ezSFduTocnGhvwn6afw5y6SMdb4EivEokEhhZaQjWA3guGD8wrJ2VFGJzGwLJhpq",
  "key22": "2Qb6AYPLxmFibE4GjVoiWcz6W5ZqkSWz5nyNFSHDqGLWcXs3GBYbKK3M3ATpmpmFtNPgWDrqhA4NSrEH3PqVtYtY",
  "key23": "QL4k9Wm32ssB9cHZBpxuFmvaGFWAE1EJPcUqcxxTwjawj5fHarB3SiUVCCvJuh3GWvmsTCDpVVv88tz3iRCcSwg",
  "key24": "ZpCpvxmAbDvxucqmaoZDcWtzmiQ1gSzxancrS5ckCcGrTTSKdUTypEnKKfJMQbGSAfYyABjQT6jZPjzdx9vY1rP",
  "key25": "3YgR4bDzzuddeA5KWdFAFmYCYJdkexiq9axQnbUU1s6XPXdbdDp479BwktK4C2wfhm29NftYo56riGtArWuexzSt",
  "key26": "3LM3onZLPjZfDQwXHtWEtp7fi21Etb8K49oAePg7fNRHknuycfoi3cU9NzYVLZ3QJq5cRFjfoEKvHv493RrgkLFy",
  "key27": "3yEuE5NqUtKfn6nacgX4M8GW8B2LxvjPMdpSFo2GRe2V6t5hrkW5sWBaTnYw6tndsWFWwYYJBJfaKqdPEcZZjDV3",
  "key28": "5qQYm7ndPY2jrKbjuEBAuYA3YX27Xm5q1eQAWyZNMJFSud1eMboRkzdawextcbQywhepjX7LZ7mkSRuBN9hvZfsa",
  "key29": "3LJV13K4EGTA652xWi8AkPYuF3g94gSnvm9oFqjRc7pFRXdDPApoNyZcs7Pz7ucswfi4HMGZXaU6EB5hqL1xjy5y",
  "key30": "3uewbawQ9zPi5b7wepqB75jg8gAjuKM3EDUEi4KPTp7NJKGmqQEYia1n56Qe4d1CocwfaL6Gcm3MQMohKGZzEeta",
  "key31": "R4hBkQXRp55GWZsLbBP9d81iv79DnV3pYyDEh6mYqXCutGvDghj7xp4ugVJ1Mf4Pif8Ht9tCQ5ByoRuJEMQ7PvW",
  "key32": "kJpQkRH4utgoxX7wyeZTx4BNUeNw6KhqQvwYYaxR2QSMU7LBUn7GrDDm3LkPmsiMetP7UapAnjrFZaqSdYrJygj",
  "key33": "5WgkukSmFR2acbwVxXQDVxvnYxfX119K76CgJ5JiWAB2oTAXZeudbh57U5vWbRguBVR7v1CkWVH5tVxcB83HDPx5"
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
