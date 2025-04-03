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
    "5WizEqQqTjmefXw4YZQ6ZTTqaYYzjw8yGKJu3ZKEQ92bj9ZhznavVX82NtnjwDmuYKXaaz63H6rkTqBMvCokuKdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ngTkTvQ4qCMXMGXX2rQp7DyDHvQHU5BdYbkuUr6TeXhrVBS1QvXDVZwq4gHFG3e8b5PWEAQJinVXTfTzEWJxKL1",
  "key1": "Uk8PvcjNYSNwMZwfoBKwpLNxP8L7ZWqkWwz1vRmo3piyfMjesxc6AzHm8rsoqAZBiaeFeSZvBZgXQX8Lt6CVyfP",
  "key2": "4SuA662gTztfCjMfpfV2QxVJGJFCJ2ptNeQXVk3UQJ91Rsr6KiCeprMoQHbYaykobBxfD6tPDSbnqYMwzpzmKm1Z",
  "key3": "21Matt5z2Sqcr2mnEgojf5eFfFDyqZdWCvtgm1bnTxZdRFBjc9kfRHCoLqYnWUeRZPihZfjDb35R9F6kw36XgFH1",
  "key4": "3hsPpFvy37V9CnyquLdup7b4zEnnofSMMd2HefUykhZud2DFSwmSpDwbpWVesprEDtS7Q83wMJqo27FvV2jKXEYP",
  "key5": "5oAioZdKTX2LedatHhXomVHqKDynE2pJ2SsrAUw1ofp1oKudRAX9jsjtrjzB5nBAXo4e3f6Nu935LYaAJsPxGupx",
  "key6": "GWxoT5C8fa73NC8txUWYp4zGS9Dc5rUGhfVwdqLvsMR4ynQJGV13g1GiD1eUgo7W5e1DD3egbJad6QG678K2DkC",
  "key7": "4n3838PAY6zMtvGtpLduMDmCydJycFjgcZtAjGJtuXVuJHh9uEpmR9hxfUkQPMbLnXsEDgSnJPR2qq7LFyBEUSdq",
  "key8": "3tLEp4uyp6ZqJuHWyTxwNUcKcW6VXmn7soFA2WdMvPzbD6jSyYpYvvC9BjhpbsJXEKk1nUcFRNXA2Hsfm4mk4NMR",
  "key9": "49RgFatgDFtVHDrKsCg9s5Dqmvkic8UUjdfHBQQtFz6544yHRTzxc3pZVU1eahZH2xaeafuTZ1s2S8iU4t6JJtA7",
  "key10": "7VW1qBcVPqiAqqFdmb3JoKpTykcDascKfTfqcaHjUNwWZK6aadpGv3eS4creFsRjrgNiRZNz1WDojXm2AXPD42R",
  "key11": "5DLWv4n348uVGNHSpBPuT5xZ2Brmgx6fr5FNtvT7A9cxJB8qXZhT88CNQce6DELhtWHE3U6Zz75oafHE3cUYi6LA",
  "key12": "uhUDc1uaASgkumwpAcYAYPmgPk1f3DhHwwanJjxWRY3ht12yMZBdyEAYjibr5LJWz7TDznmSzAaWA5Q78o7vDGv",
  "key13": "46gSqwB1C2sBQ2LT9xhQzvW2whKdCddL6uh4YME1GegxRCRFtoLtBHdTMvj2eQ24YLqSR8NeVCxcTAvCjcnwhivU",
  "key14": "62qED9rU7D3Zg5DindigCcCgdrvLGjqKEeqeTjMRYdhaVsUCUd2uZDjx2RgxEz5Z4dN6ednkmXVhLw6VFRAbxzVT",
  "key15": "5msda2GABCqH3CNTSHH83RnPVyQwu6RktfMGyDiVRyy1WgaHmE7PbavFo9XS6Dv5nwUDKseoezfnWZPN3WwKmpXc",
  "key16": "3L16RnSDXUitJoZgn9V83KEhSJFrY5FrmhhvPkyJXWLV72QS3ZQqxnYdxr68kfcLLvDT61rUzZisVZN6xN67RpH4",
  "key17": "36pZKYmWy3zwe99MWaERC6dLpcjQ4xZXyqStixyjVVC8uf9QVk6HPWSYzj2HdbfoLnzUxuaXGCDYJfFtX3zmEsQk",
  "key18": "35kWM7h7Cj9jLcV3SRKcZi931jLrKXWzz17NV8125Ksqwpx8CySs9AwSydV68AWFhepJWUx4VWrQUjzw4Wfx4qfB",
  "key19": "jzSL5tojFbbDQ8WB9ggv2F1wFJANfoHnh9SghRN1UWDjW4ShEkfL53w27T25NYyE9Tu1UbEVf8GgxrJmqa3UtZQ",
  "key20": "4N6WMomUx89dux51eQU9FUaRDXZDtcWKtEcDeUkRB6NjBHHRHD9h36tcHzG7vVq3BHeGbZLcyPQKbhfRChTaY2G9",
  "key21": "2Eqc3hHSTw6L7eCYgXnj26C1bG8wxmTjPpcNxyoucHosGn9Xq8AopbsbPugFGzQgUFi1qAbMa7y7BVDnqCuLoZTA",
  "key22": "4oW4me7pYo9nbqUdVpPvDXQ89YCvsDBPbGcp9EvL739D9rQCMNNBm1U5ui3uy4d9thn3vieJFaFSoQFYgMBKTckE",
  "key23": "2hDGkqb1TfdJdY9yhxnmQQLLMLNH15KeXhvrKNZWwkm9J1rKdAMGnZEjhXU8X6wjw4kvRcwFjHRrDY3uVozvnLBA",
  "key24": "2Z4JkGfQwX8dTxibdfNE9C8egakvP3ZsvVBrJ1BFJGniPuFxVPmww4Xkfqsf89f6qPa44hd6mQ6X4BmsAo25aLJd"
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
