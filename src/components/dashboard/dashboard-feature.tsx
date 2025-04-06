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
    "3sYisRtWvAFXoeZ42dwwHk65zqb8mBVE2owwHqywT4XURp3UUv9U784Thif6yfBNxueinnioygxonBJbNJ1M1tz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4atK7Y6g2JQGDriF9sBRSV23Ss6jmaYVDPUZsytcHa9BM3xibcWQGjnpwioeDNSa9s4rQZSwbtvG4dFCG6kBtY94",
  "key1": "3iyS7VMdx9fgsy7vhuXqYrbMXfKFJ1jPj4bQauYQy9mZEgFtZc7qhS9BewsaBsn8f3QHVc1R6Jw7hzPT9VwtbsP9",
  "key2": "5SwZzNP1FK4SWq1chM8PpqQiFJDmgDvveMTAByYUzDQKxk3zkL5NKuynop98uzST9BFKDjNenRNoLTiqbfhA8a3y",
  "key3": "33fAYVaLyUs8ZboPcCsdafTpK8ufPWQ1zHNisSJV5ssxdCYBDKL1UA7ehhEc7L6VSjDffg23HKiX5Q7sHp6mobJQ",
  "key4": "5rEKL2WEKkkB4eXXP2j4xcDuF4HD94qjPycYAEWs83BKst8hFNDccgUoMHUyMGWo6xcFSyoMAGpe6cDfNQoBZ6BE",
  "key5": "5WJPzzXj6bSHx6mnUWBgy1bk8stATZYtQyGyyWasbaKm4kHsvk1TA2JjQtLGWh2nFDUAKp7RXN2j954JiDsr4UhK",
  "key6": "TzsNrhmVaDseWfiYou1AS6KEPE3P1zZjrNx6j26ijoEovViCts7VmZ1fMcETsTurhdoxCvPLPH3FadhWmqed2er",
  "key7": "5yUWbjUK5z3RSNPPKccPmbcXvNJV4nFn2nasWmA5KDLYoSrq5gJfXcZ7Tbjo3avymHmURBda95dpqc44fkmQsgMY",
  "key8": "4Ve7kGbT16pxWNheM2xdwnm2Uy4TuE2gyUCJcVVCQiimnemeUvpqXnZCZFFXpGgwkU4FfEFDYqCFNPEoaRqREToY",
  "key9": "4dtRivzekNCURAwCBigSU8gwVQvf7tZL5x1b1eub78r55Cuek3X2yst8cxd2VqAfHa7sRvprkFvaziKuWyoixbsA",
  "key10": "3tTH7u2ryqRQzhK1WhhnbQTARDF36q1qVzABAYG6pAMQiWHw7J9D7HvvkmU9SyyzSRVLhKUyfnJNhR26uKVZMAmx",
  "key11": "2weGUyKF92ADcJR9ciY2JM3W5GFpzasfmBX7EjwAxCBgyXEGgJabA65KPJZNRVLMyvM5zTWDAVgsSw4Y5ZkUDHEF",
  "key12": "5fKoeq2xEGazaFJLeP2hFDqwL4Hiv1cVipaxCzH3Gw4oxFXmXdYLyBXVwYxfUzwVHYrfHa2mDzyK7HcpGmf7TeVK",
  "key13": "3zR8phJSmH7Cyp4DZJFUwdbYLVTpT5SMYj1BtGy6TSjhRrkVxoSytUro4B6YHeN4UYkLgceBSpMFkwuRTWDDUHU7",
  "key14": "2PWhEsYd77ZCq9Jqbcp9udEzTP3b3fFvfrjR3m7YeyHPtYcRWNroc11TQ6qSY3UMiZwZYVKw3XfrvX8WCe57PMGJ",
  "key15": "5f6PHfuj2kRjoYXo8aCp41kybmpuJHki1jzLgD27dkP9TvN5rHyd3eSAb9jDrP1fA59y1nmNntiH8SCtMee2fDJy",
  "key16": "3FogutheKn1My8U21fv6qnsLDXS2YLxr375GnUWchSKa1JpKLwteyQexTcFxNzpaFTaB1zwWnZJwyFS5rco8Qg2d",
  "key17": "3KE5GnVjqxP2maXtBZWsYg7Xi59qaR2kULiqCUKh5q1vSiqaGX1C54G3zXzbghi73Wb728C5cWjdobqXx7N1QMuE",
  "key18": "Yux9MdGRwSCed4S7A8AaoFaXbG6Dc4vRRmwCAkDsgvzNGyhjHSEN55BamZbg912GfPfHRWz4tY2X7HUmofzt4AK",
  "key19": "218TTXMSLnsdcxJiPVnhFokcqbKpSf6EX9F7XbN3DS1qCrsP9rrVEs878tx15BaGDEXLxSbYhM7aYxapY4rnpLMS",
  "key20": "4S3ZEGCW7cKf8fQqGLxkPRrpfeDxSQuBsTxJXLPmeEnhLTpgysmBzdYCujQY3SJ1F9WxRxWsCjqAUkJcRsSiQZq",
  "key21": "XS3jmBeqgjSyCLhX6GE8G3XvXGfy8W5qMuGLPEuRPWVor3tXec9ZZ9KY2wbjVSi6ip76SXLZGacPvUnG1kkKHS3",
  "key22": "3X3i379ZXg7iZ5agdxpkskd4UuAqUyn6xopwQXi3fofhNjcreXnkUN7rnUj4keYs8NwiffjqvVhtKtj4RYuNLcke",
  "key23": "4VV8enuPTKnXbdKDQXRe87Gdv2iNLNyLsg19FHQZG7K5kFNeir4334uu8M9MeTPnQFH51UMHtq3iMHSi8RdeRhBT",
  "key24": "MDcf6Q73AY7qJxzo69ZgLZQazWYNhqBzk4DU12vqzcHiiFKWAu8sNM7vr1iGFmAW1KYrB92wSi59yQuvr87wuoM",
  "key25": "3U3rHhKawXU4Uxdwc2pLCuVrKbPaRQDcwgY4t6bsUccNMn39ry2H54TyW8JNLSkFEPnqAbk8pp6Jry3n45CSc12v",
  "key26": "2KdjCtzUYREHrSs94N1FVKeUBpA8tTNAvLywwZdQVoti1uRNfKJcKEsJtaery7XxxzByDRduumQTzuGabj1Xt8d1",
  "key27": "3iUcskP5rTBbFdkkRANcPNwn4HFRrGCv1HiUeFBS2CDUxzw1BDYEY6yAMShrwBBuEMpdponwneP3sKNeLK7zX8Et",
  "key28": "ui6fEWtGvqAnPBBFMJjE15cHUCgXujS9vUTLQKdQ6hZbBFEeGaLxztVnLkzNV99u5XuygGf9bdrPWJy1xd2V43q",
  "key29": "3BYi5g9G46yaXMQRAKDLM2z5L5qjecdSDZ69LjyFHY5oSFzdtRprZDszvCRYqAhLyVurDbBFsLShjusVu4tfzLJz",
  "key30": "4GPHiUaapbBMj38hKnowS4ieHsr23cW6UPyVDjezZo6crBCW54RMxeTG3RdUzdqJE2gX8gLRyrZ3gfqL28TLEzbS",
  "key31": "5KVQurncCPhqEngzFbh24bEsKAEzcajxRGUnb6XrDJq4SJ1nGvDTdwntymumEQz3gM5wW3Us1n2Wjg9xDZkkjef3"
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
