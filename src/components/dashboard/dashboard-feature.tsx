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
    "oiCfwbdrKexRn9huymC1ZijPhnwtcE5r659zNbcJB5VudMyptkbV4foiEDPdhA1eJDr5BDCYJDfnMU156UtDUWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V1ALFioLDAQZXGL4UbKotr8518QqSuvtcqGXQKyt4XUFr3uBo5xh5M96k34EKwtac5qD4GF3bh3A7DCyj5iuumE",
  "key1": "38mmvdz3kCtFQ2ZyWX1v2zfsFdAcGTxQphGMhyBRq47CBHwDWXuX9FgSCmYy1tpgY9q1kbAx3A5LarAKF4mGzcPK",
  "key2": "24eUCf3Ejc6yU2aFrWzcuRWYTxs5Lgt44ou3u4nG15PdVTxi1mYFLUCrnyaizucXuFfSMxSHXbZWpSXabLeGu3jx",
  "key3": "43ngDvvQ8x8Q5Le9jSs6kvrroTfFbSeXiZ6qMxJYr8r16cTo5Y4rZA1UCspUL4S8uGmAvjEyTjt9KGf2ty5h8589",
  "key4": "4CwBogyccneD7jGiwcPVXbriLu9YfuTp8qbDe4RXoDH9K19sSshAmxXGktCkvLUzN8tdreheohw7FvK4P1S33Wka",
  "key5": "34PirokPmFEKL9VECzNTNBPmoGhUpMC9empwtpbutjdnRAWACtuRxmSweUSU5C3Zwfd8fjYjEZ6WUBZXa84qCWYY",
  "key6": "5KeWgaL1ug6dcrBQthP8hynYtVjAze4KvzFvqnL6rdyivUmGpxFHBuJodVRMkNWTw1vBuwP17rVq3vUyQyJVWpP7",
  "key7": "2DbUu2GFEDp4WbgMu2AWwAwAu1HP3Gs4VqVs1XrurAEj4rsVtUv77RmcXDGRzwtCAw8iX18TbPpW62FpwbWTFkkX",
  "key8": "3Q99hT67p1abdQggzbLc63BYa34jR22shJ3cCYF7KBN4hvFnmsJEvxoczDsKj3TrRybzEixfGDioXnKUvnhQT7fM",
  "key9": "5tpMhMiqxuhUdRSzxMSFiE2XQ1LkwbsgkpMhXbFERBefvJmMBLMzeczLXGWpQ17CxRsF6QK9xh8RLHrvJsgVZh41",
  "key10": "jxMHZePBMmFqVc2T8J4LsNUD8nXxqQwmjMwnnaNMog7XyVY2N9AfSgDUQLG7ixVfcfn2wSKC6DcGHCSAJoVrZ7J",
  "key11": "otqBa97RCPxy4LEmDHqC5h5DYwephKbfUiHUdyuRJVSiBC6NjqZRztsbQtbFpJLN7RAN9FoS8qdCzc7KbkAdM42",
  "key12": "4QYJEB8Hds82wpPmMAv6ATvACxZympcXq8SoKpmCa8pSLzp5LcVsbzLcLSc5x67YebfyEWhyDrJVLiYvfbyRxaHK",
  "key13": "24AGTL1EBrmeJZuLjfPvXSoZRSSHmQGQh4WgrWSawyckMcZvrXQ7ZuKweq4Lu8opeuGHVfTF1UiUf7RREKsy8pAc",
  "key14": "3JVi4vv1PCQVgEaB15y6JjDjVfFsTMpbQaLKi8itdo8ym7dN21J2UTZ7Q2TQxjGjT5NHCV98RRNDCSj46Tejx3F6",
  "key15": "2V7WpQg3hBccfZhGL8SHfCFYkwDbqy3wxUL5XQJSQSq1Ps1FKo5AijhTZH9LtumZYuUJNpS7aEYfpHfTrdwPbRHh",
  "key16": "3o2dESJPTZ8vJethu8oevE8ZZSSVSTVMWKKc272BKs2GhR3AhLY4PyULFbk36Fpeit2fzxuZBDHKFTRJSrh6XvJR",
  "key17": "5HE3ngvmF9JSygT88ry7WH75Rs7S9e2Duh2D41Vu1EgNhQFu7xhMTVG3u2zZn6w58SeaNXeYrGKtSdFuADY3vQ9n",
  "key18": "2c2oen6gaPA5czwY51HDexjd8Z7Dnpo7fxLqWvF7A1mn9KExsHGxkkUNEnYWQme2QCJfZY3fVkHNppMqyf2HSmw",
  "key19": "2XcjBrMwrpKYzZ12Da2TDq7na4i1gLehHRMivb3VmyAuZCEgCQutGYKmK94SzAQFFs5VNa56ffbnyNm1jdgtdGSU",
  "key20": "62ZofRsvVsw8g1ni7rcbiwHmHcrospRF8yz2x2D1gfHFyPXTWHjZFzBJVU3sC1A4AVBViUXF8eVwEh8TjZJ1mMAR",
  "key21": "4nc1MjrVLwe6GUabvRfUw7JGcUXQV5iKT2qzB9famYguENGQjiTohdpMLyJapTgEJUt6NsfoC2Y6SbA6UMgciXEV",
  "key22": "5EUdjvtA8gCkjP6GkG3to7rULP92hJz8F1rHmv8oaJwvm5BNL9Zq18ZU3vj4Et2WevGs3eQLM1ChQ8NDsC8v2Jax",
  "key23": "5SARWy5Fq9wojrXunHmGMMHbDrx2BUwAm9aQ2xnp3Gy8YXZRsf7NvkqdbfPNA9hVL8JJthpEGHb3eVhKKj6X3FX2",
  "key24": "4AHGo4fg94T5vvabhJ2gjdbmrJz7tR2CEAkjtmAywiuSSZkLvFLC1JRauzF3idW3KNETgz4qNNT53pdQgBvrB3Bq",
  "key25": "w7xChxQwxUTzfieANLith4aVxbnPK6smnUur3m4oCZDfx6SmAtYG8cUytJKovCbGPxF3cBjno7cdYzkf48BTtPY",
  "key26": "CibyQ7B685WKCCY9rzkESsoFm9hDAXU3uLu8E2H8yqJgpRs1dPnvPoFzhFEV55Z9cZc65j3ibCDtPwPkKf9H9mu",
  "key27": "5eFeDZQ6qPYFMukiqQSiWFvFuHXTFQK8eZkvKmByqzRTeGsrYrQdTmkLuY37rvMxLaLmq4BmGPYhxM5DvmrKGaYD",
  "key28": "4YsBYufuNmjHaRELp7NiTdjsdQjBU9U3pSLanfq4jXDeo2FsEdX7UBGkrrSxRoFVAkxUHgEWymHR3UyjNKz235BE",
  "key29": "5RRX4f7WTWJmjDPZuo2y6rXgXcgcGJ3f8nBgek2pMqNTUNShYyZwQsUCPMLxPGjx2FcAbbxUTLXkCiwwYRjEnSnz",
  "key30": "4bApagU6vRzSPa45bYuzh5xcjszk65Guj2Fij3o26jsiuzL7KAFPkDWQsMvSBVivmK5VyYTrifYeSzaBsv1MxkND",
  "key31": "brwXNs2roH2sVxSQ12pJb9M2BQaqTNyv2VU6LtAo3oQwdpBCdbqS4GFiEo7YTSmRf6tXMisjk6Zg8pWtTrRsM4q",
  "key32": "2CsMSo9zKFnojAoM8fHmX67nR3ZqdiGAUMSoLZQonPYiGyWy9Bs5ekgw1DuiiD1zTS7kPYYRN4ns5uCTLdy8NvRh",
  "key33": "56E2RGHcvZnnKTFL1sCdMkeC77ZqrsQQHMZdtKDzQgSByNhwmT9E5sNbAEpmceopQ3Pz6qssnEjHMnfr4xLqJfBT",
  "key34": "5bmUCnhypZjwszg2YFm92BnSFZXRJM7B53nVS3wuhPCZPkWcDLSDzjFSYpE6QBWhqG3kFgNVV74REuRsuitoVjmo",
  "key35": "8ReHHphpnhBW231q69NphLLsbyNmM9yXQ76cL33rwMkKdwJdsmWvv953WB8ufCMeUER7DYpVA22TNkRvQ7hzBUb",
  "key36": "4zYGYRrP49BHnwf8HdoQr7Qiu7tcJPkJCHVc2ZNw8MQmaHdZeR3MaY8HML4wxxrH8efLk9V6dLLcyjF4DPyDdePA",
  "key37": "2XnXi2jaYVrFzuQzA28BgoFSGH4YErcHK9xGoM4WGvDa9Wxynr42iJRiohLNBCqs9wPHMi8zBXUnHZeCbn63n1AT",
  "key38": "niUtBcfDULEftatqPpdRfZUHG7TmXZh5Bj9jXNQ7VNp4vn8MdonWQuxjqsCsLdpdx65w7V4P3w3pUfjGZo1LZKD",
  "key39": "616t8TkhvV3pLnuv22yMvdQxhnCXAe8DkrxaFLb5v2weXxVgz33kPYw6TX5urPcGhY5Lh7AFgMf3AhwXFqkbkChB",
  "key40": "PVAHC7tZQ5JB7qq8UtWujw4DMM1pCMg3aW3MYZKqhJdQF7M8vVrG1ijxs2RNA4VsYgamuWXYqMwUUc9aLZCyAeT",
  "key41": "526qjgjmS25LdTXjVT39c7LwRhUgJjYfhju3XFGAAxyynNbbkzDbmxWJPLVY9gNy85GZJ9Uw9CvupugHAQfiwVcc"
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
