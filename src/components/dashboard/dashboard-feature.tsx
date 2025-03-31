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
    "2coEtPeF1iXmsHgM2au8Nxw6Xs9sD5Yj1Vjces9qGWk9E5dNM7SouPz5L6wNzrrA6vA3UGPwrMxihCzrxSrBM9a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEMx268EJ5zpYx1qbUoZPb7NHo1noMgUfMhMbTbgTsWnd6rk3KpwA2gB7u82u1DWDCbsE3EEeKBDX68deBHvgx8",
  "key1": "5onLCvLme4byo3CfRehuchXTHqgq5ZUZkGoEnfieesco7cs9HNbKmMMgn84CuNsicAdrwPEYG1xFCtPx69nPdXzC",
  "key2": "5dV5b7NcAFG5moggRVbG64SWWN82D2VdHS2whDZyfAXD17GhbetTgiBo8B8TQK1hyKFUco6n1YyWa1ZeSDrNXdSH",
  "key3": "5jiA3S6YefNBF6krTkPpBhcaegA5Jpz165bonL1DHhwgxfyBF1vehcUxStjQrEFXfEQ26YXE5gagphb3qthoR4jz",
  "key4": "3YY9c2m5byeA7r2r4BvccfduG8AGvh1CfVUcpZvjPh1mrQzFQftUqj2uon2UPtb6pBDQ5FBNSMY7zEdesRESDHzd",
  "key5": "4rgTPjHgMt8CuEZQUnzJxdjVZGgcp3PJbU6FKEGZ3k2QYu5nNvyzngvLPBMD8zLy8cJhc1WHaj5hh8W46bkCYVwJ",
  "key6": "Dom3pakWhuZo1eHFzhTRTHhcSTAnSFLdSbWP8rXXoczhhqKe7gqccALTQc65Nh2GnKFF1odBLDaKEJmSidZEiDL",
  "key7": "2o5TEzY4QHpsSXweFivJYGQjCAXdQCiNdXF4n3VtvAPjz8TpZGfV7Q6iMzqL5r3iGd7KzMZA3Z6xFnYdACKDFv5h",
  "key8": "2rYfHVg47hTGJctSYiLEuajcGL1AVajpCCwuvh6TYvFhD7HVanjkFVfMStTW1QfMr7nC2MKrCihTaQZCMcRGU53Y",
  "key9": "2N7ornWWB9mDFZDEDdtWuwksx4m7Wz5N8w9aCyf6ok2oFY14VSGnxB4on79uuh46gsdS7HAWjFaADC2WQJcof3D6",
  "key10": "4FW7rvhA5W59PaqHJKtPNH7mkoJkzaGQNwXPwQsUsRviyuFfxXKoxoFFzpN8sL5RqbbFxU7Zg5fBkiXLeC5UMoM4",
  "key11": "58cwnXqwVfrkeQkt86oojnnwybVADYCAqk19cGAW7Egj5Qf9ZQCoyBi98DG4CVsMKzicu85pk4JCVFHPA4aREt5K",
  "key12": "3gZ7DNj1uMNog7oqnB5b29FhfvTkPWYAWiabEeD5FNekd3Lmv9B6Gec87pVo96DsHNi8bb5h6ZviTANUwyjin33j",
  "key13": "2RgDNLvXxJRsR9tzcNkKzSGh9RoL7Gb7sV6JXfDao5r8GBaZ3w29eG59rvhph8dKowbnuRs9K8hzreABs3AsnkqN",
  "key14": "59JAWqcjb4mChDfyUEjqwhXJqQdoHTEyNNXQxW7eeeYtGQcjWnWegNybTR2uE7JNuZrwXE9XaE46ndFBeh48GsqZ",
  "key15": "3VeYShsBWgHSfLQZFqQWajCgQHNG5YkqdrNh8KtBoyCUURoPzVNUsvsf5oHjXNGjN4YBCLQKWUCzrUm6PMAWFT2p",
  "key16": "2VaBU5NbhG7si2xB4MmNmeYcZvrXWMjQzzCSrWR8ohTJhV3L9SZLPww3VE8wgFFzp7tXfYrvJED8GE1FrRCZZFSo",
  "key17": "4hctpmbq8h7KN8K83nNZkzHzZfyzxNBUumrXBSetoTZf4rinptghdDgX6efohGFS2VX1srzDUgrgeJQCxH6YZL2R",
  "key18": "4DK4kBHjeyQkQesF7ThWdAQfYrLg6xYN4qKsRjGowq3EAAuY9x1fynHsXQ7FrHH3hSRqC9WSb3Mr4RGv6rWhCT6P",
  "key19": "2B6kKTaQVXmUmxZ4AEnVQjEPL6chxxZDAPNkMWxu7AmvXUSXjfeW9PS8W4JJL8C1ECmvrodWMjXgLChKPgZsFKY2",
  "key20": "4Vs6xvxFyq7CbpfL1FZnVGDfZEfBdryfqCJYyVtLokNcfzfkeP8U7xCyewKvAQbLKb293KP1imaPZXmnhtqSTsno",
  "key21": "ZuV27ywXVFMr8VLziabYr2tnJtZWbnQDcXo4AA3mHgUeRC4CJ1fRjt6o2oLdA47773yrdKE9ZquRkkjWRXKSJfV",
  "key22": "4cjrnQg3pMDB2NHmcheLz1QMJbD8VPFhMxNL3izppKEkrzurCWpgDc8xFxbMqe6CMERJHBAxcFQLzkbWu2qSxWyW",
  "key23": "3EnH5ckfYCycsK1YvWD4iQwRggSULiCTWZYBFPAoUnNn7uxSYtdXsJFFeCGQTHret7a7QqKZMPUrgEo7RcXsLoBk",
  "key24": "2L5XcyJQMLyXgu6ikAFcJj7PSVo8xNTCANpUfWpBJVPJGYTev85nva5fJRY6nVS1ZwJeUFciaEBxsrtTBYbA4MVj",
  "key25": "2sS5LtUMq8qFJcGY3FBTj9QBLaPytBNMtqxCaHxhE2zfRztDBXh8riCFXY7veCs1ZLKM15v2Cksy3jVb6YVNbnoN",
  "key26": "XuUJJtijpCzrPFS2q7weSf4FvKGsmF73MTqUZa3aFzTauCoZs1F8CkCgb9fDChssQyex63Hqv3hPhTrAz31xgUe",
  "key27": "4rRBkyQthTQqWHfEuqidp66yGUiwQm7uHq3n2ywCEJfZ9o8A9kaTMPQGvsp4o58WNBc1dHjMUhrUj9TqbR6F1uLQ",
  "key28": "26hBZijLKEg4fzDAXCaHnQQFTicL4UjTqnTf6BRyPyFR8Hu1iVym9pQn2376yqNc8qWk3CsnmZLCxe9XyPyddb1y",
  "key29": "4egFy43B5D38mufoAxYhmYpjvxsN9F8BB4duMLV4GsSH2G5ftajJDzDGgZzur9dGAyKuquhVN8PewBjoXqe58bp2",
  "key30": "64xiD8tn4bAmpv1c1qtum8gCVpWJe4VPKWXhPj2NXzkDbM4sfajNjfM9BHdLDHagiKe744BDrsLE4Hp3Q37zTrQg",
  "key31": "2nbNbKBKHQibuWGD3YTyYyu7azCioEPMRPYUteoXbEviH9EcEcTaQ9s3Wvnh6Q5wg1smkTdQPcxqg7LQn2y7mVQy",
  "key32": "eEywBEsZ6GsgeA4PhPYnUoHrvwQamZTXiE47rHJ7RZ9sMYWapW6PvkcFmEfZsWTyJ5mooNm9wm6sPegnF8zRufK",
  "key33": "5ca2uubhTqb4NmWvvvTk2c2aos76qZjUKiP98kge6QUT7T7ZtC5bE6b2fz971fNaW28sqaqqywN5rGMBcgsVST9Q",
  "key34": "3xxqrM1MSNSMUfpDjd1hHXYxe7JBBR8yCZvQ2kJjGmwKMtNYZTYmR5EyVad7deGi8jsqEbbuHEpGb545Dis4A5uo",
  "key35": "31NTB6m2RWoQ77GHHfEfAxYkUMZSUn2XB7fnzQXXnG494PMk32MVtCXYRQUr156Y9R7mDPNWps3yBvaqHHtyiQgY",
  "key36": "5YcDcX8U3kox5kwsBKYKZZp746EYMQYmEznvdN8YTwLsSySgKNorxNQ3GRjX4McU8VyGnh87SGxpQZMUKUxmBggg",
  "key37": "3VDgkZ5KLAwva1YVUHfpvmHC4GAbJTCNKggBgpqSVF1m8qBLUaBGsR4LpZ1rGmcTZGCpMKNmXvE9cXt61YhFqaf2",
  "key38": "5qTZfCJVfZYjyp62ZWAq6PFufkengNq5rNthZK1cW6uLLoRaNpgCCTGuMyRapszTevSNx986sjnSTuMD97Y7kapw",
  "key39": "2aCuWb8fqVfNZQpjdu8zbp3N5Wf9ivhW3JSeg3tCbsKAqfJkPDP6qXEHp5ejVewk93Nku9trjtokiWHHGet5weyN",
  "key40": "4U4Tnzomppuz78zmra6BxtxrH4fSZVdWFkvJYKCHR9Fpk2YJrGatc65xJRjuBJp8BbMm4JWU65gWnM4Z8D2SYMBK"
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
