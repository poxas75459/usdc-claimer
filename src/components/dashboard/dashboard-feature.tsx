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
    "37dxQKsVHvm8FUvKYh76hSzKQyXQvPS3Efqt49mFEpc8gLZbD2uM5knGm1Kzzv9e5FV5r73ov2HBGB4nKHryvesf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Px2pkSU6pJNmaD5hKfaHcHcgwnViTsDFSF9V4ZLehVDAJRrfZ7ojeSB8zWWFDDBa6VssSfkNw4jpD1kpbmPcTq3",
  "key1": "2FFgUKLvJzhVeXQTd75HDNvYJwMRzC595YFEeB2yDHjzYQJ7S78az6sk1SFMf8gZpDw8Ez5EmBRt6zsyne1F85sr",
  "key2": "5p8dBr1cMhaT28aS1HhJg8dubGxk5Zzb7UECCSRQtGWun3pQLAqccpmAGuZFKqZRAiTPWxLwgB7wXQPQaGWXiMEU",
  "key3": "3GxvyXVYFXDqfG98GykkJ2e5CHDwuzuh4c2drNUDUAnhWKJeXWEFrv9SuhjfqJok4HDgKzVYCsTk6JMfXX1nddQJ",
  "key4": "4VVN8HnwpreLcVaNdL6MS9SsRR2sA4yb7eUCn4qPZ2apPqEVDF6Sq7dJCMc4W2cxXhh9dVvLcRyJTU3NwmF5QbgQ",
  "key5": "4mmcc1VPn5HSm93jxk4CPVFwdsmyq2AarrDQttV6kMqr3SjwnGKVW82MCD5FwgYfJUSzW9EZAtcoMqfg2Bfx5Phb",
  "key6": "2VV3noWC2mbrALD8ULnbRHczpqGXVy5Hom7ZovnxwhxLZeysSp4ZPgmdhQNKyTGExJanuqJ28Rw6LFGs3CjGsFY8",
  "key7": "2vEzFhrdZXp6LsF8nE8jtGrtiAa9RQc6Gskm32xhXnwKzWwVsSyBAEKRtqf1Ag9D9jUkeqi3SnnY4fcCupDMenk9",
  "key8": "3XCm8R7HWD3NjUwptrYLkhW5j3xsjmKEnjVyEc1i2hKLsNZ8QgvaCkddrkc4chxCzcy6pSF9EtrGWUuS7UqpuVer",
  "key9": "5KZC1dDw3d4hQFPacwh2cJA1wit4sc2Vi8oNnjJCyDHSqXu6pDLN2bDXXJkvvQUNzSzPjwwfen7weW6X9cKU8JFL",
  "key10": "5ybDQYz4upU1t9m1ySjabm6hoz7vuNM5LkXrEaXLEZFfqW6YNvFtYKF4Pwkq6Qu6kj2D7yVa6NaayYriBSbR3SpJ",
  "key11": "4L1ZJ4UZ686Hh21GzMrN5dt4eZxDXGhCKdkKfhnphbnFJ1qjryPQLqwRik35nfv2Piw2sYu5PzpJpeaTMeCxKdBD",
  "key12": "xeB6ScCgsSkh6B86cPERg7NPfjyrmqsD4y724EJTZuWWsQSqSnbk1e8NMkv2jj5qbcqRJVdttrGpKwqdyM3zVGr",
  "key13": "3CJM6TRaoonj1HLH23kYG8HcWDDtGC86HxoY7ByUCFayVijQFGDyEyrhkP3ywe1FyX549VWaHAyoayQRzrZqAJF9",
  "key14": "3NjLSbKQ6v3NrqABn1Zvf2TbAZfAs8dJUnECeCRnSAiX6ihHCWsnrwPpCheizF1vjDSGmWGcKtaNkoVsNPT8KEV1",
  "key15": "uxmXb5PTmc655keZ6iQVvTxo6ESdP21QGemge2bej9GTRHc8neUxb5rk6CuQ2zveqHvHxb9uiiAkgxtXtpRYhrR",
  "key16": "5NXMHxg6esSMy3mVGPPuCfkNMmasizwHtjtVXdeSjyWFP5NpE4E7pQZcrrLxtq4AT6GFRViKL5nGCe1T36AQZTWn",
  "key17": "4Gi9pD2XodzKhNDcym8Qus91bm5wi4RBWqGZGA48FZcWUJtRQ4yrWPHEd2f5eDGizgRDniebzCQ3scdnwetxjj7J",
  "key18": "3UmgXetBJMbNkkHXjjpMkufMU6UT9dqHN1csa9xdZewHktEVtKLUbAcksiiVBijWySvnPmjDWx7jWBD9gQM6bgfV",
  "key19": "3rEuH4hqk2cXJNzNFdkFUoArN5y2SUWmiYu3zYcrgQWdpyVi7hdTgTo46HgUNeW1D7qMump6QHtZZufR6jB6Z9un",
  "key20": "4m9PQLubgiDf68YDwGpWLewpqKG8eFFPbvVKX9j5YhSdBJctkQhGxGJebvhXW6UQcc7hS6izXacjMDMTtM7ph4B6",
  "key21": "JS2enwPHTjw4EaUD9G3St7PXpbre5gubnuoWC8TwvAtJj9PNtQJdnUrGsWv9pubyoNp82xdgSmPcgHB2KM9GF4M",
  "key22": "3i5BnhhZ2PyQyBZGcXZqU3U75Ye6QTrhvL7MrVo33id77UKY1bsRonqEnLq5GvDs3mFrST7BF1BV9FSZPs7jJrqp",
  "key23": "5YiLhHcY59Uc5eqTW49bnZcqVVVjxEH9bu3CHM8oi7ngmS1dMcGGExWV1EvRyGY3xNyQvhDGsEyxFjR9p6boWUCV",
  "key24": "56VznZ4nxWid9J4TMkaRnZRD1RNEtWVeuSwwwpsivXumj2AnYNXCfZCgR3oNa1JxViFyDVZaNv3tBNDtPj9FWhs6",
  "key25": "3Po5Awt3LExVrHtXHusa1rpHUZfPaP9rFMV2HphUF17YkUEzhQDkn81f5mUviEsbQhLtfAB5aDXu55DaZfRc5k8V",
  "key26": "5d2m79oy314sqtMR2iaB7vhg5gCPnFepLPq2zkTqn2aF95ZGfNuSWFrjX2KbiauyB4TR6XRuLLsiwx5H2BcQgvMz",
  "key27": "5fGv9waaKKaXdgYXhxRRFbt6HMfqoGY8R1YtgVpRXBRwR3uRCMqAfxubSBBYAPPsXo3ZpJTNzTSXXmKNnGAJ4adc",
  "key28": "4iWcvucdj6DoA9HvjfHFv7ZnG788fDRREGphKe5SrifNfpSjnK7Wy6833e4opqFzdcMtxBV8THBo3KkBULN1SbJH",
  "key29": "2op8sLGJNEtdXVHmG7sWs9fVGkR42nidrygxESmtY8B1nwYKsedgh5VitDbCKafdhntSJESWG49rnUcfdDBH6uX4",
  "key30": "5yYsdsXT4iXhUtMSrRdGdeG9VL4ijbzF52rRckxSRcSdfuh2U78pFCUG3XnUTskwEh6wHBUk8DZ2yWpyc3oRzUY",
  "key31": "3ciUL5Nu6W8JgFJaGE5wssgKCtZGJCxSHrducgYvKHFDGrs7yNsqFxaJDjBtHrG2HGNJBo3h43RU4fW2STQuDqPT",
  "key32": "2bninH3WMZrSfRn6HzRxoPAz2N3y2Dd8taKmUna6Hzws1EexoBreHbmYzPDsPNhCuiKg3Uw5WNvT4x4qpMM7U8Wj",
  "key33": "NbNh5LVBz7MLAneU1DZpA7oBG5wtGJYW4wp4RbMU8AAePXutUugmcY89oRdbP8YTPChYMmzGtE1ZYEAaGU78Lr6",
  "key34": "3MBQSZB8TL9DSw5XuMmUgzHxbMPbMBwMoztjqTUgGTAMpTbgKo91SZWNWHeBWxWFkyT38kWXRUimYmXGS8ptqwP5",
  "key35": "28keUVSVwdu2HSXce11FJd65eQz9sqh9f8vHpMmyafUpTLA47wvakdmBHXiTsamsZGpoUNzkCu58ecZbvqMdSmC3",
  "key36": "22CdvbvDf1HaTmxS2iBwM88PiNbkh8fCaZ2GmwSq5J6n5ikHeH1pkecYP6wFSze9iZ7QrEFjDW9GJ85b4ow5CYqw",
  "key37": "rk7zfZ3thtuznNUs1E2TYYgQR7Ao5ekvLjZAruqMaRGe67R59R4jjiaVoF49ETHBYFxJtN4gi8RhU32qbGQD6VN",
  "key38": "hG8vv8mohKZtsYxDzBDFP5eDnVzx6CAxYisBxeKX1KRh1y3DZwW5gLHfV21nUfUjt6X1zcaszeDEriEe5eS5NZu",
  "key39": "5LnWCD5ZYeMwT3F24PFpXCnjTmQiDqm5bKfirTvXb3WeWCrpLg9jzKwUdw24esHDK7xxPfHyKQzGSPpVUkpLXXz9",
  "key40": "p7QXPdXr1w6D84Fw5sUCtsecomoNoTM3WTjqoSFbSDFENKtLeg5B9tK9jG1Zu1qzLzyi1nzkZMniWmkqGYLD215"
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
