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
    "26VRdKpq3Q7E5zVLk9FSgsn43kH7SjWF1WeiNkbXKHBZTWbziHe6VqiC4oim6Uv47AqAJ2B4rCWsVFcuByusZcsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eSg16yt6q7qbnqtkAEFsx7xmjXNrjixjdfKGmdNL5iNbwdrDwpRV8JG2M9rUJ9sbUd2BXPCqWNq29RBFbQ6Zak9",
  "key1": "5CqrLdQyyg3oufnmuiDd1Gk1o3phxrqkmdhm7PKc95J7pzf71q35v2jRyUDdyxEr7PJcJGna4FdVSUvUotZTu2YE",
  "key2": "5pkjRbGFuPygQ8pdAuDUs69XBpMmxfEpEb3y4UM8izpcyu78CMH7jfum5G84q9vDSRxvXmcGouVbvhLXTsC5p9MN",
  "key3": "2xzfivFsHLCojWyV9rQaAchKTsTqjdSm3hvU9DRWB6G4AsGH9pqZPyZxJU3JdycqRuSfceuBscooyR1b8vxwyYyG",
  "key4": "5cQ6EP2vGe6WPCxyoCZgKjH5FGhExqhTh3m6GGyGHWf3uSLhELMD1oypXfez2Qs5xJaXVGQhnRKpZ9Jc1oPpkY8j",
  "key5": "2p79FeZ5Ju1pkGnpwxL5Gz5vreS4VeFK9vkJFZAPVtTw7iCrAqucJ89MH87pRWijord9H1YJRDMCD5JN8GcZrzLn",
  "key6": "5YvAdvRR1pRsqmJvtjvwk5GVT8NBf76AXdrBxMxJwWJ9Cw4AJ7xewsezve4MaGf79FfrssxKj54iwxaoYL6q5Ask",
  "key7": "r3sGQFvQYUP9YdtwCAduAAWfq1arSGyh5dTLFyc3NbN96R6Gk5yV4UMMBb1icGUqrhSeoXjTpSzp37HhUnHbW2o",
  "key8": "2Zs22jwA3Nt4MyTCjkpxk3pB5D7K7yPDtXR6VqEktpU8RjQCTrBYdjJUQfMdxTpkiqi9mEntuyKi7kULYjfFgHQY",
  "key9": "2tNzJLnBCk3nmfv9sQQtHGodqntYJtWcHVLf4nuL65JN9X5W1x5N7weScuhXJtF674jxdAnWA4GtfrK7BDVofiGJ",
  "key10": "3RosyVv2LoFn5sr5J5LEYLKizj5uw5wv2YVWBcrW9sGAHao564t6C12LsGAys9TJJFqvgcgC85Bj7Sc7HC46qkmX",
  "key11": "5vDERQhmyvkJV6azGWCx76TFXTLVfLauN9exbWzzTEqrctaiTJLciwbJhgEurKGHftdFDQJpGHWKzmDymbtiKntk",
  "key12": "2AxBESNkvekYDK6gN7Eh8qZ2JGqtksk94gvG3ebkkraeGcmit4pHkaZm5EiXDgEnB8Pnt2xPG3ZtdtizrpgRNiVy",
  "key13": "28T1VAg16WijUsbsDUJ4b9rx2CYK7HM2ZCPwdDeArbZG8zB6FW574sRCsgTGB1LeB38qqpaRz71fWjj7rJVg4gYV",
  "key14": "2rXgYarfksLhj4nfzEc74dV3DyKnHozB5Rapu66CaAruT1fjhdB477SWe8dLw69fjsHQpMnQW6C3YsKvAWyZjBJ7",
  "key15": "zXQSy2Rp3BS4wEeFqPAGYVh41N6XzkFeAF13pYrFTmZWMtBF4PWW5Zn2SirqpVc1jKE5Ue4q2x1D5Jt1wx6pB14",
  "key16": "4TDntqFEmrAt2JfVfBKu97ZeXkBCixceeTCpbfoPFfM9mUFEEB3BE2LqNJe99M2AiPEybgjBwp1BTUpiRThdDvCF",
  "key17": "CQ8u25MEpMNxeaGRFcko1xRhdZUUgoqMc4xkw5ZHCPQ61B2QcURikYH1qGN7xehwp4r8gLQX5S3pdQ2nEdYavR7",
  "key18": "CNFvS8aimYvzimK93anGSQkstngxpKvj7bLVCNouu9EZesvnYQqmQbwX54Qj9ZsXgtqYZDYbEXGMtDpWEbqsd8S",
  "key19": "2nUS9rC8yVRCJwpgrkDwtwyXmN3GsGhxmyDq2HMUCdmb7LsUMVGoNAtEQEGX6gdkUfWXbc4hMSqpMhD1h8Hkadif",
  "key20": "5K5wWAc4AehM7tqD1yq34yfRiY1c2x4yx1v1gw6mSvYt9E76tNBmtrD2QWL5DN39qy8Q4U7W47TBzKMhD1Qtt46M",
  "key21": "LPzCWGp3GB5hG54inazTJSCC9SdYGcZ63vpvzRTcVFtpgXieUVK9ti3wqUModXnwpPR2KTPB3b7sA8FBNnhGBEk",
  "key22": "63aCvTZx3J38ieQBdMXqbGUzeQsiXn7qwY557LyDP9PmXsbJapTMZaKaF1CRYg4DQqZmEjg7S1z9451FfBJ5vvj",
  "key23": "oKLrFTznF2f3omgVyfR4TKNsSMFvbhRvAThqbPNFb8wCYWiALQbF6yiTizHWkfHi6CQp847x929sPs2qumhDRKc",
  "key24": "3K5cbC1wbRggvtvKTXdkroXoGLNTtCpJPYk85rYtsPTergG5wQfsa52tzyqvFKxDLGYQqyD3Jdkg5bbHxdWuLMiz",
  "key25": "2rCdqJCWrhrFjd9Hj7jP47AiQMwuvXpd3Q8fRGLxgSPXuirdBV5PHAwhgCDdT1vu9obPD8AN9h12yHTjac8u9Js3",
  "key26": "zKdLtmaL2tB8V9VvZ9wgMrhsz6jdhpG1hgj9QX4SPMUdS6tsEV4r1vCD1zSYkBoZBuiWhPtm3sVHPQnvhSREdsj",
  "key27": "4hYDbNNwhhcqL1oRVh7fXxDZ2YvaxVH41Gu19d59QFoWsiP96qdQ4gBdQnUA5AhtG1S5cTxCeAEUB2pLFBo2epg7",
  "key28": "5qN6e123KCiGy5wpAMvF6EvwGdHt2SacCgRsHfyNZVdv72Mnr7s6SPyoeqfRA5h7HGF4b7MWVLG6Dr4aGbwAitdZ",
  "key29": "3BJkdWsmdQ5kA9HvRCDRRvXMzUCNFBktrj9UYikP7PrnqpMaQLhmZJSQPF5nEoXcooy1XAhRstTLcZP5hhQjGbra",
  "key30": "NtSVjFYzZeRnPSbNMTvWeZNYFr3wSStvW6WLGBMCsGGvoEBnDyBYNwJ9RfWFHuhvri6fWtYFpAcNfKgVdL14zTp",
  "key31": "34g38VfqxnLVJkwZhyUc6wUm6bAJzPZHwKVp7p8WKfuveNDWkUjwF6c45Vk6tYUS1Pim1492teb1AkPMCFGsaimW",
  "key32": "4HgaiZnRbPKCz1Q4F11bQPAsbcHrVCVnB4G7eEGTbA8wnt6gGBqs2cFjB6CZmCnrxBqgcMBUWyiooSZ883PkzafG",
  "key33": "2hd5Dgo7CJG9c1cFRaaiajwQarE96cJbyNr2JPmbTx7cusPmR2myXprgdmzCy9h4KVJJH7EmgaB35AhK7v7A8RDA",
  "key34": "2MgbeMEdgxCQa7qJgHxQKfEBa3PaWxHFX4MBHYbKi5LyFMXjANJTbb85RF4f9deASYLsyDrda8LMrgiYMmHHGF5R",
  "key35": "4yt2h1FrkUuQKwffAvJXz5AKxDoau5zYsja3E9Knb52xEc4JuGYUBX4V8uJc1T1U8Syk7hd5NZJRk6N2JSbe1yhn",
  "key36": "h6pGoY7k9oRWgKZhBxqCr1qgFV3RdfSsQ5a7Z44yjYnrB3r2v4xsComSYzHN2dZm5SaPUo2VsdDT6TXvZc9wLQQ",
  "key37": "5m439fHTCyvbVH9gVuNFuXwXgn3enqFFUANpDMqBxHEsENZgRi42kwdk1W3sFQJWdr71CN82A3EcMEuxs8thcrEX",
  "key38": "2PPQaHJu2UzJDaQ2fxThnbr6EwcAiyobsdVD4wYQqPscnZBwiSzfXkqGjxKcUvRwEVRGfTHTbBothsudQZd9UuYH",
  "key39": "2FtupUCS2zmYLZwMMyq3WiLLbsq8D2vy8tttncaYaMcbj5CUvFH6nXCkBthWCfXkrUaYqsCgcpsx65aL3kGWTv9V",
  "key40": "tBUCS3VeLGBpipvRpRTjHJWPaPSvT31fygwFhoHzzCkcoc3vrmgAsn74VxYzi5jPU1pGw19s29awDGH45AvbwDY",
  "key41": "5dtrNpQ2zM1f8sZS6ubSwau6Q27naZ1pMybnBLqRtdFoVvHbx8P6jV6nyEreY1NVdbwWhpSN56TTwNw61EGz7UYU",
  "key42": "3WnB6Fn9ACB5zehmTqmndXFkkoekeWqQw7zZ26TQLLFtC2ZgJBLh6fXZN9YSUAzsqLaDaDCr6zSKcsKbXy4CtRqW",
  "key43": "4dtWPbzg8ehRc6hDbrqy3FJYfdMCcjXRgZpnZooPLeWu51uUm68YXJAFEvXNutKfqt8YGALE9SCYLcCYQ8JNvNnm",
  "key44": "2Dg4sW62EWtzW2kByDrXrN2ctHxuU3uwVN9hnffu5EueNVMatvpQUceDG8yzM5u81KAdqrGPxjjHa6NUz4Rvex74",
  "key45": "5zo2zDZzXgzuJ14T6LGYr5S6Xyf2mkFEYH1JmXzRwJDwndFBJZGfrJXMUVJKES5jz5bGkL5Zr7Eyu6LmjzdjdE7u",
  "key46": "DeFvVq4E6qFBprFafPBQDSBcw8woZjcPoLbLj7Q1GBvRGbznmGmPTNgA9BA6F3GwGJaLVbvBDobUZftU5uHbqDn"
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
