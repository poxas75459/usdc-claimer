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
    "6t3cZxuahH4gFWxNdJZEbHqavNryw4CUDSnHLY98Arn95LstD8GkrVM2YcVWoTwb2fHTqQrhRoYZ55Zan99DWbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEHS2URxSQbrJnWAdmYQo6eggccULn3apJQgFP5Rz7U8fTGKrjoP4hfm6wwNL46pjGXdUo6fNjZAyD8dVpTWtTX",
  "key1": "36Sms6RFmD1S7bkwMnbxhCougPF3hXcBjeWrw39Fa8FmRqFtM7CGDRDZ4Lzykpsm6QkPUAFCid2sHsayqhEDkAc5",
  "key2": "3SRDxCkSQnEoS6hT3vsvT4XmmZDhERaiFWVubKAdQeKUHFGZv8PLNdmXEde7YJTjWXyDLBMmrWpYaFyAr751QhmB",
  "key3": "3AtpaBWK9Th4zj6rppu4bywkidGRe6zRT1sgao7VV6T7UNabsf524Xrcp7ydDiGWg3EAbYQTDcruoehsgmuxXEcz",
  "key4": "5j31862Hdaskrgs6qxUtTpUbQBw3E9AyyhwjGoL8sQaTCWp5y6NU64vsMoS1Rusye9Y7F3ee3DicekV9taZeUnfy",
  "key5": "csydED4CyoyKniALGfwxvTWwPKhQHUrDgR5ZPdkXy921JJajrLgTJL6Ut8omoUA9YPwQ842fcF7EenCiXe2f91F",
  "key6": "678W3dr3CYarskFMRRVKLp1nwtkciv33a9uXuUsvhkFMQVNUGErBQe2VZivKpgspaQWZpL16aw9WphLt3k3mt8Tr",
  "key7": "2FGi5LwNa8EvWXTpwAwHRvjN7FLEsFn68eaxaQmtQbfMgCb33tV511yfyXhBPPFSmkN543iTK9F5zXg9PqLJa8FD",
  "key8": "2GmgbjW7cWuBxYBCVXYeRsbWvGGwwN5q7L4xJSTUkrA9rpBJuaHk6p7aJKKrtPzk2p3iLNiSTQEgwrBHZ5UVfita",
  "key9": "4rffQNEM7p3XX1X5D4589vU9aDJSfSsV4isAohFvqbXmJusqsr7EjJG5W4BALPgvhqe5gQfvBcPUFYAY8wmiR7uW",
  "key10": "5GWxeG1UaeohE7y7pN9WJfmCYZLZgQpo552we4aK2349z17zcZvpRuVe7rj1UGauzqwTSJTghcJFvghRfiWCpnXP",
  "key11": "5sHkg3GSqvRbMgyBsG8B81K1qugGUBBDz5Ghj5HYvJNSgE83SYCQVuyvmqxtp9vS9gpkvziVH4tJKNPsPPbYnVPX",
  "key12": "5L1wkBHosvC1UH3nVa7qsKDsX7VjX6Tya9oLjSDR6fDkuVqrVNUp6R8ou7VCCqpFaiEphDct73qcrg1BvJf7GHZV",
  "key13": "2bJLUp9Yz4uZkuZ3CQpPufvW16jTg9Q7Mui8xpLnzqyTbMhCVFprrFZAvXan8KcWatW4oyhXEWiuJ2C2NoNEAKd5",
  "key14": "tWkeJSgNHNTcNNrpTnHviMSRyBBP3Xvph2wmA4cUEuyC3X2rLbj61ALQRauunKiBEr1627krvmLAi5NZ8RaRW5p",
  "key15": "N9KCprLHuLT5FyENLJL7koGycKyM8sYnRYhMM694C46xBZXLu8zDBoHPeZYDvS6k9GApzWwjAtPbDfsVV6Z4f8T",
  "key16": "3yQJJVrCzCwQW2jYJnjEVBy5xwALC8ZUYLe4bp4dXqyyCSgLce4QF3hR9Stc8SsfKqF5HKBVgGpw9kmTcMT3y7ER",
  "key17": "mknbryE8aC2aSbTyYc9iLXALkHomsinKkPmWUXkW9zhpwbh1cBextWLWmonYmgkBkXiVSBfmUDH6tKcJ13jzHGG",
  "key18": "2Dg9mHTXAxPLc5RrwTrPLTs9deycqXuc7YKHCbf6sd8q9Er7YRDqtdBdQNcZQ9RBrdDtSLb6wrNdujFSmPPu33Z6",
  "key19": "3ombziSxmGdmzBQ3DvPCSZ9g1cNr9W4sQWRqGqxmwuHSsqGEvstVPAwY5KiuwfYdikbzziJxa1NF7xjR6sFUxEEt",
  "key20": "95GE8rkougEqMntMaJjVDsfqkgST4f6cpnk7uMF8NswWuKjBvA3UCu6qwxcqYTCJxbY9j9yaNZemf664qmZK9mr",
  "key21": "3KsKAJgtUjvQDnaL3by4icGSFDow6y2DFEzHbLry6rXJchUcBEWMiKCpp1DpGsx7d5iaBBsRKFarWwdvHiwMq8i5",
  "key22": "4QGR5WWTk46PQ4yyigKbzmBJ6ZLrrdziD9B2N9EToAFVhd4CiUg3cNYbiXxmkxLuCzZCzTmfcHnn5nQXSLZQJLCQ",
  "key23": "5W26f85zSMKhnbhoY2GYcKHeXPXBFscTCYByt1zhiR7ph2ovxFRp7TuNdv31xxsuxJisNymgFkGkJeLfErBYp9rm",
  "key24": "qXiqboqUFfFZngyHgTyudiLGxfv6RqS7nWC9ScNARpVJzcegRZ41314kvovkfYGaF61TwtAVewCpKW5ZEe7hRth",
  "key25": "3YDkSfoHK2Kcc59R3JWuH6xFc2axe65yoBrYJHMvLBzF197UyJgfereHmLJRBwbvjnDxK6jbPXFykumb95prbewd",
  "key26": "3rJwgdc8ezVPLyqNFhbLf1bCnxNjsYwzi5wecMtNmZe4z3TdpzNxgojU4eaHMnY76ATS9Lw1rqE4DLCMhUWZWU96",
  "key27": "qUrvxj8WXdCAjvm25Zn4FwDgcebr27PyMLsKivykAdZX4vFa7ZP7VP3PUVyEcCD7MvfNqgLxQjNBkanndNUagqg",
  "key28": "3RKTuVaeoxmdT4m8Xj7i9UAbgGJtgrzLbzGrKReQekyZm8G4zzfTws2WaSxMpM7xVH5TDJGXTK895HgpWHLXYr7W",
  "key29": "2ERfGwYuijaBeDffjKYdFX9xcaLZfPr6uY2R9jsDqyWoxJbqxDERPas3U9nyVkE37KxMGFJcWHDryRpteUuXyfbk",
  "key30": "2LEpFhj9phVXkZxEw1FH5yVP2tP1QGmxg8SDKBGZQGRENoevTCFv56VdR4SnPfC2BimCX5jwhvJyeAUgomwMGB67",
  "key31": "2UA13ogDz31LvqUz9KMAcy8dMVVMHyyhrEcLQqQ5SGoEiAqrcZpeDdMGfrmoyjNXsBAVuNpPRWuY1HfarDMMPF4X",
  "key32": "4JB9aQEseFHPSV5jwik8SLF7ZZctjYCbmJumzK5PmMDXXRGTbUwmgqZwJWYWZGuAnmDt3VhjWmj6jcuah2emQgit",
  "key33": "4U7h8WJXw6XoSdrZA9ThNjsU4PRQngJPCFeMYKuxgTvkcgnMs1hzoow5559svbSiexeLPUJxJQoVn5LynkVzuetM",
  "key34": "d6G3eaDCgH4Ckx5ZBq35zkBC3FEiNA138Ye4cZzheYwWqvqELzxLgRRkmaHyTxkhCV3SStTnMQjZhNYuPpvvytx",
  "key35": "2kv3TonDXM7zGTp21ZWrereyCRHKQF76vACBWtXYmvhwtj17Pu25nRP9EnWfTL5S83fJMMCJmiHTVJYmLZ5jv4Xw",
  "key36": "5mbFn4HGminYkceViF8eXrwNm2y7vp1VAaekFF7ZbJADYfrupepA9vdtoa3e7ApuZGa3NK1etyUu5a2a7YNrdRTc",
  "key37": "3MKcSseMq3fDMkKypf8tUR6zEQGvP7nSJtSqRKsJJknYwnJY5E1W1VJGne2RfzGWiq9fz2LwnEEza4v2oszm3fHG",
  "key38": "5ot5mZMB8SWC8Hp8nADNEZ55FaYsDds8BVUKy67BqfcBDkPtsYLBiqg3HxziorQJGjqzazgSxTyaZsAsAmEqEpi4",
  "key39": "5qdaXitb4WBQqYAd9qE5PvZ6yf9ueudEKhb22eyzsFwdf625TrBDQjRVXwvxBDia5LjhgA4ynXkX6gvUqKcR92nJ"
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
