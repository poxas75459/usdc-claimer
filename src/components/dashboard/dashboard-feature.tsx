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
    "4PtXPwnFhghPNFUi2e34oMyLXQU5wFwF2XxqgMpqQD5xZ3rZFq3Wb16ZN2ywPNMZ3U6eFCT3FGN3tz3S8LbQs5A7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAUXyc4HxcBrpCWJhMd2rgX442Dr41ZthtjPnLzvoDpu2FjJoCZ3VxXp18usQHcA8TM9XzCj4DqzFWbUtR64UTo",
  "key1": "jC6TofvPWbF3VN9GZF3idXUGQsZTtK8uBYFtdNtRgRB1S8ggnC4sKT3jMiq9j9VFUb5NeXscB9XQrfqYWW3kKtL",
  "key2": "3B9N6hhaAYzLprkAchs9FGt3w4ZTc9dAc4roqkAGrDUH33p1LeH9cQSBGKwkBqxqYgTKgUPC9L7BeGKip9PGBacQ",
  "key3": "3j7nsdwRMpXSGCTxenXXj4qE9Xi4BLzicQvMz6eLKwuqGS61qZ9pEaChz4airQKPMbF7GuT4NWBdncXNHjQXP6zp",
  "key4": "3g3ksCPfYBHo78EtsWhrnXHGFqtupbvy9i9HwfYBGAUN8Cfmksynv9crNpHMtkKiRro2ZnfUbZYji8MWpY2ZNJZq",
  "key5": "9cCNAPg3uqZULhZh2TghWkcquJpNKB7PqE8rGEVrSgGD99z7DeZma2wsss5pb1iN4Hqd1U8xM4Mwxi15s44qGUT",
  "key6": "3foAKUo4zmDbkvq3WwgwPVVWMa24JpYCZt8rZGarKYVpYHxjXciLAjB3hXahR9utDpwEC7aMHMkXNQuacYUQiopJ",
  "key7": "5RTdZf1PpYwVgH1AAMPS72fC8c1mvRqsNTQqKjsutNNffU2HVnVukTgSrFcQJn4S9W2x2CyTvsMAc1zVENiTikPc",
  "key8": "5G9VBQ8nVe4FmrWKwJf29H9BppSXnNjYkupMTnJb9in6cn32JR4a7HyCTHsjoFj4PbNspQso9XrqLvXtQWtM37ni",
  "key9": "8dEkqdfxyWw5N8EA9LeKPDpTBZ6JpZBoUAABk4CKyoyocsKexsE6j56fcR6XEpvPH3M4hzY5Kegn4TbBsaAjLRb",
  "key10": "65mrApeHgQy2EdfUH4xkumh26ZGG9EPvtKnobTQbX2fD9ReUcAbFVY3wKCHEtFXdFvXmKWD3A3tRx5cnpG5yh9kb",
  "key11": "jZQ3brjvCYcKGPFrNB2fRQp9gZL8H5zDhrjPUbQpDJrQYFR2oWUhE76XTjSDZdzCHQbCE3HRxXpuzK4m6uvJ3AK",
  "key12": "2J5NVtkxpaTzWpbcQToDxNxPJfFgv4sZAYepr7o2Z2tywLzENHotumuAURA9EZH6mUzocsVEBvA75WCy5GGRyeXn",
  "key13": "5BEjHLe5jNTMvq27gqYE3RLgQQuagjjcoMymNBUGQ8Ly8XDD9Gz8ScxqTPsXEH2ioo5gon18XG4DBYTkpcfKYwKR",
  "key14": "2ceedzWKWMBhw6teeUAb85DEE4StqwjuxvwnzPbcpQZVSQxg9P1NYYhoGQYasM8Uy1HUfVQMAvBaCx1K9tRXMCL5",
  "key15": "4U4aosJ1MSeUFpSMQHFKpS6Ya7N6ZCaHXcntg4MzCQb4TBV5ipKmUebvznjJfWxSmEezmqY6hhAnJFrCwR3HSakF",
  "key16": "36q6zoUpx4VbRntbmTCTjto8etAWZ2RrAYdPRisTS5NoAz5rkq8yntgjsoGcwdBWhx3rFC22FnGWSA7bzELsmmV4",
  "key17": "brJLAtZzwJubhkanmWTN2Q6jbpA9St9U1szNH92Qv7yMTyQ8dWYJLQq83FxnW6UZwUzNQMno7doDbxT2tPnZzj7",
  "key18": "iNsqYo5F111FPKJZKcyBjRCaPGMA9uyHz7xkRapJXjxRHxfb8GBza5sxMFgJhY8Fh14u3r9UVX8GGm2u6z11Po7",
  "key19": "3t8d9jVUfXtKq458H7fqfwj4RppMLLa1iPsFe7CWefoKED4qdyUMUCTL3Tnmx7jxEKkPBwzFAEdPnzJ2q1y9Fu3n",
  "key20": "3b2ncnSaf2mtxMEd5rjcKHtCEZSBHu8m7ANvy6ncE1feJBFprrE1J93U9aSm9FotBD81hdgTqtoTTuNmgygWMyBU",
  "key21": "fhsQVRHCrBiKMznTDLE4iffTNgdBrNdPjwNfdEssdRMQCjHycXDBc1KsxHP5hEZ77n2tUJ9vAkvjgYi9McLN5TH",
  "key22": "5Wqjb2UNS8Fnw3xF5Rz4VRYC7FUupvBTMxSTP8ozqndH5Pbj9UYVCqpFG3pPX89m2fEWQwiDSiTpNKxcWjM8Gt6M",
  "key23": "2ELJcszCYN1AAxmH7anLXE8Zf2g5BSU8TKKiUBpYn8arhzWY1viyko7fw1Hco4qh3ifNZySNS1TQnJmyBqL7d49c",
  "key24": "66JW8Wm5DWnbJAZcQ3BKaF8DY55gJn96Y7H3eANk1QBY6Lwe4XSzmsuXmGPC4KJydhM7zf5nS9dJnQAdMfCJnY1m",
  "key25": "4YySryuB6171uKZV9xNymUjdvuDCke488e2YRZ9Ts8NBp73wDbrjJuZ1dAmrmBwAwdercC53VnTz3ijUgq4bf8uX",
  "key26": "32suKb93J4C4rqttHYNzGnGZfN691eMEdYsA7Dnjosmoq9bKFJU57ShJb696NsA4MBDA2Ud8HQZaQ32ewR6Nw9RU",
  "key27": "CwRZhm7V81SWwVzsrURV7o3TSVah8coZumZ38CX5zhAZembvwVuYP84LN2cHGBERhX7sksKqeKeFJTgSwBnu5of",
  "key28": "4ewJwiCLeRSMWuSBV3bTRym5cyj8G78nrCpruP12zXeS9WrKKo6AHCLq23pdKtWLDKiYWMubXQHJUQCUYo2VM7vY",
  "key29": "2JbSw27sWSnTD2oJoo6CLdLE9F577aeDWRDJcMSBv2j5GJzdqHVHiYnuKNxh9HVhy2EeN9vADw14a1d6YGqBYyQf",
  "key30": "5qcgMgB15Q3MwPJuvtw633Q1HfE6jmX1WJDGCVMPwQSDrABFoECX5XZxJfSTY65qWQGdYQ91xHTdPvF1PbARkneL",
  "key31": "4xqDiwkgkLS41BkURzGK3d14AqXt2DTBVCxA8VdJ57t8XUhcDS8Am7nqJFKdtYGWoj583Rsi1rxuKwZMZCReN411",
  "key32": "3tUxEfK7QYzEvP93i4JBFEJcLBp1yMXgmrKQPUkXTHbmnySwonUFoUJA45EcESMSbg29TPXi1ChxJyNU1AnJRgVF",
  "key33": "4aJSNss2Ur3spKVZcSeMnRV34NxQedfvtLoEeo6Rm9d1x3HRwzH8ofKfkdRdetipmTPjzb99sBrZzfJ3W9BmRH6u",
  "key34": "rZbcjDyL8aav543HpEHiHQjFkQYXkghoeqz4WdaJRCQ5UaT1DjtsPFKzkm71s7sSZvuTYF1uwaEc8vCqyyCo7az",
  "key35": "cPGyShHbwQSW3QjL9K4KdqKR2K8zzMpMWievGM4FE81CJdtoTBecrBdp6ZWp9N8ZxnbunmPEpA4Fas5uoQ7mJKs",
  "key36": "5z4fajEHAK7TZWisyxGFNJpJPyPYiS1bfeJwAoUeCfxLk6EbWhBfmPhAHqWnieSW1mHJRvEKG7fXz14UKcQp6GSk",
  "key37": "4yb7h6uY3QRZEVpifQnFRC9tF7UhoZdhTVdUnXrLuugLUV7FAomnEpAnYHkQ9vuYQFygL3BqEVJPNLFueLbmZThq",
  "key38": "5JPkqYhuML9ND2G9nGmHP2KuhnbqEjta6uEM8yvp4DCQWDBkhuNfuZx2AABC22o3vLXkZHN6YKgWUiyYtSd3gz6C"
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
