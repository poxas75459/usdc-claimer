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
    "5qUUSjdJuegsevy7d56S3x7uagD1BNG29k5jrLPr9LqLieJygJruGHtGboqXryUs5yYgJfkrqNjTZfAiuoBjRxgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E9vYAnAWkeKpF9TEdnXdg4HKVuDNcmUQDaH3AGLkzyESUAw6AvoDntYTJevJVgY7xz1aTG8aMceUsWJc5cE2dYG",
  "key1": "4KfNL2tYy99qyBa6zZj5EhzPHn4TMXkLGMWKuoyYJXCeJLsZLVYJokqTrmdnntsS6b9qikBq73f8pqXrGhb4i549",
  "key2": "3CNhZYcZZChQT2D1xMvAfV4WcqPZ5z766AR8Z2h5FjokU74LCsegzVPD7BUvuuLK7ptTVYQXyUNhJDjCv28EjbSN",
  "key3": "2DbyEzmUYCYWXakV78tQJiZ56EEE7yAtBMibJoj8Ciqawqo6JD59W3whw7K5aP65p2xsj9X6F8tB7s8aoZo356Db",
  "key4": "2R2EpChfX38Zno8V9nv83YvxYtKJgDzvfdRJuujHPGDUBPBYnCTywk1TWuqeGojSFbdZSpPCXS92oYr4xfSw1MLj",
  "key5": "3iefj1gaRvVdA5diePXZ6ZdyJLDpmsoVMdBHx1sN4nFsLeKHywvkpmDPBMd1NGpTJypsdBhJVrTwcbTCrE516YQL",
  "key6": "522Tb1u2GMSxSpGUvwD9KaDASUzoezJidn1mgzLPVeAZsbRHpab6RipoCeZNW3VJK8R574FX8hxNt8Wriadm15Ji",
  "key7": "3dDMC6bxoVDHdcs8yYSYKV2nU48Yt1q2UDNPowmvuHyUJtjus9AbmWiqr5jyqbPwfhKqYxoFZ2BheuCZvp3kKFgz",
  "key8": "4tXoXWPip9CQByBVXi8XBdjm4QDPVcZCdUbYcoXzuW2fPq57FEV4dJneNhc7vpUKfVNFRvvE1hXQQWF7CkrxG8kP",
  "key9": "2zoCM9FfeGB41qpBdk64e8ETG7uHW2BKc3pF98jAmh4LiBKDwQk5puaPA7ijdFDwfkNzxrnqmNksBeMBayHNF2Rp",
  "key10": "2nx9Hs64z3saYQP4zoTG29cB7c6q5AUWpC2mZ76XjrUdPMzJPGfidPXeQEN6tQ9KgtLHZiPFW9es17H3j1RBUfFE",
  "key11": "4Wir3ZWxRYABGsLhJkTzX4BEaGEWj4jw5Tjxw7qT8Q2EvNxYyUU4qoL7opvv7EbRu5gRe34tJd5BNKVjfJxhFbfk",
  "key12": "3ekgPrjUY6BswDf8qcwi3SCGydr9sgtKeXDf3kzHaYLzGhxSRmTaea3LuE91yEExN6Mg94w2NHmXi3HGSmQ9mRnG",
  "key13": "5wcpaJUTwzw2YtAaJhog7fxCi3pZDwzaE2HfhDMBqHMv75PNorLspQ7qxCxoAZa53CjveH9jiVjCU9iXcyrTD1J3",
  "key14": "2LSVcC9yHoiQ7bS6akhJdy3MnxW1CJUGqsUoJoLERciXmKY6Xgas4cVAGw1KnUN8B4dR7tmFVpTaus4B17H8eavs",
  "key15": "52QSSYerpSiK8nT2qoE7q7xqxdpwQ7ZZ7w5sUEbk1ah138S88gUFb9pYQaWwCNBg4xC6tyKQsAxJWLjcsTNp1T66",
  "key16": "gRuZU68nRhx2tmhcFkiPXDQggHXSFH3T8qCRopnUqQq9PsG1YtrdTU2aRRiLbVGMxdmLiQwYBcSZJwsDkVoALMS",
  "key17": "LfLQyLeZPA4JRDp9ken5WdpjS3ykMoM1gJKRCxGEApH8kpWGQBzDjgVuJcvFdVW9wirA32SSknuy49u29wqdAKn",
  "key18": "3iP9fFEUDXZP7bpJHRozTyJDXpUWd7RBSvgYp2pwx19BonWAaDhpqkNpuFfTeyqQG63HXwg2CyRrzzWvAiaewN6b",
  "key19": "ftNCFqek98SaTCiA7ywQ7d8jJZnk4tAjagYKZoHRkndj2b9U4d4q96ccN3pQSv4UC56vXtQYJd1K5Q5tcTjsb8r",
  "key20": "3hs5JmMSKBwFQM6ZZVfGNXNnMX39fp1sBQ5twg7b9YWa5LUPJryKfRocfvZ5WkivtCyxnDSB8gCWTmBzHjxyDt56",
  "key21": "64pve4FDJYLtr9ApCHB9sJERT6MnE2M3zNn24v4C9fP8M2HavJNj7WdGUMRfaT7s8S9DQ1rkGJj6jDMb7NLrqeop",
  "key22": "5wYQ5j6MVCqtfEkj6YZVxfmhviVbNi3tTsuH95mC6MmKDTdHtU6KEcXWFQJsKQ2NnY2q5uixTmCtUisMYnXQkicB",
  "key23": "4K4GGxveF428Q3mYmzowZdqh6ek9peVJsF6BsWzWP9RtXwVt9CHp65PaBVuA2DL81vo2XqKXSF1VqpvHex2bm47t",
  "key24": "95xg1RT1RPAXjbTmfRVzZqHnEUjhGD7fXcWLSHs3ykYGbRW5L6LfyyT8uiVXfW6MeE4gTwAnLHNeDp3w2a7TY1u",
  "key25": "4vCWJTP73ZSz3DXabRHjhvHopp26MNS4EkxYo2EgXwQFWF1Bj52ssrqrbee7ZVyXvwfXPet9kSBhzgijXsHytwmG",
  "key26": "cB8j7WbT2PsPxccbejZerf2NdbYdYPc7vkqBZgfrUwm82dRuUhR8Vp44CTKkuXnUZ9dKiuGuT3Ljoq3W6iFkHji",
  "key27": "3jQFBSG2fipuRCvHimS42qvuGbYyrRNjezKzxZk666739uc4tJmyyLnq9heW79ocHaZdB6q9PWz3rANca8zdCihu",
  "key28": "5GxmkaCgtq1EmGNmTRxg5kk7yyxqFvvTtqB1iV6aA249JPp1r15b825j7Y3m2VfNWRqZzQ7Sb9gr8fN1Ny1qVRvV",
  "key29": "4Ha8DXuiGGi2GmjxcWvyDf62w28zxHZndV2TuNrBRMGHnJKhvH9ALEmsi4gUnmziwtRC4GNMaKcX5hT7J4vX6RS5",
  "key30": "zDf2RAdFSLuSaA8f9s8Q7vedGoS1qDUCqCENE4Vsr9xMerhve1SpHBYDUPcPhtcpSt6vzWxQutUiwQMkyXVvXiu",
  "key31": "4DA5tEf73qsoefUyDpVYSS1P5FH3nKqJqDBNgLFKMQ7gQxuqEhNs88yBKBACm4WVSaXeEceH53kiTnTHAqtJUh9E",
  "key32": "ZsZCoV3kSmBVvu7HwjbU6JSCHboUbPotrSV6GqBrwkEGjJ3hMozk2atPEMkwLv9Xt9qkgatsJmTrAmTcg61Sies"
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
