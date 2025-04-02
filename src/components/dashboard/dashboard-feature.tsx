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
    "4eDu6bFS44iWWeYQHyoHsmRPzkDEEietTAMa9cbPfruBNryCGSbqDqzj2J3dNASvJtxnQ57qovPF91t5yjTmcQnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JA4xNNkdoGoCs1tNejV6hJjy7bEp6qRRH8Pf4jMiWpcatoqgAwsrRczaHyv99CjnZ3JUc4y4zQ6SVLrQCbn3rSZ",
  "key1": "DTQSbveEqNWcWbxbehoEdaPyJtiqgdLTqNQepTQpjY8ewYrohVX5QiKtnC66SNSJGFy5vgxuwe5gqGaavMrEzAs",
  "key2": "45xZpuacDJoDXmWBVL8UpuBD5h83Z2w9YWMKA3wwgMYtuZAu2aSxLXLKXZepMJng3q9WZRcFRnVUQ2kMqzsgz2f9",
  "key3": "5QnDAvPMZqGyta5PFwwoJY9KfU9hebNzLjeoy9gbWP8z4bPrZf9LM9bcVmRVc1vTQ6QtKHiCbhxSqx8ySdUwbmPy",
  "key4": "3HXjBgtaJP7Hgd3nddwV5RXH5LQBUvMje4cDoqjz8uUhXXYANSNJDyGB3uvzWV986tLVjFtLw5VT1ahscpHusD2T",
  "key5": "3xL6Uq4KrsoFjiR61423YFikQQun8SPpUonCiQY6bkZjgmjq5B6SvVVxatbsFxphm8tN2TkvQg8iDmWF4RAyjFTn",
  "key6": "Lq4LyXWLS1Y9JdGQ4b8E2Bf94cPrwGHKHVz2UkgV62BPN2oxcU6Wk9DYyhu93kErZWddN451StZhrUT6jatCvAh",
  "key7": "ziT4C3FpHg7txPrRHBtJHBWGQBnSqBEZyEcYqv2jn85MhwD1iFpTtcoZfmbeyoiv1Dh2FmFYEDR8et1YH6YFh5T",
  "key8": "28yNPFhRh12YV4btyQUTt9KArnnMD89rf8BNRRWiCCR2ti9Tqiu5SyH557MgyjJa8q6GcnwKqiD2gWFH3XN3Lro7",
  "key9": "2Do2vAEbnfGdfZ1mLFAvhwLr9Z1jcseayMhLb4Y3yFzQgxMg9mcWCB6HiW2zuTRv4gJTFof7acAUN9Acn1BKWksC",
  "key10": "Adf9A8dgrgQZPmToKhxERZKXcgNX3a96iG2V5N78M4C3ttFCZeceswfPRWzjuoUzwdCbkRLGiXtLL7aL7ZpMHaJ",
  "key11": "2hgMqq9J3yzNUp5Gd3Yh8X9YPngn2LhLZwcBDxUE4QJ4bCYDsbPpSKuvCpkN1d7W9XBUjSAis5CzbHJdUqzQ1TyT",
  "key12": "3DLm9eknUuP4eCLTZ1m5HH8smYrRJQxWWhUmC3tbNckoqypUeD2WrcYx7abSHdpAqkXECBzFPb7xDQ1XpVP3uGa5",
  "key13": "4w3V91gmgdZdP4Qx7jmdhfhTdk8WtzwCoHH8Jds8H4KqHRiDmvKgkFWrJdxibMquJqnswHoJHcYsSoVAZpUvvBTZ",
  "key14": "6336a55fXZK53HGKqSjREjayzhCkPew9xAh2j2EX91MhCG6muUBw3MLtrXYxD8tDmAJqJja2vKyzBsrvYTUEsWrf",
  "key15": "LBhmqpuohHJrJUNa1wGs3uDze8PFHvfU8f3MTQqLS8H1XRJxyT7J7BXLXJu6HAGxGZLG9AJted99NHmGGuxbpfY",
  "key16": "2GbNL4t9V4BayuuwnUfRr5EbuqCR7NDMnYZwmCrpZZDekXfY3wnqK9h9WAWZm58CePBASuFf5L6jiuxVe3kpa1gh",
  "key17": "7J3tRRgYZembpJY9qxAnzHJ7D8iSpSDSwXCT9rYdc1QJW6fotSJkA9rkQmFMnTfiFKwRLn6wEu8xkXUDx7662EH",
  "key18": "5idYy7rNHHSj3sGYCuiM5ciRe1WWYqRQh8jXKXWhmnY9TkLFniDZiZzTrRWXnq393NsDM23t2UKqdPkMRs34aNSn",
  "key19": "36zfWXAnupAQLQw3M2s2hhjpFx1MTFjQmPD9Uj4E6knUZYjjbe8odRAgSfE15AvMKnJKvU3CCVLzQP7VnMHppi5J",
  "key20": "2BRcfk8BjYQJpG7Me41ieNfrtPgv5Hi6AfDrj4Hhy1bHGUFS4HU6AqPqNQmBw3RmW98ZkidZxrsuTuX7ohmvTuve",
  "key21": "2EWNXzGEHnNwszPStopZzgJ4WK9vyyHZYrFg1beKt3N4vsKbDjGQnMXZHVCo5HkbqSatMnCawZc8Xbv4kAn2ev4W",
  "key22": "2wz4W8rGdB73romzDaGVwUtV99XnDGC8EQhrC7xS1grTpzzoDMpJSJa2QcUSEvUj4Sjzma2URaZCbqxvfFQZ3w4m",
  "key23": "gcdXz7Y6aDNVbiCpzgBE2KeQY1Y3iCNjee3hDwKVyqTUhibz3fGEyyfbCAXsrtbFdF9dY8nRGqi7bj79XVnhVFP",
  "key24": "3UNr86mA3TdC5iWF12cgJS4chnco95uRNLQuTQjCUB5Nog4yG3w99xM2bdswTUqnvs9QXFhGjoYYaNcwbZbHUmcU",
  "key25": "BJHMR3fwnSqvZFHMQL1FXeQWhyNXvFZ2VJFtkB3AvbnDgX79KL6XZHrJiQbH64w4nm9dQgTLbABPs1ZMTMsgLPW"
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
