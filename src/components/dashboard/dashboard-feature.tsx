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
    "2bnnz1iVfidVqKeiGJnVvm2gpZod4V2eyXwcfBtprrxKoM89yaFDNBec4i1HnXhYMnKLKRmq8Jyj6Y6s2UPJGNZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G5sXStz9XiBwc6szzkEjynv4iwHW1qBvt6G8gYvsVZBn1btPSAaXRWK2FKohXmkA9PrMvcNVHWrJUgdemKgwtfT",
  "key1": "5R13fjkDJGvHsbU8uVfs8iRnVoAEVgzrwVUAeQP5nzekn7cpXLpmHF2TTT2mRqnNTVwDJo61uG7czQZszn66gjc8",
  "key2": "tCdayx417hRh2fUoJuTh3H1Equ9qVfXMVcVK4cCRT9hT5jo8gvoR6YarcX4V4smRbjNpqwEW1yWPWkauDCxttYi",
  "key3": "3nsG6nXEWz6w6BavsK2dtPXRWmxRmY9pXoMiPqNVSX3MaYUKMDHWSeVhK7YR3pQhsAYHu4SsdYunsWnRBuRJ92WU",
  "key4": "pZV5FeQMvjQMS1a7bjKxdP1Jn9ydbUUzjraxTZwNA82Ne6dn9ZgFmazbh5NWCDpTz7ZANNBA1smYANdy8Sd6xX9",
  "key5": "3VpZUsui6ytEtEp1ENWuaScYLkkg2mGXdiwT4hHwfBgN6QTozmqBTsemLc5Cjk9w3gYnKtjGbFnsgEUcqP56XkzB",
  "key6": "3HyM3m1mWppcqUBQnzL97S87WhVQ57M3ZtVaXJiuZHrQwfYmYRiKcA7r9CPPVVuvQsTkMxH72Jh6sPTFVFXFzSdN",
  "key7": "51ZB2CHZ126QbjSCSJMdrbn7bEQAggqMKaWU2BQ1TF6UTj6agH86MuyfoMDRTkPevBTTb5XmtGjPdu1APzthPs3w",
  "key8": "4svEGDmfKbvw4dQnV3D3vkoqQ2FQ1pRoV1mg44XtFniGjvexFjqTqcYBSa6ByDsR8ACiQc6DD8vjYmxJD7U3UtKG",
  "key9": "4FFa1wxUbE4fLdUqmw5X1L9mNdDbtQLxZtfSv89zjcCBrtyUgKtnzTsJb2XjYGQHRU6JJT4wJXqEAyX8cfouZw1p",
  "key10": "YMAmAhMAUDBZxpc5x3hVvHFzbmnMyNwFbgbCQNH8Z6NxftKedu8c2RoRJJpdiBv5V7LZFBhGX5XF6z5Ux28JbNv",
  "key11": "4jTYTN9BLEGSsVaP8kNSbp8RaCb356TsnatkCaWb6v8DvinD4rHesm2eyoShymw4crJqoRap2CVYZFoUbAnH554n",
  "key12": "2CTQLe5mtuEPBmx8JsQ5GetjtMTkMSnQT3J4NhmmeNjrYtBrveqjEwCNSCk3m5srVuwQST7XnGGB7zGLxZCxyhnw",
  "key13": "3J4RAyAxfeyLHa1NUnK88z1ygsRYjcWhLodBwtbp9FnP2j6uAJvjbii25qWavKdoNNtFo1XwAQJMmjvqiSR87xE1",
  "key14": "61vz43jQdEF9ytTn9XQhKnVkJL8f9ukAVBmFq1y3XxXqkk3qQerCzyauG8n5nQJrVwamk1XPkYZp3FMKAb7xJcSD",
  "key15": "2qcZnBgDZYyxmbQ8hM5ZiqQ2exBL8xmJ7dFYTiEhPrv4hHnS6Eo2qzyG5pjR8xhNypNUX4BkykRGKXBVBaM5Wq6A",
  "key16": "5SRPhJmGnTFa6iPepNgZTVud14z2Y8G9rNzwYgYh1PhiBYcREKgNfRxat32Mx2XFYivUxYNkwgbcDBvWsB91P25n",
  "key17": "23qp5Fxv9xput1bom5wvhAeu74AUYohaSVCTuMe6xi7wqYYRhfH5z5nkyDTWQ6mEX1yUxxnKMeVSbT3b3bsh56Na",
  "key18": "458vghEkmGLg8v8L6E1PmZxrgWytjx1ofWfepeWqZm4hWXfdVPpv19MA2GDpq5gwVz6h69Mbyap2i85wZut8Xjgn",
  "key19": "hUWTuSEUiTP3ewkB9bNihu4ZiMhFqGiu3rz4AGJWhgVmTEvFotvUzn4cQptJhM1zR9XYC1VhxyNUKAozthuHzLB",
  "key20": "4zHFcf8ActnWse2zMYhKPq59TK6f6yYbBR8e1dG83obEDfH4hHRNYvULgJsACtN5a6RreCfcsBX6fivyzWrJVjtG",
  "key21": "45EXViDDiwgj25Ho6oU5abWP7akhUZpg7coviMLdsszS5Jw9JXwQ48XNrnWNG9xwmzF21x81TmSehnPBAsrwGbL7",
  "key22": "3roTZBgvu7o9f7PsumNSWJ7MJupGA6bEasNDufNtmW91GVaDMys2MGafapYAgepYGE7igM64pfSwAVfcJ1WfHnvQ",
  "key23": "4DZFuQEdJnYk8o45raVaS1SFGUFe3mXt6LJEiFurhHN6xeZwcwLPGGUAiadfNVkxdiMGoS3zVqQcPsnwZp9sVA33",
  "key24": "63DmY9qVSQ6bMGXA6qyMNow9WzbkhsGv7FUHafNSCYwCMnQ1dYKR8UKkDzz6FHeJ2X5dssUaNoaZZdcwgRd4JJ8k",
  "key25": "39SRjt41gH3yG8Yx3oSPM2hTa9u5WKaqcpcnUStztW5vQBhM47FjDfy4fX7MajQ8MaUKaw56RkKar3zrGZDbnWD",
  "key26": "9FNhScA34Yky9fKg14XBFmiGZBGH8EguoCwY9xJ88b49E3WGWCKwG5gDNgYXWwRCugPyCg5HqX1XqtneWyYD7EP",
  "key27": "48HrDuHhSaQ7QW7NFtJnyVpgGRF5BuSabntQgZiAxEPNRcuo128bGWrmDCUFoyAjHRLMVnzXBF7wyxmaTyGuvqsa",
  "key28": "5HQXkZskYXuhVZE9NC643Es1WGorrkgDmzHto4qDKZp3nGrz6w8FiwtcN1V5LNpVeQkPefg59do4FZVut8jhbiBa",
  "key29": "2CKx6H4sgo1MUyzJEb4QqSRmhSt1FWLuvU9xwAZT1JocxvijHHj18RP1eRyo7rBaQCRJqb9fgr4q8vX7ACyQc33G",
  "key30": "5NSQgAZSZxHjfafD1S3JYz9Z7dUj35gkPgYiugGYV5tprTUZomhuSuhtPEJSPVj5QFBEvBLd1ARTB7NbaqfTnD45",
  "key31": "2QRdTyFeGHtCHYhLyFgEGs7dKMTfbWjJQ7rvPSzZyiwUs8Np5b6P9LPUNx7VUF6XAFRBiDkp37AJoa5zs8EtmrnA",
  "key32": "3NwP5CwcMf2fbhjV3uLmpjYmyCcgDGZb2KwnAsc9m7fftVpMwcg1m4fZa2WFtQPEMwesPRdyEsDK87oPE2WMhFGZ",
  "key33": "5AodTrUkzzL7nQLBhMZmG4zAxWSHXgzghLexSES9Gr7gEQXG7m4Rc7Y3YvUUamUQQLAZYtxcVV6ccTUjwKxDVNS8",
  "key34": "4jfU8chWSGxp6Bai8u6eoaLFR7m4vcc7EwTfZjxVWUsMzoSbbvR8qA2SBzURBwSLwuz6Aq11srmKysgEtkaiUNmG",
  "key35": "yiZJuRN9BnYDFasfhhM2WC6p7kHVs5WZEoZdP3dM8zmF91vVpDpdmieYyM5UwM3CmUEEGgAL8sX9mZibFytnNj4",
  "key36": "2ZJewBi5qGbvRg3RQQ8rWwvefTrb1a5so5GLvp5NJ8mqnaYPUa1SUoeU5t2mw6owyFVqimFm8AgR5WVn7cafgEQ8",
  "key37": "1C3ocZNoajqcrv4GYTHosg25yBHfNR5d2bgRNUMUPatBJDLdTsonfdsiUyTzeMgoZyYqidGe9baxiXwr8AjJdJV"
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
