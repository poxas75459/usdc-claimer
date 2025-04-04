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
    "2MPKsEsSqEvQi4qmhUVfoAz9yqtjSsDgrC3DY8njTyJ7zDX8DfLu2eFY1Uxuz24RUVacivWcAycYpCeKAmyVxc1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x3hv11NswFT4DzwqUGgkKf6zsJ3peYGdiQmH84FHrxQgUHvsQedLVedpM9k1CQcg6MNGMdiagXXviFAyardfK9C",
  "key1": "JUHqvraENRjwrabWmp4gCts6QVmUaB65W9QxUkvZTLyCW6CHrXiJT1q3ZmotzTbTY3FNugSqh6oD9XdCqN3otn8",
  "key2": "3h4mdqDnSUJssGXjYGnHwTmQJYudADPLxLuU6buMVKvS53J2egV1mpNS9P8EFZMTAyAUUt12GC4jokLUnJVXFhEk",
  "key3": "4SWHfoZabdXdPC9NuowWPLUy6yMYJwpjpGL6BUARqgjDpv95Rs6TEdS3gpApZJeg9FFTfZ4WaYQYRvtPvA99gYj3",
  "key4": "57byDh2jRVLcM1ntg7ViaqG5UoNMW3RRvwMkknNMYiJc53mKpzEFPXzhj4zph7hBV6rYVCECdL8R9zCprScNZBLf",
  "key5": "2ivDXgyQQPYby6eS1S8NjVEwEHfWTfmc2GbjmqjEoMs7pP61mX6oZeQTzw8N4NGfFCB39MXZLjBpvJKwESWeusxC",
  "key6": "2GxDUSRBT7xfX3q2F22vDESJsJNmUJnVS2P7qzbFu9z7PccsKk9iLsFba78egHXvBb3ojKTcJdtLwtcRXNdmo1dH",
  "key7": "4gpskp41jCetTXsUYdygbwwzGkautiUE2umQ1E4MkGwUMaVXdHW8Ragn4fESEAWnBUV3KGH7mFrFjHacwGQyJScu",
  "key8": "k4ogRVBvxdvKpyTXPMUq9Q4zuDF8SwG8uezvWGHNDg3WUBtzj1pvjnhJMUJQYHoHFLDC55y3Z4ouiEWBqj7kME7",
  "key9": "5mPRkRVmc8SSUh3HBYc72GbojEPgBn9wfZ5LEScywz37kTjKqfZaRWx2cpHERX8xxfmYCfG8erBK33zQNyVoAvbp",
  "key10": "WZNZDYi6AN8p9rgB7KxNEpDjwnoGDFSgtZ8jLQA2AwhYHabAMHppwaKFVwqBbTzktHKrJZ8XvaydQXNK41ZF5b9",
  "key11": "5YLuspy64ghYnV1PJBGPFwGwHMZ1kvU14dzjnbq3YEkzguis3wZpGMcdwsRVuRjY2vXmc57Kvg7evK41T44aUeGE",
  "key12": "5tbdenCTbHeG8Qi7vaXpQrZDZHtFNJ5RfPfD8VykQruxSxpaLLifbvV1ARp48LvKrKqD8zoy7hCNxiMpPYwma1nA",
  "key13": "4ciRthLBNuLaicdNmkgGALVJ9Jx28n7WqETVSomW2rX8irN3QMiD5MqU6b6Pm142L9yEwCWtZfcB1PXsBJsyLqeJ",
  "key14": "5PnPbfHZTv7wSDrftxhcXEw7TWsEHksqweqzNvdiv3wtH1JjuUGtBuJpr8CvqrStnBRcvL85s9Fj1QiJr9fvQ6wv",
  "key15": "w2zsLkNAsi7axhZsXoYPCGMXd8QnqrsdiSoZ6AXJABThpSLm3UkEHuD5RNa9XFcyQg5bxcEDpcvD3os9wKLN1F3",
  "key16": "22BPLGzZkBXasn9XRGLc7WHG8P9mK1FooHrEzWzCi1DnNxhgQqqCVidaQwnXoYEiCAUJo37aQJRmbnT891b9XbTQ",
  "key17": "4D7eCcZGhDZckwoxjqouFb3ZENd3c1QYXLMNuzj63dtJmvEJAXFRXuYLi7wVDY8MnXxJ3u9LYrnwgPfQhwAuEJNE",
  "key18": "2sKj7Nh1tPG3qSjkgDgjEnpfyZzVpZQqYwDXGZYC1d1gQ75YfHKUdJfdHgAR8Gjn7HBbkH3cHFL44mVt5R2CVWbP",
  "key19": "niFuDf6oYUS8BmY9kHzVrRtR57AuFYhXAU6wpyDmy6H7Naxv9t1a2nCt8FozUQKFTQgPoWrHVbNVdMfED3u9vJ6",
  "key20": "5zN51WseuBSaLjeffZLRJsYUqBjcwjDrqVGtW755bw36Kvd6qMTR4qmQXwzNDYjCAuUBSVBjnABFMCXvUp9Umnqo",
  "key21": "3kEVUvG1rh7nTAZWzxsa7dyTHgrVTko8gEi4QqV8MxeMPDuMqneNxg1whs9YznSk5sGYUJMUV8BQeREt3sP1utVu",
  "key22": "3Nm7x1BifawLSVjS344GePwix8j15zLVJcEwwe4XsbEHPrX6nXspxfafwLT4pXdpHqktkkC2q84YW3pX8f5ubQ4N",
  "key23": "33KvzeMvzgwXvu5NUqKTNrSxzHZGMvsRpmGDnj7QXgjWfmuifjnNUYjWfbwryPAp7D97VjoX5pEAmHuyJ2wFvqPB",
  "key24": "2nBFxaxE3ceBao29KcBYcsFV1chCYUpGchnr4WsqgaT7mDz43sB3nEmM6JENgPGYQU8vxhaWxp9YGvRSzytESxLh",
  "key25": "3PPdqnThWgkBvQt93vwoVk4BVYfAXWTgmUvhmEx5H2zqQdPgdg8zJmZgQxJBXt3nk5JsA1233kNfiMnjzPW6JUmL",
  "key26": "285kyinqC4Y373TYHKaEUknGbVeLUcoN8UjCbgooMEvviViitzh4zYHPyWRLzcVooWsRnghwSa5MbhzwGkpT2VkL",
  "key27": "4N7cx4ic9iUwSFz6a4TjeU4eVUE6R1gwxtiFkgdnR6yFBo4HRwwPrPvFtvuGQmrwASJKNxTdG5rnaYSPBQJ7fi21",
  "key28": "3Ex9574BHzcZf2wWRUXKL2cmbkTtxFwxqPMkPVUXCt9KJXFKFYNhWDXYY97nGNu7KhBd3rtzxnmVNcth6VgN8a9",
  "key29": "5oKSKsAiqoFaKfU8Yk2UXBBviXe9zLq8Y8GnBnh7F6qQSxzfNf8znYyMzC5zbHuch2fa8zfdVVFVWnEyFnzjTBQs",
  "key30": "5jgZ7YTqYacGioXcLzaR1yHnPZDbWtzRjeysYHKXmYWzgaKf84MeBQyx74B1xy3TrZXjUAhubySJyo9Z32vwi6VC",
  "key31": "4ohetGadKKbFsoS8LC5z2zJF2cn7U74ZsRHxCjCnGjrMXJpPjEUwzNsEj9n8BmNn4LviwLQMRSSufiacCYS7TbTn",
  "key32": "hjuA1fuCUgRSSUdD16QJmu3YVL3XCtcgAh25YySqSpdBsebQbhNf7BkkTrncqvKzCVwtEV4BLy277icrQtdsKSD",
  "key33": "47CNLm8PdFCZAupoJpUQpqGzFkqSYAgd5C9zUW3ByCsvFUA9tZwmjFVjjRxezyV55Fez5isg9RpkWVjhBWvt7rqF",
  "key34": "B99D9YCBVr5MqR7mAx7baB9dXmPewJgfgKCh4WrEZyqURQpM3DtuYSQZjTLDqQvHyeP3pUKGSsMXEBoMegE2HQA",
  "key35": "zw3MK69w226WbY2tFF3Yac56opBwno5Fk4uSwA5LvRhVKnZ6gbqQfcPeZHy8wE9JkdYbijH3DxTi3NdQ8ZqkbLh",
  "key36": "5bfsqBQ9CiidVnQRTqWFGqdjHQaK57TK48bTHjKJ9DUDSGXPV3bSqzJxRr6ZxyrNmbjrbXqjeKsmhe8YWQpEmUys",
  "key37": "5zTh9otgiPvR8MHWY8g8vzz4mc4MuhvvAmXDUjwPzF1onZ1JC4qRfFzhbJVgsMmf8rX4XBW2nFKHSS5G4zYb7mrx",
  "key38": "xyeaoNP7LTJTtu6oAp5BXxX5cLsVXFcW3tym512UEVS7iHdAT6S4ePo3FGLettcK1G82KVd4bzorXnrfQZN8ZdA",
  "key39": "212ToH9HVUXjorzwqLsb5FTU1UiR6fGgoxSeiCinQAQ7zHTwaVafz6UnuRUgQovBcL1YfXnQWXRkpDzZqjZxtzd6",
  "key40": "47vvyjwAPeqLXhRsEipgob7zZy3wXekTAoiRy5QjqHnPx2K3gn4FFnWpYNfsnujWPLdQu1uhMrjvU5gVmrcKxmaX",
  "key41": "3Vk4XLFtkp3jRH8bbSBQd5NScZ8kvxcxJzVLrR3BRbTDaHjJi6f7PRAP13ZKJmvTj9gJabPSXwofn3og1gyft9Ae",
  "key42": "2J1mhVAsUeUeMmERXHsKKQz8vYietydduHHShvqa4r5dCKXHCAfZ9WnXSTp4rZdmuFMjGK2m6nMxSA3izbBhY6s6",
  "key43": "jf7MbHCbynKZjcC9KruTsPHbtMrkVPZRz3dsiEf98oWv3rJeEkTMEHGvqv6RdFLVejmvdSa9kmi3wF48tEcMFJL"
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
