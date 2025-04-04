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
    "6hLxRPvtuid1TzBTYCLCFJ3da2nm1AabiUwPYNrxGa2XbXvfAo7K66A25S998s7oBgbj8aaWcyqC8VnGVd7vkMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f2Tjv662geZ2YHUXqTNGiYPYs61zr9dtnCP5qfycDv2YTg34AWkQLAciY9z9KfHPbUR52FGGvrhuF4oNvVVfztb",
  "key1": "2nnGTCv2ddTf3DNkSdtJY7XUXaYCSco6pwwvVz1DBmynXsRj6fKQRn8zazV6nWGGvqLb2L2B4Fs4XixdF9MRthtY",
  "key2": "5MyxvTTaH2pni8uUrbYU8afdmLnPTqQF3ERqa5CaceVpw9SS7QTYPLgU4Ms786MDi9bMfFLSuK2odUceAytbskR1",
  "key3": "2BMnB1hKUcT9Nu9zP4B4bAnsudQSm945hKYpwuuwedSPgGjgUR5CFLvT12guuV6cnnAVUwC25GqZpNS6RJAS5d5a",
  "key4": "4ddm6vTPbFkX89VDyPa9zSL2pTfRWz2Js6vtGvYskYw1gULgwRVvqQP6UeCjLVA6M8AmkL6bwr3hQ9ErKFiPi8c3",
  "key5": "ZppbfkTgjt7AW5BNZpJhpiqBGAufS1idQQNjsegEbmVVE6B1puFdrXcqd8YLW9FHh1Vgoaz9LKYm9bcQr8idGtG",
  "key6": "4biUmQpBPM87JbDS7NchjFJa8UHBXs7JytNHeT1yQfbGLUYxjBFK4UcCmscMGNmuwF9849nrLFkr36feAGrjtSva",
  "key7": "3Y6RzSBBbNu69hfbbYJEzGKtbt7Frq2SHu6QkFYipHWLzDZFM4tWKptpC1YijSuT9nT3yWAgabKRhbroUFQmF72R",
  "key8": "pFVbPTp3JNrvxzLZQwtoQCMLLmEcjXuYbGNJvKgYoSBhernsGXRGBowSVAoTWokDjtWhCVGyhTtGpEWdsTSdFuw",
  "key9": "4yjMr37vS1PLxTnrG1hTx5efhhDqDp5vkjnUMeXGE8hsSyA3YNS3BiP81ms1YRrcLEGw11yL6RN5gdEcg5p33p16",
  "key10": "QqK6csAxgohg844nSrnLkNqXtEcvwKtKYicgmb9vawcJZhP8SfM2Qqk25kXzYQX7iZPbKLZX8inMnkeiGegCXf6",
  "key11": "2pVHhSPijYwR7EnsoiFc8QYD7tieJCAuEUtSPZe8opWomPe2TnuxYuFRVnv6LeXRugxK62cxv3iGCWTmsxSsgj8L",
  "key12": "5enjxojo3w9EoFYcndyB4QpQGr49ub2FkmYu8SMzRAFHSFeuDaYkwSVARrVeeD8QnKpMdYpvm3e95ZAmnc3sM4J7",
  "key13": "5s1dwgxqH6qUBGB12CmMbuR62BtRfQ2W4cF3AAMQFZzbwK1gxeXjGwmXLNAdrdVG557T7KMng9CvfT4fQ6qPg1sv",
  "key14": "2NPgEeCRGAebpANXbL4GKyQc4HVmEBcr2SLF7fvdyzVDM19DtQu5KjQzMprmXedscC3JJQxmmEFG6VdqnAaewZWD",
  "key15": "wrzxsE8czmUx6gBHKzu1PQPNYgs7JvsB4FogZL7ZkckKYKiBKSDeGBK6x3pcnuDTBQ4hbWftBoqaDc38n5yY8kp",
  "key16": "5KHJT4VNtkH6VecJ3eGLSdXG7f75X45r2bRtbGkRytHNmUEa7BkpU7tqa5aAg42K1RW9zXiJHaDPGYDK8uuCdAxp",
  "key17": "3MggUVZzASXxRWVUeEgGRTrK1UuHA2iUiFBc5f9ZmocxbAhrfJHue4TUtn1YBJfQETmWp1t9MWiwJe8xeAnZnpqn",
  "key18": "3cJP8RaZS8zW7y9xApBx1XLjFUhUrce67ndnPJtkFG84p4NHhwpyetNddEDRNgNXs7hmSbVyipcbXBSnFYumV1DL",
  "key19": "2xUG7FXGBD4pBr3yv7CbKvSmVtt9txDW1jspHU6A5ctN2td26MJGt42Ser19FFZWtZsuiuiS2KefcSc46sik8njk",
  "key20": "4S2BmECa35gVJ7RfnUTWgqWMNThxvYsAcSRmH9estZq7knq2ThUYAjx1mwruE3bWwqiv2yWC8EN8HPm7qHPrq6R4",
  "key21": "3kHhRX8AxaSi66DyhguSa5LRJ86D3oKa6EX4VoaExCfURCj73EyiK3N6vQLRKnCU4hMas1RjESdpm914nsyfNwoi",
  "key22": "27FkEdLwxZdrsCgS1tKviM7JrN9yKXPn747D3pSEMkzapXC1gwrsuQvWh3hfi5Aa9xq6scKeUbSJ4JHDx9CHzud7",
  "key23": "4DDmy5xZBKiHKJSzyRURvqau8SrdMFRn1pFK15HfRbearLLBSHjPYb31HrGVZmuU4XS2wAfK5RPtt7xa9GZiNqFu",
  "key24": "2pKX8JqXxSVtDuB5wfAi7Nbf4XctYmGkieJvLwzSnsES4corX3LyjeV5G1AJz3gzuuvB52aQqWkMv6baa6hucajg",
  "key25": "3AP8HX6GeAMihumaKskZCb2hpBxz3YEAV2rtcmeocSGjgUi6cfqbxoSjavouxGnmZWj64NZifYPoKaVNfS9BYoXV",
  "key26": "5f4KUmmPgQH7HZRKr4KEBLjyxveBQoT25qUsNd9w4zB2pYZaKsFfx2pmBhm8r6K352MeaEFncVsahgfPy2RsYu7c",
  "key27": "2yd1xyJ4Eoqgc8eg487xUr1wWr1BwhXzcZisLiUAKuWmhKu6LGAwxGrrBiPSNTsgLVHaGFD3rZwYiKDziEGZPD62",
  "key28": "5dmyHZVsWTcoAK7yFf6o2y6GYJc9iWhFn7Mr1oua75fZVkttFBk5YZQJC9SNWjBGbDQHL5XhtNE2kBr4P6q64XGu",
  "key29": "ZEAYy7z8mbJeTDLBgsbWHETRrpbP1cAVjJQkmV5BUjhPeztEGp8ncXfVqnErEeto6pmAbfDFwSNtefDSzRg1dR8",
  "key30": "2uUnU9txGQXq1LCh6VS7uS5B9JD32RaEzREZ8V6kNp9WAcdEQkq6RkzyAKsbHxBtEbHySx48RozaE5aAVkm4Q8AX",
  "key31": "4157vJytEWWyHgEsAuLncNvkFshsG6dwiUhqv9rW2ZmSH4MErqGw5SoUZsvjpa6N8fo3QkEpjrghYgJFsBfsxxKi",
  "key32": "2WGKYHZgNpFcxiHK59goYFSTamvX5f5LSfDv4qfeBjrue426x1E2gJ13VY7KgtYp3GTfEunBjmwsoBgmEpCEiQM",
  "key33": "2NaubmKaYfqmbWdC9CkoyaMRs3i3yGivw1v7DZaMGhxYPwTY798aLcpvmBQNqSo8yyEZRWNHq3EVUW6aC6xdMFmk",
  "key34": "4m5TTnLqDrsDNKiJfcbefKHbBTLurGbjGHVDm4e2ce8G8bf12CcFVWLo4oSzPxQyoABQEEqmMqCKhJL7KfmX4KCS",
  "key35": "2fHeVUdRhg8gVqX2h1a7DMC7iDv6re1smGgxSZ1bo4wWgDdu5CHHqht1LAhjpbqxsVZYAWfjr1nZ2h7pYuHiLoRP",
  "key36": "2GvvgPomeUAVkajD7UewrrA7fgRCX6njb6WFf6XGMrCFmWNs5cxtPSbhoGyoCVQMv73wYoKoT2t6JnJjz58XGBZc",
  "key37": "5r7c9A1CDY5V1sJNYf4nfVyYXajsasLiT78FKVr8nDoaTnN4TFH93t4FBHZW8WdXyC3SXFhAstUnMiG6W1hBYmty",
  "key38": "3bEDUSA5hvhaWqWVqQvgZeMeaJnL4TATMXni8bsTQzmfoghoGV1MtjJHuXemDfFjxkHNQ4jJgCJH6D4swvNhtwLj"
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
