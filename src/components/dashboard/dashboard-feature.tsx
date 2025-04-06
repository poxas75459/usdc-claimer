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
    "4LiPxqPUGDzjRU7EJXTNzcHd2LuR7VQTDP6b8zm6ZzM7tFZpHKS3Ec5io4rK42AwF91spCQoVDody6yzjzXJe3qV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hHH9KZsoDFjApacLBoapeaeuZChGvkDAKGN9htYtRSJiWGa1rF8yvrnwpyJcc87gRv6hT9oxdaZLwx9FHq6YJRW",
  "key1": "5cMTQ2GLUbQyGm3pFdkcu47bEkSTT488xNt5S7s6YdhkcSLrAkWksv6y2TDJuPq6yyXRhLWk92MQycMWWEhaiGdt",
  "key2": "5YS1QrnMZKHt6zucuSfK4K44bsn6pTfexBztViafsSHVuTuvYHn8nW7Ejzzreu7wiMfwGU7ierUxkQWr5ccuVWvX",
  "key3": "4btFcqkQHaYNAPm2G4t5RT9ZF9Gb6io3YPr9YExAvtWPHR2Dkm2G3VvTY1fccYWAwCzTLmGQy5yiDygJcJpicAMK",
  "key4": "3dfcSGghLghb4FTxBfN2zt6mYcGCc9bogBjgVak5nXP7fRqEwyF5YsW54gxFrc3yKaPu6D8V81Ydb5AHxjWropFH",
  "key5": "2VyZF3kWuX4moTECXqg7mbU8ZzMy7mNtCuaoFgik1nyAz6kbbVXj5VSkhtr8Sucy3ZcqxQ6BXCZLKtZyRQhQJiJN",
  "key6": "RjEjab2YrPVTbTxMkxnXkveuqNe8xVQgSfQHmJJP7xVmj43TuwtYMutKJdE2NTWfhyFRpoNQk2KsvBv8uW8TvWF",
  "key7": "3VL2rKewCRskW5FKBSxUtScpWa5PvNgFKbYsKjjuQeGBLtb4DRqESa3unwwHt8gAjZi52LNaoEYyYsX2LpE62cKK",
  "key8": "3bcYrRqoVvbFUJeoi2ThJd8Uff5F9onppXdgheTLGCqVpTWGF9s6Eq82S8r7Zv52d4j8gkUi6eZoJnndx2MGVReJ",
  "key9": "5rx8pW5jS6U5UfzjcMkXSK4cd6EGqDhMKHukporw4eJFXGdvaP9JC2yDVVnRbxNmZZo1VKTxXYewmnez12wguPyB",
  "key10": "5h4DFLuvWudzBbQ8LxiMMorVwu4pPi89hZ9wFnfURXER3mMQajMmAgeuEwgLqRhaWfgDhAqMkuqzAHTgdtUL31Fp",
  "key11": "5wwW9mwkNtLNaEENPoMcTJeAnFR1z2pXRpvA5qVqBNiphk75Z6kx4MQG9QWoo3X5zm1KuNDMhnzFNWbwfBQ8CnMN",
  "key12": "4iwbdBfVrMXQJ8nDYVKLBxkjcW5E8TVJTTHT5SMphYmaCn3CWE9YanD7wYkc2xNCygNQbf5L1LAHzgE3LjafSrKG",
  "key13": "3MJtCTZSoqiBo7VuCcC1kyDVxkj4XbJHnhHc3jKcD39wBS5N3KjwG7hZ6PD1hJzrqTYBvisp958c31Rsg2hT5awv",
  "key14": "4qfVvY3yTQ4bHQySWRPU8MbsrSk9AABH8sm1cjZs61TNaW37mKEcWJcoajsB5fFL7x84833abJ5GUK1rKY65CWTy",
  "key15": "24aiYhWcHfXMvSgCb9HYBfGF6mWcFzcRxWfpUKdp2cTHMfgpaVKimrtZ1mhn7a5BYvuJzLL1t2ybddhheAdDHa3k",
  "key16": "3ppGkdc3T7Jd6GY8bVLA41kmsVcum7mkTCJYa6KwUSGQLATkDoMm8wqoJs29Q6Nf1xzHZtwBab6JXAt7JjkK3obB",
  "key17": "5yLqN2jQ8189XT8JUPhjMCtFu1PJSrK8QhDmJKxjKSSM2hMQ1pAHcab7r4drUFfidWYjZ1pn7EZ6PH3pHDUoVGKd",
  "key18": "2VbVHe1eJAe4EcJHjWtSHkPT2QiJrHGgdRcipWshDou119Faj63w5rbHGvXSLNowG1tjzg8PLJojF3Jk8vvw1Jo8",
  "key19": "4fZzFVdc5fAEahcMe8r87h47fFZXagjyZqws89Rg9xnVFiNuhzMgU97oP9dszUvUVexjxWKbb7qtJtGQy3azG2NT",
  "key20": "3N1DiCY2XJ8CBRYVMAwLrr2Xp6VjZBu3uiibesz2jmDZSK196yyVdg5SDR6Kj1Dc9ghywAc2YY3gqEmc8QEJ9JNd",
  "key21": "2bTZ1tvQxFxidFDYrieXjzhedUpg2m2kHHUhFvLbnahekeQT49aUrzYg1pWmzWdndeJPCcxwqmnAoP8ZDdpgMH4c",
  "key22": "foizApMDKF9NRpHuDcPmbg4cc1NLio3gso9nuMYfrt8Q4JGQae7CfVzftfey9hdPgkb2ZzLzSADvtezGQPnXaJh",
  "key23": "4DZkYBDMJuZVe4pvxDAJwV8q3TRbyC6zcXZ1HBWXDXLRxqebCjn2sZCSBEANtsXctwT54haPigmeZnNXyiGP8ton",
  "key24": "3guEEaHusE1nfKdQJ5e7beVdprBrsqqYQaMjivme3VSzj1Ub4tLr9vJDDLshqrqQgJw2owLqncyfo34RicML862D",
  "key25": "3GA9hJCENHwHkyd9QHCGjNvd6Bv8na4EjugExLqVwPC8V4sv6mFhR6EEWXKRoLWGnRSS1crCpiGehCf5uCHLsKCa",
  "key26": "2TALjWW8L7kvRE7UTB7yiqoTDxW3Zkkue7u3ec7yjAXpKNdf2nZyCAPB7v1YyWetqmJwFaCicC1S91MzesqWSHvQ",
  "key27": "4nbSvEAXc1VbHDh7PJrkQcx46vC9A5iry8bTMGJCcfWPS8R3ZZuq9CWdTGsbznTpCxY92PRkpcZDqFAsxJ3gq8qq",
  "key28": "3jrwiHNiv33J2tFKWgJYakfnHjZA5xwNrxq93L5rG15zBCVH4YEXt9ZgfRhdFvYJE68YdAfPrH7Xgmz43VSZ4GBL",
  "key29": "jve9eNZiRdvoe4EqXkJPdMkWy9Ce2X4rv4AZuLkbqvss6cBjWaMDasiFceqg9Q6AesQ6TVFQUBMUZozqQ34v4eg",
  "key30": "3MPPdQLwx1TiLNU5Ued4jaGMY9BGMcnoDuLLDgsyFCqyk35CxhPDs6w8KCvGAX7vsH4aAAn9maY9csazvoXerxjt",
  "key31": "2rDeKHubn653bKT3z4ZoPTvk7mCTgxsHVoGhkHpKBKMssrNuKyJJL6Ls8mtYZX4Ua4NGT6yTrSrcYuyD8NuCQBt6",
  "key32": "28CF3qRpNEqE4ThRgRa4CvM5FMxVBrfCJgmhNEM5GYUA54cLK2r8xyQ8mTBPs9FeBYSdGpZ1QNtgsVjgtm7Gnsdx",
  "key33": "3paZeMg44RzkcyA3ehuce62GwB2QBd3sjWKmZosZvqj5x65TmFQ3NehHqvBsskcTBXEC4wAecCcj3DzkvJYmQJTD"
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
