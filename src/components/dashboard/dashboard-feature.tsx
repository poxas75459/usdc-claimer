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
    "5Wn7oH9aSBGwnfHei2g8i3pN2E2iM2YRA4yT3V6tCPrVinQYzjaDps7XTELeLh4RAb9XggtiXHkhcxWMUw2gFrZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pR3cph2T16LPPD4DrqEjEysZfjM6tZczRqoC2GCNrVghwC2uwFm4ghSAtMjf96H5mUa1MPmqSduEpo6ef1Kj7S9",
  "key1": "3JDVKLNb4NSdKBJ2Lb2zRUXRxy4T7HzALo49GPnPWbSMpyyWDqEP3fe786CGN9n8jwD7jW129LSrd9HXJDVFeL21",
  "key2": "3o95VDNBTdgUQbr9yZ3TrJJeMoyoMSshhDWsbfPfkJfA9higrsi5JxDzDJNn1FN2D7szWFXugxA3mJpLii7RC5Ry",
  "key3": "2Gr2JB932wkJqkjjScid4CK9WbsqJfTPHwkDNQGkDvQSwKJrkFgP7qLTaq8mzgCiAj1auz4vnmZ1vHN5GemRvLYc",
  "key4": "5dzRFF5S45ViW2yXQTytMEk7Zp8esoYhL5TVhF987yzKMQqLYNZsXDTWSmWcVfxjDdb4WkAQDiv59CH8uy3UK2zn",
  "key5": "2CbcpZeuFxwfpTnYUwCZAt1uKUXXp5nW1qXUxKBmrUtX34FkZRe5FDRyd8C7H5DFDh6YMp5iG7q7kA37QNwGFjH8",
  "key6": "4ZvYriVdeocNhuMS64Ka6SyfZtDFCQZ2UvmBJqszZS116Zz9kdXLL3n78gMezZ42Ni3VRWVAjfp7RQr4URHNP4YF",
  "key7": "2GJ19hgBJatSDNBum7b3FRyX3jbQWuJ154qbVF6GehXxLzxcPQQzHh6pb5R3ujpeWxNwzWFXBBkypwKj8de5ZiGA",
  "key8": "2grpEivHh84jZHdCbVjXRn8WACZwQ1PC4JLzESQC3nphpKTMSX7S2SveuamsyTMpHiKxJTkun2wsP1qi8UXsGDci",
  "key9": "3SX2Uco8PtXPyDnChxSvUyCzy16PzaR52QiZWL5DXkKPbc5qDDPsWZnqcEXJxXzRdvhw2XN4q61N7p6yq6hq7DFZ",
  "key10": "3gwQAHk1W4N4r74AjrAZHAPZQNV1mSaf418vNedvfGg5Nswr5dhwq9dkWNA44SFBxESKriiVK6wt3AMgvZkiy13N",
  "key11": "5FdYM3i81gnpNKcNK9RdLvNVhaVSV8xzz3VjZecvPMfc4qxdy9md1uWnJFdvgiDp53CcTePgQwq2ozL5EZQLjGFw",
  "key12": "34y2bFJHFtS1kjL1SEwRBqTbsGmYZfxmnzmGDW27HDfiKbW37LM8fNLo3YMnxjhqDkidzS1JgyKTEZ4wMwULZJya",
  "key13": "2HrsApP1tzoQKiBQEVBtSQzay8SGMJsSBZgUV4AiNHEsuWakvrpkCsKx7yNyVCBLhYgu2TLejJs9L2eChD2caAg7",
  "key14": "2QeRPwshDjwDwke1pYZpXmkddVBdmDWHVZYmUrKRhcrDWvJTyvJm71UWEuke9scxb2nwCApWLnRzJrq9qRG6VM9w",
  "key15": "38Bs7fKkJy7pCjCzezZMTdkLqQ5rSuq5xWPHH5e2QqbhK4jBGmxqcidt3H2mmbD569NBSXvPeMUQqtQiqGv7rRNi",
  "key16": "4cjzXtVtJkfViUPLadG5dATNAfcCquSX6Qk9XoPzf1po9CtSnWj75GqwKrHPtSUMhqC4hY2XS8udsHdtDh52vWFv",
  "key17": "4Jirb85pf6EGUcVdHg6MUZSPXaQeNGg6vgGZypEayQuRaX49tg1FW21qjncYDjgh9HnztTTdoHNYnCu1uXrR96fJ",
  "key18": "4UkGRS66K1LdS4SXgDkeoR3uf78T6oZPN5aK74fUYNbfgMnGLaxiZhVQvpUeoAbNTfKPRgCgQpdPpMNdwDp8muXw",
  "key19": "bSyRfPvpL5yLZHQvW1a4JxpQeh2h7gy2rSYHir5sGNshts4Wz9AJDRiw9boQBUu2x7kWr6VR9gkTqdZvsx2DyRw",
  "key20": "2LJ8Rv4xFuL1A1mNRByX2Lbzc1N3dRTMkpwKxDw2FnSycV1ax3vwoWHzQD8HzXdJsgfubLxQnVE47cFR6YHHxNV8",
  "key21": "C9FedCoUdwaXtWCHeQpdp7JbqaESWzvPJJPMTt8DoGZtWo6yxJhs158WxJJ2EXNkjY7uG5F6mJdNLfmk36Mjnvz",
  "key22": "3WYgfRPkzTDvd2GHCZWzWaXLxrmz88Jwg6yD9u1QkHEEovGMirovRvW6yVk1KevLWkTMJYemvoyzxAKkd2EBHA4u",
  "key23": "d8hrXob7TXFsQNvRsAJHzuHjrpRNR9XabcXJM99JaJYdExmfvJJQG6JWY9Ptjwua47A7Y3k7r9TDnRcTG9xWyas",
  "key24": "2AhZ73zSZG1uFhGR4rhdCVEDCZSWocZgMnGeApCwg9oCNcUTfiJJ8RpCGZwD1bkePhPa98z1onVig7yFt59eDqDK",
  "key25": "5PozEXuAyqA24dmpXwhd23P8JKNrPnW4S3T6thU22AehoWa4RGd3EX2MjYJMwvb9qXsK9ZkS8aD7e5CoWfY68GT",
  "key26": "4WFYcCMExc7x7mLA9FvBvjNsTuxif4yCD1ww16vdavi3YWi2kFoe5fKYFeenaQ7cMF3X2bQeSoMnkjP1vZB5137o",
  "key27": "3c7NA7Mfryv9ambfM7MBantLAUnppzZ6pY2NGkVG7G2USTZYyDBNGEmS31J8xriUKRoVGvj7gcDHR25B57qkW5GQ",
  "key28": "4srdVYh7qPJrF4Un9KEvMEZuHDXhb6DJjTekSEZouJRgk2qrCDWui87CQYB1SZA4dCGuCwmFwKGZ6U8ks1dVPzPQ",
  "key29": "29XTcDRC5yUQ16hzRAahSCCjeW5MZ1XYiXaw9PaXbTj9yuu7mxf8SnGCcghiaDpAwDMYzKfeaTQk6TcHuynGMas4",
  "key30": "52R9jge1pJYbFZQe4Rt8tc864ZDr3ApcYnHi44U2sGWpJmGZp5EJbRRWVU5dkoQD7TxRJrrqf4PuzZ4ZuciQYSsk",
  "key31": "2k5bDWUFqz8zmpEzoz9UaAPVCjgTnrVQS2aFzPFUSHsNfdeAncLkmtXbCdqsTn17XgkPD49DTEdFPL9QVyDAYvGn",
  "key32": "eaCArVdTMZyAi1YBewckMmtA1reLKwV9yifJbsgFHBoMM3Kf9SZYzWn9SM6mB2d9CzMQi493qQMkP4Eokz6udMr",
  "key33": "5fgeJv1GFMA9sjoFmw6kc1bMrcpuFKiEB2BqRRsSyWXYf7LLaguVcaezgJQr4CiaXraUvFxeFvKxJQ1HYaFeBAhH",
  "key34": "2iXtGnvjD9K2aMvGXU2Mvd2Jn9rSggFKfreE9bKgJBfPcZhPgpz8DnuwMYVeMbnNygTkFQi7RY8ZGb4AEn7wLr6d",
  "key35": "4rcR9y7b7Jae2pXrD6WuffoMFgE64KPJQcupUhkAYKCHQAPs6Qd8wgX8ntov3kxhawUwkLrcTwMy6tBegUyTHSU5",
  "key36": "4Bod561A7yju5LqAjryt4zJZCcEXJR6hyZHytMYD8jti6Pjh3kuryEe75vucLtiEbEjSeetvP4uU5xtBjsf7bYxr",
  "key37": "5ZWT5BuBw3w6BKg6u2GB7E2VZLn2kbKKc7KBViNrvaFY3r8mB4yB6rzes78mpSpr7hZDGFVcaoSmPWxpwveZ2CQa",
  "key38": "36sthiwqn1g9ZUtN8Ki75oSkAur38pPWxg7BJXWtEiqD6W2r9wdhRVadrU3f8hPdx66TjDAXS9rAQRAXJB4GVrnc",
  "key39": "3jWHNAhL7siMEknPeehnJpQL37ZTzmM2UkGJ8W6n2j4N956tgAGD8QJwnAGhrTpMNFwdU5YPXxGFegze9qoob1YQ",
  "key40": "gHXk2m3AvqRuDZeNNnLHEbuMJwhfWsY7ZUGimAThgb9waRt4j9Uy2VNuog5os9JTgpi6opjBF4WYc21H5Jv5UJs",
  "key41": "oFxpbJWooBPmEG9aXNYb3FSeJgUJ1b3Z1uk3Y7viKuh2ao4yhxv1BEjPiC4K2kxCcP8SR9R82DcDrK2hoPdPC49"
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
