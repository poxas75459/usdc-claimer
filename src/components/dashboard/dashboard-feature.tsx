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
    "3rVWoqAwfyo4jw59Yr1g9wnwzgnJjLtMuFkZsrmhx1aLYVRzZXg32DGhaaaHS3rgRTNHuNXxwKwv9gVy9yLMAqaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DsVbt24EGbdC2ctBaBf5wUYMeaSpsBA9fq4FWj67GVZCvycQdbfkECaKwPS6TeFK3u5gb9aSd1UpAgv5VxacWBt",
  "key1": "65fGXUX6uXi8wnQGbYrzRohjtcc6Jry6AheED17sLXiTFaYyfS7X9PrPCFBsDncgEr91Ct8b7WBVuj2bzKyk3j6y",
  "key2": "4UjnTK7MyWd42rrVnEjzvcGU3HQuGQEuCjy1y5w62d1xWYPiC7oV2Zajtt3YUxAseUh5wM9BP7uchyLB2tpXvm4Z",
  "key3": "A4HEj1qXYPGFrWgwuaGbgjiZdnas3QmVmhvHgvCGdD6N1YPCaZvzbAKnTxJMVAKoNFtMk8Fs8Tp3JHnoEdx5JHK",
  "key4": "4Nmf8NaiYcK49mwzKD5rtxScwtffkoT5NH7KjHGWjt2fNsPYZNpua8q6cvRbLN1H1vsB1m21kczR4a6VT44P2xmf",
  "key5": "JkoaB2q4JtotsCKoZgNexjgdWgjfKwUykZEhn4LjzTtdZCsGqwqUdDY41Bh4cd7fovGkGwaDmuwhNBbLyevBPoN",
  "key6": "5afSsdebfeDvcGFQry4mh9zi9eUvGmbFaBPanThnNQhiRoGf7QBqQ3CgHdc2pdzTXoAUstnhZx1Px5HqHWNfupnW",
  "key7": "5rCN73he4RZKwMuAXV4Pg5Qyuycm5MNSSRaYUGgw6LutELKhV1aMEdE5vnsVGZw3c272Sc3C9dSycKNoyk4L5U1c",
  "key8": "3YWo6JLo1FrkNfBRoyAwCPf29Nz4U7trSckYZbqR9hBSUxDtYQG1YfCnv9HDn163U524t3kXAxspun34yTP1vJPC",
  "key9": "3r9FmNfTTyyUs4m5vFyQqZ2zYSxa3LymzuhdUeJciafxkVx7NWM2rPLfmpMRDjCnrce86wAT7Pcvijushqa8YTak",
  "key10": "2DGjubw5euSWDZs5tZHsCWSfPiaMwppiqpsrt1naWy5d5ff6UNvxYx4snB7SwN1xYayPtB6csDDqeLitob4CKYMw",
  "key11": "AU5L2djqY3Ar2EG16kmGkzasN59XJVkmo22g9P1DPpgBEDci59uKJjdEw17zxSL6aPXikdHwaEwdpQkyZPNeWeV",
  "key12": "5fQ3xwNTQ9AF4UN4W5xPPVhWTM7H9crRRcu3fvjhu3rDDBJagB7JxsYeJDvXFLdWZrEgBqfsB3NfNPMiUriaPUAh",
  "key13": "4Kb5AMjT6UhkhfrNFEMfGWpCpjoxDpBduazfgDVh8u3gg7FHGfsB13FZw4cWEfpENqWSQ92W1eWnd7S8QEVHSmZm",
  "key14": "4MzZxjz31ZJvmUpLxS4JcT19Aj3yMMXAykTPqGmKgBWm5k7mxUoTsCTLKHtSwcgDsJD77qQj69SSC2GwUPsCxyBD",
  "key15": "FgoJX87dX5FDDUzy7xZ8zx2sDsaXoKXnUZef2um5fMTYa4aR9gH3wEKjkbuT5gAuVNyyx4tkcWFzRsRsLYRobyR",
  "key16": "ZeNDj1PUJPuLVppApfSQJR435mojtZQrpb7VSg754ZoTrKbGPED4DKiuoAa8LQzqeWjYXKukBRmp6fgiDKh6Toj",
  "key17": "5VaXo8soXGBdHKZBbkvv33i71HeaZmHaac62UjhJmcRZ8fFQWKekRMapK5qAL2FjENxo3qWoY4wvd619KfLHQa5x",
  "key18": "3ghemcKUxU7pzPA3vsghJw7bMcsjo8WGfZodAyQq4dqPuN7h56pD6WVRCmBQz3uZgtJ9WiJuqDMK7bm4ZnkZB9bZ",
  "key19": "51ff1jyZGvChnCtTV3myiRh1vePbNB5JJW5micXbwawEo5SiNY1n8sd4uVnsJLUMkepj3egyftN33yuy2fsEezfT",
  "key20": "5jbT9P5SVU8qWxaQiHnwKZYMusXVdn4o7rSWWd7qsXpgDUXjEe84isesP51KMFfcwpr5ybE4gFDv92h1XXFdUXvL",
  "key21": "5tZ6VKbHDjV6CT8kUhJReMDD1F1iy6GAtRp8muGVqWKnQAF6s7espDji9sBhdW71DwyZsqou16LcEotvUd1jrT3H",
  "key22": "5QB9o6i3pdTz8qhoTnU7TvrLEhiRLoY5oBhctbicYWkZ5cfYHsV1gV1Cy12XJMMnJVTq9ks3cX5vQTBvpnvsRzoQ",
  "key23": "5Gh67mfU5qUrNECqA6r8BhmpKryRNHM1WXXzqvZ8S27C3LzvsaM27arTwdjSsoovg8tv7rFz2hobYJYg6vpb1HEY",
  "key24": "46yf4TVxR7WQMWt6sZq8xETNYxVQn6zG4oBcJ65rJwFzgiks13jXtydUm2DSQXGTKfK1xeg2dTCkALrMzS6XGGJc",
  "key25": "3FkTmBA8YMAQQpLBf52QLJ6yn3BZqWnhhqxXue49seozNFsCRV3YtTJhNrVNgQgAQp2oqsgALzyyGvuJ8ZwKEu7Y",
  "key26": "2Y3TneQFeKrLxvR5wPZBHb6Jnc3bPocaBPYbkqj49qHmyFCiH7v1m9Lrcvs3LPFNTBYiCxXfZJbZprbLedDpzvuD",
  "key27": "5u9Z11zusdzosrqHtrfgRPwFwWe4pndf98G7AmT8ZPf89FmrSi7jwVR5YuaBnwP9KtyYz9UimrQNHgUZDEwSFHUG"
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
