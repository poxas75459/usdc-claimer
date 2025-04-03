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
    "31zxQdnDb8NtqYwE7kvSmfBewsSiD9Jo7RgLjyJm7FeJtcAfLkQYzi8wg5qaxBjnByH58e7VdcBR5Tr6rn4zWTuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZ8iYekbjckZCjUMP8MTkg5rXf6J9gVq1UEGoaSJHHgKiQUieFrXhVpPdCdWWYaJAMgufsTadtWs7Wqceo6VC2d",
  "key1": "3h2rS9RFBobPNsB8N8kuLKHg8rwHGjK7HRHUpVMhhjUTM9msDfugzYGgAi3ZQmKBCPmNpKMDtmRgsptRsiMoRDtF",
  "key2": "4dUb3FufbP3PPm1UurySajQi5XV7aKFtsVBzUJCHP6iNa6wnQGmxH8T1Z58pNcmTfXMmhZtX9NuMvxDD3pv5msRR",
  "key3": "UnGfnCfb4PP6J4WBRX6Wx23GV6njjFAwVva4TT5FTbptUchMZWnH7uR5b2hbtxzYvbWCkHP6TEXqN6GgpZH1BNw",
  "key4": "zJxhGVkhpG3vYFhnbqBWhEkH4Zup1SszGRzQgU7vevab8g48eLGrrJRbtjMWkLmapVw9Ju77HCj6JJ6N9pjo5py",
  "key5": "3S7HgFrrSg8DtwmC1vztV9mR5gNrH3G1UALhvEwEzcAr2TUG98NwJ93wiWxJPqWNM2LD7kq4936f6AvUdqj5psDe",
  "key6": "2jdQ97vu3HTB9papmiKMeBFoX6qDp4v2GxuF6DZAXBhgZ3jHphtp7UQGfm2hDDqYQXXgddy1txXhfFB7AWZsBrTX",
  "key7": "bPgJiXQVSt1hzhKoBFuhk1EvppJw19LgPk6LKvfrDPrnTUJSaA9hq86NNRo3uUziBjLv5XXLSGF1zGo4xGEpNWG",
  "key8": "536zPgYhMGT8CydV3QQK6Gd4mVbQ8pgHoTEi76XXiMsgzLmJmvuNZAe3Ky9dsbJR7PAfjdt3cVE6PwMprd8GzKnd",
  "key9": "2K5bUjGbtrngCrpySKsDoCNNevaF4YPwZ1uWDXuLXWGnD2BXfC9Md4sZiqYLCSYb6mWS9zre3ghZskRLAkDWvy8o",
  "key10": "2J5uDh7PRWCUVAmKfH62U7hcNskKXj2CbMV25fYtSVZyJhGu3FJzGDLw817Twg4Ua8aeBZoJJpApNu63GkHT83ci",
  "key11": "388osZD6mFrCyzg3piixpvsXTAo56r5PJMGTDbqVWwEXTZsab9Sni8qutRBxUgQj2xLe1PjYKv2dAVNU2VbvK2cm",
  "key12": "58R4pnCfiZnAbnXKPVku3PTTEj5NB5af7ZLHJ2KbbXWa45nNdS3mupSnsJNJDbNNkhcKntvGrYoj6RWVCQLfx9Mj",
  "key13": "99GbQuAEnSt4Wz8ZxjMedNKASSgMnPQ7FU8BZW6xRG5Eai62XvU8Ch9x7XmSJodbhwjvEcGgou68ATMGwuBjXJP",
  "key14": "nHK1jUtxy2ZRc7Vt3KLLmPssGQAhEZ2YgLsTtB3XQCwepdbfMKTYiKfysv95nAmAqxnRJiwFLi2dkWh1FpmvidS",
  "key15": "3jmMEKUhqJqHiy6N6mhWBGpo52bbThZ6Y1bE2gA7AcdMfJxgUu6m2uCQW42TnByyXJ9R4fEbWcgiPCU5bGJhdZpV",
  "key16": "5EcFVY1Ezfh58AQYofAZXQaw8Ygb9ShcmskhiPNF2KQrDvQSfqiQSxTXVsGXnK6S6GB35uKH6UViXYSXfLbMnYyT",
  "key17": "2w4CDauUUzRkcXyfYjSeHEeJg5RtB4Yv3yfeNTo1kpfb9aAJ3aF5yLGGAbBAzfxHfZpLi5VUUhCnriJ9DUFjUtRn",
  "key18": "3zYhJTxH7vpXxaXUjurhcFMN4qUQzoksFHU4H1JhrjNhqTMpecj8yzE3qtfe74kytSU9FntMkinZKpaasSMj4J9",
  "key19": "oAYBQ7MGnUsTHDLgKibQEKzQdDyGfBeGQG91U6PLpz6xxHLgEm9Q3V2gz62aeEashzp6YKTHdkgQmdnJmWShbMi",
  "key20": "3zYDctGjUx4qH2Skn9KypgSeafGQNNr2vttKdBN4fke1EGi66K9YeFVkvXW1KDYjjPd2ixuZyiyXH9hXdCvW3nxB",
  "key21": "2V4G1kcoWDrCCndCH2gYWJxUGWzC2soSzjWVTE1D7Ak6Xtw8wrCsw7zvqiMJzCFLvqDdAXkE6RCWVCgLjKg7Ftbt",
  "key22": "FrFMx72EXF5CwcyGUWugQ5STNdkD9DHEKoqAUgYNEu3foUBeHgDUS6AsRKcEfcvZHiav4ajtAnsRsHAu1zDU3hF",
  "key23": "hbHgtNviXMDDPswCXYVJVaofLw6hiYssSSCq25QhfAkJmyozVhiTWARHFDhfAuN1hRR8pKrTVziX8cKVvgCvcBN",
  "key24": "3S6UZPq8j6KaajGUyKjgMVMQangMGxGuAkqELzUG45UsqRHYbtVgoH1NUV1AsHNwqTTEiZMP78kvoTBT846m1dSY",
  "key25": "4JcQvrePf4CNYp4r4GsCskM8Z5mo9zWcDv2wDooGAKYCPrXmjUe83K56htM1TZBbmsfdyvBYwEfi5xDqVTBRRKkb",
  "key26": "4LHZjk2D4AshwVL8vb8XwtJp9FMvE44aHjCEd5dSJdtCP9M8jeYv8MabkqpkQh2hXTVUYmzh7RbTBt8RkybzkPyJ",
  "key27": "4UrBfjc6QiBrMGLYohL6puf9QC9oLe5YeJtuzYTiH7pmXBrXFTKFYRJrDNnmRp9h7oXVzXKgCNKmTE3JKZ35NpPP",
  "key28": "igPxxb9irMwcXDKkEH4Z7TWwgfQFNQXeZXd3vC4SP5fA25st4tpyLmK5WXpvfFox6FVdufzLrxWjWk8sSG8L8Ek",
  "key29": "4rwkfVxQeBnZphwPfESXFYg7TYavg1W4xkWkvP1pFRS5fnQyUfWTd5anZMo1xvmsZgeaVMf23oyTEJTJhczzLbS5",
  "key30": "2BVLaUHrYj19dk3UNjd6quqtX9C1s25etyrh2SuUqneBorfbsMrNcy9Qmi6gpQ3xNWu7ELa23eETUpvDWRbfqGHv",
  "key31": "4M4KMUxLsfrLgSppJDCCsb3YN2Hyt4pHnwxbpyo8j2bEgK6xuTSDAvqQacYvx1fnay2e2DcAJRyDMHjDbrUKtfuN",
  "key32": "6d5nxTuDibyf1ahjZXffibDMqvPsSUjYSVdRMpezVspN58a8V3PatjZvcKpZAns6CpcDAsb3QFvDTbHoPq3xeNG"
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
