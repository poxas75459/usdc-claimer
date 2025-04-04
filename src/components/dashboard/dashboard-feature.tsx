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
    "4U628baoaGkJSwJzFDxKV94n55F582CZhaQTDpNb5KY5wuh8ot3JxUN3gQTjTz7ZPi1YUfFzPkTbUUFwFYLmbb4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28LQbFVXGZomS1ojMYsEfVzcewWYr9ibgo9CLk7BhqAX2XAmMwGkMN1jQoSuknCcGe89jSQsHgoQ2oxCw6ZrRXmV",
  "key1": "3Wm2WjgAdZUXrE7EeyMEcciYmjpL1xnmeHfL3PWhLeDSMvyo8Cu6ivAkDU9a9B8fUzPgB9YTCiDdsvqm1QLrwkq5",
  "key2": "4GTXgmTcF8DQ8EVjwT7kokZ7HN2wki9uWGBicMGdBrRV6qnAx4UbYvwzGjfr9znHTzh3xJDfMrZ8XeznxM1ifyUB",
  "key3": "4x4C5M3AdZT423pXkWxDKiTUo2qYnXkn3q5YZyaE9dUNC9HrGAWNnQiZMPgR18ndhpCwAZ44tak1NS6XwUTWYhRW",
  "key4": "3pMjZQAWDnf5iNSTTNsynsU5arm2v8Rzj9qRaZZeeSvDdrPj7bxvawMrPUHgfbZZP3ipXJdC4T6ZQa25pZVqzYSD",
  "key5": "2eemEghtXjBfhjaLjbKVohR2wG98KWfAQ69q7U8Ht14TThKrGwv7rYpGTcjh87hH7Utr6pwr4NPvP6hn2e7TJnX",
  "key6": "r13yz4iRSSaF3sNdXGzBuU6xyqJNfMY3eHvwviRfhH7ERr8iqkfDBncA1hJPxb9ViUySS4Xsi82whqVp4PSnJ3c",
  "key7": "4cosSm5XyuNpFYZa4FpeQtm8VtFiayTZVCwHbDKnU47SFkRhcnXBC9EuxSqoMnh2j4fzeJNqbmrSKznUuHnEfk1m",
  "key8": "3EY3V4govo1PFNNGTQpDok3etDq8VWbEM6qRgSE7UWGBYCBy3v2kLkcVYyiZgQfkteRoQd9X9YYf2SjgrPf5krdY",
  "key9": "5PruKzYDs7AvKQCjEKUESMUMBAtnLGGSRpUvQpeR2rsknxhckr3JgNqfhQzsbcKSLCRPQLP4xK8gTQ7K2DiDJVKt",
  "key10": "2dTGnKCDoFWZo2q7D6Ag5c9dJFgQWxc9AmkpFm6gK3SssFfXeofzRHp1A8KibLhZSGgvpdtvf8GBvJFAdfbCBLxv",
  "key11": "3QEVdRGtqbduDsLKwAk9tFHGUzdw685gpUe5DZ81w8iJ4B17L1dKtRMT9jjvq8KTTThD4WjabgeTVQ1tzn83tca",
  "key12": "65TRCmcwxCZL6kn6yEauEw2VcjUaFa2YqKHyy8qz9N6kaNTKG9PRZLYZxrCd3oucGuj38yjrPE9eWPL8gRi9yVRL",
  "key13": "61uK7DoPwcSnG6EzKNVbwnawhp24yb5Cqp2q6jL7FRsttwPCFR3mFS9HZu7kGky1ABA5AcBA2MuvFbZL7XLYFiKE",
  "key14": "4WGtMGVQAWm9N4vyGeXrCabHeqP6d7LmNNCU2UMuPd9EKVNeSyzMhcPAYZ6RmnfQTgCLmB8ExoYnWudQFpnDLYdo",
  "key15": "J6SqQhhEq3F1PuSdSP8ReSwUT5bz3s3aXrnZUiMgK1bEyYY2ZiijSYudN2SHzxj3WZU2PnUrKY6CGfETyxVXQpJ",
  "key16": "4AMSDZmS25hvfpRmvUsDqo7dqZCRL8UDydQZStsKtQCXkCgy4FYTny3ihzomenG5FxK9hYnwhcoAWqYLL1mZcTjD",
  "key17": "2j5jXUMXBXrwUhBebymJvo52F26Eh13rM5wPiq23ZbKQ8BCm7CUZfrBiS46LMNz9inXnnNq6UV9qwRELCmqExCAE",
  "key18": "3KPekUKiKC8F3BEA87WMauJ2gHXtdWX6AXgPZnusNXL27J9kzwKZqUEA3p8eTabwJCC5yNMq5Bbk3wMKibe4QC1Y",
  "key19": "2idcZEbt4U7GzF8ssHYGer2wr1U4sUZ9T3thsAmQgg1FEZEN2KcRn23Q7wjJ3ZquRd3kmVz2NFhWsnMZWbMsyh4j",
  "key20": "3pTpBSj7TwcWkXUJrNg5SpPwPpZd57DjtLbK1J8rjdiLKPeKY2vP8kxZX1n4w5NyrSdwkBiKHvgvwiNeB2P7TnHv",
  "key21": "5SDXo5bVw91JRfzU5Vt9GEWiW19FhwyVicjCNYeRbVE9Rxw2aa8kQ8EAoo3SnNKRsLif5Ydd8MYFpGWHwVppwEyw",
  "key22": "2esNaJeybhb9NAR4dcwd9tcxVfKXaXVTxVY2PU2sdMaC1gZU1XTmyvi7EEJfCXLfLBz4xnXS9MK31b7ZPDvVvCrK",
  "key23": "2P6fN8yqJaWioSyio3VkNJ2TKHZfyAMRxymbXtezXR42yyTzhQaiyoHveKrCjTGNUfTuPKDkWrApkpJTWBwfeT5u",
  "key24": "43RMabX6F4GU2FxW14GJbzwKfdAG1hCy7K788vyReaXxUMdrvLfDogVHEus3UjyCu13YRgZ7qwFYaavrpBxKvJEp",
  "key25": "5vHANhdZB4FN4egjCqGaLE1khBnAJ6MZ41dpBuG3JVe3WBMsrNwfK2Dy6Swj8Rhg6wsUdWg5JbDvX4KeGbXbReqQ",
  "key26": "3yKfp39RJKGzeptv3Sy9uFPLUGNUUE8PvUBwifwxZKCQpyJjntFr859tXa6zi34CDv3hRnu5NpHttvjHS1k2SHim",
  "key27": "3qfmWqhRUmgPeGVoNb8T7peWjzowEFT6RRnHwKHunqgCEgdrcPzTYGeA4PJ6B6EivFBB3dcD9MrNqvfQcqGdRUh",
  "key28": "5HkzHWDbsmHwvPkimWJAcMrNzbosgCeCZsVXfseR5pAUknHYPP9FvKRCieYasXUuGnXPcdmSDp4AX5zbsw1N7Bqf",
  "key29": "58cqoH2Z7TnksVszJfM7rBUAg8Qqq1ysdpmH8VXusKZYsDdHwAREBWVpw7tJ5k9EE8zf98uHGSfYPdCmaLSPRjJA"
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
