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
    "63g3maVaZopBTMND2gLnH9v67dScjJg79sRdA85aLfWDeru6vC9QSrUaiCA9chQoSLA6Rq6FfCvfrWm3zgCTqYFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k4NHtKhAiZFnR8KcrkqLSGfmzUHCkLuBhKjzinDkAPyNGMycjGkwiC13xBnSUHTbyFgQw3ZRGsQx658Squx9A35",
  "key1": "4eNBxGdXPqn3jC4H3CQUHCkUQL4Asw6rdDrZqerjnZ5JeinwGws5BC3rm4fbJgpU3x95AApT4tTQuaK81Vvvnwfa",
  "key2": "4pUk9U6vVU5kbySUjzwMW3u6Xu3iDkhn8jUrpSQtsbfddK5F7YKbJd9kqjK3qXyp7gAmkmZ4CYKSH9hZ2ZApQY95",
  "key3": "5GDhRzb7mwMf8mswiaqo1Kqju2YcLQ3sqxJ6jCT73rLUQjW9CE8CntyoV4GBG25aGPxdTaXM332MFegvL5inZZUo",
  "key4": "41hb3q92PSAi6HX4G2ekXuV4hLQ8UBoaYWm6gNbsyy1LcqVZNDjVZV2gTfuALzaKjkNvxavG4hLEV3qk164666oL",
  "key5": "5TfJ9Exu98HZPFpf5gbTY7Uvy8sFUhnh1AC1J9nMWuMXvyuaCabqhVw8nQQNKzoBF6KqnmgyS3tKmZN7FvhKNGiE",
  "key6": "5FqWiq738azyVzzSf6u4UoMsjwfw58cBe8GXdQbVSwGHYrJBAMwkpaCt3tj1ErfCWMoZ8WQYKmaDRDzQWmKhfe4e",
  "key7": "3hec5UJJ6xDV2SGi4GKWzhqts6PzFe2fQNDgH9EDjE6vFZpGHqcPCcFFLiiqGJHsL6csctk8oJvLJbBsLr8BdJVU",
  "key8": "3bzJMF59K6TdWcVt5t3YEWzsy4N37Ev4w7vnopj8vC7YqNNb4USVAbFVSJhset4xfspoQLmKsF6uMAc6pxVMZqg6",
  "key9": "5RV9mhK4Ki5ociXKMVLYs1CuatAAKEopbE1j1GXn3LmRVFAyRMJZ6mJQVB7zkiaKNsBH4UzF9991uhQB1T3efccR",
  "key10": "4iN5YY6UBvugkqfNzcm5ggotsReQjzWztJrjf54g5qRahnbvnESL5AJfABoj4ybZHStFfzQ3X7m8UCcSMQAw3BME",
  "key11": "32hyxogD8zDGugmjJ3Xn93Dum1VQACwF34XLGWdFMswiqKoithfFFQJcZG2DqUS7122ZmoCUFQsK4K6sZuAQQXiD",
  "key12": "5gauiKv4EUWjSRdz56EhbHKQghxLexnKKmLY5tddMVvNWtCG6izp2uG2k28h8WCrjxLjqFiUCHtsK9NJQF6ncxRe",
  "key13": "P7X4umhVGHX1UzpRYniy4VuiL71qxNJCvx8X3ndFFiWW4M3gEjL6Z1YKRKhcrHeTZejpwyvZCNDkUsgttjb7wH4",
  "key14": "59xJosF4kHF5WefPHg4T2yFBadUNysozePpkmxJkMzGGuQZ1LSF6ejiLudHhHw63TJaYq9UqY5BR62rWXErczvMH",
  "key15": "mo9ahGJSRQ5cXdVpmyFRT49QFPLepG2kayuxfb1AcyrLqZF2hibT3PDZ8mibmp8dUY6mq6W2PL1Mwk1sn2rxjar",
  "key16": "4VfiEXmRgmWz9BS2BVumyfPJcN1caic3NKU3bbeUhSk2xaobDhWjqJmyopiviCZBiEsaawtDSUAQjWpgSJQkkJXm",
  "key17": "3PhgNzfN3hAWRyFgXufBBDVgWH7CEHmrCea7TUdHBHEDKput3j3aXyqZuBEeisZfN75gcvJTDgTqkaVFbqRk2bjK",
  "key18": "4488KTHaAMU9iGeRg7BCnGnmQtczri5AjRVDhuosSprH3jGVNV7rGNqLWsHEJaDpC9Q1HRLVCSuuF46WXsPWvmR4",
  "key19": "ESmdq8yy67UzrdvMdhC4UDJiHj97WBuwyNat8grsd1S6GJFnXz2xVYDp8pF5r6hyQNad6RjuPxvYeRC4GdVJmfy",
  "key20": "4yqzzhL3r9n6HZNyrjGPv1mVxPPTJ2aTmNTbSwuFR51KXtXLNTmpr9pPpYkhQo6UPovYLhedKeZR56QeJG1JVzzz",
  "key21": "2yin3MfJpU9azuuXPffCy6VPqPvX2Tx9SbmZCouJsyKj4Pvh16zzgowXiqkaJBwa9vxLoBfgxDauuDPyrH8CQApe",
  "key22": "5i7rYwbWme6kFGXGY8JSypQHi3yH3QbT6Nm8xs448xAnWUF3hGs9saBPfxJqrZdNKa5rBSHnJQtnq4ZnYvf8AqnJ",
  "key23": "2PnkYyTwANirR6HFj6iFP45dzShxnN47aoDJVvdFUX8wKR2atceYMyPW8ZBEEwXopbehNCrnSZiQDNHwbMCAGybz",
  "key24": "2eYedKj6w9rnWF6wZ12TbCE5Vu3gDcErkukBZ5Uobm3iyzYTkkYpHPkTjdSfwomj6N57ooC5cEqEjJSKdCpxQXo4",
  "key25": "NAyknwebRz6d5WWRfKKpqhVRg1XFTK3bi6opkywtrRmnoPmxSgbNKNoJqo6BbxJ9eETo7BcD9A6PLqsAYhJ4NQS",
  "key26": "6zcJs4yRb57C8WYpYc1SjNFTVkmbJYT3QgFsmSh1HSGLbsVDGtbqR81kdazSRzKvgvdgX94CbtsAxSsGP5dmZdV",
  "key27": "4KfABBAMb3uvkp6J2eYmy2txGeQkRoPPe7HVg1dVZBs9wt678JghoHhnw85rdqY41psC8yffy1H62QvLhz1fcwEk",
  "key28": "4DVuQcgPumgPmbREmxjZiDUP8MyNjMf5TjjNNW6Tsic2DeJkBUifqMkia9QqfXy7MXzjb7BMPFniDHR2fnTQLWUD",
  "key29": "gxo7dLSPPGtAfMCtiKJoXywmtCWvVVzp3MQ1VceFt4oPrAC8Ew3ZjoZQedvTL8Y1uXxpe5ivphfnXxUwvgsyJXm",
  "key30": "4nEYg9RR6zkd44QZs9xEF87JDMppkzb79wEQCRPgD4LNaeoNNDDUDQuPaXEQSpdwgnMePmzERLz9dacVMcP21Jv6",
  "key31": "uAU3K41ttqLuWigEuTVx9SM8M37ncENcGXBcafiG3HmMsqoBe95UsAmfCynL48TsSrp9bsNk2tSytL1S3hvn4EA",
  "key32": "Fv8dPKgxXFj6Etme48XHM2mKMqwzCypZ5kmHYcvannbMoK1b8cv4g7NAzYaUEUF3tUYJd2mJtozAHovwyK9j9fQ",
  "key33": "5CfaTAV7UWhA5Te6WNrLpADQvwLYQh5ci4Zh3nwYdL7JdQX7eP8EK4UzC4ULVWXeL4USyq2Yin55Hb66RcppXuWi",
  "key34": "3Unjt5DnqH2GJT1UgMeY98QxFiWW6W1gDDPk68PLurp7RBJrfasDBcydezm1g4KvWup7piJoFmJUewp8tb6Kyib1",
  "key35": "32rZztJr3nKhR3HpJ4wpPstdqXRZopqankGiuH71HtKgQpaZDjWLAwFE73eP2mWE3YYdSzD16Pom8YYKaWNJFdWj"
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
