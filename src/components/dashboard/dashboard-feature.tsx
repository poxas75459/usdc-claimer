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
    "4TxjGtTLhxprkXRBpoJtfo7ERtn1untpGFY4Ccie8536ZNV7bSDKYbpCYCgmtbqGEakkPvxYkGmgfwJrG3rnQhcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LKxUjJDpozDuNAexysUmZWad3T8uNnfL8BarP61oboabA9gK13tqzbv6KowyCZuXZK2gfs1SkgsZzesq5MNNKSi",
  "key1": "3Q3SV6tXW12J2jqMjjYFcfL4BEPQonHJgDG8NKGJ5g4yyA4HVQyo9mchvU6pz66u1UgpD7he7PyjxcR6uxTyV2j6",
  "key2": "2r4f9FzMFd8Se4NvhvdQVohAUj8nehLed1KAjhcjUen84sfrXFKJ11BmePB86FA7ASiZj7SNsTcBFcVN1bRCTkHc",
  "key3": "4r6C8NJPyYx8vQxDrkHR2LFbFjLaXxfRkVJuVtji6USSRmYBWz9keYtdgWjGZRWstLCbi8SYGSwqcHWy9TTz9vxk",
  "key4": "313GckfHk1sWV3BGDuW13mWtB4chFfsuaNQTuSjtzQzkywokzdLshQnMJh7igt2wk3EafosNCM4jNnMVpQThQHFL",
  "key5": "28e7ne4sFv4C8Da7JHdvHmKXxbbGmiusLHBDpJd9bwL3nQKDAeacmtwm9Ffpnc3Ed2KVtLLfaTamf3WZ5vhJc14E",
  "key6": "216696CJ65vdS6frUAwfchW7KBMqy14JGB7rq6jq2grwooyVadB6LwHKfF5zcp3XWX468qyDJ5sWH9uUb9xEsHsL",
  "key7": "4ANW3exeTQ65ykfoEBaV6N7fT5wtwGU3B3dUbGjFmzWu9Yo4vuBDWcqrtTSrPCArGCfnf8yo6Cj6tNdR2QPJ2Neb",
  "key8": "2NzwmVmPFbfpXzSmVGZVXgMEkrQwycK8uGabAXCHxSPL8YLJVDtMMBeWzkugQrnsBLissvXUU4zVYK1g5BtCEgzH",
  "key9": "z6r5j1eFy8MH91jFovTYLjBxUFLP4TBXyxsaweQoZrerr2X5BySBvkAkmk7Ky6518KK49CG6YayNkXHkFSgGoGM",
  "key10": "ZTfAie9ghexHb288v2VLuya4SF6D2Rd6bR6QMzszXTEc5BmgeN4dwM8tB928vAXpMhBZAQNHuE5xhfsAqxKm4UZ",
  "key11": "65nZL1EwPHujbjhuPMAemx4E7rShSWnX8aUHBqn2pNZowUaV2Tu1ikAGe8KC7m6q4FYzVgBbavvQqrLVAo71SBam",
  "key12": "4PxjFBgAKQff3YhxyVbes59W81vHrP71JuCYEawR8rTmsrbqwkNo48EMK82uZsUDUaFS7zf6KZovndNjMjxjC3dT",
  "key13": "5TCyBPkPzLTuF8atsbC45e4AwviGmiAKV41PFKvE9rTph9vkw6oM9eeCDykPgzYVaZ5cPa1ZPv9gBUKTvfw7apCv",
  "key14": "3MMQ5ornKZHtvYJDKRzTGatyGkxhKSqUtuiqT4iqD8weE7HW2BhzLNsL2X7mHtsNcNYV4NzD7yMQvppU4AEf6N9j",
  "key15": "4oaCTS71NmfAxsoxqJ1FMtRGnuRUba3BKFb7jAYDXGcjgU4tBYNxBzExsGrR8jxELE1SCzjRwHHryvD5Z68iXwu9",
  "key16": "5sDbJ2Tuech8wv6q9w8HaHRQxZZj1xGW9ekRn3eKDffxG63TxgqgStP2phnJQoBnkkiKVJGcrG3pfkYohzq4qJh",
  "key17": "4dGNGgrtJdgfty858ZXpp3Gddp2GTriZERVTkSqeUm75e1ZLNT5Ugbd4K5VgfjDAk9VCfJMxPqtBjpNE2iRxdbgT",
  "key18": "1oYNf4cHfBF3BkJ6F5578VWrm97g8XMkMv79ucAGmRWgTUbVXG5CZfjvYMYcv62H3waTfgf2WHvSDsZ1y6hfLkA",
  "key19": "48cqaWt2moVk2MvFKXrQpSRpU41qSTxCnQibtdzKeNMVtVoSzZfhwYLFQaZPVjo2fdkN2az7eKakpuxxzK87jzx9",
  "key20": "5oo7DCH8ZK99HVewfqXXyvNt3fTFLEjjqaDjr2ZzPhQ6QB6e5ifmgXo2yRFsWuzRgZP25iXSzQvYN1rD3DvyK5uy",
  "key21": "5u2YLg68myv2trwRLsHxT9wT9YuzGpQFLakAae7iCg4Ngd6uDjnojHw5SUUWxNBgDzpJvPZQEDT6CE9iSop1yDLF",
  "key22": "3tuPQVVMMXTcpKn7hm4CiC1SedSvxkEVgYGZUykp4LzYHgwRFpgJpAUUaYcNSGo2mVf2oWcDdNU9gKgeVgmoRSW",
  "key23": "3MH5wT75GScMCzzVi7hcPYjcMW5bP25qZCT2gFTkvpvS9FqbeCResN1pHP8Lcjp6Koy1ckEVBoKoNS8s7UhymBH",
  "key24": "2ZW8LQVD2uGKYEMmTdACNevnWeApapu77fK12S5AqNWRfKLVsSFcxiyzvctP6Wo6riXjYk3tweHuztHE4jfScniM",
  "key25": "2ns3n91dUcKmDX6tZjuHwCjzLemeTifeBfX9teGgBq4H4GbB4xq6R5otyyLD4fRFqCfevULWEkmbqyiVQBELDEPR",
  "key26": "5WNSUzWTyL42GwhEp9NEdFxJYXwAK83aAjb62c8h71jBC2sVSzPWjepwLXegsTBWHc5JwHRBLfS3U9xzX2Cmy5H4",
  "key27": "3nvUskajkd2D5j2K4XK6Jo4yuNrwFNyfhzh6A5DKvXtQXqATjZTXfXjhLGJDDy3ENEDVTbJSxQWkk7KfLr7zif8Z"
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
