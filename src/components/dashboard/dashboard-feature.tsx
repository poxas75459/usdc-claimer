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
    "8np2hL7r9czQ83ZiLHnD6qGTdmb7e8s5yAT4kMGCpsLzoEAbGsxYALmDVchwoAJvmseQo5LVPhTmQhnMjU9eMDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ba7pwPUT4wPx73jsyuRaybj7b77XsbuSdtBP4Mvi3qR86XovG4cbAw7DBxSyozzF5t8wTV4jYaS2vTCoeHCYmsk",
  "key1": "3xkRv5AW8LPwP9RbLRutwKEjR7ofr6UCCH9Qef1vMrNvcCg7Tp4UN2fuwfrBAteo8WqKSQ2n5t2cfobrihmja2Ua",
  "key2": "5k9cujXVKDP8D9e6mPwBFyo26Hm6bD7h1X8fxVXoRaJekns1vAv9DgLZEVdmE9CbfUMCjMa4cHr1vprUwrp5dK4N",
  "key3": "5Tpr1SdMcdZRwGpRXyFpSW6rPJVtXaP8uGYG9D5QzCVRaf2A5fUMMYMyQQ3enPyxXFcLD5NDCeGdvqSMtwp8xJCf",
  "key4": "nSUTXe8GmnjnNCi8B99i1joqDJhTCwEshXDkjKy3qKn6GTxdpbhWGDbEha8rKpM8S2JrseWQK5A7L5xsKQx7Cgp",
  "key5": "CP54svt6JKAnNpqTTKPLDXFMFTC12rS4rLiVnBXyRD92UY4SvouivQfieRzdMgxtrPSyHM6R24gc3MSpfFhabhb",
  "key6": "4BA1e5gFjzdKKqanq2gWqXy33NFJGY3YgwgNSecmDqyffBKzaewaeG7941zhX85ENPrfqmNQsEtFDPNnrUcEB7Wf",
  "key7": "24eYpZGQ8TdkRsZnHyvAMVJcQwLusnCf6EydhRMbj94pb3VTFBpS9RAttqpNpeFySqBNXDrmmJb4kkB6q9jMEbdT",
  "key8": "52ycCLFXaPv8fmfNWbSXiarH6tQziRiV7W1fYDXGco7zMeuJPh54o46LYFDaB4JwyNABGNh9V2GnFzd6Z7qBjdGX",
  "key9": "62vK1QJkUSxEz1gokoaxW7KEMCAtsTaQz1LErd3MDtBqPeDm6Yi5Xng2y6FpWWVM7Ed91xYMMwQmjfYRkpuGwvJ3",
  "key10": "4LcHc9mLVdEpf2tsWi3G37Be1iPsRq4QMQo6nTrJqBoJuyQo5bZoW2DTuycX1GMpqq4RwCGQ7Yu5rmzn4BgcotcM",
  "key11": "2mwHqkWJ3Wet51chvGLVGQ6pAqtCFo1xut7LFXYbf595xgRycVPjgumKRcaGSFErKXjSbDeiLHsFTpWgdd7kVrCK",
  "key12": "5EYxWoGXEmh7ACkypwGd95W6ipsf2zqYwFisw2qFpzjjEEqe7ek37Uz7XN6W6wo1RhVNQoWFFH4cMnC7hjJjSgCQ",
  "key13": "4dqZwA95PGB1FJqMdzoTtq8GqDmyY5v5dJg1yWMqutJzagLvgMpg1mdwiZfhNC4dqso3dgdudrZKbauRS1aGmHV7",
  "key14": "4gr7gkGGxLbJ5RJThwyts8FjHsJGkDC4GcNkE2AnzqWJbMbfEmEK3F6nMVX5mvrtXN4duJDhHvvCpBeK3wZdKimn",
  "key15": "4p2YBmHVSgLvEN6wyXbZ63gstxmbUFsKFSFvjXteCBvycbbCaoymQE6QvTziRftd62dzQZKcSwTzC7hpzZ39KDSR",
  "key16": "wEyUUR54ktguKaNRwXYdvCGPsExbkkvZXDkFbnbuijpLnMEDqbJ8bDqpq6Jb3PgSap2Um13D7aVRkDgWSkYADY7",
  "key17": "219iZ9pKibBBM38s7vKRhKw3ugRBZJJLRxpbm5oczZgTmDnuFwfgiYmxPwEz3Fg4ErFW5ruJQBUGe5oNvBJm2ezr",
  "key18": "2DpdH1mHjsnpVXzD6V7Fp8xPRnJ3D7qfrZXhoy6BnCoXAyMV9VfdgZiiEQFqvGMGjvqR2swur885HJYUQRWqVVXS",
  "key19": "5qwko6VVT6WbZKFegptpdiQNzqLcFqzJZYqs3FHPiArpHRUte1BBDoAAvZPyexJKWKBVnnX6m6VwUvkSJVjsx9AR",
  "key20": "3XFoDpzY63KB5tRrpitw8B1BMmjrCf5LtuNww3xxFsquW8yhQ8MBp8VuAMFLEcDRUqan26wtwmFTK7gp7mGvexqg",
  "key21": "3MjnJG9wUNACxMEGg4hG1jiCYTtbTUHEy2KKQkCdWZMhBXakWXTvfC1EWihJWsbYVU6oPbozxj8PsdfBvN7rWjuZ",
  "key22": "52TUGWvtc2B9SUv7QdEutkWErUbBymVmQTxCAoySSmBDE2dfqhmamcBmAV9vHzKpd77NBLzShxUFdRHNc8zjuyaM",
  "key23": "w48ZTppBXnkJT2PkDop6r3rwu46cPrJpDRqsBd2XhVCDVzF1aDWYZJ1tTkkk8tiNVgCg2ajPvFtwPhBQ8zUwD7L",
  "key24": "5vmcQrdE9pHLRVi7qGZKL9KM4atYyo3KMvr6hFp6NnwvGRxZTyd5vw414tUYWo6g6oFogWeuzW5iGDBc7WZnkHUg",
  "key25": "wgW3nqVujjyz2cT41gTpTG2zwvX4ay4ij2Kvep7w7bcJui1SA9haNQm72wXryD4ZRhJM9SnqWWgQWx1nqoekM4m",
  "key26": "5YYs8gsGiA6LpbcuwoMK1YnMUQ8oKZN4fRcfLiDDAjEnt7LEPNBATdKc9Chj1cDacQaiNLuYj21LRrfMF1yT93cK",
  "key27": "5cMYxiguBa1zEDyDHepQmb1C3C36sVXwNjq1AJFGunqNZPSn3HPNC3mHoPELgmwueNF5rRZJGSRqD1Li7yfBhA98",
  "key28": "3L36qw3HCnG8ZFTrqGHyUWztApk6x9JF97o4pcb6fZ21UbcqZNCheqVTDoAscBFUAZhYxu4TYn7uAYwGowY2KsnF",
  "key29": "MPxnxR7DNtDHsroWtibT54qxDywTrXP5YqQpHoNKLkKq4EuG3ambLPN9ntVMWZXbJckyH318v12JtFsziDut5Bw",
  "key30": "5J1nFdSf4go5QitfHg7GXP2M8CGscayMTSeAPRC6H2k6twjwDVZsYE3yzqP6aDVkAjBY8BSYbkvNtbz2imZLWtHT"
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
