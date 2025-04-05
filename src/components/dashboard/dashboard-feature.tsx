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
    "2UGuwqrVZTyhTnDPqST9PHFBqk3Cj6N2dFzTeuqDrLFagH5h9goWo1kEXwguNBtCVPQ5SUkHr2P281aLwtyssbLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MC6ZjEoyYZCitAGGwf3WSxDAfNzE6xApH3faiyh99h85n4PZij3BnG4jGFZCxz6QP1ACRPwKso7v88sB7VDvf42",
  "key1": "5DL91TUbFEGQpxYjr3TbjCi1D5nqvqSk6uSYY8TGsoVmdE6jDrCzLS1qN8wc6XLukHAd2fSGtnqbE9SB42ZE1NYv",
  "key2": "h8d7m7q5JEGb9sRTFo4SVGodxn2Lyx1cUkNbkSWuuLRrgZoZE19fFt7z4y9vcmQcgMQTc6TqaiKMH88B7YkAxDJ",
  "key3": "3dacZkGcH2ywLpEXKYcQb6AQfUeTvKP5wMYQURfMFfc6Wj3xxYCMEtVUPzffgiVptFjL3j34Pxu3Gka8yyRn8dFY",
  "key4": "3SE7uYYWYP4c4b56M3awXeN6rDiGJMQi6ocG1yR5uRvMWJQEP4j8GFJfSFzFMj4cEqwJJxJBrPMHz1zgNaghHweH",
  "key5": "5PsUGwV4A1EzvDfJMRAWjP39zrEw7u8mZt6FJ7mJpDreuEpT4VxwGAtfxKRPn9SK99dPuJy6K4hRPnmUPeU6eZh9",
  "key6": "57m1HtLTcu6sgsTs9U6jEWehKDjzuTCDyqYWekQ5PmGk3NmJPcnq1ohsCcmvNGEBSyeeAogpgwhNBfQuAPicQ7Rs",
  "key7": "3o2ExULHCVDe6DcL45QwjFDRESdzrG8WeMi63KANPDku2JcihiudvBFmKXH7fw3NiCiQfvaExC1PaSVKdMCXaWHz",
  "key8": "3HXmdbXtRE5GnwcvnypoMsWyovHVkd2jAaMkugoP2RW7gMt82njBx8W5nRoGEYLNPE8PtmQH4gCqDwfpHFdyJaHL",
  "key9": "3kCKZkkGhkZhpRQNjvH3yNCnAGRvv4iqfByBaTLwPrJpCwRYjoY5ViYXB5djZ6WqMY4QNpBvN7XwWh42VMoeffHq",
  "key10": "5qJ4ZA1hPVby5gkwsH7HJWrTuShPgX6tt4zqWgMxNprab5gV7Qb8DpfcCGYACE4z4zCTkEMwi6RCEfvdMeT6ofEj",
  "key11": "63ExkChmWP5eiCMx1epdcneDtgSqBwKqWmjrwPYL4KEo7U8ZqrjjB9Fw3VXryZepELPoGgBZ4ejNw6hTWFDYtEGT",
  "key12": "44aSSKDZ2D8faXwv8PdBmo6dbWDQpW5WYS887iFKS7V1DvU7axgGzzSN7b72mSjNe3B7gsedayws9HmrNzX5LnzM",
  "key13": "rfFmNnb9AwDnLBneBZkNeexZ8xGQBB2VP1iy6EYJgdFo346uPzQMHSYsyjEAQfQwTd8RpS2wr9yeqFxeAHhkGWc",
  "key14": "3ndE1e2M8agNewkKF1QnDxFiWcx1spFPnhhdurWeTR9b73q8Pxn8sJmgrTxmy3B4TvQMcEQJMXFR3cmNeNuCxqAz",
  "key15": "5qfMntyrGtW93f6JBfBq3PMCjNB6wKTTetpBAeXUwJy7Eix7oUZxhaou9HkES5LMKEaeW1TJ55yLtLqms5LUU5Pw",
  "key16": "EQnMzvfFJW1LwRLurQKeLVgGdnnBQ7BBZA6djG772YQ4hC6CLA2fpqVwwqdXhzTtXMXZEiAwSHDokcExAb2qa87",
  "key17": "4duMZQidbv3L4vRFuTF9im4vhrVrXdNPVUiVJVAk7fHX9qdtD9eaRWu7a5JfbMNBtyRjZsiWJ7CegkbonhUpFYuF",
  "key18": "5NqhLXxccpC9yK33Y3PsFrgJo2qDQCNT5auL4gWt5UQXYSXmpkDMi5Mq4QftXpsJnc3yyLXCkafnQE7bTdH95yqv",
  "key19": "5D7h4WKh4aGUfaxA7uoFXSdQBZ3rVfnt6B6ryDmqTLYYbuDGhZVv15PDmhqyiboni8Gi7X2Xwcc3SMaxur4c3Viw",
  "key20": "4JdecxJN4y5hxTCvuZKfjV4NrusZDao1XP5XCTxo4CsvfAnTaB6E9XiyTntvWPaCEtogZaQ6ETpihQgEyhEmsAZ3",
  "key21": "G97kRS4M8FEoZwYSn42rwBkFertZkPhXjV6U4xmvB38pgHE1owK2C251KRgfRi8d1j2s9bi9SFjMY5SdSFohfr4",
  "key22": "2nHi2gWy3dw5L4WUCryCeicHYy7xVaTxTY9MSpjMEPZhHuXdT4YnZiDvqoP7L7DAX7H7v5ovNJzHf5YCCAcZrdGa",
  "key23": "4TP8MwybGw4wbgQAUvz5pDXQj3zfK5t9LRdL2iCf1fws2VVRTHTS5pzyCxUZnuVNefzP48GRYinA1snA8stQKVy9",
  "key24": "24u6gHdjY5Z5jBHeHR62CczHH2k5NFPFwY7ZPqajBXu7pSQznJRJsEASRAoYttGinfSoQApVApagmRS8eDvrWsNy",
  "key25": "3xrmvnzw8y6kQJK59ppVXutfFv4hUkkM98JEPppS12pPw3zYERSXKj1etCXsMG9ra5Gba2qPhhSaXEYVm2FJVqf4",
  "key26": "55XrkARE8eesxbxf2deRzWHdYhqcriFnTwDkFDEUFRQUKjMunk3NRqcGPB5quCnwznewNYfmS4HV8xagAgSq9Yac",
  "key27": "4d38oFH8i5oSDMcH8p9RzwJg3DeuG1WG8AzD5GsFFTfzrAnB4tuE9Bge1daCgqNLZroL8gtjwVn3kopZqygQzVEb",
  "key28": "3VLdN8737wyVuv7kxbVu6GbMwaBQCSzZ8uMHzANcJqMcHPo84pexEedk5uSkzzvLTBRwjZPmJnkZBgPyywuo55r1",
  "key29": "42H6LbYwsMPWA5TksjnjBuuLYaFLhJn4NDVEV3S8fcUeMnP6migYf1ezHvqpTvcRs5iWrwssSKKx85ChXg9zbTA",
  "key30": "536RoqyTisrC5q9EnQ1gF5dXgusZo7BEV2wwh7fXw4hUP3tCDknMEzRr47QbJeBNLmS7eQ2X8DveGuqcM1TLnGRm",
  "key31": "64J7w8u75LzZkA7Py9eiMv22QbpCf5pW2nGg43aBnZxoA5HKU1D76UXsXQ25QzFK5QbfRTozTEtvd3CFdf9FTUkR",
  "key32": "js3dNUHWkJHUGro2e6aw1aqSa53gTZsh1kSYQmGDyr9W5bQhc5RDpKzWJNcDB28D4WBWKp73piRtuCRmgDXoD7N",
  "key33": "3L79qvjustpZBsxDFhqgcxVBfQbqPuRfikHcRh7inx2r1WfszPASrHp2RQYJoGtqxtgxxUH5Gn7Vwqn1e1tWaEBr",
  "key34": "2VaqGXytML7BELyPpQV51TukrmD9GJagQaLifnrFaGhDnSY1bm4aNd5cdBpSXhE9uP4MDURXAUUa4ddr8gT4DNot",
  "key35": "4EEmJnKLFmUFemmFZqR3CHKEQcVjAobKLSFzyKppxXikSkAhXFAknVRJYxks5et22TqGgSQ6yhsMxax3KZyZwqbM",
  "key36": "2LfCjafUQqxTYUt3Lmw1gA7kvgwvVodpKEL6YQDfRC4ZxGMUqm8chW8xz82yZCtiBNuY5MpCW8hXRgJnMwnhkTX4",
  "key37": "5ew4U69GJ9zBkxfym4X5mGBgRjxKczipQ92RRjZpXZJzWjz89NHdX1czpvfMhUvR6AJvmfT6LZkKgv4NXgpp3JdV",
  "key38": "W2GP9Z9BQAJfnZUnP6ci3uk8m9PLD7ewgjbC3Z2AMCnvGoc1ozWN8xxn5WpSWtmY7vf7kck45khEaFsMmHRXeQE",
  "key39": "2PC8WLfWAKyCwuT9MARFbGMRtgb8URqLQ6YxecJgQhsErkM6XG8m9nf2Q9pUBJ6f4rRne7yibDvJ8jM2ZVbKBHr2",
  "key40": "4G9Sb9BStWBpBWGw5kEuw7S5PxwByhoAaD21r1JC1onnDAM91TtNW3CwE8oec1cbewJQK8h6kox2zkumBFQ6n4UR"
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
