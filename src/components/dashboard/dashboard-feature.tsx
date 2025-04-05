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
    "4JkacF2vfWzie5JMnjCz8XXiGVVJVhfgt7pfDTztx9qHpALwyhQiMzno1esMJnw4KP6wDw8MvBgGf8aDqveRJvEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnDjj7sGi8gk2gJbhm8rRRprXd4wX8WQPzNA7HCA7wS43DGUmrkr1RurdHezavgfy1MbtJmKoRQJXScbQeipxj",
  "key1": "CcX2qQvh5ezNEBsyb5BMfnEiMaXJ7FASSdNY9NWSxvANbKbpVJfUJ8T5188V8JCDVExPBX1iKSvsNviSFYXPvMv",
  "key2": "35baja7a9HNBuvehrD32Bt6S7JUJaFv6gxxua9DPpX5SFZuifhzMQawkztYDvuS8kDJBcio8YSMxzBGXgjZgPmeL",
  "key3": "3R3MPD9Tb6VvFgWpmhHxFwJDpTMVccqSTsNnFPV9kz2vQgEvBoAEpjw8xTcJZo1HbrnfCUEkuG8ysAoRML3QAWor",
  "key4": "4FZDYLiecxFvfJ3YbRWSdTpob9XNcbx5RDkb2n44zztoC7Z1jLAKz8AMGx3afNkjdndDjd7E61QZKe89HTHQhvZQ",
  "key5": "5Awt4CdxUT5E8ccRVmBmb2hWMwsDXQzv3CVrsCxwbJVt5Z7boLhPsfD6LKEkN4TaMiXyqxkSaxnhFwnMCPFL2Rkh",
  "key6": "3fo3NmWsLhReBCdNefGMc53b3L5mYhayWKa8PShgfaSsKMK4erTBeykQbZQmVmfzkbAZEehgsiVQCtKuBzhWgZH",
  "key7": "3dmNHEH3fQe7YLjnFeeABBcrxsNBjX3AjLbV3CmLRz3FC1LyTtzpdDmuRCHb9PbRr3xQ7BRUx7ojAdtG3Dr8cPu9",
  "key8": "4UKLer923SVppVjCSjgg83ojZWsm2zCYrbPf31ECbj8rUHHJeHhj6G4LvitCEGVRXcKjAGbFD2BcBzKc25xTusxE",
  "key9": "3geiYXxQoR26rTWwth9JXBTT94HMedaApktJXsySpkTsQYwj7B8AUm4j2qRJUfwU6NGWwo9pc3jTs24rigjYWygF",
  "key10": "4V7CRYuDQK6qRkjNWTGqgLFDJAYP3Y3NC3QjAhzU9rdQXNuwkuDGtuUc54LxRBgeFYBNkCJeVGaGrkBMN7mgRk9",
  "key11": "4Gb4qSAMHrn4wpnH3vzpHD7keF4fgH3zSPvBZXearerGnvMREB2Di1nM2j17TM7UPscXEJX2N25vn615PQsev8HA",
  "key12": "4kPCVgBddEvuSekf9Vr3CyRem13F9njcY98w6Q2sfeaycL3Ae9ob55q53avfGxxK26EUAZxHMzDUfVJ2iFGLLzyN",
  "key13": "9TUQHKVRnXvz4TwwF7gp9BGrND4EHnEmFUxBjsc2kKJALg7Xq7TquPNFwsaPFEA9sdn2NAqH8PvfqEMA2WhJQ7x",
  "key14": "2iNVswpYZr7cjM1RzfsAVdUZYSwBe2viSrKzXBpxdd7eB7cUmmZESaH3y6jaz5inCUQcw8jEhqcjuZ8f6XYwqMaF",
  "key15": "jRp6jhNSXG1SHtctmttnyT5FgZg3vcH15J5naoqtfgPKddwYvo9eiWMJb97fXQ5LL92WYC9nSwpstKAkuZ2p3am",
  "key16": "4Dg8KypRxXjWcusqhf2PmSoX1iRhu3zNTChtuXmuyX5u3Wpa9J4Hv4NFbrdH2u7cPPv4a8yHXprYKAdH8YeB4dh6",
  "key17": "nwqahGRHzturjc5UXLnfJM9eMFeUswsjrJ1JQt1FAgj44vFuLUMq4B1HD5WKvFnC2QRafXUhzCAjsP9wtA98KdG",
  "key18": "5v5U28F5Xfnq1nWtWsKuWBk83sGyFd4H364cGUNQ5JbsUzG3MGuMMjDevNd7WHaEmyibSCgDZJARKEYfb7fBB6dt",
  "key19": "2haVd658a5MGVYyhzr2upNu1iBVEzh5yYgfyvQ7mnDAwwBQ6HJSowF3hKaxa6m7E9Cm8J34mv2xgk1sSoNcJ7SDM",
  "key20": "3ga8qxnN2rWFUNVgXXkic4By1bQCeHKCkv9kCdQ1oryZNiVYDkJMLwcJikn4tSoAeUsfhUxzoPU2fh4YEtziFLXX",
  "key21": "4FfFLQCnnQpcMYouLVr9HnfnsKPNU7MA5Xv3tFo4XgJg4Uk3ZWBdCt5ekti1iYr9h859AQ96JQKG5M7WHmUhWMzG",
  "key22": "55PFwSiCeL18NL9KVQ7bbgVHFKBo4rp75PjFKqqGNChCbUBGXpJn2Btdx1tsyW6yCvVZ8CMUc4VeN2XoX2TcjKaf",
  "key23": "4f472pWwP4QvqAa99f4rBR14yT9wuis62LcJ84JH1Fn6bviACAG4p1TstWLLNNTzEN2WGqhduv7RZE4hd4VdJ18P",
  "key24": "4pjqpeyHoPdBzHVE4fARBLKnrZugwn5HXpmy5FUha8ap8SPWR5wQ72uC32Qv9snY33bsn55iwhTg8P342LQBkbKm",
  "key25": "4BHfjrmfEuh5Zf26Htxkf75f1fCdVtBGvaRjzTRo1C1a47jAYiPfJLiSLZMEKuRoJwuWfUx3MSuUiVvqF4sTfK7e",
  "key26": "KuuT1fyA5sEefxDHpqtsJ7nDMFM5tsdXAzfVHB2TQ4RnLMUUzqdoqYpH4xKfRZrncpHwhTjBPCrGD9EuWAFK7pU",
  "key27": "X8y7hVpdwDqfwenZX6GQBtLNjV15FdAUALENXtJU5RayoKpNBk3oK7bMZyYUD3itKqgeZRGspxs7PtfcD9gUPJd",
  "key28": "u3qYHtoPmukSt2waXtQfL9WWPJiZRuVpBAAxhkFjiEKVPZ7LxB8gTPEH4WucpGcHREQYyEcsPTyhA3k1TmtZwtN",
  "key29": "M6W9os8zDcFzUZskLeRYkaNGXhC195tGbnaZcvbZo8VpEe6vTs4AqsTxqbbANAbmdiqp8WtU23HC14dBwNmKQGx",
  "key30": "5H3i4xhsjvaVp3meHzXQXPtf17jJ8XQcudmuLizY6qZV6paCk1zPmbkRuVtsPq3Q6rjELpLohnwXeCZ1J9XgWoFF",
  "key31": "3FtECCHUZN3iPNXW7y2TzHw5MHEL87F4r8coriVq48up6xnvuqS25cbUvJC1vPerjfkwBgAWd2Y3ssUzd615C6Nd",
  "key32": "5AAjMTrtDZao1effVs1RNpm6zSWYSJgUeGfveV8kG25eG94vYQEXGAVeeNdLaC6sJKee7zTS8HUWpXKQddpZ5GYH",
  "key33": "2yBiMEwDoqywhP8VAa9AwUaeDcixm6oDyPWvp4jzL7CJFHiFWjVxk1Hva7pv5wi6soNYRa7FsLBvius4iPWaNU26",
  "key34": "5skdgWMzk1eBg9bcaDKWHPibM9oyf53U7L28MJYadQVi5PKo3MRiU7EuBtC28YLqMXy4wvadMYfSkiskXqpWa1Qc",
  "key35": "31jYnsrYWYXbdszEk6nCYTXm7WpDAX3cahgjs4y4nNFa6VsbVgMA3viHxsnoh1gfnmQv3D9RBsVW3L42JHLe1mte",
  "key36": "4LQKsxXQ8QLjPm7rZ5pWrdVLNoH6KPezSzJFGCRAs7uqEEXhHQodCuxzBd5My1aCYE6gfAXBKsHVzA5WZRDD9LSo",
  "key37": "4jYfFa36sKQMB44ukMTEMzzcuhNnot1NSnSAEP6Bg8Ch2WV1A55zxfB7aiyv6w63paKSSWZ8RrmRuMEQq7qSymSx",
  "key38": "5GxX4d5BPe643RQfw9nfpNh4RjbFN6QQupiDgK6QLpmEM6LHNjJG9Nc5n8cS5LKz3adBfaMetjeEPQwfBMoYGrRw",
  "key39": "XiLZ1PaHbi1WRBbEtcqtYVkCPVntk7p3TUnQGBgmdUgTRjA5sbBPNVpq1hFafDEktUKbA5H4gkGMtLfSYodJKKw",
  "key40": "5y1Fn2sEBop7XDSpDftYJ12v64fUXzjKB7h2w6xdPCUDCVn4HRV5iFJBiXat5qYt2Y4z98ABRNLmKxV3fe5bmAjp",
  "key41": "37SXtwcqV47vktRn3eFGJ5JckG53R3qWQXJZK6BtUgTyc95VyaUVZpAhhmDoAEjm7mmR67VwRWeo3Lkkt6FYhm2Q",
  "key42": "5qhpNtqHG9Zy4zq1vJkz4CcLY2ZWBJhTxyJons8NFDo8XP8kXYW9wb1hwuwRvDFNQUkdaLJdh52rCvTr3artTJoJ",
  "key43": "34rwKbyvC6sdDcLm1kxjaMT8phHfxuJTwqgfUSc2Cp3zFdDMvzmmoWpNKh3VyJJWveL3xcoUvtWMen4p8X1LyWtj",
  "key44": "65U38misoqqidfDk7Q4QQM79BVvh3DcFaD8pM6oGXrNjF7rszK531bTCEe34XRVwyRZjKasDwDF3GfouuddA2Jcr",
  "key45": "4nQJjvkSqyMRBW4Y1J7rGTPUYYJWsUuUbS9tC8McvCZN2oVUiY7nx357BbiDNMeSEAV9ggkuLKFeeswqqz41LX7t",
  "key46": "5ELGCx9YxZDwNbfzjodz4S3zsh84CdtDB6R5HjUYjoEPPUpvJY7TACm61zyp6QatoV1fhHu6mN2CLkKTNBah3gcm",
  "key47": "2MvsrXyV5yYygnpknDarnaMQkKzPpC5AxossfPvErZssvEDFy88nuh95sBDi3E6P8CR29zuf4Gysrk2Zps7CJdbT",
  "key48": "5GXfrWoNh4g5fVWYniAF3HxCknTDBfsFf1F2eLVn1YpJjUXPi2s3x4vxyd5zTdPyD1qCJj4ogKSgmNCWgPP5aVwP",
  "key49": "4qeyzCmfdTzo8nFrEJQjbscsUvBoT3QpAuHf1ryUwQNDR93QVs11yoaaXFPFVJc9j5B6D23UBJaxFxKaYjiRTfkd"
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
