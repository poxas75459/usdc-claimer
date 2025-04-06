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
    "5BmfHrguJZFrg84cYH9uAG2Aa8mfUG3faPi3GXNpgD5PgnT98NNwZcaq7t4RQ4ZigRghpiQELLx4yxYRJmPV4sgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7UpfxAMCt9ESrtedHd5eXWuoiVnBuB58AdzRAxSQHhiwnrr5BdcxW4T6YoNEzAA5rjc7fs92CkKRCPx6vvmS3V",
  "key1": "3V216kYHdZrnLn9iPq5FS63tM187UBYe1G2m3aJATG6A4hjySb1LeF3LioaFfxKpyMrLkPCTwGquSsEoK643jSUh",
  "key2": "4dyxTZGx28VWBnXhJbtgZVQYZVGXcEtgnUxACqYiDayKxswU7kh3wFNnXj9mU34F8zNeZEczvMqKJvt5MpKA9d34",
  "key3": "7bNRVGSg42chmMhE8xywQ2qKE4geBnxxvsoekJk8JpAai3GJvEaq3vaXTiVCnXArT1qz6mQYCN2NQ6ttTKn2V3v",
  "key4": "2rKpWoVhAD7ahvcUkfrcNGvmJN1Qcy2abybBSqWfdz87HLdaAVw2wYUYkr4tA5sMWPUVGaN4ETYEj7sZwKrzheRH",
  "key5": "3qDhz1f5Lx9ik6NgfjZCh97VXtpAX6qLhSNAypDByxnXxgCHfL4qoFYZK9k1KHtnm9Bbnanm33puaChjKWnPzsjH",
  "key6": "3CAN9AsR3TFezwBGFb8xRQe3yEU7dnAfYou6yenGGGXJ9CJCrs4E6L4yKU67oBp3kr3gHtTKkJk9PZtyWNJMyABF",
  "key7": "2SkTJamw74sFBBeQ6kbXpWFEL2w7mGdmaRVfjhaW2xS2YPayh5VPyPVJ3NeC9Jz1GbAaYnCK9kGhuxhXem4pT11k",
  "key8": "yK9aQtVfN2z6uPBnbBdxj69oGbuipppk5AFoSuQgF8dVr6WKrgTgGnZtWVMdHo9WbbEtcwdC9CayKQ3uuRAbzhh",
  "key9": "5qRbMa24brFADVgCXLHwB2a3Z56cVbvReJNJMk7M5JLoPDb5pamMhZijQ2iuVHAQTJT7wYBrv1gpF1rdCVxEPbHg",
  "key10": "28qXzNZ2udbY1mfDHTcFY3A9Vkwr1Qddq85DvJxW6r353DWKvjeb19JTYBfp28ejvNGyS9D6jZntTKXFZ5YnphXB",
  "key11": "3kNtFdDrSr8b7jhePAAoSYFYnuYD8fHBTCcN9BUuEXcqSSsdJv6fDUC7fKDiae2PVPbmAYcrig3EhknipVY1HV2Z",
  "key12": "2CFGtC7WQYAVQMFQsioSZumaK5hbyD4XCGvNa8NbvfERriePKbbkoHEkvcZBqqWo4DeVQpDdcUTTYYrwGBdASG1P",
  "key13": "2U2nCXvi7LE4FJumLDJyxgBXkghfmc44BDjBBCHfCzZpHM2sBh7XFQBQXy8qhnZr4UURhhcD42vAUxc2qwnkeZNc",
  "key14": "3izAmUCG5LfPkZaqNTt9AcMPCgonoStFTTkoSGLnskzDMFt2QWJ2GDBNR5mRUJKPBRgDDG7XUDV4w2etfEhYuK8o",
  "key15": "4Nnerv29gcRkZQ7ou9bq69jCe9YFEVKQTkbD63fauhFEMP8Xy8hYiGh3y8A4Y988kKJVHy16eGW6mjpQLh6ram4b",
  "key16": "RBvUwZnMhH3yyhPUGiNemuuoQ2vU23kEaxgVXjEFoKTsWjYLJf25R5YZhvBxaLFNTiwunyr2DsP966twmSpxzim",
  "key17": "3cWV1NJv4JoReuWB8R9xqtBmcQFX9xgb75BDHLsqW8cNTBtVGqoR1tYBXMBeaSNHKT6Ty8GXHLWBirjoTDxQWZTj",
  "key18": "4DgkkaHcWscsYK9c2wsVZVYpqeftKQVQFH7JPctq6q5rTu46WWFWSyxdZ3BnMhSCabftr7j46UzkPDD7mhMphpMx",
  "key19": "2k4WmNRUgebNCwc6Ctphoa4oCRcrEFEFRT9k2QuDmAMYuv6SRAPnN4XVDexw1LKN2FATi7bX8CqXsZ8nGPcjAKqe",
  "key20": "4tLZHLDXykosPkWp6mAe2omYDoWBwopnsHRsmU7zHZdoyuX9GCt9thzE3rym6kxSq86xXTvwbeG5XpsKVKTo2uSh",
  "key21": "2azBhHTr5MnpyL7tSg5L3HUqbsKcy7Cpt7LWun4LmMvS28Egt71dNcxotVcK6gBrvTHFFgpgHXS4bzi26WWKP1kC",
  "key22": "VMnB4entMVVKPzojRDnXqEV51WYUc4kgVBGciXhr1i9sDDxAnrq7uryjA7WhqJaf1ku3zm4Xz66jxvKEJeWD5s4",
  "key23": "5r41HrZ37AVjiMgdbfEaRpapLNaZUz5w9NHGquXez3MLRBHdW5o3mkJRGcXouDNeB5dG24iXKTB5gow5tobC59pS",
  "key24": "43TPHQNRmhuJkhiRgfdt8GM3N5KZL3N26j45NugMmN5wJgTh7ge8QthwZKkCTSomNPiUKwDfDTtLKxcHsbguZpbD",
  "key25": "4fwLbLnnhcaD1tsFh4vf5QoydPwQgYrY1PhrxwWAUK9ouuw8JTf3SQoUf3fXSwCwdzUFajnGoJePxWatGgigWdRU",
  "key26": "4QBpokNL1ewLaB9kXR5VW5zrVjALFQXZtiCQPeGP6kTaqsE3r9rLJ3qY7qK4JTxrdZkbdM1zZRZFRUsis8JZ3hkp",
  "key27": "2GE5bk6vPQErQs7FdMXJzrXhLjEo2h282YSeQmEEbxumHKGLWAyGfRqpsbr5M6eQhQTrtZkhPJHosoTizTNkLwdC"
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
