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
    "3gDGsXjxRVLt1Ngu8roVxCoVbshHqAvUYNhq8xozbBfcazNKER1XCmUAdavV64wXcrund9VCgL9Sh2QpJCgW4s2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iHqeUJVE7wi2HVCiXuGJrvkztvKh9Jb8RWgqaqJajJ2CXKYPZJN3CbgJ5vewHTyqcnHVvR39jBbyHSRMdEdYfN4",
  "key1": "SxvWMqKtwSCHibLjLFwYLR9ARFtaWaqS9ZnjqMoXEhdDaozFcPX97aZLYycA42kfauhqGG2tyLc76UULuivcpEA",
  "key2": "2JMi8B8bdh43LFKZekjgkTHGcgzPx9wQ5AKeNxK4rWjCkhzVpfw38kkXTaPEpNrcZM4s9a8dDyoJNNqd58Z3ACHF",
  "key3": "3cfREnt96Sq1wqGi7YWKKp3bwNP7emTEBnie5uSqhRKKsC9qbZS4GjxfRZg4aNRQackyrpUvM3WM4nh9jfhxQXxe",
  "key4": "5XXF1jXspV4TN2NP2teKXYDjJYYHZGPbbTSEnyKw9UCqH6ktUZxGQQxz3WuZsQ33NVZoXpU14BC7sJckTyfgKZ1h",
  "key5": "51Ng4WnpXtP7Kt5iJBqeQAKHvUaecryBoVYBKcbySraMenrnYG5jrPGJz58VLkWqwUUuGe77jLb9MoYo4WTRJTuU",
  "key6": "4Kh7jP7HrdybmQEmdkcEkzgkJVsfWR7GCxEG8vRh4ayDtcwrJVzj4zFwCraF3ZsuttRULW1D4hHCLhCvjrZvyeDc",
  "key7": "NAsvzayDmQPkYwuyr9Jv3PUHCxhKEJGrFb4hnesJK7vtjWbY78AbSsvNuM82MGU42aUEe34S4ay1xTuUnNPh5SC",
  "key8": "2RAUubnGGxJxGCz1ocPznwmxbfNSYXnP6keum8pSb3oNeooEd59Ppkcsiab3Kp6RFBs5oDPVXEW4f5nrrCUwZCRU",
  "key9": "2nshg6X3Q9ULX1tw6Bd3ozED8D2kBn62csdNtgrkE7YhRLXAw2JpqvdhnEAM2AYRu628AxTmpcXMRW72VJrpG7R8",
  "key10": "4py34REC1244iVsoM4uCWZmmSnWvBjfEB6g44Nkq6gFQKLJAckqdMw7Yzx8AcNmzQSe4o22Pv58DHYGiM7iVMMGw",
  "key11": "5FLEKETH8hCpn4c6Gp9V9zhG3gwaqRX7h5oQSmLrJAwVXNn17xZfjphTQV8w1zWZ24nKVBxFZxge9SGezGwb5q1d",
  "key12": "3dbLuxbsjsEwFthxXeegMiZbsNcsvoumC9vxNUCNHZ9epsYY7ryi9iKAkHvgRimAf2ZVaV5H5Y3zwqB5PMf93Xpg",
  "key13": "4KGJ3s4cSyPYd4k9reo4op2mbLU7RwMseoQJURzEeUtsQ8MYpu4xc6qBaxcwdNYpAoV4gAvHREQaeUWAWuXr9Kap",
  "key14": "5HbJZ4VZUfh7F1ybyupgzWgdWiqHryxgxQdR3ZSTQzYMAbtxZx6ZL868YoSsByDX4CK9v3FfrtMehRo5bnpq2A6N",
  "key15": "4Ry7CCZ3nyeuYVjGMAQKFZWHLJauVz8V7LePx7qitHBF76qh4JBh1oF39GwjGY2iv3kfghSZjkCAEgoe3GAwZM29",
  "key16": "5tPyx36P7MxNctLZLtBvuycVT4V9dmZcbjDR7wQ7arFU4NdswoM53pJMeANhFddVQMr7LY7gTvHZaphh3RLtaaNF",
  "key17": "3ahQ3huvFzaKAByBG7iMcmsAZBsi5W1yxSNqi3jKxtbfcZaEZNFAhvY8T9gpnaNL5YJmi4Us1JBywkHoDKNnk7Av",
  "key18": "3xJGfsweHrWEnLHpAgXmim4UNQN8rDLytGokD16EijvTvwtGJtVkNUY5HJNiJDMF66obJayFwSt7nTivL5BHHtnY",
  "key19": "4ELUk5r9yhjfGsZNNPqC61yFMfGNH42gpgJVQbFPavUwrQrFYxo5aQLwc5NHaQdszjmk8gfiVFdkh6SN4Fzqeh5r",
  "key20": "59GRhXJ4JVjCvYfXzPmnVdXwzvFex8RHgtmk3FVjcF5sDh88mnVtp6J1n6nk2wcvUD9XG2TYjRZRVJdWkAAhX9ju",
  "key21": "2xyP8bc53vuzYw298tE1c8HdDBJAErqVAkuNRWYRGSmidzcUNKRMJG5zoBTqktgjQxRe4EJi93uWUkNV4fNTN9Lq",
  "key22": "XLZ24HfCC9cDUwpmVeBqemhFh5SchZCzVdSNLse6g1hGdDrK8fXtaD3rMQM16RPnYxcrgDLmTwjQhaaqeB3vdhQ",
  "key23": "2mXmwsw1VBkQVfRfwPgr75zecX64gHGTgvhLb7seQcxu4STtpoAGUidimCcfTYLYEDvmWBAdtoCzeUiEQzw6VDx3",
  "key24": "3AZzkDbr697fn4Q9WyD7so5yHSsDzM3cSaDjVN2t8JLLY5Qa6KqwQkycCecw9YNN2CSiZDTyMdbweDawkMxRnjd"
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
