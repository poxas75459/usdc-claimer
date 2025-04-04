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
    "4GZq5TnXt3GsWFcCRgJC5wqfTQddQeSVENmPRek8d9SHdGWTGzQgmwHkqk3DfJmS7oZpZ4u1RRpuKY1vFxs1ZDom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AU7kWEMy8g2be16VMmwhJnnGtVR6p9Yp8Pe5c8JDJdtkqgdPdooctsBCR5BGZv2ZxbMwLcfSmMNAh52GW2JS17J",
  "key1": "2git2tUtVKLsXNjMQZZvf8VhdB4aEyQmiXQtVTQry29sghJkgtgTgdfa8bFpsKfytDLF4KQhPH6kEWQbjJUvVnuD",
  "key2": "Lc4kMsGTaBWGgz5QdY1S3D1KdBzkifE2U7PhXh8UefaJcapCYKn9gg3fFkjoNyEPrSmDyuwHMmsy37eR3FNKQ3G",
  "key3": "4uF8PQQax2kF3goqAWneUXP7fqcWv6mHubNqvwTyjDECrKBEPS5VmjYgRznkCGXBHHMnPXnvvEQZEYAsrfCk7ipW",
  "key4": "4UaGMDdP8TabJUmoEPMFp4tuPYbd3eRMoZDS4EZ2yCoQZuigy96oVS2k8rs7WtxWy6pnKnzU4yiLBttx8nZm3xBT",
  "key5": "3QUsQu6qXQtoERcs37BAtfrVdNxQHNba2qrR1jbFZMBcD2VuCLJGHJHHB3vnaYy4mBCrjToWa5oe9o5AfXZrMhVc",
  "key6": "2aG7St82QTziUzK1ARB7F15o3g8QHqJ9y33va7R5GZdeqL789JV8LQhaiTsTihJAKPW4hC1HmXQmy2p6WnnnHQi4",
  "key7": "61vG5fPwEepF3kmAsyk62KV3W7E33baznWppYdbkyVVv1Ys1NBrCGAPaG27XDPc2Qvau2DyPhGGHTpKoh8y3CHnT",
  "key8": "2L9vNJonP9fK3NcLpR2CWDhvdtYNZuQt67HWn54YAccHp23Etdzy3j9RRZfXX8MtbEno65E8c5UGCmgKZaWVctYh",
  "key9": "2SXnfaQXuPzEPk1hc4bd6N8cypyDc6CBafEXj5GnBSCu21kH4AJEFj7C7PgaTNgnfEKxf8pWM7MwfRCZB8Rj75XY",
  "key10": "5Ky8mho7j418PnZYtL6mgQrj7njnbDm5p6HyvHFG4mT1GQEZMDkKx16zZfDAZ93tPL4mSrRpWh8vp9bLsHUNkSUZ",
  "key11": "4dibczGvrb1K6H1jcsFJY7Br2dsSzwmanNHnmXcU2YxKkiUwhqQyQKzeV3WW2gVd48J9mYkrzQW8xPgPuszh9ZEB",
  "key12": "xUnLtbfoDG4MBHSeGVVVZswpYbuSnUxL6vTbSh3Snk96L21hGk7XNLv9Hnd2CkVbbHUh55RvcpTdaGtqDPyfXWx",
  "key13": "65PVLH8xi2xi4H7USjTbPpX6EJN6k67EPvYqQrVMt7GdSGohiGj69ujpmm5XjCAr9t4ccWUGyWGNiiYs2eFaBtdj",
  "key14": "3YyHzq4xJ1pPREBeBgYPGC3STnZHf3WGeMqkEvG1zuGpjndNaW1RHaUKrgqYUeES8BrroPeq1v6A9cBuR8kYqtM2",
  "key15": "2EttGysnpeatuuLLXGyejEt6bVbELiy6CduVTCPJUY7x4k56uNjRFvcpcx15N1Qe4q9VwajqsNzCa7NVLobFTPWN",
  "key16": "2gEQChfzRcVz4W2VCEgeyhmBNMR4JB6DWhAnytAzzYsphWMk3RN7GhSTMf7rEc7LqHCLw2b615oCChRNVzQSNCPw",
  "key17": "4m9pkHDkUhnFuZp6V3v7che1H75mpDBuoLDNQsBD1bbTnQWoDJvEnrmaN3kGLNaenANv4Cx4sDHcbcyk9xFWiRnY",
  "key18": "2DvKixaEQZc8XwSJevTy3hQdnzdKakK3qd7M7GjPCiF3CiknjdsSowZFM6oM6c87SyFqtZ4EPwSCkuVkgvirtysB",
  "key19": "T5er4RqvBndEr3jAGQrbNk9maFExTif7GgBkN273d3ejVqHf8L7QXEBQQrA9hGmg2iJowugiSwmZAwZHusGZnGH",
  "key20": "4dFBgzybNPndMdJqiwXeaGKZFEtTXNCWWwShvkYnkq7u9e9rdNxARLq5fXbfc5ugyupdnBr9zeRMxuxs6pZQyLrM",
  "key21": "T9nrdb7rVBx1BCA2AnQijUFwfJUKKj2Z8Eni3hhHAkrcpD3gWTfuYigHSCN41nZyxtvW7KaEDLn15cwDBvFT3Xt",
  "key22": "4kv68pEz896fc9Ps6ZQVf7XU1PyNh33C8kcDApk4FLj8mtqbZA5YvnJEGfFVkRPCEYUa2XM33pCZK16RE6MY4ZN4",
  "key23": "4xwzADGfCfcs3QNDxuHWZcsx6UWk9i7KNvfE8YZPGxmWAXCxZTKs9KxrLJDXBCBeiW1GaxrgSJQXDdZ2kssTjbjv",
  "key24": "5SeEFtSWobfZDKrP8MyqWemJL9eCd5JNqxu9gNuHLkHjG7Bx4qicZY8XVQUiT4k4ZjXGkS3EBVtduZBs9qFMCo54",
  "key25": "5MkiUb5uG2nJz8rorUUDps1wWVZrfPZrGZJ4T2mn989EXuJxrE1NJ8e65rt4Ej34gjhYmUdQGDAyaRofQDpXapGk",
  "key26": "3LYodAwxX7w6RaVB8schYstJZ7cmUs9j7ewQrHTa6T13bmmb7x93Czb15EwdsSWdB7bjDzViFEA7NYfskM9Ze9n7",
  "key27": "2G7vwFHXpjxriPgC6G7ziGv326CnNBZ2CBjzEZMzmcCbC5bR4Yv6CaBpa58AcoqYxW3EjMH7is7S27hP9MiBTnf2",
  "key28": "5MUsiNiEk1BNRmbQxPycEVBefGs4hVVPrXQ4kBALhBu2u8PGC88StSN4VBvWeEdA2ANF8PkLEXyowzfTyapofQQ3",
  "key29": "3VqTpfWY2ovLsLSMbCDP6iXTeeTyai6132iG7vgjx7u5wxhZPSqHFUBt9R5EMmF6yAbMrWLDs7jUdahCfLpu6U3z",
  "key30": "2a33QUZuPWsX4WDwKVLyBJD9yYCndD8LYc9RrnnEgyw37kTMwPwEF8Sr9oECmUrHTBadmiAnedXSsvqy8MkQQcC8",
  "key31": "36nU2xapJhsyGuVZ8UR5WQUxkNNZMTecbXK7FUd8wJYg2WLeoiXydsbnZwNYCC3MsgBqGrc5hxoPGyf9LrSN6xoZ",
  "key32": "27dSDxBKseJ4uD3BvBjDfubNL8qqLkc1V43rbgSLaFryjQbYtkp91xPLmSy3gdgSHJ9KSe7JgUVPgUs7qv93xxGV",
  "key33": "2wwSdAmd6L35qKfNsE33x5FiXDpuZipwQjGSv9RyXrvoZUb4iftzh5xvS5tyKqpMWwd1kYSjCmK6Tg8gU2C5eEPZ",
  "key34": "ffobNKt21RZfNuhrbCkspo64ECYXcHKauiiDbSv85uXHSd4D9UqSHsgWTSSP4yGNnF51DEyuF2Zm9Q1JvKBfL9d",
  "key35": "ZA9sn3iXvEJkLUCUvbPMCz8w212frAtLo1khgsVcK8G2NDFbvsA2vgVPsbwpKSVtqbiQkXPdvZtvuLKnZm7j67P"
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
