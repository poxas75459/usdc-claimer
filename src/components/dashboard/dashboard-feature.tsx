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
    "5YzY8ib111RbYnHKJt4XhVCgFkQMqsLnwKRqMUeajeuQr74PrTKG6P9E27CbS7ECvQKezkMHzFCBtfnS3vMNWrZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2hZm5iJ9ELHyDEdTSU1VDJz7YkjZpEaztt6zsDQngvtt6AV1Mwkv4T2GrGvmgRhZyi4HyHUoZFrfaAaZSM2oF8",
  "key1": "yc7sRP7T3QZoquBc4JMH5vny1mFn8gabkkzZ6vtazHPU9mmCrjx7SzSkQfZcdAyFHfdxUZi635psiCwWTAxWwg4",
  "key2": "3y1MJ8Ej9koV4mUHMggxQo6MoKPkSxzyUgSNrmctRzLwTsV3o3sbKLYPHP6kg8iRMLFLDtUuNWiscnjcm9eAu5fR",
  "key3": "5guQb1JGLq3C3fUxsathFVXyxWvrYr4WvgPMycz8izWCbjEXzMHfyURdiYyiCyn8xNpdQSE3QH1HZyYJ1XRA1TdZ",
  "key4": "tYDjjToA8yTFCwmcXe5r8hJZT7jmrj63vK6gUnvgBdHt2PSDAGbw3BSsh66PyZP3KaGpa5gqisJtSmSjjaz5pte",
  "key5": "2xcduakoCbkHWG4VdRvokjmdpwVdadv52zc5Qa3L1XCYcx4HEApSiTiSuFLmqBcrwFzvoHWBBYNaCCzk51c4wRqc",
  "key6": "62JnLx6iMsrNUd4QKnEXW7DLJBdZH6ZPQovo8uDHPU3eB4bvp189EyUYtjhDYBPivjUpNtNFhZdJdgFv8Y1ysajP",
  "key7": "5PmVsQ7fLHWsMrCvR17gXdZFHCTNPnefL2MMJWvy5umxZqXgRwfhfixv8jo2i428UEHQiigiJvxoF3J34AfrY7s2",
  "key8": "4Yp9m6qoSXQmbjRok27ME2jDrocWR8mb53ZprN7u2wvRn9bk5U3byA8m5RxLnotZabcJNYVjd58BscJ8huz5CFtk",
  "key9": "2x921SydikuUWBQMe1nasFMaejSkNLKxV9Vtwo5Q138fAa3SNfMZhCo4iPekSBkTLinaKwMmYe5zzwucEgYNedVQ",
  "key10": "2CSrVqkbiLU62r8Q9UH935b5XSttbHX9MCiBVxwRc2DRpwMMmvCi2c48e7Wy8EeSRjNZk23MeYjT4pHsGoSbrdcT",
  "key11": "4euE4A8efnGUajXi6Qd7HzFzfv2R4NdvEMDp1P7sY4gkMTFMCpArHBBo1WdV25FpMx3MEUhpTvgs4cQYSRdgPxGv",
  "key12": "2F8fmHCTFUwgtMU9iZYwLrEbJQoCR3f9DCfRgGhXMaY5CYSV8M3jLqW6PqUotPFbiVMTXpRkKTex2R6TLL6Vzuet",
  "key13": "35E7BojZCqDBpeAecNvrjDALTKWhw6CJ15HMT8SUWTVA9uJv2byzJmANjYxiSNBAmsG1RM2rZS3Zm9zTCJ3H8WNb",
  "key14": "eypW34g4dxgkuhwxmtQM89euryfL84s4emfueAVFLWqUfxSoT4xijxnYFvwSUCdCnFPKCh5eRXpFERKzkDdGUCd",
  "key15": "499MBWtTktW4mZjr6VoFB35zAZqxPNm6ff1GXBiFh12oZRw4JyvTKErkDxuDoiQTyRdEu4JaPufmuX6CN8fugJWG",
  "key16": "2Di7hmjcpWM2rkF4V9CzR4eUYw4rgSNGXiX6ygFwstqhjRap54Sg9YWmvaM6odEgQr7MP5YcwfvJy9y1ATyetPgi",
  "key17": "32VppxW9ecwC5sLSwz8kSxKS4fhE66ND7j1qYYvcpN8y7arJK4p15mdnX778dhJXHdyLs4e9Mdv4exPzCacMm3Tg",
  "key18": "5K7QbkBqxKpcpip8JXDthZPbefJJZVPWtw4ErbvGYWZbC9iHnXPt4E358x5EuhkgpHmpKZt9PiNrqPZq69vgTHpo",
  "key19": "34J8oB5CnQ2Fv8gwttd4wBo3QXNk5w6SmHkH19qpD3tr4A8Tcyt4V6RhdkWzL8Bu1ALdjE27kwJYnV8TDEfTnFAr",
  "key20": "5raqKdNr9eYKdsZryxaaiieLjrkQ3jciX1tsX9gPfCxLKE87dPNRvyriXSubfCPn6FNJywWMokeLAGdC1nyDjE83",
  "key21": "EkXanoQDMR1UtB2aXm6SBftHDJJ9EiQY823SgTDvSSLtWv72WTY5MxAmSEwCE4kLnEs4es3WAP3DykZUWLNksw4",
  "key22": "Mr8qPsCH7tLouzQd4sK67phjLeMNBzQGD1uFrduZkufn11mKSzcJ8e7AqugmwXVkkmsxRxcvXqXgcQUHvU9UcA7",
  "key23": "218imTTQ6K6FhF54tmmZ7bsKueK2VgL2Uuh2rtUtwYufSHdeLwM8gNf57sEFNPQ6EheMMEDy8nVZjs7SHJXHaa9K",
  "key24": "3CWDK1LnZEqZVX1KzZULN6KdmGjXsAq6xnmjAvpprJfeg4yKdk8f5s1VdD186ND8QADUMN3e7jfmkEH4PA92hx2c",
  "key25": "2F9S1SvCbSvSYo1qoC3kM1jouNqKvM83wEgTzREW2kmB5TpHDLuHGxp6qcTzKULkCSZPf2Nn674nHGpiewBAbaey",
  "key26": "w9jZ2JiF7siPWCnzVq4ykjizmPZicwty15g2pmKvUoz7AsBeuTFZpUAEdV3PCZiNji254norN29rp7adLX2pcQa",
  "key27": "29XSU1ipDL35q6WbFujx4rYVvH32aSZFRFepAd5zqBmLyuxzQaHyWuhCXdcS6BUPXRSsCbYD6VvxPXheR2AXVmUQ",
  "key28": "2kfwQ938un9ZxKrra1SSQjJf5fq3DAWRB34yC3dVxjb9srqoUW8RjfhrxzD6EDp4rp9Nr9ewuzo3RWM4tpnLwSwo",
  "key29": "358McepMmVhEJF7bbJgDmqD4GJTKB6JjBVRNVw9rPCQd4ScECqXqetKycdUyGz3wSu6Y4mY6zWYxrpBzpcCXEbeu",
  "key30": "RiVzRVRMGCqqo23RbHStRmyRdbqvN7DUQaMiYK15eisyC3p7vNr8sCw9HEusjCemQcyo8yRCnnGB2Xm7zQ56QDr",
  "key31": "m4Xbbbamq8mCgx9SdNYwkgMthF6FRz73NapvcDQoi2oJUN14gLgUZtrHxBeQYUytwDJeQ4geN3JaPGVaw2GpUj5",
  "key32": "4bz8F4GXDX1ZtoRTe3atHi4wQ8JJi3PcXEyQVxALwMP9fkDKHi5v5RtswqmG76WPkwmDZKxARSwtFoK3aMAZAtZD",
  "key33": "RzeubRmu6nnzPgT3zZm9i4ZXpmyptD8QJokSvkCwDGXQVYUqpvCDLkmEL8J3kzTQHLMzY3RAG3Dp5yhrghDYRWL",
  "key34": "3ZNvMFJ4N5qE9BUYavqneCaxYR5WLhgjn3HJM1CJoUqNUukbRzzNz1wkWUaNZKSmgugvPojTesKEA3yv9V768Eq3",
  "key35": "37fsh6WpjomfPaK5npaE15ftQhYt52WYqZfVFnAvTpEEdYH4euxvNuhes7mToDFCZeVXCRczyaUf41xuhuALhrKM",
  "key36": "3voLX6xUpoRx1CMhRQK8HHB1es1AbLe9dDWbVCwtgthZTzSVEBs3pZHgwaDb5uKwauJND8kCK7BwcgvB5jWSzffv",
  "key37": "JT4Ued9sd8Q2h3WLuCa3Fs6JN1WDMk5TP5XstfUTTDgRYLvGDWaQbfgfMKxf9P5PKh2ttL9zi3rTeZUSwvqvagZ",
  "key38": "3tswkhbQ3M83yn17SvvmKGiaoxM6KAQVaJRQjLxKnUhTVZMDxrhVSVefLstqU3QMXo5DJFEC6PVkqU9pNhi7CqdT",
  "key39": "2k8gprNqLPobsGD2p9uWUgL4uPjpYiFD4rFaneXTm6aAwHktNa6Pw9yy2kdqc9JRtPVavm4D9TteHzSxvWzwyL3B",
  "key40": "4R83CeXvNwajsV8hAFKwWZfN5JoUUzS6VZNdo25ARQ5mv1CRUsfR5UnoQUsjQ8Fcp42V9Ppd8cpdwmhAjrLwmZha",
  "key41": "4hT5j69JbNB2VB4JZzGz1A3S3xn8mMgd41Rn3e3Ytsof6i5hHBrtM6maiDmhRf9oymAnCKoAY2AdzpsswEnb7h3R",
  "key42": "57FLmzfehBefHG2nJXdRVoDQk3z4tDzCVotxriNtPGw2u99Uw9MAQb4CmUPxBGzBGoyk29pRnYs99yoptBoxXQmt",
  "key43": "4rqKyjwEheRWcNsdX3EwBpJDx23AUg3ECrVgHXLPuDB1oGXJxsDmxUTvZZL8UiiiHqRu8w9atMEjNHAB7NMLFs92"
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
