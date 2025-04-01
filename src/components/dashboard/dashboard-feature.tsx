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
    "49zA7146mtu2toAJsbxG9TErA4EyL4FMzV1JDYDaJiSLRE2ojawZaqwghPJPUK4zsEXZLSaHvPSu5erHJekceZQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Y2faycB6puBBAfZax81RJk1AFLjv2pgxxbddGmX5Vu8nKX8e72XHwmqLdTfyN8cTouxMv6JSM2X3MWe4NyjoiT",
  "key1": "58SDbg434dUWUjkHqe1Dg3QL8KpwC1oAwYrEZpasSMvDFnpbLpR1tf5CH5FTnBA3Byunp1M1w4cQkdHS5MeD1HGH",
  "key2": "4fQPvSsQtUGRAK9bZsQc9MxRxYsBcPqZCzra3NTHc8NNcXgBmtKLYBqqGH9woLFawvm5rBVdr12FM4QBa1kHQomR",
  "key3": "2A8PUBbhVEHacgGC4Mov1jcu4rzeWvEATCpy8RWNMSUzM5taiCcU4xfmzrG6aZHoVSuXTdL2AEbhtgGVc43pNsG1",
  "key4": "2xbkRtMd4cKMaYcfqCzzRiEATYyKNzEVi3fdzbQgoFpcUnaqkWK9Pzxwro39RNodWkA38AMGvN765djH4BKg47bn",
  "key5": "5bHQeXKdSdzy9GKZBp539oEPPUAfmLY6pk9eh5FtzWP5ZnjFDNUpnJvHfzxjRmwz8DzSqHyBjPG6RB386973634Z",
  "key6": "5uAdvbnn7YFczuh8PtgttHeUUVMKghLD14G6NuzCfcEtxmYttGWfMCXrXgrkzBZEYxVk5moudsqQAjWkeoonAhNT",
  "key7": "22QrjMWfsx6tWYWBapLJf5TphyHBhFzxxmZZo5Fo2PNRDQWXqTvEizBrJeezWnabzHywFGRGUBMQyKvgoGTNUXCa",
  "key8": "dBKgYG8XWsD1Qck4RFfU29AUK1qq8wRQ4YDzW13DqJjHFxK3Dh5WyJcQcz1Y1BgbbA6S4bT6SefrpeAYJgFs56r",
  "key9": "67cK5VMDodFTrjmKRy1PXYZaWgVYCW6z2Ppn4idG9ENFRZRotdf2aUNq23ULq6X9Z72sdsmKxPDMfYnqYjPW96x8",
  "key10": "5PXK9SDFzzwFndTh7wpbKZJDbkz6Vm5gM86BXsuJA3i9iP6FzdpAD65kpyhQ9VnmFkWh5S3WCQAamuf3t4Njuaem",
  "key11": "5k23ZHNWe4SbzkxKrkB1AhxRUaQTX8LaEpKAfh7D911qAqQSoKaYYzVAyvUURBCc17A7WgJF3VL9GviSsMA4MsPX",
  "key12": "fUgBcJQYcDHwfJK1DLBBr7gpy1d7CANjHVRzmMDxjStjcytcjqTS43MFd8dycumGoxoYZdinpYA66AxvmHdCTrF",
  "key13": "3KjkVcZYPrnNiUUFzuYLpFSxcWPwfc7XTh7TUqkGv4Tf4doRtdKWwRpyFZwCwH86hoDfUAgfBNwJRYsJhxK96BW5",
  "key14": "4rh1GJ6G5ZAVFuAjF6XmRvsyTgmaPXQXqLAonh1kgy26zFMuFawCwK3nNWHLe22FRyhkQzJbAbD6hi6FbBZKNTve",
  "key15": "3eA4H44XbH4XsShApLoU6e1zCVbR1ibJtAFg5JqtE9CQnaeY1xuDD5T1cYo3xnBBH3oxMQptJxbHzsokEGByPvxD",
  "key16": "3UtQhipY8bppPT3dkT5uvFJ32TAApBf7eVoqgKkt7gGHpT4x4uFKCs4Sp4hbyEu7SVss7B8D3yvzis9HDBEyDEtA",
  "key17": "JbnZiayCw7eyoFJcFRVxiouWTc36VLRxbkpQjx9RFnpVgXAF13zdmeE38agepWQQqThJEFMCFdzdVADZECd9CzH",
  "key18": "57bYoZrvwMLdmpbruk8rcD9bPJ7wutrLwGreiNo1YQoZPBuqPdtMrAuDq39WYQTyqcTgGmXodFm9L1AzPCd1dbaL",
  "key19": "5C2tH9gQieftUia8oNFVjVCdBAaAv9RVb6DrZhhBAXdoHmdTCVECVQ5w5bojgM7b1YdUsuEY1AxqehaaRXeU4axn",
  "key20": "4wZUknVH721nnq9ZcFmECNSTwBL2vi5WqttkHD1mCMHWHFw9RioYsYvgoSwKbTgx3eFPTfxZUxWWxwdDCLx4grEu",
  "key21": "5H8JuTAupLoxAszPApiC4yNggXqwuEZ1tMhLR3EM1ECozk3ZMdNKuLufoHiGYwy9ikASgt6St1vQj2gmpKwt4R1o",
  "key22": "3CgH55wBNF7RW8DYqPmybmDvXVqhFxTfYZhaHyjPmUJmqmkbFJc3te57HGc55rAnT5L932Uj1R2jKEvFtBEpKiv2",
  "key23": "2q7W3DJZn6LaL75NWMtwjKxsNXiAVDCWTFojLcirsVrzPb6mCYAzK7WgwaMLjnNcUCKQkR8VmnUBWDnSi8YoC3LB",
  "key24": "2jT5JBLZJfSqdx4dqzwcya9dTgT2DUA61wv1JtRFsP2uEoh8u71EhGfboXJSP5LDa2qqLbT3jeuoBpjDPqqVe3tK",
  "key25": "22TKvq6Vbvv5H1287WemDUccGif9qx49pYqcyA1B4XfMaABAqdrdgeGRLQhWKKZ7r97ozBZUZWTDqiMvciygBG5z",
  "key26": "3SntdSi2ihxq1TnMReYsdXJh9ba7Qt6dUtZZjoc8G8wXUFM9HXzaByR9taRgAMrWq1LmohXA4sEbZCza5fHyVPWq",
  "key27": "4Fq9iktGnznjUFyNsCjQ8Z8kC6qAzUZq7dAoN47tBjoAKegwAj5jeKbLYeN6ky6VGq49dQnYjiFsByqBuvY16F8W",
  "key28": "55nnkY1AQ8xuxdxYFA1N4GofGtLDeM3mHmkMkR8se4pT3VxDv28djxZ5Mhd7zueoHPLV6ktLd3EsomZjEpdwDFh7",
  "key29": "5Co6uD1zfq6pCsiBLuY1fkjjnPMMMsqKtXyBEbA7yg5dUAnveU9s2ysAbnj7hmzm83Yh81Ns58rkHvGjpieHgZKX",
  "key30": "2PW8fNi6TY3r5KX1gBbm68E4mm3FUB5UymgXctpgJjPPDGUSsNeNsmHyVt55utFM5EG9E4PSLaekB9xebtCQtPyn",
  "key31": "5ahKDEnDH75JQ73bPc2YhuQjDP55LUBqLbGyRgbrqNHhBh1jm3d5PB8cFmr2kCv8c9HZtKaJ8LCcmGkHF4jaV37Y",
  "key32": "41RMymr5XiNphcqkJQ5Xth51PhC6MWXbppunQJPno4toBkrYtJ4Akh1PvwW8KQgQQz78cFo8eiekJNiP9LnNJ995",
  "key33": "4hcsyApeXNL5a7Hn4pS6kkXQKWFG1KbKncoaqrAid6FfNxje9CHum8K6AeV67Kx2vgu9CqowjT1mUjrEQhbbP2Na",
  "key34": "3wpraDQYE9M2dwWsHEfLE4psNK5WPnpvPYq7DqdpviWSAzjAY9j9kw32rnBBcTM9Cm4PV9RLXWMJT8ttqTzFVb6X",
  "key35": "3XqTamy3o1U6ntG3WuxrQaR32af83a59Akzibw35oyMQNW4hR9t5CbvW9FLd2nYgyBiN5EwwdnBgorshD7ai82VK",
  "key36": "2wXJR2k8VVuatRqN7i7phnkvEUzwLvDxuYg3eUYpXv95FjKDnrYWdDpKMNv8b34D2r5uTSKUwynD4JLzfwAsQfCk",
  "key37": "AgnEom1Rxeu1iscPRZ3T8GcmoUxqA5mrHQZoyLRUQzugzVjLU3YL9WsYTb9zPXQXPHL2yNsKfQnmF78gMRY3oHN",
  "key38": "2UVwKGBQypZ82bWi6oEGZ85NeV3esjGGfZ2EmyPWGQSPhh6zMi2jZbzyjRe3GX3MGgRCPVrxF5uNebPo6TidN9C1",
  "key39": "3XddQWMPhzKgFXKxJzq1eUBLfiyvyLRf3t6kfY4MT4vETU8nroazs1fjmpe4vhj7jUAsuuZHf7L1xLyQHrMr4kVq",
  "key40": "3tJLWxR6wrHCKrX3E27t5owX89aanfDDfbHCRbZw9Wcga5M3XD6WBZBbvvt4yyHU99Jctd2ymDyJnHk57296CRme",
  "key41": "4BapjxmrUGAxAi5fUKJh8Ly1taD3Y6qmq7WUNmzg1rtMiZVzcXaafeuunFJmMto2RRVT4XKX9g4oeJH3AzmSMGfg",
  "key42": "5SBvuFrT9gmJtQdSFUjTtq31VMCV5JUD5WW6Mxey9cGJmPdVf2XoxpzEifTYLqfkp6oZwMHco636P8ULWqsyVUes",
  "key43": "2fnVmcyhToTc8hqBZj9mvpHBfDGQhCewAs2fwfdsPpgGLV4ejziXL5DoKa39Qk9p7hfCMYRYVBAcJZ57y7Lf8tRa",
  "key44": "2xcG3cpcqFoo9NPYmmCsB11GqniYwLXhU7yQUuZuujxhsBrxepNEATgcWeqcsLMoHqdFzNkKPatbG11aMuDwew9"
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
