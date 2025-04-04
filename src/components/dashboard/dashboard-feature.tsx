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
    "29zForPMj788sPvpTvrCY7Z2rgD3h4meUu2Ud66MFYHYuKmZyW1c5J9m6dULg7rwGtDRWVG97zXEbDdYbKZpyTYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bi2NJdymvxM6P87UoYCPyMPYWRth9PS2mGFG1WQw7XmxhmhQwV4z4S6LMBFv242sKZinqQg3PoDumouRwt82Rda",
  "key1": "5iA13437JoF8hXpLvaRn4ZGbUGTuQHKELBt73KBppUoB4g1UQvi8LSdc5QUTwPii2ZjySWhvkSvmVF8kRn3ephd8",
  "key2": "2sNPeGE5Fc8pTsqW2z8fSHiZeN5Na2xG8mC5iKLYx74pDShgZDPZqrNeqLzuDtPQKg4whCJfWQHYXLkVR1c3WnAk",
  "key3": "4yc9S9ZWR96oLzdbC6ZsqefFqQE4E3TMSV4jCNu1C8xXVmGEYpFZs4vQxBhdcDaVEJ9Vv7HGhoD4eHHcwoQzhWuU",
  "key4": "51kwhFjuArhHuKh2vc2jUiqbPjCrYByJCNgJLCE8y5sdyj6e5Y4opHrDw5dBz28vHHX5MNU7sc4GRBbfpKRXthBV",
  "key5": "5NimJFrpex8nTwM6xe4w8UDghndRmv9MwfcdAnj5dByiPpeEe6KZjCNEkuXk1YYcJjQAeRBiJG66wt11huR8fScW",
  "key6": "3XHSxT6wGLCyaWU7Yhd1xn4jfHP9rgFLEuC1auvbsux95irP9YqoJbETZSqBarMankFHY896cchZ8mp8L3UJimUx",
  "key7": "5jYkQi3xn12JYjgteVkAwuzFpQnwtxVqPkbzz5HxdUH7witU6KgnWoocMT1s4aBNVSFBFkCT8CXDUjT59yDmeLoN",
  "key8": "5NQqEwMLEJko69foPRMq2gvhutua6Mdzpoz2TCVnASUZ2CkQcMkDgFhuHCjMP8DQXXM1w8NHdNQ3wj2KEKEWoZXc",
  "key9": "3xagpvxnxC6Wk7GqBhjR2QHUzvVQwCdjcDizyei8pRUofh4Z9gjrpkiujT8kRn7Q3jH7nQZQiSTF2fPYJ9Q6La6w",
  "key10": "5h1dSmc14CFqQmsm4EuaZLampinWAwuhddLqXoykEgMdTnoALfHwUnzaiWUPo7v1Hyvnixhr2AwHf7LXzMwKdPmX",
  "key11": "jZjCxpJUknSwTc4JGHZ5oAvVjKaZiFWyrN3jDvJivkpn6oQfF9YWLYEfAKDQBH9LgRwGhzdcwim7PaA7dxU9FdU",
  "key12": "4umUHb1CWY2XnX2XuN8VU5iuAbMRC66NTJxkPg5n1kMPZdL4HJ5LifjTe2goXJHJqPYPj3uBztKfxfrUzGGZtaeq",
  "key13": "5fmEMmb4vgv327KR5D3Jz1TqFXskdCB8eKxkrywhnT1ay5uU8F9hMfStcskBWioXkJrcJMD1pFbypFd1nZrtzJV8",
  "key14": "4WiXjxVE8K9sHjA5Maqi9wQVFnoSGq8QBttPAt9YC9TxT7ZbUrZpcyBSVtq4vcdHk8qbadGGDfN2firWZsf61rDP",
  "key15": "ad5GVeMHEkpYHmNwvesXmGq62q5B7a3T31kmWvLQnX4ZrgCZPSijVcce9PLD5zoooo4FxfrgtJjzBBKsRLRNfz8",
  "key16": "B6g6CVkTgT7WzP3o2CEELXgf2u8koEBdjxYbR8EMmD6rRdDGvQV1aDWT8Kip4godF98qxS9LWXfdVBXiiSneLUu",
  "key17": "2CEvwGh2YFLaoUkXMUrS7EPMt6vXqCvQ66nMgeiVATEZbpT35Cczsiagf4LqzDkGx7b7zoqUWyo26MQgBbJiUF2x",
  "key18": "42Y2q4tv87fqJrpyJKcF2fhQGcUhvtrgn7bQhu97ZsRb77EZy4AsgdZ3K1hyDmgi6ktC89FWpFDr2EZz72vigKkD",
  "key19": "4ejGg7wdsZL4CrQzK2GUtuomkkdH1vFyQe9Zwv4DE5GbjpWzZAyXr45sfVAFhc7Y3GxzPP1htXwgY1ehLtj8PNun",
  "key20": "4YhikJSmHE9NRzcp7XhEXLBFXq6ppaneDHkagbx7D1FSHRoivFKks88SCcQTg1iVSYbVJtuJqSU2WLcTxR9rEFvF",
  "key21": "4QMgP7ztrCeztNpntzP75sW5xQLQr3amH9y4FRBZf9xSA27yxCFPFGc5TUhp9EGvP2bexh8pEoWK5uiQJwanij7f",
  "key22": "4jBJvT5FYY4Z8xaDvcsaXkbFeGLgH6VtmVe5y2SPDwgu1vD3sWvPCGWW7vg4c2otZkNiGDeCf3tX7FCCgcskKCgr",
  "key23": "3eJjEY4yMr6UvxVcrzEexdayYA9HAKfyzKnY4TaSnwFA2KJzLCKQXSqL7MaqFkJc8i7C5WEi3RPpwF3m7nXmiubY",
  "key24": "4cquiarWsU4VoP58xDB3TjpHPSDeH5kqSkEbhya1EEdL8tQbz8CvxnN2WyHsu79N26sVwhFBbE1tXVbU3U6QJnW4",
  "key25": "2XrjA6Eg2dsoKkZH7wj3Qw9jPigxvA8ZCBpzDnk4cSjhJULNzxzi1f66vZS81KiHTUVR4vyWuS4N1ZzYLKq8tkbu",
  "key26": "4SmxvrpGdqwdYQFN7Z797Fg9oMZDNtbDdxe1AXgfcCMLaV7fCE3sPSwPwG1kPps9ErxdwHwQqr4vz5VWrudhKZTx"
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
