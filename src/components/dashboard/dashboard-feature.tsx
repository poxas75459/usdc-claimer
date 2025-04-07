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
    "4GJRi1naookox49brvREgLxQL1seDp6svmX1CXsKSext39ErGAUmnje45rdmxSZygbR6e2QZeSaK3JwxwhRKeZfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cmmbHj2yeawBi2oqYuyRRg9fddF37ZG5dhMzcy7Mj3J8AJirfddPuC2FHMuFeF2v3Cf3rVTGbsHbUHBaSmFPba3",
  "key1": "H6S6t2t7swmHUA4uFN9vUZVJL5Uz6SQD71i2Mb6yHp7nXRQxjXTANHi4j9tfY9gk2ALUWrKwz45ArLS8WCsFiPy",
  "key2": "2NgjMj7r2d8bKpt6FaoQmiNeV8tB2oqHKYvkyYg7Ndpme2btjFQSLCqg6bZ79T4VtFUo2j3awCZXv3rx1CvfLGN6",
  "key3": "S6LVbphBS7ZNA9kdLMJnJFXq7BronfU2eNVnrTfNyMJTME8FjXGzr2L4R4DQsFHQbmqQ76Bj156wqpSvV8ueyVN",
  "key4": "jVEC14jqNRVoUsPEeXjGbDZJrLxQ3n3rvkjaHPV9bGbL6oCPqr8vUzwFbdnEoC92j65Ko4WqzwCXbcXTBT4BiN7",
  "key5": "sjAqHXc28ZZLu6DqCqjfYyqi2DjN4NrTgg3RscFMXpbh2vC3G94aoHi9DKowa1P8S45QH3YXFL4Z4u7gYAufPpM",
  "key6": "5kqfFck4GWX3zd2KK1MGHutt2MNvyaKoLJSZRKXpztr9JTcCes2toCWJFE84GY71qcv8yRrG5J8iJDx6o2rEVxNj",
  "key7": "3dEvy2DfN6aa4PEK2gNbpdXeuL1nC9FTUDMd8U7GCEc2WZPvGZHHJj4z2m34p4KtqpP2RLp9sziK9MyQuk8W15Nh",
  "key8": "2YXyK8oASEejTk7akt2GhzTCkw7rworstTSFUbRWLYHhZVS8y7jXiGTf48Z6DXfWwm3AZJN6qxjVhfpEothxrBkd",
  "key9": "5dDZ64cNYcEccTm9r1aGQJ58rqCHVpZmNzbKfLrub7dWEA9Zf6MZWnRSiNSbuVdJi7dtoDYghWPJRPPZpatSVaeD",
  "key10": "3iUsXevyxwTbQwkCjVnJRGVNASDyQ9pMyGYAAWTf5jUzmCHgXEB2t1LdtSL8dkZoCaqiQ7xzwj52QJHuPkWbcGkU",
  "key11": "665nqdUkeZfU6hbCsSfi9Bi5ddQfpeg2BdxfFwh58ycYipbhAhSYn9WamFPK9Syd3ogdufx4AybPgJGvEeGK64zW",
  "key12": "PvZDUMSoVxHC53T6WPfs6mumVDNd5J5dnBKWvK2FvDacFQB92TzP6qUnS7PKDEPV5cLxybhCDenHZKf8Bvu4aSg",
  "key13": "3Ems2LkcEs3HZvgcmh6TPzkqjowJ8h6pX3vPASt2YUGinoncYBpfzW7qjr5vXo3JLoviqVxLCWsJuSt9GD4K2UBu",
  "key14": "3ZyrZ27ZQHmVwB73sznFFfCCwqNsTUvyxVQVHizHeoswTrtSxtXtPPyFyerMRp1GcuagEafGHfP2ZLdwUaDLBUbU",
  "key15": "VcUZvvPqLUt4G4NvEKf8im7iesDuDsZmTbaPw9eXyTWHiGf71xLJqDKr41DPrFCEDUWKgnu56LXNGisBTwTiW6P",
  "key16": "42TVmHwnZaEywqiKsrzd5BiR7azV9uk2WajiW7ToP3Z5L679JHMxdkdSsmK7f1p8NZLoCZX9VWSca5T3jyZpCQem",
  "key17": "2xrRMt8b7JYsRwTTTdc5FQnZNAfcKwF3AY21HarqSLD4sFWFYs3YFkupk6MPNm4TavBW8vxkFyMcMir6zw2JBTeq",
  "key18": "5SVBwPpNZk3VE9EFJQ8VqSSW2snwuq7auLTqpA3s7hArUXryjHVNaqwEJ5J6NFtq2EMyB1FLV3bAQqhWE77qidUK",
  "key19": "ex88qF4yC8Wsqd8xeyFN9kYnfjhALo5ihnXzeMtCajF3kqjfrFScBvLs7prAdWhNyDFDmdHFyYir7KC2JWUipRm",
  "key20": "5TKQRbXM6ioh33sTgLXu3vYDx6TWmyT3KAK4X63DkZyALES3ETubnQTZ7xfia7Z7xrF554xANnmsYmBRR1nD59Nz",
  "key21": "21fap14bCjdgKRcd3QiCJfvG8tGry1KvYSSVZ5L8eUNM763hwkQk3Esd9EBih5aD2YMyDSCnpRS8KZtKwYr1e1ki",
  "key22": "5tFnwTR1SKqtCdcuh1CkMA4vwNCXKHsPqPaTwiw16G4TXrCmjkqiNfwzMQM8Me9Qu1jSHg7eShhXqBCErAQ574EJ",
  "key23": "2wc9iicpqJFQgdmLiqk6MrgKAwmTErkQiTCpWuYZFixFmUrNNp1NZh2PFXwtq9mZmZngcBEFHEAkLJjSi5FJdBko",
  "key24": "3v9MwbNrNo1pL6CT4Ztae9jZh5hensFAci9fRDjzBSmqiaHz8jHRPx67NzzFbgRHd1tbBr139JRUNE552oKQhUVP",
  "key25": "5uas71p6W9dHvKBJ33iEL4JJm8XLkceR5N7E9uwm9mFAJBGe5j87tB5xsvurJtBtkxQksG6ADEyG3PC6gKB3e1xo",
  "key26": "3z1xVwFQkWkFcrAqAKxHFDX7hmynKXWb4uiejbMMVrkvviXQCrKTk2Rn5gWbX8irF7LynMLPpcGnutM7nN6UStfL",
  "key27": "DWkmzjeRnNtukYHfyy2qGbTgg23yTrSxY1TWnhnZW8xoZPrgUcsdY91RxZwznjLq8GJ6Rf2aCvKJwae8MyQmtVw",
  "key28": "4pvLAdXYC6rkpNpGhJoy4qxA2p37CQ4qpCdUYkDWuhCSE8RWq6RCktJ3zGm6pmviuSbsTVrBP2TzJH2ZVHGXNi6o",
  "key29": "5BWcyaayVdfZkTdmJzkqPLbHxrTjnxw45bg4qoU6VNhMrGCVpkP6XN26yUZgBtiHJQ52NDSDyaA5JsVhofgMpN3r",
  "key30": "43Z7FKyzYWgrgfa6PqXBuCyPdLz5BKDDvnnNyZ8esMt6VsAnb12VQuoFJw7av44ejL1kct1Viwpk8JBwzPTFb3Wt",
  "key31": "64KccL7x2ZrzJmChRSVdFfqZ2CDE3VNzGo89Za8ZusD25uunDQ49ftZcMXZcAYxPeNMrJdDjNZ7WnrxLGiKasYxD",
  "key32": "taEu4wZv26TV7GqqdNCa8BkSPmvLGYSPr8iUEmMsXhSYLDnNsxFRBgnpFusGCyxQGoKHa7ToHEAZyVTEzMxSAwW",
  "key33": "5WBXQgjWpBjT7gDK5ZQQei1Uz3LswAG19JpabopDoKv1JHe6YWqSspmJcY1etVGY8rZW12pwmXpuCZgQZC2Yap9w",
  "key34": "bcu6o56vuBSw7QPvLg6awb4Nsovj6o7hjCWz6hEyy534XkkGEPqEPFijm3As893cQs2cf38QXFYHLKcvFQoZkP3",
  "key35": "4SoT4H6AWDuuA4Vaz2j29AfJUoxTrvByyA9VjQ6M7Uohg15jxsmtNaTKGf2LkkErLjHcaC7yJyjq83AXUUaF17eE",
  "key36": "4FEnwLrgVgFkxQy4wmqVoj32Rgzif8rwz7RZLjNJv7CkFurm2RjpQELY1WsFqH2AwsZwRVSz2ktd6WSjJtinN6qk"
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
