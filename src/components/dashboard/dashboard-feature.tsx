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
    "4aAL1hCCDjb7Fb3rBJJZJwYtRVydb2FeXjGEi51N7ev1NgYQqmGV5Hj3kqRdeVLzYwHxaBZwYKLbcbBoqWw56cRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mbJpqqugoSxapjuH22gcNbegXt3QqPaSKvjcZgXfBikKWp2ZuWoeYGJ2x4cqzER87s5jVCKEibr3seR1P2BKcEf",
  "key1": "2MRgvekxYyCno2dtSihSrTveuNugFN5595FFNzPPA7524dvhatNDuuqLXxziQwxT63s5jrtPyb5njo6yA1oEPyHV",
  "key2": "2dPi5ziMtQiJADpASDCtKLHv41neNqdonKsFDgZScyeERm7CYvDW6bb7yurdZPJkNW3fJx85t3T8cmQ19TDzTrW",
  "key3": "63PSw48o9xJuZ1FD3FHifasd8DMYqVTY2TTFrsDWWEduwXh3KoT59DsKgg5yxhDbWBKSgAYzFsmsNznVxKR5ieq",
  "key4": "3By6F8pu1RVH3LUApfhKwYK2zpRwACtVHiK5NZaYx8EeskoNP4xF6M6pkkZxCXfyFfrkvZhvx9yAZZ9wSM9asAQW",
  "key5": "4y5TtRe9E5axELdkzFMjvuNyvGBVxQgRQk6o593oeieoqXGshWDPxEpp8vrLsPVXPL4fbD96DvTMxBJCkLQJ5cdc",
  "key6": "8v7DykSpa7BypVaC9rDRDARJnYgBKjxKiz3pYSEof4gS942RxJXnezs5UQcF6AVcjUHH5tLYTwfbUtmBZdiLeND",
  "key7": "4RciBWpM3NqSRF9KjTuBPjWYp2tJA4sxGEjAeZaZnV2xgznjc9oy3qrXpkVDVSWFyNwYb3x4A25BBr38eCzmoa2J",
  "key8": "314wZbwNQyRw1thv6YrxAKYXi4Co25pP6xnUkTpo37cqDUyun3vqmrwPgj4HAAVk1KF4z2ybPFMN5wDEhyu9jgrk",
  "key9": "3QDebcu13w2mThArN1xQztiscvtFxySvuAzrqCuo5SS9n7kVG8LFzkgLo9qVgqG8mMxrE9fYLM6ASUDvDoCH9y9z",
  "key10": "4b6dfPH4JmcRQE2mPpsduw8THNx5QTiT2wZRexXpsx3knSFzeqpQxymeUdUSpgHkoGuzcP82nXknWG1Wsqq21DKd",
  "key11": "49cJ5BuTj5bnhnTrJyVc1jttkm8KTh5UaN5V9fpjwpc2F3GYRsTb1ctHTWztkxa6DL5hYJJa2KqUGHURLPwWvcVV",
  "key12": "sFCiX6bdxEebez65bm9PhzopYL3peUgVQmpp4nbayaXZcNF1NzjHKEb4j2uySgNgt8BapkgZqgxia5SqJXyAdKx",
  "key13": "3z1yiTxWDo9dh3v2BBSsYC2Ccbe1K1X84CDTt6YKgmsQXdg2s2pvh8obHkfx1TEHPyGEYNy9vPEa37WkH9o61RbV",
  "key14": "44oWprh98E3ijBQNAKkUBuuAnfn4ec5s1zCnWWfXhaKQmg8N3ixW34w3TLp1vJGqNF2eY3VgfLX9Zv42uimTBt8X",
  "key15": "2xzbhrEBJjfENA9YKJ2EijwMYo9Nr8cWs6tzDEFzxEMzTTsjBgHwuzhtL7NCNU4EYNY9tmq6bNsvMTHtfL1TfKNK",
  "key16": "2yTodXG6cyT6ePRP9Z6fsbjtoeaCzUTNud6QZkx4LVgULFKKpxCTyTYs4TxJrexY9KSqhUNV7dqLuhTJBvx5H4hR",
  "key17": "58S42u6buxVkvmRSr1ymvgcB8HNx5tj2wneBPmcoYExsJhiF5PG2HbGSSdkMBheFksZyhHqZN8y7tjkYETYRTb6v",
  "key18": "5yWktemsopKLTg915Rd8N4AtCgitcMH5gzgHj36AEJMJpRSYZZ5XDMmXszJ1MYgtDdnsJCdcBKP7ssPFFpnRMSVp",
  "key19": "67QJNoLXy75uvEqECEKmX5m4Yy6S2zQ1o8WKKNATYMGFDQgE4hg6eLaePEjHgw2cueDyHyUVfxGy72kPgKsAfeJ8",
  "key20": "2QoP5kAnvwy12ZPQRNai2PJMthFRcMs4rUCb3ENYpe71EniFBTaCSYcsDeST1qDUUxcFiLBTj5MP2WFUPfzYuoN5",
  "key21": "4r1VFK8NHQkaat5pEGeTNi85Kgdw83spYrtaRa99FMdPkk8iiN8Y8dQN1JEij68E7Sb8ys7AAg5G9wL7MuYc3rsh",
  "key22": "3pt7hf9wG85MPFCzt9HqG7mFkbRF5j5SJkDGhpTMafNQMEiYSockz5sBrY1Wphgk8cJHQHzByJJUHkwWXyU76Fm4",
  "key23": "5P5jdYPYAi3C11fSHkNcosWkWEgwNSrxtG9cW3FeYGa1YbXxxCWe5ZnmxMKiF2iUgNjTbMYK4NWUCGyisoF9zBmX",
  "key24": "2PQTtr1xJTX3FcT7o2KmvkeQqRz6MNBUYsCsCVVko4MmD9adeCVb7W1JhSK47VvUtd59VPwzhyxtRwF5KaimZEtx",
  "key25": "51yXZBBDDkQ6S7mqrdkHmFVPrkA8LmaZyiGKrJH628F9EuFmC29heC14vva2cVHXpcqtqaw2W1324mNK4Xk3GUj7",
  "key26": "43QMch7LfxFkmDCafgypjLWpLTmrdNBZymJtco4VZ4G1oeLc8BsmUZF5YXwwieCCMycShTJZeeE5xwMjg2iMxZob",
  "key27": "4wqAESnqmqWBsXBRKFssiRopyzZkSowKeofr8RHGrHZULjCPUVQRTfJiwvxoKbFJ9rwnfKkk9yNMybqToEuu68Wk",
  "key28": "5N8eNshk9UeDTbE8AkMVVuTgPJbMzmg6ukkZrt2iC8D7PoKVXd5hPZ281m6wNWAMsvaM5wCoLZcUVnAi55g3jWag",
  "key29": "4AeKB7CghPJdPTGZtGugWWPES3xUrQjUm9tVjkBpk9dT7EujNzijbQ35i24Bpcjs566C1kxsWhMWkRicZ6bGVNaP",
  "key30": "a8KzqNRuPbEghH2Eh8mj8U4xkvpfYC7hEtUarcK5W1fpG67pEiygx116VhTif7xPNNq37beF7vG9yh1LpgiWCHF",
  "key31": "5najf12SroYcu8PJyqb3gWfbd9biekBguBoCnG1CZkP6pNxnpf2g5vHwKDtqRoSibKpnBSs4vSSpAvppXQtnfLxN",
  "key32": "3WFoWznd9qPnJYb219AEuoCPxx1pxtzbquLWbwvzhraMcYMQmG2sUnuDXnzP4ZZWSHtK3osRxnpSnSwKYEycjv1F",
  "key33": "5AtoKXGKhkC5UBdPYetEeuwaMKEDADs8hnkcyiB6PoNoT8Ps1bGNhLdBciokBxCBdiTeqAhBk133xC9pzp8fV5x5",
  "key34": "5eroH8qQY1EwQoiXU2qNamSh6KoPZ8ES8NV6VeyzhEm9CZxYtcpFegJSkjUyyJC6755afwUEQRfX4mqkCh4gzgvk",
  "key35": "4eGp5P9viiP3mGbV7CH4pZMjsgRVARJf8eg4rGnnuQDsBcYiXsrnCU2k5qwTLfszx33hE7tnt9dshSZEM1Nh48HT"
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
