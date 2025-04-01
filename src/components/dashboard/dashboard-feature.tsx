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
    "4L8aVEb8EWQULgxRXJ8H156CKs8S9bUQft5oDUfExFUors5qsWbbzJxW6z6U35bfqKLX6xCJrDNXx92QUyGVVupJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F3Fyjrjyz3hwF2Q8TV6qXVJFJ6sKrs3iFvvYfo9RVXUB8PbCb1EyWUVqrrPERMGdvgzfVe1YSJsjyv5h3wVZc3X",
  "key1": "3PF8EhpGAs1GuFRhnZZxWDvL9tNzCad6iWpjx2oWLsbAiNnttwxqiYVHaYqdNtjEggGxPrTEAxqd3NvaapjozxqE",
  "key2": "4po1HQw4AQEBj5KAnKuJLjJfM6s4d7npUV4vvvzcK6gY46UmmAQn5wXyZHEjKrvwyo63embfwQCKgfmLHeVktLC",
  "key3": "59T6tUS6f6rvDF3XN95EgJrap8eVn24W5SCuvwrGMuNr5mCWdjqS45X2aLHPf6zUaJ4uXuuP8Yz3RwZtT8cvov6t",
  "key4": "5r21B4XWfoEE3zMuerzf72Myc7DMZxHMREbsxnKhYTgmDHGV4k2bNw6dwjnJCsm3YhFEPZWsPZGh3BVKaVkbM1H3",
  "key5": "5Uskq6Y87MssaAnuwwNFPrwsj9g8gX3oZZuNTGaUxBpotRuECmoto9Q73BY322GsPfwyGLC5HdHhijuPXFeDubsj",
  "key6": "3QCeW3jUuhTiK5QBhjKF2BmxaxebqeLzruMZJisitGJrRE9kgNTZfdWmpC2cCxBFQFv3MUVwH9gRXSMrY7T3s3gu",
  "key7": "33LQAVyeHhB2u9Rb88V5YDiFhyHJdaZ1Ltd2ngWytmG66GZqDUk1q7Z2FxbgTEnp6ECLPg2auNKtufWbriLSzSXR",
  "key8": "4bmZMf6ySGmfiJ48NwKDcntqEsgGAwBsKryS4KbfJZhiuqUQVguauMBnXcfEWeEDaZbT6RUkXrcZxkexbTswtv7H",
  "key9": "5hiFByFrs72vosUoNqTsso7N6NcuEbZtCdtx3H3oScD53DDBxnQKcKoK1peMGeSxELTFYyuQ6ASFZye1VVD6NWob",
  "key10": "62xfWPAViR3Uy41Q5P7xkgq9w4hAYr1adG9m1afC9jjxTvkqV85pDGKyBf9FjvutaGtmhh5AeGMXZR5NvinrGVca",
  "key11": "47oPqMv3oo6MHvZLC6EwAqNeX6zDn7QF6KxnDYHxc8Y55fc62F7GsF2VmC9F6PFDeu3PK9LZcjLFM1nipAqpExuj",
  "key12": "2wXHnnuX7DPXnajoQxg9feD7CDUiDZY9z91AkgKtxqsc2yxNj18YyDtmBrXzV91UNkCW5GCgi6f6CKNbK26Dfr9a",
  "key13": "5QNjZWhmTJp9pVtjCPzXLFxpWjn5muLQNnoxd4M31qYLeGbkDFGjoF25rLbpeCYFQC4WTyNnyJpNqcwHbYWAjGhu",
  "key14": "h5qRtcXBdwJrnLmiACUTUaKZiQGESXgck43v9jqMx5rjDaxVFzs79K7ARfjMGvbsZywSd9v8QMDnZ8S1UGhN54k",
  "key15": "2xZNqqUp3JxpC5vrkjNpmAJrfAQkAU3j9SnJfvVtAAUyAhevcUxWgFZmWWZBHr44uTsh9BpcdWFAbzWcMfrf8CtE",
  "key16": "5y9j7PJfysBwWapwZTVcSsEtrnVddZy9hAAoAk9GVfZGJD6FHrSawBwCxB9qUiVevNWSi1qF3TDUjAWnhV7HNxTG",
  "key17": "2ZiKE4B4JgKYvpq97ZptLo69uwRCTgmbeWyxufPMsjVkvmadttdaZtidV5ThNwdi4PVkTb4RYTBVXFLLTARtFQbp",
  "key18": "4mnxD1QxnTftvcTUMMXKwX4Ks1kFfuC2pnRDBVrhrWqRXPtuvm9Fcdvc4e44dLucpqjLcXETazoieszovGxvsbqD",
  "key19": "21cZQaGHxyyWHiFZetEtQKcSV1mANP9H3ZmMbzfefWkYWhBvmFE1H1rdQEGfNEjSebqV1BJqC4rsAfeESMoQzNGy",
  "key20": "3Z6cSKQy5Yf4oDiVzmsr77g5wLtVCGFCE6EPfzYNozLCTENkTWx6YcQweYknGfv3eMd117su6EMkLgtFKCMp3RXs",
  "key21": "ScNDqE4ZYP8DEWb5DK8nJyWCmgAhtLWDVGwCZcz2z4rmLub37uqHGnCRcvH8eDqyyaRKhFnszWq1EjXod15DhWe",
  "key22": "piT2yZMcxpAbCVT7eAaBmt1GEEMa1vmr6R9EXRCA2SYanmw28wdJUWYj3MRjUQ9rvhk65XRLJy4zcUCHFqbaHnL",
  "key23": "28EjKQTk4ERttTmYGVBvP3fcDDo44tJHSjQ1SxV9yLRSZsndn8C3e9NENwEPnVBKS8uoGyegh9KxZTd1NbwoU1LS",
  "key24": "5UWukQ5Aqhjs2WcCuwppiVc8VDTp6FAzHbPZfgQE7KniRhwRhCoXbzsjCqmeK6sNuuGHFPAjsAtP8yyPqzpwyC2q",
  "key25": "585Q2TXdbUH6mtjVxV3UQNLKaayNRM33NkiPtoY4pWHcCxEQEB8e151tjwNNyb91TYgqoW2hm42aEbXkBZnC22fQ",
  "key26": "2BbuTJQmEN2awg9cPWRfTyoGAvDZKBXhuoKpdsKxnTksKU2Qs98bvKUqsagqkvPXnPja2fq1xwhtgG8u1EUCdiNC",
  "key27": "4ZAntZa9PePMwJUPRFaePMCR37BBLc8crHDuShECUqP6pCMNP3Ef3RMdURhQZTZAsSPhiP7CqbYrZyfzMUDrf9Jz",
  "key28": "2WkWnX8wsgDfcLLjBQeKWZ6psR8MQx99BpbVVJkWMV26w7TauzzsdtA1NgA2EwFnad1XRnJPEq4EUu7up6h1gtea",
  "key29": "5ET67nnsLswWDsiKR3oMAS6WcTtyx85JhoSkzvEs925a83xP6r3Xi7KfkyS8smgAGnXitdhgoKiKcW3XP2feBCng",
  "key30": "51JZEz6JEH7knDNAAubRXhGGnh2m8ZyzUBP6fgH8rh3Gewh4ikJPadvt7M6JpnD2aQh7xra2ZcExVRD1sdbGoTQK",
  "key31": "5w2jZKKRXxqbiivbepqw12HxnJDUK1o7Uri49cgWccb9Uah4MZzRwgAK5govmMu2C3CgVs8na47kf3tqQSdCXLnW",
  "key32": "4xWN5exuMBGC3dnr1Z4cUra1AMFnSsuGkC7Q5ko98rRZE29mMHtZZaxQyyRWHAzGN89usM79NnbbhDRwi3JPrHgz",
  "key33": "APAJBru8AHH7YjRHptfjPPdcqx37JVGAji1FfeCnJ599qVECGm1KogNBCM5gjJgxwUoRoq7Vqxc7u8kmZKtMe3U",
  "key34": "31nAWuoRi5x4Q9itB3wtvFGj7kNAQCeh42oXSYDHZuEH7sZUCmaN81PyM8HH4ZEf6ZGs8b7edxPYdoeVEY7eCc7F",
  "key35": "59aPxEnXURMHUUrXE2ws1TcsqNu38qDBStwamNXKhq9e7xXLBG2cqUzpTLPz5Mh5KfSpq3gpZTBk5zVXhXbtjxZ1",
  "key36": "5k8MjtrYoUn1U2Kht3P4grcvyhgxL8oRDE4nheADJGBUP1vvorvNtQLW2WhbTeByNKJY1kL91xVDD7VZHShXMkqG",
  "key37": "4qVdgNCRrTqYrcue1oxdXyD9L7pd1BMMc2k3miVAPpXkWf7k4WkbV7LpmW9mBNxA28t8AmLLNDY3YFsR9P9xm7nz",
  "key38": "3Ytntgqkk2eeQentcyrxAAJwNkt43JCiqQLwW2sZ1ui2Y65Q5N3vCPSBNvT8kXTC5RvsHQ2jnHwvBdFHmPwChgTe",
  "key39": "5BkznxpXgmnMsSQS5tae7p5inrgRckXj5yEdiF3rVXj3qyuL4ZptAznS6qjfhB3fJygKD6e5wxQ6D9CN62aURsbY",
  "key40": "4i2jd9EsdDab6zrqq25mnhjzsmWeoqM4VkZ8qTThz9pDoqeXARvWktmJGkBSDSckQ6wLicHZgCFRD3XJWsDjFeyk",
  "key41": "4mskyVLAGTo2B9o1dFbMbKEMkPXCbh5Rtu3gGGLQi6dyNrGcTAEyhaepTtSYAMAcZPMPmzer2skBgxzy61ccP7Xe",
  "key42": "hpQdHLdNKX2iv5Rd96beSb4x1Xpyyi5eka173zMowxH8HN45Xrre6M8ycxTPLFjTqfSxXuCKrGRiyiSdVZmXta8",
  "key43": "MUxAVoXXUTo3L34J8HjrDkQUHeSW4fYPdbC9wWptQcHbtEF2N3WCyedruwdSP1fbS7zCkGEYzbGpmdZgghiauMk",
  "key44": "5DViyF79HB5z3sjCY5abaE5iztsKHCJ1kaS3AU2R1wxxLDUxvUPUgRDtC4cAy4kaDL6m561sJMAnCsmh48nznvLm",
  "key45": "4i1My6tprDvNdZuNXS9GRYWBBJrGEHfmrmUqAQ8KajXY5WfUPYgQK8x4iAiFqVhCG8XePp6DFJjskACGr8W4e4Hd",
  "key46": "3KNAfaVbF3LMXv4QatCFRpwdoQaNv1imfxGJVSFLn2qDXVcZhp59jFnMomA4A6nySoZenhSzUNuZhdAt4vkKHLhj",
  "key47": "3CLvaBHypnQGHFwt2t8nQ5GYDYBuawoQjzuXiAD6psTw9yw5598UyK2NpAhdNQNzMgEobEteVqVsai378chgwk8B"
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
