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
    "4qQ1FziDpc6gyi2nv6ZKkr4ECu9B7ZGrp2JvpthVjtYFQSGh7VeHn8y1Ap7sjgMmv1NNmmjZ4d73MCwh9eF8UFWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pWZXtgmBh5TEonqazsq3pSGDPe3ouhmdTyueEFApCUzbP7nFJf8nmDa8qwYeB7UyNXVJUb8s341qKJ7MJiAxHgS",
  "key1": "kwoF9i9r9MXL3w7VgUk3QmHKrojy315YJBwcuP6GrWNn1FzLQNjBs9q65yKxnvQ6pqf7HnNfxsfE1BaqLmKhwYd",
  "key2": "5VbBD6sNkix57dCQ6fpCFbqQc8btQor8j9KGksdeyWSgwKFmTgJU4LquzJ1EA3gaQEr67SodwiQcJ43rQjxGrjnZ",
  "key3": "2mgz9Pj7S517X1ngDSn5137fYktmjXFqTUxU5bwizCcRijAbCZfAJr9Gtr7SEAP8eAyS2b22rKLvWNwWR5c9n6vU",
  "key4": "3Sy21bcDcmxg5mRvuy4DnKTZ363uhzUBd9K3L3mvegcvcNPxvAyLXmzEDPGEqRkVhyRaSoBQ2QVQrSPFesBYP8xv",
  "key5": "2cDX8ydjAUAftrXoumpzqV9cNMLXizNfcwdcCT3q7mAxbCxWHLgUiLcXK54HRhhCnQfN25mqzaq1d8nfBtVjfqXL",
  "key6": "2PG53iPgibQKzeeiyEWwYvGQ3rmUJkbgKiSBLS38kbWCqyyToKqEAixKUgteSXrCUWeDj2oEp5ue8PeHhJooKyor",
  "key7": "4itDQyJJ95J4KxbdrGN6myCjVyBPqFhP4eLJHNdwZTFpKzxkvigjeqpKW8dqKJJMS4CiQAxhjLD6cGGNbvHCDRBu",
  "key8": "2FZiZDMLdBBBZcULwU8ybbAJdTYjggqMqJp17g1XgbZDhu8HejLnLnZBjXg1AFbHMFbUspRPf5QHzR82pmLbvC4c",
  "key9": "3AvvEzKj8LbeY3eiCWREoEbarCNWWiq1VrY8rbSgig3kQdzf5gihS6cWvAhKX7tAJjU33x7fPHsrkcXTgicagZKb",
  "key10": "qVqr6ABDzSGmg4HkZwG351fHLkxeqva8EC6JJ6NFE932v3qsC3n9XSrbYcHQcxQFDf1f1s5Wyj4Wd2peutDW1WF",
  "key11": "5mQB2oQ7UPWjeAUhcerfuQkLnsNuAAif2kvy8SaF6zcCgxBcMaYZV19LyhpearNmkcCpznEXtFJkNKtWyHogeqB6",
  "key12": "2SQo4ahMiAYHoY9yhuKLn6ZSGXiyGDUrnjDo5fPjXg2GyMH3RXhZbLbzfYeRjVGWk4bMHVQaPfacMG57dv3Cqhg3",
  "key13": "2wHYYbLCh5cHkKRpkVLpJwqHYw6jjFYJpepiU42yNXzDovAJe3R6bmEgxZbYS3Qet2SsjAvQc73siqAqzB8jFMZv",
  "key14": "4yJP77wNths81EgQyy6vxcvXLqVoByopEZYftAheFttLAnQUM2EZC4W4mhCR4zbUmPrz492TnkHQJ6DZC5H3tMkP",
  "key15": "37BAR87jzRwsP9dudMPcGj5xJYapz8DzVvTYPwJYRays3PTrVMwaGZAnrd9wjesP7De3G5VdqoS8bhDmJDiaKWjB",
  "key16": "234gEPS9YjJo7nsnVTtf7n72fBZgUirtVppggzGWySqeFf5y1QfXeaZLxDWhVugNo4Jhtyta77siLahUoiF7hpDB",
  "key17": "4VspAhfjQRQVixpTvnCt1e52x85i1d241PB7HR1YFPHPDnDTELa5gk6Te99WU1hb4qbuK2Z9v2wj2kRd9yoW67bN",
  "key18": "39X7PCCzqbNcvhTmYuGHmcwZ8KaEN9Dsve9mnWJFaiEAC3xhV86a3kBVzhg6YH5o12bPiv7Pzv1BdabhjT35raa",
  "key19": "3gHi9RBDVFSyctiyCcNW3Xnm6g9nZu8CDTw9328RgYbhyN7toUY7vbipLesgCxrHm3GevXRdDXg8PsoArdfWwkCF",
  "key20": "2LFGSRE8DyfFL34zgvtsSDjMnEhct2T3g6Eg4Gw6qieCfG1SRApJyZwdfLnfpp4Vx7PQLLeuJmU3XgjTJ7k1WkZH",
  "key21": "2otzs91zjYtz8KTS3N8LW2uhQ9vk3f7qYXiAiAwgD8x2zzEa5Bh2fmxWnfJ5YwHtgjFXYrKNEBZZujvHX9Xv23E",
  "key22": "3JLJmjMxPxH6rteN5Gtyuxpi4S8SecU3u1hoiDRqFB35GbSAWju7rYUgzevhJirhEVGiCEwA9WYVSKaVh5JF6kfx",
  "key23": "2NgHCotEjmXLm7PibT3CS96Hvxq13jw3K12fYuiFaV3fx2W9zX4m9nDL6tsyj6RZji3Tu3weHo7rY6quuPwmJ4rk",
  "key24": "2L8ySegNLXetqujnMm41i6pNtXBYgGgzrav8cfih8uqmVV56KPzhQQoBRp9yvbBXycVbS2XbBscUBaRFsVhJmorv",
  "key25": "4mSEYn3GLZqAaXvwtUYsZExdmJAMd7ir91NgiLVykingVWx47UeW1o8HYRsPeD9qBBgFtszyZvzycLwFkqBcFLZe",
  "key26": "QPKTVM9FBdPWG36arpUvgY9gifFNXuqpQUYcULjom6tR8wpiVtMd9ARnEbtDwei8wgtsAbuovqjbVytUWaQspGK",
  "key27": "5oPCw3gqcmcanZGpMCrbc2pKxaeCbdSRuLK78E5rXabZmMeeAVLVYbPjtHaJ5DuJ4tsF6yBZ1pWq8ALPYXpr9mGw",
  "key28": "62VPRSsRKDCdNS7Yzj1YZs6aDLTzihzZhArJsSvodChJxfsaPHhsyVL6TM7r68cFPk8Xv1TP9sQMkasN4Wjsj971",
  "key29": "2o4NLwV52RcE7vVEsviodGsjZ3hYTvVtBVbRsrjmRDPQ9iBUwu2c7rgsxGFEVfFqPFMHmR8G5HXZqoex8zZpQ7yg",
  "key30": "3gEF7iZ3yciCJEqThNo7k3cpmgTZq5vLaLAaRv6g6rpiXdSnsCNdkoqQ4ivxxVyrXnqgKPLBX4i3QtApWxTBxSZN",
  "key31": "4xk8iNLxB7zhYm7Yozca9vwRre8sDwYm7e9qNkuXn3BZNYi17tQ9nteSUHkYeDCE4SEpLHyFjb9yxqSCgGE7QxJz",
  "key32": "8bubxinGH7d29ifPNYaUpdqiqoaPT9agcLGcrhgdzvVWK7RsCqgiupviUpEsqSrioX9hSByaHGFWRv8SxNGz2DE",
  "key33": "2EGchr6tnBkwAvJZmKouKgVgcmDnMnZngu6SUWTPCm5aXbogPYQb6ut1kU5iDP7ywK9nD5Nu2XapwAy1eW3Jd7tB",
  "key34": "5rLF3L3eVQJhn3ZB1oazip8QQ5yyTjiXezh1x9u8vFnrZxDANncXDXqSzJoZzoUZgi7Rfau6QmR8JBT4rHXgPFBB",
  "key35": "5RY3LwBfc6Yj5u5CnLn3TL7UNTdXv9JAwQk8Cyuyk5sZxCWBcgag417hFz3U9wkACtSgznZGgaJ1Sd6bDUEXLve7",
  "key36": "dUojjgr3JQfXMdxTDRQMCA9e6nREofVuTXM8UqwwZLLgu3VzeoXzGyHTKBjnwREY32QCFzvpK8SwdHHTy1HyMck",
  "key37": "42kikxF5Ng3cUqE3iAiNJX6qEu1zwEFHdhuyFMzb1k1gz5steh8YZQqigSCiuR1m2HJWKtzCPANHbTWBYXxwcXrM",
  "key38": "oDy3vSR8N2FSddXP32JJnvCkUECtj9dRfXRS2Ls2UxDsA9uUE2ENDeXC85Egq5Bxy8KQdSfQDvERBK21ViD5ZJm",
  "key39": "ajq1ARGqJEByk3Nndr7JZFF5ERRNa8468iagh9TAriTVGX8mwQ1ETcsfjRVKgL1YwhrbCmKBiXyZcTyaRVnxVUW",
  "key40": "3yhPbFLr4pRCP7E1ieihW5L4QYarKQnpLs6uwXrY2Zn7vJGQomTKPCnZeHkqkTNYJpuWkY5rp2TqVDQFsQPC3xVk",
  "key41": "62WUooRT1EQxZRSkrv6kEpKTu6hmKhEMjVEykVoosqVWX7ExzvfpLaoGsY8tJPGr3YPihzhoh7q9EZBtBvmcd4go",
  "key42": "5paNLanJ3SnhZGLxyf61ikgkAsQNSGuKbJibwYyXyHiHL2CbYPTNnMT9Gck7nYU4uCX3wkXZH7Pe3bb6WNgUVxiw",
  "key43": "2Wd3gh89cFe1oNXnN6DNRcUbTKUkqpUieQTgmv6bGw1Fr6GqsgprGSXkEYuKRv2cgx6DkMHfGFYSAP9NtwxZmye5",
  "key44": "47humE1tzS9rQmswybCCxDv1L4FF4sCgfgRsMfaxnoSXT8GVk63HHxLt8rgP1TY1KLTR6WJY3phV9ZyUNQyfYxSs"
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
