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
    "2qQvehbdHDU1h1yh444iDSYmh2UVyG7vLMBE2J6vjNaQHTuX94KgFkAGT6b7QHyxgRatbARdN4majuwjvuMXpKsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2grUks1xk9VfLfGbpGAdWxqdkNvi9ajsqvZXATTsMVWZ5LsYJdhjowUyKXHw1RKVJSaup6aWDoSVer7yuFHnTRnQ",
  "key1": "43MgYaPmULyhvcJQ4hnisetNzLRsUkATq76TBxoofAX3MhqBtHYse49cMrPpxMJadjZi9TjEGfMxPMjS7zKkXg8d",
  "key2": "38dczmy9u6szyiB53i2cgomKR9f7CcjAN2YZhiLCbrPAzt5omevdcWmLsuCQiXguigNkySzeaNtA3g6AzCUobe7Z",
  "key3": "3X5kKWJFS6yHS9e1wJZe3CgXNk9zFzR6bmnLKEreUg2G4F2ztKxDNCujRYBf4HQ3pSACCnfE73H7gyhVXAAM6tcU",
  "key4": "oCC3sZU81Zyip8RyPay32bWN4WzJtai6h7Kqyr3CQ1uFr66WJiDMhCCggngSv7UXtjXss7PiGPbDVH5MaH9acBW",
  "key5": "3MEExvExEhvSusf3mKLabN5aPX9jivN5JASSSQc1u4z4tQPnQKdQyF6RY87B5D6JHC8YAzD27PNyAgN2d3tJ7yod",
  "key6": "2SEvTH8erustyubzQkJMZSPL1nCm1BpY7uTeWWaUTDJ7Wb77gJzUQuK4FTSo1jPSNkz27ox8gGcq6XT5Tb1rNTjN",
  "key7": "4VkDXUNvTWdszCxcYFT14HFUFqfG2EDPKpeZgo3QzQdwotPgt1QqFtPJKXs5XYaR8sUKxzULhYDQp5jYAcYpEgcc",
  "key8": "5Z9CSEKMnCFYqEfBdUXs58R1uknYc4GSHZ8qtYqFwiFqKAXH6ng4MCeaRi9uPtJR4BqHjSUqi8u4Gfej5e84SpU7",
  "key9": "5xpYaVdjMjwNZ3uojViW2uiRXpL2s4yMBZnVxYzhqAHhT4vdUfTf9aLmYt3QvGhdk6jWTvEGosRu3NNpVvkApG46",
  "key10": "66FG5Uvghrmrjt134KLEHEgixWVUPk3zkDwB4vJodrXoMzYZxP4Mxq9VQaofWSA2aeSQB9JbA4k3QqT8sRZyBuCA",
  "key11": "tR6onxFnjHsJh9qfganJaz8pwjMvcKCMkbiAvG8kDiE96UBQxeBe2ij38X9sTmjodibvmFNH1ZD1ucRosNtWW2s",
  "key12": "2arWam9Q9R7bnfyddw7qABGgYpRLKdXYw9vC4xJTr3EeSJ8fuibJFLmL1x9HCwM1WcoFxpK4znEwUA4Z9wAaUKHQ",
  "key13": "EKKL3Kcf2ug26YciTU6Cf8GxFFL92JKJFys2ztXz5X2aoMXyjWbtBZPm3kakLZ1NDomFpQETmfDGCMVTv34M5y8",
  "key14": "3DwGkqWLcZN2kJRzuN3aLUbpitMBjVYxYSJugKbFEiSstiAnQmgAeen1JjhMMULi4NWPsCMqwrh9aGisaLUfwP33",
  "key15": "34TA8rnEVE7XrKfCVmmAKyjD96HBZZDeJJ8nkA1zYkrtm9J63CmBm1STBMGqMqPiQgyWXxKmLmsf4BYLAEBQ1vE3",
  "key16": "u3FThSrdFLTQTtaN5i2BchND7sfwcMykmqECMYFTcYgk8m34B9e9xUqUiLCqeAk8PA5JyYdasTp8saabrfq7nVP",
  "key17": "2yG936EM8Pchu9bGzx4xkkapMnvE5KLuP13RsT2bTPVgyHEo5GnaJcf3Wu9QGJQo389qUUFoXcVHqgUoeksZUV25",
  "key18": "4BWEeqBMYFiQBdprDCAoHVdm5Gh2jwpYo2qfj98PL1x7vaf58fj1jLEswftbG7xpkJqr9vB59H8HozE1gBSdfxfn",
  "key19": "2mDdQNeNiz7MD8tz9jMntkQAz8MzTjam2Qtg5LiWuPSH9XLztr7EzvYLkDHV3gKCKzy84HB1hbnbnot3Cdtg7sJi",
  "key20": "5SmPfPQexrYiFBkaNx7bRRpPgbt4ooNGrbAmsC9y5wsHv6ybxrbduBmBco9a6cJ4yZXrhAvwkjBhJ28qBjJHZo8g",
  "key21": "2cFkZCjyQoAAqtmRy1LjKnohULaUwNYvuLkSMmXdhzyCjYniWU9FjWE9MYS8suq8JsNwD9DjzUDAQcUVVrHwgAsB",
  "key22": "61hkWyE6VGxLAtAwXJJG5ZMVg6LNjo98A6CaMZhafccjnNw8GodsZFu6zFuwhscg2dAKyaEZoTEMRcJUBs1P5B97",
  "key23": "wqDFBgzcUK7RqX74nzBXUH8gohG6Z5tQBKvkbvdha4keexEakyN6yx89mHRUqLePJKNihtpUuaH53rwFNoNFMZu",
  "key24": "2jET45vDXGaF2K82xsbbtem6V5c1tbBjqhUnDGReHZEpSv4DaUFf82dLiGsjC8JcfcTrWXVpC5vQj1FSF5KcQvMC",
  "key25": "32bLsgR9LCarszogVCf6JsBK9kXooCxtRnoujeVDGG9RoVVvVKTbRb6nKZ9xfSWFhHxoZFjb8BJvXuxaYrDFA2qZ",
  "key26": "DNkfYsperrPVPzPb6CAXXXyP9DBgiH1obcRsUMxeK4eUQBFr186eSsqowFUe9PYgu1wPUzhmSjhdboyFFpdXyGN",
  "key27": "5FZiCFrEtKMoTLdha1rqioLe9REG8S2FhjjtnHEpFk8iNzs1xqWqJ4m9xUG9SD7orFEoiRNLtZjzDN9S8dq2PsMs",
  "key28": "bJjTqXGw8A7YipjsN6Dna3d43Ai3Udw9RRJqeGmWovsu38N89YS4Z65nsMNZeZJSMYfF8RcuYvsBhnE8wFYVvKh",
  "key29": "3TNgBb1KM8hvQXiffNU2W85BRZyPeiHdaTFUBvQPo39Md6co25RkQhrE9GPEbXdixFqaZTbDP9FnRBGmJEa9yeQe",
  "key30": "2N7iZWUXAJgZX63uD9R4xbiAGRYDHjsABEftWCon8DMrqY35KC3BavN2zk8C9EjnDrjiCZruPwsTs4RRZ6yX6BvG",
  "key31": "4E5qa9Euup1ZcKXVSm4gZArviRcoSJPisVkoQ6YLxYXGJ6LUc9t4vERHqFxoFwbMz7yHRxPAtpntdbmv867u4dHU",
  "key32": "4fG7ohmgXD7HeEXYXwuT8zyPeY27dRfKTBCo5xFbhaAxfQoxYMRVAnCEo19L422WwQTaBRPRGrHTtbgcKxDLt5dz",
  "key33": "2vDPJQYRaw7dVFVV3BjRtx9fvVNx75JCBM3QdivNpDbVXoi5qGfsyKGske1o8FfikbpuQFrrxokzUGV6QEo3R9sz",
  "key34": "5XPf3MHJM6fqxhYPXES7JkPnZz2Vut4aXhLeLkekUKrZnJh2miVj9YvB6FsEt2YSzrZV1p6Dp3nns5DKHrbx6L1",
  "key35": "yZqWYSMssy9etPd696LPTyxRAiCZxhDcbEFMNZNy8bMbgH9LktuvrJSY4jPAXUMAVWVVGc5BFNLmrDGiqnsAEmH",
  "key36": "4UGKuYKDL7L8S8N9hzW3X6jVUF1VLLZ3pNR2t189cEpXkhjz7a1d89ffaqe5d3UdaS6Xu3iY5pWGsvxazN16hhXd"
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
