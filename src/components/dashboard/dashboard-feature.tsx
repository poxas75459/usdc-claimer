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
    "5tUwFC7roeoxULjpMQrpPfs6iQMzCRE3rSf3wH9cYHUsU4sL1vnwuspcLhwJuz5EFttEP7n9ECsiMwMULs7dxTjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p6SAkCN5NthPSo2KNWSKpHj5oNCVCHVenAamRKyrozpGHWymcdx9122p1tEYuYoMumVyzV8oQU7yxtjWhXadQeD",
  "key1": "4v1JcuSnBJ8WEcwkBJXcEzaC5NbrfQRBp6K2sgLPMvGmVCio8zP3osBq7prUf5bAgfb9bdGXDU1gPs8S5ukHUW3i",
  "key2": "3vKYNdibodb4BLXhgPnKnuJ2spTBTh7rs1mibTMvmNVq2Pjswp5bVDvktQFaN3Z8EyQmef8SeRRbyUXmjkW6F4ZW",
  "key3": "4TA7PeqinVESEN5tEkYC9zPxff69LRCZZrLGvbLgHeC7t62V9vLzSt5Qj5arikyDVQAJqbrBAF5XHpKzXVdgdqy7",
  "key4": "2c4upwWNUpPm4FAM4qfrsWbVeYYfiRVE7ceFC2m3QWeV7JhUJ4LxgP8VjCNFrYKKBfUaanfiYomEAjvpH7xzUaL",
  "key5": "5HNbgSwsADLPcFFDS4hQbbLtV9cFjRHrYEcDN87FB5mUxHjBdkMDFQs1FZDjKZQiGVWRsGoanGAy9ScdzBBqWqhv",
  "key6": "3zKtRP9z3cwc746NgpdhJv2eZSeMHE4a8v1syTcXZ6BAU7czjJHodtTUX2YdavLtV7Hv15WhrgnG29CeKDsQoJn6",
  "key7": "zUJd9sjSCaT6o9Vgg4wguZdNhUznMXxv41kCSVPTVqcAGj8Wz5hxCAeFHdhDAUBmeNEypSMZhkL5q22gKNxNmX3",
  "key8": "2Rm7mDpeagejEN23WPsXnKLUdWc9ZeVQQUx5jknWM7mCye5RPGKNMo55fe1MqvovgVYin48YzCMkpRrWdgqVBSQC",
  "key9": "5zyff7cZBLAgdqdpg79Puw1RRfJzEri8Era3VfRvjd8LXCycKqPgj29ATFS5h8WQBvqFATDQYUPkqXKV884gonZR",
  "key10": "57Y2zbFQxCT6ZEon9LTEmbMjwAmz5GPXChFFZuWfxdbN78KtemDvXuPMFgUqfvSk36mkzjGYA7UdiGoS4MU1xfbw",
  "key11": "3WkBrTgW7XdEPNfmWgDarYLXfnXY7bb5Lu1Ba1FjH9gu73qTJadAwYUg9q8nUYJKpY7taWqJFZp62gyqKwsqjpCH",
  "key12": "3d6fon2injuYCfPW9MQn1bDVkKBPWv9UJ3cv7mFGQ1doA3hqjQNCGA4aSS1yuRKqmyrkGei6tyd6YAf14cwR2pDc",
  "key13": "4PXhyEdzjseBZF28RUCKyzVaF2rLZacfd85CVnJ8NLdwnDTgtbxCZ2hm3nGqB6vE4MVtu5P4BDLXRm7FPTJr3Ww4",
  "key14": "5ECBMAitue7bzUi88QCPdEti7Tw6J5KoY4dFwwbKhwrXdoJEGDEEhgyTZKksRVTTE99oqw2eL3WzNh9xQhzGqJc5",
  "key15": "3GsHu72MWebw3FgKcZoKTyQxCbyJ2DdaY5xpSoiLF7APEN5Dr6mY9NUfD7gfqApbMS7v6eGvTtu6srs2J2YXeR3z",
  "key16": "2tVNUNeXFfeWkFMamVbhG94LYUi9Xs8i7nfN1Q3iwc8tL18fXYijafF6aWy4cWeVfUXgQ54fZA7xMKR3jsGDaDbC",
  "key17": "CFczjZJbmDrG2VSSxkB8jtLcKsRZHa3JdmT5XJPyZRTMHCyYj5ihWD2fKpZhtMzgghywYDWqSaGAmaZGdANFbz3",
  "key18": "3P9zqmw6sTr8pQFipUGvy1ssVjADGZBUpy5mJKt6Sjf5qQgxmfmHv7ZiKJmfRJcMKqRD2MTXxpXR81XGvhaZDj52",
  "key19": "44v2o7Feud973DW63DJ15pqU2wY6UEEz67LWK1RkRmKoWFm4vXEUFU6B8zP9WAzqCbMNtZ92Rw2wWTcuYu6wapMr",
  "key20": "zdNMKp8Uhu5G1BNpPBWgWEKzSqNs8YG76JcbnXLXyR87M13TGrZY7g7MS58AgW4ht72fsGHpnkoEVierkUdxPg1",
  "key21": "2G622TNQ8iiVTqGfdE91D7Pd4hpTfAnGxUhGAzyJjB4XCoLfAFx6yQh36MyyiX5yv1v5xgV1wSSHc4o2tcg74x9o",
  "key22": "42VjnfK6W39jKbLzVczteQbXwHW9NDquHvqd8eLuKBSwhkEG2CVswLBJrNLM8tqpWwgGhN4CtqEG9Yf6DAjM3rja",
  "key23": "4hpoHnZGwZBdQo4r8uUL6TPTMn1nXy3oSsvUziC6HBvDYDWRHkiKf3vtFe1HAjfeUyDD3tMnseKCYUogvu7zBTch",
  "key24": "2qA1TP41WStuKBou4zhw9su2WBrAeifRt3ae9PvJ1X75Af4Uj2poypr69HuAtvGwPXiTtF4tdqMdinLnWCVHsXhs",
  "key25": "5mjYDJCK8xPmwa1ZcL6Z4N71Xy3fA3zkqFHQ45rKrHSPyxKGdmPY5VLpwZCxevSvWgjgGsxshTfSaL43U9Yq5kt",
  "key26": "3z1PZGCCAfaDhcjhxqah2j3Q7s61tg3yx7eUdSzqYuv5Q5zyYr78XZ1ixNVs4tvaxm33dzNirbwDHw2kjau2q9Zj",
  "key27": "3V9H4NeZQrM4dEDZEMAzVPtWj7e64CXCUwAWZvNbu86bcDy6zSoJ935FSaxLN1Znu573u1AGEha94wagHfgFnbtP",
  "key28": "5giXc7dzxhdzEctpMhVqYBLNGX1tdkvKQ7fCoQ6UyKcyCtrJB4ZbdvEQ7ojSPS2qLdra7j1SttxyxV3C9dyjZzzU",
  "key29": "3R6QkUzpQxeKkRqkJKfKg9E88ninB1HahkP6yd9JuGVs7tsiCML6nnvRXL3nPcxktYjsU85x3yfwNnJvo7vmm99u",
  "key30": "51o5jyGpn7mwhDrkKLfU2QRH5ZAvKPc4Ry42b6BV72WUWo7bUgChHuMoiemfbQteigDYJXh7P6G4ZYLSemVpqs4d",
  "key31": "4aTxbQVcao6BNvdyAGayy6U8zQBjw4oxTQZDzasdWuAZrgpTvpZJazTkZRBAdPWWSuB11A7DpVWXZZrhicBrHMCY",
  "key32": "5JJZsX7C8nThiupaN8XqucNLwU9YqtCWKQt8EGKk8AM9kXhzQzZCQ2KFbMCB8ya5F6KW7dapVwcvvND5acZ9VXZk",
  "key33": "4HctQ7eqqBYisDxtaUdLZ86vnsR6iwuLX4q4bWNabK28CTgBXwegzSDtu1Qu67J7yhfmFbm9kijvBeiHqBSX5Qgi",
  "key34": "NpPs3pzJtVvC7pb9KVpqR8CLe175UezttDeQSEHq5c1UZ2Vu5PWWhCrbrAg4kzejr4iZH6mkkpJwrwPA8Dzq5Fd",
  "key35": "5jJynqBvEeDqEMUkYS6DEKup7eXbGr9RmsTXYLM7VFeEmRiNNsnXUawAWdQJ4JvCwDA4R3VKd6sZDedr4nQkQRLx",
  "key36": "2pS5nZHcgMt19qY9fYE2hT3r7iporK3KeRWHsqPjZntVQTgiMVdm4444uTVjqRxB8mWZZZdPbycgcTrNpj4xjToi",
  "key37": "ZbpugryB3VgSjz66YkUFk3WrJFsWoSwMuhkHducyq3AqSH8BSvWkC4SxgdbLQzPeA89czVLnoNETbyJM7QDCiho",
  "key38": "3vHBncQSvFEEw5EgxTKF6HqpHqDnGABQn2AkBMh4sYvVy5CDbydCq7yqvzbNQFraQG7KkGsNQxQ27xWPAwS7REKF",
  "key39": "5ig4Ui2a5ZRCjwXJWzZ2ByUKBnN4qBq4W5HtWoELfQE5WzE5Q6vo3hZfbfbhwTAs3DbyedhD11EbXKLqfreA6nA2",
  "key40": "5QJXd2KFTJ2ehZqdzp8GkJxb6CEhkaKnwsjeeD21hhiR1Vmfyqn55UzyZaBKLtwy3W9d2rVoQkWXnL1bsiRfdrUw",
  "key41": "4mMXjfAmDAt3eZTvmpURpmm2dVjQktxQoYWZwZgyEzao9j98jaZw4U94moxxGTa7ZLzya7i3N1dyyZtpgQtKzzpr"
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
