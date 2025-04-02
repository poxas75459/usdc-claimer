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
    "2LoZjKDnYuwL4bcRFSuqwmSbhzrpEYbtWDJDVJKQ5NosYZU3ki33pKPqF7HNB41XTj7kxRbheqXNtHTmZCaVpPUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NKWYcexUkRuYUuaTbffErghu8wAEFba6CTUudY7FjMfuQfNdyWShqfRBv9CQWpcEak5kuyLrxBB5KqPmzGBah7i",
  "key1": "4H5zLrdcdqSH5Xeq2UryT319cSiNJishtdSm49EMdqqf7wq3q1vw9nqbjJ3QdfxkGmwnxSdfPTyvLkDYP42jSYWz",
  "key2": "4isK8rgsfa4Buhs5DJsY29w1VX4VUp5mSKCUtRAxB28xgTSWtKwoUmPQ14BqgYAzGULMnjX76zUSMKBghzDuDyuP",
  "key3": "4fgaaBRxdYLm18coFxRn9t2EYPMRS3jnizxUD5e2mnN3bCEPoht5JmmdLLVkptohvFjJi8Ms5V66KDegaiCiSCUZ",
  "key4": "2RjtD79P1mfAQRrsJJDQUcTYRX1w6DqogH74oKQBPVoWdsLZTmiGJKTaekjG6MRBWXorYVc8wvq7TZXodJhzzsG2",
  "key5": "4LeQ2vJJB8o1Z8uVStp2aLVQh6eJtK6FjAX7F51rykYoA3z2Eh3CroFX4E15dXg4ar5Priw8xnR87zeq25yAYyqE",
  "key6": "8WJ4WPmLYz8aNhVmRf7SCpJthWTQKEecd5pTK1PKdTPu2jsDRxQR8HtvnuDvA86ejYfFbn1kYS4H22isZcHNnjw",
  "key7": "5jb3MYpRbcYApR5LCHWgVR7ibrhUTmoeXwojQX17i3V1sxwedLpWgRmKMReLfwEwAmw8mec5mw7sRxQM1g7RQFY7",
  "key8": "4sn4pQwpiCCPDeQdsFkKyLkUED8KkoWzoFZbfdM8GmBkDShxsSnfguARfEHk1BC9fhKNSs4SFfVcDt9YvBd2o7rr",
  "key9": "59nvJavDwN5Mt4djCH2jpSaf2Uu1HtLMk1NbpxDg9KM6ujkZvmT6PbB8Ey4kSv4rthALzMoZMGYsuGyiPpdNmWXT",
  "key10": "4UbRbXBx3B1nG5XJ9zhHW3vWXbGCmCGoQRXBTqfTsrpXNEioU2iRto56pR8DEhg9j5BiW6vbTukJymyoDSH2GADk",
  "key11": "5Qng6SuhdpKC5tRxnJC53Nc8oH1USppzn4HkthqFyBkCsGXNEKSxsvj7pG5rJ9NhCW7WyBogi1PD56Nbu9Dvmbu5",
  "key12": "3KTAc1QQGtqwyv4FJWQVX78rfNEaJS2s7GnKmWhzr68sg8mDML1jAMgyejSj17mxvKgBLTrtqqaNmAsoZCQBSjCF",
  "key13": "1J8aHVEWPM3A5BK4XBq7WkN2h97chc7sMkJDGbDDMSrqNb6MC7hd2ezLaDFak9T6MFgj5JhPefmmbbWiEJKoykt",
  "key14": "2cTwK3Ff1sJHv95fJijz87VZesQZuH4633zFgobD2Qoo36MtoepTS6VnL8gPatgvmv46hdp6NzePbui73m9BJCmS",
  "key15": "4D4oeuHp2SpXurvk7AdQhxVp5REKtUb4TkgVo6BiHnRXYM23dsH6bN1JgtK2XDvig7Qy8LAsZsepfAVyMdqewp58",
  "key16": "4BqrcDrRCq6Uopze8m5UND3FJzpr6eoVyknrD1NV6V1kDikTnJLuBn6LrAs9yZSnZehF1cJhFjYsWUcpj1nncLvb",
  "key17": "eBiS1rh3uKZdURNAhEQ16aoPA47WzKHTHJB6rqED2hTy1sQ93dhabS95r638dADmkG1GBKmGi8fsdNWudUL4HcR",
  "key18": "MsD3pz1y2ytf1h9xPZEJSoQ89GMgSnvZp9x1CSeQg8jMEHg3MmR7iDUVUnfoUtGfnbnqwX82Hkesii2cu41ByXR",
  "key19": "5xhKNfWJQD8X2GEax8Rdoe3r4Y1YpQ9PiyG9XXnbjpHDnCzkGWKkb9aCMr4xAVCYskvqA4c424At1oegGCkC3AwJ",
  "key20": "4q8ZmrTw5xXnidLikhv8LLJygJJF6gVXwy5vEZd5bMSr2SAPcti4BJxDca8hHsfJSG2wvihz65Ruge5qVSxAgMJG",
  "key21": "3PeGNswRaY24UbVeZxJu6axPASKPwdss2yj1p1gx7rw8xUGDcRnC88rL4g9srC5TdyLWFNUngYdP9c9pE88XGsVr",
  "key22": "61JsqjV3D8GxCiTDVMuGnPN51XxW52fiWzH8DLcmURfv1RWxbzRYVFZQcaJFQWAyqHG1sdy1mWwuuY9g689tvQQd",
  "key23": "3A4u1QxsXSVYV41UuyhQcQXKZZcJtsxaAqMuYktBXkG1sqYHuqJeQRQWWHN8JSZFKf48N7hbYftVCr4wHUGQzQZn",
  "key24": "3nA5HmaU64iRZ1f6LabUT19xTbqBHTo8szZjqsmSoauGuhjBBDCTF7NE1XnyebvjFeEacW3U37cdP1xMbuPzGtVU",
  "key25": "2gtHkzVMVzzy2UFjPD8pATNy4eMYxgy5xQQ5rjD1HbycDo1FnPPcJ2b3rNsdKRoo1WVewxgctsGVsR7X1TEaxBtX",
  "key26": "5xo2ahdWkLtwGCtE36ywJysHR7H6DXFVsJcMV1DgJH8WsveGGzAb59jfqjKH1mi4UwdcHr7DakFCFrFurAxGRHS2",
  "key27": "3myBeuaYEXXz1bonAe1X91KPZ4rcsoNpZDwWmHWHHMCbB3vXHVfxPBnd6bWonduQumTLyWoePKXwTgZ98QAwxyuy",
  "key28": "eZERVVL6L9MpSKVvdgVYoViPezfhEmCS3xp5bLKQwujoFkMxTpEKEPKJ47nuxgo5ppn3T5EkZrzMWMoJG6XVyp3",
  "key29": "4QHVeNfntbjShtKvJKAkcWXXcqEYrf9ivX7cdhvm9fjcdXaBt5MZRzWcUe7nRAPhtCStBXwmmbNVxzj8mn1F92Mi",
  "key30": "9sqhJ9YYKfETxJ35BdTU8hjvdWDTbwtbLtRQy6QpxEP2vTh5AhEhhsTLUUtzPXJfL3ZW431MR78ST6HDWHj5bDv",
  "key31": "3y4S93DEKPY9Uc477nMxu6Hfy1wPhXPbRTDkPWWaExr2fa2SGXthgxiNi7srFyb5Rxf9dpAkKNxftnTV1hdYMNqU",
  "key32": "3KatUWhnuQdxgfDZPT9ZEsfoGXrRhcn8otJ5gBv2dRDaiELHLQ3VqSLyu5jhEy48D4GX8Lem6CiLXPcJSSFudfdu",
  "key33": "3rD5suenBPYquUV5qtQaaSsiya7dMxRJRC2y4NJPJiZ9LDdq7XBWFagb4NbNp87yGKWcPLBf1hvwpeE8ASwuXs77",
  "key34": "62atNXibpgNDwQSXXgn86MaAA2HBi8AgyCSLVZMeQNa47DTRMDC4YqdXKxb5YvMbxSRV5SDoYroRiLc7w2DEzh6T",
  "key35": "c4qXRpmuA2RvRh1sMAsmbdW779S6RKcKuYijtp5DJ2dpEEBVyGbbHAHGmv9e6suGLUsCjPWeNUcD7GR2njh64JB",
  "key36": "3uXJiaFk59pLX39oUQU7tZu2vPe7AMrWuzT2zHsoQS4vi6N3pNzWhePfMPqJhYfzAj6NeEMFhgCVWuiTAtAE7DNb",
  "key37": "2wzWRuubYDWGhLmrGJh7ZZH4f1tJXnVT8vzYHkg7VxajyMzCgotMXjERXkyZddYpeWoaNCmCze3haY7H94du3ys8",
  "key38": "5pvkFArs7XJgfwNnM329Fyu4zRepVX7giYJFZdrb1QGMn6g98zUQ7QT5Jq22JDt2zSwDcUTBksXbaTJdtZef74ri",
  "key39": "3Mvyr4XVs3VJa9kYKpZjtbjyuXaoVmFZ9tXVRBUkGUfcqX4HBLS2gwgVFgDUe7ZEJW1REcecVYMsU3EZ8FtJ8gNq",
  "key40": "3VArHvD1e76oPaRs4coXkHomxNutSfweHErNDSC66wmo7iJ6MAZZtN1tgfSrxU8K2icbLu7tLC3JnS5X4XSichuR",
  "key41": "5emGrqcE1UrzMBvqSkRxhbspN7SZYit4MZ4akedGkADf3ujj3bW3r7FKmxr2aYt93TukZjGcFfyAw2CNpetccCJY",
  "key42": "2XrFysqzzurztCwgJra5E4QWK1T1ePa44pHSTbzXeunCCkCqdfRJWfTnakkjgNxbpSTe3GLneMhnfq5BCKTyjLta",
  "key43": "uEspWwkZVFa57RUw3Gx7a1bHcHe7Fw8D78vo9QcAMYw4rDDZQ4rq57FybN2AKy31EV22CKkM84qKmw9KQ2CMqMG",
  "key44": "Nd3GefGDfdF28WtLpwwdcVsoY4ZdpKuPwbkpDRU72mxmrNGAojSvbzKy1eTgBVz8gtrP3Ud6Co4tWKXxD2ydHWs",
  "key45": "5PuHog2xBD6Cq6jkwu21KyEagVxrXJBwaTJCaQghUvd7Tdcs9KrbT4ZsiexvFYuDZkKDKRqCSAEDWBvMHgVZXQ9w"
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
