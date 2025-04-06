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
    "45zXNbojdgD7pfAFcFWmnhEezCngp3GV61eBujERm523WPinp3aVdJDpvBfMLstxQi8i1uFuYQcAstxTzgJi3VGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hXo5dhKri7uEu1xWx9pjr9KZkYsYREMvBTVkz2ZcwS8M8qcUD4ZvpZugXQhkXymUu3QU2assM2fyyeRR1wLF4MA",
  "key1": "4revrJr51NL2V2vXe18K6S2FViAP3xo1zHHxtREcQ1vr74fvvh5b57LaY4BoSGMXM2Bs13h2z7wLwkT9zhfAqtwW",
  "key2": "57c4H6dfn8zDMTrwyaSfyYHQK8mNSPGVeovSBDGyS3zmn25GBYa4tHCvaAuWRaaTCtGTk7BdajeYH8MGa4BFWeax",
  "key3": "3TzAQYTLJLBjzvT8wdS6yP4R8AoRDhTau4REY4NR2gXzQs6tXD9Evq76ifpw4aWHrHBthyMbbLwdhRAU6tK3LdCc",
  "key4": "121UjB4jSDtMwAuLf5sAgtpXfZVftYiBKXxgYUMdZUTPMSLTListYBZvEPKnPpnFg33XdZdcW4MozeaQr6FpVJbt",
  "key5": "EQUE9P8VwKpp5qtsuumH6KLPXaHt5fkMfxgziivbckfQjpdE4v1SHaLZAHPfFpF2XLXBdggbwoLqT8UeMqiw5xf",
  "key6": "45KVS9RAnLUJYhtMHoJyXxBT2gzHNT2CYCxtNJKrqrtzDfdWCqgxiXct8djeZrP9xGPEJqVzC6obhQLXps3M84TT",
  "key7": "4CUWsrToeC8MqVwU7FxV9gjxSChUZ7NLrGk1kYkBH45PYZvpuRX4a7fZtibppSHuForpZUvSXSbiv1bwY364gkzi",
  "key8": "3QvfCmZGhkmtonJkfExopDdQTKWN7Y65V2eU2tmJkwE8onXEfMWB5sHR6SFLX8VpXcbN785y9aMgakktkL9qoZGT",
  "key9": "F5SeZTpVnCkyX5aZyRQnddPK5TfoNZouR83FM3DAtTH6xzbJ3dU9XPuqxMKnb56qsMKFJo2bmFf8FGW3oB2MLvN",
  "key10": "AQFFzd6UfAeRTedMNVrvBJMN5yY3UjmtZWkha2eTGMGAAmRZW4NkTb9bXyfveY6s23bV5MP7Z2QzPDEcj8goCQn",
  "key11": "22mpk7QXzBuZF8HMo8NswsZ6JHcniWponNtXnZzQdQURVToVjQfXUq7UyRxspwdHbJKzv6q1bjUUQCV9SVkjBEAn",
  "key12": "jJJCWTJZDrshKAqSUzvrF6KcQMZHnKWnoZpvvhgwUwxnYNLykNuYzZvfD5jXf1rtqXpP1M2JwTfmcFUPxNNQDz8",
  "key13": "5Kon5pqN3PSUh2pwQDXpWooFAvGJr3j7aNWzfrs96cSHu9FXNcAcLS73udME71TeFMBYvwCgjrtcVuPg1iFHq3Kf",
  "key14": "5iAf1pYdNm226PVbesCiPBeUUgJMt8GGURCvKUJXv3jHP2YWqE1N5ArCyt1zs7wM2JR8KN7CgLBBXiFNr8q53Cm8",
  "key15": "dHpjZQW68mHxntKHPHS9aGNdHFx89FroGT98W8ruGU6Y56cB34ZiwMPevZLco6QADpWwjexuiikTSewj13MzLzo",
  "key16": "5BGXpV8vLzPCssh1nJCoTqthYsALYHK4oVf4YdzdcWzsQCPbYt6wez8ecSmy5nW1UF9sFR9GLafS6aQZvmjr68aq",
  "key17": "4CoGqQWoMU5YwQmWNwq8dUuiYonRnU3FScsenMRM46CvEQ2tF2WU72kLiapAaE5kyrbQUQ2CZQBNvTqXtUqeJm8U",
  "key18": "5CNU6dGqttwCRJxwGAp7dRqkrkqhnAVvsbjMyJQn5XmCRx2RhC2sns3BYqGbVMoXfYrLdHhxAkDiMnTQcqvcTvzL",
  "key19": "2PF8DZYhy3Ndnp59qWWDpMMyYVqhyz1cnEQkzvVSeB9SozaezeHcmtxUc4TuyMXUp3vAJdrQADwVMnZ4mkDZJriL",
  "key20": "63gGW1HRu2hQc6JD7WP98vvQqmYgbTeHaLKZE8KqYsP4Lr2FMpwx19ThyKKq9RGBjWEZi6RXrzGmiPkt2YsPgpw7",
  "key21": "7RppupLqxemTLgBgfrjqwpqAB1XiQRTnyRdG8K2HruHdvcHH8smgTTzrvrz26oETW37Y9Zsyqt5v6mWSSYaMx6j",
  "key22": "4PXSSUN1YJEMZG5kXq8gG27zkoiahS2LrsyLScEGkwmfXBRDXbcJ7Hb3xnQaDWCPbhYuZ9WHzK5PAMtjHEsouYs8",
  "key23": "64SCx1XviSXs4VgpsEYuNtqKMYifLZhcYtRmLn1tyheWdU8qGa8iiJyfFULAgzC2FDvoe14w2Ld9JoderdyamqzS",
  "key24": "4CHJ8tLJmyVnYRrkgVDgTDEou9qEtxuyAUxVHFJn3bk3ZMU6uGEoAekapc3jc5mkTsGWYwcuW5bLPwiavSTYQYYW",
  "key25": "4HdpEKbGfZv4a3xUQhkWYAkaxyERrkQkKR2KqAkWQBqoJbcSjtqd3TyR9nL1gL7kcJCLfBh8Dd6VSrbkR8CKoGad",
  "key26": "2wM7R2MfQvBMg5WcWmeb19LLHbxuRfEGVtoji8p8MjHrqMDfQsUb892A4XfBXcLuVUX9445mhRPcb9xH7iJrAkWy",
  "key27": "4ok3srxG41dnxzm98uyfk3mbVm3T71zQMLfnbcMvMD4QaBstftDHRb5xN1uUZNJwxmyKQ2eQw7drZsoHqhLKqyEG",
  "key28": "639vrGNT2JoEsgZXxabH5k1drR7yruNDFuzYRdn2gN1vYPCw3jiEHGy8o4dVMKnwwkCAaERkBwreTGvqcZu8hJUi",
  "key29": "4uyEfqsFupqrfLQi5xxV8zvWVaNb3WB8TN58zRJP5aC46WWpK3vGF27Jz59igV21LnULN1fZT253n5t7ZjgbmusZ",
  "key30": "38FRPReNCgpo8YB5XX4acTVok2cDKPYctebw2MJVB1buKNtnkYaZcPBBkppP4hxLQmJDSjhd6QP6UBSQpPFgVHNv",
  "key31": "2DRGxMwZwJmvCSasM8L9kPiab9547Y5MeLxyWouf8pvZuutS1YaQgp3G29mgoF5FsmDtXLxPP49ngjFa6B7kVYzz",
  "key32": "256zEcE2inSvcRb7ZDH3FkoQZYeaTY3JmEfnEeL1Kj3nimci8cQEoXWcpYyravwA3RMcJBVTRVqRpvD37XuMstf7",
  "key33": "4JK2Yp1emFnA41WuR9ttLgNMjqujUGp5W1s8yEw9URnf3a4uavF6Vz28CsMwSNFkZEy6m2o8JetxFkuDWCqen8Ls",
  "key34": "5EWv3hoKrhFsJZpkxRGJSuZs5mnmLY6p9kP9T6GhWgNQoKcHdrViBLHoKCY3ur11HAjdQGxJX5Dpb2dC26Bs1r5G",
  "key35": "3D5qFox9CEu23odYM51XWEddLwB65VMeVRBy3YqmHLwSVP6qKxmtATaXtDSuuWAWTWUGeHNmHX8GAHn2XL3qry51",
  "key36": "5KRm8xJUQk1i3Mugqu6nirwcC1jdcNWXNVZ8niYJeh2NQGoU63XGWcBWGrWgUBVkVu8kmW7YxSNFhf2acMeNG9Pw",
  "key37": "4CW9rsVGbakx2ED5d1tka5Nr3WjgQwvGtDqrSy4JutGkQYzFLQvRTiH6Wi7FGE6zG6FQ9773cqxpbvbgyt1AR3qf",
  "key38": "3KW8cH7nDR4XNkNzaLUACanUKq6SviBUvM2xWc152hrRqSNW46T9m5y2DAXHHJyYPVgT1rCZkKyRp6wxRa3s8cpi",
  "key39": "2KpyqZnBWG4Gs63UhJ2GmYhgwgTksn78Tt9wGxe9wrvWFbdRsbJqXQaPs3roSjDnkkNXPHbhsKmNbhHVU2ZgFATh"
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
