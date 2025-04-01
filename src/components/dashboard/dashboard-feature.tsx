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
    "NmnkomQicRMTSGBJiJLZsbvTRbyr4UfvNoznwvGCoVruc5stMCqWZJotdWUGgC3CrYohB4AWx4iU5vwZ1zGsHmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QK1YVzcswJhCQwZNwoNxaqhr7tdFLz3Cp6PbwcLB8z5mhK4Xcqf4o2sTdc8UL9bSy4szUhgUV6aXDR9YqLtRfpx",
  "key1": "4sFPPQoxB3MyxGqoWTkYmg4mkM22LPjWpg12JitPaKmXpX599B7rCPnXBXZgk1Rzw54VrCs1varouF6oeWbExNk4",
  "key2": "5BxpH23MH7uJkhKUvxfX1um1KMLRfcEXeSLiCKYxamoGPjQjciDihfiPTYGJ1c4QF63Qt16dZTratJ5UxdoiYqBP",
  "key3": "GzyaV8uenJ5mPFLf2Mxi1u4rqRN9cQpXK8NLJbcN4qk11dNY2Yx6poSUcGNSdA1i6WnZAbgY9d6F2WkycS7jMkh",
  "key4": "36PLD3GNBMEoFKefAF9S2hBfQ7W3mzDKDb8H8mxNzj1VgQth97eWrmBD5NCYaSo6kbu4xX74yrRifLYN1AzCfxKn",
  "key5": "4ag366obaLuthrH25xzHM5xXiuocuHXhvPsFBUBNRB1zkPYby1HY19soZS63YUUAjMN7U8J9y5kYCh7qBQo1RVZv",
  "key6": "4mQcMgTam7yAXL6Cj1BWfmRCuLVv37g4NFWTbSY2NVEgxURVdWeFuYZg3Bn7cRu4FJhVSRDhaw1EfjtY1UhLNJtP",
  "key7": "4baRYXRG9rZGRFTwxJCmH1m6ijKFwZZtGZQafj1b1RWWfd3B7d9oHGbUCrv4jNUoP6J5Aw9qd4nxNTpCk7XesPno",
  "key8": "67WhFRbcRTyYaSmme48fLcwuxzwL34KCUMxFZonmV6yUh2oJDLnV56HbaERfUkDiqghgo7Nu1mWsBsuc5tF3YTrk",
  "key9": "3CLwk3i3iF4SHKdohu3JqXK6Mfzw5mxR2LouNbdmBfZxREXuikhAAgrHFqCCEGvZpJ621m6oCwUfX3wjcgZQ16N4",
  "key10": "2kYsmv53FYpv1d83fzZpoPEbe4mwsirE9KeeJVJccmZuV2YXCqHyQCjAw6549kPBDLmNrydqjJsAwSPmRYBAbecz",
  "key11": "4i1rBso27gyBtxQNG7C8i2rzMfD1CQkcmAwHUjiBvXsVhdRRgQQjkPLKqV6i2dhjBPcyAuaxgk9khLvqCk7bEP1e",
  "key12": "4DdFGbjyCJxxBeZwQtguxHfHEYy5jC1kUBaFVCmgHYzUtjcxTicpciJVcb11HR2nCvwnkpV3FK3eJtshHZDYsren",
  "key13": "5U9E2udLNjvKnbc8zfZheeQ4Cxg8kP9Pz5GYnC3v3nc59EiAn4qL3z6ZW5YdipwmKVZQUa9k1B4DJNFqfGN3K5UM",
  "key14": "43af4TxsKpEXzLvusYm57d7Fqd2FjYJoErPWj9cciTRiRzj9GjTZ2mChYQFwoEYoVN5Jh1p3Zgu2sYW62e98Vcvb",
  "key15": "iTK4T5FBaxkhEL65qQtoPeuYE64ZbdLJG79F8rNsnBMVQ7VfrxpP7cJGt6jxkXbEtq8keaLKDvwM33nPx3p7fVc",
  "key16": "NL7ANcLAUHMJ8uTwHCkS3BWNpCTV7897F3EPuQjXnTiJzC7KMJupegBRvYacYoAriLtZ4scfBrQ6KopQpQirPWJ",
  "key17": "38nK53quFUfFoTac1Fyixn3RViLPjLdfZd2d8HEQq3sqMGDzkAVUk1rJ3g6pYZcsoUsP4uHj55EUowwbCbq3VYsy",
  "key18": "4UD9FRwRjLmzA8MpP68HfDhnay1u5xxu4URfgBUWX2UvLyjdqvB8ZFXttq8YT27qriTmJqd7Cq4vCNGo6CgXLMeU",
  "key19": "5pmTw27PT8zDHyfoiQqDFgKnpArZDPEoVsuAzq4oLecQkg5DuGq9zJufv2WgFHXS6T9zMXxCyJitPb9PnJj1iHFC",
  "key20": "3TWJ8CTCPDSWitknhKhnD3QnXipkYbjuX7fdPpGtSVXjCqwY2ABNuDHX6e17v7KgofHugut7DnvYHytrUTuwqzZk",
  "key21": "3wzL3UaSxLwcwqQcG8p2txf3935zxJ8BZoNHv9EpLzfYXG94HN8mZLXo4KLgqrk9w8zkZhH5LQESBGdTrWWt1HXK",
  "key22": "2xLkkD6gxu136gNgk57Utu4xa8hZ2r9JsbkX5nwg5y6DBpESyRGnfiFYfRuKfWvhPcYwBKVWZbi2uT6Z7xo4Ebkm",
  "key23": "2L21YWt865KkZePNmCKT9WuxudytJq5uZ34utQGVVKbjzXTU4nue8hozBZZwT9iMrzEpMFFthij6uJ9vzan9SPn9",
  "key24": "2uDFUkG79TVpvznDYMPKgKppAGfx4WVeD1BhiT4AvYNqHHBQRRvGNgmo73XrPZvrCozJR8DAJWXXkftYAVUifFxB",
  "key25": "5XEerBhzzmzQA8fPEJLEjrev93uGGg2p4dX4AkHWbwRofReEHMWJBM8snjjUmci6q9pcBtvLNHFrvvynK7Yxp3ZP",
  "key26": "5mRMk2fnsAMxoStUc7ApNXxsYnEhcwxFRiY4yik2toxhLt5cPC8FMuf8enAznuXmk1Q3hRUE7C9Xgo72C36KLdLR",
  "key27": "4tESJ95g3YiqKVp19L6F6gvtpFggfk4pva23uePkk5cy7cE6BH5CnW2uh6FP6GKtmwaU41U8x3R1pqD2nz2xV2Hw",
  "key28": "5L8z2NyCLxZ3jVRJrbUkhm4M8YwjkvumEFVysyKGD9eZNtbj9nfkCEGk85SDsWRTegKtWZuuYjrQZDxv5pDkha6E",
  "key29": "5uHu7vmKQkEufgnMvVTvzJb7EX5sBBtNsq1QDAKYEEiEdwBdghPdk9vBEUuLomUEnxJBmkzqkgCQmELqxHTzwar1",
  "key30": "4XmSDBb7AdojVokuM9urdvAgnKDqHV1WcG44341F3eGDgb7nwyzPC8VfdPvSWATd65bXqhUct5atL6FAaG8mY5VV",
  "key31": "2GSQkfPthJRqiM4bdWcaoWdCvSJsjoNdRbVEdGALJREuhJvRKX6SJ5dbrn99qE988xg35GM17bRu7DtnVNEmFesh",
  "key32": "5p1kzoyAqAeBMXpPgbVYEyz99C9Vt4GjxbMtanu7kMfAXtafZvzRtCSD7ebJTkp8dj7Sav2QFgEJsxi9jsubJrYC",
  "key33": "Ehdo4a7RSpJZ8gXx5jQaG8rFb7LmatRxB2jxC4MxV32pYTMa4fg2aZeHWs4DoLEssuE9LW5fYu2hJHCnd5cv8r6",
  "key34": "PPPNXaEr8ER8K8BU1FrrRXx3UKJCSkQpixS8pRmykRq4h9uMUAXeBSMQ7kzCxrtwXujXFupTfd36Wk1SoSFx8yC",
  "key35": "3DodKBgwx3w325YuzJTHsHhiVaFDkVisAAMSmEmDY9o3DfBDqNpzxFrnPQ7sZ2o7xBpK6P9xRir52dKMwzzUjt4i",
  "key36": "5LHFzU4uD57eDrWjzKuxFi14BXvDMgoADcS2UTfovZNCwFNrDhwQneh6RRSyjAmD97HB8bJvXgTcLuXsifmZHB6u"
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
