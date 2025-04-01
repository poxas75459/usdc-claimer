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
    "3SZGYLZmTFkNMGNinyzDpBdSkmXmFqAdHdXHfXf9BwrBTsew8X36ZCRzWFPN24w3Xv7C8QqHAahu79xS1Quxexth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mfTZhNpq6AkU9iJSXxvByAGS2TcE5guf5QUcLBpqwnxMwciJb6vbCMPQzuz9AxCXkLAkLFxJj6Skq92nk9RDm6n",
  "key1": "5KkSvLzgDdVak986zsF3cV4KoobgDpWMw43n83ve1J4dSPxF23DBp7qfxWrxP2VzAasSk6KH98uLj8KUQYu76isM",
  "key2": "2ixECeHQTShgQLXF2nHxWUcCadJUp4vvQKPueEx1BPXZyHJc9dBAWrm6w5XkzJpM785zQvqo91eLgW2b1bmmAadC",
  "key3": "T7JcpMqtyNhqTHppU7Zx5wT3Vi5Gat1SqL1qLtuHXENNNTjtJhLbqwQX1wEgPVr1rB31a7hcH7PQLHNimnfJALi",
  "key4": "5pQ5b1gFjne1WBbLf8EtG2Buhk1TZtZo71WYqCCxMn7J2tptQgYgDN7Hy2uMSnShnxd9kAr9Gh7JKNF4oLuk1dEL",
  "key5": "3QuAqiXYos99fM9YJqcMyVJRKmrFNaFoaa46noKX2sWsQXNm2ejk292pKm9DcGJ6JPofy3jMECKX3o5PPSs3FsfP",
  "key6": "2rVasSVHPwzKirj7nxnntbd3w68FXQK1RPwjkTSNEBpwdS3W3HS9CcnYyFmYpZm8DpsW8o9rYR73o2smfriFkHeh",
  "key7": "4ZWURu5QnEFg5rx6rrvrxXmMDZvJSstBvaPpE6LjtJrqFG9Djzqjgyz12GxWBerHKkd2hziKpqCjDXa2mto7GUrJ",
  "key8": "5Ucv5zUAcrZ319dro1gjgYDKX8cjpUGcQxnM3BZJLLmo3E9TV44FmCMpsLA3644bgi8JqUJa6w5tHJXHJw1UyRz2",
  "key9": "5c4rEaBUhbVfpWMqm5pn9x5w7BZkRQ4DxWKcoXpvC3grYLoKgxrz8EGMHxYf2cXHRqgcPWwq2uapNeePgTHZ3Zuj",
  "key10": "2Gnj7AL6fLgHNJMxt9SZgE5RyXfmnktsLUxjttpzjmyEkm5WpB5mPoKzTuf3kzzdtpUnLvDL8p4cw6CSwAwq7Qa",
  "key11": "5Eez4HANGYb8oLSvwUjaoMSSRdqFWapYoDSTFqo77yJB9twcUAMQf1V3fQ1be9QCdGc6KBHWGUdYRJnxiiVcKuPE",
  "key12": "43LK65nxq4jcaPkLSguK47SCTEdQJDgA9LE1jsYbHxWfw2mqgpMxFnx39bHHLH9GK6RLcWtVkUHJhsBthpefAxbe",
  "key13": "5MAPzC1az97xwTwKAFtGFazLAN8YZ7GFBtkQsW7F1hYwK9biXitZbSdyXfQLGw3wtxc28UYExegHiAEeYa21ummU",
  "key14": "66S7xVMj5uUHPPx6iR5y3HV7aNz7STAhjG23TrEYMEp36EmdUuuVuKH6tZowZxkEegL1GKVErC4dxr4h9tKh5MMt",
  "key15": "4ryBf4d7rzShdn4MHSbEYRbJXfeuRHcGTab9twJh9qKSnTUgA4rzzUpvBjHwmbXiTcxnGrYQasP3mrRcwUeerhsa",
  "key16": "2w2XVkGRRQDUvu49Xd45hyd45JqNfxuFByUHgEHnVjCcTj5BBEdJgjDXWzpQCXziHYp2EP7bXuEunDk3t7AATjxX",
  "key17": "22fCx81vQz7XGzTs4jmo2bCYFZe5nzJrfrMxHoy6f1Dgw7N4hUBkQjMsEVvVETkQKvF6FdtZBV4bQUH2tGYaUCZS",
  "key18": "5sBdvjEe1MPJhnbcSEw4TiW92Tcwx9cXtbDKfzQeAsKNXNBHZfzeXuAnScGGhuoWTpuR2bQpNNqTo5kYMCfbd3uG",
  "key19": "63is7AKk4eg1riDjCce3H8ohSEmb6HJ2Nt9eXFRTHypwN2b6GWd7nQK1UpUtCyA6a4WZXomzmhH39UUJRa9uKZMT",
  "key20": "4YTG1WGzveJ7j5nLqcz8UjWud2u1weimkjkUTNCRPQEDnAT4iERtvDNBeVA52yfKSYKtCHsSLucy7hbMbRmdRLu",
  "key21": "51mvdZ7yMeTH86GCcKHiqyKkRGzwPDs519AWQpFrnbrm6DQob88ranMFmVfyEanT2BX8tpHq4FwA8p32McJpCnUS",
  "key22": "3R17ZFKwgJVBBS3oeFgx6gTgo9FuL4goHKu6nqyitbs3vTZqPr8sMyNquzhbtuFmY5JCJW4JszCqLotbQV9epQnU",
  "key23": "3ugpPbEtGb85pHkFwNGr37Nq4mEaYh3NLq2bN2RRyLzwhVb3YNm34SBtyfUELtsDHNSuB3CQVudcF6UAbaQAXw6s",
  "key24": "2seuawg1S6xMESS7ZNBv8SCkidPS1KsMXJXDkSkGXUprWbbQzNyLuJAVtRd29EY3p2u6tM3uDdeYDEF2STMZwDaG",
  "key25": "5CUjGxeErLujfPEELYyrfyTcj7UdKcwAZipLpoueodokx4aAffqFVuyUYat2XnU2FA8ntDht59oACPHeykBoxGYp",
  "key26": "5yxBP9htr9rGLHzNbVVWtmfyJovZq3FqoXeRj4drbpVBZyUaokqUq54KRaAr1GiwcFny6esnG1P1Nj42yJfH6vFr",
  "key27": "4UDdddGPXt4RbgADQQcFxX1CBFWuaMHA53ymyKUU6rii9ncBSWV5u3NTkYtY1KQZmGkaTwNPqJPve1GzrFL4rGMr",
  "key28": "3oFkyLw6uku9nQqQU2atfEcz3TykAmwqnHpewgBpucoxk13Eui1WFyRXdk8cUXcNHbAieLgBSTXq41kF6QuRYwDE",
  "key29": "2XdChtWS9wYWbsufZwRhpU32irUXrRqoEVGmYpZ3YYGUPm8t38CAe62sX8VZtJDMpCJwhYiGctM7JUbFPVWuAevJ",
  "key30": "5YGspc49uiqUhwpBEAi1ittgXJrQfxg6Pa8HN2y2bbZFusc3XPdq1NYd9TbfEzsZhL386zGR3Hm24eaLgWoJvzmJ",
  "key31": "4a3TdR4AjAHvZGsqD1Qn5YSAdP9xxHpRbG1WchmEYWjAR39HQYXv84QMFNQgLAzM6sRSfatGdfd21wdARXGXsBta",
  "key32": "56WVGA54TwxGATVCqPquo7wh14VyEJQiDhNogcs64NBVQvu6bLWuYoVPBCfvvoeV9aZdpa7rCAe9DqVhfb6yeUcE",
  "key33": "4KSXyuYnD9HBwJi964yYzVaGT96zWUSV8y8kA1AkVKVbxSPLZjonZetqmjbt7wwEGQqcdGFtKpXXuasTFZkHLAMf"
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
