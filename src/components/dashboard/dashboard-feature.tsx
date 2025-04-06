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
    "4h9nnxddxmJr1vPTVQsVpt9gsj8vtUKm9BHenv6VvnrMDtCjEGXb8Z9qczAm1CTLcdNGwYkAoDJw4NWJVnX4UmwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzWtaSFhgfQ4JFDygaXR23dmYuLphV2g3VABSrUpbPG3bBy2u7K2FAFcjEQkzcoU9iAKgv9mu8bHKMYWMEZzNzi",
  "key1": "2LQ9bf447UQo7W2cGYDfpSVhYq7sHvubPBtdbQi6LqYBUaJZzEu1hiHRZqCPSWB2YVBzQ6DgNamAFmsaG2VYyYgb",
  "key2": "4AKr2Ne93hva8ykyCaDEmCCYVdcQkzFCzFEEb4SJMQSaqkV4ziXaXKcsTH3S92UMN7cfoCXjGW9dCio5NNn8RtQh",
  "key3": "oCBCfjFW5JopPuf2CxBuqGLpXE8rNpRPmXXVcw3M2Rn1LzcJr53Ff34rBHdkyujqU2u86nRhXJsvWwJcUbePCbN",
  "key4": "5mnFELvahKi4erakch3qr2BdxhzDjUzHkpFtfTR6JnADDHW5guNSDvyZzxd59QqFrpB8uTgqigEKJphne4pAGb7q",
  "key5": "28GXHR2HATjtPMB59jMHSnd5K8Jt4cY1XrEuLXC8KVAumHvjvanWLcNEG1TcT1aene9z592PbutRzbEX7qdv4qom",
  "key6": "54Ec8LB3NAxwq4Y1SZxm3jmneXvSGUCxvEAdrcTQ77LS3KvbpaRJAuC4py1uDyokxUqnwJKnV3ZCTY9Y1nCWRh4X",
  "key7": "QqueamXhZSGiufYPvpwcxDiXfhZJmYCfLMcXwv45mrZyGBZdZRTnYxu8phDmc1eQLfkZdd1c2pQAajUKji1841N",
  "key8": "5jy6KJY7SttPm3BjgYsEecEiaxWPoZcnpgs9j3kYHCQEsWEmcJ8Rxk6eK5ynvqVdaXgRzDuwbPiKVxswoVLeRL5E",
  "key9": "2E9hQ6qhrBEdY1k41Xb3vt9aEhnJGxuYWVFcDc1f2ZTjxGx93YxuJrdkCCBPGupmXn6AJAWwZZoSVJVSdgysyAk3",
  "key10": "4YuBNyjzB13oNg9mvmrPd8H22A5m4LrXyf2sHRAHzqRZ1PZv2hbEU5UJUiukUTXSzTCxniC51xc3V31oVXNgnhPq",
  "key11": "42fv322iyQf1abtKnKQEHeCJjiAcsxJPdqZz4RxjUM66DyzZx76uor5rgLgQd2aaccUtZxRzTpvSoNu4zxerZHcr",
  "key12": "5r24HzQvHpS11afsEmzJdbDTCHmd6Ddsat8ZK2jyD8if5dhXw5nEniy5KX3u1GCscpwQ9TXozzD2YYKu3dNGLon9",
  "key13": "1oH7uokMfVhangYxuLQEunbRMGVWBeS9aVq1DnKBfrC2ZHyVhcyrrJkXgiqUPyZiqLxBFu69vjPExoEW4aMhjit",
  "key14": "5SbT6ySbiRNTw7Kyev9oVew7hCEzDbVfic5jsW14t21U7XQo4kweyZsb8Ur9zHgPbx1jrgLQSqzHVXLr7JaXuoxf",
  "key15": "5B2dmBPyRsUZLvDJgC3D8kHoafTrBuzctfZ94X3ApfwMQvGKrhbGdEAhzUyXFaswZvatU3MxXhmSnM8H7nyTQHcM",
  "key16": "21irCnM6p1tWL8CwyBwk1LkABpa8Km2JM874sTYTs5Jo7zeDtdGXGRS9cEVah3dTbz1GyRW51BwmeL8gEYoJmfbD",
  "key17": "mGGNveMgjbM47qDwkKA4yhnKusuehX68ZErzP54PWPToNPsEVBKkpxTNxHacb5ewwpNF9bUtUzWmyovXPfrcreR",
  "key18": "3qfWAM7CDdP4HVhRhehstR8jasPjNbMKbZbEobymDygzpqu5x3Lu7fbNNVNY8wJ78io3fuptwAT2uT8tSzP1ZB4V",
  "key19": "2yUYe5hCsVE5scPFPpZu3rh5U5m65xHLnmA5rEf8oRyzAsTDjm9qe1e1AQj6CVYpz1fZjBKcQeQyXKscWEh4h1Yx",
  "key20": "67NEbpwDgFaaUSwRc7dJSwVgXGLwxVU7Zv9BJUAukonSvZpsEkZpKCYAjmPJp8f6bsgxTCpRw6JEZweWhPkYUagR",
  "key21": "4WmAzkxBHskSg197eKvNcrnsozgw23NojzxmSxgXmNBYTCbyrN1JYRvEjWnFZqixaLQHHKbobBE9SiVzbU7ZKACM",
  "key22": "3VFtoRxssd1vMk1bQEUwdAGrY2xWiSjUVXF2ExqpraaCcuRwdhoYyjnoByuAiXNTq71buJgeb9k2kiDqaXSEynER",
  "key23": "4YoETa1BfnGLLbvbUdZECxpRQqJ2qmgsj44CFixB2N5UipWTrGQ1FU4B6cgmtUwx9HtCVRXQ88MFs8gVRvzdHFHg",
  "key24": "2PBDV7aaqLfzTVmXCB4DaNwuGLxcqwgUHaJ85EKkajhTgLuEQ9GeqyozcorYhrtBN7wDu3Ybz7ie557ANfggwwfU",
  "key25": "4BBSxvV6k4uE8Zzw4rgdcQ7qS4MV9uN2j4Rn2ZUa2Cho2PMMEwcH5viS3VuingUfeF8dEtVafAUUZfosZ6hQKgEt",
  "key26": "3FNUS7Yotyz2NKf87jezx95zfCNNQ88HU1Fi2m3UGYnVqH1sWXh3gUfAinWDdDNeJs5oxSQ6FU69H2gFbxKj6FNX",
  "key27": "5mMGeFVrHawmd2LkC9489L39Jm2kK61FLL8CheRahfYvr8HsTMpaf8BVruMfKvpsUPPcCtJ6X8Yn1NopcHcY6xVD",
  "key28": "518MbfJhPHGMNwHevsK4LiTYFXjn1DjAv4rBawwzoz8idsXBeNbV2JCrNTomqmnwhJXa2DHaFjpffL5csBudQ3Eu",
  "key29": "2yoZQfngdJKV82iw86tnYToQ6459PcmfoaT1L2UcWLrtKaSzJvYznbsWUtYzCPy2wBjQqeq2n2ubBsfPLE6hUMc1",
  "key30": "jnP1d3e27B8ywTC5t1fouerStdZm9FpDcV718VBjiHKfdMtmX75voSMWpQeMWuqoQKtd3SU73BNGy9NyifPdVB5",
  "key31": "45GHLGztJ1Z34Rnk7hUc4td3L39p1ahXkt5sdLviunm7RcZdqjCCgJDEG87PdH4Ej61xcUVnqr9g9iWkjBimiWsJ",
  "key32": "woArwbtNDyEAjwvY68GUSXnNRuKWapQExyBVJV5b4pGXhWnVG2okToJFVgv2KEQCQ5A6yUbF476kH4HKP8yUYiS",
  "key33": "5iMNuJKadB1gcBJjSQJY6J925D4r8r1KZNUPGvfZcSszpVdXjZ3feYxLT7gVBNSK75fYUNfojn4JL7umDp8mH7ck",
  "key34": "2S5a9Qg6T27iYnqMEQPNxVeSmKdYtfqoxwgh5nvL21R7uPZzM5aUcX4s6gFkm9HNi1V2paidbv1HxDrZewynrgBu",
  "key35": "52f6RiFT2NpoVKhryhKvcGz87csBDMV9odtJwPNWk3L3dC3YXnE1QRC8GZ7FD4WzXoJNsJaRnCm2oYLkfDbBkT3u",
  "key36": "3CrRf4mrg2UcrHACpTwqxRVhv5wyinFGW9jckM7yszCkj4qaFi5tLqkNw83bWs5BQyhKvFwvx8iUzNE4hPtGwNMa"
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
