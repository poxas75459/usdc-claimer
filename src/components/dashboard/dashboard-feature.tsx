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
    "624nZBUUdEeVy72Z93oZ48oJmA8r5hUDzL1Ja63BZGMwSRoUGjaXtPMpXudpwinnPw8KchVNpRV3Q1W7sKdC2DBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dbYEwC23aBPybGJKKwnW1FNHUnB6FrEP1cDNFMMfBmbMSWZ4beBTqoMrHiV2SUQHX9TK1rxS3rNm46cgPYp3Tt6",
  "key1": "4erywhG7ehvGcY6i897rJ5REiW53e9GEt4gWSHA8W3D8n69z3PKzjEopq8fFdVAVEFFGBe2YBWxJZyVYDpFZ2nr9",
  "key2": "3edusg5UgmtKSUW8kvWkty2ogep78xXcvTreRGKcvHkmn4yL6sKkHms7us3StTWJ7e7DBTWz1SRnh4qva1hh7hhJ",
  "key3": "CvcPgvCZHSsfPZZ6e1CboRWvWTgW7gQqUuaTSiazis5nFQ2AnoWisgRw1kdNLmnorc1Pa7NaP2hYtx4P4qo9t95",
  "key4": "3c5P9xV1pKe5zFwfwWgSh53hGAiKm3Jk8NHtx6MRBjnvVArzjnX65sAuHCfsQWq6j4GJCexPCXXKwdUgMYnGnGbw",
  "key5": "4m8B62Zyv9KTguApvP5h9DbBNjHTzk6wPbYQPZmMR7mf6vgdteV7Cs9Pqq5jiXkc86mDJFeFnjbwTrMSmVLAhZG",
  "key6": "5S5HHBAV1g35uXSBUbXu6VC8EpjrXMUQuvtKp4kB5mqepK8zY75EJgEQJUtCg9WyJcKaH7M8QzGsAfKoo4PFoGqa",
  "key7": "g6XsDMuQG6nQ8LT6bqA2nzcvWXADcbijtkwruMpMCx1zhR5VmYc59P5JoF62Q7hK9uME78QPjKk1CYHzTQpjn3j",
  "key8": "4HN91cHb3WSaW4ezEtuz6b9JHarKF2c56XNZC6rQVZMR1t8UrJ11xGYmnYw3Jx6P9qCSJh3NtLZnEEgUiT9KoyMy",
  "key9": "SLo8S4YiBqvpERYLZwKwUkcb2TqBqtw7zGp8sVjeDyRGn8as8bQG1ATuiXFKLNHgjtyMj6ShExbPYzpVbQrjsNj",
  "key10": "4eKo816eKF9CTrnAHGGVVooYbKCAYdrWRfPh9ykUbHXxsGVoHd39gs5tJNR9V7TbiEEkaavbNrjMjPYbYBEaNoPL",
  "key11": "29qiS5xuE2k4q7BrpJ2tYhqqpSy5mtPzEXV6XejnzZKUiD3koEAiUiavPHsC93ACAkEbSnW7KB64jxbqKTmgeckH",
  "key12": "39hazijBEq4XfAoL2ZGo8cz8943Acfr654Gbs95fbNRoQUjD8hBaHwQRn9HErYaGAQ5rLdPhQzvqgfQZEbxSNx21",
  "key13": "4r9JKRtBQbBsTRaAnQnXL6jzjo91i8psj19thWQP1qM5mtPzg6v9GCzFMYJAGyJCuVnqj66YEi7KHYnPMQPDADsP",
  "key14": "5xQVaRpYefXJ7QpvCEfjqNbLbb35j5eSDhNtxYKJcxndL2kyB2dGLCuwXhJUUwKW9MebNUp4yzeHCYZXm6PDygBR",
  "key15": "5GLcvVoMHG7LkaEw9XeZ5kb4RC1yNXd9HKjEZovrpbxujJjW8GkLS63Pyzd63tzXjZk5pkb42sios18gk3eKg44G",
  "key16": "4o3Nb2V3tDCNxZ4jBdrTvnDU7pRZN8Efu2Ls4aA2GFMGJE6R4GW8SrN33WbeiKoWH8husGW61jboBvJWFzFyFbmo",
  "key17": "FAnqcJbv5sdFyLxYwaV2awQjHTm6KxguXZXmiCNJWp8LynF3FBJmV1QQeDJgk6y8rY679WCc8UnSPWUjnKtCi6K",
  "key18": "3sFHrhNBgaHyFgNBRqZ487Yihv6sZdWwz9aC9RK6Tt5E1Rv1TRboLCrSupfhTuY7ciyjAmzEdcz9NarTHnqYc3Mo",
  "key19": "3fSmzk51E8M5g8Y2GEggSZSh7Wr2zMgctKfsma3WtNybWPY2VsnmXRvGxpE33iFVeMvn5Nz2qopK1L7JCfsHwcTJ",
  "key20": "3mAoet55TGEBWXvVoJ1NEF47J35ZET3ohHRfAGKKu7uEyUjHyqYTUkX31M6H7qAv1Y9qcnHMypLfQNs98Ea52iW2",
  "key21": "3EY61PqupFxhX87Lwq7WPeSdM7N25jbn9FbVPSikEacYaGkbdVwECcdGv5b5SAC7d8fBMcyuEJBxMWs23hdxTQ15",
  "key22": "4hYnYx7BuTh5ZwxBWchtaLaEjfmdiZv8Ti1QzTmysXz1ybAJNfuth2KEWgktTV6FS3WpEEzi8w9JnXw1uE8TXb3g",
  "key23": "5WrvE7JPkHj62bh1fKzDazArbca8Hu7tvgQ2A2wvnhrNapHKgyokmNhhHt6P8kJdCkPR3e9CBhzBUtqquD7FZH2S",
  "key24": "VGX2wQVBythEAJSoHNAB78f9sGoeCX9m4SA2vCaGxRyqbiE5CRuxHQeUsKr3nv76tVFhmWxcF2DrLdHkK3Ly5Cu",
  "key25": "4RaPpn9UzobNShzgit3YiLgvDEaEFE7ZTKXZLmtKvd17x7hFzwJZG76mjLCv5ax9mgpPvuhiEmM7am7WNKrbk7kY",
  "key26": "3Wu1m5jwHpCH5wmqrx8YTV3gSq5MGAKEt3PgtSqjbvmky3kak8vJ65a77RtrQjkSAiM3y9FCg6nKrf4K5i85um84",
  "key27": "J871wi8hE5xFMA2G1nH2ntuhY7XhvqHFTXX4sCGBFSRXpVHsFSwEzL5gAcDiWNZd3pjGcxayjosPPgKj9eMgbyA",
  "key28": "37Z7D5eeLxdmhdwceapZos4sSAgzwWaytadpsApHVHuDzqLwQjTGZyaUAbUdMtth5PbykLJiUr7SoxbV5vvcCbWE",
  "key29": "4rEVQehwxVt8EZaaC841uTi5LNaqgePWJh3o1f3vYhWF275s5L2J256rXGViiJD5cTjHc2VDQ5orBYQxZstEnuuC",
  "key30": "2cbtniD5Sxyc1pSbXAiwGP9yxWeuXGwfX2NwrKHoUvzFq6ofBZeKitJyi9n2nFFBiypYyrxskEHncd4LqgNqfHon",
  "key31": "4PtEdDdKorT87Ykc5tYCy71NoidSqkaBcPuNLmW7PjLUgUBy7nkYAQyU2xJCtUYJMJ9M3imDHAwGzVWrzQkHW3Pu",
  "key32": "F8QcEDe5WeqTsRxS3YdocQFCLrDA2q7dDZcX1pXAYS5JxQs16Gz2axnfyfwDcAEqRwWFi9HxY1eUGoMA9VgrgCD",
  "key33": "2ZiEbgeAyuhw7czUCux55gU5cM7dco8vH6k9da18XqMyTLiomDw27GKZpz2QaDAnnij8Foe1JmLro6DqFPK4A7Ja",
  "key34": "YujFaVPs2wDyS9AnmsX4P9gSBgu9iRb77hch6oVQgjwj19fX7xb3D51Yc2ww4Nio4kjBim8CT1otC138XacFXUS",
  "key35": "4tXFrtBibNkxH1Xh7KqfFomt3uZbe7Q3ywuWcR6GhQSp5NfYyPXx9pnuNkHFPrMNqeQcU3DiHoSrUKjDGn11hAwd",
  "key36": "2isxZ4uH5KNAAyGSDpfeC9xkaG29FbjuMQLcaQAGYpsdEVQ6xpcJYiVYg2vpaPYJPfqio2Ewoxpp2QDuddderbz7",
  "key37": "5z9KSCkDe8NsrJjFHgUaxtRNCgLmMFKFx2SYioLnjyb9n7VL2tQLtp9iN2aLXjKV8wQuru26V3ern4yrFGqyFXe5",
  "key38": "5ipvqVsYsudPWrWrw7xjZi5cxMnMj5FqprZPxhSi9E94gA6L49KvtwPvMRbwA1dy9nE4DjHCruyhsVfe3RmAGiWX",
  "key39": "v8FojXUePxS9fEHRFo6M9U3Eo8qcXBkMPhSU2tc8W2ccSSqEcBtTwKeR23HfFudQ1mvMs7SH5FJZD3EDoTsGguX",
  "key40": "2gRWv8pFS3UpzBQHerN53wQj7AEkkZ31PQ4oc68mQYeEHaysTTcna2MVB41uxnTQFfXtGXVXMLhvUzWNKRDvFWVJ",
  "key41": "3wH2f9Bc9xaPUuiF7wh1S3Zt3pLnzTAGHeFFE7cHP9aQXmezzg4Cykjh7Ab3zFZHLjg936Tp7PCwYNEvkuYWqdF3",
  "key42": "2YVKoLdkxypY4gvbfetAHx4VntJ2NpJBAhGcsJBHGWCpjrYFomAYhynFeM2YNieAxMsiDWccofLdxFvMVX6VggpC",
  "key43": "3CQRczyWfiVH4CLosU9nVk23QwQ1JkHYSvgWkyVebtPUEPe57NDRRB1iX2Ne9Xkx1ojpQbD4Drdy76SEAw9EZ9rL",
  "key44": "4MzfPf4khrTRtQG82u6awe5NTEQgYHWqUfLxipS1btNDHz8TavL9vyXb1hx6szYKNzdDJf7D2avFFSFqBBDKS9iX",
  "key45": "4kQVbhozGmqJR5iYFhpXdpjYoLRaVS2Y72HuH5s2iApS4ADYuBPDEkB72zcdTM4cf6ChfdswTYcQ71ij8Wet96N7",
  "key46": "4cJnE98na6yN5trs17tf5sgDnB4pn5xZTFFdERiaHWQx1FTLR1ftwUyeH7kMUeNjk8hoMHbLLA6howSSB8Zy7vr2",
  "key47": "VN4CytXQabL5t3joviYPsUoMvasn4gRnwrhqP1AC5PpaxYQtGYm6GsUyhha9V3mKoAopK24EBZ67vXHV5VqyASD",
  "key48": "5vuhxNpCzxX5Fi3NA64qcWMYGbyLmW5voWNDmAoUu87yDaYB9eZnJx3UT6uimyASSztdSrB4PPcdWUX4Vw6ZABCJ",
  "key49": "sErGu69fEATmTk5y1hSUGH8nTePEssAmaQ1B83gUVSZbBqt7Sm7ZfpB8Gv92iJmiQ3cCEyuRxWk9KMCYXBgrKvy"
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
