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
    "52LC952Yod6fPBjM58ffvRntyt73Uo2Q18JKJdxnkGGUPeqsytC3fLFs56ok3Tw38jsrG9oWRA8JmY5JH5ThWaf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YB8qSS6aNqNcep2MHENx3sLATc4RVzJuCeXvjLJcLbgFoRg9FAx9DWThzeoppWUpmvf1qFvwkLUbSoaWpQSkKsX",
  "key1": "2n2fwwb6KsKNbzYy2cNEWXUNAUHkz3NQCNSetG9aDmTFMUJgU76cGpYW1nfq89VnyELKbJWwm5s1WGLBjz4YVgGg",
  "key2": "4viSRP4aKZtcQ5TY1A69xCr8cLs1PNyNPrM5zb5fLQDY7WKGQCPqsn3YXCvyLycWRAo62n2b6FTwVm2oE2QSabzt",
  "key3": "4sq6ArkZeg8CG9uoHkW8gduFPmL2oMP9HnzdJ4W5WkREqeJfvSHfxc6ySHeh3wQQgN5JK1RnL1RjBGFL2BBk5TL9",
  "key4": "5r1oS8N9dDQ5dhV8uzUYw1yQHjRYfnGZxn9tcMhgqrq9DypMabkxvUzRCw2cKpqpeyKYrBoKf7s5ZS2AqbWnX8DQ",
  "key5": "5ivTYiT2RfpCswT7fDye1xLdKNB4d4pKvzGog3kdqZ7a6zXx9h7XAT5rvEQzcPRUmPvuSAaiSsUwPJZU575u5tjw",
  "key6": "32mRce2F2cnY8cgHJYSz5PNZ2vYgKfx54qeYDeDziE81RGhFau5iehdwCw4edXjAgeNcRLVt5EkuDm8aH4HPbWob",
  "key7": "GQgs275GM2xphjxuRpuNVBnoe9CkNBut5iwmtDQDZRZBFbqW57Va6Tdp3DHh8Mzabk7Hs32FPzWtW9Ydx3PvCuK",
  "key8": "2WcSRv24VncEKzF1Q9V2hx3RVZ4uaR53jW6wvHvZscdgyBcDQ4bLJTejmVMEcAk3PHEZf81FACYtuG9FubXMEpjW",
  "key9": "5Ck9Yjn7BqzHeVYZecCAoBfxsa2kMRzyAP2K61TQtvjN9cwYiPBtYirA9YXac5h5yzCM2zjX7ZgWnyxLyc9xeWjQ",
  "key10": "3nBdKV6YJg9uCi48uFvuB9Y3axrsy8qEHh6Ki4GS2MJp1mB3aAPFhbMm2CiNro6aPE3zNSz3XtUzcgzb3wgwwgGu",
  "key11": "594J34LzzP7sqzbmwKjGkHFkKkyM1qtQ59EJSNEdRrPUA1yffL9uxXeVmpHTwMf16v7xF6kwTZgtVBuRFJJMbXEZ",
  "key12": "mC7QhKDQ5qLRZndt7VLHsTWiMgJpTjnoqijJC2fCFS24PgKpArenUq5merrnTRbGvovTvg31xrHo1RUwTvzwZ6e",
  "key13": "5e5Za3cDQwjCU6ByLpohi6HREbpkAYGD7dC56ZGc7GfrvmvPM9duL4P9EinAYz8YQdR5XRTJN4pwq7bfo6w7U3Hp",
  "key14": "57xeCwM9g2VM8EZ2svyL8agDJaybGoJexwnxJeUhvY1KCkdHPexEqVHgGNk4S94qewqq4YDxohZLQjZQiYejffck",
  "key15": "36gopfEVd4Y8KVq7FyriNz1Ung4siittGNQaXbX6q7nnHCSRfdfbwPqMJ3GGs6n3PKZFHBpiqiHGeczSE1dyAwHK",
  "key16": "B7M6PrdQgbW9K5R4t8fvLrw2AnPix1f7YAmFHwjC4shLT6LASEpLyBYUJAPLVjbBu7z3iPxJw1SsgAY2Rji8tyj",
  "key17": "cq7vhJWsPFawQfSsVsbGg3n5hRk6G3HYRJoJr6v2omqXVCvsbWRQAE56LjVTA4KACk8uABsehe2nbSb4XdLGp9Y",
  "key18": "3K3qfmHS3usjAAfW1BkCWEyYoLztKqXSK6QyQzfwqTgVWbh7cb8tYw7pi1ifZdv2s6iUch95FetsBTgP3GYRKKJp",
  "key19": "GfccBMSd2hjnUDJQzXGKdWJj5y1fkLdSCww76jxtSHtNm2FABmEwU6UMGBRyWqTabBcgFAwns3Sd8UrCnFbx27b",
  "key20": "4J6JHwqFZ8ANWkgwFG8ixqZZ9KULfjEDtZpJU85oeo7KSpJhkSaFjZZkzFubF7pXJjTJJLmzWMHEA4B23hsi8fpW",
  "key21": "2R7gCxw1Y7XXvDBqPbwV4n4Pj28NLcrsAxyFSgtf75aGyd8Pzkaxz8QqZjKPjMGr8d1kpcWMdH9kU352GSoCFaFM",
  "key22": "zuJECLfRHcAWnU6tQPzvJKQ8U66QZ1rASzMXfEjSRVy3d82RtdoJMw5SwqNU75kpBVed7guGGt1fiEXAqrNmUay",
  "key23": "2WyTiV7QzUaBY3yy4sMY4BQkioxpPbx7qiRgvPKWacU4RP5tqR5ciNxXWC4a389yuJnV4VR8jZJypBzf46UNNdEb",
  "key24": "vuvfxWXcfY3XvxRKjCLCgepFa94PXwjLzrdupUPFYG1dmZkRwumLsqG82fG6o9vw4hT8k6CCvExAuStjGaSCU2s",
  "key25": "48zckNMdf7afb9QpTsu7QwVjV8xJyXhftmEooPDABu7mfwcEaLk3jaD7PweXTTKK1j1bMskMDreGuXZb5LMKKLDk",
  "key26": "61MKLGiRXPFLJ7XtvaR3psJaf7n4xKeX1J27StPTcEV5t56rQHkSnRg4XUyCMP3kfZWP4FpM56vzNPivsJXqwKpC",
  "key27": "LTGhWoeaoxePe3jkeeLLdUYvMVoGpNK8bU1Ub2nqQxZQGoemPVnrVRBCtgjg9VtmrQmroPBUZ1nnK77xTeZKbwR",
  "key28": "4m4o7c8iGKqT3PF5rPkpUPANuSKjifDe3D1Sm8hwv12f8tnTUYR7J6vm9fs44ukCbRj8fjvKZVyhnPzAdy7AWpPU",
  "key29": "2hrjibhdwZM4WtxYQKCXU2AAm2ka2SxFSsGnpnqGKduMT9SPdD16MiFrvrpBvQGuGWx1u6HixwsfXCHw8cCUzUAu",
  "key30": "MPqgbRAtGH3QFjfvoLzybaGSf4b1udokVMmpysSxqb37ifwCEhVHivJLkwjCTPUFin5eBEwE65oWkatPytfLGBW",
  "key31": "5vcar2PKciCLiCxj4nmC9NSZGfqsuFZS5vN7EmTnw3PBXsRUh8GAYYPC7561Ab6rq9c7iSuJvczxwnz7PM6RRSBC",
  "key32": "5VufMGeSpx16m5w1b6Jv5Qga43bpNJy9AkBTLKnpxwGJ43YcxWZMLzxm5iWKt5GoYTqAJwyC9CAH5UrUMvRbDMqx",
  "key33": "3FJ8HAyn9bXaA1uVoPiAUX4pa94mhvhq3XBjh1GRnsNVWKhUQFRNHVtghxwwxKecKE88iqMzzPyCtcKUSCXtj7aE",
  "key34": "5YKpC798YnX9CJ6cjAC4Fgjege9qm8YXCarw2awbb6xzUSbMmViprjZyX8p4jViCAA13wLZkiCmsF1gvA8hY3Bmf"
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
