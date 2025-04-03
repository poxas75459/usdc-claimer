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
    "52Ciqmr86MgPH4as2WXjkhYvM4jaXf9J3bSbnZ6twei5XQygKDAJaYVjUfMgfUq1253dWr2W6mVP2XtSNYWB563n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oa6ATCxg4wLDQPMGXrhpoWCWYBz8tLFMKqKc65ZC9NJJTAvm7FcjPQc71ryFmSGm3vpocfJXZExPshT9ZQrSEid",
  "key1": "45gYvEaJ47BxcbKXYu7pYbm1uzj6Ws48wXVvrkC3vMTeAMRDHSQHCryTNDhb8cUqCZskwcNYqRbsS43FN8c5gooE",
  "key2": "5RfJ1H4oSaUGD9HUjx7r4pRnGLWPS6Hq3wvi2BrCF7xZn6ARd8Gm34wb28vY2WT5iAFG5omSS5UHeXPUfYVfkuVr",
  "key3": "39Tpx22hreYou6qXexx9v9twVJiD3oFcQfUW2R4wSTZYjCMAMyxuoafX2qMJbFwEtfWyVxVHJx2NS1dmYcy5M1Gz",
  "key4": "4fRLXn3kPkR57L7su3xr7qdbCvmJbFCd8yx1nkG6B35fmJRqjhRQb4A7ZVkfr8Pd5eFpUb1FVDQAndDXyWVbBHsT",
  "key5": "47tANZnKZcuXayKFzS9QUYoWmAVZG1jSrKJwwbKG1iGevex5xBGqeoShHK5Wedvrnpwbd4j7znrTmRHUF8BDZqvH",
  "key6": "mRgZgi1LwoDybHA8fFmBXf3iY3r562PoaXZ7QobECxJUVVx1GdhYGFJiJ6rPT6bjuwdv9DwLy3iGKp3qnwZcmED",
  "key7": "4buMVbakdu8BBkp4ZwH7ofvkvfyYYEsFtbWXRtCfPNyg7cke5ahpseCGubHAGyokWPzM7YYC4LypE7QYPNh2Vjz6",
  "key8": "2PihWvNS7rvktcyEfEKWEjsxmb7JNpmpXZ1rbq3HXAYehYkrcFvAaQ4znJnJLwv9qTBr61f8QsA5dLt6gEvvwJk2",
  "key9": "5Dhciez4yCinf7co87iW5MzmF7wMbMEH572v767eTuqzBMXnvo6nNY684mmt7jmk8NMi9qcfLxcmsDNaEWrLxGgF",
  "key10": "2Jb4rDwfyZ9M5rnJTmhm3ACmapbotDCS3fnt8gEPHhsfECdRUDjRbtA92Zn9D9JYxvc42w2AKhYgvTPuzHnwgwm8",
  "key11": "2yYgGuwoDTsptaeY9uuNpjULzF2EnVrGgrVnxWCW1jDHopm3FBzpUd3Y51tEtczYMapc8y4eYgqbWdBtTv6MM1jg",
  "key12": "9LLPKK13WSm7RDUKWBnMLuGpvb4EG7BihBASeNzM3zZNMt3ffW5gLFyYvrnFT2jdkA1pS8e48JZAuawF5r4drZU",
  "key13": "5cBC8SmkcrTEDXA84XaKbVdLFPLns6ceatMQtosDD5hhM2d579zmPK2Jhh371qicMWFcqnH3BPPR3QCSPTMDEE5r",
  "key14": "61mk5u1FntrE7t6uQe8AzCn44HVfQJktqnJxkTzCb18xv9DpyN8ZkKTb29FwsqhzMjbFeoNQQAnGgkj5sJ5iuY9F",
  "key15": "RKzxKzYYKSbfrKWNNiGfXhcXDFK9JSykirUdHWohkxXA6KcTpXpK69yecuvCVujV9qTEbfE4PMeLthwwMfrtzL2",
  "key16": "5AemjimFGkaa9A12m6nYcgknPqTafQspeHpksPbkWoDFpbwtPtkb4jzKWjp78WhJHqqazC1p4uc5KgLvcwLY3zE6",
  "key17": "2kP9qZrcRHAZeZ8VPo2kya2XADtvfoFDKSDPJYzwrnoJST3RRWBSC8Z23hhNRtWSiVxPDt1FMJ1968NqXDDAodZA",
  "key18": "tqsefgvtxo7boWxpeC5wty5SNNdhmnKEqccd4JEGvHHucSwqKsQ41A4srDcD3Bi1Mk6DbBYZH9xhQ2oibYTAAD9",
  "key19": "XPQL4RZEuc9UG49pxjkfuuCWZnko1J8igURYkbBdX2Va8MGnyj4Ftk2Sxzr5kmNPvJ7QvnHcrip5CNGMPnVTejX",
  "key20": "q3KwDQ4zjjdi4YZvQsgcbhxiAq9jseHWqWMUsdZNyH5PXfBPcfi2wSNC81zNX26SeYgStb6zcMAwyJBjXQeJXnV",
  "key21": "3ww5jkmrm6RPZnBBALjPJKmnAqtVTQqY5RxkamyqQDkcnK4m6MpFT8PicRUyuMEJ1wNUEWwfjJfvjmjSC6Sv64zX",
  "key22": "66ahyHhBWDTH5NswcEuC7WHmE7cy7F2JcR1jaw7ULPUhciyDeCyJuwVQd3T3jALNTcQnbeeZt8dWoYPWnUW6dJeY",
  "key23": "4mcyPmkQRetkixi8Tz5CheE7XxJ7qQPNny6XN5XjMAJvMWDprSJ45t239PWkcL6Fn3WAWzea48W1bQstrLCLUCt9",
  "key24": "5A9DJaUJXkXr4YtEhSstALDGXAMWMEK5U9MsUkofMNrhCBqxicBqjpLUzY9QiUx7HWCT8q3jwVKSWzKHo2CAP2CM",
  "key25": "2he6Cu2WxydVgC1MPfUt1K9har5a94LS3CL8iG8gMEjqbzhvGSS3mqBQ3pGrBATtKnypkWeFjehZrVw8fqMbxRxp",
  "key26": "2sPukY99uW6W8UF5tMSJNUUPuMVeXDBKS3fiZc9yY274z9bdUqX2cEfDEVKk6QDrmRPTi3tGGALgGcRxA3xtE2ju",
  "key27": "3PsMkoMGa28ftHbpaiDWwfde5nqg4o5kx37vajvfEK8WsWw68e84JZEQSDnJnBHZVXq86Ghb5He8qATDiWUYHWZk",
  "key28": "2X7dLuGmNfuEfJgz9cRvxGeHEY57wQgbz6W3pYmrEj8pWnUGdUU7bTc9nGnBKeNTK89BQpJQmTesXEczzBpHxxaa",
  "key29": "3Sj5NNvW688KXPZ4b9xYbctsGhBHjmAiYhuGLKy8bdxCiMnPZbZDoHjLiBbRF7p94ZQcFDuLZYX1Cawk67EKE8ga",
  "key30": "3TVTU4PLLsdfH2ALT1edo9x2h1evPSaxs1Pz2EgqJsthftmxuSWrm31T3emcyquf3iheKNbk5Wy61jZyqbEHSvqv",
  "key31": "r1BFVGLgdYsacuT1jnR2mJZAXUNJC8fqarh3YNveHgVMgapJruqq4tJ5XhepA2wbq9DsdhDxq37dbqoNtXxhc7K",
  "key32": "5wbEHvAfuZfHU2ZEJAfoWomGpqzjWKNPxjsGYtamHP9y1d2x6h1MUAp7pSGneePMEKCmLS7a8wGvUyFKAAbYnFpA",
  "key33": "4tdsjxPpNiFpQZUyVZnN3v2gz6RCQUxHFHAapxkgTNXZTZWsB41Uyj1i4ez2x81ENt17SjEuFLS8jpNPeEtgxniX",
  "key34": "5iAx6br92KvBHaRmcfFb3xA3DzgG8cxW3isVvp3TPyvRH2CertHJoXvzEH8FGnqJ37Ju1jP6QYKmZKqWFM8UCLCX",
  "key35": "45FJkFGmxhEXzounSztexdNL5Kp3ARxDtPTJsfXipx8JKQaDrZuB6Nsiah6j5TeZxzepbSPcWgLSgdMKQtBkhcZr",
  "key36": "5B7Rfy34nBeTaRD2qj6hxFUfKngPvtXRxmfYcqUuJwQbmZMqsfcGHBvXdhS28oWuFxREbQppMzuYHgWDMUAmFJsM",
  "key37": "qLogErjUTrMpUUef4dE43HqnnuMu3HpDSRxKQez6LqZSS2gbA6ar2nQttu4NmPrAYDDD3g9vP6wVTp83XvPyWYE",
  "key38": "p2fUj31hLeP3kVUiHQ9Z5JbjDLbVLm71wMcY7aMNQbRe5UP4mxHfSB8wGQxcefBk1Civ7ZVHA52xXdfeK6RWXud",
  "key39": "3dNL8J1omQpDEG9FfZpZWPinYmJbYhFsxiqoPEqziWTyVJ9U38yiZ9ZzVsCXnvpLJkSj5mqjoDWPE9tQ1XZQFBR9",
  "key40": "2bpJag3fGsHqvh2tFWVeWP593qCbqPJx7FPe2uKchkReUyDNm3xBvTZwgoMw6g6xYM9g9mjpZJv4r4NyaDCEMUgT",
  "key41": "xcaAKydee4F8Y35rjfEX6Zn1ha9QcyobweA898cqJogPZfQxZ9rqxcAXWoKASLBZpMvezhw1JNJ9dHqV9YFjfNi",
  "key42": "2nzT8KXDorwRAbNXALqWbF61Q8J6MyfDV6sAGDzd8R21vLLab57XWKKk8gKcSdZujP8orgoL9jwjb5EoomrkxcU5",
  "key43": "4rtC1V5ktaxy7frBvmxtE3h5nTaZVca8fdQYQ3TFgLXCTWSY2oyDQgmbcPxdHVARnQxmLNWURGdX6VzHdKJoYWw7"
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
