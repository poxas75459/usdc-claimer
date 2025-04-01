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
    "616SBmceEcDHwVpXxJW1a1cD3NKiCz5aLJMX9nEDhMeLeVXT5iMQEcoxv3X2mAEX9X79tNPyWHBvYzHmaYp3EeqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EVs6RwBh6dZAyUGGBbBFHuS6d8Bk9a2JejrDiqXdGkT2zCKYtBzXDhvjh4TTqZPPRgRmXZ9vvMAgWtkbMeSah1k",
  "key1": "5skbsJUTLcGtNBg5kzF1Mmsp1iYgiF9SnmqsCnf7yM2HEY1mUPvUs48Xp2ercWbsycZhoapZKaEBxRpZQBh9jZnp",
  "key2": "3uPCxc3LeTMhJdTww5Nfm9KHruogenWnGm8MzuyHwhC694otqBUor4uZZjSBdmUK6RxuJajLKvuYtCyJjst4okYw",
  "key3": "4PivfP9hBUmV3dWCEA1DBvAVoWe9mWXsnrpHDAz1ZNc4U9hhvPwJT6xdwAfa359tFeQurtgAnj5kG7RXY4M3Y2J6",
  "key4": "5q8fmAPfXgyCBu3X3yW77G5WjjTdG2ymfuVjmx29cTYJcbTA9fTYcMHQoXJCqX2QiPW3WbqcQHa9ByGV1gRvgFCC",
  "key5": "3EsBLc6FGbGAVLT6rTxb6NHSpEW5gNJxj9P9MPyjPdw5k8GSsAxsFBoRJcNTWzojLJbNGdb2mWs8vM2Euu4QyYg3",
  "key6": "3wCrKjxBgfU5g3MYeq3vXwDchMikQDNyRwgtsppUNr7oXVUCiN1M2w3yLGDVG8R9rjkP7LjDhNe82MQN3T9Jcv82",
  "key7": "2srdgguYiqfayoJztyU9eZK3CqD5HUPCCFg9qDekRggzTNMSFGWUSmudRgJCCXNV8EVxvF8vLtaS5ZtsBCYZBAtT",
  "key8": "37tL1fXKspSAqLHg1xWbkJqwH1sMLwGmXaF1vMR7jQijpTjwHb7APaMwCdR9tLREJm4fJduAU2qDw8YZhYezy1Cr",
  "key9": "4Ygtz6FdjmBdU1ihkfk3k31Z6jsC2wZNYVoUKsLcwdAxgtCHFhLCSxh4fKk3rCFxE2nQEwon54y8AeNq5784aWck",
  "key10": "24JmSLH5pcpLf4gNbsX4QQSQBfe2MATmG4kQKYaoqxQnFeD88WNfWVGaNAVPqepRuLVNmjT5WALC6JDHQswJcnXu",
  "key11": "2MUEE1PnsN9GSvCChC8Lffz7vcTwVJx1Z5TntV3o9uTU7okBMgEeLFsdo4GbCLLjTe7U47ihMKL49DVooMf6uExJ",
  "key12": "4jhKXUPp6axv6CVMry11nniThjmect1aVHLJiZV6i7LqHf7dUiMGs5Do2ccTk5jeqd4GELAVDxnNf2f1tVB1VYB7",
  "key13": "5UNuV7UHNSMtb9F8ZAjpXZJoBwpgxaPezXUuy2oauYesPg2mcsuZEvzLBaDgyYirh31qkkuDVE84Rq4D3K1XqvBj",
  "key14": "2RwPM9Zbo76htWS2tzR4bDFR6EsSDPRWbxjydjiLN3H1nBE3TAqq6szuBhsbnjbVXK9pZhvgaNjSzhst7Z2aSwDC",
  "key15": "3LCsh3gxRbyos1hBt3MXYRW2TfU3ymwFHvuQHNBC7iPdhBZgJdXEq3dhDh4HwQxQeWG1DZ7RAY76MTAUSPUZkY2T",
  "key16": "4fpzMjtqCi2mJAmtkF76WyePBQgNnPiN73s5MSjFcXHWykm7kZkSX8ArdFxbgxY9sHtiFn2N7uJ75hqAMJM7ek8m",
  "key17": "3bqNXosEss4gozVxv1VYSxw8c54DmGAQ2s4LKqQVfRGGvxMgbHBUyJ2r4AJmdXhLnNRfLX9fqXJy1tGvn4qfr64Z",
  "key18": "3p1HhzfYsgkuqrnaXpdC9a4rmWBnBgQXcKAsfnMsiXxrtnYENhcsFHad74oUmX8AvKK7T9zN5CwFvhRNs2GS4ibu",
  "key19": "3RP6tbDwEz3j6GjsyCzQmrWHwigoTiLVh1PNhT6turG7N4Dxb8hcGTC8x4UKCPwoLo6M1fJmc8iYy1gAp582Dwzu",
  "key20": "4R5fvLg7jVq1HoYwjDhi2nXUUhH7Rs2jViUtKDEKdt4tLqUzfzRgmSZnCLAuKzRJozrRf45JvPYSLqZ3JFUe8Q4e",
  "key21": "2A9Vf5XvPJbwykKerq7c19H2wbSCVbqmkB79sHBY4YnG5Vz6R3cqLRnbze8L4GxySeEAqd1Z7GceSC6x421sYeBD",
  "key22": "4hoVoXdaLoVJvrWboJpeoGMnrHsMcqMAdqKUr47NgM2RM1dUJoEEMXxAjx29hWL8ZUmBSWXGyPGdsHfXa9CPedLW",
  "key23": "24t2BMWXbJizXX1xNnn9L6z8UUWXpY3cNiCUmaPfJ1FA5b65j3CjQgkXNdu693kLjLr8nCQwDhKRdHQDZ5d8CTZV",
  "key24": "FbDHXLrefUkd9baY6UqpKGfNsRteUQN6k3GddgtDGMbaAjvH9CcBeScn8fQYkyWgrCJaYkGeQ8SpUwqQMha4hMd",
  "key25": "38uifPT83A32nXhY9SCtzqKZqTtkpzvKY2sLeA2cAiS3tMyZ7ofbR7htVxTJoQZ6cMX6y6gqXRQKMxTBWwS5okTw",
  "key26": "UHj5gBQjmFa8QArJFNUDbPm5gAcun1AAwwmNW4Pbtq8mKHCLVDQh3RHyei6ybx6ZD5Rwuch9qPw6ZvPupXio1vT",
  "key27": "yqGo6r5CsScZo3RCpPW8ZKzmG4wJE5qErQUcYzafqxPnf4pyHq5PiUJxfErhyu5oGVvtzi7XjQ9oqgRr9uKiof1",
  "key28": "2ka3TrAwey9npp83Cd6utS9JXJpydFsZeVuZNzX2ownFqV7QPmTKD37EcNr8Eb6MPdpzbNBtmGbpdjkjx4HqpcoG",
  "key29": "5Fcm4vzJbaPCrtve9h1pbbi3ffZoLMeVHmkgZ8ykqVDWv514gG6ysDnRqJNS17WXA75WNTDK47QTbJjmWYsoEu94",
  "key30": "2omDxfSYtqBJYhbpUbFrYTLXo8SYj1kJrjXxT2JtHE5kogKEyryjiiVvzFPSA5FPpeS49UQ56MsimP7GTXztdzXp",
  "key31": "45uMQbEz9e9WnkqJgHjHWkWkTdgM2mHJ9t2A8kYqQJ2vaV12bZPumPtcH6DfVUSwD6wJuxTXYc8a9xEbxSDc4LQq",
  "key32": "2obD5tHj6FmCtvq5YY6zF4f7BeYJz7Vg24wbK5qkgKafRX5C5WdDtZnE8GKVtnV3b4oLdo5uScB9UX7vvxi1Ngro",
  "key33": "ibdvNNDAZvrf8f6h3HiT45d9naReaxyV6iZYn84LQsAs2V9g5tbNp4pjh7pEg6N2JMcSmdRCqkYDa6sd1tNVrz9",
  "key34": "4JG78aGXgf2kVAZ5B4tmpfycct26YckRCc8zhkwU6f6AVmfLBEsSnuadogiTd6dVjfQSCj5ZGqB6wE6LfLoob4Xs",
  "key35": "sCsWaYtQqEGCjFhmdUrW5jqT4RmiHcSULWXBUhJxih4jv8oEPRiuv27QWPRVexi6vBNnLYKm38RGigvKJR2gPN8",
  "key36": "3C4Q9XyQm3MBA77JxhTbVhcRRRyUjajPUAVcwqcv1cFnomBp2RCg3sihhFCTigHftohjqPZXHjLcckNukGHv6xNH",
  "key37": "2FnK19sgJGE7aVnsvHxvhxEaedH8qSjvbtPd5SuRnyke6tLnGC2hLNKtvUbN7exCvyRL93fn5avkP52VkiTV8teY",
  "key38": "5JQt7J5YTbPBS4LDyNUETERkvjaRjHuutfuDgM8NevBjWqWNJhSZE6Nrk3TcqMCPy9ATriL86f9bLBA8iySkdUEN",
  "key39": "3Cb7ZqdXkJxCH6mSLkhyL4yo4gmD3EEVYYts8V9oh1iGhqxjJvD4xXXQRSv5PivcQBKLyQbxrbb58GSUTXraygni"
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
