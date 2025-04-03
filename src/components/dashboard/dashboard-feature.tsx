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
    "2zM5CbuFKmBpppxKCiiPfw9FVcwiLKNFubaGA564pNV2ZoJEGqLdfT3m5iZfNWRr76w5orSoNPYs8iJjb7caV1VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSsBdJN9gnfhBg3FVsGiZZ55G97Vx8aZPTVi5D2mFQwLi8rtPXgfTnAQadw7RVYhyHdPoM5W4TSn6Kq99yBsdPp",
  "key1": "2S3BxQQyxDDBNF1R694ScvBWCMinzEXkYrAjiFp6FrqUaaDJdfeM5Pm4R3igwDmFxaYVXgRMXtmK7HM2fePjETJX",
  "key2": "2znC9kUP3Gwc6eRqLTZQtCELs69T5Q63C7mNY2NZParN9iQaB72rdNCKVDhLxkB8b4iZ1oi1AMpFcsamqQp5KZma",
  "key3": "LNe23NYuSWPFCJykjRJwyhHXnmocc38k4EQvDwSSd6Mb9E1NsmksZaZCV6Qdzd7da4zXK1wFSZSaLRun9Mq1pYe",
  "key4": "5fvgTwiMpiQXhV33aBUY5EeFhubWnHCMw1LGe8DG5HZEzsyxgQMtszSDHBWpqDjzNJ23n99Gs68fMeogdPyGF7yk",
  "key5": "3qTa54fQ1XyAR25yzn9dWtM9VWTchi7oVYoUCk9ZTjaZSWXM56mhXNQMDsA2njoJYif4czh8Gj64M9prU6zV2eep",
  "key6": "5FLkvTuz6EaHDRpmefyrbnnK6eV4aeEXZQRnMdvYYbVGbz3Rh9Hhicbz7oxL2UxAxYZTCJEr3QmYMsnTWKqTQizX",
  "key7": "3WfPCfgEw3Ns19gMF8ZJdM34qXTkLdMgJoYjUitSzD6rPCsEyfB5erCWeappGFy8ffWeyft1fvzWDSqg26u3Bu7R",
  "key8": "3yQq2pac7bwjaALYiTDiKCMa1fEYR2HcaRW1W8GpiUvpYMUEcnUMvzQrVZrpebUMVH3hjjL9Erw5AzpWAYb95VKn",
  "key9": "bEg87mFAXZwyTzzoDvNFKxV74XrPjQoynKXNMHbhXhx3gh6aTnvZJ2Qff2vktsdePAmS3gHxvhqBrGR2kb8JAww",
  "key10": "2B1pkCkMGqHzKfB9KhXXrhcVbWJsBqebmhApv6t9rfdhccAcaJpp3tvu39EEa5CdZNhvV2yD6dQHrQTfgSQGghpL",
  "key11": "8KFywJ7E82TJ6BmpF4C2gcvCBwAdsuPKwAvVKkcYDfARNpfTx7VbtzHdWLiuH5rBu2YFu4Gwp1qe9f6XTf136T8",
  "key12": "2onuvzoP3baZvxo3DuQxqa5JJPjmeWwRd9BXZv9eRuSdsXX7HsbLdCfWRCGaScLwTgeUyVSKwrPDgGifRvCtN7H9",
  "key13": "W8wY9cvz8QHHj7QTUUxPhi8b2Y75PPqjQdnTVnpQKtdqau3zi3fMdLbDteoDH5Pz6iKbptAGJTJGwhNk4LWY7xj",
  "key14": "2KE9yDcrzzPNvstnZx8kQapJnt7iCoEi653CDB9Zec8HeayrWZ9eBRspi13pnsVnctsU75L6d5UxnfhrRas4dn9U",
  "key15": "2Q6ejDzGP5pFG6hwPF2anueCr7pUJBoFeD8SE7wkR8S4EdowQqEazpeMCLbPWt6WNJwmAPUSSKnfbkdLNuYMmuZM",
  "key16": "ehXPGRHXSZ9YcKtutnxGU2pRPvZd5m1ZttkuqpNHNSmb9ERj8NU3ER3uzgLXFEKhq28a58D5He2ALg3t45mC9HP",
  "key17": "3AZvQeCP4NR8Q2nKdiR26pZBzX94G57mfS5uYqJJCK5XHH7iquiGiK9aujN6zr6DZTQpEmiqngRFBaGtGt7GGx52",
  "key18": "5Qw1pNX25RNdJtif5axTqQH18e8CpJE7AeXb7YLkLSheGWXjMwnah3KxEakiZcXUo89R47zCQQLrYJqHBqjS2XZ4",
  "key19": "4o2PSyrEswAuJBakcohVQgNtUjb6ivYu3yJDoGdpKTeMzDdDSHpPATD4jPHVUo7DQ5mtNAaB7zPzdytP8VLifhkX",
  "key20": "4s6nTBwD9cZ4fpidiBH43jHtLSZMNqNVJhwJYaXCb83FqBtgXXYjDtg8porWeDzhomVUxHj37utRzpqM1EdokAj8",
  "key21": "2MRrQmzcQxfYsw1S9xsTTTBfFj85fzWSdUBjLEV9TbsDXqYwFWEwSbsizwKQBofg52hhK9CJQdkb9jKHTqnKpa1d",
  "key22": "4YLq1xVUyCU5P6Fb6SWYr5DrigyDNd1qMQhX4BFJLTvPhukVPKd3UMqf8f3ixbTpVTBuHUVBXgH3GV2LQXQteLk2",
  "key23": "5g4eEqwXXZ9zZLXSMuiPnc9xZLyRJis7i79QnUriebMbzkvDUSiQ8LEuzvZoAf31DFC69ngzE9DgMudkzeoxUucU",
  "key24": "2Sudgv4XDPBWh2u2b43oEXrJLPCVUcqStLtk2QQ1hyMmxu2BFfzhLiwZtp2hfaKoR21N9EtfV7rrVpJmUB5iLkoy",
  "key25": "62NgGP48YJt6JmwDVkmwQVBB6bmKZu8woVbYyviePxi2ZSSLAAdUG2qvNjNR1CcNDAvaLpAMEwQicGdhC6TFU9eZ",
  "key26": "2LLvVCUasjjbnqw82jc2BbP9KwdcrNjC4NQXTL5AGwTKsLQ6RTinEWpgWB1sz3u4tYtKd4X6dgF4UpdtuncRhWWA",
  "key27": "nmzwDfKLqueKFHtmNWtVsq7FaryLwMyM3J4UGwuKpncLhwXyZHw1pfQtLHNtxjPXyWeUNNvomGUTeC69ymxqTgi",
  "key28": "3NQVwPfQjuYzw644iMjHyBYRiuamTFMoXYRJcvp6Ev7gLcV3LTxm3PeBDfoCFPvUazSC29QEQxfuJ9o8LGLBLW2C",
  "key29": "4drDqFRneHZ2HnmHsKX9UxXYWd9cCav3D5wSJL73SLZ1V5ZeEXfyGcm6tpmLiw6WBCqgUTVv3iLPvHKmM1jo1Uww",
  "key30": "3ur2PFBfu6nbWt913e8E2MX4AVcY69QrrG2YKwQqCXqm3Kwpsv5JCbrWLrau4RcchckbRVRpbPd5wk34eb1AXbvb",
  "key31": "4SfHB2TaAGzwrDLgfRn3tbCaeZxnPxCL3Gk7DGWeja7HPis9oC2nnES6wFUja64Ytwt9FfHEGQw3xdYxuNxJv1xA",
  "key32": "3FQKQXzJz9BzijLnFVdz2khvvDK5YuQyjpT4c1aNFA83T969RGwynm5tipWAJHkVpcSB4oGwswNsummjEhxeXHV5"
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
