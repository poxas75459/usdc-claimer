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
    "w36HMZHcQpeidZiEQqxfPDsytpTRRmEAFCPPoG3rLGLjrjmyAFNEM7kND1drVyPjADcbDYr9Uajt6Yaw4ApZqmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sS4FVQuC6wjghfiV4vbcD8RwAobkf9svkgyTjWyAV6m2Vt6QSHSiXbdoirR66njuEnyE1jpHwkgwvqvGdcNA14p",
  "key1": "2D8PWVCwyhR62YSiyJXUaRAWXmyxHcrBveMHgwK1gDz8jnKTmpW1LvJBAZNEN4bTAdywfazCmUNmmvrHemLot2RW",
  "key2": "3UrWgxWzRRep3NKiuEBN2dtFRj4AgATb5ynpJ3R2N3bc3D6pZC8cspCeD2Npy5MKBavk8nYnpQQ6ohwSgYWGX5UX",
  "key3": "2AL1nDuMwxg8xRYwoWMtxeWRfxYroncMVnYiNQknqYik4Vf9iBQfGFvneiEz9Licw63g2SWozCWnDKYzyqURd9yY",
  "key4": "23Tuu8sjpoh7yqE1EB2wPAkvGSQiAERc518MVGWeGpAX2tkMEv4LE1F8N98YAKjJPhGvU8sv2RKb68Q2TMfS2dQw",
  "key5": "7KN1YcDMDw6GN3WoT2opsVPcCQs12JqrnCykLLtoHT64PUANNK2JDPAc31ZvsEumtL7aR2DVhxWnea2NQ5KD8ct",
  "key6": "5uPRLEc5kN56Ae5xhooq7HNDmA3RjYJBJ5qsDYR3sPUQ25rbR6EGMHZgLEGunZjeHFqFjaJEqCiGf7PBqV7L44sC",
  "key7": "2rLcUUygqGLTjkh1dDDWfN2Cat9miTojHMbXiQyJ9ducJDLpuzBt6UwHzmy54q1PQUW6Z6EzZiLR5TGAWrPW8frU",
  "key8": "2GRVzAY5TQ4sPB4U4utV5wcaky8PX8qV9NLbgFx7x5Hxn5pHnQkGG5jdbmoeJZVtjoziBZJwd822ZK57UQy3sjUg",
  "key9": "3SmsHhbeSsdH9CyjNh8HRi3d7NXSiP8mFpz2E1DKjvXU1JS77DCUJogiVbNCJtgR2hJ9XNcURZUZUm2YfW93KPn8",
  "key10": "59LGhEo5dMedQ81UvXuxnDuMfPJCqrbq1fgLZvArcWzSBUemVcxbqT8KrjrcusnVWBanNQp9PnMcrCckLm5ChHz9",
  "key11": "H4HkMMK4r7Y1kdefHegGmyu5iod8qaiZY2qz7Xei7U7LzY1FLrgna6ktauNgzdtF1xJpWeMQLUBx4kKPjBquaNs",
  "key12": "4WLw1VE4ANTQHcPMQJCNBuLLkoe5bA8VTC4Eue8tRq81Gatt1XvBuJP6qi9s7sUC9ubCSUd12Cafs6sEDjqxphBX",
  "key13": "2o7TMB1JN56ry6vbGsPXM2hz4xixRs8NxAFL3T4EZFPKSPfvLufkpFPFxnLK5WLLzjA9euPHXCzeKuE9gNN7sutc",
  "key14": "39PneRDcrDA1aFfUpSsZ4Z6zqZFmzFH3jTHKYxXVWxU6YDxxqDEzjJ47c8t62sxz7KdBkt2U9kxS2wLdDyHoazcK",
  "key15": "4wrgAHMxESCzedEMVzz63gGnXypKpW6knTEGWYcC5XNQzeTyaQFKfqrndCit2Pgk2Ku8NeyNQJtqJoXkkAWXMMUL",
  "key16": "Dyox83KsPmkuBiwMr2ov3TpfYZsqX1T43L2EMc8msXkT3uJ28PAHfuVQJYm7AcL4sZLhqk94FcDnUzwZqerAhuR",
  "key17": "2LLAwexyGK7JeD3nGLLe2f6Y1CcVaYBcF5bWKmhRrNpuEej6ukDpfhM4PJkAV6v1aoSMHfZt5BuhWanCzdk1UBuF",
  "key18": "4HLdP9YziUk1VA8LTzyhXRXfKhdRXGmAxfww2NM71YS9nmW2VwVRXSL78f2fk1dBk5E7rK1ooCpbC5xMeh1Ejq1i",
  "key19": "62ff2KzJgotbM8bNWPPXFC8AQkagsCNQRWpr6WkhAzh5N1ipdmc4jnBsQYJ3XKR1KY5xK4JM8zHf5otKJJNG3Ejp",
  "key20": "4Mk1kfhqPuSJQT6eER6kWiawk3abzzTknKodiTAWzMwS7yH26oxoYiyKXzo5WbvymjWmVkfgzYfrWZd4qY46eeoC",
  "key21": "36ynrKfsFwqCRKLix7hYQLnmzVmRHMgdMVN92rena7Zuc6bzgSXKmS9hgyKRMdGJ9fuuCD9hf9ftHXPyfqyN9Q9M",
  "key22": "3x3FX3DN3hM2a2crCKJm3KsMy8H4r9zQ1qUfCuJUqPosUUpAzG58XqHHmF33EZsiC72qNaxoZMZfRtsVPbRSo7DZ",
  "key23": "2YmR7xsdPfAjjzWFSLiLygyueXTYvsDEEv8aWbe2tZQsDJWbr864sV4Bt4xiJHkuG6perCw7mGBLRcdrQ8iPSCPJ",
  "key24": "245fwmVEj4LQHkdjBBe68Aph2T51j2mCxpRiTzQKm4LadSErhic7C5ozrfVdnBukMmkTZ3shTCTvqTFMTAhqkgem",
  "key25": "4iRKcyAwaPLBxzjH8aEnkTKAWWD5bfK2x8BLxNtu7gy4pYKHxiaD1mSLmk8KmsAMEncHLxHKY1pcXzYzWFtuhBvr",
  "key26": "3AyjJjEZVfkHcRZNnsxMaVsmUuzGpwgtTj35ZQQoAaSeWtZE6CyBdidhg82zoCuBnUg6yx6TDyvQ5LDuobNH7Rkg",
  "key27": "3i7fSXhojtt1GmVvGMtLojmor4Q3qCGQ3V4KMLijSaZfPtwkFiqVvC9V26kFoC9fUxsU47LT5UnwVo7EErCZ7pD4",
  "key28": "5JbJzYxP4UgekHPzxd4VkVKQp8sUbPhmRhqoBcqx5SCHWXsX2D2RiuNAYSbzJXGbcJmZyacPLkknJr7Njnt9EMQH",
  "key29": "ZDMYT1TD9BNTmq7bBhfe5yVPCD7pormABz1BpMm1eCzcSYeUYMggWeYEVvFpAW7jDKzbpHcXvpu83DhxCwqQ2M1",
  "key30": "F7DF5eiZUACKSEHo4Wc6gmERA1KgGkBuUTJuzYv7LJx7kQLWej9bTceTK2Tw4oNw8ZKzNxSDDNBi3uuivuSQb3j",
  "key31": "67aw6CjNubsFYEFMtFptb2g1UwBEeYu2zhZXgxwj8YGsHDcB7dhRBCxXh5oZwLeRDMqn56HLEMMqy55ME3xxVyvm",
  "key32": "mL7d6oxKqYZaWExpxmBwbVdxnxypwuZb2WGAAZg98QF4T8uPUyzQbPKxN5uLbHAcwHNTm1tcCX8WoAnqPDdQ4cb",
  "key33": "5XB3o4WqexSwp4v9rGKhp8cBiDva1gA43FLxgJgV8wVewjvzqsPkXnYBfHHihNFUZauSP3ekLnaogyzwYXmT4TMW"
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
