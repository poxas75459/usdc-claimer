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
    "3WNt2rLRvCLrfRC4yGyFF2sTJ8VAzyhCFWmQLgkv71qzDnjd8aKjTpupbdXFBV4geDTA8Fq5aLveLJT1z9o23ZjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dioD9foyJxVT4kCc3n25YsrAD1KA5Ag5WA2HXq6sF5rHWEq8FeWn1FZkbDubCY1ZUWnf3DnpkgMN3QAyVEMMBLT",
  "key1": "2GnyZ4rvdEiVm6gaeNjx7wZSxymNkPD8LJ5XSTwpS6X8qvptevh2SFTaTjzavwh626jaZadgFzm1TJJbWdivCj2n",
  "key2": "4dFoJJxiMvJV8bNJ6q3Hap99u6nMz8RYbD5L8YUwfSfZG8SrZoDPETgSxKxsYJHGjmSdSrcU6QH248NtYakiEiwS",
  "key3": "4tyz8sN9m3MYeVgB2uMKNgMQTqa5vpBtzYzhyK4arq88tQVF9JAN33odwUriwRdLjxoZPCvGR3KfnjeEww1DA14C",
  "key4": "2KMx9VSYFrCSy7e6CEsBBzR6uh6BAe9rSnJCjZTDMwH1bU4eJzPoxv1vspotiYnqbDbqCHUHydygYbhQnASUy7MF",
  "key5": "47SkLYE1srVLHpSY3maDDBVbubbJVBAu69knQgMNYcW1TeaZHeGgzAEDrGWMPdeSwUStp754p2oBiNDdyQr4BXYb",
  "key6": "2vXUBXofJHsTFeTn43zpyRd69x7b6LoEpaYvfNT1fzky464gbVNcGwPmT9N1cym3GHvPunaakTY3JAbLjtCB8kPm",
  "key7": "2t6tQ3FUzbAvvytJwTCruFSjo6Bbbv6SBMV69bcaZ3MZd2mR82ow3aurWAiw2BP6sdUFTvnoYn4cLd7E82gZiNb5",
  "key8": "s7jjjqx1SowWUrsRH8qFYnRzm4j4yPqQyf1B8Z6BimedRh6RLrdsNn1KKHYAdSsFXg5k6T5LKe5aJrfmgyw8N14",
  "key9": "2sGTgZaAGvNWSphmr9NHRtU7TRUK1AypRcEQek44TiYu2ct6GbXKBNw9wk8QN18WzRYVySEMNHHJYkf9QaDhihfW",
  "key10": "5rgrvqj32H3DrkmxopVDh7X7AVDhZpuUYK2DeQ7KHU2k1CTYFx85pygwy7fmstpB5pHuvHJfuWWPJRUEgWyBW21b",
  "key11": "62YZGGnHFzEqft7cUZ7SEnv9aPuXmV5dbKHhUZrer9o3e41G7H4A8MMiP22VjYDkWeUVd3ND21fGV9MEMPf27PTD",
  "key12": "4Hba2eYKZzj6qC8HZ8qNb1q2qKdhZm9zCHnzFYH7mFGmw4bopP8Y2Ko2pQvKhrEc4TtofLA7WD7MuwQyFWY2Ff96",
  "key13": "5GTzxNuSZn8UroDtQG1Wx2PhSf15DCMA6NnnBgTe4k3HCD2Y6nsoN6PbTX7M9wsjKuofiEF5Yb6uKxQ9J4ZE11Jc",
  "key14": "4DgoPxivEC4gxysSr2H71zJT2BHqpt5SuY3MtuuhTRMmV3CTjb6WKfDEUDy8PpzN4UPYhndCxYT5s1UvTHzfntuf",
  "key15": "Kuxi8XG9nKo8mVFH67WDUSLThyHdqUuBuUs4UYa7Quq6HxmiuxsW6f2ZiQLrdienvqJX4EUUz1hEKE2uq4LmcCN",
  "key16": "533ubcE5QiEowwUrVixnmARDLFTCoY6t6cdEgC5KNbDyKQtvawu2fq5Fw3B6JwHB6k1zRGxsD3mok8TpxVS9F8UQ",
  "key17": "3M515SBHrHtzSfgVzR2u4zoHNWn71yVydJDi1xj3SRRm5ZXo4WdFxCWpNMCiPkC56PX5npuDY9ZCwZWop32Cdt4s",
  "key18": "FfMTULFubLiSCQNFsqWKd5ieafNzJSmt9qpV3mhNe2qAF5XCya6doDEZRvNxMoqgiQbKa5kCfwmJMDWzKaNhWxL",
  "key19": "5Su7ftQYeR5on2cc3ayXfZN4mnjtSkBqJNRBou3TXz2bxr1RNWWMqms33qkqEESPPsm8gJ8r9SptDqijrmwdJ1fV",
  "key20": "4eAwj6SZQb54aWSShEdetRFZP229z37VWTeF5n1TJpRqGvraGYqEzY93JnZK3DArLm3fw3SH5HDxmZZvHYhTw88a",
  "key21": "ugqmRh72KmAGe2PNqjPRbx118BugWW8K8S2Yfwp36HAWUL33GzLNp5TCXRJzzpVxpLGNKHqT4vsaqFZvxmp6f5X",
  "key22": "5KEShmiXfFkdQBKvqQRaa2SbHQcbp1o9MsEZDdJFtgKrSNdxVTf8R1P14Ww38vuD6XUHFYXnMLXwTjUGig2qucJa",
  "key23": "2MwAGujsbrhK94bhA7ZRvw6YdbvXUB3f6bXCs58Uuf6gCuHyaKgVJkeET9dbXgmqGnQNV8iUE4iDJ4S8rWUVjhot",
  "key24": "4EG6T97rcREvYqMJ4aPfcCAzCKy5PGpJNK7iVzC3vkCf744gqhu9gXvoURNiySLrc3qhqF6Sz8ChwR8w48wPfw4c",
  "key25": "5M3E7fNrqkBoqs9dPjCVEi753qQHbuo36XHrGd3YV7hmXHc4iDumWiTe7csteDZHUt7AZyyUSMC5vWu1eEk4g2Bj",
  "key26": "4Tm84xaWAVpcfBTZZ2TpLwebH7zc6EsJS3BpeFgnEo61CLV11QNa5srG7owbBatFCGBu5tmwFdB7Pw1EKMgVTsp7"
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
