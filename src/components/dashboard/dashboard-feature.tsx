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
    "2VJdHA1TjBLvGE2t5usJF7Cp1WQXdrSWNQLk31pD21HTVJG7BoZB6rtvdk1113GQLUaGCVAzGEGYZXKoYJ44UPTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37G4pJ7LCGLMJ2NMAbigCZQZgkdynqGrLFhAGPD62Q1jyeXLCEf3FT9jgswwLHHocWSvTuProNthtZPmqFD61AJg",
  "key1": "3iUEqj2mCLjZkBAoe2rsbKgW5tgkVa9K3nHFw8XSwQfDXaB9DVgeiBUnZYvwr8gjaFJGcx4u98cJv4EdB7Yb1vsm",
  "key2": "y4tEU1RKnMb3ywEFVMXSSLdGDdR1Ja8A3tZFY46todoWsJuBncpq54CTpcA7NLnkRPk6AJj2oRDRLp4XFGAPtX5",
  "key3": "5wVSY76qttzDvwsdaUHSJy2ZF6ggxmwqpA2Pc8ijjuUFxKLY4Sez4XnipuKitKibkH4SAbLD6BPAYLZEMvQmUYW8",
  "key4": "2oTvNhYm4XfXAZmLhzEXD56nUXsn6s881ni53eyyfNF5o1apfG6WQPzLHmFyMV1UY4n5AWg9CE4XZcjapXtmsAz2",
  "key5": "3BpQZxyL1eRuyZZbQVYtrnrnpxTU6tMVbtXjS6LpHnjCCDiaSqNypcZdZ548y3TuwDkSpz2WQHXwSeWBXvywrTYt",
  "key6": "5BG8NMPcXmj2SR6c5ojF5TZPcJ6w4rGcEQTUJfNNp9WYjHmbHshsu2Bagbh9iCjEbgnYU6SEdMw4ngmLtDCWTNSW",
  "key7": "C9bFnCHR7Wd2gkhhCufajhoy1M6fYCvAAMeKVzjGs9x8TueZNAZzwxcAj5oUH9KsMDTuMASzudYes9w2DMMtDGa",
  "key8": "beZq6Fi3vx5STzCvtD5kJAY4hLARu88sWHRrUL6iYHbrrAmNz1goHjxH8JksQQksk91f7XbfX7uENELQm84QS4m",
  "key9": "4r5akeAzPgQhHWXLkhPU5pdQ596AK8y3xFvzyUutDDiRX5UTCJbsrokJ9Mg8okzr9M57ANJ6qUPb5QpcTTcAvM1a",
  "key10": "3ZPWShimJ5oH3uttkyg8FeNArbJWvuxrMrS2qy3CFctCafvrtfQVsN8yigm1gXYfPs96dGWAPcbmgZnaVNfH3EqX",
  "key11": "48ttAX7itXKTc7wLgqoui6oWbt1MZs8PGkEswNZFqWcWh64eJVxFNhRfHyuC6UQMUR2doM4zhaKN8GjkwpjKJJqp",
  "key12": "4C1henjEh7YfeicXLCzepxZ6WETZdNkWjXr8jDJuWpvWp3CxbHtDjtmEjVxZaYVzStPsutXbMR8gPAnLCuB6jZfL",
  "key13": "29NeKj7FQx7a5nSP7w684V5gZou6tGx2YA99ifTjjbNkrLb5McA4FUMWpeTpwm5oqmu9j8W6y95Rha5AoUHo3fTt",
  "key14": "4no1oS6UAWQYNaiADTQPQuwkWboAi8WnKe8yT7SJBHuCF4J6GfcYQhUSEAJYmERfwSGvxA7xBYHrdEzi9G6rfU6q",
  "key15": "q7iC64Y1H5vqDJ5eqAE6jKERkrg7vmV4bopjWhkHEMwHeS8xEfVb9m6nSLWRrbi7C2cbBKHvxdJiwAhVctywfoQ",
  "key16": "vYFAiWeZthWr49fh1ALxisNkHnXEFHJBL5gzKE6sB3eTuvWnKPNBccfA7X9MttPZS2rATPELwupVFSb4pC8UMGs",
  "key17": "4Sd3UPnhbWG4DF7xzQZoeo6AKph5bYwyp1dMDZhSU3Dvm5NDRcPBccssusAG8VRoeshDg5Sc9CvtLSomcyXpUCq2",
  "key18": "4D9nPBBwaMVKXcLinUrJzXCwxvk12soaNjHvYTLqc2rK9LBL63sxpyyfrfYDNDD5mWQ2A3gCCtzLVbr2HPHb9aQA",
  "key19": "4F8RXGwvuYrmb2c8HsBLxTMxbEzxoVsesBdF1kTXzCW2FKD77odf8ddZKb9pw13Le1v1j3jXaFsTP3BettrK2d81",
  "key20": "9YbRcCJjs27hEMynPo4Bvva7LpcvdNCECmLxAAhZabjQiv5cTguYRMhQ6vz2FEs2GQVjss6KiFbKxR4wnrVqzLr",
  "key21": "4oxqAgsTxFp2pAy6HiHvh1ihURNTCK8pDhr8jhSQyu3tqwSFWcWiB5nfTXPxMAAsY5vkXuPrxHit4bta88T9kgoy",
  "key22": "3eJPmuYKuZoK1VZipapLFML3gcQjAggCVRPXGLeXzxyE4EhUrCfa5HEm9AaLJ6WU5uvYpaCnGHSSCGDFECsBcZW6",
  "key23": "5n1bk8Y1w6qXMdL86qAfc9iz4tD5HzJBzqXzdsPuA8i6EEv4B8RJEN3cn8guRyXmDy8tmB9DfJ7yW4Sjvfk1ZV6Y",
  "key24": "KmwuVe9DGwGV4RxJw7k4dk559vML29VaXDoaNmxmWviMg2ejEfWwawACbukUf27wL7DcVKkz3TtBAivoECP1m6w",
  "key25": "2wzHUssR8iWYJcmJ4rNUpMEgBLnYzjRNo8sgSXPMsSXEv6Mf1Hsgaav8o1yYWGnWQTFo5rKfxNKoespdzuk8R5wU",
  "key26": "5vwWLKgFNEapoWWzwtonHSCiL79p4MwYG8pJLzuHsc7GmxxJfgvHdNmXjVd8gXN1mdGW1y5hddGoSZKdMqA8Gv7f",
  "key27": "yXLRVzMsJtYNRueq9FS5gkVgj9AuLziyum3vwC89A6buvcudwH6eScLHbtbpDnGE6mbFp3uSbm5reWYRjFYiAoZ",
  "key28": "612RtNEne1U6zr5Cm9bZLmVDV8dvujRTb5iFwJJ4sxHCJHBoo2cw3Eyk45AScktDXaie1NgQy5bHN85rXvhWS7jG",
  "key29": "EuFWCtpunGLuuKBEFe1CcywXHPTmBKbWatyh3dhiGJssNusGYhDS1E1dfmctLGFuWq62j7ebu3VkFYmraSuhBuz",
  "key30": "ShjScRy3h9gEkgmwUwGPjvefjMANZXC58Ko13QuhVwWDbsWCLH6fkFxo7P1UmAMKUfzsKAPfzUZVExZqQuYanfq",
  "key31": "5dMstHMcaXwW6ibTXPWHPjW28UfJ6UwjV3gNsG3rrA679on2aEMgXQJTfYM2ikT3rQyGbdBbXRPBB57K4wv56zxQ",
  "key32": "3Km8xZb4HRa5y1oKADtPtTp1WHJvPCy6vcCtCagMPqGJvqSyh5WKttf9c8G1nyUXpSsDBmqBeb7A3towVdnbYVRJ",
  "key33": "4C4PP7eJyPMqCY6EayZ2M8NWTbMYZB4qifQhJtPHEf2iRLGQ5M7XYuLnuxGmS8NCa93reUqJteqStfrP9KLDQR8D",
  "key34": "YwTNHk4N61rsxBe2eXqWESMiwLcEWwPRfF18A9NZ9bhcHcyVB9dnieD5rRu4zxFmX4Rfxm5grKZNBFdEbApAhgo",
  "key35": "4fidDLQ9GtM6U6wwJ5UB7QDd3Y2dGjgUgivAwFnmbgh4ryPNpHuCf8rZAh6mWnUNU8wJ6aRrfHR5ApQjeAJBvhwE",
  "key36": "3dskDb8zRyAvg6QVGgXw4vheGVza57jW4H8JxmtojpegF9JnWmPjMjxVowqVNYaxufDpGq68eybGRBDmPqAoRdyx",
  "key37": "5aDwAD1jjKEjiopVvcfF6nc9DkvEsk6w3dWdJ8dBJy18v1rb6i8xvqLq4G9XUCzJT2duW3sC8dRHhjeMvKLjqZ8H",
  "key38": "2F7kA3U2R2opDQ8HJqG9Nua2z59YJruqbbXhoi8vysyJ794syCKcy3ecv9W3nEUCKPVDJFYVSv44UbiKVBHtEJGp",
  "key39": "2Cb3WBspnbhA6rS3djVcRQbeab6VHfgRSposoiemHLKF8rFpsXptHYGkYacBJ8ukwE3tK9ztaGaY162YcsAX62R7",
  "key40": "5f4uxJszAcVsTjQoPqfGnLc4VKeTqUCZgBZLeJErzmk2saNsxDCxDGK8gdncWYTLPjZSt3VqrX5eHz7JvAK97U7e",
  "key41": "2RYd4mDjAWozWS3ogCcStXYrM6crwqdfatoKYEFsZ2LF9btsjAwUPWYgJjsxpTgcvWwdsuLUCckv8B5wtA9s6sDU",
  "key42": "27ykUsYfxobFRsrRyQ4iftjEiQ2VPzt2VJYF58xEQJRAgyCQ4E8TqWUEzYDnLhXSi1856pSKbmjvqXNLLiiZnxvb",
  "key43": "4387NQTzGyZwhjfGtAf4N2UwTsfXrAaTJexkB1JuwnnUPhzdx2awiXWsVhfkXh1jHnCLyvMwM68CvLfgzUotyqum",
  "key44": "4uJFL3u3yrqzEsAX79nWanNMxYKYPYzFZQwFWTje4NMfNQYsU3ikby7t1sMZ9vhbxXrgQWWgnwrt2qXr3Uja3N6H",
  "key45": "4C75BjAgA2qqDJP9W7mJP3sSKn1fHgSgqoSX1SdRJKrpWfgthJ1nqELS9Svf3PkTpTGfmy7HEnxL4tQu8YZ4RWSn",
  "key46": "4RA3xa939XAWRapcuYd4s6DD7HwDpF23SyJWGxdWzSvmCXHQnaJZWoWJhkUTHKo4yra8iqiTooEp9uQTSfNPivp2"
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
