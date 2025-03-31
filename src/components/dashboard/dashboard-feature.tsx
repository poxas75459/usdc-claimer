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
    "26GMrW4qSeJk1J5HGxdbuiPZ6uuAtFY2tPemdgS29dDbbh8mkFZ7vDWX5iuGoesCpXnKdFBXAjGUFnTZzUpNSrK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "343vqrV5dYihY7sFf4FxWnRSDTFbksCMfre2TCXrWuE5FsbLjKFvcUYMkR53ZRKiD4KJctSZBwAtDSRmvi1RRQFG",
  "key1": "4tAc3yLer1g35AGa3zJ7Z4Hu3qbwJBPM6eTbHyuHbdcFSMNNARPauChK5HsctscEuhwLWqfgP6bC2Xho8kKU7uo8",
  "key2": "5NzJ3Smt9ESHQba1XREobV6erfiUuwnAW1JKhMW8nEXvMoBUixZbr4tp1RPdpbeYVjRuKpzZ4fmwetrbkDwRvz6T",
  "key3": "4sEFciqnpVmtoKu1D5WEgHSUUgtRCc2kBTwCg45C1HrcG5NaninZB6GUpDi5wVb2H7gHXD3AV12YrQ4CUwLPa2Kr",
  "key4": "GA4c9tgiSZtVjChLpwuQ4jsN8hnZRiY3FBmzGmWdt4oaUXzfwJ4C2esNpTf3siMgkDFLW6bJp4NhmCZ5DEaeSV6",
  "key5": "KZF67rHGHJqrubqmHdhwQTVdXciSnEFn8n7BY6VTQgsVKJ9unSu64FH7ekuLiX2JRbW5CHEqFGVJ3ZCeCGB3sgN",
  "key6": "2RGizmd3yYCbfEuAzpRYifjgh9aScKKDw2jW3nwepz5gnEWYnjWQEKuxavSQZsTTarJM8cXasRJhPhq49S2i6UWq",
  "key7": "3Jw9i81syFcZjjvByZMVZmZuPrgPP1VqfWW2VeJwL9X9HoCRYWGbb4jNcw38t7z3dLKgCe58XXyJtm1zVqgJEi6J",
  "key8": "2DSdjepK6Wj3gxDqJCausb8zSk3w6j4p2nUMNsprbtVKgw8bxDfzryit3v8w8HnMESEgobjjgdMeJ9rHzuKXq5D",
  "key9": "2LbLpUK7w7GUZqudjadABe6Zny9s1qRbCJZwsA7CcJ3kbCJCFEWDrGL9WKCUsBfL64DFNKjS9vTLz4m3U3citmHD",
  "key10": "4K4zb9cwvi2G91poSMsoPYRAP5fyNgtL4aKNncJBVCoTijgm1noy6FUx9MUznzcg5CBUpQyUie3AeqcnFkFHepn9",
  "key11": "4gnYsfknPWtgLRY1nW4KDXBUXGMwnWWxCbumzhCsDUucVnjqTuqQ5Y5cpvpLv7Gg4nB8mBxTfAukieFZMaLbVEfY",
  "key12": "5sDA3v5dRWpb8St767j3XH5ycDg5GmoDZLMHkW75MeCt5VwyDc5YJENyuX5r6SQu5nM3Q65YMv8qwhAUqYZsZr1R",
  "key13": "2hvAXERmMa5oZPRy9YCnoQs6JmYD5JBXVeKKrbXXtK8EzGcVEweCzWnPmYZiqqT6bpY9UzDVxLXjfTuoQSm7uRhA",
  "key14": "59HFwVBSwaP8XUXCreHA9tuBYN34fq32fd5yY4DkSvNPgQ4CvSgnnf7JSDmhcQHYyvTHwsrg6jiE1pooLQLEhboP",
  "key15": "H4Kdd5GiUL8LGuviJvxCi5YRRZaSAC1HM7QQMZvWJeKQuA8DLkDEgsQjAU6tMcye1dnXntEYMPsA5hE6YUCbeCy",
  "key16": "4qvGDZdjVSYhxJdDBPSKfo2AwkkurHPFaSFWeE4iudNPanVLtRMyuBQwnoMLqWbgCmmnv8pnpeqphN73LL4eE8pR",
  "key17": "6simSrtTjD3EzbLGRAFUpXLhuuwehxSQaVLQKnkg6zMbKqg2p3si4CR2gYwAa1QLgeVGRVz9sw2ncApaTo6bdfk",
  "key18": "4kEFVhnYpekUiVr8MmtheC6pA6n6CQT61RGyTU5mjoiwGQsKCWJnNe819mDwf9mEtyGHKzAi7VD1bQ2CMEWn3KQG",
  "key19": "5npmWCKexesKpw1znz69Ae5hMthJvFigBDwtwhkt2XcJuArGpcnPW6ru4brcs5DUB7wwbuj6ebEVHRT9y9eamTAC",
  "key20": "3D4XL3wGnETpiNTFGmJPa95JUweK4iDLGShgqXJ94qVuyRfMx1bRLmnDa1x7hUbNMis4TQzzLuDHmHyx1geA4GKB",
  "key21": "24ptWeXmXnvFpDZoDk9FfhZ6Tmuseo3Y95fevJjLsAss2vLrbHmkoj3NhyxqJjgZTtAFqHCjijaLmfHEbRh6WZNG",
  "key22": "tUKYHDceYkK9ApUAAR15ecGdxbRuNoAuzSJq7CUY84yJvq214GGk1qYDGsPPzXBv73KQfnihtxTbVdi8wuSe6Zc",
  "key23": "61gkBukhBDuVCcqzg6feMyzp3oJgV1hu1ywpoSfpVqyXKrf1SaqVKZJoRAL1qTnFkPkDBSE1jxb34fzVAWRVT7pi",
  "key24": "216veK7gVjyiVRtXfeWmdb6u5LakWg1Lp9CUyz1sNGHjP9fRs41ocSjnqErWTGW3vwY46AjLqurjB75yt1kJxCii",
  "key25": "EQ3udsBuoBt2ThWSymf4aqjfiuUbRjTyQRLcxSNkk5QGQA7ECirEt7ufT5TtNe7o9d6zPsf7y3r1C4n9XmMrVKC",
  "key26": "3VKEcRXmLiUPPzxdgYYaXQcudLTruavBMURrU59gKhduu1B4JgfXV8gQ4naoX1XqVz3WfSrJ7xainRtGiuyXXbYA",
  "key27": "5J53bwE3fQvmDMkcuAtQzRU8K2WAtTx9sVnwQNrCcxcZrFVZ7395wNoMqDoE2WMDgZzsEAAGqSS71YCP11qaXnUg",
  "key28": "5N13uC82tGHq5MGAoEthRq1Tr3kJLfjJsXTvMHXN3n7UYxAQqWeKjVLhWBefoiAbnxfWFXsFuuZuYFT6ryTk6RM6",
  "key29": "vUH2Cb3n7exNiyF8LrABhUeTWcjhDePT1ni5Q4iuWMUGahJ2yLjH2eEm5LcgzUnbNpL8SVDrYQsAqpReMUZyccc",
  "key30": "2okX2miVhZLFS5aZiXQpsEqpUM3qgVto6ww7LwhmGYYrWsTp2xzGDEkAG747P7YVsayvUgrw2U19X8Z4XG5mZ87H",
  "key31": "2a4oaPL7KAfnV4iDE3DFakj2KyPi38qbmLGEQqDqQVzG5CBRG8ZF4Cg8thXSxmF4WfvL91DZGkQqBrqwgE471mYB",
  "key32": "4QyyxR6n9yq8pG4dKqs3rcsmBJkyw1TeJKmF4uqDn3cbgjQarCbUL6B75zRVGVrKSLJPrcgEFZZqTLWwh95PJax3",
  "key33": "5vdRH1VsgkougqjPTzy3RDf9BF6scHLNkKyRR2swSDuFYZn3eS3wTuNY1BU3isKwCM8hdfbDJ7kPVgyF8KdjTbQT",
  "key34": "xtBfved6jVLpn3e6bfLzwXFRrQYCH8wEvFKSi7zGvxsCESswoA9zzTrD7iqjgxVtHXkNdU8wnW8hGJ8sqeSkekS",
  "key35": "51ngbHH7Gm4e1SfBVUmfwbad2NfsWSGtvE8autved2BiESKNhiN8GXEFK8ZuEMZP6g3XGq62EFwYXLvBT97aMEp8",
  "key36": "2n8GzqZBnEEoTwLRfjrwSzqXgh4p5rPLuvNd7V4thZhvy7nA8eED4ttSRvGsymF2QwbH8V9GBPL2qUc5Zsd82Hva",
  "key37": "5bU25HPZeWK313LWWHUVqTmQpBugiGvJJZbBoih3cT1jmwC2KWDHqMYNCwJ86G1jsj9z2VALeAyYn6aQep1fmUNw",
  "key38": "NRQpuLoCuqaqUB7ZkDmXssAJSdKUEo3dYhqo6Bsc8A1hXDwWx4ADHowC13aMs9D7GbndpAkop6TxnP8yCgZmz2R",
  "key39": "4Rm1ECm5mV9iiUem6aQmDLP9gxH9irLb3vb6oH86FmQBorWjBJDFb24vc3WdB1gH3XEkHnS8HysAevYW8SCzDZ3c",
  "key40": "4K7fksNxBHV7AumFfSbgBtTzTBQP2soMm7WBeU8mxfAuEhYPkgXWqNemsfQUW9qcKXLUMNN6AQKZpxagjJjeLfLF",
  "key41": "t1g5iibqg4mqYGdVgfFbaHHsD6BB7vFLdzS7k4qDmHSQEmNDzXUXhJddzSMF9zGyCz1id2KJ2d7M8mmZgZQxjpk",
  "key42": "5Xc69KFz4ABjdgUPk58wxbgFSw4Ses8qXNC6t2XfWNzvEFqstEY7262Qoj79pWRHC77zSbypCnSSvemicSGpzFRb",
  "key43": "4kEX7aHRLStN1wncdWmD5jT6ApdTfbGUseBt5YsE8nntsndXwqEaHQcVUTphMgAMFaYDmZEW4kcQ6LHunmK8hZF4",
  "key44": "3xmLPLmH8adW9QcLTkgQUR6ujEDeQeGvpGzsw6UycdFQskTvQ2bUmSZ4RuLjhzE2DuUzM2nfGN2Kkcz1TTs4UdmT"
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
