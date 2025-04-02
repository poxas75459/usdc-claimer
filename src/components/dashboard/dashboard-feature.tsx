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
    "2tQtV9LCU3mC9M5k8Pm2yvfZzpbQG9jd43ksyeHKMMTW8xVLPNF5y8yaqwTFqQBGzuJnjWSTbj6KktYsWkG2g5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oz1Nni2No2HZJccudUrt8Cy5tFW5fxq86ZK7JDsstCWJaRVzoVYd6buPUAnqd6YfvY47681ZB7B4Yv1W3hokSr2",
  "key1": "2DdYL22HKC1Qe13TVmQrsNZxpnGVd4tUWApR5QoAs24Ua7ipMT2ENZoLVnaypaRWpSnW67kStgL9EmEju32yo3pD",
  "key2": "39nKh983sJkEKSLMvQbAAm1qyHm5p2gL4Ldo74vYBjjF4fJDvnx3Y1NwUfWX5eJqqDenDZh4RpoN8qXa8qK5WJdv",
  "key3": "44uKoCNURmYQeQHwkEhWKSBtSfZb4ZA8eBvt5qtPWtkzNefEMdZLU4ajUSyX9LsKzDPbJHJp8LNwYL9RH7uNRN5q",
  "key4": "3q3feHLakRc1sdaq7zzpcAmRr1FZg4WPy2wnUgPwpdyxw5VQdDoiit8whTgPuVMZAAbBfJQC4Z9HwiZgrZyoW3xx",
  "key5": "2BqG23yUS2wUtoJcrPnkN6FcJvwPcCz4fKwXLzrou6WUBnaLFirCDQ5qxgreqQyKEyJEHEDFfcwPUfA9ypKNdEog",
  "key6": "4RJyQTTBCfW47aC2Aw8UQXf9vWWixZEWX3YCT6BhmohTsHztsmDmEj2GjfqtdHXFPM7Tn4WAQbycwPB5JDTvDDVg",
  "key7": "2oxFhqApG3F8rGuQRkN8SfFW3FAmFRjf5aRgKmAHgRiEfxidifoy2eJnQZmCih62yjmkAAdRWdk8TEHTnwbqrpqH",
  "key8": "5PLX9mooFG9anbkHwPaBmoXJSeb7Ppit65TMcoipHiCZKAGHafnyw9QH1pSWWj5zgN6HbVMxBzKzkwbR91VtZX13",
  "key9": "5uA7gXSE3fnw1P8tY6tpotic8JsuHQbVx5svwvXoxVp85L2beG6Lgr5RVDw1cdwBDEwqBz83zsmrE4KqbWiyn7YK",
  "key10": "2YJ4giaMdFi6S2yVz1uGPmY9YaBQh6KL8MfRmrtUgwSMjhanR9i3SqPBWieN7w3T1asqBeKHUKg7sTogY66szijZ",
  "key11": "KWDttUrvm1qWQpVKJXCsu1rsvVKk3T7puCVY7qWp6hSbiZDBJpdUe3pMVxH45S6b31izpVhMtgxjA1j21rSoV8r",
  "key12": "4AEKeEPuTr6vE2DysyzN44YrCDB1Xe4Hns225P7mmTrgoqjVf1gvejDYfuXoz3kUJp4ePsEcds7ruFHhU992VjEa",
  "key13": "gv9CbyLiBpNtiSj68DBCVDLphAuGuXqTAoBv6mSKkMabqAKekFZDdyR2zRHfphp9oMCE3dYfwaHyVTeJYYiBA1b",
  "key14": "5MXtQuRvVej6H36pG2T1WCDuwubFbEqDLEAZRth2RVnQXenKASPC3FmJmu9TbSwvwUsGEJAG3bEPFFVnYbEPM4U5",
  "key15": "5ceqQ5Yq5avvNAD4WmfNchu2VXtwcweAefUMw3gZkHZenS9kxo3F3YNS4hzUMkdUwi37tQhM8tFtQjNHzACVptk9",
  "key16": "5Ea8m1UX4sqc4tvzv12m6yezc2Vd8zGydjof1m9YWf6ZDwmVtwCMqgmpTJtuR5gvhGYfqX85axWFq8JbrebWvy9n",
  "key17": "5wh3jBADhCevZCgGi945d4Mn1KuxJpy5p7KdRXzGcf1q4c2bSjGjSZzLEpgwzik1KbL9CW4MDJFeAhGNgH31Z7VX",
  "key18": "4hfMLjhrom4ssuWc4f8mBicPBQh8yywWf2YdQmY7CRsNi65brSfC1aws1HdJwQYd2tHQwFnKiGQZPLi15hdK6WqQ",
  "key19": "4m5NHg91a3KsGt1n6iGmY9DbpTbbZQnLgZRBpNCtgBeifDop7dJaNNahSGALmFMNLDYuFDbQz6GxrxVHXsK2QP8g",
  "key20": "4aGR4QkJTR2Arc7eBWdEVwB6HoGyFoyoLYWA73qPG8c4Xt8Ysq2LREphMfz4teKD5zaAJPBPYDLEcBJ4yfB8WarB",
  "key21": "38kHH4YCQzorPu538iuzsWTYGopYSq5DagymqWA9Zwmokrw52VeJJgC6bMSsxEwxatgqLEmKr2WifdRbeiehLfZw",
  "key22": "2yWhmSio1z5R3owtALsYqo4aGWSYZSSxa69wZvb4r2vXUp27QoGgdjDLDBbeNSNgnBC4eUR51yaNu9ijgSUKZTe1",
  "key23": "P7xmmMnCrHxRuwWHrWmc7zbgBGKznxmCihLG6mLXjs6pbWudpRaqvF7ZVyZW11a1j1SLxR7E7S2dB2G8UuAiD8H",
  "key24": "47bigHtUZTWMu6qHUYc5SEoNqXNKjFZbpcg7gZcrTbZDK5waNCuL9KyCiWFKhWAX2qEsucNvxger8uYCYdev5v6R",
  "key25": "ebjUAc4EwBHFchp1RM3CBbtW6Zpa5uRzqNgPeBNDwK72JbXudSpDkMBXn9YDwcp4krcSkaWyiNfZNk6mwjSAC2G",
  "key26": "HZTBr2JABjWUHp4EYB97XX5CBJNL4GmZXSTAHaGLqRyJTtsMR5d37xMjqZ64FNpXGqTkbBFGcBwDjSqfZf6Ju5q",
  "key27": "2eNbQUwbNn12eEMqXRu8BkcuGt3GK3LjPR2xrQAYnXVrYqbT1z6yxpkWcHtTvsT2buivF8sKzKgCMBhKoNnzvVC6",
  "key28": "4YqNNAPznKw21x6KUqQHqj5Uvx59ZYuWnRe7LuTnqHCeXzoNEbHrP6RW7G4V7TUMn356kB6kHiyL552VynQoWqg4",
  "key29": "4DBwB3YJ3QKphn22QnaB31dsCFJXaXHWaEegpBQNDmWwSLexSvLMBTs5CGzSDnfae8QdVhwd1kf2Jc5VLKFE4EwF",
  "key30": "31bcFKeiqnMqtxspmuq3ab7BDBNFM5nSsPs8uDd51uZfmRMXFWpKbFZsooAuT1emyjcodaQSawjkEM8ZqXVk4vRw",
  "key31": "eMyeK2LLP2YdiTB3TgdRYn2zrpAbzmNzoaYCnwBJ3p5NWtzDd3yh3N2RHG76fFhvzf7xYAZqUHmCctmEpkm8N4L",
  "key32": "42xJGSchjqb8zHJ4SfCkWDvAF7u7RE1KLaBN7tgCWys6HZN2B8RnazUo4G2hZFfccVmqT5YUWu79KLPgfZKqphwU",
  "key33": "5LQxuGwHVpzRLBvVkngg3dZnp72DXvy55E2YV4KuEuYm4qLti2PPt2UKxgMMP74WydFmXKMkW7CEcfwxvJ5sSZ1s",
  "key34": "5SGugzv1hPAZBbZfBHaopgoWepJVpzbRaJMRjYmqp7XJSFyCyYpufQrVBWw2Q6fmvqMSsHhLSBCcVXrofVgwTaJH",
  "key35": "38NfKmgy2zAkSirndYsBnmPTw3ruXtvKeepXgQDGBU3mraFNVfHL1858eU5EMf8A8docLJuBxFhs7wjKfNUFiaZX",
  "key36": "4qh9KktR4tKXNokHrFMoJXky5Tpkn92xyfjhafenBgHSA7i9gL9Js34isCcEtB2KXmWwka53pnAomLybPxxRkknj",
  "key37": "2Kjj1cQM2hLN1ePa97NvN6hcb593GKxVBsgNv2UfBTgbjm5oDFVSWP1nemEBu83Aq32T2uyBBPqBAcaNSK1skmUG",
  "key38": "3hZVdp821GHP1rMqiP8ZNEuKQpYwMdFay33Ye3aaBQzW11FoSMmQ87dP17b18aB64f9Mxqk9gB5RLnNHaebuVymn",
  "key39": "tLy8BbzeASHjuowmU6WbizjYUTrZCHXz3G7bagYKDWWK4zNmSDjHKohNVeyFm2QgbnRT8nUGRATbJSet6ZWYH6v",
  "key40": "56fmiZY4AaFLDc3QAjmw1CADpN2EEFwUkh3FA2J5x5ioiNLHkzPXTf4VtoQC6fqQ933YFdGJvEbhidKd3xK63dwc",
  "key41": "3A9EE1DHBiUEPQ15BbuykNtHvB4mtfBEKVxUkpJhB9bbkW1cQifMBZzwFwMXSB8UUnAs1PidZkXn3tT7yEChWr6A",
  "key42": "2LNUvEguGod9XnQax5yv9q8sTAzKT8kUAWD8585TeD9bWCCUP24ATHrtbUdxr9f7S1DZLHD6nUU65yt8BMF6cFAa",
  "key43": "2bwXd1qYDLecCTdGAggiSDB4NWg328HGP3EgRwdwp93k4fdD71XGPEDNRRUjqyBzaNetSKqvvrVbwCiYTGV2hv2i",
  "key44": "2UNb8NUZTxscWoFsQVavzULQ9UueCGUgwSpZQmFMfNKyEmBShJNYhsFQjSugB8N2zuYjdG9EQo7TWTgj9nrdhHqw",
  "key45": "4m9q1B6s96tE9tBgwZdUiNQKbs35aW9rb23tiYX2QwLMBGosYcv1Mn9MyhQE2Y5XoWpM81TFzJvo259UA3RWVpqF"
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
