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
    "3yd3MB3obB8tqbi5tqANicxvv6i43vh9k2w2iG5XG3o9TpoMKeQmTEb9JGKKyXcxWYuLDhBvCzi9YRVHMsco9GD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwMREZwAdragnJWHpdQNFuMdA7fwzF6trgDZWofHxUwi8zCu5CJPnQgSBjSQ41PwMPpB8EsG5aDibN7GbfWhqNi",
  "key1": "2txNEhvzsKr3bNq7CwnGCfBpBbVY1qmX4fJHq26xvCPusSqWaYVZCzfp75SckHBbzNrMipmenxdRXW38FXQJ3tgH",
  "key2": "4BY3GnWkGcdwqVgD2Bj3MdyMhFb4CBAbFmfzZ7EQSwDZyiuttRoqQkJHcBoLxJ9RQSwCYVVArkq2rBdBCYifHoW",
  "key3": "2xAwrsiqCTc7sg3Nh6gLFh5SECuBCj5SqoLe6WFc2iA3Av5rxNdSubMygeNTSSUiZqMxQxwMmtNSNpdoXRjU1hbL",
  "key4": "5vJ96kG8EyLYxukv6Rb5FGtNMqGhAr6c6pMVr5vYygFCqBaxMzshJ7dq5kKggtHG4eZgZjRS3wQMQEaUgNf4h63g",
  "key5": "hdwjaaffKetMfBFa8k38Qycp8ztfakGSXXmHozGA5rpKZsgyt6YsxzD3sB337dh9eU5hwMV8AvTGUrReTbtvmvp",
  "key6": "X9XP1T2JreAzYdxz5iZoPdm58ct1FcLpjdsKFVf8yJVbb4KuiTnYjCeCNGJzUEoM1Ns17ph6s9uR7TpwHmWqB8L",
  "key7": "2CXhq3DZLpi8H9ZWX2zAxJtWy5PVHEB4pzFTqYwvED4J43qjwGHaChbTtYN5u6xHL4Y4qnBX9ZVuwuSLhNV1asS2",
  "key8": "4nRxxQYgiSNVhhKhM6jPZautTDBbcxzdaznZhmtEHBhgQUF1enyiFo46qrp7CGuvQyo5H5Ytt1CVBkwiVecQkwHC",
  "key9": "599CpasG1hC8vcZHJvBPwn1Wex4ytBpCEMsaNVp7jAMfKJ71kUByzyyGmXuuvBtBk2shfWKbcWR2HS8nUKrQQG6v",
  "key10": "5SNMvMZX4aebH1JQ2Kr8KHXe42U4XQHDA3Dws58xZ9iLpSdYczRyqBvBGXAhAUjSqB7x5zNXYbtHRkrzRtwyJcxh",
  "key11": "3rJQKFRDnkm7LF62hEEA2TcKMHuN1w2dnjERw9sWXsMbeZRQWtgzjojt9u8EgDD5wHS1fAkE5TZCqmZXH6vMoUjt",
  "key12": "EziE1eR8dfjqPHUcnfkeUzLmhy6L6gPwrxt7M42c7817C7mrKzi5Rqi4qxiLkX6KYhbQi5Xp7HffgeNKxj5uMxd",
  "key13": "m7KW3Qca5ZxFeYZyUEXwAqaMa1F7GNSS1GNKQ4z7gk9VfQwtUkbwZs7sPbbVJzFhmSrS9E42RV9T55KEqZNTgoD",
  "key14": "2nxGrmmuks4E8zQmrnUWiMYy7jGkRTuK1gEQj9guNYzYzkmx3HtiEWxqvEAmMdMDAg4ZEWY93nQdJCXBADUxAxgb",
  "key15": "4XfP4mzUnp7XD3gxsj1Wcc9GM1DzWMNTCrJgJUYCaq6mfceMuQ3cwuYs7XpZUv4RVSa8xsxVQAqZRcTbApJNri2a",
  "key16": "5AFk5sCSR2HY55Nq11rnGvxWqAm8idgPboXhAdq3kZcUEt2QryHPrAhyGewuFSeyusfT2ndBqCrRLyrJnf5nVYjp",
  "key17": "5SG3LC1NuFz1nH7YFBHBRiXAdAz4BqUv6FA2dqHoSA6E2FyKbrvCjXk2YzJH9LZ6Pf3e38sfEJKXWQQUVyGUMwR9",
  "key18": "2mNWEJkq9BcpyHuwAkF38c7AveucmdNZ42MxdfaQakTj9gnUBvrESN3aoFQwKLFdh76rmksyZ2TyFhiMfvvEZsL6",
  "key19": "4rPE6DBxQD5TQJq81zwU4sE9jTMhfPnJgHisJiurjGWAdCr72nYZCZyAtLy7uPUSM5R3cHyuKDedeFGUNxrS8pWQ",
  "key20": "2yPbW3jDh3AmF7cHCHYxXUKCRaVCZ7C9t6riNcNXqMb8SvPbi4YEeAfpxvSWBN3bm16QLjNpvPuQCWvqBKTfpsrN",
  "key21": "4rWa5F6sCFtupcdJRk9zmDHyUBabL6KL5V8tqLPY4t8W1fjQL3Z84rZhtgg5EzLeCStaEy4RRP9o44r49fCeqEHB",
  "key22": "Et3bn77HmcxLxc1H71LA6SbaACQFNTVQgyq5wm1ELaVJM83UKW46K7Ndsye2NvJ5rEkWVupmRjXCtiZ2rcByjqz",
  "key23": "C5KdJ4cmXPMyq41nTmFZCWVGhNrX1q3phihgfD6pZ8tvTEMBrCukdfnn8UbGbxh3ZJSfp4MoMutJ5hCrgvp4B4G",
  "key24": "KFHQoCxNf7Qm9F5VgkALDhP5XfeeLr2HUihyyJUaMHkAngvPdWgV7McF4LTqFdxnAaYa4sh7ZL1QCHiiN6WXmUT",
  "key25": "5k5dNdzFhRf5iji5MJ8vnfUrxWmK9EuY6CdM33cmdTPpwZ6QGBahYUc6khMhCuLwV1NW1cCSr8fjYnEPjjqNA6Cc",
  "key26": "2tHCACPfC6CUtF3J876Xh7Wdntxe9Dd8K919cACn5GZNg8LR1kDh1eBQDvjMzzaYQYv18FziQQotD7tfCv2LSgCg",
  "key27": "2Gxioq9SZpxwZyAEUy8qpeqwp1DAioZx8cZQyNMqc9YgEd7JeXX3NgmsSBN6iUm6zEy1NDG9udvwrW4f8gnJTXSQ",
  "key28": "3TRJXppep7s9eL4sVCcDffkh1QnLgRTbXp9Z4oc6Fgvy9ep1VZ6ai98X9DeSRyhkYbBbAwBgvbpcuVSXfeM5oGZV",
  "key29": "3d97d1xTijZ6m4KJvhVbWX5J452C9HwfMSEACuXnae3qWuKejLARVv9F1MZ6pA4CPQtb7ZYAn6C5eKvypFxyQ4RP",
  "key30": "2jT1sYfj8xKHVzwjNXbAZ6AtyisoRtCdA6vCn6T8xtYKPwbQvA2UPtTYt7N7c4MTT8MDv1JFQRS7kr38NGwDnA38",
  "key31": "Jkh1VDb5qKuPdxvgcti2ULdQdoARgttZLq2ftvEKFoP5imBm4jUXeDBfdHcQgN4iUiiGDHaxggkMZPzmJRLSkCd",
  "key32": "4HoP3afBw6ZMQ47LtWiotizpMG5VLqL19GnzqVFo4ixwgY9UARcSDFaaqxRJEdfgXRn47zV5XLzo3DgYvjREh76B",
  "key33": "q43uLahxkSKQF2EQNFH71FWpH17PUMMKv2vZjsShZmMW2YKmL5EPqESDF7qVWdsqmLBwteYqMxHTRUVQGLtKyYq",
  "key34": "41rFPoTgycDmPmYSN1ac4aEG2ejgPThEiQQ3cceU6HzPnsFZNqPKdyfJFvfBbbpQ1WN4Cp69BZ1JNuJPP6GYJGoa",
  "key35": "4FsP6XaYXwtkWpUMvGVyqYSxLqwtY8sxYwzbLPiUnpZWc6z8hon8R3ecByXNLphNwQRSRJjbSFhfHwZcFez6NCZj",
  "key36": "9jmSPkG99vmw7U92tZXxEar64bgTPPTXafJr6dcjnyKGzr5NiaUEn5i9aKGgTmcaENs1iNmpc6wYoutWgiU9stu",
  "key37": "65ZpKyS5ypzTY9pgUjcyerzxBL5TVA9vezvBQoWjUY9kjZkawVj3hMaWTyTebmWdhMJ3PTkejigMFVkbaXzrqmuj",
  "key38": "2KpdKyQWSGBn6yVB7REetizAUgN8tUUx2NCHY9wkLaNw34Ci5Dj4dRMQsiez3vFyazT6MMCNJmYxgGTcJvdWfusY"
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
