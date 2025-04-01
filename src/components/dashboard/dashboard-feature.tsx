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
    "3Yd7uXxxuiVJ41ZGyfkuFoqKxDXbQgt37r5p6u4sQTNKE6uT2tTMXrSnKHms3XueMz16W2uYCaJcX4K66CVCWH3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46qiK1yf2iJB5FvywagJiCrA51WusQwAXozamajNprAoKaaLz2RCnxHnwvU4oTaJkKdHwipLoB1FKzSGc3yECQ4z",
  "key1": "5WEFPYiYKjZnvrw39iyAhG4gojLsiHnKnQ9UGFvoBwWtceHL1iFc2HbegQzgZmvhmR6UpFEmmpLEk3rFVGC5VZTU",
  "key2": "3Po9j8RoxVvFATC58qXucdZMVYdCYvhoseseDJUTSdaaa7UrEH6jagFNThkgmLEh7TpDmYUmf4E82TRRA9smThts",
  "key3": "2BQEAqhWvJCQ1sJ3MAPSXCu5ZsF4Tr6ZDjRM8D2neeUfa7tvRmWH16ZMWc1RPHyVgnvUvg9bF6vVBDkrkrBnQP2K",
  "key4": "oA6dAiRAXnJ2NjM3Rnn9MARSyvTa6tn3FKiQXYQsYn4NT1Z4RSzTVj8cbiEj1ubRCMSEdPUufDPo4DGZUPPo4Gt",
  "key5": "2VtAbUH71ruLXXbsaYfnssP7591ihBw7wk6GWJYDhrPgQhNVh3VabsrLcnZdGG7ozdvtozYz9RCZX3ChgJ6uBuzL",
  "key6": "5LrpEChS2w71ydXAD9ywCSiwvqSmzvcghXKfRUJJZQMP2NGvndCQyhA1HsnsjRxUnVkXZE4szZQrbN3Az2wkvemx",
  "key7": "Um7s5FLMRVbAy5odQ7iZhgZGgQK9Y3MfZ2eDYSMqmBpAZTtDmzb3EKZwGnfnMULoRbqr7wkQcLgCxxG7rDphCQr",
  "key8": "2UvVE671GjFLoaMJ1Hi3XXkYwsjgPPpqtKcC4dJZGJGhxW9zEgG8KTAFbxSadkE4fh4WpMcJny7VMTKBETfBK8Gt",
  "key9": "41b2pZHCtHmLcwEoHmHx7XKPnRZtB9okKEnB63A4nkKMevB8Y3W5W8zKr1FpvnpYT4kv4rV6DNaVAkY6fokGYqtb",
  "key10": "25VeD6xqUfFnz3rDiVvjeS7D5nf3ifX7bMM4FxrtVtJkDRTmQyep8DTbZH74XzNeMdhC3waRtsTk9bsb8VuRhUNC",
  "key11": "2EzZ3pdLTM6RjLu5oWxyJiBMCvPMvq3QdBpYHgxgsrcJfJJhgKN9GqFG8Z8fLCk2m81DNUwEBsQJt1nwdZErKQgF",
  "key12": "zfKKSTsKR7jUVqbPpKqPYmY3qdLaQ5gRF6d2onoDVmAUoUQ6VHg4mLfG3jTmC8cJ9fpr9R5QbxssUVJYv1fsUkk",
  "key13": "zXSQs5rpyi57i6qt8zJHXcESqaHEbnt4g1jTyLYF5F3s1Y3pQbKm4NJqA2VT8bWMvb4qrpZGrTsZtkHKBktSEKu",
  "key14": "2P5PDXnrE9HesofBytwHX9CAfBm4YwQixmdHVnSoVv6ubKHdm9YYhUnXaf5TiMi3yhTbYV71Bqc4HnWgbox14XXp",
  "key15": "4QPnXBRZJv6mpiSPYiUvfZjrjyqM2wM2aSCLLayH2Gn2ppGwWVmUVDVjb3RhBoK1aHGnSjYBXw7yicSFpvBPy6GR",
  "key16": "3QHUhoR8usNcobCNSu3E2Lv1KuuAmjRJ7cUc4XKYR43t5JE8YHJBJDabu1b6ddzp4DXHF5DUuVT6JnQynnCVXu4e",
  "key17": "5FcaefirPHQLz6nFhaxRtA4DKvenKDzzdV9oCdVavw2VS38DwfNM7iZubTGDommNgPBEmhmx7ktazfYsTfDiB7Le",
  "key18": "ERyw7ZH1cbXoFhK31uw5bckvQfrnhstYaGvNaJwV5bXULf7UCQK14YXJwsVzUppQxgw5cyxT6mv8DpQV2FjLmux",
  "key19": "2nScfn7uuAewN3Jwm7v7HUM8f2mLKGYtxnFrnucJZYtZaQcMEZ9kYiz4oTnScMVKoScWbDsBB6FMcaRdT6CHEcpp",
  "key20": "4ksG7BYyHq7nWfbHzwMqw7fk4fxFAFY8jt7L4dP8ZEMRJcMJcm47VAo4Ddfcgci4CqVFNXoqasVDixgNwc2qsmok",
  "key21": "5sU6GyRzhhsgh22kedLrzhUfwvCmDUdYE6QigNmp3QTbGkys3Kt9mgrSxMpEXzBtxhBNa7UVfsmfXWj8FTjXNKmZ",
  "key22": "2yJjmK3hhb4X3RHbN4ETJcRfi2WPyaCAj86CaUVkgyZ2cHbn8kxHxuPqMJrToMyhVESvx4Nvyu1mznSFH7CSzJyq",
  "key23": "5XXhUKLDQPiTyGinKECdgydo2akKSrqRgLYXdRDmNHSbzEtxvKucYerpBtw1SUfYWtjT8cUG21sQjyFaprfMvnz1",
  "key24": "4sDz3pFrTDWNmWtykZ7zdkfRLvdysLr5SSXKdSGSQniPrJo9biGAdDovCRYf2RcZSKvfd57A8dWEX5Q5isUWaXRj",
  "key25": "3ZrtMvc7atQgXcLesX2ypExFa3jdSPvZULR86PuNzCK1DKE1gMebSwSch3cNAW3qVfCZN4ad7VEnokcYV7gNujba",
  "key26": "4iSEu38mFNyLcHhQU6WBykQPw8AgGkYQ4f6dq1mg5KCRBBt6tE2KNBbwHDuhncvfHijLLcpdjFiN2bf8Mxkhn7WF",
  "key27": "5XnuVMy4rDTadvtEQZ5QUKzm7GyQ6Ztnjk2hSFBjHR2KtXxTVSJ4wTqsFrg36JEAyZxsgxu6iEioBpo6atts6eJ4",
  "key28": "3efbQyENrbQQnN2vk7VTnGUUQ5kFBxmDQnYcBPf5xUpsTyUYFfN6JdnQGEoRNWrSog2A9N4BPMbdyBfGd81HRETR",
  "key29": "v3CoASaoaaTtSdTMcrMMGKG6ZpXABL5eQNTPKNHsAVMdf691w8dvA6vMoJFtv3NmNYyQ7PEKFRZUQQPiY1JFknP",
  "key30": "WvjwhtcqYSE4tobDhqiDRLkMYCYeQXTMzVtTpkUg9G83h1cSF9dpL3ZHnvpk3vzX5sX53XS9kDrmWAqKRKSVM5M",
  "key31": "8rtAy2zKyCMXC6v397ozHQNob9Q1DPh6sWhVTqS7FL8K1daKnQ8EwKKsNqo2xmL76SLxKp9czv9G8mfabLcikNw",
  "key32": "tVS7hzbneKpEsPfrYWCQ3B3gND6JWt1VBWjAizExWV8d7LvcHii5FKyEkiejRZnjMtVoRvgHsCEKE9uYNMa9eTb",
  "key33": "f5N3j9VGpxNPxuqsRQpVtvb3hFvGZFp6K3dLvgQeRyJ3MrWSjLQV3jUNQH9DvK6zCnMZ7HvFDNLD2HHnb4yzike",
  "key34": "65SuAD1jfmAM3ws47HmE98EXSrkoTeGZr9FK1MZ3Leqc4EUogGSsb89aoqk9Cgso3599Xv7zP4BKZJ47f5uqEX9M",
  "key35": "2iABU1ULcMdqv1QvLx9G62MozZVTXkkxJKvGAvB3bJ1JFHM9VXit9AbcSebsrC99k2dKKi6qX3YRPXPgDacVj82Y",
  "key36": "3JNjSLDH9DorbMnWoA6bNMeyqTScthP9qMrFb3XXt4qymTJ8XbiDm4kgqVtg9n33maDQZQzG3oSvN419DnfZQPXD",
  "key37": "5rtjMTQp9ngmcWVFGLKQK3qnAYEGyt6ZYCwiZSptVyBCGYxt8pktL4QcSXS4Yj4woq1A4r1gabwjDQC1gxL4Csj2",
  "key38": "4aySvHaDnGEccjsKm3f1SPmu77g5PurU6qvTmBsNfJoaJpbUWFhmgWui946HtjiFpD1pP5CzyhW7krZLz2ePBTGX",
  "key39": "2NU1uUBaiX7gtsyMzfn4pNnwdcQizmqtubggDh6XiAk3auAwZfimv7JjpEvdLZFSgY6uWJV4oi7Pt1qg2dF5G2Hy",
  "key40": "2LVwfEmEqsNRDzK4vDXSQ9nCMKF7SxmaTgAGbru9wmc5aAX6zpke3SfkAmbk3uGiqnYmVqhKS2cbqwTa1eDPFvd2",
  "key41": "cBjg9U5a5BEE9yWm11ye8jZJtMLRyM7xBDX8dXTBkTvxLKZfw1DbCiaNFWVy97cMgwBj9q69DTP7ZwKawQ9RFkU",
  "key42": "7qvhsyxBkeu1J7KXz7LJyQ3isk2wCRsw3erqeoGKbkRj5DDyeCkMrGP7ZLXBVgMX1HkQ3QyjCvt9jiS1ipJL52u",
  "key43": "4FhoyV77cN2xGqB91LCM1zcpS4aE82kqfmtvCX8xKWXEe6Y8r84U47LyEvQbwHnoN8oz983f26w8ftRevxioNCxt",
  "key44": "hfudM2z1vpoMkMwVJBRVRUHf5FsPC7ifJQCvuQXiLiWAyGU7aEmij4uQs5fx5AUNWQRoSbVbTkiGtj27bthGQmP",
  "key45": "5Rv4o2a1vFnBBYpqn4HTDKouXSnxk6G8aLDdNepKgRyNp764oHmNqPCvj45jLjPZPyBFnimSEVMZ994MPNmroFaB",
  "key46": "5UtxiiApL74wDzgLuSaDxRxEsWF5X5TVG8iq27BWTUndA4BQAUoHCyZnG2jWHuYzWAtqmoFK6KZwUyEK3Pz9FZTY",
  "key47": "5nWrUPtatHAfr2qEQNFXzva3RwFTayT2SGTGBoekAAQEgNDcGB6MqLkNHFP2kAD72tHtx2aEoTmfLjDwxHN3WX4a",
  "key48": "5GqccWMoFntyq9LgP1uaFmwtnrjrwMYaSDn8r8H86YezFuJEGSPorWoQHXun8WUWXuGZkxdqG51xHgTMmV2t59E2"
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
