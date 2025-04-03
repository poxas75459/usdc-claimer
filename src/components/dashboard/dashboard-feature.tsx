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
    "596pKhm7tuvn6Z7kW1wgM525Qb5LX4AaL6mUo6VUbrnbarHCnUiXRTC4sfXJxKZK7uqRuDzHDz7hE36sCHnkPUNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2weLgq2UT9vDjqLC1cLz5qLZi79n5MSv7b5khrX5FdFRsp4GoReCxzud7SR2CzerUvwJvMczyggoJJi2SJ27WgYq",
  "key1": "4wk5CeJRBFc4PFZW2ht2dQQ8MAfZ243CzgDCs34R3njwRuWR1PeLxvH75enKEK8QsAKNvNtdftXNb8rUPvi5cZtQ",
  "key2": "3iF9GXt4Qkcd4Tor1s32rBAvagdvaiZXnscisqER3yJTXTsHD4rvVEe8c753yZJp3zy29xYMZtHtrBub9t6LXgzv",
  "key3": "2NYEsH3MaScqeVhK3ETZsz2YTt1Jh98hhqKVnF7Hsfso5hiJPbrq2EQDVJVYGSuAjAGiZMV8nkt8HupbAmZZKv3q",
  "key4": "5hTihSFFNWtjKZy7VAJV7Ujgw4RN7Uwjyog28E7LYCFHYpiAwT8oHK86obdFWuhaCdAsWaveUQXfWvgL9fVeNKFe",
  "key5": "2SgE53X7Vxk5jcGwfvp3pHmggBdcfWYmcDqZoHet1jbENpYqFh8ATrR9yMDMLpb8Qy5WeLAt8dqdZUwsQEK5qpkT",
  "key6": "4cVVizfLhqzN39n3Zq5ou9cFNjazpRGyJHzdYkJrc7q2rCxRJPLoHLVLSmT6dygnbxbDnFURpFsQ7tCYYCCAQ3HX",
  "key7": "dLT7u6ZxAjFsjyJZ65nHeoii2Z1qV3vKRSVa5NHBP2bZ5xebR9BWxCTGGTjUzCm9V9VBFz44cWwt9ZWToAo2t9v",
  "key8": "5W8xgmDnDdRCf2k8pVFHmREZb8ae2vJbQLnjxNRU5tyXgmJPkqGwyu4XYxpJUHRVhHUhxFGFxobbqYuPJU2iPMqF",
  "key9": "23m2LDKeuwTCiKssSMoHLifWkodT2c62qoLZ2b4vgctbBQcp13ggqrrr4PovPQmgrFoPXbLJ5TwnZF3jiWcpns1A",
  "key10": "Qz9AoQeVTcqhFJu8XziE318kFgZN1eJfpNywq1RpcBELDTLWs4extzATcEBkwQaiVrT45Z5JaTjeXRT7XnSLarS",
  "key11": "4efSwLz7iaUZ6uTsKA4hX16EHwdgtjBt7vfFJzbUQ2ZEktKpPGzWViGMUAcKUEQWN6KtHWi3UNHHedtvpS9TpawJ",
  "key12": "43bQkemhvvWhYrmkxQzw4FBcLsSxBp1pC91Q3h9rgNfn8ijpmnxYojKoDQtNALD9z4259EtNYK6oWjJnQgUPx7k6",
  "key13": "2pbb3dM86UznMCxMWomycJDCUzWc842mpwmt8tZBPD4WDcJrcsprmk5Qq2QTsrc2yWszq2mmKiwSrD1RGBy3dVkg",
  "key14": "U8joSVj4VEvmkFjyqUpmCnNjn4N1jygYw8eBz9dVnNuzh95TBEckPJa2pCTPJQL8bYjFtzMMz22gTrXd2cAgUoK",
  "key15": "dJk6oVb3MCp7tNfN963Xac2tL2cYC8aETqzBTqb7mjpuCHWLpRD12HwbUDWiUd8QgCtdZdbfbfbv1AmdCdEAnT4",
  "key16": "292dLV9EY2Gyb3y1DYnnhXFt7fUMyT1QERNzvkqjiWLVsKaDqzeVJ2V57kbyVfaCnL5B4k16bzTGc7nembCpa3KE",
  "key17": "2Srr6a2fBEoFwNnsGHvGx95uYkazhW8C6BNxjBhoTqzfybs3FmptMk5XZcUDhsVduWrG1fSE2SDwJbR7uHHiSy7X",
  "key18": "5wbuP2R8GupuM89uDqy798ZtwbNqwgokrG2suGUYHU9hcXCxHjaURWHCUmt7vnnAdbtJAdKz9mKT1uza8oFJpeQM",
  "key19": "csmy31UFKhnzNJ3zZsNrizQNqpZixJEtnHcaWttRurxbRMuFdGwtsqhYFegFrV1KoERDbde96Wri9AuniiAiDnu",
  "key20": "2r9Xy9B73YturXAXhAX6X7GC5Q13SJvoViucwLjFqQLrmQM5SmxQKqQfMC5TNEb4QPed4u7rKXvuQo68ec6D7a4E",
  "key21": "4VjQPHTn5ZH8pcR3Lse662AFBD724h1MNwdeUF6rxoTEyu6dhT8jNiRUGMHCvH19efsSCMFfrGH5FRBxJPKCc7nc",
  "key22": "vUPJLHoE9srQmN3DJsQ4tDY3AyeeoZRJT7wChD2EpX6WhNAQntYUEqEdkRGkgmLSsY4x5to3J51hs4A7hMUmVyh",
  "key23": "4ZNmJYcLjRiVHpqM1JHMUWp3aAt5bigPPgSrYq7KuznMYjkWqesXDHLaYjA7g3X9yn1WztJhXV2PsBoJBVYv239o",
  "key24": "4Qa586pmN9rmM1pBWCxzzekS6UwhfPRhKrTixYDTE857387xRjo6frfMq9KAMgLHjbFYZmSAY9Gb1EYoHwT5xsiU",
  "key25": "4DPV1n8QfkxCKkDB8aPyskTzZAZqYipBTXM4wDxmtXBCYfZ1RsKErqSUQjxNMmoiCdbtQF6oYgGz8nuS4iNWpNRE",
  "key26": "43Y8aNMHEc7DwpSLMiXrF1rAJCjF1A8h5qX4TXALiYB3rgSfeSwDypsd1T5DXjNjRHBKfWnSVL9oDpuELG945kM7",
  "key27": "5AWTBw4K3AaMPAEJ7by5sETy3U5YgoH7esELaAHtEy1jPziz7ihaDcpds448CHLvjUoBRBYr36GseadHxNJsJNuF",
  "key28": "5gJADRKKeChHiqPjLttFYsEeM9PXDPtKLvs5mQLMcYFumVbXN2R5X2R7JZrLfqDTQzLo8ScdF5HNEq9NHbtmiZk9",
  "key29": "35ArqC2FU8vaRXGHeJN35MknWv145u8JJsg4Utcd9exKgVKUE6QiFAcctCrcxwJYmhntGQntzbDEpzgZijsDSVjA",
  "key30": "GSFmhND21eqB73hi9dWdgpypKEF5PRAfXwE2vva4PtZbFiFcXZV4CWf6jLB8Ueyxzup5PrHsTX7gcCDm3mjqZ84",
  "key31": "3pug6rGdpzhfTPhLU7WJoSTxPF1Zsrv7hy8waK3Rn2re9YbUonHVcR8ArrwggKTx6XpwEe7SETUsCYnxchuuPbYc",
  "key32": "5XrHXM2X8u3XMWv8zoy3cEaF4nNctSjX5CkzhXvhxFsnXfTyA8uLWknrx4GJuqekTZ3CjXpiUawRW9E5q5a6rYMo",
  "key33": "2dMD8Thwh8rvHU2vviCC45tFsT5rUHqXHC4ipDWLtaG89xz949bvKvPb6kRGovQFgQGJf8eskbrQGUJQLXfoS8vF"
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
