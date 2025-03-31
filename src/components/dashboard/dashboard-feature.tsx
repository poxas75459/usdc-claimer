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
    "579a6wFFvLwPVUZk4KeaWWnMwbZi3jH91XWALkZKCjJUsCW7HxVv9KqGgSc9Z2N8n4Ygh9dVD3TdXnvwwC7mFEwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S9vCgNFNsCCqErxSP3iaUnzTxrEZqt6EsfAxxETWX394LZjTnC9CBKzSyzNzY5W1p6YDzzemMF3H2qnPSHMnwCX",
  "key1": "vJ8GbatK4SDEe8ZKje6xRGENMqsNvXLWMFxRnUjGQEWU4yDm4fdi9fCoPVTrS9g2tanQrGHwYw4XMRveSjtMchf",
  "key2": "2GgXaZ3fY4Q52G37kNq4QXVvssnFVMSf9rgJ6WGyJQHbvevyhcHpn42rgU212wdRZwgEpnGne5txC13HesXvH1As",
  "key3": "2GE9vpqV13wxxUJYZ16sByFyg5TjBmureV2qtgioCTAzgRKELbkhZwBgmBNkXtrWi6JA58JuRRKxh9kZbm8snidT",
  "key4": "3uJHRJ1eJ2e4bhrwjzWaMNz9t8WZK54zQh2XJvmZSzRxxe9AP5jdWn57pJyAwaF5DdqHb7x5CAaXpdC5SDKVmjs8",
  "key5": "3U4WM4LuDBUet4uhxXm9LM26BicnyG63f5x8KNA1d5d3vzNW7NRVGeJ2zFcV4sELktuifxDJafDmGuhR52Cfp7f",
  "key6": "42v7grWT1SeXj1Fo7RiZ48JoJZqa7jDPaQQbfpfsm39NDV48wz4cNrZZfb7qPDGJwtEutPVuRLgMdrwHo3mBzrJq",
  "key7": "3oEWbvsAJwJrLW67FRzXkPH99fFtkyjoNqKkmUGe9abNcgz5mbFqd5QtYuiJH6C2XxtKh8oRjWaPpS1Gzihj1Rvj",
  "key8": "4dXWAA8q19xDJjdxM8hqYz6gZ5ekbhEbE5ueSCZyepr7nKY3YwsDGTBQVxdKGXpsD6orviDKapQFr9JaxVoNYRbm",
  "key9": "3ZwkMmsZStQwqMrisGc83hwLEZDZQV5GgE9qsxRRBqWmteX8CYwBA2oKhhiHMnGociV9oyEAy7s2PGVpAAttswgw",
  "key10": "2shmv6KPh8ciJy5znQwxQBQs6Qr7XGaeCsSuWKGrXkfyQp8iCCMHcyHy9iH3rexcHh1jZ7yKBa7aMgCEG2m4DC8m",
  "key11": "2L8fRxjgW4Lox4zwy9kqXnC3KkKY3fz36sqW5GSkutWHQ6Xt4HGb1UiuoJHPtzQT2YW8srffB2oxg5hnyvtsTQBs",
  "key12": "2ccGpYXb1Kdu7NQr6jW4teZAKcachKQcGUjkx935C3zdYezoNALAXiQcMLFbR8MQEm1jWoK6KcLihZYZnmEj2uuR",
  "key13": "kDvZtNUkkMr87NCcFnXtKdnNQqm3yMVwutpGpyXNLnhLrz9jch4poMAhbVWM6NgAXPED9TnoRHf36tnjPGky9gx",
  "key14": "4FCWXv5KwtzvYiJtYAJujS2Qks5yQa6DFakoLq3ZmM292MY8wQ8NQijuAMMc6YaWZKNCh5dxqeRWdKKArm1PkWhU",
  "key15": "2GshoAJj7nvmvPLAJzWVD2je4hAqQHqkWwEVhmnykomrD3cYiPgaCXDyuVXwtjTp6sJSnmaZx9mt6wviaNAmcJbk",
  "key16": "MrYfWYvYZPgr8vytKYffiZSEQ4Hc1LMAt3YaAihVPXNQMPxJA8tZThBdsykpHgM1pc7xrY47LMbjrwGk8TDNKmb",
  "key17": "4ZsxWvqdKaB4715Zt8stRESaMewBJWrGnkZv88ZdZ16t9hH4pfYbNkLLZuZ2wfdoYW937zgAAVQC1koVmd59CKCm",
  "key18": "UptHBEVdFFwVzWtNAYeA16i9WENwWdgXASeZb5i7rrCq2aBss5ayexWGfeUqqQV9SF7YbG2uY1rGUcs3LV6G11F",
  "key19": "3EDity9Wi5AncMzk64JmELZSFsc2pszAa4nFfCeYq5XSYhtXdp7Fja2GJz6edPwQiiVCnQY1DYnTBfD2VktNDwWj",
  "key20": "4a9ibhCZ3Z2Jkn8Biyc8Hi6i17aoS54DMtbEfsUhk4F4BA4sQ4zVgRQScf4ZZVViUGPArUGKzTM2pnTLBNQ3kYAp",
  "key21": "zkrm3bKd85XFh7Jb4T6jGezTRvZu6D8LuG1H1Mu93hDXdtBE3A2f8Hebko1aE5JvmgueJGkVtxyCj6YKyeMMZ6s",
  "key22": "PatYHDxm7WKiPkWw2byurrtsC5txM3vmRK1AYk51DofWsopkuA3EgbEbogJdDthsq8DFiG8u6VwCSWxDGm8RoRr",
  "key23": "4WMNimjJyUCkUQspuFyhbwiJSqpyLd9V3fVdYntAco3oex5LXGHKE7bX3Gi9kn8kHW9weRde7QipoyNwCN6k1Rfr",
  "key24": "4jJSVDiRuEpicTYLRbpiQaEXQQCk8bJBj2eJCCgFCrRSjEBxiss6kHuoTz888s1vpj9jpuWvwYihKR9ofPpuUfXc",
  "key25": "M3tYcqwiajvzakYCyzJHzH3gkzrdu5gAETf92syBxRJXEyq6wDEaJ4zQsbVKkjS6euStHccSvrK5J6zFn7PptRo",
  "key26": "Cj5QC6z5U3RSvUddC9ZkFTdN22EKTwQqPrTUNCnb4GpNf2PSbQ7YauWvEi34bE3QpBDd2BTNt3aNRj2ni4D5UUY",
  "key27": "5VevpEzucaNRwwrZWEMYEahC24NgKtBursF2TTEj9jN78tq99xrUPhMzFdfBnoJM4ykjzoNvqYdgqu6FbKfqHKp4",
  "key28": "3gVQkTd8XxLkb9f8MsUCYRGEqfjpV2ZNMwx3enPFSyFmF7SiiS94QVTUnjqwC1F9cevGBnESETLC87YNc1sst15m",
  "key29": "pA9qEtVhQecuKWEeiBHJ4i2dZQQeeYxZhpQiL1mo6thwR4QsTWF9bZrhrncaM93WTvv5SiPr5t74Xf2YxzVx72E",
  "key30": "2akqGWRLXHpJNQUpF3w9zVyWxSuNddZETBn8UKZ1bhc7XAy1b6T2RvgGm4p1GRraE7gqLkQPW9sycAKDazU6kQK7",
  "key31": "3sgaWe93ZWMcVUMeTg6x7tvHsfx9PDxqgQhG4Y3CGzFieSF2D5vat9BG1zpvL4WBYeUyyaW8EQLP3J2qSWhSzPSU",
  "key32": "3uwnNadUcsuFwhLAP9d3UPjvbXFYTCQ54kEt1aRZn5MwoVkNYkry9aTeum6Ho3CGmEDe9A4z2YJra6LUqz8ttXur",
  "key33": "2emMyAd9S7Ad5jnDisPQupToN1o8LZjAP5Rd12rC5CGy7xyGnCfSjhpzewPH122p1fRqwK3pWzaTULvF2nCdaZRY",
  "key34": "4z3cffnJGwSKgTtZs6Z4y51HyWPzXtHWJDorPC589icxi5UG4Yb55TD7cBNnBsHnUyDKnnKff9eW5JtrSXboFVwy",
  "key35": "4HcdeTYbkZeospvu37q6uR1gvarkMMh4bQNRYv9BKSUdkjEPBtm8NrcaJvQiu1iogvWDQY1kGKw8k3QCvqDNVTiL",
  "key36": "5wujuwTpzg3NxFPAT4nnradTCcDHZW9jDN4URNuDeFTDdvgmE657KFuQ5wQJALbkPHGy3s2AMU5uptpFpz9h8twg",
  "key37": "5yz7e95W1MtuQivBLcVXVsJjGEzJw5X8V8xCrhz4y8p77cYSqrm9Md1ph4F8dZ1fx6M2et1YVVa6rQz7FEmk9rLo",
  "key38": "4Syu5epNsRircHEd4NHBnBnSV47vpkPt6jc7rcKGQYXTdGbNDZct82tRcrmC1xAfT83nXmwx3fV8nZWn6XUv9nB",
  "key39": "5T3LSd6vhrXmZuLWyGEGVWFUZGui1DguCFm2cFSym8TqmWrYLQ87q14dAMkPJVpMMAaszBN7GAaw5qpwgDSUUM4Z",
  "key40": "2W7fvDGvw1sxwsxKFL6fRHA71mCzMygdhEfGsdH92xZVUioVXER5a1tAXbxqfFkYyHjW8kM7FBW9qL6QPikSpodP",
  "key41": "XSo8NKWVQait4wgorBFNpCww6x5ZjohhXa9FpGHLe5gEsN6GLCaayFHD64sqykxKjRGRjLgxu8gSHxKVbMqxTYe",
  "key42": "5dEYpafrsyAhsX8UJpTzoV6UmpyVTzHNySmzqSuUd516Fo9wm3SmqtEEebCMu982FeNH1nnfdvs24WEwgbZk2o1T",
  "key43": "5GFutz5UVDq63rw3dxvxoCy2TvuqMHGin7orc4cjoKrhKf8YBvhbxAYiv7VkaSuaHXQEDAeyVuGq2uyoPBtJFDfW",
  "key44": "2M1PGuNVkMDmU1oLBLbr5r7eBa7yFrBQYvTd8Ksh75RbjB6BZwNZqxtif8xuAxzCckegJMxZkkXwoH9vTG5LWqwE"
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
