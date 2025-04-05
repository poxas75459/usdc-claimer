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
    "4okFFsdshZGp2wV5AJzYq2CyJu2474u72rV1UhfpG9uZFXb1a5LvcM5buunFL7zqFt2KXpnSeVGeBb4GCr271Lgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XYKLZpe2CkPJfdh96KsEa2cozgbHRWKbPK8wPovNa29bebSAow4pEE6w1MeZbuUsqDDaEYRPq84PQbyP6rDx2du",
  "key1": "3xAJqfpXznZywrZu3Jk7sKMHio6XadzgB3pF3QVUXh76xN2nqQNtyubkCDAAMdYGRJ8NgXcuBUxWCQUzJk2MD75y",
  "key2": "2dUGaQ3L8j9Yo1K46cRPYpvESEgcYMwH7G3i3dEUQKhFJPqUBx9JFSjntFPqhGkCzTwBbqxHnjnkipGmefkcLceb",
  "key3": "3AHwJHdBcujevR5ynDAB94m7Tsz2eqbRSzAv1GBTTb4Y8jMheB9xbKG3NXhFZpLAXNeEJ31t33BvY2eqKzWYo55x",
  "key4": "3Mheojn8xkr6PraAdLs8YLrT6duXaQxkUmakXhA6s3jxgDwdnsRrezG2jPjPYmgAr1qZ94nudowgnxMQ2TayJf4m",
  "key5": "38yyWL6tWMuWRSTymnqGDBVdwaUx8DVfb2rKBmLkfAskFGWXZ9VdurAGLjXQsmuvPxF3HDp4PXYaSBAS9ST6RRTg",
  "key6": "3BMy1ZZST9XKKBpv52F4TJJSnvCyaDEGt4UjDufomXowqSS4X5m7cc9LX57ApuTp1uMVKjYdDTov9upyGEnMwSdZ",
  "key7": "5jEPJ9xB5GhAMA27aNFcMnucvqsjHf4r17GUHcs2qcQRiNQhbhTgzxpPhX5PQfZrbyUwWs8yo8vJHnA3Sh8Y8CzR",
  "key8": "2EXhGJsK2ECjS2otDYJaSqdTNbUoRzKspXDuueKJK9Fw8mgedWhhYZhbxq3JsnyNmoRBnzgLGAW4ot9DmSqMPtTW",
  "key9": "2wsXXUTkExvjBpQvveNx9jYf1KghGApaWdATxS65RaJySV211R8e6CQ7JXkBSHD5KJ2WipNwEWbaTKDmyedzBuux",
  "key10": "4X3tsmsCUkubBRffNKyJUXuLCRgRhyY4RUfNzCfdCNkkg5oDKU8JWdKtRf1VTba8eQVVUEjgrrS5smrYjvb9tNmD",
  "key11": "38HkHynZLznrK7QZcCkjUzcvreWpcAeTZDLJ8nGDAuxpSjUDSGx41D9cMKxJJmMfAG2dZyfNNM8UJm2uzrc6nfcQ",
  "key12": "Cf9gqPxmtupQjXF2LCKAwAFi1miVaa6didy2ZromXy9dntjMwVxFeRqqKLdJmiw6bdFT5o4pRmwcgi4jY2Qv2zg",
  "key13": "55jCeGjJCvqexPXhEW5i5J2eQ4rQDcyRaX9kbwEBxTYyr3VzWSWsssvmvkU2ubDrtWdgE4kFxkwfTgTcgND98rik",
  "key14": "3Bag38Wgx8zAmAZ8fDzbzsVo8nb2hzmVj3b753beU8xGBVhGKhY7yh3PfxJ9G1ehgJ6kw1a31ZQeoQLmzAfsvx5h",
  "key15": "4w8uNfvzm4UPU5CPhBQFd87BL7tQQSkUxn1HcxhRuDMcZxnsRzFSpNCUXvBH5CnYHYmB5xHDM8Df7iS9tW15V7UC",
  "key16": "ez9sYokAFPTgyTBcGar3p4ZXg8FW43pdTiU9kVM5UNRCsqL6zNN9HjTUH4MLL4uVBTgPGFnz27CWvmDch6SYhUr",
  "key17": "534dd5RuT3DHc1d4C8UBQuxPzK3BvHgSqNkjesvvTaiQHMP3hW1dwfb9YzG1tzEb2R13QNZTPW3wNL8QagWwX5Dw",
  "key18": "5eR5vU6vorkFNE3oLJkfDJK4NE5WHu7Z94XDJhn4q6JakR9XjE7pso5wkdmpLPdpKfwiqsjnsnp2VDjrwvYqSvfR",
  "key19": "5S1s1uaL3zcG7TfhJSH5CiN8MiGPQvJmVzG6Xz6dQ6Aw9z1FrUjgimRsHtrGtpXgojWjYTEJVGwrNSah6M8XNQnS",
  "key20": "2AatxnrUwPysU7EFHKwdqLPtABrHFV4WViWuZhLUX6WMG9ZDe6ecnFsH28D5xTKxxmdcERV5FrcsTpw5aYGyrXXZ",
  "key21": "31xefdK7kdGd7bx9EmdUWdedSxRyHmVjaHt9rPyJSErpHPiuDsEydqvQXko4RjyPysN5z92479w5r55ExTfbBGD8",
  "key22": "4M44oG3wW161bLbauDaSkRiRYfm9gXYgBW865UcmJ8BbE6rajDkqugTs3xfhCXhrpMGswVQTKev4EWDmcUYdLwd3",
  "key23": "3bNCpERQ6Y8aYpdpQ1nx3ngAzAs97P88WqqD4QFP2gZL88A7uPPixXwym91dKo1jwe2MbWiWFNKdjpnFBs4UL7sp",
  "key24": "4FwdoSu7mJF5QnFpQx9Q6B4vQkLQFRDa2jEjctJ4ryQ1exEDWGwrvhdsQTiVyoaXKHYR5ufwoHdQQabJDUZ84Qvr",
  "key25": "4aLyXs2s8TnghcJSp5wkCukcsa6BZwgqVkyfkjBSm4CryVyjUFx9peUoby1VfWAF471sS2XJCQkLdAz3EDHJXF7f",
  "key26": "5nqdPNhbitJpDXB4hibWuVy7pqvwZg9eisV95HvjyiFsKEhWdZQ2qQBUCnQp9xjFcmxVh2YaaFAffMMYzRTm3vr4",
  "key27": "x6jTBHpgMagWhJ9yA6QWxmYYfvFha7i3jV9h1AZcBffNUAxyJMU7Ltg9DU8BN5N4CxoM3fuE6FxgjUCUYzfaE73",
  "key28": "uQU2mYrq3BkQu44SoZrrxXVoueK4QTjU5bWoGFr2Tj8zUSS4dVc8UV4Yxzv5tpbVaKcvMzfNucDd3LGH1AKrRXa",
  "key29": "4fTaUAvizZJuSAYWaCNMcd76jP22QucUGfm4JEDGNevRDFQ1EGCJKaMqNNqscfdGxXGT4TCjY4gHQxbWeQPSi3Mt",
  "key30": "3AcebMF3ptRuvqAKpzjKi5HVPn2yyair7k7o56Q17ER9pH7MbcKvVtVDLvLZh4HwDmcPTFvonRGf9SFzuHojNpd7",
  "key31": "4XUtwfstGSetXUWYfGeTHFLM6qDtqEe4S95jMX8DsmVMKS6c8VvhLHSA68Qz45u2cti9JapT4Z4hB62XzqmLmZDN",
  "key32": "28bEAnGDp7AuyKDmUSocyG4rJ6Dx3qjjMhsRBqZntHbusiLskJ2U6oB87wrMTZ3VDbQqUhwt7J1JGAvyG9nrMaZk",
  "key33": "3nTYCXEbMMM1571C1cVu5hjMNBEbMXQ46ddZD8BtdwpEPQf1aYQoQaiWJD8yKqg1cEiU1ASZsaTsZdegFqq35cKZ",
  "key34": "3ztFVwwMjLCNE6S4gfaX8AfLi4hgDwhEmZBgFpPLuiCi3AWhzuHkjubCV8i8dAULcTvbpz7KsJBCpa8a19NrnQnA",
  "key35": "2esv2CzjT3nQDXQquaoNpsrP5FhTyVsZPEyFE3DDZUu8chKQ6t5TX9Qg5ZgQ63gt2PA4e9zHT4oYeworKD7ayJnf",
  "key36": "2g9bFQR1vSNfjxWuvR2h4nPuLFemAYZcBdumMsysrSH9yxXy7WJpZmD29mckHfbEQarJJnnaBNsmb33qAVPf1Pob",
  "key37": "3bKrAzJfwFELD4Vz29AAE4MhYDeEo3fGmQkNKHegUDm3LqgEjwJMRVhFS4HXUMVdeMYVMQQuq64y7CMLm9KfLcDu",
  "key38": "3UXnPjfznog4AavboXXCNaGyocfqjmKtHK8BN8UyxLUo53NzF8Yx7YC5HJKFSJn5NqFWcbvDQaSztNmKQQmuNHxy",
  "key39": "3uNFi2Ucvwfn5qRWPS26tGrXHFXCh5UvmtVuBRXrGp6DLd84LpM3ow4d8q9rDG3tUyCRTDwQ6PkCk28UYvsLJvH",
  "key40": "3nvmG2drU6PC6Ex5LHpAsgK2QQ3svaXGV28QWJBJuaLKcUW78GxCsWM832D1xUpsF8pQ2ZM3z4s7oazj1K99ysGW",
  "key41": "3ScNcvDgZpd3VPJdFvQuMZH564pPxFvQfd1vpTaJtg6genYP8wusXfaK7UvKkYsfkdvAJ71uygJeoZruSb8ehJLW",
  "key42": "3n3RmAEZ6hYPC8w8QAkou31NNeCE8BDRk5iXMjfC6yS17YXsnFAvqQqd59JDjMATTGMrLrs5yAvaW9e3kuuXnXAN",
  "key43": "8aYBsTaeignJGVHDCTpyLMKwp1qwbGP41wHZK1so4YiQkHZhzh7HGM1brzeBaAv15oa3JPKsFsNR27kZJusxRaQ",
  "key44": "63d1Cd74oCnT8cy8DHFhhP73MXm7YhZtgPxa83RNbrW29rU5fNDR24jccQjuxKXPS7tYbMrbzfJfU7sUfjW7j4di",
  "key45": "hQtHjAcGNAUPfQaDasQ3W1JkZ9isyRmppk7eaUvV8QU48DSZJAr36q34DwSLdPQpUTHKBsaLjr1nCbg2jZhTfMd",
  "key46": "5h4FQworuwndjSD1N34HP3gPYxn9QcG92jd55eGuMFHrWPi1qWnfm8ixf7WpbajgijwGKecv4dZPPACpkqdnt76d",
  "key47": "58XwhzCiPpftXHZrjpHSq1RHj5FFW9Hg4CzXZ3TRz8MM2SvYRQ6dpK9wSC1NPKTzx2iMmWLwgsCpXkKNncqDxRZA",
  "key48": "4nbt4b9gXYCVoh4TGiZoPR56qbjqQSiqweM6QUstxoPHVaGfjvT14yUbvz9PbJCxCmBXadzYDVgGysPn7wAWmzxQ"
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
