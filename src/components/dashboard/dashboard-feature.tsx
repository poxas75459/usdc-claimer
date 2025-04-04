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
    "5u8Arv2BwgZZmWdQQPffcsqXa4Pbjvc8YkJg8edhszYUPBvsnBGDBFKG2DE3eEMjCHjjqhCX2nZF2w1mCaczvBea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKkZccuuHNTwFyV6F8JNB2W596dU9mNxSXx9BUwbB4jQFUNTpJFCvwuiz2qR4hxcTGWkzSTa1aDGFMt5njmuemC",
  "key1": "2HjN8exzzbLzpF83hFLgjX3XC7BzDW7EmL74XXz2mgwy4ocG4wERitLRMiDHdRBuFiNkvQ2iqhY19X2yviCxJvqw",
  "key2": "2AT6L6b58K8inKuCZhcBkfF2kEuFK4kuTMSet6UHdd9kJx1PJuo7VAQLPVPcxPaaaPnt8myMX71qLVLpXbAARJzY",
  "key3": "4wPJpykhRY4ZCeWZxmuwjQ3VVRwvzTYbFHeEQR1o44T7oaZ3E3WCmDGeKsdus2aLdrgcHuR92azSw5tZWnifevyy",
  "key4": "3zmy7yvCXQQ5nJ5cGMtUaHYHh4m9eo7T9wti1FAzNKjK1vkttWM9PrnCfdYLraV3wSRGvgd4TYakdhWCwq6viost",
  "key5": "5SRGejrMa6oGwjaKLojGPoRCoTvVroz3JVoTaTVmQUZYMaWgKSosUvC5cyPNjJhYy9CqPcHXmrd5WHgdktREwMxU",
  "key6": "3QZSVrXNt2nq3HsNLrmzWeDeKWNnKQn8pfiddWeKdN2HcUgDGuSo1BeNf3E1gppW2WHCrw8BPd1pkrNz9aFjrZqQ",
  "key7": "5y4ADNYoMebnMW3LxTW7WUkmdBc2GjNsAWSN3T5n9VxQRX6n5buijnUiU7xYRhnv76DgYmMy1qGbqy36aRNmACWu",
  "key8": "36Ez2ca5dMTZP4VZKaXxHPEXGNyZeTPbKUMUE61jz7u7GeLMLss7DhDS79mMH3rtcQKJfHerrohKvmfq2dCfoWR2",
  "key9": "5gVPrEJb8r8MZZQbsPEMB3eYnwYBaHnRwHHANWCKfRPvkEFy46Wny17ErLn31Zz7HrBfRvNRKnqHJLxk7PX2bqoL",
  "key10": "2roYaiWhYTfMzbV4nLs5gsfPmNGqcfa5Z9tjRntdJNZKMjUFULw9Y54btnSv8HcV4RgudjubsFrVm5Zu9DmsWXaZ",
  "key11": "3rHCtZnWu9apiY7aA3EvGChCG1aU4u1U8Q1FYU6gi5yH1vwmMAbLVw13crzmwp1pGnVR1KAYiWvWtogJ9f9eZ9y3",
  "key12": "5sd2q3A3cKG2tjMY3QoY9qnPTRfygBpWsHTyND3kbeA647Z7jqZ1upfuvH9zP8iT5DSmFNhmu4nWzDU7yg1MoEXe",
  "key13": "5T9GGDfYpHVw6pxinXgmAXCZyMSC9Jipt5JQw989Wyq8agFbQ8R1eFtbbuvhLW7qR4V4xNBrAAMJR38FeELraLz1",
  "key14": "2e892reP2qen3PYityphu4TdSPL5jcb4GKz2yJe5vhnmrUWiKKkoUmzNipdx68CgXgZ4XjhtJkzJbE6A4EwWQ2gF",
  "key15": "4SXtyHZHBBasmnvp4oJCbMo88iprHoyq61eYPei6sGQGCKaiWqDTV7f3WaxQWa1AHo8J7G8Y9wPAqCFLiN8Q6mTc",
  "key16": "29jxGtTHUg4KPB9ZHzz2Hggq6EZDHwHdCQXy13YHPbn1feRR5R8zz9o3Q3wLYr6kHCYybrQkZ1Fvyms4ANLxSvU6",
  "key17": "34etyyUD8JuBXFyWqtsrPBzq2cyrGwKxLenAypmpeG7EdRZz3bMsECqoqEQ9SQ73Qks2NqayJNV1hXRP1JMijDMU",
  "key18": "34e2XCk1BjyMCMdH8xrdz9LbH9sXYC7xNdQosHd8BKNcS8va59vLMzVKysw4T6vxwkzEifTH7tTGyvE84KeksvRi",
  "key19": "5MLpp58yVEdQNbzKxrMMQtcrqJQ5ytgej8Rshh7RoL4mukEC4TseqjZVtHvez7UovNUyGhSntVsVuEmhZVYUyYwG",
  "key20": "CYCkTpJ8EwJBVPcNbMMSH19TUzhAw9ASnYeAcAFxD83MK78W1QjDWopLCJnDEvGuTp6hNUabBBtbsWj13GbQyT1",
  "key21": "2UNAzL83wCvF6PVymrdSyiBFjC8Ry6aahFzhsn2g8JdT4GSDK4bYemGaChe8sghZHFVpJ5JkB62qXYGegCgWoSmC",
  "key22": "51FVXAw5FGGKezcaBy3Pj1AeLfpYzWBBS12HARztTEn19vrnVyzP7K3YkLaqiT8DrJs6zH98FKtcsChsSM4qgjD4",
  "key23": "F4Ewr2LPuXfw6WDnQSPreFZvMt8LvJi7hqpXskQh3DzabbAoDbdeHJeHu6D5RzF1Q7tvgELgW1NLmNM3EvR1Wwt",
  "key24": "2D8WkWRzb2R8WtjcVDXFvRbPGZuEDiHmYNfcizMR8KwcHHjyDpSiqpvKGu579ov93c9BuvVSahwZXpExNQRSAkt3",
  "key25": "367jjWzR4awEYnczNepHndf9mpiTDGXvqkUmHp9jcwZUYTTjo3mFRf69wR5YiY7h6NViFqU8XkigHsQgv9qqJKiS",
  "key26": "qA9RPJRFq3foi43zerXuWWZCvUxdtELmyF4JfJz9zqT1bANCg1Lfau9a9rakkLf9PW5LYZ8dPjApeV3omw2Wtxv",
  "key27": "3sm3HZYoP8nb6sTvArcpr4bA3xvF3UTcVv98G9NqqKEyLf1Xtm8iUcEPLhaBAGaScYS9zxwXRcUJMxJiJooXCCM6",
  "key28": "4rgFEXn8PxBwK26i8dVRpiC2N3qMw2NcU6Ryv8GSJe6gJ5RQ4BocJ7EcpNBNVtrjnjd6T3oJNLe1ADpoqNVvUqed"
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
