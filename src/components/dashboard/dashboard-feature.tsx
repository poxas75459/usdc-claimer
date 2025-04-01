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
    "2ufW5GBEF9oQBZhS3TWMX2bn4ZgucgsCoqx2tzecF3uBZ69pCaY2jXuu7DNPxueYxian43xfVMu3paoU6HPx56r8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pCVLe4ab9HX9jT4jDpgmWY4VALNWfBJ7mByXPZ1TMNR2ReUy2YsLqeBGxJXnunriPkfQgCix7hcRcvyW4zQrt96",
  "key1": "4LvPBKLgxykbXKvNLyDHZ6eTuJtGjhb1nKVuPpPgKG2CPsaHHU8dNz6nbA9C25o68xdU2oNaLMSUTf55TGfyNndp",
  "key2": "498KBP5VSX4L4hUpvnDZhp2HHE52rivLyNzrUKqT3swbg8dLDretudh5Se8kiMjEJd864QdGhJbctKf7KZeBea1K",
  "key3": "2KzSPSoHr6GrLRe5D4yRj8wo2AqjwAyvW2X34AJY1HfCT3xAjiKdg22rLgQnnHYBnhcQ6sZcs4EWcgVNnYPFTCvZ",
  "key4": "4XrSJzqWyP4k8HX4sbGoYx5gqrfGZ3Vqz3UaRikx81MXK4QrdMPhFiNEZBMbx6nXt3MyfsMGiUAxjaemybWgdihU",
  "key5": "4N1D4duwcsggnWKU8Qr85FebxFPvMsdVnyFKjZeUFN2PK9N6UYWwyFVMVznjNqvT8kKN6o6dGCJtEXSh5BKZFP9Y",
  "key6": "3vjH3hFwpkTxYkhAmz1xyV2N8T7gM29cLr8ecoaPQGRuDDByBvBcHC9jzU9TLwvurvgUA3cixK7YprudjG6WiSnj",
  "key7": "3R9zJYQmFBG6f9Q3rvP2svN7V8vE8QGg147baHz7C5TxvGpHXWuSwxcEHxfgNkLsM7v1XSLTFG1Rh4dxezZdZV3u",
  "key8": "2MahxUjQWBf8NevKtjLAswHu5StTwSgDYHTryQYugJGTVfpqCDL6wawvCim7pNYM7nwwbJHvY3BZ1xYGHqybRVAs",
  "key9": "423pBwNExBmM2ib5cPQrVzU5jxAYa76wtKCjDQvBF8vdmvmudAs1gy5R37jLdvjz7xta3JEgr9uv8HSyhPqihnXp",
  "key10": "v3meHbrJz7kMQRBLrLRvR5NA9TaihcfoKyRTZ97QwjwFaJxoaUnnLyaaMJcayRbZRHtLrdHr6Xyet2dedPKUDuT",
  "key11": "67mFoeJgSxV8EwUJ8LaiTzfJvPEmR9sbuYMo4AyuwzWiDZVd7qCoyMKXUsSCgLY86JEc9yiJnpqNR2KAFBcYhuPg",
  "key12": "4d99EZ615trHnkRpXtUVey2UHZV5wphj9SyLBknJqaPQWqtWRug8uP8JNFKc8Xh9PFLguYMvbK41sXKzzpGMeFhr",
  "key13": "2Uhy5CWQfsd1mTabGRq8oWWVpg9TizyQda8gwEeCCHnVj8G2wboPctk7wK7NHwq4gb7KuGvBihTPZ3HPE2sdCKc6",
  "key14": "4hV615bG8EJP9Cm4FnBokxRjz5P1DvLSvBxeTvSCmHJUriC7ZbcvpYupYT1qRyaWYpMKwcS2GvRNcsb1mT6TwRYn",
  "key15": "38Q3u5y2v888326RtHjysxGVgkVXcrZWhKsZHpDdsdwav99tJmptYTDAVU7AHU7NgXU2Ww5tWEP9R686Zk2U1cur",
  "key16": "4BAUbZze83fancjznh7q3pAgrfAEwtDFP6s7s4ccmMnApBmGA7Zti1AD1VyV79tw6EXDM5HJ7DvUCbtL88dYPWfa",
  "key17": "4z2mBLuexJR994Mh2Ca1kb9D2o5yZw9aTorNcqa1Vd5AyWBzKw9Kyg3U6UkSxLg97Vh4Hd3PosQLnyfCzrPwzchT",
  "key18": "4MhEEtNfHLGsRPYgm9HsyMJRCkbXHe42at9sibyeBcrNQaxkpAehRzZWHLd8osCPEZzjxsUTqMHwKg8aScMhv3yG",
  "key19": "3quK52tk1pXP4BiEnqU4tQXhfAqq5xH6RSaWSYGF1oU3UKUWnxhr9YAgVhWq93DTpgVA152wWvFH47LE8DoYrHqP",
  "key20": "45yucx6EN65ZeerSiEjJR6w1EsQMwUJ7yvuubk27fqHqSo9WrT8QN3q4ceWhjFSBRQc8PNm8aMvJvnHnPL3eRo7K",
  "key21": "CHMdvS5SKsSrEqXVKwJij2FtwQ4uvs91rrgcPmnyN7QyjDDNda2XJCsrR6pmh7FKFkpa5Fdi9uFT5nA2SdBpSYV",
  "key22": "hi3enZtqG9rexArdpX8QQswMxuqmKzFxctLqGeQ6ThFwWyu4GqioEFtHNayr1fbHYdnWAQ1GZywam7UL1x4V7n5",
  "key23": "zs2jzoeH5oDTAhXaJiZFdimztfQ6NxpA9WRqBDwLrkLcDoGRGD3GekqBrNmZLf9Qn2VisYCuoocobhsvPxf1dzm",
  "key24": "4MqG97aHv5GywcBgM1RcuBcRjeXMqpfzHAGY4bVPHkFE93VWMnz9GeJfc8m2FiGBAPN2iC1nBYjt7P2FKaQUdYK",
  "key25": "4oWVfK1umiJFmNo1amxjGwCMT8weEypBKqivJ2WZBxVRyy2A2vU1YgBqBUWBMxdTyyhtQsKAh16kQGYFQsQe9hJM",
  "key26": "5ex8AjT7FdqjnbXkGTpXbGxQjdovFqBCB5QMf4y2vzYHjuf1ovN314whmTyafNsWWu6EiCUVpxDenKtE59wURAZp",
  "key27": "5a4kauihPJdFCqNpq21t35MNKmwc5FtfGPCEn3jV3D1JRuZt3ysTvbHd1VcKiVNr9gwqR3Db8FUXJVsDA3ZZo6CZ",
  "key28": "4GmQDfpR73x5GArYcgaTAvrqqxRSjymqVogLwsDrE7FGBtTTA65yQxgbmWGbPQF5xMesFoKWXVD24kuxuc2fPrQa",
  "key29": "5EtZa1FKpBRgXqR9tGxYxsG9HdkugjRWmNuPwn1G8ETPYydMPiN5aJAaqGmxKhiPZh5uzbN1yJe1UByxkVq6rQq4",
  "key30": "51EoSxAhUBdhcH8iywoXXwjqvUr8kVERECcPEoL8agzTjiGDfaARFY1J1Djr479ceT3XXsLL2aWE1DshYGoCpwcn",
  "key31": "5JJUAVWjUUdjZWPBvu4gqNcqLCRENVcZGRqnthpLviT2taEcbZpK8ouSYz3EQpyMDAfQ5Uig4CqHLS3gaiZU9hL5",
  "key32": "66BWR3sfo8dSe3CnmrTf4pdNKpQ5FPSArNuraR6bNX7fq47NvxBy2Mh1rHX8pd6xggyeCHh3MvtQxFf2p8JJj3gw",
  "key33": "5DqNgpeqpgCbMYQomusF9GVM1G5RNkstigBmvwYENcMyHbactL44SGujKd1RSzMp4W7JoErMLuzP9QYnhDUQcR3D",
  "key34": "K4qTSJA4PUdfFRZLnzB8Nv7zTe8H8JXN2H4mRPmJzsq3gnjwEbDm1zzveYFthohaNsWbHzp5gkuVc1E6rjFYo94",
  "key35": "5TQ9ZXitBp6uBwAsfvhTD9FBHpkQBTH166iouH3jxTTmLXHAKVtzpXEwyNckDUvg1y8rdBb8wNf66r6NEomiL9tc",
  "key36": "491gKboosAVRdfGdV9STL8bqaL2hRSj6VYjADyVpNFh88oEhj3zk3Tyz93CcWNoCXq9ykkmw1DUyv4RpBUKTW852",
  "key37": "3effGHBy9veKMCccdp78wVx5LpUjUHGujf9Vbf1Tr1M9cFfmgMTHDjquziLfLNZihTgZsuoVw4L6DyB8A4EUECCL",
  "key38": "nVVx4aSZtDKCSsLPtQ4mGPrcFPNVFqo49rpXghv8wfMvaWYfpbfhbiqW69sMHbXs7gnZmLd1E8aGmQNoRCZ6Lid",
  "key39": "3k2PznBBnCRjGsesERCDCuUZz7yrCTVSF4P7KDfCy71Uv3cyVXrWpvfMkJwrP3vXFK7cReqdHeuP9ShyCQDEyXWN",
  "key40": "5i9i2fX5m6G2g18Ch12WgYU2pMk4Bafh9iUbZzFhFin6XrQUj6GiUzFpGCWw2GeSRkBRfz6niAWoEyw9fiiSN9NE",
  "key41": "CNt51pyDV99tfBi8Bc5sASu4RTD1pjkoZuvgMGcnfyCWnLGWBhGJBsJavNhJkmRv3ywoUBaz8vHdZgBYmKku3pB",
  "key42": "2yWaN4m4jzfLQwAvKALXjQcm8Ws2DoaQf9B89kKeutXPzS9Jc6ybEyMPc6Fd1xWUyCP4yrWj3eNRWmtdabH1trFv",
  "key43": "Mt9sm86mgsoPjHcXaRHT4NNPXkpmWnmt7uciPM65R1UvuBRkvzTpEQr1uMzxKocn4Hr4bsdrt8uL3qnnz5osXm5",
  "key44": "4rWoMs7RdPMvd8fV3VbFr8HAc2bm5rVQRSctzSnJrVVQ5o7ooehh3QBAx3EB6zqCTtBryvo8RM21ERQ3rJaaD44j",
  "key45": "4EaARYUGuGqKcNBCtRCpUsBffYpTPy8jU1zfexrBngMWZaxoLN9jNhHq6ouKXRN4HchuKHvmjocwSWiNimoPs4ju"
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
