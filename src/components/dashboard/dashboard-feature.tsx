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
    "3z5ZZCiyNjvW4dZryLVJjpHzabiyHGcXfcETAh1tUKo5tEPPAF87SPW6xgTuECrfadCRqU6D83CZZaUGeCnAYSyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCSNKUsFVnLTgzt1xd75SeZ8MxCoXQf78tnYUVa1H4LSNbXhUyBMPjgZ2Cum8Zu8dVaSNvr9FLJ3ZtCDgMDh8m9",
  "key1": "3RajDm24Gi7Ds1HnTAULbL26f96RNm8vxacPkwgvEMxbCex2wwEpsiFZTxMWc6yHs3GzFsPXwJtYjTfGS7B2tQFR",
  "key2": "3k4TWEADtVtNCcnM9WTdEwGsvb4t9TRnDZovbWLx9bu4sZi73w9frgRVv1W75NGJtfkHqWccukH2yVQKhWH69VQG",
  "key3": "2VtUpF7NJLGZR7LFggKJzWYHPcDydZMi3fwafv9GRwLFuvgqNiNUmzJBhHETxGBf4pxL6Spuv9paw3n3CtdwrD6W",
  "key4": "M9B17MbacD2vWYyBoksGjJkzpHWeUsxkLNMDzwPfwfGv4Yqj4z17Q6a7mNCFsH5VxA9AKtHwvSqXZr6LTFziLBo",
  "key5": "4TNa65L3jbD8g7t2cjipdaPqpADVn1rxcDLo87zksxMWUVocqAGHwrGyj37BFEZyCtQpvC1inUCj2f8jR9KNxj1W",
  "key6": "4Korm7ZeWHXcHQzdxSba6EAVuifKChyqatjPtA6QFxqiTxp39BL9hCqik75BaoijoG7YYnJSHNcZ3W4EUyzDwNuE",
  "key7": "5bcARH4dSGBWnf4GRyVjXsaJBvmTZssQVLzBJM1PmyayALPNHXPEAgSsi92T65NqGQYjcisBJwtbTJegJvgVMHiD",
  "key8": "3V7kuPh2kpYUtXssxywX6HyzYyiC2oJcP4FYEM7CLyEjvXv6vDUo3ZP2qDL9XGvZm5jDM3ENjJ64if1N1hK6ht8P",
  "key9": "3JAgq93o4YP6nMvGezMt97EzadBumN66Ubog64od44eaYJyrxkzUafYUkqW2zZghnJN3H5414vDhfgiJtbrNdYDK",
  "key10": "4pQaMX7dXaQNmQgpTqe2AELmxXsg7evPECuBBgwh81tZ2RbtGaxss6QhtJMhrPYATT9vhXUyWgDEjsRPp5V2DD4L",
  "key11": "5bjtuungeKwJrU3BpNJDunqu6sJfWEiH8rcEnF9vTVt1a6XsHSTbGNZVd5Ufb5yPBQkLXtDRzjd33nY8ix6uTaXh",
  "key12": "4UujN46DU1oBWZta1irqJdqPnyWm2TZZG92LV5ox9r4GbzgPZTXnkNcCgtXGGCg6T8Z21hk3SQQjaSY6qDgPbQqp",
  "key13": "eXnxqmz6WyAxQNnj1Ur2vToQBBMAVcGAzFGhyNpXe7j7DoC1jCcXVuXH88zKiuaCdH8oj51b9nHY9nkRUJKnAyp",
  "key14": "3hWoXTBRdUfwjLo3fWKvyiBPPziS7DP4cnPXVV2ySgYmdD9L5Amc4oiMPhAJcgwApdfMAT4z1UC5c3Wsu38nA7uD",
  "key15": "2BowHSgQH32ueyvxzLAUKYLKGXwHkrsvbR6uxRpuh3h2RSK28ZgcYw9vWk928LAmoniHjBRtDfiroXFrE8ZevGmR",
  "key16": "4di59X2p13WB5jPX9dfGY2JT4oSRyHhpuivMYi6uYVoQZjverDZn7EnQ1T7ssjBcKEDFwDBEJ9WJJmihCENRbhMR",
  "key17": "4XWEkvzjPoKv8XEwaMWtLUqcJPMteapc2rCXKmhhvCkFEbVbhDYAh5V9XVyoUe47kUBXzAaKhipceG2WDLTrrCA1",
  "key18": "3aXsBn69SRn12xL23tS725B5orE84kp2RAzseXX1Nq6BBk4ryDjZofPFizLH6PXz61D1u7PWszyNe5k1iYjp1Kyg",
  "key19": "22w8fRxBeMmjYjJp2bSGv68YKkxajdwjJUwosRw2aSqjsQqy9eNcpR32uTmaXbnqhVWBC9QyLqLBjmNbAhQziyik",
  "key20": "59retDHBiv5wGQFAZCjUcAnxacPtzvzYA2Xgzb6VBab71zMca1oSaXvShuqTCA734YsMP5zqS2H7ud3cVW8AXPW9",
  "key21": "wj84pUZ1Fo9FkZ9GMmAYZ6H2q7AM3QNPT6PTPUBkhHSMm1YdQ7XNyuDKXsho7aidBjrw1oMAKF5W5buNBhuuws4",
  "key22": "24eiknYBDp3puZMZjnq6pQadWDQJ8eihF8MieHFi9CMPzio6YPv4TRLgYyiyRKQiHpLQnnahBp97ScL2YM1YgWe8",
  "key23": "4YSZs92uhNztScSK1DRSAoLdcqjVrEBy1kya5TAmz6mJecYBtVpAjoR9RmsUXba2sE56i2PyhrY7CJvzdbnGbrvM",
  "key24": "VEaQqBcUrxAvQ9694WveKHgFrZL9CvRivAS2BPcDWt3fQ4d7tn6WErD3dHcqJQLYSqXkUyBBTLGFak66JeJTjVr",
  "key25": "qASF6BVDGMMg1q1FQz9dG1axMRVME78xB3rqutSm41HdBwr4ndo3LTGdkfZ3fCz1GuBSRuUnMZ6QjtRLs2pHrYy",
  "key26": "t3X2JdQp9xbKph52heGjJYTB9ydXVH6Feaqq5dqv81gQAijELv7R9msAMiz9bLtKS1uCZMqtCixYLDea5JdzTuu",
  "key27": "5CBpVMoiWPZomZ1THZfmtYvLFK8FUVuqvy1Tf2UkQNSw8juRtd3ptQz3mChUtG6KeVYZQrrudR4CHRbgkgJD3YyP",
  "key28": "3nvmXgQpQ7TFStPD3HDRQFvHp56n8yZQHitVgzjbC5NTks5mmkTwc46kVqgTQbvd7Kt8RqKpufTB6racYCfG3oGm",
  "key29": "4vLqTutSGNSyADXwqspaFcr4SnD8mdLCQXpRRCov5AfevjUbmVgDMvBbtvhve3KNqzyktaRdCLfN1iSCWweJVTN5",
  "key30": "42oB9q995JNzkbT6vfbpKeKFsP7HgDrQdNNxRg4mj59WfnyNnU4HJ44rBa6wncbwGbBNRL47c5ZUXsAzeXMg7BZP",
  "key31": "2LxizdFzi5jFweEDsmkm2WkmauvnEMxWn23mw2BQDSddTzLzQVXKZY7SQ3vCGcZYSmVntwWfjSq3iHgP7YLEadiH",
  "key32": "27JJjq97iFXP5nRE4me5mG16Mb3Apq2o4neDyWw2Aa3isKpUFwtijzucmaE45dggQK5fv5QMVp3ifEvy3FGissqV",
  "key33": "5CR31Di8iTvDpPyeVAZuH9qATW7676RGEKGp3vdYCWtFBjBxVBXqoQsqrKXgJHsGGrbVfCrdDh56PjD6ejRJepwy",
  "key34": "45dWitkoH57iQF8dVVg3Zv5Hv6zSKZisgikFXkLrz2TWrJjYxrbKCYoneEapd8z9PAMUus5aj7kREFSMNsx77ATa"
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
