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
    "2z6vDo11SaWW94f6KM5kUQH3TqsF2NGVSZF2Une8Xy9CKuFT3iCfHWxP5Qptunat5vpKP8py7vFfwhsDaPixF72p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VmhNvNKCnBBqJGwugWDRy3PnjMkNT8JHWASTdDu6PyDN9EvWQ7yZtgXEtZhvUWmRGKkjkamx57n7ZzYVWyBnwmc",
  "key1": "5oZ9WCyGc3S4e2P49G43GodeTQQny9MfnQHtbkpg7Y3L6BtJix9J7zSjMVqWNFM7vhximGBx4Uv4duJbvn47ZWE4",
  "key2": "53bwNU4Hy4r1hbia6bxaxf5rTSGHYt5uc9VnsZj2y1KbPkRKV9zXevd171UuJezTXSF6AW6YUubdmknHamnCwxCx",
  "key3": "2nHBoMxV7cjkfvkAGReRJ5eFvyZ6iE13mq5V9N9hRKSZ4iS35F3S3eG18EJnh8RoFThfQzMww9A9J4QsPsKKd3xR",
  "key4": "5FeSDHGXfbsqi8wy5spcRML9UAKrKqCav7x1HZupUazjb4R9MdxRjL3avnMKvn4dQneicSyG3CKxhEPz7fGgJqLV",
  "key5": "5gxRvBjU5VcNb1SjTjFsnBrnMRgouVJoNNdNd8jL3sbfcCkmCk9pe6E3Emid8cPB8dSp5SSAY9tVn7rRDbkhN6C5",
  "key6": "4p4K9vWzUy5wNo2u5eZxDbAAY5hmFUBRqpViensVwux9HHqW2gtVZ3URqUc7Y4Xbwjqp4TvHAyrnhhFQHZsUkiZr",
  "key7": "3wKQXZPwNRExMDN28VKuGnDg7tDGZdorb1DLwYxehPyivEaLwb39AKWY8YTxqxwgawafnkX58bVtfkuLMYTjaL6Z",
  "key8": "5VLFG99mSGMec9FySvkH1qUKDzT9ofF6ZntVynVmVZHkUnJBUfQgTAWaGVy6YwNkNX5kMmXkBrDTZfFuMSoEjja1",
  "key9": "5iZegou1WkTdCVdeMmt2EVvZv41hNX4etegfLHzS6ZngzzKgnpb2V7deK5b1y44bUdZJE381zsAjNZVch4n8F4mC",
  "key10": "4pPGG2YuCg99GJxSLB9kCcH8UK3cDzqzRNHcxaLjRNPJ3ufuJrsXZEGin5vJ8PvXBUTKk9kx1Ss6LAawPQCaMu4D",
  "key11": "577yDZR2CCbfAQKavUXY1XhzuHpKtGXKUifSmR3gBGghgtvZiXDHsjsfBky5L7vSER2mxoaZZXdzAfaDujhjm7Vu",
  "key12": "4A9WrDkxrf2rGSeqRueenZtpSx1q9Wjs56zLotUNweDtjo6AcDtj8haEcgCoJkukzU9z3AotUKTHwnE18B1bqtzb",
  "key13": "397n85fKFG6sy8zoprKtdzN75m3vUqnYDSAoL9BhfAoby8wKUVV4GFa4BQbkYwnaCXvG3fT5grSA3s9psbYDkpS3",
  "key14": "66ZoCgg7MWiPZjc5DrJ7pAB83b11zLKxXQTFMinCpdXvZMZSm5Fv5hGW7rahadQVhUz5L2518BiybF39TFRrvKtK",
  "key15": "4xPL7yu6VCSDjYsTBmWBwGeHURam31fH9HpY1XwVeQKjoTfsdWdpCi4jMchVs24eZ6xCq4yv9dRRHS3rnQ4BnQqk",
  "key16": "3pPrx62qeSeoTtPPQYA2razE9vHV1TCoDoGtJp3LzBVJFmEgYo4F9Vv3ew3dX7ePXyGWi2MyuAWmBY35KipT92Mf",
  "key17": "4UaQzJYSw7t8b7z5nt3E1NZYUwT92vriwndmpxPFpAEiDmbj1GQkSPWPUisq3FqAUgLgqW3kWtrPBW2jm1uG3JHR",
  "key18": "2ix6kgB2R3T5YmJFBkc9Jwcx3MCRRYs6Gudwsghu91MZSUdSeZJHd8ogFiVkEh9MQGmaJCCfsxz1aPD4cM8QeiGM",
  "key19": "39XCLhBgKbDpqmD9jMcTxmDCmtfsKEcrZ1k7pSMrgdbP1RT1rNAM8aUxptvpxLQxKDaVSpMPLqmZDkjnSqNZYrd2",
  "key20": "4NMSejobCtbf5rnurHN6DEFy76NJNDtcyxjxD9saajP8V2t5XG3CGexijJAFHmLuD68hSYuKtxF5wWRBh9aiE4Td",
  "key21": "5fmSBrXQviyNCZLotPA1NeN4P4KB9T5NqSkVdHaucoW3BnQYEwX5yZs8J2htb2oJnV12pPTcFohZ5pQBQ8cerVAa",
  "key22": "Jgo1GdE7j5CUzLxE8XGnGER9bL21eVUkvd6EJSUwjenqfzUsYggVFbXQSF6g5VQf3mV4yQ9kqpRMxAyLxPq9MNW",
  "key23": "36nrtPfszYtbCF4YTpeoaZht91UZuTULUHfjPvRBQoNydXqJKkB4GdSx13DnYakhzqCocKXuFA1nq8JQG9pRsLqK",
  "key24": "2HzKd1caKS6xK4LUk2cKF7vRghLeHhevoyih6rQo2iJPHPv765qFGn13DTCwvw3925xmpDpzZM4UQJR2s9UxtFW7",
  "key25": "52WyQo3Jv8YMoeRxLfJHxctHjEvWdduVKF9rEadfsvpDSYwaeBCdxQL133FzUX75aU3Mvxyv1ZTn6GCacAJLfUxJ",
  "key26": "2deAYT5xFs9SN2gy3Ysuxve1nevyPDq8pjBP6WPW6hVAdkJeN53MVwxXsQ27M1w25AeNyYhEWsXLCfR6CPNrECYs",
  "key27": "vkBnUxGxCcWefTHQMg552uHuoGVBwb1ATNhRhkQwTA78VLDRo5AUZkS37Uk4yR4SNkp17u1iTuC39JsHM9rH2ZM",
  "key28": "rgci7mPXeTvn73PqpXiNpaUUnuipHxhnf4tHstoVcy7Uzpjxu5xL8a53Js6j1PjTJVoCedVQPBLaVnqjQ3UFr6E",
  "key29": "452AD3vCdo29WNwLdrbMR1fcrjbakAJDbqHHZbh68D9CX7YkWZWWp8SvUusNhLAekaTj9cqz2qXW55bZ4uBtxEoh",
  "key30": "JYincSM3z9i7x5RYzTEKCyb4hkUh1BcLW7MDVDqgMmxfcp3upCvB3tPjzm4SghRboSA4VpQcZjYjuAYhemprgPw",
  "key31": "4Apk7cfSpwHLEtH5Fj4Y3qgA8EoSTeJXSZV7kypFxCEaRkmiboBT3PGBLtCXjTPbxhBpxHQWXhddNPWYDW5h5rgS"
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
