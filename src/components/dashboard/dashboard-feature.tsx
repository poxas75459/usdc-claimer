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
    "24CCBaysJQmYPqjf8NiTrKrsUvzXNY1WBwZfttQ78M2QejVkateuNLYZ56BYGUKduYGK9bSeQin14sjRpmQ1tHaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6bbvjcgL7rfq6GspnWW2EUSJjBPNXfeTyBphWZvtRDTVe31BtVgRVsZy7FkJde3moDcA28GZJiCxDLWFNgbzbx",
  "key1": "2mBFkzAPZoBLUWnFuSvnEyMdeDB41MXce9beq3Bq5wGDHMAStFs9tv9tc36d9fcdpMK3gAmiyW5CxW1mw5WL3MQV",
  "key2": "2BG3cmteCTEAQYcgCfbeR9ksrkQmyvx9UBziq3QPrS53T9Cf6hmjMB71YS1t22z3Vw9raa4D9pFUAybs6SLL4MxZ",
  "key3": "4s56jFPrYk8gpF6AtD9krWfF6fnGocuaBH556Evv3oWdz1pkDmrTny7uiahZCME4WxmdcRKXUR5Ywup5xsQ9fyf2",
  "key4": "2fNYv191XK2bCqAofmWAQfUhqR6jgsxkUXW7Rhx4rDHfZP1AcUJeUyjhcataZm5mX2zA5M6hfVP5nr7HqGeR3LRi",
  "key5": "APbBFaUYJtZakBf7gSzs83ggE5RTPW764aCdFwQ8pi5SvYezWgxARFAxpDszd4XtaCBkLKrStZTm8dyuUmFk63i",
  "key6": "5zB4wq6WsE4QS4qHU36DyKSCu6hnGmhNbcMM65n7mha9LUY8xgYkNPPFjMBbqiQoftsQHvQpUVzCixV5eN1SXJha",
  "key7": "5zxXr1Zgy89rk5vX3zVskzNTjAzuBjUskaLbJpGWiiDLWFfNXc3aZtr7MJ6jZKLfZiH7Sa8zyEtcSLPudjki6Gew",
  "key8": "2Nvzfi14KeX2ZRJ2uiB18w3o6NAthnEUxkfeDWSiZPw1PdA5rYv9ubw5fw1ksvAbDvdwj4s3pSTQhY7RezJmNZ6m",
  "key9": "4X3VMurudEpEEZbn1MjaA7PavoK5sTiZq4DCJhGeMwwpC5LQMc3MHJRgH15JRq9iK57jzUV4qHQqe5o8T3s6YaGp",
  "key10": "2aVfYuRyiUb8KLjoXSf9miV3P5dXqBEW3Q3CP5GKkBpXatvfkywyrvG1kcULZTZ4qARZmWgmU76mRLAdqCjrHYoS",
  "key11": "5aRbtgbRg4Ebky3sa9G5NAiquDeUZPAYppqYhN3iXRLQSogSXdbHUiSJtjQWCgnkd9NZe4ULya8Skf5AonxUtD2B",
  "key12": "66GGd6fix3rxu3WnzAZyM3X4hpRGU2hbmJ6pnwC4stEBvvxnaNxSz1iL7XcChTQYvNJvUDG6d1hgxEbdAHxav8Ko",
  "key13": "2mh6djbtqFgGi8KJZLapsccqhvJMgtysxwFALPVYrpqsxcVzpGFgku99xbNxcF526C9GwjyrDCyuDFWsDV5WpaPJ",
  "key14": "4mGL8sVxbkk7HAxmDsnrARGHTLVaX9RWjUrDA1eLk91P5R4CxpAYuRREB6FSx5A5uYvc4ZRumMaZ5jGrwWy83mgh",
  "key15": "5hwPGXo64Lm97qWZKkfRx8D6j7uGhDuaMo7aFTHG8u9V4HSwjKcEckvAecPtgQRRJqfzNWTtHwHc9ruYw84Bm5z",
  "key16": "5xY8JpXMZVoCCfsTbVX3urCigie4ya1uRhYuBuNCTQqLfhiRJSeFTtAmHshqWH1uijCiPovZUwz2LYERPE2AQxhB",
  "key17": "ZWXpqfPGr64PWH5UjVL7cpSzsjwVJAZVpbkP8guMo1UMz4Gans4jwKbhTBBxeTYzyNn1kUQeTjcVz8tf3pYYxpW",
  "key18": "xo4WdtxAYtQQGn5nviotWq8pu2XKDmoVzj65JxwZuZDiWD6T3Yhy6m8jFuvVETcpoMBCxmHKZfwKaKLYcKwHi3m",
  "key19": "3kk9wMwSBGV4KtmqkVWGyNWopo1xmovSc1BDcJv4djr6EQvoFPbbScWe42uWZZB6M3nzfNnvLdNAb8zwYetk6f2J",
  "key20": "2eYS9sMT4Y6C8KA9SH3ygmMU9ZcQaNrQz9TQU5nhDrhM3hxkNRJr5tLgvHBMB4oAznNpdgEQce9kKKaHiGNKi9jx",
  "key21": "4biaCsYPGoNcdVb4dscf27yyRf98yn4ahogiEV4gq6i7s6JKMGfaqYTejZRbKzk4ik4w6ujXYma4cQaY1UtqX4b3",
  "key22": "ACazpjLVjaDk8U3NDQwE1RediH1V2Y1V1QK4mqkBpq1KncHzV7Vb9g1ALTgRuELgYn5nzvtkisKuVk7jpfTA8rn",
  "key23": "5ZwpRvVnsxhvf6xDDVsrMddbN933EAka3QbXA9FF2g5Xc4FdLQv3tGgTfwpjgpp2RVaJ1BAVd7PiYZXKAqKKMbHn",
  "key24": "2khr4he6rqaAbxTGeA6SuMju7b5RXfKwfoySiui7XRWCwX5LTkVvZjtbwHwgh4PmFuctBd5er7fyTgaT4ofoe33a",
  "key25": "2JkuJqWygx1JD6NR3w4oQdnfcqiokAp3B4rSksLASU4BLSNJvF62Ta7rGgUvCsa11tUUendjhbThp7qPyrJokMXU",
  "key26": "2YYwMkssVXAktpNgtyt5tjt6vtgQcQ5Ykg37h3gKCGumXdj6TrqM4dArPrsXcJoqtBjRcJYbiuNmUMbbSt3Sp1cR",
  "key27": "WpJuiiZbfE3owzQDRSpL3Zs1uTQwzDxWjv3rmaHhpYxtJvuGMBwA2q89aheiAowet6JqdrtwpsRsUT3uwCsGSUD",
  "key28": "5osVJ3tZ7FhQWd4xQuosWA2CYDoMWHxzsfAHo8iXn3r2woY6a2SKE6C57WRtBiaQMpLYSw9aaKyC9mtGHTMzcDv5",
  "key29": "2sUQbzTbgMhD3MUA1k4mByzpiKdaqZV9DhHXrYau2v6TaVrqrEeZEnurggf7Tgjyvm9AoiREqN21HpyMbvujwQdP",
  "key30": "3jRsRGEsgGXht2MA37AZsUc2negqMjFaNYcZyvHt8HroukGFcfrF8E2WmDEDEr2HrjCUkuCGJ4aNo8UzuFFn9AaT",
  "key31": "S8WcXer7G7t7odBAK1GKyHf2zS6aQipMBHELuGSLWy8WTkMRJAUfsuBRg1VjV6oAZdx9zR7wjYJcgZApxofSpqG",
  "key32": "4N8vP94Gi4GiG3CDrC8zhdEQFNHTUSKETigMLqysvE2gKWcKr2NEzgeFx1CUsBMBv4ydT7dZrDP7YwyC7psycDhq",
  "key33": "5Ugrr3zgfN6V5fiL87siH11A7qtv3Zqy92a4Lj5Vg1FWMxxBa1QBhNK1pzXnA6VNfRuUNugDYinDPQcb9wYs6H8G",
  "key34": "2SE12cihiyyvs5RFkDHJp2r5ygwJPvmNTRJLN1HdFsaBr59v7Np6wFurSYpJuiFM9Hgj8k7ixLvyPHMqsu2F2dTt",
  "key35": "2NKyLCsVPhgn71WexdhGwCXFvTKLnxPVRwa2C2yoMYG8ajxDxEM1ho8K78hm5mcfH6VazikEUm4jsqeRukRNijpB",
  "key36": "5yq6JwoZQaMMZjxxppRSGGpGGMxMwnfavz6jneSpZ3XiBi4wTYW4hE3jr4hmBPGq46vt9LGUAP5X8bZYZndh62Qv",
  "key37": "3NUkPPPedQNDxfUpvL3tGbJoUapYBxHQP1q7hEzGo1KAXYTeNRZ4WpavZBP1K1roagSuUgm2yTj6jv4wz5okHzoX",
  "key38": "46fSERqZQLZoQZbyDyFirkS8UcBfaJon2b5gEZnrty5acQCLoy8GB3F9MKWFAzEmv1H1QC4Tjrryc2Lu7JLHdHWL"
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
