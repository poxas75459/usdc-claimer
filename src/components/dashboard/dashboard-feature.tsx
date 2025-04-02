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
    "2qoSYkiYn4nFfopxRsyPeSLqXP4vzWjFNB8c5Thpqzikqw2EwEdPpLM7QnbF3ccMDSFiQ3KQaJdzTTVzxFZoH3fN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UD8nkCwGVckW9DXeqFvMNtxjSVeVjiNsUBuPTPBLkE35Vuwdfzvj7ey24Xzy1ZceNh9QqrumkPtxoJAeua41TRY",
  "key1": "61UVnwTymFYEZwWK7wXRq9dyZoG2PYSdWHP2ShGmTBiyJg428sY7XP6rzvR5to19JzZYRUq7B9PmKY9VaR5zc4ud",
  "key2": "5EF8Vce3LG3rdaGTrgestt6J5yioZfB58mQg9q2WMe5Ac7uUrrhv2Thx3qrEsQNmY8hq2ibS44YDeL8GykcwGC7X",
  "key3": "5ArPp59QYRFG9Ky7ZjHW9XHbEHyQGgqRSrkUni5QDmFzYrjpeWXZLEdiZpqWvLgYRWuMX4NHuuHk1VD1Yuc24XTX",
  "key4": "7yRqwuucY9uKPaLme3XZxJKqCdm4UkEkJFKwu4nAV7Aw44YECnwWq57F2F4ftJha8K4JRpwQWye5B2RdaC2Ap31",
  "key5": "3cbZHpoh87d7zFpSp9vKkcKFR9pEF8eLRZ822UoMFqyKLPhTej9Mm1uvPJwgNm1E4LcVSshEzG11MtxwZDLUoMj1",
  "key6": "4gCJ3Bcbb5QxxD6h5W5jcsM2HFNqocZ6WmsUjq1S6wivbta6kLaUMYDieH5DamrF6ctqcHjcmvpVinjbwP6S2MfS",
  "key7": "3wCJYKPtpzVbkz7491V8amQW2CnpzQoZgYKARvVtZySqRLMm1mg1nfryjkyxgYuZRxz74TtoUFUc5Tx1cPAPX6NW",
  "key8": "5TRXiu89sVT9fY9R2dF3tvGDhnSwTRhsRcehL1oabe7scyMcJeUwsg5uyuLHkQyKMKSUZofwFtaZoPZ3vctTYkHh",
  "key9": "fSkpDsvFAztX7oKdyJWK9YugbpfWo2kcqzD3rc6d7aSzno5qDzhus1jft8v6d5fchbC5t8jnaFGfFtehVmtGHup",
  "key10": "2aJXDzshFBsLNBqDRRg4LBHCquJvewJjrJq1QNejCYx6uXngYbRMJwvKzSPtsP893vCgTBSGAbVd6P4RNUns5DdV",
  "key11": "4Nifb7XhpEB9pKorKuqcv5jNqyWmCHK9tbJSrE89Yvh6zir7m7E9hqiR5M3fL8jpc4nFUWy7EF1zLrNfx6DhKe1V",
  "key12": "62jSgbL2e5xMZWz3sq2s3jxPoBLLUQ1RKrtJTrkcXPf54beXPHudcf1LKWBj9zjaR6jrduUh36VMVWBoUmkVw2Hr",
  "key13": "23dwi9pxLEwtZid1eM8V5idy6eE9KfdUXFkiRPoJ3s577dMLFYweNw4bRruAeZMjZZbWPwFfoE39aG9vfbMKWtYY",
  "key14": "3LFvWp68ThrufYTiXazXUccX6GK8c8F6K7a3VtVWjBM2qBzPv4WoGxyyJCrUiNb53QyzXcY1t2uBbSpbLoVVLM4k",
  "key15": "288D7LekJNxSshUMg3AXfRWJovb4hHTcxSerGkFaPVLDidRfqfCABd8kMNCna1GP5XtM9yVDXH9Zk8NKJtSzdfbd",
  "key16": "31b5RfizCnpffxUURodx3F3713JyEc4i1236XVGosetJ6mWNfZTrXVxSCtRJyGXGRcXoDfEVD6zmKFnGvTv6f2Yf",
  "key17": "4CoGJzQdZJAKv3qs1XaBHEo8aiF4S3SrNJ5bJbjVLPhPsgCngcdwA3uyG2ywoWFkYYPHaDZFTnzpBv1jN88uzBYB",
  "key18": "BvKZLKwJur3LQwMDYb6E2vT5SRV9d2vrvZ7CUPNhrokLbdzTzZKRD2TJWjtBrS28pew8i2TjrcykWK7wMYT2EWx",
  "key19": "2NNLEJm42DURvpTzn2nYzyR8fWtJziGLTz21g5ExotofP23YUNFwMEvj3EtazVKhxGqJMsFchLA5hzfrjUqtmTZq",
  "key20": "3UsVoA3jmdE6mPtWsKzPrrCm21CS83261PTynsk7qUoZQk5UCaRAg9uDYUZ5bFXBEb3bepEfkJS2dvdnn3MCrNkt",
  "key21": "2EeJ4MJpgt5JYEWH7sYv9NHTf3APhW5QLH8jLxHBvJAwvAC5iGr3vpPNohapTBjWHxPYvyv75Bt7Q9MW7aYziHbx",
  "key22": "4DEmE12WrYTyxe6GAip9hKmuBvEoz5DJd7MYfUQqvc4Ax7Bme92gvUKJFYVyXWSC6Sy2zDYeW8RmifZ75tqU3x3T",
  "key23": "B7FYqoHhjwk7PicGw6m7cAArGgRmP5hGLXTxTtheZmwTr5wVs53eawipT5ZLGaVSpG368ZnokWysq3HMPkZTK3a",
  "key24": "4Z14yPWJ1mrYkkjeGsy3oxpckkV38raC9zoZnkCeZJbASFuwHAAWCHXj5QsdFAQ9kT4nwnzk9g7DTqRxEsFeZ9ds",
  "key25": "3YWCNSC7x84437RL4PmxXz5PNPMrfCw78DaP3mVLxEX9DuPm6FWf36PtjmyJ7Tw2BjZewftmPk9RJNeFBQFt1hKK",
  "key26": "5HmiXonznZxrv24tWLDCu4ai4Vq3sXf23NhhuAQgeYuDubXMXuqTY9hjPrCNKtjRT3QycqkkKCWDHEki5HywxRkS",
  "key27": "2ZYtWTwXxTHgedt9kFyvHSPyGq61b7Q6LiN89eyimiD6tmbktKehdBNXG77TUuTDQG4KyrH7aSkDovEeRNeUyH6r",
  "key28": "2uJ2u7gdjLTwDBcC1wBzC3BH5UVSsao8Lo7cZF2qtZaCgQnZ7RC3ihGL3ZHWWqJP1iAmkrHBZPvbfykNK7Bs2vhi",
  "key29": "3b5LebpXbquAuQofjGYWAM5cKFroNfmCyDQEAKMjm9tiJrKUiKHFq7tMJtPWLXRxjNbsiLZJbD8RpxNVW8MU8oeC",
  "key30": "4CJ79hhiGewJQ2z4Vb3tL2YMU8XMXHkdj8yQpS4DoLgtKufx8YAtjHBWtQBYFYEnieQvHDUxQrQVvmZMFELBmEQx",
  "key31": "mhk7zibvmNg5E4h6yaSMkUastmkFRzp5KCgxjiqze8qN77Ea1F1dK53ANCrGmHjAmFPt1TkK1QfrTknzwUrrHp7",
  "key32": "4GJUVmstUMUbW7MqXyCBuQ2rgGLvHJ9yrPcqPVvjQTbMztrL8yPjiyRfwBZyavnDjqSnHP13rxT6iGDmBrCAqedF",
  "key33": "5d49ZK5fv6SzVWZUGfyv9VnhG4aUDue9kFXL8WYu1gHDp36c4sQmCTcsciVX45S2tRm2CLbT6HPNpiK9KHpF4DVa",
  "key34": "5TyzGXSWpG5mmsvA3DTziAEJgEZhwCYWDpMzc4gicRTBYUYYYQvYej8Err4L8idxm7Ef1A8Y7Pwcs1C9sUnPTSwr",
  "key35": "3Dch6Qthq3WBcMfhjy9PHF9PhVvSoGfMp9HwWWF2Mjietqg8JxfpDeD3CLH6QTNyCrHLrDWy2MB4BNbPkphAZpvS",
  "key36": "3f8mYkmro9ctL3d9v3bo4ZPSgaRckWTF8soF1rcE1Mjg41n4iMfg4jRKHTCUk9buZ9yb6DdjbEpT8L3H6UGjmXHp",
  "key37": "23CXRrULjEVpKDQTQEWAHRkt1Dv82GDDJ95shMVKUs5qX3dGocrGDwLzKdg8pNGmVaCTaM2XE3qLZ3BLGFxTzTM6",
  "key38": "2JbCSsur5rxPAHdKSomEzgZAXY83zgAtuy5tTQuErixkBEnmc4ozH5CHwGUE5YPFVBMEnQejVEziKWHH62PMrRrr",
  "key39": "CU62fDhNMZquxM6jqCohhmjbQmyUbtdFVmRUU6FnYVLottmFGCVvaDjp4v6YhvqiTuSxqmTJ2movkTK9fM7vJLs",
  "key40": "3JzuyxhqRKQzK9KHqbn2gxXCynfWgwRv5BAcPAwra9oYbLddKssnQkLJLur8SHvbtEcPsf9MPCGTrGM6dLbWc6Ti",
  "key41": "4nsPCAE4eTHMefAUFLkgrLXNU1kHY1N8eRkT1cDKpPhNiT697XqHKrwj5gZUMKvFJnWWTkNTV2cgwuefQD67TAMy",
  "key42": "5U1qumFRgVYfuTFyhw2YH3Qg2NZio9yxnb6x9rLRHMXNhzL96JsiwXhsZx7m8AttDWTqwhEctcrmAnUQpMR55jwG"
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
