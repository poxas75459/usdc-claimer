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
    "35Kz98joxoAsvsRzs2Sgc4qHa6PdXfdxhQ7KuKxu6arudW6qTE63KzrbSxL1ynwPYQdY9yL4N2ZkPxtLofon3DqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2og6t5E7JU9gYpaVPybDMBTvmG2ucg6HZAXxDhrCCQoD1uLvemaF9jGLdpEdYnP4yKbkwzUpW88shmQpwiEpTyg1",
  "key1": "rJDqrMPFpkBm9NJrw1Mk1M49u7RLNXJkPSFZprt2FJVEWAeQEGFPZFgpvs32DPJfBZ5vMUwAgEoRfQTtEBJmU6B",
  "key2": "z2LDMMSFEqwcPE7HbX6EYEYbHn9xdY3BL94QQoLtDLxSMNrT2QQXZoXyTmUBWv1uH5vjPxri34YRacWxgD9Z6cE",
  "key3": "3HJHa9NWE3Xtc5dzj8qp1XDaqYAHYNS2fMmsrbrHnaPdEBU9sYFHMpgNsLfyCBmkGuwT6Y1R7S8SqeeaAfcWt5Yj",
  "key4": "35njzUgPcZ4Q6vKnM1f6aLU7hpZ3CAPCCVW4LvdR6n9Tr2ThciPByFKMfFiJnV9VBXaJ46oQ5UjnyWTnZiBLVty5",
  "key5": "WTPgkwvBjGqapysnGBzjbNmLjcynrbX32bZEGUgDJZyX45cGiBRuVHbvgirfqaXgSqAynkbuXTtk7JZzPgKiKQB",
  "key6": "5p8WainU99FjQdYiBeTACLUzUBZvVAoqPTYEnRLjnrxFwwoAz8Wf1KQeHpB7X5zp57QQja42xHz5uajQfB5D5HBi",
  "key7": "xQ7xJv3rMvECig719rf4oWhAdBTaHmBb6kZJJFktSTyPvN778FJhc3yx7yV85CDFN1dRHLrR1VNgC5uVwzbgK48",
  "key8": "5mM4QoATVhdNGtufSx29HtMFL2JVGH5rUYvdmz3av1HTsrHoGfYC8XhEK8A54otzmntaGQksjZ6DDtGcVRGFXbJN",
  "key9": "25PzdGKsYbmXDZs9p6dJzx4uBwJMHCQhuhJymMzjZ6iBDtD87cnKgYUuxCXTsZCguoHeDKonkyRXR69L8pxcAu21",
  "key10": "4XSSe5sp1qqsh9gLmo1aJe5CFYQpzykUzPDaooFWAPPXBXJ9X7SCcZgFRhc6pq5ajG47zrvGATDp1ck97HRjVkXs",
  "key11": "V9XxrdLW8Z6hfBYsRQ9VjmR9CKBb1E8GtF6px99ueP9SyAzVsNN1taw1BNtnzbGn8Xijn23zaSuufaaaVgELcZV",
  "key12": "3jwMQra9Xnwdjq6WjFaDjWGUR8MPDbpP8u2dQxwA1FTySzdJsZCNHWiQueRWTc36rGntBqivqf2byz2t7jgne31u",
  "key13": "48ZeU7tx2NCYtjd4vh1iCt2qTD9N3wHJkv81ygRKkp6zFvH6KoFDGMb2kn91nrNNBFxWMbjbRzaN55Lq2LhFXhKF",
  "key14": "5MJPxSY1s8Hm8Ne7jXZ7sDq8xgcjm1apwRgs2SRrzWiWRjmuRk72QnDBpebqmWHqLd9QZRXTFk8yTyKP6wsmwPAE",
  "key15": "4tqTuoBc87QzCuE9wAcpZgvsuCx36Zt2x6H98gr8RWjRzv28y3435Ew4FvryJYY6tk9xvTQhwvH6j2Hr2hV1Pt55",
  "key16": "XT2EDx26LJF6XsMQAQL8wyffEoUassXz4xFttnzSWH2BdhDiSXA6kbcvMt5msHdRZqDwAHHDcrVwZN6mnxcD1FT",
  "key17": "KxDjjZ4VjpBWCdXrRG4R1zhBnaNNNPCxw9u6wLh5CvDYZtE7ZdP49DLS7x4Wv8f75RoVud8aZRwifGxRqkEf9NW",
  "key18": "2LRDuGCub266REPcxAniUFZApWN1wbWiFAVg8ijGmpSW8f7BAHzXD6ceTDcd7zTYwHFQbEo8jc2yUcqKm2PeeRqs",
  "key19": "619Auk5r6fqYk9mydwicMCp3LpUofApDu8i7sCvpY6Wkv7ktQLcaSc3LjRGACHBF76KMfv9dX5z2exGvh1zPYRPA",
  "key20": "5ThZXg1tX7x9a8fuiPuhnobTdkvW7UDc3M76LY1oMSe39AZYgwFuj8uosGcw8cLFE5634DfuyThhAnNgqXzREUKN",
  "key21": "4Yv9VygmjGq6aRD8vgVDmm2G9qCkuVZfgsWqZEuETmD5fadHx33Tdb5ZWCh2zCHANfjLv8qkWCjj5zEQmbtZfCan",
  "key22": "DUe1CePmE7AQpCrGBvdQ1Rtoogf3NuWsgRAWytPaPL8YEpySMgvjKjrjHuybZ6NRMczmczmwmiFTC9pYuTH1AkS",
  "key23": "3RaBB1iE3P2yJCtXi554NGpkMFCjqi4rXotQqXVcf8d5zKCFUT2v8yV4yS2S4jATEobpwmuTRug7r8hECTqzdz4F",
  "key24": "2jn5R58VW6XDJu1Rk7XrHLX8uh6iDfLY2gjFvETFBJ8xmc75KHRUQ8ehYoqLxbY5uoV8WS3cas3696Fv3pda3ktv",
  "key25": "423uuoYWdHwPU1Zr3MDq35rPLXEHTUy1bMJNcVXhsKBkq3eLA9KVXJZghvdYbiuFd2gL6HYmdBNu8Ndteo3th5su",
  "key26": "3NNjq5hYQGG76R5WobmEq4oH2ZVE4YwZfpjbQMEFH525qFn3hfAVVfpaQB1dzrDGRF9u7SRVGvqaEEEmNDfVRcNb",
  "key27": "3gUGhChq3CuUfs33CzGzqU2h4f9aePrWoX1azJYpxYBNcehM4ZcRyDGcjxCLEbzAYFRJYnMSSozPqiTx3SgvANDH",
  "key28": "aiqUZZyXpVwmz6XnHRGQxgbtz7vXkquQjFYRyENJPie3eCLSyLSbZ2a7AjrAFLSCkZp2ebEtoVkwW3jcenXvh74",
  "key29": "5Qize31QorYo2XCjVHvX6iRuSYLgstHuNQvgSCGufPPHQv1CeRVQLjyqvAMUxoMnChcCiPoiTSthHXo1hfp3w9o4",
  "key30": "4TnPyouYGyBaaxbrV4UGoyUjU9CrX2vcrcL6mCVRJ7PaMTK9rogNC49L6KNdXJYSPSTmnmw99VmtwtRNXDh71oYM",
  "key31": "3N5KQTwZFWYj9gYLveA7TRjJJu7ydDaPFZ63JucD6tYSQaFKnxCAXmnZrDMVmCcYRGYi1BbV1ZhHvo6ycwFBRpv3",
  "key32": "3SdpBCwAzMwkkfYXoe1bEeMetkrU5XdqFiWXEjGaTmB6FGhf1e9qxB3YdGmypw8afSw8eyc5VcKSBSLTWuC7yAR8",
  "key33": "36wBpfasQUg4w7wimrn7LwDQL19vBi5qiJpMW7CzBhYSrpiw2X6DrJmpfFKDZH1zkBZtmaognCEmxd1Xw9pnbhNA",
  "key34": "iQNJMVJXJn35ibQfjg24sEXPgFtAmzU7zZKMnGVEPoEZ3q6js6FgrRs76TNT3EP9ycQRGKcuifMPCpLuFxZJDWb",
  "key35": "3J28AJfxgXDbdD66DaQ7VrTkVP1sAWo9eTd8quH9T5ANVaxpReE5L1thCLLLSEf5sxiJ2BQRee1kyDbpCH6h117E",
  "key36": "2hgrCqS9n63BPX352Th3vRzwcxo82AB515dPEw4Pfr6Mo6LftbhFn4Ze34pTaUoZRMaqxfZjNrxWrptWBuHJJKz7",
  "key37": "2FPvuueha7YmLpwHc2nrwhb6THh3X2jsjgXCHZGP5pQpLqGDYTwot1czDTKY6hF2v8361QXEMQgjZqp8KLrti6QM",
  "key38": "31HMNgvmfibTfPYMQ35k45ZaQcVHLxu9R7De1FwFftzGy3NyLp4Ky36PdNivMsTnUS7iqny3atqRa6KcCpn7wuk",
  "key39": "4Wv6RcJjPsUBtjDdZ1peUyjDHbCiSgAMttgkroSv54VJWbFKy4P95mioodZSGzn3sNFpBoiFQfDLtfvcCLXnAZL3",
  "key40": "2aUUtigPE24wuLHhpiPFdBUxbWet1snY33WqHicS4H9mPedGJbBD5t9yde2BiYzk4wtKPUndxDgU9g6aHYQtukjo",
  "key41": "65yjLQBgZ8ArBhT1hJvb96btk67pAJYcSJTGPe4nVNG3Gp5hxwnkwU5Dvf7GewW1AcUTEK8ceUUT2izVZrdHBP1z",
  "key42": "3pspWU2k3CLbeqgkVH8sezbfGhh6yZFcQFhi8XcqU82K71J4LPkPoYvBKDDvFP7JWPxQfAp5wDSmk1usUD9mWRye"
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
