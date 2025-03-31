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
    "5EsP2bmW9qHutoV1RHtnjYwZt4YaizXpYeug3ckhAFr6XoxCncqAU9QZVXZvLTvYgfZpfzXLgT6WVj3UzbxyF8K7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NRNMVqBrhzGk8UNeEq7cbP8UCr9KgofTBA3Yc7qBdxhgTvzADaaefPgLtGwyyeBVeR5DQqNh3vpsRDAq6qfowSD",
  "key1": "35gQFbJzMiMJvHDiidss63hggEY444WEeyJWnzLRZmgVFqVBowcFkdkXVBzSocT2rPdCr2qk1Y6HChWFx8Yyvenk",
  "key2": "67HufDjSuVyMW2N2WvauymtigkAE3r8resCWFbgSkRtBahCBj6ao6XQzGecZH2Hyrayf9cK71SQGi4ywVrXsMNe1",
  "key3": "2HpBcgz2EHrEq1PJ5FYnCvDyDuBEw186VGYeCMoDmM2SZfDWRsqAZiPgjC8Pd6DqVxr6Qpjw46vVpjJdGLhduNtq",
  "key4": "5gbb7AFDtZXzb42M3awhHfjb15us9MRcfGzFxBNMQgkmMVD1Yrc1W3GMiFQQpYQnBpQFU9dGGSZbkwiA3zL9isW2",
  "key5": "Yg3o94VGgn3JNJfEcRM2arg7JYrpPFFQn9NaiMNg7do3fx6VrM4SKBJCCWavpXASbTeDCcNxdihkVJtaz7aeRr6",
  "key6": "5V6qbdaCKQbYg8ruQ1LyJhCt7DGCSuscN73nnsKE2iEsKHQ5ZxBKTXv5y1VXtLqVmLHZtMvwpPGqAMmFZBFGWpTg",
  "key7": "4mKGFYbPwojZP8Ti7mpGknuco4g8QvoV3VwFgonGwYnXXv7ZyZ9y3bBon5rXLWoNanVdgcqCoXufyZq31KgSwNxG",
  "key8": "3oByePaASRweVHQAtNN3deYRbKzEjfqiY1ssXDStvPdwKSbeVH98SFo9pRXDwhCLL5iMq3hHWXPJEJwRbk8a6Eir",
  "key9": "5YtfHtZ19hk3iCT8AR7iTX27GozeBtCH7sx1RX9btLioy5NsFdgfuTJpZrdN5DkByHdJdgmojvtjVDt2duMssz2E",
  "key10": "3hp4d4nvNxY9qzyNXUD8jYeKFtL6Vj7jCUqQgyznV4vieSYTkv9gyyFmDnQsWQgcoeatAj631wMHMYo4bKw8jxXs",
  "key11": "3VQHSidYRtVewuQssMpqxgJZZmUYFY4upH8xxKVcBGH2mpwsLKcXYvJ2NrXQZ4EkBAw4GEScF4wmv9f6jzzG5LwG",
  "key12": "245WMTcyrzK2NtBnzdms35KQWkbgpCmqjPFzk5DGt9A2vz73P3TAsNrXRdBXTXa6xDoiJNzVd26mnaDba4UAnaYp",
  "key13": "3frtasWmQzA71sEZco2cGT8V479vLcoz8vWoBczVKCTaZMNugng7yw4xMt7JCZVfuVVLXGXWWp8dx9tAfFEGRnih",
  "key14": "3S8UZZeWfpHvxKKWSSSxK72pS4hUKMdwkT5yoeAon6eCLpd8YNTTwZ3XFPDyFixN6vCxbfcujiYZP5d96w1vS6S6",
  "key15": "2da44FMy8sqwf3KGixBdYaFmSG9mC8yyVTgXrBhS2gkeWLcY3YtjSodxXSEq2ZzSSgCTTKvw2nCpoaJ7nJTgwjvX",
  "key16": "5WJJwezBrPd9b62yKuFMpfnQ5kFF9AiCNJ78Yr6xL9GDVNNPokxt9PiHYJev2o8xju5DsQYtugJVACULisL8ytCp",
  "key17": "3ciV2LrqmEAzzDjcVdSqmgLQ5SftYTpYL6wc5G5jXW3KNawowTGDMxsrhtywnj4AHDgBVE1jAdEn3EsCwwqPpiZM",
  "key18": "3SbmjzgJp5ohEHXFp4H12WhfwYriYiAHGcZ4HhD4FgiJpqMvKcMVTww5trjgC7EYTU2GQJLGXcSrThLX7f3Hnewo",
  "key19": "24Di1MVQaD1mAM69cEBUd3SFtAAu4QwiyuaNCXr1ksDe3j4kZBdzw7g9XCGNQU7GMWNvw2k8FYYHErFPb5dos9qb",
  "key20": "5mD2f8YNh1MNr1hs59RDhJkKw2U4uEsAswfTELw72d18auaDNBEUnkGiWnM7Sso64RwbdWFqWoRZhtd12Epgzq4P",
  "key21": "2xyxgoHUPLBkTwdS9MSYKK7QhtuaZCi824q7Gpp4TQhA7qSVspJCyWD2Q83VEbKRfe2pLh925NtPsgEHmJU7E9Ly",
  "key22": "tTZV1KVL25nwXQPzWn5zjCaGaSJudCGgPZ4bazycvnPPk9MHY58eEHYcK6vZJqShz7gsM87QL7XrX9PB6Vyapur",
  "key23": "4A82RMF9DYDsGSkqgda7r3cywewMpi9GiPrWuegGNDmmkFYvPEHQmCJGha5HP1rF9sZT3p7eHZ49Z4FY261Ut9yi",
  "key24": "2e1NRxDKU61ejdHPeeHzhXZRP79mCmiY9aKWC9wdL5cHmoae7kn5zhJPQbKmGUUDRrNR3PDfXo2wyuAUM3suEPry",
  "key25": "RNwAWjW8MXVMUVG4Sh58QqqqX5LzzLHDzT3pbGjhyX4YYa26tcGD9B7bKY8fXoXc6rurYUzJbMfFEXCCmiRbDgt",
  "key26": "5FfeXUehWcFbMvUoui5rr1JBDFSVzkdZuo5eRVZdtVr36RXV2yJECubsNYptPvSEsMNXtXa6S6c46spEAL1hWWzC",
  "key27": "4iRgKtYQoYy7pkAzkhsXt5hiq611xSnQQidHbKeKEuN19Xxriyo7wtw15EunA7r6xVd9Z4WV4Tgf5FbseHGEyLEj",
  "key28": "2rjzJ2euduTXSoaMNieAUZ9UuyBNb9bteGFnjp6FQQxDVwhUXF9arNC8UYk3cuqtPdW68fjx755VBMoBRUzHUi5o",
  "key29": "2jtBof8dcAnc2kKd6tP2WSJjdQwPK7QZKXKNdYX5kgkMgA2iqEtxXL5DZFpyddB3XtyrmJGwDAASRy5Lghr4JBHz",
  "key30": "38spX34KEGrFxFHtfg1AVPyiZ9ayeDRXdpMbZ3cVLZcQVo6xdWxerpPQR9uBNSoLcFLJsXwMfDh3vYXjDPPLdDC2",
  "key31": "5FNNxSLVLk8hYhsFg26WAN9UJK3yaz9zzbzHT5ziCW9mmLSKM8ogUzxPUsAnyVn2bbXfJZMmNa6vsoT8mZzeYPJ",
  "key32": "5kuHHarAimsxrrzw4ei4WSwYLzhhJJmJMJF1dZDUJxeeNMJbG7pocrChAfazuGqJrxNy3c6Wy7Bk8GE83t7dtyMe",
  "key33": "LeG4LiZoRAducQjJTERNDs8wB9ZAbBj8fQ9UTMhSJSN2A68nmPsaCvMEiiKHRZi1mQko9yvF3J8RtcbKt2jgajA",
  "key34": "3MeDU28fpvvcXhpw59te2CKuwjcmyFHqt8FkBvaLq4sQ77BydajkRMUPsea7LLh2hnAxnXHs6joFBG3VeQCroreC",
  "key35": "3rLEuRCxS4XhUKLwvUukLHLQAxrm6a9nnFaiRWLCmwgQRJsSQ5NPAe6pdhLt5XcoBRwQamZ6NWwoiYXrETJXsFPW",
  "key36": "4cBejHFiXwLNZfc9JdztqgcqEPfrx28dejU5iV9xWcJgidWaAZaGLua9uMS1XZcQveW1ihgbPFWoNj6nwHhvi7LN",
  "key37": "5p6rKddm7QAKxMb14fUwwKSGDTFQgsiVWYVJPhUjAkirAncHiENoB6uDrgHkw1UrLMweFoTKF4PZjWgthxWKCKWt",
  "key38": "21hyqiciUBvUpKMqgzGfwo2wrA3Bg6v3PfHHrFfwn5dGNSJ9DjktgBuDgjNRbbigEbkdRUzAjXMnetDFFcmkqCsP",
  "key39": "4GvEqUPX2kGtAemphVCR5Mvsm4b6E2Rgu428rMQXhqYqHWk3r9r45K7U5YmR49k7omCTTywZc4JViEchRg2BRR5J",
  "key40": "Afy8hZZ6ZNG94hGMsHU7TApRQVp7UCcciE6azhKymec3iYNdEFhU7CFv576QZH5WwjRJvmQAGQ9ib3WJdtsfXey",
  "key41": "5ExVhNu8yM3nnC9hiLCYXSoxSCu2HrGigNhX7eK8misp2XHbEDB8iuSMV66HUfS2x2JneYJbftEUCpegenkVeeUf",
  "key42": "62HPHe5ef46iCHH5N1fPidsvQs6L8Stu5eV9nU51zHuAZVehsuykJdbggq3pfjmLyjCzezx5DMPk3DTzWwKap1ng",
  "key43": "5gyvGuY5DHQmscrZmsHUdzKqo43VgH4skydhLQYnaHUnVwk9X5dmRmmc4aYFESFg47yobXEyU5aRnejHZw27ExCG",
  "key44": "5t3dGYCuGvNxWxTDtiM8VWfhKpZmmncXy5rTEQEQbuivGuPuZaubpqZ5LVmnkWHZFEHE8YLfaHrHmbMng11J2gPu"
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
