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
    "2ECyhAey4VZ2zmbZc5twdrNzLD2fCNKd88HsHR63CuSX1wptP5SLAtPeAmQwFjWsHYEHuLUZLRyDkiR63dLmrP9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zP5vBg7HaSMb63Zz6wvNtW6uyf21Wd96FbeezAi4aLQyn4GFSBUYammbbgNJaAPaQ5Zy8W4dV4m57LojHySYinZ",
  "key1": "3Ugm8nZvjCCTyt57gF9Xnzg9CLZpZbA1B2jH744DCoTZrY9vna7V2iNJgxJ4hE1N4EKfA9V6zR4Mg6srebd1Abxm",
  "key2": "5gCdNgi1kRefRR47n4h9o1XaC7FfRkjzmAEvdz6NK7R7NSpb7ZspaKnfYs1Km7btRbknpV8jbM4yDLHhjT6E5B1S",
  "key3": "46dWCNKkC1GFZPqePKpChWd5CmGR8bhnrwvRn3Nqqyjnioc7rZ9dXGWDqQko2zx3Ggzo1HdnHtkW6Fh14BJD4FiX",
  "key4": "3XXBwvAz2eMx66eJU8kQsx5YtvFv82pBX1gNSWvFZktfVBF8D4tYxJRC7gyidNRNi87LybPmvCao64j5PBBCAtaH",
  "key5": "4bNiJWXGoZBbRX6fnJLMtHPb2hVY5mfhsuwb8yiUPvW2hziZu7onjzJUxvLKNA4Sev7Rz8c3eBvLcUXcBT4TcUm9",
  "key6": "24i2dN4MUMQnrs4xkef3rvNYTgiRuaVJhLvKZHG6DNNFfEsX6TVAG3C4FRmg4fHbMfGFCxzv5voRZ2MtBmGb9Q1z",
  "key7": "4is2QWUkpSbpJMB7p1x5kpEcnj9h8VZWcACU9gVZoJem1wZqVN2saPoUQjCVEg12FrbnUtQUR9MFrg1P4Nj5sJDW",
  "key8": "61EjgpLJesECJUBUnuByJP4qr7dFAeLg1yCqc8bvgnUuGNxepnpUU4w3yZyND1e32ETVXSon6qTy7DFHhkkhAyYD",
  "key9": "4uNKuUmgf58diCs8Rx7zbw8WdsuZ9ABCTQb2WWGQTDAa9H5CPfQUWQKjojLXyWq4VGcbNmqi7rZC8GXXruAZNusL",
  "key10": "rKshJDHeW9Y4v1qDyXJCtcx8wB7xYhvJLfWdZBK8hPZtr2QagfeTCveMyJM7i7UXQrLxWWEGWyUphWSMTQzJBEH",
  "key11": "3zZXhLsfFQUwA1cpNYENKRXXUAXuSjXKwuZCDBJRTvH4FWc6aAwXQjmDMgE9Js6hKbzSyzZceqpTt1gvC47icMyP",
  "key12": "4wiTeG25Uv45fKjPFcTS21HPokH56NqppVKe6i6hoNtbhBhRg2vew7iw18QUBNRrGoJi8vphr7sQY354FUNqUEj4",
  "key13": "5XbftCoFLdiJmWj8q5gzVQGfLWmE8jgHpBNVnQJNLNK1HMhstXRRcuHNpVfqgjf2WxpKdRzEqXvkR5FANaAQgWk5",
  "key14": "58oat55vbSiJGKnefdB3vhZbp7Jbg4DoYqpVEJ5fYtj9mtrr1dV6AaxJtwQ3tFVPu15Lmu3eJX4ehiDaRb2kYVa4",
  "key15": "3a7w5dvmJKQwioSmSykfXNeqno2RQs7L6cYVvHEdven7AYLGW2ERbJH7xD4nNhPTm5gFcKwDMr3dgB5LZjE7Toa6",
  "key16": "uBr71gz2krJtrapdib5sEX97XCeHjVDHbQG7T3N2KvmRKpupNLyjYafbzbUo7W8w3ssFe3ZvGAcBbM9gzRU7oNK",
  "key17": "54yyahzEwNBgVCnMBLrDx8RYvaXN9b4Q8EWNPSN85g5Jv9VWnRTA4bQgw1m5jhBBprdHUmfKnd1KBNviCZhbM7w1",
  "key18": "5rpC4QN5SJkPqGUJGDDiPRNRLRznymM8Jb9kB4XYdzBYDLvcH86azrq5Q8GL1UBRCotFDoucyBRfejR273W58PYi",
  "key19": "VtZ5cHGbaZ9LVcd6jxvYwEyrbchYpivWaPE1ZfeydFkmB3fmNRSX4pZQFvP4BUwU6Xr1hBQUGmf2JNemGQbDLnd",
  "key20": "5aYWfYNX4vhQ6jAQj1SManwRMjfLXHEeF5nsb667cmjQPyzii8Pi7VNY1d4RbXUhKNFwozQsMRvS2LuYsZSpzW1c",
  "key21": "64nnxPLFENx22GUFV7n49iVar5mKNvkfkcBP96BzNLoJD7opYHMHS4rurDmJCnjC3iymma6dycaeYz8p6NeMw5F5",
  "key22": "3bGo7N8bvSSAFZvaAYqvqZzoLSh7GUcBcKQd4mX8s3KmhSeGb9sSnpir64JzC4Cj5TD4AZ26kubJwNu9BBP5bTLD",
  "key23": "5jk2r52aqfRW8G8JJTWPgJQkh8wE9RzAVubBFy6Wj31XkWE7iLrDbVT7Nud39kHfgKRmatiPXwVAXv7Gt2AT1cEt",
  "key24": "31DchMEVEjf2kb9k3oMypJM1JatBZpvAqzR1eMHA9pSBTtHsjgdiX3G1WWzFPwczBowgpSsunsoWyS3LwzdtjRkU",
  "key25": "5mj8XHcViY7aXSiM2263EKDynnNGnkZc9dMeHf5zFg1iDTMtPvHf6aAegFYrQq2aV2SFjieKwvMuht3tDE4DENJ3",
  "key26": "41RreQkzHuQQtu79yMzzXnzSNdgCyMxXwcVZqjvvv6FNaBXAwH9kBamz5Fb9nBkg2rRME6BzXJqfu6X41fwT2wpL",
  "key27": "3mBRX96JqYxqpMNgah8jk7qUgw1yZB7BUpGT1t2RCQULZatw4A8RiA4iTUbDy3YVe3pmpzrd42es4Sto8P1YVmdJ",
  "key28": "4b7Lcg9UCVh1qCi5zKCfxo6wPw2vszQL7iHos4YLGze2LjPKr8ibZSSPEkr2VBuJvJKGWzBwgaSLV3NihnCoBfMH",
  "key29": "2doRBMQSqsjWpBuWz9QWmEZLmR9B8XR7FeM2XEFpsWRNeCxLcrwzvhnqDfgDgzg7UkXCpoB7adBNhePXs5V2NiRX",
  "key30": "5HkWq9BGNW4SdoNGnrhKds9kEqYVYxVdp3b8awXT3m3mLNB5Mr6S7QqVEbsq8DrCHJhcukR2V9GzpwbsWak7i7F",
  "key31": "4hEhHuG85CszXkCj5txqZLx8nNNYsf13QXP3eZmgh1HHF5v3si5UVkLdEoSZXT16Pb6hsHPA83pXYLjRtDbLsw2R",
  "key32": "3y2pH55ndu6kSg6Ljpq9MmAKLwnAwjQ2S5rd4wRDnvXcAFB7eu7fMjf43QrY2s2fDFEnbVTdN6DjAEW3Am8Js14i",
  "key33": "5KkCrZ4hAX12z49Sm1qqbVLtVaneuLiHkghyBqAfUYrBnYy6qCiBXTueX2qx3VEFqs2kWo8Wb9j9uBEndiQxBXZE",
  "key34": "3qtWzmXQKMjf62hJZafHnxXs5ecPHW2eTWxja8NkBFDGyvcwBhZVTDBFs4fofEATMwAEsx3kgSnJsJc1NYVu3yH7",
  "key35": "5GUq2wpQKx7N4dDshE8uFrCeBq6PjBqGYs2J71krzERLCidFWfe67Zv3CnpDDQYsGsPmpv3TwhheYWraaqLKtJkR",
  "key36": "BFFbmNv4suAsYeUu7QQLKow6P7w6ePoSJE3PWwwkG2f3pJjjVqex9cnpaW3cg5p2MgAfVa1pbDpdS1zB6GuKiYM",
  "key37": "3aPT3LUTDanogStYQm4exZjJF4c3aNCUcN5SJ4XiVx9eWbEsnPcH2HidQpwGSj9YGK17jtkXJvZniHMMLynesVLH",
  "key38": "4SAMAgJAsN3thh8gRioQ6bpQiEJ5FEE2q5udp8yMcFRAwaufmyncxAf6QssMnaVuND6K2EbhjSTWtgPCVTCVFzQm",
  "key39": "G5S7n7DNu5jbx3RSxxG87zrn63ZkTz8TcNbjtEixwfPtaUmjjZheGyB17rLjZyWiBMSRbC3ZNyiwtE9wkRk6dYP"
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
