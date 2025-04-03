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
    "3TrRy8vYxjb1DRbqNcv9Lxy8UUfphkUiyWXYY8esBHAyLCNLM9B5WvBSbgT12AAZH2k1jheguRouWeyVz3mz5LZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35XYCSuxCAWyK2vhL6FoNUgenf1eRrS77XSBVofnZDuTW19WwiVLwYAtL86ZT4zwcQthGmL4qk96zCMvFJj6LY2c",
  "key1": "4qr9hFKgrAdqMH4MuPGXcQvsE9ErXXtUqTDubkzn8N7T3F8dQb3z5LxJ7TvwTmjWGLbNQc5FJVivRYbHZ8myUjzR",
  "key2": "21bqGXmWGN6gJjWre1x6UGLDPn7SeiUyu5WcC95A9hggWaG2HuEnRaKJAXxy69XE4xwcnH3Vx2itYb5fz6aMJ3JD",
  "key3": "5hBTdHAwsb56HrStJa3SewDK1xkgB6N1djG9vSFVieeZPHP6obQsLrumbS254g9AE5HgQMVvSi6xm2wPhY2o17p6",
  "key4": "289h2fVWeyLPJrpzjJc2f7H852WaSb3dCsjK6AbkAVZLBdjedeVXJCzz8kCJWuM6zpBmzaYmAfZwESKRHs9B4HnZ",
  "key5": "YD6E6KW3YVWzLqPnpgfxT34fKzjKMGHbAh4VGywM9YywvV2F7LChyymXJzpya7nR7Qch8qUFatuXitiYFgEenG1",
  "key6": "ReyRrBg8XHesXXqRZFXAwyi5KZ5AkmvmpmsV7BXgJA5jeBpJ4yAGLbZapw4BSnBkrbBtPh8crTBTqafbMpKzjD5",
  "key7": "2kHwSx9Cf1gjtw7TBADBxEPzVhu8jnHBTRwm4bhrzGDJdY1qvTLfttLR9Dt3GeLpMqzeyHw4byJwhWGtkDKUMpzk",
  "key8": "2v6t34NuWm5iUg6EPf1xzmCD4Ujz5gkdx7X7MTPQy38rXot9f1swfCrRwmDYdQt3TPHWkAiV4QN3wQRkBRxWFKgK",
  "key9": "5rvyQUDZJcs91MWUtaEvoMnLrbnjebfN9pETVcfavxgUwbYCeJwp4SfbQfcG2rmr7iisCwiybJPvos9YmxmPQUhK",
  "key10": "4i3cVY2hDfakq48c2CQGbceJEgNfgX5PuqsH5QrizyW2zyMKdzWD7ehTRi4n5KkReb9U3BtbzhBi9i2hHXtVQjGs",
  "key11": "49cQBVYPXsi74uPzvM7iU26gwCJ4L2kDgqKwMMioZeaFJWCkfRd3Js4zKQkvWNhDb5QXPiKt49dEj6dEtSmJ96NY",
  "key12": "4YAz7XnTyxqPEVMV6cgxE31mWpBPBGziwFRyosvfhEc8DBW7Xk85dPnfBLWjskVm6cy6WJWqSnek4nzyK3TJGnKr",
  "key13": "4rAPCRjc4iTbrvyCP9o6wLbeagwvoejbEc6HFpeqATtUbQtTS4ASka9k7KY83DKq7KUj7MNCoTHDGw5fCYqDzvEz",
  "key14": "51PS92xixGMoFknZeC2QQGeX6YGJWfyM7x51pM6ogCnS7FZtLRGZ51WGMWvCUnEEaHGnS12pfkRdkHorGAqF4y4w",
  "key15": "5WcJo6q1VgkJJqDNP4Csh4iYYDQN3tFHXLD1HFybxNqNveyMCDMuieh4vbbvThWGX6xciar3E1sut22K3nHv73Ed",
  "key16": "2wMVkeuW6P9vGmUVRP25NJ5JJf8xazCjBPpyDmRLwMnD98UUnDJPXj4kkdnSqDLsZ6mu24hX4FYsXpZWq78N2img",
  "key17": "3gLVwiNJwu89K5gNRXVc9XUmYEXwdhNrayPtNmEJmwy8iT5Dh5JaxYwajnryGBHja1hL262ArHqD22ehktvXNtWS",
  "key18": "2yiWdwoyc1VXMzrexe6K2AAa1bCXfwLGU8TnodeVZZ79FmcikyEhsSebmQudrgsQoXfinhsFmrfAn7TpADSzsX6p",
  "key19": "51HVqvGfcezvkXLBHveiZd8VBkWZMbnBaFfCyCNL6wo4LzjNYBZXzi4EiWJHGMmdNawXmvTSnTgtzY9ptqoJznNn",
  "key20": "2USdUWvV29kkz3U4Cz7p2sK2HYLnHuETUwCpcwbQbcm1Vb5aXDG3nPDqxnnAWcFwsq4jXNYhf9vjUrbmutFQNFZu",
  "key21": "Gd2P9rks2R7vXjcfW4RUGUixf7dWCE3J1HuCuSuQDCYHT5g3m4b3UEmvcxdBBphxbauS6XpTQf6xgY6zwAH2z3F",
  "key22": "5hzvZyZH38ycxvaX7fCEoKu2KKFJZEEGQ6aHE8hERY8cqADDHhUS26Jk4KpJhwD9JXrhbp1ErG4n3WTHEcuEmvsF",
  "key23": "4jrH9DcZuDErHBQeus5eJhfoVMDDEJW8qJCGTSzYs9Hncrrv6Bhd77WVEq1XUA11wwCvNDKngMe2YEyceTonYjz5",
  "key24": "3hb6Huk5yvRfgW2f6udDyYTuh8U1SL3NqPyd1eLniVk4tLX7mBt36BWvdiA2Q4RojP5Su561mRSHvXTTYuPaz3z1",
  "key25": "2drJ3bGbb6EBCqmA4jGt2HAioMXgnanYK9H72H8WNBDqJLgxzoqrcceqqBuysx7FtyX7ioeCErp1tdeQpS9VLmJ6",
  "key26": "MGexrPWQRmor9uUQ99embW4JUh5EqQgKVsDk3VhkVao6mppAToBtKRo439AHpCATc5Nn4ES1Jy1KybGqUmSf17J",
  "key27": "MFCA6tvp8afbZxSCoSaRGnkxrgBFXUNQVyBfXJeuKiRBcutE1D3kZxTzy8CtLYiNEUPzxJsBFdUJX34cMYFUE4t",
  "key28": "28GTNbAng2FW2HnnBXA9SfXixuaaryqrZwJrR2eo8Qm7BbTy7HLu9eE6Y5eyofx971CwVBKFhVismHsDSeFPBiUb",
  "key29": "5XbQpsEkpE4T9mtV8oEFm3oksB4X1KFU92ickfmwAHwndhEmk1rDH8oUeWF79EYUuRZ4v81mjZRJbwvdxdCcUCi",
  "key30": "3vw9Q9tymox2aqP1DTz8j9A28t2Ugh3VKjkKgiHFA5f2kjZWUKkFQREta6ZqBSWRxMCodUwLCpqf5WWjqKhwCCuw",
  "key31": "4vP4KEKwQXivnmGDoYUbgcwXqt1H66wiRmf8SdNuBQr1yL1NxvD4sLj6wisHT2rb4Bzi7ULc1keBWMaja8B5SZJq",
  "key32": "4rzUpQUvvAi4MUETLrNyt3mqt2k8eJmfFWrtYF5EvJie5XgnTx4vWVHn5E3Wwznwog8UG6TE8RCNJabN2GNbNQTH",
  "key33": "45WjYbTKmeQx1FrxhaTYbCPdVUo6YowjuvKeYzcMnGDfa8XmM8eegn9LDvDWuECCAhHL8pyRLqnLZTCPZqGGoBq4",
  "key34": "3mw9KJMEkYGVPxxZEYNEeEdZ5djGLYjN7FMd2X9fyFNk5z4ffZ6UPoZ3AjAarYFcWrjSqU89wCiHWchMTtNjBwXN",
  "key35": "3hyzh3TqHEJuAWFwYLw97B63yUWbEoXQkqu9wbRpiVN5LR6Y3xD8bU2h3N51HTjVp55Q2iEpsgXHMQw9dSXJQZpj",
  "key36": "325oWAvGiDs3c8r1X8mNwSyQC2nNZiHWinkMaEXUptZ5hq7RPSwA79rXrDdPCoGGqF3xLpfu1me4HFfsE9qPwm67",
  "key37": "7QXepRuLKDMHxtAeWTeJHsBZvacXwqeaaPEVfMz4ic9NgsxUcVFt9wtWrmEEPqf495ehoWgYoegAfG8AQYPw9Lj",
  "key38": "5u4MZ5k8b4PhvDBV2rjZCeoSavve8ujEm7fGWyVkgVjnssgeGfHRZkdGDWVupbifZZdLVkCNRQGL73ptxxe11B6Z",
  "key39": "L4jdLtUKuHfsJhBBRuhhWF5WVJawgCicWir7ocm7US5jGGr2q5WNyPVNUndM9MccJGVLqWtXwe796E4TYtRTL6Z",
  "key40": "3sujQPeL1MLwo6SBHirmX5oPD7TgNZ3Q5m6MsDrrtEdf9bnPeLf6ECTfU5mZMbXEtbdFfkLewLvxHC8T8YmFyT25",
  "key41": "3Q553tHUf5RzPDNfvDaAu5EsVx2qvR4Xx3kKESFQSAiVEk5v7joUY28UZ9hd5XtLLrGrcMh8kq9AhcLYqc7nw4Z6",
  "key42": "27cMyK5m1V7kSBc8zpyBgPwkkFbDcVNzuUdEBqF6Liq9Yvore7nsKksWPPPgLzotFKz6mVSkQVjH7huB5XwJv3gq",
  "key43": "5CUesdPErFs31McorjiZrKu6yxps6McNfBkp15iHXV5Yoiot6m4ptWuEQSfVXtJw1fHnLEzfQ23nung56A1s2nyA",
  "key44": "5ycq97SY7kRhb1L3EZHw4NaiJAgdpKg44SyV9nkkxPh5czjVAkFmYDZrY1LDPJsWfkR6GtC7z21DPCgxFTcmegfr"
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
