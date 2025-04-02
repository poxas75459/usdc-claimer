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
    "2DbmEkD4uXgtJm6HpimB4EEcj7UDuU6PdG3DDdPfUq759RWPAER4JvSyoCzRtD1jSpaWuuBo4ZDUr5LceXYZqpXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2649uWAh48E2wfAoCAWou869hvjt6tKkwKzrJdiMSwJXBaaJevaTTf5VtvLuVcUpQsyYQqPA5gakbgWdo3KfcxwN",
  "key1": "2fNN4HS1LQNT1LczNhPRRzqTedicRXGCDrxmnUimRG1D4SXaA91MU9L2RyMxwFFDNPTirSEzFb3gTHJ4LFpeVBKz",
  "key2": "5xbucXHgFZWJqoELUUELcky9aWmDHMry8efiyBF4vpxveRM16Kh3kGisM9qVSRrugjU4W3B9Y8t2VWHsmAQGPukg",
  "key3": "3uGFuBdCctbGgoEu24cAkL1MV9eE6kZkxBAgXn4iDaxf3GfsXocqMrc58rP7C5rSmtJZnmYVEtYC23bS39ciHwQ9",
  "key4": "4EzC3pHrnb6nr5vZ7nbev16ottvhcTtbbaNBKkgUSwzSt7y1NoE8zxZp5Gz9P1QsockUpDEDWxeNeM1iM6aDby2A",
  "key5": "2ZthwW6Dsnf4kjyp281yjYRStEPKja7cz2ssWq4sza1EmxafTSFnaYMPa8LdZiBFt8h9y8DGCd6ShrtnDY6sxosx",
  "key6": "4p7ch2vbqY8AKPGgDhxiQpohJegowxCpT5GJouZMHSUm4DQD4g9DdqC5KMtqxDA1Ditm6bTCojfQ2LEs6ZM2cpks",
  "key7": "3LDq4YcUPuLibGxpMDYZoPbkqdh1JCWYgxBxcHjCgTtUx24as2LfeRVb6sFgv4knEsn68eDRz2ffzYLueNEa7Qnx",
  "key8": "5TGAqDvyTioDbtMUXoHrBezwYBNDp9j7d7uYDPa4H83Km9mHQCdYEfzgxxzoRNnseUWTE6CueQHrJAPfqUmXmDw3",
  "key9": "2aUzUVQ6qFB418wH2WjAz8aQt8GKuZMZF7KzF1DbMkGnCSdFdH1TPrMBFdoTgWh1DvFYzLANqkmwqarjgVDGwJGp",
  "key10": "oFRhKD5MFk3VdiiJe7DabEAANYXrqNkvYyKBykZKrkD3LnjSx3VTt5KffqgvXmY5sxoC8a6kC8n7pQHnqNTA6Q8",
  "key11": "3kQVUAyLswBE3Nk4BsLWosv39K78WjmMy5E1CZ72aFhGGnta3wdh4x5YFFcSTc38ieihsJYAtvh9Xtab2FeZDmRC",
  "key12": "64AzemqjhrYXeqLAct63mcke6k9wg1tSbFmCSMnTpPJG7bkM18K9g5RR1unLuaXfNH7XnKdc1ewbJfLzdL1j5EeA",
  "key13": "28pB9JK9FoB4EraghN3CjVRZPCw3quqJs547pQmrodunqyADGKFeXDHXT2o4GLprM75y66HpZJ9CFZVU6B5t3tUE",
  "key14": "2wRRF3i2BhQogWJPf9rPrJnh17v7eA9adFTn4ZkVx4utDVfAbw9aK1WsNs1oVfUesqhMXkyuNrzwXdcDG2LB7oUs",
  "key15": "51LKAgRa1Zom3paC8vqeUYPmUeUKP7w7p5fqAENigexzQKZmyeEbfZVF8kYPtC4arCquezzmPsqyNsNfzyMsVtBC",
  "key16": "4Ptap7VrX5fCC2RxXk48HqkbMG77MG2mqy9jFoeG58NmfZ4dbdPy5mzSJmeeKymYo1CvKqSzUaJ46WytDGQVF7AA",
  "key17": "tcQPk1nCneZLyPrSsvCb7U3C6frAWQt1EV71mTXUwJr1jkQMUaH9exU964pkQtnq8G6g6ZoB41CFnhLUrPVDvRc",
  "key18": "5eQkFLqd9tbGW6R2fExtVZxqN2GA3ZMEjRMn9QBhawcqpnXN48yeF7hJRJsXux4vh5binTcVdHX5hCqZtr2GJP8c",
  "key19": "5NaSz85W5CdpUauXmgrg8apxqUWfA8uLpVRi31tZFd7xSyAtWprgbtk1tAjrNesWHvu9XmECT6t8Umhb5PDsKAyd",
  "key20": "3CWSC3LNDiupTWLyi71om55Fvh9vkeEfLdxpoQdNvqzkAxQRGWdySgBABtau2h1697J5WSD1hd5rww9X2BSLhACk",
  "key21": "46kKZqCHd4v1FX3gAd57jLngceqCgWbAsjutFW67ELQiRXsuiBLQuoNeNzbrxAe5RjQVxKmPK6ssjabai7hGWgT6",
  "key22": "3nryBbYmnoPtEmYXaPq9bnmedpQyhWoyFd63hxkpz3KU4auaSmuCgX9E4R6G89fvtDLcUUeCorsH69kyXqaHz6Js",
  "key23": "3PXxdbCRCgEVcxvfUeF59C7KyDg7btDzve8qZKRJZSiSUR3aFsVwLdUY8G8ts9Jm2qaUR3u7whYVPa7WfsPjmvHd",
  "key24": "64Yyh29iEuCAkCENJLbKAq75ARryWGLaf6isbpWZAQF6zPb3aWPY2Ew94eVeqsepZzWp9bvm2YGs9daaUhBqmCr6",
  "key25": "4yg8RK1SR6LR74v2xSHYBqythRSJfi17Bb3BWnu5bnB4hys3FnZyEMz9FjgnpAY6LVYLiMggvzbPmiym86Pd5BPn",
  "key26": "8C9Z5y3xTTPxT7yHd7o5VxU6U9EgSp6ebP39Sw8bLp9Z4BjM36xHme2A8Pn9ZD1eyLfMyCz3JwbqoYzhKSJmXHU",
  "key27": "x3LHCTG8WHnNP97GqdbLdvrSvEobZzbf6ZtKZzvAeDE6VWXNBtBg7vNECHQewVrS9un2yUYGyiBhmxXnbF9yHSJ",
  "key28": "57v2Arw8V4akSpAE7ASAdV8QAtjLvPvMGuP73HsNLFgCZLNdrUeJR2yDiaNST5twUyC6tN5hksbKxxCM6Ck2ajs7",
  "key29": "4J7WCAG4dh23C7Z49uWq2vXcZhsrPyf1Q1KTfadLYggwpaUstWUYC2VVbg4ySXWuSGHCYU79fbgDV1EEHw7cf9DL",
  "key30": "27SpJmqfpQBoLKWHfNXh8TyWFPxMBJrLPsVeJdW9eTPY8mkmGg95KgY5Wwjh7948AoAkj2T5NBZwyiiteajJkUEP",
  "key31": "ya6dXmkzeVRiJMAMHvMq3Fct9NM8SiDqiokp3ctSqsy7zfmqCNAnjReuG9na6Dy1N384SJV6HJc7amZDSdP65NW",
  "key32": "5aoLRyp9EeSgB4zgicox84hQFNaUV3MyoZ3xxZaUcv9bhrDjocLVUMHH17a44G1sZsUfqxbjwEd8VYy1hFm3yHzo",
  "key33": "2UTxwNeSM2kqo7j6M87aXAe9dFkbrcBBnsdLArfHQLxcSsEnm2ij9F3CPUQqnaNf2P4j1gAaZGpdTCt2MktNYrwq",
  "key34": "5KAQuVajsaixHLZfZa9wSmRrHWsoevLueYAiDjJjwM7wec7YcjxZoxBhnz1BoHynsM89tz2cMm7gTeaSbNztT9R9",
  "key35": "pVaZshkStDhH8btK15EktzGLCtrd7R2iFPyY58D89K4mkhuh8fZQVPjW1x3TuCxcKNgDSnShUT1RNvkPyRMeepe",
  "key36": "4u6w7twxPxZA5vY9cSabR5dLG42mjYaSvPLZGnDR7Z8VZhXNCqhzgGyyz3bX7WcLKr6zT5MwG59BCkjYNTED8tHg",
  "key37": "vvzAeu1QH5kznZemB9smE6KnRmrfPkPdepHkHFsP5tuJUVDuMe6nLUDtcFnUigDabT5NyLS3YGbWxSLxxEmgf2E",
  "key38": "32xEBdSuP51WY8nJgnou2NgQzV7aFyqyVf4ZshgKR4mvp2Jud5C91YvFqQMC1ARhbESiNqHdGynGdgNPHqmqQijY",
  "key39": "tGfL9X99a5WMA5im1S6TnqkLhzguf7qovpaA37BiVvCFnqZHaeVvoc8Up4qu6nYJJPZefnKzNg6B9AYDGeV95pj",
  "key40": "UWdZS6xroK83DuNM8yG4wAiVc71nNeRR1RuxjUT8ZyEiWcHHJoE7teMWQj5QaHcMsnsqHHqL3U2khfDgiqcLuoi",
  "key41": "2j1BbB6ozGG6btjaQzcems17eDUbTUtYm4YdqnPG7dgqBHHJJCCTv5NQ1ASYYSh22ZK8raGrZpkGCXu4ymQHGcKA",
  "key42": "st94euDJBxCsZ7acEG4MgaxzuQKpGdFUYbfg3efKzRWxpWJbo75xWgvVTmwYouzyMiBwzNhpdQQWVJMMSTKMhGi",
  "key43": "zUocBpxAYpqXUUMcBvrpKy84qRhfvvngBHvzHFrbQvbd7gBL7qzqdfBk99G6e9azxeq1zvdDLmozW93cipBqAsW",
  "key44": "4AX6xMTNj3hAMMs7sVR5dGQaDXYi8PkBUqsqsuwdoWLvaT4XtRs8VAdDxNj261Ahb32isukV1HZuKKpy3a7TMTWH",
  "key45": "4W5oWtE9X3ZeuG44wHnfvhcPe6YN2ogdhDhEKWzcnpmXppsecT5ZNSnUznmHzoxytXcY9qPRfTk4dy25cE3gzTCS",
  "key46": "21VZrd8MXsm28o1evREdS4uX5X7fAWK8XXUBctrnpfRxyj5NZWcwtuwMKWvL1awNhyxqQ8ZHG99fkgHvtkLifxee"
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
