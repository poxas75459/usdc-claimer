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
    "51f7eEHiYc1xXHP68hzBLpn3y7QRvaR5tpDDSciSyHYwFzPX6y6zqQG3PDUcf9eAieeXyp2diJVtUUcRMEkS12fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FsJfKKPrUFMtAeYbwmwy4u7cufFtThg66AVLG1aMNmKCg3CTS5MvacBb1XhEqesmp1SH6rpVF5oTMx3oDmMLsqT",
  "key1": "26YTzC7siR4tEu4Kqa4xkZAm35vC67XuQCvDyVcSVzpAC75xWJQcp1mFuACUL8SEZ2Rn7CTa9Suw3c8TnEeHzBB2",
  "key2": "3291HaMMsFbV9cfNMXvbc6H5z1K25nUAkXZNYhvYjpevonVq8GNWJv6y3ojsznBiRG8fJCQUtg7cNR1QBFUV4SJ3",
  "key3": "23uXK4NZzSGVm5cZkboFUk2xyPLvixNccXRuK8bF5tGivzB5dYeYHpYxCEPawt4kmZniL9b6PjH3kjFkH1Hmk5A3",
  "key4": "HMmzfrVLFKKEXMPsRg4LxexxqADfnDLYWtr8xFknZWkbAui9nr7pRimSN5KatZkqUWrTWTX6MJzfSohXhTaaedK",
  "key5": "2e7F4mAD9Z6r7dGaiKx1mEEfJ9FRxnizKJmfwzjGJMLLnuEG43aUYrMs3jbEwXAxvsesYoH95H4GvfVTnAFTeKkw",
  "key6": "4FqabigsdEUeZwqkWUYUeamqJYN1HLQcEfZJQrtEvnKEpbdXNbbh93oVNBPrb9Ru46G5Z7vzsx6UpA6NDX92Lo8d",
  "key7": "2o4FEpXvEqjuUwBNZv5iPNNoAxVRMUmwQBGRUWY3TrcaACHCpja2myMrt21HqjirfBptYocViLMZMZbG273DuUX4",
  "key8": "Rk3NTYtmTbDHfrUwJz4XTd7mJVxnKNsYVdoYVvUzE8VZnF1ajz7XoMjKjzVVtqaZp7Mr2sLSBPfAPSzEa9m6mcj",
  "key9": "3UvpxVTqjbAMj2jrHrdq8jK59X2dVE1jiRL54XpFqy6shifz9AfgWxjr2yNpUa1u2PMdNJxEutfQdeyKb1FqcbvG",
  "key10": "2BHp7y5LiGE9Men74BgEFZshyBBBgq7dY3kcBamkgeG8Y2yRWgKsVqBAcDZURiJg3QfF3RCE4v5S1CmDUoRKSgQ5",
  "key11": "XaX8B6ho9mbYpBApMGjqjDY18RL8SHvrJ9cbqdUBvSikjRdRiSvPrVdSQxce4wUDLfo82cKxkcyTLvTZQsfi3PK",
  "key12": "3QVib8pApYQSLNxiBkjQeVdkbnDBM62MdVJ9fVcHgM6dttcedQ9gYwAtNkwg7fuKDyMRt3zqNZzUa4BLyA2B1WZn",
  "key13": "57ggwhHmwwm9mH1vQ257Hou63SWC2eFDo5LkL2XanSQRaJt3NwjfoaWdoMEvJpbWjDThJfHRCWHAWznw6nDwkJj5",
  "key14": "4WcbzbgAtL29zV8agYBNcTgeR9DYB5mkjjchzW2cNSrRSDB8xrDcjSvJtpZZZs9MyyyWwp7J2UntG3dZra4RyDEJ",
  "key15": "g7iRwHNhxggjaYBofmJQ3kjsFHo6tPz3jcJh8UMr5BJ4mGEEfEBqAfzRRy3kKxDqF3jXrhRvUqmX3ByfuNoVX56",
  "key16": "5yBnYtbiDkPaVJzr3AYuqMPmjutiFQRmmVjpsL4kmdEAMmdXcxQz3i1hoPaNXpgtq27x7sMXWaXkakHo6XjDQVGC",
  "key17": "3LeCsYAnEtvdvTihsh3BvtE1Pfxf4hGhT5rYtyPsvC3b5G1yRUBxBBpGrZne4DYvscxa4k359ka9bz1Ss1FnNbkS",
  "key18": "3TQLdZeMfDBphoWgQGMJj4zRoidPBhJqK75BTqWmCT4MAZtdFPJpwmYMD4KiLMSwvYNMFsiLoWKyLXruiaV34z8C",
  "key19": "5NGyoDh3ZsbirvHSdsrK2kdML2bJtZJ1TT3Usd3Y2Vky3i9fUrrE4mLFnswE6e2eaeDq73Ky1YRkra1LiEuFswdW",
  "key20": "5tXZ2TLeV2pdox2fv1FeG4zhYgaShZUEtSqSev2rkznaUgsHKJcdVyfz2HQkEiAivKJc8konNqPRKfJBgSdE31pV",
  "key21": "5f9bUAKfAp8oQ3U31eeRQbGy7WcGFsQ8KXn1oJDCt3MdYeVN7zMzs87KGMnTZHMtUGs5TniuB9VkfgbdT3mNXaiX",
  "key22": "4fWYxsqaNnRpHiUZV8kTshpBi4jp7hpWadDncwqwjhcHJoZXg31qUjtnpKqVVpd5C9qtu433dZhiQkovWg4Skyzg",
  "key23": "PQtaDjA7TTey9CMZTa8mVre4u5wBx8dqjatr6tybnFNCXX4KQEpnR6iHMQSxbPdmucTG44MnJ1MZ4NvkSamDSXy",
  "key24": "3zxVVPoh2rcnQKRYADEvCU1JYxLnzwXJPH1PuP6aUGd55UHx5ybSqs4ozfqa6bcGGqzwtfCtZyzKxqCrrhQWcPG1",
  "key25": "2YtWr8wbsWiWL74WdCaTqNGMMCE44EhSg3WuRdu4gyS5oktBkfbrKBddgd6JmJcrSuhuR8EfEVogo2XkpUyBL3rJ",
  "key26": "3umVhXWa3tCnpAzmgSDV96yUE2AvA4UiBZRdzYXeXzmd4eiq6oiGNW5799dDf4MvpBNFeq9fi66SKyKyD9QkHgqH",
  "key27": "2zMVWi75AJmKPQ4z3XjszRbN5QjHaCpZWsMsyQ1BmBxZQbXFPLsABYBRgsUf2czA8dcczq9DENzTgaMpG63FNNYc",
  "key28": "2NxhE78g6nWC4iLJCaJczuJG778QJqXesfz5vpdvSKBuoLpWSdZPzsbnUEbQf1NDGKEEamPkYeAHAMDHQktQwLaf",
  "key29": "258AJDrMxyte6nVoMYCpfL1FLaJzNaD8fVffjVykNeLdiLmGdtVJqoHByExnyHhBoEYNmE9xPoVGRYBWgquCJH5D",
  "key30": "5h7yvbjQ2CtC2PCWGYEt15G9UknM8c6DE8FoLD11zgmB2GoW4o77e1FBLBd7apVjG2pfexrFBswB36LuaAASddwx",
  "key31": "4cy81sNw52onWoPyT6SWE8pwHgk8vVkk12GmuTDDK98qoRT68xqhdFbVXy27UroeSNGvrU623YD5ecYYvqaXoDaq",
  "key32": "4TYwqCuecvxFMD2EvWk9sEFC2GaqL7dTA7K88Ur8VtnDi9JtvsZFxycbhYNyQj5TsVdXKo4btHYC1KkgvD8SnLtd",
  "key33": "5RorBZGUkV6zKWTY6Ce6AfCvSLc9q9MkADrLJmNKbRETfeuiLLHd3hLd27MrFwsJSUsGZM1JGXLN2R2X7MDzSCz3",
  "key34": "5F1BtQzTv9Lrx6kq8HbfYBju87ExQv4hWChkX7VnEbYdbAGZngwbNtewivVR3UnH1vgdNbPy5ycWKz1FUEe2FCcf",
  "key35": "isiFbBG1ksrcankKcqu2B4tmjbW4gxhHxfcYZKmEmsTZPntSxeumgjGQsr6563P3PmyDFM22ZThzT7Qxkcbh8HR",
  "key36": "3khhZS76oyGNktZ3Q6UScyE5SKE7Tvxj56E23RVmax7tXsdbxQLpVfR7XmpNttAdUiGEFQLPSyixKDn4jyTbUtYo",
  "key37": "A1kfRcxZ8Db857UaQWAcMdbEnoyNN4fEaqjKABmLinSp9buWqJEcPmVFnKQhttRj1oyAkruLFbGEMQsbsodCUZf",
  "key38": "n8T1qEHGiu2HD9eKWWkzejAHyPCaivR2QxBpB8kvuoEMYvjq9GAEyUaSN3N2RCUB2NJTxWWdBYrBcvmsohYmjp2",
  "key39": "3Waa1v1mb9W9GEbjV6vJpNMi9LmK77wgpdEQvwRGusjh2Ar7GAaY4ZUC4daadRWtjemaCRFyS4P58ThCqsYapy1E",
  "key40": "4U5ozU7jrFhmwjuiWuXV4QMdDh9XvVCeJCh964yDCmSdwEaVv58b2KYS74EXk4Hyj5KsbAWDJ2xk7bkV9sEwHp3U",
  "key41": "UbLaWp6oqxUKF5guu9DFZyWkSS7vvr3kbcsWwExeTbykGRDqY9QE8UF2qSuTRmXEi3xuCLVELBuYbFrN5jXwDqB",
  "key42": "BXYqdLZkYoz1amvruqzodesd91a6U8SnD1qgXjiGbFjBAHkBwArvK1rZUga8gyiDD6FnNgMDJQBzRg3UfdfHWeW"
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
