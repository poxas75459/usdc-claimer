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
    "2GRCmmnESECwf8CLjhBm6oX1CgKuhkykJjRqKPnnB7PJwLFeMn6PHbyuFKsWoVaA4Lm2RYLs226XPjJNxnHnNccT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vW4FzkC5bgFczW9x7noqASR7ysbcbchxHPULejdFiPP1FMxeiqu5q53FDuMjeFXCFvV3gP9xDBFAPA2Rr6pHnwT",
  "key1": "658b6hLqtKpiYhtfQwvpm8noQmTBukpNd7ngm3mZWMgHMZ4fW6SDFk5XU34h9BaupUUNC7RhsmWHSNs6aGJe8wAJ",
  "key2": "21ZgmJHxhyLwLvJyDp11cjxjP442vbDyVg1jYEtrLLXRut8UJtEPYZUEb81XRqdx3baUE6ii6HRSLgkHjYTsjDFs",
  "key3": "4nDANCyB9bpaMx6y6jefaWFWUs8mJjzqX1o5pkVTuwyn3tyh3SbbFJVpvw9W1z2uX89wE6GhSAKN6HhsoDQU7qar",
  "key4": "63cWaL8XSaRW7Js4EAe1rjzbXqxkhhh2gDtMF8USR3swDZxFYhSFvE77oWKtX21bJHCtdMTjubf2Z3Cbg2VranYc",
  "key5": "5zwGKAjj7EwwN4ovtidTefYRmgiMtjdi5HJ315Me5qATMY9ALNY86ZAKDCkjQQaNSJs9mw6EgGsJnVAydB65p8dQ",
  "key6": "4VEhEJjnK5JWJZZarYjEp5ErRfKPQHUvzAy2PmvzJzQaCa6MPUgUNQ9HogYLTHstoWMYTzqZohes89ZJ7LCBVfMr",
  "key7": "2QSprjfTVJ44xX7TL4KxdhEqp8eMhW9gGSKdrEd7kvLv9ucaHJdCk7797Je778DkMjJ79tZ1nYKgZkJDr3UnThAu",
  "key8": "3NCr16fZ7JX4zqmUz2wFw6KhdcKho8pdgcSZkpqTSBaiHHca5R5hGMz7p4FUgv2sbkyVHGBcSsDCTsiT5jXjcYVF",
  "key9": "5VZ7uKY32BAw4C1gnppNDgDvrWSLZhaaXAnhmX5nPgoAtSjmTroPWwLCTniYNPuKp2xpPHKhfCzWYoN5ECZtokkW",
  "key10": "4i3Z9bpNeTP6p4GGxHFLFQBTk13fUGdKR5KvP7uXLJYPAs2oNVDB1bdKvfuSBjgqC9KaGYtDDmi3h7trm5vZPPDy",
  "key11": "2RkLbtcffrcSgbqGKckNGgecigCibvykT7CSsa5abnzJLzv39Z7QshhMwoH7Fyiw8pac4iEaAbJQAmqEnxeiXub",
  "key12": "3bG41LBFHr5eUuPSjUePQ7YCeVgraTGaKZo4cEefbA5jHc7Ep9Rpeo4M5vY4xxFfJP7GL9yRRDXt5drCPAABt63S",
  "key13": "sFZmwnH4T7fqkzwTwmfUHPk4bsWjJWbeiLx8g1wiMjTMs9j9Rk2Zb1EYmEUw19FWrcYAC1nS2JrBNgtXLQmUgcr",
  "key14": "2Kc5JA3sFysfVH5w7CuwMoL4pkPhFvWi9DM3RqXpuh5uTYdU2nKw1KjbpLGRDxK9nWc8fF3L2E84eGsakZYa2VsC",
  "key15": "4xpit8BvzVHa2jYEskgotk8BeVAiwkhHouLVR2VkkGLDCJNW9xS5zyxtfnJEuD22e2pneG5CDYzn6zgo8d8BaMEW",
  "key16": "4LyZHhEZDcbSV45sbaDoEo3bqLcnvEu7jQPfgX71iDu8BbHBftxq83FU7WqRcsNTcLxvrjPnFKXWwkZqNJexVYEu",
  "key17": "2pvQXrMJAYPwHgwXgLx6pjN9T793kfXoUMoqWsDgLvhWt7XHkTTLGqvHvPgai7mtX5fwXogwmqVurZ76ebMdMcjv",
  "key18": "FHJJz7DLkNthH3RaxFPtp4RMjdYt9A1dccEet2n52Nk1EeC42uQvF7U8cyMj2CXV86BFvVacNPXTDcCFN86TJoc",
  "key19": "3p8vZJh3nuMj4vepCp4kw85vJJ3iVjn7qiwNrBPZy3LrdHzPSGfCLFzyaQcHAuokP3NFXbL7MmAamgsPgF2k683i",
  "key20": "229DSMzzqwN21dtEgH1ztWhbrGTLdDcN4eHSHkzp5X2qHN47948duzmpjUiixLka8YgB2Xa3hnphT72RFDzMfCNJ",
  "key21": "3XfBPwiRf9ia8f3mUiQMNaqRTQArcqGgrs6HPFiGjbiEqPSWJmfYQBvYdQgtaWcCmiihbCHVCjJF6ANFadVfWrS",
  "key22": "2AT9Q9WvA5zZ7vJbfYhuZXf2UjQCk1FB6pumKh8JWYuMwgw6ENB7n5K5VHAyfSDS7KpTSRS8BCFvzEp5pTNZH7db",
  "key23": "pNfxf9wKraMzufiuqHGf1gonpUnCcE3jXAfynr4ni2AWKKhHJzTH8JcejrX3vGwgCY5m11oM5w7HgGv5Gq4mqLs",
  "key24": "z6YSSQv7VsRzX5XEGYvBkfRitspCHFSKdfcaa1wBnXYJoqf1B4bfPMJpMbsxandoj8prLXijdUb6msmxLUzomu2",
  "key25": "UC2bbDGAAVQdJTUhATW8maqZikwJoaqpGm3B81Kkmi9HsujS3SpFEZRAWynYiXgKGNebcA5RRzkcXNvLb72DZQ2",
  "key26": "2rgqiHr1xethAtKf73cj861fMxdyENqVGWTPbNckV7wsRBnhZaXSRgeqpTZWRXYR6sMtTmsjEYwHeWbegtYWQ1xv",
  "key27": "rRs5hP62JHpxAGfVJsTjb6hsfPSYGEJZ4rsohjeKs84UHda5xdbGMceuF6E2jm8pWvjX1WwvYP4CoJ7trsSHeoG",
  "key28": "3LwiezkxocT5cbzhH374r8aJxL4cMR647pTDJYo7cGotWzPWMvPDbEQ7FZ9Wa9HbfGm5EH6qGo2NDtExq4KTcj85",
  "key29": "YtoTnniUUVHWbRFpLokssG5DC8j3VGDZkvXjbqXc29nEwmNUt5yh2PktYY7HESAyy5n1phc3kALV28qvjSk8Ej9",
  "key30": "bNsr6epScGopE2i3ZkMPB8eSk1aaabSwworQTVzaXFryohoNhGHt33r1qRxnWUaDuUG16pQr2JbefzFMC1NFLa7",
  "key31": "4nqKRyrTQ83zDiRk7hm8F5favu1y3eUugRkUCTFfF7Qg77Ne6RyNHSq5JMS6FmRaE9LiQ3accRFvtwKZBEoWewQp",
  "key32": "JetZ9cKEq4L4PMSLzB1TtZuwXeV3J6CCrKPDvSmJBBZoB381RscySjAL55AoY5KAxAYiG7oKt3Q7GTrQogxSrri",
  "key33": "2YKVLa8eBHiR5fNqjmUWmVfVHMUGJRAYBox2QeNLdfnNZH7sA3LqvJwT6qzTjTyuwY77RiHmkkH1iiMLt67c4eH7",
  "key34": "2hr4D1DwCCzgqXNAMk45Uoz5irQEDGsziV1RM4PPZ2HwCLkpKvoVupMYYm4mqxH49PFirVxbRszHC6TdsdDK6hnr",
  "key35": "2s3Myvhc4Dp8fwuWvLbJR6g49ZqgRYKtzkKGaKoWKkh9Tvv7kDxKj6rsYp8MUHAFXPF61eqf5KHTq5dcY9zCe2vf",
  "key36": "5NpbXA3k2wMX8CLdB16BytQezvDJ68sP48f1jFXsgPfqJiPQ4VEWiQBmsrz1rAt9knd1P7ED7JU7uXUP8fqnWXe1",
  "key37": "4cJjd3imW5NNWuHfAFKi91dZZHrMxLspS9DSYV1QQaQQs9qzpvJXj2YuVjxneqydy86uoYPxs3G9rHfJGNta7ywK",
  "key38": "5GUioR4W7iDZCTEqJaCA4N6zkv98waZuugCf2hsE9n9U8iR2ai13EoZn7ywUtrBEoEkP3bsfmd6UhnXPKu75R751",
  "key39": "5PdfJEM6484Pgk1qKuZLpLNdF4sAoJ519CdRbv52J7a29NgtegVHKh1J2moaD7gxHN9AonHyLpjXNQySZyiXt99T",
  "key40": "651F5qHXDeUnB3KcpaVNaGe7R12Xv2jrQ6N4n3rCWGokt4T3hNbJfoDBCrRur8o2t9sWPWvrque9pk9bdkYyAM4p",
  "key41": "2isxS7orGwLU3yrNFXu5oZcFDRycor4pxmAP8YVFd4de5bVfybmXeFPE1dbrqSivMuEQYDwT8xnuT6mmBvA3PK3E",
  "key42": "5Ywe9ktrjwnB1tmETxRppdd1E8H2DmKc2xZbtxokf9WYK6WeNWgdVsXvuixFNvA1EhCNzAynNbJnXd6UwNN2LA8v",
  "key43": "3CxCbJUnXu3WLpjL1xHExqdegTLKRo4o2GZNHuf9wKGje8DmSsibqPPBFYrHy6EMHmN6DH3Xk3bci9nwPCLNBD97",
  "key44": "3W48PkHmJHYv3NQj1fasadMB1B2nwLbZmcDmntCDRFTjpJZtNwMxmkVPMtq6xrNFJjP1mWmHHC6ZT6vyLRDb647F",
  "key45": "3QNcEvk9dZJfofxnS37R4zkdRXqZiEpyG6totkubAhuqc95TVTR6Tq57D9zj4h9pbukS1LWnvhc5aCZJQYsQNpyo",
  "key46": "2f1m6xrdbmY2C8yZaxSoKGRqY8AH6qtEHZkmec8L7wGq4G83V66vXUPwQqup1VKVAD2C6Tz1QBPerVRejs3ZNSs6",
  "key47": "5sbAcEXuDXQHjWiMbsKNqUVJPQj3Lm4nN7h6shoXts9QrkMCnHRBjWuiWVuuK5oKks2NifvLC2hoVpgqrEmQBaBv",
  "key48": "5wzrsZTZ8NS6ouuqJCKfLSP9ETwwTAaY35Q9DB7Wz8kYXNz4kNTVaGngPM9DaYot9vLV2CjHozXpf3EiPhcc1Tgo",
  "key49": "3tofGv23xNPJ7Twe4GJQpSDo9W1ybJ3uDBiGA4TLyUeg4rz4rodoWgX6igEssUnF2WKN7MA3dgJTZ5Qdumtb3ajx"
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
