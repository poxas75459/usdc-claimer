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
    "4Dt5GvVRbzZPj69A8EAhdYSZEMys56Gq7LfGnZJmSkwEtdbFzDwrzwcizVCaFC5EjaCC1B99su9iMNbkwgR8M1oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ApXBZ3M42RUqQdspNWSb8CTQgomhV3H1jZyVMragdZirzYhqrSR6p5pTTRadhJS2Z7aq3LBDMnaidnpLqv1SYje",
  "key1": "27HHLLUeoWUQSLN2Rb6ufM5PcusmEzFn4NHeMxQue6q3bRCHspDusbtiH8yDNoChbgmapjnU1ywtFVvu9bMiiTYn",
  "key2": "2YxoaDsVwLfohv9c6Ki9a3ypby1k6jQZNnq72GcvmijED2drYZF8fyCig5nsKfimaRcDqNMdb33LhJtXX231YgTa",
  "key3": "59VUQAPGdrnPyDDmAFT7AKHjNReJFb263sdkgFXrM8wLjVQcWy6BNtKVqBx91BMqTPaBaTB5fiQJnBWEQwytYL86",
  "key4": "24C8dm7MXpbmGHuyeiv6quJXbHq9g3Pg2uXJvAfM9Tm1MiEVs3f4SxnXLgPJr7jiiroyPhyDQi1RQHnxHFijSk5y",
  "key5": "4qVpkEpGuB94RprzLX3r6ifJMBWhRDBvbwRgtUizF5dD1MTgMp5mZisiVJ31SpH2x13BzccYJD5aS4CxqQ3ya29n",
  "key6": "5HQhmK7uRdEcZHWhcqj6cdw7TNhGoYivNtpvLnnDeuJzy9C5SLRqDA7sxXMzQtywqeVor2w9cU2D4qUdbDyTCdjm",
  "key7": "5F7fZn1UYwMbgSgNFdgrgJo7cKk6NjVToBAsSNeGCfA3zxR8sRaezJuHSoCUuim5gs8w8H4FeDtcFgE75qgDQhms",
  "key8": "5EPKyxAAqXbCui2FuaTNU8eZAvwuhtswitf7vLYXPSnnYyfNoVMwo77EftyNjyhRUpKGEZ7rDLC1UAbjQMb9868U",
  "key9": "2Qzc8BQ5SJJRPYjaGC8W13hUGvZCY6UTxVSfjPvzrR6duaFvq8nb3b9bpjtkfdJessaQofVCpgpUazB29PhnD2Nu",
  "key10": "2SxYTJxfbZiXigyDnLw57rx6TJN8hsuXx7tU3sTjbqF5s3eHhHo8juQnWvkS2m5TdJfXYNSdw6NHj6mkACSCapYZ",
  "key11": "4bkAsS9soPQfgwtftLW3ohuCYADcARbfNyPyaiu2WcwALBoL1r8cRkaCGY2i8s7mK1mF9xGB4GUaWY2QJeXp3tXC",
  "key12": "obA9RUHvAt7EGL24ucWBzYfqMUi9U9LDsjnn1H1cUUTxed8YztA8PwNM5cocAp8zgt5EtXN3DacrEECRBeAJjq1",
  "key13": "2tQro1BraR8Wo49qnAC1hd1WZBX1aLkYDXMSDKwxagSmgWdwsFjvzHJ5GoN7wjwJJiHqTXgZkdYCYCiQhS71yoVP",
  "key14": "5vqR6Mc47BhUnzavSaojDY5UBAvym7kZ57evq8xVPpZhsj9ciWRt2dqx9nHaXpizCCBWUQFoWSqdyYpJZrc3kypN",
  "key15": "3QrSLiDXTZejDLFF4UTHegkaeYAxprCH3gd9epCh7daAMj2HJLHrCxgE5sysymxq1wtaDAeEebvaG4zDbw1beJnT",
  "key16": "4NLySXRv9kwvFWPvTerEEU8kknxTQA52DrpueQ2JQ4xBXYRrFSTJg7feZGKXqbrWH1abrfEtzhZYY5Nw4zGD2uxv",
  "key17": "2qvashyccHSn7PJ7psuFGidZobjGJ8CBvF5CYpfsqtyJb6fzJgXrmCRoWyniXFgU2ApxDbUsssctb7LcS8BhTD6q",
  "key18": "gQd3afSxeT3jgR2JBL4Gz5qFgzdHLy5Q5F3TG9qnGnzEeDZkrK39a8J3unxUzt8sahguERiTjWX73Akjfs6CobG",
  "key19": "5oykctTkF9MBR4WUnHUyjSYeuKmqQPcPknEuT3sGuLdN8LVSjCjantSWjMyGevFNKUCus53GezH1yEpiR6SHgWPu",
  "key20": "32zhkxKCQ3V9gZLxgqw8caSfduT3myytsS4Vwh21o6d7wUhHyUZqjEy4sfxKMnpZfCE7LVVhtHTrE1xZfJzxy65L",
  "key21": "4TziyDwTBaWmKPr3Zum2i9NPrk6qXVQoNe1GPmCkU2xrtUzQWJ1qFuxkJdHqWz248pE6XYRhkkGhMaTmBymsEbvD",
  "key22": "5u9q7VWTg9ksuWEtgGTrBtiC7PeZzB6EVbTLV8SmDi4SkUnHHawUAxpCuX3QtG6WgNVEJfhAE1W8HBBtxwvL2KW5",
  "key23": "Vy31rWQMq3R2U5rgEHC5U46Hje1ahAMMYFSEXsau6hjvzkdf1tMgCWKA4hpjE3Z1pDwj9dycdfrfetz1tHs3Arm",
  "key24": "5W2koX5sGE38Kz1es4D1ZyN3jWhn5bf7oVHdPsKTk8uEUCkjFgRUaAKeQW7Rs3JoFPj1NYJqBYU6JZSdyPkjVUkU",
  "key25": "DS27VFb3wRZzWPrwZtD9SsF5D6kroqW68nUH2pmn63xwoxfmd1Foz4FEiQEXVBPbY1YRTGkG3dV3CDkKgzL24kT",
  "key26": "42zoeSd1krBCSoPyZaSEbJm3TspFeNUeJisdKxqLvAKSph9wFmQRNb1NCDgTKwRuyc7Q3h7APdo9Ja4au4jtEGXA",
  "key27": "16wrWCQQdLHfoHx2cwR4wWS9NhLQvZHHswfiS8mfjdkmZRML4jvm4Uwc5xMGb7DY4M6DBWm97EeJe2h3n6f51sq",
  "key28": "6k5QixdZDbDs1HVHZkSqp34BrSrav4XDrkAzBZbatcFa5SozkermXiF7MyVXELGxDYaFGXwRuQtvfLdS2Xb1QnV",
  "key29": "3tEsY5VWyCu4RDDzwV18nHmo8sTyqxmT7VYYNT8uqyQ7xNzrv9qTghiwsBdodeQpv52RCm57jiC2SoFxz7Fxv378",
  "key30": "N3zH3qqrzdrZwUR25d6WFhjnLkGVecUSiZH1tqJ7GScPpR1r6R73GTWf5mNxqkFPb3bZVyRfnA6VhMZ97yLaZxT",
  "key31": "T7dm6qD1cU6jYcVjpSjsP7WXhKiyet1143crEbhavgrmufeRfAQP6vvGFnvVN48ZgNc6f9AiNAnBTXQTieuVJVK",
  "key32": "59BY73hajaGsTvSRLMPo9Q4hJMqqzeBBhvUwfgwNacyPVDsx7zrDtmEjzCUVUn4WZWvu97ES6ak7YkXPx7KMYkaS",
  "key33": "5kVKVDxFv6EyrfhgroSGtz8H6E8DUruhpJui3jf3QKKFKaC37g5PM25xAPPgUdiyoJ1tpxVDFGjHBQPkp4dnNDiS",
  "key34": "24VtCVWW7P5W4ZFdFSUfj4M3bAhjz27swbERSirqQRtvj47dRktPPQ761jxN6Uyrf2BuBjaKiP8BjSJLiekJniBL",
  "key35": "5yvQg6DFVhpP2pVo3Zw2FGX5bY6EPwkDiUjBEu3R7cXTsuPPFbUW15juzNWx5Te8xWt4jUShPe2TVVzH7HUYQC2F",
  "key36": "51Li1BghFPecPMHqcBRmWGU8LF54cqKtghbm8HzcSn3BSS6yrxUd3FgHLMdnCPfumAeFxEyecBDg3pJ79BQVXR1y",
  "key37": "3ErvXNV9uFVwoLKgchM2jn1pRoMp1TpXDwW42ajrtbPWB6k2Tutw4DWQbBNTRFu3tAuxeXvvBE4JuWjUD31Fysgm",
  "key38": "Xz9miz91SdQkcbM4NRRirdYSVKs1D4sHZ6aQ8L2SuardTEJgyJ7YYq595WxaVJbdvNaMf5TZv2RtUSqR92uc8jR",
  "key39": "2CGx6PCNXkbxtWjXSwqSerife8xP18SXUoR46Kbwd9ULJnCio9rea8Zamez35ZrskGUf6dYtbD7r42TtsE329EU7",
  "key40": "42xfZxwEeRy34hCw1GqK1iMwBerEgEgwT5D89RYRvCqDMA3CkF8TCkUyxwmRS9zLZ4YpZMKjiksqoQpzg9G7ZyXh",
  "key41": "2edaFSnqbKAsrFJZLp3rmgBTEwAub7P67eTop3vdd9rRbLzrnfBAnH9uSSZRm8KcZQPHTo963tFpBMCsfHw41FnV",
  "key42": "5xijMAxKchgc7DdYt8MQsXKVGUNFRb9GFHnm9ZmATU9D6vVS1dofxxVwBaYqrNvRw3VL3juQvqhTVP4bHF3CUnL9",
  "key43": "5fX1BFQYFR9mv7Gp644RDLZUhrc47usWMPvwk133JwSnG1bSr61V5FLHkvCCNqLCGUCtQFAuktATogjGLGxzmu2"
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
