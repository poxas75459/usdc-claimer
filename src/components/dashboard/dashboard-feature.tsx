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
    "2Du22iBiVC3xZcX8zw97kKiQJRK5QUBtYTQEux5po54QK9jFFHwtinoyVDW3yR6QNgsegLH7ubKcByRephCFwYaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328hVTByfumcdzuw6S5wbnq4NFJFpAS2D5JRtQZX7yXLqyYfPUmt6HTtX5Xk1GMP1foaqRCjC3MDgHe4ZaW8FS5M",
  "key1": "PBgRqAiGtqkADCGPcvKYtDQUPHiA2nD53zkgBUUviiKfP3ABXp2eTzvEqF4ARaFaWUSXVDJnaiL7pwjSroXTnSQ",
  "key2": "4CzkTzQp12hBpjfVBpUYdXCJh46m7cAA1DYmQACuYQzjhzoqUM7dkbG9MBiWQufSKZDsUjmU1GSw9ZcnU6WfyCwU",
  "key3": "33QWmWc77ZypuzBUFVRGaiBzv8NdnXzzhrACcJQfGU5Atd6GYy3GgYy2CmFz6qgxJfoW2dg1dF1BuAFGN4ts3PbP",
  "key4": "4Yjx3pMyvnywFgDbHeULKnAt1KXLWxLULbi6jsHKjh5PbJQgpbFXiXEaskWeWucg36BQk4rLBkTLrLdzJ7NJD6Za",
  "key5": "4EToiiRkZK2j6xssnJPwVaAEYLh8Cf3pjg7ydERuntDSLk7n6aU2VzYy8rcp6cDp3RmEjkerDo9nC4Kw86tL8LgV",
  "key6": "3qfR4EfihFTwDTDGdurSSeVwKS8dn3fk1DfSHtTMm6ev4VXvgmpvZ6XkQCWoqh7sV3AcfAbgesiUmsbmn7LdMqGm",
  "key7": "TmracZwmL1XEE9eGdu2JcYac7Z9kfJqHeVYtdVRH5Yc74io75VdvV1E5xpWgECHGFfKsyyddAZSFozGvzozVPQW",
  "key8": "3dwWYPPbnkvD4mXMe7EGYdogkwgwpiyQXPNqB3EUtgsW5BS36ziXnPAYL4zCia77KRdUuXpcS8XwKQ8FKwnsktsG",
  "key9": "3HpfP2CEgE94eBgtMXQuY5rPn4bMNHz5bu9SCAZysiwMYRnTogQWQKHcuEND72Z2QkaghtLNcwBMz1AtnwH7Rian",
  "key10": "3fr7d4xDJCo7WHKRr2wDUSH8Vx8mCmpcw31qvQLs869EavEBiPTkiWRqR9Xm4ArYXea5p11pE2BzDddraCRnA9LC",
  "key11": "3NgZwnuyXwgGRb2HwD8h4rNjnEvhYqen9yMEKYM5jCtozyct3wD28mACsKLNprvTVTVknUUv3L19LffW3auw7m1f",
  "key12": "Cucdt8gRSFWEo1yaxCAQ8d434fkM2WNhni9J3Fer6sYqNk56P9LuKfuui8TJyADZhCDtUJpbxH43seUgCcDNwuN",
  "key13": "3bQAPhSv6mH6qg4MJCUC5RNu9JWmPUFSQuyxVsvzBGwHciULPaswgNdmYqryF1us5E8DLkUKE9EKcGf1rSv7Doj9",
  "key14": "5abhtzisF44yH52V7ntfUTcDDZpUfhEjNjqaPihtuJbUNS3ydr6CLnY9MHfN5SeTzXroCiBc7bkbENEtAKcYRZJF",
  "key15": "3ynAoCxVLTm2cH64miSAzE57CQkUiNFPNiHRwkk45Ggmcx9yvRNhNTPxrSLLLQVAZdc6KtXvqyGA3cmAnWcBtRpL",
  "key16": "4ydcHpRY4jGd5ropBGn4zhmRJnu3Fgybj34T2bqYVsk3xJjdhfmU5YRMdtm36zvtaczQPbVbjwtyd9ozdzSwb1Uh",
  "key17": "4XPux9kkE1qVmN9MiQiX6jFPQGKswTcc3HpbJu34Z6TT18SGogzu8RUSogBpbb6U8Aww2r1UPKczwhtwRWRyVEZW",
  "key18": "L7eUpm9R5iXWXSoRsJUw5V87FE2a6TQUmRh7L4KQCC5AeqtEoTYiLgPyqri17E7aGPLc9cdtrJLDV31GjVfE6SC",
  "key19": "3RNcwAWULSTAW3a1HwGnpgMDVd5uXoqkcvYg7MymLZSyvXCGEYkxqh9WLTVE1qs4NH6GkJyffZpjJivwQVYpvsE5",
  "key20": "6gTjqCioeVs42mDpJ3tUybQkQWfdfq2FSJoQCNoMCn2UTU2tBgvTBKBArJ3Abk6WPc4AQYR6Lx1hPpWmCi1bvaS",
  "key21": "21vWSML9QXSYSs3MEgNucmiJ5BjiSG53aZJE1fJTNQRszRFscNXGWQkKbehVEEDfYj6nzU5SzsPfB6BMAeTWBmcW",
  "key22": "1nTLLYN5jXQ6iWwStaSjX69iTvcazucrb7okpgfHkpBkewMvR1GM7uZUTGXcmrhzoTNmxg8a1HcNKztjBhp5rwu",
  "key23": "5BbD7dyq3EoBiTSiNmG5JAh4Aqo9FcxmzTEfbCNoYkCTEGUNdYzUHMZR6GhCfTMPNdHJYYuWWSti7r8TAxb2LPYF",
  "key24": "3WQzcPUjW7QqdyNMTk7yPzLBuq72kDMw2KLZjFABzrUuqHPXXfJCM14iUyYUeKeem37Jt2aUWX9c37dArm5SsPz1",
  "key25": "2nt73B87naH8XRaXH6NQ7JAwZKARhMnzS9dyzaRvZ9bCxSrbkcWqdg7W7xLKSu12McZ6hra4ZEwTVL54QxcSgRaH",
  "key26": "2sYzTn6YeKRaQRk9ewYc553RQSmf2pSJzAPoShveJcHjWescAbpsGybcBgDvoA5JNAxpkj2JRYd5xVy62Z9TMAZV",
  "key27": "HoSn3B1CxSqojfRBd21WFg4L6sYENDFqkrEYjDXbum9FDpUjyKcovvPoqQM5WjMkLcN3pBwYo3aymfYRZNuhZBp",
  "key28": "4FFHfdsPSFv7g1qNAYsSiJ5YN4BwD6cvUNAFCcWir5tJ38tSJqVrUd1kHXuy52QrkiEMM6TnxbNgJgq7dgE9nJMp",
  "key29": "65uC2dWe2LAaZQ514jPBwb1sVDdp6vM5CfGexvTU5KaSJGxksuMXjXtqDbpR7zzwrbnnqQ7HxhTu8QJr9UdYxSrP",
  "key30": "4A6LhfQxZnuh8x3hEZBSZ2PzMRUL8ZrYggqCKc9eEL1tb9SvErom3Gn65unqdgYd6MpSgG4LFpAutcvfNH5zADJ1",
  "key31": "3wbZsUDCrRs5M3Go1pTumT1zeqc9Y6atL21cMwzTnnZuRi4YwNGNqBASgRea9mmWbsAncZuL3CJBD3kd1F9gXSMT",
  "key32": "tzpY7hdFUAVAaFZmN32xkvaAmvabbWo78YKetKLXQZw1ZouSfKf6caZFR3naMwuNy3t8oYfEciuncCZ2qmL597P",
  "key33": "4RNoD1pvvdU7C827Zt8PE47cTNwcocsddWtMKPwRJxTevnxt2vaipsVVttK4x5cZHYbbzngbpMCPUMKoeHMTATMU",
  "key34": "5YAfmk8gKifgs3rA1iFvS3NTTvou9YaQ8Z8Hid9trrwpBMQaijKLoqTFuoY3fJF79RngPbBDJygGdpBxkHbkuGEe",
  "key35": "2h1LKbzjhyUa8NcAjaP161AcTjWPvMkHS5cTyef9qyAYSVBce9Avtz3V5S1FTwYwn4KeyvX5E5xAfgyxRP82zM2F",
  "key36": "64PFVvVNB8ben7gRDkkztawwMVYqkHQNftLzXpxu3RZkkURuPC74SAL5bKjXQnwoaWT8p32p9YCu4RSpjf4YEHQ5",
  "key37": "4UVzVeuvChcnDoeFWEvwBH23TxmsS7g5FbRv5FvkG1qyENWY6DAqr2JZxfcAHZsxfi5hbTBpWCgBkLJESjv5EkbX",
  "key38": "5PT5TM2ZNSpm8hub7AtTCdKXfYUswXB75WLPaDbrHxoMpPXEHMw8k9uoDsNSJcGHsPr3LDoiVPugME3MvaroxQsk"
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
