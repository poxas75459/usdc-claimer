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
    "DcqUhDiYNPfgQ3PKiDtiMr9eR6RCP5jxsqGSAM61HhEAgLxKbv1xP63tE11kJ33paM9W5ikzneaf9eJVAaW7RYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZZESuXGJARPqdH8Aq6fnLfAFxNHxNWZv2UH9nG99HfdDYfKeiEvaLt1fDTuFUfN3jvyKuTYRhCfWBWYtFySjvmF",
  "key1": "5e4bo3tK5PyuUoQwL75CMoN6LLBRAreqxzuNJgTMohhAhfdPPmprnkUJjcW3zouCk4FAKdVWT2x72563FTF2g6JY",
  "key2": "5VaGkELn35dQnoMyLfFCfKkgwAGzA6v3KZtkVtf34T5hUT5ViikqF7XW7DdmVaHxueuH1QLEhK5iCspzyoYe8y5T",
  "key3": "3JznjPRY4JWi6mjmpWRiHh9oLAQUHj5qDLZdrM12ydFnQiZB9fTgRZpuA56GPEbyr3rdfmNi1o5PiVxmTw6SAnTB",
  "key4": "5GG3ZupoyyxXQsxCb3M1TCQKSiH2UzVVYn4hiENAcXwiPrF9x94gjJjNpFE41tEHJodZe8ygiygKFW6z3p4skPbq",
  "key5": "28LCfdR6HzZ1yihpTahvyLEA7QPW9QB3aLRryYBL3aCPZ9ZR6dC4cX4xiEYMTJBHw1jzVZF2381jYtbBSRaDtvkJ",
  "key6": "2MVRn4E5mRwMHeVxeSsm7uk91Dhd6HCNspoEqtLyGFZth6WvLFLKFXVww4bDtCGGG6LamxFmYEeVqMXKRh4TiFYy",
  "key7": "2xqVvj5S5UmNDFxJ7WSbUCPZYpLUrCVKAxAkqCsy7pHZ1N6VC5xyWZatdUoGayUXbjwrmyahJVA6GD7VwWQ8Ft2B",
  "key8": "2EcJ18QXPvfPMFrERNhbRE2RdJf7fXVap7rHxzw4TVJgst4u99g2Z398uLhq5cxjNXMdjFV8Tt82rMkXB8mcBCV5",
  "key9": "5h2D3t6oeT3mPKbCTkZZe6FUMmViFqGzB2BrnBEz1FWifADJB1ZYEYiK8ibzYD6m4CRDDTbXRcohX4gQ5pfN42tC",
  "key10": "5rqWcgbo6WNAfz7nMieUDEJYGu7y44GxzuV8zG4R9jiwzYjW1GvPGVggjg74hc9Py9Dp6YtUeYxLEZcdsj6aTzud",
  "key11": "NW4FkkcNDawgH4uCHXBukJrgoU9K3SfigZY2qCz3AgPzu6Hb6MkJ8w5xas5da75nb7Y4BfYe8pJLWfaVf4WN2Av",
  "key12": "Te6tRcaYsKYu3G5PLbYMMeY7r5c29BRpbDk3xFXwZhLzu85h6ytLJkn65ngZNbF7KfXjJ636tdcG9VoJinMjEHo",
  "key13": "7xz2EETCD4d8zz2WJE6894cbDoFrQWf8R8WjGq2J6guKgJ4QkqjEeJXhXzTjTwXktkfK327g6reySFv3HGMAeJF",
  "key14": "P2aAgow9ToLig9SSw4ABh2YxdsdHeswL8AKrScoU8EsnMZ2fdD5qUfeVKLYPKdZVBtyvTqiSDUHrfgPs7JWq1pm",
  "key15": "4s1k2RwMWsMciGXGpCpvyKRy8W9srWR7gbUYV9pNHkZEHegcY4KnR4RvGcw95X1mJudQ2XVJE2TKPwXCB1H9Ltxt",
  "key16": "2cQdKNVcnMACgwgX9TBXBxFVyCNkNWYpnF6Qz3KPQ6PnuB8JyVEVMJXEfjxtchh9Jx8yb4GRk1KQXauqffsHf6DK",
  "key17": "3xznEXWH4FbYMVxrnGrK9zrRjdEDYyxZhv6gJgQR3uGcrxcLLq1nMdxRLRFKsFGsNf9BsYYwLyLp3WV3MLKrYfor",
  "key18": "sSuLkaMmiQXxGhTz2F9hBncxWzSp92bqSDoihTNcKLTaAtRmX94m2Z4PJDrxwgAVHfSJzPD4ou8naVexspUrBaU",
  "key19": "3fCk4dqZsVQxqA7DiU8ivvjFWDMDwJZ76KHNjMEN5iCKxzJPBGnY8VFEYaKthjEwddupE1VoscTVHazTxJDozvXM",
  "key20": "4Wugn95jZL7EDx8NAZR9rSRHVcH2mfkYGQKE6HaTbahvozF9cGykdJPFLK6GKWGvWEkHTmxfUuf3JxbAjtBrYKiG",
  "key21": "3HSCEVCN9aap3GUqkJWYyFh57JZioWDXDBtyqgutCAXxej7Ce9XY4UJwmqvgSNjMuahTskYcawxjjEnnRzFWSTcB",
  "key22": "5kvtuEvaW87XAmCSsUQQGVe84aHzCu2XXfnEcxHNqBK2XmZsKwsJS9AjJxTSpGaXpcudqgaeKSYbLK6TsnTsL6r3",
  "key23": "4KYnrgVgt37M9g9FX7csXgk4teKxBQFRdkMx18qLdx8PXwEChk5i7YunBqk9TshhjCNZ2ZTZ9YmrPWqGPKKz7GKc",
  "key24": "2vJQi4kBLTiwWKhzRUFuiYeiF4eeK9XiNsZ8BNPh8qWC38jNW8LkyAnwPGcmrbgfg4ux5VXa5D6VLrdKD4Edq79G",
  "key25": "5HY68nz512T19x5BJUMfvLsmYZmki4cP3Q7HFrAsphXDpmj2jhDibDZyuhm9VVheHyJ4GSwLvgVQPdVzJyEcvBBF",
  "key26": "5TkzUf7jtgv5VYFAfw1dT36ybFcpH5X62YPaLfzpkHAqTi73XqA1PiYfobwKr18UudbqShFPeB8TDWoP3VsMvybi",
  "key27": "556ZVDLUEdtWCWEHgdU9h4Lyk2wHcvRnqJePCaL9vjHksmAQcV441kKyxPSVZtiFaYustiEfs8hZxsJw1DJdGWmC",
  "key28": "4LCf8qMsVMv8oq29FhjWXciknVxwXcCrKDhHmezJdBWewdJ5pDYmzSZLPXsWro9MSUKCzKr3RQuWisiNWwuF7uV8",
  "key29": "3jYTe1UjpdofKgAX2AciY48k1UHi48Ye3agKB7Tz5GJBHc7TRUL848v8CGtJPdLJhL4oLhNaJ8Qfj9YKKpASG9PL",
  "key30": "Z3r1D9UN6dmj1vq9k19Au7nc6irP7pW944XTRKmwun8LGBWikRqDpSnVJPvfumFEammjdPdBefoo9gMc8n4LnEC",
  "key31": "3cRn34disNpuGTzwc1ToCY2FAuyqoWyWBMxPWGw3WBuAeS3Repx1FropisbNVTTwP69aUvgUoqDnGjXSbEYMPgSf",
  "key32": "oDvZZKQWmp8CAfmq3M34PbzPNdU3vK9tLEacMvFCU6VfxT1YuaMUF3umCQvVMVhkVebN8xf6Sh9qubjcm6SENds",
  "key33": "2GH7cnfZ3mQxCSspPwmfUYNNYpJtohddLXdnY6TJ3rHz6DACDJL3p8J6MHxNndcavmtuVfYfxuXrUrQJDUc3WQEi",
  "key34": "2Rzpzd1KUgwhPLjNqiN7cytSmtuEFsy66w5Yp38H6fNoAxCtmaWPRC7RHJW7vs2LmyyZ4xeia4nCLZyYLKoaJ8pr"
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
