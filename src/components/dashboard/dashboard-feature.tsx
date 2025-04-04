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
    "5nnqGpLCnkpeHTSH9GWd6bWrd1Ybegxutp7cDxt35BgDoBtcukVP654KWubuonFqdW14a93eW6WZCYBpxJYduEZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odRPaXxnA2Mz4DBitPH7ptb3aX5hutNC96DaJpLFirvp84KEpfX4vUsP7cgd1e6T2M6UR3hYvd2VYxThkVAbTFc",
  "key1": "3TNRC46SZyeNF6GnVhYfRd8nCkFc9AKewamhjPWy7svM6rs3RQNVaY5Bmr86n7resemGi7eXNh5iMzUqR9qhWUwQ",
  "key2": "62CwSDFSMkAmTKpfdX4BzQHEXF4dFMzj2juHQVvgQGeTGFQsCpHdq2D4XzEK3ZAbN1r1Dy6BazzDCFD1G2Fn9EaA",
  "key3": "YCATpdyCikL2CfeXTrrptn96tijVZAjtxd4qyo6yaHj414YrUPCmgk2GsDCDRS3YYjT2CVDkyzvPFwT2UAZhrxA",
  "key4": "5fZfnPh7FirgiDBJuoCHCK5948Q21LwVhp85ujTQexcKEUs8mHYWEqNGkhnE91151GXhuTTQsaKEG79i1Tf34GuM",
  "key5": "4WUUU8A1b6vkgnnyXsdt8YHnq9kWs3Jz1DxXYnbTXhTA5bcpGQUkVGyuENuZZ9yoiuFWYvicVRCFaF8f9dMGMtn2",
  "key6": "FFwMs54CZ496dx5B7JG47PVfE3xpyCmHhCRRk18LEvaSSzE5pwXKF3g14cGjjut4tHtzJ635g6Eg349e4t5mozE",
  "key7": "454nZiofXu2cqbGUGYyCn2T4aScdnNjfo1LaQn2HXkmHcri8MFqsYRsfcthkanMLXkLuEe9jmPaPX6uBrBXQBDD4",
  "key8": "2d8jYkKALhq6NjgZV1uaaGjwj7AJjVY3vzWSKYi6ZzBLpa3MjVuZ9GkW5ervp89VByebBmckVjAFMK4nCP19BJdq",
  "key9": "2MGpv3KJypiKsfAjGR1B1bfzdwEerTTSxpBtgrMxBXh99xvprj1jUPtvVheJTeEzNCTQXDHmQezrjEr7AymXBHWc",
  "key10": "5MQE5R4LxLH1s9hYU2XH4fMGTZEHharjujZnBDeEC9gzx8TB8N29eu7FsjnrjTuJ5v2CYmUiww2579R2XLkwCBAK",
  "key11": "KE7w7qJ7iFo9UkRWGubKazfBWsQY5qySGhrNaFdSXhrJWv5PXTA8nr2fcQ9mBzJKMvTcrrRAdomrydZqXrenHYw",
  "key12": "4zzBm6pEXRYazB1Gr8ect9uiVHA2FgHXzowp8KEQoCspgrzhHgXkXsiwVYA5GCmCstdTonU89aS1PYBvX79GsCNP",
  "key13": "4hB9MNq5PA1ivZQnikJRYJoJRFyKJ1DyJ1rAL3eeAjCiSdGpAUyHzBnuaS8iqbUcN4PvdnmrmVQwrMXAxMi2pbew",
  "key14": "3shB687Q5wLriAJsdMBYWaHSdxrLSN8Ca27fVpR38ZNhvaMHSs9qeYNdS2x2ayVC2PpmzqCpUnwP3e4z3PjY1eN1",
  "key15": "4oyB18yffYGbuhJpvZgdhnFbbNTpAYwSNu1puGFbvtKfcbUH5FaMsULWVBjKTgC1waqYt4KPTgX39Zo69fS6d5TS",
  "key16": "63LTnk5RebD4zQKwMJcGGLPE2497cXP63EYzqRtdL62Mtjt4Ae4U8Y44SKAVV7dRDLNHUoM4SUKPM9McfEbMvxcY",
  "key17": "5A9KEurMyA8BdvjGCKVh9fYBdXwFqt6M9UXmBfmX2duUatxiMeDbbwyWvv34NoGykmU1d79DPMiJXfKevoUa2Enb",
  "key18": "53HayuPpMn9Re8mj5ewQDYZ15PjAJkmwrJ8E5Ec1bisWY9kkHdRdZ6H17ixksoWaeMDF5SRzQskDAmzREQWBhuTm",
  "key19": "5JAjd2cUpN7ohGpKJKDopLagoLWZeiFfHL1EqMKafpDm3mJw6mEHs1jV3y62tfqF32X7M2mo8XNLqtkLxJ8fSeNQ",
  "key20": "3vVHeMqQX4eB93wPzGnqCh2JC4sw6v8RRHBPLwPVDU2HH9BhfCgfiUqF6BjhtZu43hgRCo6uLXUSqJVYYphSN1nX",
  "key21": "2prWck5CLjKSL4Xwbz2ABXh3hsZLBW3W9Uos24tENy3usv2YhXfmJYBjMkJrXhHNWQ8oryVsZxJq3VaeQUPujefc",
  "key22": "GUTuY1UgvwGS1hCCYysLeT7EVoGRo2L755xHsPBrBMNJcGPeXhjMqUW8XLvAoqvwN7oQq1n9pQfmLeLaUraEcmY",
  "key23": "2iGEq3c9TPGnwhjiEYDDPYjxgGe628F5BnEmRd2TMu1rDHQ78gGD4Ljh9bjnr5dvdWW7nhQ1KpcVTchkZAksuUTs",
  "key24": "2agCM2M6gi6kxkJZCLzvYoU3La643v1W91gTWosTsdXfhZZvcyPcKE1yNiu1DDSvpCBGBE6ifLaCVzivF13VjuaS",
  "key25": "NHTeVU7H7MwNKG6vXApxSePzbRwmZj9ugm6K6zyyriNPmHw6a3GcBEovJDUamxRXTuiSouBy2pHnuUtcfqPXaMi",
  "key26": "BmQybEjtp1x86EFprJnPd8J99bXYhzsuQpvaqAwqWQkpDzp8PEc9eCx7yCVqUE4hUt5YwEfvQs9T4YpJ7yDVM93",
  "key27": "4RPWnRJ8YMPr4uL4wMcE5RAnNj9ymB6ztUZzs4VrHanoLBWKM2ksV2jFqWVThoXX2dvAF8AURuYfLtGay5NMcfc9",
  "key28": "zoL7dsnvevrhrWY43gWdebTJbeGid8PDsVezjGBYpW4phXFsYfY2prXrGQkGJMjsaS27YXHZGQ7JL5MXnKRVjqG",
  "key29": "2g6FT5wkHBVrNvxiht5EfjTDujGsggHUNCqjsZFLR56r55uxFcCRsyervxzytPHytXdd9N7MgaxMceCjiBYmS3x6",
  "key30": "M6deUwq81FZj2Gm8iYZyphWW3EGV1m6t1CcPMZr6ij54x6M4DEYXGvjzzM96q1REPA41xL8TeRjYznAv5cX8pvF",
  "key31": "3LLwmovm8Ce7JEGQ3xEzQGhmfD3qkAhjLZaaw97JpJLk3PgVPwkw6cDBa9fxVAUn5nUzieWoVkshQzRTdztfQWa3",
  "key32": "2owyiVLyBXt15EtMKnUGQo1Zsp2DHyS4u4JKLDYfkScdTUFWDwr9CM1YTjLxSeP1aWUvUVmTrqPdkTVJHh1RLdwC",
  "key33": "4ZhuhLfdfURYp3ARv6c8XRBF6pfWtfCr3JxjH6ykbbVJ4XV5vUamstqgmy8dcaVS8BChGrVDS6YQea8iNMF6rJkr",
  "key34": "4MC5AvJhqyTiUvCuahSjVQRXNF5rqDqbqFHM4x3T1FVssNaCfuNFLmb7tfg1DrqrZYLwpDeN8upufKgcbvRskSTZ",
  "key35": "63GsbdsXaLAarc7VZW5E6CPu4wSSF7GApzFofR7s52BR9xPyRjKFKbMXFjUsFYXUddWDzPy1n9ziXef6WpiWr4J8",
  "key36": "4SYFHxTAENBsgAKzbnwARkeqTLREX3zB1NSNTUpxupJonm8FjycMo9Y8TWAmtT9nUzBNsj7G5gN8qzLgefk7gXds",
  "key37": "2qUdQt7m2UzBeRhVJBu4NaB588fuP2u4CLZpkPddqyYwX3wBQC8YJ9pJFWnYizGtuhKWsJY5nCs6Wm2hW9Arf36e",
  "key38": "Z1oDwxCGJ7hoKdQugUANBadCn5UPnLrmwTPZWcE74BE98WJephh2fq8WsvdBh38UugDV4Fxo3jMR6Wdq73mg5WZ",
  "key39": "5SpEjvFoxTkXzrJjeTzfjxSKrYEm24b4AsCLe76Ke4Rg47pDqJFvGTbTsvzuF649DeWQfjbLAMCrmYtShGkf1KZe",
  "key40": "2sKZqD2wS4KrceE3iCSMoodRguzDYXFMp8WTDanrTtATjf8HMZMm6rZzApEUZn45zpYRfRcCATLHcsYzUwTa3TVH"
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
