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
    "3mxoNJwnMjJu3YMQKZkAGhCAWdTN6oPkh4sZFVwZLcm8yBpjLz7kCCPEAndkXbpKvT58uQgCkoApfeyvVs2Yr7vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ziqSBg1LVnGc2CcNjEBEjuzBLH8sd5kj4JHZNZ3YcwwthJGTvkAGXm5dwwhVKBq2PPtNW9SurgsUqiehk45NPi7",
  "key1": "2KeUi2ETF5hPt2tPJBLm41iPquELbHMVLt46E7ZL6LEVcMVfUDBat6NJopdcRSJuL2QESMJxWm79d1bbLkGJS5ma",
  "key2": "3Z9JPGSudbpzhx1rRXgSFRJ6QQizM9EqfW5SDp9Pvy6KvQJKZtpBUhoSN76c6QkS7YKf3zmgEb9zVaBb6mBvndd6",
  "key3": "5TXEQKs9tysQkgPvu1pBBVmhYg3pknuLptyXkYKc4Bv1pnX4yJpp1okBrqVuE7wfq6qY1PUwCNLCdmsEFxpSQqXV",
  "key4": "452XhfjTpJCLLmh5ET9M7111TVHJexiAH7WoGEzg2edXdbmeqG2xLLFyhgSVwSg9zpT2ky9phoZWZifWboCqvB1R",
  "key5": "2AZBKz4JWH8pi7XV3DuqFG8QcCsWC4LR5v6yFWqsZfqeZUwYiRFF1xTzi6FZQAqBNfYdgCGcFUiv7nYvHU3KSyzm",
  "key6": "5jvFWNrmBWj7MiHkszeoBLWDtAooH6EVYQQZPVyfFT1m73ybZvtX9UgJHwNzFWsm3JsiABxRjbtCmTK3xEYxFiHa",
  "key7": "5QkHwskS4kZPM41k4XmboU86g1L5Gtu6HgGf9SzsRimUtLzK2BXFP7d4ZPrerWcJ97vWJ9zgtUHxWfgZPVW2pmRG",
  "key8": "2uueGJLZGecbcs3ZpUfWfA3GASux8drUedg5ikuz93ChdsPEt5tDk7XrZsYMJjSph6zeD3esXdrDzaMwx49PaaAR",
  "key9": "4qwiPwMoEKM5vL7PZYaYEhxfheBjNU5MFNYRgKA6iXT3gwMnr8Y6LNrmXLwMvUcBv7tLbXKWdahvoDYCWygUcgLT",
  "key10": "5EggVjUeqtG1s2TXGCAyxNKdpMucZvGW9fgoenTAKTKGiZzLTcAtQegs3fDaG88dS23ryfiBbW5hTuQXUH4mBEA6",
  "key11": "2rrVFxXd7YHmvHAxoh7bDcEeWxFzwiKq2bBnJh56RCMDVMuZk4ox43rk7Mg6MGJTUxgwtSwCX6Ue6hdsKPqJKv9X",
  "key12": "5y2jtNYKPSucNpo79cW5fBNp2aM5U9fn6UDCBZcp7LCia5Zfkv4mTMTwrG8c7Hhdjiu8NehfT4xB3u5FnwzePjwX",
  "key13": "75oGdR1E2EqZVhuGVGFJRwAiyUAX6xRMSe2fbnE73imJwFmrofUR9qL8L2bL1yR46D7NAoTWTCTzJCPkj2NxLdt",
  "key14": "2hTh7DZ51vVfRKckNu5axyTgfCpaJy4Y2G6LCgKLoNx4RRT9KvXU3hvMVJouB3YYeWThc4Ypz2DyhrrT4jn3Gi6A",
  "key15": "3USEyfxAfxGPMr2GQgxD9LN5Qar2RPYSbUbwQsKvj8YVbvjGTZ1pz6Dah4JwsXtNYYfMZ9DVkCPhJpSCBJt24MLp",
  "key16": "4uAZ7quCHN9mXL47w1XiL7tqkKz2fVMPf7zBSAXnkQ9NGhbe7P3Xm8pMgQAiwwi31qQD1H9tcteDkvkZwTs4Q77H",
  "key17": "4TFEvkoqcng6f8ZMiiHEm2DoHu4fLsiFfyb9GhXztSFiWYz7CZW7xvq9WdgYdZLe3fKu3yL1MsGjdbHVn79N9E7M",
  "key18": "iAwPHbBvvyemd6WVKAMB46bG13SMkr2mvaziQd9CN6YBpGUeY5gnUrr6J1VZq6nffXkjW79d7uD2yiBj1Xw3q71",
  "key19": "5BbxAXYyYZSHMfWu9Kwqz3RxfGgELJDsB9gkZwA8PgunHGR3LotUpaDXn9oYHB9PpKwgtHigQyd94N1xmjxnssD6",
  "key20": "54k6XTuJAPbxVyu1S7ntLuLpgYCnEeouBXyRkGi3WC8ohtHe12Qk1iN2ZLokKxJbHDnujApvVLPVnrbG3QKVriXg",
  "key21": "4wqz5wo9UhcD2WtXY6Zefytc2ZUmEEFCFbehcAWmST6Rqemw3pD9LaCjByhzX9vsCyzKk1E733BFMiQWkFSfcLZp",
  "key22": "2Vb44yjk76dQrv4bcAnhoqh2wRp8fYfwHm2dWxHgNhJhQsLYWvbnF6LQB8paJp2YBPRtiWWSwoH5Xcg1rizdyBgQ",
  "key23": "2DsxSY7724PJn2tCvzeU6AJbzSXfxxM4NasbA6gkwnkMcWkn5bT1aykjsqxWKhqZwgPNtnEcrvoZzkrUNnDDhcLK",
  "key24": "53HhvNULJUA4q2MFBB3cckQQDRp9DDD9nCsCjFK2joK6GFXTqNVSbuLjC14hGdTqnAov7gb5wxdKNFEKYoRHezvS",
  "key25": "i3LrobmwCVcZpD5zoBcHqGvfwf4YcgGJGBcUH7M6nvHPLUZz8CBNRmAr1WNF3w3xVFnzTspQFmJ9ssmkrMGeG27",
  "key26": "4xK3WZZXmy1g6K5rwncrKyM3GSYMELE6ZuLheo3VJYhZQq7iDX6UPS6X6b7EmC8bCoHdizDs1jsEgvyjfaEtqoaf",
  "key27": "3BSE73RfVATsGqW48qScpoi785FA1uuxL1DmgAJRajhwfYr1co7q4C8sniRSevFYLBhpq2GDRaaKVe1AJnM1B1TC",
  "key28": "2wxHFpAnySHBr1F9rHPPNKHztbrYqyEBQXfTZwPyb3G8DG6YPk2cSLxyn5zkLrdDzCki6DUtE3MeYSJy8DFCEYQZ",
  "key29": "4miQDVYK1PeCsHnrvM61scmGfMKaFA2uxRfd53SD5RScBzgJXBL6ysfhPQ6jsbLNq2Yv4xvjnouDkM2E6BQ2mgoL",
  "key30": "333kZNVkXabE56HEtUVW4GaLVTMvnDtP66vErJJVDriqTrHEaVkWFoUnLj2edGVW7YARTXoHijJ6TV1B3JH2mvKt",
  "key31": "5QbiSu1YuccRaYQtPq2EdEbPxuowhZtjeUBDvAYbrnu73HKbNUpXBF2DZs5HBBqnfn3UYnNsJC9dMKpAapvbL9kb",
  "key32": "9CN2bDoHknxMQM9bW4KY3xiF4ZkLeTnZ37EHGpXx476ZTkDpEeakTs6ri7ovrwjBxEFnxbDXBRDzmcuqPa2TxKH"
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
