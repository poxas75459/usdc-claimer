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
    "3WWnTtcE1mbMrtK131x94v8wsJ4TyX5xUPMQmCni5rcTF3acx9KgeUQGqYDXEnotme27hLHixcH8Ah5mcUF3ndLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28F4Xc8qb3xvGNhsV8Fnyc2FpxTfdwYoHWqHsZAw8eZ543mjCPK3bHeSLYiS6xWkpmh5xEb3ehSsyZzhHoHjtsAo",
  "key1": "j8EwGDs7F6CUaLMStmRqJimzpxebBBnqM9sQ8Trm6jrydQ6f57wt4eEuGEnsmYuLv5NuGrMwEzwXquETYYxuzeJ",
  "key2": "28RMnXRFdhX8tMYq9hA611g5vU3mnp75cCvJXRi3NaFBuF8eysrv7gSSqSHSVvL8JhB1X5QBCGipRn4E7Ev84n9j",
  "key3": "5ScQpcEfYiBhwJMvh9vu2fyBD7RcdQjTHxWeMSP3tonMY2zqTGkbfVxZ3NkzB3jRuG7EijGTNrGQH1xtp5PLHrKi",
  "key4": "HfpkRurkYWpWUiF3MmLNHjb7cd8LyBXsnYCPYBrAodc5xokMgB8qhdaootMVzGCQTkg9k261J4wzRzp8NUZdqEx",
  "key5": "4SpVXTPjUYBvKBTNXR3NM9qwNinWnGr7WJCcDakrVB93H6UDyvyg18RPeK8aoFMgn5PCtjqBfPZUXa7mD8w3FTTz",
  "key6": "37Fsj7ToGLMa1b13ZBsXHXX1FbSTnqAKdnNt3atmUF7ZXs6e7U9q479GeX3cuDoF8AgxDDm6rR4nEYbDELY8jM8T",
  "key7": "3B4UrtfKb3GeoEWGvRNf2M72NLTAgTKyWZ3ywY6ETxJuvxYNnmkWXSpE8aTzXGcBqyiaaGqmdiBunBDZvTstCdBr",
  "key8": "i5x34vwarDzduEywS2dgqttK91p5d7A7bzrK5daTmfn7jkrzk54mq331283QBdC86BzTEGZiGRBn176RXfpkLmM",
  "key9": "4Pa1fwubKwEfNGc7Bx6DTBjmkC64wcLmKULkhRLEhVFuSSKCLCqjjrBUvCMo7nt6BoYT8L2mNotn2xYwh6rouqi6",
  "key10": "3npYEgKuAK71DZSScxt5K2ppK563mP22sJmVvBxZLnyj5WXwvKoMSfMFrxBGX8R4Mu4UR7Qp6sYnnKWE5DrNqM2D",
  "key11": "7we96jwHXs9nAFoBZ1YvvxqAyKJaPCGSP76qci7BBP9MqDRVwHbJrZS8AmXnt8hmagZSsKg86c7szgsNc1SE2gA",
  "key12": "4wR5EP2uLsSaCBsQvKJMS9qHZhbLdexhRdeifrmohfusZQaQn7JwWUJuRY7Ghtyu2cN75MyRsizNPTmCKSc5ZUU1",
  "key13": "w5ttP3ZrYMbdEyqCdUXh7DWUxCKSn9ConvDk2MyZRXSV2qUywLrnqKYZJLo6v7NtpZCPceM7hKXZce4F9VSB1cp",
  "key14": "5KxUPeo7BhsNFtdCkzbijDAuBEz95D3TJhPUJiLnvSgCDuqtAzjKTJpkZ3d4VJb25ZYkjvKPhS8AM9vpqe3nEtWz",
  "key15": "5bb9Q2yRPCZnBjYn8XRy1ou1r8qrceEW1u6YPKk7TQBtpozgcCcd5jjyqNBQm8Dowic7o1QapR3kSTmBv9wF3mqg",
  "key16": "54cijzPoVjJePb38t4gqi9aA3gGcModaFddofWwrzEWkDY85gmfFyKAFYsShJN5tCT1WToPtqLUVbf1wSFMJWwRe",
  "key17": "5DtdkzdwQQdqVZvoymi3RkWAFZNpdtFy1Wh1afoQpzgAvNYwRB6iQi3NQq4GLpXJipe93nMdzJgt4cDSDtfqPV89",
  "key18": "5kNfnnexLBJXWXye5X9yBqRqf7Wi4EEqYdt1YRwX2CRwjB2V3mkVyWWDRmKfX7Y9QHyAzqBVUKfw8PuaidtVQ9ic",
  "key19": "83YFTYR8wskFqiL6zdkeyv7EnNcwAPC3v54LfJftXLd13nSPz6gqovmWAsXszBRbiDPrf4QzaiTEvnX9UL91u4Q",
  "key20": "5M6zMj8twZspe7kVpPX5ueKoSvhxwE5WUuco1aHDSkaDD641MKSYJYbtqQi8zYzX21cCtjHFZajzQx7av2qMuG8S",
  "key21": "5iLqeq8ddAQeT93XAhPunsGP1urBxEACjcnyQFAnFD2QWoUKBtjYerRCwkWFXVkiACR7DNdCdFDMB8oWyazE7gba",
  "key22": "4tNaS6k4zEJEKxAHBNWf97d1X6KD2jYZYFYgMDcrZe7fPsWkWGWvj4GYQgqzA7qJQGdFfVf4yix1oKg1XuLLrZev",
  "key23": "5eJwzx1DkQsMd49H6bKhgPdLKrZ1ijvRsEafdrPof69ba2zkY8miNkUoUMZ36kmwGayPkNiCcqe9xfLvXyNWgymS",
  "key24": "3R8TFo4QVdREFCfXzmzLWXFiwjVs8vaygQDPqRXhZ3DRaqPURnJXfTd7Ppyq6bQHBC4HNoPZzyYsUvp8yF3bXFz3",
  "key25": "3QZioX8WUFAKoc1FLU3M9xB6CLtCBaepENMmfFuQT6vsahuCbbKha9JJJ8uWmoCG5etvbsLRp5DooYJyG83hWzjf",
  "key26": "3emQk47xRimj47riA2QkkV4B8JMyXzruU9uFUhXjcAqJcy2hCsUenUpaVnQMets7vGcmfwu4TgoHgErACn6nSZQK",
  "key27": "3yFMMgrGUPqDbrTEpsfzKFbcwfUmSiUe6StKADJABgpTkhKq9iGT61wwaD27QnDNsmAgaGfcH2m9auKbXpBU6Htf",
  "key28": "2DSP66RKmWGLrzFmqQbr1SGUJ4uLMpJUtrc6Ktkp99NyGHcMr79wi6haefuD3aEbCxpKBf2vr2uZHn2sBk8TABVL",
  "key29": "5XJTTrCZwrdndfsc9WvvQzkFfZmZwaHenyMmkvCxM7J3QrbPme8vSf4jFiJtqRtqisYnNeC9sqo4jCMRUSLMhAiw",
  "key30": "3p2893Ddbb9WLHcyhERSeVUJPaZQr9FXXWCYAtzmk7VBPF1pLzE91hMtfq7NfQwcdWBV9tDnq8pqcor5vhXDN5iW",
  "key31": "R97GWcPiUWwRwyqhEm48oDqqJTJPW2rxt3qRS6yaw4zbJVM1KdDmc1Z9nLjBpjw4BcNEmd8ZnXc7jnQWy2UUzfX",
  "key32": "5Y7jfRQ6KDFJLzHWLdRGtJ8SpNzH9kTJAVLHJmnx2Np3AifZF9KFGZEHsC6ekwkGyrxWcENzcwKdYiu9LQpfTWvc",
  "key33": "4CDMXK8BZH4FE1hubxhnNmDmP2ryaNEW7BktsW1uuGmHiTqPE2gQzR7NG3HtdaftHUCPpBNtHNFZip3ASuxfNLNp",
  "key34": "41qppMSdiKGKx1hJxoRon7yiXaTUCGSDwvRJj3iDyFDTKfLJpeiqYCBpqrkENJxJuP7BVfVNeuR3cPUE5NnX8iiG",
  "key35": "4vbJxLwKFYCq1U5ura7E2R2rxTh9Z8EEe2BJQDRULeaZfqZi2tLo2HbFexCEkviGonDNRCJNv1R6gQLexazX2N3C",
  "key36": "TJ6vkDE5bQXeDsZWyK2mQuKcMHeVh2TxTKTUFah9qHksyc2TNWhfod7RD4QLkZrpQ8ft2f3KtpSB5eN9kf9fcst",
  "key37": "BYwTduEEM9967nd3P85HH4cbchrnjYZpRyHWE6ByCsJ2fompnwbBSGZUxTedpmZB4qGQAMPh1Dk3zUfrmfDgKDx",
  "key38": "5ZhuWoQQgnzSj9D46VyC4PQYvySVHbd1n2V3ivJvhXxL1KYbgqzcxEQdBneUemNCvgnJHZd7LQS2vem3bHrMGV4R",
  "key39": "2x2wSfJ39RoBPKoKJ8o9EA8NJx6GqZxHjM4Xhq1DDaAKBLbA3w2nDgwnSuuGfp5kAiNdRu3tnzUh3549Fw4NRc3E",
  "key40": "9aX1gHZ6eSiLTU5SDmRcPVSiEEdP2wGZ2Zm1cQiyDWhAMo2rJvSZhJFiA6hZa2zfPz7EC6pEE7SDenC1MreLuFJ"
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
