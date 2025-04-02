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
    "2RgkM7V1Mx3eAsSz62MwTZeU7gXCEvfGdwsJ2uwGNB9iUXvzWnTHZV6gdeX5hSZ3DDFXqTGxBUbBG6neq2SjwmJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1erAFnsRR8SATAkTtBxnBcPVgbHCnxNQ5rhS53WtgLDvpN5JHnsVVexKiQyCsYhzKR59LWmJih7H2Zbom2w7gs",
  "key1": "3zzkGL4476gtnBanMqtVN631wG9Q2G8sFfyRMtvSaMZbTx4kuR3BBCuQAousyST3cCrbWKVMWvFwkUn29pDDndjF",
  "key2": "ScmWFz39jLhR9Es8Dc6hERP3ckK8hhh6ks2nu3Zmj8Tj64BNN3edPb2XGYitD9EXWGrmqrVVwro9YU5sn1Vtbpq",
  "key3": "3xw37E1XtAhori5NoFYeMDjz98MvZ1uLj3Zq93ifnbdtjvqJ3MaKBSBagyj1pToQac6FzZ593BP9qAyA1EcPSdNm",
  "key4": "2PE87Nhnf2LStxFNWFNz98S3UZw6TuCqp11tJDVZjNf6hEYNHNn1LXaXvMkEixyXpEDQzmVStmnGwP7xJtD6DmGG",
  "key5": "5X7QkgaEFM4EySDu4GvwWMEUwjTJKXAWs9Ra3s1PxmaRvpUS6HzsGQrdpX7MRDrsGK9gztLLtBU2KUieYjNbQEJt",
  "key6": "2Y6xQV4v2892JSsEqLbA5HVk74J7yvDa4LfD5Gf4w3X2bXKNrdEyXdCLZnno1qcGcDseEx1okhGXqp8gv6SUkNbu",
  "key7": "26q9S2MFxqS5PS9tgcVn3v5ALdybmGuRAiLXe6PKrRsnue7x4zUJGWVFsVrWamu523pAEf1L852BWLFhcBBjfKQs",
  "key8": "2EKk2Nts1NyjpsisjUDjW7xuEKjwWamKQ59H2iczF8czJqcRSf7y5UpffcBEhB14V6QS9Fs1o5YJEGhP1mQke6i",
  "key9": "3TH7pE4Um3XCbdEeFpWtuUaQEM741PFuEVw2VL6CSJnyzRNbXB3JizLZaCfLAQWfzNr5kcdRB2FYK6wwvK6j9G8F",
  "key10": "4qJo2jZqyVdSaNEDHEAvrV8LesUnMPyDVu9udbdkUXVYWUibz5GL46qemKoYk6UG4YhYLH7tYj4PjUB2w5KkTe21",
  "key11": "2UFLeJERnWuVKrYrSSkh2YymDQn9XUCh8kh95LJ341VJsPBmwEAzB8aS69KCmigXN5BJtucmy55QrJwtGiKnQ8V6",
  "key12": "4Z79mg1ex5JyagkEwjFx9TvQVgajS9pyRWWBnmmBVpYPWGmXProKvwdm4XN8a6MrpuMhwQkrJWi8RuS8N6Wysi5E",
  "key13": "4YtTX2YMmGrajnpUrwViMydx1EjUvSFD4DdHHDmctbtmYTgqUWnWB8W9FN9gDDAzoJBVm9vJwDNfXKAQpJpjYnzx",
  "key14": "4TWm2JLWFzsrFhMrU8YYobWZMoaJ3zS7Dy9QMSPtciRAMjdPX1dsLrFMueTRdBYR1PCrMibKqnB5WqXGutNTn8mA",
  "key15": "4WTuZf9tPGVLiHM49UUh1y7v1PsZRPXuRRYykPmWP6NKyKzN8YuGkqxSwdN5W8LB3Sy83138RSkwriTfQWoREfmv",
  "key16": "2ud2iNv4MCpjof5EcXRtjuR5y5NDtnLmBHaWjVsysgtYYiR1uCYijptrqKanAG2FNDmMGRnqpGzsYaeu48X5BWWK",
  "key17": "5RKwKJnQ1uxK12K4dN8n2MkFahCAAGQPCDRgy6uod6aTWWAM59YAfWy8ZvQszKG1K85wQARU24DN4om2bQ1SUPHs",
  "key18": "5o9VW7M5gYopiF6oNNMj9k4pobQBF36KcWWXoNbvEQNALdvLdy37U1AQTyQbaieXP7zpWgn7kv13v4J2C7KzVkDj",
  "key19": "4JcjuRW4H8upXbuiycxjK4fi3sLcDr7EVFn5WTNDpybWGMtLhuCqne7EoFcreAutUJT625NnvtG8BmG1PVwRDovD",
  "key20": "2JyLyXgV9gB9dNNY4Mpy889yaZZQF92KGYr2sKMBVhHKTbWSvkZiG8x5qFH37LXRoworbPkXkX3cGmM5L19VaaqA",
  "key21": "5TERgkcQEFFg4U4niUuEKJej4PeMMnseNK1FZcR68c5e3ZHf3QHRpYzDcR6qonwtRvQoAPtSd9PyEigDo5wXFXx8",
  "key22": "23dmtZjKXi4m83uH15y26s9LUrqHVsM9GWBmhYCGhG2kVJUKfZwxTQ5dcknmXJ4YM9nnKJ23mEs3C4QFfZZ62g7o",
  "key23": "4iFdJXSq5kMGMR3FLemYtHaEd71QdhqLPWiUuRrnkcxtWT1XZFvjfJ4GrkBj1oQteZfDJDME3APDtercPa4Zqvr4",
  "key24": "2cPo3BUPTJjBhAU7PcrBLigbq9gJrgWpXRuoQpkseMtDpTMXG8hX3GphzqdysMjkHZioPpxL2zbKD9W1bcRjDRCQ",
  "key25": "hKQF1YWp3xQoir5a1ay1mCSfUy95VFndzJBSvHcVkucRXHMxQvpDyuZDjvPe9fTRQoPNW7LKxpstnLdnMVTw6Mi",
  "key26": "YKy9aBgp3GEfgnhuGiEAX9ioYuT4VwzqcrJVFM1aWYM4zM8N6DGzxPxa4yBcW25uAPG9GjCx8BtzYmx2HuPT5Ng",
  "key27": "3h25jHv5gcQf85s8gTYXtwcXa9pBzjdzKJV6phXuaZcJrZUjrJ1k8sbg6e1FYZxNuYU4VUdD5FibsRQfiEsrngek",
  "key28": "5YUeD7Bn1wEzcMUMVb6rPeZqe6Smnn7sFrbvcH4gbe69VK4T5VigsDVVwy4nYVSJ5sAyj1PVF4mVtFBRC3s9y7Jn",
  "key29": "2Mkz6a1J9f6FC9kSicPY2XQmiNrSuKLYT5dvxfuiski2GXCecPztrG2H3ibM4PTGgdpC6KWiX69JBKTNUmSBTdvQ",
  "key30": "5vXGbccF4fLnZx5BnLER63haBFB9jWKsrukQvZZ9aabfEmbzanqWHZp56asZpVFtwf5hxMr57ZM1SBgevuDnN99g",
  "key31": "3gwzxxrRP1nevKHGYLEgVfWnWB7vLQzHDdcvRzsCRVPUvQ4Aci2GkYnpsQm8UCra6YFWEVX1Mdbws1ML8DV9Adbe",
  "key32": "66wo5DnRjBLmvv3aWFoLVYmwHwm7YSTt3MKoJczKcepp7HZZvn68r6URuYta3xCvJzVhGxBHLBjQ4wP2PyCYWJxx",
  "key33": "2tiTQWv6DMyAQHLf8ZiDAaqKyp9Z15ZoejHLH55L6SGm5VQudXi1tpbmMYuwMQRNCtgQzx1jCitrc4m9u1hvQ2RD",
  "key34": "2sTQSp5nPoUGseddmwpj472kPfB2DSoAB5yoxbWYLxmqVmd3g9rVbeJbVJrHzWFE4eipgFwtrgr67Eb1G7n8Zboe",
  "key35": "62Hwbg7fEapPeTAWKaHZiqjWK9sbgdNBe3D6osRuFuso7NvTPs2H1qgJA295SJdnBvSVBtM6zt3NfeqxxnJBVVDb",
  "key36": "4gKh2Vfj5GehjhugkVP6aNQmXBih1QaDD6VRvK1JnSmH52rcRiAm2eW4aRFW3MwuhuusrvsCeVbqwuiMLmzHGiEt",
  "key37": "tciP3kqMvrnwb4bRAyNRErTcvhLGuJ5Zg9EXD6ZbsgCh6RweX8eFwebptUtxTtStmukiWBVSEo4ZyqhWT9DE69W",
  "key38": "66174TPmsD1mL2sTjeFDi9pA2Xu3WDgG73V6NCYaDSVYApxBsJwGcqJCqFoxu2DHni3MiM4o6i9MP14NsJUD2i3K",
  "key39": "43War6y65bs9fnN2HJcDB1XvohQQEdR1Pt99G6WyhoAp1Nybs786wHaUe5im4b4CDf9o5WC2M85vuc5pucjUiXwL",
  "key40": "2pK7MwAJpg3chLxdGgw171fVpbddUaBhDypSFtHdEmEJUrQYv1iTAo7pDnZ4vF45NX5sX4JYb78vS6oURTwhkydk",
  "key41": "2JCEoroCLhzQ9iFjjC1fZtvHZWiS1aR1SYHW1RPzX6n5JFN6KY7qHQya6G7RAvADRvPQi9YuqGGCkxaf6c6D9RJ7",
  "key42": "3NC3ABugRtnzWXwi6TRX5kNwk8zaPAtvF2WMb6MN8RDnHcQyBLmbJQmGZFN2sHfAXtD7X19dRLgJNZyct5EEv9Nx",
  "key43": "4XhfGnTai1QpjTtG3UxDVzSWRnnMVy5R6EHqezN9TY9i64SWvtv3t7RRy5cptQSuu1nLpGTvhLN9WQCxUM95phXH",
  "key44": "mmeCepQkVc8QdTCqUSpFdmf5SnHf1vL1hXjvHRaKiZiS5iNvKVzBUqftJDtF1CNbJcyBop8Bwcq9Ly1yxVeDhUe",
  "key45": "3AYvamqbeJMpMMEAcHbV6sPTBehQpUrUhGPAGc2PQgszDV5u5ygDPdHKEVyLozC8t7fwHAnKZXhwRh2WhfcQ7Vkj",
  "key46": "4BQzWnf2Hx4QnnKR5296QML4BYP67nX8qALkF8tGF8qxep74kqnE7YQ4iSPD4JM8mgRnhoXjLUCXLhZ5Mqc19ZZg",
  "key47": "ZMGCFMgoDT4ehkKqg9iPRh7MGKb2CvY6ExbCnzosZzdJQikB56Azt9RNQH9Me9oNxdmhuDYSvNi3Sd9cKWwo8L9",
  "key48": "SXgZYGoBhbVGidXAt8LtNuhbyy21JwbYB5S96RFbTpJGK2eSph9wWu59xc2f9sEffx65k9jGgFya1ykDgZDmZkM",
  "key49": "4UkbXNnKJ3dCXdAefzi7JTGfk4PxbPrGuWZYuma7y4TQBBFvRnkWj2fpM2Tn92LVFQAxYVv1rBdw6pT4nDJ1Z6kU"
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
