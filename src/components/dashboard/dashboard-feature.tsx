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
    "3MyBahG8jjdM8XDzPoV4V1gwNZDuZ8NfsnwYrjAuy2BqXoAmJqv5K3RbFTtTXT5sTu5PLhp2pwDH9HTv3facFLBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPTqnC8EKhwuDdL1kRfEPn3APA5jcae7C4ypckRNJBGURnK3amhWuXLY6DkRFJkN5w71Xp4XCUUkJHBrcv1sGUK",
  "key1": "61AzcNCL3bMvm8PsivYdHC2b6ZPGXpRpsAAwmEV6Ryt5q4QbqyKA6eH9PNHPVAQHdNRrFh6rtAqhnPGuhafjFERV",
  "key2": "5U8yEVHGtNVwesBNMMjFrWjda8vF4JqhZanVSt7tKVUHuE1ckBbwDk7kk2zmZCBptP1yvnDvQ4KMHGFh4iKLpRwx",
  "key3": "3N1m1P6gFQcUESkc8QZz3bmRjx3pmrFXT8umtMVQRv5e4h1BGr9hL6bcbiicyeAgUfqK3BoddYr7nKmZNS16cbbX",
  "key4": "3cGZa4MrUs1T3tK2qqRufrRuWFoRAtXrdkRmAkv7NLis2WQgx98XfYDnU661PCL1zS9wNBXTH9EBsZUGof3jksNh",
  "key5": "4eWhrbU3jk2mMquaCR2h6hNxUfUVxrue3K838PJTZy5VM1ZZd1AVrEY3argLnenWgtoxRW9L3pXDZYG3qmCtn7RY",
  "key6": "5rsKcajQ2DgS7qKefKitecXMkj2zmodhmf5rEB2SGKtvwhk9661kbhB7TjkukZkEFqQR9YdQ4x5o69q7n7vdJA1V",
  "key7": "kfjBQWK5DgvWBeqopn7fpQmT4jktkmgaBEVUPVP7cDahzMS5dhMQ38JqoW1CTWNMFJtnhQaXivDHm4r1d5fKuG9",
  "key8": "41DyZfFYuUghExW6q6r1WSkfCHmLztJm2P2pWQLipPk6mycgeNNmhYNbgDfZY2sSvCUV2BSyRApDiJsJAWPYqfZ5",
  "key9": "2qwo8pwg72PMp4uor7D51rmUWpUY8qwUgj2V5VZtc3m3NjtKzKcRfRx3BZ1uwNpY4YSzTiVRwBRfFSjnSTuUvWWZ",
  "key10": "5YeYkaMK2YwD1jVEWKEJHeB3ctrLfjW6zZqPDoLjN6gfkxAJM62MKfVLmuaA73V1DZwVfSuHTQ6ZEBjkh6euUSKH",
  "key11": "3PY73ntmYSboQpNmPcKX9GjZBz6uZp5wFxrkcz2eeaYtp4nDD2aAMMUV95nLxakpBABN9jCbKfqvhiyQ6acQcbfV",
  "key12": "27Sn5c23U4UWkcZgPeH49arryWCi5o86H8KGcQLfu64NPZwDdjnVCUZvzyBqUNiPMSeuVtUKCEAx96hSaYhjit3L",
  "key13": "61dNPDzrVAKnmZ3Lkuhn5dRAz37MWUnixhw18TgMcJv7WG2o8L5HggbAMb6cTB9NVkaiqD8Xi5qQBVZWfa6xRvpm",
  "key14": "Zm7XTRvnNYTefjCEShaaqHDf5yEZmSFzHbpoL9bi8TtTUdvtLaAFRCjB89YBcNGsncMdHDP2NyEYqrF1KcomEMP",
  "key15": "4vpokUogqEpGubnideqfREGQQ7wuvwFmbARf8nq8G3zUR4Fxcv6mdejQqLfKqUJSfMfwkQPKhExdkKPpnDtWnXnz",
  "key16": "33NasCEncT9dcJypxrXfNkJ6DGnfv2rqy6N12JS3HUH8h68xEWnUasRQWREcnjCX3A7HjmddEjgbq4mENYunkE2T",
  "key17": "2CKGKntgRAFcEQpFsqqUyxB8jfbYDWLhmRKVGGU1CR5dce1tTj1SrnRuHAny6RYzG1uXzettpfACMeagXEfXLq6",
  "key18": "maBvGPrHZ5zAyji5SoEGvGJgRMvRDzyznQ8EQLQYy3DLEmk6ZpGY6bbc9w452Kq7HEiJ9Jw3Ewk2d6XbahA2qjn",
  "key19": "5LrDQCnk1QYEatmzZGwVJM2AqAjWzPjyrn7Ssc4QKczqbDcG35Kan195ZmPik8Gp3fUBDinHMdT6pksG7Yp8HbLh",
  "key20": "3qFBSbfYcBYoagK351pHdGqSe61GxjfoRfLGgxuXvyXoiHkv3BWcRFsUxZ4FL2JKqkZD3Ez7EGi1cGdcmPqLrMJZ",
  "key21": "58p3g5LvQ5pDMpFVfghPS4A2a5vbpZUZqKEiJ2RTM9YN74YU1yGZvXFEGCVDTBPp7UbST3e6pVQDbfs5voSTgqyE",
  "key22": "2hF3W8beC84zq59tYpF43xuSkp6hsQ1B8e8Ku9BqBMNdY29z6o9ffK1nqB8L7yTdFt5JKzq7aFg2WWbGszkVG3Fa",
  "key23": "5k9JN3fiDe15cSyu5QnrnZUyDLMY1dYh5jVihM6ynt7nYuQ31XjX1XDDqP8k6Ahs1Z4HhNX5id5gCtuPT1puPWtG",
  "key24": "62ih7t7cp2R85aR7fKtU2gvYkBA6oTCVUGfr5bcFovvA4jBaQYKxTTdT1mETiwFRG2SbYbixun2T1mo3wazboKmu",
  "key25": "3vdJeymUHTXADjmTHF1Vs23jRumczzvBnGtz3vZkNpBcM6ugnmhtYnh9EvcchNkTJaq8bzAFZBSSy1n4kNZQ1Gk1",
  "key26": "2ZhC6CrHRYZLBHzc9idCJAUfP58AH1k9DYEY3ozVrs1fuTEQk1Uez7L3DaAK9zyVZok2sqUuDxqtKGVFLh5Quczb",
  "key27": "4zxF4YtxxdmZTCr6oixd4P7jycRn31VPWTLGmPSfJhhrh7iZBeXRekSmgmyQ1BcVqDvZtWwxSVwBuyx7Hc4oQZfM",
  "key28": "623edkbShgPdPeMfzcLj9C94FFC1zis98dPfCQAsgvGTmG48WvkdvCiztiS71KsGR9Dj4Nye7qE6uy2evJi9BmN",
  "key29": "9RVRR6uTmKqsa943V5cSya9LCQtMNiYhLJvq9FD2LWfDyG8LvuNgMLx2PYNHESmdnhwvjWFTMtWrJnn2Cw5kaZB",
  "key30": "5p2QtUtSBgHX8SfoLekxgQbwj1C3vumkgGrn8CJr3RXec7RnLkCnqH2goyaZ6VpZEXfkoYXewp3iJzqTUtzKEdrE",
  "key31": "Xv2ZYKuYh18zf7ANFSzNZsL6siBy3BARXkTXfr4AX9uxkAX5scomBDhhyaNW5f2rc9eowotw5JhyYgRiPFVakbX",
  "key32": "5BE26sW3RyyFB1NTyD7Yy4ecG5Q1tD4J7tMhg6KQ8SVbBRYi9fam14CEasq3tGBrRfwy28stLcNu6GuPcp67RSZ2",
  "key33": "38yGrACdctKju12YTieoT81UjTxh6XhgLQNZH8LtMMJKH9jMboKq7kGjoeNLQdGxNLLsVz4whK9kWR8YTqa4UowH",
  "key34": "4zzYFPR1HYbobRtZpS7gnQV5ABeC4Xj23Sf76WfjroazqW1RZpxCEiWH6ZEKUk9dytPv5mb73UahKtpF7zcqbsp8",
  "key35": "4FRtRwgTLe31oKvMediX415j7D5ECQCswaqXTwjW4SJdH2K18jKbi5WtpLthpLz2vzArgWcpbyipov4eBkWqcBqz",
  "key36": "Wse3VybNhsZUVN2KEcTsckjrLM3KEdhNaBYwhn8aUJDucf334zAjmcjTE2vk6T5acP9sEYUaQyxG5DaoJFBAhEw",
  "key37": "cuUbWELtKwxtKPswj5DX3KqwhV6BB3SpTa1KU3Kk8Z6Mqo7V3bsmNe8QkLjHu3KS1qhgkh2zCafEmFhknsSvbBH",
  "key38": "dcmZU56vVVx3tY9PoBAze4J8gxuxS6XunTL1UQ7PPSADkU2cwntN6Y5qVihqCNdNyn8hdjEUgAA2a5BSYpa6TtR",
  "key39": "3RanJs57tKbUAcM5MK3LCxz7GS43xnn8FVQ62wxb6BXC3qydSx8h6DJ5F9JXH8tZM8DuYzjCWDeWkkGR6LFatR5C",
  "key40": "4MQssDNBiujS569vTvC4ExJvYvLXz9rycMH9DzK76oRb4XEfzY8ai2nnPnL5DcP1aRTqqHp5P5EqhbL3gvyvaAEo",
  "key41": "5EhWYuM3YWceY5VswhBn59V2H36YebSyoLdyjhkWEpyKkyQpUJTzC5wa216ZoMEYNSED3EvM9miZKKLhEX1bDvKJ",
  "key42": "3jECPTt69gnvVFBhDs6jbu5VuddDLFwWkxLdjyaP8KXkB7Trn3ZtzoZc6138o8j1AKNhvyFcbTf3LZiLE5y88NrK",
  "key43": "55JZx6xR2nuaQX1RXgoqGDjqaFHc1j3oXSWwJ66YUnkkqhxY9c1e9yJ79CwzFnpkBt99FXMjVkui1qf8vvLc6zG5"
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
