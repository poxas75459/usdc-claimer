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
    "4b9fWUAPJLYRd5XNZGYn75Rmj3xs5cXuUxCxZtdi3GF5v3pQiw76fKTpa9aC7hivEgb1rxp8mK4Jka6aaSddnbgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nye6iHot2kVz1Di9uDbuHKyF9LrTfcbuXGYUxcxE4T4pc8QpqAPKBqWpqg6URArAUxbRDiQucy3VhgsS76UXzgj",
  "key1": "5qyihodWVRdyRYNgypQkPzcdJ1v6NefWxaEoVSDpzcba9T7G2AJ9T15fc4T8dERMRr7wQreWpMEoC8UD4K4JmJRS",
  "key2": "32YpAGLzK3mqxKibaYVcpE5eGmc79NftVjHdkjDHpHfYf1xCGTYm4ng6ZUnECQNxVQ8KN6etCEuFsu1WJntAtCNc",
  "key3": "4BgPuwqXx2Wc84Htp8C4CA38KJKn7SL2YG5ATZb2eXu9q54rWJfkCu3Ej3fo3uvTP8nUbBpyu6ri9dAcF6XuNGiB",
  "key4": "423v2LJq9tRfSc8GdCDXaREccijmaUdDtX45awQJVe2RZ4bVjjgLXHDgkDBMqFxdZgNz3ghMdYj6kccavfyDzxej",
  "key5": "2mhH9WYDMf1Ch4CtjNfutF1z1XEiDV7WWP5SnC2eKDUhb4y198HXwPfu4v1Q6MgmjHeXTq4oFCBBXCVMpnVSj6qd",
  "key6": "4fxaztxVCjyvWg9jDwJcpBndQHBWiVD8omQtMtbj2M36yytRdkFZscXqp8cFuKgCHp2wRYaGKHZ1Lsx6EFZpbRuW",
  "key7": "3Lo5LTMzPpMYv7yAxpxExt2fVJVsZrQoXKHNQ4iHogpqqEiNaAqy1asgah6P4HAMY3uAvfuKgBC6Ku2C3RXuiX3k",
  "key8": "25jqLfRR4QXhqyLZQ9vvKywqV564mToeXDJrxzqwnk7j4JctADo97nwyKD4aPKY2yNe7nBR58CVToXDosh9SQLh4",
  "key9": "2XTtWpe3CcyTKFbMEuDoK8tBYUnpuQyNLztwdEvvdqPTNWjCzqDRjoubJQM7NLVz8vi4N9MWt2bhdP1BgABe2CNc",
  "key10": "2upfVdPc2DFF4q6VPKQjXLgBD6QRnEiwQ9YRWfCYGGw3pQqrW18EU3gDuE6FnXrAuZ5A7SrM87x56LbBQDcxRRGT",
  "key11": "vm5ogds164p3mrnYBAGq3EV8arnXv67wSLV56mc9e6BbmxX4WkFcGek7HgNsYTJipKU1NKafxfX2sYsHRm55Gtu",
  "key12": "3fey8EpS6kJuEmfKdpeqyE5RQeuUHsTrG6eJ4324hCkQh1DNZ3uS2Kqs6scRxYZAQ4UnaLm2oTNTLRDAWSXVLMcj",
  "key13": "55xFnisSRLNbuAZ2BJBMTRZikKTfapQ8noJ5S5jYx2hoMNZkXByWxEEnUZAdxnfd7Y2ximczq3o132JfzGmprAFr",
  "key14": "aggQWaPJCM6mfDogpWgMc2m4K3HzrWbUcNii6g72iTW7YEDXqVaNcJLi97vyj51ntoFmGooDkPsFEgbdvvojPkQ",
  "key15": "5ahecApD88afWjgD8FM5BYnHP2SyLAxhjscY9gz4qNijxpWbGRfPVoGvMghkoVYML1A5Z2W8cmnwAp3Aw2gZrKAn",
  "key16": "5DDdhgtfq8droaCXHfyexZuaA5NsyRmBoti6ucpdUgr7AweXrJbZko9S8QfWANB6ZRuaPuAdNLcbpsnNn2cxhgg3",
  "key17": "61rqso5qyFBgJMepJKbbsvkUwz4e2yV98H8DNddXZCWBxwR7P7yofitURw4Rso29YQUu8McmcoQqextYQW5so4BH",
  "key18": "hs2CoAU7GUN85JWEwq5VxHVNY3UioSR6akvnp8qMa5eLYwXkeTPeACYqZE7pqjqDx6uneyR3aoWUgeTduT8UUui",
  "key19": "2k5rVDxqjAFqPb287zhPdbVgXsad1kARh2DSenB8s8nZnKvomny5UdXVBQrz3LfhQikSs6bJn7Js1ZeZsidtYqWG",
  "key20": "4QjLAPAZXeZDwsyVN33xxTpHhfLBgj97KKSeicfBcjTzjuypJw6vgK7feYdeZ3VS2M8KgHDw5ZP6uHj34uaXbW6F",
  "key21": "3aewtcYxydqgrqXszD25ES5yXJrDqSZ4UdrudwCEU37VkpMta2siytDp1hLUVcVwfg84vKjuKQ6JhgX8GFgQa4XJ",
  "key22": "2nkj1FFusj81sBRAzWXd8gVrkeYuKDgRqQy8GKFu3eGqsYSvT31hRoHPM8d5Q4u1PJQCvjEkdpZ3Vr5XgGUwP5hG",
  "key23": "2FFgknm3aVD8EdtFYCQiQGwNwVD3TixHLckPjj6pik2dxR4ZKdEqs68ru9zorQGtFweSfYysVpY1wKxt155kPeJC",
  "key24": "4Wsh1BNqDvwqN7LAjj83k4UcpK8PewbZZBksbgNB6HonZiv6MW51HyQN7k5cXDGgMLMW8ZYN9FTRJUjzeSzm3ofE",
  "key25": "57v92jBXF8GkgXKcATdoLAVaPndWSXD1oqaJHcNwWMbaTFtkCdXdwh31Hd1TTQysMdYxNcJvsLeYyYqH7MQxUj6k",
  "key26": "4QiHU5Rkt9PDnpVouzWKaFSq6tTE1u3RdiTju5NBsSegHtwFGS6dCVqGcfiszEmJw2MHwJsQDesawi889jzf7FZd",
  "key27": "3qjwt2qgqDcNBjwUoY2XmnKA5Bh9Csq2WujCbBUqL6dzLgNDW3y4M61xgiNEfJuQ2YvjZcZtL1QS8P1Us9bFrTbq",
  "key28": "3rJjuEZtRgHEzgmC1WaNLw5Z6o58WMYa5BUQLenTn9FeBDLZ2V79y4AapoxX1VvzLwarmMqRuKAY6ujj4h9Pn5Do",
  "key29": "3RVKBif165MAn77wz7aBZVgq2KECAp4aaoG5D44rDEdLDYMLhqizg3TUJfpd98CqnKqcyjECvjqEF4tpsKaiV8ZF",
  "key30": "45VaWRgBUx6anT5HHFbxEyTty9t8kaKChwxQaESjLENSX9TscQssSvv8LetByvPsR2o95L1uZSHF5R4p91Tb2bge",
  "key31": "5nU6WeoQswwxeutNqWj6GYonPx1563cqKse6fKdqMsLJXMHTCNtdaFNuvuKVuuF5uKRM1ER21AnnxBbbJs7o6bKT",
  "key32": "5GgiKDosniqcZg6TxcQQsCnjWJizRz5CABF5XbhGEK9XtjfMnDBPrWo87dz8J4qRQ7AvBQf9i26ReezwTJJm2jR1",
  "key33": "4cKwDbhENkJGAvMgCM8KQG3nr6PQSdHUubUwNpVgzWLEaVWUcYjBbUBRiGjj9rPBe2se6fTKrLaxgh3JaXpHkATH",
  "key34": "2uJDBRr91MWDf5cjFoZvxjcixuKdhvbk2angBYiz8qyEeohhuUx8Kni3q9F1yp8bi9k4xgdGBbLDjnMVBo9pUZYw",
  "key35": "4AeQFRkxH2QjZRMJKukV4paUwfnjNEVim7JFcoNJt6QfaJo9MboX8in3L1cv4JNWdH1akDf3djcARJ1PQCtLW5kf",
  "key36": "53gjJHPYT9gDQV5WgoFRDEeKtTRedbmBsxL1RP3B1y72PPJuELBDsaedFE1g9Gr8TKm9pDpjrNLyFSETQkT42G6P"
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
