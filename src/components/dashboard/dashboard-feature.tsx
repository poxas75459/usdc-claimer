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
    "sCb6r62Uf2WUrhNP24wqxjwE8rehNoqDWXMY5dprfJVhgFKP9Ei1PukT1GMojnLHkWuqY4g1YHHAHrGEds2Qge3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKyMkkAJE1uq8aQVc6ESpkoNDBLwCDqjeFFMLzHj4CksEBL5heogBo9Yxo9s4F5aS2VCfjUpfEq2QWJ5YKmKHHe",
  "key1": "38ymmsnXJvwhkKeWfMzgLpVSyaPVv7fGUThQ1TTo9nBw9u3UMLvEifGb6Bn7EYbKNUaMW8K4PcZQ6o3sM5LSuEbf",
  "key2": "4gt15XMnXMixUqfpHN391kkiZHTY3uaot73mJQh56Y85VmobquMzoNkPGYDWNZTV3zrRs543BXgRpB46FqgY75zD",
  "key3": "58iUf8wq9u7R1gSbmv8foNXUhqVCre4wMLR7Y1SsEEFAL51mvsnGZcS5DMBgjPDnP8n7UV2jmgv5Tyr5p8hq6afX",
  "key4": "2wVcnBxVrXRLmpKc8f4KcpXRmRcT177659nCPd13aqJ7VWtvu3LQzNXwC853Cp1dchDCrongFXxLZqVXB9LFRa76",
  "key5": "2msv85tn6LhCi8itMFEfcpY9Py3GVUBHQMNWFQcp6Voowb5DZCn61dLDTLx8ErzTM7vRA5i5pq4at968JKAcLACo",
  "key6": "4aHbuKSNEmHL88pTktu5pVXDYZa65WQjnUme6D2A87wQbDBwgTVew1fu4mKR9GofSZTnUyFM9JnuejADGBAF2hq1",
  "key7": "2QXKgMbwDzwNeZBA6xRRpcgCrFDXZ56MtoRoewPhBAdhwkNmnpP628pUF4gu9hgLcefc2sm7w35Mf2LH97PF9VN8",
  "key8": "2c5agdXtadNenXRVqZYwoWM2xf1vW9LaxXfBqz26M8pGrPxVfCyK6FWP8r8sYA582hhZu1c9x4SQdFGJ6a89JhY8",
  "key9": "25eDAXiSdykicogp8LywYaouuuHjznqwEUoMChprLZPFB7Rx3Dd166RfM76iuatpRE9Cjc4zwopHR4iEXsBMa7D3",
  "key10": "2Qds3LhE95tq7LrRXu3W2xfq1h9bCabgENJPe4RmrNyu3VGK1pMmxzLhREM3JbLj2peGPDZNPCTF56x8wknbF8C5",
  "key11": "5yFRudGC8BTfJEwFzKSDehkaLRcvucHyqDjYq2dPtBakZH8yUYHnybfPDg96qFjYmpi64MPquerKhrzZ3LCU6wVE",
  "key12": "3GhAcPDCwTAzZrzofKLHQDYtYgyGUbugzD6YX3MUEDHSy9S3JvAMX4CcYdtmrvgVdnoYRhd254u153cgCsKQUpQJ",
  "key13": "52E4u7TSBdEb88HMsZmK7ndhjPzVmY2cq62YFjhYyMDoadNZNK5xZGACVMGXLDdg9GVtjtnWSgkAQn6ybCkdR3yj",
  "key14": "2qJNPvYEsaiJrKYGaSBU5MHpwHC9PYjnFieMoxfW9R4xt66jWGyr9tbzQgVb7YqdtmfRTd4YF3iSWUW6Bmx4JnBf",
  "key15": "2hGEzZ9tdumXmCWeievgMbzfuZn1ug9WL7dCnhZF1Qtdr5V7js5ZzpXQYvYxHVAihZq3C9PyE6C2d44rUgtXTv6G",
  "key16": "2A7YvVxCWwqotZPGuxDeB6MNJMrbC4TknJvpAnYvmtRK88dBcXFVcFh36DN6SaX6uomxCo7mjJT2U1Twok8HeK6Y",
  "key17": "3PpbkZq8f6RDp5YLRys3cv8h5tkvBSbXHXNGhfwpittZtSMg9ppD8btwSiRKXp6sMvmZW4s76bRTSaGTFe488rPr",
  "key18": "3NWkMKE5Z54A4MkhC8TNx1Z87BLnTY8CKPh6qTGJtfoxcspLcDGRAsHh352cPio4JajfHfxmAFxkUUnydXjwg21Y",
  "key19": "4iRhU6CDqkHN1hJyjtqYNexshLsnKBLqq4K82gT3VNjE7CiH3ntf7sBQgSwNZD7psEK32dLHpX4tJwSU77DTijtn",
  "key20": "4LgyQhgUWRfeCGD9YMR48BLEEPsauM9werAgC5vhWF9FVaMNNgfL1Zrn4uigv3txnkVUAowJHLsrJyE6qoaaCZDF",
  "key21": "4spJrJH45c1BLZ2af27AjJnhiBrJiiG8qMDJ3QuXL8t9bwxmKJwMRFWEJX6jR7vWBJbh5upyAopzAZNnd2QBFf7G",
  "key22": "nN3zZAF3AWc55wWKFPQvfTL2JyMH3XXKMGHgVDbQvKt2NYyD969sebWGFgYoVnvMXm4fn9rmf66V5TRwMzfLvz9",
  "key23": "319txtMc3rWSybHjextQQ3veX7FVkWjSYVkx4Yj3Sq8BoiYbxCJvidkCMp4v3T2YhjcxijAG6yg3nHnQPk64tc1H",
  "key24": "3BnxNEhbRJZCnmpBwGYW3z2hz8HYpikzCH9NPY7upF3o9DNds6czZtoD5wy9hC3MMLxN73SCJE7zY44VdKXz3qVy",
  "key25": "3rvDjAuLaS3r9qxUqXpL3pZ6w8hcHuMYyWfj3SEW2ff11PKTKKffHeSW9e16qywuGgjYbue2SnumCNRrN49e5gaq",
  "key26": "3RYrW1MTXZjv7FdHw5Mw2c6asNKN5uqocMeU2HSenRwfnPFcRcu4Nir88tU9FnRepvxaSyLJWA6rhnsnsp5CBLfj",
  "key27": "4jj4415K3tJfeLAdfNKYmn53pHe3Hx3ZXwu2L6tfBSV3S99LnmoquUFmVfchyLEV4uLMjMdjDzPCftJMHS4HEfqd",
  "key28": "1kP66n5iYX4vjT4Go7wo4Q77UPwmzL2k1qczs3s71P3qvkhrhv5zkG4qCvfwgrmjhx7sBkkS949tCJ23y8vP4iE",
  "key29": "4LDQxwfT5CkdAMrPdo6VJ4ptJdkTVtnayFzZcc1zfMDsDU62svGn3RMqpwPUvPriAbiWHL1uGHNpGDmmAA4hLKx6",
  "key30": "6e4uma9XVWhtwEiaCwKsQPmnTUVkdKqXYV8fmQn9xfUPyKgKmayV5jX5Ub19CJowQxRwghZTVsafbTz9RsdSfeA",
  "key31": "RRJZ5KkcAmQTtHjRhB475XzDDPZu5eezGAFyYVXWp9BuzuxayCDW5GaSJFq3iqE8zFWagHsWRRpK4GA4GyZGA5h",
  "key32": "3GoWytkwiomXLQj4wMCmVHtGWRddkRRQeHgxYTEJsrMDQiJBFKEp6qcgveCDmoz8rBLtmK5eP286s6EDNJEvTMgD",
  "key33": "5xzEYj5LDvyrUDesrfo1tQ524nbRx6XKbE7n9senwzvHbCLD3jnEyDdUxkFH4WoZXUBUsiPFgcgQBxZpY2gR8AXG",
  "key34": "5owEaMN71EchrvsC56YTE9s3Sda4c8AoHhUsosyZXNL1NnKHMUsfPcmU17R2k3NBn9R882r1u2DkuNnrw6qbsLPJ"
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
