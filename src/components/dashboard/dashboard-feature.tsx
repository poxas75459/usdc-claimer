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
    "43aSXBdpuXKr8W1QFLLTBiSGXSUbYHspJFs6UT9L4R5K5q1sDZ73uDdCotkW2BN2gfmp25tahFhn5MGi74rHXxFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kdEBkyn1CBg3pUefQe7WLgE3d2bZLYQ26TNiKa74Zqp1bTwnYpTdRwgoztt2Yp5QsUbEqvwPSqmKSFY9dAE4uqL",
  "key1": "DJwdp7782ZYpkkunJEacW1JsLxaeCDQ6KERUFpNboV4KSdi5yYS48De6vnrbfnQ4g1927izjBeBz3GzwhtV9rHK",
  "key2": "5iC6tbh5Hpr3bBrzBYDFh7H6ykfy2HK5hzry9m1j3jkDMsjre1khNzbXdgopSe637ihoh2AFkHEcsmHCstuTJK8i",
  "key3": "5trYfH9gpT4ZWNdUwftzA1foyNbuZzsbjopHkJvat3u1VZcuHk7p2P5FPriKfKkfXpnmrWwj6LVjE2wCrbr3J8h6",
  "key4": "4t7q1cFEDYTsBf5ThvvmN5MgX9byJ41AmkBCnixzZDzsL8zezLrM15hfgk81oFGgEYZ14TGigUcUQ53Da5c7tQae",
  "key5": "54pa84pK6uhVXwEnKTTyEqidQVRbJdqoBfVMmNg8NvY8kKatM1eywpPk8tdXVfLHjpGjEsREjysGTrYwBn6KCMXw",
  "key6": "328PzwgYrDZJVZFUT49Jf9zQWYTYdYxLgtStg4qcZDEKMNt3mrez9GpET7nwnLWzHdJKuKUuWqvcRECxAo6d7Lbm",
  "key7": "238HKMUPPjrNVx66N3cT7AysTFdswcaAWcUYryaWNk9G5adVjvJzdJbmPBXYgvyHpczTZHrMUnB19dxSta293sh9",
  "key8": "3X6nDGYZK5ZznQ6R9EfyS68j2Dprg2Zvktvegi52BxwmrDMn4EHKd26NAeJLgD4q8kzTd5Lk9A78GHNpJqeU91YN",
  "key9": "4XTP2uHzQhDZGMX4gFhK5m2UvhbPwcqEakacixkqcz3UypsdWqtYLxGPriBmwnoXXinBznfL7Yua5xNX9aMjdkfm",
  "key10": "3ejgX9i4cAkioKKdRAwb4dmMGWiV6dbt6pd1Ua9ccugF5EJVscyQorGyFP1UD1WTAXQkaTjR66AXzk7UUAC8PyYx",
  "key11": "2hEwN11BfKdScgdaXceLEHRobKB56XPXGFfNMJ476szQR8ENhwFsugFxb2vWKRkidkwZm7SznE3cNXQ8r6W4j5mW",
  "key12": "i4TisAFFXV7rEmamxc1wsahomeeNazXHEmV4WcefpuQLmXh6HTyaH2J2PiXaBoUFWQ7ae34GE2MFrm6vuEigwzC",
  "key13": "3eCiHmUj4NpYXAmpoL8DcjF6YL5xopoPTzQ3LQGS1JF9Tk7ezjk8pMHGRXCA57AmhD29mQ6amybnufZREk4AUVZE",
  "key14": "BVUaZGkYrUAeD2CpSwj85CFpfWYiUdgLsMfvsXAFmSua7TuYFbwRtk1fKSFpALsX98H6RMbrfurG6bWWxueVC7P",
  "key15": "3EAaC2HEREwSmACnJE9rjCvbJBkcBaQdSpo68CkevPZrJeKFFoD2JYTJySpLueq2M9jMqSetS28sRqvaRfmaNhcx",
  "key16": "5etcD2qevtFUaAN2wQ7DnDV2n9uk3SRR3GydkunXg339DNYSS2KFoPjNPMa1ctjSsyTLMxKDdQMG9bn2Mv9oe5Cj",
  "key17": "5uJ2zU3NsheUFqNTnPatWMU2tQuHYJALLPkMEjtKAGGiHaPJiht3RTY7TpcxKustcnm4vSPxLniYGSqTVg5fnHr1",
  "key18": "4fMDsEwN6BjpaHLPidYwe3rD4zauaWdLAvcYwYZsj6LsjwyeX2heTBUJzt61B6dRcZRJcqobxqCmG2XykkWtgLUv",
  "key19": "3Jejj4wbmCusmiKjXwMu8RzwZFTfpF5Wdq2RSWpzxTqkS3uPekqAv9U9HZmR2V3n8FeSM48oYicAMUQGUtj4wbo7",
  "key20": "23v6C4QULtQ3H7QixkLFoeBpS5hwZLWCoDcJykVEjMER28fNLne3C49nFwAu4mV73DSfzxVMNYs1YrTuTE4kpQvS",
  "key21": "4wYSxUYhEbM8gfXnmSkwYBixrsvtu5ws7ZdvMEed82ZKyHmGWZS628zT9c51W5h6xhPLxwM9SgWxfZGZWZ398qoR",
  "key22": "4LxXSRwRERJA9GAFZeZ7RMV5aenzM1ZXD87PtvMWwPs9fb2YKKe99QVo2FYH2Cxn2LDdgRL72t8nuSzADccf3eDx",
  "key23": "5K7weSZoDaVisA8E8ezNEPuGaxcRftWfNrHJgYadaoBuBJwTGvS6Q9GSQ25L9J3rEJLGFxJL943Kx7Q6bUtcw7NA",
  "key24": "5u1FVH1NrrYfPhuL8w1t6XGicLf8TjgvFTzXSYATSu4XQPUZcRMBMri1ebQwMTh13zQtRrpCcPsDU3LztNx5hTkj",
  "key25": "RVhxNvHL7gwa4bexBa88UV86CBjkSKkAQXCU7ysvJCS85xdeQ5x5JPgWFReDk6iFYQFf3nstuwgzmNiQs6UUUfF",
  "key26": "yj8R5E5WQKy4GGgD2A6QkoMFccZvVcieDLEeGiRrQejGxwTp8PWfvaAQMbU1PPij2e39T3wmyftJHR9cvq9sSgE",
  "key27": "oGWZgm4g3T43JXQ7bTkbQemP5FzdJ8r2SL7Sf6MfJb47TbJTE4SYqpbphb19UzmBgR6wi1w24mWqTaQtMkTEyus",
  "key28": "3z2aPiUHATA6d1CoNhqtUw2qCMGsp1Pjzitd9Z5j4YRK9iwYb6yGzAfJBoXQZMQBaTK7ssoXvZ8SGKedA7S8HU9G",
  "key29": "5GNrCBKqezwuoeQSmRregL59zbY91kVnMPHsHB2ryooAMzoc7vAUugXW9xMkG8idft3VjJYt1hfcvjYL8kC79mmz"
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
