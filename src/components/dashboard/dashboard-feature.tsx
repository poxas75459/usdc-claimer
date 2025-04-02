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
    "5UDw5AiZkEw9w8cV9Ly1tXbx5CXHv7Djedcurgjnxa7rdRax297VCFXzig2HCMPMJfv2Kfcqt9M9yexokn2KPiEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hfp6a8wbMhQ5p4phVKLNpaZbfp1JKYwLBmec7CH9vCHKVQMpBFyvNmrfrGAHRbS7hFAQU9oELJxBdYDn6dYYMP",
  "key1": "hNkZp3DY6x7GM6CTUViMpii6mYGnnJwvyihWRFnAbnZMPXFjSjCgsuhSDmabAgmuefDaD244g1rshxmRJJ23Ckn",
  "key2": "pmv2kVZCJQEsJ6DwaFopUVdyMnDc4NzrUfAavcY4pVM67c3HQrXa5LHjk9i7DnMDrQSor4dfPYkH6eo2n1zq2L1",
  "key3": "4eAiksYf44JoQuakaDoWj8cMAnXrGJfRGqATrs4CvgnndWnD3MVU6q4twEzyhrswn8KddVJEL86Ge5MJ3wajdutr",
  "key4": "3URexY6FCp5bnfF7sXKHN7t6YdzpBaHgCsnbBvDu4czapTrr8D3KaVn7J9nC2at5L7B8VtaMeR3tJYifajyJdBPX",
  "key5": "3ohcKazeLAeGxuMrcwgpzc7NAszeKz2TW6bKaBTS6XnTzfuN1kDnGWQXJ4x4FZnUYE7cPvbddHu47eqw1qMJGXuc",
  "key6": "3Mqg6cp45jxjde96aWbUuxct83RNXKrpKY2XkyhqidSoWMpHTYSwGF6UEvnmsSzfTEwoki3ktse9XHT13eJNpg5V",
  "key7": "4KHPq7qD23NuZdsm8R6N74Cn9PfQP3tf1X9PGFZDKvbhuLyNHDpyw9z3U4zknBoWS4J9bJGreAwt3RQAs6sBensi",
  "key8": "4ELKCtAqDzmG9vEjhAgSWS3R4Ek9dr5TgQQwmjg8Vy8eoi9iSCqAW67yYUsmMFz13NK7aALe5CE2gMikvPrr44NV",
  "key9": "KrRmNM5PU5wqRL3hmU9eSwTpP7bKb3JvSDUL9n4XxTc2VVtdaSn2y8gYCXhpnYs9GPvjJ8YhBjJpmkL5cjoYmkh",
  "key10": "Ckh7tYULk6BzQgywMkkWMBoqmP4dcLPZnRmRFzL3dhCYXirhYiCeWtxBuUsLEVWJ9qNxu2HQGphxuaytTaCQXm6",
  "key11": "DT6bx7NztPKKyNvnhYHp7VEKKiEjfrnLoNRk5azor8MrguayBBudd3911HYKw8LsENZvTGdMjGxP5spg6aRWT4U",
  "key12": "3w4UKi4FLo5dMYerZ79CYKTXF73C9LW6S14Zs8iaLc3Uwe5NBmb6kjHwG9YS2CtqW9yVEZnoUg9fGbNcyiBZdpF6",
  "key13": "3V6NBZhUEmMfZ4mnaThnQvoav2G3VJ24v4S5fvhphdyahziu8wTkC8mWFEKKFEd32iQgdZ9YoRSNwHDQNqkBNcPF",
  "key14": "3ArMTBAVVS5zn7BUZgQduXW9W8SG4tM8RQrvvxrQD7fswxraCXh2QqNb94N5Yv3hk3Xny5rV57AoVM2QJRZEzR9E",
  "key15": "5VuYXeULmTDRgsVGJ3PaQrjHg3L4HvyKKj6gTmU9vaVXWfbxxEFzjHbnQTe4mjk5MBE94R5znwBfRPzPaXWQV4LT",
  "key16": "65sQebQEzA7CKgqLEnYwfmpK2bHnYLwzSNKhhZXASRUm7jyUSdZrag5Uzyn39fyguKtLJFmd1HGrFaV1XEvJMA7n",
  "key17": "4gLhmLeS4f85c46ry7hLU2g1FtgkWngdbKnZc2qPUj2yYwBPAD9gNoVuVnjyUe9qXfAPoyz2Qcu3MwL1K2hNh9Eb",
  "key18": "W2zrKQ363sxhBQeCPzjDPZ2hENLRiu6JjKDJVZZ33fMxDnSL55uVNbG844ahTwGtNMdo2Cx1cNeZFZf2nQoi3Nn",
  "key19": "2bSF55cGRwiQzjrLh4aHpPUNS6L1pvoWrndF34PiGTNPtaSzG2sMksPJhcfw6isWidyNqnVDJGB7dJCLFe6CeiKv",
  "key20": "4jrYFeHu631dYbRGvZJgmAaSZc3iYjSZEbzoLEBAXMnubBiJ8JktLFh5XXBFUYwNqKqysK8gsZ7VbPDrd7RDWEnQ",
  "key21": "9s2kEC14CxhWv6JMdeQH6pyd5tFNfCBJa7jBtPjKisPeXkwddr6jse4w9TByF4TBbdEzsCjQp96h8JNuzJiXNFz",
  "key22": "bbrVeDzvAXNSk627949A86nn4fHKw6e57AMycp3rdG8no5b1akVKLBcTcbJZbnEX9QhhkXVMUjarfE4iygsimRn",
  "key23": "2ZadF147hpCo3esSCiCfJynoqbNhn6zzHo5hAxkT5TBTxKMZ9wvvvVs8FvahCjt2rDsZwuxpm4DTjXwC9Z94TwwN",
  "key24": "4CBRUk1rFRDsLoKV3ip2bJbhjgM6GJg7kxHtvAAWspSdCtfCFgecji6dD2D9UsFNPHwX7F2wU7oU3nvLp4ogr59q",
  "key25": "S5eRsBtFi3hb29cAEE1518HZCmfgiM5jBSvvYYdgfsgtibvFur57LJW6xmmXWZAu5yuuYxx7Zkvqd9rbTGQBspi",
  "key26": "5BWRfHEN2uAcvRuqZ6bud4e8s5mjWznTDd7NjQrfReVwuMwuN1XUyEJEfV3VqFqqTNS2jgXDyujioBq1gUdYabvD",
  "key27": "3qQ4rRJfJoZbwEMXeVr6Hh1TXymwZmboYpwbkwpu4KnnhQLkJwAv9DPjwxaPmoZtmWXiM6Y5q8hzYJ6bwTfHmZFS",
  "key28": "7S6psryv6sUBMHeEcrqf5rVKGSSSg1reX8TUa1oTHYM5fYtdXtTdCVsrFKQHqA4WtU6o24Vkef5SyFbCMweW3Lr",
  "key29": "4oZpDmG8LnqzsEtN9D5ZBYr8K56Du434Ysw8zZpCgNPoD9TqubDr3cvCPCY93n7qyQeUBkuBLnQse3eWtzD2H85b",
  "key30": "398Wod21dWfbS4Pt2SbVwaJQ3REYLx938NWZjFpp4BXNbRymLt48fK5JjixQ8wskFkBNbiaRrc6c2TYHpJp3Dt25",
  "key31": "66Jnszhn3U2zmw4hiVmEMw1okErrj56mL3yruR6gQo1vJmy8LytKdNEBRtg7GaxLeaE79o2M57rUaLvHoJB3znVX",
  "key32": "2YReK4KuN643kjWtkeKQwSR5XAoGmWnYPzrKZxdwwqK8zgd537TJtYwjp85WUnA1Sh5NbpgKG75cfkndYGkAEQAo",
  "key33": "cF4VhciMoEaHhYQVDCdGU9rAycASLdSCJDg6XgLcFvFNqXR8UpPUMTYLty8cdMUi71PoXkeayPBCpvNP7dNiJy6",
  "key34": "oTgP5voTKGsToKpb7kjEsV3XpCurGBZVZqkX41sgHWG7XnUcEVhuP3focUtkBZ9M4MP2ptYRt8h53uhqSpP6CXK",
  "key35": "58yUF5Giu4vCjXA3UHE3bFDkELFVdxbpeqYsgWqQUdMhGPuZySphCjtA53cJeRGfF5GmmsMjXaJVMUaAcZUPpobz",
  "key36": "2LqUoK45ejY7FxFLtFDkFWbo4f7kXXLazgRpiVQR5fdrZpepuScdPmL68zx3hgXdwt4rDFmtzTmC3fatoqTZqCWu",
  "key37": "5dxVAMe9yjcs29BrRRN4tQag3xjrkYZdTxzcWxhFmt8tS7tiJafxPmTMJU5QdF6tPzvQxdq7eJKoT2A1RKoa3mRa",
  "key38": "43WvV3yGg2qxG9Pg7yRXagTcKG5f33FTPS5qfHnXsbeZZK6e3ijhE76tsTH8eyvqQKwz11S8fSHqfkK28qrorASB"
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
