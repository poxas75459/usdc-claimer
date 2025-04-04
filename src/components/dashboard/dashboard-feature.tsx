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
    "DXvWcqib23FaWBBvQJ43be94D4NmDYUTJLWgtEtUJqxJbbZd4ju2fLi7BAi3dhQ6JWw7vDphu5rGdfVLGH3kqQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLBWF3XZpifoDQ7ZRKL7smN4L4WxQfd1sHXz6KjPob26Wm994MeGXtHV3Pf7eBEBB43qNFfydktc3YrVKL3zCJL",
  "key1": "Kw83W9Fa6VvsL79chqjYhrTcUySxuc9JaSBsnnsh9P46ETdqs1WiE4RngrKCJ3RHbMxdeYFJB2TC84s2e6kh3st",
  "key2": "2HbDCTU6oqT2wFNnGJT9J8Nsef81W4fU1kLrZeATaZPQytB9p4LRVRLaSeW5tbCW4M1jeuRkHmnVUr6r8kEFX5QQ",
  "key3": "4cBueyg3V4SDuLo6bbGHLskSG7vHm4HiZRF8Zq1LmYyg1JMyoWYcNYMcDpX73tQgBgVe33WGthbtR2WohwmuNMAZ",
  "key4": "2ivoFK9vW4WjBLqUvufwsS7DSffBwuZ5hM9wUt6B5myy2UUmQD88hp75mMF8XMd5MynfFXiknnXBrwcVb2Vgs5FR",
  "key5": "4eVbn42cTShNJfV6JnUdJC7ibjzvZcYPSEZ7xPR9hV7SAHFyKzGkGD8KjkeE6GAoP11sDiZLEUiTLRNsezrr7mWn",
  "key6": "24KxTojrqcKs2MzNwUTdBaSJ5iG1R3Ws4UG5gC4bJhd6StAMpYJbKRmNZ62JpTEWVEhGQhGnLEPHhqodr9mw5QSL",
  "key7": "48PgA3fxZSX2qXCenfpY96vh58i15VBVmNRucNsbMAM44sjASJRqUZtEr7vhs7G759YQmo2ifXGEg2rMdGTdGzw2",
  "key8": "3Pj82KbuBPWuwxfvzHUCqtaowbGEn8XBDcF2Su39CgcP76w2RRu9Ja47B2H7pgvSrPfmVmjRqPwSd8Fef3SiSet6",
  "key9": "5ZDSiQ5cF2B9mp9QwBZPJCSFYomSATwmywWi5DGxxcZC8bi7ichDSwaxPMN3yFMvYSzEoWcoXMtRSnUkqq8o8UUp",
  "key10": "2NzYq7JfiUP1jH2aTnq9JKMXkoa3DSuapnAzFMLd9AHr39X1Y4dcHzjixbENWEqAzhxyqBwdDMZyLe3YGTgfB71N",
  "key11": "22vu7Qn3nwiU27efn86oTt1TyzyHNNiZRyT1zck8Kq8wtkZ1RFwWfkJm6i4RUZ29Y7eeT8z1cVxquWoP9YMP5QBC",
  "key12": "4jB45W9L2QiVdTqkd6r8kP17Y3tF4KPXyR1c4UBqDhY84fyCEDkWCKQvXzrguttVmGr6NdPNZJ1uCHbqsYhndT6N",
  "key13": "4fhC8FbqnS4CccU8HkocxZhtuDTa2fvg8SR8xR6qYLQChy8CPjaAgUE45Tuyifp1ZBiVw3gpJyzNa9uZmASexN1s",
  "key14": "CnFZDgbdedCsztcz9yVzvKYU1KbJmuuDDFKSYkDR2mYr4Hh19yiL1PZWSMfXgi7CTxe8Pa3s9aw7Wcqcdfremk7",
  "key15": "2dqNbW2V5VuHtxKZVTzE6uMUfkq8pLb3zz6VSXoWRjvajybTigm3F1RDdp2AR2eKpXtMnWTJdR7wMU5jyjFxyZc5",
  "key16": "5h3qaGriQfCsfHGqpANADhCfgpsXbWiSCm6Q52GZCKDeDrQsqA8pVanSNv82V8WWRTueJ9BgpUoCrYx1tjfr1gSb",
  "key17": "4StcDkAoGeqf62kiLfkepiU8i2sbvJxSLMBnQGCpWJV5A34LQouEJxLSGVUtbaWyvCrnirKQhF1z2azmyusUgkFx",
  "key18": "3jq7b4BBPq3MiCMQcxxwqHZ1SswjikfsN3QdyzHngkos6vvHr5t1aZL5jC5SkrbCW7S2J8MWPyKbvcKZatFDAjE5",
  "key19": "MgJtYT7uEdSUG8smNsG7taB8wQhECY1xHXqr1RdpJALk6RorXJZfZh1EkaSR2mZfyB9swdR9E3jJREzLw2wyaUA",
  "key20": "51Gc1zUVKrbqa8Q4eiqXg9bcpAGFBK1yfzB8KfRtwiWVENhrJmFEP695UDMBGpqkefAuioEf41ZqaXiR7StZRkmr",
  "key21": "122HFuHJa4VVyGNfCUb2MxPzViX7AXVyjf1mKhhFyUF9mCoveFD8GDNJfzC67dYpW1sZcqdEmno5XNmZtkQpCAaE",
  "key22": "3ZMqsKJZfuGmF4ud1UTwtvmmm3W3ukveGc48uzxYPzNKZYTodnNmBbYV6L2Fojs9caPfoTBw4KYPsipMzMBntgjD",
  "key23": "4M7GyTU5i48zJFB21urD1U93caADdwokHavnV7NmmrLZP2HekuMFRbKZeLkcmUWhWYvLqiAZM8FAQAe9nRJXR2jS",
  "key24": "4vBWEb1Sbn9Ni2Yz9zPsZNfCR39RudQeuFjSHXQ8ehi1Vbxj5kLnWNLsezRZXkaTFp3Yph9mZFGQuC1LYYg1smYJ",
  "key25": "fsUT7HYyEDb7w1pttE5z6GBJk9dL7K8U8o4XXQhfFMqeKa3KJVXbvA4ZB1q48Ao3APFW6DF46shT1vCCc66QqZg",
  "key26": "3TsHtVxEQRyohZ6CDwTgfL64VV9kwWZRHWWWDnMcG51GcKmpLnP2foKcNxz4YFabPW7mhiTUKtBVRxJxEqA2cL7M",
  "key27": "2yMDhAngXZgxpoWGZh4PECmqPgQkG3jn8uGjSS95AKsgxNHt2wRMH6S6HF5GZCn23izbsJQ2QBbYMB1iR1s3NGZp",
  "key28": "61w3ToxMiefEjbYToZNa3gVLsU1GyUMq7MoJ9tkSNafGmfh4qGs19STSbZA8ydABNpksMVXMayjxPamMQQQJJKeT",
  "key29": "5Acdd6rKaSfzR2ZqQr6MsFPnYVTXn2NiZnhtT5xH5NqFAHRfCeNyc5RxwEPvYy82EbeZukFYhwWNcosuAbuxRZsp",
  "key30": "4dzU6vGWv3wk6K7hjL1cpMKnvqhDcjsGUEnpRZ5M8eWRPL4Do3sA2ca4i7uW7Qrf7tjb5SY6E3u3HYopyGt6sXta",
  "key31": "bHdUaVdbepAFPDmo3ySvZQgcY7oVQTW1m19QcXX99RaFtfo4NFoLKpsBJNPuS6oaTt4G4PTw3kNKjh6vyBZGMB2",
  "key32": "3Pd4KXVEJTCnv9Rr7sGrPqnMk9TmLd1vmgrYbkEk2V4SDtYQeJb6e5YCWmjTbxxLuWEns5w2iWyy5KJiebk7g1Sz",
  "key33": "38jqMo8m6a3mztmVkWWj5HFbMvBdcDq29k1KksNZFPoqsHfPSSXYSLcQ5HGrDRu2tTmvgbD1WhEipJDWiDP64a17",
  "key34": "4dghRLEivv76Acd4zaGrqEsmSGpGtB5LKX4ZvLPPCCPX3MofUibHBb5tJXCZoFCiPfooUiPcCZkciyFvxPLx8xGM",
  "key35": "2D4zs2pANjSZr6vc2CKHwQd1gG5KgQj8BKUw1MP4cmf4Ld2mTdiYjk3pPTYYzVH45ChhWhzvXhecJ9gqcXmnrc44",
  "key36": "5zQTePqu3RdnyUD4ArCCGuCpmyCZ1eBoVJsDyJjewn1nRA3Eav6aGWBZzHpdSLJVXKErAK1Ek6iHgpRjbfnPgKch",
  "key37": "YpQtcizmPSJxtK9Q5VoSMJQPm3CYpuiPsjCZ4gsvs3vPP6PamyyNknkHhFdkvM5DCeDwqSMxWsvVVr25T3sCMMV",
  "key38": "55CjWarUpjDVLncbzffAzwosdhHoXMd4yLSPgqjsriKqSwfN4HupMT7T5fbXCFi1wCjkGXtFXiZRPDaZWL4q8z6s",
  "key39": "2kUfedMMSQrzAy9E1oKBXDhHdEyD8hzonkzDZkjssdQyeH9cwXQNt1q5SKnsjGBUU26WjB1uocozuyvSKfG8Qigp",
  "key40": "3kYXoZZmbdt5nz4f5875kP6bXwjRYM81NbSDStfu12iBtBZw8SueiVwsYmxz2aNgp6ghJpwrq8MTm6XNfaL2LhP",
  "key41": "3Vv1NYf337YdiPqJHm6vc8Q7shtygsgouBq8p7f3RfFWzzpTonQwbpDwQYgecZS3VrZHYQjqxtc72q27TKmPGHVc",
  "key42": "3fySw3GZkaR5kZ6bhQB52g6ZJBrKFFoYTUG7VBbgwydhxaX54XppZuJrNjjmZkYhnpfgvw9x7EHCvBbaUxbHkjr",
  "key43": "4LyGbPmep8YHukg2h5K8U7CKkznWaj7QDBEbQ4CvhHXuDNnjHFgKmHbqiVzcoCCMY96xWQM2vSmZ7DCDjASGXFdw",
  "key44": "5TCycfAnkqd2fBdHdxMPUUJzjKGawCrKEYLA66HjL1RT8ZqVxnLaQ8ak41bwy2pxDDCot2HxBaSqhMyruEyGLuP5",
  "key45": "32hsEbwpAX15w2Et3LU1FRiQm9iqA1p3VbQ3BcZaV8efLcd6jUFxvYGXZsM2GoboNxPkzKyH6PGHcWgJEtyV3bn",
  "key46": "2Poy2ZLELjH4LUNgnbV1UGFb9zCiQKbGMeBkR4mJmeCp1FNXWu4T1z1mvuGVAYECYPFfgv2xiokhgqPbpok1A1rs",
  "key47": "4tcTpTXe9setk42iY3px5evM2DxHiYVdpUBy7wrfxgF4f3tjoKfmqCrSRs7ir7Js38M6zfTQAXW1L1sxdDzbjCwU",
  "key48": "3CntXty85UexEPts1geRE3yKNJzJkUrBUPcLwA8u8ohLyZGp9sHXre5zrgWmn4QskrccVMMhEkFY81rNG9pzFnLL"
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
