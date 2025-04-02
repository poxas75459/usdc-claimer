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
    "5Qx6KDrA6TbvZbKSpZ6eD2rqbxR29zas4KJsZWAG31Upyd9m73Jt32UpdFrpZbJnKPsv896Js5BhyHMHn195fg8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPePFCsULwNi52ZUtHD2nocvh17h4qC7r2PspmHswsdsG9TaH4pj3aLCKT3Jec8qsR1PezXfYZLyMxTG7yoLPbm",
  "key1": "5gkReG24siV5TVVg2pWAtqToKMX2t748qETmQysBzi4aa3MQHH2WXqpgLQGx8jMhx55qqZZB3vZvSCe3aWZcg947",
  "key2": "3GkU4qTwuYzkQSfVKP424kCq2nBodFvULmVWYdG7EviL1dQgHhVazq6UcfqGdQhwaNP5Ctg48rDH4NzM6c5yujSR",
  "key3": "5TXr9AuRxmUSLYnB9RKDy73jghfsehCMWGWz9QHEPiDvVH9xm3Tjc53ysTStsAL9NJpF9tdef7t5fVAh59ntunE7",
  "key4": "5JDu2d5u7ZrrBrps1yn69XyeNy2FbyapUK4tXo22eq1nFB3KhcN9vRVyLsBWMxfB9VTPZD8YAppBwcBnoxPoErq9",
  "key5": "2UozqiGgPHZ49E88GheE8r15A7mJggwQjkxDWCCtuUkXUigAoJdajqXurTekhqGAxm2NDDN7U9t7WSRATRyjW4Aq",
  "key6": "3jKATLxvY8LFgZ95WLZAhZJQNqbPxhjSrycjvtj4CoseoLqaBPeyvbDGMNRh4zD6YExZvHfmknQ8H8yLLyUNgude",
  "key7": "2Y6AzR7hy9QZD1xuDh6VuHsJnFUGVc8bJ3X9mV9T3iNaMMWSWrvo7Fcrd8XR7EWr2vJrou7jtWWUQDaTjrBH5EeB",
  "key8": "BBYvhkCV15DVpXoSXXmaNSa3Vyef4Z4dU1AvuGSEhneBVztGASYryP9qR8i8moHwseQ4BifB17XrHNpwGpeR5cE",
  "key9": "5FJQULRRCu2yiXvLnVg4jczdwTRb2kqLhjZt1k4dwputpz1hxPchrsptJ1A5TT3UUA1LqUf8MoBgUoF2YuDJSwde",
  "key10": "4jbtzxXjDjWvKQsZmUtfM9CV43jMHNRWmxbDm7SVKzBiq5x2tchazK5juo3joJppkz6jgfrDx2kcNYwf6XPtxMak",
  "key11": "34r7bnaHZyDwMzYXqesWoRvSkZNVT1tEkmGp3Nizqf6piTYr1545jPgcosCT6p8Ab9uKBjnLPNv4zdYUvR4tk14f",
  "key12": "4ZqKmpreMvyBNzvrnVwUJ83ZL9GXN7juvVg25HfYwTjDGD5jUvMESZsXEhgBAnahZU1q9ihsg8sGg9w2DwmdBvma",
  "key13": "4Xm7PxGq1Libx2dXPH99tza9HCvm1HbReP9adcLGJnstkn2FnCmcZKPtGRzaFcwJvjMCxQkx9wpWYqz3Gh1sScJ2",
  "key14": "xqpSvaqYLnQ4kLHnT4PMtp9cmMmnBSD2DyC1hUfxQYKx58CxBcmt5jWTNoybt7BqPJ5xkKfeHmVe473RfMB8Qmq",
  "key15": "9sjStsCi9UtFZ8NEdPzgh28Fq4pjzTDndoRZTgvBc9XTT6Dg35KeL44Zu8T6yeHaKMnmsJahSXEmNB2QnpYbYmW",
  "key16": "4o2CGzKZZoVXfe4Zxu6LUL1YLhj3FBdEhfcysJfuAevUzJaQsEDxboL8sS7up3KbBnvbPNRGnSDWJsGzDGLkLSjA",
  "key17": "2Z6oHPLTxiZ1qV3pA7EY48WRFgsLNAgRGEyXmKrMHwhC2Gm5w94ExFerBpBJnwBANvFxWTcyhP7G21xuS6msRD9Y",
  "key18": "34x3Q2dFbURjD2ZyfxceLfZXLx2csXqPB1w6QdSeKtjUXY8RoqWP7sdiMrGbyuAsvTTNQP1NymxgC1WinARpJS52",
  "key19": "9KPLru8UAKB3U5ncgQdNbGWPLDXxGoEtDNrJnLQEX5uDAyATf8sTnHFH5xiVTFZkJ1Sn2kjDV1qKMNbyPREFVHv",
  "key20": "64UMPgQcoyxwBXXd86F1bzYMSxka7ZJFobvHbdgxrR4Ted4muSE685Fo7EtyKNa4iNkHrAPF3sGuHJdNHTFF4iWJ",
  "key21": "26hoFmCRkq1heBvEXkGsX6nw1ZHafYsHRwaQfigCsthdQsGLxsC3otDccFkSVx7tWm7KdKJEHFFLC2Ay54kV8in4",
  "key22": "5soyGtAjb7CcWxFL6akCnKnjFs9Ng8SbFtsEeZsBGAigxycFvHGKpg4jiSfWqyTW7M8WSHxWrUF5H24wFCfFgwr9",
  "key23": "63V5st1sn3tGbAtpvv7B1uJK63XKXqL9WfMRabVw7FFrCuktMi1RHGJjyAYMp3scCQJbrwj55BfjvksbKJwCFz9j",
  "key24": "3swQueF7WymvYAMMA2kPPAUJo8gD9YrZm4st2yAkNU1TNQR3K9bix9XSRYzhKchLrwzbeq2pRHyrx8qtLEBAnPWU",
  "key25": "82BgWwq3iurPgo2GB4RgiPkLxMCVcmTYwbRt2WjY93LcBLbi4kR89PYo3j5XhcWkoK2jLkGv1aCBDz47S7WeBhw",
  "key26": "2G4d7VmURwdGF2naRe3nxGavJcUpLXRCJwmuefgYjw7Ly18CxF7NVSFYkK5uPuDFm8cFNZtGi8vfCBYyQPhBVzYk",
  "key27": "2Ecx1rA2hsKLY8t1fLLg8ongyzS4Yj7o6VrbYsLL39tFWQZk47HV1Z7ZXijULk1xcLinPwemky8VnugXB55gdjZf",
  "key28": "4jpFpeP3MC3SxbcpvyYy834gUSNsKGB88SYhrPeAm52D7vv58zxXmksm1BUp8ooJGjzMHnFnPDk6qoBbMsfXi6j8",
  "key29": "5WwD9V2ZJcQvMh1ZWsFNCSdVUpqKDqR2UbYFHHhm6Nyy9UU3EiHZ5BvE64QLWbY1j3kfPp5ShZdQvY6wr1QRprsW",
  "key30": "51q2yDLjZGY1HH1YGkZWarDRmfc1NQ86XhvNyWxNPASTDwgBdpKsQNiqfTN5BPh5G4bzYswcrzcMta2SuTJ7trem",
  "key31": "CfRu4cr1jCk34yt5ha9sv8efjUiCizCRqjLLMSDmqXFF8H3YWcnG6bkYv5MreZNyakMumaKFzUrRPfWcPyUo1Cb",
  "key32": "56kKrD62QVCvcp8zdSRprWxvPCJ5XgQArghL8KAJDLTb5L6Kj33YEru3mRGcGJReZ7rZmGvTiSUeASaoivhsN23Y",
  "key33": "43WK39xwfphA9jcZpaS74JgYqBYvCFRmkaLDXrH69PP8C8A1WEoQCMwZaYRjHnSfYkakkaPiDUnbFFiEu15dXfXu",
  "key34": "VP3nxrtH1bbxgmzwLjucixe4eBFjQAnW3hGbuPvsneqiHmHVcocuGqKjAzvBLeBshBAYTTxUnHLsLkjkr5LwrRE",
  "key35": "4oBzo3AuP8XgdYMSz1Ga16CHFCYJdTicN5GZDdTPatso8pew8vWoZXV77BS8T3Zo5TCYSPtQJD3FH1knGQyvivAR",
  "key36": "617tQ8uEoXecMYqBdWH1Dpy2JyqBrd1K8jKa8WyAtsnJ6c7BqQ8w5ttWuKSB74Sr7GVM2cw5ch6gHYKBjLFw94z1",
  "key37": "39Ve7QWrs7ZoSbukXSz9ZYvrDK2tsLCQ9jFaz7t1MV1P3axCCbuwpxLTJCWew6W46AbxeU5cQzZYe4tznBuvVhH",
  "key38": "4uSboSW9hrzauTg2a3uQCwTsYLU8mtQCdiXrxzVGs2BkLXDhEbxWqQ9zsw6cU6THDLM9FJ2d45urtwfsHJs4B6rr",
  "key39": "bbQ7REUKY7Hdp9BSjEiW1TEQdvQV7pACw9mLCuhtA7t8vkwmW1jGUveLWaxPEVxuAETV3yP6ojt9ZHjPnoR6ctW",
  "key40": "2yo5XJd8cQqkncV4WQyyc8RBDfvvTAtkC6YaqMKiwsw1otJLGQsEPyWTUw7oczfvad6qC8pskiaxaF1yqq6k7LnP",
  "key41": "1uYSKEHURm7b9s2jBuzuncgGUneRriatmMQnLCxWzUugVnC6PUZT3vKGDCvPPSXe61Zc9PtcGpM1ExrTEfeLQhu",
  "key42": "3qqWHC2UrfvVBTCTU6S93yXHv1N2KN6cxpioYfqcQFVgqEdGEpseKnKPKPVU7KUt8V9LMgQAzfmk4mqwAvbonnxa",
  "key43": "4HwC7sDy5LEEnUEUMX2ZLzsyouJf3Cna4pGyB33t1kRDBLyEGQJZCfH2NbdYtFJC7t1q6XuzFa1Gv6EoTygo1Dx5"
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
