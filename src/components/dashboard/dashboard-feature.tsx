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
    "2rBBCKQXjoHM2MRJzRAdpvrQJuaubFAA9gG91y2VmtYwscREsJdv41orcCFuaHXjjRN2R5wRaT3EHSDVBqSk5xLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jstaduR6tQh1TkQ6zxLc6g8sUPnfs5BzHjB9xy15piCh6nRft2usWY2p6wVTReziAksRu3uUXLMY5cKgBnZ3Zzk",
  "key1": "3qWDV7mPhmyQEvZceW7yea2SxWAKi8HjEdvxoEtCtsaMcfhem1XPFx7j815yJDbThQ1SinRFNgkUwDt2HouiZuqB",
  "key2": "62CRVNoWnyLW7sf3gm8g8Lmn8QB3147TfqwUTcd5gvA3hbC5k1rNnAs7xa8cD1u2iGhbMAEHejAgXWcwagBiHUMN",
  "key3": "3UDhJ2GXUa2SGqvM4xyg9PjGH78o4FvNVfDBE9gNkrmFL4PrmYvpaQBfoqkmzpKhD3VobhqoqEAQ8x34S3LN8bie",
  "key4": "4on2Gy7HF8YAvPLUfpqbDk3eWaTtqXV86c4jNQBxgvz9tLVurxeA8yu5r8WyQoHifKZZR8GNnQLWTEyEco3CLCiB",
  "key5": "3GJhn7y1cFx6izB7Yt4cWhsNgigSzrRrHRGYWnEr36jfurQpdswEojnBWFvq7KBsSu4ZY3AFmzW56VSLhh3QgLkK",
  "key6": "3f8eg6dkFm3CbXCDxpK7QcGzFi5QwwRK4z1CWTME9bwHfnJ1tnX6XFtAg2LYWSLMMK241JBPRX3E7LJA1HGVov4Y",
  "key7": "4J3aBVbCTNrdTmNji8esFtT9cuxp7iKbdnhxLC1BgkofdB5G7qaVUwTVigXz2mDcmojE3QuYU41btqzrCrb8iNWm",
  "key8": "3b7BhGAjwVRJ9vgJNCkBmZonoftud6bvnZgAyB55EsYtPm8657AyttgauD4417xubYGAkWAhvQJk8mudKqeqF7nk",
  "key9": "3VctZyo57gPevu2XuMv4nexAz3Q7kx1Stv1VgE73M76wB9JDMpJvJ6uDENqLmaFWoXPcLfCkwX6Q6En2g4z7ct7N",
  "key10": "3SYDs4a1oGyGYSDea5UtvAPm1t7WbVoCWQs2f9hd9C2YJKQ2iDLeWnGNBoBJMtMJbj4EFL32cS2RUrMYrKvmpe5w",
  "key11": "ZfhU2LHht13WULG12tfPbVvQd2H2DgdAcyztNvkQ4E9wMCbHy7HAdvgbCyQk6pgMUPVB7BEXWJN3gFenutJi5iy",
  "key12": "2fcL3K6yAoqmeRUSiUn8EAJAqeffRc2wQeraiqPMHJVAvv5Gq59t1qUGxXah6nLVvUd3ZiwR2dovge1br9VBjKXv",
  "key13": "4b6MHnK3DkYkaGKQLorA2rH6UFuNLi5QydsqqhHi1rkPDYJc4WyaiJsp5BZ7TSQTPappK893gugacBydt1y5Sd8z",
  "key14": "3NqzsNH3Bv4BNbHwiSXGzwmjtUnZAti9ds8yYQ4tomzdNGX9yn4HCxihaLWefDYFjFiY8g6xNwcMn5Mt9tCzijKB",
  "key15": "2N3bueaYuN8Bd1YyYFaaVVWyZB5BvU1UTsVJtmx7Qthy3NPXk4Pmag7eUNTxf4JDx1dHtHmeYE4WRWryRTesTKWY",
  "key16": "3A9rgQVT2zMhEuhq29m1NYLJxCMuXN4CXmX3SCJaHpC6xysiPkcE6tBf9CMP1tb4LpZQagSExKh7kT7ZEmtnrZjD",
  "key17": "4sMWSfmhEqU69B7VGt1hQZ8hRh2a2EtEvfxa48bWon9YcszfByg1dyAK1bCTXFRm4e9McxRLw6YbJFKgwHZrpxzp",
  "key18": "2ehgEB5PjJ5WnmhsvVkCLvKncHbjgAGcorkZWL2W3p2CPUv6XESJgMq7uqBga8D2ofPjLoJ8Kn4jkbL5xbY48A7G",
  "key19": "4P2p6VbnfHDizRoroNtiHGFWd9Zs4qJU8QSb1B2y2uTYLisqGrWWiZLso7nAuqk3sN1T2TNvCEhNbT8NwbfyRUzC",
  "key20": "GepbX5FCZge2735ckRT2dbH6phPSbRrGVVZ7UGkVd3Nzpz6z8dXJoynLKkYdJx5kq6wDQU1kpV9S6LVbURCnaYg",
  "key21": "5fsxDTGNfsdCuVMuwPAEBEeJdS77x8ARJtC1texGePDCMMwFVJkjgfj18ZuMNiXCAJQo9t8XxbRgGyhS6bPmPAiu",
  "key22": "2tXMGx3DULyYRM8z92qXZ8YqLyiKvdDWMWoLwMmKsDYFnEWD9m5W4UGECmMYhhVXtirfWE2VUsZRxHVsy6JemebF",
  "key23": "5FeGxCAi5S63sQnEKMeiYpPYcjN6cfFRpc5uBFULQM9Bs1QnhZACzNj5eT5jQTgjgK1Z5SV9x11D1PZGjbbQigDw",
  "key24": "2vsxTsLUoXYsTsRLcpPw3TUoxjN6NqScJvGgzWYky8Vqwo35tVbTmvzEiavUaNWmThELyRcJj5ZGY1kk7vgTV4Wa",
  "key25": "315cb1c4S4396g5rWojTfcRjGL5uLj745cj8e1qYWN4vgqgED75GAEAKwCWnEAhZaftPAmEtAcyuNJ5y8uT8dmee",
  "key26": "ngdyp9PptmCvmsgs8LM9ahJDY6d6K2z3HQWncGcraH1AHpnoaoTZ4jVkmFiUd2Y55LUYy4da3WKsLupJbibVRQC",
  "key27": "3pwdQxSxd3Vx3d4KVSgQS7y3bvrtE1YBi6njuBGHD51A3CCJgrPE3L7mHajxpFXY2ved87UoGAqJYQYWhXGJFZmd",
  "key28": "27DuUCKLRH6r6ccTxRAQ2Nn6doWB4Q1sUFxLeuna5kYZLAeaJx26iHfuWoCKveiiBGQy5i2FYA1GWYENKNsJQAad",
  "key29": "25zW4DCvE8MeedfsrpMuJpKSSpq14G989XcCiEqNbK4JsJe6ah6et5mJUactNTi9pewR74mSUUk8EuNnRCMw4SPY",
  "key30": "2nYbCLwUtXmU9SHhdX7Vtz9qmhuPhFkx74K4nxVC4PWTcWjajiC5wsvbv2rhMxJt6E6b2s1TMXwjmKVRJw6cETST",
  "key31": "bAPMRk1cUgCeh36kmfzvQghtShKuVca7xRKEJYUW68PxQnN9Wgn9PSGqNBqxKiN1MSZP1NfZrjph2ctBphYtTB4",
  "key32": "3J5FYtr6m4coWjn8ERTku4rCDjMmquLaLgoqjwj2qKCrG4usRNKuY5yaEDewFajEm1Leumm6JTdmTdmZU1VBnuwA",
  "key33": "4zk5cAkN3qLdiUXmrDkkmDZjUJ6jw6ym9XA5jNu3xRTKDxarirN5NQgtMBkTmX3yCSbTkaVE9GyeZUz9seB2jvcr",
  "key34": "4QnLK7XnPRhomD46DCy4H8q7oGiAhAS3EQ4TZVVDk6qewGdHq3Jx4827rY63GvM7zdQeAiuS7tYhff1G3tn1Dt14",
  "key35": "oN354zMiaMvrhEBmQfV6uagoszx1LWhuxapChwPAUqBFaAv8Gdb6HXeD6xf6ECYGLsRiy7GrUdpZWJoE7dgybGX",
  "key36": "2bQ8tMYPRs71cZ8yRBaEsxR5e8uYrnmx31QzohVccCbAJozXG7v8y991Hd9NsBHyUSyeGYHY2g9nEsfoKWMyNZuJ",
  "key37": "3CXdTQ87yrrCYRwzcxv2Hf8gE2BMGN3i58J3B79HGCfLSkS5MPgZyBfqfbcNEErNGSfRwDVmge3uYKoHe6HuRuTe",
  "key38": "TKDipCXwCzdnFySK7ypd9Qy1S5srSbfQNvTGXUxoEyxaAr7kHVnqkHRPNzzYvyVj9q99rYAtZfKMoRuGNKKJ4jJ",
  "key39": "JTuc4A5NyoDPX7eaC2LmUiVwowZXCovYCgg3dozNJnun1A3HJFGiuCKpz8pn7QMoeTxhc9QAWtRH9v5oT1pHWqq",
  "key40": "64dhGFbWqPSdBVjmeu2v8TPmCHS449uDjtwGSxAmjLNvczh5DGVbJWNBH57nRDBuMC2SZZ4jhgZbpx4QMkLEYP4P",
  "key41": "nnfch2tXmcnSakbZLUphuigHYFLPjWd6gH47NydYkuqkaqUjWETfifNoCetkMn2PBPbSXrchKAvyn98suL3U65K"
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
