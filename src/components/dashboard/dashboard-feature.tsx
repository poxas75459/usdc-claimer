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
    "KLuZqA1rGdt4nH9NyJN7gW2AL1tGctD4t86zPwzrLhbz5jU9MJLLT8AGhJBR2gT6rWSCbUFCf5rV6uRq6ErnDYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zx7bSD85zEJBV6EtjExV9z4kPPT54KmV6Jz28X7yP57vwcE9GAFLe6DpGjSo6KHDMDYusEUPVSikWfp4mWsWV3s",
  "key1": "5xZZytjRCLJJdLbmt7aLr6LAocp4WfgSwBzZzyE4gWGBQp7qxnta7wPQCJUk3hRzC8MBB6unLbYx5Xva98hToqqc",
  "key2": "2dXbAkpnTJ7r3tZ8ZnhHeyZRk1GCAmsUpdqyHrsodZchUEnTqqbEkZiHa95sM6fZYPUtkDvD3XT8MiTzqnHCeedh",
  "key3": "3jvhdpM6pVfMyYsKFoi6oaKdZcEHufFVeX4GbtkajxxieD4CEhaXrAdSQvdESmBvZBXbmxsqcStXpXAqq4g289QX",
  "key4": "3xFV3UiVX8q2UHgdPCtVsbtq4wBgHWEoy7R2RSgbpA32jVj58o6bgiLgAfvmTc88PXVyAhAvmj5Txc49PUKGGFSW",
  "key5": "3vNsGGUe3uCfMYePqBm8u5vbk9DFsc4mvwG9V5bDMarnRKjgnNUomodmYbL9DeLYNuu8Mjr6ixS6pqT3hbkEsYb1",
  "key6": "gGz8CAaw1XmtAxU6EsBaMUuHe43VQQexWUs2SXwgspWkVNw4dLqepjtUHPR9UoBTdD1E8PTvAuartmmaWSEAZDz",
  "key7": "5zxW3SyFLvwYJybaQBnCxZu1typSgwB2CrYtYUvgQcTpofu9PkrSntByhc1cMPDmC4yNARixyg9jpgk3jGPWFNLb",
  "key8": "22bqjUivK9s5L8gFJ3NthoEZHFQCLT9CtGzFcUN8ouPZeW9ggRBsxhMdHRn2HE6jp64dBLAT6vBG7uiBisojAP4P",
  "key9": "5cW7wz62WNbYAmjR9moVBGqH4fvHrqzJz7T6voXbdo2C7ixojSaEbVkz9awzyud2fzVCLjdCf6zNHKBHFtT99hp3",
  "key10": "mdP2a3eMae2uxfHgrCWkZMGHKGnBiVaTWFqZvhXfhbrYNSofHETom4eSzoKWoreEABSmv1E5oRnEKCZqnxH3unz",
  "key11": "4ywEQKz1add8p7o9raftvhGcqogdtArkVD4kX7Za6LvYufooJPgEy1upHs9ja2tTYDYqNokEycBnRC8ydhiU7rLP",
  "key12": "4YbJ2oghgVDk1Lnssy35iNYpiBULtqjQFyUyMsytnhtY7VtbXDuhUWsqG4TzfH9uBS1gVS6TXmRsnE45ebih1Z5f",
  "key13": "WLxvRSDsaqBWsfopi5HBBdz7WWo1d4VSRmsBL8bCY3Bq2GJrDsvaMecjk7QvaxkwyZafCu2fEkhTeeMqC9D1nTs",
  "key14": "LLgznLfwPAqg3pvmu8kcLE9QbKtTC7BUTrwMqPhTe3dQYnV8AsCwzawWhQreMggKjzf93ipoMzDnnhitgVpLDCH",
  "key15": "4cQ8N7z21BGwgSMbDsixf9c7yV6etq9fSFqVxwz2N8H4awwK27bCY79XnTK4AojfAEUXbAeNKG881dh6tnS5fY6s",
  "key16": "UDgRZkM7e1WgTdqBe7KfdGsW9xvgtwPakXwg8TTnq6ty3z1BdGJ7pwdYH3DXeTzJGrv92Fe32QCysERwDR4MRZZ",
  "key17": "59sfj1GG9aQvC2UAMzPabQ9dReS4URxVXBfG3hWFcpg1LmtNsNxuhZpWYa9rDBQfAqrfo4sVe7sEJppn47qowETU",
  "key18": "64Rb7ypAgx1xVu3W4FTuVCmFmFLqGtayYF3QXhxZw5BWVxfoQuizNZAT3QdYMYAHtwwU4ZiYBvkzzo5rDLc3f8qR",
  "key19": "2XuELMsoYKGuBktRePaxiJtSxjTVxhpowirLzKC9Niq5USgdkYfQDrnew5trav2b1PQt4juyrfnqX1wjiDPqsWr1",
  "key20": "5uvLWAX1zwjfLyD7f2DPASQUEqG7GGd1XE3Au8oBiVXE1iGXf8cK5mLeg4aXvi1mePQmim5xEk3aKhkVw7R1r4QN",
  "key21": "2mUNk94sBWB6JodcQomParWSQ8TWMGKG4PG21R5rezp2sDeE2AgvpjxFsnjFxDHpLpHF7zbA7VsCSj3YNLSA7hD",
  "key22": "PkXsazdzt4E9rcBe4126aDeTMa8zR5VoaXQLzscEagLxe5sW15pK6GvAQutJ6JbqFtpHBN2jmW2cZ3jbqE84tty",
  "key23": "5ks7U3MQi7LhxdJW2ByU7q4WRjnDVxR9SXWQnAcBAxcBDEgwof8ERHwA9jkfUsRGJ7GqfBvD7afn6Gh7HVAEbR8d",
  "key24": "5stWBe2RCFHGEYAXbpCCDzZbVd8L2BoBd42iemN7WWMesqgGHSMZNUr8NKwxHBDZX1hn6U7EuuyvaVj8GrRMkbX5",
  "key25": "5nuBKx8CQrte595pusY557zz521turPWbqu56fGnELJvJ16N9osze2JshYFFmELGyJuoZZHdRr63qRnbH4uuEvr4",
  "key26": "48batCuSGYG4F72x5z3WvrQdQTFkS2TRGpZ3xBPHykAdHzyJd2WAkkfm4qpxRPod4FriDVt4pUh76eouj2EYoeCm",
  "key27": "52KMqCNhwuAZrirAgJ5M3R6jSh5otD7M7MYuCUgmdQDJ57BaQSQPHqYNh1Wh7L7Mr4GEf7xES8aJZFzjKjEPBuL7",
  "key28": "4mXQEw7X6eGvyATB3iKqodKA94k7qcVYwM6yhKBrqNdX1kAsNev25FU21VhDdTc4v4HECX2VCXnUSmCaFv8mPGaf",
  "key29": "23MXuKyX9cYQ3ZyRcw8Ge1Q1wLHaT157KN5gDYxBSJeQTAhFbkNGa9k463ju9X6v26TWkAUBviRLdvMafs192BJY",
  "key30": "66veAPMfoSwoCduBus4haj71KYGzYobuQQi5FWAquxt5wJgdDjKqYAgU7JGM7dKv4d1D2GV41VjY7CM42fHWxAuN",
  "key31": "61ZyCRJ35guppwNfvUijjHb9zNxBNQwgVkg8U4LkRh7gDLdN2x9VpJHH3kSXeEcG5QsTobKf2GpC6YatZi2AM4WQ",
  "key32": "uudW5huy7cw6BqxUTrEczSNuxM4wpVr8oxUzD3fp3w1jk8v7F27Mym43EATRsCrUq796BkxZ9Wv1JG6iaEYsExp",
  "key33": "vBdWhKUM8VHF6NzSkuYkJbBGYzAdzcAd3nic8whwPkrV3uSZFDdFxWb67uxzD4hBN1cezZyU3o83objcXQFkjSa",
  "key34": "58teAaDNn3DUYVLQQ33FgwJG2GjotxHFJrWwyC8o9eQjHyJmkR15KPA55T2Ne2U5uEjRog7E1QTBfPP967jHXK19",
  "key35": "4CmQj1exQdCMUMy84WNk5KCsJvJvGxbtPJFVZ81RN6uvJNhdsfqFXJQA26Tv8Zex1xkwXnsECxxNNmf37TrvCoA9",
  "key36": "3X6hYDHanM5JXuvbYXstRSrjuQ13HKhzaBwmJoC9QbfFJsAewjyA7pUW6TjTUAF6QLMJhG61DKFWrqcyLMiN1UFR",
  "key37": "5RvwiyPMCrywwjtw1z5BHH9EfichHZqKdgwehE9TxuYmf3fiECcrkNgiVyEPpmTUq5zW2DyHuwEnPkWdAX6D7w9k",
  "key38": "3yjLQFxyFy7FPwKhPRSjRdV1nhvE87VLdwhCgYF8RjTpuUHwxQJhSs4icJkdy3VY3piHmay1JWQe9q8X1UbmQwRG",
  "key39": "5xcsUPHsfcQ73nfGJvAqeKzMJCKRJwHsk9Mvp19ZvHy29PU5wVNcZk6cLo2QWvu9vyCK6VFXTBe3R58rueo4ZRDV",
  "key40": "7d1dNieaKnRUu3NEmWws3LBRQPQ1xjuagC1DzuJRhENByQMbzDn9Ed8ijZ1b1gVwGm5ofiHzWwFXgHmygfFxdwX",
  "key41": "4VyJSFT7wQ8a5LxqWsK41fGTa6JXqVYhsBqhsp3fgHdnWhzeUFNxemoYzDigU4oNF9xTDEdLGFyXsD4o5onqB1QA"
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
