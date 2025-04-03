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
    "4a5dy7o615yhdd2QFTGSL2jupcWHUQD6b9A2eDAmmUJWcLsX4RtTEHitkFm8DRu7Rzh8Di1hgunqxTw5w9jr5Apw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qVQeadRWFg7x5JZFFBcP9PXuJrGv65n9y44m29RrEiZmhJUWXi35p6ogCkiUoKtnmdz2kgTW5PsBUbnzQhCXn7A",
  "key1": "HTutQzcABdEnqgcfirhLEY2ceuyauii82FeWahZvwzCyopUD54bsQUZiqP3dmonhrhBNxz5bJCKvoyJaudMt1Cq",
  "key2": "ArTWz8iUH8vct4gjmGPmAHvEveZ6vJufQNzibBkfp9pyoWGrNot1sPNNTXBGJehzLfJgX2KvybyuK6GQbpSDf7s",
  "key3": "9PdCqLN8Hs5xNPdjcw3xUaCApBbJgWfptwZiZeeA3DqAK557k2kj3VAxTDkbMjg1npSyZGSjQ4JsfQymvSsdh8A",
  "key4": "SLwaWCycBPdFt5cmeiUqPmgKHADsAg8wPJnuwKFF1P3VxSre3zo6ZkAk4RuytRF12Hi7T2Puxze7XfjqiherJVt",
  "key5": "s3kTN3Zu4rN31oz7dxH58zBqDyzVMrsZCQN3Mevw1sLUmiCvCstF9FpCPSGFueysSxXQhCnN3sJQRnurf6VZez8",
  "key6": "1qHcYABW9bkEbzVYySm7Mj2xdLFez3ECuwJwv7e7tYJ6DB45aquuygLtHUJxV9rs7RRbuYPiBVs287yopngE7x5",
  "key7": "4fBNC1U1N7EPiVRyQnvixC196xtGuwebKgsTAUvahD5LRLXes5cMCiYNPeiULrcbCrkbupaqtDxMh3PdxzXTadMq",
  "key8": "5hvWmCPmwN8NZxmy64zGHZZpR6e4hp6iG5G9fubVcvnjkyQn1xPd4FVXDB5TtRWDexRwDR5rYK8G8szfZ43CFQKp",
  "key9": "x1ja8jX3ScaTEYmUkw97HrkyPZBzvZ4KDHriLgnbhCDPdZgi4vy7SYRUFscKkvqsW1rpDPcgnohkXTsQQYSytRQ",
  "key10": "5QehgwBZJ8iRTDy5uDmyF4wErktDLnDFm8fcq5bPooRtQfL78as8wFwcVrfbaLh3FUAxHZjXUyZJiKnQfjQyn51i",
  "key11": "3F4dfHTvWVcTdYNYHciE7aYJW6gCebHwr1rCYvhziaM3HoScdJcMLjdujMHeNaUFbdY4CYpAoy3wbbovygYAkVbo",
  "key12": "5G7LmXYGdgBm7Re34zgacLF4nLcep7efCMhDFpfkG7SSZJ6pz1q2n8kp3jLqxi772VaWGthLKFcmSz5mAr6BfWu7",
  "key13": "61Ty6Zp4F5RREbeXG7CSWM7QyHvVH9oCGrEhz2JK2UTKGSAFUG5DGtB4Mpfv3uQjSTjcTnfFT1kDaHP7329pkKCY",
  "key14": "2UUeY5FAUyPKcL29srJqTpf34eTKVHDkLzWJ9543LXn21m9JmSsBSM1B9Xy9Ax866JgH4aZ4fNAf1NXfSgw8e7wy",
  "key15": "5Y2GrY3QY2waGUvHgmfVqrbtQE8B2Tree7SozEmHybvTXL5Df5UDUtNA6dvJUttiaqLXvnBtt1m2ULQqTKzsz5Gy",
  "key16": "y4dSCUWqe77mHEAa5bor8u3hpp5KcUFBR15SC9UmpZRmukqzB5XVMXU6QhCpjdVvJW7AgPBtFzQDhZ5H1HoNXjD",
  "key17": "2CtLo1EkCAdtvZY9vmunNHpDireMvNfBf89oZTzqaPU3X7BRZWPdHB2jypbZaPe3xtZfnTtGvJvfsjp7zc4UPcWg",
  "key18": "39HtGW1vejVFcmfd5QSzv2RSDUwZRPUwGydxZVFN3nxqgQ6wskf7Et38dnMJngqekPTr5Po3YMqWN7sviXk4MuFb",
  "key19": "4zNPFF88P4w1tUtem5ZHRBJzfnR3rLgu27xfsGqCQEeWLiLsTD7XbDXFbSgfxunqeE2gBHUy9aaCijKVzBfZ5Nno",
  "key20": "2MdUPDToEJb4qixeXdBStD2LPYtpenpsCHUiiBU8HMBKvvxFShiK5dtP9sSJXjiMrirLXpyBnuwbNgJW2mAxCZd5",
  "key21": "3aYBfBDUJUaMU88p9sGChVDidtk3ZAWJXo5ZkWJuNya9EvgxqV6MAZvXF6f2ziWeVwJ5B5WLnNNVjGf7ZtUHhqBa",
  "key22": "4XMKc8LgJVeBJtfRKyDCUxqCpgBATZBLjBmbp4yFMVTM4cF3YLuCW7V3yv4KM6srPBPb7dsKgDP6V4Haf2x5hRJP",
  "key23": "58GyG7wnrw4DM9U9Rp6FMSqET8yxfVyLKCtaKGSyNwWpTjVrHhkHwxTRMYw148jh3Nq4ZsSSzsaNHyrW7kevezGs",
  "key24": "2fb2Bu1phP1itfqscUsYGW8dYyAdX7ad5SBqpAP5GgeCPbKHiLoG9Ezj4WuWd9XzjRsx1YELs3GdsBskc6XAymCo",
  "key25": "TbVvoTZjuguWC2EnoPz6ot4bgXUQFp6XsFUMRSJStxPxjvxXTpM4dzSjssgduRzT7dF1T7nHWmox3gtoXKoCv82",
  "key26": "3SGfjzPdTZ6onL64DUvmyaFtH8hutQv7FEEYWmPs82ywsWxbk9bhjS4aQhg2u6oLHT9aDJnWsSSpnpi9R2t1KV36",
  "key27": "fYqDXPRAnbsxB5rZRc1scm3jXgVNE8FQdxigT2FsY2jKhLt7ZfkmzNhraUKjHhemYcnao6xDMnrLs91bgMvrgvf",
  "key28": "Hp8R5SJCJXcjL9AWESoXa18mysucUC3kbRKSB8BMSUuZKKEUVmJpaQJBNCt7mc7QbWYeKo4D3eCiSNBE1NCNxhQ",
  "key29": "5MHZEmtdk4XpaMGL1pUiXWjtMugRxfCh1Ccxaum7R8rrizowk6fbrWDTGc8wqoFBw7xZe7vQLnJvAoa2F8QEkcjz",
  "key30": "27V58mX3fNVgGBWcKinP8CmzTm7a9BMjsyE5nNaBAqdCc2s4UxVjsvac4qMyKsdhbLz8NRNRf4TnZt2wv871C772",
  "key31": "5xp1kGDDrigFjmNJMqESmxuR4t39jdPTfWkzFyVqBh2tyBYhCxPTT61kwfTqgkiQjtntdMvZwh9qS5AvXf2DZ83V",
  "key32": "5ecJ4n9C1Di49Ur9D4Py8WKi2CE7qqatNzKgGXqXiCM4uFoGozwnhERYhZknfoCLxPyaYiLYvQuZMXDcHreYann1",
  "key33": "33x83UtXVZ86fQUGpBiDW6uhL35gQdaoBjnoHtneHZ5DBNwHgmPoAaVrESeKSX9yMEujGkQ2nk8a8zBRwfPFjDmC",
  "key34": "4Rcpwv9BLJD4DFi5CKGkxzYefT6CYyYLd31PEwJ4q3EbiHdncC74c6ymWNiqk8StSXtfavr8dyyCZGzSCwZNpCK6",
  "key35": "4WnJYJcggenfmsLxBAg54sjqDj1cutj7bunzTdJuVTzMP22U78dL1iA9fEPZJfmXKxSiE9ix23gTfUzGBddeJkoR",
  "key36": "3JyWyuZGd4D4BBncHxdWqkdpyTd1Du4cRRfUEXYjnWjVMeMmcgQeQNiyyH4fxQojkDT86yRBbensWXZBosfLV34P",
  "key37": "3P8nGKKdh4jtViz8V9zu5vcqZpRX6nF9SY1har1peSHSTmWct7U6SLauPZBKamSC2aWTzkHsSm2LipD4k2fTus8j",
  "key38": "jY8aCjrLpSBYCfv3KjWTv6J6fHJ4PRqdkiDxvaxfisxQseFEw2H7K89ux3WKAjA9aVYwi9BCkS1y6jXS9aNi3ur",
  "key39": "okECK3UmQu2V9j7eoYeY1iHMa1TXdpPZbJJGFhRDL8McxYeUxTYdRGusggwug6Wk7uZAExDihqs3CKbSPZ4ZknC",
  "key40": "66g77RbjBU2LrNMnskbTfUr6N5n2uhTwEkFy6hyMyrcAofhQMXBwXbpFYEpbW7io7mPq6qfo6Z6XLynM1MMrEDpK",
  "key41": "5osnChD9wU7kXNgqMdyzuT4ZKPeLpB2cF99oDNhfJ7RgLZaFNwfktaUYgASt96imUJudGbxGHVXz7R4tDyaesY9s",
  "key42": "4uFULeixoffWthZ4LaXcjztjZVPZQG17obiPtSy6jgPiikfKgGKSNqKxGmrsM4pTH6awNegSk2BfwM9MycwDKuVf",
  "key43": "3zoadPuAmpKP4eDdPWqQaz4kq87kLLth4CnzSnhexH6t7ZKpiwQ9yWFCyFT5aoiLiDztviFtZiGDuVSibUDt28Gz",
  "key44": "drurgiNqQ41pATJcHuJoLoiaWCXTGHH6DqG7WkwxvNQo6GV6Yeb9b8JWuTRwG1E4kVww7ALf2ZrykNH6zJmDCUC",
  "key45": "5t9u7dZUqjUbKgZT8HCLa6xUn5n1aqUgoCW5sLHvVRJYV1itprtDZQmnqrpZLVnG4u1YdgHnhEqCFRQUiUSwHKFG",
  "key46": "3C4xoiwWEyVKKZJuyUaMzUGnveuS1pawnpURzDhwVhd8zC4uf1Hji8LG8HUzw4Z4f5aAJJqKU4ESUWPG1ruzYJ3Y",
  "key47": "5RnTvavc2bzCUjEYMQNPVcPNks1N4WQH6HhmYcaHWe1wHGo7Nsiaq2qpj7tE5GS73U7Q7pPRN6jh6yZBXTs8ngng"
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
