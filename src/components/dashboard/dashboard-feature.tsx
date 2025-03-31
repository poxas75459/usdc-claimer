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
    "5RWpUPzCodSPF1kB9nGzRkuVHKraMErqggAVuJSSWpFwdcHE3f2AgDZWnXB39Q5WtTDhyR5RucrqYuyykppno9RY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UiYnc1m6kGhzy7TuXZmcmipDUEhq12d56WoPwefbMmnYj7fPzdq4Dy8XXgEq7VKHkEBXg6iDEWrKDe5WRs466Tt",
  "key1": "51UuQCVzhKARqehH1uKyQWd22sqHyjCtx6W6Vfeq9vMYDvePoMQnX7ov3eBTKg5MVPWLt7xe674GGQiP2qBToZjK",
  "key2": "4qJbCRUPfXESEwcNhYUrjY2NdotjAYFRUBbsmVtsdJbaV5yaRHUEmwnPCEXQLYUbxw2mnR988mXrNgp9tPogwN7e",
  "key3": "KJX2PG858b7deUQugZd2LUQQ2QxBRtrRqpdcy5JeboEavGU6suLkmUBDpq9bkeVafuzc5WGF1uuMt7RjgJxCs9t",
  "key4": "iCUsmsrQdijs8ZGxJKSFDXyAx3e24K8AQEKYN1BowxkBhtJ3mFrkxwZaGa5eghEo23pQzNfkzZqYFD68L5vRmdJ",
  "key5": "5F9ukU2SUNhXp6gwgD45LtybZdq7Py9VnPiDcuznvT3aQZ665U6KJfUEKN642kiKXFhs8WqQrnrxBTg8eTAZy3kr",
  "key6": "57XnHKMKWcWjasBmtFetd3TMRp59swuuheg3dQrq2JSnunxnrh9VNpZNtgJX3Gq92paAPfw6qeJBPF6fkxzLXG7B",
  "key7": "22FZ2NdPH1HfitoXc6wbgcZvvLMxkCjb14D4oJDbFwMbR9DJFc1ytWM93u9oVp7znmJ6JEJavgrUxiwEonqNQNeE",
  "key8": "2seAjsxpJVFN65kC7vvFacXgfMW8GYuXJo7KEytkttmX2ScC9qGBeT9kA9HzvED1bkGG1y5NdZA1PzZYgc9jEBQp",
  "key9": "5is5h4evnsMTvnDcfeqr9iNsfG76uxrfDYi62AVrMtwWTD7gfC2nXudmRTYDXVp1ye9LRoLiHE2W5P68f2KHWS9C",
  "key10": "5iBvj2QyAq1qYeLuL2KQw98M1HQGHiFJfzRveqmfWJsRPDShsUBrctYvyMkz6BjKL2Qy9hELL6i4jJ4uXFEiVooj",
  "key11": "2GhG8UEe5VYuSeALMicXy5E4hXaz8bSZfXX1AM9eM5EXaoK1PjUgZsrzrWyvfC2bF9ac8eJjvixPBBQiDwZDbLci",
  "key12": "5Bjg949mmEfq25pmoawGW55ALLCmBQzTBCP66YZupjrLEc2CU3RVD5a7T9eR5fghqQxcPptTuckM7C9uNMJj4TW7",
  "key13": "266M2A7e1vd8Cgzzd23yzEfFnhgrJDviuCxEtyXE8j2aqrJy2JSDeyuVKi4fWvmsqssAVGXwsAbyM7niwgsbvb14",
  "key14": "3HxTf61wou5mGLa7naCgjiiKdqNyi3ZVsC98RbEhdiA4U46mN23xTTwX1PsTMjFAAFPWGecLSuWd6NUfrJL4u1Hh",
  "key15": "4afvkL2co2Y8AMaAigZDqMz6RtnHukzM3SbmL9DQjZ4BsboFBqVz4dC85Lkqun4PwG2kwXWuWCvVWF3HmvZHpuvj",
  "key16": "321TZ3imBdhujAfBLgt1Z6zF7BQBmCPEAnZZRJQzcg8DrC8YSxGPz2Ez7ZzEhvsQtZuaev8op9SchecNA4dEkfUG",
  "key17": "BNV5ciWzYzD9NnpPBaQqNxkh8cZvpbXqrMQBUS4pEjfnFGomMsmqyU8MPLddvW999ZmM4bnQW6evyyP5iYZc9xN",
  "key18": "UpeHXhkrvERC3Erzc4tfA8SoURcgmEe6FifcTR5Nhquwrp1GJVmBFpSbMyp1bzYqaf76zGsSjtJm9gadbSSZbVM",
  "key19": "62SjnVp7JsYoJXT7Tm6HQuxoWfzAML9DYDrzizHvpqsg78SbjgSL4G1baYTMohW9dPoVMqLUigkWjSmkL3pjnLUX",
  "key20": "4z7gqBuEw6odUTDkhBiXScYaUwgovug6w4sqmThSn3e6PXWeJjVNUQuAtqsTTC8MVHm8sX4xQFEX4rTmnK5xBX1n",
  "key21": "Zjh3pYAjKHgb1kVyTFi8EWmgAp64VKB2bj2k2UJEiATiBe3waTts1GZ7Ekx7dKrpMH9CQECxPSQc6wCMVU3xsFm",
  "key22": "2MmkbJ3KHHxZEGpkRyfPbmrJbfA8ZZmV7EmYo8nB3VuKQzQD3SCw8ML3jSGn4dwkmS3Q4gmtY28cbAwbZzxjJs8i",
  "key23": "YjdYj5K4k7RUxFC7shfxp3dGrhM5S16q2RPNeZSxUCHvA9Suze35icTzxsR5U2XXje3QHEtzeNj7PREGpZDMJ1s",
  "key24": "2TTsJHpJaeVgzbm2cvCkjsz4sTmiMzzM918hSu1uUA3gphqWC5h3APSM3b32SLWHoSE3DTQ3898Virq9URxWhS9R",
  "key25": "5YVTPhtkof4h4LBe2vjweg82g8B5rJvB1eMCo59dCAniAqNT99Hi2kzFFZ25PdjySeSAkvHnZG9wfyaNRxKGkHdU",
  "key26": "FAM4fSuCFvMuXY6dA3U6iPAuMcVD1mSRyoQpnA8PyXSnbVQonyt2zRTDTAiE6jqZ6fuAKzQFuk6DdcvSn4qLkwX",
  "key27": "3maXJTfhWGBEuE5Ene866hiQoJRhDFR5FfL7jWJ3a6byEgMKhTiKfwiwv7Xayx455khoNvPpqF7jdmELVQV11y5x",
  "key28": "3CL6yaPdWPPQ2oRUueAXUDHq7C3DeF8tbfg9roe8o3hb6k4QN24yH5tJNSUCaurNq27ekZRqWziMk6n9y4WAKKuj",
  "key29": "2yAQ17ajkp4X9UoS3pJrgLkGgeu77a2jo7ZHfGmP11S3FFCnqu6yZ5RwNDMvKxtzc14Uvn8dqsJY7qJR5gNqh8Jy",
  "key30": "5dRZAda1ciXLthcuyd8KMoed8Kv5SobCTnN6pWGZ6fZQZFa5fFd3XJFeFFarQa69mTw8TT87UWpGN7faBiCjQPJp",
  "key31": "5QG3znwFtnGkJP7v9mNK7tke6nRU4Ez6inBRFoZY9EoWpY6TeofS2hZwWLfZdTC8of7oeBykSZAfdjqxGZ9Z7HLX",
  "key32": "59gVYpg34tuJtsTGXWcffVnSKV5AfL7L7zepkfuV5K2dnsVHAPzVZKyg6sHbCdxk99x9PGWJPMBK2RUZdCH6N3C9",
  "key33": "2A84YiSGXEQ1z6UqcVrcri5dVc19mVDAfE3mp3bdR8vBG9q8ZKDrvN7EGEgifGB3TXPhVSbgj7z2GqsS3oNCMALi",
  "key34": "3jNF1hr1steNjR3gG4BjDJHXobaSgA1wbxu2WDCCvtFtwSRmXA7XABMfoetBocxVxZ6ZRhDnEiC1A6TqZPU9iEpz",
  "key35": "3TXHuUheCK6CUTpDDpWRcEKabV35nJ13frnyN7yYbKf8dRYTy9xWFC2Yw4AtRijBaJpmyZ8qs9n11exfaXPjLMvV",
  "key36": "4bPRN3W4tPoiegFPbGMEEbcatdkhfAXrtLWFeqiHq6EpFX3YeCsEJAYFRPByBrmkCmGxRR6CMvLUEyGM9yQBs6k5",
  "key37": "5Hf67623Rx9XP244RRUcLwVMdCRTcfvS2BsBwouegqsbtsmcSME19PJaJMKLHPgAg9BSeGfjeknRBB8VL4zQPoop",
  "key38": "6454B4YdGmCZ3H6P7PVmXrRzNikssWo3qYiHcBvQkmUojvXdeFQTpcPtzXtGzLHaTgc3hM7WQgAJTEtjzNDjSFcc",
  "key39": "5eDyRpdyAVdk5u2zAG8TSWouWp2mZWNVfB3tYwzCdzEr9Gx3Sj59sU6mdse5RU8M1YvvL84NfuW1xNiGyyLCdRJH",
  "key40": "5MiQRrfUVKiyTKR4DQjXLWHmKX63xFRkdAGZfgW5J9WVA19jG4dvxDNBbdLp1mrMQWCfSbJHiFsqTqAxCWAk7AkQ",
  "key41": "2PeFbmPVgz1VwmjPhuCiH5wEMH5yDVZ2qZMrZzNrdaYwTFsQgVLGxBwfwUMm62Jt8c8i5q1ZjjaGNNaY9XZkGmNT",
  "key42": "3Yf2pdQZWXWfQ1WqhnVJsvNTXKYdaWZvfVJTXxBcDVS7t9HkuHecpbGKsQ7pmayaB1y3XorhECcHBqejSnCJWfdq",
  "key43": "poMcpfyB5GvPp1XN8cZnnfCHGt7CRA6xRHdfcB51HAdtXxryct5S5nG7Pb3VJvs5PrCW5XcXdCnhmfj8Gu9bPq6",
  "key44": "31qFpRPRRq24rLGAvZRPoGjyo1QogruetQL56rsjDVgNq92ddu5MUJ1U1wDjV9vVMFbEFytc11VpYu1aKSnu9x9E",
  "key45": "5LpFouG2ZekbYHP59gDaXUn6tTtZXRm8vJ2wEMjcJRbx3eWFJpnKGw9uh3fsQYaRrcZf7vBtLfNbApDcqUdp7ipV",
  "key46": "3ztFE8oAQP21oPer58sieDY1qydY9EDKqTaLuZ1q6GXqivPzaEHGCwjd2qHJEJjiAkuTVo8Jy8qkDo7EjyJYtrMW",
  "key47": "5UKbznpWR7XKK1fxd6tmKAFHWG2tM4CXq3hW2pFoQxAU3QAHPT9EDFJahEToTiSEzDhzKYbtVXz5vwp1pfqYfAv9",
  "key48": "3ktGBHJ8LqnZm5gJn7BqQf7keBjfQEzzAjjKyhnaxmA48at1NeYrS9wEUYHu6sXHRdkqb6UncjvYaE48RDxE5eeg"
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
