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
    "u1Gpsaneykwvtq8u9VVycjrui4UvEK2bbqFuw2K6dqkKy7wYxCWmo7Z3L3SNPyinU2sp24JBUW2Mg1JWoVTziFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kuNT2kK9UQbb2Sz7nx8BSNp5Vnx6Mzh3u1eYdNbmQMxvk9uy1eGd6Sz85YGnQ2YxbpMztnz5fm4C48FhFhDVyHX",
  "key1": "2RQJQSaorNnaABZhF7viRPSMKwwsftpBj95wwABEJmY6V4tdj3VB4UETXVWTa7suWnhppUeqApgBaFcSMCcepXwL",
  "key2": "2UG4pBHNtydXZhEEMYfakCfYQLYou2HZ5Ay7jZE4ftwZ2QYYBkds8nhNVGKAA4Y1snvFfK8Tb393AdwCgqyp3Fjs",
  "key3": "5cRQGeJFKx5mm4KxdKkfMGWEBBwiWXoXpH838M9jVNAT6vt4nRehHGe2jso2Yv2pb5nzAhjJLHZF74gJ1E8KwCEh",
  "key4": "3JvBPFqfW1aHLMgkUKPa4x4JxzA1n9qmNTtAE7JuezZatPYmKypVa1tZVbewLpWDANNFU2PzLPxErpKCmV7a2Dkv",
  "key5": "2aSeknANrCGkhN9uDHJqXSidRJdrJaEwhE7jtQc9FbtTyYGTzgP4ngWmu6Fj6oTzKZDrfqW1MjPdUy9RR9B8Qo9j",
  "key6": "38WFWeRSWvYMNvEFD3Xg4UR5Gb6iEqpnycsjhrEq5a6V7xeXM3ZwpKCTgm5Wp9YJ1sFhoPCc2kUkWTUr2eJm7qsE",
  "key7": "59aghbEHEig22rueep7g7rRj6n4vqFWyYDF3YUKwgJQbahAJVby5dNd2SPX1K3w3eykvn3iBPPMXAa1BTaPCKrRS",
  "key8": "666gahs6khea5yYqFZxTPdfS51EaC6YWSW4dAsMXUonHRxcKhYxKvDGc6xgXd5dhcgFR4bKyEL4YJFhe3kwgJpXJ",
  "key9": "48Uqgpn1PHfAtTEYGYimQ37oWP3mJKb1uWwS5P6D2N7HzLcy92yUxEqcqcVUufFReFgWsQ26GHThf72JhcHAYjx8",
  "key10": "dYF52rPE3V8ujhxyD6uaP95y8G2udFq49S8cJgM9PUY4uGZj8uAkTRsB13neudPKk7an4Y6iysmjBeV6pMxakNR",
  "key11": "2WQe6a3zbDnn9Xw7wQPv5EJtN6NByrMEVc1fojYqvDZAQrhqQn6U1o99bFLK5fMjHvJpZc2UTF2JUjy3kC5zqPtY",
  "key12": "NK4XvPXJhoZ2FbHtRwJe9KGv4CuuFaCod6dUQjPvBv5aYREpcXsTQzHVk7c89scJmLjEWEtWANLE7XceaeymWa2",
  "key13": "4YQpbmgwFtC4YBpeQho2JeWpVwM1xQnQgBG3rErXyd8RbQAgnrH721XtA1JeLsgpahVgeSm2Y6LqNQfSyBKJotDq",
  "key14": "3LvU6HiyA9CStXnbbqxYeic9KnnXquE3oVJ8TeshoBCG9WzoBrvThWDAu2ksLdUbqxtk9eq7JrwtJnPHWEqLvFLD",
  "key15": "QpiTPSNWyJfXW1uPxsvWhsm4cJ1ZFQuEuJ9HgWF6zqReJPjMSsiHGpDqNrBuknxYrtLmcJEKq2y22Xwy4LfCwtb",
  "key16": "TPBMoptq3UH4ZMKgbfMUrvr1JYTUWqG2UW1Hoti9ugTaza7GXaV6xS8a4RVQ5QT5pQFpdRANzEbZ4nH58rw86Hi",
  "key17": "3PyfenFQF7xDnARrResyPqdusjJfG651wPj6NGgNTiadEzoDxRHx97RyQTFDZzGshZtyPcmr8geBrNhJmhabsBFX",
  "key18": "5gtaaZV6r8m99PceBe7XuvmaoH6M5mYGPZRECooymys6DZ1qAv6jXq8J7j1pZRjJ2QusnnewRcej2fyVMf8twVbC",
  "key19": "2sGLWz9zNr4jf9KjXafcnSYaEWk9aGcbkXzyNZhY6Nju6J2xnMGVHhRonDD1XRFdCA1i7KMA1LjGHzVH4VXxPcNg",
  "key20": "5AJ41A3yZ62Fr1cojpzGgaGdFKT41V45PhV9RVgtMQnZsoWbhwB3RTx6haHkeCER4p98qg6MdxcQMHN5MjfTZ2VZ",
  "key21": "8RJCWJR4tXwQK9S2AHXaUKATYS1ghddnPWmVaJuDd56vQo3ACiMRAvkAVirVNhE2Dk7ARSqjXQb9ouWTiMeYs4V",
  "key22": "2Y4pcH1Qo2MJVYFBEZQD2wXg3Ln152NHcX6X9naaZ3zeCbQQ8T3cs4oSJfayhSS3kHrFewTUzCsbzBZy81wb6Xi6",
  "key23": "5uecVdtrdPt3Qg6Q2gicFghdLueez1vJ5rkbwRkJrKogKgv71JocUtk7aPeeVPhAPzL8Vui84WoFFfoEWPGeP9m9",
  "key24": "3CXrzQ24f2zStZVXtG4gc9yXpoVcovHTP8Gzk1AoXwnsJ7bmXfyDNnoNxkLJiK3RwGYy1u5k6jEN5WC5xJacohci",
  "key25": "2nnuFadYPRP44co2KLAZjaQJAz8shet6B6mnvFQjWm5WZoE3WW7HttUCnEbbFUaU1QiBJX2FULePHg3SP6fC3mg2",
  "key26": "3prGYm2XAPMDKrmxGrAYo2hQaod2P4qC5fmA353E5E4q7SH4znCFGQzyDndevqELk8reVB3ccw6tweHLhBMRNp9R",
  "key27": "39DAfDaSvg9UwSQ2sTeKA3kB4GMACoz6Q9akA5uysvgnKitNYV721gFJzV4dk6jrFaKrk7Kx7oR7f6Urb86QHfYj",
  "key28": "5YUBR699nxFtGL2eSLM7M5aPgjcZJ38yvFamiQtkemQ6idXy89kVsiF9HKupaVxGPwzarFeHvA4Rxspo2cQoT56B",
  "key29": "5Xo4GYxJxaZfsPHsnjvhDVJETtLsxhq3QWbzP4YPYGpZUsRGe1LWCFgEcWKkTLxLaNFitQSiYzpX3jbriS4YRUPR",
  "key30": "3aoAiEzBtuQVvqJBq93f3ADLw3SFqbf3uZ2EUbSiraz5f11BQicGc2SdcAM43CvK5tMjpjufJwLGJErVJo9uTZ1d",
  "key31": "xFhG9uky5ExWcKsrueAXvPLAYhoKaEWPWFS3PQy4BjyfCxJuyfUQ8ySjVxhhGR8NTTgX9jribFMWeKF4sb9RVkE",
  "key32": "cTShF4Mww2uYwuUiLgok8QbejhAonFBuTgXjVnmWDYYTzhz4qduxjr6MY47mB57tqATnZkDXhzK3cQx9TKevadT"
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
