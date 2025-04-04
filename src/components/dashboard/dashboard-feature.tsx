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
    "KdUnKDJGxL9c78R7FEc5L31LzCsu4YCw1TegUCAHt95UdPGjD6QTogDapdPrXjLSs3NQ53V8Tbo57pgYw39P9Af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnhhZmhBwrVEqtoGCnDFoWCastQj975SAMWssBgWYzghhgSq2uBQf8GUUw9U8zivUxjdLhhE1MtyRXyxY2e71fz",
  "key1": "3N2mtvd9ig3ktpBkrckoh7LJcTNaJQ21w3edUcrGFqTwncpWTb3hGiCU2192sXZ6xGaGXdid7B5m6d7Z4bNpgkpB",
  "key2": "4nd5iitDW1i6AGoc2o5xrjrKS3sV7rtkAZnXccVH23GFAmk2A9P2cCf5UTaGT9pLvCZy1ciAe1aZ1npR4UEokFsq",
  "key3": "3uwER4MpbmBtptU2tmg4DqhhfSuEkWjbByptZeQJeoiyVhDR3qZ8iioLtCeJKELesPyyW15KLDSSBQ6JDMg1a89n",
  "key4": "3PhPWo7HX5JvLudahfcVoGNWJAeVVXUroe47vvFhKFLPsek5ATbdr7iJqM21gpRcx1eJXy9uN5RxtpKRcL87SzVr",
  "key5": "2Wwknnp3iXtY9Z27dadWrUDFf7KMYtbA26sJNTjk8ewNZeHRMMjaCtRdFbU8nUVSeHDM9NRDNsEhScJhPnLGofv2",
  "key6": "Gq2jXsGfrSP6286WzFRZAu1d7ndAAnXH2E7NUXLGJWcWp3uz9sasCfECWHSMLhhNqsM72jav5ZebDGAHNutGvzt",
  "key7": "YaWjf3D6SYZANM5FTM9jY8GcgMrDfEdr72PTwP959DMthzNG8uVgYkpLkwRQq5qdoH3B3nV1yBZyfoqoLrvGLUN",
  "key8": "4mJFVTa7voahNxKsMkZXSS8WdimHtgniizKyTGt9YcNmFEiN9tJmu1HZMVjh5X7uGb1cVwtfRcZT3LaA1Js6jAU5",
  "key9": "5YvurxFhryyi4x5SDZddDS4tDz18vLHSA5jetYZngmgqqoTzoiR83qoquFx4CL5yyq7byhWrejC2oQffX8yhVUej",
  "key10": "54mHBCHRdpmidY2v52LRzD6g2wHUaZ6sMSBRT7UVSgci5gc1q6BdZVT7oSJso4L7DmoQFx3TXpmDFpqvTUAQ3r92",
  "key11": "SYTkpVVzNEh78ubZ1w4D9DHSwk2RTY4nHZViAczvHPJVq71k92pDjTHnW6iuTdSEN64xWc5eQ9mET6zmiBi889q",
  "key12": "123qjhxZTDs9ExKMQsxdo9vBUQcpWWbJkDoEriESkxRkLWwp6zykP5dfdvQz9361DqBEp8gjHqJAN7DKRxVxWdBF",
  "key13": "2GMzLpxxeeNV3Cr8pR1FHCzVgxwN8smXVvSqB9qmwgzFWHC8bWMHcxn85eu4x4nLWGF1QPfR3ecid9hnZLMTdz95",
  "key14": "2DNLnDyYFDM62GBYXDVMMyLju66Pb5Nj33JW2b5MThSsRCM6WmkMrKrXrfwripdcFE3212N3k7Mt3WzrjtYkq6y6",
  "key15": "28KNxCaUVd5hpFo44nGpKApm4nWmfqVLbdXPErJGxN78cLf9ifNztY8iYwrPNto9XxL8Xkso6r6xJksGBW1fnQzo",
  "key16": "4jBvJtCKkeWii5dKtV7BxnAoTDU4d6wEScm6dRgpaFCkmsFPxLyYCewMofgAqcTmhf2NSpHoBvVMKRxaRAkTwWBa",
  "key17": "3r5oE4odNpR3jXy4JgNPDQLUGAAyx9yWakhZAGqZV9As9adjkY4xDFHBVwBmeSMD23vhqqVLtDjriT8PxVVFoe8T",
  "key18": "2LxYKKDAsBXirenbQPXXWruLqCYP5tk8siYYTrYdKi3ZDdjV7QJN97VaBhHrZs66Dg75rAPhmw6uKguwFx16QxhP",
  "key19": "5EcD2urLk8n1pALU3RW4fAmGXQgNvpwJrPfVCz7Hn6rfYwHJSSWY8k1R7D95rDncNheBpMMrjsRhGeKBk2y1UtKG",
  "key20": "3GyCydM63PH9sNPsbEC7YLnByFAC7iUTNgakkKBoS64pvPYxgisrwdCEiUfVxBSKh3tFpGso5cS9W7SDdqVB8pAo",
  "key21": "4Fq3qxyDde2Lt8ipvpBdWJWgSJZQg8M3pLq79W5iHwvbr74mAPFXhcFabhQmGE913ya7S38LiEz5gpFyVg4xVgom",
  "key22": "2f96JshEFv2aGa99BgbcdsDNH7vDV5u1BWbpQQrfJP4mpnbDcF6Jjx6ArFm2ruUKjmkzd5UgT4WDSNy8pHE9T4Rm",
  "key23": "59JBj6EcKHvLh9ao4vfcLgo1uz31nFp9cts2wigx6Q8jak9ttMSNXC62gnvR82bB2bJuCyfDCsxWwLDnviEzEMFm",
  "key24": "8vNGtJRLPp6uc8sdmxDjurF4bNn5aEyDdon7Ci8j86k5812WU34Z5rSS6DaytbvM8uiw5hrX4GCGWwfkWgASYjr",
  "key25": "4dZ2x7QgdHhNLJXc58grN3C7nuMzingwVGJXG7PEvUed37fpjHWfuudAgUSTKbwj8cfWmHaSQtUt3WqNdF7jM6zJ",
  "key26": "praCPA5wdEYvcVkoESZzVie3gvzyaHbFF8XcNv5isQnTDY6NZXMULMiDcUng564bUfMrp7JMc4kKVdMwL9NdubM",
  "key27": "3txxwdtr2jWSNfTy6YYZLn5RraXfPxWhYpC2vN9Ek8e1AcW92h6ENwUknYSgHjPnvbwdFPG9zCC1EiCT33HNLhwH",
  "key28": "23WHc9jXejdFR6JfsAzh5oSS8zZBEFP4Fg7x5thgDjwRRqQXNMFarEQCUYFgbu1gyApJNFaDS2TstuDBj8DScx6d",
  "key29": "3mMZYVuExRScUF7B2RAyCYEerfBVs4kVXW91rhpBeSd3gWWqQzSV552UCMAmrLRbWwuz9haGZ3jHZ8sojiVVfGBy",
  "key30": "R695sU47Fv9ZxXjmyeTFkqiBzmMzhvfwDBMZL5Zbccs9K7835Y1KAhSJ13ou3Tu1YRMqsd5niVNjDweGAGiEDfm",
  "key31": "2i1snmHatgUn7mfLR6chFfkmpcnGMVaFE8mzQZ1E9Qr8Cc4LiRyZyH3fkBp1KANAmVEeiEzDMa9QWGANTVEaZJew",
  "key32": "2ftip3t1avGcV9zk9hwewGciBQU9hM6aNHJRc6972rgKxisZC6v9Uy4heh3mFnRjcHa7BRQ1N7PKKmt19k8nT4e5"
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
