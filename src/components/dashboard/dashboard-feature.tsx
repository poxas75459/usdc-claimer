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
    "3273UeWBXdz4Wh3djJkYc5BhPxL8myPjBqtrexsWyGCgzp1z8zEbKPLCD6U95qASMZYcgDgjLuoiwWUUH7Q2KKgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VSRGGzRFCJ6Nm8CvhGqAm6jW1k1bMjAAJav7EVCrvC3HPRmcw3HDfcaChHHYy7c5k3xxJH2c459etMicWbXBKc9",
  "key1": "2STchYiNKn534QVFpiyvmxK2AZafqfjLGafAbFJcMndSgSX1ru6wC8VRPi1S2gTsXhVGKBop3i1uDM3RUizksnUm",
  "key2": "51ggsS9t9AYKczBGtpFVaYbTGWWve2j5AeVnoGkURWjaHPqygRgUMnTrw9mFTG4bgcYfv98zKVAMUWbFKJ4cJRMv",
  "key3": "5prd22kb452srfs4tnmyFrA6MQfUAxaTfgL2Xdhvti4Dt7QsthBLXszydyAAeCMjyFk7sWgYNJRrkhpKpvmwqkpG",
  "key4": "5nptn5vQDEaccU5AfsZgrq9fYikLe77kAc5QJvUbFUZpHHngvTmHS9qKJFQd5Y8uc9h6Nq4Yr6UWWJej8a4bpcCP",
  "key5": "QtxDU6tZStBfwwLLr9rQXgt8SKevToXihgMnCgfmAfjT5gLZZcNQCDTgbyW3RVEzGzF9Fg5jZ8YmgoqXwdFQS1h",
  "key6": "3k74vJdopaoWM4iLUUEM8RorVXHZeuv9YjjWxYXBYWRb7e5raibDGRhLS8PCBoFyEJog5YeBTDDAdp1JhGJsNH73",
  "key7": "Sgi6zivnd31cWyLCCqswDjKGn16qV4uf1hurjChXGuQDggPgKnQaCt2kf6DX9tb38iLhqkRnsTHdXdmCt63Bdqo",
  "key8": "4GNC6DJR3wYpG1kxN21UimZtW16AX5rXHcCU1DQeULmkuRzRfyTTmPJnJqcuo9G2uuTsvYKyUFgkYViQ8AidcpLq",
  "key9": "4Rxw225hmQgVbTQZYt3EWzfd7Z3apo1oisq6VmK1bTBkf8PygBpWhHvfQ6xzB17RV3rmfJpS5WxuQ4xuCMn74diR",
  "key10": "3f9cvVu8rRGcaBgc2PZepH6R17kZMWc6GdYqdzpkqJBHhorZ1uM5i3Kf1BXrSFTRL6VRG9oYnSXSiUHeiNupskjX",
  "key11": "5yUgGX3wFB2UwgxTQ3aUyxSdZCe5qRidXxPiZCzH1Vz9m4fQcE1uTPc68HbwM8nSi92ezR1kP8ijH9xijnHHVNcP",
  "key12": "9tCTDwPkNguT69k266HTVG9VtFg64sBJpGs7KJm75spjeVgXUv14SGT4NstykQP4gQTgXBXPGBrEniyGtoMXHhg",
  "key13": "3QTNw7XA6NpJtSznsrcXbUEP34LNDRfcFe8xC9bc56tNtFZwb1S3Uc2FumDkooRrrdphpFr1Vkpxei56DnsktuwN",
  "key14": "3Dq3DRWf1Qe27LFNYTyXjvGwDGU2RyPNP5nuDcyRyLci4oxJhqC2rRVoq3LntPwqNRciwYLrtC2wThFT1TuvtaTE",
  "key15": "4dko77bzrspbyUnhBmaSMXgSbtb2phz7bhkyMC5QKAVgqgFTHfwX8quK4saHN44CmnEAWNGHKZSWEZdnLJJAhTzs",
  "key16": "62yCfeAWxtsukificZioM8ruVvqQv8iG5Yd7xgGycdwSMLAWQ8Kp5cgT1tr4Qk8Bmhj2dz2zEAjykaiQkbtrqoNn",
  "key17": "2chkdSojXVqnnQSbJj92SPf51S3UZ6oiFCKx7NRWrq3XNrYHs9YufWoWSjUq4RB1ELkFm2Wv7A56rVf66jbYN5sN",
  "key18": "xpmHkuZrconjVZrAg25wNjpbr2MSDre2ZaRzUuPtfjiuvtZjiEBdTNRC9cZbY6jVDECjWQz8xKSkv6mdS5XHVws",
  "key19": "3DraCXDS3LnA1Q46DzR4ZQYmQdRHp74G8GXGVA6FSjc6uZw6kwtaQVftKKmXjPXYEphwMPoXYaY2HYKFiSt7evY",
  "key20": "2XXZP81W1carWy3enSKVnr3MnEzHKHBfFS1hgaD58RmWQS6m7KVJufJk8FUPJiZ4REPTMQZTzh5BSURhvydLvQv5",
  "key21": "4AWafK7wZGqpo2AYzevYzX6cC5PUvNDGwTqK4u5mXXZ8bt2AcVzPk68rUMoT6BWT7bq6EfZVzkzExJo3Pa4AHCP9",
  "key22": "2wa3TgtyumrZJo2AkapixcJdTFyHfNQnSWe831K4UF6u27vf8PJNs7EzjoTsAmH6cr12c79PziwaLiU94qVjhB5M",
  "key23": "2VNAzp7fStg4qgiEdegUAnwnbJt8wWwdnMrPaSenwsaHKwiBNR3ihkGZfUMCE3W5yzUc9g3Jmpn8HpDw4Ty5oczj",
  "key24": "5JEAmfNtDmnW3GT45E2hgEQSR3aAHwaNTAankW5wZdWyMumzru96eLtXeivNWARkgAeikQ4aFPV48uXnGghTViRj",
  "key25": "vhRp9iWAXAGdnk5VGWpDopaTce6AfLnojBAcxEBswN98vUvafMMrxrXiEHsWGPVKqDZ7QY7yEbfWP2B8QLYTTRu",
  "key26": "3DXXJjRxYBLCDUPm9QJf8TKx198FFwjQ7ZqXqbeWqrJKWfk6BV4KCGNJYxUim5WdJDDBdCzDbh5Jaz8UcfLz5EDn",
  "key27": "3du1vzX7B2oYqGQsJNFdrJRxoWH3CjtKCmjWLSc7XYShgaYBBHDYWn7Rr5Pwe7zDfi9TgXM344dmvNd4j8J3FRvy",
  "key28": "51hfookFDMsExSXS1hmyPrqaGMmLhTWL9CkA7NcTS3RnfcAr1MPa7afP7U4Yh1NBD9FpUamsM9z3Ppro374z5PFD",
  "key29": "3kZHoQJMggPd6DEzkvAdQGLwe1qxaNNuqW9Zgj4DoJdyp4ifV8Qnzr4axXH6degRgz2wiRu6hYCzE8PutQEiTumN",
  "key30": "46AwefYA9U1sFTR22jhCQcJSHpnzxXdXoDhEEPAFqD2MU2ZBVr58EcwXz5RyPQeYg9LwHuC9GJwqg6ubsLpkJGwy",
  "key31": "3ZwYyEyTo7UyPcV9fFmJqyqzCfGHJxNAccVejbSd85mpsmUDMoosGiS8HmtGpsAGr1sddrYmzV4ag5Wr2RNJ9z8Z",
  "key32": "LAuL5v3d9nCiKCiRXPapvYHnqEV8Nt3GRi7XA7CK6dmLFGKn1bZbd3jf5AfhKnp8c6faAn9xQ7jW5quLPc9syty",
  "key33": "SDjEjy399KYbSQN3LSzh35SczSiH1gdPgWHwdq15uPQGTL74rQ6aLU1cVAhYPWEtTtZKAjrmVx5eHqEw2ie68or",
  "key34": "HpEhRfYBEUoJ9jdGTtwnipiUHYSfKFvDAqTfVBWW3e7BESr12BmDtThzLUKUG7LmqjMvvywZu7YHe9Tp1REewGe",
  "key35": "4oeDjwFsKByGRv3zFaZY1we4hMS3hzgDRxDy2qf6gdU2MK1Ahn1XcyhisxtYDQxzcXr8nVRKEnwZRVtshTGdoH4j",
  "key36": "5RsZLCN2DdLsV31kfyx2mwkUkYqUkN9LgJFpzmqLk8poRtgaaXwQvzY5QBjZRhhcjvCi4K3567BVU7uyGqKqSjnQ",
  "key37": "R1dXmXKWFjePf8MA5CvFW42Rh48sdLzVuzsticV3dYfKuTyMaeet56GB4t2CEKzrzwrTKoXLwzU64c2qh2ck9Qv",
  "key38": "SeRdeCmD6sFD9FXBkWv9Exz8GxE9RMYqGG7y9Lg21s7vXaaSqn2fVkkgM3g23SKsn6DdSWZUJRyDYMQAM3aaGK8",
  "key39": "GChKRktooohMTYehvF7YUfAn1AHsu6xA6hqTSp7PUfL95oSyJEVHArup2dXCbh9okmtsCqt5YQjmK54w2tVqgpP",
  "key40": "4Bopkewe4T2pbkdMch1vadZ6neXenyWRMqUsyjDJejGQZ5AUcpyZzSNrqaLa8ztMwP2qDisQjJ7KvgFJXPk2rcwR"
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
