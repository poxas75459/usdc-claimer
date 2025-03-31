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
    "jGCPPTvDSF3LwXeA8NJ27v1JQjxUrfBbFCVmqd81NZVAHdRHZYzhU1J35CWinrcmmcZbxnU7jkN68RwWadmztte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ky2WCGNVJYLC3ZR5XpQUtHnQiXLh2gJFNx7R5DEtcoXz4NWybNQY4GyTmPJrSXgRzgF5D1t9kbC8zBh9EFbvGwB",
  "key1": "cfJgZA7vZCVskgBJsPfpwCNyFEY7MoTr5MZBTLReymcPqYhRtK79P2isAWuXsZSQPKT4un5qXq1LPqcF1pY3kb8",
  "key2": "2K9SzF8adFAKSCaoZBBrv7ZoFS95tSD4zxXY54uJhjKUnPHCEr3ukovuRGQjoqUMxARZQKHuuYFoozxLdkeSMHLd",
  "key3": "T249Sjvt7Jf2aZrapotasJtaAmvxdbZHMue4R9fdVHh39c2jUnz1xjx83L57uGUta4eSuTz6WysFrwVmg7QFi8r",
  "key4": "3nwqYishGgA4Fxez3k4XjmwjJxYXeKouz9oRSjKw27ZSVQbJADWnuwcgZ9sLPkpAJLaStkkQHv2JreH6zLzVLevM",
  "key5": "uGaQC9A1cmFhCR6d1wzps2jxk1Emcc5V8szoQiJ7N5UVaPd3xAqPHS8a36XtdFwrvh9bCapj7skn7Z6d34AfoTk",
  "key6": "4oJBQKHfusduqj526cdCzk7CGSQZJsDBoAUXiMRy9TiXLY7wfpyGhJUqRJysxYN5jU5kiD8yGNYhnPrZ1E3KCwwu",
  "key7": "56GRcx1H9DgzGVPyP5XFTKzQoBdvCXKjsuLdeW1L1sovhzfXa3ZUYezt7o8tnmgJxW8GfraKg3iFL3TPY127ag6h",
  "key8": "eYtvcLLjCjcXzmrH1yJZd8UsJ8MjoDxgwjr8U4EGZr5vT4FbjHx6GBxR9ZEhNN4SmMhSaFP9DZtYYSXM9Kv9BFH",
  "key9": "4GDEU5UJDumubR4WbooZmUbbm4nsecoWtMrBY8NXFsLdkX1eMASnPGjvo32dvaCybCBqie62516TEKNMEQUA7Vyp",
  "key10": "2cVqdeP3dATUQRLBFEcK36GU4JTxajNCSUpNr7YkDm8oBiQawjufFKqkJzx3mG2UmYKenao8ofmTFnsezg6A84xw",
  "key11": "5VubDSZKVL4eVBzTBjxARYLAvkGYTdGXkfG5gSQxq81TWPZmWoKz5vuwD2oRWhPLEfSskgP5FVfQ2sDV11eVY5Gg",
  "key12": "qC86qwyHpYuyjuTSNjjWgg8HETGVWyEtqjHtA5k5WJ8rQG9pFcptmqf2m2GA1ptTdY8nsyGLpFMqCHU5irDhyZb",
  "key13": "4i5Wo3KDc67xwQhapcrNctkkJKxSffQfeszhmL9v94Wbr54a7xC4ouEnY1tKcve32jHQY93hewP9m4qKjTpoop82",
  "key14": "38dXpwPpZwGSm4fZJNq7advX6q9nZG2pym5k4Xr4nCASUTGGp8EYseVpvjDoXZWLSmSf9AL3BGc3r3LR3oUXZafH",
  "key15": "4CxZQVHioDC2owgE99nHL26JB4DavW7PhPLPkfbQWgTPUPwvD59M4tXEVTZvHh34LtSd1crG5mDqvG5Vo9Hkk8F8",
  "key16": "3n3QnoHRo2Xq7xTaawuXHGan5ALma7iMBfp7x9ejXXMUVZ7jcH4Qk7cjMVZoMV5coqFeV5z3YUCvaPneKvn9VgH7",
  "key17": "BaUAP2pQNGLv6dEY5vj7zJdDifN2LLjZtQUngec2B6ReuKgLaKTnAWCBtQ5QWue54xLci2jrmuDJrZZxmc6dfA7",
  "key18": "2QQ2PLTaWDCF5YGyyZv67G2mHkDDbvc3gkixTh8JGHfDcTdZGaHXeKD772TwzT4EA3sqmxKnpmhucf7spWshdhzB",
  "key19": "28uosbsfB4N1w6PV2rXRT25reRCfkzZAiXchEW77fZjAmdnxt9e9JhLuGGe2jectptGXmxBZdm142ZbwtsNxeBg2",
  "key20": "5Vfg3KThYXc6ZvWhKmULtk4TunpeFU59RAhPM6wqbpTy9EZ9e3hGrwuDyyA46JLxSdMYnL4YAhydGJapKDcDBr5B",
  "key21": "jfmiQDwuD81JHAMymxgofcfyqkm6caoqksQepZEsaawuH94DxTFzeo7oFLzfeffWBNDSScwzP4DBiDeLYWAZbkL",
  "key22": "2X8d4t9LXpJMcwgRLXuGzZQd7ScrfZxsiJkgM72A2fVaKQeNdxFNqknqCNaaUF99c62cPRBVjcGqdSHTaPuw8qLf",
  "key23": "5t791HV3E8wR1xsAUTvMAMCeD5Kvsa7eZmbinCWVzgrs5tvrxrfiokGnU3UYribMyD5fcjtVXEHHHwvjSU27x1wu",
  "key24": "52m3gsDEQ7ZvyZ8bRzsNu3zvif1meaivNsnZmWD81Dsr3Mv8AXBcS2Fp7PKy4mqeks5FDExbXGZWnRn5YRJnuqRc",
  "key25": "2taQEhc6X6RpzSQYPcV59YKk3bJ1eCE418xuwqyXxuykkW3Zap9cENzdDQbsuZ2jwcvGUE5YgcR3QbtWbY9hGv8D",
  "key26": "CKwjJkx4tki4B85QwVQqHYNYaJw1tLEcbQgbCpvj3fM179Sg4gg5yymoNjptqGPtxZYhnstE5S5jqDBms4QthPd",
  "key27": "83w7mHcyyFB6b1BPwVSLFkmWWRG2jd6SsbFDkzkBRFtv8g7gnvxcBVvCS7oejKFhws44jwCC6Wve23kWhnehcu5",
  "key28": "9Q8DjqtDWj9izJpQ53B3gvhGD9VYYgsc5dCHWsDYnZ9UnfWCBDjEpcgXjbR3yLNeEuNiNLih8AyKh6dWMXiy6Kq",
  "key29": "9NLyLS3XbVk3Bm9DUoyQAUmcqWkqCKdm31Q2gKmenXDtRv5NbWa8CG8Cz8nTDyWPGZXTMVHZVjrPeqvGnHV8Urr",
  "key30": "52dWTZ3stELCCmyjRViwJgWXDvmXm7XkGt9pJvcvBpB5GXb5DG7N4E4qbz1g1SnAVzKMApbqtJexcWJo2FA366Wk",
  "key31": "2sPqTQW8aYiP6EHdcZesYHVbe4V7qk9eb9psdJs4B1qerSMfVaQNQPqvhBFPRwUsgVF3izTM9GWxA87zPhG2BzDy",
  "key32": "5YJgTJLgJFMfxkRo2QPGrRfK3UmWdv8nNmbVcmLApojqpaz6KBXDfw5DddNq9xVmw531E8QAhiShdA2zLM3qiEBd",
  "key33": "3s8e8fsKk8iSo61w1VubA82JVBdW956xpyxr64WjnAzbmsHZP17xxawKHWUEp6xaxGxCfVAEx8wmUEEwK4ApD8sj",
  "key34": "jkHrheXjwvr18ZvZ1wik2DZyxZf4XRicZemryiBmR49qF3S5ArwtaXy93mL1RFUK6tbJisbSspq2rEsFqwaRRiv",
  "key35": "2SEwDGudipZCh4Bat3MDarj3w7irPC2m9jjqvnRUEzkCJsNMzhXpy7ts3jRBiFBfomMETRTCn6TrJDSKJRrrQC8V",
  "key36": "4unWuGNCcTZhaKVVZMWDBSdWy177cttjJPd7UjV4S8LUovZKoTVVavCzRY5Q2C2wJjeHNKRZtpVFmQQqJut8cCN9",
  "key37": "5rraNyqf5FvtZV2YxTpNgQQwujjeH68NW1LWDS7V8PZwapajhWcS7MZKizjM2muAoNLqXLqH32L4vBabkwvNpas8",
  "key38": "3myyXQagSXiTvuxufgga9qD5FJxHgQjeiEERAijTEFykrQYwV49bYkVBXFGKnnbLasjnvUxM6SsaekmFJhmR6SLS",
  "key39": "4NCv5fsaf9WeJLKtHeunbJMT2DJdngRhApzFpbJKFNjZyAUsgBrF4kpyVhCNvCLzihgktpJhN3fSDPqG5bgczze4",
  "key40": "5W9XJSpXTCzV7YBd4ztJHFAo879L2YyDgJKHdhLnGZyvLRJPMg7wZhdcWYwe2sLGa9u45hzP42veJGeyyLiarMwn",
  "key41": "BaySTNYuYSEWw3V7R4DYQu4r7vy5pFd1j5sXnFkwrFPgWm1fWrc4evgPv7g8EmJnevPGojLrbUpsTxQSCTUXcSU",
  "key42": "4uQXnmaVo7svuApvyGDyZcB9s8jjumbSU5VZjPwmPwvpH2NH3oURhtTshjGv9wHt29q6hmo9ADaK4bhiNXbfmu4y",
  "key43": "3bmjbCQSZkNJKxQkjHqVgAFeN2yfX1xzG6PN8mhYe9T3XiwYBKspU7yuxGNN69KAFQFUGgfJ5hSVTTJejzpsj5EZ",
  "key44": "5Qvh5x7fjDEgj1VcVsvdyq3KDUEcR2ADmpD4Z3udGJo1LyYag5M5gG9P7ZpFcnH5YY24EHctGStQp9B1mYGWiWhj"
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
