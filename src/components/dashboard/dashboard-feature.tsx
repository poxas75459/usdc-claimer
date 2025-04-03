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
    "2z5nJY94atJMqp5AnxHfjr5dKfCNGELg4yyFUNoysygwhLn8U8XrmiFLSUurp9TENYfWW5fQPH4RECEjc5rrpXSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e1ZHy9kbWcB3qMBpihjY5S1SBHGCB9XXZ6xjwkJ4ULxe5obgrddPnC3xBGW8rXizPxGNBDCA8gozeics9e1UQhP",
  "key1": "5AiUe9GLFWXSxD16ZUdJdmXMDQ3ydLNL25fuuMefhjcCK1tiU3KRfp5LUz3UALNkehwb7gpqiYtXxmKFimhtEnPd",
  "key2": "5APRvrxxAYG4LMokacsV5HTgg38aBM4wMb9DeeTeRyzcNXruYvWakr7eyitN82JKDB14tp8st5ufjod6LvXcS3Hq",
  "key3": "45CFp4xD2WSDyaFairUwDgXEcifyf663cwu1LaKvGbtW3HZrJP7VQ2fMPXDpQaeJJAXg4nzHxpDdVF3cRK8wytb7",
  "key4": "2LpLLKcdFVEkh8nZE5tEg6FjY5v3oG8g2KJLJe52CgoHkZyifqotYeKcJtUMWjQpgRQijkvUkepMuRrocosyL6ms",
  "key5": "4bQ5b68yB4ubUCeeEb1tQx5YHNK3d53w66hQhdp4dWU5P6ECy9pKWS4SBjKQzkqx6AN1L5PNWimGfncz82TbLvpD",
  "key6": "4vMpHwbCdPc29jB5ZsFYPaPV1hxgYCFWYYypzU3CnL3JHbXxsR1N54x8uwV4tqbodTizy7EqzTcJb2oM19FFu2rL",
  "key7": "ej6Wd9SdvDjSa1a567PB6hdi2mhtWen2YhUqRuFWokmUtqYZpwAhvBAne21vm6TF6xS4eVZ8rha4dYTfNJSHkZY",
  "key8": "5MwJuZKwh7tAQdKf71Uz6mkmakdP4VKnYM2RTWYLWFmYvudJwA9KVXdvadNpNoVEEPpiGYn6A3uJ67VuRK19VoBa",
  "key9": "5kitwYZZChSubxdRcRQSSuwAaS8dS8XKwThwj1e6nFLdMdyVBXgowfVFYhMPRCYNYC9ymkjraTVcszJGg6iVD9Jg",
  "key10": "2kEZt4aSeAyx7U7YLZjUmhqjMcGsJpb5AjmEsz1DXuEYRkkL9Zd6CdQgoS3guLPZ6Vvk4DULpbyjMn81ZY35TcH4",
  "key11": "3hmvKPrY9KWnaCA21bpySmD77sNTSxhBR9dJ8kRySmUvbgwuMSk6e9MAN4ggmf82NoLus4HykHqHe9DdbzjzgoG4",
  "key12": "58t4FTVtGA6H4JbfXJUh2RgEwVjnwdjsC5ZSc7XzhxZMjJjcGHT1J8uiLVyjZ16qAHpR4zzJvtk6ZmHPP9D83hRu",
  "key13": "3qx4MJ8rRYuKmBWnU99x7521GiNGB8GYHHrKWEJka7k3cizwByv9WSo3JHoeftbinittB4saT4quFQ9e7mokHBQY",
  "key14": "CA9D4hzAh6bj1mFBVxTzMT9VgwDPVaDoMvxSYq6XkSquUSAEKKHtrbgvgUGYyFk4cLi9JFuKMWyRxyAARBNrEWu",
  "key15": "5aKT6PsfietYK8m4gWke8fsk3uqe1PUZX6uC2X5yLudqvadziMV9h3dLw3c1AYHkBgHaEaMVb8Tr8Dv6ejKPRETu",
  "key16": "4jEsEp1VjpfzN8stEqCGffLJoTsn8CUfc59HnNu8XcQtte6xbD1cteN15vXk1NqFZ6DA82Zx4vD3usshQDxaSX7r",
  "key17": "5HTYL9ojWscF6Q7G58MgQrCTmtBfrEAXpPPyzNvxvynDtGun1XMLbJxoEHNDEbQZmj3yveyHWehgtXQFYxtc2m2j",
  "key18": "29hnciChdnZbc6u3vNbVuABnAgXRxvuHPHQ95WjJ8jhVLBdN5CXgCRorkx2mK6pbVFBqr1TiwRLCyTEhNTp9qvo5",
  "key19": "67JWSHppzccD3wsh9Bv5NQJMQvT9GJnXohsAu4KoDJMrLsqt4KdDo49WjSSoanJkYDjasvCaECiKmk8N6owAYoS8",
  "key20": "3tTYE3xvm5GECAdn6csYjjmXQY6oBjRJAXRLynMwCQLfGwQDFWrtKuexVWVHvyWT1Yj1a8dyEznpEStHjJjCZzii",
  "key21": "5G9FkBaHJunLza6cfvgBVD6BFsTmd1FwEKz71Ce52koqaAyo4CjWqVUgqfZ6Lnct1nAjJ76MdiSM7SNek7VbYRFm",
  "key22": "2g9AEiwP35A7mHhrfTbC6kFm1BjUo1qNizbKwQeBAZRZgoj7Bryvt8e22jLvU1A5N6gT7S9BGtvnbK84JdCA7GYH",
  "key23": "3hSB4PoydjTUXWUmT9CL7E7uiE5wkodVrMHDTcaeYkpketYMNZ3whkQnozFu6W6FSRhb4AmjV36JxvgApBSq4g9p",
  "key24": "od7gzEm6u3scKinEKzzgXq3QopsznHyK9rHUFsXaMpvu44UFxyTK21zqSS4W1iT2Ewy6XhDULVgBDRNdx9XmaTi",
  "key25": "4HXD1pSTbbbTuvPwQyYwyXqPg6foxJu5Qko8JRRvj4yUBG4a44wkt7mGPx3H8nHnCdeG9kym6wDBQ2cGK48djyJ4",
  "key26": "4kcGKa1Mp3SqiMjFsZfCuJcCabHcJnfYyBz2VhwoG26J7pzywWk2CeBod1NHc3vqjkn9xYjLputWaSiX6WXGPEPM",
  "key27": "655oXVBEmXwXVEZp3NLxJLoxRjHwyDC4F9WF6dTH9G8PDqoB2DZ3LAVX2RvgX4er25t5Ft1GFbCWcu3EJG9Y9QvW",
  "key28": "3A8LZtwCxFhD4htTNDoyuGGxiE3t9nnxgu9Hx7ifH4k6oFxmuKb3Qd1nRZ771eV7cesMjkv6Mosci8f2kqKYncHb",
  "key29": "2s1epkvmo7BUexaEgtJtecT16sqWTnK9rTz7eLA16Y99RcfkrjojDMTW2ALQdA4PWghf8u89Jyk3M8gVU4YmWV1M",
  "key30": "3kgAwJKxK7o23db1idJVSZEpzEBHeA6ACQ2q1dLAD1qosNoxMAPmV3J6b5GAcaUgH6bgCzrW6RvSosi2sCPAbPZY",
  "key31": "2qkki3PYemmLqdufYjWWWBasttNrL87qNVnQRXAatKw4edSx8ZmHb8jwF7GdBLohSsWqZGs3EBkN573tJA1YoVmn",
  "key32": "2JM3FLENsq9vVYraeZAJdXmSj46YqbmkHavUYgaPncbgoW8UWqnm7tUpo4TBZA7WETbq9b3TiJdeiNY4a7PfPris",
  "key33": "5YhoXHdn29A69uswXzq2W5DE6YnYWtjfCtYi5APo1zuAJmcsPwz6k5H8WDS8aHgkCSbXtFy2HiBed3gKhfcbpoky",
  "key34": "2PdTcLV6J9RQnkQF8U1mRsS5zvkjcSn6xRwJF4x9dDkxUPLGT4x1pjkbQpHvD5pqx1RueksVNHxErkXVeMAP56yC",
  "key35": "5C7BthYx68AcE8hfK98qmHaKdSJ9k8UaZX16RgfFuTD5Bb4rrU9XCQJY7Z3VoHx5wWJjtUKDmh1vf6gabHRaY8dP"
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
