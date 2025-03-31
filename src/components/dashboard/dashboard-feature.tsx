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
    "5GRV5yScsPWfuhXbruFWdBztPG997Dyvsmd7Yn2X4YCcXVPNUSb57Tip2oJVAZzxrYwNQ7CiyAn8NdoCb6gHVpzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJNa3uPd8LxmftvXiXUoFEnBKi8hTfKXkJ6H2eVKmBso7ojL9GJKaY4V3hZLPwAHVCptvYonjLS3T3TTEmUmawV",
  "key1": "3fKSYqHfzVL5yEAVNFMcqEJ5793yqT8KNWMyuAXt3BNwpbZGnSgTciWCMtSh3XnKTY9QXx8HqQQBsqosBH5o3Y8G",
  "key2": "4YNyVqwhpJo9evzqpDZJr45mEimWQCFjU6thY5gy5N9dN6hEbcq7U4LskrxXCJtSc595Aj6vdSHkWnaGikAxxJVZ",
  "key3": "GBqvFMKRjz7zLaBHZDuYdQw2YqJrw5LLSFiKAzWDC5dGMAHsKWANPZNKAmiUW49htee8upWbX46NNvSKeKPwmUX",
  "key4": "3a5H49JeVvYSjpMXCY3q7jtL413PtRkbDoKrouuUGfNUS2fzhgXuiXuNwyHewGJANQsfnnosfaRcebStBTza1oLz",
  "key5": "2JhnQcfgQyCpeG4BgtNk5Qa5NXe8VWymZkgbGCEppf2UKnmWSweC44jFDinjBbPScEKqvyuREQhkCcY7VxdorGtT",
  "key6": "2JRqiHuCLNVGDEnojSD4Hqy7TikSpVbLYEMQmF1jUcYMJYJFi1wE4tiDtTC5UGrC1AwFVtQ96t73dNFaTQsgiz4d",
  "key7": "3VCCfpaEVMtZKC2zHZxsPrER8rop9e15nL1AY6AufcyCNVUKRsLPDfrH5jXR8XrVRU6xU5nT2NATv4CgykmqTdpJ",
  "key8": "PdkNwZ8wunjBFdQHNjWX2ZG2n35MzbZ5S3wMV5JeiCYqt5rMACV9DE7ua1yyfMYGRdqNQwJnam4UXB8G8WbkbPF",
  "key9": "5bXA6zc4Lm1LWEdmzoN9i2XwckYzp6QywU6XoXPmYAY7PxXFy8Kane1wueCZ8xeJeD96J1w3SdgjonwyNMeDyPGT",
  "key10": "5iQPgfLpEewRqo4n5rYwaaVqvQqzDE8X6uZAEx3tfJ3iBwW537nLieF3DUn2KuHtyemrbMmcFkAorF76VYPqvJ1M",
  "key11": "4vJeJtw1PoV3n35WbVNA226vTBrSKX6AT5vJpoJ3ao76G3kJyNSfjfTfGCZY1T1AB99925Gvunerx9X7zcybPWPg",
  "key12": "3RhD1Zu3ixwUmzoLNerA5Pd53Y4AUjAK3cVxtcXSLxQGL3Usd66btpgBw4HDW8XxKGzEaj4eaq6HE7koFMau6nK5",
  "key13": "3ySsP3KgW4BCuYeAAmQEr1HdkXJs4LZvgeiVeQ66rjNYg2NH8Qj6S7xHAkGVu8Q65h5Wd7WJDpe5t6zVQAGZZyxJ",
  "key14": "4bY25UCBKBCJiSEJymMCJWYGbobMPS4Pb76TDN9XLGSocktWFroV3KSyh4Wpeb3b5mPg1W6DXJjojiiszHwW7amd",
  "key15": "42t4sLhjeuBMBjYEUCbPhCxsXUUpgy9Zyvge4q1soPYB9n85ejojT7VUr9EoZCiwHvWHTqFLRMRdXM3BtwPSu4M9",
  "key16": "5h6WzQLvT8V4hiGNxo6nha1FPzvnNuB7dxfNmLiXAfXvFu6dYv7mJjBYfRVJovLxs6WoLWvbD463RWcv5pBFHvAr",
  "key17": "5bu1usXpyEx269FrZcNj7qrSMgnkYyuWg9gDStDRc2hrNVUxHtGataqNw34zfuZZmMkCHiCxGxjNJiuJpkuTTK31",
  "key18": "44Vqa9MVvBN2NLmrNeUGViJ8LLYgxYJLB4mbW7YJWC1YQ4FnGghnEkGwFdzvynEkPaygMLjTJ8iL8heKnAzSEcAH",
  "key19": "32g9n79nvvbTBDQNMoeyRgWHksoBLBCYKmMjsYJaohqt5qVp2YEZzgKkpTWHdrtRzbmrfqXV3NQTEVVZ4kEW74TH",
  "key20": "GUNNEcCSWqozB1ExNptsn9zp4en2HGqePhcocLqEiE2JNYaK2Q56u2thLigyw5QZe241qgUcxVe7u1aR883CtRh",
  "key21": "m5833izFitCuCGzTU5hYtUsmPzWP6riwgjmJsJta4LAuMvpjWLXVU3y8ZWXTNv6ZuUzYcFeSq8UCSRbhwqZ6beM",
  "key22": "38qRVSCbiDE7TxAFSUVXdaGLaaZWEmKq4F34K89C3XxHEonbRfT39QJky6ZZVSexUmtvvDcJ6suEdbqKAmdcG68X",
  "key23": "4pxxakSBYbMaxQBHMGQHBCBjPFmehHs26cyNeE2vTv8nceSiP8gh9GZR6ABgU4RewiwWgnnLsw8ZoqnZ5Lr3FKhD",
  "key24": "8UyjckjNMXu8JASvKzwWuZFf21wyzcDgeWVdp2KDd1f1hq9FHvM9EASzgzcaWe5KE88Q3tfyrTLuCf4L1UYh17C",
  "key25": "2pTto58ZsyWGgt6ruKs2GnKoFnPWtZRj8w6nZTMEPHZPvGMgGt3vd3qNgaZCdrjfXLvvk1zpyKPmKTzVSedsmxsD",
  "key26": "22HfbTFeae6rfw6jnyJYdPYb7Ku8oJKgtQJA4kwN5XJdcsPrgxSMFa9MuR1t6LVbw1Nr8cVDgkrcWa2dDSF3kNaE",
  "key27": "2wNXebp37vJUwWe6xNjM4XzWTJHoCkWySg67cFEShiftAgYqKCXjMXHs2zeNBKN2h6m4mreitQbgxWhHJ4JUtsag",
  "key28": "zdvpmPGA3EVwvPkgQnb5yDFMuQbJdUW7qBQPJi1996yKGG8iU8CQM64zYXqvnkv5XUukCLx2nEVKGYQCPT4J42s",
  "key29": "5ZyLk5tJpj2vYGzvmnVp5c3J21Soe9fKEM9i8LGKz6kQMG9iVgLF23mHptdByFvTywNARLhnQmMXDHwDzXdijbwn",
  "key30": "2BEvxZWKi7SQBd1i8tKo7GF2fbe5vn4EshGG4FguxDmLPvQKQKNgpvL12gYRESsHieXQgn1vR5w5mFz2SwfixJTZ",
  "key31": "2qttdWWYvthwRNXw8ov1h92aQyRWnhr3nR1dTdMmrEtNihWfonoXMi9DvTUkP5EU6UeX1thgSXaNK8JZvzxWyBhv",
  "key32": "3wxKjQfMdYffxmuCfxYoZ3FeTvnxerJbffWiD7vu5MEnE5qsYd9Y75jGwkNADhVDVyX7RT16R6Vsm2HXEHYWSs1U",
  "key33": "azLUM7fdBAHFAR2jYjnKaGThuk3FTqfuNscScCLqkAgRvssRxPx1TtmJ4GuE2mx5GycaZpjU5HbmUC7bMzTKoGP"
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
