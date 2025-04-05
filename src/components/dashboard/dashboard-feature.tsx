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
    "5YonhtgMagmLvW5o8XpKbJYtKoeKVJhZR9VmaDSoNasCCvFCeP7GcGpuR9xmjYsib1zWgKX88teDtFWBbF81iMVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eBLbegFu7XYmGHowxCwHq5bguzLi4GAjHGtngEdz5QSYzCvQjsbsffGfSGbDvdTscxcYZ2f4toU57J7qmW8zeen",
  "key1": "xNY5xvJjZ57ubmbU3VyKgofEKPHzz3onu67CSKTyMyKzBV1j4PVVuvVwb1j6kdqv1mj4PgmjEqRiQaAkgb9TCnj",
  "key2": "3c5Bi8uzsq3MyZmrsuA2uiv4d4MFbJT9Bf1sFpvPY5aw67g8e3uq1HCuu8vuK1go6nb23kijMPGgHKLCk1iPxre4",
  "key3": "kF4ZCJRrUa79iJL33BaeHVZRF4TQc1oo9FJPBGyN6VjPy4mDAq4A9dfYZ2SHgfqbh88ovaii7SR7cR8rTDhg6WT",
  "key4": "xdqVFgTMvFLXKSmW3pVDwECoNH6NJ8dSYU86zD3gi5EA4d84Mj1qyMjqXd7v6XQbbqxZUK6AFy6DoXC43VNNAUH",
  "key5": "5ZVGvJ8bYRQjNW4bW7CBf1fVd6ifsAQq5Vt4jFgi7jsxUm2fy6qgmoCxJ77sjqpLaPSsmKHMddFEdphbHZDEFFTq",
  "key6": "2hHWKqCdVtDakHrXcsZVG7VqyncaqVmp9BqaGiXnReRMgNTwA6jouDittge6Mkxz4hERp7aqhqSkL6SVgQSy8Na3",
  "key7": "5csrRYR1jMekMYWCZxmJYk5oEkQ4qzkNPu5hi8L4esvEQhCjcf9BWrtYeeghciCDYb3C9YLrqvyjfAJHTb8QhpcY",
  "key8": "4S7YD81zrttgGViiNdWHZPkxwMb95Sa7Rp2P7aqodKVNkTPMXAzCxdRMhTeRqgpKpGDmntWGAHXLCYiwFZmgi6rW",
  "key9": "5L1gqo9LGLYX8NKPozhoYQBGbimhZXFnru8XCEYSHjzCAybi4h5xrTAxRiq6nkQTY5e3XjWjar9ameUGdKNpGXdr",
  "key10": "2Y7Aiv8eWh4QPvKCvuYRbc3Z1c65i6abDsVNH66frjAVSGSUZTuoyhcR27Ccn6JnXbR9L3eDmcy6QBLkPSe4dzvr",
  "key11": "3QyhH8eUpSZpnJUmG86nDsT4jxnFgaXp52wxPFfsDpPtmNv3hstfdaDKLbHDG4rAvkErnvnJ5PcCqfkQRwPvHCpe",
  "key12": "7sWG4CS6JGuP7vKQJofbmA2HEhTU22JUBTF5pZtPgSnVxNAqCdQQkLosov2eqyzxnRxk96sGrKieMD9ZK61Veum",
  "key13": "42tnVYMc4iYJqTgUSDwwLypM5v42EdA7AQtigym5bc3GGVnGHaDu23KxJEY1znM2fWZwrypBQPKHWLmf3LxHxuLC",
  "key14": "2GfB29pBWFSc6QmhbyK7XpafikiujwryjR7Gyy3GgFeVZzeXjpPQrEA2uMPqJBFkHf47Zjgwf1FtTcaZLRMSuyPb",
  "key15": "5mpiQrjQs4eFi3cFUy2WUm7oFa1Xga2uRNBs8DiWcA9TQizb1qPSx4bRT5d3Xg1D7ULi984Yn6kgA9P3aXidb48",
  "key16": "3AGDgbk856rhDNcRYUqnHvo2TK6LmxNzx8y4htUQgAZx2mSWCGGdpRt9X3ugZeUjCMnfMrN8gcgKhWRrG44rf6gE",
  "key17": "2Yio29F1WgSYCXwUBY1rJnBNB1fYwjtCo6qwSvx3VoneMV5srSMzfv79KccbyBMeXKVYLsCkk3CtMMnN1GgbGB9A",
  "key18": "3y91XT6Y1pZg9CvTyPAYT9wsATN8vE75HT7aj3zgeAhBVxausNWuCJ6vE42B65BjdTAF5N2UdzjenWSon4rXPbN2",
  "key19": "3yRtwNBrfrk5g5hhdNboa39eNiW9s7iL8ZnyCyC82cAp8JELAHFjEwLZenX5Y4BnW7G4AAYfjBKKceZRRccPkS1X",
  "key20": "bhfzfS4AfsbpBVDBXijjFqXgy9TLeCRkMS9p3AkBdZd6RbSMr9wA2uAomFP7Ck2teZvWVKxjL7NGCHWezRFvduw",
  "key21": "45vpcfD3Me1Yrng5Hk2Ut8ysg8FwRx8zS9pQR898VEi9Kr1YePSzM7qhHGrpm23cQmpnnQqthyRbuoV7YDxKdY8N",
  "key22": "7d6ehbg8BcCrAb2t4W67W1J88BbHQpFVYkaChc3B7KVDVznPyfZTFFGDJwtsjHmFCJQJsMSFYgpKeqqV6PgtZUQ",
  "key23": "5p4McTQK2DtsTSHfh2kzLAXSHLt4D2ZWcEAeeM7PxWo3fYQmQW5SBrKL1Bt2KMEHMnMSGFrKiMrthv4UhqCFft8K",
  "key24": "gh9uhSooXfjYMNpjerb4WqxDbdg5bZxwNWYEXVK3PyxFG4DCbZMEQLq8NWgvoP8UZnYAu74Nv1WbpntY9gRT2Df",
  "key25": "4rvnvab5TyvGJ8vjTrqB5Y9yHmM9ETVCREsb6BGFYQhYR6oLkJoX8atLvyrSZ8K5CyuPxVAZ6kLR8jBo9CTX4Xri",
  "key26": "4x9owCJe3TeNtmSxiemXGarusPLummk4e5qF7Xr1f5vyvuwFcW1fVWpE47PdUfyemUz38yap5NVWYJxhdCBQqj9p",
  "key27": "2usn2psc4zYfnrXtenLGJ7zvRD2ZhDR3MvHQ1M1a6pqv5iiii33HFVAs5xRffageMFWiC9FRy5DjhsM5XuSqYUEW",
  "key28": "2muftSSU8cFgiPYwRKtL1JqzuX1zFcv9qoQqv2x7jQFo7DAemWGZmzFYHxjdQpEJksH7QWx2T9F4N9Rtjyh47VDA",
  "key29": "3R14sBJjnoDVRoPakWxQKoCQ38S6v231opso2bqUhkW9w4HE4HXW5LFBJHxLmRM7Y7ZkHiv8gjGL5tCdHub5iUcK",
  "key30": "3Mr21PnnNG74GDnthVTYAc27Wyi74n7kPbxNVfLxpZbrrhSznhnPNgSBLxDe8DaazEVqSxERcZYumn7c6YVXi9pE",
  "key31": "4fh76vrR1ghahArP9CyuazJXYDb6hfDeUzNPPPpZYGHLYuzpe8rk3xMVHPXYJgxhqoLTKqTo4BqEJvMVo4BrKVhx",
  "key32": "35Y5TL6GrBSGCZQK2M5gR8ybNkapGBkJXkEyafGtnHP5sDcR8ReH4SCYxjFU33hUwDo2N6ZHGmz3QFB6DDnzG9N9",
  "key33": "3QSk4ydVVEVt8kDwPZ8RJxQcNv2D8n3VbgYAvFpwcVGe5pQg3LGKSiZ1nfpBijneE3fqnDBcHgRVrQZcVrHrQMzd"
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
