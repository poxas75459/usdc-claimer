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
    "bt4Mz7GNEHtUMXTJf9DWFnDvQ9eUbFcvrsQ3cuoLdKFUmQht6583aVnAw3tc544yLuhs587pYGDGNgKDxQJfnu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ygSFjmDYZMPUzDHepin1YF5j4iymxuKXZC8eery6f8stnhgbEjiaA9j7eEmSLdV1hRWdukstR2wGX4LLd5DfdRg",
  "key1": "5BgUc3znViqsXhhnacBonLkDYGxkhPheuTivGWx127S4MjKAEH5Cfs5BKXVvJhBJb9qDqDYJV85kRfaTcidEANAb",
  "key2": "4UuhoqZh4a2qRiSCQE79krEzCnDoXpQbpGg2pviHn4r5HDvwbpuaMpttNqfX1ej7Az6jxp5AXW8smx75DtqLwFTu",
  "key3": "3pX99RUpTvUvYA9CbpnaTwWyFyZa2eHMFKRrieFnBLtMddBTDNybhR5WHL8y7eKsXEtteTYAB3HjPQ51YCXZZpp2",
  "key4": "2CP8UC158Mr7y78fqUcQfRQanPtEfq2y2qZgyWixgQyeZ1tPAPtnXx3Sqa2x8m6kUVcREXnpgE4zD1enPhDs51ui",
  "key5": "46VzchthzGtdJ7oAk8yA7CAjzLhaPTFjotnWUk9Nkxuij94nc7Q8gr56hUJEBZwHdHv4vW6XWHamSBwbER1ZA72m",
  "key6": "2wv9NzrAvjQg5KkGoQ5sGXymdKsv6QcmpMeiyirZrYe9Hm7jC2Ugfqi9hzT6icvWwrD8apC5HCE83SZcCytw6Vy4",
  "key7": "2oqJQTf8hKUpKeknyne9bxJdbRnXgPGCYmaVkfAxusbTSFNmRQRgwvF1eJSyXqbrZ9n8sitnmgenmjtFVwBS1X7T",
  "key8": "5vdMmKWHFZDjD2sU1rsBHkLNJsZWuSogznMpW76d8zcQhDod3sqs3yXbxqDJhxt2HXJUVbjTMzraESqSbjKXAtH5",
  "key9": "2jbPXjMowEyYRzFzqjbiVaGvtFV7skfCHiFyB5nV3piiDtCcVitG7xgPxE1TBeJEm6oipYTh3v9oDwmNucTRLb1c",
  "key10": "X7W6BnJCfEMm6ejCueovQiQXGFJgqgh1vvSY2TbHVNrPTzt81XExyeygBnEC6y9xKF4eTQwwRYNnZcApUDfgPn7",
  "key11": "4KGDZCoVfqsLcFsD4CrpNKiGh3QEvqAQayJfnzy9FVx1ZuTBJBfwPmAAY5kM1vWz518q17ddQstUaq6tJFpzLHg8",
  "key12": "3Qwg9rte6ADiZGPZPoC5ogNXc2iNPMBYYf3j59yiRcySdHYw7kRau78J3wm4hRVva6QnVJMTjzBes3EnL9KdrcNG",
  "key13": "4krTiXSsbnR3TB5jFPmqaJLrf2FGE8J1Wqbapczc41xMdRZf86NPfGKJPdwTVE5U4C3vzwXHS8MKfSUH4JPoNqt7",
  "key14": "3MuGbfXxCGewsigT8qf9TgyHLMsAqa2wtbxMi7oFWknhnxuDhN77Hrm2FJV2mErqbAsphh15SLdcuEReU5gxyNpT",
  "key15": "51UBHcK38j1FQ8YTt7TsLyiuhvkc2SPUpRseqpGJ71bwckzZ8mWu8A7wtyoz77fAkHEAp8ozZG2DaKKEfqLduJqH",
  "key16": "4nuQKUsYWs4LMhtW8Gye1hBnToushzhA6TYADySU5ASCxmS1fgGGzNteQ8mjV5z2j1pFK7pWrKD6k7CBF215p1jX",
  "key17": "5wovEjoj5GXLf5JSXEJyts3Nds5E37bJK8P2rCiwPdSxHv9f5isPXJMxEHnu95zR9iPXSpp3FQ9wYgUGsdDXKDgL",
  "key18": "3Tjj18SrDVcGNdN4ohxCoCggnp55s9SjaZZsJPiAyfmmH2rawDrNZTKCoa5VpCEgT9twGwXEkYhaB8d4aYyJmh1r",
  "key19": "3y488TrE64nHJv2Q737JnQX4RQyvaDm585jnLCsaa5RfYGZxEoNAJZhKiVtKxZV67E6CWkiAgm1CoDxVKBjUSfRt",
  "key20": "5aese9PqCtbjz2WSNqS4X6x7xyvQwVzctbuMAE6PNCvtZD28N6SSnjJPgpSmkJcv1r19ZUQ9NiVcHZptHfLfMDJH",
  "key21": "2UEb75E9u5r2KqvE97erkE4TyzvXGr48wPh5wmhEFBS1KoURSepQts2X5Xq6cZWSTVV9miP9eUmuBDSaVFghydmW",
  "key22": "3zyptG2g6LHeR2Lf8w4mmL7U7B1yufPPM55PupM98VN8oUpsyWThS88w1b44AZwwjAxEKe6BUHa8ggzfTaysPZ5m",
  "key23": "4exmiP3cCcjGiAvdMR3JFEv9H21oZd9mkcxn9kW8qMhSk1JsAdhfJxR13NCXCmhvDixjNZJrisTQxZMFJ4wuHm2s",
  "key24": "4KiJJwgzyuMqoFF934z8ZeDpxRRo2EYbd6erVr37mKjnypuvYDAYZ9ghdMaLfPGQwR71mWjuh8w6Q6vqZcnN6Zve",
  "key25": "2o3ASxRND2W16wTYyA4FKrJ7xTXERAWpvCBFbWCYzqpcyTUjSJWEizAJTWt7Bk5ctfyJ8pzR8yQtdcFjdpbtxpUZ",
  "key26": "NRJ33JSkDQiPFo9ccuZpKxzT8nNwo9Vt532wJqJzohTfEEbWQFH9yKCddBBb3JDsRvXeM1AW2X7XLf1BtBuWQqr",
  "key27": "5gN9XNXdCAm3w4pCDD5YMoDA3JTbTF6R9nRveqVDpezXvtqcPVm14aht7gFRpqtitjE4kTPwAQ1xw7qVTJnfwXDS",
  "key28": "3pyz993Aq2t2P8BMAuwfAaQ28GocGRrcdcMyW3iX7yG2ELufZDNWGweL8kPwUGXQ19tj4Cabk5JiyGWu2bFASh4Z",
  "key29": "4NsoN1ieKCSEa1g93qWQpAhP4in1N8555V1sd5WwhE7Z2RQmm8c7HbNtmFDKKZk1vYn4UYiU3KicfLWegfR6zykc",
  "key30": "5eEZDF8kycN9fkGPKv3zwgUKPSif9Ra7xuWNmKoA2gj5UucaPNrLt3GsN9bJ4yaGRw3J8aYjqBjAkErBeWaRm7AA",
  "key31": "4ucPQ8CXHvs2NZ1KFgaHAB4YSCLN2xu66cSEcM4Fg474cnBN7kXoGtpskgogkRLNmAzDH1G9cPBrtiPowmxzfhkt",
  "key32": "3mstz9gGEwfB67aT3VN4FLXZ8DXdUXCP7aaNhJRoEiEL1RV6ZsL2AT6wq9crswTPJPDXnoM119kjgYQMWUD4wnpy",
  "key33": "3XHNreuTqkyzD5A3e2Aq2ouQS7VCSbWF1mRPGR4rSqhx3aDG9EPY2v3Fgei2EvE9jQWrPT447ydwVFxK5uUV9zRf",
  "key34": "5QAVMczukBTWMkakrn7ySZKGsJyw1jLdR7nDfeCkY5vhPFjZ7sUBShbvpCxv6rPbdfoHZ7Sg6Bw315vUP7GmwmxS",
  "key35": "4LA3qdseUDB9JeNMLAAPWg7vThYiVKPC3acnABKJ8112VanmyYsze9CjNnS4k2t6rf6eiWA8JUWjVeVyaKfAAJWF",
  "key36": "ViYDuvYNbd48e1Uw3aQscvAywkG2TQetoWNtNPEFNwfW5kMtKMvb3FtMw6iyLE81uYtooBhu5evT5Nt89wYGMNX",
  "key37": "3XfQz3MHw3jvTFeZhh2buyELUMTCMNznroqBtpT1Rzu8qfzbmWWgW6NdDq1rSz9jPLAZ85q6HmWatQVecmGyc7G7",
  "key38": "3se5nKBXc7eZJzEXtzCxZwB1hKZsdwc3Q3dBt2mEKrZ5Ae3tZcKAYLMBZh2DcGLMYaTmWu3Fkf1wwKy1EnEt6YzN",
  "key39": "2xZu9qRDmx7dZ9ivsFaqe9uyn5vu8XqnzLW5AHbEiefNoGhtV7baNMucVjZ7sRvTWxabGRfuAG3CBnWj8xyeQUta",
  "key40": "3uVqYejWLn8A1X2mQq54jmNsqTTLdDUsD3476yeidY2xxeMpnZoWtzsWQhNkbxGiiFS8QSRo8uWp2n2Z42Y1srrj",
  "key41": "5LkwdG2SctML3F2eW9st3Nm9EftVzcTY8i6djKhgD6CmndeeagvX4AR1Aw1RrF6mchqczzMaDtzQXyXoE9r32Q5x",
  "key42": "2NR5sKvoWE4LkD81usrY672ihnjfyDzYmDdSFgTWaxBU86eG6igyyz7f7Kuy8gsGoQJszQKUB7nxUwrP3StnuFg6",
  "key43": "KQwkCveXTvVsoiFxRDrD2pto4miyyWFoTgLePFADSPLv13m63CtrJHn2axvbP7oXocZXhQiUpodE7cPMAzQZE9N",
  "key44": "2uz52CgX74fjwxcf3BhhU1uzGV6W9YbHzgQT1YJ3Ubzw9aS2AepFhLauWt6xxDSwU4xhVxpyvD43zZVF7gDNB2YP"
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
