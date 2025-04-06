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
    "ad9Qb8QKJFjchNcT7kFNtsBcFQZUmQAN4k7axcmD1tvEyoY3kQbDwF8c1PV9yJh5xn4u4z1Xz8aSqVAgGmE3Rza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrTce7Beicv2eewg9ia4ZZykQLPvLcvoSWg2Lqhoz4uoL23HJ4S3rS4HLoLKoiN2FeiZj4bVTuKvFvKGNi7KuXY",
  "key1": "5LCGA5BipuAejMTYrN82QMQCXzwanRuix8NmtEThHg5wEMQ3CQYtPmJp5AcKjDEuM5U4W7VCQcmbcDyUjktuYX7N",
  "key2": "5Y1CHhKKmiybG2ebyov4fVPvwL3yJ6EJVELWR72J64L8PjEZ5tvhDmjkkYaDzWSn1DQwcTAfUWuaddMeFjoptd24",
  "key3": "3EQPxScrQkfHRcxq1DzLAMnXzQgnXyqoRr93Vz7EuNv5GFzeT8u4yKefdhwB8Gzu5SuiZXDBAfkUz2ebd16Zuskc",
  "key4": "3B3mTQDCGLNtqkBa46zvHXbKFSTEnqfwoa41QDHiBMS8z8U3Km85VhgXmGfkH7ikzvr6CzfuUcSmjdsH1oXkWMB6",
  "key5": "57fAmxdVCww6HkgGXUdXbd4PNi16eibLSTf2tcqustgMbBwVLGD73LF9CSCAJ5hQa1NReiS6GdwdUBcyBP6w2WA7",
  "key6": "3PhSFJU4wh4DbWrF7EFm6vYdejWgpYjyZgrpPT8p7GaAaCftefgrsH2d8z6U2YGJ62fUR4bqhh2YG1nUAYvAuZFH",
  "key7": "24n8EM82HQn3uPgneGVkAS43CFKVZnVzK6uQkVenMpJUgrrcXgjFNf8QWkDRyqbv8BAeziXZ3Drhxes9kSHDDcuZ",
  "key8": "1288a1FjfboKiw1ybwehCZuhMcswXyQXJzhyhytiW8hFpA7f4kWh945JPquYTHJAMKEUczcCF5dVvfNUyEKCT3mA",
  "key9": "42zkSHn1p1quxqPmCJKo8JeYyYpGMhsgjU2vXDEKGZinc9Y73mEhDSFbpGHwcdo5sFPTP3AYaneJJ3QK7ED9haKU",
  "key10": "5m6CVfSEsqrefz4FtEoNPpdhgHeuzgPP6uStLfqj5yTvwCevs8bt5qoYTpEoB69pqxXUk9ubMBaHXHdUR2xbwCga",
  "key11": "5ZBFnW27siypymhMMv6fLK58npUueutD7KoRJ2qLKwBBDUGyzqzwJVpPW5ACsd8P2y1EKe23fARmHUoSqetABZWN",
  "key12": "4VfuQKwe8dH4RRrxmebyV88WaGz6ibC3nYevmDYbTkDQT4fXVYBB28VtjNrzJamKokMvFFrjUQmQjDUiqt9ZhuaM",
  "key13": "3GLtdpKduCSa9XWb4UerErUvyX495yEHbueZ4nSR4aLBrbrsDjEFAPic3ggLPPAUiY2pjgttjVJ5odCszHh2XsXe",
  "key14": "qqsEJQdaKuRVc1v6J9hphRX21brRdcD8fjw4kf6iJdsAZXXQAWgz1orixXwXbdUz57ec9oUqMKqkCwffzr5XRQC",
  "key15": "fEMTzFdtMzbFUDmijC3SZfvmGdQMsoSZDPbPo2q3UKvhoxQcFmSKy2A3i8rBBuMfT7V69qH8mMUaK6ySZwpbeM4",
  "key16": "3kmwVxh76cswu94i8YyrHBcYY2YtqB4JBQCNPhtZytJF7V2upa7xPAvPg9KAQ8vpspQH7um728c8x5FAkLcUZ7R5",
  "key17": "2To7GC2frMrPC9dPxzGopkjufumkRUVMCAxfTGbmhUqwa7rfmBDnGH5rRKtyFyRxe7nnCNKPjDwBXPbYMqXhdxwX",
  "key18": "58DJf3Q2MqTKAkEXcpZL9cZfiAPxZjr48NRqQZ6Hjs57JcQTtX8czMXFSJDUXqurJR5z6Ywgm46KWrEHGD2ssMZT",
  "key19": "2WJr7dcANVUcgZxFKGJhiBsFFUJkhaThWmGpxdz8tVCvTRUbuRJmskcX4c9Ea5FDJ2wpkSAR7bENfqvjeEktNqz9",
  "key20": "5fhftz2JLmBjTfdEwBkQm5et6m5KFL6B4hqLnVc67iapxSgHgx2HFTegz1jTNf8eN7j9nwHyGQW3BzYBtJooxaUG",
  "key21": "2bqv8EHDe9RHkJP2cK1XdMmf1nK9r5THzaZXkzLLeP9PbTgxdxaN7ZFr26qxaPsFkQVsJZruALNKYYEvYmABzWyn",
  "key22": "V2EzdeELwduR5QMD17BYuW53oTRD968ix3gtCXoYcDPLJF3Xwzce7JRBkHJ88mPjhhxbnmijspqu4VTsJJYsArR",
  "key23": "3Hf5j398NnR1cBDcD9pHx1b26UFxPYTG67fey6gii4QC4JNQsR8vqrSJsADjD9U1i91z6gxEbErPKFRw8VLncATy",
  "key24": "3HCcFUT136KGb3zrDjEAX8Ri7vY4iy52Uaoz8rndtyM2B9AKymv4FnvDBDa7GCRWGPLa6sgex7ccen3fuSJrQVfb",
  "key25": "4nkRi5nK9cSsqxfR1p2NPVaKBwwyar4UkQW8JgKZ8dXkzfya5CqgBFYqskDJp4fkHrYB2iqe3PUpywxoxZ4txFM5",
  "key26": "5yFwb24zdoBDkYymm4nUeyjEcDDF87nSWyU3tZoCgtz9iKkiuKvyu6kAa8ox4djNLrAU9CVJ23TsqgeQYBJhyFgi",
  "key27": "4BYEdTjazgBpyj9X4pZTUhj5zC8CzdzSm2MpcbUYEaqfFYMDRmJbnEtFYka19UDDiJXgcvizepS984Swt68wfJxd"
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
