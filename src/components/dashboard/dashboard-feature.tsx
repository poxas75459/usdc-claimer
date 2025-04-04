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
    "2BHTf9hrhSTMfihTxhhut4maY9DJkvoqa11aLALeEbJZoBTgE3yZZnxPM7N3hL6zmc5T4DFuUQdfcJJJmCW4VnaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPZUd4sJetzTANBgs11zXznfLVRvzfy3KvSnF7vXXeoQd6QRnUPDrbKtYY6Uybb9RoRcGFbNR8gZLwC8m8kNJrQ",
  "key1": "4erkEDqLkhqswFLJPabJc5mviFKUSfFR2iDd9NSxwyeNzU7WusFVGTKvKct4r1emuRcg2zmHtTB1kL1Rzv6Vbi5p",
  "key2": "3Dp5JnZyicUvZvq3UXFEBsZgTLyF7PdwtMra2BjjT16pauzqdYmuphxBxWwhDY2wFaZKCYzL68QSNQLMn8F5CbAc",
  "key3": "2erSGH6yvLTn4yGtMd1AfZ4VVDprN19kXz2gWtaQJ7E4qN3bJZVvEg1vh6JdPi6VWXr8FK82zvnFZEmnxZCDeJuZ",
  "key4": "3snmbJZnYxTnVnyQ5MNrmz9StAxzNAFch8AXQiPs1ergoesqohUvEu2mMWq1dwG7CYzc4myQCyfx8J1ihGiKyeNd",
  "key5": "4Ci7qRSJcZfJE6oqXrW2a3HnsagMRAoMngNDyAXF5WUWk2RqQUhZfAj5UtGH7PfFBbujjfAzeNDhESuPWJpbqXhG",
  "key6": "2peE8hit3QZUFoDcZxe61jSQAKVEuMMyhkFRP4k4r6k3MEv7NWiechacidXCKryJCTGsP1YU5LX5Xm6BdJTejW24",
  "key7": "2MNbYpErfz6abD6k4Hy3VSrkuzH5o9wM2tiia6emB3EUC2cEndadNQTAsz4uKEafy4uMqkkHnDb7wcqxhHgCyxtD",
  "key8": "sEpF9H1twVFZGo1XwWAXDhEZejkbd2gqXx6QzmE5YT8Yr87mHjKuZY7Kprh3wstXrYfefhTXjYHwFcQubTY64vZ",
  "key9": "3CGHVafEq6AniJghgX6jo9VmFan2xQQKpZkJUQ2HxekAzpCJhh9h63F119TXEt6RYTTVLCwwBrST7xxNPKwtjo5",
  "key10": "v7nCfHdUZJjHP4pCo4zkpNxnjGzFcYeU7FRGisomMczsAC7t1dntcdiDRpayMSrDrEK3H2HVt967XUHXvzwfJw7",
  "key11": "q8Qx8HDSe4fGQRm8toCCFuVBn4unsGhCziFrEphxj9A245NbqVs3oXZ8rwdkBCYZrCMzu7rArWKK6KBC6R3t8vi",
  "key12": "2UdZ7oJsJBpdxu7LDrxRAgxs5zNDpTLgvbyns2WrwoApA12ddZD4fPrdRSnTyQv34GEAP2vrbVhkz8RV8qQKCJ4S",
  "key13": "4q5cJFqAVJfuKoxMZXoUkigVwrsWNJjF2XNL5t1c8JWTzxPGpL8vnvBsKJxHWVKNPkGjqt5dURT7VX6bY6BGigbb",
  "key14": "5u8n6QVUn9pMV4bEDaXGF23cXF4betAmuT7MyUU1Yxd1JmamGz11PVuzH65KAHT2mNPX5fbAN9i4ezQ6poYoiMM1",
  "key15": "31U94ZGeSc5KhvnenxXQER76TZc93eMe1rLdNhEtaowJAdt8hEatKP8QPUCngqeTrUaAjtG9CoLDrJv4qSDp77an",
  "key16": "3vPjkSWR4H2qTWHmhEZxrBRdgZTU93jzMEzSTERjBj2GPfQ121eFFrFiftD5iCgPSXU1kd6zaRRnkbJjaLq8GYhN",
  "key17": "3rAxuyuZjpPb1cM9erbYmwpHxYnmhz4aCkmT2hJHJBQDqpdb4iQiBq7RTVv5BmSheYSJDoiYSZFEWfPhsNrp5LQH",
  "key18": "4aE3RifmAKLQRJKYASzGYbpqP7wwj4ZE8x9aFiuV2aNZsUD23unExtNLcxY9ptTHuRuHDoTad6yixFQQuznHXA9T",
  "key19": "srhXpZMp2XBeVWNkp2KuP36sqooHcS8vHCUN63VcZbWcNnAnY31ayKRxzsw8aXEncfahCb7ALYymZbU7wWJ3ZuD",
  "key20": "3GVMyhw6kAZa3J3StvdkzXiYdPATPsmgaNtHn26rXmEbKYtBCoxAyfdqaKzRn5ZLDRrbtAHxm8Wt5a59nTCrf3HY",
  "key21": "26nxFKBe6JRiZ3Fbz2xUKMPKPTGvgav1psanVkaZqVmCc27Yy8WSb7Y2aLdajoWzdY8s52gr4iGceAe42iMwy9DB",
  "key22": "ZSfgchDp1kXir5P1gssr1ZNrYtL2PfJ3u1vwDDh61T9SPZuwhWkbYuW654Z5S3R1it9ZSpZnjv1ttT48LucBuyA",
  "key23": "3qfejx8WB1UVUQdhojcb1VJWMXCf6JMwTvZx168GgAtzM3qeNeMobgBLadn5MMn4eAGqMgPE4WW3ectCFHNJDpvQ",
  "key24": "5sScSs4wz7n9tW1jXBp8HGDEF7Hj39wTAfTw42Vxf1c7XJZcacVygKR4XsnbSWvj8WYgHQmJmedFhM91gWu8xCeB",
  "key25": "4UP4ekqULLvPnKDfJorTNn6Sam5vne5NJVCTBU24JuDwfjHeeknRVFwLawiZhX4FayhYzrgP7EiVhbgnkfxkRvto",
  "key26": "znVDeaSifYNhfLrZz1L3WiVfhDpif7V6B8mZ6A9jp1yNYhB3grdTcBnqkQA8bXMkfABfarRtJ4eSbyg58CnMVtd"
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
