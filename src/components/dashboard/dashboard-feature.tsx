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
    "vrrXdETmghLQgkrGPdVLyLRrqQBFw4pDgCtmH5woWQEmQLHpVqtgNkgdZ9QJCWoKw4vQWcmwJ9pAeNHv6Rvowoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XRwXCedkgcHDo4gTzZKBVKK4VQ7gL8KWQkiwASvbQyEywt5bs21JJaUBtjvLY6kReWvbhHiLn3LWZcp7yJ5biT1",
  "key1": "4dHQFucfb9s75eJ94v11BiPgNZf2nSYg7sDyxu4mmEK5fEwDmkNyfp3Vft5sSUPBjuUgPEnXJQZ4qgzMufQFG1wA",
  "key2": "3LnT5N17gFAakro8Cye7LrXZJV8xsNicGP6ejLuSHM9BywU6tVR26frjNrG4rSX2CfuCFnLs8ZDPSd1yvQsCsDWL",
  "key3": "3eyCa2bA3XKZRGXkDue5D4tXAnAthA6j1LJ54RcZ5nT3xipfdV9dKRUQsc47NqFAtfEvNTMJfYDY4kxLZ3wPMrpL",
  "key4": "2tss3Cfw54HBCB21ZxJngiN58inE1zo1FVNdZ89o3wb2rqtJYbYXtnnTNhDac74tXkB3ueTrZv45zDr8p6bPQn7K",
  "key5": "2YYb7tYAWSCavfYThq5Pw6yzQ2bEKwXKw8vDEJx5tqPAdg3M3UggmsYGXaFQRXsVJ4ERsa1TWPoYBe26ZJg56XDb",
  "key6": "62qCfFXPtogtXdQgXiKBWmsJYCznUtVLD8bCQFrx31nVFqdTfXcBrucnReKDdyn4sNqTKKFMJAhm3UB4MSq33sta",
  "key7": "47z3USLxvNZEu3R2JyPfMbwMqBRThd5BBYz9Ua6sWYomEvUmebdL2KMpQBfEd5Aj1EYoCeNdFUuZoPjAuugobgWZ",
  "key8": "3b6VPc7AH9odS9sfbXy8UFmrH1QniwoGJGvL8ZKjqBy4MUWygxEUgciwq5kYbMMymgexehmmTLurLV1WjiWssTuB",
  "key9": "55DQ8xSpH3Vmw7RqMWcKbYfhMhF65ucLjpHop7hWKqzA6DmcYVBnDNiyWB5wk3DqnQngnpPdoMVN6B6CoPb7jn2g",
  "key10": "5djFpzSogKdYzxSKHStpQcr45yd2tshz3wkytGUJuUG28vopz8AdYP8Ewjp4Fnp96vYqQMofNYEAEzuRZA4P22GY",
  "key11": "4KM3mSezDNtR73RFyupDgkPSZarDG9XCMzjnCgR44MT48YbQmV51NLZG3mq1QvswcpqTy4EP5yMpfMtWKi5TbAsV",
  "key12": "2n1t61DwGttrkaUp92yZymGEx7eD8y2N3HbMzTaAvnxcV8DwDjgoJv6b3TcP6cP31KZdzr76xYUjZjU2b1hkD3Ys",
  "key13": "23tfhHN23DRxKJ1UACMKXsCkvExq8Ui1kyQ3cCc5joVe9TGQJpTuXYDefLjhxQ4UdZQkjH9my4sBb7T5K7dJrFPA",
  "key14": "24gAcxrWWo44budtKTFLSB3uZdD8H6AB9b5m9K9Rgi7vsySPyXmZFBGpx4ZjkwLrWjAWonS7oyHYG17d1tmnHwoh",
  "key15": "JtNHBRHC9Wz79VyU7xW4CkDb2Sbg5i9N9d7nqSSMzHknoYNNQp2s5ixHqDX6m37nPvhhuTxV1zrkzjwFvhVwH6a",
  "key16": "3MeQbjTL7MN9dC3F6YZQz3NoxZbSojdeBkzWRquuvffHAVh4Tm14xE2rBXBy6qhReujMbQeqndEipuQFEvn2GvSM",
  "key17": "5rp1kuQqLp7LHmXx5Xsf4WfRuiyzyXfGEMA9GLuVLHQiaikEcbLqtsUAHSh6ZeQJF75GdB1ExB1jyvXNSJFyfPAx",
  "key18": "2xyQyBnpLvFwJeQfVDDQUaTyusFWenp7jYCZVqVJ2U4fYeeKciYqefZC2rMcGAGaLzBdcyHspHH96gUQFUyQn1As",
  "key19": "1pDZ19REsx1GJPodct4FLDuAAoGzbKn5hj6YTjsxRSsRjWYQdhzVB18X4BCvgdGit2sUeFoc5MVLCp67v2FLSow",
  "key20": "UnEfL9Zk285csYd8j8N2RZy9ewxyWoxxn9RQKMmL1CgHVzdw1PFPMf9hb3JWBRiXqZYAmJWBVR3277RoVmpduHQ",
  "key21": "udfe1TEA8tMiCg4CCBXaK8fkXuUb3MkqLJXBS6B7gD5iuHYZQgTBNJrBDpJokohMxxzTgrSnnMt6ij2MjB3oQ25",
  "key22": "s6XrgiTfxZgfKgAUnzBwjGBKRPB8mqWkbdSgKpNPUBWSZq1G6iLN82HGiQZktH8vkQwGAMNEWj3uQiRebvEjR9H",
  "key23": "5KqJZUVqwMaMbcpaj9kgiKyD1gNwwhgHjMfJD4Kfnubjx3MxVHHtjNKeGJ4PddLFkebZqsKiCSPashe5YZ5C6rM5",
  "key24": "429y1cUWWvxSiMrXMPdDmHDywE7XMLaoe57AKTEL6Jc79bK4stFJwGym1geVPxoTpaQK2n1JAd48GjDekYXC6rdK",
  "key25": "5R7YZ3iqeChWEd2f8iKCZcjhnvimMpETuds7knJm9hUk8AHYZoRmj9kg3M8EW8UL2L2qKv6kQAQd2RLUcAhG1d1",
  "key26": "5LSpHF4V2JtaafkryXJEQ1aaGVZXzPDN5bshEcSMZ7jB2eGu4WfUyeGWPEqER7CHFAfVjg7D3NnTWv2Bek55e44Q",
  "key27": "64PNBGr2vh15chpPh8MSgTYnTuoCawSryx34iYbdbLwY9MDNDp5DDQ6K472jv8sBMtT1LRiZk7E5DsQF61NSZxC",
  "key28": "pKstYu3fUdWEiBsA935mBVE1URPZ7TMXXP8uYmw1vY4UunJznVoWPtLhNYrVYCgE6NEjub6DzPHDBh4BAtH9TFD",
  "key29": "cQeqrG31Uck3FnbXZZAAfMbgjNFw6SwQMSt3p2ZL46iqgP5EyoMXYiCKo6jAKFkN6B4vrBqxhNZUfx7Xc6s9ibg",
  "key30": "3kjzjw6PD6VSejEF3Ma6oq2MNVw5Ss713uSjFfSMj4tuZKXg9mkuCE3gxVvSkMfF7caiom871LEqyCLMYyPDyjiK",
  "key31": "5TfPMgan6hJ32eDeYrXyCacPkHi4Z8PkNJq9zFtGQbxwzrGhnhWpwCphWarb1HPsNjh8o3V6DiwThEEcyJE4j8po",
  "key32": "i9S33hBdTdFjwYth4kSaoJ4QEadrywFJajyMmDUN3bhj1R8cu6VHvK2Ft9do748rHjR6E9Cd8Do296BUgUeSQsf",
  "key33": "2vUqAzSAnbg67NVSWXJJFCAs3gQE9ifzQTajK1WmM9ScDiFefH4beUaMcv3YYU7aFof7Nnr3bVx2K69DgQ6mg9zM",
  "key34": "4fBNJWB1JDivDEPUpo3j6fxqy3yvJv4FhEjxaVMv92ReNxQ6ZpLkFB1MTu2BU7PLg69xAoHnhj7SCJ49myndVLTE",
  "key35": "24Gz7wm54eidaJ6QsQYXfSAtd5AZxSWRZdjJafSFR2TFu8dENd7CwB73r3nLKDBasM9tXp6nGwA62hMDmPTUevoy",
  "key36": "2QM8UrPuJoB5XPG2CKBhTVHBigiZiYgx9Szq1HV7rEAVPox6urthUzNNKhPF1haj92NkZAJ56dBW6mcwztwft3rA",
  "key37": "32xLZpQaWYiqLLvTLeVEJ29YXixm3mjAd3QnWXpXfg83mbAsQvN7Et9gvTarWvw3zzC1488LXMess87amW9BQg5T"
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
